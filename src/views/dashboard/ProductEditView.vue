<template>
<div class="d-flex">
  <div class="p-2 flex-shrink-0 flex-column text-white" style="width: 17.5em; height:100vh;background-color: #41774A;">
    <div class="d-md-flex align-content-center">
      <img src="../../assets/img/logo.png" style="height: 7.5em;" alt="">
    </div>
      <ul class="nav flex-column">
        <li class="nav-item"><RouterLink class="nav-link text-white" 
          to="/admin/products">產品管理列表</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link text-white" 
          to="/admin/order">購物車管理列表</RouterLink></li>
      </ul>
</div>
  <hr>
<div class="p-2 mt-4 mx-3 w-100">
 <div>
    <div class="modal-dialog modal-xl">
      <h4>編輯產品</h4>
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="addNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
                 <div class="mb-3">
                    <label for="imageUrl" class="form-label">主要圖片</label>
                    <input id="imageUrl" v-model.lazy="newProduct.imageUrl" type="text" class="form-control mb-2" placeholder="請輸入主要圖片連結">
                    <img style="max-width: 280px; max-height: 280px;" class="img-fluid" :src="newProduct.imageUrl">
                </div>
              <hr>
              <div v-if="Array.isArray(newProduct.imagesUrl)">
                <div class="mb-1" v-for="(img, index) in newProduct.imagesUrl" :key="index">
                  <div class="mb-3">
                    <label :for="'imagesUrl' + index" class="form-label">圖片網址</label>
                    <input :id="'imagesUrl' + index" v-model.lazy="newProduct.imagesUrl[index]" type="text" class="form-control"
                      placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="img">
                </div>
                <div >
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="newProduct.imagesUrl.push('')">
                    新增其他圖片
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-danger btn-sm d-block w-100" @click="newProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImagesUrl">
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" v-model="newProduct.title" type="text" class="form-control" placeholder="請輸入標題">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" v-model="newProduct.category" type="text" class="form-control"
                    placeholder="請輸入分類">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">單位</label>
                  <input id="unit" v-model="newProduct.unit" type="text" class="form-control" placeholder="請輸入單位">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" v-model.number="newProduct.origin_price" type="number" min="0"
                    class="form-control" placeholder="請輸入原價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" v-model.number="newProduct.price" type="number" min="0" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" v-model="newProduct.description" type="text" class="form-control"
                  placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="content" v-model="newProduct.content" type="text" class="form-control"
                  placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" v-model="newProduct.is_enabled" class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <span v-if="addNew">
            <button type="button" class="btn btn-primary" @click="addNewProduct">
              確認
            </button> 
          </span>
          <span v-else>
            <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>

  </div>
</div>  
</template>


<script>
import axios from 'axios'
import 'bootstrap/scss/bootstrap.scss'
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const { VITE_URL , VITE_PATH } = import.meta.env

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//const id = this.$route.params.id

export default {

  data () {
    return {
      temp: {},
      addNew: false,
      newProduct :{
         is_enabled: 1,
         imageUrl: "",
         imagesUrl: [
         "",
         ],
      },
    }
  },
  created () {
    this.checkLogin()
    this.getProduct()

    const productData = this.$route.query.product //經由route傳遞product資料
    const product = JSON.parse(productData)
    this.newProduct = { ...product }   
  },

  methods: {

    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/, "$1")
      axios.defaults.headers.common['Authorization'] = token    // 取得 Token（Token 僅需要設定一次）
      if (this.$route.path.includes('/admin')) { // 只要是在admin_products頁面，就執行大括號內的程式碼     
        axios.post(`${VITE_URL}/v2/api/user/check`, {}, { headers: { Authorization: token } })
          .then(() => {
          })
          .catch(() => {
            alert('尚未登入會員，請重新登入！')
            this.$router.push('login') // 跳轉到login頁面
          })
        // eslint-disable-next-line no-empty
      } else {

      }
    },
    getProduct () {
      // eslint-disable-next-line no-undef
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products`)
        .then((res) => {
          console.log(res)
          //this.newProduct = res.data.product
          //this.pages = res.data.pagination
        })
        .catch((error) => {
          alert(error)
        })
     },
     addNewProduct () {
      // eslint-disable-next-line no-undef
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product`, { data: this.newProduct } )
        .then((res) => {
          alert(res.data.message)
          this.$router.push(`/admin/products`)
          //console.log(this.newProduct)
        })
        .catch((error) => {
          alert(error)
        })
     },
     updateProduct () {
      // eslint-disable-next-line no-undef
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`, { data: this.newProduct } )
        .then((res) => {
          alert(res.data.message)
          console.log('更新產品成功')
          //console.log(this.newProduct)
        })
        .catch((error) => {
          alert(error)
        })
     }
  }

}
</script>
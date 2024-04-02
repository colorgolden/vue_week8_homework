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
<div class="p-2 mt-4 mx-3 w-100">
  <h4>產品管理頁面</h4>
  <div class="d-flex justify-content-end w-100 pe-4">
    <RouterLink  
          to="/admin/edit-product">新建產品</RouterLink>
    <a href="/admin/edit-product">
      <i class="bi bi-file-earmark-plus fa-10x"></i>
    </a>
  </div>
  <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody
        v-for="product in products"
        :key="product.id"
      >
        <tr>
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">
            {{ product.origin_price }}
          </td>
          <td class="text-end">
            {{ product.price }}
          </td>
          <td>
            <span v-if="product.is_enabled===1" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" @click="editProduct(product)"
              style=" background-color: #41774A;" class="btn btn-primary btn-sm">
                編輯
              </button>
              <button type="button" @click="delProduct(product.id)" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
              </td>
        </tr>
      </tbody>
    </table>
    <div class="">
        <nav aria-label="...">
          <ul class="justify-content-center pagination pagination-sm">
            <li class="page-item" :class="{ active:page === pages.current_page }" 
                v-for="page in pages.total_pages" :key="page + 123">
              <a class="page-link" @click.prevent="getProducts(page)" href="#" tabindex="-1">{{ page }}</a>
            </li>
          </ul>
        </nav>
      </div>
  </div>
</div>  
</template>

<script>
import axios from 'axios'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../../../node_modules/bootstrap/scss/bootstrap.scss"


const { VITE_URL, VITE_PATH } = import.meta.env

export default {

  data () {
    return {
      tempProduct: {},
      products: [],
      pages: {},
    }
  },
  created () {
    this.checkLogin()
    this.getProducts()
  },

  methods: {

    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/, "$1")
      axios.defaults.headers.common['Authorization'] = token    // 取得 Token（Token 僅需要設定一次）
      if (this.$route.path.includes('/admin')) {                // 只要是在admin_products頁面，就執行大括號內的程式碼     
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
    getProducts (page = 1) {
      console.log(this.$route)
      // eslint-disable-next-line no-undef
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
        })
        .catch((error) => {
          alert(error)
        })
    },
    delProduct (id) {
      console.log(this.$route)
      // eslint-disable-next-line no-undef
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`)
        .then((res) => {
          alert(res.data.message)
          this.getProducts()
        })
        .catch((error) => {
          alert(error)
        })
    },
    editProduct(product) {
    this.$router.push({ 
      path: 'edit-product', 
      query: { product: JSON.stringify(product) } 
    });
  }
  },
  // eslint-disable-next-line vue/order-in-components
  components: {
  },

}
</script>

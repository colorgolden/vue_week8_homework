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
    <h4>購物車管理頁面</h4>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">
              訂購人姓名
            </th>
            <th>備註</th>
            <th width="120">
              電話
            </th>
            <th width="120">
              電子信箱
            </th>
            <th width="100">
              詳細資料
            </th>
          </tr>
        </thead>
        <tbody
          v-for="(item) in carts"
          :key="item.id"
        >
          <tr>
            <td>{{ item.user.name }}</td>
            <td>{{ item.user.address }}</td>
            <td class="text-end">
              {{ item.user.tel }}
            </td>
            <td class="text-end">
              {{ item.user.email }}
            </td>
            <td>
              <button style="background-color: #41774A;" type="button" class="btn btn-primary">詳細</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="">
        <nav aria-label="...">
          <ul class="justify-content-center pagination pagination-sm">
            <li class="page-item" :class="{ active:page === pages.current_page }" 
                v-for="page in pages.total_pages" :key="page + 123">
              <a class="page-link" @click.prevent="getCarts(page)" href="#" tabindex="-1">{{ page }}</a>
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
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const { VITE_URL , VITE_PATH } = import.meta.env

export default {

  data () {
    return {
      temp: {},
      carts: [],
      pages: {},
    }
  },
  created () {
    this.checkLogin()
    this.getCarts()
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
            this.$router.push('/admin') // 跳轉到login頁面
          })
        // eslint-disable-next-line no-empty
      } else {

      }
    },
    getCarts (page = 1) {
      console.log(this.$route)
      // eslint-disable-next-line no-undef
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          console.log('res',res)
          this.carts = res.data.orders
          this.pages = res.data.pagination
        })
        .catch((error) => {
          alert(error)
        })
     }
  },
  // eslint-disable-next-line vue/order-in-components

}
</script>

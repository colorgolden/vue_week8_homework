<template>
  <div class="position-relative" style="min-height: 400px;">
        <!-- <img class="background-position: center center;" src="../assets/img/banner/glamp3.png" alt=""> -->
      <div class="position-absolute"
        style="top:0; bottom: 0; left: 0; right: 0; background-position: center center;">
      </div>
      <img class="w-100" src="../assets/img/banner/glamp3.png" alt="">
  </div>
  <div class="container">
    <div class="row">
        <div class="col-md-3 mt-5">
          <div class="card-body py-0">
            <ul class="list-unstyled">
              <li class="py-2 d-block text-muted mb-3">
                <RouterLink :to="`/products`" style="color: #717171;">全部行程</RouterLink>
              </li>
              <li class="py-2 d-block text-muted mb-3" v-for="item in categories" :key="item">
                <RouterLink :to="`/products?category=${item}`" style="color: #717171;">{{ item }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
              <div class="col-md-4 mr-1 mb-2 mt-5 card border-0 position-relative" v-for="product in products" :key="product.id">
                <div class="card" style=" border-radius: 1.25em; height:24em; width: 17rem;">
                  <Router-link :to="`/products/${product.id}`"><img :src="product.imageUrl" class="card-img-top rounded-50 object-fit-cover"
                    style="border-radius: 1.25em 1.25em 0em 0em; height:15em; object-fit: cover;" alt="..."></Router-link>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <span>
                      <p>{{ product.category }}</p>
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//import "../assets/main.css";

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      categories: ["兩日套裝行程", "單日行程", "特別活動"],
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  watch:{
    '$route.query':{
      handler() {
        this.getProducts()
      },
      deep:true,   //深層監聽
    }
  },
  methods: {

    getProducts() {
      // eslint-disable-next-line no-undef
      const { category= '' }= this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  }
}
</script>

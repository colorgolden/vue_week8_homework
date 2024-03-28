<template>
    <div class="container">
      <div class="row align-items-center">
          <div class="col-md-7">
            <h2>森心靈課程</h2>
            <img class="img-fluid object-fit-cover w-100 mb-2" style="height:32.5em; width: 47.5em;" :src="product.imageUrl" alt=""> 
          </div>
                <div class="col-md-5">
                    <span><p>{{ product.category }}</p></span>
                    <h3>{{ product.title }}</h3>
                    <hr>
                    <p>{{ product.description }}</p>
                    <div>
                        <select v-model="person_qty" class="form-select" aria-label="Default select example">
                            <option selected>報名人數</option>
                            <option :value="item" v-for="(item, index) in 6" :key="index">
                                {{ item }} 位
                            </option>
                        </select>
                        <p>NT$ {{ product.price }}</p>
                            <div class="d-grid gap-2">
                            <button class="btn btn-primary" @click="addToCart"
                          style="background-color: #41774A;" type="button">立即預訂</button></div>
                    </div>
                  </div>    
            </div>
      </div>
      <div class="row justify-content-center border-top border-2 py-3">
        <div class="col-lg-6">
          <h3 class="fw-bold">活動內容</h3>
            <div class="swiper-container mt-4 mb-5">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="card border-0 mb-4 position-relative position-relative">
                  <div >
                    <img :src="product.imagesUrl" class="card-img-top rounded-0" alt="...">
                  </div>
                  <p class="mt-3">{{ product.content }}</p>
                </div>
              </div>
            </div>
        </div>  
      </div> 
    </div>   
</template>

<script>
import axios from 'axios'
//import { ref } from 'vue'

const { VITE_URL, VITE_PATH  } = import.meta.env
//const person_qty = ref(1)

export default {
  data() {
    return {
      product: [],
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      const id = this.$route.params.id
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          console.log(res)
        })
        .catch((error) => {
          alert(error)
        })
    },
    addToCart() {
      //console.log('this.qty',this.qty)
      const order = {
        product_id : this.product.id,
        qty: 1
        //qty : person_qty.value
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart/`, { data: order })
        .then(() => {
          console.log(1)
          this.$router.push('/checkout')
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted() {
    //console.log(this.$route)
  }
}
</script>

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
          <table class="w-100">
            <tbody>
              <tr><img :src="product.imagesUrl" style="height: 30em;"
                class="img-fluid object-fit-cover w-100" alt="..."></tr>
              <tr class="text-wrap">{{ product.content }}</tr>
            </tbody>
          </table>
      </div> 
    </div>   
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_PATH  } = import.meta.env

export default {
  data() {
    return {
      product: [],
      person_qty: 0
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
        })
        .catch((error) => {
          alert(error)
        })
    },
    addToCart() {
      const order = {
        product_id : this.product.id,
        qty: this.person_qty
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart/`, { data: order })
        .then(() => {
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

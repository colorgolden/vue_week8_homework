<template>
<div class="container">
      <div class="row justify-content-center">
        <h3 class="fw-bold mb-4 pt-3">結帳</h3>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-5">
          <div class="border p-4 mb-4">
            <div v-for="product in cart" :key="product.id" class="d-flex">
              <img :src="product.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100 pb-3">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ product.product.title }}</p>
                  <button type="button" @click="delOneCart(product.id)" class="btn-close" aria-label="Close"></button>
                </div>
                <p class="mb-0 fw-bold">人數：{{ product.qty }}位</p>
                <br>
                <p class="mb-0 text-end">NT$ {{ product.product.price }}</p>
                <span v-if="is_coupon == true">
                  <p class="mb-0 text-end "><del>小計 NT$ {{ product.total }}</del></p>
                  <p class="mb-0 text-end">小計 NT$ {{ Math.round(product.final_total) }}</p>   
                  <!-- Math.round()四捨五入掉小數點 -->
                </span>
                <span v-else>
                  <p class="mb-0 text-end">小計 NT$ {{ product.total }}</p>
                </span>
              </div>
            </div>
            <div class="p-3 d-flex justify-content-end">
              <button type="button" @click="delAllCarts" class="btn btn-danger ">清空購物車</button>
            </div>
            <table class="table mt-4 border-top text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-4 pb-4">線上付款</td>
                </tr> 
                <tr>
                <div class="input-group mb-3 w-100">  
                    <input type="text" class="form-control" v-model="coupon.code"
                    placeholder="請輸入折扣碼，按下「折抵」來使用" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" @click="useCoupon"
                    style="background-color: #F6F5EF; color: #41774A;" type="button">折抵</button>
                  </div>
                </div>
                </tr>
              </tbody>
            </table>
            <!-- <div class="input-group mb-3">
              <div class="w-100">
                <p class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</p>
                <p class="text-end border-0 px-0 pt-0 pb-4">線上付款</p>
              </div>
              <input type="text" class="form-control" v-model="coupon.code"
              placeholder="請輸入折扣碼，按下「折抵」來使用" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="useCoupon" style="background-color: #F6F5EF; color: #41774A;" type="button">折抵</button>
              </div>
            </div> -->
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總金額</p>
              <p class="mb-0 h4 fw-bold">NT$  {{ this.pay_total }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <VeeForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
            <p>聯絡資訊</p>
            <div class="mb-0">
                  <div class="mb-3">
                    <div class="mb-2">
                      <label for="name" class="form-label">姓名</label>
                       <VeeField id="name" name="姓名" type="text" class="form-control" 
                       placeholder="請輸入姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }"
                        v-model="form.user.name"></VeeField>
                      <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-2">
                      <label for="tel" class="form-label">電話</label>
                      <VeeField id="tel" name="電話" type="text" class="form-control" 
                       placeholder="請輸入電話" :class="{ 'is-invalid': errors['電話'] }"
                       rules="numeric|min:9" v-model="form.user.tel"></VeeField>  
                       <!-- 只能輸入數字＆最少輸入9個字元 -->
                     <error-message name="電話" class="invalid-feedback"></error-message>
                     </div>
                    <label for="ContactMail" class="text-muted mb-0">電子信箱</label>
                    <VeeField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                      placeholder="請輸入 Email" rules="email|required" v-model="form.user.email" />
                    <ErrorMessage name="email" class="invalid-feedback" />
                    <div class="mb-2">
                      <p class="mt-4">訂單備註</p>
                      <VeeField id="address" as="textarea" name="備註" type="text" class="form-control" 
                       placeholder="請輸入交通方式，或有其他想告訴我們的。 ：）" rows="3" rules="required" :class="{ 'is-invalid': errors['備註'] }"
                        v-model="form.user.address"></VeeField>
                      <error-message name="訂單備註" class="invalid-feedback"></error-message>
                    </div>
                  </div>
                  <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end">
                    <a href="./product.html" class="text-dark mt-md-0 mt-3"><i class="fas fa-chevron-left me-2"></i> 上一步</a>
                   <button class="btn btn-primary" style="background-color:#41774A" type="submit" 
                   @click.prevent="createOrder" to="./checkout-success.html">確認送出</button>
                   <!-- <a href="./checkout-success.html" class="btn btn-dark py-3 px-7">確認送出</a> -->
                  </div>
            </div>
          </VeeForm>

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
      is_coupon: false,
      pay_total: 0,
      coupon:  { 
         code: ""
      },
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      }
    }
  },
  created() {
    this.getCart()
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

    getCart() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {   
          this.cart = res.data.data.carts
          //console.log(this.cart)
          this.pay_total = 0
          this.cart.forEach((item) => {                                   //這行必須用箭頭函式，才能正確指向this.pay_total這個變數
            this.pay_total += Math.round(parseInt(item.final_total))      //加總所有項目的總金額
          })
        })
        .catch((error) => {
          console.dir(error)       
        })
    },
    createOrder() {
      const order = this.form
      axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: order }).then((res) => {
        console.log(res)
        this.$router.push(`checkout-success`)
        //this.$router.push(`/checkout/${res.data.orderId}`)
        this.$refs.form.resetForm()
      }).catch((err) => {
        alert(err.response.data.message)
      });
    },
    useCoupon() {
      //console.log(this.coupon)
      axios.post(`${VITE_URL}/api/${VITE_PATH}/coupon`, { data: this.coupon })
      .then(() => {
        this.is_coupon = true
        this.getCart()
      }).catch((err) => {
        alert(err)
      });
    },
    delOneCart(id) {
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
      .then(() => {
        alert('成功刪除品項')
        this.getCart()
      }).catch((err) => {
        alert('沒有刪除品項，請再試一次')
        console.log(err.message)
      });
    },
    delAllCarts() {
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
      .then(() => {
        alert('成功清空購物車')
        this.$router.push(`products`)
      }).catch((err) => {
        alert('操作有誤，若無法直接下訂請聯繫我們')
        console.log(err.message)
      });
    },
  }
}
</script>


<style scoped>
</style>

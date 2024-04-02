<template>
  <div class="position-relative" style="min-height: 400px;">
      <div class="position-absolute"
        style="top:0; bottom: 0; left: 0; right: 0; 
        background-image: url('https://images.unsplash.com/photo-1474992592323-229f1837e44f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); 
        background-position: center center;">
      </div>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="col-md-6">
      <div class="mt-5">
        <h2 class="text-center my-5" style="color: #41774A;">Q & A</h2>
          <div class="d-grid gap-2">
            <button class="btn btn-primary rounded-pill" @click="toggleCollapse(1)" 
            type="button" style="background-color: #F6F5EF; color: #545454;"
            data-toggle="collapse" data-target="#collapseExample-1" 
            aria-expanded="false" aria-controls="collapseExample">
            <h5>Q1. 已經報名行程了是否能夠取消？</h5>
            </button>
          </div>
        <div class="collapse" id="collapseExample-1" :class="{ 'show': isCollapsed1 }">
          <div class="card card-body border-0">
            活動開始前的30天提前告知，都能夠全額退費做取消。若活動前的14~30天內取消，則酌收取30%的手續費。7~14天則酌收50%的手續費，活動的前7天內則不能取消行程。
          </div>
        </div>
      </div>
      <div class="mt-5">
          <div class="d-grid gap-2">
            <button class="btn btn-primary rounded-pill" type="button" @click="toggleCollapse(2)"
            style="background-color: #F6F5EF; color: #545454;"
            data-toggle="collapse show" data-target="#collapse-2" 
            aria-expanded="false" aria-controls="collapseExample">
            <h5>Q2. 戶外體驗行程活動如果遇到天氣不佳？</h5>
            </button>
          </div>
        <div class="collapse" id="collapseExample-2" :class="{ 'show': isCollapsed2 }">
          <div class="card card-body border-0">
            若是一日行程、兩日套裝行程，當天遇上天候不佳等情況，會將舉辦地點改為室內活動(教學內容不變)。若遇上颱風、天然災害等不可抗力因素，將會提前1~2天提前告知，再另外安排行程的日期。
          </div>
        </div>
      </div>
      <div class="mt-5">
          <div class="d-grid gap-2" @click="toggleCollapse(3)">
            <button class="btn btn-primary rounded-pill" type="button"
            style="background-color: #F6F5EF; color: #545454;"
            data-toggle="collapse" data-target="#collapse-1" 
            aria-expanded="false" aria-controls="collapseExample">
            <h5>Q3. 若一次報名人數超過6人該如何預定行程？</h5>
            </button>
          </div>
        <div class="collapse" id="collapseExample-3"  :class="{ 'show': isCollapsed3 }">
          <div class="card card-body border-0">
            請直接撥打我們的電話聯絡我們，電話：(049)6698-988。
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h2 class="text-center my-5" style="color: #41774A;">交通資訊</h2>
        <p>自行開車</p>
        <p>台6線下交流道後，左轉往信義路 開3公里左右 遇到7-11後右轉進和平路後，直走就能抵達森心靈</p>
        <br>
        <p>大眾運輸</p>
        <p>搭乘高鐵 -> 抵達台中烏日站 ->  轉搭公車9827 -> 到名間站小溪下車</p>
        <p>搭乘火車 -> 抵達台中火車站 ->  轉搭公車9827或1947 -> 到名間站小溪下車</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
  data() {
    return {
      isCollapsed1: false,
      isCollapsed2: false,
      isCollapsed3: false
    }
  },
  methods: {
    toggleCollapse(collapseNumber) {
      if (collapseNumber === 1) {
        this.isCollapsed1 = !this.isCollapsed1
      } else if (collapseNumber === 2) {
        this.isCollapsed2 = !this.isCollapsed2
      } else if (collapseNumber === 3) {
        this.isCollapsed3 = !this.isCollapsed3
      }
    }
  }
}
</script>

<style scoped>
</style>

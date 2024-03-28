import{a as i}from"./axios-Bo0ATomq.js";import{_ as g,c as o,a as t,b as c,w as r,F as f,f as x,r as h,o as n,d as _,t as a}from"./index-Chka-jMP.js";import{_ as k}from"./logo-DnAP6O0m.js";var v={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:w}=v,y={data(){return{temp:{},products:[],data_id:"",data_name:"",pages:{},newProduct:{is_enabled:1,imageUrl:"",imagesUrl:[""]}}},created(){this.checkLogin(),this.getProducts()},methods:{checkLogin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/,"$1");i.defaults.headers.common.Authorization=e,this.$route.path.includes("/admin")&&i.post(`${u}/v2/api/user/check`,{},{headers:{Authorization:e}}).then(()=>{}).catch(()=>{alert("尚未登入會員，請重新登入！"),this.$router.push("login")})},getProducts(){console.log(this.$route),i.get(`${u}/v2/api/${w}/admin/products`).then(e=>{console.log(e),this.products=e.data.products}).catch(e=>{alert(e)})}},components:{}},b={class:"d-flex"},$={class:"p-2 flex-shrink-0 flex-column text-white",style:{width:"17.5em",height:"100vh","background-color":"#41774A"}},V=t("div",{class:"d-md-flex align-content-center"},[t("img",{src:k,style:{height:"7.5em"},alt:""})],-1),E={class:"nav flex-column"},L={class:"nav-item"},P={class:"nav-item"},T={class:"p-2 mt-4 mx-3"},A=t("h4",null,"產品管理頁面",-1),R={class:"table mt-4 w-100"},U=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"100"}," 編輯產品 ")])],-1),B={class:"text-end"},D={class:"text-end"},I={key:0,class:"text-success"},S={key:1},N=t("td",null,[t("button",{style:{"background-color":"#41774A"},type:"button",class:"btn btn-primary"},"編輯")],-1);function z(e,C,F,H,l,p){const d=h("RouterLink"),m=h("pagination");return n(),o("div",b,[t("div",$,[V,t("ul",E,[t("li",L,[c(d,{class:"nav-link text-white",to:"/admin/products"},{default:r(()=>[_("產品管理列表")]),_:1})]),t("li",P,[c(d,{class:"nav-link text-white",to:"/admin/order"},{default:r(()=>[_("購物車管理列表")]),_:1})])])]),t("div",T,[A,t("table",R,[U,(n(!0),o(f,null,x(l.products,s=>(n(),o("tbody",{key:s.id},[t("tr",null,[t("td",null,a(s.category),1),t("td",null,a(s.title),1),t("td",B,a(s.origin_price),1),t("td",D,a(s.price),1),t("td",null,[s.is_enabled===1?(n(),o("span",I,"啟用")):(n(),o("span",S,"未啟用"))]),N])]))),128))]),c(m,{style:{display:"flex","justify-content":"center","align-items":"center"},pages:l.pages,"get-products":p.getProducts},null,8,["pages","get-products"])])])}const q=g(y,[["render",z]]);export{q as default};
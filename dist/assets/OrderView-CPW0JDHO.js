import{a}from"./axios-Bo0ATomq.js";import{_ as u,c as n,a as t,b as i,w as l,F as m,f as p,r as f,o as r,d,t as o}from"./index-ByCsoIct.js";import{_ as k}from"./logo-NwfGVZgV.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"/vue_week8_homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:v}=x,g={data(){return{temp:{},carts:[],pages:{}}},created(){this.checkLogin(),this.getCarts()},methods:{checkLogin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,this.$route.path.includes("/admin")&&a.post(`${h}/v2/api/user/check`,{},{headers:{Authorization:e}}).then(()=>{}).catch(()=>{alert("尚未登入會員，請重新登入！"),this.$router.push("/admin")})},getCarts(){console.log(this.$route),a.get(`${h}/v2/api/${v}/admin/orders`).then(e=>{console.log("res",e),this.carts=e.data.orders}).catch(e=>{alert(e)})}}},w={class:"d-flex"},$={class:"p-2 flex-shrink-0 flex-column text-white",style:{width:"17.5em",height:"100vh","background-color":"#41774A"}},b=t("div",{class:"d-md-flex align-content-center"},[t("img",{src:k,style:{height:"7.5em"},alt:""})],-1),V={class:"nav flex-column"},y={class:"nav-item"},E={class:"nav-item"},L={class:"p-2 mt-4 mx-3 w-100"},T=t("h4",null,"購物車管理頁面",-1),A={class:"table mt-4"},R=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 訂購人姓名 "),t("th",null,"備註"),t("th",{width:"120"}," 電話 "),t("th",{width:"120"}," 電子信箱 "),t("th",{width:"100"}," 詳細資料 ")])],-1),B={class:"text-end"},C={class:"text-end"},D=t("td",null,[t("button",{style:{"background-color":"#41774A"},type:"button",class:"btn btn-primary"},"詳細")],-1);function I(e,S,N,O,_,P){const c=f("RouterLink");return r(),n("div",w,[t("div",$,[b,t("ul",V,[t("li",y,[i(c,{class:"nav-link text-white",to:"/admin/products"},{default:l(()=>[d("產品管理列表")]),_:1})]),t("li",E,[i(c,{class:"nav-link text-white",to:"/admin/order"},{default:l(()=>[d("購物車管理列表")]),_:1})])])]),t("div",L,[T,t("table",A,[R,(r(!0),n(m,null,p(_.carts,s=>(r(),n("tbody",{key:s.id},[t("tr",null,[t("td",null,o(s.user.name),1),t("td",null,o(s.user.address),1),t("td",B,o(s.user.tel),1),t("td",C,o(s.user.email),1),D])]))),128))])])])}const H=u(g,[["render",I]]);export{H as default};
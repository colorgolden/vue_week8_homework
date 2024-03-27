import{a as c}from"./axios-Bo0ATomq.js";import{_ as m,c as s,a as t,F as r,f as g,b as l,r as i,o as n,t as a}from"./index-BHhkA8M0.js";var w={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"/vue_week8_homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:f}=w,k={data(){return{temp:{},products:[],data_id:"",data_name:"",pages:{},newProduct:{is_enabled:1,imageUrl:"",imagesUrl:[""]}}},created(){this.checkLogin(),this.getProducts()},methods:{checkLogin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)newToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=e,this.$route.path.includes("/admin")&&c.post(`${u}/v2/api/user/check`,{},{headers:{Authorization:e}}).then(()=>{}).catch(()=>{alert("尚未登入會員，請重新登入！"),this.$router.push("login")})},getProducts(){console.log(this.$route),c.get(`${u}/v2/api/${f}/admin/products`).then(e=>{console.log(e),this.products=e.data.products}).catch(e=>{alert(e)})}},components:{}},y=t("hr",null,null,-1),b={class:"container"},P=t("h4",null,"產品管理頁面",-1),$={class:"table mt-4"},v=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"100"}," 編輯產品 ")])],-1),E={class:"text-end"},V={class:"text-end"},T={key:0,class:"text-success"},A={key:1},L=t("td",null,[t("button",{style:{"background-color":"#41774A"},type:"button",class:"btn btn-primary"},"編輯")],-1);function U(e,x,I,R,d,p){const h=i("pagination"),_=i("product-modal");return n(),s(r,null,[y,t("div",b,[P,t("table",$,[v,(n(!0),s(r,null,g(d.products,o=>(n(),s("tbody",{key:o.id},[t("tr",null,[t("td",null,a(o.category),1),t("td",null,a(o.title),1),t("td",E,a(o.origin_price),1),t("td",V,a(o.price),1),t("td",null,[o.is_enabled===1?(n(),s("span",T,"啟用")):(n(),s("span",A,"未啟用"))]),L])]))),128))]),l(h,{style:{display:"flex","justify-content":"center","align-items":"center"},pages:d.pages,"get-products":p.getProducts},null,8,["pages","get-products"])]),l(_,{ref:"pdModal","add-new":e.addNew,"new-product":d.newProduct,"update-product":e.updateProduct,"add-new-product":e.addNewProduct,"add-images-url":e.addImagesUrl},null,8,["add-new","new-product","update-product","add-new-product","add-images-url"])],64)}const N=m(k,[["render",U]]);export{N as default};

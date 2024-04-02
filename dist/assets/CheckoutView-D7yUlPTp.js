import{a as h}from"./axios-Bo0ATomq.js";import{_ as w,c as u,a as e,F as V,f as g,b as a,w as y,r as n,o as f,t as d,n as i,d as k}from"./index-ByCsoIct.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"/vue_week8_homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:b}=E,T={data(){return{cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},created(){this.getCart()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getCart(){h.get(`${p}/v2/api/${b}/cart`).then(r=>{this.cart=r.data.data.carts,console.log("cart",this.cart)}).catch(r=>{alert(r.data.message)})},createOrder(){const r=this.form;h.post(`${p}/api/${b}/order`,{data:r}).then(s=>{console.log(s),this.$refs.form.resetForm()}).catch(s=>{alert(s.response.data.message)})}}},C={class:"container"},U=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"結帳")])],-1),F={class:"row flex-row-reverse justify-content-center pb-5"},j={class:"col-md-4"},N={class:"d-flex"},O=["src"],S={class:"w-100"},q={class:"d-flex justify-content-between"},R={class:"mb-0 fw-bold"},B={class:"mb-0"},D={class:"mb-0 fw-bold"},I={class:"table mt-4 border-top border-bottom text-muted"},L=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),M={class:"text-end border-0 px-0 pt-4"},P=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"線上付款")],-1),A={class:"d-flex justify-content-between mt-4"},H=e("p",{class:"mb-0 h4 fw-bold"},"總金額",-1),z={class:"mb-0 h4 fw-bold"},$={class:"col-md-6"},G=e("p",null,"聯絡資訊",-1),J={class:"mb-0"},K={class:"mb-3"},Q={class:"mb-2"},W=e("label",{for:"name",class:"form-label"},"姓名",-1),X={class:"mb-2"},Y=e("label",{for:"tel",class:"form-label"},"電話",-1),Z=e("label",{for:"ContactMail",class:"text-muted mb-0"},"電子信箱",-1),ee={class:"mb-2"},se=e("p",{class:"mt-4"},"訂單備註",-1),te={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end"},oe=e("a",{href:"./product.html",class:"text-dark mt-md-0 mt-3"},[e("i",{class:"fas fa-chevron-left me-2"}),k(" 上一步")],-1);function le(r,s,ae,re,o,m){const c=n("VeeField"),_=n("error-message"),v=n("ErrorMessage"),x=n("VeeForm");return f(),u("div",C,[U,e("div",F,[e("div",j,[(f(!0),u(V,null,g(o.cart,t=>(f(),u("div",{key:t,class:"border p-4 mb-4"},[e("div",N,[e("img",{src:t.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,O),e("div",S,[e("div",q,[e("p",R,d(t.product.title),1),e("p",B,"NT$ "+d(t.product.price),1)]),e("p",D,"人數："+d(t.qty)+"位",1)])]),e("table",I,[e("tbody",null,[e("tr",null,[L,e("td",M,"NT$ "+d(t.total),1)]),P])]),e("div",A,[H,e("p",z,"NT$ "+d(t.final_total),1)])]))),128))]),e("div",$,[a(x,{ref:"form",class:"col-md-6",onSubmit:m.createOrder},{default:y(({errors:t})=>[G,e("div",J,[e("div",K,[e("div",Q,[W,a(c,{id:"name",name:"姓名",type:"text",class:i(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.user.name=l)},null,8,["class","modelValue"]),a(_,{name:"姓名",class:"invalid-feedback"})]),e("div",X,[Y,a(c,{id:"tel",name:"電話",type:"text",class:i(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"numeric|min:9",modelValue:o.form.user.tel,"onUpdate:modelValue":s[1]||(s[1]=l=>o.form.user.tel=l)},null,8,["class","modelValue"]),a(_,{name:"電話",class:"invalid-feedback"})]),Z,a(c,{id:"email",name:"email",type:"email",class:i(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[2]||(s[2]=l=>o.form.user.email=l)},null,8,["class","modelValue"]),a(v,{name:"email",class:"invalid-feedback"}),e("div",ee,[se,a(c,{id:"address",name:"備註",type:"text",class:i(["form-control",{"is-invalid":t.備註}]),placeholder:"請輸入交通方式，以及個人特殊需求",rows:"3",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>o.form.user.address=l)},null,8,["class","modelValue"]),a(_,{name:"訂單備註",class:"invalid-feedback"})])]),e("div",te,[oe,e("button",{type:"submit",onClick:s[4]||(s[4]=(...l)=>m.createOrder&&m.createOrder(...l)),to:"./checkout-success.html"},"確認送出")])])]),_:1},8,["onSubmit"])])])])}const ne=w(T,[["render",le]]);export{ne as default};

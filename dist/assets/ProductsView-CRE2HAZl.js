import{a as g}from"./axios-Bo0ATomq.js";import{_ as y,c as s,a as t,b as c,w as a,F as i,f as u,r as m,o,d as p,t as d}from"./index-Chka-jMP.js";var v={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:b}=v,k={data(){return{categories:["兩日套裝行程","單日行程","特別活動"],products:[]}},created(){this.getProducts()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getProducts(){const{category:l=""}=this.$route.query;g.get(`${f}/v2/api/${b}/products?category=${l}`).then(r=>{this.products=r.data.products}).catch(r=>{alert(r.data.message)})}}},x=t("div",{class:"position-relative",style:{"min-height":"400px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url('src/assets/img/banner/glamp3.png')","background-position":"center center"}})],-1),R={class:"container"},V={class:"row"},$={class:"col-md-3 mt-5"},E={class:"card-body py-0"},w={class:"list-unstyled"},P={class:"py-2 d-block text-muted mb-3"},T={class:"col-md-9"},L={class:"row"},B={class:"card",style:{"border-radius":"1.25em",height:"22em",width:"17rem"}},D=["src"],I={class:"card-body"},S={class:"card-title"};function U(l,r,A,N,n,j){const _=m("RouterLink"),h=m("Router-link");return o(),s(i,null,[x,t("div",R,[t("div",V,[t("div",$,[t("div",E,[t("ul",w,[t("li",P,[c(_,{to:"/products",style:{color:"#717171"}},{default:a(()=>[p("全部行程")]),_:1})]),(o(!0),s(i,null,u(n.categories,e=>(o(),s("li",{class:"py-2 d-block text-muted mb-3",key:e},[c(_,{to:`/products?category=${e}`,style:{color:"#717171"}},{default:a(()=>[p(d(e),1)]),_:2},1032,["to"])]))),128))])])]),t("div",T,[t("div",L,[(o(!0),s(i,null,u(n.products,e=>(o(),s("div",{class:"col-md-4 mr-1 mb-2 mt-5 card border-0 position-relative",key:e.id},[t("div",B,[c(h,{to:`/product/${e.id}`},{default:a(()=>[t("img",{src:e.imageUrl,class:"card-img-top rounded-50 object-fit-cover",style:{"border-radius":"1.25em",height:"15em","object-fit":"cover"},alt:"..."},null,8,D)]),_:2},1032,["to"]),t("div",I,[t("h5",S,d(e.title),1),t("span",null,[t("p",null,d(e.category),1)])])])]))),128))])])])])],64)}const F=y(k,[["render",U]]);export{F as default};

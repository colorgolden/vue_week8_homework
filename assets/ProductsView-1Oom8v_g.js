import{a as g}from"./axios-Bo0ATomq.js";import{_ as y,c as s,a as t,b as r,w as a,F as i,f as u,r as m,o,d as p,t as d}from"./index-C5syd5Ni.js";const v="//assets/glamp3-kdQtgnPz.png";var f={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:k}=f,x={data(){return{categories:["兩日套裝行程","單日行程","特別活動"],products:[]}},created(){this.getProducts()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getProducts(){const{category:l=""}=this.$route.query;g.get(`${b}/v2/api/${k}/products?category=${l}`).then(c=>{this.products=c.data.products}).catch(c=>{alert(c.data.message)})}}},R=t("div",{class:"position-relative",style:{"min-height":"400px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-position":"center center"}}),t("img",{class:"w-100",src:v,alt:""})],-1),V={class:"container"},$={class:"row"},w={class:"col-md-3 mt-5"},E={class:"card-body py-0"},P={class:"list-unstyled"},T={class:"py-2 d-block text-muted mb-3"},L={class:"col-md-9"},B={class:"row"},D={class:"card",style:{"border-radius":"1.25em",height:"24em",width:"17rem"}},I=["src"],S={class:"card-body"},U={class:"card-title"};function A(l,c,N,j,n,q){const _=m("RouterLink"),h=m("Router-link");return o(),s(i,null,[R,t("div",V,[t("div",$,[t("div",w,[t("div",E,[t("ul",P,[t("li",T,[r(_,{to:"/products",style:{color:"#717171"}},{default:a(()=>[p("全部行程")]),_:1})]),(o(!0),s(i,null,u(n.categories,e=>(o(),s("li",{class:"py-2 d-block text-muted mb-3",key:e},[r(_,{to:`/products?category=${e}`,style:{color:"#717171"}},{default:a(()=>[p(d(e),1)]),_:2},1032,["to"])]))),128))])])]),t("div",L,[t("div",B,[(o(!0),s(i,null,u(n.products,e=>(o(),s("div",{class:"col-md-4 mr-1 mb-2 mt-5 card border-0 position-relative",key:e.id},[t("div",D,[r(h,{to:`/products/${e.id}`},{default:a(()=>[t("img",{src:e.imageUrl,class:"card-img-top rounded-50 object-fit-cover",style:{"border-radius":"1.25em 1.25em 0em 0em",height:"15em","object-fit":"cover"},alt:"..."},null,8,I)]),_:2},1032,["to"]),t("div",S,[t("h5",U,d(e.title),1),t("span",null,[t("p",null,d(e.category),1)])])])]))),128))])])])])],64)}const H=y(x,[["render",A]]);export{H as default};

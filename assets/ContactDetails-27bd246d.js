import{_,o as d,c as h,a as t,f as r,t as o,w as g,v,b as w,g as m,k as b,r as l,d as u,e as y}from"./index-7a2e304f.js";const k={data(){return{user:null,transaction:{toId:this.contact._id,to:this.contact.name,at:Date.now(),amount:1}}},props:{contact:{type:Object,requred:!0}},created(){this.user=this.$store.getters.user},methods:{async onFund(){this.transaction.amount>this.user.balance||(await this.$store.dispatch({type:"setTransaction",transaction:this.transaction}),this.user=this.$store.getters.user)}}},x={key:0,class:"transfer-funds"},F=t("img",{src:"https://cdn-icons-png.flaticon.com/512/991/991959.png",alt:"bitcoin"},null,-1),T={class:"amount-line"},$=t("h4",null,"Transfer",-1),C=t("img",{src:"https://cdn-icons-png.flaticon.com/512/991/991959.png",alt:"bitcoin"},null,-1);function D(c,s,i,p,n,a){return n.user?(d(),h("div",x,[t("h4",null,[r("Your balance: "+o(n.user.balance)+" ",1),F]),t("form",{onSubmit:s[1]||(s[1]=w((...e)=>a.onFund&&a.onFund(...e),["prevent"]))},[t("div",T,[$,g(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.transaction.amount=e),type:"number"},null,512),[[v,n.transaction.amount,void 0,{number:!0}]]),C]),t("button",null,"Fund "+o(i.contact.name),1)],32)])):m("",!0)}const V=_(k,[["render",D]]);const B={data(){return{contact:null}},async created(){const c=this.$route.params.id;this.contact=await b.getContactById(c)},components:{TransferFunds:V}},N={key:0,class:"box-display"},I=["src"],S={class:"contact-info"},L=t("img",{src:"https://www.svgrepo.com/show/491226/email.svg",alt:"email"},null,-1),M={class:"contact-info"},R=t("img",{src:"https://www.svgrepo.com/show/511098/phone.svg",alt:"phone"},null,-1),j=t("button",{class:"back-button"},[t("img",{src:"https://www.svgrepo.com/show/348038/back-left.svg",alt:"back"})],-1);function q(c,s,i,p,n,a){const e=l("TransferFunds"),f=l("RouterLink");return n.contact?(d(),h("article",N,[t("img",{class:"contact-img",src:`https://robohash.org/${n.contact.name}.png`,alt:"user-image"},null,8,I),t("h2",null,o(n.contact.name),1),t("div",S,[L,r(o(n.contact.email),1)]),t("div",M,[R,r(o(n.contact.phone),1)]),u(e,{class:"transfer-cmp",contact:n.contact},null,8,["contact"]),u(f,{to:"/contact"},{default:y(()=>[j]),_:1})])):m("",!0)}const O=_(B,[["render",q]]);export{O as default};

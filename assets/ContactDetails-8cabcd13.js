import{_ as f,r as _,o as c,c as a,a as t,t as e,w,v as b,b as p,g as h,d,e as g,f as m,F as k,k as y}from"./index-ebe9fc64.js";const x={data(){return{user:null,transaction:{toId:this.contact._id,to:this.contact.name,at:Date.now(),amount:1},showMsg:!1}},props:{contact:{type:Object,requred:!0}},created(){this.user=this.$store.getters.user},methods:{async onFund(){this.transaction.amount>this.user.balance||(await this.$store.dispatch({type:"setTransaction",transaction:this.transaction}),this.user=this.$store.getters.user,this.showMsg=!0)}}},F={key:0,class:"transfer-funds"},T={class:"amount-line"},C=t("h4",null,"Transfer ₿",-1),M={key:1,class:"thanks-msg"},D=t("h2",null,"Thank You!",-1);function V(r,s,i,v,n,u){const l=_("RouterLink");return c(),a(k,null,[n.user?(c(),a("div",F,[t("h4",null,"Your balance is: ₿"+e(n.user.balance),1),t("form",{onSubmit:s[1]||(s[1]=p((...o)=>u.onFund&&u.onFund(...o),["prevent"]))},[t("div",T,[C,w(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>n.transaction.amount=o),type:"number"},null,512),[[b,n.transaction.amount,void 0,{number:!0}]])]),t("button",null,"Fund "+e(i.contact.name),1)],32)])):h("",!0),n.showMsg?(c(),a("div",M,[D,t("h3",null,e(i.contact.name)+" received your generous gift (₿"+e(n.transaction.amount)+")!",1),d(l,{onClick:s[2]||(s[2]=p(o=>n.showMsg===!1,["stop"])),to:"/contact"},{default:g(()=>[m("Continue")]),_:1})])):h("",!0)],64)}const B=f(x,[["render",V]]);const L={data(){return{contact:null}},async created(){const r=this.$route.params.id;this.contact=await y.getContactById(r)},components:{TransferFunds:B}},N={key:0,class:"box-display"},R=["src"],$={class:"contact-info"},I=t("img",{src:"https://www.svgrepo.com/show/491226/email.svg",alt:"email"},null,-1),S={class:"contact-info"},Y=t("img",{src:"https://www.svgrepo.com/show/511098/phone.svg",alt:"phone"},null,-1),j=t("button",{class:"back-button"},[t("img",{src:"https://www.svgrepo.com/show/348038/back-left.svg",alt:"back"})],-1);function q(r,s,i,v,n,u){const l=_("TransferFunds"),o=_("RouterLink");return n.contact?(c(),a("article",N,[t("img",{class:"contact-img",src:`https://robohash.org/${n.contact.name}.png`,alt:"user-image"},null,8,R),t("h2",null,e(n.contact.name),1),t("div",$,[I,m(e(n.contact.email),1)]),t("div",S,[Y,m(e(n.contact.phone),1)]),d(l,{class:"transfer-cmp",contact:n.contact},null,8,["contact"]),d(o,{to:"/contact"},{default:g(()=>[j]),_:1})])):h("",!0)}const O=f(L,[["render",q]]);export{O as default};

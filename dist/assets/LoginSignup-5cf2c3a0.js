import{_ as u,u as a,r as c,o as l,c as p,a as t,w as d,v as m,b as _,d as h,e as g}from"./index-a46c7c35.js";const f={data(){return{user:{name:""}}},methods:{async onLogin(){const s=await a.getUser(this.user.name);if(s)this.$store.dispatch({type:"loginUser",user:s});else{const e=a.getEmptyUser();e.name=this.user.name,this.$store.dispatch({type:"signupUser",user:e})}this.$router.push("/")}}},L={class:"box-display"},b=t("h2",null,"Let's go!",-1),x=t("button",null," Login ",-1),y=t("button",{class:"back-button"}," Not today.. ",-1);function U(s,e,v,w,n,r){const i=c("RouterLink");return l(),p("main",L,[b,t("form",{onSubmit:e[1]||(e[1]=_((...o)=>r.onLogin&&r.onLogin(...o),["prevent"]))},[d(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.user.name=o),type:"text",placeholder:"Your name"},null,512),[[m,n.user.name]]),x],32),h(i,{to:"/"},{default:g(()=>[y]),_:1})])}const B=u(f,[["render",U]]);export{B as default};
import{c as a}from"./contactService-58d3a200.js";import{_ as s,r,o as l,c as i,a as e,t as c,e as u,w as _,g as p}from"./index-26526b6e.js";const m={data(){return{contact:null}},async created(){const o=this.$route.params.id;this.contact=await a.getContactById(o)}},d={key:0,class:"contact-details"},h=e("button",null,"Back",-1);function f(o,k,B,C,t,x){const n=r("RouterLink");return t.contact?(l(),i("article",d,[e("h2",null,c(t.contact.name),1),e("h3",null,c(t.contact.email),1),e("h3",null,c(t.contact.phone),1),u(n,{to:"/contact"},{default:_(()=>[h]),_:1})])):p("",!0)}const w=s(m,[["render",f]]);export{w as default};

import{_ as p,o as r,c as d,a,t as y,r as l,b as C,w as m,d as x,F as v,T as $,e as _,f as B,v as F,g as R}from"./index-5b3740e9.js";import{c as h}from"./contactService-7ea089bd.js";import"./async-storage.service-0d30ae0c.js";const k={props:{contact:{type:Object,required:!0}}},w={class:"contact-preview"};function L(t,e,o,f,i,n){return r(),d("div",w,[a("h2",null,y(o.contact.name),1)])}const g=p(k,[["render",L]]);const S={props:{contacts:{type:Array,required:!0}},methods:{onRemoveContact(t){this.$emit("remove",t)}},components:{ContactPreview:g}},b={class:"action"},V=a("button",null,"Details",-1),D=a("button",null,"Edit",-1),E=["onClick"];function N(t,e,o,f,i,n){const c=l("ContactPreview"),u=l("RouterLink");return r(),C($,{name:"list",tag:"ul",class:"contact-list-ul"},{default:m(()=>[(r(!0),d(v,null,x(o.contacts,s=>(r(),d("li",{class:"contact-list",key:s._id},[_(c,{contact:s},null,8,["contact"]),a("section",b,[_(u,{to:`/contact/${s._id}`},{default:m(()=>[V]),_:2},1032,["to"]),_(u,{to:`/contact/edit/${s._id}`},{default:m(()=>[D]),_:2},1032,["to"]),a("button",{onClick:O=>n.onRemoveContact(s._id)},"Remove",8,E)])]))),128))]),_:1})}const P=p(S,[["render",N]]),T={data(){return{filterBy:{txt:""}}},methods:{onSetFilterBy(){this.$emit("filter",this.filterBy)}}},q={class:"contact-filter"};function A(t,e,o,f,i,n){return r(),d("div",q,[B(a("input",{type:"text",onInput:e[0]||(e[0]=(...c)=>n.onSetFilterBy&&n.onSetFilterBy(...c)),"onUpdate:modelValue":e[1]||(e[1]=c=>i.filterBy.txt=c),placeholder:"search for contacts"},null,544),[[F,i.filterBy.txt]])])}const I=p(T,[["render",A]]),j={data(){return{contacts:null,filterBy:{}}},methods:{onSetFilterBy(t){this.filterBy=t},onRemoveContact(t){const e=this.contacts.findIndex(o=>o._id===t);this.contacts.splice(e,1),h.deleteContact(t)}},computed:{filteredContacts(){const t=new RegExp(this.filterBy.txt,"i");return this.contacts.filter(e=>t.test(e.name))}},async created(){this.contacts=await h.getContacts()},components:{ContactList:P,ContactFilter:I}},G=a("button",null,"Add contact",-1);function M(t,e,o,f,i,n){const c=l("ContactFilter"),u=l("RouterLink"),s=l("ContactList");return r(),d(v,null,[_(c,{onFilter:n.onSetFilterBy},null,8,["onFilter"]),_(u,{to:"/contact/edit"},{default:m(()=>[G]),_:1}),i.contacts?(r(),C(s,{key:0,contacts:n.filteredContacts,onRemove:n.onRemoveContact},null,8,["contacts","onRemove"])):R("",!0)],64)}const J=p(j,[["render",M]]);export{J as default};

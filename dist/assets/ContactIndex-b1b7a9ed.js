import{_ as m,o as a,c as d,a as o,t as y,r as l,b as v,w as p,d as w,F as C,T as g,e as _,f as $,v as x,g as B}from"./index-062f5d3a.js";import{c as f}from"./contactService-9646613b.js";import"./async-storage.service-4e09e40d.js";const F={props:{contact:{type:Object,required:!0}}},k={class:"contact-preview"};function R(t,e,s,h,i,n){return a(),d("div",k,[o("h2",{onClick:e[0]||(e[0]=c=>t.$router.push(`/contact/${s.contact._id}`))},y(s.contact.name),1)])}const L=m(F,[["render",R]]);const S={props:{contacts:{type:Array,required:!0}},methods:{onRemoveContact(t){this.$emit("remove",t)}},components:{ContactPreview:L}},b={class:"action"},V=o("button",null,[o("img",{src:"https://www.svgrepo.com/show/506353/user-2.svg",alt:"details"})],-1),I=o("button",null,[o("img",{src:"https://www.svgrepo.com/show/510965/edit-pencil-01.svg",alt:"edit"})],-1),N=["onClick"],P=o("img",{src:"https://www.svgrepo.com/show/502608/delete-2.svg",alt:"delete"},null,-1),T=[P];function q(t,e,s,h,i,n){const c=l("ContactPreview"),u=l("RouterLink");return a(),v(g,{name:"list",tag:"ul",class:"contact-list-ul"},{default:p(()=>[(a(!0),d(C,null,w(s.contacts,r=>(a(),d("li",{class:"contact-list",key:r._id},[_(c,{contact:r},null,8,["contact"]),o("section",b,[_(u,{to:`/contact/${r._id}`},{default:p(()=>[V]),_:2},1032,["to"]),_(u,{to:`/contact/edit/${r._id}`},{default:p(()=>[I]),_:2},1032,["to"]),o("button",{onClick:H=>n.onRemoveContact(r._id)},T,8,N)])]))),128))]),_:1})}const A=m(S,[["render",q]]);const D={data(){return{filterBy:{txt:""}}},methods:{onSetFilterBy(){this.$emit("filter",this.filterBy)}}},E={class:"contact-filter"},j=o("img",{src:"https://www.svgrepo.com/show/507849/search.svg",alt:"search"},null,-1);function G(t,e,s,h,i,n){return a(),d("div",E,[$(o("input",{type:"text",onInput:e[0]||(e[0]=(...c)=>n.onSetFilterBy&&n.onSetFilterBy(...c)),"onUpdate:modelValue":e[1]||(e[1]=c=>i.filterBy.txt=c),placeholder:"search for contacts"},null,544),[[x,i.filterBy.txt]]),j])}const M=m(D,[["render",G]]);const O={data(){return{contacts:null,filterBy:{}}},methods:{onSetFilterBy(t){this.filterBy=t},onRemoveContact(t){const e=this.contacts.findIndex(s=>s._id===t);this.contacts.splice(e,1),f.deleteContact(t)}},computed:{filteredContacts(){const t=new RegExp(this.filterBy.txt,"i");return this.contacts.filter(e=>t.test(e.name))}},async mounted(){this.contacts=await f.getContacts()},components:{ContactList:A,ContactFilter:M}},U=o("button",{class:"add-contact"},"Add contact",-1);function z(t,e,s,h,i,n){const c=l("ContactFilter"),u=l("RouterLink"),r=l("ContactList");return a(),d(C,null,[_(c,{onFilter:n.onSetFilterBy},null,8,["onFilter"]),_(u,{to:"/contact/edit"},{default:p(()=>[U]),_:1}),i.contacts?(a(),v(r,{key:0,contacts:n.filteredContacts,onRemove:n.onRemoveContact},null,8,["contacts","onRemove"])):B("",!0)],64)}const W=m(O,[["render",z]]);export{W as default};
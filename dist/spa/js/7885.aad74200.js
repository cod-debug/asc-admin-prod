"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[7885],{77885:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var l=t(59835);const i={key:0,class:"text-center q-pa-lg"},n={class:"loading-page"},s={key:1,class:"table_container"},o={class:"text-right q-mt-md"};function r(e,a,t,r,c,u){const d=(0,l.up)("q-spinner-ios"),m=(0,l.up)("q-table"),p=(0,l.up)("q-pagination");return(0,l.wg)(),(0,l.iD)("div",null,[e.loading_list?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",n,[(0,l.Wm)(d,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(m,{columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"name","hide-bottom":"",onRowClick:u.viewDetails},null,8,["columns","rows","onRowClick"]),(0,l._)("div",o,[(0,l.Wm)(p,{modelValue:e.current,"onUpdate:modelValue":a[0]||(a[0]=a=>e.current=a),max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])]))])}const c={name:"member_affiliation_list",data:()=>({columns:[{name:"name",align:"left",label:"Type of Document",field:"name",sortable:!1},{name:"launch",align:"left",label:"Has Date of Launch",field:"launch",sortable:!1},{name:"expire",align:"left",label:"Has Expiration Date",field:"expire",sortable:!1},{name:"basis",align:"left",label:"Has Basis",field:"basis",sortable:!1},{name:"variant",align:"left",label:"Has Variant",field:"variant",sortable:!1},{name:"remark",align:"left",label:"Has Remarks",field:"remark",sortable:!1},{name:"input",align:"left",label:"Has Input",field:"input",sortable:!1},{name:"status",align:"left",label:"Status",field:"status",sortable:!1}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAppType()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAppType()},async getAppType(){let e=this,a={page:this.current,size:e.size,order:"name:asc",search:""};e.loading_list=!0;let{data:t,status:l}=await e.$store.dispatch("type_of_docu/getTypeOfDocu",a);if([200,201].includes(l)){console.log(t.rows);let a=t.rows.map((e=>{let a={...e};for(let t in e)"id"!=t&&"status"!=t&&"name"!=t?a[t]=e[t]?"Yes":"No":"status"==t&&(a[t]=e[t]?"Active":"Inactive");return a}));console.log(a),e.table_data=a,e.current=t.cpage,e.max=t.tpage,e.loading_list=!1}else e.loading_list=!1},viewDetails(e,a){this.$router.push({name:"type-of-document-update",params:{id:a.id}})},closeModal(){}}};var u=t(11639),d=t(38359),m=t(81463),p=t(80996),g=t(69984),f=t.n(g);const b=(0,u.Z)(c,[["render",r]]),h=b;f()(c,"components",{QSpinnerIos:d.Z,QTable:m.Z,QPagination:p.Z})}}]);
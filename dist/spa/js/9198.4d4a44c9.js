"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[9198],{9198:(e,i,t)=>{t.r(i),t.d(i,{default:()=>_});var a=t(9835);const l={key:0,class:"text-center q-pa-lg"},n={class:"loading-page"},s={key:1,class:"table_container"};function o(e,i,t,o,m,d){const u=(0,a.up)("q-spinner-ios"),c=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",null,[e.loading_list?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",n,[(0,a.Wm)(u,{color:"white",size:"3rem"})])])):((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c,{columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"name","hide-bottom":"",onRowClick:d.viewDetails},null,8,["columns","rows","onRowClick"])]))])}const m={name:"document_size_list",data:()=>({columns:[{name:"minimum",align:"left",label:"Minimum",field:"minimum",sortable:!1},{name:"maximum",align:"left",label:"Maximum",field:"maximum",sortable:!1}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAppType()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAppType()},async getAppType(){let e=this,i={id:1};e.loading_list=!0;let{data:t,status:a}=await e.$store.dispatch("number_of_multi_app/getSpecific",i);if([200,201].includes(a)){let i=[{size:t.size,id:t.id}];e.table_data=i,e.current=t.cpage,e.max=t.tpage,e.loading_list=!1}else e.loading_list=!1},viewDetails(e,i){this.$router.push({name:"document-size-update",params:{id:i.id}})},closeModal(){}}};var d=t(1639),u=t(8359),c=t(1463),r=t(996),p=t(2304),g=t.n(p);const b=(0,d.Z)(m,[["render",o]]),_=b;g()(m,"components",{QSpinnerIos:u.Z,QTable:c.Z,QPagination:r.Z})}}]);
"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[4495],{94495:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var s=t(59835);const a={key:0,class:"text-center q-pa-lg"},n={class:"loading-page"},o={key:1,class:"table_container"};function l(e,i,t,l,d,c){const r=(0,s.up)("q-spinner-ios"),p=(0,s.up)("q-table");return(0,s.wg)(),(0,s.iD)("div",null,[e.loading_list?((0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",n,[(0,s.Wm)(r,{color:"white",size:"3rem"})])])):((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(p,{columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"name","hide-bottom":"",onRowClick:c.viewDetails},null,8,["columns","rows","onRowClick"])]))])}const d={name:"document_size_list",data:()=>({columns:[{name:"decision_days",align:"left",label:"Number of Working Days",field:"decision_days",sortable:!1}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAppType()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAppType()},async getAppType(){let e=this,i={id:1};e.loading_list=!0;let{data:t,status:s}=await e.$store.dispatch("s1_incomplete_expiration/getSpecific",i);if([200,201].includes(s)){let i=[{decision_days:t.decision_days,id:t.id}];e.table_data=i,e.current=t.cpage,e.max=t.tpage,e.loading_list=!1}else e.loading_list=!1},viewDetails(e,i){this.$router.push({name:"s1-incomplete-decision-update",params:{id:1}})},closeModal(){}}};var c=t(11639),r=t(38359),p=t(81463),u=t(80996),m=t(69984),g=t.n(m);const _=(0,c.Z)(d,[["render",l]]),h=_;g()(d,"components",{QSpinnerIos:r.Z,QTable:p.Z,QPagination:u.Z})}}]);
"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[7313],{7313:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var s=a(9835),l=a(6970);const o={key:0,class:"text-center q-pa-lg"},i={class:"loading-page"},r={key:1,class:"table_container"},n={key:0,class:"text-right q-mt-md"};function c(e,t,a,c,d,u){const p=(0,s.up)("q-spinner-ios"),m=(0,s.up)("q-badge"),g=(0,s.up)("q-td"),w=(0,s.up)("q-table"),b=(0,s.up)("q-pagination");return(0,s.wg)(),(0,s.iD)("div",null,[e.loading_list?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",i,[(0,s.Wm)(p,{color:"white",size:"3rem"})])])):((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(w,{columns:e.columns,bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"",onRowClick:u.viewDetails},{"body-cell-status":(0,s.w5)((e=>[(0,s.Wm)(g,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{color:u.parseStatus(e.row.status).color},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(u.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","onRowClick"]),e.max>0?((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(b,{modelValue:e.current,"onUpdate:modelValue":t[0]||(t[0]=t=>e.current=t),max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,s.kq)("",!0)]))])}const d={name:"member_affiliation_list",data:()=>({columns:[{name:"desc",align:"left",label:"Category",field:"desc",sortable:!1},{name:"status",align:"left",label:"Status",field:"status",sortable:!1}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAppType()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAppType()},async getAppType(){let e=this,t={page:this.current,size:e.size,order:"desc:asc",search:""};e.loading_list=!0;let{data:a,status:s}=await e.$store.dispatch("brand/get",t);if([200,201].includes(s)){console.log(a.rows);let t=a.rows.map((e=>{let t={...e};for(let a in e)"status"==a&&(t[a]=e[a]?"Active":"Inactive");return t}));console.log(t),e.table_data=t,e.current=a.cpage,e.max=a.tpage,e.loading_list=!1}else e.loading_list=!1},viewDetails(e,t){this.$router.push({name:"brand-update",params:{id:t.id}})},parseStatus(e){switch(e){case"Inactive":return{val:"inactive",color:"grey"};case"Active":return{val:"active",color:"green"}}},closeModal(){}}};var u=a(1639),p=a(8359),m=a(1463),g=a(7220),w=a(990),b=a(996),h=a(2304),v=a.n(h);const f=(0,u.Z)(d,[["render",c]]),_=f;v()(d,"components",{QSpinnerIos:p.Z,QTable:m.Z,QTd:g.Z,QBadge:w.Z,QPagination:b.Z})}}]);
"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[4726],{34726:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var l=t(59835),s=t(86970);const o={key:0,class:"text-center q-pa-lg"},i={class:"loading-page"},n={key:1,class:"table_container"},r={key:0,class:"no-data-found"},d=(0,l.Uk)(" NO DATA FOUND... "),c={key:2,class:"text-right q-mt-md"};function u(e,a,t,u,p,m){const g=(0,l.up)("q-spinner-ios"),w=(0,l.up)("q-icon"),b=(0,l.up)("q-badge"),h=(0,l.up)("q-td"),y=(0,l.up)("q-table"),f=(0,l.up)("q-pagination");return(0,l.wg)(),(0,l.iD)("div",null,[e.loading_list?((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",i,[(0,l.Wm)(g,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",n,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(w,{name:"warning"}),d])):((0,l.wg)(),(0,l.j4)(y,{key:1,columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"name","hide-bottom":"",onRowClick:m.viewDetails},{"body-cell-status":(0,l.w5)((e=>[(0,l.Wm)(h,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{color:m.parseStatus(e.row.status).color},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(m.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","onRowClick"])),e.max>0?((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(f,{modelValue:e.current,"onUpdate:modelValue":a[0]||(a[0]=a=>e.current=a),max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,l.kq)("",!0)]))])}const p={name:"holiday_list",data:()=>({columns:[{name:"name",align:"left",label:"Holiday Name",field:"name",sortable:!1},{name:"date",align:"left",label:"Holiday Date",field:"date",sortable:!1},{name:"type",align:"left",label:"Holiday Type",field:"type",sortable:!1},{name:"status",align:"left",label:"Status",field:"status",sortable:!1}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAppType()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAppType()},async getAppType(){let e=this,a={page:this.current,size:e.size,order:"date:asc",search:""};e.loading_list=!0;let{data:t,status:l}=await e.$store.dispatch("holiday/get",a);[200,201].includes(l)?(e.table_data=t.rows,e.current=t.cpage,e.max=t.tpage,e.loading_list=!1):e.loading_list=!1},viewDetails(e,a){this.$router.push({name:"reason-update",params:{id:a.id}})},parseStatus(e){switch(e){case 0:return{val:"inactive",color:"grey"};case 1:return{val:"active",color:"green"}}},closeModal(){}}};var m=t(11639),g=t(38359),w=t(22857),b=t(81463),h=t(67220),y=t(20990),f=t(80996),_=t(69984),k=t.n(_);const v=(0,m.Z)(p,[["render",u]]),D=v;k()(p,"components",{QSpinnerIos:g.Z,QIcon:w.Z,QTable:b.Z,QTd:h.Z,QBadge:y.Z,QPagination:f.Z})}}]);
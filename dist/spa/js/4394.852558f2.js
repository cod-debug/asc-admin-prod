"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[4394],{4394:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(9835),n=a(6970);const s={key:0,class:"text-center q-pa-lg"},o={class:"loading-page"},i={key:1,class:"table_container"},r={class:"text-right q-mt-md"};function c(e,t,a,c,u,d){const m=(0,l.up)("q-spinner-ios"),p=(0,l.up)("q-badge"),g=(0,l.up)("q-td"),b=(0,l.up)("q-table"),w=(0,l.up)("q-pagination");return(0,l.wg)(),(0,l.iD)("div",null,[e.loading_list?((0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",o,[(0,l.Wm)(m,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(b,{columns:e.columns,flat:"",bordered:"",rows:e.table_data,"hide-bottom":"",onRowClick:d.viewDetails},{"body-cell-status":(0,l.w5)((e=>[(0,l.Wm)(g,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{color:d.parseStatus(e.row.status).color},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(d.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","onRowClick"]),(0,l._)("div",r,[(0,l.Wm)(w,{modelValue:e.current,"onUpdate:modelValue":t[0]||(t[0]=t=>e.current=t),max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])]))])}const u={name:"member_affiliation_list",data:()=>({columns:[{name:"title",align:"left",label:"Title",field:"title",sortable:!0},{name:"number_of_views",align:"left",label:"Number of Views",field:"vcount",sortable:!0},{name:"posting_date",align:"left",label:"Posting Date",field:"pdate",sortable:!0},{name:"status",align:"left",label:"Status",field:"status",sortable:!0}],table_data:[],current:1,max:0,size:5,loading_list:!0}),watch:{current(e){e&&this.getAllAnnouncements()}},components:{},mounted(){this.initApp()},methods:{initApp(){this.getAllAnnouncements()},async getAllAnnouncements(){let e=this,t={page:this.current,size:e.size,order:"id:desc",search:""};e.loading_list=!0;let{data:a,status:l}=await this.$store.dispatch("announcements/getAllAnnouncements",t);[200,201].includes(l)&&(e.table_data=a.rows,e.current=a.cpage,e.max=a.tpage,e.loading_list=!1)},viewDetails(e,t){this.$router.push({name:"announcement-update",params:{id:t.id}})},parseStatus(e){switch(e){case 0:return{val:"inactive",color:"grey"};case 1:return{val:"active",color:"green"}}},closeModal(){}}};var d=a(1639),m=a(8359),p=a(1463),g=a(7220),b=a(990),w=a(996),f=a(2304),h=a.n(f);const _=(0,d.Z)(u,[["render",c]]),v=_;h()(u,"components",{QSpinnerIos:m.Z,QTable:p.Z,QTd:g.Z,QBadge:b.Z,QPagination:w.Z})}}]);
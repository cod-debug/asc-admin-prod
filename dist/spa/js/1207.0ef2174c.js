"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[1207],{1207:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(9835);const l={class:"q-pa-md q-mt-lg q-ml-lg"},o={class:"text-h6 page-title text-dark"},n=(0,s.Uk)(" User Role");function i(e,t,a,i,d,c){const r=(0,s.up)("q-icon"),u=(0,s.up)("q-card-section"),p=(0,s.up)("q-separator"),m=(0,s.up)("UserRoles"),_=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(_,{bordered:"",class:"my-card",elevated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.Wm)(r,{name:"settings_accessibility"}),n])])),_:1}),(0,s.Wm)(p,{inset:""}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1})])),_:1})])}var d=a(6970);const c={class:"q-mt-md"},r={class:"loading-page"},u=(0,s._)("i",{class:"fa fa-eye"},null,-1),p={class:"text-right q-mt-md"};function m(e,t,a,l,o,n){const i=(0,s.up)("q-spinner-ios"),m=(0,s.up)("q-card-section"),_=(0,s.up)("q-badge"),w=(0,s.up)("q-td"),g=(0,s.up)("q-btn"),h=(0,s.up)("q-table"),f=(0,s.up)("q-pagination"),v=(0,s.up)("modal-update-role");return(0,s.wg)(),(0,s.iD)("div",c,[e.loading_list?((0,s.wg)(),(0,s.j4)(m,{key:0,class:"text-center q-pa-lg"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.Wm)(i,{color:"white",size:"3rem"})])])),_:1})):((0,s.wg)(),(0,s.j4)(h,{key:1,rows:e.rows,columns:l.columns,"row-key":"id",square:!0,flat:"","hide-bottom":""},{"body-cell-status":(0,s.w5)((e=>[(0,s.Wm)(w,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{color:n.parseStatus(e.row.status).color},{default:(0,s.w5)((()=>[(0,s.Uk)((0,d.zw)(n.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),"body-cell-actions":(0,s.w5)((e=>[(0,s.Wm)(w,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{dense:"",round:"",color:"green-12",onClick:t=>n.view(e.row)},{default:(0,s.w5)((()=>[u])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])),(0,s._)("div",p,[(0,s.Wm)(f,{modelValue:e.current,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.current=t),n.getAllNONASC],max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max","onUpdate:modelValue"])]),e.show_modal_user?((0,s.wg)(),(0,s.j4)(v,{key:2,selected_item:e.selected_item,modal_type:"approval",closeModal:n.closeModal,is_update:e.is_update},null,8,["selected_item","closeModal","is_update"])):(0,s.kq)("",!0)])}const _={class:"q-pa-md q-gutter-sm"},w=(0,s._)("div",{class:"text-h6"},"Update User Role",-1),g={class:"form row"},h={class:"col-12 col-md-12 q-pa-md"};function f(e,t,a,l,o,n){const i=(0,s.up)("q-space"),d=(0,s.up)("q-btn"),c=(0,s.up)("q-card-section"),r=(0,s.up)("q-input"),u=(0,s.up)("q-card"),p=(0,s.up)("q-dialog"),m=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s.Wm)(p,{modelValue:e.icon,"onUpdate:modelValue":t[1]||(t[1]=t=>e.icon=t),persistent:!0},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{style:{width:"900px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"row items-center q-pb-none"},{default:(0,s.w5)((()=>[w,(0,s.Wm)(i),(0,s.wy)((0,s.Wm)(d,{icon:"close",flat:"",round:"",dense:"",onClick:a.closeModal},null,8,["onClick"]),[[m]])])),_:1}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s._)("div",g,[(0,s._)("div",h,[(0,s.Wm)(r,{outlined:"",label:"User Role",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,8,["modelValue"])])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const v={props:["closeModal","modal_type","selected_item","is_update"],data:()=>({icon:!0,name:"",active_tab:"UserDetails",tab:"user"}),mounted(){this.initApp()},methods:{async getSpecific(){let e=this,t={id:e.selected_item.id},{data:a,status:s}=await this.$store.dispatch("account/getOneUser",t);if([200,201].includes(s))for(let l in a)e[l]=a[l]},initApp(){if("approval"===this.modal_type)for(let e in this.selected_item)this[e]=this.selected_item[e];this.is_update&&this.getSpecific()}}};var b=a(1639),q=a(2074),Z=a(4458),y=a(3190),W=a(136),k=a(8879),Q=a(6611),U=a(2146),C=a(2304),S=a.n(C);const A=(0,b.Z)(v,[["render",f]]),x=A;S()(v,"components",{QDialog:q.Z,QCard:Z.Z,QCardSection:y.Z,QSpace:W.Z,QBtn:k.Z,QInput:Q.Z}),S()(v,"directives",{ClosePopup:U.Z});const V=[{name:"name",align:"center",label:"User Role",field:"name",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"",sortable:!1}],R={props:["tableData"],data:()=>({rows:[],is_update:!1,is_approval_modal:!1,selected_item:null,show_modal_user:!1,current:1,size:5,max:0,loading_list:!1}),watch:{},mounted(){this.initApp()},components:{modalUpdateRole:x},methods:{initApp(){this.getAllNONASC()},async getAllNONASC(){this.loading=!0;let e=this;e.loading_list=!0;let t={page:e.current,size:e.size,order:"id:asc",search:""},{data:a,status:s}=await this.$store.dispatch("account/getAllUserTypes",t);[200,201].includes(s)&&this.$nextTick((()=>{this.rows=a.rows,e.table_data=a.rows,e.current=a.cpage,e.max=a.tpage,this.loading=!1})),e.loading_list=!1},view(e){let t=this;t.selected_item=e,t.is_update=!0,t.show_modal_user=!0},closeModal(){this.show_modal_user=!1},parseStatus(e){switch(e){case 0:return{val:"pending",color:"grey"};case 1:return{val:"active",color:"green"}}}},setup(){return{columns:V}}};var D=a(8359),M=a(1463),N=a(7220),z=a(990),O=a(996);const T=(0,b.Z)(R,[["render",m]]),j=T;S()(R,"components",{QCardSection:y.Z,QSpinnerIos:D.Z,QTable:M.Z,QTd:N.Z,QBadge:z.Z,QBtn:k.Z,QPagination:O.Z});const B={name:"AdminAnnouncements",data:()=>({active_tab:"nonasc",all_nonc:[],loading:!0,tab:"nonasc"}),components:{UserRoles:j},mounted(){this.active_tab="nonasc"},methods:{}};var I=a(2857),$=a(926);const P=(0,b.Z)(B,[["render",i]]),E=P;S()(B,"components",{QCard:Z.Z,QCardSection:y.Z,QIcon:I.Z,QSeparator:$.Z})}}]);
"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[5490],{75490:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var l=a(59835),o=a(799),s=a(86970);const i={class:"q-pa-md q-mt-lg q-ml-lg"},r={class:"text-h6 page-title text-dark col-md-6"},n=(0,l.Uk)(" S1 APPLICATION - SPECIAL"),c={class:"text-right col-md-6"},d={class:"row q-my-lg"},p={class:"col-md-9 col-sm-12"},m={class:"col-md-3 q-px-md col-sm-12"},u={class:"shadow-2 q-pa-sm"},_=(0,l._)("b",null,"Legend: ",-1),g={width:"100%"},w={width:"5%"},h={class:"q-pt-xs"},b={class:"q-pr-md"},y=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),f={key:0,class:"table_container"},k={key:0,class:"no-data-found q-mt-md"},A=(0,l.Uk)(" NO DATA FOUND... "),I={key:2,class:"text-right q-mt-md"},C={key:1,class:"text-center q-pa-lg"},v={class:"loading-page"},T={class:"q-pa-md q-gutter-sm"},q=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function L(e,t,a,L,N,O){const W=(0,l.up)("q-icon"),E=(0,l.up)("q-btn"),S=(0,l.up)("q-card-section"),D=(0,l.up)("q-separator"),P=(0,l.up)("q-input"),U=(0,l.up)("q-badge"),Z=(0,l.up)("q-tab"),x=(0,l.up)("q-tabs"),R=(0,l.up)("q-td"),Q=(0,l.up)("q-tr"),V=(0,l.up)("q-table"),M=(0,l.up)("q-pagination"),z=(0,l.up)("q-spinner-ios"),G=(0,l.up)("q-card-actions"),F=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(F,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(W,{name:"list"}),n]),(0,l._)("div",c,[(0,l.Wm)(E,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:O.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(D,{inset:""}),(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",p,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)((e=>O.getList(!0)),["prevent"])),method:"POST"},[(0,l.Wm)(P,{"bottom-slots":"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),outlined:"",label:"Search Applications",hint:"Hit ''Enter'' key or click search icon to search application."},{append:(0,l.w5)((()=>[(0,l.Wm)(W,{name:"search",onClick:t[0]||(t[0]=e=>O.getList(!0))})])),_:1},8,["modelValue"])],32)]),(0,l._)("div",m,[(0,l._)("div",u,[_,(0,l._)("table",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.legends,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",w,[(0,l._)("div",{class:(0,s.C_)(`legend ${e.color}`)},null,2)]),(0,l._)("td",h,[(0,l._)("small",null,[(0,l._)("strong",null,(0,s.zw)(e.title),1)])])])))),128))])])])]),(0,l.Wm)(x,{modelValue:e.active_tab,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.active_tab=t),t[4]||(t[4]=e=>O.getList())],align:"left",class:"text-dark","indicator-color":"primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tabs,((e,t)=>((0,l.wg)(),(0,l.j4)(Z,{name:e.code,onClick:t=>O.setActiveTab(e.code),key:t,color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{label:e.count,color:"red-14",rounded:"",floating:""},null,8,["label"]),(0,l._)("strong",b,(0,s.zw)(e.name),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"]),y,e.is_loading?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("div",v,[(0,l.Wm)(z,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",f,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(W,{name:"warning"}),A])):((0,l.wg)(),(0,l.j4)(V,{key:1,columns:e.columns,bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:O.update},{body:(0,l.w5)((e=>[(0,l.Wm)(Q,{props:e,class:(0,s.C_)(O.hasOwner(e.row)?O.isOwned(e.row)?"bg-yellow":"bg-hrey-4":"bg-white"),hover:"",style:{cursor:"pointer"},onClick:t=>O.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{key:"referrence_code",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(Array.isArray(e.row.type_medium_name)?e.row.type_medium_name.join(", "):e.row.type_medium_name),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.status),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"])),e.max_page>0?((0,l.wg)(),(0,l.iD)("div",I,[(0,l.Wm)(M,{modelValue:e.current,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.current=t),t[6]||(t[6]=e=>O.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])),(0,l._)("template",null,[(0,l._)("div",T,[(0,l.Wm)(Y,{modelValue:e.lockModal,"onUpdate:modelValue":t[7]||(t[7]=t=>e.lockModal=t),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(G,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{flat:"",label:"CONFIRM",onClick:O.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(E,{flat:"",label:"CANCEL"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}var N=a(6827);const O={data:()=>({pinkModel:!1,search:"",is_loading:!0,lockModal:!1,tabs:[{name:"ORIGINAL",code:"ORIGINAL",count:0},{name:"COMPLIANCE",code:"COMPLIANCE",count:0},{name:"TOA",code:"TOA",count:0}],legends:[{color:"gold",title:"FOR APPROVAL"},{color:"green",title:"APPROVED"},{color:"red",title:"DISAPPROVED"}],localTimer:null,refresh_sec:0,active_tab:"ORIGINAL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e,this.current=1},refresh(){let e=this,t=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",t),setInterval((()=>{t>0&&(t--,localStorage.setItem("timer",t),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.selected_item=e,e.isLocked?this.isOwned(e)?this.$router.push({name:"individual-application-update",params:{id:e.id}}):N.Z.create({message:"This application does not belong to you.",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"}):this.lockModal=!0},async getList(e){let t=this;e&&(t.current=1),t.is_loading=!0;let a={data:{form_group:"INDIVIDUAL",application_type:["SPECIAL SCREENING AND CLEARING"],processType:t.active_tab,search:t.search,form_type:"s2"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);[200,201].includes(o)?(t.table_data=l.data.map((e=>{var t;return{...e,company_name:(null===e||void 0===e||null===(t=e.company)||void 0===t?void 0:t.name)||"--",type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0}}))||[],t.max_page=l.lastPage||0,t.is_loading=!1):t.is_loading=!1},async getCount(e){let t=this,a={data:{form_group:"INDIVIDUAL",application_type:["SPECIAL SCREENING AND CLEARING"],processType:e,search:t.search,form_type:"s2"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);return l.count},async confirmLock(){let e=this,t={assigned_user_id:this.userID,id:e.selected_item.id},{data:a,status:l}=await this.$store.dispatch("ascUser/lockApp",t);[200,201].includes(l)&&(N.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var W=a(11639),E=a(44458),S=a(63190),D=a(22857),P=a(68879),U=a(50926),Z=a(66611),x=a(47817),R=a(70900),Q=a(20990),V=a(81463),M=a(31233),z=a(67220),G=a(80996),F=a(38359),Y=a(32074),B=a(11821),$=a(62146),j=a(69984),H=a.n(j);const K=(0,W.Z)(O,[["render",L]]),X=K;H()(O,"components",{QCard:E.Z,QCardSection:S.Z,QIcon:D.Z,QBtn:P.Z,QSeparator:U.Z,QInput:Z.Z,QTabs:x.Z,QTab:R.Z,QBadge:Q.Z,QTable:V.Z,QTr:M.Z,QTd:z.Z,QPagination:G.Z,QSpinnerIos:F.Z,QDialog:Y.Z,QCardActions:B.Z}),H()(O,"directives",{ClosePopup:$.Z})}}]);
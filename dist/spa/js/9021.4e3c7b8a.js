(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[9021],{9021:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var l=a(59835),o=a(799),s=a(86970);const i={class:"q-pa-md q-mt-lg q-ml-lg"},r={class:"text-h6 page-title text-dark col-md-6"},n=(0,l.Uk)(" S1 APPLICATION - INDIVIDUAL"),c={class:"text-right col-md-6"},d={class:"row q-my-lg"},m={class:"col-md-9 col-sm-12"},p={class:"col-md-3 q-px-md col-sm-12"},u={class:"shadow-2 q-pa-sm"},_=(0,l._)("b",null,"Legend: ",-1),g={width:"100%"},w={width:"5%"},h={class:"q-pt-xs"},b={class:"q-pr-md"},f=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),y={key:0,class:"table_container q-mt-md"},k={key:0,class:"no-data-found"},I=(0,l.Uk)(" NO DATA FOUND... "),A={key:2,class:"text-right q-mt-md"},C={key:1,class:"text-center q-pa-lg"},v={class:"loading-page"},q={class:"q-pa-md q-gutter-sm"},T=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function L(e,t,a,L,W,N){const O=(0,l.up)("q-icon"),U=(0,l.up)("q-btn"),D=(0,l.up)("q-card-section"),S=(0,l.up)("q-separator"),E=(0,l.up)("q-input"),x=(0,l.up)("q-badge"),Z=(0,l.up)("q-tab"),P=(0,l.up)("q-tabs"),R=(0,l.up)("q-td"),V=(0,l.up)("q-tr"),Q=(0,l.up)("q-table"),M=(0,l.up)("q-pagination"),z=(0,l.up)("q-spinner-ios"),B=(0,l.up)("q-card-actions"),G=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),$=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(G,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(O,{name:"list"}),n]),(0,l._)("div",c,[(0,l.Wm)(U,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:N.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(S,{inset:""}),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",m,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)((e=>N.getList(!0)),["prevent"])),method:"POST"},[(0,l.Wm)(E,{"bottom-slots":"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),outlined:"",label:"Search Applications",hint:"Hit ''Enter'' key or click search icon to search application."},{append:(0,l.w5)((()=>[(0,l.Wm)(O,{name:"search",onClick:t[0]||(t[0]=e=>N.getList(!0))})])),_:1},8,["modelValue"])],32)]),(0,l._)("div",p,[(0,l._)("div",u,[_,(0,l._)("table",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.legends,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",w,[(0,l._)("div",{class:(0,s.C_)(`legend ${e.color}`)},null,2)]),(0,l._)("td",h,[(0,l._)("small",null,[(0,l._)("strong",null,(0,s.zw)(e.title),1)])])])))),128))])])])]),(0,l.Wm)(P,{modelValue:e.active_tab,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.active_tab=t),t[4]||(t[4]=e=>N.getList())],align:"left",class:"text-dark","indicator-color":"primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tabs,((e,t)=>((0,l.wg)(),(0,l.j4)(Z,{name:e.code,onClick:t=>N.setActiveTab(e.code),key:t,color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{label:e.count,color:"red-14",rounded:"",floating:""},null,8,["label"]),(0,l._)("strong",b,(0,s.zw)(e.name),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"]),f,e.is_loading?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("div",v,[(0,l.Wm)(z,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",y,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(O,{name:"warning"}),I])):((0,l.wg)(),(0,l.j4)(Q,{key:1,columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:N.update},{body:(0,l.w5)((e=>[(0,l.Wm)(V,{props:e,hover:"",style:{cursor:"pointer"},onClick:t=>N.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{key:"referrence_code",props:e,class:(0,s.C_)(`bg-${N.current_id_bg}`)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props","class"]),(0,l.Wm)(R,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(Array.isArray(e.row.type_medium_name)?e.row.type_medium_name.join(", "):e.row.type_medium_name),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.status),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(R,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"])),e.max_page>0?((0,l.wg)(),(0,l.iD)("div",A,[(0,l.Wm)(M,{modelValue:e.current,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.current=t),t[6]||(t[6]=e=>N.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])),(0,l._)("template",null,[(0,l._)("div",q,[(0,l.Wm)(Y,{modelValue:e.lockModal,"onUpdate:modelValue":t[7]||(t[7]=t=>e.lockModal=t),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(G,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[T])),_:1}),(0,l.Wm)(B,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{flat:"",label:"CONFIRM",onClick:N.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(U,{flat:"",label:"CANCEL"},null,512),[[$]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}a(24103);var W=a(6827);const N={data:()=>({pinkModel:!1,search:"",is_loading:!0,lockModal:!1,tabs:[{name:"ORIGINAL",code:"ORIGINAL",count:0},{name:"REVISION",code:"REVISION",count:0},{name:"COMPLIANCE",code:"COMPLIANCE",count:0}],legends:[{color:"blue",theme_color:"blue-2",title:"ORIGINAL"},{color:"gold",theme_color:"yellow-8",title:"COMPLIANCE"},{color:"green",theme_color:"green-4",title:"REVISION"}],localTimer:null,refresh_sec:0,active_tab:"ORIGINAL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")},current_id_bg(){return console.log(this.legends.filter((e=>e.title==this.active_tab))[0].color,"COMPUTED"),this.legends.filter((e=>e.title==this.active_tab))[0].theme_color}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e,this.current=1},refresh(){let e=this,t=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",t),setInterval((()=>{t>0&&(t--,localStorage.setItem("timer",t),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.$router.push({name:"individual-application-update",params:{id:e.id}})},async getList(e){let t=this;e&&(t.current=1),t.is_loading=!0;let a={data:{application_type:["REGULAR","BATCH"],form_group:"INDIVIDUAL",search:t.search,process_type:t.active_tab,form_type:"s1"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);[200,201].includes(o)?(t.table_data=l.data.map((e=>{var t;return{...e,company_name:(null===e||void 0===e||null===(t=e.company)||void 0===t?void 0:t.name)||"--",type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0}}))||[],t.max_page=l.lastPage||0,t.is_loading=!1):t.is_loading=!1},async getCount(e){let t=this,a={data:{application_type:["REGULAR","BATCH"],form_group:"INDIVIDUAL",search:t.search,process_type:e,form_type:"s1"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);return l.count},async confirmLock(){let e=this,t={assigned_user_id:this.userID,id:e.selected_item.id},{data:a,status:l}=await this.$store.dispatch("ascUser/lockApp",t);[200,201].includes(l)&&(W.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var O=a(11639),U=a(44458),D=a(63190),S=a(22857),E=a(68879),x=a(50926),Z=a(66611),P=a(47817),R=a(70900),V=a(20990),Q=a(81463),M=a(31233),z=a(67220),B=a(80996),G=a(38359),Y=a(32074),$=a(11821),F=a(62146),H=a(69984),j=a.n(H);const K=(0,O.Z)(N,[["render",L]]),X=K;j()(N,"components",{QCard:U.Z,QCardSection:D.Z,QIcon:S.Z,QBtn:E.Z,QSeparator:x.Z,QInput:Z.Z,QTabs:P.Z,QTab:R.Z,QBadge:V.Z,QTable:Q.Z,QTr:M.Z,QTd:z.Z,QPagination:B.Z,QSpinnerIos:G.Z,QDialog:Y.Z,QCardActions:$.Z}),j()(N,"directives",{ClosePopup:F.Z})},24103:()=>{}}]);
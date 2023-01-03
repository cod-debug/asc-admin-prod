"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[1526],{1526:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var i=a(9835);function l(e,t,a,l,o,s){const d=(0,i.up)("app-affiliation");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(d)])}var o=a(6970);const s={class:"q-pa-md q-mt-lg q-ml-lg"},d={class:"text-h6 page-title text-dark"},n=(0,i.Uk)(" Member's Affiliation"),m={class:"loading-page"},r=(0,i.Uk)(" Active "),c=(0,i.Uk)(" Inactive "),u={class:"text-right q-mt-md"};function p(e,t,a,l,p,f){const _=(0,i.up)("q-btn"),h=(0,i.up)("q-icon"),b=(0,i.up)("q-card-section"),w=(0,i.up)("q-separator"),g=(0,i.up)("q-spinner-ios"),q=(0,i.up)("q-td"),v=(0,i.up)("q-badge"),k=(0,i.up)("q-table"),A=(0,i.up)("q-pagination"),Z=(0,i.up)("app-add-affiliation-modal"),W=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(W,{bordered:"",class:"my-card",elevated:""},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{label:"Add Member's Affiliation",elevated:"",class:"q-mb-md q-mr-md",size:"md",icon:"add_circle",color:"primary",onClick:f.addAffil,id:"addAscUser"},null,8,["onClick"]),(0,i._)("div",d,[(0,i.Wm)(h,{name:"groups"}),n])])),_:1}),(0,i.Wm)(w,{inset:""}),e.loading_list?((0,i.wg)(),(0,i.j4)(b,{key:0,class:"text-center q-pa-lg"},{default:(0,i.w5)((()=>[(0,i._)("div",m,[(0,i.Wm)(g,{color:"white",size:"3rem"})])])),_:1})):((0,i.wg)(),(0,i.j4)(b,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{rows:e.table_data,columns:e.columns,"row-key":"id",flat:"",square:!0,"hide-bottom":"",onRowClick:f.update},{"body-cell-is_member":(0,i.w5)((e=>[(0,i.Wm)(q,{props:e,onClick:t=>f.update(e)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(1==e.row.member?"Yes":"No"),1)])),_:2},1032,["props","onClick"])])),"body-cell-status":(0,i.w5)((e=>[(0,i.Wm)(q,{props:e,onClick:t=>f.update(e)},{default:(0,i.w5)((()=>[1==e.row.status?((0,i.wg)(),(0,i.j4)(v,{key:0,color:"green"},{default:(0,i.w5)((()=>[r])),_:1})):((0,i.wg)(),(0,i.j4)(v,{key:1,color:"red"},{default:(0,i.w5)((()=>[c])),_:1}))])),_:2},1032,["props","onClick"])])),_:1},8,["rows","columns","onRowClick"]),(0,i._)("div",u,[(0,i.Wm)(A,{modelValue:e.current,"onUpdate:modelValue":t[0]||(t[0]=t=>e.current=t),max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])])),_:1})),e.show_add_affiliation_modal?((0,i.wg)(),(0,i.j4)(Z,{key:2,selected_item:e.selected_item,closeModal:f.closeModal},null,8,["selected_item","closeModal"])):(0,i.kq)("",!0)])),_:1})])}var f=a(799);const _={class:"q-pa-md q-gutter-sm"},h=(0,i._)("div",{class:"text-h6"},"Member's Affiliation",-1),b={class:"row"},w={class:"col-sm-12 col-md-6 col-lg-6 q-pa-sm"},g={class:"col-sm-12 col-md-6 col-lg-6 q-pa-sm"},q=(0,i.Uk)(" No results "),v=(0,i.Uk)(" Save");function k(e,t,a,l,o,s){const d=(0,i.up)("q-space"),n=(0,i.up)("q-btn"),m=(0,i.up)("q-card-section"),r=(0,i.up)("q-separator"),c=(0,i.up)("q-input"),u=(0,i.up)("q-item-section"),p=(0,i.up)("q-item"),k=(0,i.up)("q-select"),A=(0,i.up)("q-form"),Z=(0,i.up)("q-icon"),W=(0,i.up)("q-card"),y=(0,i.up)("q-dialog"),Q=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(y,{modelValue:e.show_add_aff_modal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.show_add_aff_modal=t),persistent:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{style:{width:"1080px","max-width":"90vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"row items-center q-pb-none"},{default:(0,i.w5)((()=>[h,(0,i.Wm)(d),(0,i.wy)((0,i.Wm)(n,{icon:"close",flat:"",round:"",dense:"",onClick:a.closeModal},null,8,["onClick"]),[[Q]])])),_:1}),(0,i.Wm)(r,{inset:""}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(A,{ref:"add_member_affiliation_form",onSubmit:(0,f.iM)(s.saveAffiliation,["prevent"]),greedy:!0},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("div",w,[(0,i.Wm)(c,{outlined:"",label:"Members's Affiliation *",modelValue:e.member_affiliation,"onUpdate:modelValue":t[0]||(t[0]=t=>e.member_affiliation=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,i._)("div",g,[(0,i.Wm)(k,{modelValue:e.is_member,"onUpdate:modelValue":t[1]||(t[1]=t=>e.is_member=t),"use-input":"",outlined:"","input-debounce":"0",label:"Member *",options:e.is_member_options,rules:[e=>!!e||"Field is required"]},{"no-option":(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"text-grey"},{default:(0,i.w5)((()=>[q])),_:1})])),_:1})])),_:1},8,["modelValue","options","rules"])])])])),_:1},8,["onSubmit"])])),_:1}),(0,i.Wm)(r,{inset:""}),(0,i.Wm)(m,{class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{color:"primary",onClick:(0,f.iM)(s.saveAffiliation,["prevent"]),class:"q-my-sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"save"}),v])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var A=a(6827);const Z={props:["closeModal","selected_item"],data:()=>({show_add_aff_modal:!0,is_member_options:[{value:!0,label:"YES"},{value:!1,label:"NO"}],member_affiliation:"",is_member:{value:!0,label:"YES"},is_update:!1}),mounted(){this.initApp()},methods:{async validate(e){return await this.$refs.add_member_affiliation_form.validate()},initApp(){this.selected_item&&(this.is_update=!0,this.member_affiliation=this.selected_item.name,this.is_member=1==this.selected_item.member?{value:!0,label:"YES"}:{value:!1,label:"NO"})},async saveAffiliation(){if(await this.validate()){let e={name:this.member_affiliation,member:this.is_member.value,status:1},t="affiliation/addAffiliation";this.is_update&&(e.id=this.selected_item.id,t="affiliation/updateAffiliation");let{data:a,status:i}=await this.$store.dispatch(t,e);[200,201].includes(i)?(A.Z.create({message:`Successfully ${this.update?"updated":"added"} affiliation!`,position:"center",closeBtn:"X",timeout:3e3,color:"green"}),this.$parent.$parent.initApp()):A.Z.create({message:"Something went wrong!",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else A.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}}};var W=a(1639),y=a(2074),Q=a(4458),C=a(3190),S=a(136),M=a(8879),x=a(926),V=a(8326),U=a(6611),I=a(7887),z=a(490),B=a(1233),$=a(2857),j=a(2146),D=a(2304),N=a.n(D);const T=(0,W.Z)(Z,[["render",k]]),Y=T;N()(Z,"components",{QDialog:y.Z,QCard:Q.Z,QCardSection:C.Z,QSpace:S.Z,QBtn:M.Z,QSeparator:x.Z,QForm:V.Z,QInput:U.Z,QSelect:I.Z,QItem:z.Z,QItemSection:B.Z,QIcon:$.Z}),N()(Z,"directives",{ClosePopup:j.Z});const E={name:"member_affiliation_list",data:()=>({show_add_affiliation_modal:!1,columns:[{name:"member_affiliation",align:"left",label:"Member's affiliation",field:"name",sortable:!0},{name:"is_member",align:"left",label:"Member",field:"member",sortable:!0},{name:"status",align:"left",label:"Status",field:"status",sortable:!0}],selected_item:{},table_data:[],size:5,current:1,loading_list:!0,is_update:!1}),components:{appAddAffiliationModal:Y},mounted(){this.initApp()},watch:{current(e){e&&this.getAllAffiliation()}},methods:{initApp(){this.getAllAffiliation()},addAffil(){this.show_add_affiliation_modal=!0,this.selected_item=!1},async getAllAffiliation(){let e={page:this.current,size:this.size,order:"id:asc",search:""};this.loading_list=!0;try{let{data:t,status:a}=await this.$store.dispatch("affiliation/getAllAffiliation",e);[200,201].includes(a)&&(this.table_data=t.rows,this.current=t.cpage,this.max=t.tpage)}catch(t){console.log(t,"STATUS")}this.loading_list=!1},update(e,t){this.selected_item=t,this.show_add_affiliation_modal=!0},closeModal(){this.show_add_affiliation_modal=!1}}};var F=a(8359),X=a(1463),O=a(7220),P=a(990),R=a(996);const K=(0,W.Z)(E,[["render",p]]),G=K;N()(E,"components",{QCard:Q.Z,QCardSection:C.Z,QBtn:M.Z,QIcon:$.Z,QSeparator:x.Z,QSpinnerIos:F.Z,QTable:X.Z,QTd:O.Z,QBadge:P.Z,QPagination:R.Z});const H={data:()=>({}),components:{AppAffiliation:G},methods:{}},J=(0,W.Z)(H,[["render",l]]),L=J}}]);
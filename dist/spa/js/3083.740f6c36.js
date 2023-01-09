"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[3083],{63083:(e,a,t)=>{t.r(a),t.d(a,{default:()=>je});var l=t(59835);function s(e,a,t,s,o,i){const n=(0,l.up)("app-user-accounts");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(n)])}const o={class:"q-pa-md q-mt-lg q-ml-lg"},i={class:"text-h6 page-title"},n=(0,l.Uk)(" User Account"),d=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function r(e,a,t,s,r,c){const u=(0,l.up)("q-icon"),m=(0,l.up)("q-card-section"),p=(0,l.up)("q-separator"),_=(0,l.up)("q-tab"),g=(0,l.up)("q-btn"),f=(0,l.up)("q-tabs"),w=(0,l.up)("app-non-asc-table"),h=(0,l.up)("app-asc-table"),b=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(b,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(u,{name:"badge"}),n])])),_:1}),(0,l.Wm)(p,{inset:""}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:e.tab,"onUpdate:modelValue":a[3]||(a[3]=a=>e.tab=a),dense:"",align:"left",class:"text-dark","indicator-color":"blue","no-caps":!0},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"nonasc",label:"Non ASC Users",onClick:a[0]||(a[0]=e=>c.setActiveTab("nonasc"))}),(0,l.Wm)(_,{name:"asc",label:"ASC Users",onClick:a[1]||(a[1]=e=>c.setActiveTab("asc"))}),"asc"==e.tab?((0,l.wg)(),(0,l.j4)(g,{key:0,label:"Add ASC User",elevated:"",class:"q-my-md",id:"addAscUser",size:"sm",icon:"add_circle",color:"primary",onClick:a[2]||(a[2]=e=>c.showAddASCUser(!1))})):(0,l.kq)("",!0)])),_:1},8,["modelValue"]),d,"nonasc"==e.tab?((0,l.wg)(),(0,l.j4)(w,{key:0,ref:"nonasc"},null,512)):"asc"==e.tab?((0,l.wg)(),(0,l.j4)(h,{key:1,ref:"asc",update:e.is_update},null,8,["update"])):(0,l.kq)("",!0)])),_:1})])),_:1})])}var c=t(86970);const u={class:"q-mt-md"},m={class:"loading-page"},p=(0,l._)("i",{class:"fa fa-eye"},null,-1),_={class:"text-right q-mt-md"};function g(e,a,t,s,o,i){const n=(0,l.up)("q-spinner-ios"),d=(0,l.up)("q-card-section"),r=(0,l.up)("q-badge"),g=(0,l.up)("q-td"),f=(0,l.up)("q-btn"),w=(0,l.up)("q-table"),h=(0,l.up)("q-pagination"),b=(0,l.up)("modal-add-user");return(0,l.wg)(),(0,l.iD)("div",u,[e.loading_list?((0,l.wg)(),(0,l.j4)(d,{key:0,class:"text-center q-pa-lg"},{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l.Wm)(n,{color:"white",size:"3rem"})])])),_:1})):((0,l.wg)(),(0,l.j4)(w,{key:1,rows:e.rows,columns:s.columns,"row-key":"id",square:!0,flat:"","hide-bottom":""},{"body-cell-status":(0,l.w5)((e=>[(0,l.Wm)(g,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{color:i.parseStatus(e.row.status).color},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(i.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),"body-cell-actions":(0,l.w5)((e=>[(0,l.Wm)(g,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{dense:"",round:"",color:"green-12",onClick:a=>i.view(e.row)},{default:(0,l.w5)((()=>[p])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])),(0,l._)("div",_,[(0,l.Wm)(h,{modelValue:e.current,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.current=a),i.getAllNONASC],max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max","onUpdate:modelValue"])]),e.show_modal_user?((0,l.wg)(),(0,l.j4)(b,{key:2,selected_item:e.selected_item,modal_type:"approval",getAllNONASC:i.getAllNONASC,closeModal:i.closeModal,is_update:e.is_update},null,8,["selected_item","getAllNONASC","closeModal","is_update"])):(0,l.kq)("",!0)])}const f={class:"q-pa-md q-gutter-sm"},w={class:"text-h6"},h=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),b={class:"text-h6 q-mb-md"},v=(0,l.Uk)(" Personal Information:"),A={class:"form row"},y={class:"col-12 col-md-6 q-pa-md"},q={class:"col-12 col-md-6 q-pa-md"},k={class:"col-12 col-md-6 q-pa-md"},U={class:"col-12 col-md-6 q-pa-md"},C={class:"col-12 col-md-6 q-pa-md"},S={class:"text-h6 q-mb-md"},W=(0,l.Uk)(" Account Information:"),Z={class:"form row"},V={class:"col-md-12 q-pa-md"},N={key:0,class:"col-12 col-md-6 q-pa-md"},Q={key:1,class:"col-12 col-md-6 q-pa-md"},x={key:0},D=(0,l.Uk)(" Note: Proceed to Account Information to complete adding of ASC user."),I=(0,l._)("br",null,null,-1),$=(0,l.Uk)(" Save"),j=(0,l.Uk)(" Save Updates"),M=(0,l.Uk)(" Approve");function O(e,a,t,s,o,i){const n=(0,l.up)("q-space"),d=(0,l.up)("q-btn"),r=(0,l.up)("q-card-section"),u=(0,l.up)("q-tab"),m=(0,l.up)("q-tabs"),p=(0,l.up)("q-icon"),_=(0,l.up)("q-input"),g=(0,l.up)("q-select"),O=(0,l.up)("update-signature"),T=(0,l.up)("q-card"),z=(0,l.up)("q-dialog"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(z,{modelValue:e.icon,"onUpdate:modelValue":a[12]||(a[12]=a=>e.icon=a),persistent:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{width:"900px","max-width":"80vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"row items-center q-pb-none"},{default:(0,l.w5)((()=>[(0,l._)("div",w,(0,c.zw)(t.is_update?"Update":"Add")+" ASC User",1),(0,l.Wm)(n),(0,l.wy)((0,l.Wm)(d,{icon:"close",flat:"",round:"",dense:"",onClick:t.closeModal},null,8,["onClick"]),[[B]])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:e.tab,"onUpdate:modelValue":a[3]||(a[3]=a=>e.tab=a),dense:"",align:"left",class:"text-dark","indicator-color":"blue","no-caps":!0},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"user",label:"User Details",onClick:a[0]||(a[0]=a=>e.active_tab="UserDetails")}),t.is_asc_user?((0,l.wg)(),(0,l.j4)(u,{key:0,name:"signature",label:"Signature",onClick:a[1]||(a[1]=a=>e.active_tab="Signature")})):(0,l.kq)("",!0),(0,l.Wm)(u,{name:"account",label:"Account Information",onClick:a[2]||(a[2]=a=>e.active_tab="AccountInfo")})])),_:1},8,["modelValue"]),h,(0,l.Wm)(T,{square:!0,flat:"",bordered:!0,class:"q-my-md"},{default:(0,l.w5)((()=>["UserDetails"==e.active_tab?((0,l.wg)(),(0,l.j4)(r,{key:0},{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l.Wm)(p,{name:"label_important",class:"text-red-15"}),v]),(0,l._)("div",A,[(0,l._)("div",y,[(0,l.Wm)(_,{outlined:"",label:"Given Name",modelValue:e.fname,"onUpdate:modelValue":a[4]||(a[4]=a=>e.fname=a)},null,8,["modelValue"])]),(0,l._)("div",q,[(0,l.Wm)(_,{outlined:"",label:"Middle Name",modelValue:e.mname,"onUpdate:modelValue":a[5]||(a[5]=a=>e.mname=a)},null,8,["modelValue"])]),(0,l._)("div",k,[(0,l.Wm)(_,{outlined:"",label:"Last Name",modelValue:e.lname,"onUpdate:modelValue":a[6]||(a[6]=a=>e.lname=a)},null,8,["modelValue"])]),(0,l._)("div",U,[(0,l.Wm)(_,{outlined:"",label:"Mobile Number",modelValue:e.phone,"onUpdate:modelValue":a[7]||(a[7]=a=>e.phone=a)},null,8,["modelValue"])]),(0,l._)("div",C,[(0,l.Wm)(g,{outlined:"",label:"User Role",options:e.role_options,"option-label":"name","option-value":"type",modelValue:e.usertype,"onUpdate:modelValue":a[8]||(a[8]=a=>e.usertype=a)},null,8,["options","modelValue"])])])])),_:1})):"Signature"==e.active_tab&&t.is_asc_user?((0,l.wg)(),(0,l.j4)(O,{key:1,ref:"signature_form"},null,512)):"AccountInfo"==e.active_tab?((0,l.wg)(),(0,l.j4)(r,{key:2},{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l.Wm)(p,{name:"label_important",class:"text-red-15"}),W]),(0,l._)("div",Z,[(0,l._)("div",V,[(0,l.Wm)(_,{outlined:"",label:"Email Address",modelValue:e.email,"onUpdate:modelValue":a[9]||(a[9]=a=>e.email=a),type:"email"},null,8,["modelValue"])]),t.is_update?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",N,[(0,l.Wm)(_,{outlined:"",label:"Password",modelValue:e.password,"onUpdate:modelValue":a[10]||(a[10]=a=>e.password=a),type:"password"},null,8,["modelValue"])])),t.is_update?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",Q,[(0,l.Wm)(_,{outlined:"",label:"Confirm Password",modelValue:e.confirm_password,"onUpdate:modelValue":a[11]||(a[11]=a=>e.confirm_password=a),type:"password"},null,8,["modelValue"])]))])])),_:1})):(0,l.kq)("",!0)])),_:1}),"UserDetails"==e.active_tab?((0,l.wg)(),(0,l.iD)("strong",x,[(0,l.Wm)(p,{name:"error_outline"}),D])):(0,l.kq)("",!0),I,"AccountInfo"!=e.active_tab||t.is_update?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(d,{key:1,class:"bg-blue-13 text-white",onClick:i.register},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"offline_pin"}),$])),_:1},8,["onClick"])),t.is_update?((0,l.wg)(),(0,l.j4)(d,{key:2,class:"bg-blue-13 text-white",onClick:i.register},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"offline_pin"}),j])),_:1},8,["onClick"])):(0,l.kq)("",!0),"AccountInfo"==e.active_tab&&t.is_update&&0==t.selected_item.status?((0,l.wg)(),(0,l.j4)(d,{key:3,class:"bg-blue-13 text-white",onClick:i.approve},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"offline_pin"}),M])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var T=t(6827);const z=e=>((0,l.dD)("data-v-17ebaac5"),e=e(),(0,l.Cn)(),e),B=z((()=>(0,l._)("div",{class:"text-h6",style:{display:"flex"}},[(0,l._)("i",{class:"fa-solid fa-upload",style:{color:"#a00000"}}),(0,l._)("span",{class:"card-header"},"Upload e-Signature")],-1))),P=z((()=>(0,l._)("div",{class:"text-h6",style:{display:"flex"}},[(0,l._)("span",{class:"card-header"}," Filename: ")],-1))),E={class:"row"},F={class:"col-lg-6 col-md-6 col-sm-12"};function X(e,a,t,s,o,i){const n=(0,l.up)("q-input"),d=(0,l.up)("q-card-section"),r=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{flat:"",bordered:"",class:"fields-card",style:{"margin-bottom":"1rem"}},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[B,P,(0,l._)("div",E,[(0,l._)("div",F,[(0,l.Wm)(n,{ref:"e-signature",name:"e-signature","onUpdate:modelValue":i.handle_file_change,type:"file",accept:"image/*"},null,8,["onUpdate:modelValue"])])])])),_:1})])),_:1})])),_:1})}const R={props:["allow_action","user_details"],data:()=>({info:{e_signature_file:null,e_signature_file_path:null}}),methods:{handle_file_change(e){var a,t;if(e[0]){if(null===e||void 0===e||null===(a=e[0])||void 0===a||null===(t=a.type)||void 0===t||!t.includes("image"))return this.$refs["e-signature"].$refs.input&&(this.$refs["e-signature"].$refs.input.value=null),this.$q.notify({type:"negative",position:"top-right",message:"Only images file accepted."});this.e_signature_file=e[0],console.log("fdfdf"),this.$emit("update:allow_action",!0)}},on_submit_update(e){e({e_signature_file:this.e_signature_file,e_signature_file_path:this.e_signature_file_path})}},mounted(){this.$emit("update:allow_action",!1),this.e_signature_file=null,this.e_signature_file_path=null}};var G=t(11639),L=t(63190),H=t(44458),J=t(22857),K=t(50926),Y=t(66611),ee=t(69984),ae=t.n(ee);const te=(0,G.Z)(R,[["render",X],["__scopeId","data-v-17ebaac5"]]),le=te;ae()(R,"components",{QCardSection:L.Z,QCard:H.Z,QIcon:J.Z,QSeparator:K.Z,QInput:Y.Z});const se={props:["closeModal","modal_type","selected_item","is_update","getAllNONASC","is_asc_user"],data:()=>({icon:!0,fname:"",mname:"",lname:"",phone:"",user_role:"",email:"",password:"",confirm_password:"",usertype:"",role_options:[],active_tab:"UserDetails",tab:"user"}),mounted(){this.initApp()},watch:{usertype(e,a){console.log(e)}},components:{updateSignature:le},methods:{async getSpecific(){let e=this,a={id:e.selected_item.id},{data:t,status:l}=await this.$store.dispatch("account/getOneUser",a);if([200,201].includes(l))for(let s in t)e[s]=t[s]},async getAllUserRoles(){let e={page:1,size:50,order:"name:asc",search:""},{data:a,status:t}=await this.$store.dispatch("account/getAllUserTypes",e),l=a.rows.filter((e=>"applcnt"!=e.type));this.role_options=l.map((e=>({name:e.name,type:e.type}))),console.log(this.role_options)},async register(){let e=this,a={type:e.usertype.type,fname:e.fname.toUpperCase(),lname:e.lname.toUpperCase(),mname:e.mname.toUpperCase(),phone:e.phone,email:e.email,passwd:e.password,status:1},t="users/registerUser";if(e.is_update&&(delete a.passwd,a={data:{...a},params:{id:e.selected_item.id}},t="users/updateUser","Signature"==this.active_tab)){let e=new FormData;e.append("file",this.$refs.signature_form.e_signature_file),e.append("id",this.selected_item.id),a=e,t="account/updateESign"}let{data:l,status:s}=await e.$store.dispatch(t,a);[200,201].includes(s)?(T.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.closeModal()):T.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async approve(){let e=this,a={data:{status:1},params:{id:e.selected_item.id}},{data:t,status:l}=await e.$store.dispatch("users/updateUser",a);[200,201].includes(l)?(T.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.closeModal(),this.getAllNONASC()):T.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},initApp(){if(this.getAllUserRoles(),"approval"===this.modal_type)for(let e in this.selected_item)this[e]=this.selected_item[e];this.is_update&&this.getSpecific()}}};var oe=t(32074),ie=t(90136),ne=t(68879),de=t(47817),re=t(70900),ce=t(67887),ue=t(62146);const me=(0,G.Z)(se,[["render",O]]),pe=me;ae()(se,"components",{QDialog:oe.Z,QCard:H.Z,QCardSection:L.Z,QSpace:ie.Z,QBtn:ne.Z,QTabs:de.Z,QTab:re.Z,QIcon:J.Z,QInput:Y.Z,QSelect:ce.Z}),ae()(se,"directives",{ClosePopup:ue.Z});const _e=[{name:"id",align:"center",label:"ID",field:"id",sortable:!0},{name:"fname",align:"center",label:"Full name",field:"fullname",sortable:!0},{name:"email_address",align:"center",label:"Email Address",field:"email"},{name:"mobile_num",align:"center",label:"Mobile Number",field:"phone"},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"",sortable:!1}],ge={props:["tableData","update"],data:()=>({rows:[],is_update:!1,is_approval_modal:!1,selected_item:null,show_modal_user:!1,current:1,size:5,max:0,loading_list:!1}),watch:{},mounted(){this.initApp()},components:{modalAddUser:pe},methods:{initApp(){this.getAllNONASC()},async getAllNONASC(){this.loading=!0;let e=this;e.loading_list=!0;let a={page:e.current,size:e.size,order:"id:asc",search:"",filter:"non"},{data:t,status:l}=await this.$store.dispatch("account/getAllUsers",a);[200,201].includes(l)&&this.$nextTick((()=>{this.rows=t.rows,e.table_data=t.rows,e.current=t.cpage,e.max=t.tpage,this.loading=!1})),e.loading_list=!1},view(e){let a=this;console.log(e),a.selected_item=e,a.is_update=!0,a.show_modal_user=!0},closeModal(){this.show_modal_user=!1},parseStatus(e){switch(e){case 0:return{val:"pending",color:"grey"};case 1:return{val:"active",color:"green"}}}},setup(){return{columns:_e}}};var fe=t(38359),we=t(81463),he=t(67220),be=t(20990),ve=t(80996);const Ae=(0,G.Z)(ge,[["render",g]]),ye=Ae;ae()(ge,"components",{QCardSection:L.Z,QSpinnerIos:fe.Z,QTable:we.Z,QTd:he.Z,QBadge:be.Z,QBtn:ne.Z,QPagination:ve.Z});const qe={class:"q-mt-md"},ke={class:"loading-page"},Ue=(0,l._)("i",{class:"fa fa-eye"},null,-1),Ce={class:"text-right q-mt-md"};function Se(e,a,t,s,o,i){const n=(0,l.up)("q-spinner-ios"),d=(0,l.up)("q-card-section"),r=(0,l.up)("q-badge"),u=(0,l.up)("q-td"),m=(0,l.up)("q-btn"),p=(0,l.up)("q-table"),_=(0,l.up)("q-pagination"),g=(0,l.up)("modal-add-user");return(0,l.wg)(),(0,l.iD)("div",qe,[e.loading_list?((0,l.wg)(),(0,l.j4)(d,{key:0,class:"text-center q-pa-lg"},{default:(0,l.w5)((()=>[(0,l._)("div",ke,[(0,l.Wm)(n,{color:"white",size:"3rem"})])])),_:1})):((0,l.wg)(),(0,l.j4)(p,{key:1,rows:e.rows,columns:s.columns,"row-key":"id",square:!0,flat:"","hide-bottom":""},{"body-cell-status":(0,l.w5)((e=>[(0,l.Wm)(u,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{color:i.parseStatus(e.row.status).color},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(i.parseStatus(e.row.status).val),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),"body-cell-actions":(0,l.w5)((e=>[(0,l.Wm)(u,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{dense:"",round:"",color:"green-12",onClick:a=>i.view(e.row)},{default:(0,l.w5)((()=>[Ue])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])),(0,l._)("div",Ce,[(0,l.Wm)(_,{modelValue:e.current,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.current=a),i.getAllNONASC],max:e.max,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max","onUpdate:modelValue"])]),e.show_modal_user?((0,l.wg)(),(0,l.j4)(g,{key:2,selected_item:e.selected_item,modal_type:"approval",is_asc_user:!0,getAllNONASC:i.getAllNONASC,closeModal:i.closeModal,is_update:e.is_update},null,8,["selected_item","getAllNONASC","closeModal","is_update"])):(0,l.kq)("",!0)])}const We=[{name:"id",align:"center",label:"ID",field:"id",sortable:!0},{name:"fname",align:"center",label:"Full name",field:"fullname",sortable:!0},{name:"email_address",align:"center",label:"Email Address",field:"email"},{name:"mobile_num",align:"center",label:"Mobile Number",field:"phone"},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"",sortable:!1}],Ze={props:["tableData","update"],data:()=>({rows:[],is_update:!1,is_approval_modal:!1,show_add_user_modal:!1,selected_item:null,show_modal_user:!1,current:1,size:5,max:0,loading_list:!1}),watch:{},mounted(){this.initApp()},components:{modalAddUser:pe},methods:{initApp(){this.getAllNONASC()},async getAllNONASC(){this.loading=!0;let e=this;e.loading_list=!0;let a={page:e.current,size:e.size,order:"id:asc",search:""},{data:t,status:l}=await this.$store.dispatch("account/getAllUsers",a);[200,201].includes(l)&&this.$nextTick((()=>{this.rows=t.rows,e.table_data=t.rows,e.current=t.cpage,e.max=t.tpage,this.loading=!1})),e.loading_list=!1},view(e){let a=this;console.log(e),a.selected_item=e,a.is_update=!0,a.show_modal_user=!0},closeModal(){this.show_modal_user=!1},parseStatus(e){switch(e){case 0:return{val:"pending",color:"grey"};case 1:return{val:"active",color:"green"}}}},setup(){return{columns:We}}},Ve=(0,G.Z)(Ze,[["render",Se]]),Ne=Ve;ae()(Ze,"components",{QCardSection:L.Z,QSpinnerIos:fe.Z,QTable:we.Z,QTd:he.Z,QBadge:be.Z,QBtn:ne.Z,QPagination:ve.Z});const Qe={name:"AdminAnnouncements",data:()=>({active_tab:"nonasc",all_nonc:[],loading:!0,tab:"nonasc",is_update:!1}),components:{AppNonAscTable:ye,AppAscTable:Ne},mounted(){this.active_tab="nonasc"},methods:{setActiveTab(e){this.tab=e},showAddASCUser(e){this.$refs.asc.show_modal_user=!0,this.$refs.asc.is_update=e}},setup(){return{}}},xe=(0,G.Z)(Qe,[["render",r]]),De=xe;ae()(Qe,"components",{QCard:H.Z,QCardSection:L.Z,QIcon:J.Z,QSeparator:K.Z,QTabs:de.Z,QTab:re.Z,QBtn:ne.Z});const Ie={data:()=>({}),components:{AppUserAccounts:De},methods:{}},$e=(0,G.Z)(Ie,[["render",s]]),je=$e}}]);
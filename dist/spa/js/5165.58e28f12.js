(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[5165],{5165:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>Qa});var t=o(9835),l=o(6598),s=o.n(l);const i={class:"q-pa-md q-ml-lg"},n={class:"row q-mb-lg"},r={class:"col-12 col-md-8"},d={class:"col-12 col-md-4"},m={class:"flex-items-center"},c={class:"bg-white login-form"},p=(0,t._)("div",{class:"login-form-header text-center"},[(0,t._)("img",{src:s(),style:{width:"15em"}}),(0,t._)("h5",{class:"q-ma-sm"},[(0,t._)("b",null,"Login")])],-1),u={class:"q-form q-mr-sm q-ml-sm q-pa-md"},f={class:"q-gutter-md"},_={class:"row q-mt-lg"},h={class:"col-sm-6 q-pa-sm"},g={class:"col-sm-6 q-pa-sm"},v=(0,t._)("div",{class:"text-center"},[(0,t._)("a",{href:"#",class:"forgot-password-btn"},[(0,t._)("small",null,"Forgot Password")])],-1),w={class:"modals"};function b(e,a,o,l,s,b){const y=(0,t.up)("appLoading"),q=(0,t.up)("app-carousel"),V=(0,t.up)("q-input"),k=(0,t.up)("q-btn"),C=(0,t.up)("app-register-modal");return(0,t.wg)(),(0,t.iD)("div",i,[e.is_loading?((0,t.wg)(),(0,t.j4)(y,{key:0,title:"Logging in"})):(0,t.kq)("",!0),(0,t._)("div",n,[(0,t._)("div",r,[(0,t.Wm)(q)]),(0,t._)("div",d,[(0,t._)("div",m,[(0,t._)("div",c,[p,(0,t._)("div",u,[(0,t._)("div",f,[(0,t.Wm)(V,{modelValue:e.email_address,"onUpdate:modelValue":a[0]||(a[0]=a=>e.email_address=a),label:"Email Address",type:"email"},null,8,["modelValue"]),(0,t.Wm)(V,{"bottom-slots":"",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),type:e.showPass?"text-pass":"password",label:"Password"},{append:(0,t.w5)((()=>[(0,t.Wm)(k,{round:"",dense:"",flat:"",icon:e.showPass?"visibility_off":"visibility ",onClick:b.showHidePassword},null,8,["icon","onClick"])])),_:1},8,["modelValue","type"])]),(0,t._)("div",_,[(0,t._)("div",h,[(0,t.Wm)(k,{color:"primary",label:"Login",onClick:b.login,class:"btn-block"},null,8,["onClick"])]),(0,t._)("div",g,[(0,t.Wm)(k,{color:"primary",label:"Register",outline:"",class:"btn-block",onClick:a[2]||(a[2]=e=>b.openRegisterModal())})])]),v])])])])]),(0,t._)("div",w,[e.show_register_modal?((0,t.wg)(),(0,t.j4)(C,{key:0,closeModal:b.closeModal},null,8,["closeModal"])):(0,t.kq)("",!0)])])}const y={class:"q-pa-lg"};function q(e,a,o,l,i,n){const r=(0,t.up)("q-carousel-slide"),d=(0,t.up)("q-carousel");return(0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)(d,{animated:"",modelValue:l.slide,"onUpdate:modelValue":a[0]||(a[0]=e=>l.slide=e),arrows:"",navigation:"",infinite:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{name:1,"img-src":s()}),(0,t.Wm)(r,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,t.Wm)(r,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,t.Wm)(r,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue"])])}var V=o(499);const k={setup(){return{slide:(0,V.iH)(1)}}};var C=o(1639),W=o(7052),Z=o(1694),A=o(9984),x=o.n(A);const I=(0,C.Z)(k,[["render",q]]),Q=I;x()(k,"components",{QCarousel:W.Z,QCarouselSlide:Z.Z});var U=o(799);const S={class:"q-gutter-sm"},F=(0,t._)("div",{class:"text-h6 text-red-15 text-bold"},"Account Registration",-1),M={class:"text-red-14"},D=(0,t._)("i",null,[(0,t.Uk)(" All fields with * are required, "),(0,t._)("span",{class:"text-dark"},"Please provide all required details to register.")],-1),R={class:"q-pa-md"},P={class:"form-group"},$=(0,t._)("label",{for:"agree"}," Accept Terms and Agreement",-1);function T(e,a,o,l,s,i){const n=(0,t.up)("q-icon"),r=(0,t.up)("q-space"),d=(0,t.up)("q-btn"),m=(0,t.up)("q-card-section"),c=(0,t.up)("app-terms-tab"),p=(0,t.up)("q-step"),u=(0,t.up)("app-personal-info-tab"),f=(0,t.up)("app-company-info-tab"),_=(0,t.up)("app-account-info-tab"),h=(0,t.up)("vue-recaptcha"),g=(0,t.up)("q-stepper-navigation"),v=(0,t.up)("q-stepper"),w=(0,t.up)("q-card"),b=(0,t.up)("q-dialog"),y=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",S,[(0,t.Wm)(b,{modelValue:e.icon,"onUpdate:modelValue":a[4]||(a[4]=a=>e.icon=a),persistent:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{style:{width:"1000px","max-width":"80vw"},class:"q-py-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"row items-center q-pb-none"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[F,(0,t._)("small",M,[(0,t.Wm)(n,{class:"text-h5",name:"error_outline"}),D])]),(0,t.Wm)(r),(0,t.wy)((0,t.Wm)(d,{icon:"close",flat:"",round:"",dense:"",onClick:o.closeModal},null,8,["onClick"]),[[y]])])),_:1}),(0,t._)("div",R,[(0,t.Wm)(v,{modelValue:e.step,"onUpdate:modelValue":a[3]||(a[3]=a=>e.step=a),ref:"stepper",color:"negative","active-color":"green","done-color":"negative","done-icon":"edit",animated:""},{navigation:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[4==e.step?((0,t.wg)(),(0,t.j4)(h,{key:0,ref:"recaptcha",onVerify:i.markRecaptchaAsVerified,sitekey:"6LcYqMAhAAAAABPJ7Q3Tw-IPZ6lXh7pD8Q5uR1rC",class:"q-mb-lg"},null,8,["onVerify"])):(0,t.kq)("",!0),e.step>1?((0,t.wg)(),(0,t.j4)(d,{key:1,elevated:"",onClick:a[1]||(a[1]=a=>e.$refs.stepper.previous()),label:"Back",class:"q-mr-sm"})):(0,t.kq)("",!0),e.agree_to_terms?((0,t.wg)(),(0,t.j4)(d,{key:2,onClick:a[2]||(a[2]=e=>i.next()),color:"primary",label:4===e.step?"Submit":"Next"},null,8,["label"])):(0,t.kq)("",!0)])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(p,{name:1,title:"Privacy Notice","active-icon":"fa fa-1",done:e.step>1},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{ref:"terms"},null,512),(0,t._)("div",P,[(0,t.wy)((0,t._)("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=a=>e.agree_to_terms=a),id:"agree"},null,512),[[U.e8,e.agree_to_terms]]),$])])),_:1},8,["done"]),(0,t.Wm)(p,{name:2,title:"Personal Information",icon:"fa fa-2","active-icon":"fa fa-2",done:e.step>2},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{ref:"personal_info",default_val:e.personal_info},null,8,["default_val"])])),_:1},8,["done"]),(0,t.Wm)(p,{name:3,title:"Company Information",icon:"fa fa-3","active-icon":"fa fa-3",done:e.step>3},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{ref:"company_info",default_val:e.company_info},null,8,["default_val"])])),_:1},8,["done"]),(0,t.Wm)(p,{name:4,title:"Account Information",icon:"fa fa-4","active-icon":"fa fa-4","done-color":"negative"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{ref:"account_info",default_val:e.account_info},null,8,["default_val"])])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1},8,["modelValue"])])}var N=o(4328);const L={class:"text-h6"},B=(0,t.Uk)("Terms and Agreements "),j=(0,t._)("div",{class:"q-ma-lg text-grey-7"},' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ',-1);function z(e,a,o,l,s,i){const n=(0,t.up)("q-icon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",L,[(0,t.Wm)(n,{name:"label_important"}),B]),j])}const E={data:()=>({agree_to_terms:!1})};var X=o(2857);const H=(0,C.Z)(E,[["render",z]]),O=H;x()(E,"components",{QIcon:X.Z});const G={class:"text-h6 q-mb-md"},K=(0,t.Uk)(" Personal Information:"),Y={class:"row"},J={class:"col-md-6 col-lg-6 q-pa-sm"},ee={class:"col-md-6 col-lg-6 q-pa-sm"},ae={class:"col-md-6 col-lg-6 q-pa-sm"},oe={class:"col-md-6 col-lg-6 q-pa-sm"};function te(e,a,o,l,s,i){const n=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),d=(0,t.up)("q-form"),m=(0,t.up)("q-card-section"),c=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(c,{square:!0,elevated:"",bordered:!0,class:"q-my-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",G,[(0,t.Wm)(n,{name:"label_important",class:"text-red-15"}),K]),(0,t.Wm)(d,{onSubmit:(0,U.iM)(i.onSubmit,["prevent"]),onReset:i.onReset,class:"q-gutter-md",ref:"personal_info_form",greedy:!0},{default:(0,t.w5)((()=>[(0,t._)("div",Y,[(0,t._)("div",J,[(0,t.Wm)(r,{outlined:"",label:"Given Name *",modelValue:e.fname,"onUpdate:modelValue":a[0]||(a[0]=a=>e.fname=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",ee,[(0,t.Wm)(r,{outlined:"",label:"Middle Name",modelValue:e.mname,"onUpdate:modelValue":a[1]||(a[1]=a=>e.mname=a)},null,8,["modelValue"])]),(0,t._)("div",ae,[(0,t.Wm)(r,{outlined:"",label:"Last Name *",modelValue:e.lname,"onUpdate:modelValue":a[2]||(a[2]=a=>e.lname=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",oe,[(0,t.Wm)(r,{outlined:"",label:"Mobile Number *",modelValue:e.phone,"onUpdate:modelValue":a[3]||(a[3]=a=>e.phone=a),mask:"0###########",hint:"09##########",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})}const le={props:{default_val:Object},data:()=>({fname:"",mname:"",lname:"",phone:null}),mounted(){console.log(this.default_val,"Personal Info."),this.initApp()},methods:{initApp(){for(let e in this.default_val)this[e]=this.default_val[e]},async onSubmit(e){return await this.$refs.personal_info_form.validate()},onReset(){}}};var se=o(4458),ie=o(3190),ne=o(8326),re=o(6611);const de=(0,C.Z)(le,[["render",te]]),me=de;x()(le,"components",{QCard:se.Z,QCardSection:ie.Z,QIcon:X.Z,QForm:ne.Z,QInput:re.Z});const ce={class:"text-h6 q-mb-md"},pe=(0,t.Uk)(" Company Information:"),ue={class:"row"},fe={class:"col-md-6 col-lg-6 q-pa-sm"},_e=(0,t.Uk)(" No results "),he={class:"col-md-6 col-lg-6 q-pa-sm"};function ge(e,a,o,l,s,i){const n=(0,t.up)("q-icon"),r=(0,t.up)("q-item-section"),d=(0,t.up)("q-item"),m=(0,t.up)("q-select"),c=(0,t.up)("q-input"),p=(0,t.up)("q-form"),u=(0,t.up)("q-card-section"),f=(0,t.up)("app-add-company-modal"),_=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(_,{square:!0,elevated:"",bordered:!0,class:"q-my-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t._)("div",ce,[(0,t.Wm)(n,{name:"label_important",class:"text-red-15"}),pe]),(0,t.Wm)(p,{onSubmit:(0,U.iM)(i.onSubmit,["prevent"]),ref:"personal_info_form",greedy:!0},{default:(0,t.w5)((()=>[(0,t._)("div",ue,[(0,t._)("div",fe,[(0,t.Wm)(m,{modelValue:e.compID,"onUpdate:modelValue":a[0]||(a[0]=a=>e.compID=a),"use-input":"",outlined:"","input-debounce":"0",label:"Company",options:e.options,"options-html":!0,"option-value":e=>null===e?null:e.value,onFilter:i.filterFn},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[_e])),_:1})])),_:1})])),_:1},8,["modelValue","options","option-value","onFilter"])]),(0,t._)("div",he,[(0,t.Wm)(c,{outlined:"",label:"Member Affiliation",modelValue:e.member_affiliation,"onUpdate:modelValue":a[1]||(a[1]=a=>e.member_affiliation=a),disable:!0},null,8,["modelValue"])])])])),_:1},8,["onSubmit"])])),_:1}),e.show_company_modal?((0,t.wg)(),(0,t.j4)(f,{key:0,saveCompany:i.saveCompany,closeAddCompanyModal:i.closeAddCompanyModal},null,8,["saveCompany","closeAddCompanyModal"])):(0,t.kq)("",!0)])),_:1})}const ve={class:"q-gutter-sm"},we=(0,t._)("div",null,[(0,t._)("div",{class:"text-h6 text-red-15 text-bold"},[(0,t._)("i",{class:"fa fa-building text-dark"}),(0,t.Uk)(" Company")])],-1),be=(0,t._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),ye={class:"q-pa-md"},qe=(0,t.Uk)(" Company Information"),Ve={class:"row"},ke={class:"col-sm-12 col-md-8 q-pa-sm"},Ce={class:"col-sm-12 col-md-4 q-pa-sm"},We=(0,t.Uk)(" No results "),Ze={class:"row"},Ae={class:"col-sm-12 col-md-3 q-pa-sm"},xe={class:"col-sm-12 col-md-3 q-pa-sm"},Ie={class:"col-sm-12 col-md-3 q-pa-sm"},Qe={class:"col-sm-12 col-md-3 q-pa-sm"},Ue={class:"row"},Se={class:"col-sm-12 col-md-6 q-pa-sm"},Fe={class:"col-sm-12 col-md-6 q-pa-sm"},Me={class:"q-pa-md"},De=(0,t.Uk)(" Address"),Re={class:"row"},Pe={class:"col-sm-12 col-md-6 q-pa-sm"},$e={class:"col-sm-12 col-md-6 q-pa-sm"},Te=(0,t._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),Ne=(0,t.Uk)(" Save");function Le(e,a,o,l,s,i){const n=(0,t.up)("q-space"),r=(0,t.up)("q-btn"),d=(0,t.up)("q-card-section"),m=(0,t.up)("q-icon"),c=(0,t.up)("q-input"),p=(0,t.up)("q-item-section"),u=(0,t.up)("q-item"),f=(0,t.up)("q-select"),_=(0,t.up)("q-form"),h=(0,t.up)("q-card"),g=(0,t.up)("q-dialog"),v=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",ve,[(0,t.Wm)(g,{modelValue:e.add_company,"onUpdate:modelValue":a[10]||(a[10]=a=>e.add_company=a),persistent:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{style:{width:"800px","max-width":"80vw"},class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"row items-center"},{default:(0,t.w5)((()=>[we,(0,t.Wm)(n),(0,t.wy)((0,t.Wm)(r,{icon:"close",flat:"",round:"",dense:"",onClick:o.closeAddCompanyModal},null,8,["onClick"]),[[v]])])),_:1}),be,(0,t._)("div",ye,[(0,t.Wm)(h,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(m,{name:"label_important",class:"text-h6 text-red-15"}),qe]),(0,t.Wm)(_,{ref:"company_info_form",onSubmit:(0,U.iM)(i.submit,["prevent"]),greedy:!0},{default:(0,t.w5)((()=>[(0,t._)("div",Ve,[(0,t._)("div",ke,[(0,t.Wm)(c,{outlined:"",label:"Company Name *",modelValue:e.company_name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.company_name=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",Ce,[(0,t.Wm)(f,{modelValue:e.affiliation,"onUpdate:modelValue":a[1]||(a[1]=a=>e.affiliation=a),"input-debounce":"0",outlined:"",label:"Affiliation *",options:e.options,rules:[e=>!!e||"Field is required"]},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"text-grey"},{default:(0,t.w5)((()=>[We])),_:1})])),_:1})])),_:1},8,["modelValue","options","rules"])])]),(0,t._)("div",Ze,[(0,t._)("div",Ae,[(0,t.Wm)(c,{outlined:"",label:"Mobile Number *",modelValue:e.mobile_num,"onUpdate:modelValue":a[2]||(a[2]=a=>e.mobile_num=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",xe,[(0,t.Wm)(c,{outlined:"",label:"Telephone Number *",modelValue:e.telephone_number,"onUpdate:modelValue":a[3]||(a[3]=a=>e.telephone_number=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",Ie,[(0,t.Wm)(c,{outlined:"",label:"Alternate Telephone Number*",modelValue:e.alt_telephone_number,"onUpdate:modelValue":a[4]||(a[4]=a=>e.alt_telephone_number=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",Qe,[(0,t.Wm)(c,{outlined:"",label:"TIN *",modelValue:e.company_tin,"onUpdate:modelValue":a[5]||(a[5]=a=>e.company_tin=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])]),(0,t._)("div",Ue,[(0,t._)("div",Se,[(0,t.Wm)(c,{outlined:"",label:"Accounting Representative *",modelValue:e.accounting_rep,"onUpdate:modelValue":a[6]||(a[6]=a=>e.accounting_rep=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",Fe,[(0,t.Wm)(c,{outlined:"",label:"Representative Email Address *",modelValue:e.accounting_rep_email,"onUpdate:modelValue":a[7]||(a[7]=a=>e.accounting_rep_email=a),type:"email",rules:[e=>!!e||"Field is required",i.isValidEmail]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})]),(0,t._)("div",Me,[(0,t.Wm)(h,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(m,{name:"label_important",class:"text-h6 text-red-15"}),De]),(0,t.Wm)(_,{ref:"company_adress_form",onSubmit:(0,U.iM)(i.submit,["prevent"]),greedy:!0},{default:(0,t.w5)((()=>[(0,t._)("div",Re,[(0,t._)("div",Pe,[(0,t.Wm)(c,{outlined:"",label:"Country *",modelValue:e.country,"onUpdate:modelValue":a[8]||(a[8]=a=>e.country=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",$e,[(0,t.Wm)(c,{outlined:"",label:"Company Address *",modelValue:e.company_address,"onUpdate:modelValue":a[9]||(a[9]=a=>e.company_address=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})]),Te,(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{color:"primary",onClick:i.submit},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"save"}),Ne])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const Be={props:["closeAddCompanyModal","saveCompany"],data:()=>({add_company:!0,company_name:"",affiliation:"",mobile_num:"",telephone_number:"",alt_telephone_number:"",company_tin:"",accounting_rep:"",accounting_rep_email:"",country:"",company_address:"",options:[],current:1,size:20}),mounted(){this.initApp()},methods:{initApp(){this.getAllAffiliation()},async validate(e){return await this.$refs.company_info_form.validate()&&await this.$refs.company_adress_form.validate()},async getAllAffiliation(){let e={page:this.current,size:this.size,order:"id:asc",search:""};this.loading_list=!0;try{let{data:a,status:o}=await this.$store.dispatch("affiliation/getAllAffiliation",e);[200,201].includes(o)&&a.rows.map((e=>{this.options.push({value:e.id,label:e.name})}))}catch(a){console.log(a,"STATUS")}this.loading_list=!1},async submit(){if(console.log(await this.validate()),await this.validate()){let e={type:"c",name:this.company_name.toUpperCase(),address:this.company_address.toUpperCase(),country:this.country.toUpperCase(),tinno:this.company_tin.toUpperCase(),phone:this.telephone_number.toUpperCase(),mobile:this.mobile_num.toUpperCase(),contact:{title:"NA",fname:this.accounting_rep.toUpperCase(),lname:"NA",mname:"NA",phone:"NA",email:this.accounting_rep_email},affiliateID:this.affiliation.value},{data:a,status:o}=await this.$store.dispatch("company/addCompany",e);console.log(a,"ADD COMPANY"),[200,201].includes(o)?(this.closeAddCompanyModal(),N.Z.create({message:"Successfully added company.",position:"top-right",closeBtn:"X",timeout:2e3,color:"green"})):N.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else N.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const a=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return a.test(e)||"Invalid email"}}};var je=o(2074),ze=o(136),Ee=o(8879),Xe=o(7817),He=o(7887),Oe=o(490),Ge=o(1233),Ke=o(2146);const Ye=(0,C.Z)(Be,[["render",Le]]),Je=Ye;x()(Be,"components",{QDialog:je.Z,QCard:se.Z,QCardSection:ie.Z,QSpace:ze.Z,QBtn:Ee.Z,QTabs:Xe.Z,QIcon:X.Z,QForm:ne.Z,QInput:re.Z,QSelect:He.Z,QItem:Oe.Z,QItemSection:Ge.Z}),x()(Be,"directives",{ClosePopup:Ke.Z});const ea={data:()=>({compID:"",add_company_btn:"<button style='background-color: seagreen; color: white; border-radius: 3px; border: 1px solid seagreen;'>Add New Company</button>",show_more:"<span class='text-grey q-pa-sm'><i class='fa fa-undo'></i> <i> Load More</i></span>",load_previous:"<span class='text-grey q-pa-sm'><i class='fa fa-undo'></i> <i> Load Previous</i></span>",member_affiliation:"",options:[],stringOptions:[],show_company_modal:!1,current:1,size:20,max_pages:0,search:"",is_first_load:!0}),props:["default_val"],components:{appAddCompanyModal:Je},mounted(){this.initApp()},watch:{compID(e,a){e.value==this.add_company_btn?(this.addCompany(),this.compID=""):e.value==this.show_more?(this.max_pages>this.current&&(this.current++,this.getAllCompanies()),this.compID=""):e.value==this.load_previous&&(this.current--,this.getAllCompanies(),this.compID=""),""!=this.compID&&(this.member_affiliation=e.affiliation.name)},search(){}},methods:{initApp(){for(let e in this.default_val)this[e]=this.default_val[e];this.getAllCompanies()},async onSubmit(e){return await this.$refs.personal_info_form.validate()},addCompany(){this.show_company_modal=!0},onReset(){},filterFn(e,a){let o=this;""!==e?o.search=e:a((()=>{this.options=this.stringOptions}))},async getAllCompanies(){let e={page:this.current,size:this.size,order:"id:desc",search:this.search};this.options.splice(this.options.length-1,1);let{data:a,status:o}=await this.$store.dispatch("company/getAllCompanies",e);a.rows.map((e=>{this.options.push({value:e.id,label:e.name,affiliation:e.affiliate})})),this.is_first_load&&(this.is_first_load=!1,this.options.unshift({value:this.add_company_btn,label:this.add_company_btn,affiliation:""})),this.options.push({value:this.show_more,label:this.show_more,affiliation:""}),this.stringOptions=this.options,this.max_pages=a.tpage},saveCompany(e){this.options.push(e),this.compID=e,this.member_affiliation=e.affiliation},closeAddCompanyModal(){this.show_company_modal=!1}}},aa=(0,C.Z)(ea,[["render",ge]]),oa=aa;x()(ea,"components",{QCard:se.Z,QCardSection:ie.Z,QIcon:X.Z,QForm:ne.Z,QSelect:He.Z,QItem:Oe.Z,QItemSection:Ge.Z,QInput:re.Z});const ta={class:"text-h6 q-mb-md"},la=(0,t.Uk)(" Account Information:"),sa={class:"row"},ia={class:"col-md-12 col-lg-12 q-pa-sm"},na={class:"col-md-6 col-lg-6 q-pa-sm"},ra={class:"col-md-6 col-lg-6 q-pa-sm"};function da(e,a,o,l,s,i){const n=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),d=(0,t.up)("q-form"),m=(0,t.up)("q-card-section"),c=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(c,{square:!0,elevated:"",bordered:!0,class:"q-my-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",ta,[(0,t.Wm)(n,{name:"label_important",class:"text-red-15"}),la]),(0,t.Wm)(d,{onSubmit:i.onSubmit,onReset:i.onReset,class:"q-gutter-md",ref:"personal_info_form",greedy:!0},{default:(0,t.w5)((()=>[(0,t._)("div",sa,[(0,t._)("div",ia,[(0,t.Wm)(r,{outlined:"",label:"Email *",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),type:"email",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",na,[(0,t.Wm)(r,{outlined:"",type:"password",label:"Password *",modelValue:e.passwd,"onUpdate:modelValue":a[1]||(a[1]=a=>e.passwd=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,t._)("div",ra,[(0,t.Wm)(r,{outlined:"",type:"password",label:"Confirm Password *",modelValue:e.confirm_password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.confirm_password=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})}const ma={data:()=>({email:"",passwd:"",confirm_password:""}),props:["default_val"],mounted(){this.initApp()},methods:{initApp(){for(let e in this.default_val)this[e]=this.default_val[e]},async onSubmit(e){return await this.$refs.personal_info_form.validate()},onReset(){}}},ca=(0,C.Z)(ma,[["render",da]]),pa=ca;x()(ma,"components",{QCard:se.Z,QCardSection:ie.Z,QIcon:X.Z,QForm:ne.Z,QInput:re.Z});var ua=o(1530);const fa={props:["closeModal"],data:()=>({icon:!0,active_tab:"UserDetails",tab:"user",recaptchaVerified:!1,agree_to_terms:!1,tab_list:[],personal_info:{fname:"",mname:"",lname:"",phone:""},company_info:{compID:"",member_affiliation:""},account_info:{email:"",passwd:"",confirm_password:""},step:(0,V.iH)(1)}),computed:{},methods:{invalidForm(){N.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:3e3})},markRecaptchaAsVerified(e){this.recaptchaVerified=!0},checkIfRecaptchaVerified(){if(!this.loginForm.recaptchaVerified)return this.loginForm.pleaseTickRecaptchaMessage="Please tick recaptcha.",!0;alert("form would be posted!")},async next(){let e=!1;switch(this.step){case 2:let a=this.$refs.personal_info;if(console.log(this.$refs.personal_info),e=await a.onSubmit(),!e)return this.invalidForm(),!1;for(let e in this.personal_info)this.personal_info[e]=a[e];break;case 3:let o=this.$refs.company_info;if(e=await o.onSubmit(),!e)return this.invalidForm(),!1;for(let e in this.company_info)this.company_info[e]=o[e];break;case 4:let t=this.$refs.account_info;if(e=await t.onSubmit(),!e)return this.invalidForm(),!1;for(let e in this.account_info)this.account_info[e]=t[e];if(!this.recaptchaVerified)return N.Z.create({message:"Validation error. Recaptcha is not verified!",position:"center",closeBtn:"X",timeout:3e3}),!1;this.submit();break}this.$refs.stepper.next()},async submit(){let e={...this.personal_info,...this.company_info,...this.account_info,compID:this.company_info.compID.value};delete e["confirm_password"],delete e["member_affiliation"];let{data:a,status:o}=await this.$store.dispatch("auth/registerApplicant",e);[200,201].includes(o)?(N.Z.create({message:"Successfully registered. Wait for admin approval. Thanks!",position:"top-right",closeBtn:"X",timeout:3e3}),this.closeModal()):N.Z.create({message:a.message,position:"center",closeBtn:"X",color:"red",timeout:3e3})}},components:{appTermsTab:O,appPersonalInfoTab:me,appCompanyInfoTab:oa,appAccountInfoTab:pa,VueRecaptcha:ua.Z},mounted(){}};var _a=o(8225),ha=o(6017),ga=o(1992);const va=(0,C.Z)(fa,[["render",T]]),wa=va;x()(fa,"components",{QDialog:je.Z,QCard:se.Z,QCardSection:ie.Z,QIcon:X.Z,QSpace:ze.Z,QBtn:Ee.Z,QStepper:_a.Z,QStep:ha.Z,QStepperNavigation:ga.Z}),x()(fa,"directives",{ClosePopup:Ke.Z});var ba=o(6970);const ya={class:"loading-page"},qa={class:"text-white text-center"};function Va(e,a,o,l,s,i){const n=(0,t.up)("q-spinner-ios");return(0,t.wg)(),(0,t.iD)("div",ya,[(0,t._)("div",null,[(0,t.Wm)(n,{color:"white",size:"7rem"}),(0,t._)("p",qa,(0,ba.zw)(o.title),1)])])}const ka={props:["title"]};var Ca=o(8359);const Wa=(0,C.Z)(ka,[["render",Va]]),Za=Wa;x()(ka,"components",{QSpinnerIos:Ca.Z});var Aa=o(3703);o(8953);const xa={name:"PageIndex",data:()=>({showPass:!1,password:"",email_address:"",show_register_modal:!1,is_loading:!1}),components:{appCarousel:Q,appRegisterModal:wa,appLoading:Za},mounted(){this.initAppp()},methods:{showHidePassword(){this.showPass=!this.showPass},initAppp(){},async login(){let e={email:this.email_address,passwd:this.password};this.is_loading=!0;try{let{data:a,status:o}=await this.$store.dispatch("auth/login",e);if([200,201].includes(o)){localStorage.setItem("token",a.token),Aa.Z.set("token",a.token),Aa.Z.set("user_email",a.email),Aa.Z.set("is_logged","1");let e={Authorization:`Bearer ${a.token}`},o=await this.$store.dispatch("users/getCurrentUser",e),t=o.data.id;if("evaltr"==a.type)return window.location.href="http://18.140.158.179:1315/redirect/?token="+a.token+"&id="+t,!1;if("adspe"==a.type)return window.location.href="http://18.140.158.179:1316/redirect/?token="+a.token+"&id="+t,!1;if("scrner"==a.type)return window.location.href="http://18.140.158.179:1317/redirect/?token="+a.token+"&id="+t,!1;if("revwer"==a.type)return window.location.href="http://18.140.158.179:1318/redirect/?token="+a.token+"&id="+t,!1;if("applcnt"==a.type)return window.location.href="http://18.140.158.179:4220/#/asc/page/announcement?token="+a.token+"&id="+t,!1;if("accnt"==a.type)return window.location.href="http://18.140.158.179:4230/#/asc/page/announcement?token="+a.token+"&id="+t,!1;window.location.href="/asc/page/"}else this.$q.dialog({message:a.message,title:"Access Denied!",progress:!1,color:"red-14",ok:!0})}catch(a){console.log(a),this.$q.dialog({message:"Something went wrong",title:"Access Denied!",progress:!1,ok:!0})}this.is_loading=!1},openRegisterModal(){this.show_register_modal=!0,this.$nextTick((()=>{let e=document.getElementsByTagName("body")[0];e.classList.remove("q-body--prevent-scroll")}))},closeModal(){this.show_register_modal=!1}}},Ia=(0,C.Z)(xa,[["render",b]]),Qa=Ia;x()(xa,"components",{QForm:ne.Z,QInput:re.Z,QBtn:Ee.Z})},6598:(e,a,o)=>{e.exports=o.p+"img/asc-logo.53497bda.jpg"}}]);
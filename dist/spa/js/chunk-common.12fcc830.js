(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[3064],{7273:(e,a,t)=>{"use strict";t.d(a,{Z:()=>h});var l=t(9835);function o(e,a,t,o,i,n){const s=(0,l.up)("q-icon"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-color"),r=(0,l.up)("q-item"),p=(0,l.up)("q-list"),c=(0,l.up)("q-btn-dropdown"),u=(0,l.up)("q-editor");return(0,l.wg)(),(0,l.j4)(u,{modelValue:i.editor,"onUpdate:modelValue":a[4]||(a[4]=e=>i.editor=e),"toolbar-bg":"grey-3",ref:"editor",toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"token","removeFormat","bold","italic","strike","underline","subscript","superscript","quote","unordered","ordered","outdent","indent","undo","redo"]],fonts:i.fonts},{token:(0,l.w5)((()=>[(0,l.Wm)(c,{dense:"","no-caps":"",ref:"token","no-wrap":"",unelevated:"",color:"white","text-color":"primary",label:"Higlight / Text Color",size:"sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{dense:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[1]||(a[1]=e=>n.color("backColor",i.highlight))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"highlight"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.highlight,"onUpdate:modelValue":a[0]||(a[0]=e=>i.highlight=e),"default-view":"palette","no-header":"","no-footer":"",palette:["#ffccccaa","#ffe6ccaa","#ffffccaa","#ccffccaa","#ccffe6aa","#ccffffaa","#cce6ffaa","#ccccffaa","#e6ccffaa","#ffccffaa","#ff0000aa","#ff8000aa","#ffff00aa","##00ff00aa","#00ff80aa","#00ffffaa","#0080ffaa","#0000ffaa","#8000ffaa","#ff00ffaa"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[3]||(a[3]=e=>n.color("foreColor",i.foreColor))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"format_paint"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.foreColor,"onUpdate:modelValue":a[2]||(a[2]=e=>i.foreColor=e),"no-header":"","no-footer":"","default-view":"palette",palette:["#ff0000","#ff8000","#ffff00","##00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","toolbar","fonts"])}const i={data(){return{foreColor:"#000000",highlight:"#ffff00aa",editor:"Select some text, then select a highlight or text color!",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}}},methods:{color(e,a){const t=this.$refs.editor;this.$refs.token.hide(),t.caret.restore(),t.runCmd(e,a),t.focus()}}};var n=t(1639),s=t(4695),d=t(8479),m=t(3246),r=t(490),p=t(1233),c=t(2857),u=t(1819),_=t(9984),f=t.n(_);const g=(0,n.Z)(i,[["render",o]]),h=g;f()(i,"components",{QEditor:s.Z,QBtnDropdown:d.Z,QList:m.Z,QItem:r.Z,QItemSection:p.Z,QIcon:c.Z,QColor:u.Z})},7607:(e,a,t)=>{"use strict";t.d(a,{Z:()=>Ba});var l=t(9835),o=t(6970),i=t(799);const n={class:"q-pa-md q-mt-lg q-ml-lg"},s={class:"text-h6 page-title text-dark col-md-6"},d=(0,l.Uk)(" S1 APPLICATION - INDIVIDUAL"),m={class:"text-right col-md-6"},r=(0,l._)("div",{class:"col-md-6 col-lg-6 col-sm-12"},[(0,l._)("strong",{class:"text-red-14 bold"},"Submission Date: September 28, 2022")],-1),p={class:"col-md-6 col-lg-6 col-sm-12 text-right"},c={class:"row q-mt-md q-pb-md",style:{"border-bottom":"1px solid lightgray"}},u={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},_={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},f={class:"row q-my-md"},g={class:"col-12 q-px-sm text-right"},h={key:1},b=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),y=(0,l._)("strong",{class:"text-grey-14"},"INTERNAL",-1),v=(0,l._)("strong",{class:"text-grey-14"},"EXTERNAL",-1),w={class:"q-mt-md"};function D(e,a,t,D,q,I){const k=(0,l.up)("q-icon"),W=(0,l.up)("q-btn"),V=(0,l.up)("q-card-section"),x=(0,l.up)("q-separator"),A=(0,l.up)("q-badge"),S=(0,l.up)("q-section"),U=(0,l.up)("q-input"),M=(0,l.up)("q-select"),T=(0,l.up)("ClientInformation"),C=(0,l.up)("PresentorInformation"),E=(0,l.up)("MaterialInformation"),Z=(0,l.up)("StampMaterials"),z=(0,l.up)("q-list"),N=(0,l.up)("q-spinner-grid"),L=(0,l.up)("q-tab"),Q=(0,l.up)("q-tabs"),O=(0,l.up)("RichText"),$=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)($,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(k,{name:"list"}),d]),(0,l._)("div",m,[(0,l.Wm)(W,{label:"VIEW APPLICATIONS",elevated:"",class:"q-mr-sm position-right",size:"md",icon:"list",color:"red-14",onClick:I.backToList},null,8,["onClick"])])])),_:1}),(0,l.Wm)(x,{inset:""}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"row"},{default:(0,l.w5)((()=>[r,(0,l._)("div",p,[(0,l.Wm)(A,{color:I.paymentStatusColor(e.payment_status).bg,class:(0,o.C_)(`q-pa-sm text-${I.paymentStatusColor(e.payment_status).text}`)},{default:(0,l.w5)((()=>[(0,l._)("strong",null,(0,o.zw)(e.payment_status)+": "+(0,o.zw)(I.intFormatter(e.amount)),1)])),_:1},8,["color","class"])])])),_:1}),(0,l._)("div",c,[(0,l._)("div",u,[(0,l.Wm)(U,{modelValue:e.application_type,"onUpdate:modelValue":a[0]||(a[0]=a=>e.application_type=a),label:"Application Type",outlined:""},null,8,["modelValue"])]),(0,l._)("div",_,[(0,l.Wm)(M,{modelValue:e.form_group,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form_group=a),label:"Submission Type",outlined:""},null,8,["modelValue"])])]),(0,l._)("div",f,[(0,l._)("div",g,[e.release_status||e.decision_status?((0,l.wg)(),(0,l.j4)(W,{key:0,color:"red-14",class:"q-mt-md",label:"SEND DECISION OR STAMPED MATERIAL",icon:"send",onClick:I.sendDecisionOrStamped},null,8,["onClick"])):(0,l.kq)("",!0)])]),e.is_loading?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(N,{color:"primary",size:"2em"})])):((0,l.wg)(),(0,l.j4)(z,{key:0,class:"rounded-borders"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"q-mb-sm"}),(0,l.Wm)(x),(0,l.Wm)(C,{class:"q-mb-sm"}),(0,l.Wm)(x),e.type_of_medium?((0,l.wg)(),(0,l.j4)(E,{key:0,appId:e.$route.params.id,class:"q-mb-sm",selected_item:e.selected_item},null,8,["appId","selected_item"])):(0,l.kq)("",!0),(0,l.Wm)(Z)])),_:1}))])),_:1}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)($,{square:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=a=>e.tab=a),dense:"","indicator-color":"blue",class:"text-grey-14"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{name:"internal_comments_tab",label:"Internal Comments"}),(0,l.Wm)(L,{name:"external_comments_tab",label:"External Comments"})])),_:1},8,["modelValue"]),b])),_:1}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>["internal_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(i.uT,{key:0,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[y,(0,l.Wm)(O,{modelValue:e.internal_comment_input,"onUpdate:modelValue":a[3]||(a[3]=a=>e.internal_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),"external_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(i.uT,{key:1,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[v,(0,l.Wm)(O,{modelValue:e.external_comment_input,"onUpdate:modelValue":a[4]||(a[4]=a=>e.external_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),(0,l._)("div",w,[(0,l.Wm)(W,{label:"Save",size:"sm",icon:"comment_bank",color:I.disable_comment_btn?"grey-14":"red-14",disabled:I.disable_comment_btn,onClick:I.saveComment,class:"q-mr-sm"},null,8,["color","disabled","onClick"]),(0,l.Wm)(W,{label:"Cancel",size:"sm",icon:"cancel",color:I.disable_comment_btn?"grey-14":"red-14",disabled:I.disable_comment_btn},null,8,["color","disabled"])])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(V)])),_:1})])}const q=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Client Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Affiliation and Company details ")],-1),I={class:"row items-center"},k={class:"row"},W={class:"col-md-7 col-lg-7 col-sm-12 q-pa-sm"},V={class:"col-md-5 col-lg-5 col-sm-12 q-pa-sm"},x={class:"row"},A={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},S={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},U={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"};function M(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-select"),p=(0,l.up)("q-input"),c=(0,l.up)("q-form"),u=(0,l.up)("q-card-section"),_=(0,l.up)("q-card"),f=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(f,{"header-class":"text-dark bg-blue-2 shadow-3"},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",I,[(0,l.Wm)(m,{name:"perm_contact_calendar",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"text-dark bordere-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",k,[(0,l._)("div",W,[(0,l.Wm)(r,{outlined:"",label:"Client Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",V,[(0,l.Wm)(r,{outlined:"",label:"Client Membership Affiliation",modelValue:n.parentData.affiliate_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.affiliate_name=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",x,[(0,l._)("div",A,[(0,l.Wm)(p,{outlined:"",label:"Brand",modelValue:n.parentData.brand,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.brand=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",S,[(0,l.Wm)(p,{outlined:"",label:"Product",modelValue:n.parentData.product,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.product=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",U,[(0,l.Wm)(p,{outlined:"",label:"Category",modelValue:n.parentData.category,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.category=e),disable:""},null,8,["modelValue"])])])])),_:1})])),_:1})])),_:1})])),_:1})}const T={data:()=>({company_name:"",affiliation_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){let e=this;e.initApp()},methods:{initApp(){this.getAffiliation()},async getAffiliation(){if(this.parentData.company.affiliateID){let e=this,a={id:this.parentData.company.affiliateID},{data:t,status:l}=await e.$store.dispatch("affiliation/getSpecificAffiliation",a);[200,201].includes(l)&&(e.affiliation_name=t.name)}}}};var C=t(1639),E=t(651),Z=t(1233),z=t(1357),N=t(2857),L=t(4458),Q=t(3190),O=t(8326),$=t(7887),P=t(6611),R=t(9984),B=t.n(R);const F=(0,C.Z)(T,[["render",M]]),G=F;B()(T,"components",{QExpansionItem:E.Z,QItemSection:Z.Z,QAvatar:z.Z,QIcon:N.Z,QCard:L.Z,QCardSection:Q.Z,QForm:O.Z,QSelect:$.Z,QInput:P.Z});const j=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Presentor Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Personal Details ")],-1),X={class:"row items-center"},H={class:"row"},Y={class:"col-sm-12 q-pa-sm"},K={class:"col-sm-12 q-pa-sm"},J={class:"col-sm-12 q-pa-sm"},ee={class:"row"},ae={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},te={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},le={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},oe={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"};function ie(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-input"),p=(0,l.up)("q-form"),c=(0,l.up)("q-card-section"),u=(0,l.up)("q-card"),_=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(_,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[j])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",X,[(0,l.Wm)(m,{name:"person",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l._)("div",H,[(0,l._)("div",Y,[(0,l.Wm)(r,{outlined:"",label:"Name of Applicant",modelValue:n.parentData.applicant_fullname,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.applicant_fullname=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",K,[(0,l.Wm)(r,{outlined:"",label:"Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",J,[(0,l.Wm)(r,{outlined:"",label:"Address",modelValue:n.parentData.address,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.address=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",ee,[(0,l._)("div",ae,[(0,l.Wm)(r,{outlined:"",label:"Mobile Number",modelValue:n.parentData.company_phone,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.company_phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",te,[(0,l.Wm)(r,{outlined:"",label:"Email Address",modelValue:n.parentData.company_email,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.company_email=e),type:"text-pass",disable:""},null,8,["modelValue"])]),(0,l._)("div",le,[(0,l.Wm)(r,{outlined:"",label:"Telephone Number",modelValue:n.parentData.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>n.parentData.phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",oe,[(0,l.Wm)(r,{outlined:"",label:"Alternate Telephone Number",disable:""})])])])),_:1})])),_:1})])),_:1})])),_:1})}const ne={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){}},se=(0,C.Z)(ne,[["render",ie]]),de=se;B()(ne,"components",{QExpansionItem:E.Z,QItemSection:Z.Z,QAvatar:z.Z,QIcon:N.Z,QCard:L.Z,QCardSection:Q.Z,QForm:O.Z,QInput:P.Z});const me=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Material Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Ads Details ")],-1),re={class:"row items-center"},pe={class:"row"},ce={class:"col-sm-12 q-pa-sm"},ue={class:"col-sm-6 q-pa-sm"},_e={class:"col-sm-6 q-pa-sm"},fe=(0,l.Uk)(" Type of Medium "),ge={class:"row"},he={class:"col-sm-12 q-pa-sm"},be={class:"q-gutter-sm"},ye={key:0},ve={key:0,class:"col-12 col-md-12 q-pa-sm"},we={key:1,class:"col-4 col-md-4 q-pa-sm"},De={key:2,class:"col-4 col-md-4 q-pa-sm"},qe={key:3,class:"col-4 col-md-4 q-pa-sm"},Ie={key:4,class:"col-4 col-md-4 q-pa-sm"},ke={key:5,class:"col-4 col-md-4 q-pa-sm"},We={key:1},Ve={class:"col-sm-12 q-pa-sm"},xe={class:"q-gutter-sm"},Ae={class:"col-12"},Se={class:"table w-100"},Ue={width:"50%"},Me={key:0,width:"50%",class:"q-pa-sm"},Te={key:1,width:"50%"},Ce=(0,l._)("p",{class:"text-center text-grey-14 q-ma-none"},"ORIGINAL",-1),Ee=(0,l._)("hr",null,null,-1),Ze=(0,l._)("b",null,"ORIGINAL",-1),ze=(0,l._)("br",null,null,-1),Ne={class:"q-mt-sm"},Le=(0,l.Uk)(" MAIN DOCUMENT "),Qe={class:"row"},Oe={class:"col-sm-12 q-pa-sm"},$e={class:"q-gutter-sm"},Pe={class:""},Re=(0,l._)("label",null,"File Path:",-1),Be=(0,l._)("br",null,null,-1),Fe={class:"text-grey-14"},Ge={class:"col-sm-12 q-pa-sm text-right"},je=(0,l.Uk)(" VIEW DOCUMENT "),Xe={key:0},He={class:"q-mt-sm"},Ye=(0,l.Uk)(" SUPPORT DOCUMENT "),Ke={class:"row"},Je={class:"col-sm-12 q-pa-sm"},ea={class:"q-gutter-sm"},aa={class:""},ta=(0,l._)("label",null,"File Path:",-1),la=(0,l._)("br",null,null,-1),oa={class:"text-grey-14"},ia={class:"col-sm-12 q-pa-sm text-right"},na=(0,l.Uk)(" VIEW DOCUMENT "),sa={key:3,class:"q-ma-md"},da={class:"q-mt-sm"},ma=(0,l.Uk)(" REVISION LETTER "),ra={class:"row"},pa={class:"col-sm-12 q-pa-sm"},ca={class:"q-gutter-sm"},ua={class:""},_a=(0,l._)("label",null,"File Path:",-1),fa=(0,l._)("br",null,null,-1),ga={class:"text-grey-14"},ha={class:"col-sm-12 q-pa-sm text-right"},ba=(0,l.Uk)(" VIEW DOCUMENT ");function ya(e,a,t,i,n,s){const d=(0,l.up)("q-avatar"),m=(0,l.up)("q-item-section"),r=(0,l.up)("q-icon"),p=(0,l.up)("q-input"),c=(0,l.up)("q-select"),u=(0,l.up)("q-card"),_=(0,l.up)("q-card-section"),f=(0,l.up)("q-radio"),g=(0,l.up)("q-checkbox"),h=(0,l.up)("q-btn"),b=(0,l.up)("q-td"),y=(0,l.up)("q-tr"),v=(0,l.up)("q-table"),w=(0,l.up)("q-form"),D=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(D,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(m,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(m,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[me])),_:1}),(0,l.Wm)(m,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",re,[(0,l.Wm)(r,{name:"ads_click",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{bordered:"",square:!0,class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",pe,[(0,l._)("div",ce,[(0,l.Wm)(p,{outlined:"",label:"Ad Title *",modelValue:s.parentData.ad_title,"onUpdate:modelValue":a[0]||(a[0]=e=>s.parentData.ad_title=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ue,[(0,l.Wm)(c,{outlined:"",label:"Reference Code of Previously-Approved Material",modelValue:s.parentData.referrence_code,"onUpdate:modelValue":a[1]||(a[1]=e=>s.parentData.referrence_code=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",_e,[(0,l.Wm)(p,{type:"text",outlined:"",label:"Tagline",modelValue:s.parentData.tag_line,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.tag_line=e),disable:""},null,8,["modelValue"])])])])),_:1}),(0,l.Wm)(u,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),fe])),_:1}),(0,l._)("div",ge,[(0,l._)("div",he,[(0,l._)("div",be,[(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.type_of_media=e),val:"SINGLE MEDIA",label:"Single Media",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.type_of_media=e),val:"MULTIMEDIA",label:"Multimedia",disable:""},null,8,["modelValue"])])])]),"SINGLE MEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",ye,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.parentData.type_of_medium,((a,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"row"},[0==t?((0,l.wg)(),(0,l.iD)("div",ve,[(0,l.Wm)(c,{outlined:"",label:"Single Media *",modelValue:a.type_of_medium,"onUpdate:modelValue":e=>a.type_of_medium=e,options:e.medium_options,"option-label":"desc","option-value":"desc",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.execution&&0==t?((0,l.wg)(),(0,l.iD)("div",we,[(0,l.Wm)(c,{outlined:"",label:"Execution *",modelValue:a.execution,"onUpdate:modelValue":e=>a.execution=e,options:e.execution_options,"option-label":"type","option-value":"type",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.language&&0==t?((0,l.wg)(),(0,l.iD)("div",De,[(0,l.Wm)(c,{outlined:"",label:"Language / Dialect",modelValue:a.dialect,"onUpdate:modelValue":e=>a.dialect=e,options:e.language_options,"option-label":"dialect","option-value":"dialect",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.length&&0==t?((0,l.wg)(),(0,l.iD)("div",qe,[(0,l.Wm)(p,{outlined:"",label:"Duration (in seconds)",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.size&&0==t?((0,l.wg)(),(0,l.iD)("div",Ie,[(0,l.Wm)(p,{outlined:"",label:"Size / Length",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,hint:"e.i format: 8 x 11 inches",disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.others&&0==t?((0,l.wg)(),(0,l.iD)("div",ke,[(0,l.Wm)(p,{outlined:"",label:"Others",modelValue:a.others,"onUpdate:modelValue":e=>a.others=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0),"MULTIMEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",We,[(0,l._)("div",Ve,[(0,l._)("div",xe,[(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[5]||(a[5]=a=>e.isMoving=a),val:!0,label:"MULTIMEDIA-MOVING",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[6]||(a[6]=a=>e.isMoving=a),val:!1,label:"MULTIMEDIA-STATIC (MAX OF 5 LAYOUT)",disable:""},null,8,["modelValue"])])]),(0,l._)("div",Ae,[(0,l._)("div",null,[(0,l._)("table",Se,[(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.type_of_medium_options,((t,o)=>((0,l.wg)(),(0,l.iD)("tr",{key:o,class:"row"},[(0,l._)("td",Ue,[(0,l.Wm)(g,{label:t.val,val:t.type_of_medium,modelValue:e.type_of_mediums_updated,"onUpdate:modelValue":a[7]||(a[7]=a=>e.type_of_mediums_updated=a),disable:""},null,8,["label","val","modelValue"])]),e.isMoving||"DIGITAL STATIC"==t.val?e.isMoving&&0==o?((0,l.wg)(),(0,l.iD)("td",Te,[(0,l.Wm)(p,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("td",Me,[(0,l.Wm)(p,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]))])))),128))])])])])])):(0,l.kq)("",!0),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(u,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[Ce,Ee])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{bordered:"",class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[Ze,ze,(0,l._)("div",Ne,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),Le])])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",Qe,[(0,l._)("div",Oe,[(0,l._)("div",$e,[(0,l._)("div",Pe,[Re,Be,(0,l._)("label",Fe,(0,o.zw)(s.parentData.origMainDocUrl),1)])])]),(0,l._)("div",Ge,[(0,l.Wm)(h,{color:"red-14",onClick:a[8]||(a[8]=e=>s.viewDoc(s.parentData.origMainDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),je])),_:1})])])])),_:1}),s.parentData.subDocUrl?((0,l.wg)(),(0,l.iD)("hr",Xe)):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:1,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",He,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),Ye])])),_:1})):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:2},{default:(0,l.w5)((()=>[(0,l._)("div",Ke,[(0,l._)("div",Je,[(0,l._)("div",ea,[(0,l._)("div",aa,[ta,la,(0,l._)("label",oa,(0,o.zw)(s.parentData.subDocUrl),1)])])]),(0,l._)("div",ia,[(0,l.Wm)(h,{color:"red-14",onClick:a[9]||(a[9]=e=>s.viewDoc(s.parentData.subDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),na])),_:1})])])])),_:1})):(0,l.kq)("",!0),e.doc_types_current.length>0?((0,l.wg)(),(0,l.iD)("div",sa,[(0,l.Wm)(v,{dense:"",columns:e.doc_types_columns,rows:e.doc_types_current,square:""},{body:(0,l.w5)((a=>[(0,l.Wm)(y,{props:a,hover:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{key:"type_of_document",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.type_of_document||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"input",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.input||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"variant",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.variant||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"expiration_date",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.expiration_date||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"date_launch",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.date_launch?a.row.date_launch:"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"remarks",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.row.remarks||"N/A"),1)])),_:2},1032,["props"]),(0,l.Wm)(b,{key:"actions",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{size:"sm",color:"red-14",icon:"delete",onClick:t=>e.removeDoc(a.row.id,a.pageIndex)},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])):(0,l.kq)("",!0),s.parentData.revision_letter?((0,l.wg)(),(0,l.j4)(_,{key:4,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",da,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),ma])])),_:1})):(0,l.kq)("",!0),s.parentData.revision_letter?((0,l.wg)(),(0,l.j4)(_,{key:5},{default:(0,l.w5)((()=>[(0,l._)("div",ra,[(0,l._)("div",pa,[(0,l._)("div",ca,[(0,l._)("div",ua,[_a,fa,(0,l._)("label",ga,(0,o.zw)(s.parentData.revision_letter),1)])])]),(0,l._)("div",ha,[(0,l.Wm)(h,{color:"red-14",onClick:a[10]||(a[10]=e=>s.viewDoc(s.parentData.revision_letter))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),ba])),_:1})])])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var va=t(6827);const wa={props:["appId"],data:()=>({company_name:"",single_media:"",language:null,type_of_medium_options:[],type_of_mediums_updated:[],type_of_mediums_length:[],size:0,length:0,execution:"",others:[],execution_options:[],medium_options:[],language_options:[],multimedia_options:[],multimedia_moving_static:[],isMoving:null,is_moving_length:"",doc_types_columns:[{name:"type_of_document",align:"left",label:"TYPE OF DOCUMENT",field:"type_of_document",sortable:!0},{name:"input",align:"left",label:"INPUT",field:"input",sortable:!0},{name:"variant",align:"left",label:"VARIANT",field:"variant",sortable:!0},{name:"expiration_date",align:"left",label:"EXPIRES ON",field:"expiration_date",sortable:!0},{name:"date_launch",align:"left",label:"BASED ON",field:"date_launch",sortable:!0},{name:"remarks",align:"left",label:"REMARKS",field:"remarks",sortable:!0}],doc_types_current:[]}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},watch:{isMoving(e,a){let t=this;[!0,!1].includes(e)&&(this.type_of_medium_options=this.multimedia_options.filter((a=>a.isMoving==e)),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,this.type_of_medium_options.map((e=>{t.parentData.type_of_medium.map((a=>{if(e.type_of_medium==a.type_of_medium)return{...e,lengthSize:a.lengthSize}}))}))))}},mounted(){this.initApp()},methods:{async saveUpdate(){let e=this,a={form_group:this.parentData.form_group,type_of_media:this.parentData.type_of_media,ad_title:this.parentData.ad_title,tag_line:this.parentData.tag_line,application_type:this.parentData.application_type,type_of_mediums:[]};this.type_of_medium_options.map(((e,t)=>this.type_of_mediums_updated.map(((t,l)=>{e.type_of_medium==t&&(e.type_of_medium=t,delete e.val,a.type_of_mediums.push(e))})))),"SINGLE MEDIA"==this.parentData.type_of_media&&(console.log(this.parentData.type_of_medium,"CURRENT TYPE OF MEDIUM"),a.type_of_mediums=this.parentData.type_of_medium.map((e=>({...e,type_of_medium:e.type_of_medium.desc})))),a={data:a,id:this.appId},e.parentData.type_of_medium_parsed=a.data.type_of_mediums.map((e=>e.type_of_medium)),console.log(a,"UPDATE PAYLOAD");let{data:t,status:l}=await e.$store.dispatch("s1/updateApp",a);[200,201].includes(l)?(va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.initApp()):va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},viewDoc(e){window.open(e,"_blank")},initApp(){var e,a,t;let l=this;l.doc_types_current=l.parentData.document_type,this.parentData.type_of_media,this.multimedia_options=[{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"CINEMA",type_of_medium:"CINEMA"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"COLLATERALSC",type_of_medium:"COLLATERALSC"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"DIGITAL VIDEO",type_of_medium:"DIGITAL VIDEO"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"E-OOH",type_of_medium:""},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"TELEVISION",type_of_medium:"TELEVISION"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"COLLATERALS",type_of_medium:"COLLATERALS"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"DIGITAL STATIC",type_of_medium:"DIGITAL STATIC"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"OOH",type_of_medium:"OOH"},{dialect:"",exececution:"",isMoving:0,length:"",lengthSize:"",others:"",val:"PRINT",type_of_medium:"PRINT"}],this.isMoving=!(null===(e=this.parentData)||void 0===e||!e.type_of_medium)&&0!=(null===(a=this.parentData)||void 0===a||null===(t=a.type_of_medium[0])||void 0===t?void 0:t.isMoving),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,console.log(this.type_of_mediums_updated,"MULTIMEDIA!!!")),this.type_of_medium_options=this.multimedia_options.filter((e=>e.isMoving==l.isMoving)),this.parentData.type_of_medium_new.map((e=>{this.type_of_medium_options.map(((a,t)=>{e.type_of_medium==a.type_of_medium&&(l.type_of_medium_options[t].lengthSize=e.lengthSize)}))})),console.log(this.parentData.type_of_medium_parsed,"CHECK MEDIUMS"),this.type_of_mediums_updated=this.parentData.type_of_medium_parsed},async getAllExecution(){let e=this,a={page:1,size:1e3,order:"type:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllExecutionTypes",a);e.execution_options=t.rows},async getAllMediums(){let e=this,a={page:1,size:1e3,order:"desc:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllMediums",a);e.medium_options=t.rows;let o=e.parentData.type_of_medium_parsed[0];"SINGLE MEDIA"==e.parentData.type_of_media&&t.rows.map(((a,t)=>{o==a.desc&&(e.parentData.type_of_medium[0].type_of_medium=a,console.log(a))}))},async getAllLanguage(){let e=this,a={page:1,size:1e3,order:"dialect:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllDialects",a);e.language_options=t.rows}}};var Da=t(1480),qa=t(1221),Ia=t(8879),ka=t(1463),Wa=t(9546),Va=t(7220);const xa=(0,C.Z)(wa,[["render",ya]]),Aa=xa;B()(wa,"components",{QExpansionItem:E.Z,QItemSection:Z.Z,QAvatar:z.Z,QIcon:N.Z,QCard:L.Z,QCardSection:Q.Z,QForm:O.Z,QInput:P.Z,QSelect:$.Z,QRadio:Da.Z,QCheckbox:qa.Z,QBtn:Ia.Z,QTable:ka.Z,QTr:Wa.Z,QTd:Va.Z});var Sa=t(7273);const Ua={class:"q-mt-md"},Ma=(0,l.Uk)(" Stamped Material and Decision Forms ");function Ta(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-card-section"),m=(0,l.up)("q-separator"),r=(0,l.up)("q-table"),p=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",Ua,[(0,l.Wm)(p,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important"}),Ma])),_:1}),(0,l.Wm)(m,{inset:""}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{columns:e.columns},null,8,["columns"])])),_:1})])),_:1})])}const Ca={data:()=>({pinkModel:!1,columns:[{name:"decision_file",align:"left",label:"Decision File Path",field:"decision_file",sortable:!0},{name:"stamp_material",align:"left",label:"Stamp Material File Path",field:"stamp_material",sortable:!0},{name:"decision_status",align:"left",label:"Decision Status",field:"company_name",sortable:!0},{name:"decision_date",align:"left",label:"Decision Date",field:"decision_date",sortable:!0}]}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}}};var Ea=t(926);const Za=(0,C.Z)(Ca,[["render",Ta]]),za=Za;B()(Ca,"components",{QCard:L.Z,QCardSection:Q.Z,QAvatar:z.Z,QSeparator:Ea.Z,QTable:ka.Z});t(3916);const Na={components:{ClientInformation:G,PresentorInformation:de,MaterialInformation:Aa,RichText:Sa.Z,StampMaterials:za},computed:{disable_comment_btn(){return("internal_comments_tab"!==this.tab||""===this.internal_comment_input)&&("external_comments_tab"!==this.tab||""===this.external_comment_input)},comment_type(){return"internal_comments_tab"==this.tab?"internal_comment":"external_comment"},selectedId(){return this.$route.params.id}},data:()=>({show_disapprove_modal:!1,is_loading:!0,internal_comment_input:"",external_comment_input:"",tab:"internal_comments_tab",refresh_sec:0,id:42,form_type:"s1",form_group:"",referrence_code:null,application_type:"REGULAR",applicant:null,company:{},slugified_app_type:"regular",process_type:"ORIGINAL",brand:"BRAND D",product:"SAMPLE PRODUCT IN D",category:"SAVOURY FOODS & SEASONINGS",type_of_media:"MULTIMEDIA",hasBirFormFiled:0,isRejected:null,payment_status:"UNPAID",isPaidByApplicant:0,amount:null,ad_title:"ET EST QUIS MINUS Q",tag_line:"INCIDUNT QUIA CULPA",hasNoSubDocs:1,origMainDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",subDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",complianceMainDocUrl:null,complianceSubDocUrl:null,decisionFormURL:null,stampMaterialUrl:null,hasSubmitted:1,internal_comment:null,external_comment:null,applicant_status:"S1 APPLICATION SUBMITTED",internal_status:"S1 APPLICATION SUBMITTED",decision_status:null,release_status:null,isLocked:1,forCompliance:0,forS2:0,application_date:"2022-11-14T13:22:10.115Z",submission_date:"2022-11-14",submission_time:"20:56:36",decision_status_date:null,release_date:null,issued_date:null,valid_until_date:null,modified_at:"2022-11-16T18:25:13.000Z",archived_at:null,verifiedDateByEvaluator:null,verifiedDateByAdSpe:null,verifiedDateByScreener:null,verifiedDateByReviewer:null,revision_count:0,applicant_fullname:null,company_name:null,company_phone:null,type_of_medium:null,type_of_medium_parsed:[],type_of_medium_new:[],affiliate_id:null,affiliate_name:"",isMoving:null,selected_item:{}}),mounted(){this.initApp()},methods:{paymentStatusColor(e){switch(e){case"FOR PAYMENT":return{bg:"yellow-5",text:"dark"};case"PAID":return{bg:"green-5",text:"white"};case"UNPAID":return{bg:"red-14",text:"white"};default:return{bg:"grey-2",text:"dark"}}},disapproveApp(){this.show_disapprove_modal=!0},intFormatter(e){const a=Intl.NumberFormat("en-US",{style:"currency",currency:"PHP"});return e/=100,a.format(e)},initApp(){this.getSpecific()},backToList(){this.$router.push({name:"s1-individual-lists"})},async getSpecific(){var e,a;let t=this;t.is_loading=!0;let l={id:t.selectedId},{data:o,status:i}=await t.$store.dispatch("asc_user/getSpecific",l);console.log(o);for(let n in o)t[n]=o[n];t.applicant_fullname=`${t.applicant.fname} ${t.applicant.mname} ${t.applicant.lname}`||"--",t.company_name=`${t.company.name}`||"--",t.address=`${t.company.address}`||"--",t.phone=`${t.applicant.phone}`||"--",t.company_phone=`${t.company.phone}`||"--",t.company_email=`${t.applicant.email}`||"--",t.internal_comment_input=`${null!=t.internal_comment?t.internal_comment:""}`||"",t.external_comment_input=`${null!=t.external_comment?t.external_comment:""}`||"",t.type_of_medium_parsed=t.type_of_medium.map((e=>e.type_of_medium)),t.type_of_medium_new=o.type_of_medium,t.affiliate_id=o.company.affiliateID,t.affiliate_name=(null===(e=o.company)||void 0===e||null===(a=e.affiliate)||void 0===a?void 0:a.name)||"--",t.isMoving=0!=o.type_of_medium[0].isMoving,this.selected_item=o,this.$nextTick((()=>{t.is_loading=!1}))},async saveComment(){let e=this,a={id:e.selectedId,data:{internal_comment:e.internal_comment_input}};"external_comment"===e.comment_type&&(a={id:e.selectedId,data:{external_comment:e.external_comment_input}});let{data:t,status:l}=await e.$store.dispatch("ascUser/comment",a);[200,201].includes(l)?va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async sendDecisionOrStamped(){this.$q.dialog({message:data.message,title:"FOR BE INTEGRATION",progress:!1,color:"red-14",theme:"modern",ok:!0})},async verifyApp(e){let a=this,t={id:this.$route.params.id,data:{isVerified:e}},{data:l,status:o}=await a.$store.dispatch("s1/verifyApp",t);[200,201].includes(o)?(va.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):va.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}}};var La=t(990),Qa=t(3246),Oa=t(3040),$a=t(7817),Pa=t(900);const Ra=(0,C.Z)(Na,[["render",D]]),Ba=Ra;B()(Na,"components",{QCard:L.Z,QCardSection:Q.Z,QIcon:N.Z,QBtn:Ia.Z,QSeparator:Ea.Z,QBadge:La.Z,QInput:P.Z,QSelect:$.Z,QList:Qa.Z,QSpinnerGrid:Oa.Z,QTabs:$a.Z,QTab:Pa.Z})},6598:(e,a,t)=>{e.exports=t.p+"img/asc-logo.53497bda.jpg"},3916:()=>{},6826:()=>{},5693:()=>{}}]);
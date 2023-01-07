"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[2334],{12334:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var s=a(59835),i=a(799),l=a(86970);const o={key:0,class:"loading-page"},n={class:"text-center"},d=(0,s._)("br",null,null,-1),c=(0,s._)("span",{class:"text-white"},"FETCHING DATA",-1),r={class:"q-pa-md"},u=(0,s.Uk)(" Company Penalty Information"),p={class:"row"},m={class:"col-6 q-pa-sm"},h={class:"col-6 q-pa-sm"},_=(0,s._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function g(e,t,a,g,f,y){const v=(0,s.up)("q-spinner-ios"),w=(0,s.up)("q-icon"),b=(0,s.up)("q-select"),I=(0,s.up)("q-input"),q=(0,s.up)("q-form"),Z=(0,s.up)("q-card-section"),C=(0,s.up)("q-card"),A=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",null,[e.is_loading?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",n,[(0,s.Wm)(v,{color:"white",size:"3rem"}),d,c])])):(0,s.kq)("",!0),(0,s._)("div",r,[(0,s.Wm)(C,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(w,{name:"label_important",class:"text-h6 text-red-15"}),u]),(0,s.Wm)(q,{ref:"announcement_form",onSubmit:(0,i.iM)(y.submit,["prevent"]),greedy:!0},{default:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s._)("div",m,[(0,s.Wm)(b,{outlined:"",label:"Company *","option-label":"name","option-value":"id",options:e.company_options,modelValue:e.compId,"onUpdate:modelValue":t[0]||(t[0]=t=>e.compId=t),rules:[e=>!!e||"Field is required"]},null,8,["options","modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)(I,{outlined:"",type:"number",label:"Amount *",modelValue:e.amount,"onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),_,(0,s._)("div",null,[(0,s.Wm)(A,{color:"primary",class:"q-mt-xl",onClick:y.submit},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{name:"save"}),(0,s.Uk)(" "+(0,l.zw)(y.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var f=a(6827);const y={data:()=>({is_loading:!1,compId:null,amount:null,company_options:[]}),watch:{},computed:{is_update(){return this.$route.params.id?(this.getSpecific(),!0):(this.initApp(),!1)},selectedID(){return this.$route.params.id}},mounted(){},methods:{initApp(){this.getAllCompanies()},async validate(e){return await this.$refs.announcement_form.validate()},async getAllCompanies(){let e=this,t={page:1,size:1e3,order:"name:asc",search:""},{data:a,status:s}=await e.$store.dispatch("company/getAllCompanies",t);[200,201].includes(s)&&(console.log(a.rows,"COMPANY LISTS!"),e.company_options=a.rows)},async getSpecific(){let e=this;e.is_loading=!0;let t={id:e.selectedID};await this.getAllCompanies();let{data:a,status:s}=await e.$store.dispatch("company_penalties/getSpecific",t);if(console.log(a),[200,201].includes(s)){for(let t in a)e[t]=a[t],"compId"==t&&(e.compId=e.company_options.filter((e=>e.id==a.compId))[0]);e["static_val"]=a.static}e.is_loading=!1},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t={compId:e.compId.id,amount:e.amount},a="company_penalties/add",s="created";e.is_update&&(t={data:t,id:e.selectedID},s="updated",a="company_penalties/update");let{data:i,status:l}=await this.$store.dispatch(a,t);[200,201].includes(l)?(f.Z.create({message:`Successfully ${s} Brand Penalties.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"company-penalty-lists"})):f.Z.create({message:i.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else f.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var v=a(11639),w=a(38359),b=a(44458),I=a(63190),q=a(22857),Z=a(8326),C=a(67887),A=a(66611),S=a(47817),k=a(68879),$=a(69984),Q=a.n($);const W=(0,v.Z)(y,[["render",g]]),V=W;Q()(y,"components",{QSpinnerIos:w.Z,QCard:b.Z,QCardSection:I.Z,QIcon:q.Z,QForm:Z.Z,QSelect:C.Z,QInput:A.Z,QTabs:S.Z,QBtn:k.Z})}}]);
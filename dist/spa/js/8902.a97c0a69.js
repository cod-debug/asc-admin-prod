"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[8902],{8902:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var s=i(9835),r=i(799),a=i(6970);const l={key:0,class:"loading-page"},n={class:"text-center"},o=(0,s._)("br",null,null,-1),d=(0,s._)("span",{class:"text-white"},"FETCHING DATA",-1),c={class:"q-pa-md"},u=(0,s.Uk)(" Type of Medium Informations"),p={class:"row"},m={class:"col-6 q-pa-sm"},v={class:"col-6 q-pa-sm"},_=(0,s._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function h(e,t,i,h,w,f){const g=(0,s.up)("q-spinner-ios"),I=(0,s.up)("q-icon"),b=(0,s.up)("q-select"),q=(0,s.up)("q-form"),Z=(0,s.up)("q-card-section"),y=(0,s.up)("q-card"),S=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",null,[e.is_loading?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",n,[(0,s.Wm)(g,{color:"white",size:"3rem"}),o,d])])):(0,s.kq)("",!0),(0,s._)("div",c,[(0,s.Wm)(y,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(I,{name:"label_important",class:"text-h6 text-red-15"}),u]),(0,s.Wm)(q,{ref:"announcement_form",onSubmit:(0,r.iM)(f.submit,["prevent"]),greedy:!0},{default:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s._)("div",m,[(0,s.Wm)(b,{outlined:"",label:"Screener Name *","option-label":"fullname","option-value":"id",options:e.scrnr_options,modelValue:e.screenerId,"onUpdate:modelValue":t[0]||(t[0]=t=>e.screenerId=t),rules:[e=>!!e||"Field is required"]},null,8,["options","modelValue","rules"])]),(0,s._)("div",v,[(0,s.Wm)(b,{outlined:"",label:"Reviewer Name *",modelValue:e.reviewerId,"onUpdate:modelValue":t[1]||(t[1]=t=>e.reviewerId=t),options:e.rev_options,"option-value":"id","option-label":"fullname",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","options","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),_,(0,s._)("div",null,[(0,s.Wm)(S,{color:"primary",class:"q-mt-xl",onClick:f.submit},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"save"}),(0,s.Uk)(" "+(0,a.zw)(f.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var w=i(6827);const f={data:()=>({is_loading:!1,screenerId:null,reviewerId:null,scrnr_options:[],rev_options:[]}),watch:{},computed:{is_update(){return this.$route.params.id?(this.getSpecific(),!0):(this.initApp(),!1)},selectedID(){return this.$route.params.id}},mounted(){},methods:{initApp(){this.getAllUsers()},async validate(e){return await this.$refs.announcement_form.validate()},async getAllUsers(){let e=this,t={page:1,size:1e3,order:"fname:asc",search:"",filter:"asc"},{data:i,status:s}=await e.$store.dispatch("account/getAllUsers",t);[200,201].includes(s)&&(e.scrnr_options=i.rows.filter((e=>"scrner"==e.type)),e.rev_options=i.rows.filter((e=>"revwer"==e.type)))},async getSpecific(){let e=this;e.is_loading=!0;let t={id:e.selectedID};await this.getAllUsers();let{data:i,status:s}=await e.$store.dispatch("screener_reviewer_pair/getSpecific",t);if(console.log(i),[200,201].includes(s)){for(let t in i)e[t]=i[t],"screenerId"==t?e.screenerId=e.scrnr_options.filter((e=>e.id==i.screenerId))[0]:"reviewpair"==t&&(e.reviewerId=e.rev_options.filter((e=>e.id==i["reviewpair"][0].id))[0]);e["static_val"]=i.static}e.is_loading=!1},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t={screenerId:e.screenerId.id,reviewerId:[e.reviewerId.id]},i="screener_reviewer_pair/add",s="created";e.is_update&&(t={data:t,id:e.selectedID},s="updated",i="screener_reviewer_pair/update");let{data:r,status:a}=await this.$store.dispatch(i,t);[200,201].includes(a)?(w.Z.create({message:`Successfully ${s} Screener-Reviewer Pair.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"srp-lists"})):w.Z.create({message:r.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else w.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var g=i(1639),I=i(8359),b=i(4458),q=i(3190),Z=i(2857),y=i(8326),S=i(7887),A=i(7817),k=i(8879),$=i(2304),W=i.n($);const C=(0,g.Z)(f,[["render",h]]),Q=C;W()(f,"components",{QSpinnerIos:I.Z,QCard:b.Z,QCardSection:q.Z,QIcon:Z.Z,QForm:y.Z,QSelect:S.Z,QTabs:A.Z,QBtn:k.Z})}}]);
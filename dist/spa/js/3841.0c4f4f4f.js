"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[3841],{3841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(9835),s=a(799),l=a(6970);const o={class:"q-pa-md"},n={class:"row"},r={class:"col-12 col-md-12 q-pa-sm"},d=(0,i._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function c(e,t,a,c,u,m){const p=(0,i.up)("q-input"),_=(0,i.up)("q-form"),h=(0,i.up)("q-card-section"),f=(0,i.up)("q-card"),g=(0,i.up)("q-icon"),v=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",o,[(0,i.Wm)(f,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{ref:"announcement_form",onSubmit:(0,s.iM)(m.submit,["prevent"]),greedy:!0},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("div",r,[(0,i.Wm)(p,{outlined:"",label:"Number of Working Days *",modelValue:e.decision_days,"onUpdate:modelValue":t[0]||(t[0]=t=>e.decision_days=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),d,(0,i._)("div",null,[(0,i.Wm)(v,{color:"primary",class:"q-mt-xl",onClick:m.submit},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{name:"save"}),(0,i.Uk)(" "+(0,l.zw)(m.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var u=a(6827);const m={data:()=>({decision_days:null}),watch:{},computed:{is_update(){return!!this.$route.params.id&&(this.getSpecific(),!0)},selectedID(){return this.$route.params.id}},mounted(){},methods:{async validate(e){return await this.$refs.announcement_form.validate()},async getSpecific(){let e=this,t={id:e.selectedID},{data:a,status:i}=await this.$store.dispatch("s1_incomplete_expiration/getSpecific",t);if(console.log(a),[200,201].includes(i))for(let s in a){let t=["basis","expire","input","launch","remark","remark","variant"];t.includes(s)?e[s]=!!a[s]:e[s]=a[s]}},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t={decision_days:e.decision_days},a="s1_incomplete_expiration/add",i="created";e.is_update&&(t={data:t,id:e.selectedID},i="updated",a="s1_incomplete_expiration/update");let{data:s,status:l}=await this.$store.dispatch(a,t);[200,201].includes(l)?u.Z.create({message:`Successfully ${i} S1 Fees Settlement Period.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):u.Z.create({message:s.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else u.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var p=a(1639),_=a(4458),h=a(3190),f=a(2857),g=a(8326),v=a(6611),b=a(7817),w=a(8879),y=a(2304),Z=a.n(y);const q=(0,p.Z)(m,[["render",c]]),k=q;Z()(m,"components",{QCard:_.Z,QCardSection:h.Z,QIcon:f.Z,QForm:g.Z,QInput:v.Z,QTabs:b.Z,QBtn:w.Z})}}]);
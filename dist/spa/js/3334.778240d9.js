"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[3334],{3334:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var n=t(9835),s=t(799),r=t(6970);const o={class:"q-pa-md"},l=(0,n.Uk)(" Document Information"),i={class:"row"},c={class:"col-sm-12 col-md-12 q-pa-sm"},m=(0,n._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function u(e,a,t,u,d,p){const h=(0,n.up)("q-icon"),f=(0,n.up)("q-input"),b=(0,n.up)("q-toggle"),v=(0,n.up)("q-form"),g=(0,n.up)("q-card-section"),y=(0,n.up)("q-card"),k=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[(0,n.Wm)(y,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(h,{name:"label_important",class:"text-h6 text-red-15"}),l]),(0,n.Wm)(v,{ref:"announcement_form",onSubmit:(0,s.iM)(p.submit,["prevent"]),greedy:!0},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("div",c,[(0,n.Wm)(f,{outlined:"",label:"Payment Description *",modelValue:e.desc,"onUpdate:modelValue":a[0]||(a[0]=a=>e.desc=a),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.switches,((a,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"col-12 col-md-6 q-pa-sm",key:t},[(0,n.Wm)(b,{modelValue:e.$data[a.var],"onUpdate:modelValue":t=>e.$data[a.var]=t,label:a.name,color:"red"},null,8,["modelValue","onUpdate:modelValue","label"])])))),128))])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),m,(0,n._)("div",null,[(0,n.Wm)(k,{color:"primary",class:"q-mt-xl",onClick:p.submit},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{name:"save"}),(0,n.Uk)(" "+(0,r.zw)(p.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var d=t(4328);const p={data:()=>({desc:"",amount:!1,bankbranch:!1,bankname:!1,controlnum:!1,fundtransfer:!1,promisorry:!1,reference:!1,isonline:!0,switches:[]}),watch:{},computed:{is_update(){return!!this.$route.params.id&&(this.getSpecific(),!0)},selectedID(){return this.$route.params.id}},mounted(){this.initApp()},methods:{initApp(){let e=this;e.switches=[{name:"Has Amount",var:"amount"},{name:"Has Bank Branch",var:"bankbranch"},{name:"Has Bank Name",var:"bankname"},{name:"Has Control Number",var:"controlnum"},{name:"Has Fund Transfer Date",var:"fundtransfer"},{name:"Has Promisorry Date",var:"promisorry"},{name:"Has Reference No",var:"reference"}]},async validate(e){return await this.$refs.announcement_form.validate()},async getSpecific(){let e=this,a={id:e.selectedID},{data:t,status:n}=await this.$store.dispatch("payment/getSpecificPayment",a);if(console.log(t),[200,201].includes(n))for(let s in t){let a=["basis","expire","input","launch","remark","remark","variant"];a.includes(s)?e[s]=!!t[s]:e[s]=t[s]}},async submit(){let e=this;if(console.log(e.amount),await this.validate()){let a={desc:e.desc.toUpperCase(),amount:e.amount,bankbranch:e.bankbranch,bankname:e.bankname,controlnum:e.controlnum,fundtransfer:e.fundtransfer,promisorry:e.promisorry,reference:e.reference,isonline:!0},t="payment/addPayment",n="created";e.is_update&&(a={data:a,id:e.selectedID},n="updated",t="payment/updatePayment"),console.log(a);let{data:s,status:r}=await this.$store.dispatch(t,a);[200,201].includes(r)?(d.Z.create({message:`Successfully ${n} Payment Type.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"payment-lists"})):d.Z.create({message:s.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else d.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const a=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return a.test(e)||"Invalid email"}}};var h=t(1639),f=t(4458),b=t(3190),v=t(2857),g=t(8326),y=t(6611),k=t(3175),_=t(7817),w=t(8879),Z=t(9984),q=t.n(Z);const $=(0,h.Z)(p,[["render",u]]),D=$;q()(p,"components",{QCard:f.Z,QCardSection:b.Z,QIcon:v.Z,QForm:g.Z,QInput:y.Z,QToggle:k.Z,QTabs:_.Z,QBtn:w.Z})}}]);
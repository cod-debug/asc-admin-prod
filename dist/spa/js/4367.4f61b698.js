"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[4367],{4367:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(9835),s=a(799),l=a(6970);const o={class:"q-pa-md"},c=(0,i.Uk)(" Dialect Information"),d={class:"row"},n={class:"col-12 q-pa-sm"},r=(0,i._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function u(e,t,a,u,m,p){const h=(0,i.up)("q-icon"),f=(0,i.up)("q-input"),_=(0,i.up)("q-form"),g=(0,i.up)("q-card-section"),v=(0,i.up)("q-card"),b=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",o,[(0,i.Wm)(v,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(h,{name:"label_important",class:"text-h6 text-red-15"}),c]),(0,i.Wm)(_,{ref:"announcement_form",onSubmit:(0,s.iM)(p.submit,["prevent"]),greedy:!0},{default:(0,i.w5)((()=>[(0,i._)("div",d,[(0,i._)("div",n,[(0,i.Wm)(f,{outlined:"",label:"Dialect *",modelValue:e.dialect,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialect=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),r,(0,i._)("div",null,[(0,i.Wm)(b,{color:"primary",class:"q-mt-xl",onClick:p.submit},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:"save"}),(0,i.Uk)(" "+(0,l.zw)(p.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var m=a(4328);const p={data:()=>({dialect:""}),watch:{},computed:{is_update(){return!!this.$route.params.id&&(this.getSpecific(),!0)},selectedID(){return this.$route.params.id}},mounted(){},methods:{async validate(e){return await this.$refs.announcement_form.validate()},async getSpecific(){let e=this,t={id:e.selectedID},{data:a,status:i}=await this.$store.dispatch("type_of_docu/getSpecificTypeOfMainDocu",t);if(console.log(a),[200,201].includes(i))for(let s in a)e[s]=a[s]},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t={dialect:e.dialect.toUpperCase()},a="dialect/addDialect",i="created";e.is_update&&(t={data:t,id:e.selectedID},i="updated",a="dialect/updateDialect");let{data:s,status:l}=await this.$store.dispatch(a,t);[200,201].includes(l)?(m.Z.create({message:`Successfully ${i} Main Document Type.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"dialect-lists"})):m.Z.create({message:s.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else m.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var h=a(1639),f=a(4458),_=a(3190),g=a(2857),v=a(8326),b=a(6611),w=a(7817),Z=a(8879),q=a(9984),y=a.n(q);const D=(0,h.Z)(p,[["render",u]]),k=D;y()(p,"components",{QCard:f.Z,QCardSection:_.Z,QIcon:g.Z,QForm:v.Z,QInput:b.Z,QTabs:w.Z,QBtn:Z.Z})}}]);
"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[3264],{3264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(9835),i=a(799),l=a(6970);const r={class:"q-pa-md"},n=(0,s.Uk)(" Type of Clearance "),c={class:"row"},o={class:"col-12 col-md-12 q-pa-sm"},d=(0,s._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function u(e,t,a,u,p,m){const h=(0,s.up)("q-icon"),f=(0,s.up)("q-input"),_=(0,s.up)("q-form"),g=(0,s.up)("q-card-section"),v=(0,s.up)("q-card"),y=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",r,[(0,s.Wm)(v,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,s.w5)((()=>[(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(h,{name:"label_important",class:"text-h6 text-red-15"}),n]),(0,s.Wm)(_,{ref:"announcement_form",onSubmit:(0,i.iM)(m.submit,["prevent"]),greedy:!0},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",o,[(0,s.Wm)(f,{outlined:"",label:"Type of Clearance *",modelValue:e.type,"onUpdate:modelValue":t[0]||(t[0]=t=>e.type=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),d,(0,s._)("div",null,[(0,s.Wm)(y,{color:"primary",class:"q-mt-xl",onClick:m.submit},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"save"}),(0,s.Uk)(" "+(0,l.zw)(m.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var p=a(4328);const m={data:()=>({type:""}),watch:{},computed:{is_update(){return!!this.$route.params.id&&(this.getSpecific(),!0)},selectedID(){return this.$route.params.id}},mounted(){},methods:{async validate(e){return await this.$refs.announcement_form.validate()},async getSpecific(){let e=this,t={id:e.selectedID},{data:a,status:s}=await this.$store.dispatch("clearance/getSpecific",t);if([200,201].includes(s))for(let i in a)e[i]=a[i]},async submit(){let e=this;if(await this.validate()){let t={type:e.type.toUpperCase()},a="clearance/add",s="created";e.is_update&&(t={data:t,id:e.selectedID},s="updated",a="clearance/update");let{data:i,status:l}=await this.$store.dispatch(a,t);[200,201].includes(l)?(p.Z.create({message:`Successfully ${s} Clearance Type.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"clearance-lists"})):p.Z.create({message:i.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else p.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var h=a(1639),f=a(4458),_=a(3190),g=a(2857),v=a(8326),y=a(6611),b=a(7817),Z=a(8879),w=a(9984),q=a.n(w);const C=(0,h.Z)(m,[["render",u]]),k=C;q()(m,"components",{QCard:f.Z,QCardSection:_.Z,QIcon:g.Z,QForm:v.Z,QInput:y.Z,QTabs:b.Z,QBtn:Z.Z})}}]);
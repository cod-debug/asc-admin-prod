"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[474],{474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var l=a(9835),o=a(799),i=a(6970);const s={class:"q-pa-md"},r=(0,l.Uk)(" Type of Rationale Information"),n={class:"row"},c={class:"col-12 col-md-6 q-pa-sm"},d={class:"col-12 col-md-6 q-pa-sm"},u=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1);function m(e,t,a,m,p,h){const g=(0,l.up)("q-icon"),f=(0,l.up)("q-input"),_=(0,l.up)("q-select"),v=(0,l.up)("q-form"),y=(0,l.up)("q-card-section"),b=(0,l.up)("q-card"),Z=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",s,[(0,l.Wm)(b,{bordered:"",class:"my-card",elevated:"",square:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(g,{name:"label_important",class:"text-h6 text-red-15"}),r]),(0,l.Wm)(v,{ref:"announcement_form",onSubmit:(0,o.iM)(h.submit,["prevent"]),greedy:!0},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l._)("div",c,[(0,l.Wm)(f,{outlined:"",type:"textarea",label:"Rationale *",modelValue:e.rationale,"onUpdate:modelValue":t[0]||(t[0]=t=>e.rationale=t),rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])]),(0,l._)("div",d,[(0,l.Wm)(_,{outlined:"",label:"Category *",modelValue:e.category,"onUpdate:modelValue":t[1]||(t[1]=t=>e.category=t),options:e.category_choices,rules:[e=>!!e||"Field is required"]},null,8,["modelValue","options","rules"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),u,(0,l._)("div",null,[(0,l.Wm)(Z,{color:"primary",class:"q-mt-xl",onClick:h.submit},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"save"}),(0,l.Uk)(" "+(0,i.zw)(h.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])])])}var p=a(6827);const h={data:()=>({rationale:"",category:"",category_choices:["FOR COMPLIANCE","FOR INCOMPLETE DECISION","FOR TOA APPLICATION"]}),watch:{},computed:{is_update(){return!!this.$route.params.id&&(this.getSpecific(),!0)},selectedID(){return this.$route.params.id}},mounted(){},methods:{async validate(e){return await this.$refs.announcement_form.validate()},async getSpecific(){let e=this,t={id:e.selectedID},{data:a,status:l}=await this.$store.dispatch("rationale/getSpecific",t);if(console.log(a),[200,201].includes(l))for(let o in a)e[o]=a[o]},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t={rationale:e.rationale.toUpperCase(),category:e.category.toUpperCase()},a="rationale/add",l="created";e.is_update&&(t={data:t,id:e.selectedID},l="updated",a="rationale/update"),console.log(t);let{data:o,status:i}=await this.$store.dispatch(a,t);[200,201].includes(i)?(p.Z.create({message:`Successfully ${l} Rationale Type.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"rational-lists"})):p.Z.create({message:o.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else p.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"}}};var g=a(1639),f=a(4458),_=a(3190),v=a(2857),y=a(8326),b=a(6611),Z=a(7887),q=a(7817),w=a(8879),C=a(2304),I=a.n(C);const S=(0,g.Z)(h,[["render",m]]),k=S;I()(h,"components",{QCard:f.Z,QCardSection:_.Z,QIcon:v.Z,QForm:y.Z,QInput:b.Z,QSelect:Z.Z,QTabs:q.Z,QBtn:w.Z})}}]);
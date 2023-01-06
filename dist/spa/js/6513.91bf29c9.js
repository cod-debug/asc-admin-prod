"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[6513],{86513:(e,t,s)=>{s.r(t),s.d(t,{default:()=>V});var l=s(59835),a=s(799),i=s(86970);const o={class:"q-pa-md"},d={class:"row"},c={class:"col-12 col-md-6 q-pa-sm"},n={class:"col-12 col-md-6 q-pa-sm"},r=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),u={key:0,class:"text-center q-pa-lg"},h={class:"loading-page"},p={key:1,class:"table_container"},m={class:"row"},g={class:"col-md-6 q-pa-sm"},_={key:1,class:"text-right q-mt-md"},w={class:"col-md-6 q-pa-sm"};function b(e,t,s,b,f,v){const k=(0,l.up)("q-select"),y=(0,l.up)("q-date"),q=(0,l.up)("q-form"),D=(0,l.up)("q-icon"),C=(0,l.up)("q-btn"),S=(0,l.up)("q-spinner-ios"),A=(0,l.up)("q-td"),Z=(0,l.up)("q-table");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",o,[(0,l.Wm)(q,{ref:"announcement_form",onSubmit:(0,a.iM)(v.submit,["prevent"]),greedy:!0},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",c,[(0,l.Wm)(k,{outlined:"",label:"ASC Internal User *",options:e.asc_users,"option-label":"fullname","option-value":"id",modelValue:e.selected_user,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected_user=t),style:{"min-width":"100%"},rules:[e=>!!e||"Field is required"]},null,8,["options","modelValue","rules"])]),(0,l._)("div",n,[e.selected_user?((0,l.wg)(),(0,l.j4)(y,{key:0,modelValue:e.sched_additional,"onUpdate:modelValue":t[1]||(t[1]=t=>e.sched_additional=t),multiple:"",rules:[e=>!!e.length>0||"Field is required"]},null,8,["modelValue","rules"])):(0,l.kq)("",!0)])])])),_:1},8,["onSubmit"]),r,(0,l._)("div",null,[(0,l.Wm)(C,{color:"primary",class:"q-mt-xl",onClick:v.submit},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{name:"save"}),(0,l.Uk)(" "+(0,i.zw)(v.is_update?"Save Changes":"Save"),1)])),_:1},8,["onClick"])])]),e.loading_list?((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",h,[(0,l.Wm)(S,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",m,[(0,l._)("div",g,[e.sched.length>0?((0,l.wg)(),(0,l.j4)(Z,{key:0,columns:e.columns,"rows-per-page-options":[0],title:"Current Dates",flat:"",bordered:"",rows:e.sched,"hide-bottom":""},{"body-cell-date":(0,l.w5)((e=>[(0,l.Wm)(A,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row),1)])),_:2},1032,["props"])])),"body-cell-action":(0,l.w5)((e=>[(0,l.Wm)(A,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{label:"Delete",onClick:t=>v.removeCurrent(e.rowIndex),color:"red-14"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])):(0,l.kq)("",!0),e.sched.length>0?((0,l.wg)(),(0,l.iD)("div",_)):(0,l.kq)("",!0)]),(0,l._)("div",w,[e.sched.length>0?((0,l.wg)(),(0,l.j4)(Z,{key:0,columns:e.columns,title:"Additional Dates",flat:"",bordered:"",rows:e.sched_additional,"hide-bottom":""},{"body-cell-date":(0,l.w5)((e=>[(0,l.Wm)(A,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row),1)])),_:2},1032,["props"])])),"body-cell-action":(0,l.w5)((e=>[(0,l.Wm)(A,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{label:"Delete",onClick:t=>v.removeAdditional(e.rowIndex),color:"red-14"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])):(0,l.kq)("",!0)])])]))])}s(40702);var f=s(6827);const v={name:"member_affiliation_list",data:()=>({columns:[{name:"date",align:"left",label:"Date",field:"date",sortable:!1},{name:"action",align:"left",label:"Action",field:"status",sortable:!1}],asc_users:[],table_data:[],current:1,max:0,size:10,loading_list:!0,sched_additional:[],selected_user:null,sched:[]}),computed:{is_update(){return this.sched.length>0}},watch:{current(e){e&&this.getAppType()},selected_user(e){null!=e&&(this.getSpecific(),this.sched_additional=[])}},components:{},mounted(){this.initApp()},methods:{formatDate(e){return e.getFullYear},initApp(){this.getAllNONASC()},removeCurrent(e){this.sched.splice(e,1)},removeAdditional(e){this.sched_additional.splice(e,1)},async submit2(){let e=this,t=[...e.sched,...e.sched_additional],s={id:this.selected_user.id,sched:t};console.log(s)},async validate(e){return await this.$refs.announcement_form.validate()},async submit(){let e=this;if(console.log(await this.validate()),await this.validate()){let t=[...e.sched,...e.sched_additional],s={id:this.selected_user.id,sched:t},l="weekly_user_schedule/add",a="created";e.is_update&&(s={data:s,id:e.selectedID},a="updated",l="weekly_user_schedule/update");let{data:i,status:o}=await this.$store.dispatch(l,s);[200,201].includes(o)?f.Z.create({message:`Successfully ${a} Weekly User Schedule.`,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):f.Z.create({message:i.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}else f.Z.create({message:"Validation error. Kindly check all fields!",position:"top-right",closeBtn:"X",timeout:2e3})},async getAllNONASC(){this.loading=!0;let e=this;e.loading_list=!0;let t={page:1,size:1e4,order:"id:asc",search:""},{data:s,status:l}=await this.$store.dispatch("account/getAllUsers",t);[200,201].includes(l)&&this.$nextTick((()=>{this.rows=s.rows,e.asc_users=s.rows,e.current=s.cpage,e.max=s.tpage,this.loading=!1})),e.loading_list=!1},async getSpecific(){let e=this,t={id:e.selected_user.id},{data:s,status:l}=await this.$store.dispatch("weekly_user_schedule/getSpecific",t);if([200,201].includes(l)&&s){let t=s.sched.map((e=>{let t=new Date(e),s=t.getMonth()+1>10?t.getMonth()+1:"0"+(t.getMonth()+1),l=t.getDate()+1>10?t.getDate()+1:"0"+t.getDate();return`${t.getFullYear()}/${s}/${l}`}));e.sched=t}else e.sched=[];console.log(e.sched)},parseStatus(e){switch(e){case 0:return{val:"inactive",color:"grey"};case 1:return{val:"active",color:"green"}}},closeModal(){}}};var k=s(11639),y=s(8326),q=s(67887),D=s(67088),C=s(47817),S=s(68879),A=s(22857),Z=s(38359),W=s(81463),Q=s(67220),$=s(69984),x=s.n($);const U=(0,k.Z)(v,[["render",b]]),V=U;x()(v,"components",{QForm:y.Z,QSelect:q.Z,QDate:D.Z,QTabs:C.Z,QBtn:S.Z,QIcon:A.Z,QSpinnerIos:Z.Z,QTable:W.Z,QTd:Q.Z})}}]);
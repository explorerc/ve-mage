(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{499:function(t,e,i){},500:function(t,e,i){},501:function(t,e,i){},502:function(t,e,i){},503:function(t,e,i){},504:function(t,e,i){},505:function(t,e,i){},506:function(t,e,i){},507:function(t,e,i){},670:function(t,e,i){t.exports=i.p+"static/img/packet1.57cc273.png"},671:function(t,e,i){t.exports=i.p+"static/img/packet2.2c91ed3.png"},672:function(t,e,i){"use strict";var a=i(499);i.n(a).a},673:function(t,e,i){"use strict";var a=i(500);i.n(a).a},674:function(t,e,i){"use strict";var a=i(501);i.n(a).a},675:function(t,e,i){"use strict";var a=i(502);i.n(a).a},676:function(t,e,i){"use strict";var a=i(503);i.n(a).a},677:function(t,e,i){"use strict";var a=i(504);i.n(a).a},678:function(t,e,i){"use strict";var a=i(505);i.n(a).a},679:function(t,e,i){"use strict";var a=i(506);i.n(a).a},680:function(t,e,i){"use strict";var a=i(507);i.n(a).a},848:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"test-wrap"},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:t.dragData,callback:function(e){t.dragData=e},expression:"dragData"}},t._l(t.dragData,function(e,a){return i("com-q",{key:a,attrs:{value:e,edit:!0,index:a+1},on:{"update:value":function(t){e=t}}},[t._v(">")])}))],1),t._v(" "),i("div",{staticClass:"test-wrap1"},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:t.dragData,callback:function(e){t.dragData=e},expression:"dragData"}},t._l(t.dragData,function(t,e){return i("com-q",{key:e,ref:"com"+e,refInFor:!0,attrs:{value:t,index:e+1},on:{"update:value":function(e){t=e}}})}))],1)])};a._withStripped=!0;var s=i(455),l=i.n(s),n="text",r="date",o="radio",u="checkbox",c="select",v="area",d="industry",h={text:"q-text",date:"q-date",radio:"q-radio",checkbox:"q-checkbox",select:"q-select",area:"q-area",industry:"q-industry"},p=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"red-packet-rain"},[e("div",{staticClass:"debug"},[this._v("\n    当前渲染红包数："+this._s(this.packets)),e("br"),this._v("\n    FPS："+this._s(this.fps)+"\n  ")]),this._v(" "),e("canvas",{attrs:{id:"canvas"}})])};p._withStripped=!0;var f=i(99),m=i.n(f),_=i(138),x=i.n(_),g=i(139),y=i.n(g),b=function(){function t(e,i,a){x()(this,t),this.ctx=e,this.w=i,this.h=a,this.live=!0}return y()(t,[{key:"draw",value:function(){this.ctx.save(),this.ctx.fillStyle="rgba(0,0,0,0.8)",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.restore()}}]),t}(),w=function(){function t(e,i,a,s,l){x()(this,t),this.ctx=a,this.img1=s,this.img2=l,this.limit=i,this.x=e,this.y=-80;var n=this.img1;this.w=n.width,this.h=n.height,this.s=Math.round(5*Math.random())+0,this.live=!0,this.change=0}return y()(t,[{key:"draw",value:function(){this.ctx.save(),this.change%50==0&&(this.x=1600*Math.random()+50,this.y=700*Math.random()+50),this.change%5==0?this.ctx.drawImage(this.img1,this.x,this.y,this.w,this.h):this.ctx.drawImage(this.img2,this.x,this.y,this.w,this.h),this.change+=1,this.y>this.limit&&(this.live=!1),this.ctx.restore()}},{key:"isTouch",value:function(t,e){t>this.x&&t<this.x+this.w&&e>this.y-this.h/2&&e<this.y+this.h&&(this.live=!1)}}]),t}(),k={limit:2},q=function(){},C=function(){function t(e){x()(this,t),this.prev=0,this.lastTime=0,this.fps=60,this._options=m()({},k,e),this.init()}return y()(t,[{key:"init",value:function(){var t=this;this.canvas=this._options.el,this.timeUpdate=this._options.timeUpdate||q,this.timeOver=this._options.timeOver||q,this.limit=this._options.limit,this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width=window.innerWidth,this.h=this.canvas.height=window.innerHeight,this.img1=new Image,this.img2=new Image,this.sprites=[new b(this.ctx,this.w,this.h)],this.canvas.addEventListener("click",function(e){var i=e.pageX,a=e.pageY;t.sprites.forEach(function(t){return t.isTouch&&t.isTouch(i,a)})})}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"start",value:function(){var t=this;this.img1.load?this.work():(this.img1.src=this._options.pack.url1,this.img2.src=this._options.pack.url2,this.img1.width=this._options.pack.w,this.img1.height=this._options.pack.h,this.img1.addEventListener("load",function(){t.img1.load=!0,t.work()}))}},{key:"work",value:function(){this.clear();var t=Math.random()*(this.w-200)+50;this.sprites.length-1<this.limit&&this.sprites.push(new w(t,this.h,this.ctx,this.img1,this.img2)),this.sprites.forEach(function(t){t.live&&t.draw()}),this.sprites=this.sprites.filter(function(t){return t.live}),this.timeUpdate({counts:this.sprites.length-1,fps:this.getFps()}),window.requestAnimationFrame(this.work.bind(this))}},{key:"getFps",value:function(){var t=Date.now();return t-this.prev>100&&(this.fps=1e3/(t-this.lastTime),this.prev=t),this.lastTime=t,this.fps.toFixed(2)}}]),t}(),T={data:function(){return{rpr:null,packets:0,fps:60}},mounted:function(){var t=this;this.rpr=new C({el:document.querySelector("#canvas"),pack:{url1:i(670),url2:i(671),w:160,h:100},timeUpdate:function(e){var i=e.counts,a=e.fps;t.packets=i,t.fps=a}}),this.rpr.start()},methods:{}},I=(i(672),i(2)),$=Object(I.a)(T,p,[],!1,null,"814214e2",null);$.options.__file="src/components/red-packet-rain/com.vue";var j=$.exports,O=i(218),E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"single-select-wrap"},[i("div",{staticClass:"index"},[t._v(t._s(t.index))]),t._v(" "),i("div",{staticClass:"question-content"},[t.edit?i("div",{staticClass:"q-des"},[t._v(t._s(t.value.ext.name))]):t._e(),t._v(" "),i("div",{staticClass:"q-edit",class:{display:!t.edit}},[t.edit?i("com-input",{staticClass:"q-subject",attrs:{"max-length":30},model:{value:t.value.title,callback:function(e){t.$set(t.value,"title",e)},expression:"value.title"}}):t._e(),t._v(" "),t.edit?t._e():i("div",{staticClass:"q-subject",domProps:{textContent:t._s(t.value.title)}}),t._v(" "),i(t.QComs[t.value.type],{ref:"content",tag:"component",attrs:{edit:t.edit},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),t.edit?i("div",{staticClass:"q-operate"},[t.showAddItem?i("a",{staticClass:"add-select-item",on:{click:t.addItem}},[t._v("添加选项")]):t._e(),t._v(" "),t.value.detail&&"mobile"===t.value.detail.format?t._e():i("span",{staticClass:"required-des"},[t._v("必填")]),t._v(" "),t.value.detail&&"mobile"===t.value.detail.format?t._e():i("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},model:{value:t.value.required,callback:function(e){t.$set(t.value,"required",e)},expression:"value.required"}}),t._v(" "),t.value.detail&&"mobile"===t.value.detail.format?i("span",{staticClass:"required-des"},[t._v("短信验证")]):t._e(),t._v(" "),t.value.detail&&"mobile"===t.value.detail.format?i("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},model:{value:t.value.verifiy,callback:function(e){t.$set(t.value,"verifiy",e)},expression:"value.verifiy"}}):t._e(),t._v(" "),i("div",{staticClass:"sort fuck"},[t._v("排序")]),t._v(" "),i("div",{staticClass:"del",on:{click:t.remove}},[t._v("删除")])],1):t._e()])])};E._withStripped=!0;var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-edit-content"},[t._l(t.value.detail.list,function(e,a){return i("el-radio",{key:a,staticClass:"q-select-item",class:{display:!t.edit},attrs:{label:a},on:{change:t.change},model:{value:t.value.value,callback:function(e){t.$set(t.value,"value",e)},expression:"value.value"}},[t.edit?i("com-input",{attrs:{"max-length":30},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}):t._e(),t._v(" "),t.edit?t._e():i("div",{staticClass:"item-text",domProps:{textContent:t._s(e.value)}}),t._v(" "),t.edit&&t.value.detail.list.length>1?i("span",{staticClass:"remove",on:{click:function(e){t.delItem(a)}}},[t._v("删")]):t._e()],1)}),t._v(" "),!t.edit&&t.errorTip?i("div",{staticClass:"error-msg"},[t._v(t._s(t.errorTip)+"\n  ")]):t._e()],2)};D._withStripped=!0;var F={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(t){this.value.detail.list.splice(t,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.value)||(this.errorTip="此项为必填项",!1)}}},S=(i(673),Object(I.a)(F,D,[],!1,null,"d2f19c5a",null));S.options.__file="src/components/questionnaire/q-radio.vue";var A=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-edit-content"},[i("el-checkbox-group",{on:{change:t.change},model:{value:t.value.value,callback:function(e){t.$set(t.value,"value",e)},expression:"value.value"}},t._l(t.value.detail.list,function(e,a){return i("el-checkbox",{key:a,staticClass:"q-select-item",class:{display:!t.edit},attrs:{label:a}},[t.edit?i("com-input",{attrs:{"max-length":30},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}):t._e(),t._v(" "),t.edit?t._e():i("div",{staticClass:"item-text",domProps:{textContent:t._s(e.value)}}),t._v(" "),t.edit&&t.value.detail.list.length>1?i("span",{staticClass:"remove",on:{click:function(e){t.delItem(a)}}},[t._v("删")]):t._e()],1)})),t._v(" "),!t.edit&&t.errorTip?i("div",{staticClass:"error-msg"},[t._v(t._s(t.errorTip)+"\n  ")]):t._e()],1)};M._withStripped=!0;var Y={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(t){this.value.list.detail.splice(t,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&(!this.value.value||0===this.value.value.length))||(this.errorTip="此项为必填项",!1)}}},B=(i(674),Object(I.a)(Y,M,[],!1,null,"4ba69c1b",null));B.options.__file="src/components/questionnaire/q-checkbox.vue";var P=B.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-edit-content",class:{display:!t.edit}},[t._l(t.value.detail.list,function(e,a){return t.edit?i("div",{key:a,staticClass:"q-select-item",attrs:{label:a}},[i("span",{staticClass:"select-icon"},[t._v("√")]),t._v(" "),i("div",{staticClass:"select-input"},[i("com-input",{attrs:{disabled:!!t.value.ext.fixedness,"max-length":t.value.ext.fixedness?0:30},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}),t._v(" "),t.value.detail.list.length>1&&!t.value.ext.fixedness?i("span",{staticClass:"remove",on:{click:function(e){t.delItem(a)}}},[t._v("删")]):t._e()],1)]):t._e()}),t._v(" "),t.edit?t._e():i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.change},model:{value:t.value.value,callback:function(e){t.$set(t.value,"value",e)},expression:"value.value"}},t._l(t.value.detail.list,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.id}})})),t._v(" "),!t.edit&&t.errorTip?i("div",{staticClass:"error-msg"},[t._v(t._s(t.errorTip)+"\n  ")]):t._e()],2)};z._withStripped=!0;var N={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(t){this.value.detail.list.splice(t,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.valu)||(this.errorTip="此项为必填项",!1)}}},R=(i(675),Object(I.a)(N,z,[],!1,null,"4b2b7e58",null));R.options.__file="src/components/questionnaire/q-select.vue";var U=R.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-edit-content"},[t.edit?t._e():i("com-input",{attrs:{type:t.value.detail.format,"max-length":t.value.detail.max?t.value.detail.max:0,value:t.value.value},on:{focus:t.focus,blur:t.check,"update:value":function(e){t.$set(t.value,"value",e)}}}),t._v(" "),t.edit||"Y"!==t.value.verification?t._e():i("com-input",{staticClass:"code",attrs:{local:!0,"max-length":6,placeholder:"请输入验证码"},on:{focus:t.focus,blur:t.check},model:{value:t.value.code,callback:function(e){t.$set(t.value,"code",e)},expression:"value.code"}}),t._v(" "),t.edit||"Y"!==t.value.verification?t._e():i("com-button",{staticClass:"code",on:{click:t.getCode}},[t._v("获取验证码")]),t._v(" "),!t.edit&&t.errorTip?i("div",{staticClass:"error-msg"},[t._v(t._s(t.errorTip)+"\n  ")]):t._e()],1)};V._withStripped=!0;var Z={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{getCode:function(){alert("获取验证码稍后实现")},focus:function(){this.errorTip=""},check:function(){if(this.value.required&&!this.value.value&&"mobile"!==this.value.detail.format)return this.errorTip="此项为必填项",!1;if("email"===this.value.detail.format&&this.value.value){return/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.value.value)||(this.errorTip="请输入正确的邮箱格式"),!1}return"mobile"!==this.value.detail.format||(!this.value.value||this.value.value.length<11?this.errorTip="请输入正确的手机号":this.value.code||"Y"!==this.value.verification||(this.errorTip="请输入验证码"),!1)}}},L=(i(676),Object(I.a)(Z,V,[],!1,null,"3630a085",null));L.options.__file="src/components/questionnaire/q-text.vue";var Q=L.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-edit-content"},[t.edit?t._e():i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},on:{blur:t.check,focus:t.focus},model:{value:t.value.value,callback:function(e){t.$set(t.value,"value",e)},expression:"value.value"}}),t._v(" "),!t.edit&&t.errorTip?i("div",{staticClass:"error-msg"},[t._v(t._s(t.errorTip)+"\n  ")]):t._e()],1)};J._withStripped=!0;var H={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{focus:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.value)||(this.errorTip="此项为必填项",!1)}}},W=(i(677),Object(I.a)(H,J,[],!1,null,"4643baf4",null));W.options.__file="src/components/questionnaire/q-date.vue";var X=W.exports,G=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  1111\n")])};G._withStripped=!0;var K={},tt=(i(678),Object(I.a)(K,G,[],!1,null,null,null));tt.options.__file="src/components/questionnaire/q-area.vue";var et={components:{qRadio:A,qCheckbox:P,qSelect:U,qText:Q,qDate:X,qArea:tt.exports},props:{index:{type:Number,default:1},value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{QComs:h}},mounted:function(){"Y"===this.value.verification&&(this.value.verifiy=!0)},methods:{addItem:function(){this.value.detail.list.length<20&&this.value.detail.list.push({value:"选项"})},remove:function(){this.$emit("remove",this.index)}},watch:{"value.verifiy":{handler:function(t){this.value.verification=t?"Y":"N"},deep:!0}},computed:{showAddItem:function(){return!this.value.ext.fixedness&&(this.value.type===o||this.value.type===u||this.value.type===c)}}},it=(i(679),Object(I.a)(et,E,[],!1,null,"d1ee2774",null));it.options.__file="src/components/questionnaire/wrap.vue";var at={components:{comRed:j,comQ:it.exports,draggable:l.a},data:function(){return{tIndex:0,dragData:[{title:"单选题",errorTip:"",type:o,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"单选题"}},{title:"多选题",errorTip:"",type:u,value:[],required:!0,detail:{list:[{value:"选项"}]},ext:{name:"多选题"}},{title:"下拉题",errorTip:"",type:c,required:!0,detail:{list:[{id:1,value:"选项"}]},ext:{name:"下拉题"}},{title:"问答题",errorTip:"",type:n,style:"",required:!1,detail:{format:"textarea",max:300},ext:{name:"问答题"}},{title:"姓名",errorTip:"",type:n,required:!1,detail:{format:"input",max:10},ext:{name:"姓名"}},{title:"手机号",errorTip:"",type:n,required:!0,detail:{format:"mobile",max:11},verification:"Y",ext:{name:"手机号"}},{title:"邮箱",errorTip:"",type:n,required:!1,detail:{format:"email",max:30},ext:{name:"邮箱"}},{title:"性别",errorTip:"",type:c,required:!0,detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别"}},{title:"生日",errorTip:"",type:r,required:!0,detail:{format:"yyyy-MM-dd"},ext:{name:"生日"}},{title:"地域",errorTip:"",type:v,required:!0,ext:{name:"地域"}},{title:"行业",errorTip:"",type:d,required:!0,ext:{name:"行业"}},{title:"职位",type:n,required:!0,detail:{format:"input",max:10},ext:{name:"职位"}},{title:"教育水平",errorTip:"",type:c,required:!0,detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平"}}],at:1,tabValue:1,tabValue1:"1",dialogVisible:!0,show1:!1,show:!1,header:"Notification Title",content:"I will never close automatically. I will be close automatically. I will never close automatically.",id:1,outValue:"asd",exParams:{joinID:"123123"},fileSize:2e5}},methods:{uploadSelected:function(t){console.log("选中文件",t)},uploadProgress:function(t){console.log("上传进度:",t)},uploadLoad:function(t){console.log("上传成功:",t)},uploadError:function(t){console.log("上传失败:",t)},uploadOver:function(){console.log("上传完毕")},testCom:function(){this.show1=!0,this.at=1},testCom1:function(){this.show1=!0,this.at=2},testFun:function(){Object(O.a)({header:"Notification Title"+this.id++,content:"I will never close automatically. I will be close automatically. I will never close automatically.",close:function(){console.log("close")},closed:function(){console.log("closed")}})}}},st=(i(680),Object(I.a)(at,a,[],!1,null,null,null));st.options.__file="src/pages/com-test.vue";e.default=st.exports}}]);
//# sourceMappingURL=5.7a2b133d.js.map
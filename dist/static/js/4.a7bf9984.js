(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{498:function(e,t,i){},499:function(e,t,i){},500:function(e,t,i){},501:function(e,t,i){},502:function(e,t,i){},503:function(e,t,i){},504:function(e,t,i){},505:function(e,t,i){},506:function(e,t,i){},669:function(e,t,i){e.exports=i.p+"static/img/packet1.57cc273.png"},670:function(e,t,i){e.exports=i.p+"static/img/packet2.2c91ed3.png"},671:function(e,t,i){"use strict";var a=i(498);i.n(a).a},672:function(e,t,i){"use strict";var a=i(499);i.n(a).a},673:function(e,t,i){"use strict";var a=i(500);i.n(a).a},674:function(e,t,i){"use strict";var a=i(501);i.n(a).a},675:function(e,t,i){"use strict";var a=i(502);i.n(a).a},676:function(e,t,i){"use strict";var a=i(503);i.n(a).a},677:function(e,t,i){"use strict";var a=i(504);i.n(a).a},678:function(e,t,i){"use strict";var a=i(505);i.n(a).a},679:function(e,t,i){"use strict";var a=i(506);i.n(a).a},847:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"test-wrap"},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:e.dragData,callback:function(t){e.dragData=t},expression:"dragData"}},e._l(e.dragData,function(t,a){return i("com-q",{key:a,attrs:{value:t,edit:!0,index:a+1},on:{"update:value":function(e){t=e}}},[e._v(">")])}))],1),e._v(" "),i("div",{staticClass:"test-wrap1"},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:e.dragData,callback:function(t){e.dragData=t},expression:"dragData"}},e._l(e.dragData,function(e,t){return i("com-q",{key:t,ref:"com"+t,refInFor:!0,attrs:{value:e,index:t+1},on:{"update:value":function(t){e=t}}})}))],1)])};a._withStripped=!0;var s=i(454),l=i.n(s),n="text",r="date",o="radio",u="checkbox",c="select",v="area",d={text:"q-text",date:"q-date",radio:"q-radio",checkbox:"q-checkbox",select:"q-select",area:"q-area",industry:"q-industry"},h=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"red-packet-rain"},[t("div",{staticClass:"debug"},[this._v("\n    当前渲染红包数："+this._s(this.packets)),t("br"),this._v("\n    FPS："+this._s(this.fps)+"\n  ")]),this._v(" "),t("canvas",{attrs:{id:"canvas"}})])};h._withStripped=!0;var p=i(98),f=i.n(p),m=i(137),_=i.n(m),x=i(138),y=i.n(x),g=function(){function e(t,i,a){_()(this,e),this.ctx=t,this.w=i,this.h=a,this.live=!0}return y()(e,[{key:"draw",value:function(){this.ctx.save(),this.ctx.fillStyle="rgba(0,0,0,0.8)",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.restore()}}]),e}(),b=function(){function e(t,i,a,s,l){_()(this,e),this.ctx=a,this.img1=s,this.img2=l,this.limit=i,this.x=t,this.y=-80;var n=this.img1;this.w=n.width,this.h=n.height,this.s=Math.round(5*Math.random())+0,this.live=!0,this.change=0}return y()(e,[{key:"draw",value:function(){this.ctx.save(),this.change%50==0&&(this.x=1600*Math.random()+50,this.y=700*Math.random()+50),this.change%5==0?this.ctx.drawImage(this.img1,this.x,this.y,this.w,this.h):this.ctx.drawImage(this.img2,this.x,this.y,this.w,this.h),this.change+=1,this.y>this.limit&&(this.live=!1),this.ctx.restore()}},{key:"isTouch",value:function(e,t){e>this.x&&e<this.x+this.w&&t>this.y-this.h/2&&t<this.y+this.h&&(this.live=!1)}}]),e}(),k={limit:2},q=function(){},w=function(){function e(t){_()(this,e),this.prev=0,this.lastTime=0,this.fps=60,this._options=f()({},k,t),this.init()}return y()(e,[{key:"init",value:function(){var e=this;this.canvas=this._options.el,this.timeUpdate=this._options.timeUpdate||q,this.timeOver=this._options.timeOver||q,this.limit=this._options.limit,this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width=window.innerWidth,this.h=this.canvas.height=window.innerHeight,this.img1=new Image,this.img2=new Image,this.sprites=[new g(this.ctx,this.w,this.h)],this.canvas.addEventListener("click",function(t){var i=t.pageX,a=t.pageY;e.sprites.forEach(function(e){return e.isTouch&&e.isTouch(i,a)})})}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"start",value:function(){var e=this;this.img1.load?this.work():(this.img1.src=this._options.pack.url1,this.img2.src=this._options.pack.url2,this.img1.width=this._options.pack.w,this.img1.height=this._options.pack.h,this.img1.addEventListener("load",function(){e.img1.load=!0,e.work()}))}},{key:"work",value:function(){this.clear();var e=Math.random()*(this.w-200)+50;this.sprites.length-1<this.limit&&this.sprites.push(new b(e,this.h,this.ctx,this.img1,this.img2)),this.sprites.forEach(function(e){e.live&&e.draw()}),this.sprites=this.sprites.filter(function(e){return e.live}),this.timeUpdate({counts:this.sprites.length-1,fps:this.getFps()}),window.requestAnimationFrame(this.work.bind(this))}},{key:"getFps",value:function(){var e=Date.now();return e-this.prev>100&&(this.fps=1e3/(e-this.lastTime),this.prev=e),this.lastTime=e,this.fps.toFixed(2)}}]),e}(),C={data:function(){return{rpr:null,packets:0,fps:60}},mounted:function(){var e=this;this.rpr=new w({el:document.querySelector("#canvas"),pack:{url1:i(669),url2:i(670),w:160,h:100},timeUpdate:function(t){var i=t.counts,a=t.fps;e.packets=i,e.fps=a}}),this.rpr.start()},methods:{}},T=(i(671),i(2)),$=Object(T.a)(C,h,[],!1,null,"814214e2",null);$.options.__file="src/components/red-packet-rain/com.vue";var I=$.exports,j=i(217),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"single-select-wrap"},[i("div",{staticClass:"index"},[e._v(e._s(e.index))]),e._v(" "),i("div",{staticClass:"question-content"},[e.edit?i("div",{staticClass:"q-des"},[e._v(e._s(e.value.ext.name))]):e._e(),e._v(" "),i("div",{staticClass:"q-edit",class:{display:!e.edit}},[e.edit?i("com-input",{staticClass:"q-subject",attrs:{"max-length":30},model:{value:e.value.title,callback:function(t){e.$set(e.value,"title",t)},expression:"value.title"}}):e._e(),e._v(" "),e.edit?e._e():i("div",{staticClass:"q-subject",domProps:{textContent:e._s(e.value.title)}}),e._v(" "),i(e.QComs[e.value.type],{ref:"content",tag:"component",attrs:{edit:e.edit},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),e.edit?i("div",{staticClass:"q-operate"},[e.showAddItem?i("a",{staticClass:"add-select-item",on:{click:e.addItem}},[e._v("添加选项")]):e._e(),e._v(" "),e.value.detail&&"mobile"===e.value.detail.format?e._e():i("span",{staticClass:"required-des"},[e._v("必填")]),e._v(" "),e.value.detail&&"mobile"===e.value.detail.format?e._e():i("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},model:{value:e.value.required,callback:function(t){e.$set(e.value,"required",t)},expression:"value.required"}}),e._v(" "),e.value.detail&&"mobile"===e.value.detail.format?i("span",{staticClass:"required-des"},[e._v("短信验证")]):e._e(),e._v(" "),e.value.detail&&"mobile"===e.value.detail.format?i("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},model:{value:e.value.verifiy,callback:function(t){e.$set(e.value,"verifiy",t)},expression:"value.verifiy"}}):e._e(),e._v(" "),i("div",{staticClass:"sort fuck"},[e._v("排序")]),e._v(" "),i("div",{staticClass:"del",on:{click:e.remove}},[e._v("删除")])],1):e._e()])])};O._withStripped=!0;var S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content"},[e._l(e.value.detail.list,function(t,a){return i("el-radio",{key:a,staticClass:"q-select-item",class:{display:!e.edit},attrs:{label:a},on:{change:e.change},model:{value:e.value.value,callback:function(t){e.$set(e.value,"value",t)},expression:"value.value"}},[e.edit?i("com-input",{attrs:{"max-length":30},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}}):e._e(),e._v(" "),e.edit?e._e():i("div",{staticClass:"item-text",domProps:{textContent:e._s(t.value)}}),e._v(" "),e.edit&&e.value.detail.list.length>1?i("span",{staticClass:"remove",on:{click:function(t){e.delItem(a)}}},[e._v("删")]):e._e()],1)}),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()],2)};S._withStripped=!0;var E={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(e){this.value.detail.list.splice(e,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.value)||(this.errorTip="此项为必填项",!1)}}},D=(i(672),Object(T.a)(E,S,[],!1,null,"d2f19c5a",null));D.options.__file="src/components/questionnaire/q-radio.vue";var F=D.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content"},[i("el-checkbox-group",{on:{change:e.change},model:{value:e.value.value,callback:function(t){e.$set(e.value,"value",t)},expression:"value.value"}},e._l(e.value.detail.list,function(t,a){return i("el-checkbox",{key:a,staticClass:"q-select-item",class:{display:!e.edit},attrs:{label:a}},[e.edit?i("com-input",{attrs:{"max-length":30},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}}):e._e(),e._v(" "),e.edit?e._e():i("div",{staticClass:"item-text",domProps:{textContent:e._s(t.value)}}),e._v(" "),e.edit&&e.value.detail.list.length>1?i("span",{staticClass:"remove",on:{click:function(t){e.delItem(a)}}},[e._v("删")]):e._e()],1)})),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()],1)};A._withStripped=!0;var P={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(e){this.value.list.detail.splice(e,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&(!this.value.value||0===this.value.value.length))||(this.errorTip="此项为必填项",!1)}}},B=(i(673),Object(T.a)(P,A,[],!1,null,"4ba69c1b",null));B.options.__file="src/components/questionnaire/q-checkbox.vue";var M=B.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content",class:{display:!e.edit}},[e._l(e.value.detail.list,function(t,a){return e.edit?i("div",{key:a,staticClass:"q-select-item",attrs:{label:a}},[i("span",{staticClass:"select-icon"},[e._v("√")]),e._v(" "),i("div",{staticClass:"select-input"},[i("com-input",{attrs:{disabled:!!e.value.ext.fixedness,"max-length":e.value.ext.fixedness?0:30},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}}),e._v(" "),e.value.detail.list.length>1&&!e.value.ext.fixedness?i("span",{staticClass:"remove",on:{click:function(t){e.delItem(a)}}},[e._v("删")]):e._e()],1)]):e._e()}),e._v(" "),e.edit?e._e():i("el-select",{attrs:{placeholder:"请选择"},on:{change:e.change},model:{value:e.value.value,callback:function(t){e.$set(e.value,"value",t)},expression:"value.value"}},e._l(e.value.detail.list,function(e,t){return i("el-option",{key:t,attrs:{label:e.value,value:e.id}})})),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()],2)};Y._withStripped=!0;var L={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{delItem:function(e){this.value.detail.list.splice(e,1)},change:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.valu)||(this.errorTip="此项为必填项",!1)}}},z=(i(674),Object(T.a)(L,Y,[],!1,null,"4b2b7e58",null));z.options.__file="src/components/questionnaire/q-select.vue";var N=z.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content"},[e.edit?e._e():i("com-input",{attrs:{type:e.value.detail.format,"max-length":e.value.detail.max?e.value.detail.max:0,value:e.value.value},on:{focus:e.focus,blur:e.check,"update:value":function(t){e.$set(e.value,"value",t)}}}),e._v(" "),e.edit||"Y"!==e.value.verification?e._e():i("com-input",{staticClass:"code",attrs:{local:!0,"max-length":6,placeholder:"请输入验证码"},on:{focus:e.focus,blur:e.check},model:{value:e.value.code,callback:function(t){e.$set(e.value,"code",t)},expression:"value.code"}}),e._v(" "),e.edit||"Y"!==e.value.verification?e._e():i("com-button",{staticClass:"code",on:{click:e.getCode}},[e._v("获取验证码")]),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()],1)};R._withStripped=!0;var U={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{getCode:function(){alert("获取验证码稍后实现")},focus:function(){this.errorTip=""},check:function(){if(this.value.required&&!this.value.value&&"mobile"!==this.value.detail.format)return this.errorTip="此项为必填项",!1;if("email"===this.value.detail.format&&this.value.value){return/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.value.value)||(this.errorTip="请输入正确的邮箱格式"),!1}return"mobile"!==this.value.detail.format||(!this.value.value||this.value.value.length<11?this.errorTip="请输入正确的手机号":this.value.code||"Y"!==this.value.verification||(this.errorTip="请输入验证码"),!1)}}},V=(i(675),Object(T.a)(U,R,[],!1,null,"3630a085",null));V.options.__file="src/components/questionnaire/q-text.vue";var Z=V.exports,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content"},[e.edit?e._e():i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},on:{blur:e.check,focus:e.focus},model:{value:e.value.value,callback:function(t){e.$set(e.value,"value",t)},expression:"value.value"}}),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()],1)};Q._withStripped=!0;var J={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{errorTip:""}},methods:{focus:function(){this.errorTip=""},check:function(){return!(this.value.required&&!this.value.value)||(this.errorTip="此项为必填项",!1)}}},H=(i(676),Object(T.a)(J,Q,[],!1,null,"4643baf4",null));H.options.__file="src/components/questionnaire/q-date.vue";var W=H.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-edit-content"},[i("div",{staticClass:"q-edit-select"},[i("el-select",{attrs:{placeholder:"省/自治区/直辖市"},on:{change:e.changeProvince,focus:e.focusProvince,blur:e.blurProvince},model:{value:e.value.province,callback:function(t){e.$set(e.value,"province",t)},expression:"value.province"}},e._l(e.provinces,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("div",{staticClass:"q-edit-select"},[i("el-select",{attrs:{placeholder:"市"},on:{change:e.changeCity,focus:e.focusCity,blur:e.blurCity},model:{value:e.value.city,callback:function(t){e.$set(e.value,"city",t)},expression:"value.city"}},e._l(e.cities,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),e.edit||!e.edit&&("county"===this.value.detail.level||"address"===this.value.detail.level)?i("div",{staticClass:"q-edit-select"},[i("el-select",{attrs:{placeholder:"区/县"},on:{change:e.changeCounty,focus:e.focusCounty,blur:e.blurCounty},model:{value:e.value.county,callback:function(t){e.$set(e.value,"county",t)},expression:"value.county"}},e._l(e.counties,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),e.edit?i("span",{staticClass:"remove",on:{click:function(t){e.setLevel("county")}}},[e._v(e._s(e.getCountyState))]):e._e()],1):e._e(),e._v(" "),e.edit||!e.edit&&"address"===this.value.detail.level?i("div",{staticClass:"q-edit-select"},[i("com-input",{attrs:{placeholder:"详细地址",disabled:e.edit,"max-length":50},on:{focus:e.focusAddress,blur:e.blurAddress},model:{value:e.value.address,callback:function(t){e.$set(e.value,"address",t)},expression:"value.address"}}),e._v(" "),e.edit?i("span",{staticClass:"remove",on:{click:function(t){e.setLevel("address")}}},[e._v(e._s(e.getAddressState))]):e._e()],1):e._e(),e._v(" "),!e.edit&&e.errorTip?i("div",{staticClass:"error-msg"},[e._v(e._s(e.errorTip)+"\n  ")]):e._e()])};X._withStripped=!0;var G="https://static.vhallyun.com/public/static/js/area.json",K={props:{value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{area:{},province:"",city:"",county:"",provinces:[],cities:[],counties:[],errorTip:""}},mounted:function(){var e=this;this.$get(G).then(function(t){e.area=t,e.provinces=e.area.provinces})},methods:{setLevel:function(e){"address"===e&&this.value.detail.level===e?this.value.detail.level="county":"county"!==e||this.value.detail.level!==e&&"address"!==this.value.detail.level?this.value.detail.level=e:this.value.detail.level="city"},changeProvince:function(e){this.cities=this.area.cities[e]},focusProvince:function(){this.errorTip=""},blurProvince:function(){var e=this;setTimeout(function(){e.value.required&&!e.value.province&&(e.errorTip="此项为必填项")},300)},changeCity:function(e){this.counties=this.area.counties[e]},focusCity:function(){this.errorTip=""},blurCity:function(){var e=this;setTimeout(function(){e.value.required&&!e.value.city&&(e.errorTip="此项为必填项")},300)},changeCounty:function(){},focusCounty:function(){this.errorTip=""},blurCounty:function(){var e=this;setTimeout(function(){e.value.required&&!e.value.county&&(e.errorTip="此项为必填项")},300)},focusAddress:function(){this.errorTip=""},blurAddress:function(){this.value.required&&!this.value.address&&(this.errorTip="此项为必填项")},check:function(){return(!this.value.required||this.value.province&&this.value.city)&&(!this.value.required||"county"!==this.value.detail.level&&"address"!==this.value.detail.level||this.value.county)&&!(this.value.required&&"address"===this.value.detail.level&&!this.value.address)||(this.errorTip="此项为必填项",!1)}},computed:{getCountyState:function(){return"county"===this.value.detail.level||"address"===this.value.detail.level?"隐":"显"},getAddressState:function(){return"address"===this.value.detail.level?"隐":"显"}}},ee=(i(677),Object(T.a)(K,X,[],!1,null,"0eb37be5",null));ee.options.__file="src/components/questionnaire/q-area.vue";var te={components:{qRadio:F,qCheckbox:M,qSelect:N,qText:Z,qDate:W,qArea:ee.exports},props:{index:{type:Number,default:1},value:{type:Object,default:function(){return{}}},edit:{type:Boolean,default:!1}},data:function(){return{QComs:d}},mounted:function(){"Y"===this.value.verification&&(this.value.verifiy=!0)},methods:{addItem:function(){this.value.detail.list.length<20&&this.value.detail.list.push({value:"选项"})},remove:function(){this.$emit("remove",this.index)}},watch:{"value.verifiy":{handler:function(e){this.value.verification=e?"Y":"N"},deep:!0}},computed:{showAddItem:function(){return!this.value.ext.fixedness&&(this.value.type===o||this.value.type===u||this.value.type===c)}}},ie=(i(678),Object(T.a)(te,O,[],!1,null,"d1ee2774",null));ie.options.__file="src/components/questionnaire/wrap.vue";var ae={components:{comRed:I,comQ:ie.exports,draggable:l.a},data:function(){return{tIndex:0,dragData:[{title:"单选题",errorTip:"",type:o,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"单选题"}},{title:"多选题",errorTip:"",type:u,value:[],required:!0,detail:{list:[{value:"选项"}]},ext:{name:"多选题"}},{title:"下拉题",errorTip:"",type:c,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"下拉题"}},{title:"问答题",errorTip:"",type:n,style:"",required:!1,detail:{format:"textarea",max:300},ext:{name:"问答题"}},{title:"姓名",errorTip:"",type:n,required:!1,detail:{format:"input",max:10},ext:{name:"姓名"}},{title:"手机号",errorTip:"",type:n,required:!0,detail:{format:"mobile",max:11},verification:"Y",ext:{name:"手机号"}},{title:"邮箱",errorTip:"",type:n,required:!1,detail:{format:"email",max:30},ext:{name:"邮箱"}},{title:"性别",errorTip:"",type:c,required:!0,detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别"}},{title:"生日",errorTip:"",type:r,required:!0,detail:{format:"yyyy-MM-dd"},ext:{name:"生日"}},{title:"地域",errorTip:"",type:v,required:!0,detail:{level:"address"},ext:{name:"地域"}},{title:"行业",errorTip:"",type:c,required:!0,detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"教育水平"}},{title:"职位",type:n,required:!0,detail:{format:"input",max:10},ext:{name:"职位"}},{title:"教育水平",errorTip:"",type:c,required:!0,detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平"}}],at:1,tabValue:1,tabValue1:"1",dialogVisible:!0,show1:!1,show:!1,header:"Notification Title",content:"I will never close automatically. I will be close automatically. I will never close automatically.",id:1,outValue:"asd",exParams:{joinID:"123123"},fileSize:2e5}},methods:{uploadSelected:function(e){console.log("选中文件",e)},uploadProgress:function(e){console.log("上传进度:",e)},uploadLoad:function(e){console.log("上传成功:",e)},uploadError:function(e){console.log("上传失败:",e)},uploadOver:function(){console.log("上传完毕")},testCom:function(){this.show1=!0,this.at=1},testCom1:function(){this.show1=!0,this.at=2},testFun:function(){Object(j.a)({header:"Notification Title"+this.id++,content:"I will never close automatically. I will be close automatically. I will never close automatically.",close:function(){console.log("close")},closed:function(){console.log("closed")}})}}},se=(i(679),Object(T.a)(ae,a,[],!1,null,null,null));se.options.__file="src/pages/com-test.vue";t.default=se.exports}}]);
//# sourceMappingURL=4.a7bf9984.js.map
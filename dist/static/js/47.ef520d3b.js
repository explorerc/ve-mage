(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{647:function(e,t,a){},852:function(e,t,a){"use strict";var s=a(647);a.n(s).a},877:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-questionaire"},[e._m(0),e._v(" "),s("div",{staticClass:"content from-box"},[s("div",{staticClass:"tt"},[s("div",{staticClass:"left"},[s("div",{staticClass:"lc"},[s("div",{staticClass:"v-selects"},[s("p",{staticClass:"v-title"},[e._v("\n              个人信息\n            ")]),e._v(" "),s("ul",[s("li",{class:{disabled:!e.base.name},on:{click:function(t){e.addQuestion("name")}}},[e._v("姓名")]),e._v(" "),s("li",{class:{disabled:!e.base.phone},on:{click:function(t){e.addQuestion("phone")}}},[e._v("手机号")]),e._v(" "),s("li",{class:{disabled:!e.base.email},on:{click:function(t){e.addQuestion("email")}}},[e._v("邮箱")]),e._v(" "),s("li",{class:{disabled:!e.base.sex},on:{click:function(t){e.addQuestion("sex")}}},[e._v("性别")]),e._v(" "),s("li",{class:{disabled:!e.base.birth},on:{click:function(t){e.addQuestion("birth")}}},[e._v("生日")]),e._v(" "),s("li",{class:{disabled:!e.base.area},on:{click:function(t){e.addQuestion("area")}}},[e._v("地域")]),e._v(" "),s("li",{class:{disabled:!e.base.industry},on:{click:function(t){e.addQuestion("industry")}}},[e._v("行业")]),e._v(" "),s("li",{class:{disabled:!e.base.position},on:{click:function(t){e.addQuestion("position")}}},[e._v("职位")]),e._v(" "),s("li",{class:{disabled:!e.base.edu},on:{click:function(t){e.addQuestion("edu")}}},[e._v("教育水平")])])]),e._v(" "),s("div",{staticClass:"v-selects"},[s("p",{staticClass:"v-title"},[e._v("\n              题型\n            ")]),e._v(" "),s("ul",[s("li",{on:{click:function(t){e.addQuestion("radio")}}},[e._v("单选题")]),e._v(" "),s("li",{on:{click:function(t){e.addQuestion("checkbox")}}},[e._v("多选题")]),e._v(" "),s("li",{on:{click:function(t){e.addQuestion("select")}}},[e._v("下拉题")]),e._v(" "),s("li",{on:{click:function(t){e.addQuestion("text")}}},[e._v("问答题")])])])])]),e._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"ru"},[s("div",{staticClass:"v-form"},[e._m(1),e._v(" "),s("ve-upload",{attrs:{title:"上传头图，推荐尺寸为800x180px，大小不超过2M",accept:"png|jpg|jpeg|bmp",fileSize:2048}})],1),e._v(" "),s("div",{staticClass:"v-form"},[e._m(2),e._v(" "),s("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷标题","max-length":30}})],1),e._v(" "),s("div",{staticClass:"v-form"},[e._m(3),e._v(" "),s("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷简介","max-length":300,type:"textarea"}})],1)]),e._v(" "),s("div",{staticClass:"rb"},[s("div",{staticClass:"v-question-info",class:{hasPhone:e.hasPhone}},[s("draggable",{attrs:{options:{handle:".sort"}},model:{value:e.dragData,callback:function(t){e.dragData=t},expression:"dragData"}},e._l(e.dragData,function(t,a){return s("com-question",{key:a,ref:"com"+a,refInFor:!0,class:{isSingle:e.isSingle},attrs:{value:t,edit:!0,index:a+1},on:{"update:value":function(e){t=e},remove:function(t){e.removeQuestion(t)}}})})),e._v(" "),e.phoneData.length?s("com-question",{key:e.dragData.length+1,ref:"comPhone",staticClass:"v-phone",class:{isBorder:e.isBorder},attrs:{value:e.phoneData[0],edit:!0,index:e.dragData.length+1},on:{"update:value":function(t){e.$set(e.phoneData,0,t)},remove:function(t){e.removeQuestion(t)}}}):e._e()],1)])])])]),e._v(" "),s("div",{staticClass:"v-control clearfix"},[s("button",{staticClass:"v-save",on:{click:e.save}},[e._v("\n      保存\n    ")]),e._v(" "),s("button",{staticClass:"v-view",on:{click:e.view}},[e._v("\n      预览\n    ")])]),e._v(" "),s("message-box",{directives:[{name:"show",rawName:"v-show",value:e.messageBoxViewShow,expression:"messageBoxViewShow"}],staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:e.messageBoxClick}},[s("div",{staticClass:"box"},[s("div",{staticClass:"text"},[e._v("预览")])]),e._v(" "),s("div",{staticClass:"v-hearder"},[s("img",{attrs:{src:a(476),alt:""}}),e._v(" "),s("p",{staticClass:"v-title"},[e._v("\n                  产品调研\n                ")]),e._v(" "),s("p",{staticClass:"v-summary"},[e._v("\n                 欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！\n                ")])]),e._v(" "),s("questions",{attrs:{dragData:e.dragData,phoneData:e.phoneData,isView:!0}})],1)],1)};s._withStripped=!0;var i=a(453),n=a.n(i),l=a(649),r=a(670),o=a(470),c=a(485),d={components:{draggable:n.a,VeUpload:o.a,comQuestion:l.a,questions:r.a},data:function(){return{base:{name:!0,phone:!0,email:!0,sex:!0,birth:!0,area:!0,industry:!0,position:!0,edu:!0},dragData:[],phoneData:[],messageBoxViewShow:!1}},beforeDestroy:function(){},created:function(){},computed:{isBorder:function(){return!(this.dragData.length>0)},isSingle:function(){return 1===this.dragData.length&&0===this.phoneData.length},hasPhone:function(){return!(0===this.phoneData.length)}},methods:{removeQuestion:function(e){"phone"===e.type?this.phoneData.splice(0,1):this.dragData.splice(e.index-1,1),this.base[e.type]=!0},addQuestion:function(e){var t={};switch(e){case"name":t={title:"姓名",errorTip:"",type:c.b.TEXT,required:!1,detail:{format:"input",max:10},ext:{name:"姓名",key:"name"}},this.dragData.push(t),this.base.name=!1;break;case"phone":t={title:"手机号",errorTip:"",type:c.b.TEXT,required:!0,detail:{format:"mobile",max:11},verification:"Y",ext:{name:"手机号",key:"phone"}},this.phoneData.push(t),this.base.phone=!1;break;case"email":t={title:"邮箱",errorTip:"",type:c.b.TEXT,required:!1,detail:{format:"email",max:30},ext:{name:"邮箱",key:"email"}},this.dragData.push(t),this.base.email=!1;break;case"sex":t={title:"性别",errorTip:"",type:c.b.SELECT,required:!0,detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别",key:"sex"}},this.dragData.push(t),this.base.sex=!1;break;case"birth":t={title:"生日",errorTip:"",type:c.b.DATE,required:!0,detail:{format:"yyyy-MM-dd"},ext:{name:"生日",key:"birth"}},this.dragData.push(t),this.base.birth=!1;break;case"area":t={title:"地域",errorTip:"",type:c.b.AREA,required:!0,detail:{level:"address"},ext:{name:"地域",key:"area"}},this.dragData.push(t),this.base.area=!1;break;case"industry":t={title:"行业",errorTip:"",type:c.b.SELECT,required:!0,detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"行业",key:"industry"}},this.dragData.push(t),this.base.industry=!1;break;case"position":t={title:"职位",type:c.b.TEXT,required:!0,detail:{format:"input",max:10},ext:{name:"职位",key:"position"}},this.dragData.push(t),this.base.position=!1;break;case"edu":t={title:"教育水平",errorTip:"",type:c.b.SELECT,required:!0,detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平",key:"edu"}},this.dragData.push(t),this.base.edu=!1;break;case"radio":t={title:"单选题",errorTip:"",type:c.b.RADIO,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"单选题",key:"radio"}},this.dragData.push(t);break;case"checkbox":t={title:"多选题",errorTip:"",type:c.b.CHECKBOX,value:[],required:!0,detail:{list:[{value:"选项"}]},ext:{name:"多选题",key:"checkbox"}},this.dragData.push(t);break;case"select":t={title:"下拉题",errorTip:"",type:c.b.SELECT,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"下拉题",key:"select"}},this.dragData.push(t);break;case"text":t={title:"问答题",errorTip:"",type:c.b.TEXT,style:"",required:!1,detail:{format:"textarea",max:300},ext:{name:"问答题",key:"text"}},this.dragData.push(t)}},save:function(){for(var e=[],t=0;t<this.dragData.length;t++){if(!this.$refs["com"+t][0].$children[1].validate())return!1;e.push(this.dragData[t])}if(this.phoneData.length>0){if(!this.$refs.comPhone.$children[1].validate())return!1;e.push(this.phoneData[0])}e.length>0&&console.log(e)},view:function(){this.messageBoxViewShow=!0},messageBoxClick:function(e){"cancel"===e.action&&(this.messageBoxViewShow=!1)}}},u=(a(852),a(2)),v=Object(u.a)(d,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"v-questionaire-title"},[t("span",{staticClass:"title"},[this._v("新建问卷")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷头图\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷标题\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷简介\n            ")])}],!1,null,"0fddc162",null);v.options.__file="src/pages/sales-tools/questionnaire/edit.vue";t.default=v.exports}}]);
//# sourceMappingURL=47.ef520d3b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{484:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-questionaire"},[i("div",{staticClass:"v-questionaire-title"},[i("span",{staticClass:"title"},[e._v(e._s(e.questionId?"编辑问卷":"新建问卷"))]),e._v(" "),i("com-back",{attrs:{url:"/salesTools/questionnaire/list/"+e.activityId}})],1),e._v(" "),i("div",{staticClass:"content from-box"},[i("div",{staticClass:"tt"},[i("div",{staticClass:"left"},[i("div",{staticClass:"lc"},[i("div",{staticClass:"v-selects"},[i("p",{staticClass:"v-title"},[e._v("\n              个人信息\n            ")]),e._v(" "),i("ul",[i("li",{class:{disabled:!e.base.name},on:{click:function(t){e.addQuestion("name")}}},[i("i",{staticClass:"iconfont icon-xingming"}),e._v("姓"),i("span"),e._v("名")]),e._v(" "),i("li",{class:{disabled:!e.base.phone},on:{click:function(t){e.addQuestion("phone")}}},[i("i",{staticClass:"iconfont icon-shoujihao"}),e._v("手机号")]),e._v(" "),i("li",{class:{disabled:!e.base.email},on:{click:function(t){e.addQuestion("email")}}},[i("i",{staticClass:"iconfont icon-youjian"}),e._v("邮"),i("span"),e._v("箱")]),e._v(" "),i("li",{class:{disabled:!e.base.sex},on:{click:function(t){e.addQuestion("sex")}}},[i("i",{staticClass:"iconfont icon-xingbie"}),e._v("性"),i("span"),e._v("别")]),e._v(" "),i("li",{class:{disabled:!e.base.birth},on:{click:function(t){e.addQuestion("birth")}}},[i("i",{staticClass:"iconfont icon-shengri"}),e._v("生"),i("span"),e._v("日")]),e._v(" "),i("li",{class:{disabled:!e.base.area},on:{click:function(t){e.addQuestion("area")}}},[i("i",{staticClass:"iconfont icon-diyu"}),e._v("地"),i("span"),e._v("域")]),e._v(" "),i("li",{class:{disabled:!e.base.industry},on:{click:function(t){e.addQuestion("industry")}}},[i("i",{staticClass:"iconfont icon-hangye"}),e._v("行"),i("span"),e._v("业")]),e._v(" "),i("li",{class:{disabled:!e.base.position},on:{click:function(t){e.addQuestion("position")}}},[i("i",{staticClass:"iconfont icon-zhiye"}),e._v("职"),i("span"),e._v("位")]),e._v(" "),i("li",{class:{disabled:!e.base.edu},on:{click:function(t){e.addQuestion("edu")}}},[i("i",{staticClass:"iconfont icon-jiaoyushuiping"}),e._v("教育水平")])])]),e._v(" "),i("div",{staticClass:"v-selects"},[i("p",{staticClass:"v-title",staticStyle:{"margin-top":"20px"}},[e._v("\n              题型\n            ")]),e._v(" "),i("ul",[i("li",{on:{click:function(t){e.addQuestion("radio")}}},[i("i",{staticClass:"iconfont icon-danxuan"}),e._v("单选题")]),e._v(" "),i("li",{on:{click:function(t){e.addQuestion("checkbox")}}},[i("i",{staticClass:"iconfont icon-duoxuan"}),e._v("多选题")]),e._v(" "),i("li",{on:{click:function(t){e.addQuestion("select")}}},[i("i",{staticClass:"iconfont icon-xiala"}),e._v("下拉题")]),e._v(" "),i("li",{on:{click:function(t){e.addQuestion("text")}}},[i("i",{staticClass:"iconfont icon-wenda"}),e._v("问答题")])])])])]),e._v(" "),i("div",{ref:"contentBox",staticClass:"right"},[i("div",{staticClass:"ru"},[i("div",{staticClass:"v-form"},[e._m(0),e._v(" "),i("ve-upload",{attrs:{title:"头图图片支持jpg、png、bmp格式，推荐尺寸为：700*140",accept:"png|jpg|jpeg|bmp",fileSize:2048,defaultImg:e.defaultImg,errorMsg:e.error.uploadErrorMsg},on:{error:function(t){e.uploadError(t)},success:function(t){e.uploadImgSuccess(t)}}})],1),e._v(" "),i("div",{staticClass:"v-form"},[e._m(1),e._v(" "),i("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷标题","max-length":30,value:e.title,errorTips:e.error.titleError},on:{"update:value":function(t){e.title=t},change:function(t){e.canPaas=!1},focus:function(t){e.focus("titleError")}}})],1),e._v(" "),i("div",{staticClass:"v-form"},[e._m(2),e._v(" "),i("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷简介","max-length":300,type:"textarea",value:e.description,errorTips:e.error.descriptionError},on:{"update:value":function(t){e.description=t},change:function(t){e.canPaas=!1},focus:function(t){e.focus("descriptionError")}}})],1)]),e._v(" "),i("div",{staticClass:"rb"},[i("div",{staticClass:"v-question-info",class:{hasPhone:e.hasPhone}},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:e.dragData,callback:function(t){e.dragData=t},expression:"dragData"}},e._l(e.dragData,function(t,a){return i("com-question",{key:a,ref:"com"+a,refInFor:!0,class:{isSingle:e.isSingle},attrs:{value:t,edit:!0,index:a+1},on:{"update:value":function(e){t=e},remove:function(t){e.removeQuestion(t)}}})})),e._v(" "),e.phoneData.length?i("com-question",{key:e.dragData.length+1,ref:"comPhone",staticClass:"v-phone",class:{isBorder:e.isBorder},attrs:{value:e.phoneData[0],edit:!0,index:e.dragData.length+1},on:{"update:value":function(t){e.$set(e.phoneData,0,t)},remove:function(t){e.removePhone(t)}}}):e._e()],1)])])])]),e._v(" "),i("div",{staticClass:"v-control clearfix"},[i("button",{class:{"v-save":!0,disabled:e.isSaveDisabled},on:{click:e.save}},[e._v("\n      保存\n    ")]),e._v(" "),i("button",{staticClass:"v-view",on:{click:e.view}},[e._v("\n      预览\n    ")])]),e._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:e.messageBoxViewShow,expression:"messageBoxViewShow"}],staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:e.messageBoxClick}},[i("div",{staticClass:"text"},[e._v("预览")]),e._v(" "),i("div",{staticClass:"v-content"},[i("div",{staticClass:"v-hearder"},[e.defaultImg?i("div",{staticClass:"v-question-img",style:{"background-image":"url("+e.defaultImg+")"}}):e._e(),e._v(" "),i("p",{staticClass:"v-title"},[e._v("\n          "+e._s(this.title)+"\n        ")]),e._v(" "),i("p",{staticClass:"v-summary"},[e._v("\n          "+e._s(this.description)+"\n        ")])]),e._v(" "),i("questions",{attrs:{dragData:e.dragData,phoneData:e.phoneData,isView:!0}})],1)])],1)};a._withStripped=!0;var s=i(455),n=i.n(s),o=i(63),r=i(456),l=i.n(r),c=i(717),u=i(737),d=i(531),h=i(562),v=i(545);var p={components:{draggable:l.a,VeUpload:d.a,comQuestion:c.a,questions:u.a},data:function(){return{base:{name:!0,phone:!0,email:!0,sex:!0,birth:!0,area:!0,industry:!0,position:!0,edu:!0},isSaveDisabled:!1,questionId:this.$route.params.id,activityId:this.$route.params.activityId,title:"",description:"",imgUrl:"",error:{titleError:"",descriptionError:"",uploadErrorMsg:""},dragData:[],phoneData:[],saveResult:!0,canPaas:!0,messageBoxViewShow:!1}},beforeDestroy:function(){},watch:{phoneData:{handler:function(){this.initReady&&(this.canPaas=!1)},deep:!0}},beforeRouteLeave:function(e,t,i){if(this.canPaas)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(e){"confirm"===e.action?i(!0):i(!1)}})},created:function(){o.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"问卷列表",url:"/salesTools/questionnaire/list/"+this.activityId},{title:"编辑问卷"}])},mounted:function(){var e=this;if(this.questionId&&this.activityId)this.getQuestions();else{var t={title:"手机号",errorTip:"",style:"text",type:h.b.TEXT,required:"Y",detail:{format:"phone",max:11},verification:"Y",ext:{name:"手机号",key:"phone"}};this.phoneData.push(t),this.base.phone=!1,this.$nextTick(function(){e.canPaas=!0,e.initReady=!0})}},computed:{isBorder:function(){return!(this.dragData.length>0)},isSingle:function(){return 1===this.dragData.length&&0===this.phoneData.length},hasPhone:function(){return!(0===this.phoneData.length)},defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},methods:{getQuestions:function(){var e=this;this.$get(v.a.GET_QUESTION,{activityId:this.activityId,naireId:this.questionId}).then(function(t){e.title=t.data.title,e.description=t.data.description,e.imgUrl=t.data.imgUrl,t.data.detail.forEach(function(t){t.ext=JSON.parse(t.ext),t._required="Y"===t.required,function(t){setTimeout(function(){"phone"===t.ext.key?e.phoneData.push(t):e.dragData.push(t),e.base[t.ext.key]=!1},0)}(t)})})},removeQuestion:function(e){"phone"===e.type?this.phoneData.splice(0,1):this.dragData.splice(e.index-1,1),this.base[e.type]=!0},removePhone:function(e){var t=this;this.$messageBox({header:"删除活动",content:"删除此模块将会导致无法验证用户手机号码，确认是否删除？",cancelText:"暂不删除",confirmText:"仍要删除",type:"error",width:"500px",handleClick:function(i){console.log(i),"cancel"===i.action||"confirm"===i.action&&t.removeQuestion(e)}})},addQuestion:function(e){if(this.canPaas=!1,this.dragData.length+this.phoneData.length>=100)return this.$toast({content:"场问卷最多能设置100个题目",position:"center"}),!1;var t={};switch(e){case"name":t={title:"姓名",errorTip:"",style:"text",type:h.b.TEXT,required:"N",detail:{max:""},ext:{name:"姓名",key:"name"}},this.dragData.push(t),this.base.name=!1;break;case"phone":t={title:"手机号",errorTip:"",style:"text",type:h.b.TEXT,required:"Y",detail:{format:"phone",max:11},verification:"Y",ext:{name:"手机号",key:"phone"}},this.phoneData.push(t),this.base.phone=!1;break;case"email":t={title:"邮箱",errorTip:"",style:"text",type:h.b.TEXT,required:"N",detail:{format:"email",max:""},ext:{name:"邮箱",key:"email"}},this.dragData.push(t),this.base.email=!1;break;case"sex":t={title:"性别",errorTip:"",type:h.b.SELECT,required:"N",detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别",key:"sex"}},this.dragData.push(t),this.base.sex=!1;break;case"birth":t={title:"生日",errorTip:"",type:h.b.DATE,required:"N",detail:{format:"Y-m-d"},ext:{name:"生日",key:"birth"}},this.dragData.push(t),this.base.birth=!1;break;case"area":t={title:"地域",errorTip:"",type:h.b.AREA,required:"N",detail:{level:"address"},ext:{name:"地域",key:"area"}},this.dragData.push(t),this.base.area=!1;break;case"industry":t={title:"行业",errorTip:"",type:h.b.SELECT,required:"N",detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"行业",key:"industry"}},this.dragData.push(t),this.base.industry=!1;break;case"position":t={title:"职位",style:"text",type:h.b.TEXT,required:"N",detail:{max:""},ext:{name:"职位",key:"position"}},this.dragData.push(t),this.base.position=!1;break;case"edu":t={title:"教育水平",errorTip:"",type:h.b.SELECT,required:"N",detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平",key:"edu"}},this.dragData.push(t),this.base.edu=!1;break;case"radio":t={title:"单选题",errorTip:"",type:h.b.RADIO,required:"N",detail:{list:[{value:"选项"},{value:"选项"},{value:"选项"},{value:"选项"}]},ext:{name:"单选题",key:"radio"}},this.dragData.push(t);break;case"checkbox":t={title:"多选题",errorTip:"",type:h.b.CHECKBOX,value:[],required:"N",detail:{list:[{value:"选项"},{value:"选项"},{value:"选项"},{value:"选项"}]},ext:{name:"多选题",key:"checkbox"}},this.dragData.push(t);break;case"select":t={title:"下拉题",errorTip:"",type:h.b.SELECT,required:"N",detail:{list:[{value:"选项"}]},ext:{name:"下拉题",key:"select"}},this.dragData.push(t);break;case"text":t={title:"问答题",errorTip:"",style:"textarea",type:h.b.TEXT,required:"N",detail:{max:""},ext:{name:"问答题",key:"text"}},this.dragData.push(t)}this.$refs.contentBox.scrollTop=this.$refs.contentBox.scrollHeight},save:function(){var e=this,t=[],i=!0;if(this.imgUrl)if(this.title)if(this.description){for(var a=0;a<this.dragData.length;a++)i&&!this.$refs["com"+a][0].validate()&&(i=!1),t.push(this.dragData[a]);this.phoneData.length>0&&(i&&!this.$refs.comPhone.$children[1].validate()&&(i=!1),t.push(this.phoneData[0]))}else i=!1,this.error.descriptionError="请填写问卷简介";else i=!1,this.error.titleError="请填写问卷标题";else i=!1,this.error.uploadErrorMsg="请上传图片";if(i&&(i=document.querySelectorAll(".error").length<=0),i&&this.saveResult){var s={activityId:this.activityId,title:this.title,description:this.description,imgUrl:this.imgUrl,detail:t};s.detail.forEach(function(e){e.ext=n()(e.ext)}),s.detail=n()(s.detail),this.saveResult=!1,this.questionId?(s.naireId=this.questionId,this.isSaveDisabled=!0,this.$config({handlers:!0}).$post(v.a.POST_QUESTION_UPDATE,s).then(function(t){e.isSaveDisabled=!1,e.canPaas=!0,e.$router.replace("/salesTools/questionnaire/list/"+e.activityId)}).catch(function(t){e.isSaveDisabled=!1,e.canPaas=!0,e.saveResult=!0,e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了",handleClick:function(t){console.log(t),"cancel"===t.action?e.$router.go(0):"confirm"===t.action&&e.$router.go(0)}})})):(this.isSaveDisabled=!0,this.$config({handlers:!0}).$post(v.a.POST_QUESTION_CREAT,s).then(function(t){e.isSaveDisabled=!1,e.canPaas=!0,e.$router.replace("/salesTools/questionnaire/list/"+e.activityId)}).catch(function(t){e.isSaveDisabled=!1,e.saveResult=!0,e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了",handleClick:function(t){console.log(t),"cancel"===t.action?e.$router.go(0):"confirm"===t.action&&e.$router.go(0)}})}))}else this.isSaveDisabled=!0,this.$nextTick(function(){!function(e,t){e||console.error("querySelector不能为空"),document.querySelectorAll(e).forEach(function(e){var i=null;if("input"===e.tagName.toLocaleLowerCase()||"textarea"===e.tagName.toLocaleLowerCase())i=e;else{var a=e.querySelectorAll("input");if(a&&a.length>0)i=a[0];else{var s=e.querySelectorAll("textarea");s&&s.length>0&&(i=s[0])}}if(i){document.querySelectorAll(t)[0].scrollTop=i.scrollHeight;var n=setTimeout(function(){clearTimeout(n),i.value||i.focus()},2e3)}})}(".error",".right"),e.isSaveDisabled=!1})},focus:function(e){this.error[e]=""},view:function(){this.messageBoxViewShow=!0},messageBoxClick:function(e){"cancel"===e.action&&(this.messageBoxViewShow=!1)},uploadImgSuccess:function(e){this.imgUrl=e.name,this.canPaas=!1},uploadError:function(e){this.error.uploadErrorMsg=e.msg}}},f=(i(924),i(1)),m=Object(f.a)(p,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷头图\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷标题\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"v-title"},[t("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷简介\n            ")])}],!1,null,"0fddc162",null);m.options.__file="src/pages/sales-tools/questionnaire/edit.vue";t.default=m.exports},714:function(e,t,i){},924:function(e,t,i){"use strict";var a=i(714);i.n(a).a}}]);
//# sourceMappingURL=55.db081bd4.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{517:function(t,e,i){"use strict";i.r(e);var a=i(455),s=i.n(a),n=i(63),o=i(456),r=i.n(o),l=i(712),c=i(735),u=i(531),d=i(562),h=i(545),v={components:{draggable:r.a,VeUpload:u.a,comQuestion:l.a,questions:c.a},data:function(){return{base:{name:!0,phone:!0,email:!0,sex:!0,birth:!0,area:!0,industry:!0,position:!0,edu:!0},questionId:this.$route.params.id,activityId:this.$route.params.activityId,title:"",description:"",imgUrl:"",error:{titleError:"",descriptionError:"",uploadErrorMsg:""},dragData:[],phoneData:[],saveResult:!0,canPaas:!0,messageBoxViewShow:!1}},beforeDestroy:function(){},beforeRouteLeave:function(t,e,i){if(this.canPaas)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},created:function(){n.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"问卷列表",url:"/salesTools/questionnaire/list/"+this.activityId},{title:"编辑问卷"}])},mounted:function(){if(this.questionId&&this.activityId)this.getQuestions();else{var t={title:"手机号",errorTip:"",style:"text",type:d.b.TEXT,required:"Y",detail:{format:"phone",max:11},verification:"Y",ext:{name:"手机号",key:"phone"}};this.phoneData.push(t),this.base.phone=!1}},computed:{isBorder:function(){return!(this.dragData.length>0)},isSingle:function(){return 1===this.dragData.length&&0===this.phoneData.length},hasPhone:function(){return!(0===this.phoneData.length)},defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},methods:{getQuestions:function(){var t=this;this.$get(h.a.GET_QUESTION,{activityId:this.activityId,naireId:this.questionId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.imgUrl=e.data.imgUrl,e.data.detail.forEach(function(e){e.ext=JSON.parse(e.ext),e._required="Y"===e.required,function(e){setTimeout(function(){"phone"===e.ext.key?t.phoneData.push(e):t.dragData.push(e),t.base[e.ext.key]=!1},0)}(e)})})},back:function(){this.$router.push("/salesTools/questionnaire/list/"+this.activityId)},removeQuestion:function(t){"phone"===t.type?this.phoneData.splice(0,1):this.dragData.splice(t.index-1,1),this.base[t.type]=!0},removePhone:function(t){var e=this;this.$messageBox({header:"删除活动",content:"删除此模块将会导致无法验证用户手机号码，确认是否删除？",cancelText:"暂不删除",confirmText:"仍要删除",type:"error",width:"500px",handleClick:function(i){console.log(i),"cancel"===i.action||"confirm"===i.action&&e.removeQuestion(t)}})},addQuestion:function(t){if(this.dragData.length+this.phoneData.length>=100)return this.$toast({content:"场问卷最多能设置100个题目",position:"center"}),!1;var e={};switch(t){case"name":e={title:"姓名",errorTip:"",style:"text",type:d.b.TEXT,required:"N",detail:{max:""},ext:{name:"姓名",key:"name"}},this.dragData.push(e),this.base.name=!1;break;case"phone":e={title:"手机号",errorTip:"",style:"text",type:d.b.TEXT,required:"Y",detail:{format:"phone",max:11},verification:"Y",ext:{name:"手机号",key:"phone"}},this.phoneData.push(e),this.base.phone=!1;break;case"email":e={title:"邮箱",errorTip:"",style:"text",type:d.b.TEXT,required:"N",detail:{format:"email",max:""},ext:{name:"邮箱",key:"email"}},this.dragData.push(e),this.base.email=!1;break;case"sex":e={title:"性别",errorTip:"",type:d.b.SELECT,required:"N",detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别",key:"sex"}},this.dragData.push(e),this.base.sex=!1;break;case"birth":e={title:"生日",errorTip:"",type:d.b.DATE,required:"N",detail:{format:"Y-m-d"},ext:{name:"生日",key:"birth"}},this.dragData.push(e),this.base.birth=!1;break;case"area":e={title:"地域",errorTip:"",type:d.b.AREA,required:"N",detail:{level:"address"},ext:{name:"地域",key:"area"}},this.dragData.push(e),this.base.area=!1;break;case"industry":e={title:"行业",errorTip:"",type:d.b.SELECT,required:"N",detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"行业",key:"industry"}},this.dragData.push(e),this.base.industry=!1;break;case"position":e={title:"职位",style:"text",type:d.b.TEXT,required:"N",detail:{max:""},ext:{name:"职位",key:"position"}},this.dragData.push(e),this.base.position=!1;break;case"edu":e={title:"教育水平",errorTip:"",type:d.b.SELECT,required:"N",detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平",key:"edu"}},this.dragData.push(e),this.base.edu=!1;break;case"radio":e={title:"单选题",errorTip:"",type:d.b.RADIO,required:"N",detail:{list:[{value:"选项"},{value:"选项"},{value:"选项"},{value:"选项"}]},ext:{name:"单选题",key:"radio"}},this.dragData.push(e);break;case"checkbox":e={title:"多选题",errorTip:"",type:d.b.CHECKBOX,value:[],required:"N",detail:{list:[{value:"选项"},{value:"选项"},{value:"选项"},{value:"选项"}]},ext:{name:"多选题",key:"checkbox"}},this.dragData.push(e);break;case"select":e={title:"下拉题",errorTip:"",type:d.b.SELECT,required:"N",detail:{list:[{value:"选项"}]},ext:{name:"下拉题",key:"select"}},this.dragData.push(e);break;case"text":e={title:"问答题",errorTip:"",style:"textarea",type:d.b.TEXT,required:"N",detail:{max:""},ext:{name:"问答题",key:"text"}},this.dragData.push(e)}this.$refs.contentBox.scrollTop=this.$refs.contentBox.scrollHeight},save:function(){var t=this,e=[],i=!0;if(this.imgUrl)if(this.title)if(this.description){for(var a=0;a<this.dragData.length;a++)i&&!this.$refs["com"+a][0].validate()&&(i=!1),e.push(this.dragData[a]);this.phoneData.length>0&&(i&&!this.$refs.comPhone.$children[1].validate()&&(i=!1),e.push(this.phoneData[0]))}else i=!1,this.error.descriptionError="请填写问卷简介";else i=!1,this.error.titleError="请填写问卷标题";else i=!1,this.error.uploadErrorMsg="请上传图片";if(i&&this.saveResult){var n={activityId:this.activityId,title:this.title,description:this.description,imgUrl:this.imgUrl,detail:e};n.detail.forEach(function(t){t.ext=s()(t.ext)}),n.detail=s()(n.detail),this.saveResult=!1,this.questionId?(n.naireId=this.questionId,this.$config({handlers:!0}).$post(h.a.POST_QUESTION_UPDATE,n).then(function(e){t.canPaas=!0,t.$router.replace("/salesTools/questionnaire/list/"+t.activityId)}).catch(function(e){t.saveResult=!0,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了",handleClick:function(e){console.log(e),"cancel"===e.action?t.$router.go(0):"confirm"===e.action&&t.$router.go(0)}})})):this.$config({handlers:!0}).$post(h.a.POST_QUESTION_CREAT,n).then(function(e){t.canPaas=!0,t.$router.replace("/salesTools/questionnaire/list/"+t.activityId)}).catch(function(e){t.saveResult=!0,t.$messageBox({header:"提示",content:e.msg,autoClose:10,confirmText:"知道了",handleClick:function(e){console.log(e),"cancel"===e.action?t.$router.go(0):"confirm"===e.action&&t.$router.go(0)}})})}else i||this.$toast({content:"保存失败，存在未填写的信息",position:"center"})},focus:function(t){this.error[t]=""},view:function(){this.messageBoxViewShow=!0},messageBoxClick:function(t){"cancel"===t.action&&(this.messageBoxViewShow=!1)},uploadImgSuccess:function(t){this.imgUrl=t.name},uploadError:function(t){this.error.uploadErrorMsg=t.msg}}},p=(i(919),i(1)),f=Object(p.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-questionaire",on:{mousedown:function(e){t.canPaas=!1}}},[i("div",{staticClass:"v-questionaire-title"},[i("span",{staticClass:"title"},[t._v(t._s(t.questionId?"编辑问卷":"新建问卷"))]),t._v(" "),i("button",{staticClass:"v-back",on:{click:t.back}},[t._v("返回")])]),t._v(" "),i("div",{staticClass:"content from-box"},[i("div",{staticClass:"tt"},[i("div",{staticClass:"left"},[i("div",{staticClass:"lc"},[i("div",{staticClass:"v-selects"},[i("p",{staticClass:"v-title"},[t._v("\n              个人信息\n            ")]),t._v(" "),i("ul",[i("li",{class:{disabled:!t.base.name},on:{click:function(e){t.addQuestion("name")}}},[i("i",{staticClass:"iconfont icon-xingming"}),t._v("姓"),i("span"),t._v("名")]),t._v(" "),i("li",{class:{disabled:!t.base.phone},on:{click:function(e){t.addQuestion("phone")}}},[i("i",{staticClass:"iconfont icon-shoujihao"}),t._v("手机号")]),t._v(" "),i("li",{class:{disabled:!t.base.email},on:{click:function(e){t.addQuestion("email")}}},[i("i",{staticClass:"iconfont icon-youjian"}),t._v("邮"),i("span"),t._v("箱")]),t._v(" "),i("li",{class:{disabled:!t.base.sex},on:{click:function(e){t.addQuestion("sex")}}},[i("i",{staticClass:"iconfont icon-xingbie"}),t._v("性"),i("span"),t._v("别")]),t._v(" "),i("li",{class:{disabled:!t.base.birth},on:{click:function(e){t.addQuestion("birth")}}},[i("i",{staticClass:"iconfont icon-shengri"}),t._v("生"),i("span"),t._v("日")]),t._v(" "),i("li",{class:{disabled:!t.base.area},on:{click:function(e){t.addQuestion("area")}}},[i("i",{staticClass:"iconfont icon-diyu"}),t._v("地"),i("span"),t._v("域")]),t._v(" "),i("li",{class:{disabled:!t.base.industry},on:{click:function(e){t.addQuestion("industry")}}},[i("i",{staticClass:"iconfont icon-hangye"}),t._v("行"),i("span"),t._v("业")]),t._v(" "),i("li",{class:{disabled:!t.base.position},on:{click:function(e){t.addQuestion("position")}}},[i("i",{staticClass:"iconfont icon-zhiye"}),t._v("职"),i("span"),t._v("位")]),t._v(" "),i("li",{class:{disabled:!t.base.edu},on:{click:function(e){t.addQuestion("edu")}}},[i("i",{staticClass:"iconfont icon-jiaoyushuiping"}),t._v("教育水平")])])]),t._v(" "),i("div",{staticClass:"v-selects"},[i("p",{staticClass:"v-title"},[t._v("\n              题型\n            ")]),t._v(" "),i("ul",[i("li",{on:{click:function(e){t.addQuestion("radio")}}},[i("i",{staticClass:"iconfont icon-danxuan"}),t._v("单选题")]),t._v(" "),i("li",{on:{click:function(e){t.addQuestion("checkbox")}}},[i("i",{staticClass:"iconfont icon-duoxuan"}),t._v("多选题")]),t._v(" "),i("li",{on:{click:function(e){t.addQuestion("select")}}},[i("i",{staticClass:"iconfont icon-xiala"}),t._v("下拉题")]),t._v(" "),i("li",{on:{click:function(e){t.addQuestion("text")}}},[i("i",{staticClass:"iconfont icon-wenda"}),t._v("问答题")])])])])]),t._v(" "),i("div",{ref:"contentBox",staticClass:"right"},[i("div",{staticClass:"ru"},[i("div",{staticClass:"v-form"},[t._m(0),t._v(" "),i("ve-upload",{attrs:{title:"头图图片支持jpg、png、bmp格式，推荐尺寸为：700*140",accept:"png|jpg|jpeg|bmp",fileSize:2048,defaultImg:t.defaultImg,errorMsg:t.error.uploadErrorMsg},on:{error:function(e){t.uploadError(e)},success:function(e){t.uploadImgSuccess(e)}}})],1),t._v(" "),i("div",{staticClass:"v-form"},[t._m(1),t._v(" "),i("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷标题","max-length":30,value:t.title,errorTips:t.error.titleError},on:{"update:value":function(e){t.title=e},focus:function(e){t.focus("titleError")}}})],1),t._v(" "),i("div",{staticClass:"v-form"},[t._m(2),t._v(" "),i("com-input",{staticClass:"q-title",attrs:{placeholder:"问卷简介","max-length":300,type:"textarea",value:t.description,errorTips:t.error.descriptionError},on:{"update:value":function(e){t.description=e},focus:function(e){t.focus("descriptionError")}}})],1)]),t._v(" "),i("div",{staticClass:"rb"},[i("div",{staticClass:"v-question-info",class:{hasPhone:t.hasPhone}},[i("draggable",{attrs:{options:{handle:".sort"}},model:{value:t.dragData,callback:function(e){t.dragData=e},expression:"dragData"}},t._l(t.dragData,function(e,a){return i("com-question",{key:a,ref:"com"+a,refInFor:!0,class:{isSingle:t.isSingle},attrs:{value:e,edit:!0,index:a+1},on:{"update:value":function(t){e=t},remove:function(e){t.removeQuestion(e)}}})})),t._v(" "),t.phoneData.length?i("com-question",{key:t.dragData.length+1,ref:"comPhone",staticClass:"v-phone",class:{isBorder:t.isBorder},attrs:{value:t.phoneData[0],edit:!0,index:t.dragData.length+1},on:{"update:value":function(e){t.$set(t.phoneData,0,e)},remove:function(e){t.removePhone(e)}}}):t._e()],1)])])])]),t._v(" "),i("div",{staticClass:"v-control clearfix"},[i("button",{staticClass:"v-save",on:{click:t.save}},[t._v("\n      保存\n    ")]),t._v(" "),i("button",{staticClass:"v-view",on:{click:t.view}},[t._v("\n      预览\n    ")])]),t._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:t.messageBoxViewShow,expression:"messageBoxViewShow"}],staticClass:"message-box v-view",attrs:{width:"700px",confirmText:"确定",type:"prompt",header:"预览"},on:{handleClick:t.messageBoxClick}},[i("div",{staticClass:"text"},[t._v("预览")]),t._v(" "),i("div",{staticClass:"v-content"},[i("div",{staticClass:"v-hearder"},[t.defaultImg?i("div",{staticClass:"v-question-img",style:{"background-image":"url("+t.defaultImg+")"}}):t._e(),t._v(" "),i("p",{staticClass:"v-title"},[t._v("\n          "+t._s(this.title)+"\n        ")]),t._v(" "),i("p",{staticClass:"v-summary"},[t._v("\n          "+t._s(this.description)+"\n        ")])]),t._v(" "),i("questions",{attrs:{dragData:t.dragData,phoneData:t.phoneData,isView:!0}})],1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"v-title"},[e("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷头图\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"v-title"},[e("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷标题\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"v-title"},[e("span",{staticClass:"v-red"},[this._v("\n                *\n              ")]),this._v("\n              问卷简介\n            ")])}],!1,null,"3bcb1a5e",null);f.options.__file="edit.vue";e.default=f.exports},709:function(t,e,i){},919:function(t,e,i){"use strict";var a=i(709);i.n(a).a}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{289:function(t,s,i){},440:function(t,s,i){"use strict";var e=i(289);i.n(e).a},591:function(t,s,i){"use strict";i.r(s);var e=i(235),a=i(242),n=i(233),o={name:"edit",data:function(){return{tagModal:!1,isNew:!0,date:"",title:"",editorContent:"",outRange:!1,titleEmpty:!1,tagEmpty:!1,dateEmpty:!1,status:"",countCount:0,tagList:[],tagGroup:[],poster:"",uploadImgErrorMsg:"",percentImg:0,createdSuccess:!1,maxLength:1e3,activityId:this.$route.params.id,imgHost:"//zhike.oss-cn-beijing.aliyuncs.com/",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},successTxt:"",canPaas:!0}},created:function(){this.tagList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],this.activityId&&(this.isNew=!1,this.queryInfo())},watch:{editorContent:function(t,s){var i=this;this.$nextTick(function(){i.countCount=document.querySelector(".vue-html5-editor .content").innerText.gbLength(),i.countCount>i.maxLength?i.outRange=!0:i.outRange=!1})}},methods:{uploadImgSuccess:function(t){this.poster=t.name},uploadError:function(t){console.log("上传失败:",t),this.uploadImgErrorMsg=t.msg},uploadOver:function(t){console.log(t)},queryInfo:function(){var t=this;this.$get(n.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(s){t.date=s.data.startTime,t.title=s.data.title,t.poster=s.data.imgUrl,t.editorContent=s.data.description,t.tagGroup=s.data.tags,t.status=s.data.status})},comfirm:function(){var t=this,s={id:this.activityId,startTime:this.date,title:this.title,imgUrl:this.poster,description:this.editorContent,tags:this.tagGroup};this.title.length?this.titleEmpty=!1:this.titleEmpty=!0,this.tagGroup.length?this.tagEmpty=!1:this.tagEmpty=!0,this.date.length?this.dateEmpty=!1:this.dateEmpty=!0,this.$nextTick(function(){t.title.length&&t.tagGroup.length&&t.date.length&&t.updateWebinfo(t.isNew,s)})},updateWebinfo:function(t,s){var i=this;t?this.$config({handlers:[2001]}).$post(n.a.POST_CREATE_WEBINAR,s).then(function(t){i.createdSuccess=!0,i.canPaas=!0,i.successTxt="创建成功",t.data.id?i.finishId=t.data.id:i.finishId=i.activityId}).catch(function(t){2001===t.code&&i.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"})}):this.$config({handlers:[2001]}).$post(n.a.POST_UPDATE_WEBINAR,s).then(function(t){i.createdSuccess=!0,i.canPaas=!0,i.successTxt="更新成功",t.data.id?i.finishId=t.data.id:i.finishId=i.activityId}).catch(function(t){2001===t.code&&i.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"})})},toDetail:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/detail/"+this.finishId})},toList:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/list"})}},beforeRouteLeave:function(t,s,i){if(this.canPaas)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},components:{VeEditer:a.a,VeUpload:e.a}},c=(i(440),i(1)),r=Object(c.a)(o,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{on:{mousedown:function(s){t.canPaas=!1}}},[t.createdSuccess?t._e():i("div",{staticClass:"edit-page live-mager"},[i("div",{staticClass:"edit-title"},[t.activityId?i("span",{staticClass:"title"},[t._v("编辑活动")]):i("span",{staticClass:"title"},[t._v("新建活动")])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"content from-box"},[i("div",{staticClass:"from-row"},[t._m(1),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"inp",class:{error:t.titleEmpty},attrs:{value:t.title,placeholder:"请输入直播标题","max-length":30},on:{"update:value":function(s){t.title=s},focus:function(s){t.titleEmpty=!1}}}),t._v(" "),t.titleEmpty?i("span",{staticClass:"error-tips"},[t._v("直播标题不能为空")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(2),t._v(" "),i("div",{staticClass:"from-content",class:{error:t.dateEmpty}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",editable:!1,"picker-options":t.pickerOptions,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","popper-class":"datePicker"},on:{focus:function(s){t.dateEmpty=!1}},model:{value:t.date,callback:function(s){t.date=s},expression:"date"}}),t._v(" "),i("span",{staticClass:"tips-time"},[t._v("直播有效期为直播时间后的48小时之内（或开始直播后的48小时之内）")]),t._v(" "),t.dateEmpty?i("span",{staticClass:"error-tips"},[t._v("请选择直播时间")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(3),t._v(" "),i("div",{staticClass:"from-content"},[i("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg|bmp",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(4),t._v(" "),i("div",{staticClass:"from-content"},[i("ol",{staticClass:"tag-list clearfix"},t._l(t.tagGroup,function(s,e){return i("li",{key:s},[t._v(t._s(e))])})),t._v(" "),i("el-button",{staticClass:"add-tag",attrs:{round:""},on:{click:function(s){t.tagModal=!0,t.tagEmpty=!1}}},[t._v("+")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.tagModal,expression:"tagModal"}],staticClass:"tag-modal"},[i("el-checkbox-group",{attrs:{size:"mini",max:6},model:{value:t.tagGroup,callback:function(s){t.tagGroup=s},expression:"tagGroup"}},t._l(t.tagList,function(s){return i("el-checkbox-button",{key:s,attrs:{label:s}},[t._v(t._s(s))])}))],1),t._v(" "),t.tagEmpty?i("span",{staticClass:"error-tips"},[t._v("请添加直播标签")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[t._v("直播介绍：")]),t._v(" "),i("div",{staticClass:"from-content editor-content",class:{error:t.outRange},staticStyle:{position:"relative"}},[i("ve-editer",{attrs:{height:"280"},model:{value:t.editorContent,callback:function(s){t.editorContent=s},expression:"editorContent"}}),t._v(" "),i("span",{staticClass:"content-count"},[i("i",{staticClass:"count"},[t._v(t._s(t.countCount))]),t._v("/1000")]),t._v(" "),t.outRange?i("span",{staticClass:"error-tips"},[t._v("直播简介不能超过1000个字符")]):t._e()],1)]),t._v(" "),"PREPARE"!==t.status&&t.activityId?t._e():i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"}),t._v(" "),i("div",{staticClass:"from-content"},[i("button",{staticClass:"create-btn",attrs:{disabled:t.outRange},on:{click:t.comfirm}},[t.activityId?[t._v("保存")]:[t._v("创建")]],2)])])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.createdSuccess?i("div",{staticClass:"finish-box"},[i("dl",[i("dt"),t._v(" "),i("dd",[t._v("直播已"+t._s(t.successTxt)+"，您可以")]),t._v(" "),i("dd",[i("span",{staticClass:"finish-button detail",on:{click:t.toDetail}},[t._v("活动详情")]),t._v(" "),i("span",{staticClass:"finish-button list",on:{click:t.toList}},[t._v("活动列表")])])])]):t._e()])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[s("i"),this._v("注意：活动在直播有效期内可发起直播，过期后将无法发起直播\n    ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播标题：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播时间：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"}),this._v("直播封面：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播标签：")])}],!1,null,"cfdb13e4",null);r.options.__file="edit.vue";s.default=r.exports}}]);
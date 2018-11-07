(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{546:function(t,s,a){},720:function(t,s,a){"use strict";var e=a(546);a.n(e).a},899:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{on:{mousedown:function(s){t.canPaas=!1}}},[t.createdSuccess?t._e():a("div",{staticClass:"edit-page live-mager"},[a("div",{staticClass:"edit-title"},[t.activityId?a("span",{staticClass:"title"},[t._v("编辑活动")]):a("span",{staticClass:"title"},[t._v("新建活动")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"content from-box"},[a("div",{staticClass:"from-row"},[t._m(1),t._v(" "),a("div",{staticClass:"from-content"},[a("com-input",{staticClass:"inp",class:{error:t.titleEmpty},attrs:{value:t.title,placeholder:"请输入直播标题","max-length":30},on:{"update:value":function(s){t.title=s},focus:function(s){t.titleEmpty=!1}}}),t._v(" "),t.titleEmpty?a("span",{staticClass:"error-tips"},[t._v("直播标题不能为空")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"from-row"},[t._m(2),t._v(" "),a("div",{staticClass:"from-content",class:{error:t.dateEmpty}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",editable:!1,"picker-options":t.pickerOptions,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","popper-class":"datePicker"},on:{focus:function(s){t.dateEmpty=!1}},model:{value:t.date,callback:function(s){t.date=s},expression:"date"}}),t._v(" "),a("span",{staticClass:"tips-time"},[t._v("直播有效期为直播时间后的48小时之内（或开始直播后的48小时之内）")]),t._v(" "),t.dateEmpty?a("span",{staticClass:"error-tips"},[t._v("请选择直播时间")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"from-row"},[t._m(3),t._v(" "),a("div",{staticClass:"from-content"},[a("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M",accept:"png|jpg|jpeg|bmp",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)]),t._v(" "),a("div",{staticClass:"from-row"},[t._m(4),t._v(" "),a("div",{staticClass:"from-content"},[t.tagArray.length?a("ol",{staticClass:"tag-list clearfix"},[t._l(t.tagArray,function(s,e){return a("li",{key:e},[t._v(t._s(s.name)+" "),a("span",{on:{click:function(s){t.handleDel(e,"tagArray")}}})])}),t._v(" "),t.tagArray.length<3?a("li",{staticClass:"add-tag",on:{click:function(s){t.showChooseTag=!0,t.tagEmpty=!1}}},[a("span")]):t._e()],2):a("el-button",{attrs:{round:""},on:{click:function(s){t.showChooseTag=!0}}},[t._v("选择标签")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showChooseTag,expression:"showChooseTag"}],staticClass:"tag-modal"},[a("div",{staticClass:"title"},[t._v("选择标签，最多可选择 3 个")]),t._v(" "),a("i",{staticClass:"el-submenu__icon-arrow el-icon-arrow-down arrow",on:{click:function(s){t.showChooseTag=!1}}}),t._v(" "),a("el-checkbox-group",{attrs:{size:"mini",max:3},on:{change:t.selectTag},model:{value:t.tagGroup,callback:function(s){t.tagGroup=s},expression:"tagGroup"}},[a("div",{staticClass:"group-title"},[t._v("行业标签")]),t._v(" "),t._l(t.industryTag,function(s){return a("el-checkbox-button",{key:s.id,attrs:{label:s.id}},[t._v(t._s(s.name))])}),t._v(" "),a("div",{staticClass:"group-title"},[t._v("场景标签")]),t._v(" "),t._l(t.sceneTag,function(s){return a("el-checkbox-button",{key:s.id,attrs:{label:s.id}},[t._v(t._s(s.name))])})],2)],1),t._v(" "),t.tagEmpty?a("span",{staticClass:"error-tips"},[t._v("请添加直播标签")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("直播介绍：")]),t._v(" "),a("div",{staticClass:"from-content editor-content",class:{error:t.outRange},staticStyle:{position:"relative"}},[a("ve-editer",{attrs:{height:"280"},model:{value:t.editorContent,callback:function(s){t.editorContent=s},expression:"editorContent"}}),t._v(" "),a("span",{staticClass:"content-count"},[a("i",{staticClass:"count"},[t._v(t._s(t.countCount))]),t._v("/1000")]),t._v(" "),t.outRange?a("span",{staticClass:"error-tips"},[t._v("直播简介不能超过1000个字符")]):t._e()],1)]),t._v(" "),"PREPARE"!==t.status&&t.activityId?t._e():a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"}),t._v(" "),a("div",{staticClass:"from-content"},[a("button",{staticClass:"create-btn",attrs:{disabled:t.outRange||t.saveStatus},on:{click:t.comfirm}},[t.activityId?[t._v("保存")]:[t._v("创建")]],2)])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.createdSuccess?a("div",{staticClass:"finish-box"},[a("dl",[a("dt"),t._v(" "),a("dd",[t._v("直播已"+t._s(t.successTxt)+"，您可以")]),t._v(" "),a("dd",[a("span",{staticClass:"finish-button detail",on:{click:t.toDetail}},[t._v("活动详情")]),t._v(" "),a("span",{staticClass:"finish-button list",on:{click:t.toList}},[t._v("活动列表")])])])]):t._e()])],1)};e._withStripped=!0;var i=a(470),n=a(483),o=a(469),c=a(665),r={name:"edit",data:function(){return{showChooseTag:!1,isNew:!0,date:"",title:"",editorContent:"",outRange:!1,saveStatus:!1,titleEmpty:!1,tagEmpty:!1,dateEmpty:!1,status:"",countCount:0,tagList:[],industryTag:[],sceneTag:[],tagGroup:[],poster:"",tagArray:[],uploadImgErrorMsg:"",percentImg:0,createdSuccess:!1,maxLength:1e3,activityId:this.$route.params.id,imgHost:"//test-zhike.oss-cn-beijing.aliyuncs.com/",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},successTxt:"",canPaas:!0}},created:function(){this.queryTags()},mounted:function(){this.activityId&&(this.isNew=!1,this.queryInfo())},watch:{editorContent:function(t,s){var a=this;this.$nextTick(function(){a.countCount=document.querySelector(".vue-html5-editor .content").innerText.gbLength(),a.countCount>a.maxLength?a.outRange=!0:a.outRange=!1})}},methods:{uploadImgSuccess:function(t){this.poster=t.name},uploadError:function(t){console.log("上传失败:",t),this.uploadImgErrorMsg=t.msg},uploadOver:function(t){console.log(t)},queryInfo:function(){var t=this;this.$get(o.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(s){t.date=s.data.startTime,t.title=s.data.title,t.poster=s.data.imgUrl,t.editorContent=s.data.description,t.tagArray=s.data.tags,t.status=s.data.status,t.restoreTag(t.tagArray)})},queryTags:function(t){var s=this;this.$get(o.a.GET_TAG_LIST,{keyword:this.tagKeyword}).then(function(t){console.log(t.data),t.data.industry.forEach(function(t){s.industryTag.push({name:t.name,id:t.id})}),t.data.scene.forEach(function(t){s.sceneTag.push({name:t.name,id:t.id})})})},restoreTag:function(t){var s=this;t.forEach(function(t){s.tagGroup.push(t.id)})},selectTag:function(t){var s=this,a=[];t.forEach(function(t,e){s.industryTag.forEach(function(s,e){t===s.id&&a.push({id:s.id,name:s.name})}),s.sceneTag.forEach(function(s,e){t===s.id&&a.push({id:t,name:s.name})})}),this.tagArray=a},comfirm:function(){var t=this;this.saveStatus=!0;var s={id:this.activityId,startTime:this.date,title:this.title,imgUrl:this.poster,description:this.editorContent,tags:this.tagGroup};this.title.length?this.titleEmpty=!1:this.titleEmpty=!0,this.tagArray.length?this.tagEmpty=!1:this.tagEmpty=!0,this.date.length?this.dateEmpty=!1:this.dateEmpty=!0,this.$nextTick(function(){t.title.length&&t.tagArray.length&&t.date.length&&t.updateWebinfo(t.isNew,s)})},updateWebinfo:function(t,s){var a=this;t?this.$config({handlers:[2001]}).$post(o.a.POST_CREATE_WEBINAR,s).then(function(t){a.createdSuccess=!0,a.canPaas=!0,a.successTxt="创建成功",t.data.id?a.finishId=t.data.id:a.finishId=a.activityId,a.saveStatus=!1}).catch(function(t){2001===t.code&&a.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"}),a.saveStatus=!1}):this.$config({handlers:[2001]}).$post(o.a.POST_UPDATE_WEBINAR,s).then(function(t){a.createdSuccess=!0,a.canPaas=!0,a.successTxt="更新成功",t.data.id?a.finishId=t.data.id:a.finishId=a.activityId,a.saveStatus=!1}).catch(function(t){2001===t.code&&a.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"}),a.saveStatus=!1})},toDetail:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/detail/"+this.finishId})},toList:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/list"})},handleClick:function(t){"cancel"===t.action&&(this.showChooseTag=!1)},searchHandler:function(t){console.log(t),this.tagKeyword=t,this.queryTags()},handleDel:function(t,s){this.tagArray.splice(t,1),this.tagGroup.splice(t,1)}},beforeRouteLeave:function(t,s,a){if(this.canPaas)return a(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?a(!0):a(!1)}})},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},components:{VeEditer:n.a,VeUpload:i.a,comChoose:c.a}},l=(a(720),a(2)),d=Object(l.a)(r,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[s("i"),this._v("注意：活动在直播有效期内可发起直播，过期后将无法发起直播\n    ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播标题：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播时间：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"}),this._v("直播封面：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("直播标签：")])}],!1,null,"a23341b4",null);d.options.__file="src/pages/live-mager/edit.vue";s.default=d.exports}}]);
//# sourceMappingURL=20.f5992b17.js.map
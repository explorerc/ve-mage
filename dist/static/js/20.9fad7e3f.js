(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{481:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.createdSuccess?t._e():s("div",{staticClass:"edit-page live-mager",on:{click:function(a){t.clooseTagClose(a)},keydown:function(a){t.canPaas=!1}}},[s("div",{staticClass:"edit-title"},[t.activityId?s("span",{staticClass:"title"},[t._v("编辑活动")]):s("span",{staticClass:"title"},[t._v("新建活动")]),t._v(" "),t.activityId?s("com-back",{class:"back-btn",attrs:{url:"/liveMager/detail/"+t.activityId}}):s("com-back",{class:"back-btn",attrs:{url:"/liveMager/list"}})],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"content from-box"},[s("div",{staticClass:"from-row"},[t._m(1),t._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{staticClass:"inp",class:{error:t.titleEmpty},attrs:{value:t.title,placeholder:"请输入直播标题","max-length":30},on:{"update:value":function(a){t.title=a},focus:function(a){t.titleEmpty=!1}}}),t._v(" "),t.titleEmpty?s("span",{staticClass:"error-tips error-position"},[t._v("请填写直播标题")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(2),t._v(" "),s("div",{staticClass:"from-content",class:{error:t.dateEmpty}},[s("el-date-picker",{attrs:{type:"datetime",clearable:!1,placeholder:"选择日期时间",editable:!1,"picker-options":t.pickerOptions,format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm","popper-class":"datePicker","default-value":t.defaultValue},on:{focus:function(a){t.dateFocus()},change:function(a){t.canPaas=!1}},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}}),t._v(" "),t.dateEmpty?s("span",{staticClass:"error-tips error-position"},[t._v("请选择直播时间")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(3),t._v(" "),s("div",{staticClass:"from-content"},[s("ve-upload",{attrs:{title:"图片支持jpg、png、bmp格式，大小不超过2M<br>尺寸不超过1600*900",accept:"png|jpg|jpeg|bmp",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)]),t._v(" "),s("div",{staticClass:"from-row"},[t._m(4),t._v(" "),s("div",{staticClass:"from-content"},[t.tagArray.length?s("ol",{staticClass:"tag-list clearfix"},[t._l(t.tagArray,function(a,i){return s("li",{key:i,staticClass:"tag"},[t._v(t._s(a.name)+" "),s("span",{on:{click:function(a){t.handleDel(i,"tagArray")}}})])}),t._v(" "),t.tagArray.length<3?s("li",{staticClass:"add-tag",on:{click:function(a){return a.stopPropagation(),t.addShowClooseTag(a)}}},[s("span")]):t._e()],2):s("el-button",{staticClass:"choose-tag",attrs:{round:""},on:{click:t.showClooseTag}},[t._v("选择标签")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showChooseTag,expression:"showChooseTag"}],staticClass:"tag-modal",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"title"},[t._v("选择标签，最多可选择 3 个")]),t._v(" "),s("i",{staticClass:"el-submenu__icon-arrow el-icon-arrow-down arrow",on:{click:function(a){t.showChooseTag=!1}}}),t._v(" "),s("el-checkbox-group",{attrs:{size:"mini",max:3},on:{change:t.selectTag},model:{value:t.tagGroup,callback:function(a){t.tagGroup=a},expression:"tagGroup"}},[s("div",{staticClass:"group-title"},[t._v("行业标签")]),t._v(" "),t._l(t.industryTag,function(a){return s("el-checkbox-button",{key:a.id,attrs:{label:a.id}},[t._v(t._s(a.name))])}),t._v(" "),s("div",{staticClass:"group-title"},[t._v("场景标签")]),t._v(" "),t._l(t.sceneTag,function(a){return s("el-checkbox-button",{key:a.id,attrs:{label:a.id}},[t._v(t._s(a.name))])})],2)],1),t._v(" "),t.tagEmpty?s("span",{staticClass:"error-tips"},[t._v("请添加直播标签")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[t._v("直播介绍：")]),t._v(" "),s("div",{staticClass:"from-content editor-content",class:{error:t.outRange},staticStyle:{position:"relative"}},[s("ve-editer",{attrs:{height:"280"},model:{value:t.editorContent,callback:function(a){t.editorContent=a},expression:"editorContent"}}),t._v(" "),s("span",{staticClass:"content-count"},[s("i",{ref:"count",staticClass:"count"},[t._v(t._s(t.countCount))]),t._v("/1000")]),t._v(" "),t.outRange?s("span",{staticClass:"error-tips"},[t._v("直播简介不能超过1000个字符")]):t._e()],1)]),t._v(" "),"Y"!==t.validStatus&&t.activityId?t._e():s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"}),t._v(" "),s("div",{staticClass:"from-content"},[s("button",{staticClass:"create-btn",on:{click:t.comfirm}},[t.activityId?[t._v("保存")]:[t._v("创建")]],2)])])])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.createdSuccess?s("div",{staticClass:"finish-box"},[s("dl",[s("dt"),t._v(" "),s("dd",[t._v("直播已"+t._s(t.successTxt)+"，您可以")]),t._v(" "),s("dd",[s("span",{staticClass:"finish-button detail",on:{click:t.toDetail}},[t._v("更多活动设置")]),t._v(" "),s("span",{staticClass:"finish-button list",on:{click:t.toList}},[t._v("返回活动列表")])])])]):t._e()])],1)};i._withStripped=!0;var e=s(524),o=s(516),n=s(530),c=s(514),r=s(727),l=s(59),u={name:"edit",data:function(){return{showChooseTag:!1,isNew:!0,date:"",title:"",editorContent:"",outRange:!1,saveStatus:!1,titleEmpty:!1,tagEmpty:!1,dateEmpty:!1,status:"",countCount:0,tagList:[],industryTag:[],sceneTag:[],tagGroup:[],poster:"",tagArray:[],uploadImgErrorMsg:"",percentImg:0,createdSuccess:!1,maxLength:1e3,activityId:this.$route.params.id,imgHost:"//dev-zhike.oss-cn-beijing.aliyuncs.com/",pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},successTxt:"",canPaas:!0,validStatus:"",defaultValue:Object(e.a)(new Date((new Date).getTime()+18e5),"yyyy-MM-dd hh:mm")}},created:function(){var t=[];this.activityId?(this.isNew=!1,this.queryInfo(),t=[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"编辑活动"}]):t=[{title:"活动管理"},{title:"新建活动"}],this.queryTags(),l.a.$emit("breads",t)},mounted:function(){},watch:{editorContent:function(t,a){var s=this;this.$nextTick(function(){s.countCount=document.querySelector(".vue-html5-editor .content").innerText.gbLength(),s.countCount>s.maxLength?s.outRange=!0:s.outRange=!1})},countCount:function(t,a){0!==this.countCount?this.$refs.count.style.color="#4b5afe":this.$refs.count.style.color="#999"}},methods:{uploadImgSuccess:function(t){this.poster=t.name,this.canPaas=!1},uploadError:function(t){console.log("上传失败:",t),this.uploadImgErrorMsg=t.msg},uploadOver:function(t){console.log(t)},queryInfo:function(){var t=this;this.$get(c.a.GET_WEBINAR_INFO,{id:this.activityId}).then(function(a){t.date=a.data.startTime,t.title=a.data.title,t.poster=a.data.imgUrl,t.editorContent=a.data.description,t.tagArray=a.data.tags,t.status=a.data.status,t.validStatus=a.data.validStatus,t.restoreTag(t.tagArray)})},queryTags:function(t){var a=this;this.$get(c.a.GET_TAG_LIST,{keyword:this.tagKeyword}).then(function(t){console.log(t.data),t.data.industry.forEach(function(t){a.industryTag.push({name:t.name,id:t.id})}),t.data.scene.forEach(function(t){a.sceneTag.push({name:t.name,id:t.id})})})},restoreTag:function(t){var a=this;t.forEach(function(t){a.tagGroup.push(t.id)})},selectTag:function(t){var a=this,s=[];t.forEach(function(t,i){a.industryTag.forEach(function(a,i){t===a.id&&s.push({id:a.id,name:a.name})}),a.sceneTag.forEach(function(a,i){t===a.id&&s.push({id:t,name:a.name})})}),this.tagArray=s},comfirm:function(){var t=this;this.saveStatus=!0;var a={id:this.activityId,startTime:this.date,title:this.title,imgUrl:this.poster,description:this.editorContent,tags:this.tagGroup};this.title.length?this.titleEmpty=!1:this.titleEmpty=!0,this.tagArray.length?this.tagEmpty=!1:this.tagEmpty=!0,this.tagGroup.length?this.tagEmpty=!1:this.tagEmpty=!0,this.date.length?this.dateEmpty=!1:this.dateEmpty=!0,this.$nextTick(function(){t.title.length&&(t.tagArray.length||t.tagGroup.length)&&t.date.length?t.updateWebinfo(t.isNew,a):t.saveStatus=!1})},updateWebinfo:function(t,a){var s=this;t?this.$config({handlers:[2001]}).$post(c.a.POST_CREATE_WEBINAR,a).then(function(t){s.createdSuccess=!0,s.canPaas=!0,s.successTxt="创建成功",t.data.id?s.finishId=t.data.id:s.finishId=s.activityId,s.saveStatus=!1}).catch(function(t){2001===t.code&&s.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"}),s.saveStatus=!1}):this.$config({handlers:[2001]}).$post(c.a.POST_UPDATE_WEBINAR,a).then(function(t){s.createdSuccess=!0,s.canPaas=!0,s.successTxt="更新成功",t.data.id?s.finishId=t.data.id:s.finishId=s.activityId,s.saveStatus=!1}).catch(function(t){2001===t.code&&s.$messageBox({header:"提示",content:"直播时间已过期，请重新选择!",autoClose:10,confirmText:"知道了"}),s.saveStatus=!1})},toDetail:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/detail/"+this.finishId})},toList:function(){this.canPaas=!0,this.$router.push({path:"/liveMager/list"})},handleClick:function(t){"cancel"===t.action&&(this.showChooseTag=!1)},searchHandler:function(t){console.log(t),this.tagKeyword=t,this.queryTags()},handleDel:function(t,a){this.tagArray.splice(t,1),this.tagGroup.splice(t,1)},back:function(){window.history.go(-1)},resetData:function(){this.isNew=!0,this.dateEmpty=!1,this.outRange=!1,this.showChooseTag=!1,this.tagEmpty=!1,this.activityId="",this.date="",this.successTxt="",this.titleEmpty="",this.uploadImgErrorMsg="",this.title="",this.editorContent="",this.poster="",this.tagArray=[],this.tagGroup=[],this.activityId=""},clooseTagClose:function(t){this.showChooseTag=!1},showClooseTag:function(){var t=this;this.$nextTick(function(){t.showChooseTag=!0,t.tagEmpty=!1})},addShowClooseTag:function(){var t=this;this.canPaas=!1,this.showChooseTag=!this.showChooseTag,this.$nextTick(function(){t.tagEmpty=!1})},dateFocus:function(){this.dateEmpty=!1,this.date=new Date(this.defaultValue).format("yyyy-MM-dd hh:mm")}},beforeRouteLeave:function(t,a,s){var i=this;if(this.canPaas)return s(!0),this.isNew||this.resetData(),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?(s(!0),i.isNew||i.resetData()):s(!1)}})},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},components:{VeEditer:n.a,VeUpload:o.a,comChoose:r.a}},d=(s(782),s(1)),h=Object(d.a)(u,i,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tips"},[a("i"),this._v("注意：活动在开始直播的48小时之内可重复发起，48小时之后将无法再次发起直播\n    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("直播标题：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("直播时间：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"}),this._v("直播封面：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"from-title"},[a("i",{staticClass:"star"},[this._v("*")]),this._v("直播标签：")])}],!1,null,"a23341b4",null);h.options.__file="src/pages/live-mager/edit.vue";a.default=h.exports},598:function(t,a,s){},782:function(t,a,s){"use strict";var i=s(598);s.n(i).a}}]);
//# sourceMappingURL=20.9fad7e3f.js.map
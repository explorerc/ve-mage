(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{491:function(t,s,i){"use strict";i.r(s);var a=i(531),e=i(698),n=i(63),r={data:function(){return{activityId:this.$route.params.id,title:"",titleError:"",img:"",desc:"",btnSwitch:!0,btnTxt:"",btnTxtError:"",btnLink:"",btnLinkError:"",poster:"",imgHost:"//static.vhallyun.com/",uploadImgErrorMsg:"",cardId:this.$route.query.cardId,saveData:"",canSave:!1,canPaas:!0}},created:function(){n.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"推荐卡片",url:"/salesTools/recommendCards/"+this.$route.params.id},{title:"new"!==this.cardId?"编辑卡片":"新建卡片"}])},mounted:function(){"new"!==this.cardId&&this.getDetail(this.cardId)},methods:{save:function(){if(this.verify(),!this.canSave)return!1;this.saveData={activity_id:this.activityId,recommend_card_id:"new"===this.cardId?"":this.cardId,title:this.title,pic:this.poster,desc:this.desc,btn_display:this.btnSwitch?"Y":"N",btn_text:this.btnTxt,btn_link:this.btnLink},"new"===this.cardId?this.saveCard():this.updateCard()},cancel:function(){window.history.go(-1)},uploadImgSuccess:function(t){this.poster=t.name},uploadError:function(t){console.log("上传失败:",t),this.uploadImgErrorMsg=t.msg},switchChange:function(t){},saveCard:function(){var t=this;this.$post(e.a.POST_CREATE_CARD,this.saveData).then(function(s){t.canPaas=!0,t.$router.push("/salesTools/recommendCards/"+t.activityId)})},updateCard:function(){var t=this;this.$post(e.a.POST_UPDATE_CARD,this.saveData).then(function(s){t.$toast({content:"更新成功",position:"center"}),t.canPaas=!0,setTimeout(function(){t.$router.push("/salesTools/recommendCards/"+t.activityId)},500)})},verify:function(){this.title.length?this.titleError="":this.titleError="请输入卡片名称",this.poster.length?this.uploadImgErrorMsg="":this.uploadImgErrorMsg="请上传卡片图片",this.btnSwitch?(this.btnTxt.length?this.btnTxtError="":this.btnTxtError="请输入按钮文案",/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(this.btnLink)?this.btnLinkError="":this.btnLinkError="请输入有效的链接以http://或https://开头"):this.canSave=!1,this.title.length&&this.poster.length?this.btnSwitch?this.btnTxt.length&&!this.btnLinkError.length?this.canSave=!0:this.canSave=!1:this.canSave=!0:this.canSave=!1},getDetail:function(t){var s=this;this.$config({loading:!0}).$get(e.a.GET_CARDS_DETAIL,{recommend_card_id:t}).then(function(t){s.title=t.data.title,s.poster=t.data.pic,s.btnSwitch="Y"===t.data.btn_display,s.btnTxt=t.data.btn_text,s.btnLink=t.data.btn_link,s.desc=t.data.desc})}},beforeRouteLeave:function(t,s,i){if(this.canPaas)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},components:{VeUpload:a.a}},c=(i(919),i(1)),o=Object(c.a)(r,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap-page card-page",on:{keydown:function(s){t.canPaas=!1}}},[i("div",{staticClass:"page-title"},[i("span",{staticClass:"title"},[t._v(t._s("new"===t.cardId?"创建":"编辑")+"卡片")]),t._v(" "),i("com-back",{class:"back-btn"})],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"content from-box"},[i("div",{staticClass:"from-row"},[t._m(1),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{attrs:{value:t.title,placeholder:"请输入卡片名称","max-length":15,"error-tips":t.titleError},on:{"update:value":function(s){t.title=s},focus:function(s){t.titleError=""}}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[t._m(2),t._v(" "),i("div",{staticClass:"from-content"},[i("ve-upload",{attrs:{title:"gif、jpg、png、bmp<br>大小不超过2M",accept:"gif|png|jpg|bmp",defaultImg:t.defaultImg,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})],1)]),t._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[t._v("卡片描述：")]),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{staticClass:"msg-content",attrs:{type:"textarea",value:t.desc,placeholder:"请输入卡片描述","max-length":140},on:{"update:value":function(s){t.desc=s}}})],1)]),t._v(" "),i("div",{staticClass:"from-row",staticStyle:{padding:"0 12px"}},[i("div",{staticClass:"from-title"},[t._v("显示按钮：")]),t._v(" "),i("div",{staticClass:"from-content switch-box"},[i("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange()}},model:{value:t.btnSwitch,callback:function(s){t.btnSwitch=s},expression:"btnSwitch"}})],1)]),t._v(" "),t.btnSwitch?i("div",{staticClass:"from-row"},[t._m(3),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{attrs:{value:t.btnTxt,placeholder:"请输入按钮文案","max-length":6,"error-tips":t.btnTxtError},on:{"update:value":function(s){t.btnTxt=s},focus:function(s){t.btnTxtError=""}}})],1)]):t._e(),t._v(" "),t.btnSwitch?i("div",{staticClass:"from-row"},[t._m(4),t._v(" "),i("div",{staticClass:"from-content"},[i("com-input",{attrs:{value:t.btnLink,placeholder:"请输入按钮链接","error-tips":t.btnLinkError,"max-length":300},on:{"update:value":function(s){t.btnLink=s},focus:function(s){t.btnLinkError=""}}}),t._v(" "),t.btnLinkError.length<=0?i("span",{staticClass:"tips"},[t._v("链接需要附带http://或https://头协议")]):t._e()],1)]):t._e(),t._v(" "),i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"}),t._v(" "),i("div",{staticClass:"from-content btn-box"},[i("el-button",{staticClass:"primary-button save-btn",on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{staticClass:"default-button save-btn",on:{click:t.cancel}},[t._v("取消")])],1)]),t._v(" "),i("div",{staticClass:"overview"},[i("dl",[i("dt",[t.poster.length?i("div",{staticClass:"img cov_img",style:{backgroundImage:"url("+t.$imgHost+"/"+t.poster+")"}}):i("div",{staticClass:"img img-empty"})]),t._v(" "),t.desc.length>0?i("dd",{staticClass:"desc"},[t._v(t._s(t.desc))]):i("dd",{staticClass:"desc"},[t._v("此处是卡片描述，最多可添加140个字")]),t._v(" "),t.btnSwitch?i("dd",{staticClass:"btn-dd"},[i("router-link",{attrs:{to:t.btnLink,target:"_blank"}},[i("el-button",{staticClass:"primary-button btn"},[t._v(t._s(t.btnTxt.length>0?t.btnTxt:"按钮"))])],1)],1):t._e()]),t._v(" "),t._m(5)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips-title"},[s("i"),this._v("注意：在推荐卡片中嵌入链接可能会导致观众跳转分流，请合理使用\n  ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("卡片名称：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("卡片图片：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("按钮文案：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"from-title"},[s("i",{staticClass:"star"},[this._v("*")]),this._v("按钮链接：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[s("p",{staticClass:"title"},[this._v("卡片预览")])])}],!1,null,null,null);o.options.__file="detail.vue";s.default=o.exports},709:function(t,s,i){},919:function(t,s,i){"use strict";var a=i(709);i.n(a).a}}]);
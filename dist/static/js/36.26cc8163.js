(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{482:function(t,a,i){"use strict";i.r(a);var s=i(438),e=i.n(s),n=i(523),o=i(527),c=i(514),l=i(59),r={data:function(){return{enable:!1,isPublish:!1,switchDisabled:!1,data:{},isOverdue:!1,tplData:o.a,t0478320:i(852),t0478321:i(853),t0478322:i(854),t0478323:i(855)}},created:function(){l.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"活动官网"}])},mounted:function(){this.init(),console.log()},methods:{init:function(){var t=this;this.$get(n.a.GET_SITE_DATA,{activityId:this.$route.params.id}).then(function(a){"Y"===a.data.enabled&&(t.enable=!0),a.data.value&&(t.data=JSON.parse(a.data.value))}),this.$get(c.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.isPublish="Y"===a.data.published,t.isOverdue="N"===a.data.validStatus})},goEdit:function(){this.data.tid&&this.$router.push("/site/edit/"+this.$route.params.id)},goPreview:function(){this.data.tid&&this.$router.push("/site/preview/"+this.$route.params.id)},confirmState:function(t){var a=this;if(this.isOverdue)return this.$messageBox({header:"提示",autoClose:10,confirmText:"知道了",content:"活动已过期，无法对活动进行编辑"}),this.enable=!this.enable,!1;this.isPublish&&!t?this.$messageBox({header:"提示",width:"200",content:"活动官网已经发布，请确认是否关闭？",cancelText:"暂不关闭",confirmText:"确认关闭",handleClick:function(t){console.log(t),"cancel"===t.action?a.enable=!0:"confirm"===t.action&&a.updateState()}}):this.updateState()},updateState:function(){var t=this;this.$config({handlers:[60706,60701]}).$post(n.a.POST_UPDATE_SITE_STATE,{activityId:this.$route.params.id,submodule:"TEMPLATE",enabled:this.enable?"Y":"N"}).then(function(a){var i=setTimeout(function(){clearTimeout(i),t.switchDisabled=!1},2e3)}).catch(function(a){60706!==a.code&&60701!==a.code||(t.$messageBox({header:"提示",content:a.msg,autoClose:10,confirmText:"知道了"}),t.enable=!t.enable,t.switchDisabled=!1)})},showPreview:function(t){this.$router.push("/site/preview/"+this.$route.params.id+"?tid="+t)},useTemplate:function(t){var a=this,i=o.a[t]();this.$config({loading:!0}).$post(n.a.POST_UPDATE_SITE,{activityId:this.$route.params.id,template:e()(i)}).then(function(t){a.data=i,a.$toast({content:"设置成功",autoClose:1e3})})}}},p=(i(856),i(1)),d=Object(p.a)(r,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"live-mager"},[i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[t._v("活动官网")]),t._v(" "),i("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,disabled:t.switchDisabled,"active-color":"#FFD021"},on:{change:t.confirmState},model:{value:t.enable,callback:function(a){t.enable=a},expression:"enable"}}),t._v(" "),i("com-back")],1),t._v(" "),i("div",{staticClass:"mager-box border-box"},[i("div",{staticClass:"from-box"},[i("div",{staticClass:"switch-cover ",class:{close:!t.enable}},[i("div",{staticClass:"group"},[i("div",{staticClass:"fwn"},[t._v("我的模板")]),t._v(" "),i("div",{staticClass:"group-content"},[this.data.tid?i("div",{staticClass:"template-block clearfix"},[i("img",{attrs:{src:this["t"+t.data.tid]}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:t.goEdit}},[t._v("编辑")]),t._v(" "),i("a",{on:{click:t.goPreview}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(this.data.tplName)}})]):i("div",{staticClass:"empty"},[i("div",{staticClass:"img"}),t._v(" "),i("div",{staticClass:"txt"},[t._v("您还没有创建官网样式，请从模板库中选择并创建个性化官网")])])])]),t._v(" "),i("div",{staticClass:"group"},[i("div",{staticClass:"fwn fwn2"},[t._v("模板库")]),t._v(" "),i("div",{staticClass:"group-content fs0"},[i("div",{staticClass:"template-block clearfix"},[i("img",{attrs:{src:t.t0478320,alt:""}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template1")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478320")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template1().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block clearfix"},[i("img",{attrs:{src:t.t0478321}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template2")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478321")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template2().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block clearfix"},[i("img",{attrs:{src:t.t0478322}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template3")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478322")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template3().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block clearfix"},[i("img",{attrs:{src:t.t0478323}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template4")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478323")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template4().tplName)}})])])])])])])])},[],!1,null,"13b6e77f",null);d.options.__file="index.vue";a.default=d.exports},643:function(t,a,i){},852:function(t,a,i){t.exports=i.p+"static/img/site_tp1.e95ab8a.png"},853:function(t,a,i){t.exports=i.p+"static/img/site_tp2.362316c.png"},854:function(t,a,i){t.exports=i.p+"static/img/site_tp3.8856be4.png"},855:function(t,a,i){t.exports=i.p+"static/img/site_tp4.e4fc863.png"},856:function(t,a,i){"use strict";var s=i(643);i.n(s).a}}]);
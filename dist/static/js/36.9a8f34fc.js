(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1016:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"site-container"},[i("div",{staticClass:"group"},[i("div",{staticClass:"title"},[t._v("活动官网\n      "),i("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,disabled:t.switchDisabled,"active-color":"#FFD021"},on:{change:t.confirmState},model:{value:t.enable,callback:function(a){t.enable=a},expression:"enable"}}),t._v(" "),i("span",[t._v("开启后，将可以定制您自己的活动官网，方便汇聚活动信息聚集人气")])],1)]),t._v(" "),i("div",{staticClass:"group"},[i("div",{staticClass:"fwn"},[t._v("我的模板")]),t._v(" "),i("div",{staticClass:"group-content"},[this.data.tid?i("div",{staticClass:"template-block"},[i("img",{attrs:{src:this["t"+t.data.tid]}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:t.goEdit}},[t._v("编辑")]),t._v(" "),i("a",{on:{click:t.goPreview}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(this.data.tplName)}})]):i("div",[t._v("\n        没有模板\n      ")])])]),t._v(" "),i("div",{staticClass:"group"},[i("div",{staticClass:"fwn fwn2"},[t._v("模板库")]),t._v(" "),i("div",{staticClass:"group-content fs0"},[i("div",{staticClass:"template-block"},[i("img",{attrs:{src:t.t0478320,alt:""}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template1")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478320")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template1().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block"},[i("img",{attrs:{src:t.t0478321}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template2")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478321")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template2().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block"},[i("img",{attrs:{src:t.t0478322}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template3")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478322")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template3().tplName)}})]),t._v(" "),i("div",{staticClass:"template-block"},[i("img",{attrs:{src:t.t0478323}}),t._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option-group"},[i("a",{on:{click:function(a){t.useTemplate("template4")}}},[t._v("使用模板")]),t._v(" "),i("a",{on:{click:function(a){t.showPreview("0478323")}}},[t._v("预览")])])]),t._v(" "),i("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template4().tplName)}})])])])])};s._withStripped=!0;var e=i(469),n=i.n(e),o=i(500),c=i(496),l=i(486),p={data:function(){return{enable:!1,isPublish:!1,switchDisabled:!1,data:{},tplData:c.a,t0478320:i(889),t0478321:i(890),t0478322:i(891),t0478323:i(892)}},mounted:function(){this.init(),console.log()},methods:{init:function(){var t=this;this.$get(o.a.GET_SITE_DATA,{activityId:this.$route.params.id}).then(function(a){"Y"===a.data.enabled&&(t.enable=!0),a.data.value&&(t.data=JSON.parse(a.data.value))}),this.$get(l.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(a){t.isPublish="Y"===a.data.published})},goEdit:function(){this.data.tid&&this.$router.push("/site/edit/"+this.$route.params.id)},goPreview:function(){this.data.tid&&this.$router.push("/site/preview/"+this.$route.params.id)},confirmState:function(t){var a=this;this.switchDisabled=!0,this.isPublish&&!t?this.$messageBox({header:"提示",width:"200",content:"活动官网已经发布，请确认是否关闭？",cancelText:"暂不关闭",confirmText:"确认关闭",handleClick:function(t){console.log(t),"cancel"===t.action?a.enable=!0:"confirm"===t.action&&a.updateState()}}):this.updateState()},updateState:function(){var t=this;this.$config({handlers:[60706,60701]}).$post(o.a.POST_UPDATE_SITE_STATE,{activityId:this.$route.params.id,submodule:"TEMPLATE",enabled:this.enable?"Y":"N"}).then(function(a){t.$toast({content:"保存成功",autoClose:500,position:"center"});var i=setTimeout(function(){clearTimeout(i),t.switchDisabled=!1},2e3)}).catch(function(a){60706===a.code?(t.$messageBox({header:"提示",content:a.msg,autoClose:10,confirmText:"知道了"}),t.enable=!t.enable,t.switchDisabled=!1):60701===a.code&&(t.$messageBox({header:"提示",content:a.msg,autoClose:10,confirmText:"知道了"}),t.enable=!t.enable,t.switchDisabled=!1)})},showPreview:function(t){this.$router.push("/site/preview/"+this.$route.params.id+"?tid="+t)},useTemplate:function(t){var a=this,i=c.a[t]();this.$config({loading:!0}).$post(o.a.POST_UPDATE_SITE,{activityId:this.$route.params.id,template:n()(i)}).then(function(t){a.data=i,a.$toast({content:"设置成功",autoClose:1e3,position:"center"})})}}},r=(i(893),i(2)),d=Object(r.a)(p,s,[],!1,null,"a28d3ee4",null);d.options.__file="src/pages/site/index.vue";a.default=d.exports},607:function(t,a,i){},889:function(t,a,i){t.exports=i.p+"static/img/site_tp1.eb5d3cb.png"},890:function(t,a,i){t.exports=i.p+"static/img/site_tp2.fb7891c.png"},891:function(t,a,i){t.exports=i.p+"static/img/site_tp3.79123f4.jpg"},892:function(t,a,i){t.exports=i.p+"static/img/site_tp4.c1b9d2a.png"},893:function(t,a,i){"use strict";var s=i(607);i.n(s).a}}]);
//# sourceMappingURL=36.9a8f34fc.js.map
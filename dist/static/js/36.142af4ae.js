(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{330:function(t,i,a){},365:function(t,i,a){t.exports=a.p+"static/img/site_tp1.eb5d3cb.png"},539:function(t,i,a){t.exports=a.p+"static/img/site_tp2.fb7891c.png"},540:function(t,i,a){t.exports=a.p+"static/img/site_tp4.c1b9d2a.png"},541:function(t,i,a){"use strict";var s=a(330);a.n(s).a},597:function(t,i,a){"use strict";a.r(i);var s=a(75),e=a.n(s),n=a(358),o=a(242),c={data:function(){return{enable:!1,data:{},t0478320:a(365),t0478321:a(539),t0478322:a(365),t0478323:a(540)}},mounted:function(){this.init()},methods:{init:function(){var t=this;n.a.getSiteData({__loading:!0,activityId:this.$route.params.id}).then(function(i){"Y"===i.data.enabled&&(t.enable=!0),i.data.value&&(t.data=JSON.parse(i.data.value))})},goEdit:function(){this.data.tid&&this.$router.push("/site/edit/"+this.$route.params.id)},goPreview:function(){this.data.tid&&this.$router.push("/site/preview/"+this.$route.params.id)},updateState:function(){var t=this;n.a.updateSiteState({__loading:!0,activityId:this.$route.params.id,submodule:"TEMPLATE",enabled:this.enable?"Y":"N"}).then(function(i){t.$toast({content:"保存成功",autoClose:2e3})})},showPreview:function(t){this.$router.push("/site/preview/"+this.$route.params.id+"?tid="+t)},useTemplate:function(t){var i=this,a=o.a[t]();n.a.updateSiteData({__loading:!0,activityId:this.$route.params.id,template:e()(a)}).then(function(t){i.data=a,i.$toast({content:"设置成功",autoClose:2e3})})}}},l=(a(541),a(1)),d=Object(l.a)(c,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"site-container"},[a("div",{staticClass:"group"},[a("div",{staticClass:"title"},[t._v("活动官网 "),a("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:t.updateState},model:{value:t.enable,callback:function(i){t.enable=i},expression:"enable"}})],1)]),t._v(" "),a("div",{staticClass:"group"},[a("div",{staticClass:"fwn"},[t._v("我的模版")]),t._v(" "),a("div",{staticClass:"group-content"},[this.data.tid?a("div",{staticClass:"template-block"},[a("img",{attrs:{src:this["t"+t.data.tid]}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:t.goEdit}},[t._v("编辑")]),t._v(" "),a("a",{on:{click:t.goPreview}},[t._v("预览")])])])]):a("div",[t._v("\n        没有模板\n      ")])])]),t._v(" "),a("div",{staticClass:"group"},[a("div",{staticClass:"fwn"},[t._v("模板库")]),t._v(" "),a("div",{staticClass:"group-content fs0"},[a("div",{staticClass:"template-block"},[a("img",{attrs:{src:t.t0478320,alt:""}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template1")}}},[t._v("使用模版")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478320")}}},[t._v("预览")])])])]),t._v(" "),a("div",{staticClass:"template-block"},[a("img",{attrs:{src:t.t0478321}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template2")}}},[t._v("使用模版")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478321")}}},[t._v("预览")])])])]),t._v(" "),a("div",{staticClass:"template-block"},[a("img",{attrs:{src:t.t0478323}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template4")}}},[t._v("使用模版")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478323")}}},[t._v("预览")])])])])])])])},[],!1,null,"3add2cbe",null);d.options.__file="index.vue";i.default=d.exports}}]);
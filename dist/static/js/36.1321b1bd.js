(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{497:function(t,i,a){"use strict";a.r(i);var s=a(455),e=a.n(s),n=a(537),o=a(542),c=a(529),l=a(63),r={data:function(){return{enable:!1,isPublish:!1,switchDisabled:!1,data:{},isOverdue:!1,tplData:o.a,t0478320:a(865),t0478321:a(866),t0478322:a(867),t0478323:a(868)}},created:function(){l.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.$route.params.id},{title:"活动官网"}])},mounted:function(){this.init(),console.log()},methods:{init:function(){var t=this;this.$get(n.a.GET_SITE_DATA,{activityId:this.$route.params.id}).then(function(i){"Y"===i.data.enabled&&(t.enable=!0),i.data.value&&(t.data=JSON.parse(i.data.value))}),this.$get(c.a.GET_WEBINAR_INFO,{id:this.$route.params.id}).then(function(i){t.isPublish="Y"===i.data.published,t.isOverdue="N"===i.data.validStatus})},goEdit:function(){this.data.tid&&this.$router.push("/site/edit/"+this.$route.params.id)},goPreview:function(){this.data.tid&&this.$router.push("/site/preview/"+this.$route.params.id)},confirmState:function(t){var i=this;if(this.isOverdue)return this.$messageBox({header:"提示",autoClose:10,confirmText:"知道了",content:"活动已过期，无法对活动进行编辑"}),this.enable=!this.enable,!1;this.isPublish&&!t?this.$messageBox({header:"提示",width:"200",content:"活动官网已经发布，请确认是否关闭？",cancelText:"暂不关闭",confirmText:"确认关闭",handleClick:function(t){console.log(t),"cancel"===t.action?i.enable=!0:"confirm"===t.action&&i.updateState()}}):this.updateState()},updateState:function(){var t=this;this.$config({handlers:[60706,60701]}).$post(n.a.POST_UPDATE_SITE_STATE,{activityId:this.$route.params.id,submodule:"TEMPLATE",enabled:this.enable?"Y":"N"}).then(function(i){var a=setTimeout(function(){clearTimeout(a),t.switchDisabled=!1},2e3)}).catch(function(i){60706!==i.code&&60701!==i.code||(t.$messageBox({header:"提示",content:i.msg,autoClose:10,confirmText:"知道了"}),t.enable=!t.enable,t.switchDisabled=!1)})},showPreview:function(t){this.$router.push("/site/preview/"+this.$route.params.id+"?tid="+t)},useTemplate:function(t){var i=this,a=o.a[t]();this.$config({loading:!0}).$post(n.a.POST_UPDATE_SITE,{activityId:this.$route.params.id,template:e()(a)}).then(function(t){i.data=a,i.$toast({content:"设置成功",autoClose:1e3})})}}},p=(a(869),a(1)),d=Object(p.a)(r,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"live-mager"},[a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[t._v("活动官网")]),t._v(" "),a("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,disabled:t.switchDisabled,"active-color":"#FFD021"},on:{change:t.confirmState},model:{value:t.enable,callback:function(i){t.enable=i},expression:"enable"}}),t._v(" "),a("com-back")],1),t._v(" "),a("div",{staticClass:"mager-box border-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"switch-cover ",class:{close:!t.enable}},[a("div",{staticClass:"group"},[a("div",{staticClass:"fwn"},[t._v("我的模板")]),t._v(" "),a("div",{staticClass:"group-content"},[this.data.tid?a("div",{staticClass:"template-block clearfix"},[a("img",{attrs:{src:this["t"+t.data.tid]}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:t.goEdit}},[t._v("编辑")]),t._v(" "),a("a",{on:{click:t.goPreview}},[t._v("预览")])])]),t._v(" "),a("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(this.data.tplName)}})]):a("div",{staticClass:"empty"},[a("div",{staticClass:"img"}),t._v(" "),a("div",{staticClass:"txt"},[t._v("您还没有创建官网样式，请从模板库中选择并创建个性化官网")])])])]),t._v(" "),a("div",{staticClass:"group"},[a("div",{staticClass:"fwn fwn2"},[t._v("模板库")]),t._v(" "),a("div",{staticClass:"group-content fs0"},[a("div",{staticClass:"template-block clearfix"},[a("img",{attrs:{src:t.t0478320,alt:""}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template1")}}},[t._v("使用模板")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478320")}}},[t._v("预览")])])]),t._v(" "),a("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template1().tplName)}})]),t._v(" "),a("div",{staticClass:"template-block clearfix"},[a("img",{attrs:{src:t.t0478321}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template2")}}},[t._v("使用模板")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478321")}}},[t._v("预览")])])]),t._v(" "),a("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template2().tplName)}})]),t._v(" "),a("div",{staticClass:"template-block clearfix"},[a("img",{attrs:{src:t.t0478322}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template3")}}},[t._v("使用模板")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478322")}}},[t._v("预览")])])]),t._v(" "),a("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template3().tplName)}})]),t._v(" "),a("div",{staticClass:"template-block clearfix"},[a("img",{attrs:{src:t.t0478323}}),t._v(" "),a("div",{staticClass:"option-wrap"},[a("div",{staticClass:"option-group"},[a("a",{on:{click:function(i){t.useTemplate("template4")}}},[t._v("使用模板")]),t._v(" "),a("a",{on:{click:function(i){t.showPreview("0478323")}}},[t._v("预览")])])]),t._v(" "),a("span",{staticClass:"tpl-name",domProps:{innerHTML:t._s(t.tplData.template4().tplName)}})])])])])])])])},[],!1,null,"13b6e77f",null);d.options.__file="index.vue";i.default=d.exports},658:function(t,i,a){},865:function(t,i,a){t.exports=a.p+"static/img/site_tp1.a68e13b.png"},866:function(t,i,a){t.exports=a.p+"static/img/site_tp2.362316c.png"},867:function(t,i,a){t.exports=a.p+"static/img/site_tp3.8856be4.png"},868:function(t,i,a){t.exports=a.p+"static/img/site_tp4.e4fc863.png"},869:function(t,i,a){"use strict";var s=a(658);a.n(s).a}}]);
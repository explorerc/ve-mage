(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{554:function(t,e,a){},555:function(t,e,a){},556:function(t,e,a){},734:function(t,e,a){"use strict";var i=a(554);a.n(i).a},735:function(t,e,a){"use strict";var i=a(555);a.n(i).a},736:function(t,e,a){"use strict";var i=a(556);a.n(i).a},897:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apply-page live-mager",on:{mousedown:function(e){t.canPaas=!1}}},[a("div",{staticClass:"live-title"},[a("span",{staticClass:"title"},[t._v("活动报名")]),t._v(" "),a("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},on:{change:t.openSwitch},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}}),t._v(" "),a("div",{staticClass:"right-box"},[t._m(0),t._v(" "),a("button",{staticClass:"default-button fr",attrs:{disabled:5===t.quesData.length||!t.isOpen},on:{click:t.addNew}},[t._v("添加信息")])])],1),t._v(" "),a("div",{staticClass:"mager-box border-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("报名结束时间：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("与直播同步关闭")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("指定结束时间")]),t._v(" "),t.pickDate?a("div",{staticClass:"set-time"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",editable:!1,type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.queryData.finishTime,callback:function(e){t.$set(t.queryData,"finishTime",e)},expression:"queryData.finishTime"}})],1):t._e()],1)])]),t._v(" "),a("div",{staticClass:"set-info"},[a("div",{staticClass:"set-content"},[t._m(1),t._v(" "),a("ol",{staticClass:"table-content"},t._l(t.quesData,function(e,i){return a("li",{key:i,staticClass:"clearfix"},["phone"===e.ext?a("div",{staticClass:"spe moblie"},[a("i",{staticClass:"star"},[t._v("*")]),t._v(" "),a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1):a("div",{staticClass:"spe"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){t.selectChange(i,e.ext)}},model:{value:e.ext,callback:function(a){t.$set(e,"ext",a)},expression:"item.ext"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.txt,value:t.value,disabled:t.disabled}})}))],1),t._v(" "),a("div",[a("com-input",{staticClass:"inp",attrs:{value:null===e.placeholder?"":e.placeholder,"max-length":8,placeholder:e.place?e.place:"请输入描述信息"},on:{"update:value":function(a){t.$set(null===e.placeholder?"":e,"placeholder",a)}}})],1),t._v(" "),"phone"===e.ext?a("div",{staticClass:"del-box tips"},[a("ve-tips",{attrs:{tip:"1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写手机号之后，须进行手机号验证",tipType:"html"}})],1):a("div",{staticClass:"del-box"},[a("span",{staticClass:"del",on:{click:function(e){t.removeItem(i)}}},[t._v("删除")])]),t._v(" "),"select"===e.ext?a("section",{staticClass:"select-item clearfix"},[a("ol",[e.detail.list.length<10?a("span",{staticClass:"add-item",on:{click:function(e){t.addItem(i)}}},[a("i",[t._v("＋")]),t._v("添加选项")]):t._e(),t._v(" "),t._l(e.detail.list,function(e,s){return a("li",{key:s},[a("com-input",{attrs:{value:e.value,"max-length":8,placeholder:"请输入选项"},on:{"update:value":function(a){t.$set(e,"value",a)}}}),t._v(" "),a("span",{staticClass:"del",on:{click:function(e){t.delItem(i,s)}}},[t._v("删除")])],1)})],2)]):t._e()])})),t._v(" "),a("el-button",{staticClass:"primary-button",attrs:{disabled:!t.isOpen},on:{click:t.saveLimit}},[t._v("保存")])],1)])])])};i._withStripped=!0;var s=a(452),n=a.n(s),l=a(469),o={data:function(){return{activityId:"",isOpen:!1,radioTime:"1",phone:"手机号码",pickDate:!1,date:new Date,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},options:[],quesData:[],queryData:{activityId:"",finishTime:"",questionId:""},questionId:"",canPaas:!0,canSave:!0,saveData:{},hasEmail:!1,hasName:!1}},created:function(){this.questionId=1,this.activityId=this.$route.params.id,this.getLimit(),this.options=[{value:"text",txt:"文本"},{value:"name",txt:"姓名"},{value:"integer",txt:"数字"},{value:"email",txt:"邮箱"},{value:"select",txt:"下拉选择"}],this.quesData=[]},methods:{removeItem:function(t){this.canPaas=!1,this.quesData.splice([t],1)},selectChange:function(t,e,a){switch(console.log(e),this.canPaas=!1,e){case"select":this.quesData[t].detail.list.push({value:""}),this.quesData[t].title="下拉选择",this.quesData[t].type="select";break;case"integer":this.quesData[t].detail.format="integer",this.quesData[t].title="数字";break;case"email":this.quesData[t].detail.format="email",this.quesData[t].title="邮箱";break;case"text":this.quesData[t].title="文本";break;case"name":this.quesData[t].title="姓名"}},addItem:function(t){this.canPaas=!1,console.log(t),this.quesData[t].detail.list.push({value:""})},delItem:function(t,e){this.canPaas=!1,this.quesData[t].detail.list.splice(e,1)},addNew:function(){this.canPaas=!1;this.quesData.push({title:"标题",placeholder:"",place:"请输入描述信息",label:"文本",type:"text",ext:"text",detail:{format:"",list:[]}})},getLimit:function(){var t=this;this.$get(l.a.GET_LIMIT,{activityId:this.activityId}).then(function(e){console.log(e),null!==e.data.detail?(t.isOpen=!0,t.queryData=e.data.detail,t.quesData=e.data.detail.questionList,e.data.detail.finishTime&&e.data.detail.finishTime.search("0000")>-1&&(t.queryData.finishTime=""),null===e.data.detail.finishTime&&(t.queryData.finishTime=""),e.data.detail.finishTime.length>0?t.radioTime="2":t.radioTime="1"):t.isOpen=!1})},saveLimit:function(){var t=this;this.saveData={activityId:this.activityId,viewCondition:"APPOINT",detail:{finishTime:"2"===this.radioTime?this.queryData.finishTime:"",questionList:this.quesData}},this.saveData.detail.questionList.forEach(function(e){"phone"===e.ext&&(e.required="Y",e.verification="Y"),"email"===e.ext&&(e.verification="Y"),"select"===e.ext&&(e.detail.list.length?(e.detail.list.forEach(function(e){e.value.length?t.canSave=!0:t.canSave=!1}),t.canSave||t.$messageBox({header:"提示",content:"下拉选项不能为空",autoClose:10,confirmText:"知道了"})):(t.$messageBox({header:"提示",content:"请添加下拉选项",autoClose:10,confirmText:"知道了"}),t.canSave=!1))}),console.log(this.saveData.detail.questionList=n()(this.saveData.detail.questionList)),this.$nextTick(function(){t.canSave&&t.saveLimitfn(t.saveData)})},saveLimitfn:function(t){var e=this;this.$config({handlers:[60704]}).$post(l.a.SAVE_LIMIT,t).then(function(t){e.$toast({content:"设置成功",position:"center"}),e.canPaas=!0}).catch(function(t){e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen})},openSwitch:function(t){var e=this;this.canPaas=!1;var a={activityId:this.activityId,submodule:"APPOINT",enabled:t?"Y":"N"};this.$config({handlers:[60706]}).$post(l.a.POST_DETAIL_SWITCH,a).then(function(a){if(200===a.code)if(t){e.quesData.push({title:"手机号码",placeholder:"",place:"请输入手机号码",label:"手机号码",type:"text",ext:"phone",detail:{format:"phone"}})}else e.$toast({content:"设置成功"})}).catch(function(t){60706===t.code&&(e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen)}),t||(this.quesData=[])}},beforeRouteLeave:function(t,e,a){if(this.canPaas)return a(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?a(!0):a(!1)}})},watch:{quesData:{handler:function(t){var e=this;this.hasEmail=!1,this.hasName=!1,t.forEach(function(t){switch(t.ext){case"email":e.hasEmail=!0;break;case"name":e.hasName=!0}}),this.options.forEach(function(t){"email"===t.value&&(!0===e.hasEmail?t.disabled=!0:t.disabled=!1),"name"===t.value&&(!0===e.hasName?t.disabled=!0:t.disabled=!1)})},deep:!0},radioTime:{handler:function(t){this.pickDate="2"===t,this.canPaas=!1}}},components:{veTips:a(483).a}},c=(a(734),a(735),a(736),a(1)),r=Object(c.a)(o,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("最多可添加 "),e("i",[this._v("5")]),this._v(" 条信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"table-title clearfix"},[e("li",{staticClass:"spe"},[this._v("信息类型")]),this._v(" "),e("li",[this._v("信息描述")]),this._v(" "),e("li",{staticClass:"handle"},[this._v("操作")])])}],!1,null,"c2b17eb4",null);r.options.__file="src/pages/live-mager/prepare/limit/apply.vue";e.default=r.exports}}]);
//# sourceMappingURL=25.d2795c87.js.map
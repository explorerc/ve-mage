(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1031:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"apply-page live-mager",on:{mousedown:function(e){t.canPaas=!1}}},[i("div",{staticClass:"live-title"},[i("span",{staticClass:"title"},[t._v("活动报名")]),t._v(" "),i("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},on:{change:t.openSwitch},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}}),t._v(" "),i("div",{staticClass:"right-box"},[t._m(0),t._v(" "),i("button",{staticClass:"default-button fr",attrs:{disabled:5===t.quesData.length||!t.isOpen},on:{click:t.addNew}},[t._v("添加信息")])])],1),t._v(" "),i("div",{staticClass:"mager-box border-box"},[i("div",{staticClass:"from-box"},[i("div",{staticClass:"from-row"},[i("div",{staticClass:"from-title"},[t._v("报名结束时间：")]),t._v(" "),i("div",{staticClass:"from-content"},[i("el-radio",{attrs:{label:"1"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("与直播同步关闭")]),t._v(" "),i("el-radio",{attrs:{label:"2"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("指定结束时间")]),t._v(" "),t.pickDate?i("div",{staticClass:"set-time"},[i("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",editable:!1,type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.queryData.finishTime,callback:function(e){t.$set(t.queryData,"finishTime",e)},expression:"queryData.finishTime"}})],1):t._e()],1)])]),t._v(" "),i("div",{staticClass:"set-info"},[i("div",{staticClass:"set-content"},[t._m(1),t._v(" "),i("ol",{staticClass:"table-content"},t._l(t.quesData,function(e,a){return i("li",{key:a,staticClass:"clearfix"},["mobile"===e.type?i("div",{staticClass:"spe moblie"},[i("i",{staticClass:"star"},[t._v("*")]),t._v(" "),i("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1):i("div",{staticClass:"spe"},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(i){t.selectChange(a,e.type)}},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"item.type"}},t._l(t.options,function(t){return i("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1),t._v(" "),i("div",[i("com-input",{staticClass:"inp",attrs:{value:"","max-length":8,placeholder:e.placeholder}})],1),t._v(" "),"mobile"===e.type?i("div",{staticClass:"del-box"},[i("ve-tips",{attrs:{tip:"1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写手机号之后，须进行手机号验证",tipType:"html"}})],1):i("div",{staticClass:"del-box"},[i("span",{staticClass:"del",on:{click:function(e){t.removeItem(a)}}},[t._v("删除")])]),t._v(" "),"select"===e.type?i("section",{staticClass:"select-item clearfix"},[i("ol",[e.detail.length<10?i("span",{staticClass:"add-item",on:{click:function(e){t.addItem(a)}}},[i("i",[t._v("＋")]),t._v("添加选项")]):t._e(),t._v(" "),t._l(e.detail,function(e,s){return i("li",{key:s},[i("com-input",{attrs:{value:e.value,"max-length":8,placeholder:"请输入选项"},on:{"update:value":function(i){t.$set(e,"value",i)}}}),t._v(" "),i("span",{staticClass:"del",on:{click:function(e){t.delItem(a,s)}}},[t._v("删除")])],1)})],2)]):t._e()])})),t._v(" "),i("el-button",{staticClass:"primary-button",attrs:{disabled:!t.isOpen},on:{click:t.saveLimit}},[t._v("保存")])],1)])])])};a._withStripped=!0;var s=i(486),n={data:function(){return{activityId:"",isOpen:!1,radioTime:"1",phone:"手机号码",pickDate:!1,date:new Date,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},options:[],quesData:[],queryData:{activityId:"",finishTime:"",questionId:""},questionId:"",canPaas:!0,canSave:!0,saveData:{}}},created:function(){this.questionId=1,this.activityId=this.$route.params.id,this.getLimit(),this.options=[{value:"text",txt:"文本"},{value:"integer",txt:"数字"},{value:"email",txt:"邮箱"},{value:"select",txt:"下拉选择"}],this.quesData=[]},methods:{removeItem:function(t){this.canPaas=!1,this.quesData.splice([t],1)},selectChange:function(t,e){this.canPaas=!1,"下拉选择"===e&&this.quesData[t].detail.push("")},addItem:function(t){this.canPaas=!1,console.log(t),this.quesData[t].detail.push({value:"",key:0===this.quesData[t].detail.length?0:this.quesData[t].detail.length})},delItem:function(t,e){this.canPaas=!1,this.quesData[t].detail.splice(e,1)},addNew:function(){this.canPaas=!1;this.quesData.push({title:"标题",placeholder:"请输入描述信息",label:"文本",type:"text",detail:[]})},getLimit:function(){var t=this;this.$get(s.a.GET_LIMIT,{activityId:this.activityId}).then(function(e){console.log(e),"APPOINT"===e.data.viewCondition?(t.isOpen=!0,t.queryData=e.data.detail,t.quesData=e.data.detail.questionList,e.data.detail.finishTime&&e.data.detail.finishTime.search("0000")>-1&&(t.queryData.finishTime=""),null===e.data.detail.finishTime&&(t.queryData.finishTime=""),e.data.detail.finishTime.length>0?t.radioTime="2":t.radioTime="1"):t.isOpen=!1})},saveLimit:function(){var t=this;this.saveData={activityId:this.activityId,viewCondition:"APPOINT",detail:{finishTime:"2"===this.radioTime?this.queryData.finishTime:"",questionList:this.quesData}},this.saveData.detail.questionList.forEach(function(e){"mobile"===e.type&&(e.required="Y",e.verification="Y"),"email"===e.type&&(e.verification="Y"),"select"===e.type&&(e.detail.length?(e.detail.forEach(function(e){e.value.length?t.canSave=!0:t.canSave=!1}),t.canSave||t.$messageBox({header:"提示",content:"下拉选项不能为空",autoClose:10,confirmText:"知道了"})):(t.$messageBox({header:"提示",content:"请添加下拉选项",autoClose:10,confirmText:"知道了"}),t.canSave=!1))}),this.$nextTick(function(){t.canSave&&t.saveLimitfn(t.saveData)})},saveLimitfn:function(t){var e=this;this.$config({handlers:[60704]}).$post(s.a.SAVE_LIMIT,t).then(function(t){e.$toast({content:"设置成功",position:"center"}),e.canPaas=!0}).catch(function(t){e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen})},openSwitch:function(t){var e=this;this.canPaas=!1;var i={activityId:this.activityId,submodule:"APPOINT",enabled:t?"Y":"N"};this.$config({handlers:!0}).$post(s.a.POST_DETAIL_SWITCH,i).then(function(i){if(200===i.code)if(t){e.quesData.push({title:"手机号码",placeholder:"请输入手机号码",label:"手机号码",type:"mobile",detail:[]})}else e.$toast({content:"设置成功"})}).catch(function(t){60706===t.code&&(e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen)}),t||(this.quesData=[])}},beforeRouteLeave:function(t,e,i){if(this.canPaas)return i(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?i(!0):i(!1)}})},watch:{quesData:{handler:function(t){console.log("change")},deep:!0},radioTime:{handler:function(t){this.pickDate="2"===t,this.canPaas=!1}}},components:{veTips:i(499).a}},l=(i(796),i(798),i(800),i(2)),o=Object(l.a)(n,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("最多可添加 "),e("i",[this._v("5")]),this._v(" 条信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"table-title clearfix"},[e("li",{staticClass:"spe"},[this._v("信息类型")]),this._v(" "),e("li",[this._v("信息描述")]),this._v(" "),e("li",{staticClass:"handle"},[this._v("操作")])])}],!1,null,"c2b17eb4",null);o.options.__file="src/pages/live-mager/prepare/limit/apply.vue";e.default=o.exports},568:function(t,e,i){},569:function(t,e,i){},570:function(t,e,i){},796:function(t,e,i){"use strict";var a=i(568);i.n(a).a},798:function(t,e,i){"use strict";var a=i(569);i.n(a).a},800:function(t,e,i){"use strict";var a=i(570);i.n(a).a}}]);
//# sourceMappingURL=25.80b1dcff.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{501:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apply-page live-mager",on:{keydown:function(e){t.canPaas=!1}}},[a("div",{staticClass:"live-title",staticStyle:{border:"none"}},[a("span",{staticClass:"title"},[t._v("活动报名")]),t._v(" "),a("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:t.openSwitch},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}}),t._v(" "),a("com-back")],1),t._v(" "),a("div",{staticClass:"mager-box border-box"},[a("div",{staticClass:"from-box"},[a("div",{staticClass:"from-row"},[a("div",{staticClass:"from-title"},[t._v("报名结束时间：")]),t._v(" "),a("div",{staticClass:"from-content"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("不设结束时间")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.radioTime,callback:function(e){t.radioTime=e},expression:"radioTime"}},[t._v("指定结束时间")]),t._v(" "),a("ve-tips",{staticClass:"msg-tips-box-radio",attrs:{tip:"不设结束时间：本次直播活动的报名功能可一直开放，观众随时可以报名。<br>指定结束时间：设置报名功能的关闭时间，在时间过期后，观众将无法报名该活动。",tipType:"html"}}),t._v(" "),t.pickDate?a("div",{staticClass:"set-time"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm",editable:!1,type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions,"default-value":t.defaultValue},on:{focus:function(e){t.dateFocus()}},model:{value:t.queryData.finishTime,callback:function(e){t.$set(t.queryData,"finishTime",e)},expression:"queryData.finishTime"}})],1):t._e()],1)])]),t._v(" "),a("div",{staticClass:"set-info"},[a("div",{staticClass:"set-content"},[t._m(0),t._v(" "),a("ol",{staticClass:"table-content"},t._l(t.quesData,function(e,i){return a("li",{key:i,staticClass:"clearfix"},["phone"===e.ext?a("div",{staticClass:"spe moblie"},[a("i",{staticClass:"star"},[t._v("*")]),t._v(" "),a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1):a("div",{staticClass:"spe"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){t.selectChange(i,e.ext)}},model:{value:e.ext,callback:function(a){t.$set(e,"ext",a)},expression:"item.ext"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.txt,value:t.value,disabled:t.disabled}})}))],1),t._v(" "),a("div",[a("com-input",{staticClass:"inp",attrs:{value:e.title,"max-length":16,placeholder:"请输入信息标题"},on:{"update:value":function(a){t.$set(e,"title",a)}}})],1),t._v(" "),"select"===e.ext?a("div",[a("el-button",{staticClass:"default-button set-select",on:{click:function(a){t.setSelect(e.detail.list,i)}}},[t._v("设置下拉选项")])],1):a("div",[a("com-input",{staticClass:"inp",attrs:{value:null===e.placeholder?"":e.placeholder,"max-length":8,placeholder:e.place?e.place:"请输入描述信息"},on:{"update:value":function(a){t.$set(null===e.placeholder?"":e,"placeholder",a)}}})],1),t._v(" "),"phone"===e.ext?a("div",{staticClass:"del-box tips"},[a("ve-tips",{attrs:{tip:"1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写手机号之后，须进行手机号验证",tipType:"html"}})],1):a("div",{staticClass:"del-box"},[a("span",{staticClass:"require"},[a("el-checkbox",{model:{value:e.required,callback:function(a){t.$set(e,"required",a)},expression:"item.required"}},[t._v("必填")])],1),t._v(" "),a("span",{staticClass:"del",on:{click:function(e){t.removeItem(i)}}})])])})),t._v(" "),a("div",{staticClass:"add-item-box"},[a("span",{staticClass:"add-item",class:{disabled:5===t.quesData.length||!t.isOpen},on:{click:t.addNew}},[a("i"),t._v("添加信息")]),t._v(" "),t._m(1)]),t._v(" "),a("el-button",{staticClass:"primary-button",attrs:{disabled:!t.isOpen},on:{click:t.saveLimit}},[t._v("保存")])],1)])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.setSelectModal?a("div",{staticClass:"setSelect-modal-cover"},[a("div",{staticClass:"setSelect-modal"},[a("div",{staticClass:"header"},[t._v("设置下拉选项"),a("i",{on:{click:function(e){t.setSelectModal=!1}}})]),t._v(" "),a("div",{staticClass:"body"},[a("draggable",{attrs:{element:"ul",options:{handle:".drag"}},model:{value:t.selectOption,callback:function(e){t.selectOption=e},expression:"selectOption"}},t._l(t.selectOption,function(e,i){return a("li",{key:i},[a("span",{staticClass:"count"},[t._v("选项 "+t._s(i+1))]),t._v(" "),a("com-input",{attrs:{value:e.value,"max-length":8,placeholder:"请输入选项"},on:{"update:value":function(a){t.$set(e,"value",a)}}}),t._v(" "),a("em",{staticClass:"drag",attrs:{title:"移动拖拽"}}),t._v(" "),a("em",{staticClass:"del",on:{click:function(e){t.delItem(i)}}})],1)})),t._v(" "),a("div",{staticClass:"add-item-box",staticStyle:{"margin-top":"20px"}},[a("span",{staticClass:"add-item",class:{disabled:t.selectOption.length>=10},on:{click:function(e){t.addItem()}}},[a("i"),t._v("添加信息")]),t._v(" "),a("span",[t._v("最多可添加"),a("em",[t._v(" 10 ")]),t._v("条信息")])]),t._v(" "),a("div",{staticClass:"btn-box clearfix"},[a("el-button",{staticClass:"primary-button",on:{click:t.seletItemConfirm}},[t._v("确定")])],1)],1)])]):t._e()])],1)};i._withStripped=!0;var s=a(455),l=a.n(s),n=a(100),c=a.n(n),o=a(538),d=a(456),u=a.n(d),r=a(529),h=a(539),v=a(63),m={data:function(){return{activityId:"",isOpen:!1,radioTime:"1",phone:"手机号码",pickDate:!1,date:new Date,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},defaultValue:Object(o.a)(new Date((new Date).getTime()+18e5),"yyyy-MM-dd hh:mm"),options:[],quesData:[],queryData:{activityId:"",finishTime:"",questionId:""},questionId:"",canPaas:!0,canSave:!0,saveData:{},hasEmail:!1,hasName:!1,setSelectModal:!1,itemCount:0,selectOption:[]}},created:function(){this.questionId=1,this.activityId=this.$route.params.id,this.getLimit(),this.options=[{value:"text",txt:"文本"},{value:"name",txt:"姓名"},{value:"integer",txt:"数字"},{value:"email",txt:"邮箱"},{value:"select",txt:"下拉选择"}],this.quesData=[],v.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情",url:"/liveMager/detail/"+this.activityId},{title:"活动报名"}])},methods:{removeItem:function(t){this.canPaas=!1,this.quesData.splice([t],1)},selectChange:function(t,e,a){switch(console.log(e),this.canPaas=!1,e){case"select":this.quesData[t].detail.list?this.quesData[t].detail.list.push({value:""}):c()(this.quesData[t].detail,{list:[{value:""}]}),this.quesData[t].title="下拉选择",this.quesData[t].type="select",this.quesData[t].placeholder="请选择下拉选项";break;case"integer":this.quesData[t].detail.format="integer",this.quesData[t].title="数字",this.quesData[t].placeholder="请输入数字";break;case"email":this.quesData[t].detail.format="email",this.quesData[t].title="邮箱",this.quesData[t].placeholder="请输入邮箱";break;case"text":this.quesData[t].detail.format="",this.quesData[t].title="文本",this.quesData[t].placeholder="请输入文本";break;case"name":this.quesData[t].detail.format="",this.quesData[t].title="姓名",this.quesData[t].placeholder="请输入姓名"}},addItem:function(){this.canPaas=!1,console.log(this.itemCount),this.quesData[this.itemCount].detail.list.push({value:""})},delItem:function(t){this.canPaas=!1,this.quesData[this.itemCount].detail.list.splice(t,1)},addNew:function(){this.canPaas=!1;var t={title:"标题",placeholder:"",place:"请输入描述信息",label:"文本",type:"text",ext:"text",date:"",defaultValue:Object(o.a)(new Date((new Date).getTime()+18e5),"yyyy-MM-dd hh:mm"),required:!1,detail:{format:"",list:[]}};this.quesData.push(t)},getLimit:function(){var t=this;this.$get(r.a.GET_LIMIT,{activityId:this.activityId}).then(function(e){console.log(e),null!==e.data.detail?(t.isOpen=!0,t.queryData=e.data.detail,e.data.detail.questionList.forEach(function(e,a){"Y"===e.required?e.required=!0:e.required=!1,t.quesData.push(e)}),e.data.detail.finishTime&&e.data.detail.finishTime.search("0000")>-1&&(t.queryData.finishTime=""),null===e.data.detail.finishTime&&(t.queryData.finishTime=""),e.data.detail.finishTime.length>0?t.radioTime="2":t.radioTime="1"):t.isOpen=!1})},saveLimit:function(){var t=this;this.canPaas=!0,this.saveData={activityId:this.activityId,viewCondition:"APPOINT",detail:{finishTime:"2"===this.radioTime?this.queryData.finishTime:"",questionList:this.quesData}},this.saveData.detail.questionList.forEach(function(e){e.required?e.required="Y":e.required="N","phone"===e.ext&&(e.required="Y",e.verification="Y"),"email"===e.ext&&(e.verification="Y"),"select"===e.ext&&(e.detail.list.length?(e.detail.list.forEach(function(e){e.value.length?t.canSave=!0:t.canSave=!1}),t.canSave||t.$messageBox({header:"提示",content:"下拉选项不能为空",autoClose:10,confirmText:"知道了"})):(t.$messageBox({header:"提示",content:"请添加下拉选项",autoClose:10,confirmText:"知道了"}),t.canSave=!1))}),console.log(this.saveData.detail.questionList=l()(this.saveData.detail.questionList)),this.$nextTick(function(){t.canSave&&t.saveLimitfn(t.saveData)})},saveLimitfn:function(t){var e=this;this.$config({handlers:[60704]}).$post(r.a.SAVE_LIMIT,t).then(function(t){e.canPaas=!0,e.$router.push("/liveMager/detail/"+e.activityId)}).catch(function(t){e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen})},openSwitch:function(t){var e=this;this.canPaas=!1;var a={activityId:this.activityId,submodule:"APPOINT",enabled:t?"Y":"N"};this.$config({handlers:[60706]}).$post(r.a.POST_DETAIL_SWITCH,a).then(function(a){if(200===a.code&&t){e.quesData.push({title:"手机号码",placeholder:"请输入手机号码",place:"请输入手机号码",label:"手机号码",type:"text",ext:"phone",detail:{format:"phone"}})}}).catch(function(t){60706===t.code&&(e.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),e.isOpen=!e.isOpen)}),t||(this.quesData=[])},dateFocus:function(){this.queryData.finishTime=this.defaultValue},setSelect:function(t,e){this.itemCount=e,this.selectOption=t,this.setSelectModal=!0},seletItemConfirm:function(){this.setSelectModal=!1}},beforeRouteLeave:function(t,e,a){if(this.canPaas)return a(!0),!1;this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?a(!0):a(!1)}})},watch:{quesData:{handler:function(t){var e=this;this.hasEmail=!1,this.hasName=!1,t.forEach(function(t){switch(t.ext){case"email":e.hasEmail=!0;break;case"name":e.hasName=!0}}),this.options.forEach(function(t){"email"===t.value&&(!0===e.hasEmail?t.disabled=!0:t.disabled=!1),"name"===t.value&&(!0===e.hasName?t.disabled=!0:t.disabled=!1)})},deep:!0},radioTime:{handler:function(t){this.pickDate="2"===t,this.canPaas=!1}}},components:{veTips:h.a,draggable:u.a}},p=(a(802),a(803),a(804),a(1)),f=Object(p.a)(m,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"table-title clearfix"},[e("li",{staticClass:"spe"},[this._v("信息类型")]),this._v(" "),e("li",[this._v("信息标题")]),this._v(" "),e("li",[this._v("信息描述")]),this._v(" "),e("li",{staticClass:"handle"},[this._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("最多可添加"),e("em",[this._v(" 5 ")]),this._v("条信息")])}],!1,null,"c2b17eb4",null);f.options.__file="src/pages/live-mager/prepare/limit/apply.vue";e.default=f.exports},617:function(t,e,a){},618:function(t,e,a){},619:function(t,e,a){},802:function(t,e,a){"use strict";var i=a(617);a.n(i).a},803:function(t,e,a){"use strict";var i=a(618);a.n(i).a},804:function(t,e,a){"use strict";var i=a(619);a.n(i).a}}]);
//# sourceMappingURL=25.f06cb90f.js.map
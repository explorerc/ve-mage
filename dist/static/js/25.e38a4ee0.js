(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{295:function(t,i,e){},296:function(t,i,e){},297:function(t,i,e){},447:function(t,i,e){"use strict";var a=e(295);e.n(a).a},449:function(t,i,e){"use strict";var a=e(296);e.n(a).a},451:function(t,i,e){"use strict";var a=e(297);e.n(a).a},578:function(t,i,e){"use strict";e.r(i);var a=e(234),s={data:function(){return{activityId:"",isOpen:!1,radioTime:"1",phone:"手机号码",pickDate:!1,date:new Date,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},options:[],quesData:[],queryData:{activityId:"",finishTime:"",questionId:""},questionId:"",saveData:{}}},created:function(){this.questionId=1,this.activityId=this.$route.params.id,this.getLimit(),this.options=[{value:"text",txt:"文本"},{value:"integer",txt:"数字"},{value:"email",txt:"邮箱"},{value:"select",txt:"下拉选择"}],this.quesData=[]},methods:{removeItem:function(t){this.quesData.splice([t],1)},selectChange:function(t,i){"下拉选择"===i&&this.quesData[t].detail.push("")},addItem:function(t){console.log(t),this.quesData[t].detail.push({value:"",key:0===this.quesData[t].detail.length?0:this.quesData[t].detail.length})},delItem:function(t,i){this.quesData[t].detail.splice(i,1)},addNew:function(){this.quesData.push({title:"标题",placeholder:"描述描述",label:"文本",type:"text",detail:[]})},getLimit:function(){var t=this;this.$config().$get(a.a.GET_LIMIT,{activityId:this.activityId}).then(function(i){console.log(i),"APPOINT"===i.data.viewCondition?(t.isOpen=!0,t.queryData=i.data.detail,t.quesData=i.data.detail.questionList,i.data.detail.finishTime&&i.data.detail.finishTime.search("0000")>-1&&(t.queryData.finishTime=""),null===i.data.detail.finishTime&&(t.queryData.finishTime=""),i.data.detail.finishTime.length>0?t.radioTime="2":t.radioTime="1"):t.isOpen=!1})},saveLimit:function(){var t=this;this.saveData={activityId:this.activityId,viewCondition:"APPOINT",detail:{finishTime:"2"===this.radioTime?this.queryData.finishTime:"",questionList:this.quesData}},this.saveData.detail.questionList.forEach(function(t){"mobile"===t.type&&(t.required="Y",t.verification="Y"),"email"===t.type&&(t.verification="Y")}),this.$nextTick(function(){t.saveLimitfn(t.saveData)})},saveLimitfn:function(t){var i=this;this.$config().$post(a.a.SAVE_LIMIT,t).then(function(t){i.$toast({content:"设置成功",position:"center"})})},openSwitch:function(t){if(t){this.quesData.push({title:"手机号码",placeholder:"请输入手机号码",label:"手机号码",type:"mobile",detail:[]})}else{var i={activityId:this.activityId,viewCondition:"NONE",detail:{finishTime:"2"===this.radioTime?this.queryData.finishTime:"",questionList:this.quesData}};this.saveLimitfn(i),this.quesData=[]}}},watch:{quesData:{handler:function(t){console.log("change")},deep:!0},radioTime:{handler:function(t){this.pickDate="2"===t}}},components:{veTips:e(251).a}},n=(e(447),e(449),e(451),e(1)),l=Object(n.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"apply-page live-mager"},[e("div",{staticClass:"live-title"},[e("span",{staticClass:"title"},[t._v("活动报名")]),t._v(" "),e("el-switch",{attrs:{"inactive-color":"#DEE1FF","active-color":"#4B5AFE"},on:{change:t.openSwitch},model:{value:t.isOpen,callback:function(i){t.isOpen=i},expression:"isOpen"}}),t._v(" "),e("div",{staticClass:"right-box"},[t._m(0),t._v(" "),e("button",{staticClass:"default-button fr",attrs:{disabled:5===t.quesData.length||!t.isOpen},on:{click:t.addNew}},[t._v("添加信息")])])],1),t._v(" "),e("div",{staticClass:"mager-box border-box"},[e("div",{staticClass:"from-box"},[e("div",{staticClass:"from-row"},[e("div",{staticClass:"from-title"},[t._v("报名结束时间：")]),t._v(" "),e("div",{staticClass:"from-content"},[e("el-radio",{attrs:{label:"1"},model:{value:t.radioTime,callback:function(i){t.radioTime=i},expression:"radioTime"}},[t._v("与直播同步关闭")]),t._v(" "),e("el-radio",{attrs:{label:"2"},model:{value:t.radioTime,callback:function(i){t.radioTime=i},expression:"radioTime"}},[t._v("指定结束时间")]),t._v(" "),t.pickDate?e("div",{staticClass:"set-time"},[e("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":t.pickerOptions},model:{value:t.queryData.finishTime,callback:function(i){t.$set(t.queryData,"finishTime",i)},expression:"queryData.finishTime"}})],1):t._e()],1)])]),t._v(" "),e("div",{staticClass:"set-info"},[e("div",{staticClass:"set-content"},[t._m(1),t._v(" "),e("ol",{staticClass:"table-content"},t._l(t.quesData,function(i,a){return e("li",{key:a,staticClass:"clearfix"},["mobile"===i.type?e("div",{staticClass:"spe moblie"},[e("i",{staticClass:"star"},[t._v("*")]),t._v(" "),e("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1):e("div",{staticClass:"spe"},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.selectChange(a,i.type)}},model:{value:i.type,callback:function(e){t.$set(i,"type",e)},expression:"item.type"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.txt,value:t.value}})}))],1),t._v(" "),e("div",[e("com-input",{staticClass:"inp",attrs:{value:i.title,"max-length":16,placeholder:"请输入信息标题"},on:{"update:value":function(e){t.$set(i,"title",e)}}})],1),t._v(" "),e("div",[e("com-input",{staticClass:"inp",attrs:{value:null===i.placeholder?"":i.placeholder,"max-length":16,placeholder:"请输入信息描述"},on:{"update:value":function(e){t.$set(null===i.placeholder?"":i,"placeholder",e)}}})],1),t._v(" "),"mobile"===i.type?e("div",[e("ve-tips",{attrs:{tip:"1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写 手机号之后，须进行手机号验证",tipType:"html"}})],1):e("div",{staticClass:"del-box"},[e("span",{staticClass:"del",on:{click:function(i){t.removeItem(a)}}},[t._v("删除")])]),t._v(" "),"select"===i.type?e("section",{staticClass:"select-item clearfix"},[e("ol",[e("span",{staticClass:"add-item",attrs:{disabled:10===i.detail.length},on:{click:function(i){t.addItem(a)}}},[e("i",[t._v("＋")]),t._v("添加选项")]),t._v(" "),t._l(i.detail,function(i,s){return e("li",{key:s},[e("com-input",{attrs:{value:i.value,"max-length":16,placeholder:"请输入选项"},on:{"update:value":function(e){t.$set(i,"value",e)}}}),t._v(" "),e("span",{staticClass:"del",on:{click:function(i){t.delItem(a,s)}}},[t._v("删除")])],1)})],2)]):t._e()])}))])]),t._v(" "),e("el-button",{staticClass:"primary-button",attrs:{disabled:!t.isOpen},on:{click:t.saveLimit}},[t._v("保存")])],1)])},[function(){var t=this.$createElement,i=this._self._c||t;return i("span",[this._v("最多可添加 "),i("i",[this._v("5")]),this._v(" 条信息")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"table-title clearfix"},[i("li",{staticClass:"spe"},[this._v("信息类型")]),this._v(" "),i("li",[this._v("信息标题")]),this._v(" "),i("li",[this._v("信息描述")]),this._v(" "),i("li",[this._v("操作")])])}],!1,null,"420d85f7",null);l.options.__file="apply.vue";i.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{465:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"asset-box"},[s("div",{staticClass:"asset-header"},[s("div",{staticClass:"asset-header-item"},[s("span",[t._v("所购服务")]),t._v(" "),s("span",[t._v(t._s(t.billInfo.serviceName))]),t._v(" "),s("span",[t._v("有效期 "+t._s(t.billInfo.serviceStartTime)+" ~ "+t._s(t.billInfo.serviceExpireTime))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("可用金额（元）\n      "),s("span",{staticClass:"add-money fr",on:{click:function(a){t.addMoney()}}},[t._v("充值")])]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(916)}}),t._v(" "),"0.00"!==t.billInfo.balance&&t.billInfo.balance?s("span",{staticClass:"mid"},[t._v(t._s(parseFloat(t.billInfo.balance).toFixed(2)))]):s("span",{staticClass:"mid",staticStyle:{color:"#555"}},[t._v(t._s(parseFloat(t.billInfo.balance).toFixed(2)))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("今日支出（元）")]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(917)}}),t._v(" "),s("span",{staticClass:"mid-zhichu"},[t._v(t._s(parseFloat(t.billInfo.payToday).toFixed(2)))])])]),t._v(" "),s("div",{staticClass:"asset-list-box"},[s("div",{staticClass:"asset-list"},[s("div",{staticClass:"search-asset"},[s("span",{staticClass:"asset-title"},[t._v("账户流水")]),t._v(" "),s("button",{staticClass:"default-button export-btn fr",on:{click:t.exportTable}},[t._v("导出")]),t._v(" "),s("div",{staticClass:"search-item flm fr"},[s("span",{staticClass:"search-title"},[t._v("时间")]),t._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.queryList},model:{value:t.searchParams.date,callback:function(a){t.$set(t.searchParams,"date",a)},expression:"searchParams.date"}})],1),t._v(" "),s("div",{staticClass:"search-item fr"},[s("span",{staticClass:"search-title"},[t._v("流水类型")]),t._v(" "),s("el-select",{ref:"search",attrs:{placeholder:"流水类型"},on:{change:t.queryListType},model:{value:t.searchParams.type,callback:function(a){t.$set(t.searchParams,"type",a)},expression:"searchParams.type"}},t._l(t.liuTypeList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)])]),t._v(" "),s("div",{staticClass:"asset-list-table"},[t.viewerList.length?[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.viewerList}},[s("el-table-column",{attrs:{prop:"billNumber",label:"流水ID"}}),t._v(" "),s("el-table-column",{attrs:{label:"流水类型"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n              "+t._s(t._f("fmtType")(a.row.type))+"\n            ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"amount",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"createdAt",label:"时间"}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",{class:{status:!0,success:"SUCCESS"===a.row.status}},[t._v(t._s(t._f("fmtStatus")(a.row.status)))])]}}])})],1),t._v(" "),t.total>t.searchParams.pageSize?s("div",{staticClass:"page-pagination"},[t.iscurrentPage?s("ve-pagination",{attrs:{total:t.total,pageSize:t.searchParams.pageSize,currentPage:t.currentPage},on:{changePage:t.changePage}}):t._e()],1):t._e()]:t._e(),t._v(" "),t.isNoDataShow?s("div",{staticClass:"empty"},[s("div",{staticClass:"img"}),t._v(" "),t.searchLabel?s("div",{staticClass:"txt"},[t._v(t._s(t.searchLabel))]):s("div",{staticClass:"txt"},[t._v("暂无数据")])]):t._e()],2)]),t._v(" "),s("div",{staticClass:"money-box-wrap"},[t.addMoneyShow?s("message-box",{staticClass:"add-money-msg",attrs:{width:"464px",type:"prompt",header:"充值",confirmText:"下一步"},on:{handleClick:t.payMoney}},[s("div",{staticClass:"mager-box message-box-content"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("当前余额")]),t._v(" "),s("div",{staticClass:"from-content"},[s("span",{staticStyle:{"line-height":"20px"}},[t._v("¥ "+t._s((1*t.billInfo.balance).toFixed(2)))])])]),t._v(" "),s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("充值金额")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box"},[s("com-input",{attrs:{type:"float",placeholder:"10～20000",value:t.amount,errorTips:t.amountError},on:{"update:value":function(a){t.amount=a}},model:{value:t.amount,callback:function(a){t.amount=a},expression:"amount"}}),t._v(" "),s("i",{staticClass:"money-sign"},[t._v("¥")])],1)])])])])]):t._e(),t._v(" "),t.payMoneyShow?s("message-box",{staticClass:"pay-money-msg",attrs:{width:"464px",type:"prompt",header:"充值"},on:{handleClick:t.paidMoney}},[s("div",{staticClass:"mager-box message-box-content"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title  modify-box"},[s("span",[t._v("充值金额")])]),t._v(" "),t.modifyMoneyShow?s("div",{staticClass:"from-content  modify-box"},[s("span",[t._v("¥ "+t._s(t.amount))]),t._v(" "),s("i",{staticClass:"modifiyMoney-btn",on:{click:t.modifyMoney}},[t._v("修改金额")])]):s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box",staticStyle:{"margin-top":"0px"}},[s("com-input",{attrs:{type:"float",value:t.amount,errorTips:t.amountError},on:{"update:value":function(a){t.amount=a}}}),t._v(" "),s("i",{staticClass:"pay-money-sign"},[t._v("¥")]),t._v(" "),s("span",{staticClass:"save-money",on:{click:t.saveMoney}},[t._v("保存")]),t._v(" "),s("span",{staticClass:"concel-money",on:{click:t.cancelMoney}},[t._v("取消")])],1)])]),t._v(" "),s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("扫码充值")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box"},[s("div",{staticClass:"title"},[s("button",{ref:"alipay",staticClass:"payway alipay",class:{active:"ALIPAY"===t.payType},on:{click:function(a){t.payChange("支付宝")}}},[t._v("支付宝充值\n                  ")]),t._v(" "),s("button",{ref:"wxpay",staticClass:"payway weixin",class:{active:"WXPAY"===t.payType},on:{click:function(a){t.payChange("微信")}}},[t._v("微信充值\n                  ")])])])])]),t._v(" "),s("div",{staticClass:"pay-img-box"},[s("div",{staticClass:"payImg"},[t.codeSrc?s("img",{attrs:{src:t.codeSrc,alt:"付款二维码"}}):t._e()]),t._v(" "),s("p",{staticClass:"pay-des"},[t._v("\n              "+t._s(t.payway)+"扫一扫支付\n            ")])])])])]):t._e(),t._v(" "),t.successMoneyShow?s("message-box",{staticClass:"paid-money-msg",attrs:{width:"464px",type:"prompt",header:"充值"},on:{handleClick:t.finishMoney}},[s("div",{staticClass:"message-box-content"},[s("div",{staticClass:"success-img"},[s("img",{attrs:{src:e(574),alt:""}})]),t._v(" "),s("p",{staticClass:"paid-success-text"},[t._v("充值成功")]),t._v(" "),s("div",{staticClass:"paid-balance"},[t._v("当前账户余额 ¥"+t._s((1*t.billInfo.balance).toFixed(2)))])])]):t._e()],1)])};s._withStripped=!0;var n=e(95),i=e.n(n),o=e(131),r=e.n(o),c=e(27),l=e.n(c),u="/user/bill/list",d="/user/bill/overview",p="/user/bill/download",h="/user/business-recharge/create-bill",v="/user/business-recharge/get-payment",m="/manage/channel/create-channel-token",y=e(515),f=e(93),b=e(608),_=e(611),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("message-box",{staticClass:"width-draw-msg",attrs:{width:"530px",type:"promt",header:"提现",confirmText:"下一步"},on:{handleClick:t.close}},[e("div",{staticClass:"modal-box"},[e("com-input",{staticClass:"inp",class:{error:t.errorTips},attrs:{value:t.value,placeholder:"请输入提现金额"},on:{"update:value":function(a){t.value=a},focus:function(a){t.errorTips=!1}}}),t._v(" "),e("el-button",{on:{click:t.widthDraw}},[t._v("提现")])],1)])};w._withStripped=!0;var g={data:function(){return{errorTips:!1,value:0}},methods:{widthDraw:function(){},close:function(){console.log("close"),this.$emit("withdrawClose")}}},C=(e(918),e(1)),x=Object(C.a)(g,w,[],!1,null,"3d400c22",null);x.options.__file="src/pages/asset-mager/components/com-withdraw.vue";var S=x.exports,P=e(59),k={name:"asset-list",components:{VePagination:y.a,comWithdraw:S},data:function(){return{total:0,liuTypeList:[{value:"",label:"全部"},{value:"RECHARGE",label:"账户充值"},{value:"RED_PACK",label:"红包消费"},{value:"RE_RED_PACK",label:"红包返回"}],viewerList:[],billInfo:{balance:0,serviceStartTime:"",serviceExpireTime:"",serviceName:"",payToday:""},searchParams:{type:"",date:"",page:1,pageSize:25},searchLabel:"",currentPage:1,addMoneyShow:!1,payMoneyShow:!1,successMoneyShow:!1,amount:"",oldAmount:"",modifyMoneyShow:!0,payway:"支付宝",payType:"ALIPAY",amountError:"",billNo:"",codeSrc:"",alDisabled:!1,wxDisabled:!1,dialogTitle:"充值",iscurrentPage:!0,isNoDataShow:!1,showWithdraw:!1}},filters:{fmtStatus:function(t){return"SUCCESS"===t?"成功":"失败"},fmtType:function(t){return{RECHARGE:"账户充值",RED_PACK:"红包消费",RE_RED_PACK:"红包返回"}[t]}},computed:l()({},Object(f.c)("login",{accountInfo:function(t){return t.accountInfo}})),created:function(){this.queryAccountInfo(),this.queryList(),P.a.$emit("breads",[{title:"账户管理"},{title:"资产管理"}])},methods:{changePage:function(t){this.searchParams.page=t,this.queryList()},queryAccountInfo:function(){var t=this;this.$get(d,{}).then(function(a){200===a.code&&(t.billInfo=a.data)})},queryList:function(){var t=this;this.$nextTick(function(){t.$get(u,l()({},t.searchParams)).then(function(a){200===a.code&&(t.total=a.data.total,t.viewerList=a.data.list,console.log(t.viewerList.length),t.viewerList.length?t.isNoDataShow=!1:t.isNoDataShow=!0)})})},queryListType:function(){this.searchParams.page=1,this.currentPage=1,this.queryList()},exportTable:function(){this.searchParams.date||(this.searchParams.date="");var t="?type="+this.searchParams.type+"&date="+(this.searchParams.date?this.searchParams.date:""),a="/api"+p+t;window.open(encodeURI(encodeURI(a)))},addMoney:function(){this.addMoneyShow=!0},payMoney:function(t){var a=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("confirm"!==t.action){e.next=12;break}if(a.amount){e.next=4;break}return a.amountError="请输入10～20000之间的数字",e.abrupt("return");case 4:if(!a.checkAmount()){e.next=10;break}return a.addMoneyShow=!1,a.oldAmount=a.amount,e.next=9,a.queryBillNo();case 9:""!==a.billNo&&(a.payMoneyShow=!0);case 10:e.next=16;break;case 12:a.addMoneyShow=!1,a.amount="",a.payType="ALIPAY",a.amountError="";case 16:case"end":return e.stop()}},e,a)}))()},modifyMoney:function(){this.modifyMoneyShow=!this.modifyMoneyShow},saveMoney:function(){this.checkAmount()&&(this.modifyMoneyShow=!0,this.amount!==this.oldAmount&&(this.queryBillNo(),this.oldAmount=this.amount))},cancelMoney:function(){this.amount=this.oldAmount,this.modifyMoneyShow=!0},checkAmount:function(){var t=this.amount;return""===t||t<10||t>2e4?(this.amountError="请输入10～20000之间的数字",!1):(this.amountError="",!0)},queryCode:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$get(v,{billNo:t.billNo,payType:t.payType}).then(function(a){200===a.code&&(t.codeSrc="//aliqr.e.vhall.com/qr.png?t="+a.data.qrcode)});case 2:t.initMsgServe();case 3:case"end":return a.stop()}},a,t)}))()},initMsgServe:function(){var t=this;return r()(i.a.mark(function a(){var e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$get(m,{thirdUserId:t.accountInfo.businessUserId,channel:t.accountInfo.channelRoom}).then(function(t){return t.data});case 2:e=a.sent,b.a.OBJ.init({accountId:e.accountId,token:e.token,appId:e.appId,channelId:e.channelRoom}),b.a.OBJ.regHandler(_.a.charge,function(a){t.payMoneyShow=!1,t.successMoneyShow=!0,t.queryAccountInfo()});case 5:case"end":return a.stop()}},a,t)}))()},queryBillNo:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.modifyMoneyShow||(t.amount=t.oldAmount),a.next=3,t.$get(h,{amount:t.amount}).then(function(a){if(200===a.code)return t.billNo=a.data.billNo,!0});case 3:t.queryCode();case 4:case"end":return a.stop()}},a,t)}))()},payChange:function(t){var a=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("支付宝"!==t){e.next=9;break}return a.payType="ALIPAY",a.payway=t,a.queryCode(),a.wxDisabled=!0,e.next=7,setTimeout(function(){a.wxDisabled=!1},500);case 7:e.next=15;break;case 9:return a.payType="WXPAY",a.payway=t,a.queryCode(),a.alDisabled=!0,e.next=15,setTimeout(function(){a.alDisabled=!1},500);case 15:case"end":return e.stop()}},e,a)}))()},paidMoney:function(t){this.payMoneyShow=!1,this.amount="",this.oldAmount="",this.payType="ALIPAY",this.amountError="",this.modifyMoneyShow=!0},finishMoney:function(){this.queryAccountInfo(),this.successMoneyShow=!1,this.amount="",this.oldAmount="",this.modifyMoneyShow=!0,this.payway="支付宝",this.payType="ALIPAY"},currentPageReset:function(){var t=this;this.iscurrentPage=!1,this.$nextTick(function(){t.iscurrentPage=!0})}},watch:{"searchParams.type":{handler:function(t,a){"RECHARGE"===t?(this.searchLabel="很抱歉，没有搜索到账户充值的结果",this.currentPageReset()):"RED_PACK"===t?(this.searchLabel="很抱歉，没有搜索到红包消费的结果",this.currentPageReset()):"RE_RED_PACK"===t?(this.searchLabel="很抱歉，没有搜索到红包返回的结果",this.currentPageReset()):(this.searchLabel="暂无数据",this.currentPageReset())},deep:!0}}},M=(e(919),Object(C.a)(k,s,[],!1,null,"103f32cb",null));M.options.__file="src/pages/asset-mager/asset-list.vue";a.default=M.exports},702:function(t,a,e){},703:function(t,a,e){},916:function(t,a,e){t.exports=e.p+"static/img/zhichu@2x.43655eb.png"},917:function(t,a,e){t.exports=e.p+"static/img/qianbao@2x.0fbed5c.png"},918:function(t,a,e){"use strict";var s=e(702);e.n(s).a},919:function(t,a,e){"use strict";var s=e(703);e.n(s).a}}]);
//# sourceMappingURL=57.0db396c1.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{484:function(t,a,e){"use strict";e.r(a);var s=e(99),n=e.n(s),i=e(138),o=e.n(i),c=e(30),r=e.n(c),l="/user/bill/list",u="/user/bill/overview",d="/user/bill/download",p="/user/business-recharge/create-bill",v="/user/business-recharge/get-payment",m="/manage/channel/create-channel-token",y=e(530),h=e(97),f=e(622),b=e(625),_={name:"asset-list",components:{VePagination:y.a},data:function(){return{total:0,liuTypeList:[{value:"",label:"全部"},{value:"RECHARGE",label:"账户充值"},{value:"RED_PACK",label:"红包消费"},{value:"RE_RED_PACK",label:"红包返回"}],viewerList:[],billInfo:{balance:0,serviceStartTime:"",serviceExpireTime:"",serviceName:"",payToday:""},searchParams:{type:"",date:"",page:1,pageSize:10},addMoneyShow:!1,payMoneyShow:!1,successMoneyShow:!1,amount:"",oldAmount:"",modifyMoneyShow:!0,payway:"支付宝",payType:"ALIPAY",amountError:"",billNo:"",codeSrc:"",alDisabled:!1,wxDisabled:!1,dialogTitle:"充值"}},filters:{fmtStatus:function(t){return"SUCCESS"===t?"成功":"失败"},fmtType:function(t){return{RECHARGE:"账户充值",RED_PACK:"红包消费",RE_RED_PACK:"红包返回"}[t]}},computed:r()({},Object(h.c)("login",{accountInfo:function(t){return t.accountInfo}})),created:function(){this.queryAccountInfo(),this.queryList()},methods:{changePage:function(t){this.searchParams.page=t,this.queryList()},queryAccountInfo:function(){var t=this;this.$get(u,{}).then(function(a){200===a.code&&(t.billInfo=a.data)})},queryList:function(){var t=this;this.$nextTick(function(){t.$get(l,r()({},t.searchParams)).then(function(a){200===a.code&&(t.total=a.data.total,t.viewerList=a.data.list)})})},exportTable:function(){var t="?type="+this.searchParams.type+"&date="+this.searchParams.date,a="/api"+d+t;window.open(encodeURI(encodeURI(a)))},addMoney:function(){this.addMoneyShow=!0},payMoney:function(t){var a=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("confirm"!==t.action){e.next=11;break}if(a.amount){e.next=4;break}return a.amountError="请输入10～20000之间的数字",e.abrupt("return");case 4:if(!a.checkAmount()){e.next=9;break}return a.addMoneyShow=!1,e.next=8,a.queryBillNo();case 8:""!==a.billNo&&(a.payMoneyShow=!0);case 9:e.next=15;break;case 11:a.addMoneyShow=!1,a.amount="",a.payType="ALIPAY",a.amountError="";case 15:case"end":return e.stop()}},e,a)}))()},modifyMoney:function(){this.oldAmount=this.amount,this.modifyMoneyShow=!this.modifyMoneyShow},saveMoney:function(){this.checkAmount()&&(this.modifyMoneyShow=!0,this.amount!==this.oldAmount&&this.queryBillNo())},cancelMoney:function(){this.amount=this.oldAmount,this.modifyMoneyShow=!0},checkAmount:function(){var t=this.amount;return t<10||t>2e4?(this.amountError="请输入10～20000之间的数字",!1):(this.amountError="",!0)},queryCode:function(){var t=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$get(v,{billNo:t.billNo,payType:t.payType}).then(function(a){200===a.code&&(t.codeSrc="//aliqr.e.vhall.com/qr.png?t="+a.data.qrcode)});case 2:t.initMsgServe();case 3:case"end":return a.stop()}},a,t)}))()},initMsgServe:function(){var t=this;return o()(n.a.mark(function a(){var e;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$get(m,{thirdUserId:t.accountInfo.businessUserId,channel:t.accountInfo.channelRoom}).then(function(t){return t.data});case 2:e=a.sent,f.a.OBJ.init({accountId:e.accountId,token:e.token,appId:e.appId,channelId:e.channelRoom}),f.a.OBJ.regHandler(b.a.charge,function(a){console.log("---------支付消息---------"),console.log(a),t.payMoneyShow=!1,t.successMoneyShow=!0});case 5:case"end":return a.stop()}},a,t)}))()},queryBillNo:function(){var t=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$get(p,{amount:t.amount}).then(function(a){if(200===a.code)return t.billNo=a.data.billNo,!0});case 2:t.queryCode();case 3:case"end":return a.stop()}},a,t)}))()},payChange:function(t){var a=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("支付宝"!==t){e.next=9;break}return a.payType="ALIPAY",a.payway=t,a.queryCode(),a.wxDisabled=!0,e.next=7,setTimeout(function(){a.wxDisabled=!1},500);case 7:e.next=15;break;case 9:return a.payType="WXPAY",a.payway=t,a.queryCode(),a.alDisabled=!0,e.next=15,setTimeout(function(){a.alDisabled=!1},500);case 15:case"end":return e.stop()}},e,a)}))()},paidMoney:function(t){this.payMoneyShow=!1,this.amount="",this.payType="ALIPAY",this.amountError=""},finishMoney:function(){this.queryAccountInfo(),this.successMoneyShow=!1}},watch:{}},C=(e(926),e(1)),g=Object(C.a)(_,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"asset-box"},[s("div",{staticClass:"asset-header"},[s("div",{staticClass:"asset-header-item"},[s("span",[t._v("所购服务")]),t._v(" "),s("span",[t._v(t._s(t.billInfo.serviceName))]),t._v(" "),s("span",[t._v("有效期 "+t._s(t.billInfo.serviceStartTime)+" ~ "+t._s(t.billInfo.serviceExpireTime))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("可用金额（元）\n        "),s("span",{staticClass:"add-money fr",on:{click:function(a){t.addMoney()}}},[t._v("充值")])]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(924)}}),t._v(" "),s("span",{staticClass:"mid"},[t._v(t._s(t.billInfo.balance))])]),t._v(" "),s("div",{staticClass:"asset-header-item"},[s("span",[t._v("今日支出（元）")]),t._v(" "),s("img",{attrs:{width:"100",height:"60",src:e(925)}}),t._v(" "),s("span",{staticClass:"mid-zhichu"},[t._v(t._s(t.billInfo.payToday))])])]),t._v(" "),s("div",{staticClass:"asset-list-box"},[s("div",{staticClass:"asset-list"},[s("div",{staticClass:"search-asset"},[s("span",{staticClass:"asset-title"},[t._v("账户流水")]),t._v(" "),s("button",{staticClass:"default-button export-btn fr",on:{click:t.exportTable}},[t._v("导出")]),t._v(" "),s("div",{staticClass:"search-item flm fr"},[s("span",{staticClass:"search-title"},[t._v("时间")]),t._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.queryList},model:{value:t.searchParams.date,callback:function(a){t.$set(t.searchParams,"date",a)},expression:"searchParams.date"}})],1),t._v(" "),s("div",{staticClass:"search-item fr"},[s("span",{staticClass:"search-title"},[t._v("渠道来源")]),t._v(" "),s("el-select",{attrs:{placeholder:"渠道来源"},on:{change:t.queryList},model:{value:t.searchParams.type,callback:function(a){t.$set(t.searchParams,"type",a)},expression:"searchParams.type"}},t._l(t.liuTypeList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)])]),t._v(" "),s("div",{staticClass:"asset-list-table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.viewerList}},[s("el-table-column",{attrs:{prop:"billNumber",label:"流水ID"}}),t._v(" "),s("el-table-column",{attrs:{label:"流水类型"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n            "+t._s(t._f("fmtType")(a.row.type))+"\n          ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"amount",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"createdAt",label:"时间"}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",width:"160"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",{class:{status:!0,success:"SUCCESS"===a.row.status}},[t._v(t._s(t._f("fmtStatus")(a.row.status)))])]}}])})],1),t._v(" "),t.total>t.searchParams.pageSize?s("div",{staticClass:"page-pagination"},[s("ve-pagination",{attrs:{total:t.total,pageSize:t.searchParams.pageSize},on:{changePage:t.changePage}})],1):t._e()],1)]),t._v(" "),s("div",{staticClass:"money-box-wrap"},[t.addMoneyShow?s("message-box",{staticClass:"add-money-msg",attrs:{width:"464px",type:"prompt",header:t.dialogTitle,confirmText:"下一步"},on:{handleClick:t.payMoney}},[s("div",{staticClass:"mager-box message-box-content"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("当前余额")]),t._v(" "),s("div",{staticClass:"from-content"},[s("span",{staticStyle:{"line-height":"20px"}},[t._v("¥ "+t._s(t.billInfo.balance))])])]),t._v(" "),s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("充值金额")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box"},[s("com-input",{attrs:{type:"mobile",placeholder:"10～20000",value:t.amount,errorTips:t.amountError},on:{"update:value":function(a){t.amount=a}},model:{value:t.amount,callback:function(a){t.amount=a},expression:"amount"}}),t._v(" "),s("i",{staticClass:"money-sign"},[t._v("¥")])],1)])])])])]):t._e(),t._v(" "),t.payMoneyShow?s("message-box",{staticClass:"pay-money-msg",attrs:{width:"464px",type:"prompt",header:t.dialogTitle,header:""},on:{handleClick:t.paidMoney}},[s("div",{staticClass:"mager-box message-box-content"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title  modify-box"},[s("span",[t._v("充值金额")])]),t._v(" "),t.modifyMoneyShow?s("div",{staticClass:"from-content  modify-box"},[s("span",[t._v("¥ "+t._s(t.amount))]),t._v(" "),s("i",{staticClass:"modifiyMoney-btn",on:{click:t.modifyMoney}},[t._v("修改金额")])]):s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box",staticStyle:{"margin-top":"0px"}},[s("com-input",{attrs:{type:"mobile",value:t.amount,errorTips:t.amountError},on:{"update:value":function(a){t.amount=a}}}),t._v(" "),s("i",{staticClass:"pay-money-sign"},[t._v("¥")]),t._v(" "),s("span",{staticClass:"save-money",on:{click:t.saveMoney}},[t._v("保存")]),t._v(" "),s("span",{staticClass:"concel-money",on:{click:t.cancelMoney}},[t._v("取消")])],1)])]),t._v(" "),s("div",{staticClass:"from-row input-box"},[s("div",{staticClass:"from-title"},[t._v("扫码充值")]),t._v(" "),s("div",{staticClass:"from-content"},[s("div",{staticClass:"black-box"},[s("div",{staticClass:"title"},[s("button",{ref:"alipay",staticClass:"payway alipay",class:{active:"ALIPAY"===t.payType},on:{click:function(a){t.payChange("支付宝")}}},[t._v("支付宝充值\n                  ")]),t._v(" "),s("button",{ref:"wxpay",staticClass:"payway weixin",class:{active:"WXPAY"===t.payType},on:{click:function(a){t.payChange("微信")}}},[t._v("微信充值\n                  ")])])])])]),t._v(" "),s("div",{staticClass:"pay-img-box"},[s("div",{staticClass:"payImg"},[t.codeSrc?s("img",{attrs:{src:t.codeSrc,alt:"付款二维码"}}):t._e()]),t._v(" "),s("p",{staticClass:"pay-des"},[t._v("\n              "+t._s(t.payway)+"扫一扫支付\n            ")])])])])]):t._e(),t._v(" "),t.successMoneyShow?s("message-box",{staticClass:"paid-money-msg",attrs:{width:"464px",type:"prompt",header:t.dialogTitle,header:""},on:{handleClick:t.finishMoney}},[s("div",{staticClass:"message-box-content"},[s("div",{staticClass:"success-img"},[s("img",{attrs:{src:e(588),alt:""}})]),t._v(" "),s("p",{staticClass:"paid-success-text"},[t._v("充值成功")]),t._v(" "),s("div",{staticClass:"paid-balance"},[t._v("当前账户余额 ¥"+t._s(parseFloat(t.amount)+parseFloat(t.billInfo.balance)))])])]):t._e()],1)])},[],!1,null,"2b9de9db",null);g.options.__file="asset-list.vue";a.default=g.exports},715:function(t,a,e){},924:function(t,a,e){t.exports=e.p+"static/img/zhichu@2x.43655eb.png"},925:function(t,a,e){t.exports=e.p+"static/img/qianbao@2x.0fbed5c.png"},926:function(t,a,e){"use strict";var s=e(715);e.n(s).a}}]);
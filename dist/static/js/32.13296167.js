(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1022:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"content live-mager auto-page"},[s("div",{staticClass:"live-title"},[s("span",{staticClass:"title"},[t._v("自动化通知")]),t._v(" "),s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:t.openSwitch},model:{value:t.isOpen,callback:function(i){t.isOpen=i},expression:"isOpen"}}),t._v(" "),s("span",{staticClass:"tips"},[t._v("开启自动化通知，自动通知您的观众，提升活动服务体验")])],1),t._v(" "),s("div",{staticClass:"preview mager-box border-box clearfix"},[s("div",{staticClass:"time-line fl"}),t._v(" "),s("div",{staticClass:"fl"},["NONE"===t.limit?s("p",{staticClass:"step order"},[t._v("预约阶段")]):s("p",{staticClass:"step order"},[t._v("活动报名阶段")]),t._v(" "),s("div",{staticClass:"detail"},["NONE"===t.limit?s("div",{staticClass:"block"},[t._m(0),t._v(" "),s("div",{staticClass:"item-box"},[s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img msg"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"SMS",tpl:t.itemList.BEFORE_ORDER.SMS.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,secondCount:t.tplData.secondCount,link:t.tplData.link,firstCount:t.tplData.firstCount,triggerType:"BEFORE_ORDER"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_ORDER.SMS.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_ORDER","SMS",t.itemList.BEFORE_ORDER.SMS.noticeTaskId,t.itemList.BEFORE_ORDER.SMS.templateId)}},model:{value:t.itemList.BEFORE_ORDER.SMS.switch,callback:function(i){t.$set(t.itemList.BEFORE_ORDER.SMS,"switch",i)},expression:"itemList['BEFORE_ORDER']['SMS']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_ORDER.SMS.switch},on:{click:function(i){t.testSend("BEFORE_ORDER","SMS",t.itemList.BEFORE_ORDER.SMS.noticeTaskId)}}},[t._v("测试发送")])],1)]),t._v(" "),s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img wechat"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"WECHAT",tpl:t.itemList.BEFORE_ORDER.WECHAT.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_ORDER"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_ORDER.WECHAT.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_ORDER","WECHAT",t.itemList.BEFORE_ORDER.WECHAT.noticeTaskId,t.itemList.BEFORE_ORDER.SMS.templateId)}},model:{value:t.itemList.BEFORE_ORDER.WECHAT.switch,callback:function(i){t.$set(t.itemList.BEFORE_ORDER.WECHAT,"switch",i)},expression:"itemList['BEFORE_ORDER']['WECHAT']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_ORDER.WECHAT.switch},on:{click:function(i){t.testSend("BEFORE_ORDER","WECHAT",t.itemList.BEFORE_ORDER.WECHAT.noticeTaskId)}}},[t._v("测试发送")])],1)])])]):s("div",{staticClass:"block"},[t._m(1),t._v(" "),s("div",{staticClass:"item-box"},[s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img msg"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"SMS",tpl:t.itemList.BEFORE_APPLY.SMS.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_APPLY"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_APPLY.SMS.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_APPLY","SMS",t.itemList.BEFORE_APPLY.SMS.noticeTaskId,t.itemList.BEFORE_APPLY.SMS.templateId)}},model:{value:t.itemList.BEFORE_APPLY.SMS.switch,callback:function(i){t.$set(t.itemList.BEFORE_APPLY.SMS,"switch",i)},expression:"itemList['BEFORE_APPLY']['SMS']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_APPLY.SMS.switch},on:{click:function(i){t.testSend("BEFORE_APPLY","SMS",t.itemList.BEFORE_APPLY.SMS.noticeTaskId)}}},[t._v("测试发送")])],1)]),t._v(" "),s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img wechat"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"WECHAT",tpl:t.itemList.BEFORE_APPLY.WECHAT.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_APPLY"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_APPLY.WECHAT.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_APPLY","WECHAT",t.itemList.BEFORE_APPLY.WECHAT.noticeTaskId,t.itemList.BEFORE_APPLY.WECHAT.templateId)}},model:{value:t.itemList.BEFORE_APPLY.WECHAT.switch,callback:function(i){t.$set(t.itemList.BEFORE_APPLY.WECHAT,"switch",i)},expression:"itemList['BEFORE_APPLY']['WECHAT']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_APPLY.WECHAT.switch},on:{click:function(i){t.testSend("BEFORE_APPLY","WECHAT",t.itemList.BEFORE_APPLY.WECHAT.noticeTaskId)}}},[t._v("测试发送")])],1)])])]),t._v(" "),s("div",{staticClass:"block"},[s("div",{staticClass:"title clearfix"},[s("p",{staticClass:"block-tips"},[t._v("开播前"+t._s(t.hourValue)+"小时 "),s("span",[t._v("提醒用户活动即将开始，做好参加准备")])]),t._v(" "),s("el-button",{staticClass:"primary-button edit-time",on:{click:function(i){t.firstSel=!0}}},[t._v("编辑提醒时间")]),t._v(" "),t.firstSel?s("div",{staticClass:"seltime-modal"},[s("div",{staticClass:"title"},[t._v("修改时间："),s("i",{staticClass:"close",on:{click:function(i){t.resetCountDown("hour")}}})]),t._v(" "),s("div",{staticClass:"content"},[s("el-select",{attrs:{placeholder:"编辑提醒时间"},model:{value:t.selhourValue,callback:function(i){t.selhourValue=i},expression:"selhourValue"}},t._l(t.hourOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"primary-button",on:{click:function(i){t.saveCountdown("hour")}}},[t._v("保存")]),t._v(" "),s("span",{on:{click:function(i){t.resetCountDown("hour")}}},[t._v("取消")])],1)],1)]):t._e()],1),t._v(" "),s("div",{staticClass:"item-box"},[s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img msg"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"SMS",tpl:t.itemList.BEFORE_HOUR.SMS.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_HOUR"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_HOUR.SMS.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_HOUR","SMS",t.itemList.BEFORE_HOUR.SMS.noticeTaskId,t.itemList.BEFORE_HOUR.SMS.templateId)}},model:{value:t.itemList.BEFORE_HOUR.SMS.switch,callback:function(i){t.$set(t.itemList.BEFORE_HOUR.SMS,"switch",i)},expression:"itemList['BEFORE_HOUR']['SMS']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_HOUR.SMS.switch},on:{click:function(i){t.testSend("BEFORE_HOUR","SMS",t.itemList.BEFORE_HOUR.SMS.noticeTaskId)}}},[t._v("测试发送")])],1)]),t._v(" "),s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img wechat"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"WECHAT",tpl:t.itemList.BEFORE_HOUR.WECHAT.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_HOUR"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_HOUR.WECHAT.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_HOUR","WECHAT",t.itemList.BEFORE_HOUR.WECHAT.noticeTaskId,t.itemList.BEFORE_HOUR.WECHAT.templateId)}},model:{value:t.itemList.BEFORE_HOUR.WECHAT.switch,callback:function(i){t.$set(t.itemList.BEFORE_HOUR.WECHAT,"switch",i)},expression:"itemList['BEFORE_HOUR']['WECHAT']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_HOUR.WECHAT.switch},on:{click:function(i){t.testSend("BEFORE_HOUR","WECHAT",t.itemList.BEFORE_HOUR.WECHAT.noticeTaskId)}}},[t._v("测试发送")])],1)])])]),t._v(" "),s("div",{staticClass:"block"},[s("div",{staticClass:"title clearfix"},[s("p",{staticClass:"block-tips"},[t._v("开播前"+t._s(t.minValue)+"分钟 "),s("span",[t._v("活动开始前"+t._s(t.minValue)+"分钟，提醒用户活动即将开始，做好参加准备")])]),t._v(" "),s("el-button",{staticClass:"primary-button edit-time",on:{click:function(i){t.secondSel=!0}}},[t._v("编辑提醒时间")]),t._v(" "),t.secondSel?s("div",{staticClass:"seltime-modal"},[s("div",{staticClass:"title"},[t._v("修改时间："),s("i",{staticClass:"close",on:{click:function(i){t.resetCountDown("min")}}})]),t._v(" "),s("div",{staticClass:"content"},[s("el-select",{attrs:{placeholder:"编辑提醒时间"},model:{value:t.selminValue,callback:function(i){t.selminValue=i},expression:"selminValue"}},t._l(t.minOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-button",{staticClass:"primary-button",on:{click:function(i){t.saveCountdown("min")}}},[t._v("保存")]),t._v(" "),s("span",{on:{click:function(i){t.resetCountDown("min")}}},[t._v("取消")])],1)],1)]):t._e()],1),t._v(" "),s("div",{staticClass:"item-box"},[s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img msg"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"SMS",tpl:t.itemList.BEFORE_MINUTE.SMS.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_MINUTE"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_MINUTE.SMS.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_MINUTE","SMS",t.itemList.BEFORE_MINUTE.SMS.noticeTaskId,t.itemList.BEFORE_MINUTE.SMS.templateId)}},model:{value:t.itemList.BEFORE_MINUTE.SMS.switch,callback:function(i){t.$set(t.itemList.BEFORE_MINUTE.SMS,"switch",i)},expression:"itemList['BEFORE_MINUTE']['SMS']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_MINUTE.SMS.switch},on:{click:function(i){t.testSend("BEFORE_MINUTE","SMS",t.itemList.BEFORE_MINUTE.SMS.noticeTaskId)}}},[t._v("测试发送")])],1)]),t._v(" "),s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img wechat"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"WECHAT",tpl:t.itemList.BEFORE_MINUTE.WECHAT.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"BEFORE_MINUTE"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.BEFORE_MINUTE.WECHAT.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"BEFORE_MINUTE","WECHAT",t.itemList.BEFORE_MINUTE.WECHAT.noticeTaskId,t.itemList.BEFORE_MINUTE.WECHAT.templateId)}},model:{value:t.itemList.BEFORE_MINUTE.WECHAT.switch,callback:function(i){t.$set(t.itemList.BEFORE_MINUTE.WECHAT,"switch",i)},expression:"itemList['BEFORE_MINUTE']['WECHAT']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.BEFORE_MINUTE.WECHAT.switch},on:{click:function(i){t.testSend("BEFORE_MINUTE","WECHAT",t.itemList.BEFORE_MINUTE.WECHAT.noticeTaskId)}}},[t._v("测试发送")])],1)])])])]),t._v(" "),s("p",{staticClass:"step record"},[t._v("回放阶段")]),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"block"},[t._m(2),t._v(" "),s("div",{staticClass:"item-box"},[s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img msg"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"SMS",tpl:t.itemList.REPLAY.SMS.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"REPLAY"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.REPLAY.SMS.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"REPLAY","SMS",t.itemList.REPLAY.SMS.noticeTaskId,t.itemList.REPLAY.SMS.templateId)}},model:{value:t.itemList.REPLAY.SMS.switch,callback:function(i){t.$set(t.itemList.REPLAY.SMS,"switch",i)},expression:"itemList['REPLAY']['SMS']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.REPLAY.SMS.switch},on:{click:function(i){t.testSend("REPLAY","SMS",t.itemList.REPLAY.SMS.noticeTaskId)}}},[t._v("测试发送")])],1)]),t._v(" "),s("div",{staticClass:"item message clearfix"},[s("div",{staticClass:"img wechat"}),t._v(" "),s("div",{staticClass:"txt"},[s("com-tpl",{attrs:{isString:!0,type:"WECHAT",tpl:t.itemList.REPLAY.WECHAT.templateId,tag:t.tplData.tag,webinarName:t.tplData.webinarName,hostName:t.tplData.hostName,date:t.tplData.date,link:t.tplData.link,secondCount:t.tplData.secondCount,firstCount:t.tplData.firstCount,triggerType:"REPLAY"}}),t._v(" "),s("em",[t._v(t._s(t.itemList.REPLAY.WECHAT.status))])],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("el-switch",{attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(i){t.itemSwitch(i,"REPLAY","WECHAT",t.itemList.REPLAY.WECHAT.noticeTaskId,t.itemList.REPLAY.WECHAT.templateId)}},model:{value:t.itemList.REPLAY.WECHAT.switch,callback:function(i){t.$set(t.itemList.REPLAY.WECHAT,"switch",i)},expression:"itemList['REPLAY']['WECHAT']['switch']"}}),t._v(" "),s("el-button",{attrs:{type:"small default-button",disabled:!t.itemList.REPLAY.WECHAT.switch},on:{click:function(i){t.testSend("REPLAY","WECHAT",t.itemList.REPLAY.WECHAT.noticeTaskId)}}},[t._v("测试发送")])],1)])])])])])]),t._v(" "),t.testModal?s("com-test",{attrs:{imgUrl:t.qrImgurl,type:t.testType,isAuto:!0,noticeId:t.noticeTaskId},on:{closeTest:function(i){t.closeTest()}}}):t._e()],1)};e._withStripped=!0;var a=s(662),n=s(663),c=s(489),l=s(486),o={data:function(){return{activityId:this.$route.params.id,isOpen:!1,limit:"NONE",testModal:!1,titleValue:"",firstSel:!1,secondSel:!1,PC_HOST:"//test-zhike.vhall.com/webinar/",hourOptions:[{value:1,label:"开播前1小时"},{value:2,label:"开播前2小时"},{value:6,label:"开播前6小时"},{value:12,label:"开播前12小时"},{value:24,label:"开播前24小时"}],hourValue:0,selhourValue:0,minOptions:[{value:5,label:"开播前5分钟"},{value:15,label:"开播前15分钟"},{value:30,label:"开播前30分钟"},{value:45,label:"开播前45分钟"}],minValue:0,selminValue:0,renderData:{BEFORE_ORDER:[],BEFORE_APPLY:[],BEFORE_HOUR:[],BEFORE_MINUTE:[],SUBSCRIBE:[],REPLAY:[]},delData:{},tplData:{type:"wx",tag:"",webinarName:"",hostName:"",date:"",subscribeDate:"",triggerType:""},testWechat:!1,testMsg:!1,testType:"",qrImgurl:"",noticeTaskId:"",itemList:{BEFORE_ORDER:{SMS:{switch:!1,noticeTaskId:0,templateId:1,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:1,status:"未启用"}},BEFORE_APPLY:{SMS:{switch:!1,noticeTaskId:0,templateId:2,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:2,status:"未启用"}},BEFORE_HOUR:{SMS:{switch:!1,noticeTaskId:0,templateId:3,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:3,status:"未启用"}},BEFORE_MINUTE:{SMS:{switch:!1,noticeTaskId:0,templateId:3,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:3,status:"未启用"}},SUBSCRIBE:{SMS:{switch:!1,noticeTaskId:0,templateId:4,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:4,status:"未启用"}},REPLAY:{SMS:{switch:!1,noticeTaskId:0,templateId:5,status:"未启用"},WECHAT:{switch:!1,noticeTaskId:0,templateId:5,status:"未启用"}}}}},created:function(){this.getParams(),this.getList(),this.findCountdown(),this.getSwitchinfo()},methods:{closeModal:function(t){"modal-cover"===t.target.className&&(this.testModal=!1)},getParams:function(){var t=this;this.$get(c.a.GET_AUTO_PARAMS,{activityId:this.activityId}).then(function(i){t.hourValue=i.data.firstCount,t.selhourValue=i.data.firstCount,t.minValue=i.data.secondCount,t.selminValue=i.data.secondCount,t.limit=i.data.webinarLimit,t.tplData.tag=i.data.tag,t.tplData.webinarName=i.data.webinarName,t.tplData.date=i.data.date,t.tplData.hostName=i.data.hostName,t.tplData.firstCount=1*i.data.firstCount,t.tplData.secondCount=1*i.data.secondCount,t.tplData.link="https:"+t.PC_HOST+"subscribe/"+t.activityId})},getList:function(){var t=this;this.$get(c.a.GET_AUTO_LIST,{activityId:this.activityId}).then(function(i){i.data.forEach(function(i){switch(i.triggerType){case"BEFORE_ORDER":if(t.renderData.BEFORE_ORDER.push(i),"SMS"===i.type){t.itemList.BEFORE_ORDER.SMS.switch=!0,t.itemList.BEFORE_ORDER.SMS.noticeTaskId=i.noticeTaskId;var s=t.getStatus(i.status);t.itemList.BEFORE_ORDER.SMS.status=s}if("WECHAT"===i.type){t.itemList.BEFORE_ORDER.WECHAT.switch=!0,t.itemList.BEFORE_ORDER.WECHAT.noticeTaskId=i.noticeTaskId;var e=t.getStatus(i.status);t.itemList.BEFORE_ORDER.WECHAT.status=e}break;case"BEFORE_APPLY":if(t.renderData.BEFORE_APPLY.push(i),"SMS"===i.type){t.itemList.BEFORE_APPLY.SMS.switch=!0,t.itemList.BEFORE_APPLY.SMS.noticeTaskId=i.noticeTaskId;var a=t.getStatus(i.status);t.itemList.BEFORE_APPLY.SMS.status=a}if("WECHAT"===i.type){t.itemList.BEFORE_APPLY.WECHAT.switch=!0,t.itemList.BEFORE_APPLY.WECHAT.noticeTaskId=i.noticeTaskId;var n=t.getStatus(i.status);t.itemList.BEFORE_APPLY.SMS.status=n}break;case"BEFORE_HOUR":if(t.renderData.BEFORE_HOUR.push(i),"SMS"===i.type){t.itemList.BEFORE_HOUR.SMS.switch=!0,t.itemList.BEFORE_HOUR.SMS.noticeTaskId=i.noticeTaskId;var c=t.getStatus(i.status);t.itemList.BEFORE_HOUR.SMS.status=c}if("WECHAT"===i.type){t.itemList.BEFORE_HOUR.WECHAT.switch=!0,t.itemList.BEFORE_HOUR.WECHAT.noticeTaskId=i.noticeTaskId;var l=t.getStatus(i.status);t.itemList.BEFORE_HOUR.WECHAT.status=l}break;case"BEFORE_MINUTE":if(t.renderData.BEFORE_MINUTE.push(i),"SMS"===i.type){t.itemList.BEFORE_MINUTE.SMS.switch=!0,t.itemList.BEFORE_MINUTE.SMS.noticeTaskId=i.noticeTaskId;var o=t.getStatus(i.status);t.itemList.BEFORE_MINUTE.SMS.status=o}if("WECHAT"===i.type){t.itemList.BEFORE_MINUTE.WECHAT.switch=!0,t.itemList.BEFORE_MINUTE.WECHAT.noticeTaskId=i.noticeTaskId;var E=t.getStatus(i.status);t.itemList.BEFORE_MINUTE.WECHAT.status=E}break;case"SUBSCRIBE":if(t.renderData.SUBSCRIBE.push(i),"SMS"===i.type){t.itemList.SUBSCRIBE.SMS.switch=!0,t.itemList.SUBSCRIBE.SMS.noticeTaskId=i.noticeTaskId;var d=t.getStatus(i.status);t.itemList.SUBSCRIBE.SMS.status=d}if("WECHAT"===i.type){t.itemList.SUBSCRIBE.WECHAT.switch=!0,t.itemList.SUBSCRIBE.WECHAT.noticeTaskId=i.noticeTaskId;var m=t.getStatus(i.status);t.itemList.SUBSCRIBE.WECHAT.status=m}break;case"REPLAY":if(t.renderData.REPLAY.push(i),"SMS"===i.type){t.itemList.REPLAY.SMS.switch=!0,t.itemList.REPLAY.SMS.noticeTaskId=i.noticeTaskId;var u=t.getStatus(i.status);t.itemList.REPLAY.SMS.status=u}if("WECHAT"===i.type){t.itemList.REPLAY.WECHAT.switch=!0,t.itemList.REPLAY.WECHAT.noticeTaskId=i.noticeTaskId;var r=t.getStatus(i.status);t.itemList.REPLAY.WECHAT.status=r}}})})},getStatus:function(t){var i="";switch(t){case"AWAIT":i="等待发送";break;case"EXEC":i="自动执行中";break;case"OVERDUE":i="已过期";break;case"COMPLETE":i="成功发送";break;default:i="未启用"}return i},findCountdown:function(){var t=this;this.$get(c.a.GET_AUTO_CONFIG,{activityId:this.activityId}).then(function(i){t.hourValue=i.data.prehour,t.minValue=i.data.preminute})},saveCountdown:function(t){var i=this;this.firstSel=!1,this.secondSel=!1;var s={activityId:this.activityId,prehour:this.selhourValue,preminute:this.selminValue};this.$config({handlers:!0}).$get(c.a.POST_AUTO_SAVE_CONFIG,s).then(function(s){i.$toast({content:"设置成功",position:"center"}),"hour"===t?(i.hourValue=i.selhourValue,i.tplData.firstCount=i.selhourValue):(i.minValue=i.selminValue,i.tplData.secondCount=i.selminValue)}).catch(function(t){65902===t.code&&i.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"})})},resetCountDown:function(t){"hour"===t?(this.firstSel=!1,this.selhourValue=this.hourValue):(this.secondSel=!1,this.selminValue=this.minValue)},openSwitch:function(t){var i=this,s={activityId:this.activityId,submodule:"EXPAND_NOTICE",enabled:t?"Y":"N"};this.$config({handlers:!0}).$post(l.a.POST_DETAIL_SWITCH,s).then(function(t){i.$toast({content:"设置成功"})}).catch(function(s){console.log(s),60706===s.code&&(i.isOpen=!t,i.$messageBox({header:"提示",content:s.msg,autoClose:10,confirmText:"知道了"}))})},getSwitchinfo:function(){var t=this;this.$get(l.a.GET_QUERY_SWITCH,{activityId:this.activityId}).then(function(i){t.isOpen="Y"===i.data.EXPAND_NOTICE})},deleteTask:function(t,i,s,e){var a=this;this.$config({handlers:!0}).$post(c.a.POST_DELETE_AUTO_TASK,{noticeTaskId:t}).then(function(e){a.renderData[i].forEach(function(s,e){s.noticeTaskId===t&&a.renderData[i].splice(e,1)}),a.$toast({content:"设置成功",position:"center"}),a.itemList[i][s].switch=!1}).catch(function(t){65902===t.code&&(a.$messageBox({header:"提示",content:t.msg,autoClose:10,confirmText:"知道了"}),a.itemList[i][s].switch=!e)})},addTask:function(t,i,s,e){var a=this,n={activityId:this.activityId,templateId:s,triggerType:t,type:i};this.$config({handlers:!0}).$post(c.a.POST_AUTO_SAVE_TASK,n).then(function(s){a.$toast({content:"设置成功",position:"center"}),a.itemList[t][i].noticeTaskId=s.data.noticeTaskId,a.itemList[t][i].switch=!0}).catch(function(s){65902===s.code&&(a.$messageBox({header:"提示",content:s.msg,autoClose:10,confirmText:"知道了"}),a.itemList[t][i].switch=!e)})},testSend:function(t,i,s){var e=this;this.qrImgurl="http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("http://"+window.location.host+"/api/expand/notice/test-send-qr?noticeTaskId="+s),this.$nextTick(function(){e.testType=i,e.noticeTaskId=s.toString(),e.testModal=!0})},itemSwitch:function(t,i,s,e,a){console.log(t),t?this.addTask(i,s,a,t):this.deleteTask(e,i,s,t),console.log(i),console.log(s)},closeTest:function(){this.testModal=!1}},components:{comTpl:a.a,comTest:n.a}},E=(s(840),s(842),s(844),s(2)),d=Object(E.a)(o,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title clearfix"},[i("p",{staticClass:"block-tips"},[this._v("欢迎消息")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title clearfix"},[i("p",{staticClass:"block-tips"},[this._v("欢迎消息")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title clearfix"},[i("p",{staticClass:"block-tips"},[this._v("回放设置成功消息 "),i("span",[this._v("针对未参加活动的用户发送回放消息")])])])}],!1,null,"2e4acfe5",null);d.options.__file="src/pages/live-mager/promote/automation/index.vue";i.default=d.exports},590:function(t,i,s){},591:function(t,i,s){},592:function(t,i,s){},840:function(t,i,s){"use strict";var e=s(590);s.n(e).a},842:function(t,i,s){"use strict";var e=s(591);s.n(e).a},844:function(t,i,s){"use strict";var e=s(592);s.n(e).a}}]);
//# sourceMappingURL=32.13296167.js.map
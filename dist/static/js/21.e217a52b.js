(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{463:function(t,s,i){"use strict";i.r(s);var a=i(22),e=i.n(a),c=i(59),n=i(714),o=i(514),l={name:"process-card",data:function(){return{activityId:this.$route.params.id,img:"",idx:"",title:"",part:"",checked:!1,showMore:!1,showSwitch:!0}},created:function(){this.idx=this.propIdx,this.title=this.propTitle,this.checked=this.propChecked,this.part=this.propPart,this.img=this.propImg,this.showSwitch=this.propSwitch},props:{propLink:{type:String,default:""},propTitle:{type:String,default:"默认标题"},propDesc:{type:String,default:""},propImg:{type:String,default:"../img/asd.png"},propChecked:{type:Boolean,default:!1},propPart:{type:String,default:""},propIdx:{type:Number,default:0},propSwitch:{type:Boolean,default:!0}},methods:{change:function(){this.$emit("update:checked",{idx:this.idx,part:this.part,type:this.checked,title:this.title})}},watch:{}},r=(i(783),i(1)),d=Object(r.a)(l,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item"},[i("router-link",{attrs:{to:""+(t.propLink+t.activityId)}},[i("div",{staticClass:"card"},[i("div",{staticClass:"pic"}),t._v(" "),i("div",{staticClass:"desc"},[i("span",[t._v(t._s(t.propTitle))]),t._v(" "),i("span",{staticClass:"des"},[t._v(t._s(t.propDesc))])])]),t._v(" "),i("div",{staticClass:"btm"},[i("el-switch",{directives:[{name:"show",rawName:"v-show",value:t.showSwitch,expression:"showSwitch"}],staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021",title:t.title},on:{change:t.change},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}})],1)])],1)},[],!1,null,"e4eb876e",null);d.options.__file="process-card.vue";var v=d.exports,h={name:"com-countdown",data:function(){return{showTime:{day:0,hour:0,minute:0,second:0},timer:null}},props:{endTime:{type:String,default:""},endText:{type:String,default:"已结束"}},mounted:function(){this.countDown(this.endTime)},watch:{endTime:function(t){console.log(t),this.countDown(t)}},methods:{fomatDate:function(t){this.showTime.day=t/3600/24>>0,this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),0===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown:function(t){var s=this;this.timer=setInterval(function(i){s.fomatDate(t--),t<0&&clearInterval(s.timer)},1e3)}},destroyed:function(){clearInterval(this.timer)}},u=Object(r.a)(h,function(){var t=this,s=t.$createElement;return(t._self._c||s)("span",[this.$scopedSlots.slot1?t._e():[t._v(t._s(t.showTime.day)+"天"+t._s(t.showTime.hour)+"小时"+t._s(t.showTime.minute)+"分钟"+t._s(t.showTime.second)+"秒")],t._v(" "),t._t("slot1",null,{day:t.showTime.day,hour:t.showTime.hour,minute:t.showTime.minute,second:t.showTime.second})],2)},[],!1,null,null,null);u.options.__file="com-countDown.vue";var p={data:function(){return{title:"",id:"",poster:"",tagList:[],startTime:"",statusClass:"",status:"",currStep:"",cardData:{},msgShow:!1,isPublished:!1,hostOnline:!1,showLinkBox:!1,showQrcodeBox:!1,activityId:this.$route.params.id,imgHost:"//static.vhallyun.com/",PC_HOST:"//zhike.vhall.com/webinar/",countdownTime:"",countDownstatus:!1,inCountdown:!1,isAppoint:!1,overdue:!1,redBagTips:!1,browserHelpShow:!1,dataPrepare:[],dataBrand:[],dataPromote:[],dataRecord:[]}},created:function(){c.a.$emit("breads",[{title:"活动管理"},{title:"活动列表",url:"/liveMager/list"},{title:"活动详情"}])},mounted:function(){this.getDetails(),this.detailLoad()},methods:{downloadQrIamge:function(t,s){Object(n.a)(t,s)},detailLoad:function(){this.$nextTick(function(){setTimeout(function(){if(document.querySelector(".main-container").scrollTop=0,window.location.href.search("tg")>-1)var t=setInterval(function(){document.querySelector(".main-container").scrollTop=document.querySelector(".main-container").scrollTop+50,document.querySelector(".main-container").scrollTop>=1150&&clearInterval(t)},20)},500)})},linkTo:function(t,s,i){var a=this;if(console.log(t.target.className),t.target.className.search("switch")>-1){if("直播"===this.status)return!1;!i&&t.target.className.search("input")>-1&&("/data/viewer/"===s?this.$router.push("/data/viewerList/"+this.activityId+"?type=all"):setTimeout(function(){a.$router.push(s+a.activityId)},500))}else"/data/viewer/"===s?this.$router.push("/data/viewerList/"+this.activityId+"?type=all"):this.$router.push(s+this.activityId)},turnOn:function(){var t=this,s=new XMLHttpRequest,i="/api"+o.a.GET_HOSTING+"?activityId="+this.activityId;s.onreadystatechange=function(){if(4===s.readyState){var i=s.responseText,a=JSON.parse(i);if(200===a.code){if(t.hostOnline=a.data.hostOnline,t.hostOnline)return t.$toast({content:"暂不支持这种方式发起直播"}),!1;if(t.isToday(t.startTime))return t.inCountdown=!0,!1;t.judgePublish()}}},s.open("GET",i,!1),s.withCredentials=!0,s.send(null)},isToday:function(t){return new Date(t).toDateString()===(new Date).toDateString()?(console.log("当天"),!1):(console.log("非当天"),!0)},getBrowserInfo:function(){var t={},s=navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version).*?([\d.]+)/);return t.browser=s[1].replace(/version/,"'safari"),t.ver=s[2],t},downChrome:function(t){this.browserHelpShow=!1,window.open(t)},judgePublish:function(){var t=this;this.isPublished?(this.inCountdown=!1,"chrome"!==this.getBrowserInfo().browser?this.browserHelpShow=!0:window.open("_blank").location=this.PC_HOST+"master/"+this.activityId):(this.inCountdown=!1,this.$messageBox({header:"提示",width:"450px",content:"进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？",cancelText:"暂不开播",confirmText:"确认开播",handleClick:function(s){console.log(s),"cancel"===s.action||"confirm"===s.action&&(t.publish(),window.open(t.PC_HOST+"master/"+t.activityId))}}))},inCountdownClick:function(t){console.log(t),"cancel"===t.action?this.inCountdown=!1:"confirm"===t.action&&(this.inCountdown=!0,this.judgePublish())},isHosting:function(){return new e.a(function(t,s){})},closeSite:function(t,s,i){var a=this;this.$messageBox({header:"提示",width:"200",content:"活动官网已经发布，请确认是否关闭？",cancelText:"暂不关闭",confirmText:"确认关闭",handleClick:function(i){console.log(i),"cancel"===i.action?a[s].forEach(function(s){s.submodule===t&&(s.switch=!status)}):"confirm"===i.action&&a.$config({handlers:!0}).$post(o.a.POST_DETAIL_SWITCH,{activityId:a.activityId,submodule:t,enabled:"N"}).then(function(t){console.log(t),t.code}).catch(function(i){60706!==i.code&&60701!==i.code||(console.log(t+" "+status),a.$messageBox({width:"450px",header:"提示",content:i.msg,autoClose:10,confirmText:"知道了"}),a[s].forEach(function(s){s.submodule===t&&(s.switch=!status)}))})}})},switchChange:function(t,s,i,a,e){var c=this;if(this.overdue)return this.$messageBox({header:"提示",autoClose:10,confirmText:"知道了",content:"活动已过期，无法对活动进行编辑"}),this[i][e].switch=!s,!1;var n={activityId:this.activityId,submodule:t,enabled:s?"Y":"N"};if("TEMPLATE"===t&&!s&&this.isPublished)return this.closeSite(t,i,a),!1;this.$config({handlers:!0}).$post(o.a.POST_DETAIL_SWITCH,n).then(function(t){console.log(t)}).catch(function(a){60706!==a.code&&60701!==a.code||(console.log(t+" "+s),c.$messageBox({width:"450px",header:"提示",content:a.msg,autoClose:10,confirmText:"知道了"}),c[i].forEach(function(i){i.submodule===t&&(i.switch=!s)}))})},getDetails:function(){var t=this;this.$get(o.a.GET_DETAILS,{activityId:this.activityId}).then(function(s){switch(s.data.activity.countDown.toString()>0?(t.countDownstatus=!1,t.countdownTime=s.data.activity.countDown.toString()):(t.countDownstatus=!0,t.countdownTime="0"),t.title=s.data.activity.title,t.tagList=s.data.activity.tags,t.startTime=s.data.activity.startTime,t.poster=s.data.activity.imgUrl,t.dataPrepare=s.data.prepare,t.dataBrand=s.data.brand,t.dataPromote=s.data.promote,t.dataRecord=s.data.record,t.isPublished="Y"===s.data.activity.published,t.isAppoint="APPOINT"===s.data.activity.viewCondition,t.staticTime=s.data.data.time?s.data.data.time:"统计中...",t.staticViewer=s.data.data.viewer,t.overdue="N"===s.data.activity.validStatus,s.data.activity.status){case"LIVING":t.status="直播",t.statusClass="live";break;case"PLAYBACK":t.status="回放",t.statusClass="record";break;case"FINISH":t.status="结束",t.statusClass="ended";break;case"PREPARE":t.status="预告",t.statusClass="preview"}t.getStep()})},publishActive:function(){var t=this;this.$messageBox({header:"提示",content:"活动发布后，活动官网、直播观看页和所有的营销工具页都将同时正式发布",cancelText:"暂不发布",confirmText:"确认发布",handleClick:function(s){console.log(s),"cancel"===s.action?t.isPublished=!1:"confirm"===s.action&&t.publish()}})},offlineActive:function(){var t=this;if("直播"===this.status)return this.$toast({content:"直播中无法下线活动"}),this.isPublished=!0,!1;this.$messageBox({header:"提示",content:"活动下线后，活动官网、直播观看页和所有的营销工具页都将同时下线",cancelText:"暂不下线",confirmText:"确认下线",handleClick:function(s){console.log(s),"cancel"===s.action?t.isPublished=!0:"confirm"===s.action&&t.offline()}})},switchActive:function(t){t?this.publishActive():this.offlineActive()},publish:function(){var t=this;this.$config().$post(o.a.POST_PUBLISH_ACTIVITE,{activityId:this.activityId}).then(function(s){t.$toast({content:"活动发布成功"}),t.isPublished=!0,t.dataPromote[0].desc="PREPARE",t.currStep="isPublish"})},offline:function(){var t=this;this.$config().$post(o.a.POST_OFFLINE_ACTIVITE,{activityId:this.activityId}).then(function(s){t.$toast({content:"活动下线成功"}),t.isPublished=!1,-1===t.currStep.search("live")&&(t.currStep="notPublish")})},getStep:function(){switch(this.status){case"预告":this.isPublished?(this.currStep="isPublish",console.log("发布页面后，直播未开始")):(this.currStep="notPublish",console.log("活动未发布"));break;case"直播":this.currStep="isPublish live",console.log("直播中");break;case"结束":this.currStep="isPublish live end",console.log("直播结束，但未设置回放");break;case"回放":this.currStep="isPublish live end playback",console.log("直播结束，已设置回放")}},copy:function(t){document.getElementById(t).select(),document.execCommand("Copy"),this.$toast({content:"复制成功"})},timeOut:function(){console.log("倒计时结束"),this.countDownstatus=!0}},components:{processCard:v,comCountdown:u.exports}},_=(i(784),Object(r.a)(p,function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.dataPrepare[0]?a("div",{staticClass:"detail-wrap"},[a("div",{staticClass:"desc clearfix"},[a("div",{staticClass:"left"},[a("span",{staticClass:"status",class:t.statusClass},[t._v(t._s(t.status))]),t._v(" "),t.poster?a("div",{staticClass:"poster has-poster",style:{backgroundImage:"url("+t.imgHost+t.poster+")"}}):a("div",{staticClass:"poster default-poster"})]),t._v(" "),a("div",{staticClass:"middle"},[a("p",{staticClass:"title"},[t._v(t._s(t.title)+" "),a("span",{staticClass:"id-tag"},[t._v("ID:"+t._s(t.activityId)+" "),a("i",{on:{click:function(s){t.copy("copyId")}}})])]),t._v(" "),a("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{type:"text",id:"copyId"},domProps:{value:""+this.activityId}}),t._v(" "),a("p",{staticClass:"desc-label"},[t._v("活动标签 : "),t._l(t.tagList,function(s){return a("span",{staticClass:"tag"},[t._v(t._s(s.name))])})],2),t._v(" "),a("p",{staticClass:"desc-label"},[t._v("开播时间 : "+t._s(t.startTime)+" "),t.overdue?a("em",{staticClass:"overdue-tag"},[t._v("已过期")]):t._e()]),t._v(" "),a("p",{staticClass:"desc-label tool"},[t._v("活动状态 :\n        "),a("el-switch",{staticClass:"switch",attrs:{"active-text":t.isPublished?"已发布":"未发布","inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:t.switchActive},model:{value:t.isPublished,callback:function(s){t.isPublished=s},expression:"isPublished"}}),t._v(" "),t.isPublished?a("span",{staticClass:"link-box",on:{mouseover:function(s){t.showLinkBox=!0},mouseout:function(s){t.showLinkBox=!1}}},[a("i"),t._v("复制链接\n          "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.showLinkBox,expression:"showLinkBox"}]},[a("li",{class:{isSwitch:!t.dataBrand[0].switch}},[t._v("活动官网\n              "),t.dataBrand[0].switch?a("router-link",{attrs:{to:this.PC_HOST+"site/"+t.activityId,target:"_blank"}},[a("el-button",{attrs:{size:"mini",round:""}},[t._v("查看")])],1):a("router-link",{attrs:{to:"/liveMager/site/"+t.activityId}},[a("el-button",{attrs:{size:"mini",round:""}},[t._v("开启")])],1),t._v(" "),t.dataBrand[0].switch?a("el-button",{attrs:{size:"mini",round:""},on:{click:function(s){t.copy("copyContent2")}}},[t._v("复制链接")]):t._e(),t._v(" "),a("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{type:"text",id:"copyContent2"},domProps:{value:"https:"+this.PC_HOST+"site/"+t.activityId}})],1),t._v(" "),a("li",[t._v("活动引导页 "),a("router-link",{attrs:{to:this.PC_HOST+"subscribe/"+t.activityId,target:"_blank"}},[a("el-button",{attrs:{size:"mini",round:""}},[t._v("查看")])],1),t._v(" "),a("el-button",{attrs:{size:"mini",round:""},on:{click:function(s){t.copy("copyContent")}}},[t._v("复制链接")]),t._v(" "),a("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{type:"text",id:"copyContent"},domProps:{value:"https:"+this.PC_HOST+"subscribe/"+this.activityId}})],1)]),t._v(" "),a("i",{staticClass:"bar left"}),t._v(" "),a("i",{staticClass:"bar"})]):t._e(),t._v(" "),t.isPublished?a("span",{staticClass:"link-box qrcode-box",on:{mouseover:function(s){t.showQrcodeBox=!0},mouseout:function(s){t.showQrcodeBox=!1}}},[a("i"),t._v("扫码观看\n          "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.showQrcodeBox,expression:"showQrcodeBox"}]},[t.dataBrand[0].switch?a("li",{staticClass:"fis"},[a("p",[t._v("活动官网")]),t._v(" "),a("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("https:"+this.PC_HOST+"site/"+t.activityId)}}),t._v(" "),a("span",[t._v("手机扫描二维码")]),t._v(" "),a("a",{on:{click:function(s){t.downloadQrIamge("http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("https:"+t.PC_HOST+"site/"+t.activityId),"活动官网")}}},[t._v("下载二维码")])]):t._e(),t._v(" "),a("li",{staticClass:"sub"},[a("p",[t._v("活动引导页")]),t._v(" "),a("img",{attrs:{src:"http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("https:"+this.PC_HOST+"subscribe/"+this.activityId)}}),t._v(" "),a("span",[t._v("手机扫描二维码")]),t._v(" "),a("a",{on:{click:function(s){t.downloadQrIamge("http://aliqr.e.vhall.com/qr.png?t="+encodeURIComponent("https:"+t.PC_HOST+"subscribe/"+t.activityId),"引导页")}}},[t._v("下载二维码")])])])]):t._e()],1)]),t._v(" "),a("div",{staticClass:"right"},[t.countDownstatus?"直播"===t.status?a("p",{staticClass:"title"},[t._v("直播已开始")]):"预告"===t.status&&t.countDownstatus?a("p",{staticClass:"title"},[t._v("直播即将开始")]):"结束"===t.status?a("p",{staticClass:"title"},[t._v("直播已结束")]):t._e():a("p",{staticClass:"title"},[t._v("距离直播开始还有")]),t._v(" "),a("div",{staticClass:"count-box",style:{height:t.countDownstatus?"0px":"auto"}},[a("com-countdown",{attrs:{endTime:t.countdownTime},on:{"update:endTime":function(s){t.countdownTime=s},timeOut:t.timeOut},scopedSlots:t._u([{key:"slot1",fn:function(s){return a("ol",{staticClass:"clearfix"},[a("li",[t._v(t._s(s.day)),a("span",[t._v("天")])]),t._v(" "),a("li",[t._v(t._s(s.hour)),a("span",[t._v("时")])]),t._v(" "),a("li",[t._v(t._s(s.minute)),a("span",[t._v("分")])]),t._v(" "),a("li",[t._v(t._s(s.second)),a("span",[t._v("秒")])])])}}])})],1),t._v(" "),a("el-button",{staticClass:"primary-button",attrs:{disabled:t.overdue},on:{click:t.turnOn}},[t._v("正式直播\n      ")])],1)]),t._v(" "),a("div",{staticClass:"block process clearfix"},[a("div",{staticClass:"top clearfix"},[a("ul",[a("li",{staticClass:"step highlight",class:{active:"notPublish"===this.currStep}},[t._m(0)]),t._v(" "),a("li",{staticClass:"step brand",class:{highlight:this.currStep.search("isPublish")>-1,active:"isPublish"===this.currStep}},[t._m(1)]),t._v(" "),a("li",{staticClass:"step prompt",class:{highlight:this.currStep.search("isPublish")>-1,active:"isPublish"===this.currStep}},[t._m(2)]),t._v(" "),a("li",{staticClass:"step live ",class:{highlight:this.currStep.search("live")>-1,active:"isPublish live"===this.currStep}},[t._m(3)]),t._v(" "),a("li",{staticClass:"step record",class:{highlight:this.currStep.search("playback")>-1,active:"isPublish live end playback"===this.currStep}},[t._m(4)]),t._v(" "),a("li",{staticClass:"step statics",class:{highlight:this.currStep.search("end")>-1,active:"isPublish live end"===this.currStep}},[t._m(5)])])]),t._v(" "),a("div",{staticClass:"bottom clearfix"},[a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[0].switch,expression:"dataPrepare[0].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/edit/")}}},[t._v("基本信息\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[1].switch,expression:"dataPrepare[1].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/prepare/limit-apply/",t.dataPrepare[1].switch)}}},[t._v("活动报名\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[2].switch,expression:"dataPrepare[2].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/warmField/",t.dataPrepare[2].switch)}}},[t._v("\n            暖场设置\n          ")])])]),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[0].switch,expression:"dataBrand[0].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/site/",t.dataBrand[0].switch)}}},[t._v("活动官网\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[1].switch,expression:"dataBrand[1].switch"}],on:{click:function(s){t.linkTo(s,"/setLiveGuided/")}}},[t._v("直播引导页\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[2].switch,expression:"dataBrand[2].switch"}],on:{click:function(s){t.linkTo(s,"/setLiveWatch/")}}},[t._v("观看页\n          ")])])]),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[0].switch,expression:"dataPromote[0].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/promote/auto/preview/",t.dataPromote[0].switch)}}},[t._v("自动化通知\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[1].switch,expression:"dataPromote[1].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/email/")}}},[t._v("邮件邀约\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[2].switch,expression:"dataPromote[2].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/promote/msg/list/")}}},[t._v("短信通知\n          ")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[3].switch,expression:"dataPromote[3].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/promote/wechat/list/")}}},[t._v("微信通知\n          ")])])]),t._v(" "),a("div",[a("ol",[a("li",{on:{click:function(s){t.linkTo(s,"/salesTools/questionnaire/list/")}}},[t._v("问卷")]),t._v(" "),a("li",{on:{click:function(s){t.redBagTips=!0}}},[t._v("红包雨")]),t._v(" "),a("li",{on:{click:function(s){t.linkTo(s,"/salesTools/recommendGoodsList/")}}},[t._v("商品推荐")]),t._v(" "),a("li",{on:{click:function(s){t.linkTo(s,"/salesTools/recommendCards/")}}},[t._v("推荐卡片")])])]),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataRecord[0].switch,expression:"dataRecord[0].switch"}],on:{click:function(s){t.linkTo(s,"/liveMager/playBack/")}}},[t._v("活动回放\n          ")])])]),t._v(" "),a("div",["统计中..."==t.staticTime?[a("ol",{attrs:{title:"预告、直播中状态不能进入数据中心"}},[a("li",{class:"disabled",on:{click:function(s){t.linkTo(s,"/data/preview/")}}},[t._v("活动数据\n            ")]),t._v(" "),a("li",{class:"disabled"},[t._v("观众列表")])])]:[a("ol",[a("li",{on:{click:function(s){t.linkTo(s,"/data/preview/")}}},[t._v("活动数据")]),t._v(" "),a("li",{on:{click:function(s){t.linkTo(s,"/data/viewer/")}}},[t._v("观众列表")])])]],2)])]),t._v(" "),a("div",{staticClass:"fun-card"},[a("div",{staticClass:"item prepare"},[a("p",{staticClass:"block-separte"},[t._v("准备")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item base",on:{click:function(s){t.linkTo(s,"/liveMager/edit/")}}},[t._m(6),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item apply",on:{click:function(s){t.linkTo(s,"/liveMager/prepare/limit-apply/",t.dataPrepare[1].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动报名")]),t._v(" "),a("span",{staticClass:"des"},[!1===t.dataPrepare[1].isSet&&!1===t.dataPrepare[1].switch?[t._v("开启后收集目标观众信息\n                ")]:t._e(),t._v(" "),!1===t.dataPrepare[1].isSet&&!0===t.dataPrepare[1].switch?[t._v("\n                  暂未设置\n                ")]:t._e(),t._v(" "),!0===t.dataPrepare[1].isSet&&!0===t.dataPrepare[1].switch?[t._v("\n                  已设置活动报名\n                ")]:t._e(),t._v(" "),!0===t.dataPrepare[1].isSet&&!1===t.dataPrepare[1].switch?[t._v("\n                  已设置活动报名\n                ")]:t._e()],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("APPOINT",t.dataPrepare[1].switch,"dataPrepare","/liveMager/prepare/limit-apply/",1)}},model:{value:t.dataPrepare[1].switch,callback:function(s){t.$set(t.dataPrepare[1],"switch",s)},expression:"dataPrepare[1].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item wram",on:{click:function(s){t.linkTo(s,"/liveMager/warmField/",t.dataPrepare[2].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("暖场设置")]),t._v(" "),a("span",{staticClass:"des"},[!1===t.dataPrepare[2].isSet&&!1===t.dataPrepare[2].switch?[t._v("\n                  为活动设置暖场视频\n                ")]:t._e(),t._v(" "),!1===t.dataPrepare[2].isSet&&!0===t.dataPrepare[2].switch?[t._v("\n                  暂未设置\n                ")]:t._e(),t._v(" "),!0===t.dataPrepare[2].isSet&&!0===t.dataPrepare[2].switch?[t._v("\n                  "+t._s(t.dataPrepare[2].desc)+"\n                ")]:t._e(),t._v(" "),!0===t.dataPrepare[2].isSet&&!1===t.dataPrepare[2].switch?[t._v("\n                  "+t._s(t.dataPrepare[2].desc)+"\n                ")]:t._e()],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("WARMUP",t.dataPrepare[2].switch,"dataPrepare","/liveMager/warmField/",2)}},model:{value:t.dataPrepare[2].switch,callback:function(s){t.$set(t.dataPrepare[2],"switch",s)},expression:"dataPrepare[2].switch"}})],1)])])]),t._v(" "),a("div",{staticClass:"item promote"},[a("p",{staticClass:"block-separte"},[t._v("品牌")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item site",on:{click:function(s){t.linkTo(s,"/liveMager/site/",t.dataBrand[0].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动官网")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[0].switch?[[t._v(t._s(t.dataBrand[0].isSet?"已设置":"未设置")+"\n                  ")]]:[t._v("\n                  打造活动品牌聚合页面\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("TEMPLATE",t.dataBrand[0].switch,"dataBrand","/liveMager/site/",0)}},model:{value:t.dataBrand[0].switch,callback:function(s){t.$set(t.dataBrand[0],"switch",s)},expression:"dataBrand[0].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item guide",on:{click:function(s){t.linkTo(s,"/setLiveGuided/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("直播引导页")]),t._v(" "),a("span",{staticClass:"des"},[t.isPublished?[t._v("\n                  已发布\n                ")]:[t._v("\n                  "+t._s(t.dataBrand[1].isSet?"未发布":"最精简的活动品牌页")+"\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item watch",on:{click:function(s){t.linkTo(s,"/setLiveWatch/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("观看页")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v("\n                  "+t._s("N"===t.dataBrand[2].desc?"未发布":"已发布")+"\n                ")]:[t._v("\n                  订制直播观看页面\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item marketing",attrs:{id:"tg"}},[a("p",{staticClass:"block-separte"},[t._v("推广")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item automaze",on:{click:function(s){t.linkTo(s,"/liveMager/promote/auto/preview/",t.dataPromote[0].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("自动化通知")]),t._v(" "),a("span",{staticClass:"des"},[t.isPublished?[!1===t.dataPromote[0].switch?[t._v("已开启")]:t._e(),t._v(" "),!0===t.dataPromote[0].switch?["PREPARE"===t.dataPromote[0].desc?[t.isAppoint?[t._v("报名")]:[t._v("预告")]]:t._e(),t._v(" "),"LIVING"===t.dataPromote[0].desc?[t._v("直播中")]:t._e(),t._v(" "),"PLAYBACK"===t.dataPromote[0].desc?[t._v("回放")]:t._e()]:t._e(),t._v(" "),!1===t.dataPromote[0].switch?["NONE"===t.dataPromote[0].desc?[t._v("暂未设置")]:t._e(),t._v(" "),"PREPARE"===t.dataPromote[0].desc?[t.isAppoint?[t._v("报名")]:[t._v("预告")]]:t._e(),t._v(" "),"LIVING"===t.dataPromote[0].desc?[t._v("直播中")]:t._e(),t._v(" "),"PLAYBACK"===t.dataPromote[0].desc?[t._v("回放")]:t._e()]:t._e()]:[t._v("设置自动化活动通知提醒")]],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("EXPAND_NOTICE",t.dataPromote[0].switch,"dataPromote","/liveMager/promote/auto/preview/",0)}},model:{value:t.dataPromote[0].switch,callback:function(s){t.$set(t.dataPromote[0],"switch",s)},expression:"dataPromote[0].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item mail",on:{click:function(s){t.linkTo(s,"/liveMager/email/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("邮件邀约")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[1].isSet?[t._v("\n                  已设置邮件邀约\n                ")]:[t._v("\n                  通过邮件进行活动推广\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item message",on:{click:function(s){t.linkTo(s,"/liveMager/promote/msg/list/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("短信通知")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[2].isSet?[t._v("\n                  已设置短信通知\n                ")]:[t._v("\n                  通过短信进行活动推广\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item wechat",on:{click:function(s){t.linkTo(s,"/liveMager/promote/wechat/list/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("微信通知")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[3].isSet?[t._v("\n                  已设置微信通知\n                ")]:[t._v("\n                  通过微信进行活动推广\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item living"},[a("p",{staticClass:"block-separte"},[t._v("直播")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item ques",on:{click:function(s){t.linkTo(s,"/salesTools/questionnaire/list/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("问卷")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v("\n                  "+t._s("N"===t.dataBrand[2].desc?"未发布":"已发布")+"\n                ")]:[t._v("\n                  直播中收集观众问卷数据\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item redpack",on:{click:function(s){t.redBagTips=!0}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("红包雨")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v("\n                  "+t._s("N"===t.dataBrand[2].desc?"未发布":"已发布")+"\n                ")]:[t._v("\n                  发放现金红包活跃观众气氛\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item goods",on:{click:function(s){t.linkTo(s,"/salesTools/recommendGoodsList/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("商品推荐")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v("\n                  "+t._s("N"===t.dataBrand[2].desc?"未发布":"已发布")+"\n                ")]:[t._v("\n                  在直播中给观众推荐商品\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item cards",on:{click:function(s){t.linkTo(s,"/salesTools/recommendCards/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("推荐卡片")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v("\n                  "+t._s("N"===t.dataBrand[2].desc?"未发布":"已发布")+"\n                ")]:[t._v("\n                  创建直播中观众引流通道\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item setting"},[a("p",{staticClass:"block-separte"},[t._v("活动回放")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item record",on:{click:function(s){t.linkTo(s,"/liveMager/playBack/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动回放")]),t._v(" "),a("span",{staticClass:"des"},[t.dataRecord[0].isSet?[t._v("\n                  已设置默认活动回放\n                ")]:[t._v("\n                  设置活动后的回放视频\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item statics"},[a("p",{staticClass:"block-separte"},[t._v("数据")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item statics",class:{disabled:"统计中..."==t.staticTime},on:{click:function(s){t.linkTo(s,"/data/preview/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动数据")]),t._v(" "),a("span",{staticClass:"des"},["统计中..."==t.staticTime?[t._v("\n                  展示单次活动数据洞察\n                ")]:[t._v("\n                  "+t._s(t.staticTime)+"\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item aud",class:{disabled:"统计中..."==t.staticTime},on:{click:function(s){t.linkTo(s,"/data/viewer/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("观众列表")]),t._v(" "),a("span",{staticClass:"des"},["统计中..."==t.staticTime?[t._v("\n                  记录单次活动观众数据\n                ")]:[t._v("\n                  "+t._s(t.staticViewer)+" 位观众数据\n                ")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])])]),t._v(" "),a("message-box",{directives:[{name:"show",rawName:"v-show",value:t.inCountdown,expression:"inCountdown"}],staticClass:"in-countdown",attrs:{width:"300",header:"提示",cancelText:"放弃",confirmText:"仍然进入"},on:{handleClick:t.inCountdownClick}},[a("p",[t._v("当前时间与您预先设置的时间不一致，是否现在发起正式直播？")]),t._v(" "),a("p",[t._v("您设置的时间为:")]),t._v(" "),a("p",[t._v(t._s(t.startTime))])]),t._v(" "),t.redBagTips?a("message-box",{on:{handleClick:function(s){t.redBagTips=!1}}},[a("div",{staticClass:"red-bag-tip",attrs:{slot:"msgBox"},slot:"msgBox"},[a("div",{staticClass:"red-bag-header"}),t._v(" "),a("div",{staticClass:"red-bag-content"},[t._v("红包雨为活动发起者在直播中推送的功能，无需在控制台设置。通过红包雨功能，活动主办方可以通过设置红包数量和金额，并设置参与条件，向达成参与条件的观众发放红包。\n      ")]),t._v(" "),a("button",{staticClass:"primary-button",staticStyle:{padding:"0 60px",margin:"10px 0 30px 0"},attrs:{type:"button"},on:{click:function(s){t.redBagTips=!1}}},[t._v("知道了\n      ")])])]):t._e(),t._v(" "),t.browserHelpShow?a("message-box",{attrs:{type:"prompt",width:"500px",header:"微吼知客"},on:{handleClick:function(s){t.browserHelpShow=!1}}},[a("div",{staticClass:"browser-help"},[a("span",[t._v("不支持使用该浏览器发起直播")]),t._v(" "),a("img",{attrs:{src:i(711)}}),t._v(" "),a("span",{staticClass:"tip-info"},[t._v("为了您可以正常使用直播发起端功能，请使用"),a("a",{attrs:{title:"下载"},on:{click:function(s){t.downChrome("https://chrome.en.softonic.com/")}}},[t._v("Google Chrome")]),t._v("浏览器")])]),t._v(" "),a("div",{attrs:{slot:"bottom"},slot:"bottom"})]):t._e()],1):t._e()},[function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("准备")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("品牌")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("推广")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("直播")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("回放")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("数据")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"pic"}),this._v(" "),s("div",{staticClass:"desc"},[s("span",[this._v("基本信息")]),this._v(" "),s("span",{staticClass:"des"},[this._v("编辑活动基本信息")])])])}],!1,null,"18655146",null));_.options.__file="detail.vue";s.default=_.exports},597:function(t,s,i){},598:function(t,s,i){},783:function(t,s,i){"use strict";var a=i(597);i.n(a).a},784:function(t,s,i){"use strict";var a=i(598);i.n(a).a}}]);
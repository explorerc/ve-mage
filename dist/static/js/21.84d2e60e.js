(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{290:function(t,s,a){},291:function(t,s,a){},437:function(t,s,a){"use strict";var i=a(290);a.n(i).a},439:function(t,s,a){"use strict";var i=a(291);a.n(i).a},570:function(t,s,a){"use strict";a.r(s);var i=a(234),e={name:"process-card",data:function(){return{activityId:this.$route.params.id,img:"",idx:"",title:"",part:"",checked:!1,showMore:!1,showSwitch:!0}},created:function(){this.idx=this.propIdx,this.title=this.propTitle,this.checked=this.propChecked,this.part=this.propPart,this.img=this.propImg,this.showSwitch=this.propSwitch},props:{propLink:{type:String,default:""},propTitle:{type:String,default:"默认标题"},propDesc:{type:String,default:""},propImg:{type:String,default:"../img/asd.png"},propChecked:{type:Boolean,default:!1},propPart:{type:String,default:""},propIdx:{type:Number,default:0},propSwitch:{type:Boolean,default:!0}},methods:{change:function(){this.$emit("update:checked",{idx:this.idx,part:this.part,type:this.checked,title:this.title})}},watch:{}},c=(a(437),a(1)),o=Object(c.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item"},[a("router-link",{attrs:{to:""+(t.propLink+t.activityId)}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v(t._s(t.propTitle))]),t._v(" "),a("span",{staticClass:"des"},[t._v(t._s(t.propDesc))])])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{directives:[{name:"show",rawName:"v-show",value:t.showSwitch,expression:"showSwitch"}],staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021",title:t.title},on:{change:t.change},model:{value:t.checked,callback:function(s){t.checked=s},expression:"checked"}})],1)])],1)},[],!1,null,"e4eb876e",null);o.options.__file="process-card.vue";var n=o.exports,r=a(47),l={name:"com-countdown",data:function(){return{showTime:{day:0,hour:0,minute:0,second:0},timer:null}},props:{endTime:{type:String,default:""},endText:{type:String,default:"已结束"}},mounted:function(){this.countDown(this.endTime)},watch:{endTime:function(t){console.log(t),this.countDown(t)}},methods:{fomatDate:function(t){this.showTime.day=t/3600/24>>0,this.showTime.hour=((t/3600%24>>0)+"").padStart(2,0),this.showTime.minute=((t/60%60>>0)+"").padStart(2,0),this.showTime.second=((t%60>>0)+"").padStart(2,0),0===t&&(this.$emit("timeOut"),clearInterval(this.timer))},countDown:function(t){var s=this;this.timer=setInterval(function(a){s.fomatDate(t--),t<0&&clearInterval(s.timer)},1e3)}},destroyed:function(){clearInterval(this.timer)}},d=Object(c.a)(l,function(){var t=this,s=t.$createElement;return(t._self._c||s)("span",[this.$scopedSlots.slot1?t._e():[t._v(t._s(t.showTime.day)+"天"+t._s(t.showTime.hour)+"小时"+t._s(t.showTime.minute)+"分钟"+t._s(t.showTime.second)+"秒")],t._v(" "),t._t("slot1",null,{day:t.showTime.day,hour:t.showTime.hour,minute:t.showTime.minute,second:t.showTime.second})],2)},[],!1,null,null,null);d.options.__file="com-countDown.vue";var v=d.exports,h={data:function(){return{title:"",id:"",poster:"",tagList:[],startTime:"",statusClass:"",status:"",currStep:"",cardData:{},msgShow:!1,isPublished:!1,activityId:this.$route.params.id,imgHost:"//test-zhike.oss-cn-beijing.aliyuncs.com/",countdownTime:"",countDownstatus:!1,dataPrepare:[],dataBrand:[],dataPromote:[],dataRecord:[]}},created:function(){},mounted:function(){this.getDetails()},methods:{linkTo:function(t,s,a){var i=this;console.log(t.target.className),t.target.className.search("switch")>-1?!a&&t.target.className.search("input")>-1&&setTimeout(function(){i.$router.push(s+i.activityId)},500):this.$router.push(s+this.activityId)},turnOn:function(){var t=this;this.$messageBox({header:"提示",width:"200",content:"进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？",cancelText:"暂不开播",confirmText:"确认开播",handleClick:function(s){console.log(s),"cancel"===s.action||"confirm"===s.action&&t.$router.push({path:"/master/"+t.activityId})}})},switchChange:function(t,s){var a=this,e={activityId:this.activityId,submodule:t,enabled:s?"Y":"N"};this.$post(i.a.POST_DETAIL_SWITCH,e).then(function(t){console.log(t),200===t.code&&a.$toast({content:"设置成功"})})},getDetails:function(){var t=this;this.$config({loading:!0}).$get(i.a.GET_DETAILS,{activityId:this.activityId}).then(function(s){switch(s.data.activity.countDown.toString()>0?(t.countDownstatus=!1,t.countdownTime=s.data.activity.countDown.toString()):(t.countDownstatus=!0,t.countdownTime="0"),t.title=s.data.activity.title,t.tagList=s.data.activity.tags,t.startTime=s.data.activity.startTime,t.poster=s.data.activity.imgUrl,t.dataPrepare=s.data.prepare,t.dataBrand=s.data.brand,t.dataPromote=s.data.promote,t.dataRecord=s.data.record,t.isPublished="Y"===s.data.activity.published,s.data.activity.status){case"LIVING":t.status="直播",t.statusClass="live";break;case"PLAYBACK":t.status="回放",t.statusClass="record";break;case"FINISH":t.status="结束",t.statusClass="ended";break;case"PREPARE":t.status="预约",t.statusClass="preview"}t.getStep()})},publishActive:function(){var t=this;this.$messageBox({header:"提示",width:"200",content:"活动发布后，活动官网、直播观看页和所有的营销工具页都将同时正式发布",cancelText:"暂不发布",confirmText:"确认发布",handleClick:function(s){console.log(s),"cancel"===s.action||"confirm"===s.action&&t.publish()}})},offlineActive:function(){var t=this;this.$messageBox({header:"提示",width:"200",content:"活动下线后，活动官网、直播观看页和所有的营销工具页都将同时下线",cancelText:"暂不下线",confirmText:"确认下线",handleClick:function(s){console.log(s),"cancel"===s.action||"confirm"===s.action&&t.offline()}})},publish:function(){var t=this;this.$config().$post(i.a.POST_PUBLISH_ACTIVITE,{activityId:this.activityId}).then(function(s){t.$toast({content:"活动发布成功",position:"center"}),t.isPublished=!0,t.dataPromote[0].desc="PREPARE",t.currStep="isPublish"})},offline:function(){var t=this;this.$config().$post(i.a.POST_OFFLINE_ACTIVITE,{activityId:this.activityId}).then(function(s){t.$toast({content:"活动下线成功",position:"center"}),t.isPublished=!1,-1===t.currStep.search("live")&&(t.currStep="notPublish")})},getStep:function(){switch(this.status){case"预约":this.isPublished?(this.currStep="isPublish",console.log("发布页面后，直播未开始")):(this.currStep="notPublish",console.log("活动未发布"));break;case"直播":this.currStep="isPublish live",console.log("直播中");break;case"结束":this.currStep="isPublish live end",console.log("直播结束，但未设置回放");break;case"回放":this.currStep="isPublish live end playback",console.log("直播结束，已设置回放")}},copy:function(){document.getElementById("copyContent").select(),document.execCommand("Copy"),this.$toast({content:"复制成功",position:"center"})},timeOut:function(){console.log("倒计时结束"),this.countDownstatus=!0}},components:{processCard:n,messageBox:r.b,comCountdown:v}},_=(a(439),Object(c.a)(h,function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.dataPrepare[0]?a("div",{staticClass:"detail-wrap"},[a("div",{staticClass:"desc clearfix"},[a("div",{staticClass:"left"},[t.poster?a("img",{attrs:{src:""+(t.imgHost+t.poster)}}):a("img",{attrs:{src:"https://cnstatic01.e.vhall.com/static/img/v35-webinar.png"}}),t._v(" "),a("span",{staticClass:"status",class:t.statusClass},[t._v(t._s(t.status))])]),t._v(" "),a("div",{staticClass:"middle"},[a("p",{staticClass:"title"},[t._v(t._s(t.title)+" "),a("span",{staticClass:"id-tag"},[t._v("ID:"+t._s(t.activityId)+" "),a("i")])]),t._v(" "),a("p",{staticClass:"desc-label"},[t._v("活动标签: "),t._l(t.tagList,function(s){return a("span",{staticClass:"tag"},[t._v(t._s(s))])})],2),t._v(" "),a("p",{staticClass:"desc-label"},[t._v("开播时间: "+t._s(t.startTime))]),t._v(" "),a("ol",{staticClass:"clearfix"},[a("li",{staticClass:"icon page"},[a("i"),a("router-link",{attrs:{to:/site/+t.activityId}},[t._v("活动页面")])],1),t._v(" "),a("li",{staticClass:"icon link copy",on:{click:t.copy}},[a("i"),t._v("复制链接"),a("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{type:"text",id:"copyContent"},domProps:{value:"www.baidu.com/"+this.activityId}})]),t._v(" "),t.isPublished?a("li",{staticClass:"icon offline offline",on:{click:t.offlineActive}},[a("i"),t._v("下线活动")]):a("li",{staticClass:"icon offline offline",on:{click:t.publishActive}},[a("i"),t._v("发布活动")])])]),t._v(" "),a("div",{staticClass:"right"},[t.countDownstatus?"直播"===t.status?a("p",{staticClass:"title"},[t._v("直播已开始")]):"预约"===t.status&&t.countDownstatus?a("p",{staticClass:"title"},[t._v("直播即将开始")]):t._e():a("p",{staticClass:"title"},[t._v("距离直播开始还有")]),t._v(" "),a("div",{staticClass:"count-box"},[a("com-countdown",{attrs:{endTime:t.countdownTime},on:{"update:endTime":function(s){t.countdownTime=s}},scopedSlots:t._u([{key:"slot1",fn:function(s){return a("ol",{staticClass:"clearfix",on:{timeOut:t.timeOut}},[a("li",[t._v(t._s(s.day)),a("span",[t._v("天")])]),t._v(" "),a("li",[t._v(t._s(s.hour)),a("span",[t._v("时")])]),t._v(" "),a("li",[t._v(t._s(s.minute)),a("span",[t._v("分")])]),t._v(" "),a("li",[t._v(t._s(s.second)),a("span",[t._v("秒")])])])}}])})],1),t._v(" "),a("el-button",{staticClass:"primary-button",on:{click:t.turnOn}},[t._v("正式直播")])],1)]),t._v(" "),a("div",{staticClass:"block process clearfix"},[a("div",{staticClass:"top clearfix"},[a("ul",[a("li",{staticClass:"step highlight",class:{active:"notPublish"===this.currStep}},[t._m(0)]),t._v(" "),a("li",{staticClass:"step brand",class:{highlight:this.currStep.search("isPublish")>-1,active:"isPublish"===this.currStep}},[t._m(1)]),t._v(" "),a("li",{staticClass:"step prompt",class:{highlight:this.currStep.search("isPublish")>-1,active:"isPublish"===this.currStep}},[t._m(2)]),t._v(" "),a("li",{staticClass:"step live ",class:{highlight:this.currStep.search("live")>-1,active:"isPublish live"===this.currStep}},[t._m(3)]),t._v(" "),a("li",{staticClass:"step record",class:{highlight:this.currStep.search("playback")>-1,active:"isPublish live end playback"===this.currStep}},[t._m(4)]),t._v(" "),a("li",{staticClass:"step statics",class:{highlight:this.currStep.search("end")>-1,active:"isPublish live end"===this.currStep}},[t._m(5)])])]),t._v(" "),a("div",{staticClass:"bottom clearfix"},[a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[0].switch,expression:"dataPrepare[0].switch"}]},[t._v("基本信息")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[1].switch,expression:"dataPrepare[1].switch"}]},[t._v("活动报名")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPrepare[2].switch,expression:"dataPrepare[2].switch"}]},[t._v("暖场设置")])])]),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[0].switch,expression:"dataBrand[0].switch"}]},[t._v("活动官网")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[1].switch,expression:"dataBrand[1].switch"}]},[t._v("直播引导页")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataBrand[2].switch,expression:"dataBrand[2].switch"}]},[t._v("观看页")])])]),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[0].switch,expression:"dataPromote[0].switch"}]},[t._v("自动化通知")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[1].switch,expression:"dataPromote[1].switch"}]},[t._v("邮件邀约")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[2].switch,expression:"dataPromote[2].switch"}]},[t._v("短信推广")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataPromote[3].switch,expression:"dataPromote[3].switch"}]},[t._v("微信推广")])])]),t._v(" "),t._m(6),t._v(" "),a("div",[a("ol",[a("li",{directives:[{name:"show",rawName:"v-show",value:t.dataRecord[0].switch,expression:"dataRecord[0].switch"}]},[t._v("设置回放")])])]),t._v(" "),t._m(7)])]),t._v(" "),a("div",{staticClass:"fun-card"},[a("div",{staticClass:"item prepare"},[a("p",{staticClass:"block-separte"},[t._v("准备")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item base",on:{click:function(s){t.linkTo(s,"/liveMager/edit/")}}},[t._m(8),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item apply",on:{click:function(s){t.linkTo(s,"/liveMager/prepare/limit-apply/",t.dataPrepare[1].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动报名")]),t._v(" "),a("span",{staticClass:"des"},[!1===t.dataPrepare[1].isSet&&!1===t.dataPrepare[1].switch?[t._v("开启后收集目标观众信息")]:t._e(),t._v(" "),!1===t.dataPrepare[1].isSet&&!0===t.dataPrepare[1].switch?[t._v("暂未设置")]:t._e(),t._v(" "),!0===t.dataPrepare[1].isSet&&!0===t.dataPrepare[1].switch?[t._v("已设置活动报名")]:t._e(),t._v(" "),!0===t.dataPrepare[1].isSet&&!1===t.dataPrepare[1].switch?[t._v("已设置活动报名")]:t._e()],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("APPOINT",t.dataPrepare[1].switch)}},model:{value:t.dataPrepare[1].switch,callback:function(s){t.$set(t.dataPrepare[1],"switch",s)},expression:"dataPrepare[1].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item wram",on:{click:function(s){t.linkTo(s,"/liveMager/warmField/",t.dataPrepare[2].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("暖场设置")]),t._v(" "),a("span",{staticClass:"des"},[!1===t.dataPrepare[2].isSet&&!1===t.dataPrepare[2].switch?[t._v("为活动设置暖场视频")]:t._e(),t._v(" "),!1===t.dataPrepare[2].isSet&&!0===t.dataPrepare[2].switch?[t._v("暂未设置")]:t._e(),t._v(" "),!0===t.dataPrepare[2].isSet&&!0===t.dataPrepare[2].switch?[t._v(t._s(t.dataPrepare[2].desc))]:t._e(),t._v(" "),!0===t.dataPrepare[2].isSet&&!1===t.dataPrepare[2].switch?[t._v(t._s(t.dataPrepare[2].desc))]:t._e()],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("WARMUP",t.dataPrepare[2].switch)}},model:{value:t.dataPrepare[2].switch,callback:function(s){t.$set(t.dataPrepare[2],"switch",s)},expression:"dataPrepare[2].switch"}})],1)])])]),t._v(" "),a("div",{staticClass:"item marketing"},[a("p",{staticClass:"block-separte"},[t._v("推广")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item automaze",on:{click:function(s){t.linkTo(s,"/liveMager/promote/auto/preview/",t.dataPromote[0].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("自动化通知")]),t._v(" "),a("span",{staticClass:"des"},[t.isPublished?[!1===t.dataPromote[0].isSet&&!1===t.dataPromote[0].switch?[t._v("设置自动化活动通知提醒")]:t._e(),t._v(" "),!1===t.dataPromote[0].isSet&&!0===t.dataPromote[0].switch?[t._v("暂未设置")]:t._e(),t._v(" "),!0===t.dataPromote[0].isSet&&!0===t.dataPromote[0].switch?["NONE"===t.dataPromote[0].desc?[t._v("暂未设置")]:t._e(),t._v(" "),"PREPARE"===t.dataPromote[0].desc?[t._v("预约")]:t._e(),t._v(" "),"LIVING"===t.dataPromote[0].desc?[t._v("直播中")]:t._e(),t._v(" "),"PLAYBACK"===t.dataPromote[0].desc?[t._v("回放")]:t._e()]:t._e(),t._v(" "),!0===t.dataPromote[0].isSet&&!1===t.dataPromote[0].switch?["NONE"===t.dataPromote[0].desc?[t._v("暂未设置")]:t._e(),t._v(" "),"PREPARE"===t.dataPromote[0].desc?[t._v("预约")]:t._e(),t._v(" "),"LIVING"===t.dataPromote[0].desc?[t._v("直播中")]:t._e(),t._v(" "),"PLAYBACK"===t.dataPromote[0].desc?[t._v("回放")]:t._e()]:t._e()]:[t._v("暂未设置")]],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("EXPAND_NOTICE",t.dataPromote[0].switch)}},model:{value:t.dataPromote[0].switch,callback:function(s){t.$set(t.dataPromote[0],"switch",s)},expression:"dataPromote[0].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item mail",on:{click:function(s){t.linkTo(s,"/liveMager/email/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("邮箱")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[1].isSet?[t._v("已设置邮件邀约")]:[t._v("通过邮件进行活动推广")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item message",on:{click:function(s){t.linkTo(s,"/liveMager/promote/msg/list/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("短信")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[2].isSet?[t._v("已设置短信通知")]:[t._v("通过短信进行活动推广")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item wechat",on:{click:function(s){t.linkTo(s,"/liveMager/promote/wechat/list/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("微信")]),t._v(" "),a("span",{staticClass:"des"},[t.dataPromote[3].isSet?[t._v("已设置微信通知")]:[t._v("通过微信进行活动推广")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item promote"},[a("p",{staticClass:"block-separte"},[t._v("品牌")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item site",on:{click:function(s){t.linkTo(s,"/liveMager/site/",t.dataBrand[0].switch)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("活动官网")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[0].isSet?[t._v(t._s("N"===t.dataBrand[0].desc?"未发布":"已发布"))]:[t._v("最精简的活动品牌页")]],2)])]),t._v(" "),a("div",{staticClass:"btm"},[a("el-switch",{staticClass:"switch",attrs:{"inactive-color":"#DEE1FF",width:32,"active-color":"#FFD021"},on:{change:function(s){t.switchChange("TEMPLATE",t.dataBrand[0].switch)}},model:{value:t.dataBrand[0].switch,callback:function(s){t.$set(t.dataBrand[0],"switch",s)},expression:"dataBrand[0].switch"}})],1)]),t._v(" "),a("div",{staticClass:"item guide",on:{click:function(s){t.linkTo(s,"/setLiveGuided/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("直播引导页")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[1].isSet?[t._v(t._s("N"===t.dataBrand[1].desc?"未发布":"已发布"))]:[t._v("最精简的活动品牌页")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})]),t._v(" "),a("div",{staticClass:"item watch",on:{click:function(s){t.linkTo(s,"/setLiveWatch/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("观看页")]),t._v(" "),a("span",{staticClass:"des"},[t.dataBrand[2].isSet?[t._v(t._s("N"===t.dataBrand[2].desc?"未发布":"已发布"))]:[t._v("订制直播观看页面")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])]),t._v(" "),a("div",{staticClass:"item setting"},[a("p",{staticClass:"block-separte"},[t._v("回放")]),t._v(" "),a("div",{staticClass:"card-list clearfix"},[a("div",{staticClass:"item record",on:{click:function(s){t.linkTo(s,"/liveMager/playBack/")}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"pic"}),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("设置回放")]),t._v(" "),a("span",{staticClass:"des"},[t.dataRecord[0].isSet?[t._v("已设置默认回放")]:[t._v("设置活动后的回放视频")]],2)])]),t._v(" "),a("div",{staticClass:"btm"})])])])])]):t._e()},[function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("准备")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("品牌")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("推广")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("直播")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("回放")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("dl",[s("dt",[s("i")]),this._v(" "),s("dd",[this._v("数据")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("ol")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("ol",[s("li",[this._v("数据报表")]),this._v(" "),s("li",[this._v("详细数据导出")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"pic"}),this._v(" "),s("div",{staticClass:"desc"},[s("span",[this._v("基本信息")]),this._v(" "),s("span",{staticClass:"des"},[this._v("编辑活动基本信息")])])])}],!1,null,"667a3a62",null));_.options.__file="detail.vue";s.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{474:function(i,t,e){"use strict";e.r(t);var a=e(100),n=e.n(a),s={data:function(){return{isEdit:!1,inputValue:"",errorTips:"",selectedOptions:[]}},props:{title:String,content:String,type:String,selectValue:Array},created:function(){this.inputValue=null!==this.content&&this.content&&"0"!==this.content?this.content:"-"},methods:{modify:function(i){this.isEdit=!0},handleChange:function(i){"single"===this.type?this.$emit("saveInfo",this.inputValue):this.$emit("saveInfo",this.selectedOptions),this.isEdit=!1}}},d=(e(892),e(1)),c=Object(d.a)(s,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-from"},[e("span",{staticClass:"v-title"},[i._v("\n    "+i._s(i.title)+"：\n  ")]),i._v(" "),i.isEdit?["single"===i.type?e("el-select",{attrs:{placeholder:"请选择"},on:{change:i.handleChange},model:{value:i.inputValue,callback:function(t){i.inputValue=t},expression:"inputValue"}},i._l(i.selectValue,function(i){return e("el-option",{key:i.value,attrs:{label:i.value,value:i.value}})})):"double"===i.type?e("el-cascader",{attrs:{options:i.selectValue},on:{change:i.handleChange},model:{value:i.selectedOptions,callback:function(t){i.selectedOptions=t},expression:"selectedOptions"}}):i._e()]:[e("span",{staticClass:"v-content"},[i._v("\n      "+i._s(null!==this.content&&this.content&&"0"!==this.content?i.content:"-")+"\n      "),e("i",{staticClass:"iconfont icon-bianji",on:{click:function(t){i.modify(i.content)}}})])]],2)},[],!1,null,"f0219c34",null);c.options.__file="com-select.vue";var l=c.exports,o=e(98),r=e(472),p={data:function(){return{scrollEvent:null,dataList:[],dataInfoList:[],searchParams:{business_consumer_uid:0,type:1,page:1,page_size:20,totalPage:0},searchInfoParams:{business_consumer_uid:0,type:2,page:1,page_size:20,totalPage:0},showActivity:{name:"",time:""},total:0,infoTotal:0,recordBoxShow:!1}},mounted:function(){this.getDataList()},created:function(){var i=this;this.scrollEvent=this.debounce(function(t){i.$refs.bscroll.offsetHeight+i.$refs.bscroll.scrollTop>i.$refs.bscroll.scrollHeight-100&&i.searchParams.page<i.searchParams.totalPage&&(i.searchParams.page=parseInt(i.searchParams.page)+1,i.getDataList())},50)},methods:{debounce:function(i,t,e){var a;return function(){var n=this,s=arguments,d=e&&!a;clearTimeout(a),a=setTimeout(function(){a=null,e||i.apply(n,s)},t),d&&i.apply(n,s)}},showRecord:function(i,t,e){this.recordBoxShow=!0,this.showActivity.name=t,this.showActivity.time=e,this.searchInfoParams.page=1,this.searchInfoParams.activity_id=i,this.getDataInfoList(!1)},recordBoxClick:function(i){"cancel"===i.action&&(this.recordBoxShow=!1)},getDataList:function(){var i=this;this.searchParams.business_consumer_uid=this.$route.params.id,this.$config({handlers:!0}).$get(o.a.GET_BEHAVIOR_LIST,this.searchParams).then(function(t){t.data&&t.data.list&&(t.data.list.forEach(function(t){i.dataList.push(t)}),i.total=t.data.total,i.searchParams.page=parseInt(t.data.page)+1,i.searchParams.totalPage=Math.ceil(t.data.total/t.data.page_size))}).catch(function(t){201!==t.code&&i.$messageBox({header:"提示",content:t.msg,confirmText:"确定",handleClick:function(i){"cancel"===i.action||i.action}})})},getDataInfoList:function(i){var t=this;this.searchInfoParams.business_consumer_uid=this.$route.params.id,i||(this.dataInfoList=[]),this.$config({handlers:!0}).$get(o.a.GET_BEHAVIOR_LIST,this.searchInfoParams).then(function(i){i.data.list.forEach(function(i){"STAY_ACTIVITY_WEBSITE_TIME"!==i.event&&"STAY_ACTIVITY_TIME"!==i.event||(i.data.time>0?i.data.time=i.data.time>1?Math.round(i.data.time/60):1:i.data.time=0),t.dataInfoList.push(i)}),t.infoTotal=i.data.total,t.searchInfoParams.total=i.data.total,t.searchInfoParams.totalPage=Math.ceil(i.data.total/i.data.page_size),t.initInfoScroll()}).catch(function(i){201!==i.code&&t.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(i){"cancel"===i.action||i.action}})})},initInfoScroll:function(){var i=this;if(!this.infoscroll){var t=this;this.$nextTick(function(){var e=i.$refs.infoscroll;i.infoscroll=new r.a(e,{scrollbar:!0,click:!0,mouseWheel:!0,"probeType ":3,pullup:!0}),i.infoscroll.on("scrollEnd",function(){i.infoscroll.y===i.infoscroll.maxScrollY&&t.searchInfoParams.page<t.searchInfoParams.totalPage&&(t.searchInfoParams.page=parseInt(t.searchInfoParams.page)+1,t.getDataInfoList(!0))})})}},event:function(i,t){var e="";switch(i){case"JOIN_ACTIVITY_WEBSITE":e="进入了活动官网";break;case"LEAVE_ACTIVITY_WEBSITE":e="离开了活动官网";break;case"JOIN_ACTIVITY_GUIDE":e="进入了活动引导页";break;case"LEAVE_ACTIVITY_GUIDE":e="离开了活动引导页";break;case"ORDER_ACTIVITY":e="预约活动";break;case"APPLY_ACTIVITY":e="报名活动";break;case"JOIN_ACTIVITY":e="进入了活动";break;case"FIRST_CHAT":e="开始了聊天";break;case"FIRST_SHARE":e="进行第一次分享";break;case"COMMIT_SURVEY":e="提交调查问卷";break;case"SHARE_COUNT":e="共进行了"+t.count+"次分享";break;case"STAY_ACTIVITY_WEBSITE_TIME":e="在活动官网浏览了"+t.time+"分钟";break;case"STAY_ACTIVITY_TIME":e="观看了"+t.time+"分钟";break;case"SEND_CHAT_COUNT":e="共发送了"+t.count+"条聊天内容";break;case"INVITE_COUNT":e="共邀请了"+t.count+"个好友";break;case"CONCERN_WX":e="关注了"+t.wx_name;break;case"EMAIL_SUBSCRIBE":e="关注了"+t.business_name}return e}}},m=(e(893),Object(d.a)(p,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticStyle:{height:"100%"}},[e("div",{ref:"bscroll",staticClass:"v-footprints bscroll",on:{scroll:function(t){i.scrollEvent(t)}}},[e("ol",{staticClass:"bscroll-container"},i._l(i.dataList,function(t){return e("li",{key:t.behavior_id,staticClass:"v-footprint"},[e("i",{staticClass:"iconfont icon-dian"}),i._v(" "),e("i",{staticClass:"v-border"}),i._v(" "),e("p",{staticClass:"v-time"},[i._v("\n          "+i._s(t.generated_at)+"\n        ")]),i._v(" "),e("p",{staticClass:"v-content"},[i._v("\n          "+i._s("JOIN_ACTIVITY"===t.event?"参加":"首次访问")+"活动 "+i._s(t.data.activity_title?t.data.activity_title:"")+"\n          "),"FIRST_VISIT"!=t.event?e("button",{on:{click:function(e){i.showRecord(t.activity_id,t.data.activity_title,t.generated_at)}}},[i._v("\n            查看详情\n          ")]):i._e()])])}))]),i._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:i.recordBoxShow,expression:"recordBoxShow"}],staticClass:"message-box v-record",attrs:{width:"450px",confirmText:"确定",type:"prompt",header:"行为记录"},on:{handleClick:i.recordBoxClick}},[e("div",[e("p",{staticClass:"v-explain"},[i._v("\n        "+i._s(i.showActivity.name)+"\n      ")]),i._v(" "),e("p",{staticClass:"v-time"},[i._v("\n        "+i._s(i.showActivity.time)+"\n      ")]),i._v(" "),e("div",{staticClass:"v-steps-content"},[e("div",{ref:"infoscroll",staticClass:"v-steps bscroll"},[e("ol",{staticClass:"bscroll-container"},i._l(i.dataInfoList,function(t){return e("li",{key:t.behavior_id,staticClass:"v-step"},[e("div",{staticClass:"v-content"},[e("i",{staticClass:"iconfont icon-dian"}),i._v(" "),e("i",{staticClass:"v-border"}),i._v(" "),e("p",{staticClass:"v-content-time"},[i._v("\n                  "+i._s(t.generated_at)+"\n                ")]),i._v(" "),e("p",{staticClass:"v-content-title"},[i._v("\n                  "+i._s(i.event(t.event,t.data))+"\n                ")])])])}))])])])])],1)},[],!1,null,"9b462d26",null));m.options.__file="com-footprints.vue";var u=m.exports,v={data:function(){return{isEdit:!1,inputValue:"",errorTips:""}},props:{title:String,content:String,maxLength:Number},methods:{modify:function(i){this.inputValue=i,this.isEdit=!0},inputBlur:function(){this.$emit("saveInfo",this.inputValue),this.isEdit=!1}}},_=(e(894),Object(d.a)(v,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-from"},[e("span",{staticClass:"v-title"},[i._v("\n    "+i._s(i.title)+"：\n  ")]),i._v(" "),i.isEdit?[e("com-input",{staticClass:"v-input",attrs:{value:i.inputValue,placeholder:"请输入"+i.title,type:"input","error-tips":i.errorTips,"max-length":i.maxLength},on:{"update:value":function(t){i.inputValue=t},blur:function(t){i.inputBlur()}}})]:[e("span",{staticClass:"v-content"},[i._v("\n      "+i._s(null!==this.content&&this.content?i.content:"-")+"\n      "),e("i",{staticClass:"iconfont icon-bianji",on:{click:function(t){i.modify(i.content)}}})])]],2)},[],!1,null,"7024e392",null));_.options.__file="single-input.vue";var h=_.exports,f={data:function(){return{value:"",industries:[{value:"IT/互联网",label:"IT/互联网"},{value:"电子/通信/硬件",label:"电子/通信/硬件"},{value:"金融",label:"金融"},{value:"交通/贸易/物流",label:"交通/贸易/物流"},{value:"消费品",label:"消费品"},{value:"机械/制造",label:"机械/制造"},{value:"能源/矿产环保",label:"能源/矿产环保"},{value:"制药/医疗",label:"制药/医疗"},{value:"专业服务",label:"专业服务"},{value:"教育/培训",label:"教育/培训"},{value:"广告/媒体/娱乐/出版",label:"广告/媒体/娱乐/出版"},{value:"房地产/建筑",label:"房地产/建筑"},{value:"服务业",label:"服务业"},{value:"政府/非盈利机构/其它",label:"政府/非盈利机构/其它"}]}},methods:{change:function(i){this.$emit("input",i),this.$emit("change",i)},blur:function(){this.$emit("saveInfo",this.value)}}},g=(e(895),Object(d.a)(f,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"industry-wrap"},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:i.change,blur:i.blur},model:{value:i.value,callback:function(t){i.value=t},expression:"value"}},i._l(i.industries,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}))],1)},[],!1,null,"e487711c",null));g.options.__file="com-industry.vue";var C=g.exports,b={data:function(){return{value:"",educations:[{value:"博士",label:"博士"},{value:"硕士",label:"硕士"},{value:"本科",label:"本科"},{value:"大专",label:"大专"},{value:"高中",label:"高中"}]}},methods:{change:function(i){this.$emit("input",i),this.$emit("change",i)},blur:function(){this.$emit("saveInfo",this.value)}}},I=(e(896),Object(d.a)(b,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"industry-wrap"},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:i.change,blur:i.blur},model:{value:i.value,callback:function(t){i.value=t},expression:"value"}},i._l(i.educations,function(i){return e("el-option",{key:i.value,attrs:{label:i.label,value:i.value}})}))],1)},[],!1,null,"50a5cf2c",null));I.options.__file="com-education.vue";var y={components:{comIndustry:C,comEducation:I.exports},data:function(){return{isEdit:!1,inputValue:"",errorTips:""}},props:{title:String,content:String,maxLength:Number,selectType:String},methods:{modify:function(i){this.inputValue=i,this.isEdit=!0},inputBlur:function(){this.$emit("saveInfo",this.inputValue),this.isEdit=!1}}},T=(e(897),Object(d.a)(y,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-from"},[e("span",{staticClass:"v-title"},[i._v("\n    "+i._s(i.title)+"：\n  ")]),i._v(" "),i.isEdit?[e(i.selectType,{tag:"component",staticClass:"v-input",on:{change:function(t){i.inputBlur()}},model:{value:i.inputValue,callback:function(t){i.inputValue=t},expression:"inputValue"}})]:[e("span",{staticClass:"v-content"},[i._v("\n      "+i._s(null!==this.content&&this.content&&"0"!==this.content?i.content:"-")+"\n      "),e("i",{staticClass:"iconfont icon-bianji",on:{click:function(t){i.modify(i.content)}}})])]],2)},[],!1,null,"1d348e31",null));T.options.__file="industry-select.vue";var x=T.exports,E={data:function(){return{isEdit:!1,inputValue:"",errorTips:""}},props:{title:String,content:String},mounted:function(){this.inputValue=null!==this.content&&this.content&&"0"!==this.content&&"0000-00-00 00:00:00"!==this.inputValue?this.content:"-"},methods:{modify:function(i){this.inputValue=i,this.isEdit=!0},inputBlur:function(){null!==this.inputValue&&this.inputValue&&"0"!==this.inputValue&&"0000-00-00 00:00:00"!==this.inputValue?(this.$emit("saveInfo",this.format(this.inputValue)),this.isEdit=!1):this.isEdit=!1},format:function(i){return!(null===i||!i||"0"===i||"0000-00-00 00:00:00"===this.inputValue)&&(i=new Date(i)).getFullYear()+"-"+this.appendZero(i.getMonth()+1)+"-"+this.appendZero(i.getDate())},appendZero:function(i){return i<10?"0"+i:i}}},k=(e(898),Object(d.a)(E,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-from"},[e("span",{staticClass:"v-title"},[i._v("\n    "+i._s(i.title)+"：\n  ")]),i._v(" "),i.isEdit?[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd"},on:{blur:function(t){i.inputBlur()}},model:{value:i.inputValue,callback:function(t){i.inputValue=t},expression:"inputValue"}})]:[e("span",{staticClass:"v-content"},[i._v("\n      "+i._s(null!==this.content&&this.content&&"0"!==this.content&&"0000-00-00 00:00:00"!==this.inputValue?i.format(i.content):"-")+"\n      "),e("i",{staticClass:"iconfont icon-bianji",on:{click:function(t){i.modify(i.content)}}})])]],2)},[],!1,null,"2755b938",null));k.options.__file="date-select.vue";var w=k.exports,V=[{id:1001,pid:1,name:"北京"},{id:1002,pid:2,name:"上海"},{id:1003,pid:3,name:"天津"},{id:1004,pid:4,name:"重庆"},{id:1005,pid:5,name:"石家庄"},{id:1006,pid:5,name:"邯郸"},{id:1007,pid:5,name:"邢台"},{id:1008,pid:5,name:"保定"},{id:1009,pid:5,name:"张家口"},{id:1010,pid:5,name:"承德"},{id:1011,pid:5,name:"廊坊"},{id:1012,pid:5,name:"唐山"},{id:1013,pid:5,name:"秦皇岛"},{id:1014,pid:5,name:"沧州"},{id:1015,pid:5,name:"衡水"},{id:1016,pid:6,name:"太原"},{id:1017,pid:6,name:"大同"},{id:1018,pid:6,name:"阳泉"},{id:1019,pid:6,name:"长治"},{id:1020,pid:6,name:"晋城"},{id:1021,pid:6,name:"朔州"},{id:1022,pid:6,name:"吕梁"},{id:1023,pid:6,name:"忻州"},{id:1024,pid:6,name:"晋中"},{id:1025,pid:6,name:"临汾"},{id:1026,pid:6,name:"运城"},{id:1027,pid:7,name:"呼和浩特"},{id:1028,pid:7,name:"包头"},{id:1029,pid:7,name:"乌海"},{id:1030,pid:7,name:"赤峰"},{id:1031,pid:7,name:"呼伦贝尔盟"},{id:1032,pid:7,name:"阿拉善盟"},{id:1033,pid:7,name:"哲里木盟"},{id:1034,pid:7,name:"兴安盟"},{id:1035,pid:7,name:"乌兰察布盟"},{id:1036,pid:7,name:"锡林郭勒盟"},{id:1037,pid:7,name:"巴彦淖尔盟"},{id:1038,pid:7,name:"伊克昭盟"},{id:1039,pid:8,name:"沈阳"},{id:1040,pid:8,name:"大连"},{id:1041,pid:8,name:"鞍山"},{id:1042,pid:8,name:"抚顺"},{id:1043,pid:8,name:"本溪"},{id:1044,pid:8,name:"丹东"},{id:1045,pid:8,name:"锦州"},{id:1046,pid:8,name:"营口"},{id:1047,pid:8,name:"阜新"},{id:1048,pid:8,name:"辽阳"},{id:1049,pid:8,name:"盘锦"},{id:1050,pid:8,name:"铁岭"},{id:1051,pid:8,name:"朝阳"},{id:1052,pid:8,name:"葫芦岛"},{id:1053,pid:9,name:"长春"},{id:1054,pid:9,name:"吉林"},{id:1055,pid:9,name:"四平"},{id:1056,pid:9,name:"辽源"},{id:1057,pid:9,name:"通化"},{id:1058,pid:9,name:"白山"},{id:1059,pid:9,name:"松原"},{id:1060,pid:9,name:"白城"},{id:1061,pid:9,name:"延边"},{id:1062,pid:10,name:"哈尔滨"},{id:1063,pid:10,name:"齐齐哈尔"},{id:1064,pid:10,name:"牡丹江"},{id:1065,pid:10,name:"佳木斯"},{id:1066,pid:10,name:"大庆"},{id:1067,pid:10,name:"绥化"},{id:1068,pid:10,name:"鹤岗"},{id:1069,pid:10,name:"鸡西"},{id:1070,pid:10,name:"黑河"},{id:1071,pid:10,name:"双鸭山"},{id:1072,pid:10,name:"伊春"},{id:1073,pid:10,name:"七台河"},{id:1074,pid:10,name:"大兴安岭"},{id:1075,pid:11,name:"南京"},{id:1076,pid:11,name:"镇江"},{id:1077,pid:11,name:"苏州"},{id:1078,pid:11,name:"南通"},{id:1079,pid:11,name:"扬州"},{id:1080,pid:11,name:"盐城"},{id:1081,pid:11,name:"徐州"},{id:1082,pid:11,name:"连云港"},{id:1083,pid:11,name:"常州"},{id:1084,pid:11,name:"无锡"},{id:1085,pid:11,name:"宿迁"},{id:1086,pid:11,name:"泰州"},{id:1087,pid:11,name:"淮安"},{id:1088,pid:12,name:"杭州"},{id:1089,pid:12,name:"宁波"},{id:1090,pid:12,name:"温州"},{id:1091,pid:12,name:"嘉兴"},{id:1092,pid:12,name:"湖州"},{id:1093,pid:12,name:"绍兴"},{id:1094,pid:12,name:"金华"},{id:1095,pid:12,name:"衢州"},{id:1096,pid:12,name:"舟山"},{id:1097,pid:12,name:"台州"},{id:1098,pid:12,name:"丽水"},{id:1099,pid:13,name:"合肥"},{id:1100,pid:13,name:"芜湖"},{id:1101,pid:13,name:"蚌埠"},{id:1102,pid:13,name:"马鞍山"},{id:1103,pid:13,name:"淮北"},{id:1104,pid:13,name:"铜陵"},{id:1105,pid:13,name:"安庆"},{id:1106,pid:13,name:"黄山"},{id:1107,pid:13,name:"滁州"},{id:1108,pid:13,name:"宿州"},{id:1109,pid:13,name:"池州"},{id:1110,pid:13,name:"淮南"},{id:1111,pid:13,name:"巢湖"},{id:1112,pid:13,name:"阜阳"},{id:1113,pid:13,name:"六安"},{id:1114,pid:13,name:"宣城"},{id:1115,pid:13,name:"亳州"},{id:1116,pid:14,name:"福州"},{id:1117,pid:14,name:"厦门"},{id:1118,pid:14,name:"莆田"},{id:1119,pid:14,name:"三明"},{id:1120,pid:14,name:"泉州"},{id:1121,pid:14,name:"漳州"},{id:1122,pid:14,name:"南平"},{id:1123,pid:14,name:"龙岩"},{id:1124,pid:14,name:"宁德"},{id:1125,pid:15,name:"南昌市"},{id:1126,pid:15,name:"景德镇"},{id:1127,pid:15,name:"九江"},{id:1128,pid:15,name:"鹰潭"},{id:1129,pid:15,name:"萍乡"},{id:1130,pid:15,name:"新馀"},{id:1131,pid:15,name:"赣州"},{id:1132,pid:15,name:"吉安"},{id:1133,pid:15,name:"宜春"},{id:1134,pid:15,name:"抚州"},{id:1135,pid:15,name:"上饶"},{id:1136,pid:16,name:"济南"},{id:1137,pid:16,name:"青岛"},{id:1138,pid:16,name:"淄博"},{id:1139,pid:16,name:"枣庄"},{id:1140,pid:16,name:"东营"},{id:1141,pid:16,name:"烟台"},{id:1142,pid:16,name:"潍坊"},{id:1143,pid:16,name:"济宁"},{id:1144,pid:16,name:"泰安"},{id:1145,pid:16,name:"威海"},{id:1146,pid:16,name:"日照"},{id:1147,pid:16,name:"莱芜"},{id:1148,pid:16,name:"临沂"},{id:1149,pid:16,name:"德州"},{id:1150,pid:16,name:"聊城"},{id:1151,pid:16,name:"滨州"},{id:1152,pid:16,name:"菏泽"},{id:1153,pid:17,name:"郑州"},{id:1154,pid:17,name:"开封"},{id:1155,pid:17,name:"洛阳"},{id:1156,pid:17,name:"平顶山"},{id:1157,pid:17,name:"安阳"},{id:1158,pid:17,name:"鹤壁"},{id:1159,pid:17,name:"新乡"},{id:1160,pid:17,name:"焦作"},{id:1161,pid:17,name:"濮阳"},{id:1162,pid:17,name:"许昌"},{id:1163,pid:17,name:"漯河"},{id:1164,pid:17,name:"三门峡"},{id:1165,pid:17,name:"南阳"},{id:1166,pid:17,name:"商丘"},{id:1167,pid:17,name:"信阳"},{id:1168,pid:17,name:"周口"},{id:1169,pid:17,name:"驻马店"},{id:1170,pid:17,name:"济源"},{id:1171,pid:18,name:"武汉"},{id:1172,pid:18,name:"宜昌"},{id:1173,pid:18,name:"荆州"},{id:1174,pid:18,name:"襄樊"},{id:1175,pid:18,name:"黄石"},{id:1176,pid:18,name:"荆门"},{id:1177,pid:18,name:"黄冈"},{id:1178,pid:18,name:"十堰"},{id:1179,pid:18,name:"恩施"},{id:1180,pid:18,name:"潜江"},{id:1181,pid:18,name:"天门"},{id:1182,pid:18,name:"仙桃"},{id:1183,pid:18,name:"随州"},{id:1184,pid:18,name:"咸宁"},{id:1185,pid:18,name:"孝感"},{id:1186,pid:18,name:"鄂州"},{id:1187,pid:19,name:"长沙"},{id:1188,pid:19,name:"常德"},{id:1189,pid:19,name:"株洲"},{id:1190,pid:19,name:"湘潭"},{id:1191,pid:19,name:"衡阳"},{id:1192,pid:19,name:"岳阳"},{id:1193,pid:19,name:"邵阳"},{id:1194,pid:19,name:"益阳"},{id:1195,pid:19,name:"娄底"},{id:1196,pid:19,name:"怀化"},{id:1197,pid:19,name:"郴州"},{id:1198,pid:19,name:"永州"},{id:1199,pid:19,name:"湘西"},{id:1200,pid:19,name:"张家界"},{id:1201,pid:20,name:"广州"},{id:1202,pid:20,name:"深圳"},{id:1203,pid:20,name:"珠海"},{id:1204,pid:20,name:"汕头"},{id:1205,pid:20,name:"东莞"},{id:1206,pid:20,name:"中山"},{id:1207,pid:20,name:"佛山"},{id:1208,pid:20,name:"韶关"},{id:1209,pid:20,name:"江门"},{id:1210,pid:20,name:"湛江"},{id:1211,pid:20,name:"茂名"},{id:1212,pid:20,name:"肇庆"},{id:1213,pid:20,name:"惠州"},{id:1214,pid:20,name:"梅州"},{id:1215,pid:20,name:"汕尾"},{id:1216,pid:20,name:"河源"},{id:1217,pid:20,name:"阳江"},{id:1218,pid:20,name:"清远"},{id:1219,pid:20,name:"潮州"},{id:1220,pid:20,name:"揭阳"},{id:1221,pid:20,name:"云浮"},{id:1222,pid:21,name:"南宁"},{id:1223,pid:21,name:"柳州"},{id:1224,pid:21,name:"桂林"},{id:1225,pid:21,name:"梧州"},{id:1226,pid:21,name:"北海"},{id:1227,pid:21,name:"防城港"},{id:1228,pid:21,name:"钦州"},{id:1229,pid:21,name:"贵港"},{id:1230,pid:21,name:"玉林"},{id:1231,pid:21,name:"南宁地区"},{id:1232,pid:21,name:"柳州地区"},{id:1233,pid:21,name:"贺州"},{id:1234,pid:21,name:"百色"},{id:1235,pid:21,name:"河池"},{id:1236,pid:22,name:"海口"},{id:1237,pid:22,name:"三亚"},{id:1238,pid:23,name:"成都"},{id:1239,pid:23,name:"绵阳"},{id:1240,pid:23,name:"德阳"},{id:1241,pid:23,name:"自贡"},{id:1242,pid:23,name:"攀枝花"},{id:1243,pid:23,name:"广元"},{id:1244,pid:23,name:"内江"},{id:1245,pid:23,name:"乐山"},{id:1246,pid:23,name:"南充"},{id:1247,pid:23,name:"宜宾"},{id:1248,pid:23,name:"广安"},{id:1249,pid:23,name:"达川"},{id:1250,pid:23,name:"雅安"},{id:1251,pid:23,name:"眉山"},{id:1252,pid:23,name:"甘孜"},{id:1253,pid:23,name:"凉山"},{id:1254,pid:23,name:"泸州"},{id:1255,pid:24,name:"贵阳"},{id:1256,pid:24,name:"六盘水"},{id:1257,pid:24,name:"遵义"},{id:1258,pid:24,name:"安顺"},{id:1259,pid:24,name:"铜仁"},{id:1260,pid:24,name:"黔西南"},{id:1261,pid:24,name:"毕节"},{id:1262,pid:24,name:"黔东南"},{id:1263,pid:24,name:"黔南"},{id:1264,pid:25,name:"昆明"},{id:1265,pid:25,name:"大理"},{id:1266,pid:25,name:"曲靖"},{id:1267,pid:25,name:"玉溪"},{id:1268,pid:25,name:"昭通"},{id:1269,pid:25,name:"楚雄"},{id:1270,pid:25,name:"红河"},{id:1271,pid:25,name:"文山"},{id:1272,pid:25,name:"思茅"},{id:1273,pid:25,name:"西双版纳"},{id:1274,pid:25,name:"保山"},{id:1275,pid:25,name:"德宏"},{id:1276,pid:25,name:"丽江"},{id:1277,pid:25,name:"怒江"},{id:1278,pid:25,name:"迪庆"},{id:1279,pid:25,name:"临沧"},{id:1280,pid:26,name:"拉萨"},{id:1281,pid:26,name:"日喀则"},{id:1282,pid:26,name:"山南"},{id:1283,pid:26,name:"林芝"},{id:1284,pid:26,name:"昌都"},{id:1285,pid:26,name:"阿里"},{id:1286,pid:26,name:"那曲"},{id:1287,pid:27,name:"西安"},{id:1288,pid:27,name:"宝鸡"},{id:1289,pid:27,name:"咸阳"},{id:1290,pid:27,name:"铜川"},{id:1291,pid:27,name:"渭南"},{id:1292,pid:27,name:"延安"},{id:1293,pid:27,name:"榆林"},{id:1294,pid:27,name:"汉中"},{id:1295,pid:27,name:"安康"},{id:1296,pid:27,name:"商洛"},{id:1297,pid:28,name:"兰州"},{id:1298,pid:28,name:"嘉峪关"},{id:1299,pid:28,name:"金昌"},{id:1300,pid:28,name:"白银"},{id:1301,pid:28,name:"天水"},{id:1302,pid:28,name:"酒泉"},{id:1303,pid:28,name:"张掖"},{id:1304,pid:28,name:"武威"},{id:1305,pid:28,name:"定西"},{id:1306,pid:28,name:"陇南"},{id:1307,pid:28,name:"平凉"},{id:1308,pid:28,name:"庆阳"},{id:1309,pid:28,name:"临夏"},{id:1310,pid:28,name:"甘南"},{id:1311,pid:29,name:"银川"},{id:1312,pid:29,name:"石嘴山"},{id:1313,pid:29,name:"吴忠"},{id:1314,pid:29,name:"固原"},{id:1315,pid:30,name:"西宁"},{id:1316,pid:30,name:"海东"},{id:1317,pid:30,name:"海南"},{id:1318,pid:30,name:"海北"},{id:1319,pid:30,name:"黄南"},{id:1320,pid:30,name:"玉树"},{id:1321,pid:30,name:"果洛"},{id:1322,pid:30,name:"海西"},{id:1323,pid:31,name:"乌鲁木齐"},{id:1324,pid:31,name:"石河子"},{id:1325,pid:31,name:"克拉玛依"},{id:1326,pid:31,name:"伊犁"},{id:1327,pid:31,name:"巴音郭勒"},{id:1328,pid:31,name:"昌吉"},{id:1329,pid:31,name:"克孜勒苏柯尔克孜"},{id:1330,pid:31,name:"博 尔塔拉"},{id:1331,pid:31,name:"吐鲁番"},{id:1332,pid:31,name:"哈密"},{id:1333,pid:31,name:"喀什"},{id:1334,pid:31,name:"和田"},{id:1335,pid:31,name:"阿克苏"},{id:1336,pid:32,name:"香港"},{id:1337,pid:33,name:"澳门"},{id:1338,pid:34,name:"台北"},{id:1339,pid:34,name:"高雄"},{id:1340,pid:34,name:"台中"},{id:1341,pid:34,name:"台南"},{id:1342,pid:34,name:"屏东"},{id:1343,pid:34,name:"南投"},{id:1344,pid:34,name:"云林"},{id:1345,pid:34,name:"新竹"},{id:1346,pid:34,name:"彰化"},{id:1347,pid:34,name:"苗栗"},{id:1348,pid:34,name:"嘉义"},{id:1349,pid:34,name:"花莲"},{id:1350,pid:34,name:"桃园"},{id:1351,pid:34,name:"宜兰"},{id:1352,pid:34,name:"基隆"},{id:1353,pid:34,name:"台东"},{id:1354,pid:34,name:"金门"},{id:1355,pid:34,name:"马祖"},{id:1356,pid:34,name:"澎湖"},{id:1357,pid:35,name:"海外"}],S=[{id:1,name:"北京"},{id:2,name:"上海"},{id:3,name:"天津"},{id:4,name:"重庆"},{id:5,name:"河北"},{id:6,name:"山西"},{id:7,name:"内蒙古"},{id:8,name:"辽宁"},{id:9,name:"吉林"},{id:10,name:"黑龙江"},{id:11,name:"江苏"},{id:12,name:"浙江"},{id:13,name:"安徽"},{id:14,name:"福建"},{id:15,name:"江西"},{id:16,name:"山东"},{id:17,name:"河南"},{id:18,name:"湖北"},{id:19,name:"湖南"},{id:20,name:"广东"},{id:21,name:"广西"},{id:22,name:"海南"},{id:23,name:"四川"},{id:24,name:"贵州"},{id:25,name:"云南"},{id:26,name:"西藏"},{id:27,name:"陕西"},{id:28,name:"甘肃"},{id:29,name:"宁夏"},{id:30,name:"青海"},{id:31,name:"新疆"},{id:32,name:"香港"},{id:33,name:"澳门"},{id:34,name:"台湾"},{id:35,name:"海外"}],$={data:function(){return{isEdit:!1,inputValue:"",errorTips:"",selectedOptions:[],areas:[]}},props:{title:String,content:String,selectValue:Array},mounted:function(){var i=this;this.inputValue=this.content;var t=V,e=S;this.areas=[],e.forEach(function(e){var a={value:e.id,label:e.name,children:[]},n=t.find(function(i){return i.pid===a.value}),s={value:n.id,label:n.name,pid:n.pid};a.children.push(s),i.areas.push(a)})},methods:{modify:function(i){this.isEdit=!0},handleChange:function(i){this.$emit("saveInfo",this.selectedOptions),this.isEdit=!1}}},P=(e(899),Object(d.a)($,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-from"},[e("span",{staticClass:"v-title"},[i._v("\n    "+i._s(i.title)+"：\n  ")]),i._v(" "),i.isEdit?[e("el-cascader",{attrs:{options:i.areas},on:{change:i.handleChange},model:{value:i.selectedOptions,callback:function(t){i.selectedOptions=t},expression:"selectedOptions"}})]:[e("span",{staticClass:"v-content"},[i._v("\n      "+i._s(""===i.content?"无":i.content)+"\n      "),e("i",{staticClass:"iconfont icon-bianji",on:{click:function(t){i.modify(i.content)}}})])]],2)},[],!1,null,"037d2af2",null));P.options.__file="city-select.vue";var A=P.exports,L=e(530),O={props:{dragData:{type:Array,default:null}}},D=Object(d.a)(O,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("ul",i._l(i.dragData,function(t,a){return e("li",{key:t.id},[e("p",{staticClass:"v-question-title"},[e("span",{staticClass:"v-index"},[i._v(i._s(a+1))]),i._v(i._s(t.title)),"Y"===t.required?e("span",{staticClass:"v-red"},[i._v("*")]):i._e()]),i._v(" "),e("p",{staticClass:"v-content"},[i._v("\n        "+i._s(t.answer)+"\n      ")])])}))])},[],!1,null,null,null);D.options.__file="question-detail.vue";var B=D.exports,U=e(546),Y={components:{VePagination:L.a,questionsDetail:B},data:function(){return{tableList:[],PUBLIC_PATH:"//zhike.vhall.com/",searchParams:{business_consumer_uid:0,page:1,page_size:9},total:0,pageSize:9,imgUrl:"",boxTitle:"",title:"",description:"",dragData:[],messageBoxViewShow:!1}},created:function(){this.getDataList()},computed:{defaultImg:function(){return this.imgUrl?this.$imgHost+"/"+this.imgUrl:""}},watch:{},methods:{getDataList:function(){var i=this;this.searchParams.business_consumer_uid=this.$route.params.id,this.$config({handlers:!0}).$get(o.a.GET_SURVER_LIST,this.searchParams).then(function(t){200===t.code&&(t.data.list.map(function(t,e){return t.imgUrl?t.imgUrl=i.$imgHost+"/"+t.imgUrl:t.imgUrl="//cnstatic01.e.vhall.com/static/img/v35-webinar.png",t}),i.tableList=t.data.list,i.total=t.data.total,i.searchParams.page=parseInt(t.data.currPage))}).catch(function(t){201!==t.code&&i.$messageBox({header:"提示",content:t.msg,confirmText:"确定",handleClick:function(i){"cancel"===i.action||i.action}})})},changePage:function(i){this.searchParams.page=i,this.getDataList()},getQuestionDetial:function(i,t,e){var a=this;this.dragData=[],this.$get(U.a.GET_ANSWER,{activityId:i,naireId:t,answerId:e}).then(function(i){a.dragData=i.data.detail,a.title=i.data.title,a.imgUrl=i.data.imgUrl,a.description=i.data.description,a.dragData.forEach(function(i){"checkbox"===i.type?i.answer=i.answer.length>0?i.answer.join("、"):"-":i.answer=i.answer?i.answer:"-"}),a.messageBoxViewShow=!0})},messageBoxClick:function(i){"cancel"===i.action&&(this.messageBoxViewShow=!1)}}},R=(e(900),Object(d.a)(Y,function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"v-activity-list clearfix"},[e("ol",[i._m(0),i._v(" "),i.tableList.length>0?i._l(i.tableList,function(t){return e("li",{key:t.behavior_id,staticClass:"clearfix"},[e("div",{staticClass:"v-activity-content v-name"},[i._v("\n          "+i._s(t.activity_title)+"\n        ")]),i._v(" "),e("div",{staticClass:"v-activity-content v-time"},[i._v("\n          "+i._s(t.generated_at)+"\n        ")]),i._v(" "),e("div",{staticClass:"v-activity-content v-type"},[i._v("\n          "+i._s("APPLY_ACTIVITY"===t.event?"报名":"问卷")+"\n        ")]),i._v(" "),e("div",{staticClass:"v-activity-content v-operation"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){i.getQuestionDetial(t.activity_id,t.data.question_id,t.data.answer_id)}}},[i._v("查看")])])])}):e("li",{staticClass:"v-nodata"},[e("div",[i._v("\n        暂无数据\n      ")])])],2),i._v(" "),e("div",{staticClass:"pagination-box"},[i.total>i.pageSize?e("div",{staticClass:"page-pagination"},[e("ve-pagination",{attrs:{total:i.total,pageSize:i.pageSize,currentPage:i.searchParams.page},on:{changePage:i.changePage}})],1):i._e()]),i._v(" "),e("message-box",{directives:[{name:"show",rawName:"v-show",value:i.messageBoxViewShow,expression:"messageBoxViewShow"}],staticClass:"message-box v-question-box",attrs:{width:"590px",confirmText:"确定",type:"prompt",header:i.boxTitle},on:{handleClick:i.messageBoxClick}},[e("div",{staticClass:"v-content"},[i.defaultImg?e("img",{attrs:{src:i.defaultImg,alt:""}}):i._e(),i._v(" "),e("p",{staticClass:"v-title"},[i._v("\n        "+i._s(this.title)+"\n      ")]),i._v(" "),e("p",{staticClass:"v-summary"},[i._v("\n        "+i._s(this.description)+"\n      ")]),i._v(" "),e("div",{staticClass:"v-hr"}),i._v(" "),e("questions-detail",{attrs:{dragData:i.dragData}})],1)])],1)},[function(){var i=this.$createElement,t=this._self._c||i;return t("li",{staticClass:"clearfix"},[t("div",{staticClass:"v-activity-content v-name"},[this._v("\n        活动名称\n      ")]),this._v(" "),t("div",{staticClass:"v-activity-content v-time"},[this._v("\n        发送时间\n      ")]),this._v(" "),t("div",{staticClass:"v-activity-content v-type"},[this._v("\n        类型\n      ")]),this._v(" "),t("div",{staticClass:"v-activity-content v-operation"},[this._v("\n        操作\n      ")])])}],!1,null,"693c34d8",null));R.options.__file="info-list.vue";var j=R.exports,M=e(722),N=e(532),G=e(543),H=e(63),z={data:function(){return{user:{consumer_uid:"",account_id:"",real_name:"",sex:"",business_consumer_uid:"",user_level:"",nickname:"",phone:"",email:"",email_list:[],wx_open_id:"",birthday:"",industry:"",position:"",education_level:"",source:"",city:"",province:"",area:"",address:"",avatar:"",remark:"",invite_friends_count:"",first_visited_at:"",join_count:"",last_visited_at:"",watch_live_time:"",watch_replay_time:"",group_list:[]},tabValue:1,showAddgroup:!1,imgHost:"//static.vhallyun.com/"}},components:{"com-select":l,"com-footprints":u,"date-select":w,"single-input":h,"city-select":A,"info-list":j,"industry-select":x,"com-addgroup":M.a},computed:{watchTime:function(){var i=0;return this.user.watch_live_time&&(i+=parseInt(this.user.watch_live_time)),this.user.watch_replay_time&&(i+=parseInt(this.user.watch_replay_time)),0===i?"-":i<60?1:Math.round(i/60)},avatarImg:function(){return this.user.avatar?this.imgHost+"/"+this.user.avatar:""}},created:function(){this.getCustomerDetail(),H.a.$emit("breads",[{title:"用户管理"},{title:"用户池",url:"/userManage/pond"},{title:"用户详情"}])},methods:{saveInfo:function(i,t){var e=this;this.user[t]=i;var a={};a.business_consumer_uid=this.$route.params.id,a[t]=i,this.$config({handlers:!0}).$post(o.a.POST_CUSTOMER_UPDATE,a).then(function(i){}).catch(function(i){e.$messageBox({header:"提示",content:i.msg,confirmText:"确定",handleClick:function(i){"cancel"===i.action||i.action}})})},showRecord:function(){this.recordBoxShow=!0},getCustomerDetail:function(){var i=this;this.$config({handlers:!0}).$get(o.a.GET_CUSTOMER_DETAIL,{business_consumer_uid:this.$route.params.id}).then(function(t){i.user=t.data,console.log(i.user)}).catch(function(t){i.$messageBox({header:"提示",content:t.msg,confirmText:"确定",handleClick:function(i){"cancel"===i.action||i.action}})})},getGroupList:function(){this.$post(G.a.GROUPS_LIST,{page:1}).then(function(i){})},typeEmail:function(i){var t="";switch(i){case"APPLY":t="报名";break;case"SURVEY":t="问卷";break;default:t="导入"}return t},getUserLevel:function(i){var t="";switch(i){case"0":t="没有评级";break;case"1":t="优质用户";break;case"2":t="高价值用户";break;case"3":t="一般用户";break;case"4":t="潜力用户";break;case"5":t="流失用户";break;default:t="没有评级"}return t},addGroups:function(){this.showAddgroup=!0},handleClick:function(i){"cancel"===i.action&&(this.showAddgroup=!1)},groupData:function(i){var t=i;n()(t,{business_consumer_uids:this.user.business_consumer_uid}),this.addGroup(t)},addGroup:function(i){var t=this;this.$config({handlers:!0}).$post(N.a.POST_ADD_TO_GROUP,i).then(function(e){var a={};a.title="1"===i.type?i.title:i.name,a.describe=i.describe,t.user.group_list.push(a),t.showAddgroup=!1,t.$toast({content:"导入成功",position:"center"})}).catch(function(i){t.$toast({content:i.msg,position:"center"})})}}},q=(e(901),Object(d.a)(z,function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"pond-page"},[i._m(0),i._v(" "),a("div",{staticClass:"content from-box"},[a("div",{staticClass:"v-user-info"},[a("div",{staticClass:"tt"},[a("div",{staticClass:"left"},[a("div",{staticClass:"lc"},[a("div",{staticClass:"box1"},[i.avatarImg?a("img",{staticClass:"v-avatar",attrs:{src:i.avatarImg,alt:""}}):a("img",{staticClass:"v-avatar",attrs:{src:e(545),alt:""}}),i._v(" "),a("p",{staticClass:"v-name"},[i._v("\n                "+i._s(i.user.real_name?i.user.real_name:"-")+"\n              ")]),i._v(" "),a("p",{staticClass:"v-account-info"},[""!=i.user.sex?a("span",[i._v("\n                  "+i._s(i.user.sex?i.user.sex:"-")+"\n                ")]):i._e(),i._v(" "),a("span",[i._v("\n                  ID： "+i._s(i.user.account_id)+"\n                ")]),i._v(" "),a("span",[i._v("\n                  |\n                ")]),i._v(" "),a("span",{staticClass:"v-type"},[i._v("\n                  "+i._s(i.getUserLevel(i.user.user_level))+"\n                ")])])]),i._v(" "),a("div",{staticClass:"box2"},[a("div",{staticClass:"v-info"},[a("span",{staticClass:"v-label"},[i._v("\n                  昵称：\n                ")]),i._v(" "),a("span",{staticClass:"v-content"},[i._v("\n                  "+i._s(i.user.nickname?i.user.nickname:"-")+"\n                ")])]),i._v(" "),a("div",{staticClass:"v-info"},[a("span",{staticClass:"v-label"},[i._v("\n                  手机：\n                ")]),i._v(" "),a("span",{staticClass:"v-content"},[i._v("\n                  "+i._s(i.user.phone?i.user.phone:"-")+"\n                ")])]),i._v(" "),a("div",{staticClass:"v-info"},[a("span",{staticClass:"v-label"},[i._v("\n                  邮箱：\n                ")]),i._v(" "),a("span",{staticClass:"v-email-info v-fist"},[a("span",{staticClass:"v-content"},[i._v("\n                    "+i._s(i.user.email?i.user.email:"-")+"\n                  ")]),i._v(" "),i.user.email_list.length>0?a("i",{staticClass:"iconfont icon-gengduo2"}):i._e(),i._v(" "),i.user.email_list.length>0?a("div",{staticClass:"v-emails"},i._l(i.user.email_list,function(t){return a("div",{key:t.consumer_email_id,staticClass:"v-email"},[a("span",{staticClass:"v-email-content"},[i._v("\n                        "+i._s(t.email)+"\n                      ")]),i._v(" "),a("span",{staticClass:"v-email-label"},[i._v("\n                        "+i._s(i.typeEmail(t.type))+"\n                      ")])])})):i._e()])]),i._v(" "),a("div",{staticClass:"v-info"},[a("span",{staticClass:"v-label"},[i._v("\n                  微信：\n                ")]),i._v(" "),a("span",{staticClass:"v-content"},[i._v("\n                  "+i._s(i.user.wx_open_id?i.user.wx_open_id:"-")+"\n                ")])])]),i._v(" "),a("div",{staticClass:"box3"},[a("date-select",{attrs:{title:"生日",content:i.user.birthday},on:{saveInfo:function(t){i.saveInfo(t,"birthday")}}}),i._v(" "),a("industry-select",{attrs:{title:"行业",content:i.user.industry,selectType:"comIndustry"},on:{saveInfo:function(t){i.saveInfo(t,"industry")}}}),i._v(" "),a("single-input",{attrs:{title:"职位",content:i.user.position,maxLength:10},on:{saveInfo:function(t){i.saveInfo(t,"position")}}}),i._v(" "),a("industry-select",{attrs:{title:"教育",content:i.user.education_level,selectType:"comEducation",type:"single"},on:{saveInfo:function(t){i.saveInfo(t,"education_level")}}}),i._v(" "),a("div",{staticClass:"v-from"},[a("span",{staticClass:"v-title"},[i._v("\n                  来源：\n                ")]),i._v(" "),a("span",{staticClass:"v-content"},[i._v("\n                  "+i._s(""===i.user.source?"-":i.user.source)+"\n                ")])]),i._v(" "),a("div",{staticClass:"v-from"},[a("span",{staticClass:"v-title"},[i._v("\n                  地区：\n                ")]),i._v(" "),a("span",{staticClass:"v-content"},[i._v("\n                  "+i._s(i.user.province)+"-"+i._s(i.user.city)+"\n                ")])]),i._v(" "),a("single-input",{attrs:{title:"地址",content:i.user.address,maxLength:40},on:{saveInfo:function(t){i.saveInfo(t,"address")}}}),i._v(" "),a("single-input",{attrs:{title:"备注",content:i.user.remark,maxLength:40},on:{saveInfo:function(t){i.saveInfo(t,"remark")}}})],1),i._v(" "),a("div",{staticClass:"box4"},[a("p",{staticClass:"v-title"},[i._v("\n                所属群组\n                "),a("i",{staticClass:"iconfont icon-tianjia fr",on:{click:i.addGroups}})]),i._v(" "),a("div",{staticClass:"v-groups clearfix"},i._l(i.user.group_list,function(t){return a("div",{key:t.title,staticClass:"v-item fl"},[a("span",[i._v("\n                    "+i._s(t.title)+"\n                  ")]),i._v(" "),a("div",{staticClass:"v-description"},[i._v("\n                    "+i._s(t.describe)+"\n                  ")])])}))]),i._v(" "),a("div",{staticClass:"box5"},[a("p",{staticClass:"v-title"},[i._v("\n                所属标签\n              ")]),i._v(" "),a("div",{staticClass:"v-labels clearfix"},i._l(i.user.tag_list,function(t){return a("div",{key:t.tag_id,staticClass:"v-item fl"},[a("span",[i._v("\n                    "+i._s(t.tag_name)+"\n                  ")]),i._v(" "),a("div",{staticClass:"v-description"},[i._v("\n                    "+i._s(t.describe)+"\n                  ")])])}))])])]),i._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"ru"},[a("ol",{staticClass:"clearfix"},[a("li",[a("p",{staticClass:"v-data"},[i._v("\n                  "+i._s(i.user.join_count?i.user.join_count:0)+"\n                ")]),i._v(" "),a("p",{staticClass:"v-title"},[i._v("\n                  参会次数\n                ")])]),i._v(" "),a("li",[a("p",{staticClass:"v-data"},[i._v("\n                  "+i._s(i.user.first_visited_at?i.user.first_visited_at.substring(0,11):"-")+"\n                ")]),i._v(" "),a("p",{staticClass:"v-title"},[i._v("\n                  首次参会\n                ")])]),i._v(" "),a("li",[a("p",{staticClass:"v-data"},[i._v("\n                  "+i._s(i.user.last_visited_at?i.user.last_visited_at.substring(0,11):"-")+"\n                ")]),i._v(" "),a("p",{staticClass:"v-title"},[i._v("\n                  最近参会\n                ")])]),i._v(" "),a("li",[a("p",{staticClass:"v-data"},[i._v("\n                  "+i._s(i.watchTime)+" ")]),i._v(" "),a("p",{staticClass:"v-title"},[i._v("\n                  累计观看 (分)\n                ")])]),i._v(" "),a("li",[a("p",{staticClass:"v-data"},[i._v("\n                  "+i._s(i.user.invite_friends_count?i.user.invite_friends_count:0)+"\n                ")]),i._v(" "),a("p",{staticClass:"v-title"},[i._v("\n                  邀请好友 (个)\n                ")])])])]),i._v(" "),a("div",{staticClass:"rb"},[a("com-tabs",{attrs:{value:i.tabValue},on:{"update:value":function(t){i.tabValue=t}}},[a("com-tab",{attrs:{label:"用户足迹",index:1}},[a("com-footprints")],1),i._v(" "),a("com-tab",{attrs:{label:"报名/问卷信息",index:2}},[a("info-list")],1)],1)],1)])])])]),i._v(" "),i.showAddgroup?a("com-addgroup",{on:{handleClick:i.handleClick,groupData:i.groupData}}):i._e()],1)},[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"pond-title"},[t("span",{staticClass:"title"},[this._v("用户详情")])])}],!1,null,"0501ef60",null));q.options.__file="info.vue";t.default=q.exports},682:function(i,t,e){},683:function(i,t,e){},684:function(i,t,e){},685:function(i,t,e){},686:function(i,t,e){},687:function(i,t,e){},688:function(i,t,e){},689:function(i,t,e){},690:function(i,t,e){},691:function(i,t,e){},892:function(i,t,e){"use strict";var a=e(682);e.n(a).a},893:function(i,t,e){"use strict";var a=e(683);e.n(a).a},894:function(i,t,e){"use strict";var a=e(684);e.n(a).a},895:function(i,t,e){"use strict";var a=e(685);e.n(a).a},896:function(i,t,e){"use strict";var a=e(686);e.n(a).a},897:function(i,t,e){"use strict";var a=e(687);e.n(a).a},898:function(i,t,e){"use strict";var a=e(688);e.n(a).a},899:function(i,t,e){"use strict";var a=e(689);e.n(a).a},900:function(i,t,e){"use strict";var a=e(690);e.n(a).a},901:function(i,t,e){"use strict";var a=e(691);e.n(a).a}}]);
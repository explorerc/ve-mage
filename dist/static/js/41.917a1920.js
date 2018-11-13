(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{613:function(e,i,n){},614:function(e,i,n){},816:function(e,i,n){"use strict";var t=n(613);n.n(t).a},817:function(e,i,n){"use strict";var t=n(614);n.n(t).a},858:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"userGroups"}},[n("div",{staticClass:"operation"},[n("h4",[e._v("用户群组")]),e._v(" "),n("div",[n("el-input",{attrs:{size:"small",placeholder:"输入群组名称","suffix-icon":"el-icon-search",clearable:""},on:{blur:e.onSearch},nativeOn:{keyup:function(i){return"button"in i||!e._k(i.keyCode,"enter",13,i.key,"Enter")?e.onSearch(i):null}},model:{value:e.search.keyword,callback:function(i){e.$set(e.search,"keyword",i)},expression:"search.keyword"}}),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(i){e.showDialog(2)}}},[e._v("新建固定群组\n      ")]),e._v(" "),n("el-button",{attrs:{size:"small",round:""},on:{click:function(i){e.showDialog(3)}}},[e._v("新建智能群组\n      ")])],1)]),e._v(" "),n("div",{staticClass:"table-box"},[n("el-table",{staticClass:"el-table",attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"群组名称"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("div",[n("span",[e._v(e._s(i.row.title))]),e._v(" "),1===i.row.type?n("span",{staticClass:"default"}):e._e()])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"群组类型"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("div",[e._v(e._s(e._f("getType")(i.row.type)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"user_count",label:"群组人数"}}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return[n("span",[e._v(e._s(i.row.updated_at?i.row.updated_at:i.row.created_at))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"describe",label:"群组描述"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDetails(i.row.group_id,i.row.type)}}},[e._v("详情\n          ")]),e._v(" "),1!==i.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleEdit(i.row.group_id,i.row.title,i.row.describe,i.row.type,i.row.rules)}}},[e._v("\n            编辑\n          ")]):e._e(),e._v(" "),1!==i.row.type?n("el-button",{staticClass:"btns",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDelete(i.row.group_id,i.row.type,i.$index)}}},[e._v("删除\n          ")]):e._e()]}}])})],1),e._v(" "),n("VePagination",{staticClass:"VePagination",attrs:{pageSize:e.search.pageSize,total:e.total},on:{changePage:e.changePage}})],1),e._v(" "),e.isShow?n("message-box",{attrs:{header:e.dialogTitle,width:"590px",type:"prompt",confirmText:"保存"},on:{handleClick:e.saveHandleClick}},[n("div",{staticClass:"prop-input"},[n("div",[n("el-form",{ref:"Group",attrs:{model:e.Group,rules:e.rules}},[n("el-form-item",{attrs:{prop:"title"}},[n("com-input",{staticClass:"input_s",attrs:{"max-length":10,errorTips:e.errTitle,placeholder:"请输入群组名称"},nativeOn:{keyup:function(i){e.inpTitle(i)}},model:{value:e.Group.title,callback:function(i){e.$set(e.Group,"title","string"==typeof i?i.trim():i)},expression:"Group.title"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"describe"}},[n("com-input",{staticClass:"input_s",attrs:{"max-length":30,errorTips:e.errDes,placeholder:"请输入群组描述"},nativeOn:{keyup:function(i){e.inpDes(i)}},model:{value:e.Group.describe,callback:function(i){e.$set(e.Group,"describe","string"==typeof i?i.trim():i)},expression:"Group.describe"}})],1)],1),e._v(" "),n("div",{staticClass:"screen"},[3===e.Group.type?n("condOption",{ref:"cond_option",attrs:{rule:e.Group.rule,type:e.isAddOrEdit},on:{optionData:e.optionData}}):e._e()],1)],1)])]):e._e()],1)};t._withStripped=!0;var a=n(452),d=n.n(a),p=n(454),m=n.n(p),s=n(482),o=n(472),u=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"cond-option"}},[n("ul",e._l(e.shadowOutD,function(i,t){return n("li",[n("div",{staticClass:"option-box"},[n("p",{staticClass:"option_title"},[e._v("筛选条件")]),e._v(" "),e._l(i,function(i,a){return n("div",[n("el-cascader",{attrs:{options:e.options,props:e.props,"show-all-levels":!1},on:{change:function(n){e.handleItemChange(i,t,a)}},model:{value:i.keys,callback:function(n){e.$set(i,"keys",n)},expression:"m.keys"}}),e._v(" "),i.keys?n("el-select",{attrs:{"value-key":"name",placeholder:"请选择"},on:{change:function(n){e.optionItemChange(i,t,a)}},model:{value:i.condition,callback:function(n){e.$set(i,"condition",n)},expression:"m.condition"}},e._l(i.conds,function(e,i){return n("el-option",{key:i.name,attrs:{label:e.name,value:e.key}})})):e._e(),e._v(" "),i.condition?n("div",{staticClass:"option-value"},["select"==i.type?n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:i.value,callback:function(n){e.$set(i,"value",n)},expression:"m.value"}},e._l(i.optionValue,function(e,i){return n("el-option",{key:i.key,attrs:{label:e.name,value:e.key}})})):"text"===i.type?n("el-input",{attrs:{type:i.type,placeholder:"请输入内容"},model:{value:i.value,callback:function(n){e.$set(i,"value",n)},expression:"m.value"}}):"number"===i.type?n("el-input-number",{attrs:{placeholder:"请输入",controls:!1,min:1,max:1e11},model:{value:i.value,callback:function(n){e.$set(i,"value",n)},expression:"m.value"}}):"date"===i.type?n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:i.value,callback:function(n){e.$set(i,"value",n)},expression:"m.value"}}):""===i.type?n("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{placeholder:"请输入内容"},model:{value:i.value=null,callback:function(n){e.$set(i,"value =null",n)},expression:"m.value =null"}}):e._e(),e._v("\n            "+e._s(i.unit)+"\n          ")],1):e._e(),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.disDel,expression:"disDel"}],staticClass:"el-icon-delete",on:{click:function(i){e.del(t,a)}}})],1)}),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.shadowOutD[t].length<10,expression:"shadowOutD[ind].length<10"}],attrs:{size:"mini"},on:{click:function(i){e.and(t)}}},[e._v("AND")])],2),e._v(" "),n("div",{staticClass:"orBtn"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.shadowOutD.length<10,expression:"shadowOutD.length<10"}],attrs:{size:"mini"},on:{click:e.or}},[e._v("OR")])],1)])}))])};u._withStripped=!0;var l=[{id:0,name:"全部"},{id:1,name:"北京"},{id:2,name:"上海"},{id:3,name:"天津"},{id:4,name:"重庆"},{id:5,name:"河北"},{id:6,name:"山西"},{id:7,name:"内蒙古"},{id:8,name:"辽宁"},{id:9,name:"吉林"},{id:10,name:"黑龙江"},{id:11,name:"江苏"},{id:12,name:"浙江"},{id:13,name:"安徽"},{id:14,name:"福建"},{id:15,name:"江西"},{id:16,name:"山东"},{id:17,name:"河南"},{id:18,name:"湖北"},{id:19,name:"湖南"},{id:20,name:"广东"},{id:21,name:"广西"},{id:22,name:"海南"},{id:23,name:"四川"},{id:24,name:"贵州"},{id:25,name:"云南"},{id:26,name:"西藏"},{id:27,name:"陕西"},{id:28,name:"甘肃"},{id:29,name:"宁夏"},{id:30,name:"青海"},{id:31,name:"新疆"},{id:32,name:"香港"},{id:33,name:"澳门"},{id:34,name:"台湾"},{id:35,name:"海外"}],r=[{id:1e3,name:"全部"},{id:1001,pid:1,name:"北京"},{id:1002,pid:2,name:"上海"},{id:1003,pid:3,name:"天津"},{id:1004,pid:4,name:"重庆"},{id:1005,pid:5,name:"石家庄"},{id:1006,pid:5,name:"邯郸"},{id:1007,pid:5,name:"邢台"},{id:1008,pid:5,name:"保定"},{id:1009,pid:5,name:"张家口"},{id:1010,pid:5,name:"承德"},{id:1011,pid:5,name:"廊坊"},{id:1012,pid:5,name:"唐山"},{id:1013,pid:5,name:"秦皇岛"},{id:1014,pid:5,name:"沧州"},{id:1015,pid:5,name:"衡水"},{id:1016,pid:6,name:"太原"},{id:1017,pid:6,name:"大同"},{id:1018,pid:6,name:"阳泉"},{id:1019,pid:6,name:"长治"},{id:1020,pid:6,name:"晋城"},{id:1021,pid:6,name:"朔州"},{id:1022,pid:6,name:"吕梁"},{id:1023,pid:6,name:"忻州"},{id:1024,pid:6,name:"晋中"},{id:1025,pid:6,name:"临汾"},{id:1026,pid:6,name:"运城"},{id:1027,pid:7,name:"呼和浩特"},{id:1028,pid:7,name:"包头"},{id:1029,pid:7,name:"乌海"},{id:1030,pid:7,name:"赤峰"},{id:1031,pid:7,name:"呼伦贝尔盟"},{id:1032,pid:7,name:"阿拉善盟"},{id:1033,pid:7,name:"哲里木盟"},{id:1034,pid:7,name:"兴安盟"},{id:1035,pid:7,name:"乌兰察布盟"},{id:1036,pid:7,name:"锡林郭勒盟"},{id:1037,pid:7,name:"巴彦淖尔盟"},{id:1038,pid:7,name:"伊克昭盟"},{id:1039,pid:8,name:"沈阳"},{id:1040,pid:8,name:"大连"},{id:1041,pid:8,name:"鞍山"},{id:1042,pid:8,name:"抚顺"},{id:1043,pid:8,name:"本溪"},{id:1044,pid:8,name:"丹东"},{id:1045,pid:8,name:"锦州"},{id:1046,pid:8,name:"营口"},{id:1047,pid:8,name:"阜新"},{id:1048,pid:8,name:"辽阳"},{id:1049,pid:8,name:"盘锦"},{id:1050,pid:8,name:"铁岭"},{id:1051,pid:8,name:"朝阳"},{id:1052,pid:8,name:"葫芦岛"},{id:1053,pid:9,name:"长春"},{id:1054,pid:9,name:"吉林"},{id:1055,pid:9,name:"四平"},{id:1056,pid:9,name:"辽源"},{id:1057,pid:9,name:"通化"},{id:1058,pid:9,name:"白山"},{id:1059,pid:9,name:"松原"},{id:1060,pid:9,name:"白城"},{id:1061,pid:9,name:"延边"},{id:1062,pid:10,name:"哈尔滨"},{id:1063,pid:10,name:"齐齐哈尔"},{id:1064,pid:10,name:"牡丹江"},{id:1065,pid:10,name:"佳木斯"},{id:1066,pid:10,name:"大庆"},{id:1067,pid:10,name:"绥化"},{id:1068,pid:10,name:"鹤岗"},{id:1069,pid:10,name:"鸡西"},{id:1070,pid:10,name:"黑河"},{id:1071,pid:10,name:"双鸭山"},{id:1072,pid:10,name:"伊春"},{id:1073,pid:10,name:"七台河"},{id:1074,pid:10,name:"大兴安岭"},{id:1075,pid:11,name:"南京"},{id:1076,pid:11,name:"镇江"},{id:1077,pid:11,name:"苏州"},{id:1078,pid:11,name:"南通"},{id:1079,pid:11,name:"扬州"},{id:1080,pid:11,name:"盐城"},{id:1081,pid:11,name:"徐州"},{id:1082,pid:11,name:"连云港"},{id:1083,pid:11,name:"常州"},{id:1084,pid:11,name:"无锡"},{id:1085,pid:11,name:"宿迁"},{id:1086,pid:11,name:"泰州"},{id:1087,pid:11,name:"淮安"},{id:1088,pid:12,name:"杭州"},{id:1089,pid:12,name:"宁波"},{id:1090,pid:12,name:"温州"},{id:1091,pid:12,name:"嘉兴"},{id:1092,pid:12,name:"湖州"},{id:1093,pid:12,name:"绍兴"},{id:1094,pid:12,name:"金华"},{id:1095,pid:12,name:"衢州"},{id:1096,pid:12,name:"舟山"},{id:1097,pid:12,name:"台州"},{id:1098,pid:12,name:"丽水"},{id:1099,pid:13,name:"合肥"},{id:1100,pid:13,name:"芜湖"},{id:1101,pid:13,name:"蚌埠"},{id:1102,pid:13,name:"马鞍山"},{id:1103,pid:13,name:"淮北"},{id:1104,pid:13,name:"铜陵"},{id:1105,pid:13,name:"安庆"},{id:1106,pid:13,name:"黄山"},{id:1107,pid:13,name:"滁州"},{id:1108,pid:13,name:"宿州"},{id:1109,pid:13,name:"池州"},{id:1110,pid:13,name:"淮南"},{id:1111,pid:13,name:"巢湖"},{id:1112,pid:13,name:"阜阳"},{id:1113,pid:13,name:"六安"},{id:1114,pid:13,name:"宣城"},{id:1115,pid:13,name:"亳州"},{id:1116,pid:14,name:"福州"},{id:1117,pid:14,name:"厦门"},{id:1118,pid:14,name:"莆田"},{id:1119,pid:14,name:"三明"},{id:1120,pid:14,name:"泉州"},{id:1121,pid:14,name:"漳州"},{id:1122,pid:14,name:"南平"},{id:1123,pid:14,name:"龙岩"},{id:1124,pid:14,name:"宁德"},{id:1125,pid:15,name:"南昌市"},{id:1126,pid:15,name:"景德镇"},{id:1127,pid:15,name:"九江"},{id:1128,pid:15,name:"鹰潭"},{id:1129,pid:15,name:"萍乡"},{id:1130,pid:15,name:"新馀"},{id:1131,pid:15,name:"赣州"},{id:1132,pid:15,name:"吉安"},{id:1133,pid:15,name:"宜春"},{id:1134,pid:15,name:"抚州"},{id:1135,pid:15,name:"上饶"},{id:1136,pid:16,name:"济南"},{id:1137,pid:16,name:"青岛"},{id:1138,pid:16,name:"淄博"},{id:1139,pid:16,name:"枣庄"},{id:1140,pid:16,name:"东营"},{id:1141,pid:16,name:"烟台"},{id:1142,pid:16,name:"潍坊"},{id:1143,pid:16,name:"济宁"},{id:1144,pid:16,name:"泰安"},{id:1145,pid:16,name:"威海"},{id:1146,pid:16,name:"日照"},{id:1147,pid:16,name:"莱芜"},{id:1148,pid:16,name:"临沂"},{id:1149,pid:16,name:"德州"},{id:1150,pid:16,name:"聊城"},{id:1151,pid:16,name:"滨州"},{id:1152,pid:16,name:"菏泽"},{id:1153,pid:17,name:"郑州"},{id:1154,pid:17,name:"开封"},{id:1155,pid:17,name:"洛阳"},{id:1156,pid:17,name:"平顶山"},{id:1157,pid:17,name:"安阳"},{id:1158,pid:17,name:"鹤壁"},{id:1159,pid:17,name:"新乡"},{id:1160,pid:17,name:"焦作"},{id:1161,pid:17,name:"濮阳"},{id:1162,pid:17,name:"许昌"},{id:1163,pid:17,name:"漯河"},{id:1164,pid:17,name:"三门峡"},{id:1165,pid:17,name:"南阳"},{id:1166,pid:17,name:"商丘"},{id:1167,pid:17,name:"信阳"},{id:1168,pid:17,name:"周口"},{id:1169,pid:17,name:"驻马店"},{id:1170,pid:17,name:"济源"},{id:1171,pid:18,name:"武汉"},{id:1172,pid:18,name:"宜昌"},{id:1173,pid:18,name:"荆州"},{id:1174,pid:18,name:"襄樊"},{id:1175,pid:18,name:"黄石"},{id:1176,pid:18,name:"荆门"},{id:1177,pid:18,name:"黄冈"},{id:1178,pid:18,name:"十堰"},{id:1179,pid:18,name:"恩施"},{id:1180,pid:18,name:"潜江"},{id:1181,pid:18,name:"天门"},{id:1182,pid:18,name:"仙桃"},{id:1183,pid:18,name:"随州"},{id:1184,pid:18,name:"咸宁"},{id:1185,pid:18,name:"孝感"},{id:1186,pid:18,name:"鄂州"},{id:1187,pid:19,name:"长沙"},{id:1188,pid:19,name:"常德"},{id:1189,pid:19,name:"株洲"},{id:1190,pid:19,name:"湘潭"},{id:1191,pid:19,name:"衡阳"},{id:1192,pid:19,name:"岳阳"},{id:1193,pid:19,name:"邵阳"},{id:1194,pid:19,name:"益阳"},{id:1195,pid:19,name:"娄底"},{id:1196,pid:19,name:"怀化"},{id:1197,pid:19,name:"郴州"},{id:1198,pid:19,name:"永州"},{id:1199,pid:19,name:"湘西"},{id:1200,pid:19,name:"张家界"},{id:1201,pid:20,name:"广州"},{id:1202,pid:20,name:"深圳"},{id:1203,pid:20,name:"珠海"},{id:1204,pid:20,name:"汕头"},{id:1205,pid:20,name:"东莞"},{id:1206,pid:20,name:"中山"},{id:1207,pid:20,name:"佛山"},{id:1208,pid:20,name:"韶关"},{id:1209,pid:20,name:"江门"},{id:1210,pid:20,name:"湛江"},{id:1211,pid:20,name:"茂名"},{id:1212,pid:20,name:"肇庆"},{id:1213,pid:20,name:"惠州"},{id:1214,pid:20,name:"梅州"},{id:1215,pid:20,name:"汕尾"},{id:1216,pid:20,name:"河源"},{id:1217,pid:20,name:"阳江"},{id:1218,pid:20,name:"清远"},{id:1219,pid:20,name:"潮州"},{id:1220,pid:20,name:"揭阳"},{id:1221,pid:20,name:"云浮"},{id:1222,pid:21,name:"南宁"},{id:1223,pid:21,name:"柳州"},{id:1224,pid:21,name:"桂林"},{id:1225,pid:21,name:"梧州"},{id:1226,pid:21,name:"北海"},{id:1227,pid:21,name:"防城港"},{id:1228,pid:21,name:"钦州"},{id:1229,pid:21,name:"贵港"},{id:1230,pid:21,name:"玉林"},{id:1231,pid:21,name:"南宁地区"},{id:1232,pid:21,name:"柳州地区"},{id:1233,pid:21,name:"贺州"},{id:1234,pid:21,name:"百色"},{id:1235,pid:21,name:"河池"},{id:1236,pid:22,name:"海口"},{id:1237,pid:22,name:"三亚"},{id:1238,pid:23,name:"成都"},{id:1239,pid:23,name:"绵阳"},{id:1240,pid:23,name:"德阳"},{id:1241,pid:23,name:"自贡"},{id:1242,pid:23,name:"攀枝花"},{id:1243,pid:23,name:"广元"},{id:1244,pid:23,name:"内江"},{id:1245,pid:23,name:"乐山"},{id:1246,pid:23,name:"南充"},{id:1247,pid:23,name:"宜宾"},{id:1248,pid:23,name:"广安"},{id:1249,pid:23,name:"达川"},{id:1250,pid:23,name:"雅安"},{id:1251,pid:23,name:"眉山"},{id:1252,pid:23,name:"甘孜"},{id:1253,pid:23,name:"凉山"},{id:1254,pid:23,name:"泸州"},{id:1255,pid:24,name:"贵阳"},{id:1256,pid:24,name:"六盘水"},{id:1257,pid:24,name:"遵义"},{id:1258,pid:24,name:"安顺"},{id:1259,pid:24,name:"铜仁"},{id:1260,pid:24,name:"黔西南"},{id:1261,pid:24,name:"毕节"},{id:1262,pid:24,name:"黔东南"},{id:1263,pid:24,name:"黔南"},{id:1264,pid:25,name:"昆明"},{id:1265,pid:25,name:"大理"},{id:1266,pid:25,name:"曲靖"},{id:1267,pid:25,name:"玉溪"},{id:1268,pid:25,name:"昭通"},{id:1269,pid:25,name:"楚雄"},{id:1270,pid:25,name:"红河"},{id:1271,pid:25,name:"文山"},{id:1272,pid:25,name:"思茅"},{id:1273,pid:25,name:"西双版纳"},{id:1274,pid:25,name:"保山"},{id:1275,pid:25,name:"德宏"},{id:1276,pid:25,name:"丽江"},{id:1277,pid:25,name:"怒江"},{id:1278,pid:25,name:"迪庆"},{id:1279,pid:25,name:"临沧"},{id:1280,pid:26,name:"拉萨"},{id:1281,pid:26,name:"日喀则"},{id:1282,pid:26,name:"山南"},{id:1283,pid:26,name:"林芝"},{id:1284,pid:26,name:"昌都"},{id:1285,pid:26,name:"阿里"},{id:1286,pid:26,name:"那曲"},{id:1287,pid:27,name:"西安"},{id:1288,pid:27,name:"宝鸡"},{id:1289,pid:27,name:"咸阳"},{id:1290,pid:27,name:"铜川"},{id:1291,pid:27,name:"渭南"},{id:1292,pid:27,name:"延安"},{id:1293,pid:27,name:"榆林"},{id:1294,pid:27,name:"汉中"},{id:1295,pid:27,name:"安康"},{id:1296,pid:27,name:"商洛"},{id:1297,pid:28,name:"兰州"},{id:1298,pid:28,name:"嘉峪关"},{id:1299,pid:28,name:"金昌"},{id:1300,pid:28,name:"白银"},{id:1301,pid:28,name:"天水"},{id:1302,pid:28,name:"酒泉"},{id:1303,pid:28,name:"张掖"},{id:1304,pid:28,name:"武威"},{id:1305,pid:28,name:"定西"},{id:1306,pid:28,name:"陇南"},{id:1307,pid:28,name:"平凉"},{id:1308,pid:28,name:"庆阳"},{id:1309,pid:28,name:"临夏"},{id:1310,pid:28,name:"甘南"},{id:1311,pid:29,name:"银川"},{id:1312,pid:29,name:"石嘴山"},{id:1313,pid:29,name:"吴忠"},{id:1314,pid:29,name:"固原"},{id:1315,pid:30,name:"西宁"},{id:1316,pid:30,name:"海东"},{id:1317,pid:30,name:"海南"},{id:1318,pid:30,name:"海北"},{id:1319,pid:30,name:"黄南"},{id:1320,pid:30,name:"玉树"},{id:1321,pid:30,name:"果洛"},{id:1322,pid:30,name:"海西"},{id:1323,pid:31,name:"乌鲁木齐"},{id:1324,pid:31,name:"石河子"},{id:1325,pid:31,name:"克拉玛依"},{id:1326,pid:31,name:"伊犁"},{id:1327,pid:31,name:"巴音郭勒"},{id:1328,pid:31,name:"昌吉"},{id:1329,pid:31,name:"克孜勒苏柯尔克孜"},{id:1330,pid:31,name:"博 尔塔拉"},{id:1331,pid:31,name:"吐鲁番"},{id:1332,pid:31,name:"哈密"},{id:1333,pid:31,name:"喀什"},{id:1334,pid:31,name:"和田"},{id:1335,pid:31,name:"阿克苏"},{id:1336,pid:32,name:"香港"},{id:1337,pid:33,name:"澳门"},{id:1338,pid:34,name:"台北"},{id:1339,pid:34,name:"高雄"},{id:1340,pid:34,name:"台中"},{id:1341,pid:34,name:"台南"},{id:1342,pid:34,name:"屏东"},{id:1343,pid:34,name:"南投"},{id:1344,pid:34,name:"云林"},{id:1345,pid:34,name:"新竹"},{id:1346,pid:34,name:"彰化"},{id:1347,pid:34,name:"苗栗"},{id:1348,pid:34,name:"嘉义"},{id:1349,pid:34,name:"花莲"},{id:1350,pid:34,name:"桃园"},{id:1351,pid:34,name:"宜兰"},{id:1352,pid:34,name:"基隆"},{id:1353,pid:34,name:"台东"},{id:1354,pid:34,name:"金门"},{id:1355,pid:34,name:"马祖"},{id:1356,pid:34,name:"澎湖"},{id:1357,pid:35,name:"海外"}],c={props:["type","rule"],data:function(){return{disDel:!1,saveData:[],props:{value:"key",label:"name"},outD:[[{condition:"",key:"",value:""}]],shadowOutD:[[{condition:"",key:"",value:""}]],options:[{name:"观看直播相关",key:"watch_live_dep",children:[{name:"预约/报名活动",key:"sign_up_count"},{name:"观看直播时长",key:"watch_live_time"},{name:"参与活动次数",key:"join_count"},{name:"观看回放",key:"watch_replay_time"},{name:"观看回放次数",key:"watch_replay_count"},{name:"聊天数量",key:"chat_count"}]},{name:"传播行为",key:"propagation",children:[{name:"分享次数",key:"share_count",value:""},{name:"邀请好友",key:"invite_friends_count",value:""}]},{name:"用户属性",key:"user_attr",children:[{name:"姓名",key:"real_name",value:""},{name:"职位",key:"position",value:""},{name:"邮箱",key:"email",value:""},{name:"手机号",key:"phone",value:""},{name:"性别",key:"sex",value:""},{name:"生日",key:"birthday",value:""},{name:"行业",key:"industry",value:""},{name:"省份",key:"province",value:""},{name:"城市",key:"city",value:""},{name:"用户等级",key:"user_level",value:""},{name:"首次访问时间",key:"first_visited_at",value:""},{name:"最近访问时间",key:"last_visited_at",value:""}]},{name:"其他维度",key:"other",children:[{name:"时间",key:"created_at",value:""},{name:"标签",key:"tags",value:""},{name:"群组",key:"groups",value:""}]}],condOption:{sign_up_count:{keys:["watch_live_dep","sign_up_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_live_time:{keys:["watch_live_dep","watch_live_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},join_count:{keys:["watch_live_dep","join_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},watch_replay_time:{keys:["watch_live_dep","watch_replay_time"],cons:[{key:"eq",name:"等于",type:"number",unit:"分钟"},{key:"gt",name:"大于",type:"number",unit:"分钟"},{key:"lt",name:"小于",type:"number",unit:"分钟"}]},watch_replay_count:{keys:["watch_live_dep","watch_replay_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"it",name:"小于",type:"number",unit:"次"}]},chat_count:{keys:["watch_live_dep","chat_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"条"},{key:"gt",name:"大于",type:"number",unit:"条"},{key:"lt",name:"小于",type:"number",unit:"条"}]},share_count:{keys:["propagation","share_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"次"},{key:"gt",name:"大于",type:"number",unit:"次"},{key:"lt",name:"小于",type:"number",unit:"次"}]},invite_friends_count:{keys:["propagation","invite_friends_count"],cons:[{key:"eq",name:"等于",type:"number",unit:"人"},{key:"gt",name:"大于",type:"number",unit:"人"},{key:"lt",name:"小于",type:"number",unit:"人"}]},common_device:{keys:["browsing","common_device"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},common_browser:{keys:["browsing","common_browser"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},real_name:{keys:["user_attr","real_name"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},position:{keys:["user_attr","position"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},email:{keys:["user_attr","email"],cons:[{key:"contain",name:"包含",type:"text",unit:""},{key:"not_contain",name:"不包含",type:"text",unit:""},{key:"eq",name:"是",type:"text",unit:""},{key:"neq",name:"不是",type:"text",unit:""},{key:"head_eq",name:"开头是",type:"text",unit:""},{key:"tail_eq",name:"结尾是",type:"text",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},phone:{keys:["user_attr","phone"],cons:[{key:"contain",name:"包含",type:"number",unit:""},{key:"not_contain",name:"不包含",type:"number",unit:""},{key:"eq",name:"是",type:"number",unit:""},{key:"neq",name:"不是",type:"number",unit:""},{key:"head_eq",name:"开头是",type:"number",unit:""},{key:"tail_eq",name:"结尾是",type:"number",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},sex:{keys:["user_attr","sex"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},birthday:{keys:["user_attr","birthday"],cons:[{key:"eq",name:"是（哪一天）",type:"date",unit:""},{key:"lt",name:"早于（哪一天）",type:"date",unit:""},{key:"gt",name:"晚于（哪一天）",type:"date",unit:""},{key:null,name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},industry:{keys:["user_attr","industry"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},province:{keys:["user_attr","province"],cons:[{key:"contain",name:"包含",type:"select",unit:""},{key:"not_contain",name:"不包含",type:"select",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},city:{keys:["user_attr","city"],cons:[{key:"contain",name:"包含",type:"select",unit:""},{key:"not_contain",name:"不包含",type:"select",unit:""},{key:"not_null",name:"不为空",type:"",unit:""},{key:null,name:"为空",type:"",unit:""}]},user_level:{keys:["user_attr","user_level"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},first_visited_at:{keys:["user_attr","first_visited_at"],cons:[{key:"eq",name:"是（哪一天）",type:"date",unit:""},{key:"lt",name:"早于（哪一天）",type:"date",unit:""},{key:"gt",name:"晚于（哪一天）",type:"date",unit:""},{key:null,name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},last_visited_at:{keys:["user_attr","last_visited_at"],cons:[{key:"eq",name:"是（哪一天）",type:"date",unit:""},{key:"lt",name:"早于（哪一天）",type:"date",unit:""},{key:"gt",name:"晚于（哪一天）",type:"date",unit:""},{key:null,name:"为空",type:"",unit:""},{key:"not_null",name:"不为空",type:"",unit:""}]},created_at:{keys:["other","created_at"],cons:[{key:"eq",name:"固定",type:"date",unit:""},{key:"lt",name:"相对",type:"number",unit:""}]},tags:{keys:["other","tags"],cons:[{key:"eq",name:"是",type:"select",unit:""}]},groups:{keys:["other","groups"],cons:[{key:"eq",name:"是",type:"select",unit:""}]}},valueOption:{common_browser:[{key:"Chrome",name:"Chrome",type:"select",unit:""},{key:"Edge",name:"Edge",type:"select",unit:""},{key:"Safari",name:"Safari",type:"select",unit:""},{key:"IE",name:"IE",type:"select",unit:""},{key:"火狐",name:"火狐",type:"select",unit:""},{key:"360浏览器",name:"360浏览器",type:"select",unit:""},{key:"QQ",name:"QQ",type:"select",unit:""}],common_device:[{key:"PC",name:"PC",type:"select",unit:""},{key:"手机-IOS",name:"手机-IOS",type:"select",unit:""},{key:"手机-Andriod",name:"手机-Andriod",type:"select",unit:""},{key:"*",name:"全部",type:"select",unit:""}],sex:[{key:"M",name:"男",type:"select",unit:""},{key:"W",name:"女",type:"select",unit:""},{key:"*",name:"全部",type:"select",unit:""},{key:null,name:"为空",type:"select",unit:""}],user_level:[{key:1,name:"优质用户",type:"select",unit:""},{key:2,name:"高价值用户",type:"select",unit:""},{key:4,name:"潜力用户",type:"select",unit:""},{key:3,name:"一般用户",type:"select",unit:""},{key:5,name:"流失用户",type:"select",unit:""},{key:null,name:"为空",type:"select",unit:""},{key:"*",name:"全部",type:"select",unit:""}],industry:[{key:"IT/互联网 ",name:"IT/互联网 ",type:"select",unit:""},{key:"电子/通信/硬件 ",name:"电子/通信/硬件 ",type:"select",unit:""},{key:"金融 ",name:"金融 ",type:"select",unit:""},{key:"交通/贸易/物流 ",name:"交通/贸易/物流 ",type:"select",unit:""},{key:"消费品 ",name:"消费品 ",type:"select",unit:""},{key:"能源/矿产环保",name:"能源/矿产环保 ",type:"select",unit:""},{key:"制药/医疗 ",name:"制药/医疗 ",type:"select",unit:""},{key:"专业服务 ",name:"专业服务 ",type:"select",unit:""},{key:"教育/培训 ",name:"教育/培训 ",type:"select",unit:""},{key:"广告/媒体/娱乐/出版 ",name:"广告/媒体/娱乐/出版 ",type:"select",unit:""},{key:"房地产/建筑 ",name:"房地产/建筑 ",type:"select",unit:""},{key:"服务业 ",name:"服务业 ",type:"select",unit:""},{key:"政府/非盈利机构/其它 ",name:"政府/非盈利机构/其它 ",type:"select",unit:""}],tags:[],groups:[],province:[],city:[]}}},methods:{filVal:function(e){e<1&&(e=1),console.log(e)},handleItemChange:function(e,i,n){e.conds=this.condOption[e.keys[1]].cons,this.shadowOutD[i][n].condition="",this.shadowOutD[i][n].value=""},optionItemChange:function(e,i,n){var t=this;this.shadowOutD[i][n].value="",e.conds.find(function(i){i.key===e.condition&&(e.type=i.type,e.unit=i.unit),e.optionValue=t.valueOption[e.keys[1]]})},and:function(e){var i=this;this.shadowOutD[e].push({key:"",condition:"",value:""}),this.$nextTick(function(){i.shadowOutD[e].length>1&&(i.disDel=!0)})},del:function(e,i){var n=this;this.shadowOutD[e].splice(i,1),this.shadowOutD[e].length<1&&this.shadowOutD.splice(e,1),this.$nextTick(function(){n.shadowOutD&&n.shadowOutD.length<2&&1===n.shadowOutD[0].length?n.disDel=!1:n.disDel=!0})},or:function(){var e=this;this.shadowOutD.push([{key:"",condition:"",value:""}]),this.$nextTick(function(){e.shadowOutD.length<2?e.disDel=!1:e.disDel=!0})},save:function(){var e=this,i=!0;this.saveData=this.shadowOutD.filter(function(n){var t=n.filter(function(n){if(""!==n.condition||""!==n.key){if(console.log(n),n.key=n.keys[1],"date"===n.type){var t=new Date(n.value);n.value=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}return""===n.value?(i=!1,e.$toast({content:"输入框不能为空",position:"center"}),!1):(delete n.optionValue,n)}});if(t.length>0)return t}),i&&this.$emit("optionData",this.saveData)},analysisData:function(){var e=this;this.outD.map(function(i,n){i.map(function(i,n){i.keys=e.condOption[i.key].keys,i.optionValue=e.valueOption[i.keys[1]],e.$set(i,"conds",e.condOption[i.key].cons),i.type=e.condOption[i.key].cons.find(function(e){return e.key===i.condition}).type,i.unit=e.condOption[i.key].cons.find(function(e){return e.key===i.condition}).unit})}),this.shadowOutD=this.outD},getTags:function(){var e=this;this.$post(s.a.ALL_TAGS).then(function(i){i.data.list.forEach(function(i){var n={key:i.tag_id,name:i.tag_name,type:"select",unit:""};e.valueOption.tags.push(n)})})},getGroup:function(){var e=this;this.$post(s.a.ALL_GROUPS,{type:"2"}).then(function(i){i.data.list.forEach(function(i){var n={key:i.group_id,name:i.title,type:"select",unit:""};e.valueOption.groups.push(n)})})},getProvince:function(){var e=this;l.forEach(function(i){var n={key:i.name,name:i.name,type:"select",unit:""};e.valueOption.province.push(n)})},getCity:function(){var e=this;r.forEach(function(i){var n={key:i.name,name:i.name,type:"select",unit:""};e.valueOption.city.push(n)})}},mounted:function(){"edit"===this.type&&(this.outD=this.rule,this.outD.length>1||1===this.outD.length&&this.outD[0].length>1?this.disDel=!0:this.disDel=!1,this.analysisData()),this.getTags(),this.getGroup(),this.getProvince(),this.getCity()}},y=(n(816),n(2)),h=Object(y.a)(c,u,[],!1,null,"99a8fa9a",null);h.options.__file="src/pages/user-groups/cond-option.vue";var k=h.exports,_={name:"index",components:{VePagination:o.a,condOption:k},created:function(){this.onSearch()},filters:{getType:function(e){var i="";switch(e){case 1:i="系统分组";break;case 2:i="固定分组";break;case 3:i="智能分组"}return i}},data:function(){var e=this;return{errTitle:"",errDes:"",isShow:!1,dialogTitle:"",isAddOrEdit:"",inpNameLen:0,inpDesLen:0,search:{pageSize:10,keyword:"",page:1},total:0,Group:{title:"",describe:"",type:"",rule:[]},dialogFixedOrIntel:!1,tableData:[],rules:{title:[{validator:function(i,n,t){if(!n||null==n)return t(new Error("群组名称不能为空"));var a={title:n};"edit"===e.isAddOrEdit&&e.$set(a,"group_id",e.Group.group_id),e.repeatTitle(a).then(function(e){if(200!==e.code)return t(new Error("该群组名称已存在"));t()}).catch(function(e){if(200!==e.code)return t(new Error("该群组名称已存在"));t()})},trigger:"blur"}],describe:[{required:!0,message:"群组描述不能为空",trigger:"blur"}]}}},watch:{dialogFixedOrIntel:function(e,i){this.$refs.Group&&this.$refs.Group.resetFields()}},methods:{saveHandleClick:function(e){"cancel"===e.action?(this.Group.type="",this.errTitle="",this.errDes="",this.isShow=!1):this.save(this.Group)},onSearch:function(){var e=this;this.$post(s.a.GROUPS_LIST,this.search).then(function(i){e.tableData=i.data.list,e.total=m()(i.data.count),e.errTitle="",e.errDes=""})},repeatTitle:function(e){return this.$config({handlers:!0}).$post(s.a.VALI_TITLE,e)},handleDetails:function(e,i){this.$router.push("/userManage/userGroupsDetails/"+e+"/"+i)},handleEdit:function(e,i,n,t,a){this.isAddOrEdit="edit",this.Group.group_id=e,this.Group.title=i,this.Group.describe=n,this.inpNameLen=i.length,this.inpDesLen=n.length,this.Group.type=t,2===t?this.dialogTitle="编辑固定群组":(this.$set(this.Group,"rule",JSON.parse(a)),this.dialogTitle="编辑智能群组"),this.isShow=!0},handleDelete:function(e,i,n){var t=this;this.$messageBox({header:"删除群组",type:"error",width:"450px",content:"<span>删除群组后，组内人员将不再归属于该组。</br> 是否确认删除群组？</span> ",cancelText:"暂不",confirmText:"删除",handleClick:function(a){"cancel"===a.action?t.$toast({content:"已取消删除",position:"center"}):"confirm"===a.action&&t.$post(s.a.DEL_GROUP,{group_id:e,type:i}).then(function(e){t.tableData.splice(n,1),setTimeout(function(){t.onSearch()},1e3),t.$toast({content:"删除成功!",position:"center"})})}})},changePage:function(e){this.search.page=e,this.onSearch()},showDialog:function(e){this.isShow=!0,this.isAddOrEdit="add",this.Group.type=e,this.Group.title="",this.Group.describe="",this.Group.rule="",this.errTitle="",this.errDes="",this.dialogTitle=2===e?"创建固定群组":"创建智能群组"},inpTitle:function(e){var i=this,n=void 0;n||(n=setTimeout(function(){if(clearTimeout(n),n=null,e=e.target.value){var t={title:e};"edit"===i.isAddOrEdit&&i.$set(t,"group_id",i.Group.group_id),i.$config({handlers:!0}).$post(s.a.VALI_TITLE,t).then(function(e){200===e.code&&(i.errTitle="")}).catch(function(e){20002===e.code?i.errTitle="分组名称不能重名":201===e.code&&(i.errTitle="分组名称不能为空")})}else i.errTitle="分组名称不能为空"},500))},inpDes:function(e){e=e.target.value,this.errDes=e?"":"分组描述不能为空"},optionData:function(e){this.Group.rules=d()(e),this.sendData()},sendData:function(){var e=this,i="";i="add"===this.isAddOrEdit?s.a.CREATE_GROUP:s.a.UPDATE_GROUP,delete this.Group.rule,this.$post(i,this.Group).then(function(i){200===i.code&&(e.Group.type=-1,e.isAddOrEdit="",e.inpNameLen=0,e.inpDesLen=0,e.isShow=!1,e.errTitle="",e.errDes=""),setTimeout(function(){e.onSearch()},1e3)})},save:function(e){""!==this.Group.title&&""!==this.Group.describe&&""===this.errTitle&&""===this.errDes&&(2===this.Group.type?this.sendData():3===this.Group.type&&this.$refs.cond_option.save(),this.errTitle="",this.errDes=""),this.Group.title||(this.errTitle="分组名称不能为空"),this.Group.describe||(this.errDes="分组描述不能为空")}}},v=(n(817),Object(y.a)(_,t,[],!1,null,"122dad76",null));v.options.__file="src/pages/user-groups/index.vue";i.default=v.exports}}]);
//# sourceMappingURL=41.917a1920.js.map
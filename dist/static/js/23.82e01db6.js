(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{552:function(a,t,s){},731:function(a,t,s){"use strict";var o=s(552);s.n(o).a},901:function(a,t,s){"use strict";s.r(t);var o=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"invite-page mager-box"},[s("div",{staticClass:"from-box"},[s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[a._v("观众组：")]),a._v(" "),s("div",{staticClass:"from-content"},[s("el-button",{on:{click:function(t){a.groudModal=!0}}},[a._v("选择分组")]),a._v(" "),s("el-button",{on:{click:function(t){a.importModal=!0}}},[a._v("倒入分组")]),a._v(" "),s("el-button",[a._v("下载模版")])],1)]),a._v(" "),a._m(0),a._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[a._v("观看校验：")]),a._v(" "),s("div",{staticClass:"from-content"},[s("el-radio",{attrs:{label:"1"},model:{value:a.radioVerify,callback:function(t){a.radioVerify=t},expression:"radioVerify"}},[a._v("校验手机号")]),a._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:a.radioVerify,callback:function(t){a.radioVerify=t},expression:"radioVerify"}},[a._v("校验邮箱")])],1),a._v(" "),s("span",[a._v("邀请观看需要校验手机号或邮箱，从而帮您获取到更加精准的观众信息")])])]),a._v(" "),s("transition",{attrs:{name:"fade"}},[a.groudModal?s("div",{staticClass:"modal-cover",on:{click:a.closeModal}},[s("div",{staticClass:"modal-box"},[s("h4",[a._v("选择观众组 "),s("span",{staticClass:"close",on:{click:function(t){a.groudModal=!1}}},[a._v("×")])]),a._v(" "),s("div",{staticClass:"content-box"},[s("com-tabs",{staticClass:"choose-tab",attrs:{value:a.tabValue,position:"left",type:"card"},on:{"update:value":function(t){a.tabValue=t}}},[s("com-tab",{attrs:{label:"分组",index:1}},[s("div",{staticClass:"right"},[s("div",{staticClass:"top clearfix"},[s("span",[a._v("分组:"),s("i",[a._v("123")]),a._v("个")]),a._v(" "),s("span",{staticClass:"search"},[s("com-input",{attrs:{value:a.searchTitle,placeholder:"请输入关键字"},on:{"update:value":function(t){a.searchTitle=t}}}),a._v("搜索")],1)]),a._v(" "),s("ol",{staticClass:"list"},[s("li",{key:1,class:{choosed:1==a.groupIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("企业员工"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseGroup(1)}}},[a._v(a._s(1===a.groupIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:2,class:{choosed:2==a.groupIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("企业员工"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseGroup(2)}}},[a._v(a._s(2===a.groupIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:3,class:{choosed:3==a.groupIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("企业员工"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseGroup(3)}}},[a._v(a._s(3===a.groupIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:4,class:{choosed:4==a.groupIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("企业员工"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseGroup(4)}}},[a._v(a._s(4===a.groupIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:5,class:{choosed:5==a.groupIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("企业员工"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseGroup(5)}}},[a._v(a._s(5===a.groupIdx?"已选择":"选择"))])])]),a._v(" "),s("div",{staticClass:"btm clearfix"},[s("span",[a._v("已选择:"),s("i",[a._v("啊啊啊")]),s("i",[a._v("啊啊啊")]),s("i",[a._v("啊啊啊")])]),a._v(" "),s("el-button",[a._v("确定")])],1)])]),a._v(" "),s("com-tab",{attrs:{label:"标签",index:2}},[s("div",{staticClass:"right"},[s("div",{staticClass:"top clearfix"},[s("span",[a._v("标签:"),s("i",[a._v("123")]),a._v("个")]),a._v(" "),s("span",{staticClass:"search"},[s("com-input",{attrs:{value:a.searchTitle,placeholder:"请输入关键字"},on:{"update:value":function(t){a.searchTitle=t}}}),a._v("搜索")],1)]),a._v(" "),s("ol",{staticClass:"list"},[s("li",{key:10,class:{choosed:1==a.tagIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("标签"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseTag(1)}}},[a._v(a._s(1===a.tagIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:6,class:{choosed:2==a.tagIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("标签"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseTag(2)}}},[a._v(a._s(2===a.tagIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:7,class:{choosed:3==a.tagIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("标签"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseTag(3)}}},[a._v(a._s(3===a.tagIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:8,class:{choosed:4==a.tagIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("标签"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseTag(4)}}},[a._v(a._s(4===a.tagIdx?"已选择":"选择"))])]),a._v(" "),s("li",{key:9,class:{choosed:5==a.tagIdx}},[s("span",[s("i",{staticClass:"icon"}),a._v("标签"),s("i",[a._v("(123)")])]),s("em",{staticClass:"choose",on:{click:function(t){t.preventDefault(),a.chooseTag(5)}}},[a._v(a._s(5===a.tagIdx?"已选择":"选择"))])])]),a._v(" "),s("div",{staticClass:"btm clearfix"},[s("span",[a._v("已选择:"),s("i",[a._v("啊啊啊")]),s("i",[a._v("啊啊啊")]),s("i",[a._v("啊啊啊")])]),a._v(" "),s("el-button",[a._v("确定")])],1)])])],1)],1)])]):a._e()]),a._v(" "),s("transition",{attrs:{name:"fade"}},[a.importModal?s("div",{staticClass:"modal-cover",on:{click:a.closeModal}},[s("div",{staticClass:"modal-box"},[s("h4",[a._v("倒入观众组 "),s("span",{staticClass:"close",on:{click:function(t){a.importModal=!1}}},[a._v("×")])]),a._v(" "),s("div",{staticClass:"content-box import-box"},[s("p",{staticClass:"import-title"},[a._v("上传名单："),s("span",[a._v("模版下载")])]),a._v(" "),s("div",{staticClass:"import-content"},[s("com-upload",{attrs:{accept:"png|jpg|jpeg|bmp|gif",actionUrl:"/api/edu/database/doc-upload",inputName:"resfile",fileSize:1024},on:{selected:a.uploadSelected,progress:a.uploadProgress,error:a.uploadError,over:a.uploadOver}},[s("div",{staticClass:"test-upload"},[1===a.uploadData.status?s("div",{staticClass:"upload-btn"},[a._v("选择文件")]):s("div",{staticClass:"upload-btn"},[a._v(a._s(a.uploadData.name))])])]),a._v(" "),1===a.uploadData.status?s("em",[a._v("请使用微吼指定模版文件上传")]):a._e(),a._v(" "),2===a.uploadData.status?s("em",[a._v("文件上传中38%")]):a._e(),a._v(" "),3===a.uploadData.status?s("em",[a._v("上传成功,监测到"+a._s(a.uploadData.infoNum)+"位观众信息")]):a._e(),a._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[a._v("导入规则：")]),a._v(" "),s("div",{staticClass:"from-content"},[s("el-radio",{attrs:{label:"1"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[a._v("创建新的分组")])],1)]),a._v(" "),s("div",{staticClass:"from-row"},[s("div",{staticClass:"from-title"},[a._v("分组名称：")]),a._v(" "),s("div",{staticClass:"from-content"},[s("com-input",{attrs:{value:a.renameGroup,placeholder:"请输入分组名称","max-length":10},on:{"update:value":function(t){a.renameGroup=t}}})],1)]),a._v(" "),s("div",{staticClass:"from-row tag-box"},[s("div",{staticClass:"from-title"},[a._v("客户标签：")]),a._v(" "),s("div",{staticClass:"from-content"},[s("ol",{staticClass:"clearfix"},[s("li",[a._v("外部导入")]),a._v(" "),s("li",[a._v("内部员工")]),a._v(" "),s("li",[a._v("爱上接电话")])]),a._v(" "),s("el-button",{staticClass:"add-tag",on:{click:function(t){a.addTag=!0}}},[a._v("添加")]),a._v(" "),a.addTag?s("div",{staticClass:"tag-list"},[s("p",{staticClass:"title"},[a._v("选择合适的标签 "),s("span",{staticClass:"close",on:{click:function(t){a.addTag=!1}}},[a._v("×")])]),a._v(" "),s("span",[a._v("客户属性标签")]),a._v(" "),s("div",{staticClass:"tag-box clearfix"},[s("el-checkbox-group",{model:{value:a.attrTagArr,callback:function(t){a.attrTagArr=t},expression:"attrTagArr"}},a._l(a.attrTag,function(t){return s("el-checkbox-button",{key:t,attrs:{label:t}},[a._v(a._s(t))])}))],1),a._v(" "),s("span",[a._v("客户行为标签")]),a._v(" "),s("div",{staticClass:"tag-box clearfix"},[s("el-checkbox-group",{model:{value:a.habitTagArr,callback:function(t){a.habitTagArr=t},expression:"habitTagArr"}},a._l(a.habitTag,function(t){return s("el-checkbox-button",{key:t,attrs:{label:t}},[a._v(a._s(t))])}))],1)]):a._e()],1)])],1),a._v(" "),s("el-button",[a._v("保存")])],1)])]):a._e()])],1)};o._withStripped=!0;var i={data:function(){return{groudModal:!1,importModal:!1,tabValue:1,radio:"1",searchTitle:"",groupIdx:0,tagIdx:0,attrIdx:0,habitIdx:0,renameGroup:"",uploadData:{status:1,progress:"",name:"",infoNum:10},addTag:!1,attrTag:["上海","北京","广州","深圳"],habitTag:["上海2","北京2","广州2","深圳2"],attrTagArr:[],habitTagArr:[],radioVerify:""}},created:function(){this.radioVerify="1"},methods:{closeModal:function(a){"modal-cover"===a.target.className&&(this.groudModal=!1,this.groupIdx=0,this.tagIdx=0)},chooseGroup:function(a){this.groupIdx=a},chooseTag:function(a){this.tagIdx=a},uploadSelected:function(a){this.uploadData.status=2,this.uploadData.name=a.data[0].name},uploadProgress:function(a){this.uploadData.status=a.percent},uploadOver:function(a){this.uploadData.status=3},uploadError:function(a){}},watch:{tagIdx:function(a){},groupIdx:function(a){}}},e=(s(731),s(1)),l=Object(e.a)(i,o,[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"from-row"},[t("div",{staticClass:"from-title"},[this._v("已选择：")]),this._v(" "),t("div",{staticClass:"from-content"},[t("ul",{staticClass:"group"},[t("li",[t("span",[this._v("分组1")]),t("i",[this._v("删除")])]),this._v(" "),t("li",[t("span",[this._v("分组2")]),t("i",[this._v("删除")])])])])])}],!1,null,"7af5f781",null);l.options.__file="src/pages/live-mager/prepare/limit/invite.vue";t.default=l.exports}}]);
//# sourceMappingURL=23.82e01db6.js.map
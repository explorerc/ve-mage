(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{292:function(t,a,e){},446:function(t,a,e){"use strict";var i=e(292);e.n(i).a},589:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],attrs:{"com-loading-text":"拼命加载中"}},[e("p",[t._v("角色设置"),e("i",[t._v("？")]),e("span",{on:{click:t.add}},[t._v("添加助理")])]),t._v(" "),e("div",{staticClass:"content"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[e("el-table-column",{attrs:{label:"头像",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticClass:"protrait",attrs:{src:t.imgHost+a.row.avatar}})]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{prop:"role",label:"角色",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s("HOST"===a.row.role?"主持人":"助理"))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"关联活动账号",width:"150",prop:"activityId"}}),t._v(" "),e("el-table-column",{attrs:{prop:"password",label:"口令",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(!0===a.row.online?"在线":"离线"))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"}},[e("a",{attrs:{href:""}},[t._v("进入直播")])]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.copyLink(a.$index,a.row)}}},[t._v("复制链接")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.copyInfo(a.$index,a.row)}}},[t._v("复制邀请信息")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[t._v("编辑")]),t._v(" "),e("el-button",{class:1==a.row.online?"disabled":"",attrs:{type:"text",size:"small"},on:{click:function(e){t.handleKick(a.$index,a.row)}}},[t._v("踢出")]),t._v(" "),"HOST"!=a.row.role?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.handleDelete(a.$index,a.row)}}},[t._v("删除角色")]):t._e()]}}])})],1)],1),t._v(" "),t.msgKick?e("message-box",{attrs:{header:"提示",content:"执行踢出操作后，该角色将从发起端中被强制踢出，是否继续操作？",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.kickConfirm}}):t._e(),t._v(" "),t.msgDelete?e("message-box",{attrs:{header:"提示",content:"是否确认删除该角色？",cancelText:"取消",confirmText:"确定"},on:{handleClick:t.deleteConfirm}}):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.modalData.isShow?e("div",{staticClass:"modal-cover",on:{click:t.closeModal}},[e("div",{staticClass:"created-modal"},[e("p",[t._v(t._s(t.modalData.title))]),t._v(" "),e("div",{staticClass:"btm"},[e("div",[e("label",[t._v("头像:")]),t._v(" "),e("com-upload",{attrs:{accept:"png|jpg|jpeg",actionUrl:"/api/upload/image",inputName:"file",fileSize:1024},on:{error:t.uploadError,progress:t.uploadProgress,load:t.uploadImgSuccess}},[e("div",{staticClass:"upload-file-box",attrs:{title:"点击上传"}},[t.percentImg?e("el-progress",{attrs:{type:"circle",percentage:t.percentImg}}):t._e(),t._v(" "),e("i",{staticClass:"iconfont icon-jiahao"}),t._v(" "),e("span",[t._v("上传头像")]),t._v(" "),t.modalData.avatar?e("div",{staticClass:"upload-file-botton"},[t._v("编辑")]):t._e(),t._v(" "),t.modalData.avatar?e("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.imgHost+"/"+t.modalData.avatar+")"}}):t._e()],1)])],1),t._v(" "),e("div",[e("label",[t._v("昵称:")]),t._v(" "),e("com-input",{attrs:{value:t.modalData.nickname,placeholder:"请输入昵称","max-length":10},on:{"update:value":function(a){t.$set(t.modalData,"nickname",a)}}})],1),t._v(" "),e("div",[e("label",[t._v("口令:")]),t._v(" "),e("com-input",{attrs:{value:t.modalData.password,placeholder:"请输入口令","max-length":6},on:{"update:value":function(a){t.$set(t.modalData,"password",a)}}})],1)]),t._v(" "),e("p",[e("button",{on:{click:function(a){t.saveSetting(t.activityId)}}},[t._v("确定")])])])]):t._e()])],1)};i._withStripped=!0;var n=e(233),o={data:function(){return{tableData:[{id:"",activityId:"",avatar:"",nickname:"",role:"",password:"",online:!0},{id:"",activityId:"",avatar:"",nickname:"",role:"",password:"",online:!1}],modalData:{isShow:!1,title:"添加角色",nickname:"",password:"",avatar:"",id:"",idx:""},webinar:{name:"张三",title:"什么什么什么直播",time:"2018-07-15 23:20:00"},activityId:"",msgKick:!1,msgDelete:!1,loading:!1,copyDataval:"www.baidu.com",imgHost:"//test-zhike.oss-cn-beijing.aliyuncs.com/",percentImg:0}},created:function(){this.activityId=this.$route.params.id,this.getRolelist()},methods:{handleClick:function(t){console.log(t)},handleEdit:function(t,a){this.modalData={isShow:!0,title:"编辑角色",nickname:a.nickname,password:a.password,avatar:a.avatar,id:a.id,idx:t}},handleKick:function(t,a){this.msgKick=!0},handleDelete:function(t,a){console.log(t),this.msgDelete=!0,this.modalData.id=a.id,this.modalData.idx=t},kickConfirm:function(t){"confirm"===t.action||(this.msgKick=!1)},deleteConfirm:function(t){var a=this;if("confirm"===t.action){var e={id:this.modalData.id};this.$post(n.a.POST_DELASS,e).then(function(t){console.log(t),a.$toast({content:"删除成功",position:"center"}),a.tableData.splice([a.modalData.idx],1)})}else this.msgDelete=!1},uploadError:function(t){console.log("上传失败:",t)},uploadProgress:function(t){this.percentImg=parseFloat(parseFloat(t.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess:function(t){var a=JSON.parse(t.data);this.modalData.avatar=a.data.name},closeModal:function(t){"modal-cover"===t.target.className&&(this.modalData.isShow=!1)},add:function(){this.modalData={isShow:!0,title:"创建角色",nickname:"",password:"",avatar:"",id:""}},saveSetting:function(){var t=this;if(0===this.modalData.nickname.length)return this.$toast({content:"请输入角色昵称",position:"center"}),!1;if(0===this.modalData.password.length)return this.$toast({content:"请输入口令",position:"center"}),!1;if(0===this.modalData.avatar.length)return this.$toast({content:"请上传角色头像",position:"center"}),!1;var a={id:this.modalData.id,activityId:this.activityId,password:this.modalData.password,nickname:this.modalData.nickname,avatar:this.modalData.avatar};this.modalData.title.search("编辑")>=0?this.$post(n.a.POST_ADD_ASS,a).then(function(e){t.$toast({content:"创建成功",position:"center"});var i={id:e.data.id,activityId:a.activityId,avatar:a.avatar,nickname:a.nickname,role:"ASSISTANT",password:a.password,online:!0};t.tableData.push(i)}):this.$post(n.a.POST_UPDATE_ASS,a).then(function(e){t.$toast({content:"编辑成功",position:"center"}),t.tableData[t.modalData.idx].avatar=a.avatar,t.tableData[t.modalData.idx].nickname=a.nickname,t.tableData[t.modalData.idx].password=a.password})},getRolelist:function(){var t=this;this.loading=!0,this.$config({loading:!0}).$get(n.a.GET_ROLE_LIST,{activityId:this.activityId}).then(function(a){console.log(a),t.tableData=a.data.list})},copyLink:function(t,a){var e=this;this.copyDataval.copyClipboard(function(t){var a=void 0;a="success"===t?"复制成功":"复制失败",e.$toast({content:a,position:"center"})})},copyInfo:function(t,a){var e=this;("您好，《"+this.webinar.name+"》的直播，以下为直播的详细信息及参会信息，请准时参加，谢谢\n直播名称："+this.webinar.title+"\n直播ID："+this.activityId+"\n开始时间："+this.webinar.name+"\n嘉宾口令："+this.tableData[t].password+"\n加入链接：http://t.e.vhall.com/mywebinar/login/"+this.activityId).copyClipboard(function(t){var a=void 0;a="success"===t?"复制成功":"复制失败",e.$toast({content:a,position:"center"})})}}},s=(e(446),e(1)),l=Object(s.a)(o,i,[],!1,null,null,null);l.options.__file="src/pages/live-mager/prepare/role.vue";a.default=l.exports}}]);
//# sourceMappingURL=22.030b1630.js.map
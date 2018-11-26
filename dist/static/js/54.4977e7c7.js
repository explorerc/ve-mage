(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{482:function(t,e,a){"use strict";a.r(e);var i=a(455),o=a.n(i),r=a(457),s=a.n(r),n={name:"ve-upload-image",components:{ComUpload:a(101).a},data:function(){return{isShowBigImg:!1,imgHost:"",fileSrc:"",coverImg:"",tipTxt:"",percentImg:0,errorTxt:"",loading:!1}},props:{accept:{type:String,default:"png|jpg|jpeg|bmp|gif|doc|mp4"},fileSize:{type:Number,default:1024},defaultImg:{type:String,default:""},title:{type:String,default:"上传文件"},errorMsg:{type:String,default:""},nowIndex:{type:Number,default:0},initImg:{type:String,default:""}},watch:{errorMsg:function(t){this.errorTxt=t,t.length&&(this.fileSrc="",this.coverImg="")},defaultImg:{handler:function(t){this.coverImg=t,t||(this.fileSrc="")},immediate:!0},title:{handler:function(t){this.tipTxt=t},immediate:!0},initImg:{handler:function(t){this.imgHost=this.$imgHost,this.fileSrc=t},immediate:!0}},methods:{deleteImage:function(){this.coverImg="",this.fileSrc="",this.errorTxt="",this.$emit("success",{name:"",host:"",nowIndex:this.nowIndex,isDelete:!0})},overUpload:function(){this.$refs.uploadFile.click()},overPlus:function(){this.isShowBigImg=!0},selected:function(){this.loading=!0},uploadProgress:function(t){this.loading=!1,this.percentImg=parseFloat(parseFloat(t.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess:function(t){var e=JSON.parse(t.data).data;e.host&&(this.imgHost=e.host),e.name&&(this.fileSrc=e.name),e.nowIndex=this.nowIndex,this.$emit("success",e)},uploadError:function(t){this.loading=!1;var e=t.data[0].state,a="";a="size-limit"===e?"上传图片过大":"type-limit"===e?"不支持该格式，请重新上传":"图片上传失败",this.fileSrc="",this.coverImg="",this.$emit("error",{type:e,msg:a,nowIndex:this.nowIndex})}}},l=(a(915),a(1)),c=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"ve-upload-box"},[t.fileSrc||!t.fileSrc&&t.coverImg?a("div",{staticClass:"upload-img-box"},[a("transition",{attrs:{name:"fade"}},[t.fileSrc?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}}):t._e(),t._v(" "),!t.fileSrc&&t.coverImg?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.coverImg+")"}}):t._e()]),t._v(" "),a("div",{staticClass:"over-upload"},[a("span",{on:{click:function(e){return e.stopPropagation(),t.deleteImage(e)}}},[a("i",{staticClass:"iconfont icon-icon-shanchu"}),t._v("\n        删除\n      ")]),t._v(" "),a("span",{on:{click:function(e){return e.stopPropagation(),t.overUpload(e)}}},[a("i",{staticClass:"iconfont icon-yulanxuanzhuan"}),t._v("\n        重置\n      ")]),t._v(" "),a("span",{on:{click:function(e){return e.stopPropagation(),t.overPlus(e)}}},[a("i",{staticClass:"iconfont icon-fangda"}),t._v("\n        放大\n      ")])])],1):t._e(),t._v(" "),t.isShowBigImg?a("div",{staticClass:"big-img"},[a("span",{staticClass:"el-icon-circle-close",on:{click:function(e){t.isShowBigImg=!1}}}),t._v(" "),a("div",{style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}})]):t._e(),t._v(" "),a("com-upload",{attrs:{accept:t.accept,actionUrl:"/api/upload/image",inputName:"file",fileSize:t.fileSize},on:{error:t.uploadError,selected:t.selected,progress:t.uploadProgress,load:t.uploadImgSuccess}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!(t.fileSrc||!t.fileSrc&&t.coverImg),expression:"!(fileSrc||(!fileSrc && coverImg))"}],ref:"uploadFile",staticClass:"upload-file-box",attrs:{title:"点击上传"}},[a("i",{staticClass:"upload-icon"}),t._v(" "),t.errorTxt?a("span",{staticClass:"error-msg"},[t._v(t._s(t.errorTxt))]):a("span",{domProps:{innerHTML:t._s(t.tipTxt)}})])])],1)},[],!1,null,"4babb8ec",null);c.options.__file="ve-upload-goods.vue";var d=c.exports,u=a(731),g={name:"info",created:function(){"update"===this.$route.params.type&&this.getGoodsDetail()},components:{VeUpload:d},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},data:function(){var t=this;return{isShowMsgB:!0,errTitle:"",goodsData:{title:"",price:"",preferential:"",url:"",imageList:[{errMsg:""},{errMsg:""},{errMsg:""},{errMsg:""}],describe:"",tao:""},timerVail:null,timer:null,rules:{title:[{required:!0,validator:function(e,a,i){t.timerVail||(t.timerVail=setTimeout(function(){if(clearTimeout(t.timerVail),t.timerVail=null,!a)return i(new Error("商品名称不能为空"));if(a.gbLength()<e.min)return i(new Error("商品名称过短"));if(a.gbLength()>e.max){for(var o in t[e.obj])if(o===e.field)return t[e.obj][o]=a.slice(0,a.gbIndex(e.max)+1),i()}else i()},500))},min:3,max:20,trigger:"change",obj:"goodsData"}],price:[{validator:function(t,e,a){return"number"!=typeof e||!e&&0!==e?a(new Error("请输入原始价格")):e<0||e>=999999?a(new Error("原始价格应大于0小于999999")):String(e).indexOf(".")>-1&&String(e).slice(String(e).indexOf(".")+1).length>2?a(new Error("价格最多为小数点后两位")):a()},type:"number",min:0,max:999999,trigger:"blur",obj:"goodsData"}],preferential:[{validator:function(e,a,i){if(a){if("number"==typeof a){var o=t[e.obj].price;return a&&a<0?i(new Error("优惠价格不能小于0")):a&&o&&a>=o?i(new Error("优惠价格需小于原始价格")):String(a).indexOf(".")>-1&&String(a).slice(String(a).indexOf(".")+1).length>2?i(new Error("优惠价格最多为小数点后两位")):a&&!o?i(new Error("请先填写原始价格")):i()}return i(new Error("请输入优惠价格"))}return i()},type:"number",min:0,max:999999,trigger:"blur",obj:"goodsData"}],url:[{required:!0,type:"url",message:"请输入商品链接",trigger:"blur"},{min:0,max:300,type:"url",message:"商品链接应大于0小于300",trigger:"blur"}],imageList:[{required:!0,validator:function(e,a,i){var o=0;return t[e.obj].imageList.map(function(t){t.name&&(o+=1)}),o>0?a[0].name?i():i(new Error("请上传封面图")):i(new Error("请上传图片"))},trigger:"blur",obj:"goodsData"}]}}},methods:{add_upload:function(){this.goodsData.imageList.push({errMsg:""})},getGoodsDetail:function(){var t=this;this.$post(u.a.GOODS_DETAIL,{goods_id:this.$route.params.id}).then(function(e){e.data.image=JSON.parse(e.data.image);for(var a=e.data.image.length,i=0;i<4-a;i++)e.data.image.push({errMsg:""});e.data.price=s()(e.data.price),e.data.preferential=s()(e.data.preferential);var o=e.data;t.goodsData.title=o.title,t.goodsData.price=o.price,t.goodsData.preferential=o.preferential,t.goodsData.imageList=o.image,t.goodsData.describe=o.describe,t.goodsData.url=o.url,t.goodsData.tao=o.tao})},onSubmit:function(t){var e=this;this.timer||(this.timer=setTimeout(function(){clearTimeout(e.timer),e.timer=null,e.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=void 0;"create"===e.$route.params.type?(e.goodsData.activity_id=e.$route.params.id,a=u.a.CREATE_GOODS):(e.goodsData.goods_id=e.$route.params.id,a=u.a.UPDATE_GOODS);var i=e.goodsData.imageList.filter(function(t,e){if(t.name)return t});e.goodsData.image=o()(i),delete e.goodsData.imageList,e.$post(a,e.goodsData).then(function(t){e.$toast({content:"操作成功!",position:"center"}),e.$router.go(-1),e.isShowMsgB=!1}).catch(function(t){console.log(t)})})},400))},resetForm:function(t){var e=this;this.$messageBox({header:"",content:"是否放弃当前编辑内容",cancelText:"暂不",confirmText:"确定",handleClick:function(a){"cancel"===a.action||"confirm"===a.action&&(e.$refs[t].resetFields(),e.isShowMsgB=!1,e.$router.go(-1))}})},uploadImgSuccess:function(t){this.goodsData.imageList[t.nowIndex].name=t.name},uploadError:function(t,e){e.errMsg=t.msg}},beforeRouteLeave:function(t,e,a){this.isShowMsgB?this.$messageBox({header:"提示",width:"400px",content:"是否放弃当前编辑？",cancelText:"否",confirmText:"是",handleClick:function(t){"confirm"===t.action?a(!0):a(!1)}}):a(!0)}},m=(a(916),Object(l.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"goods-info"}},[a("header",[t._v(t._s("create"===this.$route.params.type?"新建":"编辑")+"商品信息\n    "),a("com-back",{class:"back-btn"})],1),t._v(" "),a("el-form",{ref:"goodsData",staticClass:"demo-ruleForm",attrs:{model:t.goodsData,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商品名称：",prop:"title"}},[a("el-input",{staticClass:"slot_inp_b",attrs:{placeholder:"请输入商品名称（不少于3个字）"},model:{value:t.goodsData.title,callback:function(e){t.$set(t.goodsData,"title",e)},expression:"goodsData.title"}},[a("template",{staticClass:"slot",slot:"append"},[a("span",{staticStyle:{color:"#2878FF"},domProps:{textContent:t._s(t.goodsData.title.gbLength())}}),t._v("\n          / 20\n        ")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"原始价格：",prop:"price"}},[a("div",{staticClass:"a_unit"},[a("el-input",{attrs:{min:"0",max:"999999",placeholder:"请输入价格"},model:{value:t.goodsData.price,callback:function(e){t.$set(t.goodsData,"price",t._n(e))},expression:"goodsData.price"}}),t._v(" "),a("span",[t._v("元")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"优惠价格：",prop:"preferential"}},[a("div",{staticClass:"a_unit"},[a("el-input",{attrs:{disabled:!t.goodsData.price,placeholder:"请输入价格"},model:{value:t.goodsData.preferential,callback:function(e){t.$set(t.goodsData,"preferential",t._n(e))},expression:"goodsData.preferential"}}),t._v(" "),a("span",[t._v("元")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"商品图片：",prop:"imageList"}},[a("div",{staticClass:"upload_box"},[t._l(t.goodsData.imageList,function(e,i){return[a("ve-upload",{key:i,attrs:{title:"图片小于2MB &nbsp;&nbsp;(jpg、png、bmp)&nbsp;&nbsp; 最佳尺寸：600 x 600",accept:"png|jpg|jpeg|bmp|gif",defaultImg:t.defaultImg,nowIndex:i||0,fileSize:2048,errorMsg:e.errMsg,initImg:e.name},on:{error:function(a){t.uploadError(a,e)},success:t.uploadImgSuccess}})]})],2)]),t._v(" "),a("el-form-item",{attrs:{label:"商品链接：",prop:"url"}},[a("el-input",{staticClass:"inupt_text",attrs:{type:"url",placeholder:"请输入商品链接"},model:{value:t.goodsData.url,callback:function(e){t.$set(t.goodsData,"url",e)},expression:"goodsData.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品描述："}},[a("com-input",{staticClass:"inupt_textarea",attrs:{"max-length":140,type:"textarea",placeholder:"请输入商品描述"},model:{value:t.goodsData.describe,callback:function(e){t.$set(t.goodsData,"describe","string"==typeof e?e.trim():e)},expression:"goodsData.describe"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"淘口令："}},[a("com-input",{staticClass:"inupt_textarea",attrs:{"max-length":100,type:"textarea",rows:5,cols:4,placeholder:"请输入淘口令"},model:{value:t.goodsData.tao,callback:function(e){t.$set(t.goodsData,"tao","string"==typeof e?e.trim():e)},expression:"goodsData.tao"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"add-goods primary-button",attrs:{type:"primary",round:""},on:{click:function(e){t.onSubmit("goodsData")}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{round:""},on:{click:function(e){t.resetForm("goodsData")}}},[t._v("取消")])],1)],1)],1)},[],!1,null,"885cf780",null));m.options.__file="info.vue";e.default=m.exports},706:function(t,e,a){},707:function(t,e,a){},915:function(t,e,a){"use strict";var i=a(706);a.n(i).a},916:function(t,e,a){"use strict";var i=a(707);a.n(i).a}}]);
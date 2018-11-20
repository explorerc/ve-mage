(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{645:function(t,e,a){},646:function(t,e,a){},852:function(t,e,a){"use strict";var o=a(645);a.n(o).a},853:function(t,e,a){"use strict";var o=a(646);a.n(o).a},868:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"goods-info"}},[a("header",[t._v("新建/编辑商品信息")]),t._v(" "),a("el-form",{ref:"goodsData",staticClass:"demo-ruleForm",attrs:{model:t.goodsData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"title"}},[a("el-input",{staticClass:"slot_inp_b",attrs:{placeholder:"请输入商品名称（不少于3个字）"},model:{value:t.goodsData.title,callback:function(e){t.$set(t.goodsData,"title",e)},expression:"goodsData.title"}},[a("template",{staticClass:"slot",slot:"append"},[a("span",{staticStyle:{color:"#2878FF"},domProps:{textContent:t._s(t.goodsData.title.gbLength())}}),t._v("\n          / 20\n        ")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"原始价格",prop:"price"}},[a("div",{staticClass:"a_unit"},[a("el-input",{attrs:{min:"0",max:"999999",placeholder:"请输入价格"},model:{value:t.goodsData.price,callback:function(e){t.$set(t.goodsData,"price",t._n(e))},expression:"goodsData.price"}}),t._v(" "),a("span",[t._v("元")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"优惠价格",prop:"preferential"}},[a("div",{staticClass:"a_unit"},[a("el-input",{attrs:{disabled:!t.goodsData.price,placeholder:"请输入价格"},model:{value:t.goodsData.preferential,callback:function(e){t.$set(t.goodsData,"preferential",t._n(e))},expression:"goodsData.preferential"}}),t._v(" "),a("span",[t._v("元")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"商品图片",prop:"upload_list"}},[a("div",{staticClass:"upload_box"},[t._l(t.goodsData.imageList,function(e,o){return[a("ve-upload",{key:o,attrs:{title:"图片小于2MB &nbsp;&nbsp;(jpg、png、bmp)&nbsp;&nbsp; 最佳尺寸：600 x 600",accept:"png|jpg|jpeg|bmp",defaultImg:t.defaultImg,nowIndex:o||0,fileSize:2048,errorMsg:t.uploadImgErrorMsg,initImg:e.name},on:{error:t.uploadError,success:t.uploadImgSuccess}})]}),t._v(" "),t.goodsData.imageList.length<4?a("span",{staticClass:"el-icon-circle-plus-outline",on:{click:t.add_upload}}):t._e()],2)]),t._v(" "),a("el-form-item",{attrs:{label:"商品链接",prop:"url"}},[a("el-input",{staticClass:"inupt_text",attrs:{type:"url",placeholder:"请输入商品链接"},model:{value:t.goodsData.url,callback:function(e){t.$set(t.goodsData,"url",e)},expression:"goodsData.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("com-input",{staticClass:"inupt_textarea",attrs:{"max-length":140,type:"textarea",placeholder:"请输入商品描述"},model:{value:t.goodsData.describe,callback:function(e){t.$set(t.goodsData,"describe","string"==typeof e?e.trim():e)},expression:"goodsData.describe"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"淘口令"}},[a("el-input",{staticClass:"inupt_textarea",attrs:{"max-length":100,type:"textarea",rows:5,cols:4,placeholder:"请输入淘口令"},model:{value:t.goodsData.tao,callback:function(e){t.$set(t.goodsData,"tao","string"==typeof e?e.trim():e)},expression:"goodsData.tao"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"add-goods primary-button",attrs:{type:"primary",round:""},on:{click:function(e){t.onSubmit("goodsData")}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{round:""},on:{click:function(e){t.resetForm("goodsData")}}},[t._v("取消")])],1)],1)],1)};o._withStripped=!0;var i=a(452),r=a.n(i),s=a(454),n=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"ve-upload-box"},[t.fileSrc||!t.fileSrc&&t.coverImg?a("div",{staticClass:"upload-img-box"},[a("transition",{attrs:{name:"fade"}},[t.fileSrc?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}}):t._e(),t._v(" "),!t.fileSrc&&t.coverImg?a("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.coverImg+")"}}):t._e()]),t._v(" "),a("div",{staticClass:"over-upload"},[a("span",{on:{click:function(e){return e.stopPropagation(),t.deleteImage(e)}}},[a("i",{staticClass:"iconfont icon-icon-shanchu"}),t._v("\n        删除\n      ")]),t._v(" "),a("span",{on:{click:function(e){return e.stopPropagation(),t.overUpload(e)}}},[a("i",{staticClass:"iconfont icon-yulanxuanzhuan"}),t._v("\n        重置\n      ")]),t._v(" "),a("span",{on:{click:function(e){return e.stopPropagation(),t.overPlus(e)}}},[a("i",{staticClass:"iconfont icon-fangda"}),t._v("\n        放大\n      ")])])],1):t._e(),t._v(" "),t.isShowBigImg?a("div",{staticClass:"big-img"},[a("span",{staticClass:"el-icon-circle-close",on:{click:function(e){t.isShowBigImg=!1}}}),t._v(" "),a("div",{style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}})]):t._e(),t._v(" "),a("com-upload",{attrs:{accept:t.accept,actionUrl:"/api/upload/image",inputName:"file",fileSize:t.fileSize},on:{error:t.uploadError,selected:t.selected,progress:t.uploadProgress,load:t.uploadImgSuccess}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!(t.fileSrc||!t.fileSrc&&t.coverImg),expression:"!(fileSrc||(!fileSrc && coverImg))"}],ref:"uploadFile",staticClass:"upload-file-box",attrs:{title:"点击上传"}},[a("i",{staticClass:"upload-icon"}),t._v(" "),t.errorTxt?a("span",{staticClass:"error-msg"},[t._v(t._s(t.errorTxt))]):a("span",{domProps:{innerHTML:t._s(t.tipTxt)}})])])],1)};l._withStripped=!0;var c={name:"ve-upload-image",components:{ComUpload:a(99).a},data:function(){return{isShowBigImg:!1,imgHost:"",fileSrc:"",coverImg:"",tipTxt:"",percentImg:0,errorTxt:"",loading:!1}},props:{accept:{type:String,default:"png|jpg|jpeg|bmp|gif|doc|mp4"},fileSize:{type:Number,default:1024},defaultImg:{type:String,default:""},title:{type:String,default:"上传文件"},errorMsg:{type:String,default:""},nowIndex:{type:Number,default:0},initImg:{type:String,default:""}},watch:{errorMsg:function(t){this.errorTxt=t,t.length&&(this.fileSrc="",this.coverImg="")},defaultImg:{handler:function(t){this.coverImg=t,t||(this.fileSrc="")},immediate:!0},title:{handler:function(t){this.tipTxt=t},immediate:!0},initImg:{handler:function(t){this.imgHost=this.$imgHost,this.fileSrc=t},immediate:!0}},methods:{deleteImage:function(){this.coverImg="",this.fileSrc="",this.errorTxt="",this.$emit("success",{name:"",host:"",nowIndex:this.nowIndex,isDelete:!0})},overUpload:function(){this.$refs.uploadFile.click()},overPlus:function(){this.isShowBigImg=!0},selected:function(){this.loading=!0},uploadProgress:function(t){this.loading=!1,this.percentImg=parseFloat(parseFloat(t.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess:function(t){var e=JSON.parse(t.data).data;e.host&&(this.imgHost=e.host),e.name&&(this.fileSrc=e.name),e.nowIndex=this.nowIndex,this.$emit("success",e)},uploadError:function(t){this.loading=!1;var e=t.data[0].state,a="";a="size-limit"===e?"上传图片过大":"type-limit"===e?"不支持该格式，请重新上传":"图片上传失败",this.fileSrc="",this.coverImg="",this.$emit("error",{type:e,msg:a,nowIndex:this.nowIndex})}}},d=(a(852),a(1)),u=Object(d.a)(c,l,[],!1,null,"b09a25f0",null);u.options.__file="src/components/ve-upload-goods.vue";var p=u.exports,g=a(670),m={name:"info",created:function(){"update"===this.$route.params.type&&this.getGoodsDetail()},components:{VeUpload:p},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},data:function(){var t=this;return{errTitle:"",goodsData:{title:"",price:"",preferential:"",url:"",imageList:[{}],describe:"",tao:""},uploadImgErrorMsg:"",rules:{title:[{required:!0,validator:function(e,a,o){var i=void 0;i||(i=setTimeout(function(){if(clearTimeout(i),i=null,!a)return o(new Error("商品名称不能为空"));if(a.gbLength()<e.min)return o(new Error("商品名称过短"));if(a.gbLength()>e.max){for(var r in t[e.obj])if(r===e.field)return t[e.obj][r]=a.slice(0,a.gbIndex(e.max)+1),o()}else o()},500))},min:3,max:20,trigger:"change,blur",obj:"goodsData"}],price:[{required:!0,type:"number",message:"请输入原始价格",trigger:"blur"},{type:"number",min:0,max:999999,message:"原始价格应大于0小于999999",trigger:"blur"}],preferential:[{validator:function(e,a,o){var i=t[e.obj].price;return a&&a<0?o(new Error("商品促销价格不能小于0")):a&&i&&a>i?o(new Error("商品促销价格不能大于原始价格")):a&&!i?o(new Error("请先填写原始价格")):o()},type:"number",min:0,max:999999,trigger:"blur",obj:"goodsData"}],url:[{required:!0,type:"url",message:"请输入商品链接",trigger:"blur"},{min:0,max:300,type:"url",message:"商品链接应大于0小于300",trigger:"blur"}],imageList:[{required:!0,validator:function(e,a,o){var i=0;return t[e.obj].upload_list.map(function(t){t.name&&t.host&&(i+=1)}),i>0?o():o(new Error("请上传图片"))},trigger:"blur",obj:"goodsData"}]}}},methods:{add_upload:function(){this.goodsData.imageList.push({})},getGoodsDetail:function(){var t=this;this.$post(g.a.GOODS_DETAIL,{goods_id:this.$route.params.id}).then(function(e){e.data.image=JSON.parse(e.data.image),e.data.price=n()(e.data.price),e.data.preferential=n()(e.data.preferential);var a=e.data;t.goodsData.title=a.title,t.goodsData.price=a.price,t.goodsData.preferential=a.preferential,t.goodsData.imageList=a.image,t.goodsData.describe=a.describe,t.goodsData.url=a.url,t.goodsData.tao=a.tao}),console.log(this.goodsData)},onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var a=void 0;"create"===e.$route.params.type?(e.goodsData.activity_id=e.$route.params.id,a=g.a.CREATE_GOODS):(e.goodsData.goods_id=e.$route.params.id,a=g.a.UPDATE_GOODS),e.goodsData.image=r()(e.goodsData.imageList),delete e.goodsData.imageList,e.$post(a,e.goodsData).then(function(t){e.$toast({content:"操作成功!",position:"center"}),setTimeout(function(){e.$router.go(-1)},500)}).catch(function(t){console.log(t)})}else console.log("error submit!!")})},resetForm:function(t){this.$refs[t].resetFields()},uploadImgSuccess:function(t){this.goodsData.imageList[t.nowIndex].name=t.name},uploadError:function(t){console.log(t)}}},f=(a(853),Object(d.a)(m,o,[],!1,null,"5ceb96de",null));f.options.__file="src/pages/sales-tools/recommend-goods/info.vue";e.default=f.exports}}]);
//# sourceMappingURL=19.e26cdf2c.js.map
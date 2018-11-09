(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{643:function(t,e,o){},644:function(t,e,o){},846:function(t,e,o){"use strict";var a=o(643);o.n(a).a},847:function(t,e,o){"use strict";var a=o(644);o.n(a).a},860:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"goods-info"}},[o("header",[t._v("新建/编辑商品信息")]),t._v(" "),o("el-form",{ref:"goodsData",staticClass:"demo-ruleForm",attrs:{model:t.goodsData,rules:t.rules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品名称",prop:"title"}},[o("el-input",{staticClass:"slot_inp_b",attrs:{placeholder:"请输入商品名称（不少于3个字）"},model:{value:t.goodsData.title,callback:function(e){t.$set(t.goodsData,"title",e)},expression:"goodsData.title"}},[o("template",{staticClass:"slot",slot:"append"},[o("span",{staticStyle:{color:"#2878FF"},domProps:{textContent:t._s(t.goodsData.title.gbLength())}}),t._v("\n          / 20\n        ")])],2)],1),t._v(" "),o("el-form-item",{attrs:{label:"原始价格",prop:"ysjg"}},[o("div",{staticClass:"a_unit"},[o("el-input",{attrs:{min:"0",max:"999999",placeholder:"请输入价格"},model:{value:t.goodsData.ysjg,callback:function(e){t.$set(t.goodsData,"ysjg",t._n(e))},expression:"goodsData.ysjg"}}),t._v(" "),o("span",[t._v("元")])],1)]),t._v(" "),o("el-form-item",{attrs:{label:"优惠价格",prop:"cxjg"}},[o("div",{staticClass:"a_unit"},[o("el-input",{attrs:{disabled:!t.goodsData.ysjg,placeholder:"请输入价格"},model:{value:t.goodsData.cxjg,callback:function(e){t.$set(t.goodsData,"cxjg",t._n(e))},expression:"goodsData.cxjg"}}),t._v(" "),o("span",[t._v("元")])],1)]),t._v(" "),o("el-form-item",{attrs:{label:"商品图片",prop:"upload_list"}},[o("div",{staticClass:"upload_box"},[o("i"),t._v(" "),t._l(t.goodsData.upload_list,function(e,a){return o("ve-upload",{key:a,attrs:{title:"图片小于2MB &nbsp;&nbsp;(jpg、png、bmp)&nbsp;&nbsp; 最佳尺寸：600 x 600",accept:"png|jpg|jpeg|bmp",defaultImg:t.defaultImg,nowIndex:a||0,fileSize:2048,errorMsg:t.uploadImgErrorMsg},on:{error:t.uploadError,success:t.uploadImgSuccess}})}),t._v(" "),t.goodsData.upload_list.length<4?o("span",{staticClass:"el-icon-circle-plus-outline",on:{click:t.add_upload}}):t._e()],2)]),t._v(" "),o("el-form-item",{attrs:{label:"商品链接",prop:"url"}},[o("el-input",{staticClass:"inupt_text",attrs:{type:"url",placeholder:"请输入商品链接"},model:{value:t.goodsData.url,callback:function(e){t.$set(t.goodsData,"url",e)},expression:"goodsData.url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"商品描述"}},[o("com-input",{staticClass:"inupt_textarea",attrs:{"max-length":140,type:"textarea",placeholder:"请输入商品描述"},model:{value:t.goodsData.name,callback:function(e){t.$set(t.goodsData,"name","string"==typeof e?e.trim():e)},expression:"goodsData.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"淘口令"}},[o("el-input",{staticClass:"inupt_textarea",attrs:{"max-length":100,type:"textarea",rows:5,cols:4,placeholder:"请输入淘口令"},model:{value:t.goodsData.name,callback:function(e){t.$set(t.goodsData,"name","string"==typeof e?e.trim():e)},expression:"goodsData.name"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"add-goods primary-button",attrs:{type:"primary",round:""},on:{click:function(e){t.onSubmit("goodsData")}}},[t._v("保存")]),t._v(" "),o("el-button",{attrs:{round:""},on:{click:function(e){t.resetForm("goodsData")}}},[t._v("取消")])],1)],1)],1)};a._withStripped=!0;var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"ComLoading",rawName:"v-ComLoading",value:t.loading,expression:"loading"}],staticClass:"ve-upload-box"},[t.fileSrc||!t.fileSrc&&t.coverImg?o("div",{staticClass:"upload-img-box"},[o("transition",{attrs:{name:"fade"}},[t.fileSrc?o("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.imgHost+"/"+t.fileSrc+")"}}):t._e(),t._v(" "),!t.fileSrc&&t.coverImg?o("div",{staticClass:"temp-img",style:{backgroundImage:"url("+t.coverImg+")"}}):t._e()]),t._v(" "),o("div",{staticClass:"over-upload"},[o("span",{on:{click:function(e){return e.stopPropagation(),t.deleteImage(e)}}},[o("i",{staticClass:"iconfont icon-icon-shanchu"}),t._v("\n        删除\n      ")]),t._v(" "),o("span",{on:{click:function(e){return e.stopPropagation(),t.overUpload(e)}}},[o("i",{staticClass:"iconfont icon-yulanxuanzhuan"}),t._v("\n        重置\n      ")]),t._v(" "),o("span",{on:{click:function(e){return e.stopPropagation(),t.overPlus(e)}}},[o("i",{staticClass:"iconfont icon-yulanxuanzhuan"}),t._v("\n        重置\n      ")])])],1):t._e(),t._v(" "),o("com-upload",{attrs:{accept:t.accept,actionUrl:"/api/upload/image",inputName:"file",fileSize:t.fileSize},on:{error:t.uploadError,selected:t.selected,progress:t.uploadProgress,load:t.uploadImgSuccess}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!(t.fileSrc||!t.fileSrc&&t.coverImg),expression:"!(fileSrc||(!fileSrc && coverImg))"}],ref:"uploadFile",staticClass:"upload-file-box",attrs:{title:"点击上传"}},[o("i",{staticClass:"upload-icon"}),t._v(" "),t.errorTxt?o("span",{staticClass:"error-msg"},[t._v(t._s(t.errorTxt))]):o("span",{domProps:{innerHTML:t._s(t.tipTxt)}})])])],1)};s._withStripped=!0;var r={name:"ve-upload-image",components:{ComUpload:o(99).a},data:function(){return{imgHost:"",fileSrc:"",coverImg:"",tipTxt:"",percentImg:0,errorTxt:"",loading:!1}},props:{accept:{type:String,default:"png|jpg|jpeg|bmp|gif|doc|mp4"},fileSize:{type:Number,default:1024},defaultImg:{type:String,default:""},title:{type:String,default:"上传文件"},errorMsg:{type:String,default:""},nowIndex:{type:Number,default:0}},watch:{errorMsg:function(t){this.errorTxt=t,t.length&&(this.fileSrc="",this.coverImg="")},defaultImg:{handler:function(t){this.coverImg=t,t||(this.fileSrc="")},immediate:!0},title:{handler:function(t){this.tipTxt=t},immediate:!0}},methods:{deleteImage:function(){this.coverImg="",this.fileSrc="",this.errorTxt="",this.$emit("success",{name:"",host:"",nowIndex:this.nowIndex,isDelete:!0})},overUpload:function(){this.$refs.uploadFile.click()},overPlus:function(){this.$messageBox({width:"450px",content:' <img style="width: 100px;height: 100px" :src="assets/image/avatar@2x.png" alt="">',handleClick:function(t){}})},selected:function(){console.log("selected"),this.loading=!0},uploadProgress:function(t){this.loading=!1,this.percentImg=parseFloat(parseFloat(t.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess:function(t){console.log(t);var e=JSON.parse(t.data).data;e.host&&(this.imgHost=e.host),e.name&&(this.fileSrc=e.name),e.nowIndex=this.nowIndex,this.$emit("success",e)},uploadError:function(t){this.loading=!1;var e=t.data[0].state,o="";o="size-limit"===e?"上传图片过大":"type-limit"===e?"不支持该格式，请重新上传":"图片上传失败",this.fileSrc="",this.coverImg="",this.$emit("error",{type:e,msg:o,nowIndex:this.nowIndex})}}},i=(o(846),o(2)),n=Object(i.a)(r,s,[],!1,null,"07a2e09e",null);n.options.__file="src/components/ve-upload-group.vue";var l={name:"info",created:function(){},components:{VeUpload:n.exports},computed:{defaultImg:function(){return this.poster?this.$imgHost+"/"+this.poster:""}},data:function(){var t=this;return{errTitle:"",upload_list:[{}],goodsData:{name:"",title:"",ysjg:"",cxjg:"",url:"",upload_list:[{}]},uploadImgErrorMsg:"",rules:{title:[{required:!0,validator:function(e,o,a){var s=void 0;s||(s=setTimeout(function(){if(clearTimeout(s),s=null,!o)return a(new Error("商品名称不能为空"));if(o.gbLength()<e.min)return a(new Error("商品名称过短"));if(o.gbLength()>=e.max){for(var r in t[e.obj])if(r===e.field)return t[e.obj][r]=t[e.obj][r].slice(0,2*e.max),a()}else a()},500))},min:3,max:20,trigger:"change,blur",obj:"goodsData"}],ysjg:[{required:!0,type:"number",message:"请输入原始价格",trigger:"blur"},{type:"number",min:0,max:999999,message:"原始价格应大于0小于999999",trigger:"blur"}],cxjg:[{validator:function(e,o,a){var s=t[e.obj].ysjg;return o&&o<0?a(new Error("商品促销价格不能小于0")):o&&s&&o>s?a(new Error("商品促销价格不能大于原始价格")):o&&!s?a(new Error("请先填写原始价格")):a()},type:"number",min:0,max:999999,trigger:"blur",obj:"goodsData"}],url:[{required:!0,type:"url",message:"请输入商品链接",trigger:"blur"},{min:0,max:300,type:"url",message:"商品链接应大于0小于300",trigger:"blur"}],upload_list:[{required:!0,validator:function(e,o,a){var s=0;return t[e.obj].upload_list.map(function(t){t.name&&t.host&&(s+=1)}),s>0?a():a(new Error("请上传图片"))},trigger:"blur",obj:"goodsData"}]}}},methods:{add_upload:function(){this.goodsData.upload_list.push({})},onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.goodsData),alert("submit!")})},resetForm:function(t){this.$refs[t].resetFields()},uploadImgSuccess:function(t){console.log(t),this.goodsData.upload_list[t.nowIndex]={name:t.name,host:t.host},console.log(this.goodsData)},uploadError:function(t){console.log(t)}}},c=(o(847),Object(i.a)(l,a,[],!1,null,"5ceb96de",null));c.options.__file="src/pages/sales-tools/recommend-goods/info.vue";e.default=c.exports}}]);
//# sourceMappingURL=54.55f039e0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{503:function(e,t,s){},504:function(e,t,s){},505:function(e,t,s){},506:function(e,t,s){},637:function(e,t,s){"use strict";var i=s(503);s.n(i).a},638:function(e,t,s){"use strict";var i=s(504);s.n(i).a},639:function(e,t,s){"use strict";var i=s(505);s.n(i).a},640:function(e,t,s){"use strict";var i=s(506);s.n(i).a},767:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"account-container"},[i("p",{staticClass:"v-account-title"},[e._v("\n    账号设置\n  ")]),e._v(" "),i("div",{staticClass:"v-info"},[i("p",{staticClass:"v-title"},[e._v("\n      基本信息\n    ")]),e._v(" "),i("div",{staticClass:"v-editor v-avatar-img",staticStyle:{height:"125px"}},[i("ve-upload-tx",{attrs:{accept:"png|jpg|jpeg",defaultImg:e.defaultImg,fileSize:2048,errorMsg:e.uploadImgErrorMsg},on:{success:e.uploadImgSuccess,error:e.uploadError}})],1),e._v(" "),i("com-editor",{attrs:{value:e.account,type:"readOnly"},on:{"update:value":function(t){e.account=t}}},[i("span",{staticClass:"v-explain"},[e._v("账号：")])]),e._v(" "),i("com-editor",{attrs:{value:e.companyName,type:"readOnly"},on:{"update:value":function(t){e.companyName=t}}},[i("span",{staticClass:"v-explain"},[e._v("公司名称：")])]),e._v(" "),i("com-editor",{attrs:{value:e.accountName,type:"input",clickType:"save",maxLength:40,isEdit:e.changeState.accountName},on:{"update:value":function(t){e.accountName=t},saveInfo:function(t){e.save(t,e.accountName,"name","company")},cancel:function(t){e.cancel(t,"accountName")},clickSaveBtn:function(t){e.clickChangeState("accountName")}}},[i("span",{staticClass:"v-explain"},[e._v("账户名称：")])]),e._v(" "),i("com-editor",{attrs:{value:e.state,type:"input",clickType:"popup",btnName:"查看"},on:{"update:value":function(t){e.state=t},clickSaveBtn:function(t){e.clickSave(e.state,"popup","state")}}},[i("span",{staticClass:"v-explain"},[e._v("认证状态：")])]),e._v(" "),i("com-editor",{attrs:{value:e.accountPhone,type:"input",clickType:"popup"},on:{"update:value":function(t){e.accountPhone=t},clickSaveBtn:function(t){e.clickSave(e.accountPhone,"popup","mobliePhone")}}},[i("span",{staticClass:"v-explain"},[e._v("注册手机：")])]),e._v(" "),i("con-select",{attrs:{value:e.displayValue,displayValue:e.displayValue,type:"select",selectValue:e.industry,selectParentId:e.selectParentId,selectChildId:e.selectChildId,clickType:"save",isEdit:e.changeState.industry},on:{"update:value":function(t){e.displayValue=t},cancelSelectInfo:function(t){e.cancelSelectInfo(t,"industry")},clickIndustryModifyBtn:function(t){e.clickIndustryModifyBtn("industry")},saveSelectInfo:function(t){e.saveSelectInfo(t,e.displayValue,"industry","company")}}},[i("span",{staticClass:"v-explain"},[e._v("所属行业：")])]),e._v(" "),i("com-editor",{attrs:{value:e.accountPassword,type:"input",clickType:"popup"},on:{"update:value":function(t){e.accountPassword=t},clickSaveBtn:function(t){e.clickSave(e.accountPassword,"popup","password")}}},[i("span",{staticClass:"v-explain"},[e._v("登录密码：")])]),e._v(" "),i("com-editor",{attrs:{value:e.companyWebsite,type:"input",clickType:"save","max-length":40,errorTips:e.errorTips.website,isEdit:e.changeState.website},on:{"update:value":function(t){e.companyWebsite=t},saveInfo:function(t){e.save(t,e.companyWebsite,"website","company")},cancel:function(t){e.cancel(t,"website")},clickSaveBtn:function(t){e.clickChangeState("website")}}},[i("span",{staticClass:"v-explain"},[e._v("公司网址：")])])],1),e._v(" "),i("div",{staticClass:"v-info"},[i("p",{staticClass:"v-title"},[e._v("\n      指定联系人\n    ")]),e._v(" "),i("com-editor",{attrs:{value:e.userName,type:"input",clickType:"save","max-length":20,isEdit:e.changeState.name},on:{"update:value":function(t){e.userName=t},saveInfo:function(t){e.save(t,e.userName,"name","user")},cancel:function(t){e.cancel(t,"name")},clickSaveBtn:function(t){e.clickChangeState("name")}}},[i("span",{staticClass:"v-explain"},[e._v("姓名：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userPost,type:"input",clickType:"save","max-length":20,isEdit:e.changeState.position},on:{"update:value":function(t){e.userPost=t},saveInfo:function(t){e.save(t,e.userPost,"position","user")},cancel:function(t){e.cancel(t,"position")},clickSaveBtn:function(t){e.clickChangeState("position")}}},[i("span",{staticClass:"v-explain"},[e._v("职务：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userPhone,type:"input",clickType:"save","max-length":11,errorTips:e.errorTips.mobile,isEdit:e.changeState.mobile,classVal:"v-phone-div"},on:{"update:value":function(t){e.userPhone=t},saveInfo:function(t){e.save(t,e.userPhone,"mobile","user")},cancel:function(t){e.cancel(t,"mobile")},clickSaveBtn:function(t){e.clickChangeState("mobile")}}},[i("span",{staticClass:"v-explain"},[e._v("手机：")])]),e._v(" "),i("com-editor",{attrs:{value:e.officeNo,type:"input",clickType:"save","max-length":12,errorTips:e.errorTips.tel,isEdit:e.changeState.tel},on:{"update:value":function(t){e.officeNo=t},saveInfo:function(t){e.save(t,e.officeNo,"tel","user")},cancel:function(t){e.cancel(t,"tel")},clickSaveBtn:function(t){e.clickChangeState("tel")}}},[i("span",{staticClass:"v-explain"},[e._v("办公电话：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userEmail,type:"input",clickType:"save","max-length":40,errorTips:e.errorTips.email,isEdit:e.changeState.email},on:{"update:value":function(t){e.userEmail=t},saveInfo:function(t){e.save(t,e.userEmail,"email","user")},cancel:function(t){e.cancel(t,"email")},clickSaveBtn:function(t){e.clickChangeState("email")}}},[i("span",{staticClass:"v-explain"},[e._v("邮箱：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userWechat,type:"input",clickType:"save","max-length":40,isEdit:e.changeState.wechat,classVal:"v-wx-div"},on:{"update:value":function(t){e.userWechat=t},saveInfo:function(t){e.save(t,e.userWechat,"wechat","user")},cancel:function(t){e.cancel(t,"wechat")},clickSaveBtn:function(t){e.clickChangeState("wechat")}}},[i("span",{staticClass:"v-explain"},[e._v("微信：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userQQ,type:"input",clickType:"save","max-length":20,errorTips:e.errorTips.qq,isEdit:e.changeState.qq,classVal:"v-qq-div"},on:{"update:value":function(t){e.userQQ=t},saveInfo:function(t){e.save(t,e.userQQ,"qq","user")},cancel:function(t){e.cancel(t,"qq")},clickSaveBtn:function(t){e.clickChangeState("qq")}}},[i("span",{staticClass:"v-explain"},[e._v("QQ：")])]),e._v(" "),i("com-editor",{attrs:{value:e.userRemarks,type:"input",clickType:"save","max-length":40,isEdit:e.changeState.remark},on:{"update:value":function(t){e.userRemarks=t},saveInfo:function(t){e.save(t,e.userRemarks,"remark","user")},cancel:function(t){e.cancel(t,"remark")},clickSaveBtn:function(t){e.clickChangeState("remark")}}},[i("span",{staticClass:"v-explain"},[e._v("备注：")])])],1),e._v(" "),i("message-box",{directives:[{name:"show",rawName:"v-show",value:e.messageBoxShow,expression:"messageBoxShow"}],staticClass:"message-box",class:["seeState"===e.messageBoxType?"v-state":""],attrs:{width:"450px",confirmText:e.confirmText,type:"prompt",header:e.messageBoxTitle},on:{handleClick:e.messageBoxClick}},["changeMobile"!==e.messageBoxType||"initialPhone"!==e.step&&"newPhone"!==e.step?e._e():i("div",[i("p",{staticClass:"v-explain",style:{color:e.fontColor}},["newPhone"===e.step?i("i",{staticClass:"iconfont icon-duihao"}):e._e(),e._v(" "+e._s(e.messageBoxExplain)+"\n      ")]),e._v(" "),e.isOldphone?i("com-input",{staticClass:"v-input",attrs:{value:e.phone,placeholder:"输入原有注册手机号",type:"mobile","max-length":11,errorTips:e.errorTips.oldPhone,disabled:"disabled"},on:{"update:value":function(t){e.phone=t},focus:function(t){e.phoneFocus("oldphone")}}}):e._e(),e._v(" "),e.isOldphone?e._e():i("com-input",{staticClass:"v-input",attrs:{value:e.saveNewPhone,placeholder:"输入新手机号",type:"mobile","max-length":11,errorTips:e.errorTips.newPhone},on:{"update:value":function(t){e.saveNewPhone=t},focus:function(t){e.phoneFocus("newphone")}}}),e._v(" "),i("div",{class:{isCaptchaShow:"changeMobile"===e.messageBoxType&&("initialPhone"===e.step||"newPhone"===e.step)},attrs:{id:"captcha"}}),e._v(" "),i("com-input",{staticClass:"v-input phone-code",attrs:{value:e.phoneCode,placeholder:"输入验证码",type:"input","max-length":6},on:{"update:value":function(t){e.phoneCode=t},focus:e.codeFocus}}),e._v(" "),e.phoneCodeError?i("p",{staticClass:"v-error"},[e._v(e._s(e.phoneCodeTip))]):e._e(),e._v(" "),i("a",{staticClass:"phone-code-btn",class:{prohibit:e.isProhibit},attrs:{href:"javascript:;"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码\n        "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],staticClass:"fr"},[e._v("(\n          "),i("em",[e._v(e._s(e.second))]),e._v("s)")])])],1),e._v(" "),"changeMobile"===e.messageBoxType&&"phoneSuccess"===e.step?i("div",[i("img",{staticClass:"v-success-img",attrs:{src:s(603),alt:"成功"}}),e._v(" "),i("p",{staticClass:"v-success-explain"},[e._v("\n        修改成功\n      ")]),e._v(" "),i("p",{staticClass:"v-success"},[e._v("\n        您的注册手机更换为："+e._s(e.newPhone)+"\n      ")])]):"changePassword"===e.messageBoxType?i("div",[i("com-input",{staticClass:"v-input",attrs:{value:e.oldPassword,placeholder:"请输入旧密码",type:"password","max-length":30,errorTips:e.errorTips.oldPassword},on:{"update:value":function(t){e.oldPassword=t},focus:function(t){e.passwordFocus("oldPassword")}}}),e._v(" "),i("div",{staticClass:"v-psd"},[i("com-input",{staticClass:"v-input",attrs:{value:e.newPassword,placeholder:"请输入新密码",type:"password","max-length":30,errorTips:e.errorTips.newPassword},on:{"update:value":function(t){e.newPassword=t},focus:function(t){e.passwordFocus("newPassword")},change:function(t){e.passwordChange()},blur:function(t){e.passwordBlur()}}}),e._v(" "),e.isShow?i("div",{staticClass:"v-verification"},[i("ul",[i("p",[e._v("密码至少包含：")]),e._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:e.isContainEn}}),e._v(" 1个英文字母\n            ")]),e._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:e.isContainNum}}),e._v(" 1个数字\n            ")]),e._v(" "),i("li",[i("i",{staticClass:"iconfont icon-duigou1",class:{isActive:e.isContainCount}}),e._v(" 6～30个字符\n            ")])])]):e._e()],1),e._v(" "),i("com-input",{staticClass:"v-input",attrs:{value:e.reNewPassword,placeholder:"请再次输入新密码",type:"password","max-length":30,errorTips:e.errorTips.rePassword},on:{"update:value":function(t){e.reNewPassword=t},focus:function(t){e.passwordFocus("reNewPassword")}}})],1):"seeState"===e.messageBoxType?i("div",[i("p",{staticClass:"v-state-info"},[i("span",{staticClass:"v-label"},[e._v("公司名称：")]),e._v(" "),i("span",{staticClass:"v-information"},[e._v(e._s(e.companyName))])]),e._v(" "),i("p",{staticClass:"v-state-info"},[i("span",{staticClass:"v-label"},[e._v("营业执照编号：")]),e._v(" "),i("span",{staticClass:"v-information"},[e._v(e._s(e.licenseCode))])]),e._v(" "),i("p",{staticClass:"v-state-info"},[i("span",{staticClass:"v-label"},[e._v("营业执照照片：")]),e._v(" "),""!=e.licensePicUrl?i("img",{staticClass:"v-state-img",attrs:{src:e.licensePicUrl,alt:"成功"}}):e._e()])]):e._e()])],1)};i._withStripped=!0;var a=s(444),n=s.n(a),o=s(29),c=s.n(o),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-editor",class:e.classVal},[e._t("default"),e._v(" "),e.isEdit?"readOnly"!==e.type?["select"===e.type?s("el-select",{attrs:{value:e.inputValue,placeholder:"请选择"},on:{"update:value":function(t){e.inputValue=t},change:e.indexSelect},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},e._l(e.selectValue,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e(),e._v(" "),"select"===e.type?s("el-select",{attrs:{value:e.inputValueSed,placeholder:"请选择"},on:{"update:value":function(t){e.inputValueSed=t}},model:{value:e.inputValueSed,callback:function(t){e.inputValueSed=t},expression:"inputValueSed"}},e._l(e.sedSelectValue,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):"input"===e.type?s("com-input",{staticClass:"v-input",attrs:{value:e.inputValue,placeholder:"",type:"input","max-length":e.maxLength,"error-tips":e.errorTips},on:{"update:value":function(t){e.inputValue=t},blur:function(t){e.inputBlur()}}}):e._e()]:e._e():s("span",{staticClass:"v-info-label",attrs:{title:e.value}},[e._v(e._s(""===e.value?"无":e.value))]),e._v(" "),"readOnly"!==e.type?[e.isEdit&&"save"===e.clickType?e._e():s("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.modify(e.clickType)}}},["无"!==e.value&&""!==e.value||""!==e.btnName?""!==e.value&&""!==e.value&&""===e.btnName?s("span",[e._v("修改")]):""!==e.btnName?s("span",[e._v(e._s(e.btnName))]):e._e():s("span",[e._v("完善")])]),e._v(" "),e.isEdit&&"save"===e.clickType?s("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault(),e.save()}}},[e._v("保存")]):e._e(),e._v(" "),e.isEdit&&"save"===e.clickType?s("a",{staticClass:"v-cancle",attrs:{href:"javascript:;"},on:{click:e.cancle}},[e._v("取消")]):e._e()]:e._e()],2)};r._withStripped=!0;var l={props:{value:String,type:String,selectValue:Array,industryFirst:String,industrySecond:String,clickType:String,btnName:{type:String,default:""},maxLength:Number,errorTips:String,isEdit:Boolean,classVal:String},data:function(){return{inputValue:"",inputValueSed:"",initData:"",sedSelectValue:{}}},created:function(){},methods:{modify:function(e){this.initData=this.value,this.inputValue="无"===this.value?"":this.value,this.$emit("clickSaveBtn",this.value)},save:function(){this.$emit("saveInfo",this.initData,this.value)},cancle:function(){this.$emit("cancel",this.initData)},inputBlur:function(){this.$emit("blur",this.value)},indexSelect:function(){for(var e=0;e<this.selectValue.length;e++)this.selectValue[e].value===this.inputValue&&(this.sedSelectValue=this.selectValue[e].childList,this.inputValueSed="")}},watch:{industryFirst:{handler:function(e){this.inputValue=this.industryFirst},immediate:!0},industrySecond:{handler:function(e){this.inputValueSed=this.industrySecond},immediate:!0},inputValue:{handler:function(e){this.$emit("update:value",e)},immediate:!0}}},u=(s(637),s(2)),h=Object(u.a)(l,r,[],!1,null,"347a5a94",null);h.options.__file="src/pages/account/info-editor.vue";var d=h.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-editor"},[e._t("default"),e._v(" "),e.isEdit?"readOnly"!==e.type?[s("el-cascader",{attrs:{options:e.selectValue,props:e.format,value:e.selectChildId},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})]:e._e():s("span",{staticClass:"v-info-label",attrs:{title:e.displayValue}},[e._v(e._s(""===e.displayValue?"无":e.displayValue))]),e._v(" "),"readOnly"!==e.type?[e.isEdit&&"save"===e.clickType?e._e():s("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.modify(e.clickType)}}},["无"!==e.value&&""!==e.value||""!==e.btnName?""!==e.value&&""!==e.value&&""===e.btnName?s("span",[e._v("修改")]):""!==e.btnName?s("span",[e._v(e._s(e.btnName))]):e._e():s("span",[e._v("完善")])]),e._v(" "),e.isEdit&&"save"===e.clickType?s("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.save()}}},[e._v("保存")]):e._e(),e._v(" "),e.isEdit&&"save"===e.clickType?s("a",{staticClass:"v-cancle",attrs:{href:"javascript:;"},on:{click:function(t){e.cancle()}}},[e._v("取消")]):e._e()]:e._e()],2)};p._withStripped=!0;var v={props:{displayValue:String,value:String,type:String,selectValue:Array,selectParentId:Number,selectChildId:Number,industryFirst:String,industrySecond:String,industryId:Number,clickType:String,btnName:{type:String,default:""},isEdit:Boolean},data:function(){return{format:{value:"industryId",label:"name",children:"items"},selectedOptions:[],inputValue:"",sedSelectValue:{},selectedVal:"",selectedVals:{selectParentId:0,initSelectParentId:0,selectChildId:0,initSelectChildId:0,selectParentValue:"",initSelectParentValue:"",selectChildValue:"",initSelectChildValue:""}}},created:function(){this.selectedVals.inputValueSedId=this.selectId,this.selectedVals.inputValueSedId=this.industrySecondId},computed:{},methods:{modify:function(e){this.selectedVals.initSelectParentId=this.selectParentId,this.selectedVals.initSelectChildId=this.selectChildId,this.selectedVals.initSelectParentValue=this.industryFirst,this.selectedVals.initSelectChildValue=this.industrySecond,this.inputValue="无"===this.value?"":this.value,this.$emit("clickIndustryModifyBtn",this.value)},save:function(){for(var e="",t=[],s="",i=0;i<this.selectValue.length;i++)this.selectValue[i].industryId===this.selectedOptions[0]&&(t=this.selectValue[i],s=this.selectValue[i].name);for(var a=0;a<t.items.length;a++)t.items[a].industryId===this.selectedOptions[1]&&(e=t.items[a].name);this.selectedVals.selectParentValue=s,this.selectedVals.selectChildValue=e,this.selectedVals.selectParentId=this.selectedOptions[0],this.selectedVals.selectChildId=this.selectedOptions[1],this.$emit("saveSelectInfo",this.selectedVals)},cancle:function(){this.$emit("cancelSelectInfo",this.selectedVals)},inputBlur:function(){this.$emit("blur",this.value)}},watch:{selectParentId:function(e,t){this.selectedOptions[0]=this.selectParentId,this.selectedOptions[1]=this.selectChildId},selectChildId:function(){this.selectedOptions[0]=this.selectParentId,this.selectedOptions[1]=this.selectChildId}}},m=(s(638),Object(u.a)(v,p,[],!1,null,"4058f276",null));m.options.__file="src/pages/account/info-select.vue";var f=m.exports,g=s(94),y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ve-upload-tx",on:{click:function(t){return t.stopPropagation(),e.overUpload(t)}}},[e.fileSrc||!e.fileSrc&&e.coverImg?s("div",{staticClass:"upload-img-box"},[s("transition",{attrs:{name:"fade"}},[e.fileSrc?s("div",{staticClass:"temp-img",style:{backgroundImage:"url("+e.imgHost+"/"+e.fileSrc+")"}}):e._e(),e._v(" "),!e.fileSrc&&e.coverImg?s("div",{staticClass:"temp-img",style:{backgroundImage:"url("+e.coverImg+")"}}):e._e()]),e._v(" "),s("div",{staticClass:"over-upload"},[s("span",{on:{click:function(t){return t.stopPropagation(),e.overUpload(t)}}},[e._v("\n        编辑\n      ")]),e._v(" "),s("span",{on:{click:function(t){return t.stopPropagation(),e.deleteImage(t)}}},[e._v("\n        删除\n      ")])])],1):e._e(),e._v(" "),s("com-upload",{attrs:{accept:e.accept,actionUrl:"/api/upload/image",inputName:"file",fileSize:e.fileSize},on:{error:e.uploadError,progress:e.uploadProgress,load:e.uploadImgSuccess}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!(e.fileSrc||!e.fileSrc&&e.coverImg),expression:"!(fileSrc||(!fileSrc && coverImg))"}],ref:"uploadFile",staticClass:"upload-file-box",attrs:{title:"点击上传"}})])],1)};y._withStripped=!0;var S={name:"ve-upload-tx",components:{ComUpload:s(95).a},data:function(){return{imgHost:"",fileSrc:"",coverImg:"",percentImg:0}},props:{accept:{type:String,default:"png|jpg|jpeg|bmp|gif"},fileSize:{type:Number,default:1024},defaultImg:{type:String,default:""},title:{type:String,default:"上传文件"},errorMsg:{type:String,default:""}},watch:{defaultImg:{handler:function(e){this.coverImg=e},immediate:!0}},methods:{deleteImage:function(){this.coverImg="",this.fileSrc="",this.$emit("success",{name:"",host:""})},overUpload:function(){this.$refs.uploadFile.click()},uploadProgress:function(e){this.percentImg=parseFloat(parseFloat(e.percent.replace("%","")).toFixed(2)),100===this.percentImg&&(this.percentImg=0)},uploadImgSuccess:function(e){var t=JSON.parse(e.data).data;t.host&&(this.imgHost=t.host),t.name&&(this.fileSrc=t.name),this.$emit("success",t)},uploadError:function(e){this.fileSrc="",this.$emit("error",e)}}},w=(s(639),Object(u.a)(S,y,[],!1,null,"bc98317c",null));w.options.__file="src/components/ve-upload-tx.vue";var P=w.exports,C=s(93),_=s(24),I={data:function(){return{account:"",accountName:"",displayValue:"",industryId:0,selectParentId:0,selectChildId:0,industryFirst:"",industrySecond:"",accountPhone:"",accountPassword:"",companyName:"",state:"",industry:[],companyWebsite:"",userName:"",userPost:"",userPhone:"",officeNo:"",userEmail:"",userWechat:"",userQQ:"",userRemarks:"",confirmText:"",uploadImgErrorMsg:"",messageBoxShow:!1,messageBoxTitle:"更换手机",messageBoxExplain:"",messageBoxType:"changeMobile",step:"initialPhone",key:"",isProhibit:!0,isSend:!1,second:60,timerr:"",phoneKey:"",isImg:!1,cap:null,phone:"",isOldphone:!0,newPhone:"",saveNewPhone:"",token:"",codeToken:"",phoneStatus:!1,phoneCode:"",oldPassword:"",newPassword:"",reNewPassword:"",licenseCode:"",licensePic:"",avatar:"",fontColor:"#555",errorTips:{oldPassword:"",newPassword:"",rePassword:"",website:"",mobile:"",tel:"",email:"",qq:"",newPhone:"",oldPhone:""},changeState:{accountName:!1,industry:!1,website:!1,name:!1,position:!1,mobile:!1,tel:!1,email:!1,wechat:!1,qq:!1,remark:!1},isShow:!1,isContainEn:0,isContainNum:0,isContainCount:0,phoneCodeError:!1,phoneCodeTip:""}},mounted:function(){var e=this;this.getAccount();var t=this.contactInfo;t&&t.userName?(this.userName=t.name?t.name:"无",this.userPost=t.position?t.position:"无",this.userPhone=t.mobile?t.mobile:"无",this.officeNo=t.tel?t.tel:"无",this.userEmail=t.email?t.email:"无",this.userWechat=t.wechat?t.wechat:"无",this.userQQ=t.qq?t.qq:"无",this.userRemarks=t.remark?t.remark:"无"):this.$get(g.a.GET_USERINFO).then(function(t){var s=t.data;e.userName=s.name?s.name:"无",e.userPost=s.position?s.position:"无",e.userPhone=s.mobile?s.mobile:"无",e.officeNo=s.tel?s.tel:"无",e.userEmail=s.email?s.email:"无",e.userWechat=s.wechat?s.wechat:"无",e.userQQ=s.qq?s.qq:"无",e.userRemarks=s.remark?s.remark:"无",e.setContactInfo(t.data)}),this.$config({handlers:!0}).$get(g.a.GET_CAPTCHA_ID).then(function(t){e.key=t.data}).catch(function(e){console.log(e.msg)})},computed:c()({},Object(C.c)("login",{isLogin:function(e){return e.isLogin},accountInfo:function(e){return e.accountInfo},contactInfo:function(e){return e.contactInfo}}),{defaultImg:function(){return this.avatar?this.$imgHost+"/"+this.avatar:""},licensePicUrl:function(){return"无"===this.licensePic?"":this.$imgHost+"/"+this.licensePic}}),components:{"com-editor":d,"con-select":f,"ve-upload-tx":P},created:function(){},destroyed:function(){clearInterval(this.timerr)},watch:{phone:function(){this.checkPhone(this.phone)},newPhone:function(){this.checkPhone(this.newPhone)},saveNewPhone:function(){this.checkPhone(this.saveNewPhone)},phoneStatus:function(e){this.isGetCodePermission(!0)},isImg:function(e){this.isGetCodePermission()}},methods:c()({},Object(C.b)("login",{setIsLogin:_.e,setAccountInfo:_.a,setContactInfo:_.b}),{getAccount:function(){var e=this;if(this.accountInfo&&this.accountInfo.userName){var t=this.accountInfo;this.account=t.userName?t.userName:"无",this.accountName=t.name?t.name:"无",this.avatar=t.avatar?t.avatar:"无",this.accountPhone=t.mobile?t.mobile:"无",this.accountPassword=t.hasPassword?"已设置":"未设置",this.companyName=t.company?t.company:"无",this.state="AWAIT"===t.verify?"未认证":"已认证",this.displayValue=t.industryFirst?t.industryFirst+"/"+t.industrySecond:"无",this.industryFirst=t.industryFirst?t.industryFirst:"",this.industrySecond=t.industrySecond?t.industrySecond:"",this.selectChildId=t.industryId?parseInt(t.industryId):0,this.companyWebsite=t.website?t.website:"无",this.licenseCode=t.licenseCode?t.licenseCode:"无",this.licensePic=t.licensePic?t.licensePic:"无"}else this.$get(g.a.GET_ACCOUNT).then(function(t){var s=t.data?t.data:"";e.account=s.userName?s.userName:"无",e.accountName=s.name?s.name:"无",e.avatar=s.avatar?s.avatar:"无",e.accountPhone=s.mobile?s.mobile:"无",e.accountPassword=s.hasPassword?"已设置":"未设置",e.companyName=s.company?s.company:"无",e.state="AWAIT"===s.verify?"未认证":"已认证",e.displayValue=s.industryFirst?s.industryFirst+"/"+s.industrySecond:"无",e.industryFirst=s.industryFirst?s.industryFirst:"",e.industrySecond=s.industrySecond?s.industrySecond:"",e.selectChildId=s.industryId?parseInt(s.industryId):0,e.companyWebsite=s.website?s.website:"无",e.licenseCode=s.licenseCode?s.licenseCode:"无",e.licensePic=s.licensePic?s.licensePic:"无",e.setAccountInfo(t.data)})},uploadImgSuccess:function(e){var t=this,s={avatar:""};e.host&&e.name&&(s={avatar:e.name}),this.$post(g.a.POST_SET_COMPANY,s).then(function(s){var i=JSON.parse(n()(t.accountInfo));i.avatar=e.name,t.setAccountInfo(i)})},uploadError:function(e){503===e.code&&e.data.length>0&&("size-limit"===e.data[0].state&&(e.msg="图片过大,最大不能超过2M"),"type-limit"===e.data[0].state&&(e.msg="图片类型错误")),this.$messageBox({header:"提示",content:e.msg,autoClose:3,confirmText:"确定",width:"400px",handleClick:function(e){e.action}})},saveSelectInfo:function(e,t,s,i){var a=this,o={};"industry"===s&&(o.industryId=parseInt(e.selectChildId)),this.displayValue=e.selectParentValue+"/"+e.selectChildValue,"company"===i&&this.$post(g.a.POST_SET_COMPANY,o).then(function(t){var i=JSON.parse(n()(a.accountInfo));a.changeState[s]=!1,i.industryId=parseInt(e.selectChildId),i.selectParentId=e.selectParentId,i.industrySecond=e.selectChildValue,i.industryFirst=e.selectParentValue,a.industryId=parseInt(e.selectChildId),a.setAccountInfo(i)})},save:function(e,t,s,i){var a=this;if("mobile"===s){if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(t)))return this.errorTips[s]="手机格式不正确",this.changeState[s]=!0,!1;this.changeState[s]=!1,this.errorTips[s]=""}else if("tel"===s){if(!/^\d{8,12}$/.test(parseInt(t)))return this.errorTips[s]="办公电话格式不正确",this.changeState[s]=!0,!1;this.changeState[s]=!1,this.errorTips[s]=""}else if("email"===s){if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(t))return this.errorTips[s]="邮箱格式不正确",this.changeState[s]=!0,!1;this.changeState[s]=!1,this.errorTips[s]=""}else if("qq"===s){if(!/^\d{1,20}$/.test(parseInt(t)))return this.errorTips[s]="QQ格式不正确",this.changeState[s]=!0,!1;this.changeState[s]=!1,this.errorTips[s]=""}var o=s,c={};"name"===s&&"company"===i?this.changeState.accountName=!1:this.changeState[s]=!1,c[o]=t,"company"===i?this.$post(g.a.POST_SET_COMPANY,c).then(function(e){var s=JSON.parse(n()(a.accountInfo));s[o]=t,a.setAccountInfo(s)}):"user"===i&&this.$post(g.a.POST_SET_USER,c).then(function(e){var s=JSON.parse(n()(a.contactInfo));s[o]=t,a.setContactInfo(s)})},cancelSelectInfo:function(e,t){switch(this.changeState[t]=!1,t){case"industry":this.selectChildId=e.initSelectChildId}},cancel:function(e,t){switch(this.changeState[t]=!1,t){case"accountName":this.accountName=e;break;case"website":this.companyWebsite=e,this.errorTips.website="";break;case"name":this.userName=e;break;case"position":this.userPost=e;break;case"mobile":this.userPhone=e,this.errorTips.mobile="";break;case"tel":this.officeNo=e,this.errorTips.tel="";break;case"email":this.userEmail=e,this.errorTips.email="";break;case"wechat":this.userWechat=e;break;case"qq":this.userQQ=e,this.errorTips.qq="";break;case"remark":this.userRemarks=e}},clickIndustryModifyBtn:function(e){var t=this;this.$get(g.a.GET_INDUSTRIES,{type:"BUSINESS"}).then(function(s){t.industry=s.data,t.changeState[e]=!0;for(var i=0;i<t.industry.length;i++)for(var a=0;a<t.industry[i].items.length;a++)t.industry[i].items[a].industryId===t.selectChildId&&(t.selectParentId=t.industry[i].items[a].industryPid)})},clickChangeState:function(e){this.changeState[e]=!0},clickSave:function(e,t,s){switch(this.isEdit=!0,"popup"===t&&(this.messageBoxShow=!0,this.errorTips.oldPhone="",this.errorTips.newPhone="",this.phoneCodeError=!1,this.errorTips.oldPassword="",this.errorTips.newPassword="",this.errorTips.rePassword=""),s){case"mobliePhone":this.messageBoxType="changeMobile",this.fontColor="#555",this.phone=e,this.messageBoxExplain="为了保证您的账号安全，更换手机前请先进行安全验证",this.isOldphone=!0,this.phoneCode="",this.step="initialPhone";var i=this;window.initNECaptcha({captchaId:i.key,element:"#captcha",mode:"float",width:390,onReady:function(e){},onVerify:function(e,t){t&&(i.phoneKey=t.validate,i.isImg=!0),e&&console.log(e)},onError:function(e){console.log(e)}},function(e){i.cap=e}),this.confirmText="提交",this.messageBoxTitle="更换手机",clearInterval(this.timerr),this.isSend=!1,this.isProhibit=!0,this.second=60,this.isImg=!1,this.phoneKey="";break;case"password":this.messageBoxType="changePassword",this.fontColor="#555",this.oldPassword="",this.newPassword="",this.reNewPassword="",this.confirmText="提交",this.messageBoxTitle="修改密码";break;case"state":this.messageBoxType="seeState",this.fontColor="#555",this.confirmText="确定",this.messageBoxTitle="认证信息"}},messageBoxClick:function(e){var t=this;if("cancel"===e.action)this.messageBoxShow=!1;else if("confirm"===e.action)if("changeMobile"===this.messageBoxType)if("initialPhone"===this.step){if(!this.phone)return this.errorTips.oldPhone="请输入手机号",!1;if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(this.phone)))return this.errorTips.oldPhone="手机格式不正确",!1;if(!this.phoneCode)return this.phoneCodeError=!0,this.phoneCodeTip="请输入验证码",!1;var s={mobile:this.phone,code:this.phoneCode,type:"BUSINESS_USER_VERIFY_MOBILE"};this.$config({handlers:!0}).$post(g.a.POST_VERIFY_MOBILE,s).then(function(e){t.phoneCodeError=!1,t.phoneCodeTip=e.msg,t.token=e.data.codeToken,t.phone="",t.fontColor="#4B5AFE",t.messageBoxExplain="验证成功，请输入新的手机号",t.phoneCode="",t.isOldphone=!1,t.step="newPhone",clearInterval(t.timerr),t.isSend=!1,t.isProhibit=!0,t.second=60,t.isImg=!1,t.phoneKey="",t.cap.refresh()}).catch(function(e){t.phoneCodeError=!0,t.phoneCodeTip=e.msg})}else if("newPhone"===this.step){if(!this.saveNewPhone)return this.errorTips.newPhone="请输入新手机号",!1;if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(this.saveNewPhone)))return this.errorTips.newPhone="新手机号格式不正确",!1;if(!this.phoneCode)return this.phoneCodeError=!0,this.phoneCodeTip="请输入验证码",!1;var i={mobile:this.saveNewPhone,codeToken:this.token,code:this.phoneCode};this.$config({handlers:!0}).$post(g.a.POST_UPDATE_MOBILE,i).then(function(e){t.phone="",t.step="phoneSuccess",t.confirmText="完成",t.accountPhone=t.saveNewPhone,t.newPhone=t.saveNewPhone,t.saveNewPhone="",t.$get(g.a.GET_ACCOUNT).then(function(e){t.setAccountInfo(e.data)})}).catch(function(e){t.phoneCodeError=!0,t.phoneCodeTip=e.msg})}else"phoneSuccess"===this.step&&(this.messageBoxExplain="修改成功",this.step="initialPhone",this.phoneCode="",this.messageBoxShow=!1);else if("changePassword"===this.messageBoxType){if(!this.oldPassword)return this.errorTips.oldPassword="请输入旧密码",!1;if(!this.newPassword)return this.errorTips.newPassword="请输入新密码",!1;if(!/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,30}$/.test(this.newPassword))return this.errorTips.newPassword="密码支持6~30位的大小写英文和数字，必须包含英文和数字",!1;if(!this.reNewPassword)return this.errorTips.rePassword="请输入确认新密码",!1;if(this.newPassword!==this.reNewPassword)return this.errorTips.rePassword="重新输入密码与新密码不一致",!1;var a={mobile:this.accountPhone,newPassword:this.newPassword,oldPassword:this.oldPassword};this.$config({handlers:!0}).$post(g.a.POST_CHANGE_PASSWORD,a).then(function(e){t.$messageBox({header:"提示",content:"修改成功",confirmText:"确定",autoClose:3,width:"500px",handleClick:function(e){"cancel"===e.action||e.action}}),t.oldPassword="",t.newPassword="",t.reNewPassword="",t.messageBoxShow=!1}).catch(function(e){10010===e.code&&(t.errorTips.oldPassword="旧密码输入不正确")})}else"seeState"===this.messageBoxType&&(this.messageBoxShow=!1)},isGetCodePermission:function(e){this.isImg&&this.phoneStatus?(this.isProhibit=!1,this.second>0&&(this.isSend=!1,this.isProhibit=!1,this.second=60,this.mobileOpacity=1,clearInterval(this.timerr),e&&(this.isImg=!1,this.phoneKey="",this.cap.refresh()))):this.isProhibit=!0},checkPhone:function(e){/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(parseInt(e))?this.phoneStatus=!0:this.phoneStatus=!1},getCode:function(){var e=this;if(this.isProhibit)return!1;var t={};t=this.isOldphone?{mobile:this.phone,type:"BUSINESS_USER_VERIFY_MOBILE",captcha:this.phoneKey}:{mobile:this.saveNewPhone,type:"BUSINESS_USER_UPDATE_MOBILE",captcha:this.phoneKey},this.$config({handlers:!0}).$get(g.a.GET_CODE,t).then(function(t){e.phoneCodeError=!1,e.phoneCodeTip=t.msg,e.isSend=!0,e.isProhibit=!0,clearInterval(e.timerr),e.timerr=setInterval(function(){e.second--,e.second<=0&&(clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh())},1e3)}).catch(function(t){10001===t.code?(e.phoneCodeError=!0,e.phoneCodeTip=t.msg,e.opacity=1,clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh()):10050===t.code?(e.phoneCodeError=!0,e.phoneCodeTip="验证码输入过于频繁"):(e.phoneCodeError=!0,e.phoneCodeTip=t.msg,e.opacity=1,clearInterval(e.timerr),e.isSend=!1,e.isProhibit=!0,e.second=60,e.isImg=!1,e.phoneKey="",e.cap.refresh())})},codeFocus:function(){this.phoneCodeError=!1,this.phoneCodeTip=""},passwordFocus:function(e){switch(this.errorTips.newPassword="",e){case"oldPassword":this.errorTips.oldPassword="";break;case"newPassword":this.errorTips.newPassword="",this.isShow=!0;break;case"reNewPassword":this.errorTips.rePassword=""}},phoneFocus:function(e){switch(e){case"oldphone":this.errorTips.oldPhone="";break;case"newphone":this.errorTips.newPhone=""}},passwordChange:function(){this.isContainCount=this.newPassword.length>=6?1:0;var e=/^(?=.*\d.*\b)/;this.isContainNum=e.test(this.newPassword)?1:0;var t=/[_a-zA-Z]/;this.isContainEn=t.test(this.newPassword)?1:0,this.newPassword.length>=6&&e.test(this.newPassword)&&t.test(this.newPassword)?this.isChecked=!0:this.isChecked=!1},passwordBlur:function(){this.isShow=!1}})},T=(s(640),Object(u.a)(I,i,[],!1,null,"52a11e9c",null));T.options.__file="src/pages/account/index.vue";t.default=T.exports}}]);
//# sourceMappingURL=13.97491a71.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{481:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"test-wrap"},[e("draggable",{attrs:{options:{handle:".sort"}},model:{value:t.dragData,callback:function(i){t.dragData=i},expression:"dragData"}},t._l(t.dragData,function(t,i){return e("com-q",{key:i,ref:"comEdit"+i,refInFor:!0,attrs:{value:t,edit:!0,index:i+1},on:{"update:value":function(i){t=i}}})}))],1),t._v(" "),e("div",{staticClass:"test-wrap1"},[e("draggable",{attrs:{options:{handle:".sort"}},model:{value:t.dragData,callback:function(i){t.dragData=i},expression:"dragData"}},t._l(t.dragData,function(t,i){return e("com-q",{key:i,ref:"com"+i,refInFor:!0,attrs:{value:t,index:i+1},on:{"update:value":function(i){t=i}}})}))],1)])};s._withStripped=!0;var a=e(456),n=e.n(a),r=e(562),o=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"red-packet-rain"},[i("div",{staticClass:"debug"},[this._v("\n    当前渲染红包数："+this._s(this.packets)),i("br"),this._v("\n    FPS："+this._s(this.fps)+"\n  ")]),this._v(" "),i("canvas",{attrs:{id:"canvas"}})])};o._withStripped=!0;var l=e(100),h=e.n(l),c=e(139),u=e.n(c),d=e(140),p=e.n(d),m=function(){function t(i,e,s){u()(this,t),this.ctx=i,this.w=e,this.h=s,this.live=!0}return p()(t,[{key:"draw",value:function(){this.ctx.save(),this.ctx.fillStyle="rgba(0,0,0,0.8)",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.restore()}}]),t}(),v=function(){function t(i,e,s,a,n){u()(this,t),this.ctx=s,this.img1=a,this.img2=n,this.limit=e,this.x=i,this.y=-80;var r=this.img1;this.w=r.width,this.h=r.height,this.s=Math.round(5*Math.random())+0,this.live=!0,this.change=0}return p()(t,[{key:"draw",value:function(){this.ctx.save(),this.change%50==0&&(this.x=1600*Math.random()+50,this.y=700*Math.random()+50),this.change%5==0?this.ctx.drawImage(this.img1,this.x,this.y,this.w,this.h):this.ctx.drawImage(this.img2,this.x,this.y,this.w,this.h),this.change+=1,this.y>this.limit&&(this.live=!1),this.ctx.restore()}},{key:"isTouch",value:function(t,i){t>this.x&&t<this.x+this.w&&i>this.y-this.h/2&&i<this.y+this.h&&(this.live=!1)}}]),t}(),f={limit:2},g=function(){},w=function(){function t(i){u()(this,t),this.prev=0,this.lastTime=0,this.fps=60,this._options=h()({},f,i),this.init()}return p()(t,[{key:"init",value:function(){var t=this;this.canvas=this._options.el,this.timeUpdate=this._options.timeUpdate||g,this.timeOver=this._options.timeOver||g,this.limit=this._options.limit,this.ctx=this.canvas.getContext("2d"),this.w=this.canvas.width=window.innerWidth,this.h=this.canvas.height=window.innerHeight,this.img1=new Image,this.img2=new Image,this.sprites=[new m(this.ctx,this.w,this.h)],this.canvas.addEventListener("click",function(i){var e=i.pageX,s=i.pageY;t.sprites.forEach(function(t){return t.isTouch&&t.isTouch(e,s)})})}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"start",value:function(){var t=this;this.img1.load?this.work():(this.img1.src=this._options.pack.url1,this.img2.src=this._options.pack.url2,this.img1.width=this._options.pack.w,this.img1.height=this._options.pack.h,this.img1.addEventListener("load",function(){t.img1.load=!0,t.work()}))}},{key:"work",value:function(){this.clear();var t=Math.random()*(this.w-200)+50;this.sprites.length-1<this.limit&&this.sprites.push(new v(t,this.h,this.ctx,this.img1,this.img2)),this.sprites.forEach(function(t){t.live&&t.draw()}),this.sprites=this.sprites.filter(function(t){return t.live}),this.timeUpdate({counts:this.sprites.length-1,fps:this.getFps()}),window.requestAnimationFrame(this.work.bind(this))}},{key:"getFps",value:function(){var t=Date.now();return t-this.prev>100&&(this.fps=1e3/(t-this.lastTime),this.prev=t),this.lastTime=t,this.fps.toFixed(2)}}]),t}(),x={data:function(){return{rpr:null,packets:0,fps:60}},mounted:function(){var t=this;this.rpr=new w({el:document.querySelector("#canvas"),pack:{url1:e(744),url2:e(745),w:160,h:100},timeUpdate:function(i){var e=i.counts,s=i.fps;t.packets=e,t.fps=s}}),this.rpr.start()},methods:{}},y=(e(746),e(1)),T=Object(y.a)(x,o,[],!1,null,"814214e2",null);T.options.__file="src/components/red-packet-rain/com.vue";var b=T.exports,k=e(220),_={components:{comRed:b,comQ:e(717).a,draggable:n.a},data:function(){return{tIndex:0,dragData:[{title:"",errorTip:"",type:r.b.RADIO,required:!0,detail:{list:[{value:""},{value:""}]},ext:{name:"单选题"}},{title:"",errorTip:"",type:r.b.CHECKBOX,value:[],required:!0,detail:{list:[{value:""},{value:""}]},ext:{name:"多选题"}},{title:"下拉题",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"选项"}]},ext:{name:"下拉题"}},{title:"",errorTip:"",type:r.b.TEXT,style:"",required:!1,detail:{format:"textarea",max:300},ext:{name:"问答题"}},{title:"姓名",errorTip:"",type:r.b.TEXT,required:!1,detail:{format:"input",max:10},ext:{name:"姓名"}},{title:"手机号",errorTip:"",type:r.b.TEXT,required:!0,detail:{format:"mobile",max:11},verification:"Y",ext:{name:"手机号"}},{title:"邮箱",errorTip:"",type:r.b.TEXT,required:!1,detail:{format:"email",max:30},ext:{name:"邮箱"}},{title:"",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"男"},{value:"女"}]},ext:{fixedness:!0,name:"性别"}},{title:"",errorTip:"",type:r.b.DATE,required:!0,detail:{format:"yyyy-MM-dd"},ext:{name:"生日"}},{title:"",errorTip:"",type:r.b.AREA,required:!0,detail:{level:"address"},ext:{name:"地域"}},{title:"行业",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"IT/互联网"},{value:"电子/通信/硬件"},{value:"金融"},{value:"交通/贸易/物流"},{value:"消费品"},{value:"机械/制造"},{value:"能源/矿产环保"},{value:"制药/医疗"},{value:"专业服务"},{value:"教育/培训"},{value:"广告/媒体/娱乐/出版"},{value:"房地产/建筑"},{value:"服务业"},{value:"政府/非盈利机构/其它"}]},ext:{fixedness:!0,name:"教育水平"}},{title:"职位",type:r.b.TEXT,required:!0,detail:{format:"input",max:10},ext:{name:"职位"}},{title:"教育水平",errorTip:"",type:r.b.SELECT,required:!0,detail:{list:[{value:"博士"},{value:"硕士"},{value:"本科"},{value:"大专"},{value:"高中"}]},ext:{fixedness:!0,name:"教育水平"}}],at:1,tabValue:1,tabValue1:"1",dialogVisible:!0,show1:!1,show:!1,header:"Notification Title",content:"I will never close automatically. I will be close automatically. I will never close automatically.",id:1,outValue:"asd",exParams:{joinID:"123123"},fileSize:2e5}},mounted:function(){var t=this;setTimeout(function(){console.log(t.$refs.comEdit1[0]),t.$refs.comEdit1[0].$children[1].validate()},2e3)},methods:{uploadSelected:function(t){console.log("选中文件",t)},uploadProgress:function(t){console.log("上传进度:",t)},uploadLoad:function(t){console.log("上传成功:",t)},uploadError:function(t){console.log("上传失败:",t)},uploadOver:function(){console.log("上传完毕")},testCom:function(){this.show1=!0,this.at=1},testCom1:function(){this.show1=!0,this.at=2},testFun:function(){Object(k.a)({header:"Notification Title"+this.id++,content:"I will never close automatically. I will be close automatically. I will never close automatically.",close:function(){console.log("close")},closed:function(){console.log("closed")}})}}},E=(e(754),Object(y.a)(_,s,[],!1,null,null,null));E.options.__file="src/pages/com-test.vue";i.default=E.exports},563:function(t,i,e){},571:function(t,i,e){},744:function(t,i,e){t.exports=e.p+"static/img/packet1.57cc273.png"},745:function(t,i,e){t.exports=e.p+"static/img/packet2.2c91ed3.png"},746:function(t,i,e){"use strict";var s=e(563);e.n(s).a},754:function(t,i,e){"use strict";var s=e(571);e.n(s).a}}]);
//# sourceMappingURL=4.dab0af17.js.map
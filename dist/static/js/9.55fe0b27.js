(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{257:function(t,e,n){},377:function(t,e,n){"use strict";var i=n(257);n.n(i).a},544:function(t,e,n){"use strict";n.r(e);var i=n(227),a=n.n(i),r=n(228),s=n.n(r),o=n(111),h=n.n(o),l=n(54),u=n.n(l),c=n(77),d=n.n(c),f=n(229),g=n.n(f),v=n(232),p=n.n(v),y=n(230),_=n.n(y),m=function(){function t(){a()(this,t)}return s()(t,[{key:"linear",value:function(t,e,n,i){return n*t/i+e}},{key:"quart",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t+e},easeOut:function(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"quad",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t+e},easeOut:function(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"cubic",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t*t+e},easeOut:function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"quint",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t*t*t*t+e},easeOut:function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}}]),t}(),b=m;m.prototype.Linear="linear",m.prototype.EaseIn="easeIn",m.prototype.EaseOut="easeOut",m.prototype.EaseInOut="easeInOut";var w=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()(this,e);var i=g()(this,(e.__proto__||d()(e)).call(this,t,n));return i.type="NORMAL-RENDERER",i.itemPool=[],i.tweenType=n.tweenType||"quad",i.tweenMethod=n.tweenMethod||i.tween.Linear,i.duration=n.duration||5e3,i.offsetYPercent=n.offsetYPercent||.1,i.fillPercent=n.fillPercent||.8,i.changeStyle(n),i._calcRow(),i}return _()(e,t),s()(e,[{key:"changeStyle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.globalHeight=t.fontSize||this.globalHeight||18,this.globalFamily=t.fontFamily||this.globalFamily||"Microsoft YaHei",this.globalStyle=t.fontColor||this.globalStyle||"#ffffff",this.opacity=t.opacity||this.opacity||1,this.gap=t.gap||this.gap||3,this.globalChanged=!0}},{key:"update",value:function(t,n,i){if(p()(e.prototype.__proto__||d()(e.prototype),"update",this).call(this,t,n,i),this.globalChanged&&this.initStyle(),!this._pause){this.ctx.clearRect(0,0,t,n),this.ctx.save();for(var a=this.data.length,r=0;r<a;r++){var s=this.data[r];s&&(s.elapsedTime+=i,s.x=this.tween[this.tweenType](this.tweenMethod,s.elapsedTime,t,-s.width-t,s.duration),this.ctx.fillStyle=s.fillStyle,s.x<-s.width?(this._recycle(s),this.data.splice(r,1),a--):this.ctx.fillText(s.data,s.x,s.y))}this.ctx.restore()}}},{key:"initStyle",value:function(){p()(e.prototype.__proto__||d()(e.prototype),"initStyle",this).call(this),this.globalChanged=!1,this._mergeFont(),this.ctx.font=this.globalFont,this.ctx.textBaseline="middle",this.ctx.fillStyle=this.globalColor,this.ctx.globalAlpha=this.opacity}},{key:"add",value:function(t,n){p()(e.prototype.__proto__||d()(e.prototype),"add",this).call(this,t,n);var i=this.itemPool.length>0?this.itemPool.shift():{};u()(i,n),this.ctx&&(i.width=this.ctx.measureText(t).width||200),i.elapsedTime=0,i.data=t,i.height=this.globalHeight,i.duration=this.duration-Math.random()*this.duration/3>>0,i.fillStyle=n.fillStyle||this.globalStyle,i.y=this._randomRow(),this._data.push(i)}},{key:"destroy",value:function(){p()(e.prototype.__proto__||d()(e.prototype),"destory",this).call(this),this.itemPool=[],this._data=[]}},{key:"_mergeFont",value:function(){this.globalFont=this.globalHeight+"px "+this.globalFamily}},{key:"_recycle",value:function(t){t.elapsedTime=0,t.width=0,t.height=0,t.data="",t.x=0,t.y=0,t.row=-1,t.duration=0,t.fillStyle="",this.itemPool.push(t)}},{key:"_calcRow",value:function(){var t=this.height*this.fillPercent;this.totalRows=Math.floor(t/(this.globalHeight+this.gap))}},{key:"_randomRow",value:function(){var t=Math.floor(Math.random()*this.totalRows);return this.height*this.offsetYPercent+t*(this.globalHeight+this.gap)}}]),e}(function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()(this,t),this.type="BASE-RENDERER",this.canvas=e,this.opt=n,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.itemPool=[],this._data=[],this._pause=!1,this.tween=new Proxy(new b,{get:function(t,e){return"function"==typeof t[e]?t[e].bind(t):t[e]}})}return s()(t,[{key:"update",value:function(t,e,n){}},{key:"initStyle",value:function(){}},{key:"pause",value:function(){this._pause=!0}},{key:"resume",value:function(){this._pause=!1}},{key:"destory",value:function(){}},{key:"add",value:function(t,e){}},{key:"clearRect",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"resize",value:function(t,e){this.canvas.width=t,this.canvas.height=e,this.width=t,this.height=e}},{key:"invalidateSize",value:function(){this.globalChanged=!0}},{key:"data",get:function(){return this._data||[]}}]),t}()),k=window.requestAnimationFrame||window.webkitRequestAnimationFrame,S=h()("barrage-loop"),x=function(){function t(){a()(this,t),window.barrages=[],this._fps=0,this.renderers=[],this.running=!1,this[S]()}return s()(t,[{key:S,value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime(),n=(new Date).getTime();if(this.running){var i=n-e,a=this.width,r=this.height;this.renderers.forEach(function(t){t.renderer.update(a,r,i)}),this._fps=1e3/i>>0,k(function(){return t[S](n)})}else this.renderers.forEach(function(t){t.renderer.clearRect()})}},{key:"registRenderer",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0;switch(this.width=e.clientWidth,this.height=e.clientHeight,t){case"normal":i=new w(e,n)}if(null!==i){var a={id:t+100*Math.random()>>0,type:t,renderer:i};window.barrages.push(e),this.renderers.push(a)}}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.renderers.forEach(function(i){i.type===e&&i.renderer.add(t,n)})}},{key:"start",value:function(){this.running||(this.running=!0,console.log("[barrage] start"),this[S]())}},{key:"stop",value:function(){this.running=!1,console.log("[barrage] stop")}},{key:"pause",value:function(){this.renderers.forEach(function(t){t.renderer.pause()}),console.log("[barrage] pause")}},{key:"resume",value:function(){this.renderers.forEach(function(t){t.renderer.resume()}),console.log("[barrage] resume")}},{key:"destroy",value:function(){this.renderers.forEach(function(t){var e=t.renderer;e.clearRect(),e.destroy()}),this.renderers=[],this.running=!1,this._fps=0,console.log("[barrage] destroy")}},{key:"fps",get:function(){return this._fps}}]),t}(),P=n(339),R={created:function(){this.barrageSystem=new x;var t="access:499279ae:885ba973a5d6ad10";this.hostPusher=new P.a("499279ae","lss_5b3c9d9d","inav_47d93f42",t,"my-pusher"),this.hostPusher.initHostPusher(),this.hostPusher.accountId="master",this.hostPusher2=new P.a("499279ae","lss_5b3c9d9d","inav_47d93f42",t,"my-pusher2"),this.hostPusher.initHostPusher(),this.hostPusher.accountId="master2"},mounted:function(){},data:function(){return{content:"",barrageSystem:null,fps:0,intervalId:0,c:null,hostPusher:null,puller:null,hostPusher2:null}},methods:{startBarrage:function(){this.barrageSystem.start()},stopBarrage:function(){this.barrageSystem.stop(),clearInterval(this.intervalId)},registBarrage:function(){this.barrageSystem.registRenderer("normal",this.$refs.cvs,{})},addBarrage:function(){var t=this,e=["#ffffff","#ff0000","#00ff00","#0000ff"];this.intervalId=setInterval(function(){t.barrageSystem.add(Math.random().toFixed(2),"normal",{fillStyle:e[Math.random()*e.length>>0]}),t.barrageSystem.add(Math.random().toFixed(2),"normal"),t.fps=t.barrageSystem.fps},50)},pauseBarrage:function(){this.barrageSystem.pause()},resumeBarrage:function(){this.barrageSystem.resume()},destroyBarrage:function(){this.barrageSystem.destroy()},getDevices:function(){this.hostPusher.getDevices().then(function(t){console.log(t)})},broadcast:function(){this.hostPusher.startBroadCast()},stopBroadcast:function(){this.hostPusher.stopBroadCast()},getSetting:function(){console.log(this.hostPusher.getSetting())},hideCamera:function(){this.hostPusher.changeSetting({video:!1})}}},B=(n(377),n(1)),E=Object(B.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("canvas",{ref:"cvs",staticClass:"cvs",attrs:{width:"400px",height:"200px"}}),t._v(" "),n("div",[n("el-input",{attrs:{clearable:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-button",{on:{click:t.addBarrage}},[t._v("添加")]),t._v(" "),n("span",[t._v(t._s(t.fps))])],1),t._v(" "),n("div",[n("el-button",{on:{click:t.registBarrage}},[t._v("注册普通")]),t._v(" "),n("el-button",{on:{click:t.startBarrage}},[t._v("开始")]),t._v(" "),n("el-button",{on:{click:t.stopBarrage}},[t._v("停止")]),t._v(" "),n("el-button",{on:{click:t.pauseBarrage}},[t._v("暂停")]),t._v(" "),n("el-button",{on:{click:t.resumeBarrage}},[t._v("恢复")]),t._v(" "),n("el-button",{on:{click:t.destroyBarrage}},[t._v("销毁")])],1),t._v(" "),n("div",[n("div",{attrs:{id:"my-pusher"}}),t._v(" "),n("el-button",{on:{click:t.getDevices}},[t._v("获取设备")]),t._v(" "),n("el-button",{on:{click:t.broadcast}},[t._v("推旁路")]),t._v(" "),n("el-button",{on:{click:t.stopBroadcast}},[t._v("取消旁路推流")]),t._v(" "),n("el-button",{on:{click:t.getSetting}},[t._v("获取推流配置")]),t._v(" "),n("el-button",{on:{click:t.hideCamera}},[t._v("隐藏摄像头")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("svg",{attrs:{width:"400px",height:"400px"}},[n("path",{ref:"pathRef",attrs:{fill:"none",stroke:"#CCC","stroke-width":"10","stroke-linecap":"round"}})])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"my-pusher2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"my-puller"}})])}],!1,null,null,null);E.options.__file="index.vue";e.default=E.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{516:function(t,e,i){},689:function(t,e,i){"use strict";var n=i(516);i.n(n).a},855:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("canvas",{ref:"cvs",staticClass:"cvs",attrs:{width:"800px",height:"500px"}}),t._v(" "),i("div",[i("el-input",{attrs:{clearable:""}}),t._v(" "),i("el-button",{on:{click:t.start}},[t._v("添加")]),t._v(" "),i("span",[t._v(t._s(t.fps))])],1),t._v(" "),i("div",[i("span",[t._v(t._s(t.to))])])])};n._withStripped=!0;var a=i(137),r=i.n(a),s=i(138),o=i.n(s),h=i(222),l=i.n(h),u=i(98),c=i.n(u),f=i(224),d=i.n(f),p=i(455),g=i.n(p),y=i(456),v=i.n(y),_=i(457),w=i.n(_),m=function(){function t(){r()(this,t)}return o()(t,[{key:"linear",value:function(t,e,i,n){return i*t/n+e}},{key:"quart",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,i,n){return i*(t/=n)*t+e},easeOut:function(t,e,i,n){return-i*(t/=n)*(t-2)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}},i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,n)}},{key:"quad",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,i,n){return i*(t/=n)*t+e},easeOut:function(t,e,i,n){return-i*(t/=n)*(t-2)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}},i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,n)}},{key:"cubic",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,i,n){return i*(t/=n)*t*t+e},easeOut:function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e}},i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,n)}},{key:"quint",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},easeOut:function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},easeInOut:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e}},i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,n)}}]),t}(),b=m;m.prototype.Linear="linear",m.prototype.EaseIn="easeIn",m.prototype.EaseOut="easeOut",m.prototype.EaseInOut="easeInOut";var k=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,e);var n=g()(this,(e.__proto__||d()(e)).call(this,t,i));return n.type="NORMAL-RENDERER",n.itemPool=[],n.tweenType=i.tweenType||"quad",n.tweenMethod=i.tweenMethod||n.tween.Linear,n.duration=i.duration||5e3,n.offsetYPercent=i.offsetYPercent||.1,n.fillPercent=i.fillPercent||.8,n.changeStyle(i),n._calcRow(),n}return w()(e,t),o()(e,[{key:"changeStyle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.globalHeight=t.fontSize||this.globalHeight||18,this.globalFamily=t.fontFamily||this.globalFamily||"Microsoft YaHei",this.globalStyle=t.fontColor||this.globalStyle||"#ffffff",this.opacity=t.opacity||this.opacity||1,this.gap=t.gap||this.gap||3,this.globalChanged=!0}},{key:"update",value:function(t,i,n){if(v()(e.prototype.__proto__||d()(e.prototype),"update",this).call(this,t,i,n),this.globalChanged&&this.initStyle(),!this._pause){this.ctx.clearRect(0,0,t,i),this.ctx.save();for(var a=this.data.length,r=0;r<a;r++){var s=this.data[r];s&&(s.elapsedTime+=n,s.x=this.tween[this.tweenType](this.tweenMethod,s.elapsedTime,t,-s.width-t,s.duration),this.ctx.fillStyle=s.fillStyle,s.x<-s.width?(this._recycle(s),this.data.splice(r,1),a--):this.ctx.fillText(s.data,s.x,s.y))}this.ctx.restore()}}},{key:"initStyle",value:function(){v()(e.prototype.__proto__||d()(e.prototype),"initStyle",this).call(this),this.globalChanged=!1,this._mergeFont(),this.ctx.font=this.globalFont,this.ctx.textBaseline="middle",this.ctx.fillStyle=this.globalColor,this.ctx.globalAlpha=this.opacity}},{key:"add",value:function(t,i){v()(e.prototype.__proto__||d()(e.prototype),"add",this).call(this,t,i);var n=this.itemPool.length>0?this.itemPool.shift():{};c()(n,i),this.ctx&&(n.width=this.ctx.measureText(t).width||200),n.elapsedTime=0,n.data=t,n.height=this.globalHeight,n.duration=this.duration-Math.random()*this.duration/3>>0,n.fillStyle=i.fillStyle||this.globalStyle,n.y=this._randomRow(),this._data.push(n)}},{key:"destroy",value:function(){v()(e.prototype.__proto__||d()(e.prototype),"destory",this).call(this),this.itemPool=[],this._data=[]}},{key:"_mergeFont",value:function(){this.globalFont=this.globalHeight+"px "+this.globalFamily}},{key:"_recycle",value:function(t){t.elapsedTime=0,t.width=0,t.height=0,t.data="",t.x=0,t.y=0,t.row=-1,t.duration=0,t.fillStyle="",this.itemPool.push(t)}},{key:"_calcRow",value:function(){var t=this.height*this.fillPercent;this.totalRows=Math.floor(t/(this.globalHeight+this.gap))}},{key:"_randomRow",value:function(){var t=Math.floor(Math.random()*this.totalRows);return this.height*this.offsetYPercent+t*(this.globalHeight+this.gap)}}]),e}(function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,t),this.type="BASE-RENDERER",this.canvas=e,this.opt=i,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.itemPool=[],this._data=[],this._pause=!1,this.tween=new Proxy(new b,{get:function(t,e){return"function"==typeof t[e]?t[e].bind(t):t[e]}})}return o()(t,[{key:"update",value:function(t,e,i){}},{key:"initStyle",value:function(){}},{key:"pause",value:function(){this._pause=!0}},{key:"resume",value:function(){this._pause=!1}},{key:"destory",value:function(){}},{key:"add",value:function(t,e){}},{key:"clearRect",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"resize",value:function(t,e){this.canvas.width=t,this.canvas.height=e,this.width=t,this.height=e}},{key:"invalidateSize",value:function(){this.globalChanged=!0}},{key:"data",get:function(){return this._data||[]}}]),t}()),x=window.requestAnimationFrame||window.webkitRequestAnimationFrame,S=l()("barrage-loop"),R=function(){function t(){r()(this,t),window.barrages=[],this._fps=0,this.renderers=[],this.running=!1,this[S]()}return o()(t,[{key:S,value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime(),i=(new Date).getTime();if(this.running){var n=i-e,a=this.width,r=this.height;this.renderers.forEach(function(t){t.renderer.update(a,r,n)}),this._fps=1e3/n>>0,x(function(){return t[S](i)})}else this.renderers.forEach(function(t){t.renderer.clearRect()})}},{key:"registRenderer",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0;switch(this.width=e.clientWidth,this.height=e.clientHeight,t){case"normal":n=new k(e,i)}if(null!==n){var a={id:t+100*Math.random()>>0,type:t,renderer:n};window.barrages.push(e),this.renderers.push(a)}}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.renderers.forEach(function(n){n.type===e&&n.renderer.add(t,i)})}},{key:"start",value:function(){this.running||(this.running=!0,console.log("[barrage] start"),this[S]())}},{key:"stop",value:function(){this.running=!1,console.log("[barrage] stop")}},{key:"pause",value:function(){this.renderers.forEach(function(t){t.renderer.pause()}),console.log("[barrage] pause")}},{key:"resume",value:function(){this.renderers.forEach(function(t){t.renderer.resume()}),console.log("[barrage] resume")}},{key:"destroy",value:function(){this.renderers.forEach(function(t){var e=t.renderer;e.clearRect(),e.destroy()}),this.renderers=[],this.running=!1,this._fps=0,console.log("[barrage] destroy")}},{key:"fps",get:function(){return this._fps}}]),t}(),E={created:function(){this.barrageSystem=new R},mounted:function(){},data:function(){return{to:0,fps:0}},methods:{start:function(){var t=this.$refs.cvs;this.barrageSystem.registRenderer("normal",t,{}),this.addBarrage(),this.barrageSystem.start()},addBarrage:function(){var t=this;setInterval(function(){t.barrageSystem.add(Math.random())},50)}}},O=(i(689),i(2)),I=Object(O.a)(E,n,[],!1,null,null,null);I.options.__file="src/pages/barrage/index.vue";e.default=I.exports}}]);
//# sourceMappingURL=9.588f773e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(t,e,n){},392:function(t,e,n){"use strict";var i=n(265);n.n(i).a},578:function(t,e,n){"use strict";n.r(e);var i=n(74),a=n.n(i),r=n(75),o=n.n(r),s=n(108),l=n.n(s),h=n(65),u=n.n(h),c=n(109),f=n.n(c),d=n(228),p=n.n(d),v=n(229),g=n.n(v),y=n(230),_=n.n(y),w=function(){function t(){a()(this,t)}return o()(t,[{key:"linear",value:function(t,e,n,i){return n*t/i+e}},{key:"quart",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t+e},easeOut:function(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"quad",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t+e},easeOut:function(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"cubic",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t*t+e},easeOut:function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}},{key:"quint",value:function(t){for(var e={linear:this.linear,easeIn:function(t,e,n,i){return n*(t/=i)*t*t*t*t+e},easeOut:function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e},easeInOut:function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}},n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return!!e[t]&&e[t].apply(e,i)}}]),t}(),m=w;w.prototype.Linear="linear",w.prototype.EaseIn="easeIn",w.prototype.EaseOut="easeOut",w.prototype.EaseInOut="easeInOut";var k=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()(this,e);var i=p()(this,(e.__proto__||f()(e)).call(this,t,n));return i.type="NORMAL-RENDERER",i.itemPool=[],i.tweenType=n.tweenType||"quad",i.tweenMethod=n.tweenMethod||i.tween.Linear,i.duration=n.duration||5e3,i.offsetYPercent=n.offsetYPercent||.1,i.fillPercent=n.fillPercent||.8,i.changeStyle(n),i._calcRow(),i}return _()(e,t),o()(e,[{key:"changeStyle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.globalHeight=t.fontSize||this.globalHeight||18,this.globalFamily=t.fontFamily||this.globalFamily||"Microsoft YaHei",this.globalStyle=t.fontColor||this.globalStyle||"#ffffff",this.opacity=t.opacity||this.opacity||1,this.gap=t.gap||this.gap||3,this.globalChanged=!0}},{key:"update",value:function(t,n,i){if(g()(e.prototype.__proto__||f()(e.prototype),"update",this).call(this,t,n,i),this.globalChanged&&this.initStyle(),!this._pause){this.ctx.clearRect(0,0,t,n),this.ctx.save();for(var a=this.data.length,r=0;r<a;r++){var o=this.data[r];o&&(o.elapsedTime+=i,o.x=this.tween[this.tweenType](this.tweenMethod,o.elapsedTime,t,-o.width-t,o.duration),this.ctx.fillStyle=o.fillStyle,o.x<-o.width?(this._recycle(o),this.data.splice(r,1),a--):this.ctx.fillText(o.data,o.x,o.y))}this.ctx.restore()}}},{key:"initStyle",value:function(){g()(e.prototype.__proto__||f()(e.prototype),"initStyle",this).call(this),this.globalChanged=!1,this._mergeFont(),this.ctx.font=this.globalFont,this.ctx.textBaseline="middle",this.ctx.fillStyle=this.globalColor,this.ctx.globalAlpha=this.opacity}},{key:"add",value:function(t,n){g()(e.prototype.__proto__||f()(e.prototype),"add",this).call(this,t,n);var i=this.itemPool.length>0?this.itemPool.shift():{};u()(i,n),this.ctx&&(i.width=this.ctx.measureText(t).width||200),i.elapsedTime=0,i.data=t,i.height=this.globalHeight,i.duration=this.duration-Math.random()*this.duration/3>>0,i.fillStyle=n.fillStyle||this.globalStyle,i.y=this._randomRow(),this._data.push(i)}},{key:"destroy",value:function(){g()(e.prototype.__proto__||f()(e.prototype),"destory",this).call(this),this.itemPool=[],this._data=[]}},{key:"_mergeFont",value:function(){this.globalFont=this.globalHeight+"px "+this.globalFamily}},{key:"_recycle",value:function(t){t.elapsedTime=0,t.width=0,t.height=0,t.data="",t.x=0,t.y=0,t.row=-1,t.duration=0,t.fillStyle="",this.itemPool.push(t)}},{key:"_calcRow",value:function(){var t=this.height*this.fillPercent;this.totalRows=Math.floor(t/(this.globalHeight+this.gap))}},{key:"_randomRow",value:function(){var t=Math.floor(Math.random()*this.totalRows);return this.height*this.offsetYPercent+t*(this.globalHeight+this.gap)}}]),e}(function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()(this,t),this.type="BASE-RENDERER",this.canvas=e,this.opt=n,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.itemPool=[],this._data=[],this._pause=!1,this.tween=new Proxy(new m,{get:function(t,e){return"function"==typeof t[e]?t[e].bind(t):t[e]}})}return o()(t,[{key:"update",value:function(t,e,n){}},{key:"initStyle",value:function(){}},{key:"pause",value:function(){this._pause=!0}},{key:"resume",value:function(){this._pause=!1}},{key:"destory",value:function(){}},{key:"add",value:function(t,e){}},{key:"clearRect",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"resize",value:function(t,e){this.canvas.width=t,this.canvas.height=e,this.width=t,this.height=e}},{key:"invalidateSize",value:function(){this.globalChanged=!0}},{key:"data",get:function(){return this._data||[]}}]),t}()),b=window.requestAnimationFrame||window.webkitRequestAnimationFrame,x=l()("barrage-loop"),R=function(){function t(){a()(this,t),window.barrages=[],this._fps=0,this.renderers=[],this.running=!1,this[x]()}return o()(t,[{key:x,value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime(),n=(new Date).getTime();if(this.running){var i=n-e,a=this.width,r=this.height;this.renderers.forEach(function(t){t.renderer.update(a,r,i)}),this._fps=1e3/i>>0,b(function(){return t[x](n)})}else this.renderers.forEach(function(t){t.renderer.clearRect()})}},{key:"registRenderer",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0;switch(this.width=e.clientWidth,this.height=e.clientHeight,t){case"normal":i=new k(e,n)}if(null!==i){var a={id:t+100*Math.random()>>0,type:t,renderer:i};window.barrages.push(e),this.renderers.push(a)}}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.renderers.forEach(function(i){i.type===e&&i.renderer.add(t,n)})}},{key:"start",value:function(){this.running||(this.running=!0,console.log("[barrage] start"),this[x]())}},{key:"stop",value:function(){this.running=!1,console.log("[barrage] stop")}},{key:"pause",value:function(){this.renderers.forEach(function(t){t.renderer.pause()}),console.log("[barrage] pause")}},{key:"resume",value:function(){this.renderers.forEach(function(t){t.renderer.resume()}),console.log("[barrage] resume")}},{key:"destroy",value:function(){this.renderers.forEach(function(t){var e=t.renderer;e.clearRect(),e.destroy()}),this.renderers=[],this.running=!1,this._fps=0,console.log("[barrage] destroy")}},{key:"fps",get:function(){return this._fps}}]),t}(),I=function(){function t(){a()(this,t)}return o()(t,null,[{key:"start",value:function(t,e,n,i,a){var r=this;clearInterval(this.interval);var o=Math.ceil(Math.pow((e-t)*n,1/3));console.log("总共分N块",o),this.timeInterval=1e3*n/o>>0,console.log("时间间隔",this.timeInterval),this.step=Math.abs(e-t)/o>>0,console.log("单次步长基准",this.step);var s=e;this.interval=setInterval(function(){var e=r.step+r.step*r.getRange(i)>>0;if((s-=e=e<1?1:e)-t<0)return clearInterval(r.interval),void(a&&a(s+e));a&&a(e)},this.timeInterval)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"getRange",value:function(t){return t*(2*Math.random()-1)}}]),t}(),S={created:function(){this.barrageSystem=new R},mounted:function(){},data:function(){return{to:0,fps:0}},methods:{countTO:function(){I.start(0,100,10,.2,function(t){console.log(t)})}}},E=(n(392),n(1)),O=Object(E.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("canvas",{ref:"cvs",staticClass:"cvs",attrs:{width:"400px",height:"200px"}}),t._v(" "),n("div",[n("el-input",{attrs:{clearable:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-button",{on:{click:t.addBarrage}},[t._v("添加")]),t._v(" "),n("span",[t._v(t._s(t.fps))])],1),t._v(" "),n("div",[n("span",[t._v(t._s(t.to))]),t._v(" "),n("el-button",{on:{click:t.countTO}},[t._v("to 100")])],1)])},[],!1,null,null,null);O.options.__file="index.vue";e.default=O.exports}}]);
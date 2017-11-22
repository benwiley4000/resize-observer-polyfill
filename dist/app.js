!function(){"use strict";function t(t){return parseFloat(t)||0}function n(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return e.reduce(function(e,r){return e+t(n["border-"+r+"-width"])},0)}function e(e){var r=e.clientWidth,o=e.clientHeight;if(!r&&!o)return M;var u=g(e).getComputedStyle(e),a=function(n){for(var e={},r=0,i=["top","right","bottom","left"];r<i.length;r+=1){var o=i[r],u=n["padding-"+o];e[o]=t(u)}return e}(u),s=a.left+a.right,f=a.top+a.bottom,c=t(u.width),h=t(u.height);if("border-box"===u.boxSizing&&(Math.round(c+s)!==r&&(c-=n(u,"left","right")+s),Math.round(h+f)!==o&&(h-=n(u,"top","bottom")+f)),!function(t){return t===g(t).document.documentElement}(e)){var l=Math.round(c+s)-r,d=Math.round(h+f)-o;1!==Math.abs(l)&&(c-=l),1!==Math.abs(d)&&(h-=d)}return i(a.left,a.top,c,h)}function r(t){return l?k(t)?function(t){var n=t.getBBox();return i(0,0,n.width,n.height)}(t):e(t):M}function i(t,n,e,r){return{x:t,y:n,width:e,height:r}}function o(t,n){return Math.floor(Math.random()*(n-t+1))+t}function u(){return R(q)}function a(t){return Array.prototype.slice.call(t)}function s(t,n,e){void 0===e&&(e=4);var r=e;for(n--;r--;){var i="block",o=document.createElement("div");n?(i+=" parent",s(o,n,e)):(i+=" leaf",o.innerHTML='<span class="dimen"></span>',o.style.backgroundColor=u()),o.className=i,t.appendChild(o)}}function f(){I=0,x=a(z),q.hue=j[o(0,5)],requestAnimationFrame(c)}function c(){var t=x.shift();t?(I&&2!==I||(t.style.maxWidth=o(30,50)+"%",2===I&&(t.style.minHeight=o(0,80)+"%")),~t.className.indexOf("leaf")&&(t.style.backgroundColor=u()),4==++I&&(I=0),requestAnimationFrame(c)):setTimeout(f,2500)}var h=function(){function t(t,n){var e=-1;return t.some(function(t,r){return t[0]===n&&(e=r,!0)}),e}return"undefined"!=typeof Map?Map:function(){function n(){this.t=[]}var e={size:{configurable:!0}};return e.size.get=function(){return this.t.length},n.prototype.get=function(n){var e=t(this.t,n),r=this.t[e];return r&&r[1]},n.prototype.set=function(n,e){var r=t(this.t,n);~r?this.t[r][1]=e:this.t.push([n,e])},n.prototype.delete=function(n){var e=this.t,r=t(e,n);~r&&e.splice(r,1)},n.prototype.has=function(n){return!!~t(this.t,n)},n.prototype.clear=function(){this.t.splice(0)},n.prototype.forEach=function(t,n){void 0===n&&(n=null);for(var e=0,r=this.t;e<r.length;e+=1){var i=r[e];t.call(n,i[1],i[0])}},Object.defineProperties(n.prototype,e),n}()}(),l="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,d="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),v="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(d):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},p=2,b=["top","right","bottom","left","width","height","size","weight"],w="undefined"!=typeof MutationObserver,m=function(){this.n=!1,this.e=!1,this.r=null,this.i=[],this.o=this.o.bind(this),this.refresh=function(t,n){function e(){o&&(o=!1,t()),u&&i()}function r(){v(e)}function i(){var t=Date.now();if(o){if(t-a<p)return;u=!0}else o=!0,u=!1,setTimeout(r,n);a=t}var o=!1,u=!1,a=0;return i}(this.refresh.bind(this),20)};m.prototype.addObserver=function(t){~this.i.indexOf(t)||this.i.push(t),this.n||this.u()},m.prototype.removeObserver=function(t){var n=this.i,e=n.indexOf(t);~e&&n.splice(e,1),!n.length&&this.n&&this.a()},m.prototype.refresh=function(){this.s()&&this.refresh()},m.prototype.s=function(){var t=this.i.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},m.prototype.u=function(){l&&!this.n&&(document.addEventListener("transitionend",this.o),window.addEventListener("resize",this.refresh),w?(this.r=new MutationObserver(this.refresh),this.r.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.e=!0),this.n=!0)},m.prototype.a=function(){l&&this.n&&(document.removeEventListener("transitionend",this.o),window.removeEventListener("resize",this.refresh),this.r&&this.r.disconnect(),this.e&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.r=null,this.e=!1,this.n=!1)},m.prototype.o=function(t){var n=t.propertyName;void 0===n&&(n="");b.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},m.getInstance=function(){return this.f||(this.f=new m),this.f},m.f=null;var y=function(t,n){for(var e=0,r=Object.keys(n);e<r.length;e+=1){var i=r[e];Object.defineProperty(t,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return t},g=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||d},M=i(0,0,0,0),k="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof g(t).SVGGraphicsElement}:function(t){return t instanceof g(t).SVGElement&&"function"==typeof t.getBBox},E=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.c=i(0,0,0,0),this.target=t};E.prototype.isActive=function(){var t=r(this.target);return this.c=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},E.prototype.broadcastRect=function(){var t=this.c;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var O=function(t,n){var e=function(t){var n=t.x,e=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(o.prototype);return y(u,{x:n,y:e,width:r,height:i,top:e,right:n+r,bottom:i+e,left:n}),u}(n);y(this,{target:t,contentRect:e})},T=function(t,n,e){if(this.h=[],this.l=new h,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.d=t,this.v=n,this.p=e};T.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.l;n.has(t)||(n.set(t,new E(t)),this.v.addObserver(this),this.v.refresh())}},T.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.l;n.has(t)&&(n.delete(t),n.size||this.v.removeObserver(this))}},T.prototype.disconnect=function(){this.clearActive(),this.l.clear(),this.v.removeObserver(this)},T.prototype.gatherActive=function(){var t=this;this.clearActive(),this.l.forEach(function(n){n.isActive()&&t.h.push(n)})},T.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.p,n=this.h.map(function(t){return new O(t.target,t.broadcastRect())});this.d.call(t,n,t),this.clearActive()}},T.prototype.clearActive=function(){this.h.splice(0)},T.prototype.hasActive=function(){return this.h.length>0};var A="undefined"!=typeof WeakMap?new WeakMap:new h,F=function(t){if(!(this instanceof F))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=m.getInstance(),e=new T(t,n,this);A.set(this,e)};["observe","unobserve","disconnect"].forEach(function(t){F.prototype[t]=function(){return(n=A.get(this))[t].apply(n,arguments);var n}});"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var R=function(t,n){return n={exports:{}},t(n,n.exports),n.exports}(function(t,n){!function(e,r){var i=function(){function t(t){var n=o(function(t){if("number"==typeof parseInt(t)){var n=parseInt(t);if(n<360&&n>0)return[n,n]}if("string"==typeof t)if(c[t]){var e=c[t];if(e.hueRange)return e.hueRange}else if(t.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=function(t){t=3===(t=t.replace(/^#/,"")).length?t.replace(/(.)/g,"$1$1"):t;var n=parseInt(t.substr(0,2),16)/255,e=parseInt(t.substr(2,2),16)/255,r=parseInt(t.substr(4,2),16)/255,i=Math.max(n,e,r),o=i-Math.min(n,e,r),u=i?o/i:0;switch(i){case n:return[(e-r)/o%6*60||0,u,i];case e:return[60*((r-n)/o+2)||0,u,i];case r:return[60*((n-e)/o+4)||0,u,i]}}(t)[0];return[r,r]}return[0,360]}(t.hue));return n<0&&(n=360+n),n}function n(t,n){if("monochrome"===n.hue)return 0;if("random"===n.luminosity)return o([0,100]);var e=function(t){return i(t).saturationRange}(t),r=e[0],u=e[1];switch(n.luminosity){case"bright":r=55;break;case"dark":r=u-10;break;case"light":u=55}return o([r,u])}function e(t,n,e){var r=function(t,n){for(var e=i(t).lowerBounds,r=0;r<e.length-1;r++){var o=e[r][0],u=e[r][1],a=e[r+1][0],s=e[r+1][1];if(n>=o&&n<=a){var f=(s-u)/(a-o);return f*n+(u-f*o)}}return 0}(t,n),u=100;switch(e.luminosity){case"dark":u=r+20;break;case"light":r=(u+r)/2;break;case"random":r=0,u=100}return o([r,u])}function r(t,n){switch(n.format){case"hsvArray":return t;case"hslArray":return s(t);case"hsl":var e=s(t);return"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)";case"hsla":var r=s(t),i=n.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+i+")";case"rgbArray":return a(t);case"rgb":return"rgb("+a(t).join(", ")+")";case"rgba":var o=a(t),i=n.alpha||Math.random();return"rgba("+o.join(", ")+", "+i+")";default:return function(t){function n(t){var n=t.toString(16);return 1==n.length?"0"+n:n}var e=a(t);return"#"+n(e[0])+n(e[1])+n(e[2])}(t)}}function i(t){t>=334&&t<=360&&(t-=360);for(var n in c){var e=c[n];if(e.hueRange&&t>=e.hueRange[0]&&t<=e.hueRange[1])return c[n]}return"Color not found"}function o(t){if(null===f)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var n=t[1]||1,e=t[0]||0,r=(f=(9301*f+49297)%233280)/233280;return Math.floor(e+r*(n-e))}function u(t,n,e){var r=e[0][0],i=e[e.length-1][0],o=e[e.length-1][1],u=e[0][1];c[t]={hueRange:n,lowerBounds:e,saturationRange:[r,i],brightnessRange:[o,u]}}function a(t){var n=t[0];0===n&&(n=1),360===n&&(n=359),n/=360;var e=t[1]/100,r=t[2]/100,i=Math.floor(6*n),o=6*n-i,u=r*(1-e),a=r*(1-o*e),s=r*(1-(1-o)*e),f=256,c=256,h=256;switch(i){case 0:f=r,c=s,h=u;break;case 1:f=a,c=r,h=u;break;case 2:f=u,c=r,h=s;break;case 3:f=u,c=a,h=r;break;case 4:f=s,c=u,h=r;break;case 5:f=r,c=u,h=a}return[Math.floor(255*f),Math.floor(255*c),Math.floor(255*h)]}function s(t){var n=t[0],e=t[1]/100,r=t[2]/100,i=(2-e)*r;return[n,Math.round(e*r/(i<1?i:2-i)*1e4)/100,i/2*100]}var f=null,c={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var h=function(i){if(void 0!==(i=i||{}).seed&&null!==i.seed&&i.seed===parseInt(i.seed,10))f=i.seed;else if("string"==typeof i.seed)f=function(t){for(var n=0,e=0;e!==t.length&&!(n>=Number.MAX_SAFE_INTEGER);e++)n+=t.charCodeAt(e);return n}(i.seed);else{if(void 0!==i.seed&&null!==i.seed)throw new TypeError("The seed value must be an integer or string");f=null}var o,u,a;if(null!==i.count&&void 0!==i.count){var s=i.count,c=[];for(i.count=null;s>c.length;)f&&i.seed&&(i.seed+=1),c.push(h(i));return i.count=s,c}return o=t(i),u=n(o,i),a=e(o,u,i),r([o,u,a],i)};return h}();t&&t.exports&&(n=t.exports=i),n.randomColor=i}()}),j=(R.randomColor,["red","pink","blue","orange","purple","monochrome"]),q={luminosity:"light",hue:j[o(0,5)]},D=new F(function(t){for(var n=0,e=t;n<e.length;n+=1){var r=e[n],i=r.contentRect,o=i.width.toFixed(2)+" x "+i.height.toFixed(2);r.target.firstElementChild.textContent=o}}),I=0,x=[];s(document.getElementById("container"),2);for(var z=document.querySelectorAll(".block"),S=0,$=a(document.querySelectorAll(".leaf"));S<$.length;S+=1){var C=$[S];D.observe(C)}setTimeout(f,2e3)}();
//# sourceMappingURL=app.js.map

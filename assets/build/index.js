!function(n){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],s=0,p=[];s<u.length;s++)a=u[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;i.push([10,1]),e()}([,function(n,t){
/**
 * Array.prototype.find() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @author Chris Ferdinandi
 * @license MIT
 */
Array.prototype.find||(Array.prototype.find=function(n){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof n)throw new TypeError("callback must be a function");for(var r=arguments[1],o=0;o<e;){var i=t[o];if(n.call(r,i,o,t))return i;o++}})},function(n,t){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(n){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof n)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<e;){var i=t[o];if(n.call(r,i,o,t))return o;o++}return-1},configurable:!0,writable:!0})},function(n,t){Array.prototype.forEach||(Array.prototype.forEach=function(n){var t,e;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),o=r.length>>>0;if("function"!=typeof n)throw new TypeError(n+" is not a function");for(arguments.length>1&&(t=arguments[1]),e=0;e<o;){var i;e in r&&(i=r[e],n.call(t,i,e,r)),e++}})},function(n,t){Array.from||(Array.from=function(){var n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=Math.pow(2,53)-1,r=function(n){var t=function(n){var t=Number(n);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(n);return Math.min(Math.max(t,0),e)};return function(n){var e=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,i=arguments.length>1?arguments[1]:void 0;if(void 0!==i){if(!t(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,u=r(e.length),c=t(this)?Object(new this(u)):new Array(u),l=0;l<u;)a=e[l],c[l]=i?void 0===o?i(a,l):i.call(o,a,l):a,l+=1;return c.length=u,c}}())},function(n,t){!function(){var n=function(n){return new RegExp("(^| )"+n+"( |$)")},t=function(n,t,e){for(var r=0;r<n.length;r++)t.call(e,n[r])};function e(n){this.element=n}e.prototype={add:function(){t(arguments,function(n){this.contains(n)||(this.element.className+=this.element.className.length>0?" "+n:n)},this)},remove:function(){t(arguments,function(t){this.element.className=this.element.className.replace(n(t),"")},this)},toggle:function(n){return this.contains(n)?(this.remove(n),!1):(this.add(n),!0)},contains:function(t){return n(t).test(this.element.className)},replace:function(n,t){this.remove(n),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new e(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=e.prototype.replace)}()},function(n,t){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(n,t){"use strict";if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(n),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},writable:!0,configurable:!0})},function(n,t){String.prototype.includes||(String.prototype.includes=function(n,t){"use strict";return"number"!=typeof t&&(t=0),!(t+n.length>this.length)&&-1!==this.indexOf(n,t)})},function(n,t){!function(){if("function"==typeof window.CustomEvent)return!1;function n(n,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,t.bubbles,t.cancelable,t.detail),e}n.prototype=window.Event.prototype,window.CustomEvent=n}()},function(n,t){!function(){for(var n=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var r=(new Date).getTime(),o=Math.max(0,16-(r-n)),i=window.setTimeout(function(){t(r+o)},o);return n=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}()},function(n,t,e){"use strict";e.r(t);e(0),e(1),e(2),e(3),e(4),e(5),e(6),e(7),e(8),e(9);function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var o=".intro__heading";[{Component:function(){function n(t){var e=t.parent;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.parent=e,this.heading=e.querySelector(o)}return function(n,t,e){t&&r(n.prototype,t),e&&r(n,e)}(n,[{key:"init",value:function(){this.setListeners()}},{key:"setListeners",value:function(){this.heading.addEventListener("click",function(n){return console.log(n.target)})}}]),n}(),elsSelector:".intro"}].forEach(function(n){document.querySelectorAll(n.elsSelector).forEach(function(t){(t=new n.Component({parent:t})).init()})})}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0049":function(t,e,n){"use strict";var r=n("65ee").IteratorPrototype,a=n("6756"),i=n("8d23"),o=n("77da"),c=n("ca70"),s=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=a(r,{next:i(1,n)}),o(t,l,!1,!0),c[l]=s,t}},"00ee":function(t,e,n){var r=n("b622"),a=r("toStringTag"),i={};i[a]="z",t.exports="[object z]"===String(i)},"0209":function(t,e,n){var r=n("db8f"),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return a.call(t)}),t.exports=r.inspectSource},"0234":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._setTarget=void 0,e.popParams=h,e.pushParams=u,e.target=void 0,e.withParams=v;var c=[],s=null;e.target=s;var l=function(t){e.target=s=t};function u(){null!==s&&c.push(s),e.target=s={}}function h(){var t=s,n=e.target=s=c.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function d(t){if("object"!==o(t)||Array.isArray(t))throw new Error("params must be an object");e.target=s=a(a({},s),t)}function f(t,e){return p((function(n){return function(){n(t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e.apply(this,a)}}))}function p(t){var e=t(d);return function(){u();try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{h()}}}function v(t,e){return"object"===o(t)&&void 0!==e?f(t,e):p(t)}e._setTarget=l},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},"0368":function(t,e,n){var r=n("a714");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"06cf":function(t,e,n){var r=n("83ab"),a=n("d1e7"),i=n("5c6c"),o=n("fc6a"),c=n("a04b"),s=n("5135"),l=n("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=o(t),e=c(e),l)try{return u(t,e)}catch(n){}if(s(t,e))return i(!a.f.call(t,e),t[e])}},"0759":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("2b0e"),a=n("b42e"),i=n("c637"),o=n("a723"),c=n("992e"),s=n("d82f"),l=n("cf75"),u=n("fa73"),h=n("7386"),d=n("aa0d");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function t(e,n){if(!e)return null;var r=(e.$options||{}).components,a=r[n];return a||t(e.$parent,n)},b=Object(s["j"])(d["b"],["content"]),g=Object(l["d"])(Object(s["m"])(p(p({},b),{},{icon:Object(l["c"])(o["u"])})),i["lb"]),y=r["default"].extend({name:i["lb"],functional:!0,props:g,render:function(t,e){var n=e.data,r=e.props,i=e.parent,o=Object(u["e"])(Object(u["h"])(r.icon||"")).replace(c["q"],"");return t(o&&m(i,"BIcon".concat(o))||h["Fc"],Object(a["a"])(n,{props:Object(l["e"])(b,r)}))}})},"0761":function(t,e,n){var r=n("d0c8"),a=n("caad"),i=n("09d1"),o=n("4dd8"),c=n("91c5"),s=n("c35a"),l=n("8181"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,v,m,b,g=n&&n.that,y=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),z=!(!n||!n.INTERRUPTED),j=o(e,g,1+y+z),w=function(t){return h&&l(h,"normal",t),new u(!0,t)},M=function(t){return y?(r(t),z?j(t[0],t[1],w):j(t[0],t[1])):z?j(t,w):j(t)};if(O)h=t;else{if(d=s(t),"function"!=typeof d)throw TypeError("Target is not iterable");if(a(d)){for(f=0,p=i(t.length);p>f;f++)if(v=M(t[f]),v&&v instanceof u)return v;return new u(!1)}h=c(t,d)}m=h.next;while(!(b=m.call(h)).done){try{v=M(b.value)}catch(_){l(h,"throw",_)}if("object"==typeof v&&v&&v instanceof u)return v}return new u(!1)}},"0828":function(t,e,n){var r=n("0f33"),a=n("db8f");(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"09d1":function(t,e,n){var r=n("59c2"),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},"09e4":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},"0b42":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?r(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("cc12");t.exports=!r&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d05":function(t,e,n){var r=n("09e4"),a=n("0209"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(a(i))},"0e17":function(t,e,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!r.call({1:2},1);e.f=i?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},"0ee6":function(t,e,n){var r=n("09e4"),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t]):r[t]&&r[t][e]}},"0f33":function(t,e){t.exports=!1},"0fd9":function(t,e,n){var r,a,i,o,c=n("09e4"),s=n("a714"),l=n("4dd8"),u=n("68d9"),h=n("c4dd"),d=n("68e0"),f=n("6629"),p=c.setImmediate,v=c.clearImmediate,m=c.process,b=c.MessageChannel,g=c.Dispatch,y=0,O={},z="onreadystatechange";try{r=c.location}catch(C){}var j=function(t){if(O.hasOwnProperty(t)){var e=O[t];delete O[t],e()}},w=function(t){return function(){j(t)}},M=function(t){j(t.data)},_=function(t){c.postMessage(String(t),r.protocol+"//"+r.host)};p&&v||(p=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return O[++y]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},a(y),y},v=function(t){delete O[t]},f?a=function(t){m.nextTick(w(t))}:g&&g.now?a=function(t){g.now(w(t))}:b&&!d?(i=new b,o=i.port2,i.port1.onmessage=M,a=l(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&r&&"file:"!==r.protocol&&!s(_)?(a=_,c.addEventListener("message",M,!1)):a=z in h("script")?function(t){u.appendChild(h("script"))[z]=function(){u.removeChild(this),j(t)}}:function(t){setTimeout(w(t),0)}),t.exports={set:p,clear:v}},"189d":function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},"199f":function(t,e,n){var r=n("09e4"),a=n("2439").f,i=n("3261"),o=n("7024"),c=n("79ae"),s=n("2d0a"),l=n("25d0");t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,b=t.stat;if(u=m?r:b?r[v]||c(v,{}):(r[v]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=a(u,h),d=p&&p.value):d=u[h],n=l(m?h:v+(b?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;s(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,i,o){try{var c=t[i](o),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,s,"next",t)}function s(t){r(o,a,i,c,s,"throw",t)}c(void 0)}))}}},"1dce":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vuelidate=T,e.validationMixin=e.default=void 0,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return a.withParams}});var r=n("fbf4"),a=n("0234");function i(t){return l(t)||s(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var v=function(){return null},m=function(t,e,n){return t.reduce((function(t,r){return t[n?n(r):r]=e(r),t}),{})};function b(t){return"function"===typeof t}function g(t){return null!==t&&("object"===p(t)||b(t))}function y(t){return g(t)&&b(t.then)}var O=function(t,e,n,r){if("function"===typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var a=0;a<n.length;a++){if(!e||"object"!==p(e))return r;e=e[n[a]]}return"undefined"===typeof e?r:e},z="__isVuelidateAsyncVm";function j(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n[z]=!0,n}var w={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return d(d({},m(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null}))),m(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function M(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var _={$touch:function(){M.call(this,!0)},$reset:function(){M.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),a=0;a<r.length;a++)r[a].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},C=Object.keys(w),A=Object.keys(_),V=null,I=function(t){if(V)return V;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,r.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,a.pushParams)();var r=this.rule.call(this.rootModel,n,e),i=y(r)?j(t,r):r,o=(0,a.popParams)(),c=o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null;return{output:i,params:c}}},computed:{run:function(){var t=this,e=this.lazyParentModel(),n=Array.isArray(e)&&e.__ob__;if(n){var r=e.__ob__.dep;r.depend();var a=r.constructor.target;if(!this._indirectWatcher){var i=a.constructor;this._indirectWatcher=new i(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),a.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[z]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[z]&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:d(d({},_),{},{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!==typeof this.validations[t]}}),computed:d(d({},w),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=m(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=m(C,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),r=m(A,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),a=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},d({},e))}}:{};return Object.defineProperties({},d(d(d(d({},e),a),{},{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n),r))},children:function(){var t=this;return[].concat(i(this.nestedKeys.map((function(e){return l(t,e)}))),i(this.ruleKeys.map((function(e){return u(t,e)})))).filter(Boolean)}})}),c=o.extend({methods:{isNested:function(t){return"undefined"!==typeof this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),s=o.extend({computed:{keys:function(){var t=this.getModel();return g(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(O(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),a=d({},e);delete a["$trackBy"];var i={};return this.keys.map((function(e){var c=t.tracker(e);return i.hasOwnProperty(c)?null:(i[c]=!0,(0,r.h)(o,c,{validations:a,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),l=function(t,e){if("$each"===e)return(0,r.h)(s,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var a=t.rootModel,i=m(n,(function(t){return function(){return O(a,a.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,r.h)(c,e,{validations:i,lazyParentModel:v,prop:e,lazyModel:v,rootModel:a})}return(0,r.h)(o,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},u=function(t,e){return(0,r.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return V={VBase:e,Validation:o},V},k=null;function H(t){if(k)return k;var e=t.constructor;while(e.super)e=e.super;return k=e,e}var S=function(t,e){var n=H(t),a=I(n),i=a.Validation,o=a.VBase,c=new o({computed:{children:function(){var n="function"===typeof e?e.call(t):e;return[(0,r.h)(i,"$v",{validations:n,lazyParentModel:v,prop:"$v",model:t,rootModel:t})]}}});return c},P={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=S(this,t)),{}},beforeCreate:function(){var t=this.$options,e=t.validations;e&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function T(t){t.mixin(P)}e.validationMixin=P;var L=T;e.default=L},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fc1":function(t,e){t.exports={}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return M})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return P})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return N})),n.d(e,"m",(function(){return d})),n.d(e,"n",(function(){return x})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return R})),n.d(e,"q",(function(){return X})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return S})),n.d(e,"t",(function(){return y})),n.d(e,"u",(function(){return L})),n.d(e,"v",(function(){return z})),n.d(e,"w",(function(){return g})),n.d(e,"x",(function(){return j})),n.d(e,"y",(function(){return O})),n.d(e,"z",(function(){return H})),n.d(e,"A",(function(){return V})),n.d(e,"B",(function(){return B})),n.d(e,"C",(function(){return E})),n.d(e,"D",(function(){return D})),n.d(e,"E",(function(){return T})),n.d(e,"F",(function(){return Y})),n.d(e,"G",(function(){return K})),n.d(e,"H",(function(){return I}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(t,e){if(!t)throw i(e)},i=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let a=t.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=63&a|128):55296===(64512&a)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++r)),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=63&a|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=63&a|128)}return e},c=function(t){const e=[];let n=0,r=0;while(n<t.length){const a=t[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=t[n++];e[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=t[n++],o=t[n++],c=t[n++],s=((7&a)<<18|(63&i)<<12|(63&o)<<6|63&c)-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<t.length;a+=3){const e=t[a],i=a+1<t.length,o=i?t[a+1]:0,c=a+2<t.length,s=c?t[a+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|s>>6,d=63&s;c||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<t.length;){const e=n[t.charAt(a++)],i=a<t.length,o=i?n[t.charAt(a)]:0;++a;const c=a<t.length,s=c?n[t.charAt(a)]:64;++a;const l=a<t.length,u=l?n[t.charAt(a)]:64;if(++a,null==e||null==o||null==s||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==s){const t=o<<4&240|s>>2;if(r.push(t),64!==u){const t=s<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){const e=o(t);return s.encodeByteArray(e,!0)},u=function(t){return l(t).replace(/\./g,"")},h=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",a=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:a,exp:a+3600,auth_time:a,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function y(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function O(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function z(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],i=a?C(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,c=new M(r,o,n);return c}}function C(t,e){return t.replace(A,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return JSON.parse(t)}function I(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t){let e={},n={},r={},a="";try{const i=t.split(".");e=V(h(i[0])||""),n=V(h(i[1])||""),a=i[2],r=n["d"]||{},delete n["d"]}catch(i){}return{header:e,claims:n,data:r,signature:a}},H=function(t){const e=k(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},S=function(t){const e=k(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B(t,e,n){const r={};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=e.call(n,t[a],a,t));return r}function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const n=t[a],i=e[a];if(F(n)&&F(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function D(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function R(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let r,a,i=this.chain_[0],o=this.chain_[1],c=this.chain_[2],s=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=s^o&(c^s),a=1518500249):(r=o^c^s,a=1859775393):u<60?(r=o&c|s&(o|c),a=2400959708):(r=o^c^s,a=3395469782);const t=(i<<5|i>>>27)+r+l+a+n[u]&4294967295;l=s,s=c,c=4294967295&(o<<30|o>>>2),o=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const a=this.buf_;let i=this.inbuf_;while(r<e){if(0===i)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(a[i]=t.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(a),i=0;break}}else while(r<e)if(a[i]=t[r],++i,++r,i===this.blockSize){this.compress_(a),i=0;break}}this.inbuf_=i,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function N(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=U(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),a}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const e=i-55296;r++,a(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;i=65536+(e<<10)+n}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Y=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"20a7":function(t,e,n){var r=n("fce5"),a=n("a714");t.exports=!!Object.getOwnPropertySymbols&&!a((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"228e":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));var r=n("2b0e"),a=n("50d3"),i=n("c9a9"),o=n("b508"),c=r["default"].prototype,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=c[a["c"]];return n?n.getConfigValue(t,e):Object(i["a"])(e)},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e?s("".concat(t,".").concat(e),n):s(t,{})},u=function(){return s("breakpoints",a["a"])},h=Object(o["a"])((function(){return u()})),d=function(){return Object(i["a"])(h())},f=Object(o["a"])((function(){var t=d();return t[0]="",t}))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var r=n("1fd5");class a{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(s(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[a,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(t),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&t(i,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const a of n)try{a(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:c(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function c(t){return t===i?void 0:t}function s(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("a691"),a=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?a(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),a=n("06cf").f,i=n("9112"),o=n("6eeb"),c=n("ce4e"),s=n("e893"),l=n("94ca");t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,b=t.stat;if(u=m?r:b?r[v]||c(v,{}):(r[v]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=a(u,h),d=p&&p.value):d=u[h],n=l(m?h:v+(b?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;s(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),a=n("7839"),i=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2439:function(t,e,n){var r=n("0368"),a=n("0e17"),i=n("8d23"),o=n("a84f"),c=n("e3f1"),s=n("7f34"),l=n("bf45"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=o(t),e=c(e),l)try{return u(t,e)}catch(n){}if(s(t,e))return i(!a.f.call(t,e),t[e])}},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),o=n("577e"),c=n("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~o(i(this)).indexOf(o(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25d0":function(t,e,n){var r=n("a714"),a=/#|\.prototype\./,i=function(t,e){var n=c[o(t)];return n==l||n!=s&&("function"==typeof e?r(e):!!e)},o=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["e"]}));var a="firebase",i="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(a,i,"app")},2877:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,c){var s,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=s):a&&(s=c?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),s)if(l.functional){l._injectStyles=s;var u=l.render;l.render=function(t,e){return s.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,s):[s]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},"2b0e":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function a(t){return void 0!==t&&null!==t}function i(t){return!0===t}function o(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function s(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return a(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),a=0;a<r.length;a++)n[r[a]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var b=m("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function O(t,e){return y.call(t,e)}function z(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var j=/-(\w)/g,w=z((function(t){return t.replace(j,(function(t,e){return e?e.toUpperCase():""}))})),M=z((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),_=/\B([A-Z])/g,C=z((function(t){return t.replace(_,"-$1").toLowerCase()}));function A(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function V(t,e){return t.bind(e)}var I=Function.prototype.bind?V:A;function k(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function H(t,e){for(var n in e)t[n]=e[n];return t}function S(t){for(var e={},n=0;n<t.length;n++)t[n]&&H(e,t[n]);return e}function P(t,e,n){}var T=function(t,e,n){return!1},L=function(t){return t};function B(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=Array.isArray(t),i=Array.isArray(e);if(a&&i)return t.length===e.length&&t.every((function(t,n){return B(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(a||i)return!1;var o=Object.keys(t),c=Object.keys(e);return o.length===c.length&&o.every((function(n){return B(t[n],e[n])}))}catch(l){return!1}}function x(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var E="data-server-rendered",D=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:P,parsePlatformTagName:L,mustUseProp:T,async:!0,_lifecycleHooks:R},N=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+N.source+".$_\\d]");function G(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},X="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=J&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Q),at=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),it={}.watch,ot=!1;if(X)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,ct)}catch(Mo){}var st=function(){return void 0===K&&(K=!X&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},lt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ut(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&ut(Symbol)&&"undefined"!==typeof Reflect&&ut(Reflect.ownKeys);ht="undefined"!==typeof Set&&ut(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=P,pt=0,vt=function(){this.id=pt++,this.subs=[]};vt.prototype.addSub=function(t){this.subs.push(t)},vt.prototype.removeSub=function(t){g(this.subs,t)},vt.prototype.depend=function(){vt.target&&vt.target.addDep(this)},vt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},vt.target=null;var mt=[];function bt(t){mt.push(t),vt.target=t}function gt(){mt.pop(),vt.target=mt[mt.length-1]}var yt=function(t,e,n,r,a,i,o,c){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=a,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ot={child:{configurable:!0}};Ot.child.get=function(){return this.componentInstance},Object.defineProperties(yt.prototype,Ot);var zt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function jt(t){return new yt(void 0,void 0,void 0,String(t))}function wt(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Mt=Array.prototype,_t=Object.create(Mt),Ct=["push","pop","shift","unshift","splice","sort","reverse"];Ct.forEach((function(t){var e=Mt[t];U(_t,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var a,i=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),i}))}));var At=Object.getOwnPropertyNames(_t),Vt=!0;function It(t){Vt=t}var kt=function(t){this.value=t,this.dep=new vt,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(Y?Ht(t,_t):St(t,_t,At),this.observeArray(t)):this.walk(t)};function Ht(t,e){t.__proto__=e}function St(t,e,n){for(var r=0,a=n.length;r<a;r++){var i=n[r];U(t,i,e[i])}}function Pt(t,e){var n;if(s(t)&&!(t instanceof yt))return O(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:Vt&&!st()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Tt(t,e,n,r,a){var i=new vt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var c=o&&o.get,s=o&&o.set;c&&!s||2!==arguments.length||(n=t[e]);var l=!a&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return vt.target&&(i.depend(),l&&(l.dep.depend(),Array.isArray(e)&&xt(e))),e},set:function(e){var r=c?c.call(t):n;e===r||e!==e&&r!==r||c&&!s||(s?s.call(t,e):n=e,l=!a&&Pt(e),i.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Tt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Bt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||O(t,e)&&(delete t[e],n&&n.dep.notify())}}function xt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&xt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Tt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var Ft=$.optionMergeStrategies;function Et(t,e){if(!e)return t;for(var n,r,a,i=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)n=i[o],"__ob__"!==n&&(r=t[n],a=e[n],O(t,n)?r!==a&&u(r)&&u(a)&&Et(r,a):Lt(t,n,a));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,a="function"===typeof t?t.call(n,n):t;return r?Et(r,a):a}:e?t?function(){return Et("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$t(n):n}function $t(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Nt(t,e,n,r){var a=Object.create(t||null);return e?H(a,e):a}Ft.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},R.forEach((function(t){Ft[t]=Rt})),D.forEach((function(t){Ft[t+"s"]=Nt})),Ft.watch=function(t,e,n,r){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var a={};for(var i in H(a,t),e){var o=a[i],c=e[i];o&&!Array.isArray(o)&&(o=[o]),a[i]=o?o.concat(c):Array.isArray(c)?c:[c]}return a},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var a=Object.create(null);return H(a,t),e&&H(a,e),a},Ft.provide=Dt;var qt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,a,i,o={};if(Array.isArray(n)){r=n.length;while(r--)a=n[r],"string"===typeof a&&(i=w(a),o[i]={type:null})}else if(u(n))for(var c in n)a=n[c],i=w(c),o[i]=u(a)?a:{type:a};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var a=0;a<n.length;a++)r[n[a]]={from:n[a]};else if(u(n))for(var i in n){var o=n[i];r[i]=u(o)?H({from:i},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Wt(e,n),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,a=e.mixins.length;r<a;r++)t=Kt(t,e.mixins[r],n);var i,o={};for(i in t)c(i);for(i in e)O(t,i)||c(i);function c(r){var a=Ft[r]||qt;o[r]=a(t[r],e[r],n,r)}return o}function Yt(t,e,n,r){if("string"===typeof n){var a=t[e];if(O(a,n))return a[n];var i=w(n);if(O(a,i))return a[i];var o=M(i);if(O(a,o))return a[o];var c=a[n]||a[i]||a[o];return c}}function Xt(t,e,n,r){var a=e[t],i=!O(n,t),o=n[t],c=ee(Boolean,a.type);if(c>-1)if(i&&!O(a,"default"))o=!1;else if(""===o||o===C(t)){var s=ee(String,a.type);(s<0||c<s)&&(o=!0)}if(void 0===o){o=Jt(r,a,t);var l=Vt;It(!0),Pt(o),It(l)}return o}function Jt(t,e,n){if(O(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Qt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){bt();try{if(e){var r=e;while(r=r.$parent){var a=r.$options.errorCaptured;if(a)for(var i=0;i<a.length;i++)try{var o=!1===a[i].call(r,t,e,n);if(o)return}catch(Mo){ae(Mo,r,"errorCaptured hook")}}}ae(t,e,n)}finally{gt()}}function re(t,e,n,r,a){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&f(i)&&!i._handled&&(i.catch((function(t){return ne(t,r,a+" (Promise/async)")})),i._handled=!0)}catch(Mo){ne(Mo,r,a)}return i}function ae(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(Mo){Mo!==t&&ie(Mo,null,"config.errorHandler")}ie(t,e,n)}function ie(t,e,n){if(!X&&!J||"undefined"===typeof console)throw t;console.error(t)}var oe,ce=!1,se=[],le=!1;function ue(){le=!1;var t=se.slice(0);se.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ut(Promise)){var he=Promise.resolve();oe=function(){he.then(ue),rt&&setTimeout(P)},ce=!0}else if(tt||"undefined"===typeof MutationObserver||!ut(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&ut(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var de=1,fe=new MutationObserver(ue),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ce=!0}function ve(t,e){var n;if(se.push((function(){if(t)try{t.call(e)}catch(Mo){ne(Mo,e,"nextTick")}else n&&n(e)})),le||(le=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function be(t){ge(t,me),me.clear()}function ge(t,e){var n,r,a=Array.isArray(t);if(!(!a&&!s(t)||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(a){n=t.length;while(n--)ge(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ge(t[r[n]],e)}}}var ye=z((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Oe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var a=r.slice(),i=0;i<a.length;i++)re(a[i],null,t,e,"v-on handler")}return n.fns=t,n}function ze(t,e,n,a,o,c){var s,l,u,h;for(s in t)l=t[s],u=e[s],h=ye(s),r(l)||(r(u)?(r(l.fns)&&(l=t[s]=Oe(l,c)),i(h.once)&&(l=t[s]=o(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[s]=u));for(s in e)r(t[s])&&(h=ye(s),a(h.name,e[s],h.capture))}function je(t,e,n){var o;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var c=t[e];function s(){n.apply(this,arguments),g(o.fns,s)}r(c)?o=Oe([s]):a(c.fns)&&i(c.merged)?(o=c,o.fns.push(s)):o=Oe([c,s]),o.merged=!0,t[e]=o}function we(t,e,n){var i=e.options.props;if(!r(i)){var o={},c=t.attrs,s=t.props;if(a(c)||a(s))for(var l in i){var u=C(l);Me(o,s,l,u,!0)||Me(o,c,l,u,!1)}return o}}function Me(t,e,n,r,i){if(a(e)){if(O(e,n))return t[n]=e[n],i||delete e[n],!0;if(O(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ce(t){return c(t)?[jt(t)]:Array.isArray(t)?Ve(t):void 0}function Ae(t){return a(t)&&a(t.text)&&o(t.isComment)}function Ve(t,e){var n,o,s,l,u=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(s=u.length-1,l=u[s],Array.isArray(o)?o.length>0&&(o=Ve(o,(e||"")+"_"+n),Ae(o[0])&&Ae(l)&&(u[s]=jt(l.text+o[0].text),o.shift()),u.push.apply(u,o)):c(o)?Ae(l)?u[s]=jt(l.text+o):""!==o&&u.push(jt(o)):Ae(o)&&Ae(l)?u[s]=jt(l.text+o.text):(i(t._isVList)&&a(o.tag)&&r(o.key)&&a(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function Ie(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=He(t.$options.inject,t);e&&(It(!1),Object.keys(e).forEach((function(n){Tt(t,n,e[n])})),It(!0))}function He(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),a=0;a<r.length;a++){var i=r[a];if("__ob__"!==i){var o=t[i].from,c=e;while(c){if(c._provided&&O(c._provided,o)){n[i]=c._provided[o];break}c=c.$parent}if(!c)if("default"in t[i]){var s=t[i].default;n[i]="function"===typeof s?s.call(e):s}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,a=t.length;r<a;r++){var i=t[r],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==e&&i.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var c=o.slot,s=n[c]||(n[c]=[]);"template"===i.tag?s.push.apply(s,i.children||[]):s.push(i)}}for(var l in n)n[l].every(Pe)&&delete n[l];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var a,i=Object.keys(e).length>0,o=t?!!t.$stable:!i,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&c===r.$key&&!i&&!r.$hasNormal)return r;for(var s in a={},t)t[s]&&"$"!==s[0]&&(a[s]=Be(e,s,t[s]))}else a={};for(var l in e)l in a||(a[l]=xe(e,l));return t&&Object.isExtensible(t)&&(t._normalized=a),U(a,"$stable",o),U(a,"$key",c),U(a,"$hasNormal",i),a}function Be(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ce(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Te(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,i,o,c;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(s(t))if(dt&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,i=o.length;r<i;r++)c=o[r],n[r]=e(t[c],c,r);return a(n)||(n=[]),n._isVList=!0,n}function Ee(t,e,n,r){var a,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=H(H({},r),n)),a=i(n)||("function"===typeof e?e():e)):a=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},a):a}function De(t){return Yt(this.$options,"filters",t,!0)||L}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,r,a){var i=$.keyCodes[e]||n;return a&&r&&!$.keyCodes[e]?Re(a,r):i?Re(i,t):r?C(r)!==e:void 0===t}function Ne(t,e,n,r,a){if(n)if(s(n)){var i;Array.isArray(n)&&(n=S(n));var o=function(o){if("class"===o||"style"===o||b(o))i=t;else{var c=t.attrs&&t.attrs.type;i=r||$.mustUseProp(e,c,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var s=w(o),l=C(o);if(!(s in i)&&!(l in i)&&(i[o]=n[o],a)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var c in n)o(c)}else;return t}function qe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(r,"__static__"+t,!1)),r}function Ue(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(u(e)){var n=t.on=t.on?H({},t.on):{};for(var r in e){var a=n[r],i=e[r];n[r]=a?[].concat(a,i):i}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var a=0;a<t.length;a++){var i=t[a];Array.isArray(i)?Ye(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=Ue,t._n=v,t._s=p,t._l=Fe,t._t=Ee,t._q=B,t._i=x,t._m=qe,t._f=De,t._k=$e,t._b=Ne,t._v=jt,t._e=zt,t._u=Ye,t._g=Ke,t._d=Xe,t._p=Je}function Ze(t,e,r,a,o){var c,s=this,l=o.options;O(a,"_uid")?(c=Object.create(a),c._original=a):(c=a,a=a._original);var u=i(l._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=a,this.listeners=t.on||n,this.injections=He(l.inject,a),this.slots=function(){return s.$slots||Le(t.scopedSlots,s.$slots=Se(r,a)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var i=fn(c,t,e,n,r,h);return i&&!Array.isArray(i)&&(i.fnScopeId=l._scopeId,i.fnContext=a),i}:this._c=function(t,e,n,r){return fn(c,t,e,n,r,h)}}function tn(t,e,r,i,o){var c=t.options,s={},l=c.props;if(a(l))for(var u in l)s[u]=Xt(u,l,e||n);else a(r.attrs)&&nn(s,r.attrs),a(r.props)&&nn(s,r.props);var h=new Ze(r,s,o,i,t),d=c.render.call(null,h._c,h);if(d instanceof yt)return en(d,r,h.parent,c,h);if(Array.isArray(d)){for(var f=Ce(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=en(f[v],r,h.parent,c,h);return p}}function en(t,e,n,r,a){var i=wt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function nn(t,e){for(var n in e)t[w(n)]=e[n]}Qe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=cn(t,Hn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Bn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?En(e,!0):e.$destroy())}},an=Object.keys(rn);function on(t,e,n,o,c){if(!r(t)){var l=n.$options._base;if(s(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=wn(u,l),void 0===t))return jn(u,e,n,o,c);e=e||{},jr(t),a(e.model)&&un(t.options,e);var h=we(e,t,c);if(i(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}sn(e);var p=t.options.name||c,v=new yt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:c,children:o},u);return v}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return a(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function sn(t){for(var e=t.hook||(t.hook={}),n=0;n<an.length;n++){var r=an[n],a=e[r],i=rn[r];a===i||a&&a._merged||(e[r]=a?ln(i,a):i)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function un(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),o=i[r],c=e.model.callback;a(o)?(Array.isArray(o)?-1===o.indexOf(c):o!==c)&&(i[r]=[c].concat(o)):i[r]=c}var hn=1,dn=2;function fn(t,e,n,r,a,o){return(Array.isArray(n)||c(n))&&(a=r,r=n,n=void 0),i(o)&&(a=dn),pn(t,e,n,r,a)}function pn(t,e,n,r,i){if(a(n)&&a(n.__ob__))return zt();if(a(n)&&a(n.is)&&(e=n.is),!e)return zt();var o,c,s;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Ce(r):i===hn&&(r=_e(r)),"string"===typeof e)?(c=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),o=$.isReservedTag(e)?new yt($.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!a(s=Yt(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):on(s,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:a(o)?(a(c)&&vn(o,c),a(n)&&mn(n),o):zt()}function vn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),a(t.children))for(var o=0,c=t.children.length;o<c;o++){var s=t.children[o];a(s.tag)&&(r(s.ns)||i(n)&&"svg"!==s.tag)&&vn(s,e,n)}}function mn(t){s(t.style)&&be(t.style),s(t.class)&&be(t.class)}function bn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,a=r&&r.context;t.$slots=Se(e._renderChildren,a),t.$scopedSlots=n,t._c=function(e,n,r,a){return fn(t,e,n,r,a,!1)},t.$createElement=function(e,n,r,a){return fn(t,e,n,r,a,!0)};var i=r&&r.data;Tt(t,"$attrs",i&&i.attrs||n,null,!0),Tt(t,"$listeners",e._parentListeners||n,null,!0)}var gn,yn=null;function On(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ve(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,a=n._parentVnode;a&&(e.$scopedSlots=Le(a.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=a;try{yn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Mo){ne(Mo,e,"render"),t=e._vnode}finally{yn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof yt||(t=zt()),t.parent=a,t}}function zn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function jn(t,e,n,r,a){var i=zt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:a},i}function wn(t,e){if(i(t.error)&&a(t.errorComp))return t.errorComp;if(a(t.resolved))return t.resolved;var n=yn;if(n&&a(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&a(t.loadingComp))return t.loadingComp;if(n&&!a(t.owners)){var o=t.owners=[n],c=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return g(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=F((function(n){t.resolved=zn(n,e),c?o.length=0:h(!0)})),p=F((function(e){a(t.errorComp)&&(t.error=!0,h(!0))})),v=t(d,p);return s(v)&&(f(v)?r(t.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),a(v.error)&&(t.errorComp=zn(v.error,e)),a(v.loading)&&(t.loadingComp=zn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),v.delay||200)),a(v.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&p(null)}),v.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}function Mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(a(n)&&(a(n.componentOptions)||Te(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&In(t,e)}function Cn(t,e){gn.$on(t,e)}function An(t,e){gn.$off(t,e)}function Vn(t,e){var n=gn;return function r(){var a=e.apply(null,arguments);null!==a&&n.$off(t,r)}}function In(t,e,n){gn=t,ze(e,n||{},Cn,An,Vn,t),gn=void 0}function kn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var a=0,i=t.length;a<i;a++)r.$on(t[a],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,a=t.length;r<a;r++)n.$off(t[r],e);return n}var i,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var c=o.length;while(c--)if(i=o[c],i===e||i.fn===e){o.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?k(n):n;for(var r=k(arguments,1),a='event handler for "'+t+'"',i=0,o=n.length;i<o;i++)re(n[i],e,r,e,a)}return e}}var Hn=null;function Sn(t){var e=Hn;return Hn=t,function(){Hn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,a=n._vnode,i=Sn(n);n._vnode=t,n.$el=a?n.__patch__(a,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=zt),Dn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Dn(t,"mounted")),t}function Bn(t,e,r,a,i){var o=a.data.scopedSlots,c=t.$scopedSlots,s=!!(o&&!o.$stable||c!==n&&!c.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(i||t.$options._renderChildren||s);if(t.$options._parentVnode=a,t.$vnode=a,t._vnode&&(t._vnode.parent=a),t.$options._renderChildren=i,t.$attrs=a.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){It(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Xt(f,p,e,t)}It(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,In(t,r,v),l&&(t.$slots=Se(i,a.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Dn(t,"activated")}}function En(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){bt();var n=t.$options[e],r=e+" hook";if(n)for(var a=0,i=n.length;a<i;a++)re(n[a],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var Rn=[],$n=[],Nn={},qn=!1,Un=!1,Wn=0;function Gn(){Wn=Rn.length=$n.length=0,Nn={},qn=Un=!1}var Kn=0,Yn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Jn(){var t,e;for(Kn=Yn(),Un=!0,Rn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<Rn.length;Wn++)t=Rn[Wn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=$n.slice(),r=Rn.slice();Gn(),tr(n),Qn(r),lt&&$.devtools&&lt.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Zn(t){t._inactive=!1,$n.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Un){var n=Rn.length-1;while(n>Wn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);qn||(qn=!0,ve(Jn))}}var nr=0,rr=function(t,e,n,r,a){this.vm=t,a&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Mo){if(!this.user)throw Mo;ne(Mo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&be(t),gt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ar={enumerable:!0,configurable:!0,get:P,set:P};function ir(t,e,n){ar.get=function(){return this[e][n]},ar.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ar)}function or(t){t._watchers=[];var e=t.$options;e.props&&cr(t,e.props),e.methods&&vr(t,e.methods),e.data?sr(t):Pt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==it&&mr(t,e.watch)}function cr(t,e){var n=t.$options.propsData||{},r=t._props={},a=t.$options._propKeys=[],i=!t.$parent;i||It(!1);var o=function(i){a.push(i);var o=Xt(i,e,n,t);Tt(r,i,o),i in t||ir(t,"_props",i)};for(var c in e)o(c);It(!0)}function sr(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,a=(t.$options.methods,n.length);while(a--){var i=n[a];0,r&&O(r,i)||q(i)||ir(t,"_data",i)}Pt(e,!0)}function lr(t,e){bt();try{return t.call(e,e)}catch(Mo){return ne(Mo,e,"data()"),{}}finally{gt()}}var ur={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=st();for(var a in e){var i=e[a],o="function"===typeof i?i:i.get;0,r||(n[a]=new rr(t,o||P,P,ur)),a in t||dr(t,a,i)}}function dr(t,e,n){var r=!st();"function"===typeof n?(ar.get=r?fr(e):pr(n),ar.set=P):(ar.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):P,ar.set=n.set||P),Object.defineProperty(t,e,ar)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),vt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function vr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:I(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var a=0;a<r.length;a++)br(t,n,r[a]);else br(t,n,r)}}function br(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function gr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Bt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return br(r,t,e,n);n=n||{},n.user=!0;var a=new rr(r,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+a.expression+'"';bt(),re(e,r,[a.value],r,i),gt()}return function(){a.teardown()}}}var yr=0;function Or(t){t.prototype._init=function(t){var e=this;e._uid=yr++,e._isVue=!0,t&&t._isComponent?zr(e,t):e.$options=Kt(jr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),_n(e),bn(e),Dn(e,"beforeCreate"),ke(e),or(e),Ie(e),Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function zr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var a=r.componentOptions;n.propsData=a.propsData,n._parentListeners=a.listeners,n._renderChildren=a.children,n._componentTag=a.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function jr(t){var e=t.options;if(t.super){var n=jr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var a=wr(t);a&&H(t.extendOptions,a),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function wr(t){var e,n=t.options,r=t.sealedOptions;for(var a in n)n[a]!==r[a]&&(e||(e={}),e[a]=n[a]);return e}function Mr(t){this._init(t)}function _r(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Cr(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Ar(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,a=t._Ctor||(t._Ctor={});if(a[r])return a[r];var i=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&Vr(o),o.options.computed&&Ir(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,D.forEach((function(t){o[t]=n[t]})),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=H({},o.options),a[r]=o,o}}function Vr(t){var e=t.options.props;for(var n in e)ir(t.prototype,"_props",n)}function Ir(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function kr(t){D.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Hr(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Pr(t,e){var n=t.cache,r=t.keys,a=t._vnode;for(var i in n){var o=n[i];if(o){var c=o.name;c&&!e(c)&&Tr(n,i,r,a)}}}function Tr(t,e,n,r){var a=t[e];!a||r&&a.tag===r.tag||a.componentInstance.$destroy(),t[e]=null,g(n,e)}Or(Mr),gr(Mr),kn(Mr),Tn(Mr),On(Mr);var Lr=[String,RegExp,Array],Br={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,a=t.keyToCache;if(r){var i=r.tag,o=r.componentInstance,c=r.componentOptions;e[a]={name:Hr(c),tag:i,componentInstance:o},n.push(a),this.max&&n.length>parseInt(this.max)&&Tr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Tr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Pr(t,(function(t){return Sr(e,t)}))})),this.$watch("exclude",(function(e){Pr(t,(function(t){return!Sr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Mn(t),n=e&&e.componentOptions;if(n){var r=Hr(n),a=this,i=a.include,o=a.exclude;if(i&&(!r||!Sr(i,r))||o&&r&&Sr(o,r))return e;var c=this,s=c.cache,l=c.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;s[u]?(e.componentInstance=s[u].componentInstance,g(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:Br};function Fr(t){var e={get:function(){return $}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:H,mergeOptions:Kt,defineReactive:Tt},t.set=Lt,t.delete=Bt,t.nextTick=ve,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),D.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,H(t.options.components,xr),_r(t),Cr(t),Ar(t),kr(t)}Fr(Mr),Object.defineProperty(Mr.prototype,"$isServer",{get:st}),Object.defineProperty(Mr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Mr,"FunctionalRenderContext",{value:Ze}),Mr.version="2.6.14";var Er=m("style,class"),Dr=m("input,textarea,option,select,progress"),Rr=function(t,e,n){return"value"===n&&Dr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},$r=m("contenteditable,draggable,spellcheck"),Nr=m("events,caret,typing,plaintext-only"),qr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&Nr(e)?e:"true"},Ur=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wr="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return Gr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(a(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(a(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Qr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:a(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return a(t)||a(e)?Zr(t,ta(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ta(t){return Array.isArray(t)?ea(t):s(t)?na(t):"string"===typeof t?t:""}function ea(t){for(var e,n="",r=0,i=t.length;r<i;r++)a(e=ta(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function na(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ra={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},aa=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ia=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oa=function(t){return aa(t)||ia(t)};function ca(t){return ia(t)?"svg":"math"===t?"math":void 0}var sa=Object.create(null);function la(t){if(!X)return!0;if(oa(t))return!1;if(t=t.toLowerCase(),null!=sa[t])return sa[t];var e=document.createElement(t);return t.indexOf("-")>-1?sa[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:sa[t]=/HTMLUnknownElement/.test(e.toString())}var ua=m("text,number,password,search,email,tel,url");function ha(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function da(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fa(t,e){return document.createElementNS(ra[t],e)}function pa(t){return document.createTextNode(t)}function va(t){return document.createComment(t)}function ma(t,e,n){t.insertBefore(e,n)}function ba(t,e){t.removeChild(e)}function ga(t,e){t.appendChild(e)}function ya(t){return t.parentNode}function Oa(t){return t.nextSibling}function za(t){return t.tagName}function ja(t,e){t.textContent=e}function wa(t,e){t.setAttribute(e,"")}var Ma=Object.freeze({createElement:da,createElementNS:fa,createTextNode:pa,createComment:va,insertBefore:ma,removeChild:ba,appendChild:ga,parentNode:ya,nextSibling:Oa,tagName:za,setTextContent:ja,setStyleScope:wa}),_a={create:function(t,e){Ca(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ca(t,!0),Ca(e))},destroy:function(t){Ca(t,!0)}};function Ca(t,e){var n=t.data.ref;if(a(n)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?g(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Aa=new yt("",{},[]),Va=["create","activate","update","remove","destroy"];function Ia(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&a(t.data)===a(e.data)&&ka(t,e)||i(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function ka(t,e){if("input"!==t.tag)return!0;var n,r=a(n=t.data)&&a(n=n.attrs)&&n.type,i=a(n=e.data)&&a(n=n.attrs)&&n.type;return r===i||ua(r)&&ua(i)}function Ha(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,a(i)&&(o[i]=r);return o}function Sa(t){var e,n,o={},s=t.modules,l=t.nodeOps;for(e=0;e<Va.length;++e)for(o[Va[e]]=[],n=0;n<s.length;++n)a(s[n][Va[e]])&&o[Va[e]].push(s[n][Va[e]]);function u(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);a(e)&&l.removeChild(e,t)}function f(t,e,n,r,o,c,s){if(a(t.elm)&&a(c)&&(t=c[s]=wt(t)),t.isRootInsert=!o,!p(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;a(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),j(t),y(t,h,e),a(u)&&z(t,e),g(n,t.elm,r)):i(t.isComment)?(t.elm=l.createComment(t.text),g(n,t.elm,r)):(t.elm=l.createTextNode(t.text),g(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(a(o)){var c=a(t.componentInstance)&&o.keepAlive;if(a(o=o.hook)&&a(o=o.init)&&o(t,!1),a(t.componentInstance))return v(t,e),g(n,t.elm,r),i(c)&&b(t,e,n,r),!0}}function v(t,e){a(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,O(t)?(z(t,e),j(t)):(Ca(t),e.push(t))}function b(t,e,n,r){var i,c=t;while(c.componentInstance)if(c=c.componentInstance._vnode,a(i=c.data)&&a(i=i.transition)){for(i=0;i<o.activate.length;++i)o.activate[i](Aa,c);e.push(c);break}g(n,t.elm,r)}function g(t,e,n){a(t)&&(a(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function O(t){while(t.componentInstance)t=t.componentInstance._vnode;return a(t.tag)}function z(t,n){for(var r=0;r<o.create.length;++r)o.create[r](Aa,t);e=t.data.hook,a(e)&&(a(e.create)&&e.create(Aa,t),a(e.insert)&&n.push(t))}function j(t){var e;if(a(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)a(e=n.context)&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}a(e=Hn)&&e!==t.context&&e!==t.fnContext&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function w(t,e,n,r,a,i){for(;r<=a;++r)f(n[r],i,t,e,!1,n,r)}function M(t){var e,n,r=t.data;if(a(r))for(a(e=r.hook)&&a(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(a(e=t.children))for(n=0;n<t.children.length;++n)M(t.children[n])}function _(t,e,n){for(;e<=n;++e){var r=t[e];a(r)&&(a(r.tag)?(C(r),M(r)):d(r.elm))}}function C(t,e){if(a(e)||a(t.data)){var n,r=o.remove.length+1;for(a(e)?e.listeners+=r:e=h(t.elm,r),a(n=t.componentInstance)&&a(n=n._vnode)&&a(n.data)&&C(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);a(n=t.data.hook)&&a(n=n.remove)?n(t,e):e()}else d(t.elm)}function A(t,e,n,i,o){var c,s,u,h,d=0,p=0,v=e.length-1,m=e[0],b=e[v],g=n.length-1,y=n[0],O=n[g],z=!o;while(d<=v&&p<=g)r(m)?m=e[++d]:r(b)?b=e[--v]:Ia(m,y)?(I(m,y,i,n,p),m=e[++d],y=n[++p]):Ia(b,O)?(I(b,O,i,n,g),b=e[--v],O=n[--g]):Ia(m,O)?(I(m,O,i,n,g),z&&l.insertBefore(t,m.elm,l.nextSibling(b.elm)),m=e[++d],O=n[--g]):Ia(b,y)?(I(b,y,i,n,p),z&&l.insertBefore(t,b.elm,m.elm),b=e[--v],y=n[++p]):(r(c)&&(c=Ha(e,d,v)),s=a(y.key)?c[y.key]:V(y,e,d,v),r(s)?f(y,i,t,m.elm,!1,n,p):(u=e[s],Ia(u,y)?(I(u,y,i,n,p),e[s]=void 0,z&&l.insertBefore(t,u.elm,m.elm)):f(y,i,t,m.elm,!1,n,p)),y=n[++p]);d>v?(h=r(n[g+1])?null:n[g+1].elm,w(t,h,n,p,g,i)):p>g&&_(e,d,v)}function V(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(a(o)&&Ia(t,o))return i}}function I(t,e,n,c,s,u){if(t!==e){a(e.elm)&&a(c)&&(e=c[s]=wt(e));var h=e.elm=t.elm;if(i(t.isAsyncPlaceholder))a(e.asyncFactory.resolved)?S(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(i(e.isStatic)&&i(t.isStatic)&&e.key===t.key&&(i(e.isCloned)||i(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;a(f)&&a(d=f.hook)&&a(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(a(f)&&O(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);a(d=f.hook)&&a(d=d.update)&&d(t,e)}r(e.text)?a(p)&&a(v)?p!==v&&A(h,p,v,n,u):a(v)?(a(t.text)&&l.setTextContent(h,""),w(h,null,v,0,v.length-1,n)):a(p)?_(p,0,p.length-1):a(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),a(f)&&a(d=f.hook)&&a(d=d.postpatch)&&d(t,e)}}}function k(t,e,n){if(i(n)&&a(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var H=m("attrs,class,staticClass,staticStyle,key");function S(t,e,n,r){var o,c=e.tag,s=e.data,l=e.children;if(r=r||s&&s.pre,e.elm=t,i(e.isComment)&&a(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(a(s)&&(a(o=s.hook)&&a(o=o.init)&&o(e,!0),a(o=e.componentInstance)))return v(e,n),!0;if(a(c)){if(a(l))if(t.hasChildNodes())if(a(o=s)&&a(o=o.domProps)&&a(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!S(h,l[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,l,n);if(a(s)){var f=!1;for(var p in s)if(!H(p)){f=!0,z(e,n);break}!f&&s["class"]&&be(s["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,c){if(!r(e)){var s=!1,h=[];if(r(t))s=!0,f(e,h);else{var d=a(t.nodeType);if(!d&&Ia(t,e))I(t,e,h,null,null,c);else{if(d){if(1===t.nodeType&&t.hasAttribute(E)&&(t.removeAttribute(E),n=!0),i(n)&&S(t,e,h))return k(e,h,!0),t;t=u(t)}var p=t.elm,v=l.parentNode(p);if(f(e,h,p._leaveCb?null:v,l.nextSibling(p)),a(e.parent)){var m=e.parent,b=O(e);while(m){for(var g=0;g<o.destroy.length;++g)o.destroy[g](m);if(m.elm=e.elm,b){for(var y=0;y<o.create.length;++y)o.create[y](Aa,m);var z=m.data.hook.insert;if(z.merged)for(var j=1;j<z.fns.length;j++)z.fns[j]()}else Ca(m);m=m.parent}}a(v)?_([t],0,0):a(t.tag)&&M(t)}}return k(e,h,s),e.elm}a(t)&&M(t)}}var Pa={create:Ta,update:Ta,destroy:function(t){Ta(t,Aa)}};function Ta(t,e){(t.data.directives||e.data.directives)&&La(t,e)}function La(t,e){var n,r,a,i=t===Aa,o=e===Aa,c=xa(t.data.directives,t.context),s=xa(e.data.directives,e.context),l=[],u=[];for(n in s)r=c[n],a=s[n],r?(a.oldValue=r.value,a.oldArg=r.arg,Ea(a,"update",e,t),a.def&&a.def.componentUpdated&&u.push(a)):(Ea(a,"bind",e,t),a.def&&a.def.inserted&&l.push(a));if(l.length){var h=function(){for(var n=0;n<l.length;n++)Ea(l[n],"inserted",e,t)};i?je(e,"insert",h):h()}if(u.length&&je(e,"postpatch",(function(){for(var n=0;n<u.length;n++)Ea(u[n],"componentUpdated",e,t)})),!i)for(n in c)s[n]||Ea(c[n],"unbind",t,t,o)}var Ba=Object.create(null);function xa(t,e){var n,r,a=Object.create(null);if(!t)return a;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Ba),a[Fa(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return a}function Fa(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ea(t,e,n,r,a){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,a)}catch(Mo){ne(Mo,n.context,"directive "+t.name+" "+e+" hook")}}var Da=[_a,Pa];function Ra(t,e){var n=e.componentOptions;if((!a(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var i,o,c,s=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(i in a(u.__ob__)&&(u=e.data.attrs=H({},u)),u)o=u[i],c=l[i],c!==o&&$a(s,i,o,e.data.pre);for(i in(tt||nt)&&u.value!==l.value&&$a(s,"value",u.value),l)r(u[i])&&(Gr(i)?s.removeAttributeNS(Wr,Kr(i)):$r(i)||s.removeAttribute(i))}}function $a(t,e,n,r){r||t.tagName.indexOf("-")>-1?Na(t,e,n):Ur(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):$r(e)?t.setAttribute(e,qr(e,n)):Gr(e)?Yr(n)?t.removeAttributeNS(Wr,Kr(e)):t.setAttributeNS(Wr,e,n):Na(t,e,n)}function Na(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var qa={create:Ra,update:Ra};function Ua(t,e){var n=e.elm,i=e.data,o=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var c=Xr(e),s=n._transitionClasses;a(s)&&(c=Zr(c,ta(s))),c!==n._prevClass&&(n.setAttribute("class",c),n._prevClass=c)}}var Wa,Ga={create:Ua,update:Ua},Ka="__r",Ya="__c";function Xa(t){if(a(t[Ka])){var e=tt?"change":"input";t[e]=[].concat(t[Ka],t[e]||[]),delete t[Ka]}a(t[Ya])&&(t.change=[].concat(t[Ya],t.change||[]),delete t[Ya])}function Ja(t,e,n){var r=Wa;return function a(){var i=e.apply(null,arguments);null!==i&&ti(t,a,n,r)}}var Qa=ce&&!(at&&Number(at[1])<=53);function Za(t,e,n,r){if(Qa){var a=Kn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=a||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Wa.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ti(t,e,n,r){(r||Wa).removeEventListener(t,e._wrapper||e,n)}function ei(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},a=t.data.on||{};Wa=e.elm,Xa(n),ze(n,a,Za,ti,Ja,e.context),Wa=void 0}}var ni,ri={create:ei,update:ei};function ai(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,o=e.elm,c=t.data.domProps||{},s=e.data.domProps||{};for(n in a(s.__ob__)&&(s=e.data.domProps=H({},s)),c)n in s||(o[n]="");for(n in s){if(i=s[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===c[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var l=r(i)?"":String(i);ii(o,l)&&(o.value=l)}else if("innerHTML"===n&&ia(o.tagName)&&r(o.innerHTML)){ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+i+"</svg>";var u=ni.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(i!==c[n])try{o[n]=i}catch(Mo){}}}}function ii(t,e){return!t.composing&&("OPTION"===t.tagName||oi(t,e)||ci(t,e))}function oi(t,e){var n=!0;try{n=document.activeElement!==t}catch(Mo){}return n&&t.value!==e}function ci(t,e){var n=t.value,r=t._vModifiers;if(a(r)){if(r.number)return v(n)!==v(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var si={create:ai,update:ai},li=z((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ui(t){var e=hi(t.style);return t.staticStyle?H(t.staticStyle,e):e}function hi(t){return Array.isArray(t)?S(t):"string"===typeof t?li(t):t}function di(t,e){var n,r={};if(e){var a=t;while(a.componentInstance)a=a.componentInstance._vnode,a&&a.data&&(n=ui(a.data))&&H(r,n)}(n=ui(t.data))&&H(r,n);var i=t;while(i=i.parent)i.data&&(n=ui(i.data))&&H(r,n);return r}var fi,pi=/^--/,vi=/\s*!important$/,mi=function(t,e,n){if(pi.test(e))t.style.setProperty(e,n);else if(vi.test(n))t.style.setProperty(C(e),n.replace(vi,""),"important");else{var r=gi(e);if(Array.isArray(n))for(var a=0,i=n.length;a<i;a++)t.style[r]=n[a];else t.style[r]=n}},bi=["Webkit","Moz","ms"],gi=z((function(t){if(fi=fi||document.createElement("div").style,t=w(t),"filter"!==t&&t in fi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bi.length;n++){var r=bi[n]+e;if(r in fi)return r}}));function yi(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,c,s=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=hi(e.data.style)||{};e.data.normalizedStyle=a(d.__ob__)?H({},d):d;var f=di(e,!0);for(c in h)r(f[c])&&mi(s,c,"");for(c in f)o=f[c],o!==h[c]&&mi(s,c,null==o?"":o)}}var Oi={create:yi,update:yi},zi=/\s+/;function ji(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(zi).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function wi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(zi).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Mi(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&H(e,_i(t.name||"v")),H(e,t),e}return"string"===typeof t?_i(t):void 0}}var _i=z((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ci=X&&!et,Ai="transition",Vi="animation",Ii="transition",ki="transitionend",Hi="animation",Si="animationend";Ci&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ii="WebkitTransition",ki="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Hi="WebkitAnimation",Si="webkitAnimationEnd"));var Pi=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ti(t){Pi((function(){Pi(t)}))}function Li(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ji(t,e))}function Bi(t,e){t._transitionClasses&&g(t._transitionClasses,e),wi(t,e)}function xi(t,e,n){var r=Ei(t,e),a=r.type,i=r.timeout,o=r.propCount;if(!a)return n();var c=a===Ai?ki:Si,s=0,l=function(){t.removeEventListener(c,u),n()},u=function(e){e.target===t&&++s>=o&&l()};setTimeout((function(){s<o&&l()}),i+1),t.addEventListener(c,u)}var Fi=/\b(transform|all)(,|$)/;function Ei(t,e){var n,r=window.getComputedStyle(t),a=(r[Ii+"Delay"]||"").split(", "),i=(r[Ii+"Duration"]||"").split(", "),o=Di(a,i),c=(r[Hi+"Delay"]||"").split(", "),s=(r[Hi+"Duration"]||"").split(", "),l=Di(c,s),u=0,h=0;e===Ai?o>0&&(n=Ai,u=o,h=i.length):e===Vi?l>0&&(n=Vi,u=l,h=s.length):(u=Math.max(o,l),n=u>0?o>l?Ai:Vi:null,h=n?n===Ai?i.length:s.length:0);var d=n===Ai&&Fi.test(r[Ii+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Di(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ri(e)+Ri(t[n])})))}function Ri(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function $i(t,e){var n=t.elm;a(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Mi(t.data.transition);if(!r(i)&&!a(n._enterCb)&&1===n.nodeType){var o=i.css,c=i.type,l=i.enterClass,u=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,f=i.appearToClass,p=i.appearActiveClass,m=i.beforeEnter,b=i.enter,g=i.afterEnter,y=i.enterCancelled,O=i.beforeAppear,z=i.appear,j=i.afterAppear,w=i.appearCancelled,M=i.duration,_=Hn,C=Hn.$vnode;while(C&&C.parent)_=C.context,C=C.parent;var A=!_._isMounted||!t.isRootInsert;if(!A||z||""===z){var V=A&&d?d:l,I=A&&p?p:h,k=A&&f?f:u,H=A&&O||m,S=A&&"function"===typeof z?z:b,P=A&&j||g,T=A&&w||y,L=v(s(M)?M.enter:M);0;var B=!1!==o&&!et,x=Ui(S),E=n._enterCb=F((function(){B&&(Bi(n,k),Bi(n,I)),E.cancelled?(B&&Bi(n,V),T&&T(n)):P&&P(n),n._enterCb=null}));t.data.show||je(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),S&&S(n,E)})),H&&H(n),B&&(Li(n,V),Li(n,I),Ti((function(){Bi(n,V),E.cancelled||(Li(n,k),x||(qi(L)?setTimeout(E,L):xi(n,c,E)))}))),t.data.show&&(e&&e(),S&&S(n,E)),B||x||E()}}}function Ni(t,e){var n=t.elm;a(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Mi(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!a(n._leaveCb)){var o=i.css,c=i.type,l=i.leaveClass,u=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,b=i.delayLeave,g=i.duration,y=!1!==o&&!et,O=Ui(f),z=v(s(g)?g.leave:g);0;var j=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(Bi(n,u),Bi(n,h)),j.cancelled?(y&&Bi(n,l),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));b?b(w):w()}function w(){j.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(Li(n,l),Li(n,h),Ti((function(){Bi(n,l),j.cancelled||(Li(n,u),O||(qi(z)?setTimeout(j,z):xi(n,c,j)))}))),f&&f(n,j),y||O||j())}}function qi(t){return"number"===typeof t&&!isNaN(t)}function Ui(t){if(r(t))return!1;var e=t.fns;return a(e)?Ui(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wi(t,e){!0!==e.data.show&&$i(e)}var Gi=X?{create:Wi,activate:Wi,remove:function(t,e){!0!==t.data.show?Ni(t,e):e()}}:{},Ki=[qa,Ga,ri,si,Oi,Gi],Yi=Ki.concat(Da),Xi=Sa({nodeOps:Ma,modules:Yi});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ao(t,"input")}));var Ji={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?je(n,"postpatch",(function(){Ji.componentUpdated(t,e,n)})):Qi(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||ua(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qi(t,e,n.context);var r=t._vOptions,a=t._vOptions=[].map.call(t.options,eo);if(a.some((function(t,e){return!B(t,r[e])}))){var i=t.multiple?e.value.some((function(t){return to(t,a)})):e.value!==e.oldValue&&to(e.value,a);i&&ao(t,"change")}}}};function Qi(t,e,n){Zi(t,e,n),(tt||nt)&&setTimeout((function(){Zi(t,e,n)}),0)}function Zi(t,e,n){var r=e.value,a=t.multiple;if(!a||Array.isArray(r)){for(var i,o,c=0,s=t.options.length;c<s;c++)if(o=t.options[c],a)i=x(r,eo(o))>-1,o.selected!==i&&(o.selected=i);else if(B(eo(o),r))return void(t.selectedIndex!==c&&(t.selectedIndex=c));a||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!B(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,ao(t.target,"input"))}function ao(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function io(t){return!t.componentInstance||t.data&&t.data.transition?t:io(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=io(n);var a=n.data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&a?(n.data.show=!0,$i(n,(function(){t.style.display=i}))):t.style.display=r?i:"none"},update:function(t,e,n){var r=e.value,a=e.oldValue;if(!r!==!a){n=io(n);var i=n.data&&n.data.transition;i?(n.data.show=!0,r?$i(n,(function(){t.style.display=t.__vOriginalDisplay})):Ni(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,a){a||(t.style.display=t.__vOriginalDisplay)}},co={model:Ji,show:oo},so={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(Mn(e.children)):t}function uo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var a=n._parentListeners;for(var i in a)e[w(i)]=a[i];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var vo=function(t){return t.tag||Te(t)},mo=function(t){return"show"===t.name},bo={name:"transition",props:so,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(vo),n.length)){0;var r=this.mode;0;var a=n[0];if(fo(this.$vnode))return a;var i=lo(a);if(!i)return a;if(this._leaving)return ho(t,a);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:c(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var s=(i.data||(i.data={})).transition=uo(this),l=this._vnode,u=lo(l);if(i.data.directives&&i.data.directives.some(mo)&&(i.data.show=!0),u&&u.data&&!po(i,u)&&!Te(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=H({},s);if("out-in"===r)return this._leaving=!0,je(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,a);if("in-out"===r){if(Te(i))return l;var d,f=function(){d()};je(s,"afterEnter",f),je(s,"enterCancelled",f),je(h,"delayLeave",(function(t){d=t}))}}return a}}},go=H({tag:String,moveClass:String},so);delete go.mode;var yo={props:go,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var a=Sn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,a(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,a=this.$slots.default||[],i=this.children=[],o=uo(this),c=0;c<a.length;c++){var s=a[c];if(s.tag)if(null!=s.key&&0!==String(s.key).indexOf("__vlist"))i.push(s),n[s.key]=s,(s.data||(s.data={})).transition=o;else;}if(r){for(var l=[],u=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Oo),t.forEach(zo),t.forEach(jo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Li(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ki,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ki,t),n._moveCb=null,Bi(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ci)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){wi(n,t)})),ji(n,e),n.style.display="none",this.$el.appendChild(n);var r=Ei(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Oo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function zo(t){t.data.newPos=t.elm.getBoundingClientRect()}function jo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,a=e.top-n.top;if(r||a){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+a+"px)",i.transitionDuration="0s"}}var wo={Transition:bo,TransitionGroup:yo};Mr.config.mustUseProp=Rr,Mr.config.isReservedTag=oa,Mr.config.isReservedAttr=Er,Mr.config.getTagNamespace=ca,Mr.config.isUnknownElement=la,H(Mr.options.directives,co),H(Mr.options.components,wo),Mr.prototype.__patch__=X?Xi:P,Mr.prototype.$mount=function(t,e){return t=t&&X?ha(t):void 0,Ln(this,t,e)},X&&setTimeout((function(){$.devtools&&lt&&lt.emit("init",Mr)}),0),e["default"]=Mr}.call(this,n("c8ba"))},"2b88":function(t,e,n){"use strict";
/*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("2b0e"));function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){return c(t)||s(t)||l()}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var u="undefined"!==typeof window;function h(t){return Array.isArray(t)||"object"===i(t)?Object.freeze(t):t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var r=n.passengers[0],a="function"===typeof r?r(e):n.passengers;return t.concat(a)}),[])}function f(t,e){return t.map((function(t,e){return[e,t]})).sort((function(t,n){return e(t[1],n[1])||t[0]-n[0]})).map((function(t){return t[1]}))}function p(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var v={},m={},b={},g=a.extend({data:function(){return{transports:v,targets:m,sources:b,trackInstances:u}},methods:{open:function(t){if(u){var e=t.to,n=t.from,r=t.passengers,i=t.order,o=void 0===i?1/0:i;if(e&&n&&r){var c={to:e,from:n,passengers:h(r),order:o},s=Object.keys(this.transports);-1===s.indexOf(e)&&a.set(this.transports,e,[]);var l=this.$_getTransportIndex(c),d=this.transports[e].slice(0);-1===l?d.push(c):d[l]=c,this.transports[e]=f(d,(function(t,e){return t.order-e.order}))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;if(n&&(r||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var a=this.$_getTransportIndex(t);if(a>=0){var i=this.transports[n].slice(0);i.splice(a,1),this.transports[n]=i}}},registerTarget:function(t,e,n){u&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){u&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var r in this.transports[e])if(this.transports[e][r].from===n)return+r;return-1}}}),y=new g(v),O=1,z=a.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(O++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){y.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){y.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};y.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"===typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:o(t),order:this.order};y.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),j=a.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:y.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){y.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){y.unregisterTarget(e),y.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){y.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),r=this.transition||this.tag;return e?n[0]:this.slim&&!r?t():t(r,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),w=0,M=["disabled","name","order","slim","slotProps","tag","to"],_=["multiple","transition"],C=a.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(w++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!==typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(y.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=y.targets[e.name];else{var n=e.append;if(n){var r="string"===typeof n?n:"DIV",a=document.createElement(r);t.appendChild(a),t=a}var i=p(this.$props,_);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new j({el:t,parent:this.$parent||this,propsData:i})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=p(this.$props,M);return t(z,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",z),t.component(e.portalTargetName||"PortalTarget",j),t.component(e.MountingPortalName||"MountingPortal",C)}var V={install:A};e.default=V,e.Portal=z,e.PortalTarget=j,e.MountingPortal=C,e.Wormhole=y},"2ba0":function(t,e,n){var r=n("7024");t.exports=function(t,e,n){for(var a in e)r(t,a,e[a],n);return t}},"2d00":function(t,e,n){var r,a,i=n("da84"),o=n("342f"),c=i.process,s=i.Deno,l=c&&c.versions||s&&s.version,u=l&&l.v8;u?(r=u.split("."),a=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(a=r[1]))),t.exports=a&&+a},"2d0a":function(t,e,n){var r=n("7f34"),a=n("b973"),i=n("2439"),o=n("4c07");t.exports=function(t,e){for(var n=a(e),c=o.f,s=i.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||c(t,u,s(e,u))}}},"2dd8":function(t,e,n){},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},a=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){a&&(t._devtoolHook=a,a.emit("vuex:init",t),a.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){a.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){a.emit("vuex:action",t,e)}),{prepend:!0}))}function o(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=o(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function h(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){s(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,f);var p=function(t){this.register([],t,!1)};function v(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;v(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},p.prototype.update=function(t){v([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var a=new d(e,n);if(0===t.length)this.root=a;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],a)}e.modules&&s(e.modules,(function(e,a){r.register(t.concat(a),e,n)}))},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},p.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var m;var b=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&H(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var a=this,o=this,c=o.dispatch,s=o.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return s.call(a,t,e,n)},this.strict=r;var l=this._modules.root.state;j(this,l,[],this._modules.root),z(this,l),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:m.config.devtools;u&&i(this)},g={state:{configurable:!0}};function y(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function O(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;j(t,n,[],t._modules.root,!0),z(t,n,e)}function z(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,i={};s(a,(function(e,n){i[n]=h(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:i}),m.config.silent=o,t.strict&&V(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),m.nextTick((function(){return r.$destroy()})))}function j(t,e,n,r,a){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!a){var c=I(e,n.slice(0,-1)),s=n[n.length-1];t._withCommit((function(){m.set(c,s,r.state)}))}var l=r.context=w(t,o,n);r.forEachMutation((function(e,n){var r=o+n;_(t,r,e,l)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,a=e.handler||e;C(t,r,a,l)})),r.forEachGetter((function(e,n){var r=o+n;A(t,r,e,l)})),r.forEachChild((function(r,i){j(t,e,n.concat(i),r,a)}))}function w(t,e,n){var r=""===e,a={dispatch:r?t.dispatch:function(n,r,a){var i=k(n,r,a),o=i.payload,c=i.options,s=i.type;return c&&c.root||(s=e+s),t.dispatch(s,o)},commit:r?t.commit:function(n,r,a){var i=k(n,r,a),o=i.payload,c=i.options,s=i.type;c&&c.root||(s=e+s),t.commit(s,o,c)}};return Object.defineProperties(a,{getters:{get:r?function(){return t.getters}:function(){return M(t,e)}},state:{get:function(){return I(t.state,n)}}}),a}function M(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(a){if(a.slice(0,r)===e){var i=a.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[a]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function _(t,e,n,r){var a=t._mutations[e]||(t._mutations[e]=[]);a.push((function(e){n.call(t,r.state,e)}))}function C(t,e,n,r){var a=t._actions[e]||(t._actions[e]=[]);a.push((function(e){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return u(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):a}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function V(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function I(t,e){return e.reduce((function(t,e){return t[e]}),t)}function k(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function H(t){m&&t===m||(m=t,n(m))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},b.prototype.commit=function(t,e,n){var r=this,a=k(t,e,n),i=a.type,o=a.payload,c=(a.options,{type:i,payload:o}),s=this._mutations[i];s&&(this._withCommit((function(){s.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})))},b.prototype.dispatch=function(t,e){var n=this,r=k(t,e),a=r.type,i=r.payload,o={type:a,payload:i},c=this._actions[a];if(c){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(l){0}var s=c.length>1?Promise.all(c.map((function(t){return t(i)}))):c[0](i);return new Promise((function(t,e){s.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(l){0}e(t)}))}))}},b.prototype.subscribe=function(t,e){return y(t,this._subscribers,e)},b.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return y(n,this._actionSubscribers,e)},b.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},b.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},b.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),j(this,this.state,t,this._modules.get(t),n.preserveState),z(this,this.state)},b.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=I(e.state,t.slice(0,-1));m.delete(n,t[t.length-1])})),O(this)},b.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},b.prototype.hotUpdate=function(t){this._modules.update(t),O(this,!0)},b.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(b.prototype,g);var S=E((function(t,e){var n={};return x(e).forEach((function(e){var r=e.key,a=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=D(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof a?a.call(this,e,n):e[a]},n[r].vuex=!0})),n})),P=E((function(t,e){var n={};return x(e).forEach((function(e){var r=e.key,a=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof a?a.apply(this,[r].concat(e)):r.apply(this.$store,[a].concat(e))}})),n})),T=E((function(t,e){var n={};return x(e).forEach((function(e){var r=e.key,a=e.val;a=t+a,n[r]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[a]},n[r].vuex=!0})),n})),L=E((function(t,e){var n={};return x(e).forEach((function(e){var r=e.key,a=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof a?a.apply(this,[r].concat(e)):r.apply(this.$store,[a].concat(e))}})),n})),B=function(t){return{mapState:S.bind(null,t),mapGetters:T.bind(null,t),mapMutations:P.bind(null,t),mapActions:L.bind(null,t)}};function x(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function E(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var r=t._modulesNamespaceMap[n];return r}function R(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var a=t.mutationTransformer;void 0===a&&(a=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var l=t.logActions;void 0===l&&(l=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=c(t.state);"undefined"!==typeof u&&(s&&t.subscribe((function(t,i){var o=c(i);if(n(t,h,o)){var s=q(),l=a(t),d="mutation "+t.type+s;$(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",l),u.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),N(u)}h=o})),l&&t.subscribeAction((function(t,n){if(i(t,n)){var r=q(),a=o(t),c="action "+t.type+r;$(u,c,e),u.log("%c action","color: #03A9F4; font-weight: bold",a),N(u)}})))}}function $(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(a){t.log(e)}}function N(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function U(t,e){return new Array(e+1).join(t)}function W(t,e){return U("0",e-t.toString().length)+t}var G={Store:b,install:H,version:"3.6.2",mapState:S,mapMutations:P,mapGetters:T,mapActions:L,createNamespacedHelpers:B,createLogger:R};e["a"]=G}).call(this,n("c8ba"))},"2f79":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b42e");var r="_uid"},3261:function(t,e,n){var r=n("0368"),a=n("4c07"),i=n("8d23");t.exports=r?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},3790:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return w}));var r=n("2b0e"),a=n("e863"),i=n("50d3"),o=n("c9a9"),c=n("a874"),s=n("7b1e"),l=n("d82f"),u=n("686b");function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var p=function(){function t(){h(this,t),this.$_config={}}return f(t,[{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object(s["k"])(e)){var n=Object(l["f"])(e);n.forEach((function(n){var r=e[n];"breakpoints"===n?!Object(s["a"])(r)||r.length<2||r.some((function(t){return!Object(s["n"])(t)||0===t.length}))?Object(u["a"])('"breakpoints" must be an array of at least 2 breakpoint names',i["b"]):t.$_config[n]=Object(o["a"])(r):Object(s["k"])(r)&&(t.$_config[n]=Object(l["f"])(r).reduce((function(t,e){return Object(s["o"])(r[e])||(t[e]=Object(o["a"])(r[e])),t}),t.$_config[n]||{}))}))}}},{key:"resetConfig",value:function(){this.$_config={}}},{key:"getConfig",value:function(){return Object(o["a"])(this.$_config)}},{key:"getConfigValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return Object(o["a"])(Object(c["b"])(this.$_config,t,e))}}]),t}(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r["default"];e.prototype[i["c"]]=r["default"].prototype[i["c"]]=e.prototype[i["c"]]||r["default"].prototype[i["c"]]||new p,e.prototype[i["c"]].setConfig(t)};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(){var t=!1,e=["Multiple instances of Vue detected!","You may need to set up an alias for Vue in your bundler config.","See: https://bootstrap-vue.org/docs#using-module-bundlers"].join("\n");return function(n){t||r["default"]===n||a["j"]||Object(u["a"])(e),t=!0}}(),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=t.directives,r=t.plugins,a=function t(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,y(a),v(i,a),C(a,e),V(a,n),M(a,r))};return a.installed=!1,a},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=t.directives,r=t.plugins,a=function t(a){t.installed||(t.installed=!0,y(a),C(a,e),V(a,n),M(a,r))};return a.installed=!1,a},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(b({},e),{},{install:O(t)})},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(b({},e),{},{install:z(t)})},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)n&&e[n]&&t.use(e[n])},_=function(t,e,n){t&&e&&n&&t.component(e,n)},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)_(t,n,e[n])},A=function(t,e,n){t&&e&&n&&t.directive(e.replace(/^VB/,"B"),n)},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)A(t,n,e[n])}},"37e1":function(t,e,n){"use strict";var r=n("199f"),a=n("0f33"),i=n("c85d"),o=n("a714"),c=n("0ee6"),s=n("894d"),l=n("8fe4"),u=n("7024"),h=!!i&&o((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=s(this,c("Promise")),n="function"==typeof t;return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!a&&"function"==typeof i){var d=c("Promise").prototype["finally"];i.prototype["finally"]!==d&&u(i.prototype,"finally",d,{unsafe:!0})}},"37e8":function(t,e,n){var r=n("83ab"),a=n("9bf2"),i=n("825a"),o=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=o(e),c=r.length,s=0;while(c>s)a.f(t,n=r[s++],e[n]);return t}},"3a58":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(t,10);return isNaN(n)?e:n},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseFloat(t);return isNaN(n)?e:n},i=function(t,e){return a(t).toFixed(r(e,0))}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,a=n("577e"),i=n("69f3"),o=n("7dd0"),c="String Iterator",s=i.set,l=i.getterFor(c);o(String,"String",(function(t){s(this,{type:c,string:a(t),index:0})}),(function(){var t,e=l(this),n=e.string,a=e.index;return a>=n.length?{value:void 0,done:!0}:(t=r(n,a),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),a=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),a=n("7c73"),i=n("9bf2"),o=r("unscopables"),c=Array.prototype;void 0==c[o]&&i.f(c,o,{configurable:!0,value:a(null)}),t.exports=function(t){c[o][t]=!0}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,a;if("string"===e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),a=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!a((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4c07":function(t,e,n){var r=n("0368"),a=n("bf45"),i=n("d0c8"),o=n("e3f1"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=o(e),i(n),a)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"4d64":function(t,e,n){var r=n("fc6a"),a=n("50c4"),i=n("23cb"),o=function(t){return function(e,n,o){var c,s=r(e),l=a(s.length),u=i(o,l);if(t&&n!=n){while(l>u)if(c=s[u++],c!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dd8":function(t,e,n){var r=n("90c5");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=i("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(t,e,n){var r=n("a691"),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},"50d3":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r="BvConfig",a="$bvConfig",i=["xs","sm","md","lg","xl"]},5135:function(t,e,n){var r=n("7b0b"),a={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return a.call(r(t),e)}},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Qo})),n.d(e,"b",(function(){return qo})),n.d(e,"c",(function(){return Fo})),n.d(e,"d",(function(){return Do}));var r=n("589b"),a=n("22e5"),i=n("1fd5"),o=n("e691");const c="@firebase/database",s="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(t){l=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(i["H"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(i["A"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(i["j"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),v=f("sessionStorage"),m=new o["b"]("@firebase/database"),b=function(){let t=1;return function(){return t++}}(),g=function(t){const e=Object(i["G"])(t),n=new i["d"];n.update(e);const r=n.digest();return i["g"].encodeByteArray(r)},y=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=y.apply(null,r):e+="object"===typeof r?Object(i["H"])(r):r,e+=" "}return e};let O=null,z=!0;const j=function(t,e){Object(i["e"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=o["a"].VERBOSE,O=m.log.bind(m),e&&v.set("logging_enabled",!0)):"function"===typeof t?O=t:(O=null,v.remove("logging_enabled"))},w=function(...t){if(!0===z&&(z=!1,null===O&&!0===v.get("logging_enabled")&&j(!0)),O){const e=y.apply(null,t);O(e)}},M=function(t){return function(...e){w(t,...e)}},_=function(...t){const e="FIREBASE INTERNAL ERROR: "+y(...t);m.error(e)},C=function(...t){const e="FIREBASE FATAL ERROR: "+y(...t);throw m.error(e),new Error(e)},A=function(...t){const e="FIREBASE WARNING: "+y(...t);m.warn(e)},V=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&A("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},I=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},k=function(t){if(Object(i["x"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},H="[MIN_NAME]",S="[MAX_NAME]",P=function(t,e){if(t===e)return 0;if(t===H||e===S)return-1;if(e===H||t===S)return 1;{const n=W(t),r=W(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},T=function(t,e){return t===e?0:t<e?-1:1},L=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(i["H"])(e))},B=function(t){if("object"!==typeof t||null===t)return Object(i["H"])(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=Object(i["H"])(e[r]),n+=":",n+=B(t[e[r]]);return n+="}",n},x=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let a=0;a<n;a+=e)a+e>n?r.push(t.substring(a,n)):r.push(t.substring(a,a+e));return r};function F(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const E=function(t){Object(i["e"])(!I(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let a,o,c,s,l;0===t?(o=0,c=0,a=1/t===-1/0?1:0):(a=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=s+r,c=Math.round(t*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,c=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(c%2?1:0),c=Math.floor(c/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(a?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},D=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},R=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function $(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const N=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,U=2147483647,W=function(t){if(N.test(t)){const e=Number(t);if(e>=q&&e<=U)return e}return null},G=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw A("Exception was thrown by user callback.",t),e},Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){A(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(w("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',A(t)}}class Q{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",tt="v",et="s",nt="r",rt="f",at=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,it="ls",ot="p",ct="ac",st="websocket",lt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,r,a=!1,i="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=a,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if(Object(i["e"])("string"===typeof e,"typeof type must == string"),Object(i["e"])("object"===typeof n,"typeof params must == object"),e===st)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==lt)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const a=[];return F(n,(t,e)=>{a.push(t+"="+e)}),r+a.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(i["j"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(i["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},vt={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function bt(t,e){const n=t.toString();return vt[n]||(vt[n]=e()),vt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&G(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="start",Ot="close",zt="pLPCommand",jt="pRTLPCB",wt="id",Mt="pw",_t="ser",Ct="cb",At="seg",Vt="ts",It="d",kt="dframe",Ht=1870,St=30,Pt=Ht-St,Tt=25e3,Lt=3e4;class Bt{constructor(t,e,n,r,a,i,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=a,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=M(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[ct]=this.appCheckToken),dt(e,lt,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lt)),k(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xt((...t)=>{const[e,n,r,a,i]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=r;else{if(e!==Ot)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[yt]="t",t[_t]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[Ct]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[it]=this.lastSessionId),this.applicationId&&(t[ot]=this.applicationId),this.appCheckToken&&(t[ct]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&at.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bt.forceAllow_=!0}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){return!Object(i["x"])()&&(!!Bt.forceAllow_||!Bt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!D()&&!R())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(i["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(i["i"])(e),r=x(n,Pt);for(let a=0;a<r.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[a]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(i["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[kt]="t",n[wt]=t,n[Mt]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(i["H"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class xt{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(i["x"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=b(),window[zt+this.uniqueCallbackIdentifier]=t,window[jt+this.uniqueCallbackIdentifier]=e,this.myIFrame=xt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(a){w("frame writing exception"),a.stack&&w(a.stack),w(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||w("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[wt]=this.myID,t[Mt]=this.myPW,t[_t]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+St+n.length<=Ht))break;{const t=this.pendingSegs.shift();n=n+"&"+At+r+"="+t.seg+"&"+Vt+r+"="+t.ts+"&"+It+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Tt)),a=()=>{clearTimeout(r),n()};this.addTag(t,a)}addTag(t,e){Object(i["x"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{w("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=16384,Et=45e3;let Dt=null;"undefined"!==typeof MozWebSocket?Dt=MozWebSocket:"undefined"!==typeof WebSocket&&(Dt=WebSocket);class Rt{constructor(t,e,n,r,a,i,o){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=M(this.connId),this.stats_=mt(e),this.connURL=Rt.connectionURL_(e,i,o,r),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r){const a={};return a[tt]=Z,!Object(i["x"])()&&"undefined"!==typeof location&&location.hostname&&at.test(location.hostname)&&(a[nt]=rt),e&&(a[et]=e),n&&(a[it]=n),r&&(a[ct]=r),dt(t,st,a)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(i["x"])()){const e=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${t.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/bianco/"}),a=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];a&&(n["proxy"]={origin:a}),this.mySock=new Dt(this.connURL,[],n)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Dt(this.connURL,[],t)}}catch(r){this.log_("Error instantiating WebSocket.");const t=r.message||r.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Dt&&!Rt.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(i["A"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(i["e"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(i["H"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=x(e,Ft);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Et))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2,Rt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Bt,Rt]}initTransports_(t){const e=Rt&&Rt["isAvailable"]();let n=e&&!Rt.previouslyFailed();if(t.webSocketOnly&&(e||A("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Rt];else{const t=this.transports_=[];for(const e of $t.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=6e4,qt=5e3,Ut=10240,Wt=102400,Gt="t",Kt="d",Yt="s",Xt="r",Jt="e",Qt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,a,i,o,c,s,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=a,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=c,this.onKill_=s,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=M("c:"+this.id+":"),this.transportManager_=new $t(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ut?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gt in t){const e=t[Gt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Xt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Qt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=L("t",t),n=L("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=L("t",t),n=L("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=L(Gt,t);if(Kt in t){const n=t[Kt];if(e===ne)this.onHandshake_(n);else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Xt?this.onReset_(n):e===Jt?_("Server Error: "+n):e===Qt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&A("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qt))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(i["e"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let a=0;a<r.length;a++)if(r[a].callback===e&&(!n||n===r[a].context))return void r.splice(a,1)}validateEventType_(t){Object(i["e"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends ie{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(i["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oe}getInitialEvent(t){return Object(i["e"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=32,se=768;class le{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ve(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function be(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return Oe(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ze(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function je(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class we{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(i["F"])(this.parts_[n]);Ce(this)}}function Me(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(i["F"])(e),Ce(t)}function _e(t){const e=t.parts_.pop();t.byteLength_-=Object(i["F"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ce(t){if(t.byteLength_>se)throw new Error(t.errorPrefix_+"has a key path longer than "+se+" bytes ("+t.byteLength_+").");if(t.parts_.length>ce)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ce+") or object contains a cycle "+Ae(t))}function Ae(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends ie{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Ve}getInitialEvent(t){return Object(i["e"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=1e3,ke=3e5,He=3e3,Se=3e4,Pe=1.3,Te=3e4,Le="server_kill",Be=3;class xe extends ae{constructor(t,e,n,r,a,o,c,s){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=s,this.id=xe.nextPersistentConnectionId_++,this.log_=M("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ie,this.maxReconnectDelay_=ke,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,s&&!Object(i["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ve.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,a={r:r,a:t,b:e};this.log_(Object(i["H"])(a)),Object(i["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new i["a"],n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const r=t["d"];"ok"===t["s"]?(this.onDataUpdate_(n["p"],r,!1,null),e.resolve(r)):e.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const t=this.outstandingGets_[a];void 0!==t&&r===t&&(delete this.outstandingGets_[a],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+a+" timed out on connection"),e.reject(new Error("Client is offline.")))},He),this.connected_&&this.sendGet_(a),e.promise}listen(t,e,n,r){this.initConnection_();const a=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+a),this.listens.has(o)||this.listens.set(o,new Map),Object(i["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(i["e"])(!this.listens.get(o).has(a),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(o).set(a,c),this.connected_&&this.sendListen_(c)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const a={p:n},i="q";t.tag&&(a["q"]=e._queryObject,a["t"]=t.tag),a["h"]=t.hashFn(),this.sendRequest(i,a,a=>{const i=a["d"],o=a["s"];xe.warnOnListenWarnings_(i,e);const c=this.listens.get(n)&&this.listens.get(n).get(r);c===t&&(this.log_("listen response",a),"ok"!==o&&this.removeListen_(n,r),t.onComplete&&t.onComplete(o,i))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(i["j"])(t,"w")){const n=Object(i["E"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();A(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(i["s"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Se)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(i["z"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(i["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const a=this.removeListen_(n,r);a&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const a={p:t},i="n";r&&(a["q"]=n,a["t"]=r),this.sendRequest(i,a)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const a={p:e,d:n};this.log_("onDisconnect "+t,a),this.sendRequest(t,a,t=>{r&&setTimeout(()=>{r(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,a){this.initConnection_();const i={p:e,d:n};void 0!==a&&(i["h"]=a),this.outstandingPuts_.push({action:t,request:i,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(i["H"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):_("Unrecognized action received from server: "+Object(i["H"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(i["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Te&&(this.reconnectDelay_=Ie),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pe)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+xe.nextConnectionId_++,a=this.lastSessionId;let o=!1,c=null;const s=function(){c?c.close():(o=!0,n())},l=function(t){Object(i["e"])(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(t)};this.realtime_={close:s,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[i,s]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?w("getToken() completed but was canceled"):(w("getToken() completed. Creating connection."),this.authToken_=i&&i.accessToken,this.appCheckToken_=s&&s.token,c=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{A(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Le)},a))}catch(_){this.log_("Failed to get token: "+_),o||(this.repoInfo_.nodeAdmin&&A(_),s())}}}interrupt(t){w("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){w("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(i["u"])(this.interruptReasons_)&&(this.reconnectDelay_=Ie,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>B(t)).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new le(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){w("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Be&&(this.reconnectDelay_=Se,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){w("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Be&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(i["x"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(i["w"])()?t["framework.cordova"]=1:Object(i["y"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oe.getInstance().currentlyOnline();return Object(i["u"])(this.interruptReasons_)&&t}}xe.nextPersistentConnectionId_=0,xe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Fe(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Fe(H,t),r=new Fe(H,e);return 0!==this.compare(n,r)}minPost(){return Fe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De;class Re extends Ee{static get __EMPTY_NODE(){return De}static set __EMPTY_NODE(t){De=t}compare(t,e){return P(t.name,e.name)}isDefinedOn(t){throw Object(i["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(S,De)}makePost(t,e){return Object(i["e"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new Fe(t,De)}toString(){return".key"}}const $e=new Re;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,n,r,a=null){this.isReverse_=r,this.resultGenerator_=a,this.nodeStack_=[];let i=1;while(!t.isEmpty())if(t=t,i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse_?t.left:t.right;else{if(0===i){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class qe{constructor(t,e,n,r,a){this.key=t,this.value=e,this.color=null!=n?n:qe.RED,this.left=null!=r?r:We.EMPTY_NODE,this.right=null!=a?a:We.EMPTY_NODE}copy(t,e,n,r,a){return new qe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=a?a:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const a=n(t,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===a?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return We.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}qe.RED=!0,qe.BLACK=!1;class Ue{copy(t,e,n,r,a){return this}insert(t,e,n){return new qe(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(t,e=We.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new We(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(t){return new We(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ne(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Ne(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Ne(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Ne(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(t,e){return P(t.name,e.name)}function Ke(t,e){return P(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye;function Xe(t){Ye=t}We.EMPTY_NODE=new Ue;const Je=function(t){return"number"===typeof t?"number:"+E(t):"string:"+t},Qe=function(t){if(t.isLeafNode()){const e=t.val();Object(i["e"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(i["j"])(e,".sv"),"Priority must be a string or number.")}else Object(i["e"])(t===Ye||t.isEmpty(),"priority of unexpected type.");Object(i["e"])(t===Ye||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ze,tn,en;class nn{constructor(t,e=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(i["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qe(this.priorityNode_)}static set __childrenNodeConstructor(t){Ze=t}static get __childrenNodeConstructor(){return Ze}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===he(t)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(i["e"])(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Je(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?E(this.value_):this.value_,this.lazyHash_=g(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nn.__childrenNodeConstructor?-1:(Object(i["e"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(e),a=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(i["e"])(r>=0,"Unknown leaf type: "+e),Object(i["e"])(a>=0,"Unknown leaf type: "+n),r===a?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function rn(t){tn=t}function an(t){en=t}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Ee{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),a=n.compareTo(r);return 0===a?P(t.name,e.name):a}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(S,new nn("[PRIORITY-POST]",en))}makePost(t,e){const n=tn(t);return new Fe(e,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new on,sn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){const e=t=>parseInt(Math.log(t)/sn,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const un=function(t,e,n,r){t.sort(e);const a=function(e,r){const i=r-e;let o,c;if(0===i)return null;if(1===i)return o=t[e],c=n?n(o):o,new qe(c,o.node,qe.BLACK,null,null);{const s=parseInt(i/2,10)+e,l=a(e,s),u=a(s+1,r);return o=t[s],c=n?n(o):o,new qe(c,o.node,qe.BLACK,l,u)}},i=function(e){let r=null,i=null,o=t.length;const c=function(e,r){const i=o-e,c=o;o-=e;const l=a(i+1,c),u=t[i],h=n?n(u):u;s(new qe(h,u.node,r,null,l))},s=function(t){r?(r.left=t,r=t):(i=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?c(r,qe.BLACK):(c(r,qe.BLACK),c(r,qe.RED))}return i},o=new ln(t.length),c=i(o);return new We(r||e,c)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(i["e"])(dn&&cn,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":cn}),hn}get(t){const e=Object(i["E"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof We?e:null}hasIndex(t){return Object(i["j"])(this.indexSet_,t.toString())}addIndex(t,e){Object(i["e"])(t!==$e,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const a=e.getIterator(Fe.Wrap);let o,c=a.getNext();while(c)r=r||t.isDefinedOn(c.node),n.push(c),c=a.getNext();o=r?un(n,t.getCompare()):dn;const s=t.toString(),l=Object.assign({},this.indexSet_);l[s]=t;const u=Object.assign({},this.indexes_);return u[s]=o,new fn(u,l)}addToIndexes(t,e){const n=Object(i["B"])(this.indexes_,(n,r)=>{const a=Object(i["E"])(this.indexSet_,r);if(Object(i["e"])(a,"Missing index implementation for "+r),n===dn){if(a.isDefinedOn(t.node)){const n=[],r=e.getIterator(Fe.Wrap);let i=r.getNext();while(i)i.name!==t.name&&n.push(i),i=r.getNext();return n.push(t),un(n,a.getCompare())}return dn}{const r=e.get(t.name);let a=n;return r&&(a=a.remove(new Fe(t.name,r))),a.insert(t,t.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(i["B"])(this.indexes_,n=>{if(n===dn)return n;{const r=e.get(t.name);return r?n.remove(new Fe(t.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class vn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qe(this.priorityNode_),this.children_.isEmpty()&&Object(i["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new vn(new We(Ke),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(t){return this.children_.isEmpty()?this:new vn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?pn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(i["e"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Fe(t,e);let r,a;e.isEmpty()?(r=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),a=this.indexMap_.addToIndexes(n,this.children_));const i=r.isEmpty()?pn:this.priorityNode_;return new vn(r,i,a)}}updateChild(t,e){const n=he(t);if(null===n)return e;{Object(i["e"])(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,a=!0;if(this.forEachChild(cn,(i,o)=>{e[i]=o.val(t),n++,a&&vn.INTEGER_REGEXP_.test(i)?r=Math.max(r,Number(i)):a=!1}),!t&&a&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Je(this.getPriority().val())+":"),this.forEachChild(cn,(e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.lazyHash_=""===t?"":g(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Fe(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Fe(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Fe(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===bn?-1:0}withIndex(t){if(t===$e||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new vn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===$e||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(cn),n=e.getIterator(cn);let r=t.getNext(),a=n.getNext();while(r&&a){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=t.getNext(),a=n.getNext()}return null===r&&null===a}return!1}return!1}}resolveIndex_(t){return t===$e?null:this.indexMap_.get(t.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends vn{constructor(){super(new We(Ke),vn.EMPTY_NODE,fn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return vn.EMPTY_NODE}isEmpty(){return!1}}const bn=new mn;Object.defineProperties(Fe,{MIN:{value:new Fe(H,vn.EMPTY_NODE)},MAX:{value:new Fe(S,bn)}}),Re.__EMPTY_NODE=vn.EMPTY_NODE,nn.__childrenNodeConstructor=vn,Xe(bn),an(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function yn(t,e=null){if(null===t)return vn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(i["e"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new nn(n,yn(e))}if(t instanceof Array||!gn){let n=vn.EMPTY_NODE;return F(t,(e,r)=>{if(Object(i["j"])(t,e)&&"."!==e.substring(0,1)){const t=yn(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(yn(e))}{const n=[];let r=!1;const a=t;if(F(a,(t,e)=>{if("."!==t.substring(0,1)){const a=yn(e);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Fe(t,a)))}}),0===n.length)return vn.EMPTY_NODE;const i=un(n,Ge,t=>t.name,Ke);if(r){const t=un(n,cn.getCompare());return new vn(i,yn(e),new fn({".priority":t},{".priority":cn}))}return new vn(i,yn(e),fn.Default)}}rn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends Ee{constructor(t){super(),this.indexPath_=t,Object(i["e"])(!ye(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),a=n.compareTo(r);return 0===a?P(t.name,e.name):a}makePost(t,e){const n=yn(t),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Fe(e,r)}maxPost(){const t=vn.EMPTY_NODE.updateChild(this.indexPath_,bn);return new Fe(S,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ee{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?P(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(t,e){const n=yn(t);return new Fe(e,n)}toString(){return".value"}}const jn=new zn,wn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(t){return{type:"value",snapshotNode:t}}function _n(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function An(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.index_=t}updateChild(t,e,n,r,a,o){Object(i["e"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=t.getImmediateChild(e);return c.getChild(r).equals(n.getChild(r))&&c.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(Cn(e,c)):Object(i["e"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(_n(e,n)):o.trackChildChange(An(e,n,c))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(cn,(t,r)=>{e.hasChild(t)||n.trackChildChange(Cn(t,r))}),e.isLeafNode()||e.forEachChild(cn,(e,r)=>{if(t.hasChild(e)){const a=t.getImmediateChild(e);a.equals(r)||n.trackChildChange(An(e,r,a))}else n.trackChildChange(_n(e,r))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?vn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.indexedFilter_=new In(t.getIndex()),this.index_=t.getIndex(),this.startPost_=kn.getStartPost_(t),this.endPost_=kn.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,r,a,i){return this.matches(new Fe(e,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,a,i)}updateFullNode(t,e,n){e.isLeafNode()&&(e=vn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);const a=this;return e.forEachChild(cn,(t,e)=>{a.matches(new Fe(t,e))||(r=r.updateImmediateChild(t,vn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.rangedFilter_=new kn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,r,a,i){return this.rangedFilter_.matches(new Fe(e,n))||(n=vn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,a,i):this.fullLimitUpdateChild_(t,e,n,a,i)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=vn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let a;if(a=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!a)break;r=r.updateImmediateChild(e.name,e.node),n++}}else{let t,n,a,i;if(r=e.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE),this.reverse_){i=r.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();a=(t,n)=>e(n,t)}else i=r.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let o=0,c=!1;while(i.hasNext()){const e=i.getNext();!c&&a(t,e)<=0&&(c=!0);const s=c&&o<this.limit_&&a(e,n)<=0;s?o++:r=r.updateImmediateChild(e.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,a){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const c=t;Object(i["e"])(c.numChildren()===this.limit_,"");const s=new Fe(e,n),l=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),u=this.rangedFilter_.matches(s);if(c.hasChild(e)){const t=c.getImmediateChild(e);let i=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=i&&(i.name===e||c.hasChild(i.name)))i=r.getChildAfterChild(this.index_,i,this.reverse_);const h=null==i?1:o(i,s),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=a&&a.trackChildChange(An(e,n,t)),c.updateImmediateChild(e,n);{null!=a&&a.trackChildChange(Cn(e,t));const n=c.updateImmediateChild(e,vn.EMPTY_NODE),r=null!=i&&this.rangedFilter_.matches(i);return r?(null!=a&&a.trackChildChange(_n(i.name,i.node)),n.updateImmediateChild(i.name,i.node)):n}}return n.isEmpty()?t:u&&o(l,s)>=0?(null!=a&&(a.trackChildChange(Cn(l.name,l.node)),a.trackChildChange(_n(e,n))),c.updateImmediateChild(e,n).updateImmediateChild(l.name,vn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(i["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(i["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:H}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(i["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(i["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:S}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(i["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const t=new Sn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Pn(t){return t.loadsAllData()?new In(t.getIndex()):t.hasLimit()?new Hn(t):new kn(t)}function Tn(t){const e={};if(t.isDefault())return e;let n;return t.index_===cn?n="$priority":t.index_===jn?n="$value":t.index_===$e?n="$key":(Object(i["e"])(t.index_ instanceof On,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(i["H"])(n),t.startSet_&&(e["startAt"]=Object(i["H"])(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+Object(i["H"])(t.indexStartName_))),t.endSet_&&(e["endAt"]=Object(i["H"])(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+Object(i["H"])(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Ln(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==cn&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ae{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=M("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(i["e"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const a=t._path.toString();this.log_("Listen called for "+a+" "+t._queryIdentifier);const o=Bn.getListenId_(t,n),c={};this.listens_[o]=c;const s=Tn(t._queryParams);this.restRequest_(a+".json",s,(t,e)=>{let s=e;if(404===t&&(s=null,t=null),null===t&&this.onDataUpdate_(a,s,!1,n),Object(i["E"])(this.listens_,o)===c){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}})}unlisten(t,e){const n=Bn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Tn(t._queryParams),n=t._path.toString(),r=new i["a"];return this.restRequest_(n+".json",e,(t,e)=>{let a=e;404===t&&(a=null,t=null),null===t?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,a])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),a&&a.token&&(e["ac"]=a.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(i["C"])(e);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(n&&4===c.readyState){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let e=null;if(c.status>=200&&c.status<300){try{e=Object(i["A"])(c.responseText)}catch(t){A("Failed to parse JSON response for "+o+": "+c.responseText)}n(null,e)}else 401!==c.status&&404!==c.status&&A("Got unsuccessful REST response for "+o+" Status: "+c.status),n(c.status);n=null}},c.open("GET",o,!0),c.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function En(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,Fn());const a=t.children.get(r);e=fe(e),En(a,e,n)}}function Dn(t,e,n){null!==t.value?n(e,t.value):Rn(t,(t,r)=>{const a=new le(e.toString()+"/"+t);Dn(r,a,n)})}function Rn(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&F(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=1e4,qn=3e4,Un=3e5;class Wn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new $n(t);const n=Nn+(qn-Nn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;F(t,(t,r)=>{r>0&&Object(i["j"])(this.statsToReport_,t)&&(e[t]=r,n=!0)}),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Un))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Jn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Kn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return Object(i["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(t));return new Jn(ue(),e,this.revert)}}return Object(i["e"])(he(this.path)===t,"operationForChild called for unrelated child."),new Jn(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.source=t,this.path=e,this.type=Gn.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new Qn(this.source,ue()):new Qn(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(t){return ye(this.path)?new Zn(this.source,ue(),this.snap.getImmediateChild(t)):new Zn(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Gn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new le(t));return e.isEmpty()?null:e.value?new Zn(this.source,ue(),e.value):new tr(this.source,ue(),e)}return Object(i["e"])(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function rr(t,e,n,r){const a=[],i=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&i.push(Vn(e.childName,e.snapshotNode))}),ar(t,a,"child_removed",e,r,n),ar(t,a,"child_added",e,r,n),ar(t,a,"child_moved",i,r,n),ar(t,a,"child_changed",e,r,n),ar(t,a,"value",e,r,n),a}function ar(t,e,n,r,a,i){const o=r.filter(t=>t.type===n);o.sort((e,n)=>or(t,e,n)),o.forEach(n=>{const r=ir(t,n,i);a.forEach(a=>{a.respondsTo(n.type)&&e.push(a.createEvent(r,t.query_))})})}function ir(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function or(t,e,n){if(null==e.childName||null==n.childName)throw Object(i["f"])("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),a=new Fe(n.childName,n.snapshotNode);return t.index_.compare(r,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){return{eventCache:t,serverCache:e}}function sr(t,e,n,r){return cr(new er(e,n,r),t.serverCache)}function lr(t,e,n,r){return cr(t.eventCache,new er(e,n,r))}function ur(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const fr=()=>(dr||(dr=new We(T)),dr);class pr{constructor(t,e=fr()){this.value=t,this.children=e}static fromObject(t){let e=new pr(null);return F(t,(t,n)=>{e=e.set(new le(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ye(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const a=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=a){const t=ge(new le(n),a.path);return{path:t,value:a.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new pr(null)}}set(t,e){if(ye(t))return new pr(e,this.children);{const n=he(t),r=this.children.get(n)||new pr(null),a=r.set(fe(t),e),i=this.children.insert(n,a);return new pr(this.value,i)}}remove(t){if(ye(t))return this.children.isEmpty()?new pr(null):new pr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let a;return a=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&a.isEmpty()?new pr(null):new pr(this.value,a)}return this}}get(t){if(ye(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(ye(t))return e;{const n=he(t),r=this.children.get(n)||new pr(null),a=r.setTree(fe(t),e);let i;return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),new pr(this.value,i)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((r,a)=>{n[r]=a.fold_(ge(t,r),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ye(t))return null;{const r=he(t),a=this.children.get(r);return a?a.findOnPath_(fe(t),ge(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const r=he(t),a=this.children.get(r);return a?a.foreachOnPath_(fe(t),ge(e,r),n):new pr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal((n,r)=>{r.foreach_(ge(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.writeTree_=t}static empty(){return new vr(new pr(null))}}function mr(t,e,n){if(ye(e))return new vr(new pr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const a=r.path;let i=r.value;const o=Oe(a,e);return i=i.updateChild(o,n),new vr(t.writeTree_.set(a,i))}{const r=new pr(n),a=t.writeTree_.setTree(e,r);return new vr(a)}}}function br(t,e,n){let r=t;return F(n,(t,n)=>{r=mr(r,ge(e,t),n)}),r}function gr(t,e){if(ye(e))return vr.empty();{const n=t.writeTree_.setTree(e,new pr(null));return new vr(n)}}function yr(t,e){return null!=Or(t,e)}function Or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function zr(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(t,n)=>{e.push(new Fe(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new Fe(t,n.value))}),e}function jr(t,e){if(ye(e))return t;{const n=Or(t,e);return new vr(null!=n?new pr(n):t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function Mr(t,e){return _r(ue(),t.writeTree_,e)}function _r(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((e,a)=>{".priority"===e?(Object(i["e"])(null!==a.value,"Priority writes must always be leaf nodes"),r=a.value):n=_r(ge(t,e),a,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(ge(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){return Kr(e,t)}function Ar(t,e,n,r,a){Object(i["e"])(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===a&&(a=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:a}),a&&(t.visibleWrites=mr(t.visibleWrites,e,n)),t.lastWriteId=r}function Vr(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ir(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(i["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let a=r.visible,o=!1,c=t.allWrites.length-1;while(a&&c>=0){const e=t.allWrites[c];e.visible&&(c>=n&&kr(e,r.path)?a=!1:je(r.path,e.path)&&(o=!0)),c--}if(a){if(o)return Hr(t),!0;if(r.snap)t.visibleWrites=gr(t.visibleWrites,r.path);else{const e=r.children;F(e,e=>{t.visibleWrites=gr(t.visibleWrites,ge(r.path,e))})}return!0}return!1}function kr(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(ge(t.path,n),e))return!0;return!1}function Hr(t){t.visibleWrites=Pr(t.allWrites,Sr,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sr(t){return t.visible}function Pr(t,e,n){let r=vr.empty();for(let a=0;a<t.length;++a){const o=t[a];if(e(o)){const t=o.path;let e;if(o.snap)je(n,t)?(e=Oe(n,t),r=mr(r,e,o.snap)):je(t,n)&&(e=Oe(t,n),r=mr(r,ue(),o.snap.getChild(e)));else{if(!o.children)throw Object(i["f"])("WriteRecord should have .snap or .children");if(je(n,t))e=Oe(n,t),r=br(r,e,o.children);else if(je(t,n))if(e=Oe(t,n),ye(e))r=br(r,ue(),o.children);else{const t=Object(i["E"])(o.children,he(e));if(t){const n=t.getChild(fe(e));r=mr(r,ue(),n)}}}}}return r}function Tr(t,e,n,r,a){if(r||a){const i=jr(t.visibleWrites,e);if(!a&&wr(i))return n;if(a||null!=n||yr(i,ue())){const i=function(t){return(t.visible||a)&&(!r||!~r.indexOf(t.writeId))&&(je(t.path,e)||je(e,t.path))},o=Pr(t.allWrites,i,e),c=n||vn.EMPTY_NODE;return Mr(o,c)}return null}{const r=Or(t.visibleWrites,e);if(null!=r)return r;{const r=jr(t.visibleWrites,e);if(wr(r))return n;if(null!=n||yr(r,ue())){const t=n||vn.EMPTY_NODE;return Mr(r,t)}return null}}}function Lr(t,e,n){let r=vn.EMPTY_NODE;const a=Or(t.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(cn,(t,e)=>{r=r.updateImmediateChild(t,e)}),r;if(n){const a=jr(t.visibleWrites,e);return n.forEachChild(cn,(t,e)=>{const n=Mr(jr(a,new le(t)),e);r=r.updateImmediateChild(t,n)}),zr(a).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}{const n=jr(t.visibleWrites,e);return zr(n).forEach(t=>{r=r.updateImmediateChild(t.name,t.node)}),r}}function Br(t,e,n,r,a){Object(i["e"])(r||a,"Either existingEventSnap or existingServerSnap must exist");const o=ge(e,n);if(yr(t.visibleWrites,o))return null;{const e=jr(t.visibleWrites,o);return wr(e)?a.getChild(n):Mr(e,a.getChild(n))}}function xr(t,e,n,r){const a=ge(e,n),i=Or(t.visibleWrites,a);if(null!=i)return i;if(r.isCompleteForChild(n)){const e=jr(t.visibleWrites,a);return Mr(e,r.getNode().getImmediateChild(n))}return null}function Fr(t,e){return Or(t.visibleWrites,e)}function Er(t,e,n,r,a,i,o){let c;const s=jr(t.visibleWrites,e),l=Or(s,ue());if(null!=l)c=l;else{if(null==n)return[];c=Mr(s,n)}if(c=c.withIndex(o),c.isEmpty()||c.isLeafNode())return[];{const t=[],e=o.getCompare(),n=i?c.getReverseIteratorFrom(r,o):c.getIteratorFrom(r,o);let s=n.getNext();while(s&&t.length<a)0!==e(s,r)&&t.push(s),s=n.getNext();return t}}function Dr(){return{visibleWrites:vr.empty(),allWrites:[],lastWriteId:-1}}function Rr(t,e,n,r){return Tr(t.writeTree,t.treePath,e,n,r)}function $r(t,e){return Lr(t.writeTree,t.treePath,e)}function Nr(t,e,n,r){return Br(t.writeTree,t.treePath,e,n,r)}function qr(t,e){return Fr(t.writeTree,ge(t.treePath,e))}function Ur(t,e,n,r,a,i){return Er(t.writeTree,t.treePath,e,n,r,a,i)}function Wr(t,e,n){return xr(t.writeTree,t.treePath,e,n)}function Gr(t,e){return Kr(ge(t.treePath,e),t.writeTree)}function Kr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(i["e"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(i["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const a=r.type;if("child_added"===e&&"child_removed"===a)this.changeMap.set(n,An(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===a)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===a)this.changeMap.set(n,Cn(n,r.oldSnap));else if("child_changed"===e&&"child_added"===a)this.changeMap.set(n,_n(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==a)throw Object(i["f"])("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,An(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Jr=new Xr;class Qr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hr(this.viewCache_),a=Ur(this.writes_,r,e,1,n,t);return 0===a.length?null:a[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){return{filter:t}}function ta(t,e){Object(i["e"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(i["e"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ea(t,e,n,r,a){const o=new Yr;let c,s;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?c=ia(t,e,l.path,l.snap,r,a,o):(Object(i["e"])(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),c=aa(t,e,l.path,l.snap,r,a,s,o))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?c=ca(t,e,l.path,l.children,r,a,o):(Object(i["e"])(l.source.fromServer,"Unknown source."),s=l.source.tagged||e.serverCache.isFiltered(),c=la(t,e,l.path,l.children,r,a,s,o))}else if(n.type===Gn.ACK_USER_WRITE){const i=n;c=i.revert?da(t,e,i.path,r,a,o):ua(t,e,i.path,i.affectedTree,r,a,o)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(i["f"])("Unknown operation type: "+n.type);c=ha(t,e,n.path,r,o)}const l=o.getChanges();return na(e,c,l),{viewCache:c,changes:l}}function na(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const a=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ur(t);(n.length>0||!t.eventCache.isFullyInitialized()||a&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Mn(ur(e)))}}function ra(t,e,n,r,a,o){const c=e.eventCache;if(null!=qr(r,n))return e;{let s,l;if(ye(n))if(Object(i["e"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=hr(e),a=n instanceof vn?n:vn.EMPTY_NODE,i=$r(r,a);s=t.filter.updateFullNode(e.eventCache.getNode(),i,o)}else{const n=Rr(r,hr(e));s=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const u=he(n);if(".priority"===u){Object(i["e"])(1===de(n),"Can't have a priority with additional path components");const a=c.getNode();l=e.serverCache.getNode();const o=Nr(r,n,a,l);s=null!=o?t.filter.updatePriority(a,o):c.getNode()}else{const i=fe(n);let h;if(c.isCompleteForChild(u)){l=e.serverCache.getNode();const t=Nr(r,n,c.getNode(),l);h=null!=t?c.getNode().getImmediateChild(u).updateChild(i,t):c.getNode().getImmediateChild(u)}else h=Wr(r,u,e.serverCache);s=null!=h?t.filter.updateChild(c.getNode(),u,h,i,a,o):c.getNode()}}return sr(e,s,c.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function aa(t,e,n,r,a,i,o,c){const s=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(s.getNode(),r,null);else if(u.filtersNodes()&&!s.isFiltered()){const t=s.getNode().updateChild(n,r);l=u.updateFullNode(s.getNode(),t,null)}else{const t=he(n);if(!s.isCompleteForPath(n)&&de(n)>1)return e;const a=fe(n),i=s.getNode().getImmediateChild(t),o=i.updateChild(a,r);l=".priority"===t?u.updatePriority(s.getNode(),o):u.updateChild(s.getNode(),t,o,a,Jr,null)}const h=lr(e,l,s.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Qr(a,h,i);return ra(t,h,n,a,d,c)}function ia(t,e,n,r,a,i,o){const c=e.eventCache;let s,l;const u=new Qr(a,e,i);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),s=sr(e,l,!0,t.filter.filtersNodes());else{const a=he(n);if(".priority"===a)l=t.filter.updatePriority(e.eventCache.getNode(),r),s=sr(e,l,c.isFullyInitialized(),c.isFiltered());else{const i=fe(n),l=c.getNode().getImmediateChild(a);let h;if(ye(i))h=r;else{const t=u.getCompleteChild(a);h=null!=t?".priority"===pe(i)&&t.getChild(be(i)).isEmpty()?t:t.updateChild(i,r):vn.EMPTY_NODE}if(l.equals(h))s=e;else{const n=t.filter.updateChild(c.getNode(),a,h,i,u,o);s=sr(e,n,c.isFullyInitialized(),t.filter.filtersNodes())}}}return s}function oa(t,e){return t.eventCache.isCompleteForChild(e)}function ca(t,e,n,r,a,i,o){let c=e;return r.foreach((r,s)=>{const l=ge(n,r);oa(e,he(l))&&(c=ia(t,c,l,s,a,i,o))}),r.foreach((r,s)=>{const l=ge(n,r);oa(e,he(l))||(c=ia(t,c,l,s,a,i,o))}),c}function sa(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function la(t,e,n,r,a,i,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let s,l=e;s=ye(n)?r:new pr(null).setTree(n,r);const u=e.serverCache.getNode();return s.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const s=e.serverCache.getNode().getImmediateChild(n),u=sa(t,s,r);l=aa(t,l,new le(n),u,a,i,o,c)}}),s.children.inorderTraversal((n,r)=>{const s=!e.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!s){const s=e.serverCache.getNode().getImmediateChild(n),u=sa(t,s,r);l=aa(t,l,new le(n),u,a,i,o,c)}}),l}function ua(t,e,n,r,a,i,o){if(null!=qr(a,n))return e;const c=e.serverCache.isFiltered(),s=e.serverCache;if(null!=r.value){if(ye(n)&&s.isFullyInitialized()||s.isCompleteForPath(n))return aa(t,e,n,s.getNode().getChild(n),a,i,c,o);if(ye(n)){let r=new pr(null);return s.getNode().forEachChild($e,(t,e)=>{r=r.set(new le(t),e)}),la(t,e,n,r,a,i,c,o)}return e}{let l=new pr(null);return r.foreach((t,e)=>{const r=ge(n,t);s.isCompleteForPath(r)&&(l=l.set(t,s.getNode().getChild(r)))}),la(t,e,n,l,a,i,c,o)}}function ha(t,e,n,r,a){const i=e.serverCache,o=lr(e,i.getNode(),i.isFullyInitialized()||ye(n),i.isFiltered());return ra(t,o,n,r,Jr,a)}function da(t,e,n,r,a,o){let c;if(null!=qr(r,n))return e;{const s=new Qr(r,e,a),l=e.eventCache.getNode();let u;if(ye(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=Rr(r,hr(e));else{const t=e.serverCache.getNode();Object(i["e"])(t instanceof vn,"serverChildren would be complete if leaf node"),n=$r(r,t)}n=n,u=t.filter.updateFullNode(l,n,o)}else{const a=he(n);let i=Wr(r,a,e.serverCache);null==i&&e.serverCache.isCompleteForChild(a)&&(i=l.getImmediateChild(a)),u=null!=i?t.filter.updateChild(l,a,i,fe(n),s,o):e.eventCache.getNode().hasChild(a)?t.filter.updateChild(l,a,vn.EMPTY_NODE,fe(n),s,o):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Rr(r,hr(e)),c.isLeafNode()&&(u=t.filter.updateFullNode(u,c,o)))}return c=e.serverCache.isFullyInitialized()||null!=qr(r,ue()),sr(e,u,c,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new In(n.getIndex()),a=Pn(n);this.processor_=Zr(a);const i=e.serverCache,o=e.eventCache,c=r.updateFullNode(vn.EMPTY_NODE,i.getNode(),null),s=a.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),l=new er(c,i.isFullyInitialized(),r.filtersNodes()),u=new er(s,o.isFullyInitialized(),a.filtersNodes());this.viewCache_=cr(u,l),this.eventGenerator_=new nr(this.query_)}get query(){return this.query_}}function pa(t){return t.viewCache_.serverCache.getNode()}function va(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function ma(t){return 0===t.eventRegistrations_.length}function ba(t,e){t.eventRegistrations_.push(e)}function ga(t,e,n){const r=[];if(n){Object(i["e"])(null==e,"A cancel should cancel all event registrations.");const a=t.query._path;t.eventRegistrations_.forEach(t=>{const e=t.createCancelEvent(n,a);e&&r.push(e)})}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const a=t.eventRegistrations_[r];if(a.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(a)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function ya(t,e,n,r){e.type===Gn.MERGE&&null!==e.source.queryId&&(Object(i["e"])(hr(t.viewCache_),"We should always have a full cache before handling merges"),Object(i["e"])(ur(t.viewCache_),"Missing event cache, even though we have a server cache"));const a=t.viewCache_,o=ea(t.processor_,a,e,n,r);return ta(t.processor_,o.viewCache),Object(i["e"])(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,za(t,o.changes,o.viewCache.eventCache.getNode(),null)}function Oa(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(cn,(t,e)=>{r.push(_n(t,e))})}return n.isFullyInitialized()&&r.push(Mn(n.getNode())),za(t,r,n.getNode(),e)}function za(t,e,n,r){const a=r?[r]:t.eventRegistrations_;return rr(t.eventGenerator_,e,n,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja,wa;class Ma{constructor(){this.views=new Map}}function _a(t){Object(i["e"])(!ja,"__referenceConstructor has already been defined"),ja=t}function Ca(){return Object(i["e"])(ja,"Reference.ts has not been loaded"),ja}function Aa(t){return 0===t.views.size}function Va(t,e,n,r){const a=e.source.queryId;if(null!==a){const o=t.views.get(a);return Object(i["e"])(null!=o,"SyncTree gave us an op for an invalid query."),ya(o,e,n,r)}{let a=[];for(const i of t.views.values())a=a.concat(ya(i,e,n,r));return a}}function Ia(t,e,n,r,a){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let t=Rr(n,a?r:null),i=!1;t?i=!0:r instanceof vn?(t=$r(n,r),i=!1):(t=vn.EMPTY_NODE,i=!1);const o=cr(new er(t,i,!1),new er(r,a,!1));return new fa(e,o)}return o}function ka(t,e,n,r,a,i){const o=Ia(t,e,r,a,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ba(o,n),Oa(o,n)}function Ha(t,e,n,r){const a=e._queryIdentifier,i=[];let o=[];const c=Ba(t);if("default"===a)for(const[s,l]of t.views.entries())o=o.concat(ga(l,n,r)),ma(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query));else{const e=t.views.get(a);e&&(o=o.concat(ga(e,n,r)),ma(e)&&(t.views.delete(a),e.query._queryParams.loadsAllData()||i.push(e.query)))}return c&&!Ba(t)&&i.push(new(Ca())(e._repo,e._path)),{removed:i,events:o}}function Sa(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pa(t,e){let n=null;for(const r of t.views.values())n=n||va(r,e);return n}function Ta(t,e){const n=e._queryParams;if(n.loadsAllData())return xa(t);{const n=e._queryIdentifier;return t.views.get(n)}}function La(t,e){return null!=Ta(t,e)}function Ba(t){return null!=xa(t)}function xa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){Object(i["e"])(!wa,"__referenceConstructor has already been defined"),wa=t}function Ea(){return Object(i["e"])(wa,"Reference.ts has not been loaded"),wa}let Da=1;class Ra{constructor(t){this.listenProvider_=t,this.syncPointTree_=new pr(null),this.pendingWriteTree_=Dr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $a(t,e,n,r,a){return Ar(t.pendingWriteTree_,e,n,r,a),a?Za(t,new Zn(Kn(),e,n)):[]}function Na(t,e,n=!1){const r=Vr(t.pendingWriteTree_,e),a=Ir(t.pendingWriteTree_,e);if(a){let e=new pr(null);return null!=r.snap?e=e.set(ue(),!0):F(r.children,t=>{e=e.set(new le(t),!0)}),Za(t,new Jn(r.path,e,n))}return[]}function qa(t,e,n){return Za(t,new Zn(Yn(),e,n))}function Ua(t,e,n){const r=pr.fromObject(n);return Za(t,new tr(Yn(),e,r))}function Wa(t,e){return Za(t,new Qn(Yn(),e))}function Ga(t,e,n){const r=ii(t,n);if(r){const n=oi(r),a=n.path,i=n.queryId,o=Oe(a,e),c=new Qn(Xn(i),o);return ci(t,a,c)}return[]}function Ka(t,e,n,r){const a=e._path,i=t.syncPointTree_.get(a);let o=[];if(i&&("default"===e._queryIdentifier||La(i,e))){const c=Ha(i,e,n,r);Aa(i)&&(t.syncPointTree_=t.syncPointTree_.remove(a));const s=c.removed;o=c.events;const l=-1!==s.findIndex(t=>t._queryParams.loadsAllData()),u=t.syncPointTree_.findOnPath(a,(t,e)=>Ba(e));if(l&&!u){const e=t.syncPointTree_.subtree(a);if(!e.isEmpty()){const n=si(e);for(let e=0;e<n.length;++e){const r=n[e],a=r.query,i=ni(t,r);t.listenProvider_.startListening(li(a),ri(t,a),i.hashFn,i.onComplete)}}}if(!u&&s.length>0&&!r)if(l){const n=null;t.listenProvider_.stopListening(li(e),n)}else s.forEach(e=>{const n=t.queryToTagMap.get(ai(e));t.listenProvider_.stopListening(li(e),n)});ui(t,s)}return o}function Ya(t,e,n,r){const a=ii(t,r);if(null!=a){const r=oi(a),i=r.path,o=r.queryId,c=Oe(i,e),s=new Zn(Xn(o),c,n);return ci(t,i,s)}return[]}function Xa(t,e,n,r){const a=ii(t,r);if(a){const r=oi(a),i=r.path,o=r.queryId,c=Oe(i,e),s=pr.fromObject(n),l=new tr(Xn(o),c,s);return ci(t,i,l)}return[]}function Ja(t,e,n){const r=e._path;let a=null,o=!1;t.syncPointTree_.foreachOnPath(r,(t,e)=>{const n=Oe(t,r);a=a||Pa(e,n),o=o||Ba(e)});let c,s=t.syncPointTree_.get(r);if(s?(o=o||Ba(s),a=a||Pa(s,ue())):(s=new Ma,t.syncPointTree_=t.syncPointTree_.set(r,s)),null!=a)c=!0;else{c=!1,a=vn.EMPTY_NODE;const e=t.syncPointTree_.subtree(r);e.foreachChild((t,e)=>{const n=Pa(e,ue());n&&(a=a.updateImmediateChild(t,n))})}const l=La(s,e);if(!l&&!e._queryParams.loadsAllData()){const n=ai(e);Object(i["e"])(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=hi();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const u=Cr(t.pendingWriteTree_,r);let h=ka(s,e,n,u,a,c);if(!l&&!o){const n=Ta(s,e);h=h.concat(di(t,e,n))}return h}function Qa(t,e,n){const r=!0,a=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(t,n)=>{const r=Oe(t,e),a=Pa(n,r);if(a)return a});return Tr(a,e,i,n,r)}function Za(t,e){return ti(e,t.syncPointTree_,null,Cr(t.pendingWriteTree_,ue()))}function ti(t,e,n,r){if(ye(t.path))return ei(t,e,n,r);{const a=e.get(ue());null==n&&null!=a&&(n=Pa(a,ue()));let i=[];const o=he(t.path),c=t.operationForChild(o),s=e.children.get(o);if(s&&c){const t=n?n.getImmediateChild(o):null,e=Gr(r,o);i=i.concat(ti(c,s,t,e))}return a&&(i=i.concat(Va(a,t,r,n))),i}}function ei(t,e,n,r){const a=e.get(ue());null==n&&null!=a&&(n=Pa(a,ue()));let i=[];return e.children.inorderTraversal((e,a)=>{const o=n?n.getImmediateChild(e):null,c=Gr(r,e),s=t.operationForChild(e);s&&(i=i.concat(ei(s,a,o,c)))}),a&&(i=i.concat(Va(a,t,r,n))),i}function ni(t,e){const n=e.query,r=ri(t,n);return{hashFn:()=>{const t=pa(e)||vn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Ga(t,n._path,r):Wa(t,n._path);{const r=$(e,n);return Ka(t,n,null,r)}}}}function ri(t,e){const n=ai(e);return t.queryToTagMap.get(n)}function ai(t){return t._path.toString()+"$"+t._queryIdentifier}function ii(t,e){return t.tagToQueryMap.get(e)}function oi(t){const e=t.indexOf("$");return Object(i["e"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function ci(t,e,n){const r=t.syncPointTree_.get(e);Object(i["e"])(r,"Missing sync point for query tag that we're tracking");const a=Cr(t.pendingWriteTree_,e);return Va(r,n,a,null)}function si(t){return t.fold((t,e,n)=>{if(e&&Ba(e)){const t=xa(e);return[t]}{let t=[];return e&&(t=Sa(e)),F(n,(e,n)=>{t=t.concat(n)}),t}})}function li(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ea())(t._repo,t._path):t}function ui(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=ai(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function hi(){return Da++}function di(t,e,n){const r=e._path,a=ri(t,e),o=ni(t,n),c=t.listenProvider_.startListening(li(e),a,o.hashFn,o.onComplete),s=t.syncPointTree_.subtree(r);if(a)Object(i["e"])(!Ba(s.value),"If we're adding a query, it shouldn't be shadowed");else{const e=s.fold((t,e,n)=>{if(!ye(t)&&e&&Ba(e))return[xa(e).query];{let t=[];return e&&(t=t.concat(Sa(e).map(t=>t.query))),F(n,(e,n)=>{t=t.concat(n)}),t}});for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(li(r),ri(t,r))}}return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new fi(e)}node(){return this.node_}}class pi{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ge(this.path_,t);return new pi(this.syncTree_,e)}node(){return Qa(this.syncTree_,this.path_)}}const vi=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},mi=function(t,e,n){return t&&"object"===typeof t?(Object(i["e"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?bi(t[".sv"],e,n):"object"===typeof t[".sv"]?gi(t[".sv"],e):void Object(i["e"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},bi=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(i["e"])(!1,"Unexpected server value: "+t)}},gi=function(t,e,n){t.hasOwnProperty("increment")||Object(i["e"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&Object(i["e"])(!1,"Unexpected increment value: "+r);const a=e.node();if(Object(i["e"])(null!==a&&"undefined"!==typeof a,"Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return r;const o=a,c=o.getValue();return"number"!==typeof c?r:c+r},yi=function(t,e,n,r){return zi(e,new pi(n,t),r)},Oi=function(t,e,n){return zi(t,new fi(e),n)};function zi(t,e,n){const r=t.getPriority().val(),a=mi(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const r=t,i=mi(r.getValue(),e,n);return i!==r.getValue()||a!==r.getPriority().val()?new nn(i,yn(a)):t}{const r=t;return i=r,a!==r.getPriority().val()&&(i=i.updatePriority(new nn(a))),r.forEachChild(cn,(t,r)=>{const a=zi(r,e.getImmediateChild(t),n);a!==r&&(i=i.updateImmediateChild(t,a))}),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function wi(t,e){let n=e instanceof le?e:new le(e),r=t,a=he(n);while(null!==a){const t=Object(i["E"])(r.node.children,a)||{children:{},childCount:0};r=new ji(a,r,t),n=fe(n),a=he(n)}return r}function Mi(t){return t.node.value}function _i(t,e){t.node.value=e,Si(t)}function Ci(t){return t.node.childCount>0}function Ai(t){return void 0===Mi(t)&&!Ci(t)}function Vi(t,e){F(t.node.children,(n,r)=>{e(new ji(n,t,r))})}function Ii(t,e,n,r){n&&!r&&e(t),Vi(t,t=>{Ii(t,e,!0,r)}),n&&r&&e(t)}function ki(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function Hi(t){return new le(null===t.parent?t.name:Hi(t.parent)+"/"+t.name)}function Si(t){null!==t.parent&&Pi(t.parent,t.name,t)}function Pi(t,e,n){const r=Ai(n),a=Object(i["j"])(t.node.children,e);r&&a?(delete t.node.children[e],t.node.childCount--,Si(t)):r||a||(t.node.children[e]=n.node,t.node.childCount++,Si(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=/[\[\].#$\/\u0000-\u001F\u007F]/,Li=/[\[\].#$\u0000-\u001F\u007F]/,Bi=10485760,xi=function(t){return"string"===typeof t&&0!==t.length&&!Ti.test(t)},Fi=function(t){return"string"===typeof t&&0!==t.length&&!Li.test(t)},Ei=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fi(t)},Di=function(t,e,n,r){r&&void 0===e||Ri(Object(i["o"])(t,"value"),e,n)},Ri=function(t,e,n){const r=n instanceof le?new we(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Ae(r));if("function"===typeof e)throw new Error(t+"contains a function "+Ae(r)+" with contents = "+e.toString());if(I(e))throw new Error(t+"contains "+e.toString()+" "+Ae(r));if("string"===typeof e&&e.length>Bi/3&&Object(i["F"])(e)>Bi)throw new Error(t+"contains a string greater than "+Bi+" utf8 bytes "+Ae(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,a=!1;if(F(e,(e,i)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(a=!0,!xi(e)))throw new Error(t+" contains an invalid key ("+e+") "+Ae(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Me(r,e),Ri(t,i,r),_e(r)}),n&&a)throw new Error(t+' contains ".value" child '+Ae(r)+" in addition to actual children.")}},$i=function(t,e,n,r){if((!r||void 0!==n)&&!Fi(n))throw new Error(Object(i["o"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ni=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$i(t,e,n,r)},qi=function(t,e){if(".info"===he(e))throw new Error(t+" failed = Can't modify data under /.info/")},Ui=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!xi(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Ei(n))throw new Error(Object(i["o"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gi(t,e){let n=null;for(let r=0;r<e.length;r++){const a=e[r],i=a.getPath();null===n||ze(i,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:i}),n.events.push(a)}n&&t.eventLists_.push(n)}function Ki(t,e,n){Gi(t,n),Xi(t,t=>ze(t,e))}function Yi(t,e,n){Gi(t,n),Xi(t,t=>je(t,e)||je(e,t))}function Xi(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const a=t.eventLists_[r];if(a){const i=a.path;e(i)?(Ji(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ji(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();O&&w("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="repo_interrupt",Zi=25;class to{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wi,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new ji,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eo(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||K())t.server_=new Bn(t.repoInfo_,(e,n,r,a)=>{ao(t,e,n,r,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>io(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(i["H"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xe(t.repoInfo_,e,(e,n,r,a)=>{ao(t,e,n,r,a)},e=>{io(t,e)},e=>{oo(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=bt(t.repoInfo_,()=>new Wn(t.stats_,t.server_)),t.infoData_=new xn,t.infoSyncTree_=new Ra({startListening:(e,n,r,a)=>{let i=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(i=qa(t.infoSyncTree_,e._path,o),setTimeout(()=>{a("ok")},0)),i},stopListening:()=>{}}),co(t,"connected",!1),t.serverSyncTree_=new Ra({startListening:(e,n,r,a)=>(t.server_.listen(e,r,n,(n,r)=>{const i=a(n,r);Yi(t.eventQueue_,e._path,i)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function no(t){const e=t.infoData_.getNode(new le(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function ro(t){return vi({timestamp:no(t)})}function ao(t,e,n,r,a){t.dataUpdateCount++;const o=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let c=[];if(a)if(r){const e=Object(i["B"])(n,t=>yn(t));c=Xa(t.serverSyncTree_,o,e,a)}else{const e=yn(n);c=Ya(t.serverSyncTree_,o,e,a)}else if(r){const e=Object(i["B"])(n,t=>yn(t));c=Ua(t.serverSyncTree_,o,e)}else{const e=yn(n);c=qa(t.serverSyncTree_,o,e)}let s=o;c.length>0&&(s=Oo(t,o)),Yi(t.eventQueue_,s,c)}function io(t,e){co(t,"connected",e),!1===e&&uo(t)}function oo(t,e){F(e,(e,n)=>{co(t,e,n)})}function co(t,e,n){const r=new le("/.info/"+e),a=yn(n);t.infoData_.updateSnapshot(r,a);const i=qa(t.infoSyncTree_,r,a);Yi(t.eventQueue_,r,i)}function so(t){return t.nextWriteId_++}function lo(t,e,n,r,a){vo(t,"set",{path:e.toString(),value:n,priority:r});const i=ro(t),o=yn(n,r),c=Qa(t.serverSyncTree_,e),s=Oi(o,c,i),l=so(t),u=$a(t.serverSyncTree_,e,s,l,!0);Gi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(n,r)=>{const i="ok"===n;i||A("set at "+e+" failed: "+n);const o=Na(t.serverSyncTree_,l,!i);Yi(t.eventQueue_,e,o),mo(t,a,n,r)});const h=Co(t,e);Oo(t,h),Yi(t.eventQueue_,h,[])}function uo(t){vo(t,"onDisconnectEvents");const e=ro(t),n=Fn();Dn(t.onDisconnect_,ue(),(r,a)=>{const i=yi(r,a,t.serverSyncTree_,e);En(n,r,i)});let r=[];Dn(n,ue(),(e,n)=>{r=r.concat(qa(t.serverSyncTree_,e,n));const a=Co(t,e);Oo(t,a)}),t.onDisconnect_=Fn(),Yi(t.eventQueue_,ue(),r)}function ho(t,e,n){let r;r=".info"===he(e._path)?Ja(t.infoSyncTree_,e,n):Ja(t.serverSyncTree_,e,n),Ki(t.eventQueue_,e._path,r)}function fo(t,e,n){let r;r=".info"===he(e._path)?Ka(t.infoSyncTree_,e,n):Ka(t.serverSyncTree_,e,n),Ki(t.eventQueue_,e._path,r)}function po(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Qi)}function vo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),w(n,...e)}function mo(t,e,n,r){e&&G(()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let a=t;r&&(a+=": "+r);const i=new Error(a);i.code=t,e(i)}})}function bo(t,e,n){return Qa(t.serverSyncTree_,e,n)||vn.EMPTY_NODE}function go(t,e=t.transactionQueueTree_){if(e||_o(t,e),Mi(e)){const n=wo(t,e);Object(i["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(t=>0===t.status);r&&yo(t,Hi(e),n)}else Ci(e)&&Vi(e,e=>{go(t,e)})}function yo(t,e,n){const r=n.map(t=>t.currentWriteId),a=bo(t,e,r);let o=a;const c=a.hash();for(let u=0;u<n.length;u++){const t=n[u];Object(i["e"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=Oe(e,t.path);o=o.updateChild(r,t.currentOutputSnapshotRaw)}const s=o.val(!0),l=e;t.server_.put(l.toString(),s,r=>{vo(t,"transaction put response",{path:l.toString(),status:r});let a=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,a=a.concat(Na(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();_o(t,wi(t.transactionQueueTree_,e)),go(t,t.transactionQueueTree_),Yi(t.eventQueue_,e,a);for(let t=0;t<r.length;t++)G(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{A("transaction at "+l.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}Oo(t,e)}},c)}function Oo(t,e){const n=jo(t,e),r=Hi(n),a=wo(t,n);return zo(t,a,r),r}function zo(t,e,n){if(0===e.length)return;const r=[];let a=[];const o=e.filter(t=>0===t.status),c=o.map(t=>t.currentWriteId);for(let s=0;s<e.length;s++){const o=e[s],l=Oe(n,o.path);let u,h=!1;if(Object(i["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,a=a.concat(Na(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Zi)h=!0,u="maxretry",a=a.concat(Na(t.serverSyncTree_,o.currentWriteId,!0));else{const n=bo(t,o.path,c);o.currentInputSnapshot=n;const r=e[s].update(n.val());if(void 0!==r){Ri("transaction failed: Data returned ",r,o.path);let e=yn(r);const s="object"===typeof r&&null!=r&&Object(i["j"])(r,".priority");s||(e=e.updatePriority(n.getPriority()));const l=o.currentWriteId,u=ro(t),h=Oi(e,n,u);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=h,o.currentWriteId=so(t),c.splice(c.indexOf(l),1),a=a.concat($a(t.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),a=a.concat(Na(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",a=a.concat(Na(t.serverSyncTree_,o.currentWriteId,!0))}Yi(t.eventQueue_,n,a),a=[],h&&(e[s].status=2,function(t){setTimeout(t,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&("nodata"===u?r.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):r.push(()=>e[s].onComplete(new Error(u),!1,null))))}_o(t,t.transactionQueueTree_);for(let i=0;i<r.length;i++)G(r[i]);go(t,t.transactionQueueTree_)}function jo(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===Mi(r))r=wi(r,n),e=fe(e),n=he(e);return r}function wo(t,e){const n=[];return Mo(t,e,n),n.sort((t,e)=>t.order-e.order),n}function Mo(t,e,n){const r=Mi(e);if(r)for(let a=0;a<r.length;a++)n.push(r[a]);Vi(e,e=>{Mo(t,e,n)})}function _o(t,e){const n=Mi(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,_i(e,n.length>0?n:void 0)}Vi(e,e=>{_o(t,e)})}function Co(t,e){const n=Hi(jo(t,e)),r=wi(t.transactionQueueTree_,e);return ki(r,e=>{Ao(t,e)}),Ao(t,r),Ii(r,e=>{Ao(t,e)}),n}function Ao(t,e){const n=Mi(e);if(n){const r=[];let a=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(i["e"])(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):(Object(i["e"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),a=a.concat(Na(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?_i(e,void 0):n.length=o+1,Yi(t.eventQueue_,Hi(e),a);for(let t=0;t<r.length;t++)G(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){let e="";const n=t.split("/");for(let a=0;a<n.length;a++)if(n[a].length>0){let t=n[a];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function Io(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):A(`Invalid query segment '${n}' in query '${t}'`)}return e}const ko=function(t,e){const n=Ho(t),r=n.namespace;"firebase.com"===n.domain&&C(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||C("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||V();const a="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,e,a,"",r!==n.subdomain),path:new le(n.pathString)}},Ho=function(t){let e="",n="",r="",a="",i="",o=!0,c="https",s=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(c=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(a=Vo(t.substring(u,h)));const d=Io(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o="https"===c||"wss"===c,s=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),i=r}"ns"in d&&(i=d["ns"])}return{host:e,port:s,domain:n,subdomain:r,secure:o,scheme:c,pathString:a,namespace:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(i["H"])(this.snapshot.exportVal())}}class Po{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return Object(i["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ye(this._path)?null:pe(this._path)}get ref(){return new Bo(this._repo,this._path)}get _queryIdentifier(){const t=Ln(this._queryParams),e=B(t);return"{}"===e?"default":e}get _queryObject(){return Ln(this._queryParams)}isEqual(t){if(t=Object(i["q"])(t),!(t instanceof Lo))return!1;const e=this._repo===t._repo,n=ze(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ve(this._path)}}class Bo extends Lo{constructor(t,e){super(t,e,new Sn,!1)}get parent(){const t=be(this._path);return null===t?null:new Bo(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class xo{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new le(t),n=Eo(this.ref,t);return new xo(this._node.getChild(e),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new xo(n,Eo(this.ref,e),cn)))}hasChild(t){const e=new le(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fo(t,e){return t=Object(i["q"])(t),t._checkNotDeleted("ref"),void 0!==e?Eo(t._root,e):t._root}function Eo(t,e){return t=Object(i["q"])(t),null===he(t._path)?Ni("child","path",e,!1):$i("child","path",e,!1),new Bo(t._repo,ge(t._path,e))}function Do(t,e){t=Object(i["q"])(t),qi("set",t._path),Di("set",e,t._path,!1);const n=new i["a"];return lo(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ro{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new So("value",this,new xo(t.snapshotNode,new Bo(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Po(this,t,e):null}matches(t){return t instanceof Ro&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class $o{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Po(this,t,e):null}createEvent(t,e){Object(i["e"])(null!=t.childName,"Child events should have a childName.");const n=Eo(new Bo(e._repo,e._path),t.childName),r=e._queryParams.getIndex();return new So(t.type,this,new xo(t.snapshotNode,n,r),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof $o&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function No(t,e,n,r,a){let i;if("object"===typeof r&&(i=void 0,a=r),"function"===typeof r&&(i=r),a&&a.onlyOnce){const e=n,r=(n,r)=>{fo(t._repo,t,c),e(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new To(n,i||void 0),c="value"===e?new Ro(o):new $o(e,o);return ho(t._repo,t,c),()=>fo(t._repo,t,c)}function qo(t,e,n,r){return No(t,"value",e,n,r)}_a(Bo),Fa(Bo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uo="FIREBASE_DATABASE_EMULATOR_HOST",Wo={};let Go=!1;function Ko(e,n,r,a,i){let o=a||e.options.databaseURL;void 0===o&&(e.options.projectId||C("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),w("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");let c,s=ko(o,i),l=s.repoInfo,u=void 0;"undefined"!==typeof t&&(u=Object({NODE_ENV:"production",BASE_URL:"/bianco/"})[Uo]),u?(c=!0,o=`http://${u}?ns=${l.namespace}`,s=ko(o,i),l=s.repoInfo):c=!s.repoInfo.secure;const h=i&&c?new Q(Q.OWNER):new J(e.name,e.options,n);Ui("Invalid Firebase Database URL",s),ye(s.path)||C("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Xo(l,e,h,new X(e.name,r));return new Jo(d,e)}function Yo(t,e){const n=Wo[e];n&&n[t.key]===t||C(`Database ${e}(${t.repoInfo_}) has already been deleted.`),po(t),delete n[t.key]}function Xo(t,e,n,r){let a=Wo[e.name];a||(a={},Wo[e.name]=a);let i=a[t.toURLString()];return i&&C("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new to(t,Go,n,r),a[t.toURLString()]=i,i}class Jo{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bo(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Yo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&C("Cannot call "+t+" on a deleted database.")}}function Qo(t=Object(r["d"])(),e){return Object(r["b"])(t,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(t){u(r["a"]),Object(r["c"])(new a["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),a=t.getProvider("app-check-internal");return Ko(n,r,a,e)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(c,s,t),Object(r["f"])(c,s,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},xe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zo()}).call(this,n("4362"))},"51d2":function(t,e,n){"use strict";var r=n("0368"),a=n("a714"),i=n("f14a"),o=n("a5b6"),c=n("0e17"),s=n("ebca"),l=n("774c"),u=Object.assign,h=Object.defineProperty;t.exports=!u||a((function(){if(r&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||i(u({},e)).join("")!=a}))?function(t,e){var n=s(t),a=arguments.length,u=1,h=o.f,d=c.f;while(a>u){var f,p=l(arguments[u++]),v=h?i(p).concat(h(p)):i(p),m=v.length,b=0;while(m>b)f=v[b++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:u},"562f":function(t,e){t.exports="object"==typeof window},5692:function(t,e,n){var r=n("c430"),a=n("c6cd");(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),a=n("241c"),i=n("7418"),o=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return $})),n.d(e,"c",(function(){return R})),n.d(e,"d",(function(){return K})),n.d(e,"e",(function(){return G})),n.d(e,"f",(function(){return Y}));var r=n("22e5"),a=n("e691"),i=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const s="@firebase/app",l="0.7.15",u=new a["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",g="@firebase/database",y="@firebase/database-compat",O="@firebase/functions",z="@firebase/functions-compat",j="@firebase/installations",w="@firebase/installations-compat",M="@firebase/messaging",_="@firebase/messaging-compat",C="@firebase/performance",A="@firebase/performance-compat",V="@firebase/remote-config",I="@firebase/remote-config-compat",k="@firebase/storage",H="@firebase/storage-compat",S="@firebase/firestore",P="@firebase/firestore-compat",T="firebase",L="9.6.5",B="[DEFAULT]",x={[s]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[g]:"fire-rtdb",[y]:"fire-rtdb-compat",[O]:"fire-fn",[z]:"fire-fn-compat",[j]:"fire-iid",[w]:"fire-iid-compat",[M]:"fire-fcm",[_]:"fire-fcm-compat",[C]:"fire-perf",[A]:"fire-perf-compat",[V]:"fire-rc",[I]:"fire-rc-compat",[k]:"fire-gcs",[H]:"fire-gcs-compat",[S]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[T]:"fire-js-all"},F=new Map,E=new Map;function D(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function R(t){const e=t.name;if(E.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;E.set(e,t);for(const n of F.values())D(n,t);return!0}function $(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},q=new i["b"]("app","Firebase",N);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=L;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:B,automaticDataCollectionEnabled:!1},e),a=n.name;if("string"!==typeof a||!a)throw q.create("bad-app-name",{appName:String(a)});const o=F.get(a);if(o){if(Object(i["n"])(t,o.options)&&Object(i["n"])(n,o.config))return o;throw q.create("duplicate-app",{appName:a})}const c=new r["b"](a);for(const r of E.values())c.addComponent(r);const s=new U(t,n,c);return F.set(a,s),s}function K(t=B){const e=F.get(t);if(!e)throw q.create("no-app",{appName:t});return e}function Y(t,e,n){var a;let i=null!==(a=x[t])&&void 0!==a?a:t;n&&(i+="-"+n);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&t.push("and"),c&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}R(new r["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.2.2
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"761e":function(t,e,n){"use strict";var r=n("90c5"),a=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new a(t)}},"76af":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"774c":function(t,e,n){var r=n("a714"),a=n("d714"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i.call(t,""):Object(t)}:Object},"77da":function(t,e,n){var r=n("4c07").f,a=n("7f34"),i=n("8b0e"),o=i("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},7820:function(t,e,n){var r=n("6117"),a=n("d714"),i=n("8b0e"),o=i("toStringTag"),c="Arguments"==a(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=r?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:c?a(e):"Object"==(r=a(e))&&"function"==typeof e.callee?"Arguments":r}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),a=r("span").classList,i=a&&a.constructor&&a.constructor.prototype;t.exports=i===Object.prototype?void 0:i},"793f":function(t,e,n){"use strict";var r=n("0ee6"),a=n("4c07"),i=n("8b0e"),o=n("0368"),c=i("species");t.exports=function(t){var e=r(t),n=a.f;o&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},"79ae":function(t,e,n){var r=n("09e4");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7b1e":function(t,e,n){"use strict";n.d(e,"o",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"p",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return z})),n.d(e,"m",(function(){return j})),n.d(e,"l",(function(){return w}));var r=n("992e"),a=n("ca88");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var o=function(t){return i(t)},c=function(t){return Object.prototype.toString.call(t).slice(8,-1)},s=function(t){return void 0===t},l=function(t){return null===t},u=function(t){return s(t)||l(t)},h=function(t){return"function"===o(t)},d=function(t){return"boolean"===o(t)},f=function(t){return"string"===o(t)},p=function(t){return"number"===o(t)},v=function(t){return r["s"].test(String(t))},m=function(t){return Array.isArray(t)},b=function(t){return null!==t&&"object"===i(t)},g=function(t){return"[object Object]"===Object.prototype.toString.call(t)},y=function(t){return t instanceof Date},O=function(t){return t instanceof Event},z=function(t){return t instanceof a["b"]},j=function(t){return"RegExp"===c(t)},w=function(t){return!u(t)&&h(t.then)&&h(t.catch)}},"7c73":function(t,e,n){var r,a=n("825a"),i=n("37e8"),o=n("7839"),c=n("d012"),s=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",v=u("IE_PROTO"),m=function(){},b=function(t){return d+p+h+t+d+"/"+p+h},g=function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",s.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},O=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}O="undefined"!=typeof document?document.domain&&r?g(r):y():g(r);var t=o.length;while(t--)delete O[f][o[t]];return O()};c[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=a(t),n=new m,m[f]=null,n[v]=t):n=O(),void 0===e?n:i(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),a=n("9ed3"),i=n("e163"),o=n("d2bb"),c=n("d44e"),s=n("9112"),l=n("6eeb"),u=n("b622"),h=n("c430"),d=n("3f8c"),f=n("ae93"),p=f.IteratorPrototype,v=f.BUGGY_SAFARI_ITERATORS,m=u("iterator"),b="keys",g="values",y="entries",O=function(){return this};t.exports=function(t,e,n,u,f,z,j){a(n,e,u);var w,M,_,C=function(t){if(t===f&&H)return H;if(!v&&t in I)return I[t];switch(t){case b:return function(){return new n(this,t)};case g:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",V=!1,I=t.prototype,k=I[m]||I["@@iterator"]||f&&I[f],H=!v&&k||C(f),S="Array"==e&&I.entries||k;if(S&&(w=i(S.call(new t)),w!==Object.prototype&&w.next&&(h||i(w)===p||(o?o(w,p):"function"!=typeof w[m]&&s(w,m,O)),c(w,A,!0,!0),h&&(d[A]=O))),f==g&&k&&k.name!==g&&(V=!0,H=function(){return k.call(this)}),h&&!j||I[m]===H||s(I,m,H),d[e]=H,f)if(M={values:C(g),keys:z?H:C(b),entries:C(y)},j)for(_ in M)(v||V||!(_ in I))&&l(I,_,M[_]);else r({target:e,proto:!0,forced:v||V},M);return M}},"7f34":function(t,e,n){var r=n("ebca"),a={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return a.call(r(t),e)}},"7f9a":function(t,e,n){var r=n("da84"),a=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(a(i))},"808c":function(t,e,n){var r=n("8b0e"),a=r("iterator"),i=!1;try{var o=0,c={next:function(){return{done:!!o++}},return:function(){i=!0}};c[a]=function(){return this},Array.from(c,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[a]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(s){}return n}},"816e":function(t,e,n){var r=n("0828"),a=n("f385"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=a(t))}},8181:function(t,e,n){var r=n("d0c8");t.exports=function(t,e,n){var a,i;r(t);try{if(a=t["return"],void 0===a){if("throw"===e)throw n;return n}a=a.call(t)}catch(o){i=!0,a=o}if("throw"===e)throw n;if(i)throw a;return r(a),n}},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8779:function(t,e,n){var r=n("a714");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8925:function(t,e,n){var r=n("c6cd"),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return a.call(t)}),t.exports=r.inspectSource},"894d":function(t,e,n){var r=n("d0c8"),a=n("90c5"),i=n("8b0e"),o=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[o])?e:a(n)}},"8b0e":function(t,e,n){var r=n("09e4"),a=n("0828"),i=n("7f34"),o=n("f385"),c=n("20a7"),s=n("aa51"),l=a("wks"),u=r.Symbol,h=s?u:u&&u.withoutSetter||o;t.exports=function(t){return i(l,t)&&(c||"string"==typeof l[t])||(c&&i(u,t)?l[t]=u[t]:l[t]=h("Symbol."+t)),l[t]}},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function a(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},c=/%2C/g,s=function(t){return encodeURIComponent(t).replace(i,o).replace(c,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,a=n||d;try{r=a(t||"")}catch(c){r={}}for(var i in e){var o=e[i];r[i]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=l(n.shift()),a=n.length>0?l(n.join("=")):null;void 0===e[r]?e[r]=a:Array.isArray(e[r])?e[r].push(a):e[r]=[e[r],a]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return s(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(s(e)):r.push(s(e)+"="+s(t)))})),r.join("&")}return s(e)+"="+s(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function v(t,e,n,r){var a=r&&r.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(c){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:y(e,a),matched:t?g(t):[]};return n&&(o.redirectedFrom=y(n,a)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var b=v(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var a=t.hash;void 0===a&&(a="");var i=e||f;return(n||"/")+i(r)+a}function O(t,e,n){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&z(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params))))}function z(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,a){var i=t[n],o=r[a];if(o!==n)return!1;var c=e[n];return null==i||null==c?i===c:"object"===typeof i&&"object"===typeof c?z(i,c):String(i)===String(c)}))}function j(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&w(t.query,e.query)}function w(t,e){for(var n in e)if(!(n in t))return!1;return!0}function M(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var a=n.instances[r],i=n.enteredCbs[r];if(a&&i){delete n.enteredCbs[r];for(var o=0;o<i.length;o++)a._isBeingDestroyed||i[o](a)}}}}var _={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,o=e.data;o.routerView=!0;var c=i.$createElement,s=n.name,l=i.$route,u=i._routerViewCache||(i._routerViewCache={}),h=0,d=!1;while(i&&i._routerRoot!==i){var f=i.$vnode?i.$vnode.data:{};f.routerView&&h++,f.keepAlive&&i._directInactive&&i._inactive&&(d=!0),i=i.$parent}if(o.routerViewDepth=h,d){var p=u[s],v=p&&p.component;return v?(p.configProps&&C(v,o,p.route,p.configProps),c(v,o,r)):c()}var m=l.matched[h],b=m&&m.components[s];if(!m||!b)return u[s]=null,c();u[s]={component:b},o.registerRouteInstance=function(t,e){var n=m.instances[s];(e&&n!==t||!e&&n===t)&&(m.instances[s]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[s]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[s]&&(m.instances[s]=t.componentInstance),M(l)};var g=m.props&&m.props[s];return g&&(a(u[s],{route:l,configProps:g}),C(b,o,l,g)),c(b,o,r)}};function C(t,e,n,r){var i=e.props=A(n,r);if(i){i=e.props=a({},i);var o=e.attrs=e.attrs||{};for(var c in i)t.props&&c in t.props||(o[c]=i[c],delete i[c])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function V(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var c=i[o];".."===c?a.pop():"."!==c&&a.push(c)}return""!==a[0]&&a.unshift(""),a.join("/")}function I(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var a=t.indexOf("?");return a>=0&&(n=t.slice(a+1),t=t.slice(0,a)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/\//g,"/")}var H=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},S=J,P=F,T=E,L=$,B=X,x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t,e){var n,r=[],a=0,i=0,o="",c=e&&e.delimiter||"/";while(null!=(n=x.exec(t))){var s=n[0],l=n[1],u=n.index;if(o+=t.slice(i,u),i=u+s.length,l)o+=l[1];else{var h=t[i],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],b=n[7];o&&(r.push(o),o="");var g=null!=d&&null!=h&&h!==d,y="+"===m||"*"===m,O="?"===m||"*"===m,z=n[2]||c,j=p||v;r.push({name:f||a++,prefix:d||"",delimiter:z,optional:O,repeat:y,partial:g,asterisk:!!b,pattern:j?q(j):b?".*":"[^"+N(z)+"]+?"})}}return i<t.length&&(o+=t.substr(i)),o&&r.push(o),r}function E(t,e){return $(F(t,e),e)}function D(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function R(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",W(e)));return function(e,r){for(var a="",i=e||{},o=r||{},c=o.pretty?D:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!==typeof l){var u,h=i[l.name];if(null==h){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(H(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=c(h[d]),!n[s].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");a+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?R(h):c(h),!n[s].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');a+=l.prefix+u}}else a+=l}return a}}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function G(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}function K(t,e,n){for(var r=[],a=0;a<t.length;a++)r.push(J(t[a],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",W(n));return U(i,e)}function Y(t,e,n){return X(F(t,n),e,n)}function X(t,e,n){H(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,a=!1!==n.end,i="",o=0;o<t.length;o++){var c=t[o];if("string"===typeof c)i+=N(c);else{var s=N(c.prefix),l="(?:"+c.pattern+")";e.push(c),c.repeat&&(l+="(?:"+s+l+")*"),l=c.optional?c.partial?s+"("+l+")?":"(?:"+s+"("+l+"))?":s+"("+l+")",i+=l}}var u=N(n.delimiter||"/"),h=i.slice(-u.length)===u;return r||(i=(h?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?"),i+=a?"$":r&&h?"":"(?="+u+"|$)",U(new RegExp("^"+i,W(n)),e)}function J(t,e,n){return H(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?G(t,e):H(t)?K(t,e,n):Y(t,e,n)}S.parse=P,S.compile=T,S.tokensToFunction=L,S.tokensToRegExp=B;var Q=Object.create(null);function Z(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=S.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(a){return""}finally{delete e[0]}}function tt(t,e,n,r){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=a({},t);var o=i.params;return o&&"object"===typeof o&&(i.params=a({},o)),i}if(!i.path&&i.params&&e){i=a({},i),i._normalized=!0;var c=a(a({},e.params),i.params);if(e.name)i.name=e.name,i.params=c;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=Z(s,c,"path "+e.path)}else 0;return i}var l=I(i.path||""),h=e&&e.path||"/",d=l.path?V(l.path,h,n||i.append):h,f=u(l.query,i.query,r&&r.options.parseQuery),p=i.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var et,nt=[String,Object],rt=[String,Array],at=function(){},it={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,c=i.route,s=i.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,b=c.redirectedFrom?v(null,tt(c.redirectedFrom),null,n):c;l[m]=O(r,b,this.exactPath),l[p]=this.exact||this.exactPath?l[m]:j(r,b);var g=l[m]?this.ariaCurrentValue:null,y=function(t){ot(t)&&(e.replace?n.replace(o,at):n.push(o,at))},z={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){z[t]=y})):z[this.event]=y;var w={class:l},M=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:c,navigate:y,isActive:l[p],isExactActive:l[m]});if(M){if(1===M.length)return M[0];if(M.length>1||!M.length)return 0===M.length?t():t("span",{},M)}if("a"===this.tag)w.on=z,w.attrs={href:s,"aria-current":g};else{var _=ct(this.$slots.default);if(_){_.isStatic=!1;var C=_.data=a({},_.data);for(var A in C.on=C.on||{},C.on){var V=C.on[A];A in z&&(C.on[A]=Array.isArray(V)?V:[V])}for(var I in z)I in C.on?C.on[I].push(z[I]):C.on[I]=y;var k=_.data.attrs=a({},_.data.attrs);k.href=s,k["aria-current"]=g}else w.on=z}return t(this.tag,w,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ct(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ct(e.children)))return e}}function st(t){if(!st.installed||et!==t){st.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",_),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var lt="undefined"!==typeof window;function ut(t,e,n,r,a){var i=e||[],o=n||Object.create(null),c=r||Object.create(null);t.forEach((function(t){ht(i,o,c,t,a)}));for(var s=0,l=i.length;s<l;s++)"*"===i[s]&&(i.push(i.splice(s,1)[0]),l--,s--);return{pathList:i,pathMap:o,nameMap:c}}function ht(t,e,n,r,a,i){var o=r.path,c=r.name;var s=r.pathToRegexpOptions||{},l=ft(o,a,s.strict);"boolean"===typeof r.caseSensitive&&(s.sensitive=r.caseSensitive);var u={path:l,regex:dt(l,s),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:c,parent:a,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var a=i?k(i+"/"+r.path):void 0;ht(t,e,n,r,u,a)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ht(t,e,n,p,a,u.path||"/")}c&&(n[c]||(n[c]=u))}function dt(t,e){var n=S(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function pt(t,e){var n=ut(t),r=n.pathList,a=n.pathMap,i=n.nameMap;function o(t){ut(t,r,a,i)}function c(t,e){var n="object"!==typeof t?i[t]:void 0;ut([e||t],r,a,i,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,a,i,n)}function s(){return r.map((function(t){return a[t]}))}function l(t,n,o){var c=tt(t,n,!1,e),s=c.name;if(s){var l=i[s];if(!l)return d(null,c);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof c.params&&(c.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in c.params)&&u.indexOf(h)>-1&&(c.params[h]=n.params[h]);return c.path=Z(l.path,c.params,'named route "'+s+'"'),d(l,c,o)}if(c.path){c.params={};for(var f=0;f<r.length;f++){var p=r[f],v=a[p];if(vt(v.regex,c.path,c.params))return d(v,c,o)}}return d(null,c)}function u(t,n){var r=t.redirect,a="function"===typeof r?r(v(t,n,null,e)):r;if("string"===typeof a&&(a={path:a}),!a||"object"!==typeof a)return d(null,n);var o=a,c=o.name,s=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,c){i[c];return l({_normalized:!0,name:c,query:u,hash:h,params:f},void 0,n)}if(s){var p=mt(s,t),m=Z(p,f,'redirect route with path "'+p+'"');return l({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),a=l({_normalized:!0,path:r});if(a){var i=a.matched,o=i[i.length-1];return e.params=a.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?u(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):v(t,n,r,e)}return{match:l,addRoute:c,getRoutes:s,addRoutes:o}}function vt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var a=1,i=r.length;a<i;++a){var o=t.keys[a-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[a]?l(r[a]):r[a])}return!0}function mt(t,e){return V(t,e.parent?e.parent.path:"/",!0)}var bt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return bt.now().toFixed(3)}var yt=gt();function Ot(){return yt}function zt(t){return yt=t}var jt=Object.create(null);function wt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=a({},window.history.state);return n.key=Ot(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function Mt(t,e,n,r){if(t.app){var a=t.options.scrollBehavior;a&&t.app.$nextTick((function(){var i=At(),o=a.call(t,e,n,r?i:null);o&&("function"===typeof o.then?o.then((function(t){Tt(t,i)})).catch((function(t){0})):Tt(o,i))}))}}function _t(){var t=Ot();t&&(jt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){_t(),t.state&&t.state.key&&zt(t.state.key)}function At(){var t=Ot();if(t)return jt[t]}function Vt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),a=t.getBoundingClientRect();return{x:a.left-r.left-e.x,y:a.top-r.top-e.y}}function It(t){return St(t.x)||St(t.y)}function kt(t){return{x:St(t.x)?t.x:window.pageXOffset,y:St(t.y)?t.y:window.pageYOffset}}function Ht(t){return{x:St(t.x)?t.x:0,y:St(t.y)?t.y:0}}function St(t){return"number"===typeof t}var Pt=/^#\d/;function Tt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var a=t.offset&&"object"===typeof t.offset?t.offset:{};a=Ht(a),e=Vt(r,a)}else It(t)&&(e=kt(t))}else n&&It(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Bt(t,e){_t();var n=window.history;try{if(e){var r=a({},n.state);r.key=Ot(),n.replaceState(r,"",t)}else n.pushState({key:zt(gt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function xt(t){Bt(t,!0)}function Ft(t,e,n){var r=function(a){a>=t.length?n():t[a]?e(t[a],(function(){r(a+1)})):r(a+1)};r(0)}var Et={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return qt(t,e,Et.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Wt(e)+'" via a navigation guard.')}function Rt(t,e){var n=qt(t,e,Et.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function $t(t,e){return qt(t,e,Et.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Nt(t,e){return qt(t,e,Et.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function qt(t,e,n,r){var a=new Error(r);return a._isRouter=!0,a.from=t,a.to=e,a.type=n,a}var Ut=["params","query","hash"];function Wt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ut.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Yt(t){return function(e,n,r){var a=!1,i=0,o=null;Xt(t,(function(t,e,n,c){if("function"===typeof t&&void 0===t.cid){a=!0,i++;var s,l=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[c]=e,i--,i<=0&&r()})),u=te((function(t){var e="Failed to resolve async component "+c+": "+t;o||(o=Gt(t)?t:new Error(e),r(o))}));try{s=t(l,u)}catch(d){u(d)}if(s)if("function"===typeof s.then)s.then(l,u);else{var h=s.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),a||r()}}function Xt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ae(t,e,n,r){var a=Xt(t,(function(t,r,a,i){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,a,i)})):n(o,r,a,i)}));return Jt(r?a.reverse():a)}function ie(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function oe(t){return ae(t,"beforeRouteLeave",se,!0)}function ce(t){return ae(t,"beforeRouteUpdate",se)}function se(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return ae(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,a,i){return t(r,a,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),i(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,a=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var i=this.current;this.confirmTransition(r,(function(){a.updateRoute(r),e&&e(r),a.ensureURL(),a.router.afterHooks.forEach((function(t){t&&t(r,i)})),a.ready||(a.ready=!0,a.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!a.ready&&(Kt(t,Et.redirected)&&i===b||(a.ready=!0,a.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var a=this,i=this.current;this.pending=t;var o=function(t){!Kt(t)&&Gt(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},c=t.matched.length-1,s=i.matched.length-1;if(O(t,i)&&c===s&&t.matched[c]===i.matched[s])return this.ensureURL(),o(Rt(i,t));var l=re(this.current.matched,t.matched),u=l.updated,h=l.deactivated,d=l.activated,f=[].concat(oe(h),this.router.beforeHooks,ce(u),d.map((function(t){return t.beforeEnter})),Yt(d)),p=function(e,n){if(a.pending!==t)return o($t(i,t));try{e(t,i,(function(e){!1===e?(a.ensureURL(!0),o(Nt(i,t))):Gt(e)?(a.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Dt(i,t)),"object"===typeof e&&e.replace?a.replace(e):a.push(e)):n(e)}))}catch(r){o(r)}};Ft(f,p,(function(){var n=le(d),r=n.concat(a.router.resolveHooks);Ft(r,p,(function(){if(a.pending!==t)return o($t(i,t));a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){M(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=b,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=de(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(wt());var a=function(){var n=t.current,a=de(t.base);t.current===b&&a===t._startLocation||t.transitionTo(a,(function(t){r&&Mt(e,t,n,!0)}))};window.addEventListener("popstate",a),this.listeners.push((function(){window.removeEventListener("popstate",a)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){Bt(k(r.base+t.fullPath)),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){xt(k(r.base+t.fullPath)),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(de(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Bt(e):xt(e)}},e.prototype.getCurrentLocation=function(){return de(this.base)},e}(ee);function de(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(k(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||ve()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(wt());var a=function(){var e=t.current;ve()&&t.transitionTo(me(),(function(n){r&&Mt(t.router,n,e,!0),Lt||ye(n.fullPath)}))},i=Lt?"popstate":"hashchange";window.addEventListener(i,a),this.listeners.push((function(){window.removeEventListener(i,a)}))}},e.prototype.push=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){ge(t.fullPath),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){ye(t.fullPath),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(ee);function pe(t){var e=de(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function ve(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function be(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){Lt?Bt(be(t)):window.location.hash=t}function ye(t){Lt?xt(be(t)):window.location.replace(be(t))}var Oe=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Et.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),ze=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new Oe(this,t.base);break;default:0}},je={currentRoute:{configurable:!0}};function we(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Me(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}ze.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},je.currentRoute.get=function(){return this.history&&this.history.current},ze.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof fe){var r=function(t){var r=n.current,a=e.options.scrollBehavior,i=Lt&&a;i&&"fullPath"in t&&Mt(e,t,r,!1)},a=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),a,a)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ze.prototype.beforeEach=function(t){return we(this.beforeHooks,t)},ze.prototype.beforeResolve=function(t){return we(this.resolveHooks,t)},ze.prototype.afterEach=function(t){return we(this.afterHooks,t)},ze.prototype.onReady=function(t,e){this.history.onReady(t,e)},ze.prototype.onError=function(t){this.history.onError(t)},ze.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},ze.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},ze.prototype.go=function(t){this.history.go(t)},ze.prototype.back=function(){this.go(-1)},ze.prototype.forward=function(){this.go(1)},ze.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ze.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),a=this.match(r,e),i=a.redirectedFrom||a.fullPath,o=this.history.base,c=Me(o,i,this.mode);return{location:r,route:a,href:c,normalizedTo:r,resolved:a}},ze.prototype.getRoutes=function(){return this.matcher.getRoutes()},ze.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},ze.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ze.prototype,je),ze.install=st,ze.version="3.5.2",ze.isNavigationFailure=Kt,ze.NavigationFailureType=Et,ze.START_LOCATION=b,lt&&window.Vue&&window.Vue.use(ze),e["a"]=ze},"8d23":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"8f08":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"8fe4":function(t,e,n){var r=n("d0c8"),a=n("bb6e"),i=n("761e");t.exports=function(t,e){if(r(t),a(e)&&e.constructor===t)return e;var n=i.f(t),o=n.resolve;return o(e),n.promise}},"90c5":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),a=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"91c5":function(t,e,n){var r=n("d0c8"),a=n("c35a");t.exports=function(t,e){var n=arguments.length<2?a(t):e;if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return r(n.call(t))}},"938d":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="undefined"!==typeof t&&t?Object({NODE_ENV:"production",BASE_URL:"/bianco/"})||!1:{};return e?r[e]||n:r},a=function(){return r("BOOTSTRAP_VUE_NO_WARN")||"production"===r("NODE_ENV")}}).call(this,n("4362"))},9483:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r,a=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var i=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){a()?(s(t,i,n),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return o(i,t)}))):(c(t,i,n),navigator.serviceWorker.ready.then((function(t){i("ready",t)})).catch((function(t){return o(i,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function c(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function s(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),l()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),l()):c(t,e,n)})).catch((function(t){return o(e,t)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},"94ca":function(t,e,n){var r=n("d039"),a=/#|\.prototype\./,i=function(t,e){var n=c[o(t)];return n==l||n!=s&&("function"==typeof e?r(e):!!e)},o=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new I(r||[]);return i._invoke=_(t,n,o),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function m(){}function b(){}function g(){}var y={};s(y,i,(function(){return this}));var O=Object.getPrototypeOf,z=O&&O(O(k([])));z&&z!==n&&r.call(z,i)&&(y=z);var j=g.prototype=m.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(a,i,o,c){var s=u(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,c)}))}c(s.arg)}var a;function i(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function _(t,e,n){var r=h;return function(a,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw i;return H()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var c=C(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:H}}function H(){return{value:e,done:!0}}return b.prototype=g,s(j,"constructor",g),s(g,"constructor",b),b.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(M.prototype),s(M.prototype,o,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new M(l(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(j),s(j,c,"Generator"),s(j,i,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),V(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;V(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"992e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return s})),n.d(e,"o",(function(){return l})),n.d(e,"p",(function(){return u})),n.d(e,"r",(function(){return h})),n.d(e,"s",(function(){return d})),n.d(e,"t",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"w",(function(){return v})),n.d(e,"x",(function(){return m})),n.d(e,"y",(function(){return b})),n.d(e,"z",(function(){return g})),n.d(e,"C",(function(){return y})),n.d(e,"D",(function(){return O})),n.d(e,"E",(function(){return z})),n.d(e,"F",(function(){return j})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return M})),n.d(e,"B",(function(){return _})),n.d(e,"n",(function(){return C})),n.d(e,"i",(function(){return A})),n.d(e,"j",(function(){return V})),n.d(e,"u",(function(){return I})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return H})),n.d(e,"e",(function(){return S})),n.d(e,"q",(function(){return P})),n.d(e,"A",(function(){return T}));var r=/\[(\d+)]/g,a=/^(BV?)/,i=/^\d+$/,o=/^\..+/,c=/^#/,s=/^#[A-Za-z]+[\w\-:.]*$/,l=/(<([^>]+)>)/gi,u=/\B([A-Z])/g,h=/([a-z])([A-Z])/g,d=/^[0-9]*\.?[0-9]+$/,f=/\+/g,p=/[-/\\^$*+?.()|[\]{}]/g,v=/[\s\uFEFF\xA0]+/g,m=/\s+/,b=/\/\*$/,g=/(\s|^)(\w)/g,y=/^\s+/,O=/\s+$/,z=/_/g,j=/-(\w)/g,w=/^\d+-\d\d?-\d\d?(?:\s|T|$)/,M=/-|\s|T/,_=/^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/,C=/^.*(#[^#]+)$/,A=/%2C/g,V=/[!'()*]/g,I=/^(\?|#|&)/,k=/^\d+(\.\d*)?[/:]\d+(\.\d*)?$/,H=/[/:]/,S=/^col-/,P=/^BIcon/,T=/-u-.+/},"997c":function(t,e,n){var r=n("d0c8"),a=n("ba83");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),a(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},"9aed":function(t,e,n){var r=n("7f34"),a=n("ebca"),i=n("816e"),o=n("8779"),c=i("IE_PROTO"),s=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=a(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},"9bf2":function(t,e,n){var r=n("83ab"),a=n("0cfb"),i=n("825a"),o=n("a04b"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=o(e),i(n),a)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,a=n("7c73"),i=n("5c6c"),o=n("d44e"),c=n("3f8c"),s=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=a(r,{next:i(1,n)}),o(t,l,!1,!0),c[l]=s,t}},a04b:function(t,e,n){var r=n("c04e"),a=n("d9b5");t.exports=function(t){var e=r(t,"string");return a(e)?e:String(e)}},a257:function(t,e,n){var r=n("bb6e");t.exports=function(t,e){var n,a;if("string"===e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},a547:function(t,e,n){var r,a,i,o=n("0d05"),c=n("09e4"),s=n("bb6e"),l=n("3261"),u=n("7f34"),h=n("db8f"),d=n("816e"),f=n("1fc1"),p="Object already initialized",v=c.WeakMap,m=function(t){return i(t)?a(t):r(t,{})},b=function(t){return function(e){var n;if(!s(e)||(n=a(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var g=h.state||(h.state=new v),y=g.get,O=g.has,z=g.set;r=function(t,e){if(O.call(g,t))throw new TypeError(p);return e.facade=t,z.call(g,t,e),e},a=function(t){return y.call(g,t)||{}},i=function(t){return O.call(g,t)}}else{var j=d("state");f[j]=!0,r=function(t,e){if(u(t,j))throw new TypeError(p);return e.facade=t,l(t,j,e),e},a=function(t){return u(t,j)?t[j]:{}},i=function(t){return u(t,j)}}t.exports={set:r,get:a,has:i,enforce:m,getterFor:b}},a580:function(t,e,n){"use strict";var r=n("199f"),a=n("0049"),i=n("9aed"),o=n("997c"),c=n("77da"),s=n("3261"),l=n("7024"),u=n("8b0e"),h=n("0f33"),d=n("ca70"),f=n("65ee"),p=f.IteratorPrototype,v=f.BUGGY_SAFARI_ITERATORS,m=u("iterator"),b="keys",g="values",y="entries",O=function(){return this};t.exports=function(t,e,n,u,f,z,j){a(n,e,u);var w,M,_,C=function(t){if(t===f&&H)return H;if(!v&&t in I)return I[t];switch(t){case b:return function(){return new n(this,t)};case g:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",V=!1,I=t.prototype,k=I[m]||I["@@iterator"]||f&&I[f],H=!v&&k||C(f),S="Array"==e&&I.entries||k;if(S&&(w=i(S.call(new t)),w!==Object.prototype&&w.next&&(h||i(w)===p||(o?o(w,p):"function"!=typeof w[m]&&s(w,m,O)),c(w,A,!0,!0),h&&(d[A]=O))),f==g&&k&&k.name!==g&&(V=!0,H=function(){return k.call(this)}),h&&!j||I[m]===H||s(I,m,H),d[e]=H,f)if(M={values:C(g),keys:z?H:C(b),entries:C(y)},j)for(_ in M)(v||V||!(_ in I))&&l(I,_,M[_]);else r({target:e,proto:!0,forced:v||V},M);return M}},a5b6:function(t,e){e.f=Object.getOwnPropertySymbols},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a714:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},a723:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"l",(function(){return c})),n.d(e,"n",(function(){return s})),n.d(e,"q",(function(){return l})),n.d(e,"t",(function(){return u})),n.d(e,"u",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return y})),n.d(e,"m",(function(){return O})),n.d(e,"p",(function(){return z})),n.d(e,"o",(function(){return j})),n.d(e,"r",(function(){return w})),n.d(e,"s",(function(){return M}));var r=void 0,a=Array,i=Boolean,o=Date,c=Function,s=Number,l=Object,u=RegExp,h=String,d=[a,c],f=[a,l],p=[a,l,h],v=[a,h],m=[i,s],b=[i,s,h],g=[i,h],y=[o,h],O=[c,h],z=[s,h],j=[s,l,h],w=[l,c],M=[l,h]},a84f:function(t,e,n){var r=n("774c"),a=n("76af");t.exports=function(t){return r(a(t))}},a874:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n("992e"),a=n("6c06"),i=n("7b1e"),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e=Object(i["a"])(e)?e.join("."):e,!e||!Object(i["j"])(t))return n;if(e in t)return t[e];e=String(e).replace(r["a"],".$1");var o=e.split(".").filter(a["a"]);return 0===o.length?n:o.every((function(e){return Object(i["j"])(t)&&e in t&&!Object(i["p"])(t=t[e])}))?t:Object(i["g"])(t)?null:n},c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=o(t,e);return Object(i["p"])(r)?n:r}},a8c8:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return l}));var r=Math.min,a=Math.max,i=Math.abs,o=Math.ceil,c=Math.floor,s=Math.pow,l=Math.round},aa0d:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return m}));var r=n("2b0e"),a=n("b42e"),i=n("c637"),o=n("a723"),c=n("6c06"),s=n("7b1e"),l=n("a8c8"),u=n("3a58"),h=n("cf75");function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},p={width:null,height:null,focusable:null,role:null,"aria-label":null},v={animation:Object(h["c"])(o["u"]),content:Object(h["c"])(o["u"]),flipH:Object(h["c"])(o["g"],!1),flipV:Object(h["c"])(o["g"],!1),fontScale:Object(h["c"])(o["p"],1),rotate:Object(h["c"])(o["p"],0),scale:Object(h["c"])(o["p"],1),shiftH:Object(h["c"])(o["p"],0),shiftV:Object(h["c"])(o["p"],0),stacked:Object(h["c"])(o["g"],!1),title:Object(h["c"])(o["u"]),variant:Object(h["c"])(o["u"])},m=r["default"].extend({name:i["nb"],functional:!0,props:v,render:function(t,e){var n,r=e.data,i=e.props,o=e.children,h=i.animation,v=i.content,m=i.flipH,b=i.flipV,g=i.stacked,y=i.title,O=i.variant,z=Object(l["d"])(Object(u["b"])(i.fontScale,1),0)||1,j=Object(l["d"])(Object(u["b"])(i.scale,1),0)||1,w=Object(u["b"])(i.rotate,0),M=Object(u["b"])(i.shiftH,0),_=Object(u["b"])(i.shiftV,0),C=m||b||1!==j,A=C||w,V=M||_,I=!Object(s["p"])(v),k=[A?"translate(8 8)":null,C?"scale(".concat((m?-1:1)*j," ").concat((b?-1:1)*j,")"):null,w?"rotate(".concat(w,")"):null,A?"translate(-8 -8)":null].filter(c["a"]),H=t("g",{attrs:{transform:k.join(" ")||null},domProps:I?{innerHTML:v||""}:{}},o);V&&(H=t("g",{attrs:{transform:"translate(".concat(16*M/16," ").concat(-16*_/16,")")}},[H])),g&&(H=t("g",[H]));var S=y?t("title",y):null,P=[S,H].filter(c["a"]);return t("svg",Object(a["a"])({staticClass:"b-icon bi",class:(n={},d(n,"text-".concat(O),O),d(n,"b-icon-animation-".concat(h),h),n),attrs:f,style:g?{}:{fontSize:1===z?null:"".concat(100*z,"%")}},r,g?{attrs:p}:{},{attrs:{xmlns:g?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),P)}})},aa51:function(t,e,n){var r=n("20a7");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ae93:function(t,e,n){"use strict";var r,a,i,o=n("d039"),c=n("7c73"),s=n("e163"),l=n("9112"),u=n("b622"),h=n("c430"),d=u("iterator"),f=!1;[].keys&&(i=[].keys(),"next"in i?(a=s(s(i)),a!==Object.prototype&&(r=a)):f=!0);var p=void 0==r||o((function(){var t={};return r[d].call(t)!==t}));p?r={}:h&&(r=c(r)),"function"!==typeof r[d]&&l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},b041:function(t,e,n){"use strict";var r=n("00ee"),a=n("f5df");t.exports=r?{}.toString:function(){return"[object "+a(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b1b0:function(t,e,n){var r=n("09e4");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},b1e0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("3790"),a=n("0759"),i=n("5d4e"),o=n("7386"),c=Object(r["c"])({components:{BIcon:a["a"],BIconstack:i["a"],BIconBlank:o["Fc"],BIconAlarm:o["a"],BIconAlarmFill:o["b"],BIconAlignBottom:o["c"],BIconAlignCenter:o["d"],BIconAlignEnd:o["e"],BIconAlignMiddle:o["f"],BIconAlignStart:o["g"],BIconAlignTop:o["h"],BIconAlt:o["i"],BIconApp:o["j"],BIconAppIndicator:o["k"],BIconArchive:o["l"],BIconArchiveFill:o["m"],BIconArrow90degDown:o["n"],BIconArrow90degLeft:o["o"],BIconArrow90degRight:o["p"],BIconArrow90degUp:o["q"],BIconArrowBarDown:o["r"],BIconArrowBarLeft:o["s"],BIconArrowBarRight:o["t"],BIconArrowBarUp:o["u"],BIconArrowClockwise:o["v"],BIconArrowCounterclockwise:o["w"],BIconArrowDown:o["x"],BIconArrowDownCircle:o["y"],BIconArrowDownCircleFill:o["z"],BIconArrowDownLeft:o["A"],BIconArrowDownLeftCircle:o["B"],BIconArrowDownLeftCircleFill:o["C"],BIconArrowDownLeftSquare:o["D"],BIconArrowDownLeftSquareFill:o["E"],BIconArrowDownRight:o["F"],BIconArrowDownRightCircle:o["G"],BIconArrowDownRightCircleFill:o["H"],BIconArrowDownRightSquare:o["I"],BIconArrowDownRightSquareFill:o["J"],BIconArrowDownShort:o["K"],BIconArrowDownSquare:o["L"],BIconArrowDownSquareFill:o["M"],BIconArrowDownUp:o["N"],BIconArrowLeft:o["O"],BIconArrowLeftCircle:o["P"],BIconArrowLeftCircleFill:o["Q"],BIconArrowLeftRight:o["R"],BIconArrowLeftShort:o["S"],BIconArrowLeftSquare:o["T"],BIconArrowLeftSquareFill:o["U"],BIconArrowRepeat:o["V"],BIconArrowReturnLeft:o["W"],BIconArrowReturnRight:o["X"],BIconArrowRight:o["Y"],BIconArrowRightCircle:o["Z"],BIconArrowRightCircleFill:o["ab"],BIconArrowRightShort:o["bb"],BIconArrowRightSquare:o["cb"],BIconArrowRightSquareFill:o["db"],BIconArrowUp:o["eb"],BIconArrowUpCircle:o["fb"],BIconArrowUpCircleFill:o["gb"],BIconArrowUpLeft:o["hb"],BIconArrowUpLeftCircle:o["ib"],BIconArrowUpLeftCircleFill:o["jb"],BIconArrowUpLeftSquare:o["kb"],BIconArrowUpLeftSquareFill:o["lb"],BIconArrowUpRight:o["mb"],BIconArrowUpRightCircle:o["nb"],BIconArrowUpRightCircleFill:o["ob"],BIconArrowUpRightSquare:o["pb"],BIconArrowUpRightSquareFill:o["qb"],BIconArrowUpShort:o["rb"],BIconArrowUpSquare:o["sb"],BIconArrowUpSquareFill:o["tb"],BIconArrowsAngleContract:o["ub"],BIconArrowsAngleExpand:o["vb"],BIconArrowsCollapse:o["wb"],BIconArrowsExpand:o["xb"],BIconArrowsFullscreen:o["yb"],BIconArrowsMove:o["zb"],BIconAspectRatio:o["Ab"],BIconAspectRatioFill:o["Bb"],BIconAsterisk:o["Cb"],BIconAt:o["Db"],BIconAward:o["Eb"],BIconAwardFill:o["Fb"],BIconBack:o["Gb"],BIconBackspace:o["Hb"],BIconBackspaceFill:o["Ib"],BIconBackspaceReverse:o["Jb"],BIconBackspaceReverseFill:o["Kb"],BIconBadge4k:o["Lb"],BIconBadge4kFill:o["Mb"],BIconBadge8k:o["Nb"],BIconBadge8kFill:o["Ob"],BIconBadgeAd:o["Pb"],BIconBadgeAdFill:o["Qb"],BIconBadgeCc:o["Rb"],BIconBadgeCcFill:o["Sb"],BIconBadgeHd:o["Tb"],BIconBadgeHdFill:o["Ub"],BIconBadgeTm:o["Vb"],BIconBadgeTmFill:o["Wb"],BIconBadgeVo:o["Xb"],BIconBadgeVoFill:o["Yb"],BIconBag:o["Zb"],BIconBagCheck:o["ac"],BIconBagCheckFill:o["bc"],BIconBagDash:o["cc"],BIconBagDashFill:o["dc"],BIconBagFill:o["ec"],BIconBagPlus:o["fc"],BIconBagPlusFill:o["gc"],BIconBagX:o["hc"],BIconBagXFill:o["ic"],BIconBarChart:o["jc"],BIconBarChartFill:o["kc"],BIconBarChartLine:o["lc"],BIconBarChartLineFill:o["mc"],BIconBarChartSteps:o["nc"],BIconBasket:o["oc"],BIconBasket2:o["pc"],BIconBasket2Fill:o["qc"],BIconBasket3:o["rc"],BIconBasket3Fill:o["sc"],BIconBasketFill:o["tc"],BIconBattery:o["uc"],BIconBatteryCharging:o["vc"],BIconBatteryFull:o["wc"],BIconBatteryHalf:o["xc"],BIconBell:o["yc"],BIconBellFill:o["zc"],BIconBezier:o["Ac"],BIconBezier2:o["Bc"],BIconBicycle:o["Cc"],BIconBinoculars:o["Dc"],BIconBinocularsFill:o["Ec"],BIconBlockquoteLeft:o["Gc"],BIconBlockquoteRight:o["Hc"],BIconBook:o["Ic"],BIconBookFill:o["Jc"],BIconBookHalf:o["Kc"],BIconBookmark:o["Lc"],BIconBookmarkCheck:o["Mc"],BIconBookmarkCheckFill:o["Nc"],BIconBookmarkDash:o["Oc"],BIconBookmarkDashFill:o["Pc"],BIconBookmarkFill:o["Qc"],BIconBookmarkHeart:o["Rc"],BIconBookmarkHeartFill:o["Sc"],BIconBookmarkPlus:o["Tc"],BIconBookmarkPlusFill:o["Uc"],BIconBookmarkStar:o["Vc"],BIconBookmarkStarFill:o["Wc"],BIconBookmarkX:o["Xc"],BIconBookmarkXFill:o["Yc"],BIconBookmarks:o["Zc"],BIconBookmarksFill:o["ad"],BIconBookshelf:o["bd"],BIconBootstrap:o["cd"],BIconBootstrapFill:o["dd"],BIconBootstrapReboot:o["ed"],BIconBorderStyle:o["fd"],BIconBorderWidth:o["gd"],BIconBoundingBox:o["hd"],BIconBoundingBoxCircles:o["id"],BIconBox:o["jd"],BIconBoxArrowDown:o["kd"],BIconBoxArrowDownLeft:o["ld"],BIconBoxArrowDownRight:o["md"],BIconBoxArrowInDown:o["nd"],BIconBoxArrowInDownLeft:o["od"],BIconBoxArrowInDownRight:o["pd"],BIconBoxArrowInLeft:o["qd"],BIconBoxArrowInRight:o["rd"],BIconBoxArrowInUp:o["sd"],BIconBoxArrowInUpLeft:o["td"],BIconBoxArrowInUpRight:o["ud"],BIconBoxArrowLeft:o["vd"],BIconBoxArrowRight:o["wd"],BIconBoxArrowUp:o["xd"],BIconBoxArrowUpLeft:o["yd"],BIconBoxArrowUpRight:o["zd"],BIconBoxSeam:o["Ad"],BIconBraces:o["Bd"],BIconBricks:o["Cd"],BIconBriefcase:o["Dd"],BIconBriefcaseFill:o["Ed"],BIconBrightnessAltHigh:o["Fd"],BIconBrightnessAltHighFill:o["Gd"],BIconBrightnessAltLow:o["Hd"],BIconBrightnessAltLowFill:o["Id"],BIconBrightnessHigh:o["Jd"],BIconBrightnessHighFill:o["Kd"],BIconBrightnessLow:o["Ld"],BIconBrightnessLowFill:o["Md"],BIconBroadcast:o["Nd"],BIconBroadcastPin:o["Od"],BIconBrush:o["Pd"],BIconBrushFill:o["Qd"],BIconBucket:o["Rd"],BIconBucketFill:o["Sd"],BIconBug:o["Td"],BIconBugFill:o["Ud"],BIconBuilding:o["Vd"],BIconBullseye:o["Wd"],BIconCalculator:o["Xd"],BIconCalculatorFill:o["Yd"],BIconCalendar:o["Zd"],BIconCalendar2:o["ae"],BIconCalendar2Check:o["be"],BIconCalendar2CheckFill:o["ce"],BIconCalendar2Date:o["de"],BIconCalendar2DateFill:o["ee"],BIconCalendar2Day:o["fe"],BIconCalendar2DayFill:o["ge"],BIconCalendar2Event:o["he"],BIconCalendar2EventFill:o["ie"],BIconCalendar2Fill:o["je"],BIconCalendar2Minus:o["ke"],BIconCalendar2MinusFill:o["le"],BIconCalendar2Month:o["me"],BIconCalendar2MonthFill:o["ne"],BIconCalendar2Plus:o["oe"],BIconCalendar2PlusFill:o["pe"],BIconCalendar2Range:o["qe"],BIconCalendar2RangeFill:o["re"],BIconCalendar2Week:o["se"],BIconCalendar2WeekFill:o["te"],BIconCalendar2X:o["ue"],BIconCalendar2XFill:o["ve"],BIconCalendar3:o["we"],BIconCalendar3Event:o["xe"],BIconCalendar3EventFill:o["ye"],BIconCalendar3Fill:o["ze"],BIconCalendar3Range:o["Ae"],BIconCalendar3RangeFill:o["Be"],BIconCalendar3Week:o["Ce"],BIconCalendar3WeekFill:o["De"],BIconCalendar4:o["Ee"],BIconCalendar4Event:o["Fe"],BIconCalendar4Range:o["Ge"],BIconCalendar4Week:o["He"],BIconCalendarCheck:o["Ie"],BIconCalendarCheckFill:o["Je"],BIconCalendarDate:o["Ke"],BIconCalendarDateFill:o["Le"],BIconCalendarDay:o["Me"],BIconCalendarDayFill:o["Ne"],BIconCalendarEvent:o["Oe"],BIconCalendarEventFill:o["Pe"],BIconCalendarFill:o["Qe"],BIconCalendarMinus:o["Re"],BIconCalendarMinusFill:o["Se"],BIconCalendarMonth:o["Te"],BIconCalendarMonthFill:o["Ue"],BIconCalendarPlus:o["Ve"],BIconCalendarPlusFill:o["We"],BIconCalendarRange:o["Xe"],BIconCalendarRangeFill:o["Ye"],BIconCalendarWeek:o["Ze"],BIconCalendarWeekFill:o["af"],BIconCalendarX:o["bf"],BIconCalendarXFill:o["cf"],BIconCamera:o["df"],BIconCamera2:o["ef"],BIconCameraFill:o["ff"],BIconCameraReels:o["gf"],BIconCameraReelsFill:o["hf"],BIconCameraVideo:o["if"],BIconCameraVideoFill:o["jf"],BIconCameraVideoOff:o["kf"],BIconCameraVideoOffFill:o["lf"],BIconCapslock:o["mf"],BIconCapslockFill:o["nf"],BIconCardChecklist:o["of"],BIconCardHeading:o["pf"],BIconCardImage:o["qf"],BIconCardList:o["rf"],BIconCardText:o["sf"],BIconCaretDown:o["tf"],BIconCaretDownFill:o["uf"],BIconCaretDownSquare:o["vf"],BIconCaretDownSquareFill:o["wf"],BIconCaretLeft:o["xf"],BIconCaretLeftFill:o["yf"],BIconCaretLeftSquare:o["zf"],BIconCaretLeftSquareFill:o["Af"],BIconCaretRight:o["Bf"],BIconCaretRightFill:o["Cf"],BIconCaretRightSquare:o["Df"],BIconCaretRightSquareFill:o["Ef"],BIconCaretUp:o["Ff"],BIconCaretUpFill:o["Gf"],BIconCaretUpSquare:o["Hf"],BIconCaretUpSquareFill:o["If"],BIconCart:o["Jf"],BIconCart2:o["Kf"],BIconCart3:o["Lf"],BIconCart4:o["Mf"],BIconCartCheck:o["Nf"],BIconCartCheckFill:o["Of"],BIconCartDash:o["Pf"],BIconCartDashFill:o["Qf"],BIconCartFill:o["Rf"],BIconCartPlus:o["Sf"],BIconCartPlusFill:o["Tf"],BIconCartX:o["Uf"],BIconCartXFill:o["Vf"],BIconCash:o["Wf"],BIconCashStack:o["Xf"],BIconCast:o["Yf"],BIconChat:o["Zf"],BIconChatDots:o["ag"],BIconChatDotsFill:o["bg"],BIconChatFill:o["cg"],BIconChatLeft:o["dg"],BIconChatLeftDots:o["eg"],BIconChatLeftDotsFill:o["fg"],BIconChatLeftFill:o["gg"],BIconChatLeftQuote:o["hg"],BIconChatLeftQuoteFill:o["ig"],BIconChatLeftText:o["jg"],BIconChatLeftTextFill:o["kg"],BIconChatQuote:o["lg"],BIconChatQuoteFill:o["mg"],BIconChatRight:o["ng"],BIconChatRightDots:o["og"],BIconChatRightDotsFill:o["pg"],BIconChatRightFill:o["qg"],BIconChatRightQuote:o["rg"],BIconChatRightQuoteFill:o["sg"],BIconChatRightText:o["tg"],BIconChatRightTextFill:o["ug"],BIconChatSquare:o["vg"],BIconChatSquareDots:o["wg"],BIconChatSquareDotsFill:o["xg"],BIconChatSquareFill:o["yg"],BIconChatSquareQuote:o["zg"],BIconChatSquareQuoteFill:o["Ag"],BIconChatSquareText:o["Bg"],BIconChatSquareTextFill:o["Cg"],BIconChatText:o["Dg"],BIconChatTextFill:o["Eg"],BIconCheck:o["Fg"],BIconCheck2:o["Gg"],BIconCheck2All:o["Hg"],BIconCheck2Circle:o["Ig"],BIconCheck2Square:o["Jg"],BIconCheckAll:o["Kg"],BIconCheckCircle:o["Lg"],BIconCheckCircleFill:o["Mg"],BIconCheckSquare:o["Ng"],BIconCheckSquareFill:o["Og"],BIconChevronBarContract:o["Pg"],BIconChevronBarDown:o["Qg"],BIconChevronBarExpand:o["Rg"],BIconChevronBarLeft:o["Sg"],BIconChevronBarRight:o["Tg"],BIconChevronBarUp:o["Ug"],BIconChevronCompactDown:o["Vg"],BIconChevronCompactLeft:o["Wg"],BIconChevronCompactRight:o["Xg"],BIconChevronCompactUp:o["Yg"],BIconChevronContract:o["Zg"],BIconChevronDoubleDown:o["ah"],BIconChevronDoubleLeft:o["bh"],BIconChevronDoubleRight:o["ch"],BIconChevronDoubleUp:o["dh"],BIconChevronDown:o["eh"],BIconChevronExpand:o["fh"],BIconChevronLeft:o["gh"],BIconChevronRight:o["hh"],BIconChevronUp:o["ih"],BIconCircle:o["jh"],BIconCircleFill:o["kh"],BIconCircleHalf:o["lh"],BIconCircleSquare:o["mh"],BIconClipboard:o["nh"],BIconClipboardCheck:o["oh"],BIconClipboardData:o["ph"],BIconClipboardMinus:o["qh"],BIconClipboardPlus:o["rh"],BIconClipboardX:o["sh"],BIconClock:o["th"],BIconClockFill:o["uh"],BIconClockHistory:o["vh"],BIconCloud:o["wh"],BIconCloudArrowDown:o["xh"],BIconCloudArrowDownFill:o["yh"],BIconCloudArrowUp:o["zh"],BIconCloudArrowUpFill:o["Ah"],BIconCloudCheck:o["Bh"],BIconCloudCheckFill:o["Ch"],BIconCloudDownload:o["Dh"],BIconCloudDownloadFill:o["Eh"],BIconCloudFill:o["Fh"],BIconCloudMinus:o["Gh"],BIconCloudMinusFill:o["Hh"],BIconCloudPlus:o["Ih"],BIconCloudPlusFill:o["Jh"],BIconCloudSlash:o["Kh"],BIconCloudSlashFill:o["Lh"],BIconCloudUpload:o["Mh"],BIconCloudUploadFill:o["Nh"],BIconCode:o["Oh"],BIconCodeSlash:o["Ph"],BIconCodeSquare:o["Qh"],BIconCollection:o["Rh"],BIconCollectionFill:o["Sh"],BIconCollectionPlay:o["Th"],BIconCollectionPlayFill:o["Uh"],BIconColumns:o["Vh"],BIconColumnsGap:o["Wh"],BIconCommand:o["Xh"],BIconCompass:o["Yh"],BIconCompassFill:o["Zh"],BIconCone:o["ai"],BIconConeStriped:o["bi"],BIconController:o["ci"],BIconCpu:o["di"],BIconCpuFill:o["ei"],BIconCreditCard:o["fi"],BIconCreditCard2Back:o["gi"],BIconCreditCard2BackFill:o["hi"],BIconCreditCard2Front:o["ii"],BIconCreditCard2FrontFill:o["ji"],BIconCreditCardFill:o["ki"],BIconCrop:o["li"],BIconCup:o["mi"],BIconCupFill:o["ni"],BIconCupStraw:o["oi"],BIconCursor:o["pi"],BIconCursorFill:o["qi"],BIconCursorText:o["ri"],BIconDash:o["si"],BIconDashCircle:o["ti"],BIconDashCircleFill:o["ui"],BIconDashSquare:o["vi"],BIconDashSquareFill:o["wi"],BIconDiagram2:o["xi"],BIconDiagram2Fill:o["yi"],BIconDiagram3:o["zi"],BIconDiagram3Fill:o["Ai"],BIconDiamond:o["Bi"],BIconDiamondFill:o["Ci"],BIconDiamondHalf:o["Di"],BIconDice1:o["Ei"],BIconDice1Fill:o["Fi"],BIconDice2:o["Gi"],BIconDice2Fill:o["Hi"],BIconDice3:o["Ii"],BIconDice3Fill:o["Ji"],BIconDice4:o["Ki"],BIconDice4Fill:o["Li"],BIconDice5:o["Mi"],BIconDice5Fill:o["Ni"],BIconDice6:o["Oi"],BIconDice6Fill:o["Pi"],BIconDisc:o["Qi"],BIconDiscFill:o["Ri"],BIconDiscord:o["Si"],BIconDisplay:o["Ti"],BIconDisplayFill:o["Ui"],BIconDistributeHorizontal:o["Vi"],BIconDistributeVertical:o["Wi"],BIconDoorClosed:o["Xi"],BIconDoorClosedFill:o["Yi"],BIconDoorOpen:o["Zi"],BIconDoorOpenFill:o["aj"],BIconDot:o["bj"],BIconDownload:o["cj"],BIconDroplet:o["dj"],BIconDropletFill:o["ej"],BIconDropletHalf:o["fj"],BIconEarbuds:o["gj"],BIconEasel:o["hj"],BIconEaselFill:o["ij"],BIconEgg:o["jj"],BIconEggFill:o["kj"],BIconEggFried:o["lj"],BIconEject:o["mj"],BIconEjectFill:o["nj"],BIconEmojiAngry:o["oj"],BIconEmojiAngryFill:o["pj"],BIconEmojiDizzy:o["qj"],BIconEmojiDizzyFill:o["rj"],BIconEmojiExpressionless:o["sj"],BIconEmojiExpressionlessFill:o["tj"],BIconEmojiFrown:o["uj"],BIconEmojiFrownFill:o["vj"],BIconEmojiHeartEyes:o["wj"],BIconEmojiHeartEyesFill:o["xj"],BIconEmojiLaughing:o["yj"],BIconEmojiLaughingFill:o["zj"],BIconEmojiNeutral:o["Aj"],BIconEmojiNeutralFill:o["Bj"],BIconEmojiSmile:o["Cj"],BIconEmojiSmileFill:o["Dj"],BIconEmojiSmileUpsideDown:o["Ej"],BIconEmojiSmileUpsideDownFill:o["Fj"],BIconEmojiSunglasses:o["Gj"],BIconEmojiSunglassesFill:o["Hj"],BIconEmojiWink:o["Ij"],BIconEmojiWinkFill:o["Jj"],BIconEnvelope:o["Kj"],BIconEnvelopeFill:o["Lj"],BIconEnvelopeOpen:o["Mj"],BIconEnvelopeOpenFill:o["Nj"],BIconExclamation:o["Oj"],BIconExclamationCircle:o["Pj"],BIconExclamationCircleFill:o["Qj"],BIconExclamationDiamond:o["Rj"],BIconExclamationDiamondFill:o["Sj"],BIconExclamationOctagon:o["Tj"],BIconExclamationOctagonFill:o["Uj"],BIconExclamationSquare:o["Vj"],BIconExclamationSquareFill:o["Wj"],BIconExclamationTriangle:o["Xj"],BIconExclamationTriangleFill:o["Yj"],BIconExclude:o["Zj"],BIconEye:o["ak"],BIconEyeFill:o["bk"],BIconEyeSlash:o["ck"],BIconEyeSlashFill:o["dk"],BIconEyeglasses:o["ek"],BIconFacebook:o["fk"],BIconFile:o["gk"],BIconFileArrowDown:o["hk"],BIconFileArrowDownFill:o["ik"],BIconFileArrowUp:o["jk"],BIconFileArrowUpFill:o["kk"],BIconFileBarGraph:o["lk"],BIconFileBarGraphFill:o["mk"],BIconFileBinary:o["nk"],BIconFileBinaryFill:o["ok"],BIconFileBreak:o["pk"],BIconFileBreakFill:o["qk"],BIconFileCheck:o["rk"],BIconFileCheckFill:o["sk"],BIconFileCode:o["tk"],BIconFileCodeFill:o["uk"],BIconFileDiff:o["vk"],BIconFileDiffFill:o["wk"],BIconFileEarmark:o["xk"],BIconFileEarmarkArrowDown:o["yk"],BIconFileEarmarkArrowDownFill:o["zk"],BIconFileEarmarkArrowUp:o["Ak"],BIconFileEarmarkArrowUpFill:o["Bk"],BIconFileEarmarkBarGraph:o["Ck"],BIconFileEarmarkBarGraphFill:o["Dk"],BIconFileEarmarkBinary:o["Ek"],BIconFileEarmarkBinaryFill:o["Fk"],BIconFileEarmarkBreak:o["Gk"],BIconFileEarmarkBreakFill:o["Hk"],BIconFileEarmarkCheck:o["Ik"],BIconFileEarmarkCheckFill:o["Jk"],BIconFileEarmarkCode:o["Kk"],BIconFileEarmarkCodeFill:o["Lk"],BIconFileEarmarkDiff:o["Mk"],BIconFileEarmarkDiffFill:o["Nk"],BIconFileEarmarkEasel:o["Ok"],BIconFileEarmarkEaselFill:o["Pk"],BIconFileEarmarkExcel:o["Qk"],BIconFileEarmarkExcelFill:o["Rk"],BIconFileEarmarkFill:o["Sk"],BIconFileEarmarkFont:o["Tk"],BIconFileEarmarkFontFill:o["Uk"],BIconFileEarmarkImage:o["Vk"],BIconFileEarmarkImageFill:o["Wk"],BIconFileEarmarkLock:o["Xk"],BIconFileEarmarkLock2:o["Yk"],BIconFileEarmarkLock2Fill:o["Zk"],BIconFileEarmarkLockFill:o["al"],BIconFileEarmarkMedical:o["bl"],BIconFileEarmarkMedicalFill:o["cl"],BIconFileEarmarkMinus:o["dl"],BIconFileEarmarkMinusFill:o["el"],BIconFileEarmarkMusic:o["fl"],BIconFileEarmarkMusicFill:o["gl"],BIconFileEarmarkPerson:o["hl"],BIconFileEarmarkPersonFill:o["il"],BIconFileEarmarkPlay:o["jl"],BIconFileEarmarkPlayFill:o["kl"],BIconFileEarmarkPlus:o["ll"],BIconFileEarmarkPlusFill:o["ml"],BIconFileEarmarkPost:o["nl"],BIconFileEarmarkPostFill:o["ol"],BIconFileEarmarkPpt:o["pl"],BIconFileEarmarkPptFill:o["ql"],BIconFileEarmarkRichtext:o["rl"],BIconFileEarmarkRichtextFill:o["sl"],BIconFileEarmarkRuled:o["tl"],BIconFileEarmarkRuledFill:o["ul"],BIconFileEarmarkSlides:o["vl"],BIconFileEarmarkSlidesFill:o["wl"],BIconFileEarmarkSpreadsheet:o["xl"],BIconFileEarmarkSpreadsheetFill:o["yl"],BIconFileEarmarkText:o["zl"],BIconFileEarmarkTextFill:o["Al"],BIconFileEarmarkWord:o["Bl"],BIconFileEarmarkWordFill:o["Cl"],BIconFileEarmarkX:o["Dl"],BIconFileEarmarkXFill:o["El"],BIconFileEarmarkZip:o["Fl"],BIconFileEarmarkZipFill:o["Gl"],BIconFileEasel:o["Hl"],BIconFileEaselFill:o["Il"],BIconFileExcel:o["Jl"],BIconFileExcelFill:o["Kl"],BIconFileFill:o["Ll"],BIconFileFont:o["Ml"],BIconFileFontFill:o["Nl"],BIconFileImage:o["Ol"],BIconFileImageFill:o["Pl"],BIconFileLock:o["Ql"],BIconFileLock2:o["Rl"],BIconFileLock2Fill:o["Sl"],BIconFileLockFill:o["Tl"],BIconFileMedical:o["Ul"],BIconFileMedicalFill:o["Vl"],BIconFileMinus:o["Wl"],BIconFileMinusFill:o["Xl"],BIconFileMusic:o["Yl"],BIconFileMusicFill:o["Zl"],BIconFilePerson:o["am"],BIconFilePersonFill:o["bm"],BIconFilePlay:o["cm"],BIconFilePlayFill:o["dm"],BIconFilePlus:o["em"],BIconFilePlusFill:o["fm"],BIconFilePost:o["gm"],BIconFilePostFill:o["hm"],BIconFilePpt:o["im"],BIconFilePptFill:o["jm"],BIconFileRichtext:o["km"],BIconFileRichtextFill:o["lm"],BIconFileRuled:o["mm"],BIconFileRuledFill:o["nm"],BIconFileSlides:o["om"],BIconFileSlidesFill:o["pm"],BIconFileSpreadsheet:o["qm"],BIconFileSpreadsheetFill:o["rm"],BIconFileText:o["sm"],BIconFileTextFill:o["tm"],BIconFileWord:o["um"],BIconFileWordFill:o["vm"],BIconFileX:o["wm"],BIconFileXFill:o["xm"],BIconFileZip:o["ym"],BIconFileZipFill:o["zm"],BIconFiles:o["Am"],BIconFilesAlt:o["Bm"],BIconFilm:o["Cm"],BIconFilter:o["Dm"],BIconFilterCircle:o["Em"],BIconFilterCircleFill:o["Fm"],BIconFilterLeft:o["Gm"],BIconFilterRight:o["Hm"],BIconFilterSquare:o["Im"],BIconFilterSquareFill:o["Jm"],BIconFlag:o["Km"],BIconFlagFill:o["Lm"],BIconFlower1:o["Mm"],BIconFlower2:o["Nm"],BIconFlower3:o["Om"],BIconFolder:o["Pm"],BIconFolder2:o["Qm"],BIconFolder2Open:o["Rm"],BIconFolderCheck:o["Sm"],BIconFolderFill:o["Tm"],BIconFolderMinus:o["Um"],BIconFolderPlus:o["Vm"],BIconFolderSymlink:o["Wm"],BIconFolderSymlinkFill:o["Xm"],BIconFolderX:o["Ym"],BIconFonts:o["Zm"],BIconForward:o["an"],BIconForwardFill:o["bn"],BIconFront:o["cn"],BIconFullscreen:o["dn"],BIconFullscreenExit:o["en"],BIconFunnel:o["fn"],BIconFunnelFill:o["gn"],BIconGear:o["hn"],BIconGearFill:o["in"],BIconGearWide:o["jn"],BIconGearWideConnected:o["kn"],BIconGem:o["ln"],BIconGeo:o["mn"],BIconGeoAlt:o["nn"],BIconGeoAltFill:o["on"],BIconGeoFill:o["pn"],BIconGift:o["qn"],BIconGiftFill:o["rn"],BIconGithub:o["sn"],BIconGlobe:o["tn"],BIconGlobe2:o["un"],BIconGoogle:o["vn"],BIconGraphDown:o["wn"],BIconGraphUp:o["xn"],BIconGrid:o["yn"],BIconGrid1x2:o["zn"],BIconGrid1x2Fill:o["An"],BIconGrid3x2:o["Bn"],BIconGrid3x2Gap:o["Cn"],BIconGrid3x2GapFill:o["Dn"],BIconGrid3x3:o["En"],BIconGrid3x3Gap:o["Fn"],BIconGrid3x3GapFill:o["Gn"],BIconGridFill:o["Hn"],BIconGripHorizontal:o["In"],BIconGripVertical:o["Jn"],BIconHammer:o["Kn"],BIconHandIndex:o["Ln"],BIconHandIndexThumb:o["Mn"],BIconHandThumbsDown:o["Nn"],BIconHandThumbsUp:o["On"],BIconHandbag:o["Pn"],BIconHandbagFill:o["Qn"],BIconHash:o["Rn"],BIconHdd:o["Sn"],BIconHddFill:o["Tn"],BIconHddNetwork:o["Un"],BIconHddNetworkFill:o["Vn"],BIconHddRack:o["Wn"],BIconHddRackFill:o["Xn"],BIconHddStack:o["Yn"],BIconHddStackFill:o["Zn"],BIconHeadphones:o["ao"],BIconHeadset:o["bo"],BIconHeart:o["co"],BIconHeartFill:o["do"],BIconHeartHalf:o["eo"],BIconHeptagon:o["fo"],BIconHeptagonFill:o["go"],BIconHeptagonHalf:o["ho"],BIconHexagon:o["io"],BIconHexagonFill:o["jo"],BIconHexagonHalf:o["ko"],BIconHourglass:o["lo"],BIconHourglassBottom:o["mo"],BIconHourglassSplit:o["no"],BIconHourglassTop:o["oo"],BIconHouse:o["po"],BIconHouseDoor:o["qo"],BIconHouseDoorFill:o["ro"],BIconHouseFill:o["so"],BIconHr:o["to"],BIconImage:o["uo"],BIconImageAlt:o["vo"],BIconImageFill:o["wo"],BIconImages:o["xo"],BIconInbox:o["yo"],BIconInboxFill:o["zo"],BIconInboxes:o["Ao"],BIconInboxesFill:o["Bo"],BIconInfo:o["Co"],BIconInfoCircle:o["Do"],BIconInfoCircleFill:o["Eo"],BIconInfoSquare:o["Fo"],BIconInfoSquareFill:o["Go"],BIconInputCursor:o["Ho"],BIconInputCursorText:o["Io"],BIconInstagram:o["Jo"],BIconIntersect:o["Ko"],BIconJournal:o["Lo"],BIconJournalAlbum:o["Mo"],BIconJournalArrowDown:o["No"],BIconJournalArrowUp:o["Oo"],BIconJournalBookmark:o["Po"],BIconJournalBookmarkFill:o["Qo"],BIconJournalCheck:o["Ro"],BIconJournalCode:o["So"],BIconJournalMedical:o["To"],BIconJournalMinus:o["Uo"],BIconJournalPlus:o["Vo"],BIconJournalRichtext:o["Wo"],BIconJournalText:o["Xo"],BIconJournalX:o["Yo"],BIconJournals:o["Zo"],BIconJoystick:o["ap"],BIconJustify:o["bp"],BIconJustifyLeft:o["cp"],BIconJustifyRight:o["dp"],BIconKanban:o["ep"],BIconKanbanFill:o["fp"],BIconKey:o["gp"],BIconKeyFill:o["hp"],BIconKeyboard:o["ip"],BIconKeyboardFill:o["jp"],BIconLadder:o["kp"],BIconLamp:o["lp"],BIconLampFill:o["mp"],BIconLaptop:o["np"],BIconLaptopFill:o["op"],BIconLayers:o["pp"],BIconLayersFill:o["qp"],BIconLayersHalf:o["rp"],BIconLayoutSidebar:o["sp"],BIconLayoutSidebarInset:o["tp"],BIconLayoutSidebarInsetReverse:o["up"],BIconLayoutSidebarReverse:o["vp"],BIconLayoutSplit:o["wp"],BIconLayoutTextSidebar:o["xp"],BIconLayoutTextSidebarReverse:o["yp"],BIconLayoutTextWindow:o["zp"],BIconLayoutTextWindowReverse:o["Ap"],BIconLayoutThreeColumns:o["Bp"],BIconLayoutWtf:o["Cp"],BIconLifePreserver:o["Dp"],BIconLightning:o["Ep"],BIconLightningFill:o["Fp"],BIconLink:o["Gp"],BIconLink45deg:o["Hp"],BIconLinkedin:o["Ip"],BIconList:o["Jp"],BIconListCheck:o["Kp"],BIconListNested:o["Lp"],BIconListOl:o["Mp"],BIconListStars:o["Np"],BIconListTask:o["Op"],BIconListUl:o["Pp"],BIconLock:o["Qp"],BIconLockFill:o["Rp"],BIconMailbox:o["Sp"],BIconMailbox2:o["Tp"],BIconMap:o["Up"],BIconMapFill:o["Vp"],BIconMarkdown:o["Wp"],BIconMarkdownFill:o["Xp"],BIconMenuApp:o["Yp"],BIconMenuAppFill:o["Zp"],BIconMenuButton:o["aq"],BIconMenuButtonFill:o["bq"],BIconMenuButtonWide:o["cq"],BIconMenuButtonWideFill:o["dq"],BIconMenuDown:o["eq"],BIconMenuUp:o["fq"],BIconMic:o["gq"],BIconMicFill:o["hq"],BIconMicMute:o["iq"],BIconMicMuteFill:o["jq"],BIconMinecart:o["kq"],BIconMinecartLoaded:o["lq"],BIconMoon:o["mq"],BIconMouse:o["nq"],BIconMouse2:o["oq"],BIconMouse3:o["pq"],BIconMusicNote:o["qq"],BIconMusicNoteBeamed:o["rq"],BIconMusicNoteList:o["sq"],BIconMusicPlayer:o["tq"],BIconMusicPlayerFill:o["uq"],BIconNewspaper:o["vq"],BIconNodeMinus:o["wq"],BIconNodeMinusFill:o["xq"],BIconNodePlus:o["yq"],BIconNodePlusFill:o["zq"],BIconNut:o["Aq"],BIconNutFill:o["Bq"],BIconOctagon:o["Cq"],BIconOctagonFill:o["Dq"],BIconOctagonHalf:o["Eq"],BIconOption:o["Fq"],BIconOutlet:o["Gq"],BIconPaperclip:o["Hq"],BIconParagraph:o["Iq"],BIconPatchCheck:o["Jq"],BIconPatchCheckFill:o["Kq"],BIconPatchExclamation:o["Lq"],BIconPatchExclamationFill:o["Mq"],BIconPatchMinus:o["Nq"],BIconPatchMinusFill:o["Oq"],BIconPatchPlus:o["Pq"],BIconPatchPlusFill:o["Qq"],BIconPatchQuestion:o["Rq"],BIconPatchQuestionFill:o["Sq"],BIconPause:o["Tq"],BIconPauseBtn:o["Uq"],BIconPauseBtnFill:o["Vq"],BIconPauseCircle:o["Wq"],BIconPauseCircleFill:o["Xq"],BIconPauseFill:o["Yq"],BIconPeace:o["Zq"],BIconPeaceFill:o["ar"],BIconPen:o["br"],BIconPenFill:o["cr"],BIconPencil:o["dr"],BIconPencilFill:o["er"],BIconPencilSquare:o["fr"],BIconPentagon:o["gr"],BIconPentagonFill:o["hr"],BIconPentagonHalf:o["ir"],BIconPeople:o["jr"],BIconPeopleFill:o["kr"],BIconPercent:o["lr"],BIconPerson:o["mr"],BIconPersonBadge:o["nr"],BIconPersonBadgeFill:o["or"],BIconPersonBoundingBox:o["pr"],BIconPersonCheck:o["qr"],BIconPersonCheckFill:o["rr"],BIconPersonCircle:o["sr"],BIconPersonDash:o["tr"],BIconPersonDashFill:o["ur"],BIconPersonFill:o["vr"],BIconPersonLinesFill:o["wr"],BIconPersonPlus:o["xr"],BIconPersonPlusFill:o["yr"],BIconPersonSquare:o["zr"],BIconPersonX:o["Ar"],BIconPersonXFill:o["Br"],BIconPhone:o["Cr"],BIconPhoneFill:o["Dr"],BIconPhoneLandscape:o["Er"],BIconPhoneLandscapeFill:o["Fr"],BIconPhoneVibrate:o["Gr"],BIconPieChart:o["Hr"],BIconPieChartFill:o["Ir"],BIconPip:o["Jr"],BIconPipFill:o["Kr"],BIconPlay:o["Lr"],BIconPlayBtn:o["Mr"],BIconPlayBtnFill:o["Nr"],BIconPlayCircle:o["Or"],BIconPlayCircleFill:o["Pr"],BIconPlayFill:o["Qr"],BIconPlug:o["Rr"],BIconPlugFill:o["Sr"],BIconPlus:o["Tr"],BIconPlusCircle:o["Ur"],BIconPlusCircleFill:o["Vr"],BIconPlusSquare:o["Wr"],BIconPlusSquareFill:o["Xr"],BIconPower:o["Yr"],BIconPrinter:o["Zr"],BIconPrinterFill:o["as"],BIconPuzzle:o["bs"],BIconPuzzleFill:o["cs"],BIconQuestion:o["ds"],BIconQuestionCircle:o["es"],BIconQuestionCircleFill:o["fs"],BIconQuestionDiamond:o["gs"],BIconQuestionDiamondFill:o["hs"],BIconQuestionOctagon:o["is"],BIconQuestionOctagonFill:o["js"],BIconQuestionSquare:o["ks"],BIconQuestionSquareFill:o["ls"],BIconReceipt:o["ms"],BIconReceiptCutoff:o["ns"],BIconReception0:o["os"],BIconReception1:o["ps"],BIconReception2:o["qs"],BIconReception3:o["rs"],BIconReception4:o["ss"],BIconRecord:o["ts"],BIconRecord2:o["us"],BIconRecord2Fill:o["vs"],BIconRecordBtn:o["ws"],BIconRecordBtnFill:o["xs"],BIconRecordCircle:o["ys"],BIconRecordCircleFill:o["zs"],BIconRecordFill:o["As"],BIconReply:o["Bs"],BIconReplyAll:o["Cs"],BIconReplyAllFill:o["Ds"],BIconReplyFill:o["Es"],BIconRss:o["Fs"],BIconRssFill:o["Gs"],BIconScissors:o["Hs"],BIconScrewdriver:o["Is"],BIconSearch:o["Js"],BIconSegmentedNav:o["Ks"],BIconServer:o["Ls"],BIconShare:o["Ms"],BIconShareFill:o["Ns"],BIconShield:o["Os"],BIconShieldCheck:o["Ps"],BIconShieldExclamation:o["Qs"],BIconShieldFill:o["Rs"],BIconShieldFillCheck:o["Ss"],BIconShieldFillExclamation:o["Ts"],BIconShieldFillMinus:o["Us"],BIconShieldFillPlus:o["Vs"],BIconShieldFillX:o["Ws"],BIconShieldLock:o["Xs"],BIconShieldLockFill:o["Ys"],BIconShieldMinus:o["Zs"],BIconShieldPlus:o["at"],BIconShieldShaded:o["bt"],BIconShieldSlash:o["ct"],BIconShieldSlashFill:o["dt"],BIconShieldX:o["et"],BIconShift:o["ft"],BIconShiftFill:o["gt"],BIconShop:o["ht"],BIconShopWindow:o["it"],BIconShuffle:o["jt"],BIconSignpost:o["kt"],BIconSignpost2:o["lt"],BIconSignpost2Fill:o["mt"],BIconSignpostFill:o["nt"],BIconSignpostSplit:o["ot"],BIconSignpostSplitFill:o["pt"],BIconSim:o["qt"],BIconSimFill:o["rt"],BIconSkipBackward:o["st"],BIconSkipBackwardBtn:o["tt"],BIconSkipBackwardBtnFill:o["ut"],BIconSkipBackwardCircle:o["vt"],BIconSkipBackwardCircleFill:o["wt"],BIconSkipBackwardFill:o["xt"],BIconSkipEnd:o["yt"],BIconSkipEndBtn:o["zt"],BIconSkipEndBtnFill:o["At"],BIconSkipEndCircle:o["Bt"],BIconSkipEndCircleFill:o["Ct"],BIconSkipEndFill:o["Dt"],BIconSkipForward:o["Et"],BIconSkipForwardBtn:o["Ft"],BIconSkipForwardBtnFill:o["Gt"],BIconSkipForwardCircle:o["Ht"],BIconSkipForwardCircleFill:o["It"],BIconSkipForwardFill:o["Jt"],BIconSkipStart:o["Kt"],BIconSkipStartBtn:o["Lt"],BIconSkipStartBtnFill:o["Mt"],BIconSkipStartCircle:o["Nt"],BIconSkipStartCircleFill:o["Ot"],BIconSkipStartFill:o["Pt"],BIconSlack:o["Qt"],BIconSlash:o["Rt"],BIconSlashCircle:o["St"],BIconSlashCircleFill:o["Tt"],BIconSlashSquare:o["Ut"],BIconSlashSquareFill:o["Vt"],BIconSliders:o["Wt"],BIconSmartwatch:o["Xt"],BIconSortAlphaDown:o["Yt"],BIconSortAlphaDownAlt:o["Zt"],BIconSortAlphaUp:o["au"],BIconSortAlphaUpAlt:o["bu"],BIconSortDown:o["cu"],BIconSortDownAlt:o["du"],BIconSortNumericDown:o["eu"],BIconSortNumericDownAlt:o["fu"],BIconSortNumericUp:o["gu"],BIconSortNumericUpAlt:o["hu"],BIconSortUp:o["iu"],BIconSortUpAlt:o["ju"],BIconSoundwave:o["ku"],BIconSpeaker:o["lu"],BIconSpeakerFill:o["mu"],BIconSpellcheck:o["nu"],BIconSquare:o["ou"],BIconSquareFill:o["pu"],BIconSquareHalf:o["qu"],BIconStar:o["ru"],BIconStarFill:o["su"],BIconStarHalf:o["tu"],BIconStickies:o["uu"],BIconStickiesFill:o["vu"],BIconSticky:o["wu"],BIconStickyFill:o["xu"],BIconStop:o["yu"],BIconStopBtn:o["zu"],BIconStopBtnFill:o["Au"],BIconStopCircle:o["Bu"],BIconStopCircleFill:o["Cu"],BIconStopFill:o["Du"],BIconStoplights:o["Eu"],BIconStoplightsFill:o["Fu"],BIconStopwatch:o["Gu"],BIconStopwatchFill:o["Hu"],BIconSubtract:o["Iu"],BIconSuitClub:o["Ju"],BIconSuitClubFill:o["Ku"],BIconSuitDiamond:o["Lu"],BIconSuitDiamondFill:o["Mu"],BIconSuitHeart:o["Nu"],BIconSuitHeartFill:o["Ou"],BIconSuitSpade:o["Pu"],BIconSuitSpadeFill:o["Qu"],BIconSun:o["Ru"],BIconSunglasses:o["Su"],BIconTable:o["Tu"],BIconTablet:o["Uu"],BIconTabletFill:o["Vu"],BIconTabletLandscape:o["Wu"],BIconTabletLandscapeFill:o["Xu"],BIconTag:o["Yu"],BIconTagFill:o["Zu"],BIconTags:o["av"],BIconTagsFill:o["bv"],BIconTelephone:o["cv"],BIconTelephoneFill:o["dv"],BIconTelephoneForward:o["ev"],BIconTelephoneForwardFill:o["fv"],BIconTelephoneInbound:o["gv"],BIconTelephoneInboundFill:o["hv"],BIconTelephoneMinus:o["iv"],BIconTelephoneMinusFill:o["jv"],BIconTelephoneOutbound:o["kv"],BIconTelephoneOutboundFill:o["lv"],BIconTelephonePlus:o["mv"],BIconTelephonePlusFill:o["nv"],BIconTelephoneX:o["ov"],BIconTelephoneXFill:o["pv"],BIconTerminal:o["qv"],BIconTerminalFill:o["rv"],BIconTextCenter:o["sv"],BIconTextIndentLeft:o["tv"],BIconTextIndentRight:o["uv"],BIconTextLeft:o["vv"],BIconTextParagraph:o["wv"],BIconTextRight:o["xv"],BIconTextarea:o["yv"],BIconTextareaResize:o["zv"],BIconTextareaT:o["Av"],BIconThermometer:o["Bv"],BIconThermometerHalf:o["Cv"],BIconThreeDots:o["Dv"],BIconThreeDotsVertical:o["Ev"],BIconToggle2Off:o["Fv"],BIconToggle2On:o["Gv"],BIconToggleOff:o["Hv"],BIconToggleOn:o["Iv"],BIconToggles:o["Jv"],BIconToggles2:o["Kv"],BIconTools:o["Lv"],BIconTrash:o["Mv"],BIconTrash2:o["Nv"],BIconTrash2Fill:o["Ov"],BIconTrashFill:o["Pv"],BIconTree:o["Qv"],BIconTreeFill:o["Rv"],BIconTriangle:o["Sv"],BIconTriangleFill:o["Tv"],BIconTriangleHalf:o["Uv"],BIconTrophy:o["Vv"],BIconTrophyFill:o["Wv"],BIconTruck:o["Xv"],BIconTruckFlatbed:o["Yv"],BIconTv:o["Zv"],BIconTvFill:o["aw"],BIconTwitch:o["bw"],BIconTwitter:o["cw"],BIconType:o["dw"],BIconTypeBold:o["ew"],BIconTypeH1:o["fw"],BIconTypeH2:o["gw"],BIconTypeH3:o["hw"],BIconTypeItalic:o["iw"],BIconTypeStrikethrough:o["jw"],BIconTypeUnderline:o["kw"],BIconUiChecks:o["lw"],BIconUiChecksGrid:o["mw"],BIconUiRadios:o["nw"],BIconUiRadiosGrid:o["ow"],BIconUnion:o["pw"],BIconUnlock:o["qw"],BIconUnlockFill:o["rw"],BIconUpc:o["sw"],BIconUpcScan:o["tw"],BIconUpload:o["uw"],BIconVectorPen:o["vw"],BIconViewList:o["ww"],BIconViewStacked:o["xw"],BIconVinyl:o["yw"],BIconVinylFill:o["zw"],BIconVoicemail:o["Aw"],BIconVolumeDown:o["Bw"],BIconVolumeDownFill:o["Cw"],BIconVolumeMute:o["Dw"],BIconVolumeMuteFill:o["Ew"],BIconVolumeOff:o["Fw"],BIconVolumeOffFill:o["Gw"],BIconVolumeUp:o["Hw"],BIconVolumeUpFill:o["Iw"],BIconVr:o["Jw"],BIconWallet:o["Kw"],BIconWallet2:o["Lw"],BIconWalletFill:o["Mw"],BIconWatch:o["Nw"],BIconWifi:o["Ow"],BIconWifi1:o["Pw"],BIconWifi2:o["Qw"],BIconWifiOff:o["Rw"],BIconWindow:o["Sw"],BIconWrench:o["Tw"],BIconX:o["Uw"],BIconXCircle:o["Vw"],BIconXCircleFill:o["Ww"],BIconXDiamond:o["Xw"],BIconXDiamondFill:o["Yw"],BIconXOctagon:o["Zw"],BIconXOctagonFill:o["ax"],BIconXSquare:o["bx"],BIconXSquareFill:o["cx"],BIconYoutube:o["dx"],BIconZoomIn:o["ex"],BIconZoomOut:o["fx"]}})},b42e:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function i(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},r=0,o=t.split(a.styleList);r<o.length;r++){var c=o[r].split(a.styleProp),s=c[0],l=c[1];(s=s.trim())&&("string"==typeof l&&(l=l.trim()),n[(e=s,e.replace(a.kebab,i))]=l)}return n}function c(){for(var t,e,n={},a=arguments.length;a--;)for(var i=0,c=Object.keys(arguments[a]);i<c.length;i++)switch(t=c[i]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var s=void 0;s=Array.isArray(arguments[a].style)?arguments[a].style:[arguments[a].style];for(var l=0;l<s.length;l++){var u=s[l];"string"==typeof u&&(s[l]=o(u))}arguments[a].style=s}n[t]=n[t].concat(arguments[a][t]);break;case"staticClass":if(!arguments[a][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[a][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[a][t][e]):n[t][e]=arguments[a][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=r({},arguments[a][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[a][t])}return n}},b508:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("d82f"),a=function(t){var e=Object(r["c"])(null);return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=JSON.stringify(r);return e[i]=e[i]||t.apply(null,r)}}},b622:function(t,e,n){var r=n("da84"),a=n("5692"),i=n("5135"),o=n("90e3"),c=n("4930"),s=n("fdbf"),l=a("wks"),u=r.Symbol,h=s?u:u&&u.withoutSetter||o;t.exports=function(t){return i(l,t)&&(c||"string"==typeof l[t])||(c&&i(u,t)?l[t]=u[t]:l[t]=h("Symbol."+t)),l[t]}},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),o=n("d039"),c=o((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(a(t))}})},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,v,m,b){for(var g,y,O=i(p),z=a(O),j=r(v,m,3),w=o(z.length),M=0,_=b||c,C=e?_(p,w):n||d?_(p,0):void 0;w>M;M++)if((f||M in z)&&(g=z[M],y=j(g,M,O),t))if(e)C[M]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return M;case 2:s.call(C,g)}else switch(t){case 4:return!1;case 7:s.call(C,g)}return h?-1:l||u?u:C}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b973:function(t,e,n){var r=n("0ee6"),a=n("fdbe"),i=n("a5b6"),o=n("d0c8");t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},ba83:function(t,e,n){var r=n("bb6e");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},bb6e:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},bf45:function(t,e,n){var r=n("0368"),a=n("a714"),i=n("c4dd");t.exports=!r&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},c04e:function(t,e,n){var r=n("861d"),a=n("d9b5"),i=n("485a"),o=n("b622"),c=o("toPrimitive");t.exports=function(t,e){if(!r(t)||a(t))return t;var n,o=t[c];if(void 0!==o){if(void 0===e&&(e="default"),n=o.call(t,e),!r(n)||a(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},c272:function(t,e,n){var r=n("a84f"),a=n("09d1"),i=n("fb8a"),o=function(t){return function(e,n,o){var c,s=r(e),l=a(s.length),u=i(o,l);if(t&&n!=n){while(l>u)if(c=s[u++],c!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},c35a:function(t,e,n){var r=n("7820"),a=n("ca70"),i=n("8b0e"),o=i("iterator");t.exports=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||a[r(t)]}},c430:function(t,e){t.exports=!1},c4dd:function(t,e,n){var r=n("09e4"),a=n("bb6e"),i=r.document,o=a(i)&&a(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},c51e:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},c637:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return m})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return O})),n.d(e,"s",(function(){return z})),n.d(e,"t",(function(){return j})),n.d(e,"u",(function(){return w})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return _})),n.d(e,"x",(function(){return C})),n.d(e,"y",(function(){return A})),n.d(e,"z",(function(){return V})),n.d(e,"A",(function(){return I})),n.d(e,"C",(function(){return k})),n.d(e,"D",(function(){return H})),n.d(e,"E",(function(){return S})),n.d(e,"F",(function(){return P})),n.d(e,"G",(function(){return T})),n.d(e,"H",(function(){return L})),n.d(e,"I",(function(){return B})),n.d(e,"J",(function(){return x})),n.d(e,"K",(function(){return F})),n.d(e,"L",(function(){return E})),n.d(e,"M",(function(){return D})),n.d(e,"O",(function(){return R})),n.d(e,"P",(function(){return $})),n.d(e,"Q",(function(){return N})),n.d(e,"R",(function(){return q})),n.d(e,"S",(function(){return U})),n.d(e,"T",(function(){return W})),n.d(e,"U",(function(){return G})),n.d(e,"V",(function(){return K})),n.d(e,"W",(function(){return Y})),n.d(e,"X",(function(){return X})),n.d(e,"Y",(function(){return J})),n.d(e,"ab",(function(){return Q})),n.d(e,"bb",(function(){return Z})),n.d(e,"cb",(function(){return tt})),n.d(e,"db",(function(){return et})),n.d(e,"eb",(function(){return nt})),n.d(e,"fb",(function(){return rt})),n.d(e,"gb",(function(){return at})),n.d(e,"hb",(function(){return it})),n.d(e,"ib",(function(){return ot})),n.d(e,"jb",(function(){return ct})),n.d(e,"kb",(function(){return st})),n.d(e,"lb",(function(){return lt})),n.d(e,"mb",(function(){return ut})),n.d(e,"nb",(function(){return ht})),n.d(e,"ob",(function(){return dt})),n.d(e,"pb",(function(){return ft})),n.d(e,"qb",(function(){return pt})),n.d(e,"rb",(function(){return vt})),n.d(e,"sb",(function(){return mt})),n.d(e,"tb",(function(){return bt})),n.d(e,"ub",(function(){return gt})),n.d(e,"vb",(function(){return yt})),n.d(e,"wb",(function(){return Ot})),n.d(e,"xb",(function(){return zt})),n.d(e,"yb",(function(){return jt})),n.d(e,"zb",(function(){return wt})),n.d(e,"Ab",(function(){return Mt})),n.d(e,"Bb",(function(){return _t})),n.d(e,"Cb",(function(){return Ct})),n.d(e,"Db",(function(){return At})),n.d(e,"Eb",(function(){return Vt})),n.d(e,"Fb",(function(){return It})),n.d(e,"Gb",(function(){return kt})),n.d(e,"Hb",(function(){return Ht})),n.d(e,"Ib",(function(){return St})),n.d(e,"Jb",(function(){return Pt})),n.d(e,"Kb",(function(){return Tt})),n.d(e,"Lb",(function(){return Lt})),n.d(e,"Mb",(function(){return Bt})),n.d(e,"Nb",(function(){return xt})),n.d(e,"Ob",(function(){return Ft})),n.d(e,"Pb",(function(){return Et})),n.d(e,"Qb",(function(){return Dt})),n.d(e,"Ub",(function(){return Rt})),n.d(e,"Vb",(function(){return $t})),n.d(e,"Wb",(function(){return Nt})),n.d(e,"Xb",(function(){return qt})),n.d(e,"Yb",(function(){return Ut})),n.d(e,"Zb",(function(){return Wt})),n.d(e,"ac",(function(){return Gt})),n.d(e,"bc",(function(){return Kt})),n.d(e,"cc",(function(){return Yt})),n.d(e,"dc",(function(){return Xt})),n.d(e,"ec",(function(){return Jt})),n.d(e,"fc",(function(){return Qt})),n.d(e,"gc",(function(){return Zt})),n.d(e,"hc",(function(){return te})),n.d(e,"ic",(function(){return ee})),n.d(e,"jc",(function(){return ne})),n.d(e,"lc",(function(){return re})),n.d(e,"mc",(function(){return ae})),n.d(e,"nc",(function(){return ie})),n.d(e,"oc",(function(){return oe})),n.d(e,"pc",(function(){return ce})),n.d(e,"qc",(function(){return se})),n.d(e,"rc",(function(){return le})),n.d(e,"tc",(function(){return ue})),n.d(e,"wc",(function(){return he})),n.d(e,"B",(function(){return de})),n.d(e,"N",(function(){return fe})),n.d(e,"Z",(function(){return pe})),n.d(e,"Rb",(function(){return ve})),n.d(e,"Sb",(function(){return me})),n.d(e,"Tb",(function(){return be})),n.d(e,"kc",(function(){return ge})),n.d(e,"sc",(function(){return ye})),n.d(e,"uc",(function(){return Oe})),n.d(e,"vc",(function(){return ze})),n.d(e,"xc",(function(){return je})),n.d(e,"yc",(function(){return we})),n.d(e,"zc",(function(){return Me}));var r="BAlert",a="BAspect",i="BAvatar",o="BAvatarGroup",c="BBadge",s="BBreadcrumb",l="BBreadcrumbItem",u="BBreadcrumbLink",h="BButton",d="BButtonClose",f="BButtonGroup",p="BButtonToolbar",v="BCalendar",m="BCard",b="BCardBody",g="BCardFooter",y="BCardGroup",O="BCardHeader",z="BCardImg",j="BCardImgLazy",w="BCardSubTitle",M="BCardText",_="BCardTitle",C="BCarousel",A="BCarouselSlide",V="BCol",I="BCollapse",k="BContainer",H="BDropdown",S="BDropdownDivider",P="BDropdownForm",T="BDropdownGroup",L="BDropdownHeader",B="BDropdownItem",x="BDropdownItemButton",F="BDropdownText",E="BEmbed",D="BForm",R="BFormCheckbox",$="BFormCheckboxGroup",N="BFormDatalist",q="BFormDatepicker",U="BFormFile",W="BFormGroup",G="BFormInput",K="BFormInvalidFeedback",Y="BFormRadio",X="BFormRadioGroup",J="BFormRating",Q="BFormRow",Z="BFormSelect",tt="BFormSelectOption",et="BFormSelectOptionGroup",nt="BFormSpinbutton",rt="BFormTag",at="BFormTags",it="BFormText",ot="BFormTextarea",ct="BFormTimepicker",st="BFormValidFeedback",lt="BIcon",ut="BIconstack",ht="BIconBase",dt="BImg",ft="BImgLazy",pt="BInputGroup",vt="BInputGroupAddon",mt="BInputGroupAppend",bt="BInputGroupPrepend",gt="BInputGroupText",yt="BJumbotron",Ot="BLink",zt="BListGroup",jt="BListGroupItem",wt="BMedia",Mt="BMediaAside",_t="BMediaBody",Ct="BModal",At="BMsgBox",Vt="BNav",It="BNavbar",kt="BNavbarBrand",Ht="BNavbarNav",St="BNavbarToggle",Pt="BNavForm",Tt="BNavItem",Lt="BNavItemDropdown",Bt="BNavText",xt="BOverlay",Ft="BPagination",Et="BPaginationNav",Dt="BPopover",Rt="BProgress",$t="BProgressBar",Nt="BRow",qt="BSidebar",Ut="BSkeleton",Wt="BSkeletonIcon",Gt="BSkeletonImg",Kt="BSkeletonTable",Yt="BSkeletonWrapper",Xt="BSpinner",Jt="BTab",Qt="BTable",Zt="BTableCell",te="BTableLite",ee="BTableSimple",ne="BTabs",re="BTbody",ae="BTfoot",ie="BTh",oe="BThead",ce="BTime",se="BToast",le="BToaster",ue="BTooltip",he="BTr",de="BVCollapse",fe="BVFormBtnLabelControl",pe="BVFormRatingStar",ve="BVPopover",me="BVPopoverTemplate",be="BVPopper",ge="BVTabButton",ye="BVToastPop",Oe="BVTooltip",ze="BVTooltipTemplate",je="BVTransition",we="BVTransporter",Me="BVTransporterTarget"},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),a=n("ce4e"),i="__core-js_shared__",o=r[i]||a(i,{});t.exports=o},c85d:function(t,e,n){var r=n("09e4");t.exports=r.Promise},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c9a9:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("7b1e"),a=n("d82f");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return d(t)||h(t)||u(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Object(r["a"])(e)?e.reduce((function(e,n){return[].concat(s(e),[t(n,n)])}),[]):Object(r["k"])(e)?Object(a["h"])(e).reduce((function(n,r){return o(o({},n),{},c({},r,t(e[r],e[r])))}),{}):n}},ca70:function(t,e){t.exports={}},ca84:function(t,e,n){var r=n("5135"),a=n("fc6a"),i=n("4d64").indexOf,o=n("d012");t.exports=function(t,e){var n,c=a(t),s=0,l=[];for(n in c)!r(o,n)&&r(c,n)&&l.push(n);while(e.length>s)r(c,n=e[s++])&&(~i(l,n)||l.push(n));return l}},ca88:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return y}));var r=n("e863");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function c(t){var e=d();return function(){var n,r=v(t);if(e){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"===typeof Map?new Map:void 0;return u=function(t){if(null===t||!f(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,v(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)},u(t)}function h(t,e,n){return h=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=Function.bind.apply(t,r),i=new a;return n&&p(i,n.prototype),i},h.apply(null,arguments)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=r["h"]?r["k"].Element:function(t){o(n,t);var e=c(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(u(Object)),b=r["h"]?r["k"].HTMLElement:function(t){o(n,t);var e=c(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(m),g=r["h"]?r["k"].SVGElement:function(t){o(n,t);var e=c(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(m),y=r["h"]?r["k"].File:function(t){o(n,t);var e=c(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(u(Object))},caad:function(t,e,n){var r=n("8b0e"),a=n("ca70"),i=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[i]===t)}},caad6:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cc12:function(t,e,n){var r=n("da84"),a=n("861d"),i=r.document,o=a(i)&&a(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},cf75:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return b})),n.d(e,"e",(function(){return g})),n.d(e,"d",(function(){return O})),n.d(e,"b",(function(){return j}));var r=n("a723"),a=n("c9a9"),i=n("228e"),o=n("6c06"),c=n("7b1e"),s=n("d82f"),l=n("fa73");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){return t+Object(l["j"])(e)},p=function(t,e){return Object(l["d"])(e.replace(t,""))},v=function(t,e){return e+(t?Object(l["j"])(t):"")},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r["a"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=!0===n;return a=i?a:n,h(h(h({},t?{type:t}:{}),i?{required:i}:Object(c["o"])(e)?{}:{default:Object(c["j"])(e)?function(){return e}:e}),Object(c["o"])(a)?{}:{validator:a})},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o["a"];if(Object(c["a"])(t))return t.map(e);var n={};for(var r in t)Object(s["g"])(t,r)&&(n[e(r)]=Object(c["j"])(t[r])?Object(s["b"])(t[r]):t[r]);return n},g=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o["a"];return(Object(c["a"])(t)?t.slice():Object(s["h"])(t)).reduce((function(t,r){return t[n(r)]=e[r],t}),{})},y=function(t,e,n){return h(h({},Object(a["a"])(t)),{},{default:function(){var r=Object(i["c"])(n,e,t.default);return Object(c["f"])(r)?r():r}})},O=function(t,e){return Object(s["h"])(t).reduce((function(n,r){return h(h({},n),{},d({},r,y(t[r],r,e)))}),{})},z=y({},"","").default.name,j=function(t){return Object(c["f"])(t)&&t.name!==z}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t]):r[t]&&r[t][e]}},d0c8:function(t,e,n){var r=n("bb6e");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!r.call({1:2},1);e.f=i?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),a=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),a(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),a=n("6eeb"),i=n("b041");r||a(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,a=n("5135"),i=n("b622"),o=i("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d714:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},d82f:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"n",(function(){return p})),n.d(e,"b",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return g})),n.d(e,"m",(function(){return y})),n.d(e,"l",(function(){return O}));var r=n("7b1e");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return Object.assign.apply(Object,arguments)},s=function(t,e){return Object.create(t,e)},l=function(t,e){return Object.defineProperties(t,e)},u=function(t,e,n){return Object.defineProperty(t,e,n)},h=function(t){return Object.getOwnPropertyNames(t)},d=function(t){return Object.keys(t)},f=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p=function(t){return Object.prototype.toString.call(t)},v=function(t){return i({},t)},m=function(t,e){return d(t).filter((function(t){return-1!==e.indexOf(t)})).reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},b=function(t,e){return d(t).filter((function(t){return-1===e.indexOf(t)})).reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},g=function t(e,n){return Object(r["j"])(e)&&Object(r["j"])(n)&&d(n).forEach((function(a){Object(r["j"])(n[a])?(e[a]&&Object(r["j"])(e[a])||(e[a]=n[a]),t(e[a],n[a])):c(e,o({},a,n[a]))})),e},y=function(t){return d(t).sort().reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},O=function(){return{enumerable:!0,configurable:!1,writable:!1}}},d9b5:function(t,e,n){var r=n("d066"),a=n("fdbf");t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},db8f:function(t,e,n){var r=n("09e4"),a=n("79ae"),i="__core-js_shared__",o=r[i]||a(i,{});t.exports=o},ddb0:function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("785a"),o=n("e260"),c=n("9112"),s=n("b622"),l=s("iterator"),u=s("toStringTag"),h=o.values,d=function(t,e){if(t){if(t[l]!==h)try{c(t,l,h)}catch(r){t[l]=h}if(t[u]||c(t,u,e),a[e])for(var n in o)if(t[n]!==o[n])try{c(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var f in a)d(r[f]&&r[f].prototype,f);d(i,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),a=n("7839");t.exports=Object.keys||function(t){return r(t,a)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var a=t[r];"."===a?t.splice(r,1):".."===a?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,a=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!a){n=e+1;break}}else-1===r&&(a=!1,r=e+1);return-1===r?"":t.slice(n,r)}function a(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(a(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(a(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var a=r(t.split("/")),i=r(n.split("/")),o=Math.min(a.length,i.length),c=o,s=0;s<o;s++)if(a[s]!==i[s]){c=s;break}var l=[];for(s=c;s<a.length;s++)l.push("..");return l=l.concat(i.slice(c)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,a=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!a){r=i;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,a=!0,i=0,o=t.length-1;o>=0;--o){var c=t.charCodeAt(o);if(47!==c)-1===r&&(a=!1,r=o+1),46===c?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!a){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},df84:function(t,e,n){var r=n("0368"),a=n("4c07"),i=n("d0c8"),o=n("f14a");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=o(e),c=r.length,s=0;while(c>s)a.f(t,n=r[s++],e[n]);return t}},e163:function(t,e,n){var r=n("5135"),a=n("7b0b"),i=n("f772"),o=n("e177"),c=i("IE_PROTO"),s=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=a(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),a=n("44d2"),i=n("3f8c"),o=n("69f3"),c=n("7dd0"),s="Array Iterator",l=o.set,u=o.getterFor(s);t.exports=c(Array,"Array",(function(t,e){l(this,{type:s,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},e379:function(t,e,n){"use strict";var r,a,i,o,c=n("199f"),s=n("0f33"),l=n("09e4"),u=n("0ee6"),h=n("c85d"),d=n("7024"),f=n("2ba0"),p=n("997c"),v=n("77da"),m=n("793f"),b=n("bb6e"),g=n("90c5"),y=n("8f08"),O=n("0209"),z=n("0761"),j=n("808c"),w=n("894d"),M=n("0fd9").set,_=n("5923"),C=n("8fe4"),A=n("b1b0"),V=n("761e"),I=n("189d"),k=n("a547"),H=n("25d0"),S=n("8b0e"),P=n("562f"),T=n("6629"),L=n("fce5"),B=S("species"),x="Promise",F=k.get,E=k.set,D=k.getterFor(x),R=h&&h.prototype,$=h,N=R,q=l.TypeError,U=l.document,W=l.process,G=V.f,K=G,Y=!!(U&&U.createEvent&&l.dispatchEvent),X="function"==typeof PromiseRejectionEvent,J="unhandledrejection",Q="rejectionhandled",Z=0,tt=1,et=2,nt=1,rt=2,at=!1,it=H(x,(function(){var t=O($),e=t!==String($);if(!e&&66===L)return!0;if(s&&!N["finally"])return!0;if(L>=51&&/native code/.test(t))return!1;var n=new $((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},a=n.constructor={};return a[B]=r,at=n.then((function(){}))instanceof r,!at||!e&&P&&!X})),ot=it||!j((function(t){$.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!b(t)||"function"!=typeof(e=t.then))&&e},st=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;_((function(){var r=t.value,a=t.state==tt,i=0;while(n.length>i){var o,c,s,l=n[i++],u=a?l.ok:l.fail,h=l.resolve,d=l.reject,f=l.domain;try{u?(a||(t.rejection===rt&&dt(t),t.rejection=nt),!0===u?o=r:(f&&f.enter(),o=u(r),f&&(f.exit(),s=!0)),o===l.promise?d(q("Promise-chain cycle")):(c=ct(o))?c.call(o,h,d):h(o)):d(r)}catch(p){f&&!s&&f.exit(),d(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ut(t)}))}},lt=function(t,e,n){var r,a;Y?(r=U.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},!X&&(a=l["on"+t])?a(r):t===J&&A("Unhandled promise rejection",n)},ut=function(t){M.call(l,(function(){var e,n=t.facade,r=t.value,a=ht(t);if(a&&(e=I((function(){T?W.emit("unhandledRejection",r,n):lt(J,n,r)})),t.rejection=T||ht(t)?rt:nt,e.error))throw e.value}))},ht=function(t){return t.rejection!==nt&&!t.parent},dt=function(t){M.call(l,(function(){var e=t.facade;T?W.emit("rejectionHandled",e):lt(Q,e,t.value)}))},ft=function(t,e,n){return function(r){t(e,r,n)}},pt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,st(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw q("Promise can't be resolved itself");var r=ct(e);r?_((function(){var n={done:!1};try{r.call(e,ft(vt,n,t),ft(pt,n,t))}catch(a){pt(n,a,t)}})):(t.value=e,t.state=tt,st(t,!1))}catch(a){pt({done:!1},a,t)}}};if(it&&($=function(t){y(this,$,x),g(t),r.call(this);var e=F(this);try{t(ft(vt,e),ft(pt,e))}catch(n){pt(e,n)}},N=$.prototype,r=function(t){E(this,{type:x,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=f(N,{then:function(t,e){var n=D(this),r=G(w(this,$));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=T?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&st(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new r,e=F(t);this.promise=t,this.resolve=ft(vt,e),this.reject=ft(pt,e)},V.f=G=function(t){return t===$||t===i?new a(t):K(t)},!s&&"function"==typeof h&&R!==Object.prototype)){o=R.then,at||(d(R,"then",(function(t,e){var n=this;return new $((function(t,e){o.call(n,t,e)})).then(t,e)}),{unsafe:!0}),d(R,"catch",N["catch"],{unsafe:!0}));try{delete R.constructor}catch(mt){}p&&p(R,N)}c({global:!0,wrap:!0,forced:it},{Promise:$}),v($,x,!1,!0),m(x),i=u(x),c({target:x,stat:!0,forced:it},{reject:function(t){var e=G(this);return e.reject.call(void 0,t),e.promise}}),c({target:x,stat:!0,forced:s||it},{resolve:function(t){return C(s&&this===i?$:this,t)}}),c({target:x,stat:!0,forced:ot},{all:function(t){var e=this,n=G(e),r=n.resolve,a=n.reject,i=I((function(){var n=g(e.resolve),i=[],o=0,c=1;z(t,(function(t){var s=o++,l=!1;i.push(void 0),c++,n.call(e,t).then((function(t){l||(l=!0,i[s]=t,--c||r(i))}),a)})),--c||r(i)}));return i.error&&a(i.value),n.promise},race:function(t){var e=this,n=G(e),r=n.reject,a=I((function(){var a=g(e.resolve);z(t,(function(t){a.call(e,t).then(n.resolve,r)}))}));return a.error&&r(a.value),n.promise}})},e3f1:function(t,e,n){var r=n("fe68"),a=n("fa60");t.exports=function(t){var e=r(t,"string");return a(e)?e:String(e)}},e623:function(t,e,n){"use strict";var r=n("a84f"),a=n("613f"),i=n("ca70"),o=n("a547"),c=n("a580"),s="Array Iterator",l=o.set,u=o.getterFor(s);t.exports=c(Array,"Array",(function(t,e){l(this,{type:s,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var a;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(a||(a={}));const i={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},o=a.INFO,c={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},s=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),a=c[e];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[a](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=s,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in a))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...t),this._logHandler(this,a.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...t),this._logHandler(this,a.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,a.INFO,...t),this._logHandler(this,a.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,a.WARN,...t),this._logHandler(this,a.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...t),this._logHandler(this,a.ERROR,...t)}}function u(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:a[n].toLowerCase(),message:o,args:i,type:e.name})}}}},e863:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"i",(function(){return s})),n.d(e,"k",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"e",(function(){return m})),n.d(e,"b",(function(){return b}));var r="undefined"!==typeof window,a="undefined"!==typeof document,i="undefined"!==typeof navigator,o="undefined"!==typeof Promise,c="undefined"!==typeof MutationObserver||"undefined"!==typeof WebKitMutationObserver||"undefined"!==typeof MozMutationObserver,s=r&&a&&i,l=r?window:{},u=a?document:{},h=i?navigator:{},d=(h.userAgent||"").toLowerCase(),f=d.indexOf("jsdom")>0,p=(/msie|trident/.test(d),function(){var t=!1;if(s)try{var e={get passive(){t=!0}};l.addEventListener("test",e,e),l.removeEventListener("test",e,e)}catch(n){t=!1}return t}()),v=s&&("ontouchstart"in u.documentElement||h.maxTouchPoints>0),m=s&&Boolean(l.PointerEvent||l.MSPointerEvent),b=s&&"IntersectionObserver"in l&&"IntersectionObserverEntry"in l&&"intersectionRatio"in l.IntersectionObserverEntry.prototype},e893:function(t,e,n){var r=n("5135"),a=n("56ef"),i=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=a(e),c=o.f,s=i.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||c(t,u,s(e,u))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ce})),n.d(e,"b",(function(){return sr})),n.d(e,"c",(function(){return le})),n.d(e,"d",(function(){return se})),n.d(e,"e",(function(){return ue}));var r=n("1fd5"),a=n("589b");function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}Object.create;Object.create;var o=n("e691"),c=n("22e5");function s(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=s,u=new r["b"]("auth","Firebase",s()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${a["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const a=Object.assign(Object.assign({},l()),{[e]:n}),i=new r["b"]("auth","Firebase",a);return i.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function b(t,e,...n){if(!t)throw m(e,...n)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function y(t,e){t||g(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Map;function z(t){y(t instanceof Function,"Expected a class definition");let e=O.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=Object(a["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),a=n.getOptions();if(Object(r["n"])(a,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function w(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(z);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function _(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(_()||Object(r["t"])()||"connection"in navigator))||navigator.onLine}function V(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,a,i={}){return B(t,i,async()=>{let i={},o={};a&&("GET"===e?o=a:i={body:JSON.stringify(a)});const c=Object(r["C"])(Object.assign({key:t.config.apiKey},o)).slice(1),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/json",t.languageCode&&(s["X-Firebase-Locale"]=t.languageCode),H.fetch()(F(t,t.config.apiHost,n,c),Object.assign({method:e,headers:s,referrerPolicy:"no-referrer"},i))})}async function B(t,e,n){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},S),e);try{const e=new E(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw D(t,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const e=r.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw D(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw D(t,"email-already-in-use",i);const c=a[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,c,o);f(t,c)}}catch(i){if(i instanceof r["c"])throw i;f(t,"network-request-failed")}}async function x(t,e,n,r,a={}){const i=await L(t,e,n,r,a);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{_serverResponse:i}),i}function F(t,e,n,r){const a=`${e}${n}?${r}`;return t.config.emulator?k(t.config,a):`${t.config.apiScheme}://${a}`}class E{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=p(t,e,r);return a.customData._tokenResponse=n,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e=!1){const n=Object(r["q"])(t),a=await n.getIdToken(e),i=W(a);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,c=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:a,authTime:N(U(i.auth_time)),issuedAtTime:N(U(i.iat)),expirationTime:N(U(i.exp)),signInProvider:c||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function U(t){return 1e3*Number(t)}function W(t){const[e,n,a]=t.split(".");if(void 0===e||void 0===n||void 0===a)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["h"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function G(t){const e=W(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof r["c"]&&Y(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=N(this.lastLoginAt),this.creationTime=N(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),a=await K(t,$(n,{idToken:r}));b(null===a||void 0===a?void 0:a.users.length,n,"internal-error");const i=a.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],c=tt(t.providerData,o),s=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(null===c||void 0===c?void 0:c.length),u=!!s&&l,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=Object(r["q"])(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=i(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await B(t,{},async()=>{const n=Object(r["C"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:i}=t.config,o=F(t,a,"/v1/token","key="+i),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",H.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return b(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:a}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:a}=e,i=new rt;return n&&(b("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:t}),i.accessToken=r),a&&(b("number"===typeof a,"internal-error",{appName:t}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,a=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.metadata=new J(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return q(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,R(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,a,i,o,c,s,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(a=e.phoneNumber)&&void 0!==a?a:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(c=e._redirectEventId)&&void 0!==c?c:void 0,m=null!==(s=e.createdAt)&&void 0!==s?s:void 0,g=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:O,isAnonymous:z,providerData:j,stsTokenManager:w}=e;b(y&&w,t,"internal-error");const M=rt.fromJSON(this.name,w);b("string"===typeof y,t,"internal-error"),at(u,t.name),at(h,t.name),b("boolean"===typeof O,t,"internal-error"),b("boolean"===typeof z,t,"internal-error"),at(d,t.name),at(f,t.name),at(p,t.name),at(v,t.name),at(m,t.name),at(g,t.name);const _=new it({uid:y,auth:t,email:h,emailVerified:O,displayName:u,isAnonymous:z,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:M,createdAt:m,lastLoginAt:g});return j&&Array.isArray(j)&&(_.providerData=j.map(t=>Object.assign({},t))),v&&(_._redirectEventId=v),_}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const a=new it({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(a),a}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const ct=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,a),this.fullPersistenceKey=st("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(z(ct),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let a=r[0]||z(ct);const i=st(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(i);if(e){const n=it._fromJSON(t,e);l!==a&&(o=n),a=l;break}}catch(s){}const c=r.filter(t=>t._shouldAllowMigration);return a._shouldAllowMigration&&c.length?(a=c[0],o&&await a._set(i,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==a)try{await t._remove(i)}catch(s){}})),new lt(a,t,n)):new lt(a,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(bt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["r"])()){return/firefox\//i.test(t)}function dt(t=Object(r["r"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=Object(r["r"])()){return/crios\//i.test(t)}function pt(t=Object(r["r"])()){return/iemobile/i.test(t)}function vt(t=Object(r["r"])()){return/android/i.test(t)}function mt(t=Object(r["r"])()){return/blackberry/i.test(t)}function bt(t=Object(r["r"])()){return/webos/i.test(t)}function gt(t=Object(r["r"])()){return/iphone|ipad|ipod/i.test(t)}function yt(t=Object(r["r"])()){var e;return gt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ot(){return Object(r["v"])()&&10===document.documentMode}function zt(t=Object(r["r"])()){return gt(t)||vt(t)||bt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function jt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e=[]){let n;switch(t){case"Browser":n=ut(Object(r["r"])());break;case"Worker":n=`${ut(Object(r["r"])())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${a["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=z(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,a=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(t);r&&r!==a||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=V()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["q"])(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(z(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&z(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[z(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const a="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return b(i,this,"internal-error"),i.then(()=>a(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function _t(t){return Object(r["q"])(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["l"])(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(t,e){return x(t,"POST","/v1/accounts:signInWithPassword",T(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",T(t,e))}async function Ht(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",T(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends At{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new St(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new St(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return It(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Vt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ht(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return x(t,"POST","/v1/accounts:signInWithIdp",T(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="http://localhost";class Lt extends At{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Lt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,a=i(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Lt(n,r);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Pt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Pt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Pt(t,e)}buildRequest(){const t={requestUri:Tt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["C"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",T(t,e))}async function xt(t,e){return x(t,"POST","/v1/accounts:signInWithPhoneNumber",T(t,e))}async function Ft(t,e){const n=await x(t,"POST","/v1/accounts:signInWithPhoneNumber",T(t,e));if(n.temporaryProof)throw D(t,"account-exists-with-different-credential",n);return n}const Et={["USER_NOT_FOUND"]:"user-not-found"};async function Dt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return x(t,"POST","/v1/accounts:signInWithPhoneNumber",T(t,n),Et)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends At{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Rt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Rt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return xt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Dt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:a}=t;return n||e||r||a?new Rt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nt(t){const e=Object(r["D"])(Object(r["p"])(t))["link"],n=e?Object(r["D"])(Object(r["p"])(e))["deep_link_id"]:null,a=Object(r["D"])(Object(r["p"])(t))["deep_link_id"],i=a?Object(r["D"])(Object(r["p"])(a))["link"]:null;return i||a||n||e||t}class qt{constructor(t){var e,n,a,i,o,c;const s=Object(r["D"])(Object(r["p"])(t)),l=null!==(e=s["apiKey"])&&void 0!==e?e:null,u=null!==(n=s["oobCode"])&&void 0!==n?n:null,h=$t(null!==(a=s["mode"])&&void 0!==a?a:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=s["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=s["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(c=s["tenantId"])&&void 0!==c?c:null}static parseLink(t){const e=Nt(t);try{return new qt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(){this.providerId=Ut.PROVIDER_ID}static credential(t,e){return St._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=qt.parseLink(e);return b(n,"argument-error"),St._fromEmailAndCode(t,n.code,n.tenantId)}}Ut.PROVIDER_ID="password",Ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Gt{constructor(){super("facebook.com")}static credential(t){return Lt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Lt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Yt.credential(e,n)}catch(r){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Gt{constructor(){super("github.com")}static credential(t){return Lt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Lt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return x(t,"POST","/v1/accounts:signUp",T(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const a=await it._fromIdTokenResponse(t,n,r),i=te(n),o=new Zt({user:a,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r["c"]{constructor(t,e,n,r){var a;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(a=t.tenantId)&&void 0!==a?a:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const a="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return a.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ae(t,e,n=!1){const{auth:r}=t,a="reauthenticate";try{const i=await K(t,ne(r,a,e,t),n);b(i.idToken,r,"internal-error");const o=W(i.idToken);b(o,r,"internal-error");const{sub:c}=o;return b(t.uid===c,r,"user-mismatch"),Zt._forOperation(t,a,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const r="signIn",a=await ne(t,r,e),i=await Zt._fromIdTokenResponse(t,r,a);return n||await t._updateCurrentUser(i.user),i}async function oe(t,e){return ie(_t(t),e)}async function ce(t,e,n){const r=_t(t),a=await Qt(r,{returnSecureToken:!0,email:e,password:n}),i=await Zt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(i.user),i}function se(t,e,n){return oe(Object(r["q"])(t),Ut.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n,a){return Object(r["q"])(t).onAuthStateChanged(e,n,a)}function ue(t){return Object(r["q"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",T(t,e))}function de(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",T(t,e))}new WeakMap;const fe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fe,"1"),this.storage.removeItem(fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){const t=Object(r["r"])();return dt(t)||gt(t)}const me=1e3,be=10;class ge extends pe{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ve()&&jt(),this.fallbackToPolling=zt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},a=this.storage.getItem(n);Ot()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,be):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ge.type="LOCAL";const ye=ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends pe{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Oe.type="SESSION";const ze=Oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new we(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:a}=e.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async t=>t(e.origin,a)),c=await je(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.receivers=[];class _e{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise((o,c)=>{const s=Me("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===s)switch(e.data.status){case"ack":clearTimeout(l),a=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(e.data.response);break;default:clearTimeout(l),clearTimeout(a),c(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:s,data:e},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Ae(t){Ce().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return"undefined"!==typeof Ce()["WorkerGlobalScope"]&&"function"===typeof Ce()["importScripts"]}async function Ie(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function ke(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function He(){return Ve()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebaseLocalStorageDb",Pe=1,Te="firebaseLocalStorage",Le="fbase_key";class Be{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function xe(t,e){return t.transaction([Te],e?"readwrite":"readonly").objectStore(Te)}function Fe(){const t=indexedDB.deleteDatabase(Se);return new Be(t).toPromise()}function Ee(){const t=indexedDB.open(Se,Pe);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Te,{keyPath:Le})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Te)?e(n):(n.close(),await Fe(),e(await Ee()))})})}async function De(t,e,n){const r=xe(t,!0).put({[Le]:e,value:n});return new Be(r).toPromise()}async function Re(t,e){const n=xe(t,!1).get(e),r=await new Be(n).toPromise();return void 0===r?null:r.value}function $e(t,e){const n=xe(t,!0).delete(e);return new Be(n).toPromise()}const Ne=800,qe=3;class Ue{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ee()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>qe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ve()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=we._getInstance(He()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ie(),!this.activeServiceWorker)return;this.sender=new _e(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&ke()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ee();return await De(t,fe,"1"),await $e(t,fe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>De(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Re(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$e(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=xe(t,!1).getAll();return new Be(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:a}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ne)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ue.type="LOCAL";const We=Ue;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",T(t,e))}function Ke(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",T(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Xe(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ye().appendChild(r)})}function Je(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Je("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe="recaptcha";async function Ze(t,e,n){var r;const a=await n.verify();try{let i;if(b("string"===typeof a,t,"argument-error"),b(n.type===Qe,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){b("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:a}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(n,t,"missing-multi-factor-info");const o=await Ge(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Bt(t,{phoneNumber:i.phoneNumber,recaptchaToken:a});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(t){this.providerId=tn.PROVIDER_ID,this.auth=_t(t)}verifyPhoneNumber(t,e){return Ze(this.auth,t,Object(r["q"])(e))}static credential(t,e){return Rt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tn.credentialFromTaggedObject(e)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Rt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){return e?z(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class nn extends At{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Pt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Pt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function rn(t){return ie(t.auth,new nn(t),t.bypassAuthState)}function an(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ae(n,new nn(t),t.bypassAuthState)}async function on(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),re(n,new nn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,r,a=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=t;if(i)return void this.reject(i);const c={auth:this.auth,requestUri:e,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(s){this.reject(s)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new I(2e3,1e4);class ln extends cn{constructor(t,e,n,r,a){super(t,e,r,a),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=Me();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,sn.get())};t()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="pendingRedirect",hn=new Map;class dn extends cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(t,e){const n=vn(e),r=pn(t);if(!await r._isAvailable())return!1;const a="true"===await r._get(n);return await r._remove(n),a}function pn(t){return z(t._redirectPersistence)}function vn(t){return st(un,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e,n=!1){const r=_t(t),a=en(r,e),i=new dn(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class gn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!zn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!On(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(yn(t))}saveEventToCache(t){this.cachedEventUids.add(yn(t)),this.lastProcessedEventTime=Date.now()}}function yn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function On({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function zn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mn=/^https?/;async function _n(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jn(t);for(const r of e)try{if(Cn(r))return}catch(n){}f(t,"unauthorized-domain")}function Cn(t){const e=M(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return""===a.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!Mn.test(n))return!1;if(wn.test(t))return r===t;const a=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+a+"|"+a+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new I(3e4,6e4);function Vn(){const t=Ce().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function In(t){return new Promise((e,n)=>{var r,a,i;function o(){Vn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vn(),n(p(t,"network-request-failed"))},timeout:An.get()})}if(null===(a=null===(r=Ce().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ce().gapi)||void 0===i?void 0:i.load)){const e=Je("iframefcb");return Ce()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Xe("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw kn=null,t})}let kn=null;function Hn(t){return kn=kn||In(t),kn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new I(5e3,15e3),Pn="__/auth/iframe",Tn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xn(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,Tn):`https://${t.config.authDomain}/${Pn}`,i={apiKey:e.apiKey,appName:t.name,v:a["a"]},o=Bn.get(t.config.apiHost);o&&(i.eid=o);const c=t._getFrameworks();return c.length&&(i.fw=c.join(",")),`${n}?${Object(r["C"])(i).slice(1)}`}async function Fn(t){const e=await Hn(t),n=Ce().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:xn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const a=p(t,"network-request-failed"),i=Ce().setTimeout(()=>{r(a)},Sn.get());function o(){Ce().clearTimeout(i),n(e)}e.ping(o).then(o,()=>{r(a)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dn=500,Rn=600,$n="_blank",Nn="http://localhost";class qn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Un(t,e,n,a=Dn,i=Rn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-a)/2,0).toString();let s="";const l=Object.assign(Object.assign({},En),{width:a.toString(),height:i.toString(),top:o,left:c}),u=Object(r["r"])().toLowerCase();n&&(s=ft(u)?$n:n),ht(u)&&(e=e||Nn,l.scrollbars="yes");const h=Object.entries(l).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(yt(u)&&"_self"!==s)return Wn(e||"",s),new qn(null);const d=window.open(e||"",s,h);b(d,t,"popup-blocked");try{d.focus()}catch(f){}return new qn(d)}function Wn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Yn(t,e,n,i,o,c){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:a["a"],eventId:o};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Object(r["u"])(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(c||{}))s[t]=e}if(e instanceof Gt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Xn(t)}?${Object(r["C"])(l).slice(1)}`}function Xn({config:t}){return t.emulator?k(t,Kn):`https://${t.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="webStorageSupport";class Qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ze,this._completeRedirectFn=mn}async _openPopup(t,e,n,r){var a;y(null===(a=this.eventManagers[t._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const i=Yn(t,e,n,M(),r);return Un(t,i,Me())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ae(Yn(t,e,n,M(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Fn(t),n=new gn(t);return e.register("authEvent",e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Jn,{type:Jn},n=>{var r;const a=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Jn];void 0!==a&&e(!!a),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=_n(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return zt()||dt()||gt()}}const Zn=Qn;class tr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return g("unexpected MultiFactorSessionType")}}}class er extends tr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new er(t)}_finalizeEnroll(t,e,n){return de(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ke(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(t){return er._fromCredential(t)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ar="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cr(t){Object(a["c"])(new c["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:a,authDomain:i}=r.options;return(e=>{b(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),b(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:e.name});const r={apiKey:a,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(t)},o=new Mt(e,r);return w(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(a["c"])(new c["a"]("auth-internal",t=>{const e=_t(t.getProvider("auth").getImmediate());return(t=>new ir(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(a["f"])(rr,ar,or(t)),Object(a["f"])(rr,ar,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t=Object(a["d"])()){const e=Object(a["b"])(t,"auth");return e.isInitialized()?e.getImmediate():j(t,{popupRedirectResolver:Zn,persistence:[We,ye,ze]})}cr("Browser")},ebca:function(t,e,n){var r=n("76af");t.exports=function(t){return Object(r(t))}},f0bd:function(t,e,n){"use strict";(function(t){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,r=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(n&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function a(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}function i(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),r))}}var o=n&&window.Promise,c=o?a:i;function s(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function l(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView,r=n.getComputedStyle(t,null);return e?r[e]:r}function u(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function h(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=l(t),n=e.overflow,r=e.overflowX,a=e.overflowY;return/(auto|scroll|overlay)/.test(n+a+r)?t:h(u(t))}function d(t){return t&&t.referenceNode?t.referenceNode:t}var f=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function v(t){return 11===t?f:10===t?p:f||p}function m(t){if(!t)return document.documentElement;var e=v(10)?document.body:null,n=t.offsetParent||null;while(n===e&&t.nextElementSibling)n=(t=t.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?m(n):n:t?t.ownerDocument.documentElement:document.documentElement}function b(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||m(t.firstElementChild)===t)}function g(t){return null!==t.parentNode?g(t.parentNode):t}function y(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,a=n?e:t,i=document.createRange();i.setStart(r,0),i.setEnd(a,0);var o=i.commonAncestorContainer;if(t!==o&&e!==o||r.contains(a))return b(o)?o:m(o);var c=g(t);return c.host?y(c.host,e):y(t,g(e).host)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",r=t.nodeName;if("BODY"===r||"HTML"===r){var a=t.ownerDocument.documentElement,i=t.ownerDocument.scrollingElement||a;return i[n]}return t[n]}function z(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=O(e,"top"),a=O(e,"left"),i=n?-1:1;return t.top+=r*i,t.bottom+=r*i,t.left+=a*i,t.right+=a*i,t}function j(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+r+"Width"])}function w(t,e,n,r){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],v(10)?parseInt(n["offset"+t])+parseInt(r["margin"+("Height"===t?"Top":"Left")])+parseInt(r["margin"+("Height"===t?"Bottom":"Right")]):0)}function M(t){var e=t.body,n=t.documentElement,r=v(10)&&getComputedStyle(n);return{height:w("Height",e,n,r),width:w("Width",e,n,r)}}var _=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},C=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),A=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function I(t){return V({},t,{right:t.left+t.width,bottom:t.top+t.height})}function k(t){var e={};try{if(v(10)){e=t.getBoundingClientRect();var n=O(t,"top"),r=O(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}else e=t.getBoundingClientRect()}catch(d){}var a={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},i="HTML"===t.nodeName?M(t.ownerDocument):{},o=i.width||t.clientWidth||a.width,c=i.height||t.clientHeight||a.height,s=t.offsetWidth-o,u=t.offsetHeight-c;if(s||u){var h=l(t);s-=j(h,"x"),u-=j(h,"y"),a.width-=s,a.height-=u}return I(a)}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=v(10),a="HTML"===e.nodeName,i=k(t),o=k(e),c=h(t),s=l(e),u=parseFloat(s.borderTopWidth),d=parseFloat(s.borderLeftWidth);n&&a&&(o.top=Math.max(o.top,0),o.left=Math.max(o.left,0));var f=I({top:i.top-o.top-u,left:i.left-o.left-d,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!r&&a){var p=parseFloat(s.marginTop),m=parseFloat(s.marginLeft);f.top-=u-p,f.bottom-=u-p,f.left-=d-m,f.right-=d-m,f.marginTop=p,f.marginLeft=m}return(r&&!n?e.contains(c):e===c&&"BODY"!==c.nodeName)&&(f=z(f,e)),f}function S(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,r=H(t,n),a=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),o=e?0:O(n),c=e?0:O(n,"left"),s={top:o-r.top+r.marginTop,left:c-r.left+r.marginLeft,width:a,height:i};return I(s)}function P(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===l(t,"position"))return!0;var n=u(t);return!!n&&P(n)}function T(t){if(!t||!t.parentElement||v())return document.documentElement;var e=t.parentElement;while(e&&"none"===l(e,"transform"))e=e.parentElement;return e||document.documentElement}function L(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},o=a?T(t):y(t,d(e));if("viewport"===r)i=S(o,a);else{var c=void 0;"scrollParent"===r?(c=h(u(e)),"BODY"===c.nodeName&&(c=t.ownerDocument.documentElement)):c="window"===r?t.ownerDocument.documentElement:r;var s=H(c,o,a);if("HTML"!==c.nodeName||P(o))i=s;else{var l=M(t.ownerDocument),f=l.height,p=l.width;i.top+=s.top-s.marginTop,i.bottom=f+s.top,i.left+=s.left-s.marginLeft,i.right=p+s.left}}n=n||0;var v="number"===typeof n;return i.left+=v?n:n.left||0,i.top+=v?n:n.top||0,i.right-=v?n:n.right||0,i.bottom-=v?n:n.bottom||0,i}function B(t){var e=t.width,n=t.height;return e*n}function x(t,e,n,r,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var o=L(n,r,i,a),c={top:{width:o.width,height:e.top-o.top},right:{width:o.right-e.right,height:o.height},bottom:{width:o.width,height:o.bottom-e.bottom},left:{width:e.left-o.left,height:o.height}},s=Object.keys(c).map((function(t){return V({key:t},c[t],{area:B(c[t])})})).sort((function(t,e){return e.area-t.area})),l=s.filter((function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight})),u=l.length>0?l[0].key:s[0].key,h=t.split("-")[1];return u+(h?"-"+h:"")}function F(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=r?T(e):y(e,d(n));return H(n,a,r)}function E(t){var e=t.ownerDocument.defaultView,n=e.getComputedStyle(t),r=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),a=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:t.offsetWidth+a,height:t.offsetHeight+r};return i}function D(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function R(t,e,n){n=n.split("-")[0];var r=E(t),a={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),o=i?"top":"left",c=i?"left":"top",s=i?"height":"width",l=i?"width":"height";return a[o]=e[o]+e[s]/2-r[s]/2,a[c]=n===c?e[c]-r[l]:e[D(c)],a}function $(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function N(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var r=$(t,(function(t){return t[e]===n}));return t.indexOf(r)}function q(t,e,n){var r=void 0===n?t:t.slice(0,N(t,"name",n));return r.forEach((function(t){t["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t["function"]||t.fn;t.enabled&&s(n)&&(e.offsets.popper=I(e.offsets.popper),e.offsets.reference=I(e.offsets.reference),e=n(e,t))})),e}function U(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=x(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=R(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=q(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function W(t,e){return t.some((function(t){var n=t.name,r=t.enabled;return r&&n===e}))}function G(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length;r++){var a=e[r],i=a?""+a+n:t;if("undefined"!==typeof document.body.style[i])return i}return null}function K(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[G("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Y(t){var e=t.ownerDocument;return e?e.defaultView:window}function X(t,e,n,r){var a="BODY"===t.nodeName,i=a?t.ownerDocument.defaultView:t;i.addEventListener(e,n,{passive:!0}),a||X(h(i.parentNode),e,n,r),r.push(i)}function J(t,e,n,r){n.updateBound=r,Y(t).addEventListener("resize",n.updateBound,{passive:!0});var a=h(t);return X(a,"scroll",n.updateBound,n.scrollParents),n.scrollElement=a,n.eventsEnabled=!0,n}function Q(){this.state.eventsEnabled||(this.state=J(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(t,e){return Y(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function tt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function et(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function nt(t,e){Object.keys(e).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&et(e[n])&&(r="px"),t.style[n]=e[n]+r}))}function rt(t,e){Object.keys(e).forEach((function(n){var r=e[n];!1!==r?t.setAttribute(n,e[n]):t.removeAttribute(n)}))}function at(t){return nt(t.instance.popper,t.styles),rt(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&nt(t.arrowElement,t.arrowStyles),t}function it(t,e,n,r,a){var i=F(a,e,t,n.positionFixed),o=x(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",o),nt(e,{position:n.positionFixed?"fixed":"absolute"}),n}function ot(t,e){var n=t.offsets,r=n.popper,a=n.reference,i=Math.round,o=Math.floor,c=function(t){return t},s=i(a.width),l=i(r.width),u=-1!==["left","right"].indexOf(t.placement),h=-1!==t.placement.indexOf("-"),d=s%2===l%2,f=s%2===1&&l%2===1,p=e?u||h||d?i:o:c,v=e?i:c;return{left:p(f&&!h&&e?r.left-1:r.left),top:v(r.top),bottom:v(r.bottom),right:p(r.right)}}var ct=n&&/Firefox/i.test(navigator.userAgent);function st(t,e){var n=e.x,r=e.y,a=t.offsets.popper,i=$(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o=void 0!==i?i:e.gpuAcceleration,c=m(t.instance.popper),s=k(c),l={position:a.position},u=ot(t,window.devicePixelRatio<2||!ct),h="bottom"===n?"top":"bottom",d="right"===r?"left":"right",f=G("transform"),p=void 0,v=void 0;if(v="bottom"===h?"HTML"===c.nodeName?-c.clientHeight+u.bottom:-s.height+u.bottom:u.top,p="right"===d?"HTML"===c.nodeName?-c.clientWidth+u.right:-s.width+u.right:u.left,o&&f)l[f]="translate3d("+p+"px, "+v+"px, 0)",l[h]=0,l[d]=0,l.willChange="transform";else{var b="bottom"===h?-1:1,g="right"===d?-1:1;l[h]=v*b,l[d]=p*g,l.willChange=h+", "+d}var y={"x-placement":t.placement};return t.attributes=V({},y,t.attributes),t.styles=V({},l,t.styles),t.arrowStyles=V({},t.offsets.arrow,t.arrowStyles),t}function lt(t,e,n){var r=$(t,(function(t){var n=t.name;return n===e})),a=!!r&&t.some((function(t){return t.name===n&&t.enabled&&t.order<r.order}));if(!a){var i="`"+e+"`",o="`"+n+"`";console.warn(o+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return a}function ut(t,e){var n;if(!lt(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"===typeof r){if(r=t.instance.popper.querySelector(r),!r)return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var a=t.placement.split("-")[0],i=t.offsets,o=i.popper,c=i.reference,s=-1!==["left","right"].indexOf(a),u=s?"height":"width",h=s?"Top":"Left",d=h.toLowerCase(),f=s?"left":"top",p=s?"bottom":"right",v=E(r)[u];c[p]-v<o[d]&&(t.offsets.popper[d]-=o[d]-(c[p]-v)),c[d]+v>o[p]&&(t.offsets.popper[d]+=c[d]+v-o[p]),t.offsets.popper=I(t.offsets.popper);var m=c[d]+c[u]/2-v/2,b=l(t.instance.popper),g=parseFloat(b["margin"+h]),y=parseFloat(b["border"+h+"Width"]),O=m-t.offsets.popper[d]-g-y;return O=Math.max(Math.min(o[u]-v,O),0),t.arrowElement=r,t.offsets.arrow=(n={},A(n,d,Math.round(O)),A(n,f,""),n),t}function ht(t){return"end"===t?"start":"start"===t?"end":t}var dt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ft=dt.slice(3);function pt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=ft.indexOf(t),r=ft.slice(n+1).concat(ft.slice(0,n));return e?r.reverse():r}var vt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function mt(t,e){if(W(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=L(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),r=t.placement.split("-")[0],a=D(r),i=t.placement.split("-")[1]||"",o=[];switch(e.behavior){case vt.FLIP:o=[r,a];break;case vt.CLOCKWISE:o=pt(r);break;case vt.COUNTERCLOCKWISE:o=pt(r,!0);break;default:o=e.behavior}return o.forEach((function(c,s){if(r!==c||o.length===s+1)return t;r=t.placement.split("-")[0],a=D(r);var l=t.offsets.popper,u=t.offsets.reference,h=Math.floor,d="left"===r&&h(l.right)>h(u.left)||"right"===r&&h(l.left)<h(u.right)||"top"===r&&h(l.bottom)>h(u.top)||"bottom"===r&&h(l.top)<h(u.bottom),f=h(l.left)<h(n.left),p=h(l.right)>h(n.right),v=h(l.top)<h(n.top),m=h(l.bottom)>h(n.bottom),b="left"===r&&f||"right"===r&&p||"top"===r&&v||"bottom"===r&&m,g=-1!==["top","bottom"].indexOf(r),y=!!e.flipVariations&&(g&&"start"===i&&f||g&&"end"===i&&p||!g&&"start"===i&&v||!g&&"end"===i&&m),O=!!e.flipVariationsByContent&&(g&&"start"===i&&p||g&&"end"===i&&f||!g&&"start"===i&&m||!g&&"end"===i&&v),z=y||O;(d||b||z)&&(t.flipped=!0,(d||b)&&(r=o[s+1]),z&&(i=ht(i)),t.placement=r+(i?"-"+i:""),t.offsets.popper=V({},t.offsets.popper,R(t.instance.popper,t.offsets.reference,t.placement)),t=q(t.instance.modifiers,t,"flip"))})),t}function bt(t){var e=t.offsets,n=e.popper,r=e.reference,a=t.placement.split("-")[0],i=Math.floor,o=-1!==["top","bottom"].indexOf(a),c=o?"right":"bottom",s=o?"left":"top",l=o?"width":"height";return n[c]<i(r[s])&&(t.offsets.popper[s]=i(r[s])-n[l]),n[s]>i(r[c])&&(t.offsets.popper[s]=i(r[c])),t}function gt(t,e,n,r){var a=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+a[1],o=a[2];if(!i)return t;if(0===o.indexOf("%")){var c=void 0;switch(o){case"%p":c=n;break;case"%":case"%r":default:c=r}var s=I(c);return s[e]/100*i}if("vh"===o||"vw"===o){var l=void 0;return l="vh"===o?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),l/100*i}return i}function yt(t,e,n,r){var a=[0,0],i=-1!==["right","left"].indexOf(r),o=t.split(/(\+|\-)/).map((function(t){return t.trim()})),c=o.indexOf($(o,(function(t){return-1!==t.search(/,|\s/)})));o[c]&&-1===o[c].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,l=-1!==c?[o.slice(0,c).concat([o[c].split(s)[0]]),[o[c].split(s)[1]].concat(o.slice(c+1))]:[o];return l=l.map((function(t,r){var a=(1===r?!i:i)?"height":"width",o=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,o=!0,t):o?(t[t.length-1]+=e,o=!1,t):t.concat(e)}),[]).map((function(t){return gt(t,a,e,n)}))})),l.forEach((function(t,e){t.forEach((function(n,r){et(n)&&(a[e]+=n*("-"===t[r-1]?-1:1))}))})),a}function Ot(t,e){var n=e.offset,r=t.placement,a=t.offsets,i=a.popper,o=a.reference,c=r.split("-")[0],s=void 0;return s=et(+n)?[+n,0]:yt(n,i,o,c),"left"===c?(i.top+=s[0],i.left-=s[1]):"right"===c?(i.top+=s[0],i.left+=s[1]):"top"===c?(i.left+=s[0],i.top-=s[1]):"bottom"===c&&(i.left+=s[0],i.top+=s[1]),t.popper=i,t}function zt(t,e){var n=e.boundariesElement||m(t.instance.popper);t.instance.reference===n&&(n=m(n));var r=G("transform"),a=t.instance.popper.style,i=a.top,o=a.left,c=a[r];a.top="",a.left="",a[r]="";var s=L(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);a.top=i,a.left=o,a[r]=c,e.boundaries=s;var l=e.priority,u=t.offsets.popper,h={primary:function(t){var n=u[t];return u[t]<s[t]&&!e.escapeWithReference&&(n=Math.max(u[t],s[t])),A({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=u[n];return u[t]>s[t]&&!e.escapeWithReference&&(r=Math.min(u[n],s[t]-("right"===t?u.width:u.height))),A({},n,r)}};return l.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";u=V({},u,h[e](t))})),t.offsets.popper=u,t}function jt(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var a=t.offsets,i=a.reference,o=a.popper,c=-1!==["bottom","top"].indexOf(n),s=c?"left":"top",l=c?"width":"height",u={start:A({},s,i[s]),end:A({},s,i[s]+i[l]-o[l])};t.offsets.popper=V({},o,u[r])}return t}function wt(t){if(!lt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=$(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function Mt(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,a=r.popper,i=r.reference,o=-1!==["left","right"].indexOf(n),c=-1===["top","left"].indexOf(n);return a[o?"left":"top"]=i[n]-(c?a[o?"width":"height"]:0),t.placement=D(e),t.offsets.popper=I(a),t}var _t={shift:{order:100,enabled:!0,fn:jt},offset:{order:200,enabled:!0,fn:Ot,offset:0},preventOverflow:{order:300,enabled:!0,fn:zt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:bt},arrow:{order:500,enabled:!0,fn:ut,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:mt,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Mt},hide:{order:800,enabled:!0,fn:wt},computeStyle:{order:850,enabled:!0,fn:st,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:at,onLoad:it,gpuAcceleration:void 0}},Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:_t},At=function(){function t(e,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};_(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=c(this.update.bind(this)),this.options=V({},t.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(V({},t.Defaults.modifiers,a.modifiers)).forEach((function(e){r.options.modifiers[e]=V({},t.Defaults.modifiers[e]||{},a.modifiers?a.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return V({name:t},r.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&s(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return C(t,[{key:"update",value:function(){return U.call(this)}},{key:"destroy",value:function(){return K.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return tt.call(this)}}]),t}();At.Utils=("undefined"!==typeof window?window:t).PopperUtils,At.placements=dt,At.Defaults=Ct,e["a"]=At}).call(this,n("c8ba"))},f14a:function(t,e,n){var r=n("f55b"),a=n("c51e");t.exports=Object.keys||function(t){return r(t,a)}},f385:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},f514:function(t,e,n){var r=n("5f2f");t.exports=/web0s(?!.*chrome)/i.test(r)},f55b:function(t,e,n){var r=n("7f34"),a=n("a84f"),i=n("c272").indexOf,o=n("1fc1");t.exports=function(t,e){var n,c=a(t),s=0,l=[];for(n in c)!r(o,n)&&r(c,n)&&l.push(n);while(e.length>s)r(c,n=e[s++])&&(~i(l,n)||l.push(n));return l}},f5df:function(t,e,n){var r=n("00ee"),a=n("c6b6"),i=n("b622"),o=i("toStringTag"),c="Arguments"==a(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=r?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:c?a(e):"Object"==(r=a(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),a=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=a(t))}},f9e3:function(t,e,n){},fa60:function(t,e,n){var r=n("0ee6"),a=n("aa51");t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},fa73:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"c",(function(){return p}));var r=n("992e"),a=n("7b1e"),i=function(t){return t.replace(r["p"],"-$1").toLowerCase()},o=function(t){return t=i(t).replace(r["F"],(function(t,e){return e?e.toUpperCase():""})),t.charAt(0).toUpperCase()+t.slice(1)},c=function(t){return t.replace(r["E"]," ").replace(r["r"],(function(t,e,n){return e+" "+n})).replace(r["z"],(function(t,e,n){return e+n.toUpperCase()}))},s=function(t){return t=Object(a["n"])(t)?t.trim():String(t),t.charAt(0).toLowerCase()+t.slice(1)},l=function(t){return t=Object(a["n"])(t)?t.trim():String(t),t.charAt(0).toUpperCase()+t.slice(1)},u=function(t){return t.replace(r["v"],"\\$&")},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(a["p"])(t)?"":Object(a["a"])(t)||Object(a["k"])(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,e):String(t)},d=function(t){return h(t).replace(r["C"],"")},f=function(t){return h(t).trim()},p=function(t){return h(t).toLowerCase()}},fb8a:function(t,e,n){var r=n("59c2"),a=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?a(n+e,0):i(n,e)}},fbf4:function(t,e,n){"use strict";function r(t){return null===t||void 0===t}function a(t){return null!==t&&void 0!==t}function i(t,e){return e.tag===t.tag&&e.key===t.key}function o(t){var e=t.tag;t.vm=new e({data:t.args})}function c(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach((function(e){t.vm[e]=t.args[e]}))}function s(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,a(i)&&(o[i]=r);return o}function l(t,e){var n,c,l,f=0,p=0,v=t.length-1,m=t[0],b=t[v],g=e.length-1,y=e[0],O=e[g];while(f<=v&&p<=g)r(m)?m=t[++f]:r(b)?b=t[--v]:i(m,y)?(d(m,y),m=t[++f],y=e[++p]):i(b,O)?(d(b,O),b=t[--v],O=e[--g]):i(m,O)?(d(m,O),m=t[++f],O=e[--g]):i(b,y)?(d(b,y),b=t[--v],y=e[++p]):(r(n)&&(n=s(t,f,v)),c=a(y.key)?n[y.key]:null,r(c)?(o(y),y=e[++p]):(l=t[c],i(l,y)?(d(l,y),t[c]=void 0,y=e[++p]):(o(y),y=e[++p])));f>v?u(e,p,g):p>g&&h(t,f,v)}function u(t,e,n){for(;e<=n;++e)o(t[e])}function h(t,e,n){for(;e<=n;++e){var r=t[e];a(r)&&(r.vm.$destroy(),r.vm=null)}}function d(t,e){t!==e&&(e.vm=t.vm,c(e))}function f(t,e){a(t)&&a(e)?t!==e&&l(t,e):a(e)?u(e,0,e.length-1):a(t)&&h(t,0,t.length-1)}function p(t,e,n){return{tag:t,key:e,args:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.h=p,e.patchChildren=f},fc6a:function(t,e,n){var r=n("44ad"),a=n("1d80");t.exports=function(t){return r(a(t))}},fce5:function(t,e,n){var r,a,i=n("09e4"),o=n("5f2f"),c=i.process,s=i.Deno,l=c&&c.versions||s&&s.version,u=l&&l.v8;u?(r=u.split("."),a=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(a=r[1]))),t.exports=a&&+a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbe:function(t,e,n){var r=n("f55b"),a=n("c51e"),i=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe68:function(t,e,n){var r=n("bb6e"),a=n("fa60"),i=n("a257"),o=n("8b0e"),c=o("toPrimitive");t.exports=function(t,e){if(!r(t)||a(t))return t;var n,o=t[c];if(void 0!==o){if(void 0===e&&(e="default"),n=o.call(t,e),!r(n)||a(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}}}]);
//# sourceMappingURL=chunk-vendors.8e4d88cc.js.map
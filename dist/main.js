!function(){var t={9662:function(t,e,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:function(t,e,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var u,s=r(e),c=i(s),f=o(a,c);if(t&&n!=n){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),u=n(5112)("toStringTag"),s=r.Object,c="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=s(t),u))?n:c?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e,n){for(var u=o(e),s=a.f,c=i.f,f=0;f<u.length;f++){var l=u[f];r(t,l)||n&&r(n,l)||s(t,l,c(e,l))}}},4964:function(t,e,n){var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),u=i.process,s=i.Deno,c=u&&u.versions||s&&s.version,f=c&&c.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),u=n(3505),s=n(9920),c=n(4705);t.exports=function(t,e){var n,f,l,p,h,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!c(d?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),s=u&&"something"===function(){}.name,c=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:s,CONFIGURABLE:c}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.bind,a=o.call,u=r&&i.bind(a,a);t.exports=r?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),u=r.Object,s=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):u(t)}:u},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(8536),u=n(7854),s=n(1702),c=n(111),f=n(8880),l=n(2597),p=n(5465),h=n(6200),v=n(3501),d="Object already initialized",y=u.TypeError,m=u.WeakMap;if(a||p.state){var g=p.state||(p.state=new m),b=s(g.get),w=s(g.has),x=s(g.set);r=function(t,e){if(w(g,t))throw new y(d);return e.facade=t,x(g,t,e),e},o=function(t){return b(g,t)||{}},i=function(t){return w(g,t)}}else{var S=h("state");v[S]=!0,r=function(t,e){if(l(t,S))throw new y(d);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=s[u(t)];return n==f||n!=c&&(o(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=a.data={},c=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),u=n(3307),s=r.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,s(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3929:function(t,e,n){var r=n(7854),o=n(7850),i=r.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),u=n(3501),s=n(490),c=n(317),f=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},h=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;v="undefined"!=typeof document?document.domain&&r?h(r):((e=c("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):h(r);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[f]=t):n=v(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),u=n(5656),s=n(1956);e.f=r&&!o?Object.defineProperties:function(t,e){a(t);for(var n,r=u(e),o=s(e),c=o.length,f=0;c>f;)i.f(t,n=o[f++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),o=n(9781),i=n(4664),a=n(3353),u=n(9670),s=n(4948),c=r.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor;e.f=o?a?function(t,e,n){if(u(t),e=s(e),u(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=l(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(u(t),e=s(e),u(n),i)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),u=n(5656),s=n(4948),c=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=s(e),f)try{return l(t,e)}catch(t){}if(c(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,u=n(3501),s=r([].push);t.exports=function(t,e){var n,r=i(t),c=0,f=[];for(n in r)!o(u,n)&&o(r,n)&&s(f,n);for(;e.length>c;)o(r,n=e[c++])&&(~a(f,n)||s(f,n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),u=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!a(r=o(n,t)))return r;if(i(n=t.valueOf)&&!a(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!a(r=o(n,t)))return r;throw u("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),u=n(9670),s=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=a.f;return n?s(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),u=n(3505),s=n(2788),c=n(9909),f=n(6530).CONFIGURABLE,l=c.get,p=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,s){var c,l=!!s&&!!s.unsafe,v=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet,y=s&&void 0!==s.name?s.name:e;o(n)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==y)&&a(n,"name",y),(c=p(n)).source||(c.source=h.join("string"==typeof y?y:""))),t!==r?(l?!d&&t[e]&&(v=!0):delete t[e],v?t[e]=n:a(t,e,n)):v?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||s(this)}))},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.2",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),o=n(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),u=n(8173),s=n(2140),c=n(5112),f=r.TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var n,r=u(t,l);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||a(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(7854),o=n(648),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),u=n(133),s=n(3307),c=o("wks"),f=r.Symbol,l=f&&f.for,p=s?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(c,t)||!u&&"string"!=typeof c[t]){var e="Symbol."+t;u&&i(f,t)?c[t]=f[t]:c[t]=s&&l?l(e):p(e)}return c[t]}},6699:function(t,e,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(1223);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2023:function(t,e,n){"use strict";var r=n(2109),o=n(1702),i=n(3929),a=n(4488),u=n(1340),s=n(4964),c=o("".indexOf);r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~c(u(a(this)),u(i(t)),arguments.length>1?arguments[1]:void 0)}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d({},{P:function(){return p}}),n(6699),n(2023);var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t,this.position=[308,265],this.width=30,this.height=200,this.image=new Image,this.image.src="images/sprites/Player A/Player A Stand Shoot (with ball)/player_A_free-throw_left-75x75.png"}var n,r;return n=e,(r=[{key:"draw",value:function(t){var e=0;"idle"===this.status&&(e=0),"shooting"===this.status&&(e=25),"release"===this.status&&(e=50),t.drawImage(this.image,e,0,25,75,this.position[0],this.position[1],25,75)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||(e="idle"),this.status=e,this.position=[130,233],this.width=50,this.height=40,this.image=new Image,this.image.src="../images/sprites/NES_Basket_and_Ball_SpriteSheet-100x100.png"}var e,n;return e=t,(n=[{key:"draw",value:function(t){var e=0;"made1"===this.status?e=33:"made2"===this.status?e=66:"made3"===this.status?t.drawImage(this.image,85,80,30,33,140,255,30,33):"miss"===this.status&&t.drawImage(this.image,85,80,30,33,150,255,30,33),t.drawImage(this.image,0,e,30,33,this.position[0],this.position[1],30,33)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||(e="mia"),this.status=e,this.position=[140,260],this.width=50,this.height=40,this.image=new Image,this.image.src="../images/sprites/NES_Basket_and_Ball_SpriteSheet-100x100.png"}var e,n;return e=t,(n=[{key:"draw",value:function(t){}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.status=e,this.position=[135,270],this.width=30,this.height=200,this.image=new Image,this.image.src="images/sprites/Player B/Player B Stand Shoot (with ball)/player_B_S_Shoot_East_WITHBALL_strip3-75x75.png"}var e,n;return e=t,(n=[{key:"draw",value:function(t){var e=50;"idle"===this.status&&(e=50),"rebound"===this.status&&(e=28),"pass"===this.status&&(e=0),t.drawImage(this.image,e,0,25,75,this.position[0],this.position[1],25,75)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.c=n,this.movingLineXPos={x:200,y:100},this.player=new e("idle"),this.net=new o,this.ball=new a,this.extraPlayer=new s}var n,r;return n=t,(r=[{key:"drawXBar",value:function(){this.c.fillStyle="purple",this.c.fillRect(200,100,305,50)}},{key:"drawXMakeBar",value:function(){this.c.fillStyle="yellow",this.c.fillRect(330,100,45,50)}},{key:"xMakeArr",value:function(){for(var t=[],e=330;e<=375;e++)t.push(e);return t}},{key:"drawBoard",value:function(){this.c.clearRect(0,0,576,576),this.player.draw(this.c),this.extraPlayer.draw(this.c),this.net.draw(this.c),this.ball.draw(this.c),this.drawXBar(),this.drawXMakeBar()}},{key:"renderShot",value:function(){this.c.clearRect(0,0,576,576),this.player.draw(this.c),this.net.draw(this.c),this.extraPlayer.draw(this.c)}},{key:"updateX",value:function(){return this.movingLineXPos.x+=p(),this.movingXLine(),this.drawBoard(),this.movingLineXPos.x}},{key:"updateXLeft",value:function(){this.movingLineXPos.x-=p(),this.movingXLine(),this.drawBoard()}},{key:"movingXLine",value:function(){this.c.fillStyle="red",this.movingLineXPos.x>500&&(this.movingLineXPos.x=500),this.movingLineXPos.x<200&&(this.movingLineXPos.x=200),this.c.fillRect(this.movingLineXPos.x,this.movingLineXPos.y,5,50)}}])&&c(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),l=0,p=function(){return l<3?1:l<6?4:l<9?7:l<12?10:l<15?13:l<18?16:l<21?19:22},h=function(t,e){var n=document.getElementById("currentScore"),r=document.getElementById("highScore");n.innerHTML=t,r.innerHTML=e};document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementsByTagName("canvas")[0];t.width=576,t.height=576;var e=t.getContext("2d"),n=new f(e),r=200,o=!1,i=0;function a(){if(o)return r;requestAnimationFrame(a),r<500?(n.updateX(),r+=p()):r>=500&&(n.updateXLeft(),r+=p()),r>=800&&(r=200),n.movingXLine()}var u=0,s=0;document.addEventListener("keydown",(function(t){" "===t.key&&(0===s&&function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];document.getElementById("coverPageDiv").style.display=t?"none":"block"}(),(s+=1)%2==0?(o=!0,u=n.movingLineXPos.x,n.player.status="shooting",n.renderShot(),setTimeout((function(){n.player.status="release",n.renderShot(),n.xMakeArr().includes(u)?(l+=1,setTimeout((function(){n.net.status="made1",n.renderShot()}),200),setTimeout((function(){n.net.status="made2",n.renderShot()}),400),setTimeout((function(){n.net.status="made3",n.renderShot()}),600),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="rebound",n.renderShot()}),700),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="pass",n.renderShot()}),800),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="idle",n.renderShot()}),900),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="idle",n.player.status="idle",n.renderShot()}),1e3),setTimeout((function(){n.net.status="idle",n.renderShot(),l>i&&(i=l),h(l,i)}),800)):(l=0,setTimeout((function(){n.net.status="miss",n.renderShot(),h(l,i)}),600),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="rebound",n.renderShot()}),700),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="pass",n.renderShot()}),800),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="idle",n.renderShot()}),900),setTimeout((function(){n.net.status="idle",n.extraPlayer.status="idle",n.player.status="idle",n.renderShot()}),1e3))}),100)):(r=200,n.movingLineXPos.x=200,o=!1,n.player.status="idle",a()))}))}))}()}();
//# sourceMappingURL=main.js.map
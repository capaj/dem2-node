(function(k){"function"===typeof bootstrap?bootstrap("promise",k):"object"===typeof exports?module.exports=k():"function"===typeof define&&define.amd?define(k):"undefined"!==typeof ses?ses.ok()&&(ses.makeQ=k):Q=k()})(function(){function k(a){var b=Function.call;return function(){return b.apply(a,arguments)}}function L(a,b){b.stack&&("object"===typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(M))&&(a.stack=N(a.stack)+"\n"+M+"\n"+N(b.stack))}function N(a){for(var a=a.split("\n"),b=[],d=0;d<a.length;++d){var j=
    a[d],c;if(c=/at .+ \((.*):(\d+):\d+\)/.exec(j)){var g=c[2];c=c[1]===O&&g>=aa&&g<=ba}else c=!1;!c&&!(-1!==j.indexOf("(module.js:")||-1!==j.indexOf("(node.js:"))&&b.push(j)}return b.join("\n")}function P(){if(Error.captureStackTrace){var a,b,d=Error.prepareStackTrace;Error.prepareStackTrace=function(d,c){a=c[1].getFileName();b=c[1].getLineNumber()};Error().stack;Error.prepareStackTrace=d;O=a;return b}}function c(a){return p(a)}function i(){function a(a){b&&(j=p(a),t(b,function(a,b){l(function(){j.promiseDispatch.apply(j,
    b)})},void 0),d=b=void 0)}var b=[],d=[],j,e=C(i.prototype),g=C(m.prototype);g.promiseDispatch=function(a,c,g){var e=h(arguments);b?(b.push(e),"when"===c&&g[1]&&d.push(g[1])):l(function(){j.promiseDispatch.apply(j,e)})};g.valueOf=function(){if(b)return g;var a=o(j);u(a)&&(j=a);return a};Error.captureStackTrace&&0<c.longStackJumpLimit&&(Error.captureStackTrace(g,i),g.stack=g.stack.substring(g.stack.indexOf("\n")+1));e.promise=g;e.resolve=a;e.fulfill=function(b){a(D(b))};e.reject=function(b){a(n(b))};
    e.notify=function(a){b&&t(d,function(b,d){l(function(){d(a)})},void 0)};return e}function m(a,b,d,c,e){void 0===b&&(b=function(a){return n(Error("Promise does not support operation: "+a))});var g=C(m.prototype);g.promiseDispatch=function(d,c,j){var e;try{e=a[c]?a[c].apply(g,j):b.call(g,c,j)}catch(f){e=n(f)}d&&d(e)};d&&(g.valueOf=d);e&&(g.exception=c);return g}function o(a){return u(a)?a.valueOf():a}function u(a){return a&&"function"===typeof a.promiseDispatch}function E(a){return a&&"function"===
    typeof a.then}function F(a){return!E(o(a))}function R(a){a=o(a);return u(a)&&"exception"in a}function n(a){var b=m({when:function(b){if(b){var c=ca(G,this);-1!==c&&(v.splice(c,1),G.splice(c,1))}return b?b(a):this}},function(){return n(a)},function(){return this},a,!0);!S&&("undefined"!==typeof window&&!window.Touch&&window.console)&&console.log("Should be empty:",v);S=!0;G.push(b);v.push(a);return b}function D(a){return m({when:function(){return a},get:function(b){return a[b]},set:function(b,d){a[b]=
    d},"delete":function(b){delete a[b]},post:function(b,d){return null===b||void 0===b?a.apply(void 0,d):a[b].apply(a,d)},apply:function(b,d){return a.apply(b,d)},keys:function(){return da(a)}},void 0,function(){return a})}function p(a){if(u(a))return a;a=o(a);if(E(a)){var b=a,d=i();l(function(){try{b.then(d.resolve,d.reject,d.notify)}catch(a){d.reject(a)}});return d.promise}return D(a)}function f(a,b,d,j){function e(a){try{return"function"===typeof b?b(a):a}catch(d){return n(d)}}function g(a){if("function"===
    typeof d){L(a,k);try{return d(a)}catch(b){return n(b)}}return n(a)}var f=i(),h=!1,k=p(a);l(function(){k.promiseDispatch(function(a){h||(h=!0,f.resolve(e(a)))},"when",[function(a){h||(h=!0,f.resolve(g(a)))}])});k.promiseDispatch(void 0,"when",[void 0,function(a){var b,d=!1;try{b="function"===typeof j?j(a):a}catch(e){if(d=!0,c.onerror)c.onerror(e);else throw e;}d||f.notify(b)}]);return f.promise}function T(a,b,d){return f(a,function(a){return A(a).then(function(a){return b.apply(void 0,a)},d)},d)}function w(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b,d){var c=i();l(function(){p(a).promiseDispatch(c.resolve,b,d)});return c.promise}function q(a){return function(b){var d=h(arguments,1);return w(b,a,d)}}function U(a,b){var d=h(arguments,2);return H(a,b,d)}function r(a,b){return w(a,"apply",[void 0,b])}function I(a){var b=h(arguments,1);return r(a,b)}function A(a){return f(a,function(a){var d=0,c=i();t(a,function(e,g,h){F(g)?a[h]=o(g):(++d,f(g,function(e){a[h]=e;0===--d&&c.resolve(a)},c.reject))},void 0);0===d&&c.resolve(a);return c.promise})}function V(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b){return f(a,void 0,b)}var aa=P(),O,W=function(){},l;if("undefined"!==typeof process)l=process.nextTick;else if("function"===typeof setImmediate)l="undefined"!==typeof window?setImmediate.bind(window):setImmediate;else{var X=function(){--s;if(++J>=x){J=0;x*=4;for(var a=y&&Math.min(y-1,x);s<a;)++s,B()}for(;y;)--y,z=z.next,a=z.task,z.task=void 0,a();J=0},z={task:void 0,next:null},Y=z,x=2,s=0,y=0,J=0,B;l=function(a){Y=Y.next={task:a,next:null};s<++y&&s<x&&(++s,B())};if("undefined"!==typeof MessageChannel){var Z=
    new MessageChannel;Z.port1.onmessage=X;B=function(){Z.port2.postMessage(0)}}else B=function(){setTimeout(X,0)}}var h=k(Array.prototype.slice),t=k(Array.prototype.reduce||function(a,b){var d=0,c=this.length;if(1===arguments.length){do{if(d in this){b=this[d++];break}if(++d>=c)throw new TypeError;}while(1)}for(;d<c;d++)d in this&&(b=a(b,this[d],d));return b}),ca=k(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),$=k(Array.prototype.map||function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){var d=this,c=[];t(d,function(e,g,f){c.push(a.call(b,g,f,d))},void 0);return c}),C=Object.create||function(a){function b(){}b.prototype=a;return new b},ea=k(Object.prototype.hasOwnProperty),da=Object.keys||function(a){var b=[],d;for(d in a)ea(a,d)&&b.push(d);return b},fa=k(Object.prototype.toString),K;K="undefined"!==typeof ReturnValue?ReturnValue:function(a){this.value=a};c.longStackJumpLimit=1;var M="From previous event:";c.nextTick=l;c.defer=i;i.prototype.makeNodeResolver=function(){var a=this;
    return function(b,d){b?a.reject(b):2<arguments.length?a.resolve(h(arguments,1)):a.resolve(d)}};c.promise=function(a){var b=i();I(a,b.resolve,b.reject,b.notify).fail(b.reject);return b.promise};c.makePromise=m;m.prototype.then=function(a,b,d){return f(this,a,b,d)};m.prototype.thenResolve=function(a){return f(this,function(){return a})};m.prototype.thenReject=function(a){return f(this,function(){throw a;})};t("isFulfilled isRejected isPending dispatch when spread get put set del delete post send invoke keys fapply fcall fbind all allResolved timeout delay catch finally fail fin progress done nfcall nfapply nfbind denodeify nbind ncall napply nbind npost nsend ninvoke nodeify".split(" "),
    function(a,b){m.prototype[b]=function(){return c[b].apply(c,[this].concat(h(arguments)))}},void 0);m.prototype.toSource=function(){return this.toString()};m.prototype.toString=function(){return"[object Promise]"};c.nearer=o;c.isPromise=u;c.isPromiseAlike=E;c.isPending=function(a){return!F(a)&&!R(a)};c.isFulfilled=F;c.isRejected=R;var G=[],v=[],S;if("undefined"!==typeof process&&process.on)process.on("exit",function(){for(var a=0;a<v.length;a++){var b=v[a];b&&"undefined"!==typeof b.stack?console.warn("Unhandled rejected promise:",
    b.stack):console.warn("Unhandled rejected promise (no stack):",b)}});c.reject=n;c.fulfill=D;c.resolve=p;c.master=function(a){return m({isDef:function(){}},function(b,d){return w(a,b,d)},function(){return o(a)})};c.when=f;c.spread=T;c.async=function(a){return function(){function b(a,b){var h;try{h=d[a](b)}catch(i){return"[object StopIteration]"===fa(i)||i instanceof K?i.value:n(i)}return f(h,c,e)}var d=a.apply(this,arguments),c=b.bind(b,"send"),e=b.bind(b,"throw");return c()}};c["return"]=function(a){throw new K(a);
};c.promised=function(a){return function(){return T([this,A(arguments)],function(b,d){return a.apply(b,d)})}};c.dispatch=w;c.dispatcher=q;c.get=q("get");c.set=q("set");c["delete"]=c.del=q("delete");var H=c.post=q("post");c.send=U;c.invoke=U;c.fapply=r;c["try"]=I;c.fcall=I;c.fbind=function(a){var b=h(arguments,1);return function(){var d=b.concat(h(arguments));return w(a,"apply",[this,d])}};c.keys=q("keys");c.all=A;c.allResolved=function(a){return f(a,function(a){a=$(a,p);return f(A($(a,function(a){return f(a,
    W,W)})),function(){return a})})};c["catch"]=c.fail=V;c.progress=function(a,b){return f(a,void 0,void 0,b)};c["finally"]=c.fin=function(a,b){return f(a,function(a){return f(b(),function(){return a})},function(a){return f(b(),function(){return n(a)})})};c.done=function(a,b,d,j){var e=function(b){l(function(){L(b,a);if(c.onerror)c.onerror(b);else throw b;})},b=b||d||j?f(a,b,d,j):a;"object"===typeof process&&(process&&process.domain)&&(e=process.domain.bind(e));V(b,e)};c.timeout=function(a,b){var d=i(),
    c=setTimeout(function(){d.reject(Error("Timed out after "+b+" ms"))},b);f(a,function(a){clearTimeout(c);d.resolve(a)},function(a){clearTimeout(c);d.reject(a)},d.notify);return d.promise};c.delay=function(a,b){void 0===b&&(b=a,a=void 0);var d=i();f(a,void 0,void 0,d.notify);setTimeout(function(){d.resolve(a)},b);return d.promise};c.nfapply=function(a,b){var d=h(b),c=i();d.push(c.makeNodeResolver());r(a,d).fail(c.reject);return c.promise};c.nfcall=function(a){var b=h(arguments,1),d=i();b.push(d.makeNodeResolver());
    r(a,b).fail(d.reject);return d.promise};c.nfbind=function(a){var b=h(arguments,1);return function(){var d=b.concat(h(arguments)),c=i();d.push(c.makeNodeResolver());r(a,d).fail(c.reject);return c.promise}};c.denodeify=c.nfbind;c.nbind=function(a,b){var d=h(arguments,2);return function(){var c=d.concat(h(arguments)),e=i();c.push(e.makeNodeResolver());r(function(){return a.apply(b,arguments)},c).fail(e.reject);return e.promise}};c.npost=function(a,b,d){var d=h(d||[]),c=i();d.push(c.makeNodeResolver());
    H(a,b,d).fail(c.reject);return c.promise};c.nsend=function(a,b){var c=h(arguments,2),f=i();c.push(f.makeNodeResolver());H(a,b,c).fail(f.reject);return f.promise};c.ninvoke=c.nsend;c.nodeify=function(a,b){if(b)a.then(function(a){l(function(){b(null,a)})},function(a){l(function(){b(a)})});else return a};var ba=P();return c});
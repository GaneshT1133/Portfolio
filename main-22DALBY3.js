var cw=Object.defineProperty,lw=Object.defineProperties;var uw=Object.getOwnPropertyDescriptors;var ty=Object.getOwnPropertySymbols;var dw=Object.prototype.hasOwnProperty,fw=Object.prototype.propertyIsEnumerable;var ny=(n,e,t)=>e in n?cw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_e=(n,e)=>{for(var t in e||={})dw.call(e,t)&&ny(n,t,e[t]);if(ty)for(var t of ty(e))fw.call(e,t)&&ny(n,t,e[t]);return n},It=(n,e)=>lw(n,uw(e));var js=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function iy(n,e){return Object.is(n,e)}var Yt=null,il=!1,yh=1,Ws=Symbol("SIGNAL");function Je(n){let e=Yt;return Yt=n,e}function _h(){return Yt}var rl={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function xh(n){if(il)throw new Error("");if(Yt===null)return;Yt.consumerOnSignalRead(n);let e=Yt.nextProducerIndex++;if(ol(Yt),e<Yt.producerNode.length&&Yt.producerNode[e]!==n&&fa(Yt)){let t=Yt.producerNode[e];sl(t,Yt.producerIndexOfThis[e])}Yt.producerNode[e]!==n&&(Yt.producerNode[e]=n,Yt.producerIndexOfThis[e]=fa(Yt)?cy(n,Yt,e):0),Yt.producerLastReadVersion[e]=n.version}function ry(){yh++}function sy(n){if(!(fa(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===yh)){if(!n.producerMustRecompute(n)&&!Sh(n)){vh(n);return}n.producerRecomputeValue(n),vh(n)}}function Mh(n){if(n.liveConsumerNode===void 0)return;let e=il;il=!0;try{for(let t of n.liveConsumerNode)t.dirty||hw(t)}finally{il=e}}function oy(){return Yt?.consumerAllowSignalWrites!==!1}function hw(n){n.dirty=!0,Mh(n),n.consumerMarkedDirty?.(n)}function vh(n){n.dirty=!1,n.lastCleanEpoch=yh}function bh(n){return n&&(n.nextProducerIndex=0),Je(n)}function ay(n,e){if(Je(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(fa(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)sl(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Sh(n){ol(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(sy(t),i!==t.version))return!0}return!1}function wh(n){if(ol(n),fa(n))for(let e=0;e<n.producerNode.length;e++)sl(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function cy(n,e,t){if(ly(n),n.liveConsumerNode.length===0&&uy(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=cy(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function sl(n,e){if(ly(n),n.liveConsumerNode.length===1&&uy(n))for(let i=0;i<n.producerNode.length;i++)sl(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ol(r),r.producerIndexOfThis[i]=e}}function fa(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ol(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function ly(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function uy(n){return n.producerNode!==void 0}function pw(){throw new Error}var dy=pw;function mw(n){dy(n)}function Eh(n){dy=n}var gw=null;function Ch(n,e){oy()||mw(n),n.equal(n.value,e)||(n.value=e,vw(n))}var Th=It(_e({},rl),{equal:iy,value:void 0,kind:"signal"});function vw(n){n.version++,ry(),Mh(n),gw?.()}function Dh(n){let e=Je(null);try{return n()}finally{Je(e)}}var Ih;function ha(){return Ih}function tr(n){let e=Ih;return Ih=n,e}var al=Symbol("NotFound");function ze(n){return typeof n=="function"}function $s(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var cl=$s(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function pa(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var jt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(ze(i))try{i()}catch(s){e=s instanceof cl?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{fy(s)}catch(o){e=e??[],o instanceof cl?e=[...e,...o.errors]:e.push(o)}}if(e)throw new cl(e)}}add(e){var t;if(e&&e!==this)if(this.closed)fy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&pa(t,e)}remove(e){let{_finalizers:t}=this;t&&pa(t,e),e instanceof n&&e._removeParent(this)}};jt.EMPTY=(()=>{let n=new jt;return n.closed=!0,n})();var Ah=jt.EMPTY;function ll(n){return n instanceof jt||n&&"closed"in n&&ze(n.remove)&&ze(n.add)&&ze(n.unsubscribe)}function fy(n){ze(n)?n():n.unsubscribe()}var ai={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var qs={setTimeout(n,e,...t){let{delegate:i}=qs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=qs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ul(n){qs.setTimeout(()=>{let{onUnhandledError:e}=ai;if(e)e(n);else throw n})}function ma(){}var hy=Rh("C",void 0,void 0);function py(n){return Rh("E",void 0,n)}function my(n){return Rh("N",n,void 0)}function Rh(n,e,t){return{kind:n,value:e,error:t}}var os=null;function Xs(n){if(ai.useDeprecatedSynchronousErrorHandling){let e=!os;if(e&&(os={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=os;if(os=null,t)throw i}}else n()}function gy(n){ai.useDeprecatedSynchronousErrorHandling&&os&&(os.errorThrown=!0,os.error=n)}var as=class extends jt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ll(e)&&e.add(this)):this.destination=Cw}static create(e,t,i){return new Ys(e,t,i)}next(e){this.isStopped?Ph(my(e),this):this._next(e)}error(e){this.isStopped?Ph(py(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Ph(hy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ww=Function.prototype.bind;function Nh(n,e){return ww.call(n,e)}var Oh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){dl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){dl(i)}else dl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){dl(t)}}},Ys=class extends as{constructor(e,t,i){super();let r;if(ze(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&ai.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Nh(e.next,s),error:e.error&&Nh(e.error,s),complete:e.complete&&Nh(e.complete,s)}):r=e}this.destination=new Oh(r)}};function dl(n){ai.useDeprecatedSynchronousErrorHandling?gy(n):ul(n)}function Ew(n){throw n}function Ph(n,e){let{onStoppedNotification:t}=ai;t&&qs.setTimeout(()=>t(n,e))}var Cw={closed:!0,next:ma,error:Ew,complete:ma};var Zs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Bn(n){return n}function Lh(...n){return Fh(n)}function Fh(n){return n.length===0?Bn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var xt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Dw(t)?t:new Ys(t,i,r);return Xs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=vy(i),new i((r,s)=>{let o=new Ys({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Zs](){return this}pipe(...t){return Fh(t)(this)}toPromise(t){return t=vy(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function vy(n){var e;return(e=n??ai.Promise)!==null&&e!==void 0?e:Promise}function Tw(n){return n&&ze(n.next)&&ze(n.error)&&ze(n.complete)}function Dw(n){return n&&n instanceof as||Tw(n)&&ll(n)}function kh(n){return ze(n?.lift)}function ct(n){return e=>{if(kh(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function lt(n,e,t,i,r){return new Uh(n,e,t,i,r)}var Uh=class extends as{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Js(){return ct((n,e)=>{let t=null;n._refCount++;let i=lt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Ks=class extends xt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,kh(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new jt;let t=this.getSubject();e.add(this.source.subscribe(lt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=jt.EMPTY)}return e}refCount(){return Js()(this)}};var yy=$s(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Qt=(()=>{class n extends xt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new fl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new yy}next(t){Xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Ah:(this.currentObservers=null,s.push(t),new jt(()=>{this.currentObservers=null,pa(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new xt;return t.source=this,t}}return n.create=(e,t)=>new fl(e,t),n})(),fl=class extends Qt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Ah}};var ln=class extends Qt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Cn=new xt(n=>n.complete());function _y(n){return n&&ze(n.schedule)}function xy(n){return n[n.length-1]}function My(n){return ze(xy(n))?n.pop():void 0}function Er(n){return _y(xy(n))?n.pop():void 0}function Sy(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function by(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function cs(n){return this instanceof cs?(this.v=n,this):new cs(n)}function wy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,f)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(m,p){s.push([h,x,m,p])>1||c(h,x)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(x){d(s[0][3],x)}}function l(h){h.value instanceof cs?Promise.resolve(h.value.v).then(u,f):d(s[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function d(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Ey(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof by=="function"?by(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var hl=n=>n&&typeof n.length=="number"&&typeof n!="function";function pl(n){return ze(n?.then)}function ml(n){return ze(n[Zs])}function gl(n){return Symbol.asyncIterator&&ze(n?.[Symbol.asyncIterator])}function vl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Iw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yl=Iw();function _l(n){return ze(n?.[yl])}function xl(n){return wy(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield cs(t.read());if(r)return yield cs(void 0);yield yield cs(i)}}finally{t.releaseLock()}})}function Ml(n){return ze(n?.getReader)}function en(n){if(n instanceof xt)return n;if(n!=null){if(ml(n))return Aw(n);if(hl(n))return Rw(n);if(pl(n))return Nw(n);if(gl(n))return Cy(n);if(_l(n))return Pw(n);if(Ml(n))return Ow(n)}throw vl(n)}function Aw(n){return new xt(e=>{let t=n[Zs]();if(ze(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Rw(n){return new xt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Nw(n){return new xt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,ul)})}function Pw(n){return new xt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Cy(n){return new xt(e=>{Lw(n,e).catch(t=>e.error(t))})}function Ow(n){return Cy(xl(n))}function Lw(n,e){var t,i,r,s;return Sy(this,void 0,void 0,function*(){try{for(t=Ey(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Tn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function bl(n,e=0){return ct((t,i)=>{t.subscribe(lt(i,r=>Tn(i,n,()=>i.next(r),e),()=>Tn(i,n,()=>i.complete(),e),r=>Tn(i,n,()=>i.error(r),e)))})}function Sl(n,e=0){return ct((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Ty(n,e){return en(n).pipe(Sl(e),bl(e))}function Dy(n,e){return en(n).pipe(Sl(e),bl(e))}function Iy(n,e){return new xt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Ay(n,e){return new xt(t=>{let i;return Tn(t,e,()=>{i=n[yl](),Tn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>ze(i?.return)&&i.return()})}function wl(n,e){if(!n)throw new Error("Iterable cannot be null");return new xt(t=>{Tn(t,e,()=>{let i=n[Symbol.asyncIterator]();Tn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Ry(n,e){return wl(xl(n),e)}function Ny(n,e){if(n!=null){if(ml(n))return Ty(n,e);if(hl(n))return Iy(n,e);if(pl(n))return Dy(n,e);if(gl(n))return wl(n,e);if(_l(n))return Ay(n,e);if(Ml(n))return Ry(n,e)}throw vl(n)}function Ft(n,e){return e?Ny(n,e):en(n)}function Fe(...n){let e=Er(n);return Ft(n,e)}function Qs(n,e){let t=ze(n)?n:()=>n,i=r=>r.error(t());return new xt(e?r=>e.schedule(i,0,r):i)}function Bh(n){return!!n&&(n instanceof xt||ze(n.lift)&&ze(n.subscribe))}var nr=$s(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return ct((t,i)=>{let r=0;t.subscribe(lt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Fw}=Array;function kw(n,e){return Fw(e)?n(...e):n(e)}function Py(n){return rt(e=>kw(n,e))}var{isArray:Uw}=Array,{getPrototypeOf:Bw,prototype:Vw,keys:zw}=Object;function Oy(n){if(n.length===1){let e=n[0];if(Uw(e))return{args:e,keys:null};if(Hw(e)){let t=zw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Hw(n){return n&&typeof n=="object"&&Bw(n)===Vw}function Ly(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function ga(...n){let e=Er(n),t=My(n),{args:i,keys:r}=Oy(n);if(i.length===0)return Ft([],e);let s=new xt(Gw(i,e,r?o=>Ly(r,o):Bn));return t?s.pipe(Py(t)):s}function Gw(n,e,t=Bn){return i=>{Fy(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Fy(e,()=>{let l=Ft(n[c],e),u=!1;l.subscribe(lt(i,f=>{s[c]=f,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Fy(n,e,t){n?Tn(t,n,e):e()}function ky(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,f=!1,d=()=>{f&&!c.length&&!l&&e.complete()},h=x=>l<i?g(x):c.push(x),g=x=>{s&&e.next(x),l++;let m=!1;en(t(x,u++)).subscribe(lt(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?Tn(e,o,()=>g(p)):g(p)}d()}catch(p){e.error(p)}}))};return n.subscribe(lt(e,h,()=>{f=!0,d()})),()=>{a?.()}}function Ht(n,e,t=1/0){return ze(e)?Ht((i,r)=>rt((s,o)=>e(i,s,r,o))(en(n(i,r))),t):(typeof e=="number"&&(t=e),ct((i,r)=>ky(i,r,n,t)))}function eo(n=1/0){return Ht(Bn,n)}function Uy(){return eo(1)}function to(...n){return Uy()(Ft(n,Er(n)))}function El(n){return new xt(e=>{en(n()).subscribe(e)})}function mn(n,e){return ct((t,i)=>{let r=0;t.subscribe(lt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function ir(n){return ct((e,t)=>{let i=null,r=!1,s;i=e.subscribe(lt(t,void 0,void 0,o=>{s=en(n(o,ir(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function By(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(lt(o,u=>{let f=l++;c=a?n(c,u,f):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Cr(n,e){return ze(e)?Ht(n,e,1):Ht(n,1)}function Tr(n){return ct((e,t)=>{let i=!1;e.subscribe(lt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function rr(n){return n<=0?()=>Cn:ct((e,t)=>{let i=0;e.subscribe(lt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Cl(n=jw){return ct((e,t)=>{let i=!1;e.subscribe(lt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function jw(){return new nr}function va(n){return ct((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function sr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?mn((r,s)=>n(r,s,i)):Bn,rr(1),t?Tr(e):Cl(()=>new nr))}function no(n){return n<=0?()=>Cn:ct((e,t)=>{let i=[];e.subscribe(lt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Vh(n,e){let t=arguments.length>=2;return i=>i.pipe(n?mn((r,s)=>n(r,s,i)):Bn,no(1),t?Tr(e):Cl(()=>new nr))}function zh(n,e){return ct(By(n,e,arguments.length>=2,!0))}function io(...n){let e=Er(n);return ct((t,i)=>{(e?to(n,t,e):to(n,t)).subscribe(i)})}function Jn(n,e){return ct((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(lt(i,c=>{r?.unsubscribe();let l=0,u=s++;en(n(c,u)).subscribe(r=lt(i,f=>i.next(e?e(c,f,u,l++):f),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Hh(n){return ct((e,t)=>{en(n).subscribe(lt(t,()=>t.complete(),ma)),!t.closed&&e.subscribe(t)})}function un(n,e,t){let i=ze(n)||e||t?{next:n,error:e,complete:t}:n;return i?ct((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(lt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Bn}var C0="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ie=class extends Error{code;constructor(e,t){super(T0(e,t)),this.code=e}};function Ww(n){return`NG0${Math.abs(n)}`}function T0(n,e){return`${Ww(n)}${e?": "+e:""}`}var D0=Symbol("InputSignalNode#UNSET"),$w=It(_e({},Th),{transformFn:void 0,applyValueToInputSignal(n,e){Ch(n,e)}});function I0(n,e){let t=Object.create($w);t.value=n,t.transformFn=e?.transform;function i(){if(xh(t),t.value===D0){let r=null;throw new Ie(-950,r)}return t.value}return i[Ws]=t,i}function su(n){return{toString:n}.toString()}var ep=globalThis;function Et(n){for(let e in n)if(n[e]===Et)return e;throw Error("Could not find renamed property on target object.")}function An(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(An).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Vy(n,e){return n?e?`${n} ${e}`:n:e||""}var qw=Et({__forward_ref__:Et});function A0(n){return n.__forward_ref__=A0,n.toString=function(){return An(this())},n}function Kn(n){return R0(n)?n():n}function R0(n){return typeof n=="function"&&n.hasOwnProperty(qw)&&n.__forward_ref__===A0}function Ae(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Mo(n){return{providers:n.providers||[],imports:n.imports||[]}}function ou(n){return zy(n,P0)||zy(n,O0)}function N0(n){return ou(n)!==null}function zy(n,e){return n.hasOwnProperty(e)?n[e]:null}function Xw(n){let e=n&&(n[P0]||n[O0]);return e||null}function Hy(n){return n&&(n.hasOwnProperty(Gy)||n.hasOwnProperty(Yw))?n[Gy]:null}var P0=Et({\u0275prov:Et}),Gy=Et({\u0275inj:Et}),O0=Et({ngInjectableDef:Et}),Yw=Et({ngInjectorDef:Et}),Re=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ae({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function L0(n){return n&&!!n.\u0275providers}var Zw=Et({\u0275cmp:Et}),Jw=Et({\u0275dir:Et}),Kw=Et({\u0275pipe:Et}),Qw=Et({\u0275mod:Et}),Ol=Et({\u0275fac:Et}),Ma=Et({__NG_ELEMENT_ID__:Et}),jy=Et({__NG_ENV_ID__:Et});function au(n){return typeof n=="string"?n:n==null?"":String(n)}function eE(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():au(n)}function F0(n,e){throw new Ie(-200,n)}function Hp(n,e){throw new Ie(-201,!1)}var Xe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Xe||{}),tp;function k0(){return tp}function Dn(n){let e=tp;return tp=n,e}function U0(n,e,t){let i=ou(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Xe.Optional)return null;if(e!==void 0)return e;Hp(n,"Injector")}var tE={},ls=tE,nE="__NG_DI_FLAG__",Ll=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?al:ls,i)}},Fl="ngTempTokenPath",iE="ngTokenPath",rE=/\n/gm,sE="\u0275",Wy="__source";function oE(n,e=Xe.Default){if(ha()===void 0)throw new Ie(-203,!1);if(ha()===null)return U0(n,void 0,e);{let t=ha(),i;return t instanceof Ll?i=t.injector:i=t,i.get(n,e&Xe.Optional?null:void 0,e)}}function ke(n,e=Xe.Default){return(k0()||oE)(Kn(n),e)}function Q(n,e=Xe.Default){return ke(n,cu(e))}function cu(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function np(n){let e=[];for(let t=0;t<n.length;t++){let i=Kn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ie(900,!1);let r,s=Xe.Default;for(let o=0;o<i.length;o++){let a=i[o],c=aE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(ke(r,s))}else e.push(ke(i))}return e}function aE(n){return n[nE]}function cE(n,e,t,i){let r=n[Fl];throw e[Wy]&&r.unshift(e[Wy]),n.message=lE(`
`+n.message,r,t,i),n[iE]=r,n[Fl]=null,n}function lE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==sE?n.slice(2):n;let r=An(e);if(Array.isArray(e))r=e.map(An).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):An(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(rE,`
  `)}`}function ds(n,e){let t=n.hasOwnProperty(Ol);return t?n[Ol]:null}function Gp(n,e){n.forEach(t=>Array.isArray(t)?Gp(t,e):e(t))}function B0(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function kl(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function uE(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function dE(n,e,t){let i=Ra(n,e);return i>=0?n[i|1]=t:(i=~i,uE(n,i,e,t)),i}function Gh(n,e){let t=Ra(n,e);if(t>=0)return n[t|1]}function Ra(n,e){return fE(n,e,1)}function fE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var uo={},li=[],ba=new Re(""),V0=new Re("",-1),z0=new Re(""),Ul=class{get(e,t=ls){if(t===ls){let i=new Error(`NullInjectorError: No provider for ${An(e)}!`);throw i.name="NullInjectorError",i}return t}};function H0(n,e){let t=n[Qw]||null;if(!t&&e===!0)throw new Error(`Type ${An(n)} does not have '\u0275mod' property.`);return t}function fs(n){return n[Zw]||null}function hE(n){return n[Jw]||null}function pE(n){return n[Kw]||null}function lu(n){return{\u0275providers:n}}function mE(...n){return{\u0275providers:G0(!0,n),\u0275fromNgModule:!0}}function G0(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Gp(e,o=>{let a=o;ip(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&j0(r,s),t}function j0(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];jp(r,s=>{e(s,i)})}}function ip(n,e,t,i){if(n=Kn(n),!n)return!1;let r=null,s=Hy(n),o=!s&&fs(n);if(!s&&!o){let c=n.ngModule;if(s=Hy(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)ip(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Gp(s.imports,u=>{ip(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&j0(l,e)}if(!a){let l=ds(r)||(()=>new r);e({provide:r,useFactory:l,deps:li},r),e({provide:z0,useValue:r,multi:!0},r),e({provide:ba,useValue:()=>ke(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;jp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function jp(n,e){for(let t of n)L0(t)&&(t=t.\u0275providers),Array.isArray(t)?jp(t,e):e(t)}var gE=Et({provide:String,useValue:Et});function W0(n){return n!==null&&typeof n=="object"&&gE in n}function vE(n){return!!(n&&n.useExisting)}function yE(n){return!!(n&&n.useFactory)}function rp(n){return typeof n=="function"}var uu=new Re(""),Il={},$y={},jh;function Wp(){return jh===void 0&&(jh=new Ul),jh}var Rn=class{},Sa=class extends Rn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,op(e,o=>this.processProvider(o)),this.records.set(V0,ro(void 0,this)),r.has("environment")&&this.records.set(Rn,ro(void 0,this));let s=this.records.get(uu);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(z0,li,Xe.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?al:ls,i)}destroy(){_a(this),this._destroyed=!0;let e=Je(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Je(e)}}onDestroy(e){return _a(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){_a(this);let t=tr(this),i=Dn(void 0),r;try{return e()}finally{tr(t),Dn(i)}}get(e,t=ls,i=Xe.Default){if(_a(this),e.hasOwnProperty(jy))return e[jy](this);i=cu(i);let r,s=tr(this),o=Dn(void 0);try{if(!(i&Xe.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=wE(e)&&ou(e);l&&this.injectableDefInScope(l)?c=ro(sp(e),Il):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c,i)}let a=i&Xe.Self?Wp():this.parent;return t=i&Xe.Optional&&t===ls?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Fl]=a[Fl]||[]).unshift(An(e)),s)throw a;return cE(a,e,"R3InjectorError",this.source)}else throw a}finally{Dn(o),tr(s)}}resolveInjectorInitializers(){let e=Je(null),t=tr(this),i=Dn(void 0),r;try{let s=this.get(ba,li,Xe.Self);for(let o of s)o()}finally{tr(t),Dn(i),Je(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(An(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Kn(e);let t=rp(e)?e:Kn(e&&e.provide),i=xE(e);if(!rp(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ro(void 0,Il,!0),r.factory=()=>np(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Je(null);try{return t.value===$y?F0(An(e)):t.value===Il&&(t.value=$y,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&SE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Je(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Kn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function sp(n){let e=ou(n),t=e!==null?e.factory:ds(n);if(t!==null)return t;if(n instanceof Re)throw new Ie(204,!1);if(n instanceof Function)return _E(n);throw new Ie(204,!1)}function _E(n){if(n.length>0)throw new Ie(204,!1);let t=Xw(n);return t!==null?()=>t.factory(n):()=>new n}function xE(n){if(W0(n))return ro(void 0,n.useValue);{let e=ME(n);return ro(e,Il)}}function ME(n,e,t){let i;if(rp(n)){let r=Kn(n);return ds(r)||sp(r)}else if(W0(n))i=()=>Kn(n.useValue);else if(yE(n))i=()=>n.useFactory(...np(n.deps||[]));else if(vE(n))i=(r,s)=>ke(Kn(n.useExisting),s!==void 0&&s&Xe.Optional?Xe.Optional:void 0);else{let r=Kn(n&&(n.useClass||n.provide));if(bE(n))i=()=>new r(...np(n.deps));else return ds(r)||sp(r)}return i}function _a(n){if(n.destroyed)throw new Ie(205,!1)}function ro(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function bE(n){return!!n.deps}function SE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function wE(n){return typeof n=="function"||typeof n=="object"&&n instanceof Re}function op(n,e){for(let t of n)Array.isArray(t)?op(t,e):t&&L0(t)?op(t.\u0275providers,e):e(t)}function ei(n,e){let t;n instanceof Sa?(_a(n),t=n):t=new Ll(n);let i,r=tr(t),s=Dn(void 0);try{return e()}finally{tr(r),Dn(s)}}function $0(){return k0()!==void 0||ha()!=null}function EE(n){if(!$0())throw new Ie(-203,!1)}function CE(n){return typeof n=="function"}var cr=0,Qe=1,He=2,bn=3,ui=4,hi=5,wa=6,Bl=7,dn=8,fo=9,or=10,tn=11,Ea=12,qy=13,Na=14,di=15,ho=16,so=17,po=18,du=19,q0=20,Dr=21,Wh=22,Vl=23,Qn=24,co=25,Nn=26,X0=1;var hs=7,zl=8,Hl=9,Mn=10;function Ir(n){return Array.isArray(n)&&typeof n[X0]=="object"}function lr(n){return Array.isArray(n)&&n[X0]===!0}function Y0(n){return(n.flags&4)!==0}function bo(n){return n.componentOffset>-1}function $p(n){return(n.flags&1)===1}function ys(n){return!!n.template}function Gl(n){return(n[He]&512)!==0}function So(n){return(n[He]&256)===256}var ap=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Z0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Pa=(()=>{let n=()=>J0;return n.ngInherit=!0,n})();function J0(n){return n.type.prototype.ngOnChanges&&(n.setInput=DE),TE}function TE(){let n=Q0(this),e=n?.current;if(e){let t=n.previous;if(t===uo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function DE(n,e,t,i,r){let s=this.declaredInputs[i],o=Q0(n)||IE(n,{previous:uo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new ap(l&&l.currentValue,t,c===uo),Z0(n,e,r,t)}var K0="__ngSimpleChanges__";function Q0(n){return n[K0]||null}function IE(n,e){return n[K0]=e}var Xy=null;var Mt=function(n,e=null,t){Xy?.(n,e,t)},e_="svg",AE="math";function Ai(n){for(;Array.isArray(n);)n=n[cr];return n}function t_(n,e){return Ai(e[n])}function Oi(n,e){return Ai(e[n.index])}function qp(n,e){return n.data[e]}function RE(n,e){return n[e]}function NE(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function Ri(n,e){let t=e[n];return Ir(t)?t:t[cr]}function Xp(n){return(n[He]&128)===128}function PE(n){return lr(n[bn])}function mo(n,e){return e==null?null:n[e]}function n_(n){n[so]=0}function i_(n){n[He]&1024||(n[He]|=1024,Xp(n)&&Oa(n))}function fu(n){return!!(n[He]&9216||n[Qn]?.dirty)}function cp(n){n[or].changeDetectionScheduler?.notify(8),n[He]&64&&(n[He]|=1024),fu(n)&&Oa(n)}function Oa(n){n[or].changeDetectionScheduler?.notify(0);let e=ps(n);for(;e!==null&&!(e[He]&8192||(e[He]|=8192,!Xp(e)));)e=ps(e)}function r_(n,e){if(So(n))throw new Ie(911,!1);n[Dr]===null&&(n[Dr]=[]),n[Dr].push(e)}function OE(n,e){if(n[Dr]===null)return;let t=n[Dr].indexOf(e);t!==-1&&n[Dr].splice(t,1)}function ps(n){let e=n[bn];return lr(e)?e[bn]:e}function s_(n){return n[Bl]??=[]}function o_(n){return n.cleanup??=[]}var ot={lFrame:p_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var lp=!1;function LE(){return ot.lFrame.elementDepthCount}function FE(){ot.lFrame.elementDepthCount++}function kE(){ot.lFrame.elementDepthCount--}function a_(){return ot.bindingsEnabled}function UE(){return ot.skipHydrationRootTNode!==null}function BE(n){return ot.skipHydrationRootTNode===n}function VE(){ot.skipHydrationRootTNode=null}function Ct(){return ot.lFrame.lView}function ti(){return ot.lFrame.tView}function pi(){let n=c_();for(;n!==null&&n.type===64;)n=n.parent;return n}function c_(){return ot.lFrame.currentTNode}function zE(){let n=ot.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function La(n,e){let t=ot.lFrame;t.currentTNode=n,t.isParent=e}function l_(){return ot.lFrame.isParent}function HE(){ot.lFrame.isParent=!1}function u_(){return lp}function Yy(n){let e=lp;return lp=n,e}function GE(){let n=ot.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function jE(n){return ot.lFrame.bindingIndex=n}function Fa(){return ot.lFrame.bindingIndex++}function WE(n){let e=ot.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function $E(){return ot.lFrame.inI18n}function qE(n,e){let t=ot.lFrame;t.bindingIndex=t.bindingRootIndex=n,up(e)}function XE(){return ot.lFrame.currentDirectiveIndex}function up(n){ot.lFrame.currentDirectiveIndex=n}function YE(n){let e=ot.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function d_(n){ot.lFrame.currentQueryIndex=n}function ZE(n){let e=n[Qe];return e.type===2?e.declTNode:e.type===1?n[hi]:null}function f_(n,e,t){if(t&Xe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Xe.Host);)if(r=ZE(s),r===null||(s=s[Na],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=ot.lFrame=h_();return i.currentTNode=e,i.lView=n,!0}function Yp(n){let e=h_(),t=n[Qe];ot.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function h_(){let n=ot.lFrame,e=n===null?null:n.child;return e===null?p_(n):e}function p_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function m_(){let n=ot.lFrame;return ot.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var g_=m_;function Zp(){let n=m_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function _s(){return ot.lFrame.selectedIndex}function ms(n){ot.lFrame.selectedIndex=n}function Jp(){let n=ot.lFrame;return qp(n.tView,n.selectedIndex)}function gn(){ot.lFrame.currentNamespace=e_}function Li(){JE()}function JE(){ot.lFrame.currentNamespace=null}function KE(){return ot.lFrame.currentNamespace}var v_=!0;function Kp(){return v_}function Qp(n){v_=n}function QE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=J0(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function y_(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Al(n,e,t){__(n,e,3,t)}function Rl(n,e,t,i){(n[He]&3)===t&&__(n,e,t,i)}function $h(n,e){let t=n[He];(t&3)===e&&(t&=16383,t+=1,n[He]=t)}function __(n,e,t,i){let r=i!==void 0?n[so]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[so]+=65536),(a<s||s==-1)&&(eC(n,t,e,c),n[so]=(n[so]&4294901760)+c+2),c++}function Zy(n,e){Mt(4,n,e);let t=Je(null);try{e.call(n)}finally{Je(t),Mt(5,n,e)}}function eC(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[He]>>14<n[so]>>16&&(n[He]&3)===e&&(n[He]+=16384,Zy(a,s)):Zy(a,s)}var lo=-1,Ca=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function tC(n){return(n.flags&8)!==0}function nC(n){return(n.flags&16)!==0}function iC(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];rC(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function x_(n){return n===3||n===4||n===6}function rC(n){return n.charCodeAt(0)===64}function em(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Jy(n,t,r,null,e[++i]):Jy(n,t,r,null,null))}}return n}function Jy(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function M_(n){return n!==lo}function jl(n){return n&32767}function sC(n){return n>>16}function Wl(n,e){let t=sC(n),i=e;for(;t>0;)i=i[Na],t--;return i}var dp=!0;function $l(n){let e=dp;return dp=n,e}var oC=256,b_=oC-1,S_=5,aC=0,Ii={};function cC(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ma)&&(i=t[Ma]),i==null&&(i=t[Ma]=aC++);let r=i&b_,s=1<<r;e.data[n+(r>>S_)]|=s}function w_(n,e){let t=E_(n,e);if(t!==-1)return t;let i=e[Qe];i.firstCreatePass&&(n.injectorIndex=e.length,qh(i.data,n),qh(e,null),qh(i.blueprint,null));let r=tm(n,e),s=n.injectorIndex;if(M_(r)){let o=jl(r),a=Wl(r,e),c=a[Qe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function qh(n,e){n.push(0,0,0,0,0,0,0,0,e)}function E_(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function tm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=A_(r),i===null)return lo;if(t++,r=r[Na],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return lo}function lC(n,e,t){cC(n,e,t)}function uC(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(x_(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function C_(n,e,t){if(t&Xe.Optional||n!==void 0)return n;Hp(e,"NodeInjector")}function T_(n,e,t,i){if(t&Xe.Optional&&i===void 0&&(i=null),(t&(Xe.Self|Xe.Host))===0){let r=n[fo],s=Dn(void 0);try{return r?r.get(e,i,t&Xe.Optional):U0(e,i,t&Xe.Optional)}finally{Dn(s)}}return C_(i,e,t)}function D_(n,e,t,i=Xe.Default,r){if(n!==null){if(e[He]&2048&&!(i&Xe.Self)){let o=mC(n,e,t,i,Ii);if(o!==Ii)return o}let s=I_(n,e,t,i,Ii);if(s!==Ii)return s}return T_(e,t,i,r)}function I_(n,e,t,i,r){let s=hC(t);if(typeof s=="function"){if(!f_(e,n,i))return i&Xe.Host?C_(r,t,i):T_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Xe.Optional))Hp(t);else return o}finally{g_()}}else if(typeof s=="number"){let o=null,a=E_(n,e),c=lo,l=i&Xe.Host?e[di][hi]:null;for((a===-1||i&Xe.SkipSelf)&&(c=a===-1?tm(n,e):e[a+8],c===lo||!Qy(i,!1)?a=-1:(o=e[Qe],a=jl(c),e=Wl(c,e)));a!==-1;){let u=e[Qe];if(Ky(s,a,u.data)){let f=dC(a,e,t,o,i,l);if(f!==Ii)return f}c=e[a+8],c!==lo&&Qy(i,e[Qe].data[a+8]===l)&&Ky(s,a,e)?(o=u,a=jl(c),e=Wl(c,e)):a=-1}}return r}function dC(n,e,t,i,r,s){let o=e[Qe],a=o.data[n+8],c=i==null?bo(a)&&dp:i!=o&&(a.type&3)!==0,l=r&Xe.Host&&s===a,u=fC(a,o,t,c,l);return u!==null?fp(e,o,u,a,r):Ii}function fC(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,f=i?a:a+u,d=r?a+u:l;for(let h=f;h<d;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&ys(h)&&h.type===t)return c}return null}function fp(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof Ca){let a=s;a.resolving&&F0(eE(o[t]));let c=$l(a.canSeeViewProviders);a.resolving=!0;let l,u=a.injectImpl?Dn(a.injectImpl):null,f=f_(n,i,Xe.Default);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&QE(t,o[t],e)}finally{u!==null&&Dn(u),$l(c),a.resolving=!1,g_()}}return s}function hC(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ma)?n[Ma]:void 0;return typeof e=="number"?e>=0?e&b_:pC:e}function Ky(n,e,t){let i=1<<n;return!!(t[e+(n>>S_)]&i)}function Qy(n,e){return!(n&Xe.Self)&&!(n&Xe.Host&&e)}var us=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return D_(this._tNode,this._lView,e,cu(i),t)}};function pC(){return new us(pi(),Ct())}function nm(n){return su(()=>{let e=n.prototype.constructor,t=e[Ol]||hp(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ol]||hp(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function hp(n){return R0(n)?()=>{let e=hp(Kn(n));return e&&e()}:ds(n)}function mC(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[He]&2048&&!Gl(o);){let a=I_(s,o,t,i|Xe.Self,Ii);if(a!==Ii)return a;let c=s.parent;if(!c){let l=o[q0];if(l){let u=l.get(t,Ii,i);if(u!==Ii)return u}c=A_(o),o=o[Na]}s=c}return r}function A_(n){let e=n[Qe],t=e.type;return t===2?e.declTNode:t===1?n[hi]:null}function im(n){return uC(pi(),n)}function e0(n,e=null,t=null,i){let r=R_(n,e,t,i);return r.resolveInjectorInitializers(),r}function R_(n,e=null,t=null,i,r=new Set){let s=[t||li,mE(n)];return i=i||(typeof n=="object"?void 0:An(n)),new Sa(s,e||Wp(),i||null,r)}var fi=class n{static THROW_IF_NOT_FOUND=ls;static NULL=new Ul;static create(e,t){if(Array.isArray(e))return e0({name:""},t,e,"");{let i=e.name??"";return e0({name:i},e.parent,e.providers,i)}}static \u0275prov=Ae({token:n,providedIn:"any",factory:()=>ke(V0)});static __NG_ELEMENT_ID__=-1};var gC=new Re("");gC.__NG_ELEMENT_ID__=n=>{let e=pi();if(e===null)throw new Ie(204,!1);if(e.type&2)return e.value;if(n&Xe.Optional)return null;throw new Ie(204,!1)};var N_=!1,ka=(()=>{class n{static __NG_ELEMENT_ID__=vC;static __NG_ENV_ID__=t=>t}return n})(),pp=class extends ka{_lView;constructor(e){super(),this._lView=e}onDestroy(e){let t=this._lView;return So(t)?(e(),()=>{}):(r_(t,e),()=>OE(t,e))}};function vC(){return new pp(Ct())}var go=class{},rm=new Re("",{providedIn:"root",factory:()=>!1});var P_=new Re(""),O_=new Re(""),wo=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new ln(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})();var mp=class extends Qt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,$0()&&(this.destroyRef=Q(ka,{optional:!0})??void 0,this.pendingTasks=Q(wo,{optional:!0})??void 0)}emit(e){let t=Je(null);try{super.next(e)}finally{Je(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof jt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},In=mp;function ql(...n){}function L_(n){let e,t;function i(){n=ql;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function t0(n){return queueMicrotask(()=>n()),()=>{n=ql}}var sm="isAngularZone",Xl=sm+"_ID",yC=0,Pt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new In(!1);onMicrotaskEmpty=new In(!1);onStable=new In(!1);onError=new In(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=N_}=e;if(typeof Zone>"u")throw new Ie(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,MC(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(sm)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ie(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ie(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,_C,ql,ql);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},_C={};function om(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function xC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){L_(()=>{n.callbackScheduled=!1,gp(n),n.isCheckStableRunning=!0,om(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),gp(n)}function MC(n){let e=()=>{xC(n)},t=yC++;n._inner=n._inner.fork({name:"angular",properties:{[sm]:!0,[Xl]:t,[Xl+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(bC(c))return i.invokeTask(s,o,a,c);try{return n0(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),i0(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return n0(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!SC(c)&&e(),i0(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,gp(n),om(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function gp(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function n0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function i0(n){n._nesting--,om(n)}var vp=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new In;onMicrotaskEmpty=new In;onStable=new In;onError=new In;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function bC(n){return F_(n,"__ignore_ng_zone__")}function SC(n){return F_(n,"__scheduler_tick__")}function F_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Ni=class{_console=console;handleError(e){this._console.error("ERROR",e)}},wC=new Re("",{providedIn:"root",factory:()=>{let n=Q(Pt),e=Q(Ni);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function r0(n,e){return I0(n,e)}function EC(n){return I0(D0,n)}var k_=(r0.required=EC,r0);function CC(){return am(pi(),Ct())}function am(n,e){return new Sn(Oi(n,e))}var Sn=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=CC}return n})();function U_(n){return(n.flags&128)===128}var B_=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(B_||{}),V_=new Map,TC=0;function DC(){return TC++}function IC(n){V_.set(n[du],n)}function yp(n){V_.delete(n[du])}var s0="__ngContext__";function Ua(n,e){Ir(e)?(n[s0]=e[du],IC(e)):n[s0]=e}function z_(n){return G_(n[Ea])}function H_(n){return G_(n[ui])}function G_(n){for(;n!==null&&!lr(n);)n=n[ui];return n}var _p;function j_(n){_p=n}function AC(){if(_p!==void 0)return _p;if(typeof document<"u")return document;throw new Ie(210,!1)}var cm=new Re("",{providedIn:"root",factory:()=>RC}),RC="ng",lm=new Re(""),Ar=new Re("",{providedIn:"platform",factory:()=>"unknown"});var um=new Re("",{providedIn:"root",factory:()=>AC().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var NC="h",PC="b";var W_=!1,OC=new Re("",{providedIn:"root",factory:()=>W_});var dm=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(dm||{}),Eo=new Re(""),o0=new Set;function Rr(n){o0.has(n)||(o0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var $_=(()=>{class n{view;node;constructor(t,i){this.view=t,this.node=i}static __NG_ELEMENT_ID__=LC}return n})();function LC(){return new $_(Ct(),pi())}var oo=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(oo||{}),q_=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})(),FC=[oo.EarlyRead,oo.Write,oo.MixedReadWrite,oo.Read],kC=(()=>{class n{ngZone=Q(Pt);scheduler=Q(go);errorHandler=Q(Ni,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){Q(Eo,{optional:!0})}execute(){let t=this.sequences.size>0;t&&Mt(16),this.executing=!0;for(let i of FC)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let s=r.hooks[i];return s(r.pipelinedValue)},r.snapshot))}catch(s){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(s)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&Mt(17)}register(t){let{view:i}=t;i!==void 0?((i[co]??=[]).push(t),Oa(i),i[He]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(dm.AFTER_NEXT_RENDER,t):t()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})(),xp=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s,o=null){this.impl=e,this.hooks=t,this.view=i,this.once=r,this.snapshot=o,this.unregisterOnDestroy=s?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[co];e&&(this.view[co]=e.filter(t=>t!==this))}};function fm(n,e){!e?.injector&&EE(fm);let t=e?.injector??Q(fi);return Rr("NgAfterNextRender"),BC(n,t,e,!0)}function UC(n,e){if(n instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[e]=n,t}else return[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function BC(n,e,t,i){let r=e.get(q_);r.impl??=e.get(kC);let s=e.get(Eo,null,{optional:!0}),o=t?.phase??oo.MixedReadWrite,a=t?.manualCleanup!==!0?e.get(ka):null,c=e.get($_,null,{optional:!0}),l=new xp(r.impl,UC(n,o),c?.view,i,a,s?.snapshot(null));return r.impl.register(l),l}var VC=(n,e,t,i)=>{};function zC(n,e,t,i){VC(n,e,t,i)}var HC=()=>null;function X_(n,e,t=!1){return HC(n,e,t)}function Y_(n,e){let t=n.contentQueries;if(t!==null){let i=Je(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];d_(s),a.contentQueries(2,e[o],o)}}}finally{Je(i)}}}function Mp(n,e,t){d_(0);let i=Je(null);try{e(n,t)}finally{Je(i)}}function Z_(n,e,t){if(Y0(e)){let i=Je(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Je(i)}}}var Pi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Pi||{});var Tl;function GC(){if(Tl===void 0&&(Tl=null,ep.trustedTypes))try{Tl=ep.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Tl}function a0(n){return GC()?.createScriptURL(n)||n}var Yl=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${C0})`}};function hu(n){return n instanceof Yl?n.changingThisBreaksApplicationSecurity:n}function J_(n,e){let t=jC(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${C0})`)}return t===e}function jC(n){return n instanceof Yl&&n.getTypeName()||null}var WC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function $C(n){return n=String(n),n.match(WC)?n:"unsafe:"+n}function qC(n,e){return n.createText(e)}function XC(n,e,t){n.setValue(e,t)}function K_(n,e,t){return n.createElement(e,t)}function Zl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Q_(n,e,t){n.appendChild(e,t)}function c0(n,e,t,i,r){i!==null?Zl(n,e,t,i,r):Q_(n,e,t)}function YC(n,e,t){n.removeChild(null,e,t)}function ZC(n,e,t){n.setAttribute(e,"style",t)}function JC(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function ex(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&iC(n,e,i),r!==null&&JC(n,e,r),s!==null&&ZC(n,e,s)}var hm=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(hm||{});function Nr(n){let e=nx();return e?e.sanitize(hm.URL,n)||"":J_(n,"URL")?hu(n):$C(au(n))}function KC(n){let e=nx();if(e)return a0(e.sanitize(hm.RESOURCE_URL,n)||"");if(J_(n,"ResourceURL"))return a0(hu(n));throw new Ie(904,!1)}var QC=new Set(["embed","frame","iframe","media","script"]),eT=new Set(["base","link","script"]);function tT(n,e){return e==="src"&&QC.has(n)||e==="href"&&eT.has(n)||e==="xlink:href"&&n==="script"?KC:Nr}function tx(n,e,t){return tT(e,t)(n)}function nx(){let n=Ct();return n&&n[or].sanitizer}function pu(n){return n.ownerDocument.defaultView}function ix(n){return n.ownerDocument}function rx(n){return n instanceof Function?n():n}function nT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var sx="ng-template";function iT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&nT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(pm(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function pm(n){return n.type===4&&n.value!==sx}function rT(n,e,t){let i=n.type===4&&!t?sx:n.value;return e===i}function sT(n,e,t){let i=4,r=n.attrs,s=r!==null?cT(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ci(i)&&!ci(c))return!1;if(o&&ci(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!rT(n,c,t)||c===""&&e.length===1){if(ci(i))return!1;o=!0}}else if(i&8){if(r===null||!iT(n,r,c,t)){if(ci(i))return!1;o=!0}}else{let l=e[++a],u=oT(c,r,pm(n),t);if(u===-1){if(ci(i))return!1;o=!0;continue}if(l!==""){let f;if(u>s?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(ci(i))return!1;o=!0}}}}return ci(i)||o}function ci(n){return(n&1)===0}function oT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return lT(e,n)}function aT(n,e,t=!1){for(let i=0;i<e.length;i++)if(sT(n,e[i],t))return!0;return!1}function cT(n){for(let e=0;e<n.length;e++){let t=n[e];if(x_(t))return e}return n.length}function lT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function l0(n,e){return n?":not("+e.trim()+")":e}function uT(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ci(o)&&(e+=l0(s,r),r=""),i=o,s=s||!ci(i);t++}return r!==""&&(e+=l0(s,r)),e}function dT(n){return n.map(uT).join(",")}function fT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ci(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var ur={};function mm(n,e,t,i,r,s,o,a,c,l,u){let f=Nn+i,d=f+r,h=hT(f,d),g=typeof l=="function"?l():l;return h[Qe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function hT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:ur);return t}function pT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=mm(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function gm(n,e,t,i,r,s,o,a,c,l,u){let f=e.blueprint.slice();return f[cr]=r,f[He]=i|4|128|8|64|1024,(l!==null||n&&n[He]&2048)&&(f[He]|=2048),n_(f),f[bn]=f[Na]=n,f[dn]=t,f[or]=o||n&&n[or],f[tn]=a||n&&n[tn],f[fo]=c||n&&n[fo]||null,f[hi]=s,f[du]=DC(),f[wa]=u,f[q0]=l,f[di]=e.type==2?n[di]:f,f}function mT(n,e,t){let i=Oi(e,n),r=pT(t),s=n[or].rendererFactory,o=vm(n,gm(n,r,null,ox(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function ox(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function ax(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function vm(n,e){return n[Ea]?n[qy][ui]=e:n[Ea]=e,n[qy]=e,e}function Ke(n=1){cx(ti(),Ct(),_s()+n,!1)}function cx(n,e,t,i){if(!i)if((e[He]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Al(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Rl(e,s,0,t)}ms(t)}var mu=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(mu||{});function bp(n,e,t,i){let r=Je(null);try{let[s,o,a]=n.inputs[t],c=null;(o&mu.SignalBased)!==0&&(c=e[s][Ws]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):Z0(e,c,s,i)}finally{Je(r)}}function lx(n,e,t,i,r){let s=_s(),o=i&2;try{ms(-1),o&&e.length>Nn&&cx(n,e,Nn,!1),Mt(o?2:0,r),t(i,r)}finally{ms(s),Mt(o?3:1,r)}}function ym(n,e,t){MT(n,e,t),(t.flags&64)===64&&bT(n,e,t)}function ux(n,e,t=Oi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function gT(n,e,t,i){let s=i.get(OC,W_)||t===Pi.ShadowDom,o=n.selectRootElement(e,s);return vT(o),o}function vT(n){yT(n)}var yT=()=>null;function _T(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function dx(n,e,t,i,r,s,o,a){if(!a&&_m(e,n,t,i,r)){bo(e)&&xT(t,e.index);return}if(e.type&3){let c=Oi(e,t);i=_T(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function xT(n,e){let t=Ri(e,n);t[He]&16||(t[He]|=64)}function MT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;bo(t)&&mT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||w_(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=fp(e,n,o,t);if(Ua(c,e),s!==null&&CT(e,o-i,c,a,t,s),ys(a)){let l=Ri(t.index,e);l[dn]=fp(e,n,o,t)}}}function bT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=XE();try{ms(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];up(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ST(c,l)}}finally{ms(-1),up(o)}}function ST(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function fx(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];aT(e,s.selectors,!1)&&(i??=[],ys(s)?i.unshift(s):i.push(s))}return i}function wT(n,e,t,i,r,s){let o=Oi(n,e);ET(e[tn],o,s,n.value,t,i,r)}function ET(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?au(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function CT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];bp(i,t,c,l)}}function TT(n,e){let t=n[fo],i=t?t.get(Ni,null):null;i&&i.handleError(e)}function _m(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],f=e.data[l];bp(f,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];bp(u,l,i,r),a=!0}return a}function DT(n,e){let t=Ri(e,n),i=t[Qe];IT(i,t);let r=t[cr];r!==null&&t[wa]===null&&(t[wa]=X_(r,t[fo])),Mt(18),xm(i,t,t[dn]),Mt(19,t[dn])}function IT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function xm(n,e,t){Yp(e);try{let i=n.viewQuery;i!==null&&Mp(1,i,t);let r=n.template;r!==null&&lx(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[po]?.finishViewCreation(n),n.staticContentQueries&&Y_(n,e),n.staticViewQueries&&Mp(2,n.viewQuery,t);let s=n.components;s!==null&&AT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[He]&=-5,Zp()}}function AT(n,e){for(let t=0;t<e.length;t++)DT(n,e[t])}function Mm(n,e,t,i){let r=Je(null);try{let s=e.tView,a=n[He]&4096?4096:16,c=gm(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[ho]=l;let u=n[po];return u!==null&&(c[po]=u.createEmbeddedView(s)),xm(s,c,t),c}finally{Je(r)}}function Ta(n,e){return!e||e.firstChild===null||U_(n)}var RT;function bm(n,e){return RT(n,e)}var ar=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(ar||{});function hx(n){return(n.flags&32)===32}function ao(n,e,t,i,r){if(i!=null){let s,o=!1;lr(i)?s=i:Ir(i)&&(o=!0,i=i[cr]);let a=Ai(i);n===0&&t!==null?r==null?Q_(e,t,a):Zl(e,t,a,r||null,!0):n===1&&t!==null?Zl(e,t,a,r||null,!0):n===2?YC(e,a,o):n===3&&e.destroyNode(a),s!=null&&GT(e,n,s,t,r)}}function NT(n,e){px(n,e),e[cr]=null,e[hi]=null}function PT(n,e,t,i,r,s){i[cr]=r,i[hi]=e,vu(n,i,t,1,r,s)}function px(n,e){e[or].changeDetectionScheduler?.notify(9),vu(n,e,e[tn],2,null,null)}function OT(n){let e=n[Ea];if(!e)return Xh(n[Qe],n);for(;e;){let t=null;if(Ir(e))t=e[Ea];else{let i=e[Mn];i&&(t=i)}if(!t){for(;e&&!e[ui]&&e!==n;)Ir(e)&&Xh(e[Qe],e),e=e[bn];e===null&&(e=n),Ir(e)&&Xh(e[Qe],e),t=e&&e[ui]}e=t}}function Sm(n,e){let t=n[Hl],i=t.indexOf(e);t.splice(i,1)}function gu(n,e){if(So(e))return;let t=e[tn];t.destroyNode&&vu(n,e,t,3,null,null),OT(e)}function Xh(n,e){if(So(e))return;let t=Je(null);try{e[He]&=-129,e[He]|=256,e[Qn]&&wh(e[Qn]),FT(n,e),LT(n,e),e[Qe].type===1&&e[tn].destroy();let i=e[ho];if(i!==null&&lr(e[bn])){i!==e[bn]&&Sm(i,e);let r=e[po];r!==null&&r.detachView(n)}yp(e)}finally{Je(t)}}function LT(n,e){let t=n.cleanup,i=e[Bl];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Bl]=null);let r=e[Dr];if(r!==null){e[Dr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Vl];if(s!==null){e[Vl]=null;for(let o of s)o.destroy()}}function FT(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ca)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Mt(4,a,c);try{c.call(a)}finally{Mt(5,a,c)}}else{Mt(4,r,s);try{s.call(r)}finally{Mt(5,r,s)}}}}}function kT(n,e,t){return UT(n,e.parent,t)}function UT(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[cr];if(bo(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Pi.None||r===Pi.Emulated)return null}return Oi(i,t)}function BT(n,e,t){return zT(n,e,t)}function VT(n,e,t){return n.type&40?Oi(n,t):null}var zT=VT,u0;function wm(n,e,t,i){let r=kT(n,i,e),s=e[tn],o=i.parent||e[hi],a=BT(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)c0(s,r,t[c],a,!1);else c0(s,r,t,a,!1);u0!==void 0&&u0(s,i,e,t,r)}function xa(n,e){if(e!==null){let t=e.type;if(t&3)return Oi(e,n);if(t&4)return Sp(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return xa(n,i);{let r=n[e.index];return lr(r)?Sp(-1,r):Ai(r)}}else{if(t&128)return xa(n,e.next);if(t&32)return bm(e,n)()||Ai(n[e.index]);{let i=mx(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=ps(n[di]);return xa(r,i)}else return xa(n,e.next)}}}return null}function mx(n,e){if(e!==null){let i=n[di][hi],r=e.projection;return i.projection[r]}return null}function Sp(n,e){let t=Mn+n+1;if(t<e.length){let i=e[t],r=i[Qe].firstChild;if(r!==null)return xa(i,r)}return e[hs]}function Em(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Ua(Ai(a),i),t.flags|=2),!hx(t))if(c&8)Em(n,e,t.child,i,r,s,!1),ao(e,n,r,a,s);else if(c&32){let l=bm(t,i),u;for(;u=l();)ao(e,n,r,u,s);ao(e,n,r,a,s)}else c&16?HT(n,e,i,t,r,s):ao(e,n,r,a,s);t=o?t.projectionNext:t.next}}function vu(n,e,t,i,r,s){Em(t,i,n.firstChild,e,r,s,!1)}function HT(n,e,t,i,r,s){let o=t[di],c=o[hi].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ao(e,n,r,u,s)}else{let l=c,u=o[bn];U_(i)&&(l.flags|=128),Em(n,e,l,u,r,s,!0)}}function GT(n,e,t,i,r){let s=t[hs],o=Ai(t);s!==o&&ao(e,n,i,s,r);for(let a=Mn;a<t.length;a++){let c=t[a];vu(c[Qe],c,n,e,i,s)}}function jT(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:ar.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=ar.Important),n.setStyle(t,i,r,s))}}function Jl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Ai(s)),lr(s)&&WT(s,i);let o=t.type;if(o&8)Jl(n,e,t.child,i);else if(o&32){let a=bm(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=mx(e,t);if(Array.isArray(a))i.push(...a);else{let c=ps(e[di]);Jl(c[Qe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function WT(n,e){for(let t=Mn;t<n.length;t++){let i=n[t],r=i[Qe].firstChild;r!==null&&Jl(i[Qe],i,r,e)}n[hs]!==n[cr]&&e.push(n[hs])}function gx(n){if(n[co]!==null){for(let e of n[co])e.impl.addSequence(e);n[co].length=0}}var vx=[];function $T(n){return n[Qn]??qT(n)}function qT(n){let e=vx.pop()??Object.create(YT);return e.lView=n,e}function XT(n){n.lView[Qn]!==n&&(n.lView=null,vx.push(n))}var YT=It(_e({},rl),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Oa(n.lView)},consumerOnSignalRead(){this.lView[Qn]=this}});function ZT(n){let e=n[Qn]??Object.create(JT);return e.lView=n,e}var JT=It(_e({},rl),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=ps(n.lView);for(;e&&!yx(e[Qe]);)e=ps(e);e&&i_(e)},consumerOnSignalRead(){this.lView[Qn]=this}});function yx(n){return n.type!==2}function _x(n){if(n[Vl]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Vl])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[He]&8192)}}var KT=100;function xx(n,e=!0,t=0){let r=n[or].rendererFactory,s=!1;s||r.begin?.();try{QT(n,t)}catch(o){throw e&&TT(n,o),o}finally{s||r.end?.()}}function QT(n,e){let t=u_();try{Yy(!0),wp(n,e);let i=0;for(;fu(n);){if(i===KT)throw new Ie(103,!1);i++,wp(n,1)}}finally{Yy(t)}}function eD(n,e,t,i){if(So(e))return;let r=e[He],s=!1,o=!1;Yp(e);let a=!0,c=null,l=null;s||(yx(n)?(l=$T(e),c=bh(l)):_h()===null?(a=!1,l=ZT(e),c=bh(l)):e[Qn]&&(wh(e[Qn]),e[Qn]=null));try{n_(e),jE(n.bindingStartIndex),t!==null&&lx(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Al(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Rl(e,h,0,null),$h(e,0)}if(o||tD(e),_x(e),Mx(e,0),n.contentQueries!==null&&Y_(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Al(e,h)}else{let h=n.contentHooks;h!==null&&Rl(e,h,1),$h(e,1)}iD(n,e);let f=n.components;f!==null&&Sx(e,f,0);let d=n.viewQuery;if(d!==null&&Mp(2,d,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Al(e,h)}else{let h=n.viewHooks;h!==null&&Rl(e,h,2),$h(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Wh]){for(let h of e[Wh])h();e[Wh]=null}s||(gx(e),e[He]&=-73)}catch(u){throw s||Oa(e),u}finally{l!==null&&(ay(l,c),a&&XT(l)),Zp()}}function Mx(n,e){for(let t=z_(n);t!==null;t=H_(t))for(let i=Mn;i<t.length;i++){let r=t[i];bx(r,e)}}function tD(n){for(let e=z_(n);e!==null;e=H_(e)){if(!(e[He]&2))continue;let t=e[Hl];for(let i=0;i<t.length;i++){let r=t[i];i_(r)}}}function nD(n,e,t){Mt(18);let i=Ri(e,n);bx(i,t),Mt(19,i[dn])}function bx(n,e){Xp(n)&&wp(n,e)}function wp(n,e){let i=n[Qe],r=n[He],s=n[Qn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Sh(s)),o||=!1,s&&(s.dirty=!1),n[He]&=-9217,o)eD(i,n,i.template,n[dn]);else if(r&8192){_x(n),Mx(n,1);let a=i.components;a!==null&&Sx(n,a,1),gx(n)}}function Sx(n,e,t){for(let i=0;i<e.length;i++)nD(n,e[i],t)}function iD(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ms(~r);else{let s=r,o=t[++i],a=t[++i];qE(o,s);let c=e[s];Mt(24,c),a(2,c),Mt(25,c)}}}finally{ms(-1)}}function Cm(n,e){let t=u_()?64:1088;for(n[or].changeDetectionScheduler?.notify(e);n;){n[He]|=t;let i=ps(n);if(Gl(n)&&!i)return n;n=i}return null}function wx(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ex(n,e){let t=Mn+e;if(t<n.length)return n[t]}function yu(n,e,t,i=!0){let r=e[Qe];if(rD(r,e,n,t),i){let o=Sp(t,n),a=e[tn],c=a.parentNode(n[hs]);c!==null&&PT(r,n[hi],a,e,c,o)}let s=e[wa];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Cx(n,e){let t=Da(n,e);return t!==void 0&&gu(t[Qe],t),t}function Da(n,e){if(n.length<=Mn)return;let t=Mn+e,i=n[t];if(i){let r=i[ho];r!==null&&r!==n&&Sm(r,i),e>0&&(n[t-1][ui]=i[ui]);let s=kl(n,Mn+e);NT(i[Qe],i);let o=s[po];o!==null&&o.detachView(s[Qe]),i[bn]=null,i[ui]=null,i[He]&=-129}return i}function rD(n,e,t,i){let r=Mn+i,s=t.length;i>0&&(t[r-1][ui]=e),i<s-Mn?(e[ui]=t[r],B0(t,Mn+i,e)):(t.push(e),e[ui]=null),e[bn]=t;let o=e[ho];o!==null&&t!==o&&Tx(o,e);let a=e[po];a!==null&&a.insertView(n),cp(e),e[He]|=128}function Tx(n,e){let t=n[Hl],i=e[bn];if(Ir(i))n[He]|=2;else{let r=i[bn][di];e[di]!==r&&(n[He]|=2)}t===null?n[Hl]=[e]:t.push(e)}var Kl=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Qe];return Jl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[dn]}set context(e){this._lView[dn]=e}get destroyed(){return So(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[bn];if(lr(e)){let t=e[zl],i=t?t.indexOf(this):-1;i>-1&&(Da(e,i),kl(t,i))}this._attachedToViewContainer=!1}gu(this._lView[Qe],this._lView)}onDestroy(e){r_(this._lView,e)}markForCheck(){Cm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[He]&=-129}reattach(){cp(this._lView),this._lView[He]|=128}detectChanges(){this._lView[He]|=1024,xx(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ie(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Gl(this._lView),t=this._lView[ho];t!==null&&!e&&Sm(t,this._lView),px(this._lView[Qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ie(902,!1);this._appRef=e;let t=Gl(this._lView),i=this._lView[ho];i!==null&&!t&&Tx(i,this._lView),cp(this._lView)}};function Tm(n,e,t,i,r){let s=n.data[e];if(s===null)s=sD(n,e,t,i,r),$E()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=zE();s.injectorIndex=o===null?-1:o.injectorIndex}return La(s,!0),s}function sD(n,e,t,i,r){let s=c_(),o=l_(),a=o?s:s&&s.parent,c=n.data[e]=aD(n,a,t,e,i,r);return oD(n,c,s,o),c}function oD(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function aD(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return UE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var bV=new RegExp(`^(\\d+)*(${PC}|${NC})*(.*)`);var cD=()=>null;function Ia(n,e){return cD(n,e)}var lD=class{},Dx=class{},Ep=class{resolveComponentFactory(e){throw Error(`No component factory found for ${An(e)}.`)}},_u=class{static NULL=new Ep},vo=class{},xu=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>uD()}return n})();function uD(){let n=Ct(),e=pi(),t=Ri(e.index,n);return(Ir(t)?t:n)[tn]}var dD=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>null})}return n})();var Yh={},Cp=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=cu(i);let r=this.injector.get(e,Yh,i);return r!==Yh||t===Yh?r:this.parentInjector.get(e,t,i)}};function d0(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Vy(r,a);else if(s==2){let c=a,l=e[++o];i=Vy(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function nn(n,e=Xe.Default){let t=Ct();if(t===null)return ke(n,e);let i=pi();return D_(i,t,Kn(n),e)}function Ix(){let n="invalid";throw new Error(n)}function Ax(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=hD(o);u===null?a=o:[a,c,l]=u,gD(n,e,t,a,s,c,l)}s!==null&&i!==null&&fD(t,i,s)}function fD(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ie(-301,!1);i.push(e[r],s)}}function hD(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&ys(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,pD(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function pD(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function mD(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function gD(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let d=0;d<a;d++){let h=i[d];!c&&ys(h)&&(c=!0,mD(n,t,d)),lC(w_(t,e),n,h.type)}bD(t,n.data.length,a);for(let d=0;d<a;d++){let h=i[d];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,f=ax(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let d=0;d<a;d++){let h=i[d];if(t.mergedAttrs=em(t.mergedAttrs,h.hostAttrs),yD(n,t,e,f,h),MD(f,h,r),o!==null&&o.has(h)){let[x,m]=o.get(h);t.directiveToIndex.set(h.type,[f,x+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),f++}vD(n,t,s)}function vD(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))f0(0,e,r,i),f0(1,e,r,i),p0(e,i,!1);else{let s=t.get(r);h0(0,e,s,i),h0(1,e,s,i),p0(e,i,!0)}}}function f0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),Rx(e,s)}}function h0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),Rx(e,o)}}function Rx(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function p0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||pm(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function yD(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ds(r.type,!0)),o=new Ca(s,ys(r),nn);n.blueprint[i]=o,t[i]=o,_D(n,e,i,ax(n,t,r.hostVars,ur),r)}function _D(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;xD(o)!=a&&o.push(a),o.push(t,i,s)}}function xD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function MD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ys(e)&&(t[""]=n)}}function bD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Nx(n,e,t,i,r,s,o,a){let c=e.consts,l=mo(c,o),u=Tm(e,n,2,i,l);return s&&Ax(e,t,u,mo(c,a),r),u.mergedAttrs=em(u.mergedAttrs,u.attrs),u.attrs!==null&&d0(u,u.attrs,!1),u.mergedAttrs!==null&&d0(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function Px(n,e){y_(n,e),Y0(e)&&n.queries.elementEnd(e)}var Ql=class extends _u{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=fs(e);return new yo(t,this.ngModule)}};function SD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&mu.SignalBased)!==0};return r&&(s.transform=r),s})}function wD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function ED(n,e,t){let i=e instanceof Rn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Cp(t,i):t}function CD(n){let e=n.get(vo,null);if(e===null)throw new Ie(407,!1);let t=n.get(dD,null),i=n.get(go,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function TD(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return K_(e,t,t==="svg"?e_:t==="math"?AE:null)}var yo=class extends Dx{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=SD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=wD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=dT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){Mt(22);let s=Je(null);try{let o=this.componentDef,a=i?["ng-version","19.2.21"]:fT(this.componentDef.selectors[0]),c=mm(0,null,null,1,0,null,null,null,null,[a],null),l=ED(o,r||this.ngModule,e),u=CD(l),f=u.rendererFactory.createRenderer(null,o),d=i?gT(f,i,o.encapsulation,l):TD(o,f),h=gm(null,c,null,512|ox(o),null,null,u,f,l,null,X_(d,l,!0));h[Nn]=d,Yp(h);let g=null;try{let x=Nx(Nn,c,h,"#host",()=>[this.componentDef],!0,0);d&&(ex(f,d,x),Ua(d,h)),ym(c,h,x),Z_(c,x,h),Px(c,x),t!==void 0&&DD(x,this.ngContentSelectors,t),g=Ri(x.index,h),h[dn]=g[dn],xm(c,h,null)}catch(x){throw g!==null&&yp(g),yp(h),x}finally{Mt(23),Zp()}return new Tp(this.componentType,h)}finally{Je(s)}}},Tp=class extends lD{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=qp(t[Qe],Nn),this.location=am(this._tNode,t),this.instance=Ri(this._tNode.index,t)[dn],this.hostView=this.changeDetectorRef=new Kl(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=_m(i,r[Qe],r,e,t);this.previousInputValues.set(e,t);let o=Ri(i.index,r);Cm(o,1)}get injector(){return new us(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function DD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Mu=(()=>{class n{static __NG_ELEMENT_ID__=ID}return n})();function ID(){let n=pi();return RD(n,Ct())}var AD=Mu,Ox=class extends AD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return am(this._hostTNode,this._hostLView)}get injector(){return new us(this._hostTNode,this._hostLView)}get parentInjector(){let e=tm(this._hostTNode,this._hostLView);if(M_(e)){let t=Wl(e,this._hostLView),i=jl(e),r=t[Qe].data[i+8];return new us(r,t)}else return new us(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=m0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Mn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Ia(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Ta(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!CE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new yo(fs(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let x=(o?l:this.parentInjector).get(Rn,null);x&&(s=x)}let u=fs(c.componentType??{}),f=Ia(this._lContainer,u?.id??null),d=f?.firstChild??null,h=c.create(l,r,d,s);return this.insertImpl(h.hostView,a,Ta(this._hostTNode,f)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(PE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[bn],l=new Ox(c,c[hi],c[bn]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return yu(o,r,s,i),e.attachToViewContainerRef(),B0(Zh(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=m0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Da(this._lContainer,t);i&&(kl(Zh(this._lContainer),t),gu(i[Qe],i))}detach(e){let t=this._adjustIndex(e,-1),i=Da(this._lContainer,t);return i&&kl(Zh(this._lContainer),t)!=null?new Kl(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function m0(n){return n[zl]}function Zh(n){return n[zl]||(n[zl]=[])}function RD(n,e){let t,i=e[n.index];return lr(i)?t=i:(t=wx(i,e,null,n),e[n.index]=t,vm(e,t)),PD(t,e,n,i),new Ox(t,n,e)}function ND(n,e){let t=n[tn],i=t.createComment(""),r=Oi(e,n),s=t.parentNode(r);return Zl(t,s,i,t.nextSibling(r),!1),i}var PD=FD,OD=()=>!1;function LD(n,e,t){return OD(n,e,t)}function FD(n,e,t,i){if(n[hs])return;let r;t.type&8?r=Ai(i):r=ND(e,t),n[hs]=r}var _o=class{},Dm=class{};var Dp=class extends _o{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ql(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=H0(e);this._bootstrapComponents=rx(s.bootstrap),this._r3Injector=R_(e,t,[{provide:_o,useValue:this},{provide:_u,useValue:this.componentFactoryResolver},...i],An(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Ip=class extends Dm{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Dp(this.moduleType,e,[])}};var eu=class extends _o{injector;componentFactoryResolver=new Ql(this);instance=null;constructor(e){super();let t=new Sa([...e.providers,{provide:_o,useValue:this},{provide:_u,useValue:this.componentFactoryResolver}],e.parent||Wp(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Ba(n,e,t=null){return new eu({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var kD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=G0(!1,t.type),r=i.length>0?Ba([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ae({token:n,providedIn:"environment",factory:()=>new n(ke(Rn))})}return n})();function rn(n){return su(()=>{let e=Fx(n),t=It(_e({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===B_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(kD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Pi.Emulated,styles:n.styles||li,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Rr("NgStandalone"),kx(t);let i=n.dependencies;return t.directiveDefs=g0(i,!1),t.pipeDefs=g0(i,!0),t.id=HD(t),t})}function UD(n){return fs(n)||hE(n)}function BD(n){return n!==null}function Co(n){return su(()=>({type:n.type,bootstrap:n.bootstrap||li,declarations:n.declarations||li,imports:n.imports||li,exports:n.exports||li,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function VD(n,e){if(n==null)return uo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=mu.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function zD(n){if(n==null)return uo;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function mi(n){return su(()=>{let e=Fx(n);return kx(e),e})}function Lx(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function Fx(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||uo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||li,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:VD(n.inputs,e),outputs:zD(n.outputs),debugInfo:null}}function kx(n){n.features?.forEach(e=>e(n))}function g0(n,e){if(!n)return null;let t=e?pE:UD;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(BD)}function HD(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function GD(n,e,t){return n[e]=t}function xs(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function jD(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Tm(e,n,4,o||null,a||null);a_()&&Ax(e,t,u,mo(l,c),fx),u.mergedAttrs=em(u.mergedAttrs,u.attrs),y_(e,u);let f=u.tView=mm(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),f.queries=e.queries.embeddedTView(u)),u}function Ap(n,e,t,i,r,s,o,a,c,l){let u=t+Nn,f=e.firstCreatePass?jD(u,e,n,i,r,s,o,a,c):e.data[u];La(f,!1);let d=WD(e,n,f,t);Kp()&&wm(e,n,d,f),Ua(d,n);let h=wx(d,n,d,f);return n[u]=h,vm(n,h),LD(h,f,n),$p(f)&&ym(e,n,f),c!=null&&ux(n,f,l),f}function Im(n,e,t,i,r,s,o,a){let c=Ct(),l=ti(),u=mo(l.consts,s);return Ap(c,l,n,e,t,i,r,u,o,a),Im}var WD=$D;function $D(n,e,t,i){return Qp(!0),e[tn].createComment("")}var Ux=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Bx=new Re("");var qD=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new Rp})}return n})(),Rp=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function To(n){return!!n&&typeof n.then=="function"}function Am(n){return!!n&&typeof n.subscribe=="function"}var Vx=new Re("");function Rm(n){return lu([{provide:Vx,multi:!0,useValue:n}])}var zx=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=Q(Vx,{optional:!0})??[];injector=Q(fi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=ei(this.injector,r);if(To(s))t.push(s);else if(Am(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bu=new Re("");function XD(){Eh(()=>{throw new Ie(600,!1)})}function YD(n){return n.isBoundToModule}var ZD=10;var gs=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=Q(wC);afterRenderManager=Q(q_);zonelessEnabled=Q(rm);rootEffectScheduler=Q(qD);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Qt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=Q(wo).hasPendingTasks.pipe(rt(t=>!t));constructor(){Q(Eo,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=Q(Rn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=fi.NULL){Mt(10);let s=t instanceof Dx;if(!this._injector.get(zx).done){let h="";throw new Ie(405,h)}let a;s?a=t:a=this._injector.get(_u).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let c=YD(a)?void 0:this._injector.get(_o),l=i||a.selector,u=a.create(r,[],l,c),f=u.location.nativeElement,d=u.injector.get(Bx,null);return d?.registerApplication(f),u.onDestroy(()=>{this.detachView(u.hostView),Nl(this.components,u),d?.unregisterApplication(f)}),this._loadComponent(u),Mt(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Mt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(dm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ie(101,!1);let t=Je(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Je(t),this.afterTick.next(),Mt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(vo,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<ZD;)Mt(14),this.synchronizeOnce(),Mt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)JD(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>fu(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Nl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(bu,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Nl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ie(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Nl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function JD(n,e,t,i){if(!t&&!fu(n))return;xx(n,e,t&&!i?0:1)}function Nm(n,e,t,i){let r=Ct(),s=Fa();if(xs(r,s,e)){let o=ti(),a=Jp();wT(a,r,n,e,t,i)}return Nm}function Hx(n,e,t,i){return xs(n,Fa(),t)?e+au(t)+i:ur}function Dl(n,e){return n<<17|e<<2}function vs(n){return n>>17&32767}function KD(n){return(n&2)==2}function QD(n,e){return n&131071|e<<17}function Np(n){return n|2}function xo(n){return(n&131068)>>2}function Jh(n,e){return n&-131069|e<<2}function eI(n){return(n&1)===1}function Pp(n){return n|1}function tI(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=vs(o),c=xo(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let f=t;u=f[1],(u===null||Ra(f,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let d=vs(n[a+1]);n[i+1]=Dl(d,a),d!==0&&(n[d+1]=Jh(n[d+1],i)),n[a+1]=QD(n[a+1],i)}else n[i+1]=Dl(a,0),a!==0&&(n[a+1]=Jh(n[a+1],i)),a=i;else n[i+1]=Dl(c,0),a===0?a=i:n[c+1]=Jh(n[c+1],i),c=i;l&&(n[i+1]=Np(n[i+1])),v0(n,u,i,!0),v0(n,u,i,!1),nI(e,u,n,i,s),o=Dl(a,c),s?e.classBindings=o:e.styleBindings=o}function nI(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Ra(s,e)>=0&&(t[i+1]=Pp(t[i+1]))}function v0(n,e,t,i){let r=n[t+1],s=e===null,o=i?vs(r):xo(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];iI(c,e)&&(a=!0,n[o+1]=i?Pp(l):Np(l)),o=i?vs(l):xo(l)}a&&(n[t+1]=i?Np(r):Pp(r))}function iI(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Ra(n,e)>=0:!1}function Wt(n,e,t){let i=Ct(),r=Fa();if(xs(i,r,e)){let s=ti(),o=Jp();dx(s,o,i,n,e,i[tn],t,!1)}return Wt}function y0(n,e,t,i,r){_m(e,n,t,r?"class":"style",i)}function Pm(n,e,t){return Gx(n,e,t,!1),Pm}function Ms(n,e){return Gx(n,e,null,!0),Ms}function Gx(n,e,t,i){let r=Ct(),s=ti(),o=WE(2);if(s.firstUpdatePass&&sI(s,n,o,i),e!==ur&&xs(r,o,e)){let a=s.data[_s()];uI(s,a,r,r[tn],n,r[o+1]=dI(e,t),i,o)}}function rI(n,e){return e>=n.expandoStartIndex}function sI(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[_s()],o=rI(n,t);fI(s,i)&&e===null&&!o&&(e=!1),e=oI(r,s,e,i),tI(r,s,e,t,o,i)}}function oI(n,e,t,i){let r=YE(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Kh(null,n,e,t,i),t=Aa(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Kh(r,n,e,t,i),s===null){let c=aI(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Kh(null,n,e,c[1],i),c=Aa(c,e.attrs,i),cI(n,e,i,c))}else s=lI(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function aI(n,e,t){let i=t?e.classBindings:e.styleBindings;if(xo(i)!==0)return n[vs(i)]}function cI(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[vs(r)]=i}function lI(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Aa(i,o,t)}return Aa(i,e.attrs,t)}function Kh(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Aa(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Aa(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),dE(n,o,t?!0:e[++s]))}return n===void 0?null:n}function uI(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=eI(l)?_0(c,e,t,r,xo(l),o):void 0;if(!tu(u)){tu(s)||KD(l)&&(s=_0(c,null,t,r,a,o));let f=t_(_s(),t);jT(i,o,f,r,s)}}function _0(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,d=t[r+1];d===ur&&(d=f?li:void 0);let h=f?Gh(d,i):u===i?d:void 0;if(l&&!tu(h)&&(h=Gh(c,i)),tu(h)&&(a=h,o))return a;let g=n[r+1];r=o?vs(g):xo(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Gh(c,i))}return a}function tu(n){return n!==void 0}function dI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=An(hu(n)))),n}function fI(n,e){return(n.flags&(e?8:16))!==0}var Op=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Qh(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function hI(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],f=Qh(s,l,s,u,t);if(f!==0){f<0&&n.updateValue(s,u),s++;continue}let d=n.at(o),h=e[c],g=Qh(o,d,c,h,t);if(g!==0){g<0&&n.updateValue(o,h),o--,c--;continue}let x=t(s,l),m=t(o,d),p=t(s,u);if(Object.is(p,m)){let b=t(c,h);Object.is(b,x)?(n.swap(s,o),n.updateValue(o,h),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new nu,r??=M0(n,s,o,t),Lp(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(x,n.detach(s)),o--;else{let b=n.create(s,e[s]);n.attach(s,b),s++,o++}}for(;s<=c;)x0(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),f=l.value,d=Qh(s,u,s,f,t);if(d!==0)d<0&&n.updateValue(s,f),s++,l=c.next();else{i??=new nu,r??=M0(n,s,o,t);let h=t(s,f);if(Lp(n,i,s,h))n.updateValue(s,f),s++,o++,l=c.next();else if(!r.has(h))n.attach(s,n.create(s,f)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)x0(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function Lp(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function x0(n,e,t,i,r){if(Lp(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function M0(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var nu=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function jx(n,e){Rr("NgControlFlow");let t=Ct(),i=Fa(),r=t[i]!==ur?t[i]:-1,s=r!==-1?iu(t,Nn+r):void 0,o=0;if(xs(t,i,n)){let a=Je(null);try{if(s!==void 0&&Cx(s,o),n!==-1){let c=Nn+n,l=iu(t,c),u=Bp(t[Qe],c),f=Ia(l,u.tView.ssrId),d=Mm(t,u,e,{dehydratedView:f});yu(l,d,o,Ta(u,f))}}finally{Je(a)}}else if(s!==void 0){let a=Ex(s,o);a!==void 0&&(a[dn]=e)}}var Fp=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Mn}};function Wx(n,e){return e}var kp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Fi(n,e,t,i,r,s,o,a,c,l,u,f,d){Rr("NgControlFlow");let h=Ct(),g=ti(),x=c!==void 0,m=Ct(),p=a?o.bind(m[di][dn]):o,b=new kp(x,p);m[Nn+n]=b,Ap(h,g,n+1,e,t,i,r,mo(g.consts,s)),x&&Ap(h,g,n+2,c,l,u,f,mo(g.consts,d))}var Up=class extends Op{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-Mn}at(e){return this.getLView(e)[dn].$implicit}attach(e,t){let i=t[wa];this.needsIndexUpdate||=e!==this.length,yu(this.lContainer,t,e,Ta(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,pI(this.lContainer,e)}create(e,t){let i=Ia(this.lContainer,this.templateTNode.tView.ssrId),r=Mm(this.hostLView,this.templateTNode,new Fp(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){gu(e[Qe],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[dn].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[dn].$index=e}getLView(e){return mI(this.lContainer,e)}};function ki(n){let e=Je(null),t=_s();try{let i=Ct(),r=i[Qe],s=i[t],o=t+1,a=iu(i,o);if(s.liveCollection===void 0){let l=Bp(r,o);s.liveCollection=new Up(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(hI(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=Fa(),u=c.length===0;if(xs(i,l,u)){let f=t+2,d=iu(i,f);if(u){let h=Bp(r,f),g=Ia(d,h.tView.ssrId),x=Mm(i,h,void 0,{dehydratedView:g});yu(d,x,0,Ta(h,g))}else Cx(d,0)}}}finally{Je(e)}}function iu(n,e){return n[e]}function pI(n,e){return Da(n,e)}function mI(n,e){return Ex(n,e)}function Bp(n,e){return qp(n,e)}function te(n,e,t,i){let r=Ct(),s=ti(),o=Nn+n,a=r[tn],c=s.firstCreatePass?Nx(o,s,r,e,fx,a_(),t,i):s.data[o],l=gI(s,r,c,a,e,n);r[o]=l;let u=$p(c);return La(c,!0),ex(a,l,c),!hx(c)&&Kp()&&wm(s,r,l,c),(LE()===0||u)&&Ua(l,r),FE(),u&&(ym(s,r,c),Z_(s,c,r)),i!==null&&ux(r,c),te}function ge(){let n=pi();l_()?HE():(n=n.parent,La(n,!1));let e=n;BE(e)&&VE(),kE();let t=ti();return t.firstCreatePass&&Px(t,e),e.classesWithoutHost!=null&&tC(e)&&y0(t,e,Ct(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&nC(e)&&y0(t,e,Ct(),e.stylesWithoutHost,!1),ge}function bt(n,e,t,i){return te(n,e,t,i),ge(),bt}var gI=(n,e,t,i,r,s)=>(Qp(!0),K_(i,r,KE()));var ru="en-US";var vI=ru;function yI(n){typeof n=="string"&&(vI=n.toLowerCase().replace(/_/g,"-"))}function b0(n,e,t){return function i(r){if(r===Function)return t;let s=bo(n)?Ri(n.index,e):e;Cm(s,5);let o=e[dn],a=S0(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=S0(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function S0(n,e,t,i){let r=Je(null);try{return Mt(6,e,t),t(i)!==!1}catch(s){return _I(n,s),!1}finally{Mt(7,e,t),Je(r)}}function _I(n,e){let t=n[fo],i=t?t.get(Ni,null):null;i&&i.handleError(e)}function w0(n,e,t,i,r,s){let o=e[t],a=e[Qe],l=a.data[t].outputs[i],u=o[l],f=a.firstCreatePass?o_(a):null,d=s_(e),h=u.subscribe(s),g=d.length;d.push(s,h),f&&f.push(r,n.index,g,-(g+1))}function gi(n,e,t,i){let r=Ct(),s=ti(),o=pi();return MI(s,r,r[tn],o,n,e,i),gi}function xI(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Bl],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function MI(n,e,t,i,r,s,o){let a=$p(i),l=n.firstCreatePass?o_(n):null,u=s_(e),f=!0;if(i.type&3||o){let d=Oi(i,e),h=o?o(d):d,g=u.length,x=o?p=>o(Ai(p[i.index])):i.index,m=null;if(!o&&a&&(m=xI(n,e,r,i.index)),m!==null){let p=m.__ngLastListenerFn__||m;p.__ngNextListenerFn__=s,m.__ngLastListenerFn__=s,f=!1}else{s=b0(i,e,s),zC(e,h,r,s);let p=t.listen(h,r,s);u.push(s,p),l&&l.push(r,x,g,g+1)}}else s=b0(i,e,s);if(f){let d=i.outputs?.[r],h=i.hostDirectiveOutputs?.[r];if(h&&h.length)for(let g=0;g<h.length;g+=2){let x=h[g],m=h[g+1];w0(i,e,x,m,r,s)}if(d&&d.length)for(let g of d)w0(i,e,g,r,r,s)}}function Do(n,e,t,i,r){let s=Ct(),o=Hx(s,e,t,i);if(o!==ur){let a=ti(),c=Jp();dx(a,c,s,n,o,s[tn],r,!1)}return Do}function be(n,e=""){let t=Ct(),i=ti(),r=n+Nn,s=i.firstCreatePass?Tm(i,r,1,e,null):i.data[r],o=bI(i,t,s,e,n);t[r]=o,Kp()&&wm(i,t,o,s),La(s,!1)}var bI=(n,e,t,i,r)=>(Qp(!0),qC(e[tn],i));function wn(n){return Va("",n,""),wn}function Va(n,e,t){let i=Ct(),r=Hx(i,n,e,t);return r!==ur&&SI(i,_s(),r),Va}function SI(n,e,t){let i=t_(e,n);XC(n[tn],i,t)}function wI(n,e){let t=n[e];return t===ur?void 0:t}function EI(n,e,t,i,r,s){let o=e+t;return xs(n,o,r)?GD(n,o+1,s?i.call(s,r):i(r)):wI(n,o+1)}function $x(n,e){let t=ti(),i,r=n+Nn;t.firstCreatePass?(i=CI(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=ds(i.type,!0)),o,a=Dn(nn);try{let c=$l(!1),l=s();return $l(c),NE(t,Ct(),r,l),l}finally{Dn(a)}}function CI(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function qx(n,e,t){let i=n+Nn,r=Ct(),s=RE(r,i);return TI(r,i)?EI(r,GE(),e,s.transform,t,s):s.transform(t)}function TI(n,e){return n[Qe].data[e].pure}var Vp=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Xx=(()=>{class n{compileModuleSync(t){return new Ip(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=H0(t),s=rx(r.declarations).reduce((o,a)=>{let c=fs(a);return c&&o.push(new yo(c)),o},[]);return new Vp(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var DI=(()=>{class n{zone=Q(Pt);changeDetectionScheduler=Q(go);applicationRef=Q(gs);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),II=new Re("",{factory:()=>!1});function Yx({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Pt(It(_e({},Jx()),{scheduleInRootZone:t})),[{provide:Pt,useFactory:n},{provide:ba,multi:!0,useFactory:()=>{let i=Q(DI,{optional:!0});return()=>i.initialize()}},{provide:ba,multi:!0,useFactory:()=>{let i=Q(AI);return()=>{i.initialize()}}},e===!0?{provide:P_,useValue:!0}:[],{provide:O_,useValue:t??N_}]}function Zx(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=Yx({ngZoneFactory:()=>{let r=Jx(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&Rr("NgZone_CoalesceEvent"),new Pt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return lu([{provide:II,useValue:!0},{provide:rm,useValue:!1},i])}function Jx(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var AI=(()=>{class n{subscription=new jt;initialized=!1;zone=Q(Pt);pendingTasks=Q(wo);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Pt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Pt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var RI=(()=>{class n{appRef=Q(gs);taskService=Q(wo);ngZone=Q(Pt);zonelessEnabled=Q(rm);tracing=Q(Eo,{optional:!0});disableScheduling=Q(P_,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new jt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Xl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Q(O_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof vp||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?t0:L_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Xl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,t0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function NI(){return typeof $localize<"u"&&$localize.locale||ru}var Om=new Re("",{providedIn:"root",factory:()=>Q(Om,Xe.Optional|Xe.SkipSelf)||NI()});var zp=new Re(""),PI=new Re("");function ya(n){return!n.moduleRef}function OI(n){let e=ya(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Pt);return t.run(()=>{ya(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Ni,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),ya(n)){let s=()=>e.destroy(),o=n.platformInjector.get(zp);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(zp);o.add(s),n.moduleRef.onDestroy(()=>{Nl(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return FI(i,t,()=>{let s=e.get(zx);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(Om,ru);if(yI(o||ru),!e.get(PI,!0))return ya(n)?e.get(gs):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ya(n)){let c=e.get(gs);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return LI(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function LI(n,e){let t=n.injector.get(gs);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ie(-403,!1);e.push(n)}function FI(n,e,t){try{let i=t();return To(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Pl=null;function kI(n=[],e){return fi.create({name:e,providers:[{provide:uu,useValue:"platform"},{provide:zp,useValue:new Set([()=>Pl=null])},...n]})}function UI(n=[]){if(Pl)return Pl;let e=kI(n);return Pl=e,XD(),BI(e),e}function BI(n){let e=n.get(lm,null);ei(n,()=>{e?.forEach(t=>t())})}var Io=(()=>{class n{static __NG_ELEMENT_ID__=VI}return n})();function VI(n){return zI(pi(),Ct(),(n&16)===16)}function zI(n,e,t){if(bo(n)&&!t){let i=Ri(n.index,e);return new Kl(i,i)}else if(n.type&175){let i=e[di];return new Kl(i,e)}return null}function Kx(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;Mt(8);try{let s=r?.injector??UI(i),o=[Yx({}),{provide:go,useExisting:RI},...t||[]],a=new eu({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return OI({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{Mt(9)}}function za(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function Lm(n){return Dh(n)}var E0=class{[Ws];constructor(e){this[Ws]=e}destroy(){this[Ws].destroy()}};function Qx(n){let e=fs(n);if(!e)return null;let t=new yo(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var on=new Re("");var nM=null;function dr(){return nM}function Fm(n){nM??=n}var Ha=class{},Ga=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(iM),providedIn:"platform"})}return n})(),km=new Re(""),iM=(()=>{class n extends Ga{_location;_history;_doc=Q(on);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return dr().getBaseHref(this._doc)}onPopState(t){let i=dr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=dr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Su(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function eM(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function vi(n){return n&&n[0]!=="?"?`?${n}`:n}var yi=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(Eu),providedIn:"root"})}return n})(),wu=new Re(""),Eu=(()=>{class n extends yi{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??Q(on).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Su(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+vi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+vi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+vi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(ke(Ga),ke(wu,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pr=(()=>{class n{_subject=new Qt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=jI(eM(tM(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+vi(i))}normalize(t){return n.stripTrailingSlash(GI(this._basePath,tM(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+vi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+vi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=vi;static joinWithSlash=Su;static stripTrailingSlash=eM;static \u0275fac=function(i){return new(i||n)(ke(yi))};static \u0275prov=Ae({token:n,factory:()=>HI(),providedIn:"root"})}return n})();function HI(){return new Pr(ke(yi))}function GI(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function tM(n){return n.replace(/\/index.html$/,"")}function jI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Vm=(()=>{class n extends yi{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Su(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+vi(s))||this._platformLocation.pathname;this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+vi(s))||this._platformLocation.pathname;this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(ke(Ga),ke(wu,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})();function WI(n,e){return new Ie(2100,!1)}var Um=class{createSubscription(e,t){return Lm(()=>e.subscribe({next:t,error:i=>{throw i}}))}dispose(e){Lm(()=>e.unsubscribe())}},Bm=class{createSubscription(e,t){return e.then(i=>t?.(i),i=>{throw i}),{unsubscribe:()=>{t=null}}}dispose(e){e.unsubscribe()}},$I=new Bm,qI=new Um,zm=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,i=>this._updateLatestValue(t,i))}_selectStrategy(t){if(To(t))return $I;if(Am(t))return qI;throw WI(n,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,i){t===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||n)(nn(Io,16))};static \u0275pipe=Lx({name:"async",type:n,pure:!1})}return n})();var Cu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Co({type:n});static \u0275inj=Mo({})}return n})();function Hm(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Tu="browser",rM="server";function Gm(n){return n===Tu}function Du(n){return n===rM}var ja=class{};var sM=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new jm(Q(on),window)})}return n})(),jm=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=YI(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function YI(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var Ru=new Re(""),Xm=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ie(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ke(Ru),ke(Pt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Wa=class{_doc;constructor(e){this._doc=e}manager},Iu="ng-app-id";function oM(n){for(let e of n)e.remove()}function aM(n,e){let t=e.createElement("style");return t.textContent=n,t}function JI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Iu}="${e}"],link[${Iu}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Iu),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function $m(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Ym=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Du(s),JI(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,aM);i?.forEach(r=>this.addUsage(r,this.external,$m))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(oM(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])oM(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,aM(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,$m(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Iu,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ke(on),ke(cm),ke(um,8),ke(Ar))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Wm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zm=/%COMP%/g;var lM="%COMP%",KI=`_nghost-${lM}`,QI=`_ngcontent-${lM}`,eA=!0,tA=new Re("",{providedIn:"root",factory:()=>eA});function nA(n){return QI.replace(Zm,n)}function iA(n){return KI.replace(Zm,n)}function uM(n,e){return e.map(t=>t.replace(Zm,n))}var Jm=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=Du(a),this.defaultRenderer=new $a(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Pi.ShadowDom&&(i=It(_e({},i),{encapsulation:Pi.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Au?r.applyToHost(t):r instanceof qa&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.platformIsServer,d=this.tracingService;switch(i.encapsulation){case Pi.Emulated:s=new Au(c,l,i,this.appId,u,o,a,f,d);break;case Pi.ShadowDom:return new qm(c,l,t,i,o,a,this.nonce,f,d);default:s=new qa(c,l,i,u,o,a,f,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ke(Xm),ke(Ym),ke(cm),ke(tA),ke(on),ke(Ar),ke(Pt),ke(um),ke(Eo,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),$a=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Wm[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(cM(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(cM(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ie(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Wm[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Wm[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ar.DashCase|ar.Important)?e.style.setProperty(t,i,r&ar.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ar.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=dr().getGlobalEventTarget(this.doc,e),!e))throw new Ie(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function cM(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var qm=class extends $a{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=uM(r.id,u);for(let d of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=d,this.shadowRoot.appendChild(h)}let f=r.getExternalStyles?.();if(f)for(let d of f){let h=$m(d,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},qa=class extends $a{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?uM(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Au=class extends qa{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=nA(u),this.hostAttr=iA(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Nu=class n extends Ha{supportsDOMEvents=!0;static makeCurrent(){Fm(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=rA();return t==null?null:sA(t)}resetBaseElement(){Xa=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Hm(document.cookie,e)}},Xa=null;function rA(){return Xa=Xa||document.head.querySelector("base"),Xa?Xa.getAttribute("href"):null}function sA(n){return new URL(n,document.baseURI).pathname}var oA=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),fM=(()=>{class n extends Wa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(ke(on))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),dM=["alt","control","meta","shift"],aA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},cA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},hM=(()=>{class n extends Wa{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>dr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),dM.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=aA[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),dM.forEach(o=>{if(o!==r){let a=cA[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ke(on))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})();function Km(n,e,t){return Kx(_e({rootComponent:n,platformRef:t?.platformRef},lA(e)))}function lA(n){return{appProviders:[...pA,...n?.providers??[]],platformProviders:hA}}function uA(){Nu.makeCurrent()}function dA(){return new Ni}function fA(){return j_(document),document}var hA=[{provide:Ar,useValue:Tu},{provide:lm,useValue:uA,multi:!0},{provide:on,useFactory:fA}];var pA=[{provide:uu,useValue:"root"},{provide:Ni,useFactory:dA},{provide:Ru,useClass:fM,multi:!0,deps:[on]},{provide:Ru,useClass:hM,multi:!0,deps:[on]},Jm,Ym,Xm,{provide:vo,useExisting:Jm},{provide:ja,useClass:oA},[]];var pM=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(ke(on))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var We="primary",ac=Symbol("RouteTitle"),ig=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ws(n){return new ig(n)}function bM(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function gA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ui(n[t],e[t]))return!1;return!0}function Ui(n,e){let t=n?rg(n):void 0,i=e?rg(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!SM(n[r],e[r]))return!1;return!0}function rg(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function SM(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function wM(n){return n.length>0?n[n.length-1]:null}function Ur(n){return Bh(n)?n:To(n)?Ft(Promise.resolve(n)):Fe(n)}var vA={exact:CM,subset:TM},EM={exact:yA,subset:_A,ignored:()=>!0};function mM(n,e,t){return vA[t.paths](n.root,e.root,t.matrixParams)&&EM[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function yA(n,e){return Ui(n,e)}function CM(n,e,t){if(!bs(n.segments,e.segments)||!Lu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!CM(n.children[i],e.children[i],t))return!1;return!0}function _A(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>SM(n[t],e[t]))}function TM(n,e,t){return DM(n,e,e.segments,t)}function DM(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!bs(r,t)||e.hasChildren()||!Lu(r,t,i))}else if(n.segments.length===t.length){if(!bs(n.segments,t)||!Lu(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!TM(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!bs(n.segments,r)||!Lu(n.segments,r,i)||!n.children[We]?!1:DM(n.children[We],e,s,i)}}function Lu(n,e,t){return e.every((i,r)=>EM[t](n[r].parameters,i.parameters))}var Vi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ht([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ws(this.queryParams),this._queryParamMap}toString(){return bA.serialize(this)}},ht=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fu(this)}},Or=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ws(this.parameters),this._parameterMap}toString(){return AM(this)}};function xA(n,e){return bs(n,e)&&n.every((t,i)=>Ui(t.parameters,e[i].parameters))}function bs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function MA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===We&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==We&&(t=t.concat(e(r,i)))}),t}var Es=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new Lr,providedIn:"root"})}return n})(),Lr=class{parse(e){let t=new og(e);return new Vi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ya(e.root,!0)}`,i=EA(e.queryParams),r=typeof e.fragment=="string"?`#${SA(e.fragment)}`:"";return`${t}${i}${r}`}},bA=new Lr;function Fu(n){return n.segments.map(e=>AM(e)).join("/")}function Ya(n,e){if(!n.hasChildren())return Fu(n);if(e){let t=n.children[We]?Ya(n.children[We],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==We&&i.push(`${r}:${Ya(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=MA(n,(i,r)=>r===We?[Ya(n.children[We],!1)]:[`${r}:${Ya(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[We]!=null?`${Fu(n)}/${t[0]}`:`${Fu(n)}/(${t.join("//")})`}}function IM(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pu(n){return IM(n).replace(/%3B/gi,";")}function SA(n){return encodeURI(n)}function sg(n){return IM(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ku(n){return decodeURIComponent(n)}function gM(n){return ku(n.replace(/\+/g,"%20"))}function AM(n){return`${sg(n.path)}${wA(n.parameters)}`}function wA(n){return Object.entries(n).map(([e,t])=>`;${sg(e)}=${sg(t)}`).join("")}function EA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Pu(t)}=${Pu(r)}`).join("&"):`${Pu(t)}=${Pu(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var CA=/^[^\/()?;#]+/;function Qm(n){let e=n.match(CA);return e?e[0]:""}var TA=/^[^\/()?;=#]+/;function DA(n){let e=n.match(TA);return e?e[0]:""}var IA=/^[^=?&#]+/;function AA(n){let e=n.match(IA);return e?e[0]:""}var RA=/^[^&#]+/;function NA(n){let e=n.match(RA);return e?e[0]:""}var og=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[We]=new ht(e,t)),i}parseSegment(){let e=Qm(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ie(4009,!1);return this.capture(e),new Or(ku(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=DA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qm(this.remaining);r&&(i=r,this.capture(i))}e[ku(t)]=ku(i)}parseQueryParam(e){let t=AA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=NA(this.remaining);o&&(i=o,this.capture(i))}let r=gM(t),s=gM(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qm(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ie(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=We);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[We]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ie(4011,!1)}};function RM(n){return n.segments.length>0?new ht([],{[We]:n}):n}function NM(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=NM(r);if(i===We&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ht(n.segments,e);return PA(t)}function PA(n){if(n.numberOfChildren===1&&n.children[We]){let e=n.children[We];return new ht(n.segments.concat(e.segments),e.children)}return n}function Fr(n){return n instanceof Vi}function PM(n,e,t=null,i=null){let r=OM(n);return LM(r,e,t,i)}function OM(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ht(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=RM(i);return e??r}function LM(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return eg(r,r,r,t,i);let s=OA(e);if(s.toRoot())return eg(r,r,new ht([],{}),t,i);let o=LA(s,r,n),a=o.processChildren?Ja(o.segmentGroup,o.index,s.commands):kM(o.segmentGroup,o.index,s.commands);return eg(r,o.segmentGroup,a,t,i)}function Bu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Qa(n){return typeof n=="object"&&n!=null&&n.outlets}function eg(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=FM(n,e,t);let a=RM(NM(o));return new Vi(a,s,r)}function FM(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=FM(s,e,t)}),new ht(n.segments,i)}var Vu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Bu(i[0]))throw new Ie(4003,!1);let r=i.find(Qa);if(r&&r!==wM(i))throw new Ie(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function OA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Vu(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Vu(t,e,i)}var No=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function LA(n,e,t){if(n.isAbsolute)return new No(e,!0,0);if(!t)return new No(e,!1,NaN);if(t.parent===null)return new No(t,!0,0);let i=Bu(n.commands[0])?0:1,r=t.segments.length-1+i;return FA(t,r,n.numberOfDoubleDots)}function FA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ie(4005,!1);r=i.segments.length}return new No(i,!1,r-s)}function kA(n){return Qa(n[0])?n[0].outlets:{[We]:n}}function kM(n,e,t){if(n??=new ht([],{}),n.segments.length===0&&n.hasChildren())return Ja(n,e,t);let i=UA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ht(n.segments.slice(0,i.pathIndex),{});return s.children[We]=new ht(n.segments.slice(i.pathIndex),n.children),Ja(s,0,r)}else return i.match&&r.length===0?new ht(n.segments,{}):i.match&&!n.hasChildren()?ag(n,e,t):i.match?Ja(n,0,r):ag(n,e,t)}function Ja(n,e,t){if(t.length===0)return new ht(n.segments,{});{let i=kA(t),r={};if(Object.keys(i).some(s=>s!==We)&&n.children[We]&&n.numberOfChildren===1&&n.children[We].segments.length===0){let s=Ja(n.children[We],e,t);return new ht(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=kM(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ht(n.segments,r)}}function UA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Qa(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!yM(c,l,o))return s;i+=2}else{if(!yM(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ag(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Qa(s)){let c=BA(s.outlets);return new ht(i,c)}if(r===0&&Bu(t[0])){let c=n.segments[e];i.push(new Or(c.path,vM(t[0]))),r++;continue}let o=Qa(s)?s.outlets[We]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Bu(a)?(i.push(new Or(o,vM(a))),r+=2):(i.push(new Or(o,{})),r++)}return new ht(i,{})}function BA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ag(new ht([],{}),0,i))}),e}function vM(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function yM(n,e,t){return n==t.path&&Ui(e,t.parameters)}var Uu="imperative",Zt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Zt||{}),zn=class{id;url;constructor(e,t){this.id=e,this.url=t}},kr=class extends zn{type=Zt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},On=class extends zn{urlAfterRedirects;type=Zt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Pn||{}),Oo=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Oo||{}),Bi=class extends zn{reason;code;type=Zt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},zi=class extends zn{reason;code;type=Zt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Lo=class extends zn{error;target;type=Zt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ec=class extends zn{urlAfterRedirects;state;type=Zt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zu=class extends zn{urlAfterRedirects;state;type=Zt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hu=class extends zn{urlAfterRedirects;state;shouldActivate;type=Zt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gu=class extends zn{urlAfterRedirects;state;type=Zt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ju=class extends zn{urlAfterRedirects;state;type=Zt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wu=class{route;type=Zt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$u=class{route;type=Zt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},qu=class{snapshot;type=Zt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xu=class{snapshot;type=Zt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yu=class{snapshot;type=Zt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zu=class{snapshot;type=Zt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fo=class{routerEvent;position;anchor;type=Zt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},tc=class{},ko=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function VA(n,e){return n.providers&&!n._injector&&(n._injector=Ba(n.providers,e,`Route: ${n.path}`)),n._injector??e}function _i(n){return n.outlet||We}function zA(n,e){let t=n.filter(i=>_i(i)===e);return t.push(...n.filter(i=>_i(i)!==e)),t}function cc(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Ju=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return cc(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Cs(this.rootInjector)}},Cs=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Ju(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(ke(Rn))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ku=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=cg(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=cg(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=lg(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return lg(e,this._root).map(t=>t.value)}};function cg(n,e){if(n===e.value)return e;for(let t of e.children){let i=cg(n,t);if(i)return i}return null}function lg(n,e){if(n===e.value)return[e];for(let t of e.children){let i=lg(n,t);if(i.length)return i.unshift(e),i}return[]}var Vn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ro(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var nc=class extends Ku{snapshot;constructor(e,t){super(e),this.snapshot=t,vg(this,e)}toString(){return this.snapshot.toString()}};function UM(n){let e=HA(n),t=new ln([new Or("",{})]),i=new ln({}),r=new ln({}),s=new ln({}),o=new ln(""),a=new Hi(t,i,s,o,r,We,n,e.root);return a.snapshot=e.root,new nc(new Vn(a,[]),e)}function HA(n){let e={},t={},i={},r="",s=new Ss([],e,i,r,t,We,n,null,{});return new ic("",new Vn(s,[]))}var Hi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[ac]))??Fe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>ws(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>ws(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Qu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:_e(_e({},e.params),n.params),data:_e(_e({},e.data),n.data),resolve:_e(_e(_e(_e({},n.data),e.data),r?.data),n._resolvedData)}:i={params:_e({},n.params),data:_e({},n.data),resolve:_e(_e({},n.data),n._resolvedData??{})},r&&VM(r)&&(i.resolve[ac]=r.title),i}var Ss=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[ac]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ws(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ws(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},ic=class extends Ku{url;constructor(e,t){super(t),this.url=e,vg(this,t)}toString(){return BM(this._root)}};function vg(n,e){e.value._routerState=n,e.children.forEach(t=>vg(n,t))}function BM(n){let e=n.children.length>0?` { ${n.children.map(BM).join(", ")} } `:"";return`${n.value}${e}`}function tg(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ui(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ui(e.params,t.params)||n.paramsSubject.next(t.params),gA(e.url,t.url)||n.urlSubject.next(t.url),Ui(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ug(n,e){let t=Ui(n.params,e.params)&&xA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||ug(n.parent,e.parent))}function VM(n){return typeof n.title=="string"||n.title===null}var zM=new Re(""),lc=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=We;activateEvents=new In;deactivateEvents=new In;attachEvents=new In;detachEvents=new In;routerOutletData=k_(void 0);parentContexts=Q(Cs);location=Q(Mu);changeDetector=Q(Io);inputBinder=Q(uc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ie(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ie(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ie(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ie(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new dg(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=mi({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Pa]})}return n})(),dg=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Hi?this.route:e===Cs?this.childContexts:e===zM?this.outletData:this.parent.get(e,t)}},uc=new Re(""),yg=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=ga([i.queryParams,i.params,i.data]).pipe(Jn(([s,o,a],c)=>(a=_e(_e(_e({},s),o),a),c===0?Fe(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=Qx(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),_g=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=rn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&bt(0,"router-outlet")},dependencies:[lc],encapsulation:2})}return n})();function xg(n){let e=n.children&&n.children.map(xg),t=e?It(_e({},n),{children:e}):_e({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==We&&(t.component=_g),t}function GA(n,e,t){let i=rc(n,e._root,t?t._root:void 0);return new nc(i,e)}function rc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=jA(n,e,t);return new Vn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>rc(n,a)),o}}let i=WA(e.value),r=e.children.map(s=>rc(n,s));return new Vn(i,r)}}function jA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return rc(n,i,r);return rc(n,i)})}function WA(n){return new Hi(new ln(n.url),new ln(n.params),new ln(n.queryParams),new ln(n.fragment),new ln(n.data),n.outlet,n.component,n)}var Uo=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},HM="ngNavigationCancelingError";function ed(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Fr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=GM(!1,Pn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function GM(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[HM]=!0,t.cancellationCode=e,t}function $A(n){return jM(n)&&Fr(n.url)}function jM(n){return!!n&&n[HM]}var qA=(n,e,t,i)=>rt(r=>(new fg(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),fg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),tg(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ro(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ro(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ro(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ro(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Zu(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Xu(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(tg(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),tg(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},td=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Po=class{component;route;constructor(e,t){this.component=e,this.route=t}};function XA(n,e,t){let i=n._root,r=e?e._root:null;return Za(i,r,t,[i.value])}function YA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Vo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!N0(n)?n:e.get(n):i}function Za(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ro(e);return n.children.forEach(o=>{ZA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ka(a,t.getContext(o),r)),r}function ZA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=JA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new td(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Za(n,e,a?a.children:null,i,r):Za(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Po(a.outlet.component,o))}else o&&Ka(e,a,r),r.canActivateChecks.push(new td(i)),s.component?Za(n,null,a?a.children:null,i,r):Za(n,null,t,i,r);return r}function JA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!bs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!bs(n.url,e.url)||!Ui(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ug(n,e)||!Ui(n.queryParams,e.queryParams);case"paramsChange":default:return!ug(n,e)}}function Ka(n,e,t){let i=Ro(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ka(o,e.children.getContext(s),t):Ka(o,null,t):Ka(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Po(e.outlet.component,r)):t.canDeactivateChecks.push(new Po(null,r)):t.canDeactivateChecks.push(new Po(null,r))}function dc(n){return typeof n=="function"}function KA(n){return typeof n=="boolean"}function QA(n){return n&&dc(n.canLoad)}function e1(n){return n&&dc(n.canActivate)}function t1(n){return n&&dc(n.canActivateChild)}function n1(n){return n&&dc(n.canDeactivate)}function i1(n){return n&&dc(n.canMatch)}function WM(n){return n instanceof nr||n?.name==="EmptyError"}var Ou=Symbol("INITIAL_VALUE");function Bo(){return Jn(n=>ga(n.map(e=>e.pipe(rr(1),io(Ou)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===Ou)return Ou;if(t===!1||r1(t))return t}return!0}),mn(e=>e!==Ou),rr(1)))}function r1(n){return Fr(n)||n instanceof Uo}function s1(n,e){return Ht(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Fe(It(_e({},t),{guardsResult:!0})):o1(o,i,r,n).pipe(Ht(a=>a&&KA(a)?a1(i,s,n,e):Fe(a)),rt(a=>It(_e({},t),{guardsResult:a})))})}function o1(n,e,t,i){return Ft(n).pipe(Ht(r=>f1(r.component,r.route,t,e,i)),sr(r=>r!==!0,!0))}function a1(n,e,t,i){return Ft(e).pipe(Cr(r=>to(l1(r.route.parent,i),c1(r.route,i),d1(n,r.path,t),u1(n,r.route,t))),sr(r=>r!==!0,!0))}function c1(n,e){return n!==null&&e&&e(new Yu(n)),Fe(!0)}function l1(n,e){return n!==null&&e&&e(new qu(n)),Fe(!0)}function u1(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Fe(!0);let r=i.map(s=>El(()=>{let o=cc(e)??t,a=Vo(s,o),c=e1(a)?a.canActivate(e,n):ei(o,()=>a(e,n));return Ur(c).pipe(sr())}));return Fe(r).pipe(Bo())}function d1(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>YA(o)).filter(o=>o!==null).map(o=>El(()=>{let a=o.guards.map(c=>{let l=cc(o.node)??t,u=Vo(c,l),f=t1(u)?u.canActivateChild(i,n):ei(l,()=>u(i,n));return Ur(f).pipe(sr())});return Fe(a).pipe(Bo())}));return Fe(s).pipe(Bo())}function f1(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Fe(!0);let o=s.map(a=>{let c=cc(e)??r,l=Vo(a,c),u=n1(l)?l.canDeactivate(n,e,t,i):ei(c,()=>l(n,e,t,i));return Ur(u).pipe(sr())});return Fe(o).pipe(Bo())}function h1(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Vo(o,n),c=QA(a)?a.canLoad(e,t):ei(n,()=>a(e,t));return Ur(c)});return Fe(s).pipe(Bo(),$M(i))}function $M(n){return Lh(un(e=>{if(typeof e!="boolean")throw ed(n,e)}),rt(e=>e===!0))}function p1(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Vo(o,n),c=i1(a)?a.canMatch(e,t):ei(n,()=>a(e,t));return Ur(c)});return Fe(s).pipe(Bo(),$M(i))}var sc=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},oc=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Ao(n){return Qs(new sc(n))}function m1(n){return Qs(new Ie(4e3,!1))}function g1(n){return Qs(GM(!1,Pn.GuardRejected))}var hg=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Fe(i);if(r.numberOfChildren>1||!r.children[We])return m1(`${e.redirectTo}`);r=r.children[We]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:f,outlet:d,params:h,data:g,title:x}=r,m=ei(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:f,outlet:d,title:x}));if(m instanceof Vi)throw new oc(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new oc(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Vi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ht(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ie(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},pg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function v1(n,e,t,i,r){let s=qM(n,e,t);return s.matched?(i=VA(e,i),p1(i,e,t,r).pipe(rt(o=>o===!0?s:_e({},pg)))):Fe(s)}function qM(n,e,t){if(e.path==="**")return y1(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?_e({},pg):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||bM)(t,n,e);if(!r)return _e({},pg);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?_e(_e({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function y1(n){return{matched:!0,parameters:n.length>0?wM(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function _M(n,e,t,i){return t.length>0&&M1(n,t,i)?{segmentGroup:new ht(e,x1(i,new ht(t,n.children))),slicedSegments:[]}:t.length===0&&b1(n,t,i)?{segmentGroup:new ht(n.segments,_1(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ht(n.segments,n.children),slicedSegments:t}}function _1(n,e,t,i){let r={};for(let s of t)if(id(n,e,s)&&!i[_i(s)]){let o=new ht([],{});r[_i(s)]=o}return _e(_e({},i),r)}function x1(n,e){let t={};t[We]=e;for(let i of n)if(i.path===""&&_i(i)!==We){let r=new ht([],{});t[_i(i)]=r}return t}function M1(n,e,t){return t.some(i=>id(n,e,i)&&_i(i)!==We)}function b1(n,e,t){return t.some(i=>id(n,e,i))}function id(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function S1(n,e,t){return e.length===0&&!n.children[t]}var mg=class{};function w1(n,e,t,i,r,s,o="emptyOnly"){return new gg(n,e,t,i,r,o,s).recognize()}var E1=31,gg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new hg(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ie(4002,`'${e.segmentGroup}'`)}recognize(){let e=_M(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new Vn(i,t),s=new ic("",r),o=PM(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Ss([],Object.freeze({}),Object.freeze(_e({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),We,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,We,t).pipe(rt(i=>({children:i,rootSnapshot:t})),ir(i=>{if(i instanceof oc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof sc?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof Vn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ft(s).pipe(Cr(o=>{let a=i.children[o],c=zA(t,o);return this.processSegmentGroup(e,c,a,o,r)}),zh((o,a)=>(o.push(...a),o)),Tr(null),Vh(),Ht(o=>{if(o===null)return Ao(i);let a=XM(o);return C1(a),Fe(a)}))}processSegment(e,t,i,r,s,o,a){return Ft(t).pipe(Cr(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(ir(l=>{if(l instanceof sc)return Fe(null);throw l}))),sr(c=>!!c),ir(c=>{if(WM(c))return S1(i,r,s)?Fe(new mg):Ao(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return _i(i)!==o&&(o===We||!id(r,s,i))?Ao(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Ao(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:d}=qM(t,r,s);if(!c)return Ao(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>E1&&(this.allowRedirects=!1));let h=new Ss(s,l,Object.freeze(_e({},this.urlTree.queryParams)),this.urlTree.fragment,xM(r),_i(r),r.component??r._loadedComponent??null,r,MM(r)),g=Qu(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let x=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,h,e);return this.applyRedirects.lineralizeSegments(r,x).pipe(Ht(m=>this.processSegment(e,i,t,m.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=v1(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Jn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Jn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:f,consumedSegments:d,remainingSegments:h}=c,g=new Ss(d,f,Object.freeze(_e({},this.urlTree.queryParams)),this.urlTree.fragment,xM(i),_i(i),i.component??i._loadedComponent??null,i,MM(i)),x=Qu(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(x.params),g.data=Object.freeze(x.data);let{segmentGroup:m,slicedSegments:p}=_M(t,d,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(rt(S=>new Vn(g,S)));if(l.length===0&&p.length===0)return Fe(new Vn(g,[]));let b=_i(i)===s;return this.processSegment(u,l,m,p,b?We:s,!0,g).pipe(rt(S=>new Vn(g,S instanceof Vn?[S]:[])))}))):Ao(t)))}getChildConfig(e,t,i){return t.children?Fe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Fe({routes:t._loadedRoutes,injector:t._loadedInjector}):h1(e,t,i,this.urlSerializer).pipe(Ht(r=>r?this.configLoader.loadChildren(e,t).pipe(un(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):g1(t))):Fe({routes:[],injector:e})}};function C1(n){n.sort((e,t)=>e.value.outlet===We?-1:t.value.outlet===We?1:e.value.outlet.localeCompare(t.value.outlet))}function T1(n){let e=n.value.routeConfig;return e&&e.path===""}function XM(n){let e=[],t=new Set;for(let i of n){if(!T1(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=XM(i.children);e.push(new Vn(i.value,r))}return e.filter(i=>!t.has(i))}function xM(n){return n.data||{}}function MM(n){return n.resolve||{}}function D1(n,e,t,i,r,s){return Ht(o=>w1(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>It(_e({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function I1(n,e){return Ht(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Fe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of YM(c))o.add(l);let a=0;return Ft(o).pipe(Cr(c=>s.has(c)?A1(c,i,n,e):(c.data=Qu(c,c.parent,n).resolve,Fe(void 0))),un(()=>a++),no(1),Ht(c=>a===o.size?Fe(t):Cn))})}function YM(n){let e=n.children.map(t=>YM(t)).flat();return[n,...e]}function A1(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!VM(r)&&(s[ac]=r.title),R1(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=Qu(n,n.parent,t).resolve,null)))}function R1(n,e,t,i){let r=rg(n);if(r.length===0)return Fe({});let s={};return Ft(r).pipe(Ht(o=>N1(n[o],e,t,i).pipe(sr(),un(a=>{if(a instanceof Uo)throw ed(new Lr,a);s[o]=a}))),no(1),rt(()=>s),ir(o=>WM(o)?Cn:Qs(o)))}function N1(n,e,t,i){let r=cc(e)??i,s=Vo(n,r),o=s.resolve?s.resolve(e,t):ei(r,()=>s(e,t));return Ur(o)}function ng(n){return Jn(e=>{let t=n(e);return t?Ft(t).pipe(rt(()=>e)):Fe(e)})}var Mg=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===We);return i}getResolvedTitleForRoute(t){return t.data[ac]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(ZM),providedIn:"root"})}return n})(),ZM=(()=>{class n extends Mg{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(ke(pM))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ts=new Re("",{providedIn:"root",factory:()=>({})}),Ds=new Re(""),rd=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Q(Xx);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Fe(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Ur(t.loadComponent()).pipe(rt(KM),un(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),va(()=>{this.componentLoaders.delete(t)})),r=new Ks(i,()=>new Qt).pipe(Js());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Fe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=JM(i,this.compiler,t,this.onLoadEndListener).pipe(va(()=>{this.childrenLoaders.delete(i)})),o=new Ks(s,()=>new Qt).pipe(Js());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function JM(n,e,t,i){return Ur(n.loadChildren()).pipe(rt(KM),Ht(r=>r instanceof Dm||Array.isArray(r)?Fe(r):Ft(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ds,[],{optional:!0,self:!0}).flat()),{routes:o.map(xg),injector:s}}))}function P1(n){return n&&typeof n=="object"&&"default"in n}function KM(n){return P1(n)?n.default:n}var sd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(O1),providedIn:"root"})}return n})(),O1=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bg=new Re(""),Sg=new Re("");function QM(n,e,t){let i=n.get(Sg),r=n.get(on);return n.get(Pt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),L1(n))),{onViewTransitionCreated:c}=i;return c&&ei(n,()=>c({transition:a,from:e,to:t})),o})}function L1(n){return new Promise(e=>{fm({read:()=>setTimeout(e)},{injector:n})})}var wg=new Re(""),od=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Qt;transitionAbortSubject=new Qt;configLoader=Q(rd);environmentInjector=Q(Rn);destroyRef=Q(ka);urlSerializer=Q(Es);rootContexts=Q(Cs);location=Q(Pr);inputBindingEnabled=Q(uc,{optional:!0})!==null;titleStrategy=Q(Mg);options=Q(Ts,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Q(sd);createViewTransition=Q(bg,{optional:!0});navigationErrorHandler=Q(wg,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Fe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Wu(r)),i=r=>this.events.next(new $u(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(It(_e({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new ln(null),this.transitions.pipe(mn(i=>i!==null),Jn(i=>{let r=!1,s=!1;return Fe(i).pipe(Jn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Pn.SupersededByNewNavigation),Cn;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?It(_e({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new zi(o.id,this.urlSerializer.serialize(o.rawUrl),l,Oo.IgnoredSameUrlNavigation)),o.resolve(!1),Cn}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Fe(o).pipe(Jn(l=>(this.events.next(new kr(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Cn:Promise.resolve(l))),D1(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),un(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=It(_e({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new ec(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:f,restoredState:d,extras:h}=o,g=new kr(l,this.urlSerializer.serialize(u),f,d);this.events.next(g);let x=UM(this.rootComponentType).snapshot;return this.currentTransition=i=It(_e({},o),{targetSnapshot:x,urlAfterRedirects:u,extras:It(_e({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Fe(i)}else{let l="";return this.events.next(new zi(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Oo.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Cn}}),un(o=>{let a=new zu(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),rt(o=>(this.currentTransition=i=It(_e({},o),{guards:XA(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),s1(this.environmentInjector,o=>this.events.next(o)),un(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw ed(this.urlSerializer,o.guardsResult);let a=new Hu(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),mn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",Pn.GuardRejected),!1)),ng(o=>{if(o.guards.canActivateChecks.length!==0)return Fe(o).pipe(un(a=>{let c=new Gu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),Jn(a=>{let c=!1;return Fe(a).pipe(I1(this.paramsInheritanceStrategy,this.environmentInjector),un({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",Pn.NoDataFromResolver)}}))}),un(a=>{let c=new ju(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),ng(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(un(u=>{c.component=u}),rt(()=>{})));for(let u of c.children)l.push(...a(u));return l};return ga(a(o.targetSnapshot.root)).pipe(Tr(null),rr(1))}),ng(()=>this.afterPreactivation()),Jn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Ft(c).pipe(rt(()=>i)):Fe(i)}),rt(o=>{let a=GA(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=It(_e({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),un(()=>{this.events.next(new tc)}),qA(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),rr(1),un({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new On(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),Hh(this.transitionAbortSubject.pipe(un(o=>{throw o}))),va(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",Pn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),ir(o=>{if(this.destroyed)return i.resolve(!1),Cn;if(s=!0,jM(o))this.events.next(new Bi(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),$A(o)?this.events.next(new ko(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new Lo(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=ei(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof Uo){let{message:l,cancellationCode:u}=ed(this.urlSerializer,c);this.events.next(new Bi(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new ko(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Cn}))}))}cancelNavigationTransition(t,i,r){let s=new Bi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function F1(n){return n!==Uu}var eb=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(k1),providedIn:"root"})}return n})(),nd=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},k1=(()=>{class n extends nd{static \u0275fac=(()=>{let t;return function(r){return(t||(t=nm(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tb=(()=>{class n{urlSerializer=Q(Es);options=Q(Ts,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Q(Pr);urlHandlingStrategy=Q(sd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Vi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Vi?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=UM(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>Q(U1),providedIn:"root"})}return n})(),U1=(()=>{class n extends tb{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof kr?this.updateStateMemento():t instanceof zi?this.commitTransition(i):t instanceof ec?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof tc?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Bi&&(t.code===Pn.GuardRejected||t.code===Pn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Lo?this.restoreHistory(i,!0):t instanceof On&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=_e(_e({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=_e(_e({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=nm(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ad(n,e){n.events.pipe(mn(t=>t instanceof On||t instanceof Bi||t instanceof Lo||t instanceof zi),rt(t=>t instanceof On||t instanceof zi?0:(t instanceof Bi?t.code===Pn.Redirect||t.code===Pn.SupersededByNewNavigation:!1)?2:1),mn(t=>t!==2),rr(1)).subscribe(()=>{e()})}var B1={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},V1={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ni=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Q(Ux);stateManager=Q(tb);options=Q(Ts,{optional:!0})||{};pendingTasks=Q(wo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Q(od);urlSerializer=Q(Es);location=Q(Pr);urlHandlingStrategy=Q(sd);_events=new Qt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Q(eb);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Q(Ds,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Q(uc,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new jt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Bi&&i.code!==Pn.Redirect&&i.code!==Pn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof On)this.navigated=!0;else if(i instanceof ko){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=_e({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||F1(r.source)},o);this.scheduleNavigation(a,Uu,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}H1(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Uu,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=_e({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(xg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=_e(_e({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let d=r?r.snapshot:this.routerState.snapshot.root;f=OM(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),f=this.currentUrlTree.root}return LM(f,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Fr(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Uu,null,i)}navigate(t,i={skipLocationChange:!1}){return z1(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=_e({},B1):i===!1?r=_e({},V1):r=i,Fr(t))return mM(this.currentUrlTree,t,r);let s=this.parseUrl(t);return mM(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((f,d)=>{a=f,c=d});let u=this.pendingTasks.add();return ad(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(f=>Promise.reject(f))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function z1(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ie(4008,!1)}function H1(n){return!(n instanceof tc)&&!(n instanceof ko)}var zo=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Qt;constructor(t,i,r,s,o,a){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area",this.isAnchorElement?this.subscription=t.events.subscribe(l=>{l instanceof On&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Fr(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||i||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let i=this.href===null?null:tx(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:Fr(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(nn(ni),nn(Hi),im("tabindex"),nn(xu),nn(Sn),nn(yi))};static \u0275dir=mi({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&gi("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&Nm("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",za],skipLocationChange:[2,"skipLocationChange","skipLocationChange",za],replaceUrl:[2,"replaceUrl","replaceUrl",za],routerLink:"routerLink"},features:[Pa]})}return n})();var fc=class{};var nb=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,s){this.router=t,this.injector=i,this.preloadingStrategy=r,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(mn(t=>t instanceof On),Cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=Ba(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Ft(r).pipe(eo())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Fe(null);let s=r.pipe(Ht(o=>o===null?Fe(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Ft([s,o]).pipe(eo())}else return s})}static \u0275fac=function(i){return new(i||n)(ke(ni),ke(Rn),ke(fc),ke(rd))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ib=new Re(""),G1=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof kr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof On?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof zi&&t.code===Oo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Fo&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Fo(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Ix()};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})();function Cg(n,...e){return lu([{provide:Ds,multi:!0,useValue:n},[],{provide:Hi,useFactory:rb,deps:[ni]},{provide:bu,multi:!0,useFactory:sb},e.map(t=>t.\u0275providers)])}function rb(n){return n.routerState.root}function hc(n,e){return{\u0275kind:n,\u0275providers:e}}function sb(){let n=Q(fi);return e=>{let t=n.get(gs);if(e!==t.components[0])return;let i=n.get(ni),r=n.get(ob);n.get(Tg)===1&&i.initialNavigation(),n.get(lb,null,Xe.Optional)?.setUpPreloading(),n.get(ib,null,Xe.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ob=new Re("",{factory:()=>new Qt}),Tg=new Re("",{providedIn:"root",factory:()=>1});function ab(){let n=[{provide:Tg,useValue:0},Rm(()=>{let e=Q(fi);return e.get(km,Promise.resolve()).then(()=>new Promise(i=>{let r=e.get(ni),s=e.get(ob);ad(r,()=>{i(!0)}),e.get(od).afterPreactivation=()=>(i(!0),s.closed?Fe(void 0):s),r.initialNavigation()}))})];return hc(2,n)}function cb(){let n=[Rm(()=>{Q(ni).setUpLocationChangeListener()}),{provide:Tg,useValue:2}];return hc(3,n)}var lb=new Re("");function ub(n){return hc(0,[{provide:lb,useExisting:nb},{provide:fc,useExisting:n}])}function db(){return hc(8,[yg,{provide:uc,useExisting:yg}])}function fb(n){Rr("NgRouterViewTransitions");let e=[{provide:bg,useValue:QM},{provide:Sg,useValue:_e({skipNextTransition:!!n?.skipInitialTransition},n)}];return hc(9,e)}var hb=[Pr,{provide:Es,useClass:Lr},ni,Cs,{provide:Hi,useFactory:rb,deps:[ni]},rd,[]],pc=(()=>{class n{constructor(){}static forRoot(t,i){return{ngModule:n,providers:[hb,[],{provide:Ds,multi:!0,useValue:t},[],i?.errorHandler?{provide:wg,useValue:i.errorHandler}:[],{provide:Ts,useValue:i||{}},i?.useHash?W1():$1(),j1(),i?.preloadingStrategy?ub(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?q1(i):[],i?.bindToComponentInputs?db().\u0275providers:[],i?.enableViewTransitions?fb().\u0275providers:[],X1()]}}static forChild(t){return{ngModule:n,providers:[{provide:Ds,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Co({type:n});static \u0275inj=Mo({})}return n})();function j1(){return{provide:ib,useFactory:()=>{let n=Q(sM),e=Q(Pt),t=Q(Ts),i=Q(od),r=Q(Es);return t.scrollOffset&&n.setOffset(t.scrollOffset),new G1(r,i,n,e,t)}}}function W1(){return{provide:yi,useClass:Vm}}function $1(){return{provide:yi,useClass:Eu}}function q1(n){return[n.initialNavigation==="disabled"?cb().\u0275providers:[],n.initialNavigation==="enabledBlocking"?ab().\u0275providers:[]]}var Eg=new Re("");function X1(){return[{provide:Eg,useFactory:sb},{provide:bu,multi:!0,useExisting:Eg}]}var Ln=class n{host=Q(Sn);observer;fallbackTimer;revealDelay=0;revealClass=!0;isVisible=!1;get revealDelayCss(){return`${this.revealDelay}ms`}show(){this.isVisible||(this.isVisible=!0,this.host.nativeElement.classList.add("is-visible"))}ngAfterViewInit(){if(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){this.show();return}this.observer=new IntersectionObserver(s=>{let[o]=s;o?.isIntersecting&&(this.show(),this.observer?.disconnect(),this.fallbackTimer&&window.clearTimeout(this.fallbackTimer),this.fallbackTimer=void 0)},{threshold:.16,rootMargin:"0px 0px -8% 0px"}),this.observer.observe(this.host.nativeElement);let t=this.host.nativeElement.getBoundingClientRect(),i=window.innerHeight||0;t.top<i*.95&&t.bottom>i*-.05&&(this.fallbackTimer=window.setTimeout(()=>this.show(),140))}ngOnDestroy(){this.observer?.disconnect(),this.fallbackTimer&&window.clearTimeout(this.fallbackTimer),this.fallbackTimer=void 0}static \u0275fac=function(t){return new(t||n)};static \u0275dir=mi({type:n,selectors:[["","appReveal",""]],hostVars:6,hostBindings:function(t,i){t&2&&(Pm("--reveal-delay",i.revealDelayCss),Ms("reveal",i.revealClass)("is-visible",i.isVisible))},inputs:{revealDelay:"revealDelay"}})};var Br=class n{constructor(e){this.el=e;this.el.nativeElement.style.transformStyle="preserve-3d",this.el.nativeElement.style.transition="transform 0.15s ease-out"}tiltMax=15;onMouseMove(e){let t=this.el.nativeElement.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,s=t.width/2,o=t.height/2,a=(r-o)/o*-this.tiltMax,c=(i-s)/s*this.tiltMax;this.el.nativeElement.style.transform=`perspective(1200px) rotateX(${a}deg) rotateY(${c}deg)`}onMouseLeave(){this.el.nativeElement.style.transition="transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",this.el.nativeElement.style.transform="perspective(1200px) rotateX(0deg) rotateY(0deg)",setTimeout(()=>{this.el.nativeElement.style.transition="transform 0.15s ease-out"},600)}static \u0275fac=function(t){return new(t||n)(nn(Sn))};static \u0275dir=mi({type:n,selectors:[["","appTilt",""]],hostBindings:function(t,i){t&1&&gi("mousemove",function(s){return i.onMouseMove(s)})("mouseleave",function(){return i.onMouseLeave()})},inputs:{tiltMax:"tiltMax"}})};var pb=[{label:"About",anchor:"#about"},{label:"Projects",anchor:"#projects"},{label:"Skills",anchor:"#skills"},{label:"Contact",anchor:"#contact"}],mb={eyebrow:"JAVA FULL STACK DEVELOPER + AWS",headline:"Calm Design. Serious Engineering.",summary:"I build reliable Java microservices and cloud-native systems with measurable business impact. Delivered 50% cloud cost reduction by refactoring inefficient cross-account Lambda workflows.",primaryActionLabel:"View Projects",primaryActionAnchor:"#projects",secondaryActionLabel:"Download CV",secondaryActionUrl:"Ganesh_Todkar_Resume.pdf"},gb=[{title:"Front-end",items:[{name:"Angular",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{name:"TypeScript",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"HTML5",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"CSS3",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"RxJS",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg"}]},{title:"Back-end",items:[{name:"Java",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"Spring Boot",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},{name:"Hibernate",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg"},{name:"REST APIs",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"},{name:"Microservices",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}]},{title:"DevOps",items:[{name:"AWS",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{name:"ECS",iconUrl:"https://api.iconify.design/logos:aws-ecs.svg"},{name:"Docker",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"Jenkins",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"},{name:"Kubernetes",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"}]},{title:"Database",items:[{name:"MySQL",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"DynamoDB",iconUrl:"https://api.iconify.design/logos:aws-dynamodb.svg"}]},{title:"Version Control",items:[{name:"Git",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"GitHub",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Bitbucket",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"}]},{title:"AI",items:[{name:"ChatGPT",iconUrl:"https://api.iconify.design/logos:openai-icon.svg"},{name:"Claude",iconUrl:"https://api.iconify.design/fluent-emoji-flat:robot.svg"},{name:"Antigravity",iconUrl:"https://api.iconify.design/fluent-emoji-flat:rocket.svg"},{name:"Codex",iconUrl:"https://api.iconify.design/fluent-emoji-flat:brain.svg"}]}];var vb=[{name:"CTI Connectivity Microservice",stack:"Spring Boot | AWS Step Functions | SQS | ECS",summary:"Built scalable REST APIs to integrate CTI vendors like Avaya and Cisco, enabling multi-region workflow orchestration using AWS Step Functions, SQS, and ECS. Designed audit-safe configuration and event-driven processing to ensure reliability across distributed systems.",impact:"Reduced vendor onboarding time and improved system resilience with fault-tolerant event handling."},{name:"Media Playback Service",stack:"Spring Boot | JPA | Hibernate | DynamoDB | EC2 | EFS",summary:"Enhanced media playback APIs by implementing caching strategies and integrating encrypted storage using AWS EFS. Improved backend performance and observability with structured logging and monitoring.",impact:"Achieved lower API response times and increased production stability through better resource management and monitoring."},{name:"E-commerce Microservices Application (Personal Project)",stack:"Spring Boot | Eureka | Config Server | Feign Client | Circuit Breaker | Angular",summary:"Led the development of a microservices-based backend using Spring Boot, Eureka, Config Server, and Feign Client, with fault tolerance via Circuit Breaker. Built a responsive Angular frontend with routing and authentication.",impact:"Delivered a scalable and user-friendly application capable of handling distributed service communication efficiently."},{name:"COVID-19 Tracking Application (Personal Project)",stack:"Spring Boot | MySQL | MongoDB | Angular | TypeScript | HTML/CSS",summary:"Contributed to building a full-stack COVID-19 tracking system by developing microservices and end-to-end REST APIs aligned with business requirements. Implemented frontend features using Angular with clean and maintainable code practices.",impact:"Successfully collaborated in a team to deliver a complete real-time tracking solution."}],yb=[{title:"NICE Interactive Solutions",detail:"Software Engineer"},{title:"Wipro Technologies",detail:"Project Engineer"}],cd={heading:"Let us build reliable systems at scale.",email:"gstodkar01@gmail.com",linkedinUrl:"https://linkedin.com/in/ganeshtodkar",linkedinLabel:"linkedin.com/in/ganeshtodkar",phone:"+917263849596"};var ld=class n{content=mb;contact=cd;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-hero"]],decls:52,vars:4,consts:[[1,"minimal-valour-wrap"],[1,"hero-watermark"],["id","home","appReveal","",1,"minimal-hero",3,"revealDelay"],[1,"hero-name-glitch"],[1,"hero-title"],["appTilt","",1,"hero-content-block",3,"tiltMax"],[1,"keyword-link"],[1,"hero-icon-container"],["routerLink","/about",1,"see-more-btn"],[1,"text"],[1,"arrow-right"],[1,"horizontal-socials"],["href","https://linkedin.com/in/ganeshtodkar","target","_blank","aria-label","LinkedIn"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","https://github.com/GaneshT1133","target","_blank","aria-label","GitHub"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["aria-label","Email",3,"href"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(t,i){t&1&&(te(0,"div",0)(1,"div",1),be(2,"GT."),ge(),te(3,"section",2)(4,"div",3)(5,"h1",4),be(6,"I'M GANESH"),ge()(),te(7,"div",5)(8,"p"),be(9," Your friendly neighborhood "),te(10,"a",6),be(11,"Java Full-Stack Developer"),ge(),be(12,", building scalable backend systems and turning complex problems into clean, efficient solutions. "),ge(),te(13,"p"),be(14," I work with "),te(15,"a",6),be(16,"Spring Boot"),ge(),be(17,", "),te(18,"a",6),be(19,"microservices"),ge(),be(20,", and "),te(21,"a",6),be(22,"cloud technologies"),ge(),be(23,"\u2014focusing on performance, simplicity, and real-world impact. "),ge(),te(24,"p"),be(25," When I\u2019m not coding, I\u2019m exploring "),te(26,"a",6),be(27,"system design"),ge(),be(28,", learning new technologies, reading, playing the tabla, or unwinding with music. "),ge(),te(29,"p"),be(30," If you\u2019ve got something exciting to build, "),te(31,"a",6),be(32,"let\u2019s connect."),ge()(),te(33,"div",7)(34,"a",8)(35,"span",9),be(36,"See More About Me"),ge(),te(37,"span",10),be(38,"\u2192"),ge()()(),te(39,"div",11)(40,"a",12),gn(),te(41,"svg",13),bt(42,"path",14)(43,"rect",15)(44,"circle",16),ge()(),Li(),te(45,"a",17),gn(),te(46,"svg",13),bt(47,"path",18),ge()(),Li(),te(48,"a",19),gn(),te(49,"svg",13),bt(50,"path",20)(51,"polyline",21),ge()()()()()()),t&2&&(Ke(3),Wt("revealDelay",50),Ke(4),Wt("tiltMax",10),Ke(41),Do("href","mailto:",i.contact.email,"",Nr))},dependencies:[Ln,Br,pc,zo],styles:[".minimal-valour-wrap[_ngcontent-%COMP%]{width:100%;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:flex-start;color:#fff;background-color:transparent;padding:0 10vw;position:fixed;top:0;left:0;overflow:hidden;z-index:1}.hero-watermark[_ngcontent-%COMP%]{position:absolute;bottom:-5vh;left:-2vw;font-size:clamp(15rem,35vw,40rem);font-family:var(--font-primary);font-weight:900;color:#ffffff05;z-index:0;pointer-events:none;line-height:.8;letter-spacing:-.05em}.minimal-hero[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:900px;width:100%;margin-top:-2vh}.hero-name-glitch[_ngcontent-%COMP%]{margin-bottom:1rem;padding-top:10px;position:relative;display:inline-block}.hero-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:clamp(2.5rem,5.5vw,5.5rem);font-weight:900;color:#fff;margin:0;letter-spacing:.05em;line-height:1.1;text-transform:uppercase;text-shadow:0 0 20px rgba(255,255,255,.2),3px 3px 0 rgba(255,71,142,.4),-3px -3px 0 rgba(71,196,255,.4)}.hero-content-block[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:1rem;line-height:1.5;color:#d0d0d0;font-weight:400;max-width:800px;background:#ffffff08;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.05);border-radius:20px;padding:2.5rem;box-shadow:0 10px 30px #0003,inset 0 0 0 1px #ffffff0d;transform-style:preserve-3d}.keyword-link[_ngcontent-%COMP%]{color:#fff;font-weight:600;cursor:pointer;position:relative;transition:color .3s ease,transform .3s ease;display:inline-block;transform:translateZ(20px)}.keyword-link[_ngcontent-%COMP%]:hover{color:#ce7afd}.hero-content-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.hero-icon-container[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.see-more-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1.5rem;color:#fff;text-decoration:none;font-weight:500;font-size:1rem;position:relative;transition:color .3s ease,transform .3s ease;z-index:10;transform:translateZ(30px)}.see-more-btn[_ngcontent-%COMP%]:hover{color:#ce7afd}.arrow-right[_ngcontent-%COMP%]{font-size:1.5rem;font-family:monospace;transition:transform .3s ease}.see-more-btn[_ngcontent-%COMP%]:hover   .arrow-right[_ngcontent-%COMP%]{transform:translate(10px)}.horizontal-socials[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5rem;z-index:10;position:relative;transform:translateZ(10px)}.horizontal-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;transition:all .3s ease;width:18px;height:18px;display:flex;justify-content:center;align-items:center}.horizontal-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.horizontal-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;transform:translateY(-3px)}@media (max-width: 1024px){.minimal-valour-wrap[_ngcontent-%COMP%]{padding:0 5vw}.hero-content-block[_ngcontent-%COMP%]{font-size:1.05rem}}@media (max-width: 768px){.minimal-valour-wrap[_ngcontent-%COMP%]{padding:0 2rem}.hero-title[_ngcontent-%COMP%]{font-size:2.5rem;text-shadow:2px 2px 0 rgba(255,71,142,.8),-2px -2px 0 rgba(71,196,255,.8)}.hero-content-block[_ngcontent-%COMP%]{font-size:1rem}}"],changeDetection:0})};var Z1=(n,e)=>e.title;function J1(n,e){if(n&1&&(te(0,"div",9),bt(1,"div",20),te(2,"div",21)(3,"h4",22),be(4),ge(),te(5,"p",23),be(6),ge()()()),n&2){let t=e.$implicit;Ke(4),wn(t.title),Ke(2),wn(t.detail)}}var ud=class n{items=yb;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-timeline"]],decls:48,vars:4,consts:[["appReveal","",1,"minimal-page","about-page"],[1,"watermark"],[1,"content-wrapper","cw-about-layout"],[1,"about-grid"],["appReveal","",1,"about-image-container",3,"revealDelay"],["src","profile.jpg?v=2","alt","Ganesh Todkar",1,"profile-photo"],["appReveal","",1,"timeline-container",3,"revealDelay"],[1,"experience-title"],[1,"cw-timeline"],[1,"cw-node"],[1,"about-text-container"],["appReveal","",1,"section-title"],["appReveal","",1,"about-bio-group",3,"revealDelay"],[1,"about-bio"],["appReveal","",1,"about-actions",3,"revealDelay"],["href","Ganesh_Todkar_Resume.pdf","download","Ganesh_Todkar_Resume.pdf",1,"cw-btn","download-btn"],["viewBox","0 0 24 24","width","20","height","20","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",2,"margin-left","10px"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],[1,"cw-dot"],[1,"cw-content"],[1,"role"],[1,"desc"]],template:function(t,i){t&1&&(te(0,"section",0)(1,"div",1),be(2,"ABOUT ME."),ge(),te(3,"div",2)(4,"div",3)(5,"div",4),bt(6,"img",5),te(7,"div",6)(8,"h3",7),be(9,"Experience."),ge(),te(10,"div",8),Fi(11,J1,7,2,"div",9,Z1),ge()()(),te(13,"div",10)(14,"h2",11),be(15,"About."),ge(),te(16,"div",12)(17,"p",13),be(18," I\u2019m a "),te(19,"strong"),be(20,"Java Full-Stack Developer"),ge(),be(21," with 3+ years of experience building scalable backend systems and production-grade applications. I specialize in "),te(22,"strong"),be(23,"Spring Boot"),ge(),be(24,", "),te(25,"strong"),be(26,"microservices architecture"),ge(),be(27,", and "),te(28,"strong"),be(29,"cloud-based solutions"),ge(),be(30,", focusing on performance, reliability, and clean system design. "),ge(),te(31,"p",13),be(32," I\u2019ve worked with organizations like "),te(33,"strong"),be(34,"NICE"),ge(),be(35," and "),te(36,"strong"),be(37,"Wipro"),ge(),be(38,", where I contributed to developing and maintaining distributed systems, integrating third-party services, and resolving critical production issues. My work involved building REST APIs, optimizing backend performance, and ensuring system stability in real-world environments. "),ge(),te(39,"p",13),be(40," I enjoy solving complex problems and designing systems that are simple, efficient, and scalable. I strongly believe in writing clean, maintainable code and continuously improving through hands-on learning and real-world challenges. "),ge()(),te(41,"div",14)(42,"a",15),be(43," Download CV "),gn(),te(44,"svg",16),bt(45,"path",17)(46,"polyline",18)(47,"line",19),ge()()()()()()()),t&2&&(Ke(5),Wt("revealDelay",100),Ke(2),Wt("revealDelay",500),Ke(4),ki(i.items),Ke(5),Wt("revealDelay",200),Ke(25),Wt("revealDelay",400))},dependencies:[Ln],styles:[".minimal-page[_ngcontent-%COMP%]{position:relative;width:100%;min-height:100vh;padding:10vh 15vw 10vh 15vw;color:#fff;background:transparent;display:flex;flex-direction:column}.watermark[_ngcontent-%COMP%]{position:fixed;bottom:-5vh;left:-2vw;font-size:clamp(8rem,20vw,25rem);font-weight:900;color:#ffffff05;z-index:0;pointer-events:none;white-space:nowrap;letter-spacing:-.05em;-webkit-user-select:none;user-select:none}.content-wrapper[_ngcontent-%COMP%]{position:relative;z-index:2;width:100%;max-width:1200px;margin:0 auto}.cw-about-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8rem}.about-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:240px 1fr;gap:6rem;align-items:start}.about-image-container[_ngcontent-%COMP%]{position:relative}.profile-photo[_ngcontent-%COMP%]{width:100%;height:auto;filter:grayscale(100%) contrast(1.1);transition:all .5s cubic-bezier(.2,.65,.25,1);border:1px solid rgba(255,255,255,.1)}.profile-photo[_ngcontent-%COMP%]:hover{filter:grayscale(0%) contrast(1);border-color:#ce7afd;transform:scale(1.02)}.about-text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.section-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:clamp(3rem,6vw,5rem);font-weight:900;color:#fff;margin-top:0;margin-bottom:2rem;letter-spacing:-.02em;text-transform:uppercase}.about-bio[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#a0a0a0;margin-bottom:1.5rem;font-weight:400;max-width:70ch}.about-bio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff;font-weight:600}.about-actions[_ngcontent-%COMP%]{margin-top:2rem}.cw-btn.download-btn[_ngcontent-%COMP%]{background:#fff;color:#000;border:none;font-weight:700;padding:1rem 2rem;border-radius:4px}.cw-btn.download-btn[_ngcontent-%COMP%]:hover{background:#ce7afd;color:#fff}.timeline-container[_ngcontent-%COMP%]{padding-top:1.5rem;margin-top:0}.experience-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.25rem;margin-bottom:1.5rem;color:#fff;font-weight:800;letter-spacing:-.01em;text-transform:uppercase;opacity:.8}.cw-timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;margin-left:4px;border-left:1px solid rgba(255,255,255,.08);padding-left:1.8rem}.cw-node[_ngcontent-%COMP%]{position:relative;margin-bottom:2.5rem}.cw-dot[_ngcontent-%COMP%]{position:absolute;left:calc(-1.8rem - 4.5px);top:6px;width:8px;height:8px;background:transparent;border:1.5px solid #ce7afd;border-radius:50%;box-shadow:0 0 8px #ce7afd80;z-index:2}.cw-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .2rem;color:#fff;font-weight:700;font-family:var(--font-primary);letter-spacing:-.01em}.cw-content[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%]{font-size:1rem;color:#ff478e;font-weight:600;margin:0 0 1rem;font-family:monospace}.cw-content[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]{color:#666;font-weight:400}.cw-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:.85rem;line-height:1.4;color:#888;max-width:100%;margin:0}@media (max-width: 1024px){.cw-about-layout[_ngcontent-%COMP%]{gap:5rem}.about-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:3rem}.about-image-container[_ngcontent-%COMP%]{max-width:400px}}@media (max-width: 768px){.minimal-page[_ngcontent-%COMP%]{padding:12vh 2rem 10vh 2rem}.section-title[_ngcontent-%COMP%]{font-size:2.5rem}}"],changeDetection:0})};var K1=(n,e)=>e.name;function Q1(n,e){if(n&1&&(te(0,"span",19),be(1),ge()),n&2){let t=e.$implicit;Ke(),wn(t.trim())}}function eR(n,e){if(n&1&&(te(0,"div",6)(1,"div",7),be(2),ge(),te(3,"div",8)(4,"h3",9),be(5),ge(),te(6,"a",10),gn(),te(7,"svg",11),bt(8,"line",12)(9,"polyline",13),ge()()(),Li(),te(10,"div",14)(11,"p",15),be(12),ge(),te(13,"p",16)(14,"strong"),be(15,"Impact:"),ge(),be(16),ge()(),te(17,"div",17)(18,"div",18),Fi(19,Q1,2,1,"span",19,Wx),ge()()()),n&2){let t=e.$implicit,i=e.$index;Ms("staggered",i%2!==0),Wt("revealDelay",i*100),Ke(2),Va("0",i+1,""),Ke(3),wn(t.name),Ke(7),wn(t.summary),Ke(4),Va(" ",t.impact,""),Ke(3),ki(t.stack.split("|"))}}var dd=class n{items=vb;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-projects"]],decls:9,vars:0,consts:[["appReveal","",1,"minimal-page","projects-page"],[1,"watermark"],[1,"content-wrapper"],[1,"section-title"],[1,"cw-grid"],["appReveal","",1,"cw-card",3,"staggered","revealDelay"],["appReveal","",1,"cw-card",3,"revealDelay"],[1,"card-number"],[1,"card-header"],[1,"card-title"],["aria-label","View Project",1,"view-btn"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["x1","7","y1","17","x2","17","y2","7"],["points","7 7 17 7 17 17"],[1,"card-body"],[1,"card-desc"],[1,"card-impact"],[1,"card-footer"],[1,"tech-stack"],[1,"tech-tag"]],template:function(t,i){t&1&&(te(0,"section",0)(1,"div",1),be(2,"PROJECTS."),ge(),te(3,"div",2)(4,"h2",3),be(5,"Projects."),ge(),te(6,"div",4),Fi(7,eR,21,7,"div",5,K1),ge()()()),t&2&&(Ke(7),ki(i.items))},dependencies:[Ln],styles:['.minimal-page[_ngcontent-%COMP%]{position:relative;width:100%;min-height:100vh;padding:10vh 15vw 10vh 15vw;color:#fff;background:transparent;display:flex;flex-direction:column}.watermark[_ngcontent-%COMP%]{position:fixed;bottom:-5vh;right:-2vw;font-size:clamp(8rem,20vw,25rem);font-weight:900;color:#ffffff05;z-index:0;pointer-events:none;white-space:nowrap;letter-spacing:-.05em;-webkit-user-select:none;user-select:none}.content-wrapper[_ngcontent-%COMP%]{position:relative;z-index:2;width:100%;max-width:1200px;margin:0 auto}.section-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:3rem;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:4rem}.cw-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(450px,1fr));gap:4rem;align-items:start}.cw-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;background:#080808;border:1px solid rgba(255,255,255,.03);border-radius:4px;padding:4rem 3.5rem;transition:all .5s cubic-bezier(.19,1,.22,1);position:relative;overflow:hidden}.card-number[_ngcontent-%COMP%]{position:absolute;top:2rem;left:2rem;font-family:monospace;font-size:.8rem;color:#fff3;letter-spacing:.2em}.cw-card.staggered[_ngcontent-%COMP%]{margin-top:6rem}.cw-card[_ngcontent-%COMP%]:hover{transform:translateY(-15px);border-color:#ffffff1a;background:#0c0c0c;box-shadow:0 30px 60px #00000080}.cw-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,#ce7afd,#ff478e);transform:scaleX(0);transform-origin:left;transition:transform .5s ease}.cw-card[_ngcontent-%COMP%]:hover:before{transform:scaleX(1)}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.card-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:2.2rem;margin:0;font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.02em;max-width:80%}.view-btn[_ngcontent-%COMP%]{width:60px;height:60px;background:#111;border:1px solid rgba(255,255,255,.05);border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff;transition:all .5s cubic-bezier(.19,1,.22,1);cursor:pointer;flex-shrink:0}.view-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px}.cw-card[_ngcontent-%COMP%]:hover   .view-btn[_ngcontent-%COMP%]{background:#fff;color:#000}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.card-desc[_ngcontent-%COMP%]{font-size:1.1rem;color:#888;line-height:1.7;margin:0}.card-impact[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin:0;padding-left:1rem;border-left:2px solid #ce7afd}.card-footer[_ngcontent-%COMP%]{margin-top:auto}.tech-stack[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.8rem}.tech-tag[_ngcontent-%COMP%]{font-size:.75rem;font-family:monospace;color:#ff478e;padding:.4rem .8rem;background:#ff478e0d;border-radius:2px;text-transform:uppercase;letter-spacing:.1em}@media (max-width: 1024px){.cw-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:3rem}.cw-card[_ngcontent-%COMP%]{padding:3rem 2.5rem}.cw-card.staggered[_ngcontent-%COMP%]{margin-top:0}}@media (max-width: 768px){.minimal-page[_ngcontent-%COMP%]{padding:12vh 2rem 10vh}.card-title[_ngcontent-%COMP%]{font-size:1.8rem}}'],changeDetection:0})};var tR=(n,e)=>e.title,nR=(n,e)=>e.name;function iR(n,e){if(n&1&&(te(0,"div",8),bt(1,"img",9),te(2,"span",10),be(3),ge()()),n&2){let t=e.$implicit;Ke(),Wt("src",t.iconUrl,Nr)("alt",t.name),Ke(2),wn(t.name)}}function rR(n,e){if(n&1&&(te(0,"div",5)(1,"h3",6),be(2),ge(),te(3,"div",7),Fi(4,iR,4,3,"div",8,nR),ge()()),n&2){let t=e.$implicit,i=e.$index;Wt("revealDelay",100+i*70)("tiltMax",5),Ke(2),wn(t.title),Ke(2),ki(t.items)}}var fd=class n{categories=gb;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-skills"]],decls:9,vars:0,consts:[[1,"minimal-page"],["aria-hidden","true",1,"watermark"],[1,"content-wrapper"],["appReveal","",1,"section-title"],[1,"skills-grid"],["appReveal","","appTilt","",1,"skill-category",3,"revealDelay","tiltMax"],[1,"category-title"],[1,"skill-items"],[1,"skill-pill"],["loading","lazy",1,"skill-icon",3,"src","alt"],[1,"skill-name"]],template:function(t,i){t&1&&(te(0,"div",0)(1,"div",1),be(2,"Skills."),ge(),te(3,"div",2)(4,"h2",3),be(5,"Technical Arsenal."),ge(),te(6,"div",4),Fi(7,rR,6,3,"div",5,tR),ge()()()),t&2&&(Ke(7),ki(i.categories))},dependencies:[Cu,Ln,Br],styles:[".minimal-page[_ngcontent-%COMP%]{position:relative;width:100%;min-height:100vh;padding:10vh 15vw 10vh 15vw;color:#fff;background:transparent;display:flex;flex-direction:column}.watermark[_ngcontent-%COMP%]{position:fixed;bottom:-5vh;left:-2vw;font-size:clamp(8rem,20vw,25rem);font-weight:900;color:#ffffff05;z-index:0;pointer-events:none;white-space:nowrap;letter-spacing:-.05em;-webkit-user-select:none;user-select:none}.content-wrapper[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:1000px;width:100%;margin:0 auto}.section-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:3rem;font-weight:800;color:#fff;margin-bottom:3rem;letter-spacing:-.02em}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2rem}.skill-category[_ngcontent-%COMP%]{background:#ffffff08;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.05);border-radius:20px;padding:2rem;transition:transform .3s ease,background .3s ease,border-color .3s ease;transform-style:preserve-3d}.skill-category[_ngcontent-%COMP%]:hover{background:#ffffff0a;border-color:#ffffff1a;transform:translateY(-5px)}.category-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#ce7afd;margin:0 0 1.5rem;letter-spacing:.1em;text-transform:uppercase;transform:translateZ(20px)}.skill-items[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.8rem;transform:translateZ(10px)}.skill-pill[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;background:#0000004d;border:1px solid rgba(255,255,255,.1);padding:.6rem .9rem;border-radius:8px;transition:border-color .2s ease,background .2s ease,transform .2s ease}.skill-pill[_ngcontent-%COMP%]:hover{border-color:#ce7afd80;background:#ce7afd0d;transform:translateY(-2px)}.skill-icon[_ngcontent-%COMP%]{width:20px;height:20px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}.skill-name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#e2e8f0}@media (max-width: 768px){.minimal-page[_ngcontent-%COMP%]{padding:12vh 2rem 10vh 2rem}.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var hd=class n{content=cd;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-contact"]],decls:27,vars:6,consts:[["appReveal","",1,"minimal-page","contact-page"],[1,"watermark"],["appTilt","",1,"content-wrapper",3,"tiltMax"],[1,"section-title"],[1,"contact-subtitle"],[1,"email-link",3,"href"],[1,"minimal-contact-info",2,"margin-top","4rem"],[2,"font-family","var(--font-primary)","color","#fff","font-size","clamp(1.5rem, 4vw, 2.5rem)","margin-bottom","2rem"],[1,"contact-footer",2,"margin-top","5vh","display","flex","align-items","center","gap","2rem","padding-bottom","2rem","border-bottom","1px solid rgba(255, 255, 255, 0.05)"],[1,"footer-socials",2,"display","flex","gap","1.5rem"],["href","https://linkedin.com/in/ganeshtodkar","target","_blank","aria-label","LinkedIn",2,"color","#888","transition","color 0.3s ease"],["viewBox","0 0 24 24","width","20","height","20","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","https://github.com/GaneshT1133","target","_blank","aria-label","GitHub",2,"color","#888","transition","color 0.3s ease"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["aria-label","Email",2,"color","#888","transition","color 0.3s ease",3,"href"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(t,i){t&1&&(te(0,"section",0)(1,"div",1),be(2,"CONTACT."),ge(),te(3,"div",2)(4,"h2",3),be(5,"Contact."),ge(),te(6,"p",4),be(7,"Get in touch or shoot me an email directly on "),te(8,"a",5),be(9),ge()(),te(10,"div",6)(11,"h3",7),be(12,"Let's build something extraordinary."),ge()(),te(13,"div",8)(14,"div",9)(15,"a",10),gn(),te(16,"svg",11),bt(17,"path",12)(18,"rect",13)(19,"circle",14),ge()(),Li(),te(20,"a",15),gn(),te(21,"svg",11),bt(22,"path",16),ge()(),Li(),te(23,"a",17),gn(),te(24,"svg",11),bt(25,"path",18)(26,"polyline",19),ge()()()()()()),t&2&&(Ke(3),Wt("tiltMax",5),Ke(5),Do("href","mailto:",i.content.email,"",Nr),Ke(),wn(i.content.email),Ke(14),Do("href","mailto:",i.content.email,"",Nr))},dependencies:[Ln,Br,pc],styles:[".minimal-page[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;height:100dvh;padding:10vh 15vw 10vh 15vw;color:#fff;background:transparent;display:flex;flex-direction:column;justify-content:center;overflow:hidden}.watermark[_ngcontent-%COMP%]{position:fixed;bottom:-5vh;left:50%;transform:translate(-50%);font-size:clamp(8rem,20vw,25rem);font-weight:900;color:#ffffff05;z-index:0;pointer-events:none;white-space:nowrap;letter-spacing:-.05em;-webkit-user-select:none;user-select:none}.content-wrapper[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:800px;width:100%;margin:0 auto;background:#ffffff08;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.05);border-radius:20px;padding:3rem;box-shadow:0 10px 30px #0003;transform-style:preserve-3d}.section-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:3rem;font-weight:700;color:#fff;line-height:1.2;letter-spacing:-.02em;margin-bottom:1rem}.contact-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;color:#999;margin-bottom:3rem}.email-link[_ngcontent-%COMP%]{color:#fff;text-decoration:underline;text-decoration-color:#ce7afd;text-underline-offset:8px;transition:color .3s ease}.email-link[_ngcontent-%COMP%]:hover{color:#ce7afd}.minimal-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2.5rem}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,.2);padding:1rem 0;color:#fff;font-size:1.1rem;font-family:var(--font-secondary);transition:border-color .3s ease;resize:none}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-bottom-color:#ce7afd}.cw-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(255,255,255,.2);color:#fff;font-size:1rem;font-weight:600;padding:1.2rem 2.5rem;border-radius:5px;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;justify-content:center;gap:.8rem;text-decoration:none;margin-top:1rem}.cw-btn[_ngcontent-%COMP%]:hover{background:#fff;color:#0c0c0c;transform:translateY(-3px)}.global-socials[_ngcontent-%COMP%]{position:fixed;bottom:0;left:40px;display:flex;flex-direction:column;align-items:center;gap:1.5rem;z-index:100}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;transition:all .3s ease;width:20px;height:20px;display:flex;justify-content:center;align-items:center}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ce7afd;transform:translateY(-3px)}.social-line[_ngcontent-%COMP%]{width:1px;height:15vh;background:#fff3;margin-top:5px}@media (max-width: 768px){.minimal-page[_ngcontent-%COMP%]{padding:5vh 2rem 10vh}.section-title[_ngcontent-%COMP%]{font-size:2rem}.global-socials[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})};var _b=[{path:"",component:ld},{path:"about",component:ud},{path:"projects",component:dd},{path:"skills",component:fd},{path:"contact",component:hd},{path:"**",redirectTo:""}];var xb={providers:[Zx({eventCoalescing:!0}),Cg(_b)]};var sR=(n,e)=>e.label;function oR(n,e){if(n&1&&(te(0,"li")(1,"a",8),be(2),ge()()),n&2){let t=e.$implicit;Ke(),Wt("routerLink","/"+t.label.toLowerCase()),Ke(),wn(t.label)}}function aR(n,e){n&1&&(gn(),te(0,"svg",6),bt(1,"circle",9)(2,"path",10),ge())}function cR(n,e){n&1&&(gn(),te(0,"svg",7),bt(1,"path",11),ge())}var pd=class n{brandName;navItems;isDarkMode=!0;toggleTheme(){this.isDarkMode=!this.isDarkMode,document.body.classList.toggle("light-theme")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-header"]],inputs:{brandName:"brandName",navItems:"navItems"},decls:12,vars:1,consts:[["appReveal","",1,"top-nav","section"],["routerLink","/","aria-label","Home",1,"brand-logo"],["width","40","height","40","viewBox","0 0 40 40","fill","none","xmlns","http://www.w3.org/2000/svg",1,"logo-icon"],["d","M20 5V35M5 20H35M9.3934 9.3934L30.6066 30.6066M30.6066 9.3934L9.3934 30.6066","stroke","currentColor","stroke-width","4","stroke-linecap","round","stroke-linejoin","round"],["aria-label","Main"],["aria-label","Toggle dark mode",1,"theme-toggle",3,"click"],["viewBox","0 0 24 24","width","20","height","20","stroke","currentColor","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round"],["viewBox","0 0 24 24","width","20","height","20","stroke","currentColor","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"css-i6dzq1"],["routerLinkActive","active",3,"routerLink"],["cx","12","cy","12","r","5"],["d","M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"],["d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]],template:function(t,i){t&1&&(te(0,"header",0)(1,"a",1),gn(),te(2,"svg",2),bt(3,"path",3),ge()(),Li(),te(4,"nav",4)(5,"ul"),Fi(6,oR,3,2,"li",null,sR),te(8,"li")(9,"button",5),gi("click",function(){return i.toggleTheme()}),Im(10,aR,3,0,":svg:svg",6)(11,cR,2,0,":svg:svg",7),ge()()()()()),t&2&&(Ke(6),ki(i.navItems),Ke(4),jx(i.isDarkMode?10:11))},dependencies:[Ln,zo],styles:[".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:2rem 5vw;background:transparent;z-index:100;width:100%;max-width:1600px;margin:0 auto}.brand-logo[_ngcontent-%COMP%]{color:#fff;transition:transform .3s ease;display:flex;align-items:center;justify-content:center}.brand-logo[_ngcontent-%COMP%]:hover{transform:rotate(90deg)}.logo-icon[_ngcontent-%COMP%]{stroke:#fff}ul[_ngcontent-%COMP%]{list-style:none;display:flex;gap:2.5rem;margin:0;padding:0;align-items:center}a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-size:.95rem;letter-spacing:.05em;font-weight:500;transition:color .3s ease}a[_ngcontent-%COMP%]:hover, a.active[_ngcontent-%COMP%]{color:#fff}.theme-toggle[_ngcontent-%COMP%]{background:none;border:none;color:#999;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;transition:color .3s ease,transform .3s ease}.theme-toggle[_ngcontent-%COMP%]:hover{color:#fff;transform:scale(1.1)}@media (max-width: 720px){.top-nav[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:1.5rem;padding:1.5rem}}"],changeDetection:0})};var md=class n{constructor(e,t){this.el=e;this.platformId=t}cursorDot;cursorOutline;mouseX=-100;mouseY=-100;outlineX=-100;outlineY=-100;animationFrameId=0;observer=null;hasMoved=!1;ngAfterViewInit(){Gm(this.platformId)&&(this.createCursorElements(),this.animateCursor(),this.addHoverListeners(),this.setupObserver())}ngOnDestroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.observer&&this.observer.disconnect()}createCursorElements(){document.body.style.cursor="none",this.cursorDot=document.createElement("div"),this.cursorDot.className="custom-cursor-dot",this.cursorOutline=document.createElement("div"),this.cursorOutline.className="custom-cursor-outline",this.cursorDot.style.opacity="0",this.cursorOutline.style.opacity="0",document.body.appendChild(this.cursorDot),document.body.appendChild(this.cursorOutline);let e=`
      .custom-cursor-dot {
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9999;
        pointer-events: none;
        mix-blend-mode: difference;
        transition: opacity 0.3s ease;
      }
      .custom-cursor-outline {
        width: 40px;
        height: 40px;
        border: 1.5px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 9998;
        pointer-events: none;
        transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, opacity 0.3s ease;
        mix-blend-mode: difference;
      }
      .custom-cursor-outline.hovering {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-color: #fff;
      }
      .custom-cursor-outline.scrolling {
        border-color: #ce7afd;
        border-width: 3px;
        width: 30px;
        height: 30px;
      }
      a, button, input, textarea, [routerLink], .keyword-link, .view-btn, .cw-btn {
        cursor: none !important;
      }
    `,t=document.createElement("style");t.innerText=e,document.head.appendChild(t)}onMouseMove(e){this.hasMoved||(this.hasMoved=!0,this.cursorDot.style.opacity="1",this.cursorOutline.style.opacity="1",this.outlineX=e.clientX,this.outlineY=e.clientY),this.mouseX=e.clientX,this.mouseY=e.clientY,this.cursorDot.style.left=`${this.mouseX}px`,this.cursorDot.style.top=`${this.mouseY}px`}animateCursor=()=>{this.outlineX+=(this.mouseX-this.outlineX)*.15,this.outlineY+=(this.mouseY-this.outlineY)*.15,this.cursorOutline.style.left=`${this.outlineX}px`,this.cursorOutline.style.top=`${this.outlineY}px`,this.animationFrameId=requestAnimationFrame(this.animateCursor)};addHoverListeners(){document.querySelectorAll("a, button, input, textarea, [routerLink], .keyword-link, .view-btn, .cw-btn, .nav-link").forEach(t=>{t._cursorAttached||(t._cursorAttached=!0,t.addEventListener("mouseenter",()=>this.cursorOutline.classList.add("hovering")),t.addEventListener("mouseleave",()=>this.cursorOutline.classList.remove("hovering")))})}onScroll(){this.cursorOutline.classList.add("scrolling"),clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{this.cursorOutline.classList.remove("scrolling")},150)}setupObserver(){this.observer=new MutationObserver(()=>{this.addHoverListeners()}),this.observer.observe(document.body,{childList:!0,subtree:!0})}static \u0275fac=function(t){return new(t||n)(nn(Sn),nn(Ar))};static \u0275dir=mi({type:n,selectors:[["","appCursor",""]],hostBindings:function(t,i){t&1&&gi("mousemove",function(s){return i.onMouseMove(s)},!1,ix)("scroll",function(s){return i.onScroll(s)},!1,pu)}})};var yf="184";var zb=0,av=1,Hb=2;var zc=1,Gb=2,oa=3,yr=0,En=1,Yi=2,Zi=0,Fs=1,Hc=2,cv=3,lv=4,jb=5;var qr=100,Wb=101,$b=102,qb=103,Xb=104,Yb=200,Zb=201,Jb=202,Kb=203,Bd=204,Vd=205,Qb=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,zd=0,Hd=1,Gd=2,ks=3,jd=4,Wd=5,$d=6,qd=7,uv=0,cS=1,lS=2,wi=0,dv=1,fv=2,hv=3,pv=4,mv=5,gv=6,vv=7;var Jg=300,Qr=301,Bs=302,_f=303,xf=304,Gc=306,Xd=1e3,Wi=1001,Yd=1002,cn=1003,uS=1004;var jc=1005;var hn=1006,Mf=1007;var es=1008;var Yn=1009,yv=1010,_v=1011,aa=1012,bf=1013,Ei=1014,Ci=1015,Ji=1016,Sf=1017,wf=1018,ca=1020,xv=35902,Mv=35899,bv=1021,Sv=1022,oi=1023,$i=1026,ts=1027,wv=1028,Ef=1029,ns=1030,Cf=1031;var Tf=1033,Wc=33776,$c=33777,qc=33778,Xc=33779,Df=35840,If=35841,Af=35842,Rf=35843,Nf=36196,Pf=37492,Of=37496,Lf=37488,Ff=37489,Yc=37490,kf=37491,Uf=37808,Bf=37809,Vf=37810,zf=37811,Hf=37812,Gf=37813,jf=37814,Wf=37815,$f=37816,qf=37817,Xf=37818,Yf=37819,Zf=37820,Jf=37821,Kf=36492,Qf=36494,eh=36495,th=36283,nh=36284,Zc=36285,ih=36286;var xc=2300,Zd=2301,Ud=2302,Kg=2303,Qg=2400,ev=2401,tv=2402;var dS=3200;var Ev=0,fS=1,xr="",jn="srgb",Mc="srgb-linear",bc="linear",pt="srgb";var Os=7680;var nv=519,hS=512,pS=513,mS=514,rh=515,gS=516,vS=517,sh=518,yS=519,iv=35044;var Cv="300 es",Si=2e3,Sc=2001;function lR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _S(){let n=wc("canvas");return n.style.display="block",n}var Mb={},ta=null;function Tv(...n){let e="THREE."+n.shift();ta?ta("log",e,...n):console.log(e,...n)}function xS(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=xS(n);let e="THREE."+n.shift();if(ta)ta("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Oe(...n){n=xS(n);let e="THREE."+n.shift();if(ta)ta("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jd(...n){let e=n.join(" ");e in Mb||(Mb[e]=!0,Ne(...n))}function MS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var bS={[zd]:Hd,[Gd]:$d,[jd]:qd,[ks]:Wd,[Hd]:zd,[$d]:Gd,[qd]:jd,[Wd]:ks},qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dg=Math.PI/180,Kd=180/Math.PI;function Jc(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function dR(n,e){return(n%e+e)%e}function Ig(n,e,t){return(1-t)*n+t*e}function mc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mt=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(f!==x||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ag.copy(this).projectOnVector(e),this.sub(Ag)}reflect(e){return this.sub(Ag.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ag=new V,bb=new Xi,Be=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],S=r[4],w=r[7],A=r[2],E=r[5],I=r[8];return s[0]=o*x+a*b+c*A,s[3]=o*m+a*S+c*E,s[6]=o*p+a*w+c*I,s[1]=l*x+u*b+f*A,s[4]=l*m+u*S+f*E,s[7]=l*p+u*w+f*I,s[2]=d*x+h*b+g*A,s[5]=d*m+h*S+g*E,s[8]=d*p+h*w+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rg.makeScale(e,t)),this}rotate(e){return this.premultiply(Rg.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rg=new Be,Sb=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wb=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fR(){let n={enabled:!0,workingColorSpace:Mc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=ea(r.r),r.g=ea(r.g),r.b=ea(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mc]:{primaries:e,whitePoint:i,transfer:bc,toXYZ:Sb,fromXYZ:wb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Sb,fromXYZ:wb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),n}var st=fR();function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ho,Qd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ho===void 0&&(Ho=wc("canvas")),Ho.width=e.width,Ho.height=e.height;let r=Ho.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ho}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vr(t[i]/255)*255):t[i]=vr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hR=0,na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=Jc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ng(r[o].image)):s.push(Ng(r[o]))}else s=Ng(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ng(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var pR=0,Pg=new V,Mr=(()=>{class n extends qi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Wi,s=Wi,o=hn,a=es,c=oi,l=Yn,u=n.DEFAULT_ANISOTROPY,f=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Jc(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pg).x}get height(){return this.source.getSize(Pg).y}get depth(){return this.source.getSize(Pg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Ne(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Jg,n.DEFAULT_ANISOTROPY=1,n})(),Ut=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,w=(h+1)/2,A=(p+1)/2,E=(u+d)/4,I=(f+x)/4,y=(g+m)/4;return S>w&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=I/i):w>A?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=I/s,r=y/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ef=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Mr(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends ef{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ec=class extends Mr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tf=class extends Mr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,f,d,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,d,h,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,f,d,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Go.setFromMatrixColumn(e,0).length(),s=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,h=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,h=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mR,e,gR)}lookAt(e,t,i){let r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Vr.crossVectors(i,Hn),Vr.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Vr.crossVectors(i,Hn)),Vr.normalize(),gd.crossVectors(Hn,Vr),r[0]=Vr.x,r[4]=gd.x,r[8]=Hn.x,r[1]=Vr.y,r[5]=gd.y,r[9]=Hn.y,r[2]=Vr.z,r[6]=gd.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],S=i[7],w=i[11],A=i[15],E=r[0],I=r[4],y=r[8],C=r[12],O=r[1],T=r[5],k=r[9],j=r[13],X=r[2],P=r[6],H=r[10],F=r[14],K=r[3],ee=r[7],de=r[11],Se=r[15];return s[0]=o*E+a*O+c*X+l*K,s[4]=o*I+a*T+c*P+l*ee,s[8]=o*y+a*k+c*H+l*de,s[12]=o*C+a*j+c*F+l*Se,s[1]=u*E+f*O+d*X+h*K,s[5]=u*I+f*T+d*P+h*ee,s[9]=u*y+f*k+d*H+h*de,s[13]=u*C+f*j+d*F+h*Se,s[2]=g*E+x*O+m*X+p*K,s[6]=g*I+x*T+m*P+p*ee,s[10]=g*y+x*k+m*H+p*de,s[14]=g*C+x*j+m*F+p*Se,s[3]=b*E+S*O+w*X+A*K,s[7]=b*I+S*T+w*P+A*ee,s[11]=b*y+S*k+w*H+A*de,s[15]=b*C+S*j+w*F+A*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=c*h-l*d,S=a*h-l*f,w=a*d-c*f,A=o*h-l*u,E=o*d-c*u,I=o*f-a*u;return t*(x*b-m*S+p*w)-i*(g*b-m*A+p*E)+r*(g*S-x*A+p*I)-s*(g*w-x*E+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=t*a-i*o,S=t*c-r*o,w=t*l-s*o,A=i*c-r*a,E=i*l-s*a,I=r*l-s*c,y=u*x-f*g,C=u*m-d*g,O=u*p-h*g,T=f*m-d*x,k=f*p-h*x,j=d*p-h*m,X=b*j-S*k+w*T+A*O-E*C+I*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/X;return e[0]=(a*j-c*k+l*T)*P,e[1]=(r*k-i*j-s*T)*P,e[2]=(x*I-m*E+p*A)*P,e[3]=(d*E-f*I-h*A)*P,e[4]=(c*O-o*j-l*C)*P,e[5]=(t*j-r*O+s*C)*P,e[6]=(m*w-g*I-p*S)*P,e[7]=(u*I-d*w+h*S)*P,e[8]=(o*k-a*O+l*y)*P,e[9]=(i*O-t*k-s*y)*P,e[10]=(g*E-x*w+p*b)*P,e[11]=(f*w-u*E-h*b)*P,e[12]=(a*C-o*T-c*y)*P,e[13]=(t*T-i*C+r*y)*P,e[14]=(x*S-g*A-m*b)*P,e[15]=(u*A-f*S+d*b)*P,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,g=s*f,x=o*u,m=o*f,p=a*f,b=c*l,S=c*u,w=c*f,A=i.x,E=i.y,I=i.z;return r[0]=(1-(x+p))*A,r[1]=(h+w)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(h-w)*E,r[5]=(1-(d+p))*E,r[6]=(m+b)*E,r[7]=0,r[8]=(g+S)*I,r[9]=(m-b)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Go.set(r[0],r[1],r[2]).length(),a=Go.set(r[4],r[5],r[6]).length(),c=Go.set(r[8],r[9],r[10]).length();s<0&&(o=-o),xi.copy(this);let l=1/o,u=1/a,f=1/c;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,t.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Si,c=!1){let l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Si)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Sc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si,c=!1){let l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Si)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Sc)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Go=new V,xi=new Gt,mR=new V(0,0,0),gR=new V(1,1,1),Vr=new V,gd=new V,Hn=new V,Eb=new Gt,Cb=new Xi,Cc=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],f=s[9],d=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Eb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eb,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cb.setFromEuler(this),this.setFromQuaternion(Cb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Tc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vR=0,Tb=new V,jo=new Xi,fr=new Gt,vd=new V,gc=new V,yR=new V,_R=new Xi,Db=new V(1,0,0),Ib=new V(0,1,0),Ab=new V(0,0,1),Rb={type:"added"},xR={type:"removed"},Wo={type:"childadded",child:null},Og={type:"childremoved",child:null},is=(()=>{class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=Jc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,i=new Cc,r=new Xi,s=new V(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Be}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return jo.setFromAxisAngle(t,i),this.quaternion.multiply(jo),this}rotateOnWorldAxis(t,i){return jo.setFromAxisAngle(t,i),this.quaternion.premultiply(jo),this}rotateX(t){return this.rotateOnAxis(Db,t)}rotateY(t){return this.rotateOnAxis(Ib,t)}rotateZ(t){return this.rotateOnAxis(Ab,t)}translateOnAxis(t,i){return Tb.copy(t).applyQuaternion(this.quaternion),this.position.add(Tb.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Db,t)}translateY(t){return this.translateOnAxis(Ib,t)}translateZ(t){return this.translateOnAxis(Ab,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?vd.copy(t):vd.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(gc,vd,this.up):fr.lookAt(vd,gc,this.up),this.quaternion.setFromRotationMatrix(fr),s&&(fr.extractRotation(s.matrixWorld),jo.setFromRotationMatrix(fr),this.quaternion.premultiply(jo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rb),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xR),Og.child=t,this.dispatchEvent(Og),Og.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rb),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,yR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,_R,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*s,o[13]+=r-o[1]*i-o[5]*r-o[9]*s,o[14]+=s-o[2]*i-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>It(_e({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>_e({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let d=l[u];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(c){let l=[];for(let u in c){let f=c[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new V(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Ls=class extends is{constructor(){super(),this.isGroup=!0,this.type="Group"}},MR={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},SS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},yd={h:0,s:0,l:0};function Lg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=dR(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Lg(o,s,e+1/3),this.g=Lg(o,s,e),this.b=Lg(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=jn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){let i=SS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return st.workingToColorSpace(yn.copy(this),e),Math.round(at(yn.r*255,0,255))*65536+Math.round(at(yn.g*255,0,255))*256+Math.round(at(yn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(yn.copy(this),t);let i=yn.r,r=yn.g,s=yn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=jn){st.workingToColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,r=yn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(yd);let i=Ig(zr.h,yd.h,t),r=Ig(zr.s,yd.s,t),s=Ig(zr.l,yd.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new tt;tt.NAMES=SS;var Dc=class extends is{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cc,this.environmentIntensity=1,this.environmentRotation=new Cc,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new V,hr=new V,Fg=new V,pr=new V,$o=new V,qo=new V,Nb=new V,kg=new V,Ug=new V,Bg=new V,Vg=new Ut,zg=new Ut,Hg=new Ut,$r=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mi.subVectors(e,t),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mi.subVectors(r,t),hr.subVectors(i,t),Fg.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(hr),c=Mi.dot(Fg),l=hr.dot(hr),u=hr.dot(Fg),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,pr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pr.x),c.addScaledVector(o,pr.y),c.addScaledVector(a,pr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Vg.setScalar(0),zg.setScalar(0),Hg.setScalar(0),Vg.fromBufferAttribute(e,t),zg.fromBufferAttribute(e,i),Hg.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vg,s.x),o.addScaledVector(zg,s.y),o.addScaledVector(Hg,s.z),o}static isFrontFacing(e,t,i,r){return Mi.subVectors(i,t),hr.subVectors(e,t),Mi.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Mi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;$o.subVectors(r,i),qo.subVectors(s,i),kg.subVectors(e,i);let c=$o.dot(kg),l=qo.dot(kg);if(c<=0&&l<=0)return t.copy(i);Ug.subVectors(e,r);let u=$o.dot(Ug),f=qo.dot(Ug);if(u>=0&&f<=u)return t.copy(r);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector($o,o);Bg.subVectors(e,s);let h=$o.dot(Bg),g=qo.dot(Bg);if(g>=0&&h<=g)return t.copy(s);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(qo,a);let m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Nb.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(Nb,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector($o,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_d.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_d.copy(i.boundingBox)),_d.applyMatrix4(e.matrixWorld),this.union(_d)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vc),xd.subVectors(this.max,vc),Xo.subVectors(e.a,vc),Yo.subVectors(e.b,vc),Zo.subVectors(e.c,vc),Hr.subVectors(Yo,Xo),Gr.subVectors(Zo,Yo),As.subVectors(Xo,Zo);let t=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-As.z,As.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,As.z,0,-As.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-As.y,As.x,0];return!Gg(t,Xo,Yo,Zo,xd)||(t=[1,0,0,0,1,0,0,0,1],!Gg(t,Xo,Yo,Zo,xd))?!1:(Md.crossVectors(Hr,Gr),t=[Md.x,Md.y,Md.z],Gg(t,Xo,Yo,Zo,xd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mr=[new V,new V,new V,new V,new V,new V,new V,new V],bi=new V,_d=new Xr,Xo=new V,Yo=new V,Zo=new V,Hr=new V,Gr=new V,As=new V,vc=new V,xd=new V,Md=new V,Rs=new V;function Gg(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rs.fromArray(n,s);let a=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),u=i.dot(Rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var $t=new V,bd=new mt,bR=0,fn=class extends qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iv,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bd.fromBufferAttribute(this,t),bd.applyMatrix3(e),this.setXY(t,bd.x,bd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),i=Fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),i=Fn(i,this.array),r=Fn(r,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ic=class extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ac=class extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ri=class extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}},SR=new Xr,yc=new V,jg=new V,Us=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):SR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yc.subVectors(e,this.center);let t=yc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yc.copy(e.center).add(jg)),this.expandByPoint(yc.copy(e.center).sub(jg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wR=0,ii=new Gt,Wg=new is,Jo=new V,Gn=new Xr,_c=new Xr,an=new V,$n=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Jc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lR(e)?Ac:Ic)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return Wg.lookAt(e),Wg.updateMatrix(),this.applyMatrix4(Wg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];_c.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Gn.min,_c.min),Gn.expandByPoint(an),an.addVectors(Gn.max,_c.max),Gn.expandByPoint(an)):(Gn.expandByPoint(_c.min),Gn.expandByPoint(_c.max))}Gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)an.fromBufferAttribute(a,l),c&&(Jo.fromBufferAttribute(e,l),an.add(Jo)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new V,c[y]=new V;let l=new V,u=new V,f=new V,d=new mt,h=new mt,g=new mt,x=new V,m=new V;function p(y,C,O){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,O),d.fromBufferAttribute(s,y),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,O),u.sub(l),f.sub(l),h.sub(d),g.sub(d);let T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(T),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[y].add(x),a[C].add(x),a[O].add(x),c[y].add(m),c[C].add(m),c[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,C=b.length;y<C;++y){let O=b[y],T=O.start,k=O.count;for(let j=T,X=T+k;j<X;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let S=new V,w=new V,A=new V,E=new V;function I(y){A.fromBufferAttribute(r,y),E.copy(A);let C=a[y];S.copy(C),S.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(E,C);let T=w.dot(c[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,T)}for(let y=0,C=b.length;y<C;++y){let O=b[y],T=O.start,k=O.count;for(let j=T,X=T+k;j<X;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new fn(d,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){let d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ER=0,Yr=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=Jc(),this.name="",this.type="Material",this.blending=Fs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Vd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gr=new V,$g=new V,Sd=new V,jr=new V,qg=new V,wd=new V,Xg=new V,Rc=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$g.copy(e).add(t).multiplyScalar(.5),Sd.copy(t).sub(e).normalize(),jr.copy(this.origin).sub($g);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Sd),a=jr.dot(this.direction),c=-jr.dot(Sd),l=jr.lengthSq(),u=Math.abs(1-o*o),f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){let x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($g).addScaledVector(Sd,d),h}intersectSphere(e,t){gr.subVectors(e.center,this.origin);let i=gr.dot(this.direction),r=gr.dot(gr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,r,s){qg.subVectors(t,e),wd.subVectors(i,e),Xg.crossVectors(qg,wd);let o=this.direction.dot(Xg),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jr.subVectors(this.origin,e);let c=a*this.direction.dot(wd.crossVectors(jr,wd));if(c<0)return null;let l=a*this.direction.dot(qg.cross(jr));if(l<0||c+l>o)return null;let u=-a*jr.dot(Xg);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nc=class extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cc,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pb=new Gt,Ns=new Rc,Ed=new Us,Ob=new V,Cd=new V,Td=new V,Dd=new V,Yg=new V,Id=new V,Lb=new V,Ad=new V,si=class extends is{constructor(e=new $n,t=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Id.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],f=s[c];u!==0&&(Yg.fromBufferAttribute(f,e),o?Id.addScaledVector(Yg,u):Id.addScaledVector(Yg.sub(t),u))}t.add(Id)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ed.copy(i.boundingSphere),Ed.applyMatrix4(s),Ns.copy(e.ray).recast(e.near),!(Ed.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ed,Ob)===null||Ns.origin.distanceToSquared(Ob)>(e.far-e.near)**2))&&(Pb.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(Pb),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=b,A=S;w<A;w+=3){let E=a.getX(w),I=a.getX(w+1),y=a.getX(w+2);r=Rd(this,p,e,i,l,u,f,E,I,y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),w=a.getX(m+2);r=Rd(this,o,e,i,l,u,f,b,S,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=b,A=S;w<A;w+=3){let E=w,I=w+1,y=w+2;r=Rd(this,p,e,i,l,u,f,E,I,y),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let b=m,S=m+1,w=m+2;r=Rd(this,o,e,i,l,u,f,b,S,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function CR(n,e,t,i,r,s,o,a){let c;if(e.side===En?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===yr,a),c===null)return null;Ad.copy(a),Ad.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ad);return l<t.near||l>t.far?null:{distance:l,point:Ad.clone(),object:n}}function Rd(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Cd),n.getVertexPosition(c,Td),n.getVertexPosition(l,Dd);let u=CR(n,e,t,i,Cd,Td,Dd,Lb);if(u){let f=new V;$r.getBarycoord(Lb,Cd,Td,Dd,f),r&&(u.uv=$r.getInterpolatedAttribute(r,a,c,l,f,new mt)),s&&(u.uv1=$r.getInterpolatedAttribute(s,a,c,l,f,new mt)),o&&(u.normal=$r.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new V,materialIndex:0};$r.getNormal(Cd,Td,Dd,d.normal),u.face=d,u.barycoord=f}return u}var nf=class extends Mr{constructor(e=null,t=1,i=1,r,s,o,a,c,l=cn,u=cn,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zg=new V,TR=new V,DR=new Be,ji=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zg.subVectors(i,t).cross(TR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Zg),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||DR.getNormalMatrix(e),r=this.coplanarPoint(Zg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Us,IR=new mt(.5,.5),Nd=new V,Pc=class{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],S=s[13],w=s[14],A=s[15];if(r[0].setComponents(l-o,h-u,p-g,A-b).normalize(),r[1].setComponents(l+o,h+u,p+g,A+b).normalize(),r[2].setComponents(l+a,h+f,p+x,A+S).normalize(),r[3].setComponents(l-a,h-f,p-x,A-S).normalize(),i)r[4].setComponents(c,d,m,w).normalize(),r[5].setComponents(l-c,h-d,p-m,A-w).normalize();else if(r[4].setComponents(l-c,h-d,p-m,A-w).normalize(),t===Si)r[5].setComponents(l+c,h+d,p+m,A+w).normalize();else if(t===Sc)r[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=IR.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Nd.x=r.normal.x>0?e.max.x:e.min.x,Nd.y=r.normal.y>0?e.max.y:e.min.y,Nd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ra=class extends Yr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fb=new Gt,rv=new Rc,Pd=new Us,Od=new V,Oc=class extends is{constructor(e=new $n,t=new ra){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pd.copy(i.boundingSphere),Pd.applyMatrix4(r),Pd.radius+=s,e.ray.intersectsSphere(Pd)===!1)return;Fb.copy(r).invert(),rv.copy(e.ray).applyMatrix4(Fb);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,x=h;g<x;g++){let m=l.getX(g);Od.fromBufferAttribute(f,m),kb(Od,m,c,r,e,t,this)}}else{let d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,x=h;g<x;g++)Od.fromBufferAttribute(f,g),kb(Od,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function kb(n,e,t,i,r,s,o){let a=rv.distanceSqToPoint(n);if(a<t){let c=new V;rv.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Lc=class extends Mr{constructor(e=[],t=Qr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var _r=class extends Mr{constructor(e,t,i=Ei,r,s,o,a=cn,c=cn,l,u=$i,f=1){if(u!==$i&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rf=class extends _r{constructor(e,t=Ei,i=Qr,r,s,o=cn,a=cn,c,l=$i){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fc=class extends Mr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sa=class n extends $n{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function g(x,m,p,b,S,w,A,E,I,y,C){let O=w/I,T=A/y,k=w/2,j=A/2,X=E/2,P=I+1,H=y+1,F=0,K=0,ee=new V;for(let de=0;de<H;de++){let Se=de*T-j;for(let Te=0;Te<P;Te++){let ut=Te*O-k;ee[x]=ut*b,ee[m]=Se*S,ee[p]=X,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Te/I),f.push(1-de/y),F+=1}}for(let de=0;de<y;de++)for(let Se=0;Se<I;Se++){let Te=d+Se+P*de,ut=d+Se+P*(de+1),gt=d+(Se+1)+P*(de+1),$e=d+(Se+1)+P*de;c.push(Te,ut,$e),c.push(ut,gt,$e),K+=6}a.addGroup(h,K,C),h+=K,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kc=class n extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*d-o;for(let S=0;S<l;S++){let w=S*f-s;g.push(w,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let S=b+l*p,w=b+l*(p+1),A=b+1+l*(p+1),E=b+1+l*p;h.push(S,w,E),h.push(w,A,E)}this.setIndex(h),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Ub(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ub(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=Vs(n[t]);for(let r in i)e[r]=i[r]}return e}function Ub(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function AR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dv(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var wS={clone:Vs,merge:xn},RR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RR,this.fragmentShader=NR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=AR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sf=class extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var of=class extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},af=class extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ld(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Zr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cf=class extends Zr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qg,endingEnd:Qg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ev:s=e,a=2*t-i;break;case tv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ev:o=e,c=2*i-t;break;case tv:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-h)*m+(1.5+h)*x+.5*g,w=h*m-h*x;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+b*o[l+A]+S*o[c+A]+w*o[f+A];return s}},lf=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*f+o[c+d]*u;return s}},uf=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},df=class extends Zr{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,d=u.outTangents;if(!f||!d){let x=(i-t)/(r-t),m=1-x;for(let p=0;p!==a;++p)s[p]=o[l+p]*m+o[c+p]*x;return s}let h=a*2,g=e-1;for(let x=0;x!==a;++x){let m=o[l+x],p=o[c+x],b=g*h+x*2,S=d[b],w=d[b+1],A=e*h+x*2,E=f[A],I=f[A+1],y=(i-t)/(r-t),C,O,T,k,j;for(let X=0;X<8;X++){C=y*y,O=C*y,T=1-y,k=T*T,j=k*T;let H=j*t+3*k*y*S+3*T*C*E+O*r-i;if(Math.abs(H)<1e-10)break;let F=3*k*(S-t)+6*T*y*(E-S)+3*C*(r-E);if(Math.abs(F)<1e-10)break;y=y-H/F,y=Math.max(0,Math.min(1,y))}s[x]=j*m+3*k*y*w+3*T*C*I+O*p}return s}},Xn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ld(t,this.TimeBufferType),this.values=Ld(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ld(e.times,Array),values:Ld(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new df(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case xc:t=this.InterpolantFactoryMethodDiscrete;break;case Zd:t=this.InterpolantFactoryMethodLinear;break;case Ud:t=this.InterpolantFactoryMethodSmooth;break;case Kg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xc;case this.InterpolantFactoryMethodLinear:return Zd;case this.InterpolantFactoryMethodSmooth:return Ud;case this.InterpolantFactoryMethodBezier:return Kg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Oe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&uR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ud,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Zd;var Jr=class extends Xn{constructor(e,t,i){super(e,t,i)}};Jr.prototype.ValueTypeName="bool";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=xc;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var ff=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}};ff.prototype.ValueTypeName="color";var hf=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}};hf.prototype.ValueTypeName="number";var pf=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Xi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Uc=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new pf(this.times,this.values,this.getValueSize(),e)}};Uc.prototype.ValueTypeName="quaternion";Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Xn{constructor(e,t,i){super(e,t,i)}};Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=xc;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var mf=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}};mf.prototype.ValueTypeName="vector";var Fd=new V,kd=new Xi,Gi=new V,Bc=class extends is{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fd,kd,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,kd,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fd,kd,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,kd,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wr=new V,Bb=new mt,Vb=new mt,_n=class extends Bc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dg*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Dg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Bb,Vb),t.subVectors(Vb,Bb)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dg*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vc=class extends Bc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ko=-90,Qo=1,gf=class extends is{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _n(Ko,Qo,e,t);r.layers=this.layers,this.add(r);let s=new _n(Ko,Qo,e,t);s.layers=this.layers,this.add(s);let o=new _n(Ko,Qo,e,t);o.layers=this.layers,this.add(o);let a=new _n(Ko,Qo,e,t);a.layers=this.layers,this.add(a);let c=new _n(Ko,Qo,e,t);c.layers=this.layers,this.add(c);let l=new _n(Ko,Qo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vf=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Iv="\\[\\]\\.:\\/",PR=new RegExp("["+Iv+"]","g"),Av="[^"+Iv+"]",OR="[^"+Iv.replace("\\.","")+"]",LR=/((?:WC+[\/:])*)/.source.replace("WC",Av),FR=/(WCOD+)?/.source.replace("WCOD",OR),kR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Av),UR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Av),BR=new RegExp("^"+LR+FR+kR+UR+"$"),VR=["material","materials","bones","map"],sv=class{constructor(e,t,i){let r=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(PR,"")}static parseTrackName(t){let i=BR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);VR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;Oe("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=sv,n})();kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KG=new Float32Array(1);var ov=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function Rv(n,e,t,i){let r=zR(i);switch(t){case bv:return n*e;case wv:return n*e/r.components*r.byteLength;case Ef:return n*e/r.components*r.byteLength;case ns:return n*e*2/r.components*r.byteLength;case Cf:return n*e*2/r.components*r.byteLength;case Sv:return n*e*3/r.components*r.byteLength;case oi:return n*e*4/r.components*r.byteLength;case Tf:return n*e*4/r.components*r.byteLength;case Wc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case If:case Rf:return Math.max(n,16)*Math.max(e,8)/4;case Df:case Af:return Math.max(n,8)*Math.max(e,8)/2;case Nf:case Pf:case Lf:case Ff:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Of:case Yc:case kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kf:case Qf:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zc:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zR(n){switch(n){case Yn:case yv:return{byteLength:1,components:1};case aa:case _v:case Ji:return{byteLength:2,components:1};case Sf:case wf:return{byteLength:2,components:4};case Ei:case bf:case Ci:return{byteLength:4,components:1};case xv:case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);function qS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function HR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let x=f[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var GR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$R=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_N="gl_FragColor = linearToOutputTexel( gl_FragColor );",xN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ON=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kN=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WN=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$N=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$P=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iO=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rO=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sO=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oO=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aO=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cO=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dO=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fO=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_O=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:GR,alphahash_pars_fragment:jR,alphamap_fragment:WR,alphamap_pars_fragment:$R,alphatest_fragment:qR,alphatest_pars_fragment:XR,aomap_fragment:YR,aomap_pars_fragment:ZR,batching_pars_vertex:JR,batching_vertex:KR,begin_vertex:QR,beginnormal_vertex:eN,bsdfs:tN,iridescence_fragment:nN,bumpmap_pars_fragment:iN,clipping_planes_fragment:rN,clipping_planes_pars_fragment:sN,clipping_planes_pars_vertex:oN,clipping_planes_vertex:aN,color_fragment:cN,color_pars_fragment:lN,color_pars_vertex:uN,color_vertex:dN,common:fN,cube_uv_reflection_fragment:hN,defaultnormal_vertex:pN,displacementmap_pars_vertex:mN,displacementmap_vertex:gN,emissivemap_fragment:vN,emissivemap_pars_fragment:yN,colorspace_fragment:_N,colorspace_pars_fragment:xN,envmap_fragment:MN,envmap_common_pars_fragment:bN,envmap_pars_fragment:SN,envmap_pars_vertex:wN,envmap_physical_pars_fragment:LN,envmap_vertex:EN,fog_vertex:CN,fog_pars_vertex:TN,fog_fragment:DN,fog_pars_fragment:IN,gradientmap_pars_fragment:AN,lightmap_pars_fragment:RN,lights_lambert_fragment:NN,lights_lambert_pars_fragment:PN,lights_pars_begin:ON,lights_toon_fragment:FN,lights_toon_pars_fragment:kN,lights_phong_fragment:UN,lights_phong_pars_fragment:BN,lights_physical_fragment:VN,lights_physical_pars_fragment:zN,lights_fragment_begin:HN,lights_fragment_maps:GN,lights_fragment_end:jN,lightprobes_pars_fragment:WN,logdepthbuf_fragment:$N,logdepthbuf_pars_fragment:qN,logdepthbuf_pars_vertex:XN,logdepthbuf_vertex:YN,map_fragment:ZN,map_pars_fragment:JN,map_particle_fragment:KN,map_particle_pars_fragment:QN,metalnessmap_fragment:eP,metalnessmap_pars_fragment:tP,morphinstance_vertex:nP,morphcolor_vertex:iP,morphnormal_vertex:rP,morphtarget_pars_vertex:sP,morphtarget_vertex:oP,normal_fragment_begin:aP,normal_fragment_maps:cP,normal_pars_fragment:lP,normal_pars_vertex:uP,normal_vertex:dP,normalmap_pars_fragment:fP,clearcoat_normal_fragment_begin:hP,clearcoat_normal_fragment_maps:pP,clearcoat_pars_fragment:mP,iridescence_pars_fragment:gP,opaque_fragment:vP,packing:yP,premultiplied_alpha_fragment:_P,project_vertex:xP,dithering_fragment:MP,dithering_pars_fragment:bP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:wP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:CP,shadowmap_vertex:TP,shadowmask_pars_fragment:DP,skinbase_vertex:IP,skinning_pars_vertex:AP,skinning_vertex:RP,skinnormal_vertex:NP,specularmap_fragment:PP,specularmap_pars_fragment:OP,tonemapping_fragment:LP,tonemapping_pars_fragment:FP,transmission_fragment:kP,transmission_pars_fragment:UP,uv_pars_fragment:BP,uv_pars_vertex:VP,uv_vertex:zP,worldpos_vertex:HP,background_vert:GP,background_frag:jP,backgroundCube_vert:WP,backgroundCube_frag:$P,cube_vert:qP,cube_frag:XP,depth_vert:YP,depth_frag:ZP,distance_vert:JP,distance_frag:KP,equirect_vert:QP,equirect_frag:eO,linedashed_vert:tO,linedashed_frag:nO,meshbasic_vert:iO,meshbasic_frag:rO,meshlambert_vert:sO,meshlambert_frag:oO,meshmatcap_vert:aO,meshmatcap_frag:cO,meshnormal_vert:lO,meshnormal_frag:uO,meshphong_vert:dO,meshphong_frag:fO,meshphysical_vert:hO,meshphysical_frag:pO,meshtoon_vert:mO,meshtoon_frag:gO,points_vert:vO,points_frag:yO,shadow_vert:_O,shadow_frag:xO,sprite_vert:MO,sprite_frag:bO},ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Qi={basic:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:xn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:xn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:xn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:xn([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:xn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:xn([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:xn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:xn([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:xn([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:xn([ue.lights,ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Qi.physical={uniforms:xn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var oh={r:0,b:0,g:0},SO=new Gt,XS=new Be;XS.set(-1,0,0,0,1,0,0,0,1);function wO(n,e,t,i,r,s){let o=new tt(0),a=r===!0?0:1,c,l,u=null,f=0,d=null;function h(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let w=b.backgroundBlurriness>0;S=e.get(S,w)}return S}function g(b){let S=!1,w=h(b);w===null?m(o,a):w&&w.isColor&&(m(w,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,S){let w=h(S);w&&(w.isCubeTexture||w.mapping===Gc)?(l===void 0&&(l=new si(new sa(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Vs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(SO.makeRotationFromEuler(S.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(XS),l.material.toneMapped=st.getTransfer(w.colorSpace)!==pt,(u!==w||f!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new si(new kc(2,2),new qn({name:"BackgroundMaterial",uniforms:Vs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==pt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(oh,Dv(n)),t.buffers.color.setClear(oh.r,oh.g,oh.b,S,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:x,dispose:p}}function EO(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(T,k,j,X,P){let H=!1,F=f(T,X,j,k);s!==F&&(s=F,l(s.object)),H=h(T,X,j,P),H&&g(T,X,j,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,w(T,k,j,X),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,k,j,X){let P=X.wireframe===!0,H=i[k.id];H===void 0&&(H={},i[k.id]=H);let F=T.isInstancedMesh===!0?T.id:0,K=H[F];K===void 0&&(K={},H[F]=K);let ee=K[j.id];ee===void 0&&(ee={},K[j.id]=ee);let de=ee[P];return de===void 0&&(de=d(c()),ee[P]=de),de}function d(T){let k=[],j=[],X=[];for(let P=0;P<t;P++)k[P]=0,j[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:X,object:T,attributes:{},index:null}}function h(T,k,j,X){let P=s.attributes,H=k.attributes,F=0,K=j.getAttributes();for(let ee in K)if(K[ee].location>=0){let Se=P[ee],Te=H[ee];if(Te===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Se===void 0||Se.attribute!==Te||Te&&Se.data!==Te.data)return!0;F++}return s.attributesNum!==F||s.index!==X}function g(T,k,j,X){let P={},H=k.attributes,F=0,K=j.getAttributes();for(let ee in K)if(K[ee].location>=0){let Se=H[ee];Se===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor));let Te={};Te.attribute=Se,Se&&Se.data&&(Te.data=Se.data),P[ee]=Te,F++}s.attributes=P,s.attributesNum=F,s.index=X}function x(){let T=s.newAttributes;for(let k=0,j=T.length;k<j;k++)T[k]=0}function m(T){p(T,0)}function p(T,k){let j=s.newAttributes,X=s.enabledAttributes,P=s.attributeDivisors;j[T]=1,X[T]===0&&(n.enableVertexAttribArray(T),X[T]=1),P[T]!==k&&(n.vertexAttribDivisor(T,k),P[T]=k)}function b(){let T=s.newAttributes,k=s.enabledAttributes;for(let j=0,X=k.length;j<X;j++)k[j]!==T[j]&&(n.disableVertexAttribArray(j),k[j]=0)}function S(T,k,j,X,P,H,F){F===!0?n.vertexAttribIPointer(T,k,j,P,H):n.vertexAttribPointer(T,k,j,X,P,H)}function w(T,k,j,X){x();let P=X.attributes,H=j.getAttributes(),F=k.defaultAttributeValues;for(let K in H){let ee=H[K];if(ee.location>=0){let de=P[K];if(de===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){let Se=de.normalized,Te=de.itemSize,ut=e.get(de);if(ut===void 0)continue;let gt=ut.buffer,$e=ut.type,Y=ut.bytesPerElement,pe=$e===n.INT||$e===n.UNSIGNED_INT||de.gpuType===bf;if(de.isInterleavedBufferAttribute){let se=de.data,Pe=se.stride,Ve=de.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)p(ee.location+Le,se.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<ee.locationSize;Le++)m(ee.location+Le);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Le=0;Le<ee.locationSize;Le++)S(ee.location+Le,Te/ee.locationSize,$e,Se,Pe*Y,(Ve+Te/ee.locationSize*Le)*Y,pe)}else{if(de.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)p(ee.location+se,de.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<ee.locationSize;se++)m(ee.location+se);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let se=0;se<ee.locationSize;se++)S(ee.location+se,Te/ee.locationSize,$e,Se,Te*Y,Te/ee.locationSize*se*Y,pe)}}else if(F!==void 0){let Se=F[K];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(ee.location,Se);break;case 3:n.vertexAttrib3fv(ee.location,Se);break;case 4:n.vertexAttrib4fv(ee.location,Se);break;default:n.vertexAttrib1fv(ee.location,Se)}}}}b()}function A(){C();for(let T in i){let k=i[T];for(let j in k){let X=k[j];for(let P in X){let H=X[P];for(let F in H)u(H[F].object),delete H[F];delete X[P]}}delete i[T]}}function E(T){if(i[T.id]===void 0)return;let k=i[T.id];for(let j in k){let X=k[j];for(let P in X){let H=X[P];for(let F in H)u(H[F].object),delete H[F];delete X[P]}}delete i[T.id]}function I(T){for(let k in i){let j=i[k];for(let X in j){let P=j[X];if(P[T.id]===void 0)continue;let H=P[T.id];for(let F in H)u(H[F].object),delete H[F];delete P[T.id]}}}function y(T){for(let k in i){let j=i[k],X=T.isInstancedMesh===!0?T.id:0,P=j[X];if(P!==void 0){for(let H in P){let F=P[H];for(let K in F)u(F[K].object),delete F[K];delete P[H]}delete j[X],Object.keys(j).length===0&&delete i[k]}}}function C(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function CO(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function TO(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==oi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Yn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ci&&!y)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,maxSamples:A,samples:E}}function DO(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ji,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,S=b*4,w=p.clippingState||null;c.value=w,w=u(g,d,S,h);for(let A=0;A!==S;++A)w[A]=t[A];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,w=h;S!==x;++S,w+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var rs=4,ES=[.125,.215,.35,.446,.526,.582],zs=20,IO=256,Kc=new Vc,CS=new tt,Nv=null,Pv=0,Ov=0,Lv=!1,AO=new V,ch=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=AO}=s;Nv=this._renderer.getRenderTarget(),Pv=this._renderer.getActiveCubeFace(),Ov=this._renderer.getActiveMipmapLevel(),Lv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=DS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nv,Pv,Ov),this._renderer.xr.enabled=Lv,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nv=this._renderer.getRenderTarget(),Pv=this._renderer.getActiveCubeFace(),Ov=this._renderer.getActiveMipmapLevel(),Lv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ji,format:oi,colorSpace:Mc,depthBuffer:!1},r=TS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=TS(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RO(s)),this._blurMaterial=PO(s,e,t),this._ggxMaterial=NO(s,e,t)}return r}_compileMaterial(e){let t=new si(new $n,e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,i,r,s){let c=new _n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(CS),f.toneMapping=wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new sa,new Nc({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(CS),p=!0);for(let S=0;S<6;S++){let w=S%3;w===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):w===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));let A=this._cubeSize;la(r,w*A,S>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(x,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qr||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=IS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=DS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Kc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-rs?i-g+rs:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,la(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Kc),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,la(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,Kc)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=l;let d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*zs-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):zs;m>zs&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],b=0;for(let I=0;I<zs;++I){let y=I/x,C=Math.exp(-y*y/2);p.push(C),I===0?b+=C:I<m&&(b+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;let w=this._sizeLods[r],A=3*w*(r>S-rs?r-S+rs:0),E=4*(this._cubeSize-w);la(t,A,E,3*w,2*w),c.setRenderTarget(t),c.render(f,Kc)}};function RO(n){let e=[],t=[],i=[],r=n,s=n-rs+1+ES.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-rs?c=ES[o-n+rs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*h),S=new Float32Array(m*g*h),w=new Float32Array(p*g*h);for(let E=0;E<h;E++){let I=E%3*2/3-1,y=E>2?0:-1,C=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];b.set(C,x*g*E),S.set(d,m*g*E);let O=[E,E,E,E,E,E];w.set(O,p*g*E)}let A=new $n;A.setAttribute("position",new fn(b,x)),A.setAttribute("uv",new fn(S,m)),A.setAttribute("faceIndex",new fn(w,p)),i.push(new si(A,null)),r>rs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function TS(n,e,t){let i=new Wn(n,e,t);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function NO(n,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IO,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function PO(n,e,t){let i=new Float32Array(zs),r=new V(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function DS(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function IS(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var lh=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sa(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Zi});s.uniforms.tEquirect.value=t;let o=new si(r,s),a=t.minFilter;return t.minFilter===es&&(t.minFilter=hn),new gf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function OO(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){let h=d.mapping;if(h===_f||h===xf)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new lh(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let h=d.mapping,g=h===_f||h===xf,x=h===Qr||h===Bs;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ch(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||x&&b&&c(b)?(i===null&&(i=new ch(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===_f?d.mapping=Qr:h===xf&&(d.mapping=Bs),d}function c(d){let h=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function l(d){let h=d.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function LO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Jd("WebGLRenderer: "+i+" extension not supported."),r}}}function FO(n,e,t,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){let d=[],h=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(h!==null){let b=h.array;x=h.version;for(let S=0,w=b.length;S<w;S+=3){let A=b[S+0],E=b[S+1],I=b[S+2];d.push(A,E,E,I,I,A)}}else{let b=g.array;x=g.version;for(let S=0,w=b.length/3-1;S<w;S+=3){let A=S+0,E=S+1,I=S+2;d.push(A,E,E,I,I,A)}}let m=new(g.count>=65535?Ac:Ic)(d,1);m.version=x;let p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){let d=s.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function kO(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,f*o,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let x=0;for(let m=0;m<h;m++)x+=d[m];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function UO(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function BO(n,e,t){let i=new WeakMap,r=new Ut;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let O=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var h=O;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;g===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let A=a.attributes.position.count*w,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let I=new Float32Array(A*E*4*f),y=new Ec(I,A,E,f);y.type=Ci,y.needsUpdate=!0;let C=w*4;for(let T=0;T<f;T++){let k=p[T],j=b[T],X=S[T],P=A*E*4*T;for(let H=0;H<k.count;H++){let F=H*C;g===!0&&(r.fromBufferAttribute(k,H),I[P+F+0]=r.x,I[P+F+1]=r.y,I[P+F+2]=r.z,I[P+F+3]=0),x===!0&&(r.fromBufferAttribute(j,H),I[P+F+4]=r.x,I[P+F+5]=r.y,I[P+F+6]=r.z,I[P+F+7]=0),m===!0&&(r.fromBufferAttribute(X,H),I[P+F+8]=r.x,I[P+F+9]=r.y,I[P+F+10]=r.z,I[P+F+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new mt(A,E)},i.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function VO(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var zO={[dv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[hv]:"CINEON_TONE_MAPPING",[pv]:"ACES_FILMIC_TONE_MAPPING",[gv]:"AGX_TONE_MAPPING",[vv]:"NEUTRAL_TONE_MAPPING",[mv]:"CUSTOM_TONE_MAPPING"};function HO(n,e,t,i,r){let s=new Wn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new _r(e,t):void 0}),o=new Wn(e,t,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),a=new $n;a.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ri([0,2,0,0,2,0],2));let c=new sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new si(a,c),u=new Vc(-1,1,1,-1,0,1),f=null,d=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(b,S){s.setSize(b,S),o.setSize(b,S);for(let w=0;w<m.length;w++){let A=m[w];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;let S=s.width,w=s.height;for(let A=0;A<m.length;A++){let E=m[A];E.setSize&&E.setSize(S,w)}},this.begin=function(b,S){if(h||b.toneMapping===wi&&m.length===0)return!1;if(x=S,S!==null){let w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return p===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=wi,!0},this.hasRenderPass=function(){return p},this.end=function(b,S){b.toneMapping=g,h=!0;let w=s,A=o;for(let E=0;E<m.length;E++){let I=m[E];if(I.enabled!==!1&&(I.render(b,A,w,S),I.needsSwap!==!1)){let y=w;w=A,A=y}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,c.defines={},st.getTransfer(f)===pt&&(c.defines.SRGB_TRANSFER="");let E=zO[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(x),b.render(l,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var YS=new Mr,Uv=new _r(1,1),ZS=new Ec,JS=new tf,KS=new Lc,AS=[],RS=[],NS=new Float32Array(16),PS=new Float32Array(9),OS=new Float32Array(4);function da(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=AS[r];if(s===void 0&&(s=new Float32Array(r),AS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fh(n,e){let t=RS[e];t===void 0&&(t=new Int32Array(e),RS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function GO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function WO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function $O(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function qO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;OS.set(i),n.uniformMatrix2fv(this.addr,!1,OS),Kt(t,i)}}function XO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;PS.set(i),n.uniformMatrix3fv(this.addr,!1,PS),Kt(t,i)}}function YO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;NS.set(i),n.uniformMatrix4fv(this.addr,!1,NS),Kt(t,i)}}function ZO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function KO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function QO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function eL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function nL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function iL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function rL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uv.compareFunction=t.isReversedDepthBuffer()?sh:rh,s=Uv):s=YS,t.setTexture2D(e||s,r)}function sL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||JS,r)}function oL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||KS,r)}function aL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ZS,r)}function cL(n){switch(n){case 5126:return GO;case 35664:return jO;case 35665:return WO;case 35666:return $O;case 35674:return qO;case 35675:return XO;case 35676:return YO;case 5124:case 35670:return ZO;case 35667:case 35671:return JO;case 35668:case 35672:return KO;case 35669:case 35673:return QO;case 5125:return eL;case 36294:return tL;case 36295:return nL;case 36296:return iL;case 35678:case 36198:case 36298:case 36306:case 35682:return rL;case 35679:case 36299:case 36307:return sL;case 35680:case 36300:case 36308:case 36293:return oL;case 36289:case 36303:case 36311:case 36292:return aL}}function lL(n,e){n.uniform1fv(this.addr,e)}function uL(n,e){let t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function dL(n,e){let t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function fL(n,e){let t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function hL(n,e){let t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pL(n,e){let t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mL(n,e){let t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gL(n,e){n.uniform1iv(this.addr,e)}function vL(n,e){n.uniform2iv(this.addr,e)}function yL(n,e){n.uniform3iv(this.addr,e)}function _L(n,e){n.uniform4iv(this.addr,e)}function xL(n,e){n.uniform1uiv(this.addr,e)}function ML(n,e){n.uniform2uiv(this.addr,e)}function bL(n,e){n.uniform3uiv(this.addr,e)}function SL(n,e){n.uniform4uiv(this.addr,e)}function wL(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Uv:o=YS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function EL(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||JS,s[o])}function CL(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||KS,s[o])}function TL(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ZS,s[o])}function DL(n){switch(n){case 5126:return lL;case 35664:return uL;case 35665:return dL;case 35666:return fL;case 35674:return hL;case 35675:return pL;case 35676:return mL;case 5124:case 35670:return gL;case 35667:case 35671:return vL;case 35668:case 35672:return yL;case 35669:case 35673:return _L;case 5125:return xL;case 36294:return ML;case 36295:return bL;case 36296:return SL;case 35678:case 36198:case 36298:case 36306:case 35682:return wL;case 35679:case 36299:case 36307:return EL;case 35680:case 36300:case 36308:case 36293:return CL;case 36289:case 36303:case 36311:case 36292:return TL}}var Bv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cL(t.type)}},Vv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DL(t.type)}},zv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Fv=/(\w+)(\])?(\[|\.)?/g;function LS(n,e){n.seq.push(e),n.map[e.id]=e}function IL(n,e,t){let i=n.name,r=i.length;for(Fv.lastIndex=0;;){let s=Fv.exec(i),o=Fv.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){LS(t,l===void 0?new Bv(a,n,e):new Vv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zv(a),LS(t,f)),t=f}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);IL(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function FS(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var AL=37297,RL=0;function NL(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var kS=new Be;function PL(n){st._getMatrix(kS,st.workingColorSpace,n);let e=`mat3( ${kS.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case bc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function US(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+NL(n.getShaderSource(e),a)}else return s}function OL(n,e){let t=PL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var LL={[dv]:"Linear",[fv]:"Reinhard",[hv]:"Cineon",[pv]:"ACESFilmic",[gv]:"AgX",[vv]:"Neutral",[mv]:"Custom"};function FL(n,e){let t=LL[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ah=new V;function kL(){st.getLuminanceCoefficients(ah);let n=ah.x.toFixed(4),e=ah.y.toFixed(4),t=ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function BL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function el(n){return n!==""}function BS(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function VS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hv(n){return n.replace(zL,GL)}var HL=new Map;function GL(n,e){let t=Ye[e];if(t===void 0){let i=HL.get(e);if(i!==void 0)t=Ye[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hv(t)}var jL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zS(n){return n.replace(jL,WL)}function WL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function HS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $L={[zc]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function qL(n){return $L[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XL={[Qr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function YL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ZL={[Bs]:"ENVMAP_MODE_REFRACTION"};function JL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ZL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KL={[uv]:"ENVMAP_BLENDING_MULTIPLY",[cS]:"ENVMAP_BLENDING_MIX",[lS]:"ENVMAP_BLENDING_ADD"};function QL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KL[n.combine]||"ENVMAP_BLENDING_NONE"}function eF(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tF(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=qL(t),l=YL(t),u=JL(t),f=QL(t),d=eF(t),h=UL(t),g=BL(s),x=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),p.length>0&&(p+=`
`)):(m=[HS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),p=[HS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==wi?FL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,OL("linearToOutputTexel",t.outputColorSpace),kL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=Hv(o),o=BS(o,t),o=VS(o,t),a=Hv(a),a=BS(a,t),a=VS(a,t),o=zS(o),a=zS(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,w=b+p+a,A=FS(r,r.VERTEX_SHADER,S),E=FS(r,r.FRAGMENT_SHADER,w);r.attachShader(x,A),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(T){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(E)||"",P=k.trim(),H=j.trim(),F=X.trim(),K=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,E);else{let de=US(r,A,"vertex"),Se=US(r,E,"fragment");Oe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+de+`
`+Se)}else P!==""?Ne("WebGLProgram: Program Info Log:",P):(H===""||F==="")&&(ee=!1);ee&&(T.diagnostics={runnable:K,programLog:P,vertexShader:{log:H,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(A),r.deleteShader(E),y=new ua(r,x),C=VL(r,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(x,AL)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RL++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var nF=0,Gv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jv(e),t.set(e,i)),i}},jv=class{constructor(e){this.id=nF++,this.code=e,this.usedTimes=0}};function iF(n){return n===ns||n===Yc||n===Zc}function rF(n,e,t,i,r,s){let o=new Tc,a=new Gv,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,C,O,T,k,j){let X=T.fog,P=k.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||H,F),ee=K&&K.mapping===Gc?K.image.height:null,de=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Se=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Te=Se!==void 0?Se.length:0,ut=0;P.morphAttributes.position!==void 0&&(ut=1),P.morphAttributes.normal!==void 0&&(ut=2),P.morphAttributes.color!==void 0&&(ut=3);let gt,$e,Y,pe;if(de){let Ge=Qi[de];gt=Ge.vertexShader,$e=Ge.fragmentShader}else gt=y.vertexShader,$e=y.fragmentShader,a.update(y),Y=a.getVertexShaderID(y),pe=a.getFragmentShaderID(y);let se=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ve=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,Rt=!!y.map,nt=!!y.matcap,vt=!!K,At=!!y.aoMap,et=!!y.lightMap,qt=!!y.bumpMap,Nt=!!y.normalMap,kn=!!y.displacementMap,R=!!y.emissiveMap,Xt=!!y.metalnessMap,it=!!y.roughnessMap,Tt=y.anisotropy>0,le=y.clearcoat>0,Ot=y.dispersion>0,M=y.iridescence>0,v=y.sheen>0,L=y.transmission>0,$=Tt&&!!y.anisotropyMap,J=le&&!!y.clearcoatMap,ne=le&&!!y.clearcoatNormalMap,ce=le&&!!y.clearcoatRoughnessMap,G=M&&!!y.iridescenceMap,q=M&&!!y.iridescenceThicknessMap,me=v&&!!y.sheenColorMap,xe=v&&!!y.sheenRoughnessMap,oe=!!y.specularMap,ie=!!y.specularColorMap,Ue=!!y.specularIntensityMap,qe=L&&!!y.transmissionMap,ft=L&&!!y.thicknessMap,D=!!y.gradientMap,re=!!y.alphaMap,W=y.alphaTest>0,ve=!!y.alphaHash,ae=!!y.extensions,Z=wi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Z=n.toneMapping);let Ee={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:gt,fragmentShader:$e,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&k.instanceColor!==null,instancingMorph:Ve&&k.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:nt,envMap:vt,envMapMode:vt&&K.mapping,envMapCubeUVHeight:ee,aoMap:At,lightMap:et,bumpMap:qt,normalMap:Nt,displacementMap:kn,emissiveMap:R,normalMapObjectSpace:Nt&&y.normalMapType===fS,normalMapTangentSpace:Nt&&y.normalMapType===Ev,packedNormalMap:Nt&&y.normalMapType===Ev&&iF(y.normalMap.format),metalnessMap:Xt,roughnessMap:it,anisotropy:Tt,anisotropyMap:$,clearcoat:le,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:Ot,iridescence:M,iridescenceMap:G,iridescenceThicknessMap:q,sheen:v,sheenColorMap:me,sheenRoughnessMap:xe,specularMap:oe,specularColorMap:ie,specularIntensityMap:Ue,transmission:L,transmissionMap:qe,thicknessMap:ft,gradientMap:D,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:W,alphaHash:ve,combine:y.combine,mapUv:Rt&&g(y.map.channel),aoMapUv:At&&g(y.aoMap.channel),lightMapUv:et&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:Nt&&g(y.normalMap.channel),displacementMapUv:kn&&g(y.displacementMap.channel),emissiveMapUv:R&&g(y.emissiveMap.channel),metalnessMapUv:Xt&&g(y.metalnessMap.channel),roughnessMapUv:it&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:J&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(y.sheenRoughnessMap.channel),specularMapUv:oe&&g(y.specularMap.channel),specularColorMapUv:ie&&g(y.specularColorMap.channel),specularIntensityMapUv:Ue&&g(y.specularIntensityMap.channel),transmissionMapUv:qe&&g(y.transmissionMap.channel),thicknessMapUv:ft&&g(y.thicknessMap.channel),alphaMapUv:re&&g(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Nt||Tt),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!P.attributes.uv&&(Rt||re),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&Nt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ut,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Z,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:R&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yi,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)C.push(O),C.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(p(C,y),b(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function b(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function S(y){let C=h[y.type],O;if(C){let T=Qi[C];O=wS.clone(T.uniforms)}else O=y.uniforms;return O}function w(y,C){let O=u.get(C);return O!==void 0?++O.usedTimes:(O=new tF(n,C,y,r),l.push(O),u.set(C,O)),O}function A(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:I}}function sF(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function GS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jS(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,m,p){let b=n[e];return b===void 0?(b={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},n[e]=b):(b.id=d.id,b.object=d,b.geometry=h,b.material=g,b.materialVariant=o(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=m,b.group=p),e++,b}function c(d,h,g,x,m,p){let b=a(d,h,g,x,m,p);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(d,h,g,x,m,p){let b=a(d,h,g,x,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(d,h){t.length>1&&t.sort(d||oF),i.length>1&&i.sort(h||GS),r.length>1&&r.sort(h||GS)}function f(){for(let d=e,h=n.length;d<h;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function aF(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new jS,n.set(i,[o])):r>=s.length?(o=new jS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cF(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new tt};break;case"SpotLight":t={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function lF(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uF=0;function dF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fF(n){let e=new cF,t=lF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let r=new V,s=new Gt,o=new Gt;function a(l){let u=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,b=0,S=0,w=0,A=0,E=0,I=0;l.sort(dF);for(let C=0,O=l.length;C<O;C++){let T=l[C],k=T.color,j=T.intensity,X=T.distance,P=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ns?P=T.shadow.map.texture:P=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=k.r*j,f+=k.g*j,d+=k.b*j;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],j);I++}else if(T.isDirectionalLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let F=T.shadow,K=t.get(T);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=P,i.directionalShadowMatrix[h]=T.shadow.matrix,b++}i.directional[h]=H,h++}else if(T.isSpotLight){let H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(k).multiplyScalar(j),H.distance=X,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[x]=H;let F=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,F.updateMatrices(T),T.castShadow&&E++),i.spotLightMatrix[x]=F.matrix,T.castShadow){let K=t.get(T);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=P,w++}x++}else if(T.isRectAreaLight){let H=e.get(T);H.color.copy(k).multiplyScalar(j),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let F=T.shadow,K=t.get(T);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=T.shadow.matrix,S++}i.point[g]=H,g++}else if(T.isHemisphereLight){let H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(j),H.groundColor.copy(T.groundColor).multiplyScalar(j),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==S||y.numSpotShadows!==w||y.numSpotMaps!==A||y.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,y.directionalLength=h,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=S,y.numSpotShadows=w,y.numSpotMaps=A,y.numLightProbes=I,i.version=uF++)}function c(l,u){let f=0,d=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let S=l[p];if(S.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(S.isSpotLight){let w=i.spot[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function WS(n){let e=new fF(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function hF(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new WS(n),e.set(r,[a])):s>=o.length?(a=new WS(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var pF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gF=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],vF=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],$S=new Gt,Qc=new V,kv=new V;function yF(n,e,t){let i=new Pc,r=new mt,s=new mt,o=new Ut,a=new of,c=new af,l={},u=t.maxTextureSize,f={[yr]:En,[En]:yr,[Yi]:Yi},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:pF,fragmentShader:mF}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new $n;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new si(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(E,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Gb&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);let C=n.getRenderTarget(),O=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Zi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let j=p!==this.type;j&&I.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(P=>P.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,P=E.length;X<P;X++){let H=E[X],F=H.shadow;if(F===void 0){Ne("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let K=F.getFrameExtents();r.multiply(K),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,F.mapSize.y=s.y));let ee=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ee,F.map===null||j===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===oa){if(H.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wn(r.x,r.y,{format:ns,type:Ji,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new _r(r.x,r.y,Ci),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=$i,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn}else H.isPointLight?(F.map=new lh(r.x),F.map.depthTexture=new rf(r.x,Ei)):(F.map=new Wn(r.x,r.y),F.map.depthTexture=new _r(r.x,r.y,Ei)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=$i,this.type===zc?(F.map.depthTexture.compareFunction=ee?sh:rh,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn);F.camera.updateProjectionMatrix()}let de=F.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<de;Se++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(F.map),n.clear());let Te=F.getViewport(Se);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),k.viewport(o)}if(H.isPointLight){let Te=F.camera,ut=F.matrix,gt=H.distance||Te.far;gt!==Te.far&&(Te.far=gt,Te.updateProjectionMatrix()),Qc.setFromMatrixPosition(H.matrixWorld),Te.position.copy(Qc),kv.copy(Te.position),kv.add(gF[Se]),Te.up.copy(vF[Se]),Te.lookAt(kv),Te.updateMatrixWorld(),ut.makeTranslation(-Qc.x,-Qc.y,-Qc.z),$S.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),F._frustum.setFromProjectionMatrix($S,Te.coordinateSystem,Te.reversedDepth)}else F.updateMatrices(H);i=F.getFrustum(),w(I,y,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===oa&&b(F,y),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,O,T)};function b(E,I){let y=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(r.x,r.y,{format:ns,type:Ji})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,y,d,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,y,h,x,null)}function S(E,I,y,C){let O=null,T=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)O=T;else if(O=y.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=O.uuid,j=I.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let P=X[j];P===void 0&&(P=O.clone(),X[j]=P,I.addEventListener("dispose",A)),O=P}if(O.visible=I.visible,O.wireframe=I.wireframe,C===oa?O.side=I.shadowSide!==null?I.shadowSide:I.side:O.side=I.shadowSide!==null?I.shadowSide:f[I.side],O.alphaMap=I.alphaMap,O.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,O.map=I.map,O.clipShadows=I.clipShadows,O.clippingPlanes=I.clippingPlanes,O.clipIntersection=I.clipIntersection,O.displacementMap=I.displacementMap,O.displacementScale=I.displacementScale,O.displacementBias=I.displacementBias,O.wireframeLinewidth=I.wireframeLinewidth,O.linewidth=I.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let k=n.properties.get(O);k.light=y}return O}function w(E,I,y,C,O){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===oa)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let j=e.update(E),X=E.material;if(Array.isArray(X)){let P=j.groups;for(let H=0,F=P.length;H<F;H++){let K=P[H],ee=X[K.materialIndex];if(ee&&ee.visible){let de=S(E,ee,C,O);E.onBeforeShadow(n,E,I,y,j,de,K),n.renderBufferDirect(y,null,j,de,E,K),E.onAfterShadow(n,E,I,y,j,de,K)}}}else if(X.visible){let P=S(E,X,C,O);E.onBeforeShadow(n,E,I,y,j,P,null),n.renderBufferDirect(y,null,j,P,E,null),E.onAfterShadow(n,E,I,y,j,P,null)}}let k=E.children;for(let j=0,X=k.length;j<X;j++)w(k[j],I,y,C,O)}function A(E){E.target.removeEventListener("dispose",A);for(let y in l){let C=l[y],O=E.target.uuid;O in C&&(C[O].dispose(),delete C[O])}}}function _F(n,e){function t(){let D=!1,re=new Ut,W=null,ve=new Ut(0,0,0,0);return{setMask:function(ae){W!==ae&&!D&&(n.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Z,Ee,Ge,Bt){Bt===!0&&(ae*=Ge,Z*=Ge,Ee*=Ge),re.set(ae,Z,Ee,Ge),ve.equals(re)===!1&&(n.clearColor(ae,Z,Ee,Ge),ve.copy(re))},reset:function(){D=!1,W=null,ve.set(-1,0,0,0)}}}function i(){let D=!1,re=!1,W=null,ve=null,ae=null;return{setReversed:function(Z){if(re!==Z){let Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=Z;let Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return re},setTest:function(Z){Z?se(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Z){W!==Z&&!D&&(n.depthMask(Z),W=Z)},setFunc:function(Z){if(re&&(Z=bS[Z]),ve!==Z){switch(Z){case zd:n.depthFunc(n.NEVER);break;case Hd:n.depthFunc(n.ALWAYS);break;case Gd:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case jd:n.depthFunc(n.EQUAL);break;case Wd:n.depthFunc(n.GEQUAL);break;case $d:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=Z}},setLocked:function(Z){D=Z},setClear:function(Z){ae!==Z&&(ae=Z,re&&(Z=1-Z),n.clearDepth(Z))},reset:function(){D=!1,W=null,ve=null,ae=null,re=!1}}}function r(){let D=!1,re=null,W=null,ve=null,ae=null,Z=null,Ee=null,Ge=null,Bt=null;return{setTest:function(yt){D||(yt?se(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(yt){re!==yt&&!D&&(n.stencilMask(yt),re=yt)},setFunc:function(yt,er,Ti){(W!==yt||ve!==er||ae!==Ti)&&(n.stencilFunc(yt,er,Ti),W=yt,ve=er,ae=Ti)},setOp:function(yt,er,Ti){(Z!==yt||Ee!==er||Ge!==Ti)&&(n.stencilOp(yt,er,Ti),Z=yt,Ee=er,Ge=Ti)},setLocked:function(yt){D=yt},setClear:function(yt){Bt!==yt&&(n.clearStencil(yt),Bt=yt)},reset:function(){D=!1,re=null,W=null,ve=null,ae=null,Z=null,Ee=null,Ge=null,Bt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},d={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,w=null,A=null,E=null,I=null,y=new tt(0,0,0),C=0,O=!1,T=null,k=null,j=null,X=null,P=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=K>=2);let de=null,Se={},Te=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),gt=new Ut().fromArray(Te),$e=new Ut().fromArray(ut);function Y(D,re,W,ve){let ae=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<W;Ee++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(re+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Z}let pe={};pe[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(ks),qt(!1),Nt(av),se(n.CULL_FACE),At(Zi);function se(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Pe(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ve(D,re){return d[D]!==re?(n.bindFramebuffer(D,re),d[D]=re,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Le(D,re){let W=g,ve=!1;if(D){W=h.get(re),W===void 0&&(W=[],h.set(re,W));let ae=D.textures;if(W.length!==ae.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Ee=ae.length;Z<Ee;Z++)W[Z]=n.COLOR_ATTACHMENT0+Z;W.length=ae.length,ve=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ve=!0);ve&&n.drawBuffers(W)}function Rt(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let nt={[qr]:n.FUNC_ADD,[Wb]:n.FUNC_SUBTRACT,[$b]:n.FUNC_REVERSE_SUBTRACT};nt[qb]=n.MIN,nt[Xb]=n.MAX;let vt={[Yb]:n.ZERO,[Zb]:n.ONE,[Jb]:n.SRC_COLOR,[Bd]:n.SRC_ALPHA,[iS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[Qb]:n.DST_ALPHA,[Kb]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[nS]:n.ONE_MINUS_DST_COLOR,[eS]:n.ONE_MINUS_DST_ALPHA,[rS]:n.CONSTANT_COLOR,[sS]:n.ONE_MINUS_CONSTANT_COLOR,[oS]:n.CONSTANT_ALPHA,[aS]:n.ONE_MINUS_CONSTANT_ALPHA};function At(D,re,W,ve,ae,Z,Ee,Ge,Bt,yt){if(D===Zi){m===!0&&(Pe(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),D!==jb){if(D!==p||yt!==O){if((b!==qr||A!==qr)&&(n.blendEquation(n.FUNC_ADD),b=qr,A=qr),yt)switch(D){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.ONE,n.ONE);break;case cv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Oe("WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cv:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lv:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",D);break}S=null,w=null,E=null,I=null,y.set(0,0,0),C=0,p=D,O=yt}return}ae=ae||re,Z=Z||W,Ee=Ee||ve,(re!==b||ae!==A)&&(n.blendEquationSeparate(nt[re],nt[ae]),b=re,A=ae),(W!==S||ve!==w||Z!==E||Ee!==I)&&(n.blendFuncSeparate(vt[W],vt[ve],vt[Z],vt[Ee]),S=W,w=ve,E=Z,I=Ee),(Ge.equals(y)===!1||Bt!==C)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Bt),y.copy(Ge),C=Bt),p=D,O=!1}function et(D,re){D.side===Yi?Pe(n.CULL_FACE):se(n.CULL_FACE);let W=D.side===En;re&&(W=!W),qt(W),D.blending===Fs&&D.transparent===!1?At(Zi):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let ve=D.stencilWrite;a.setTest(ve),ve&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){T!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),T=D)}function Nt(D){D!==zb?(se(n.CULL_FACE),D!==k&&(D===av?n.cullFace(n.BACK):D===Hb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),k=D}function kn(D){D!==j&&(F&&n.lineWidth(D),j=D)}function R(D,re,W){D?(se(n.POLYGON_OFFSET_FILL),(X!==re||P!==W)&&(X=re,P=W,o.getReversed()&&(re=-re),n.polygonOffset(re,W))):Pe(n.POLYGON_OFFSET_FILL)}function Xt(D){D?se(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function it(D){D===void 0&&(D=n.TEXTURE0+H-1),de!==D&&(n.activeTexture(D),de=D)}function Tt(D,re,W){W===void 0&&(de===null?W=n.TEXTURE0+H-1:W=de);let ve=Se[W];ve===void 0&&(ve={type:void 0,texture:void 0},Se[W]=ve),(ve.type!==D||ve.texture!==re)&&(de!==W&&(n.activeTexture(W),de=W),n.bindTexture(D,re||pe[D]),ve.type=D,ve.texture=re)}function le(){let D=Se[de];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ot(){try{n.compressedTexImage2D(...arguments)}catch(D){Oe("WebGLState:",D)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(D){Oe("WebGLState:",D)}}function v(){try{n.texSubImage2D(...arguments)}catch(D){Oe("WebGLState:",D)}}function L(){try{n.texSubImage3D(...arguments)}catch(D){Oe("WebGLState:",D)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Oe("WebGLState:",D)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Oe("WebGLState:",D)}}function ne(){try{n.texStorage2D(...arguments)}catch(D){Oe("WebGLState:",D)}}function ce(){try{n.texStorage3D(...arguments)}catch(D){Oe("WebGLState:",D)}}function G(){try{n.texImage2D(...arguments)}catch(D){Oe("WebGLState:",D)}}function q(){try{n.texImage3D(...arguments)}catch(D){Oe("WebGLState:",D)}}function me(D){return f[D]!==void 0?f[D]:n.getParameter(D)}function xe(D,re){f[D]!==re&&(n.pixelStorei(D,re),f[D]=re)}function oe(D){gt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function ie(D){$e.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Ue(D,re){let W=l.get(re);W===void 0&&(W=new WeakMap,l.set(re,W));let ve=W.get(D);ve===void 0&&(ve=n.getUniformBlockIndex(re,D.name),W.set(D,ve))}function qe(D,re){let ve=l.get(re).get(D);c.get(re)!==ve&&(n.uniformBlockBinding(re,ve,D.__bindingPointIndex),c.set(re,ve))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},de=null,Se={},d={},h=new WeakMap,g=[],x=null,m=!1,p=null,b=null,S=null,w=null,A=null,E=null,I=null,y=new tt(0,0,0),C=0,O=!1,T=null,k=null,j=null,X=null,P=null,gt.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Pe,bindFramebuffer:Ve,drawBuffers:Le,useProgram:Rt,setBlending:At,setMaterial:et,setFlipSided:qt,setCullFace:Nt,setLineWidth:kn,setPolygonOffset:R,setScissorTest:Xt,activeTexture:it,bindTexture:Tt,unbindTexture:le,compressedTexImage2D:Ot,compressedTexImage3D:M,texImage2D:G,texImage3D:q,pixelStorei:xe,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:qe,texStorage2D:ne,texStorage3D:ce,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:oe,viewport:ie,reset:ft}}function xF(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,u=new WeakMap,f=new Set,d,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,v){return g?new OffscreenCanvas(M,v):wc("canvas")}function m(M,v,L){let $=1,J=Ot(M);if((J.width>L||J.height>L)&&($=L/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ne=Math.floor($*J.width),ce=Math.floor($*J.height);d===void 0&&(d=x(ne,ce));let G=v?x(ne,ce):d;return G.width=ne,G.height=ce,G.getContext("2d").drawImage(M,0,0,ne,ce),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ne+"x"+ce+")."),G}else return"data"in M&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function p(M){return M.generateMipmaps}function b(M){n.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(M,v,L,$,J,ne=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce;$&&(ce=e.get("EXT_texture_norm16"),ce||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=v;if(v===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8),L===n.UNSIGNED_SHORT&&ce&&(G=ce.R16_EXT),L===n.SHORT&&ce&&(G=ce.R16_SNORM_EXT)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),v===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8),L===n.UNSIGNED_SHORT&&ce&&(G=ce.RG16_EXT),L===n.SHORT&&ce&&(G=ce.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),v===n.RGB&&(L===n.UNSIGNED_SHORT&&ce&&(G=ce.RGB16_EXT),L===n.SHORT&&ce&&(G=ce.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),v===n.RGBA){let q=ne?bc:st.getTransfer(J);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=q===pt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&ce&&(G=ce.RGBA16_EXT),L===n.SHORT&&ce&&(G=ce.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function A(M,v){let L;return M?v===null||v===Ei||v===ca?L=n.DEPTH24_STENCIL8:v===Ci?L=n.DEPTH32F_STENCIL8:v===aa&&(L=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===ca?L=n.DEPTH_COMPONENT24:v===Ci?L=n.DEPTH_COMPONENT32F:v===aa&&(L=n.DEPTH_COMPONENT16),L}function E(M,v){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==cn&&M.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function I(M){let v=M.target;v.removeEventListener("dispose",I),C(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function y(M){let v=M.target;v.removeEventListener("dispose",y),T(v)}function C(M){let v=i.get(M);if(v.__webglInit===void 0)return;let L=M.source,$=h.get(L);if($){let J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(M),Object.keys($).length===0&&h.delete(L)}i.remove(M)}function O(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let L=M.source,$=h.get(L);delete $[v.__cacheKey],o.memory.textures--}function T(M){let v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[$][J]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=M.textures;for(let $=0,J=L.length;$<J;$++){let ne=i.get(L[$]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(M)}let k=0;function j(){k=0}function X(){return k}function P(M){k=M}function H(){let M=k;return M>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),k+=1,M}function F(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function K(M,v){let L=i.get(M);if(M.isVideoTexture&&Tt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){let $=M.image;if($===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(L,M,v);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function ee(M,v){let L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){Pe(L,M,v);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function de(M,v){let L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){Pe(L,M,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function Se(M,v){let L=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){Ve(L,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let Te={[Xd]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},ut={[cn]:n.NEAREST,[uS]:n.NEAREST_MIPMAP_NEAREST,[jc]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Mf]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},gt={[hS]:n.NEVER,[yS]:n.ALWAYS,[pS]:n.LESS,[rh]:n.LEQUAL,[mS]:n.EQUAL,[sh]:n.GEQUAL,[gS]:n.GREATER,[vS]:n.NOTEQUAL};function $e(M,v){if(v.type===Ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===Mf||v.magFilter===jc||v.magFilter===es||v.minFilter===hn||v.minFilter===Mf||v.minFilter===jc||v.minFilter===es)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Te[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Te[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Te[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==jc&&v.minFilter!==es||v.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(M,v){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",I));let $=v.source,J=h.get($);J===void 0&&(J={},h.set($,J));let ne=F(v);if(ne!==M.__cacheKey){J[ne]===void 0&&(J[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[ne].usedTimes++;let ce=J[M.__cacheKey];ce!==void 0&&(J[M.__cacheKey].usedTimes--,ce.usedTimes===0&&O(v)),M.__cacheKey=ne,M.__webglTexture=J[ne].texture}return L}function pe(M,v,L){return Math.floor(Math.floor(M/L)/v)}function se(M,v,L,$){let ne=M.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,L,$,v.data);else{ne.sort((xe,oe)=>xe.start-oe.start);let ce=0;for(let xe=1;xe<ne.length;xe++){let oe=ne[ce],ie=ne[xe],Ue=oe.start+oe.count,qe=pe(ie.start,v.width,4),ft=pe(oe.start,v.width,4);ie.start<=Ue+1&&qe===ft&&pe(ie.start+ie.count-1,v.width,4)===qe?oe.count=Math.max(oe.count,ie.start+ie.count-oe.start):(++ce,ne[ce]=ie)}ne.length=ce+1;let G=t.getParameter(n.UNPACK_ROW_LENGTH),q=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let xe=0,oe=ne.length;xe<oe;xe++){let ie=ne[xe],Ue=Math.floor(ie.start/4),qe=Math.ceil(ie.count/4),ft=Ue%v.width,D=Math.floor(Ue/v.width),re=qe,W=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ft,D,re,W,L,$,v.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,G),t.pixelStorei(n.UNPACK_SKIP_PIXELS,q),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Pe(M,v,L){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let J=Y(M,v),ne=v.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+L);let ce=i.get(ne);if(ne.version!==ce.__version||J===!0){if(t.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let W=st.getPrimaries(st.workingColorSpace),ve=v.colorSpace===xr?null:st.getPrimaries(v.colorSpace),ae=v.colorSpace===xr||W===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let q=m(v.image,!1,r.maxTextureSize);q=le(v,q);let me=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),oe=w(v.internalFormat,me,xe,v.normalized,v.colorSpace,v.isVideoTexture);$e($,v);let ie,Ue=v.mipmaps,qe=v.isVideoTexture!==!0,ft=ce.__version===void 0||J===!0,D=ne.dataReady,re=E(v,q);if(v.isDepthTexture)oe=A(v.format===ts,v.type),ft&&(qe?t.texStorage2D(n.TEXTURE_2D,1,oe,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,oe,q.width,q.height,0,me,xe,null));else if(v.isDataTexture)if(Ue.length>0){qe&&ft&&t.texStorage2D(n.TEXTURE_2D,re,oe,Ue[0].width,Ue[0].height);for(let W=0,ve=Ue.length;W<ve;W++)ie=Ue[W],qe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(n.TEXTURE_2D,W,oe,ie.width,ie.height,0,me,xe,ie.data);v.generateMipmaps=!1}else qe?(ft&&t.texStorage2D(n.TEXTURE_2D,re,oe,q.width,q.height),D&&se(v,q,me,xe)):t.texImage2D(n.TEXTURE_2D,0,oe,q.width,q.height,0,me,xe,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,oe,Ue[0].width,Ue[0].height,q.depth);for(let W=0,ve=Ue.length;W<ve;W++)if(ie=Ue[W],v.format!==oi)if(me!==null)if(qe){if(D)if(v.layerUpdates.size>0){let ae=Rv(ie.width,ie.height,v.format,v.type);for(let Z of v.layerUpdates){let Ee=ie.data.subarray(Z*ae/ie.data.BYTES_PER_ELEMENT,(Z+1)*ae/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,Z,ie.width,ie.height,1,me,Ee)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,q.depth,me,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,oe,ie.width,ie.height,q.depth,0,ie.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,q.depth,me,xe,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,oe,ie.width,ie.height,q.depth,0,me,xe,ie.data)}else{qe&&ft&&t.texStorage2D(n.TEXTURE_2D,re,oe,Ue[0].width,Ue[0].height);for(let W=0,ve=Ue.length;W<ve;W++)ie=Ue[W],v.format!==oi?me!==null?qe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,me,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,W,oe,ie.width,ie.height,0,ie.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(n.TEXTURE_2D,W,oe,ie.width,ie.height,0,me,xe,ie.data)}else if(v.isDataArrayTexture)if(qe){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,oe,q.width,q.height,q.depth),D)if(v.layerUpdates.size>0){let W=Rv(q.width,q.height,v.format,v.type);for(let ve of v.layerUpdates){let ae=q.data.subarray(ve*W/q.data.BYTES_PER_ELEMENT,(ve+1)*W/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,q.width,q.height,1,me,xe,ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,me,xe,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,q.width,q.height,q.depth,0,me,xe,q.data);else if(v.isData3DTexture)qe?(ft&&t.texStorage3D(n.TEXTURE_3D,re,oe,q.width,q.height,q.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,me,xe,q.data)):t.texImage3D(n.TEXTURE_3D,0,oe,q.width,q.height,q.depth,0,me,xe,q.data);else if(v.isFramebufferTexture){if(ft)if(qe)t.texStorage2D(n.TEXTURE_2D,re,oe,q.width,q.height);else{let W=q.width,ve=q.height;for(let ae=0;ae<re;ae++)t.texImage2D(n.TEXTURE_2D,ae,oe,W,ve,0,me,xe,null),W>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let W=n.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),q.parentNode!==W){W.appendChild(q),f.add(v),W.onpaint=Ge=>{let Bt=Ge.changedElements;for(let yt of f)Bt.includes(yt.image)&&(yt.needsUpdate=!0)},W.requestPaint();return}let ve=0,ae=n.RGBA,Z=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ve,ae,Z,Ee,q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(qe&&ft){let W=Ot(Ue[0]);t.texStorage2D(n.TEXTURE_2D,re,oe,W.width,W.height)}for(let W=0,ve=Ue.length;W<ve;W++)ie=Ue[W],qe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me,xe,ie):t.texImage2D(n.TEXTURE_2D,W,oe,me,xe,ie);v.generateMipmaps=!1}else if(qe){if(ft){let W=Ot(q);t.texStorage2D(n.TEXTURE_2D,re,oe,W.width,W.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,xe,q)}else t.texImage2D(n.TEXTURE_2D,0,oe,me,xe,q);p(v)&&b($),ce.__version=ne.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ve(M,v,L){if(v.image.length!==6)return;let $=Y(M,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);let ne=i.get(J);if(J.version!==ne.__version||$===!0){t.activeTexture(n.TEXTURE0+L);let ce=st.getPrimaries(st.workingColorSpace),G=v.colorSpace===xr?null:st.getPrimaries(v.colorSpace),q=v.colorSpace===xr||ce===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,xe=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!me&&!xe?oe[Z]=m(v.image[Z],!0,r.maxCubemapSize):oe[Z]=xe?v.image[Z].image:v.image[Z],oe[Z]=le(v,oe[Z]);let ie=oe[0],Ue=s.convert(v.format,v.colorSpace),qe=s.convert(v.type),ft=w(v.internalFormat,Ue,qe,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,re=ne.__version===void 0||$===!0,W=J.dataReady,ve=E(v,ie);$e(n.TEXTURE_CUBE_MAP,v);let ae;if(me){D&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ft,ie.width,ie.height);for(let Z=0;Z<6;Z++){ae=oe[Z].mipmaps;for(let Ee=0;Ee<ae.length;Ee++){let Ge=ae[Ee];v.format!==oi?Ue!==null?D?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ge.width,Ge.height,Ue,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,ft,Ge.width,Ge.height,0,Ge.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ge.width,Ge.height,Ue,qe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,ft,Ge.width,Ge.height,0,Ue,qe,Ge.data)}}}else{if(ae=v.mipmaps,D&&re){ae.length>0&&ve++;let Z=Ot(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ft,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(xe){D?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Ue,qe,oe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ft,oe[Z].width,oe[Z].height,0,Ue,qe,oe[Z].data);for(let Ee=0;Ee<ae.length;Ee++){let Bt=ae[Ee].image[Z].image;D?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Bt.width,Bt.height,Ue,qe,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,ft,Bt.width,Bt.height,0,Ue,qe,Bt.data)}}else{D?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ue,qe,oe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ft,Ue,qe,oe[Z]);for(let Ee=0;Ee<ae.length;Ee++){let Ge=ae[Ee];D?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Ue,qe,Ge.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,ft,Ue,qe,Ge.image[Z])}}}p(v)&&b(n.TEXTURE_CUBE_MAP),ne.__version=J.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Le(M,v,L,$,J,ne){let ce=s.convert(L.format,L.colorSpace),G=s.convert(L.type),q=w(L.internalFormat,ce,G,L.normalized,L.colorSpace),me=i.get(v),xe=i.get(L);if(xe.__renderTarget=v,!me.__hasExternalTextures){let oe=Math.max(1,v.width>>ne),ie=Math.max(1,v.height>>ne);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,q,oe,ie,v.depth,0,ce,G,null):t.texImage2D(J,ne,q,oe,ie,0,ce,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),it(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,xe.__webglTexture,0,Xt(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,xe.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(M,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,ne=A(v.stencilBuffer,J),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(v),ne,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(v),ne,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,M)}else{let $=v.textures;for(let J=0;J<$.length;J++){let ne=$[J],ce=s.convert(ne.format,ne.colorSpace),G=s.convert(ne.type),q=w(ne.internalFormat,ce,G,ne.normalized,ne.colorSpace);it(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(v),q,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(v),q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(M,v,L){let $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),$e(n.TEXTURE_CUBE_MAP,v.depthTexture);let me=s.convert(v.depthTexture.format),xe=s.convert(v.depthTexture.type),oe;v.depthTexture.format===$i?oe=n.DEPTH_COMPONENT24:v.depthTexture.format===ts&&(oe=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,oe,v.width,v.height,0,me,xe,null)}}else K(v.depthTexture,0);let ne=J.__webglTexture,ce=Xt(v),G=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,q=v.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===$i)it(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,G,ne,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,q,G,ne,0);else if(v.depthTexture.format===ts)it(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,G,ne,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,q,G,ne,0);else throw new Error("Unknown depthTexture format")}function vt(M){let v=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let $=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(M.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)nt(v.__webglFramebuffer[$],M,$);else{let $=M.texture.mipmaps;$&&$.length>0?nt(v.__webglFramebuffer[0],M,0):nt(v.__webglFramebuffer,M,0)}else if(L){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Rt(v.__webglDepthbuffer[$],M,!1);else{let J=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ne)}}else{let $=M.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Rt(v.__webglDepthbuffer,M,!1);else{let J=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function At(M,v,L){let $=i.get(M);v!==void 0&&Le($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&vt(M)}function et(M){let v=M.texture,L=i.get(M),$=i.get(v);M.addEventListener("dispose",y);let J=M.textures,ne=M.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),ne){L.__webglFramebuffer=[];for(let G=0;G<6;G++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[G]=[];for(let q=0;q<v.mipmaps.length;q++)L.__webglFramebuffer[G][q]=n.createFramebuffer()}else L.__webglFramebuffer[G]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let G=0;G<v.mipmaps.length;G++)L.__webglFramebuffer[G]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ce)for(let G=0,q=J.length;G<q;G++){let me=i.get(J[G]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&it(M)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let G=0;G<J.length;G++){let q=J[G];L.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[G]);let me=s.convert(q.format,q.colorSpace),xe=s.convert(q.type),oe=w(q.internalFormat,me,xe,q.normalized,q.colorSpace,M.isXRRenderTarget===!0),ie=Xt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,oe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,L.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),$e(n.TEXTURE_CUBE_MAP,v);for(let G=0;G<6;G++)if(v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Le(L.__webglFramebuffer[G][q],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,q);else Le(L.__webglFramebuffer[G],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);p(v)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let G=0,q=J.length;G<q;G++){let me=J[G],xe=i.get(me),oe=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,xe.__webglTexture),$e(oe,me),Le(L.__webglFramebuffer,M,me,n.COLOR_ATTACHMENT0+G,oe,0),p(me)&&b(oe)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(G=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(G,$.__webglTexture),$e(G,v),v.mipmaps&&v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)Le(L.__webglFramebuffer[q],M,v,n.COLOR_ATTACHMENT0,G,q);else Le(L.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,G,0);p(v)&&b(G),t.unbindTexture()}M.depthBuffer&&vt(M)}function qt(M){let v=M.textures;for(let L=0,$=v.length;L<$;L++){let J=v[L];if(p(J)){let ne=S(M),ce=i.get(J).__webglTexture;t.bindTexture(ne,ce),b(ne),t.unbindTexture()}}}let Nt=[],kn=[];function R(M){if(M.samples>0){if(it(M)===!1){let v=M.textures,L=M.width,$=M.height,J=n.COLOR_BUFFER_BIT,ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(M),G=v.length>1;if(G)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let q=M.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<v.length;me++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),G){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);let xe=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,J,n.NEAREST),c===!0&&(Nt.length=0,kn.length=0,Nt.push(n.COLOR_ATTACHMENT0+me),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Nt.push(ne),kn.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);let xe=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Xt(M){return Math.min(r.maxSamples,M.samples)}function it(M){let v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(M){let v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function le(M,v){let L=M.colorSpace,$=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Mc&&L!==xr&&(st.getTransfer(L)===pt?($!==oi||J!==Yn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",L)),v}function Ot(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.getTextureUnits=X,this.setTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=de,this.setTextureCube=Se,this.rebindTextures=At,this.setupRenderTarget=et,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function MF(n,e){function t(i,r=xr){let s,o=st.getTransfer(r);if(i===Yn)return n.UNSIGNED_BYTE;if(i===Sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yv)return n.BYTE;if(i===_v)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===bf)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===bv)return n.ALPHA;if(i===Sv)return n.RGB;if(i===oi)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===wv)return n.RED;if(i===Ef)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===Cf)return n.RG_INTEGER;if(i===Tf)return n.RGBA_INTEGER;if(i===Wc||i===$c||i===qc||i===Xc)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Df||i===If||i===Af||i===Rf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Pf||i===Of||i===Lf||i===Ff||i===Yc||i===kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nf||i===Pf)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Of)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lf)return s.COMPRESSED_R11_EAC;if(i===Ff)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Yc)return s.COMPRESSED_RG11_EAC;if(i===kf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uf||i===Bf||i===Vf||i===zf||i===Hf||i===Gf||i===jf||i===Wf||i===$f||i===qf||i===Xf||i===Yf||i===Zf||i===Jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$f)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kf||i===Qf||i===eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kf)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===Zc||i===ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===th)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var bF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qn({vertexShader:bF,fragmentShader:SF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new kc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$v=class extends qi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new Wv,p={},b=t.getContextAttributes(),S=null,w=null,A=[],E=[],I=new mt,y=null,C=new _n;C.viewport=new Ut;let O=new _n;O.viewport=new Ut;let T=[C,O],k=new vf,j=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=A[Y];return pe===void 0&&(pe=new ia,A[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=A[Y];return pe===void 0&&(pe=new ia,A[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=A[Y];return pe===void 0&&(pe=new ia,A[Y]=pe),pe.getHandSpace()};function P(Y){let pe=E.indexOf(Y.inputSource);if(pe===-1)return;let se=A[pe];se!==void 0&&(se.update(Y.inputSource,Y.frame,l||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let Y=0;Y<A.length;Y++){let pe=E[Y];pe!==null&&(E[Y]=null,A[Y].disconnect(pe))}j=null,X=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(S),h=null,d=null,f=null,r=null,w=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Y){return js(this,null,function*(){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&(yield t.makeXRCompatible()),y=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Pe=null,Ve=null;b.depth&&(Ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?ts:$i,Pe=b.stencil?ca:Ei);let Le={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Wn(d.textureWidth,d.textureHeight,{format:oi,type:Yn,depthTexture:new _r(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Wn(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Y){for(let pe=0;pe<Y.removed.length;pe++){let se=Y.removed[pe],Pe=E.indexOf(se);Pe>=0&&(E[Pe]=null,A[Pe].disconnect(se))}for(let pe=0;pe<Y.added.length;pe++){let se=Y.added[pe],Pe=E.indexOf(se);if(Pe===-1){for(let Le=0;Le<A.length;Le++)if(Le>=E.length){E.push(se),Pe=Le;break}else if(E[Le]===null){E[Le]=se,Pe=Le;break}if(Pe===-1)break}let Ve=A[Pe];Ve&&Ve.connect(se)}}let K=new V,ee=new V;function de(Y,pe,se){K.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);let Pe=K.distanceTo(ee),Ve=pe.projectionMatrix.elements,Le=se.projectionMatrix.elements,Rt=Ve[14]/(Ve[10]-1),nt=Ve[14]/(Ve[10]+1),vt=(Ve[9]+1)/Ve[5],At=(Ve[9]-1)/Ve[5],et=(Ve[8]-1)/Ve[0],qt=(Le[8]+1)/Le[0],Nt=Rt*et,kn=Rt*qt,R=Pe/(-et+qt),Xt=R*-et;if(pe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(R),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ve[10]===-1)Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let it=Rt+R,Tt=nt+R,le=Nt-Xt,Ot=kn+(Pe-Xt),M=vt*nt/Tt*it,v=At*nt/Tt*it;Y.projectionMatrix.makePerspective(le,Ot,M,v,it,Tt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Se(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let pe=Y.near,se=Y.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(se=m.depthFar)),k.near=O.near=C.near=pe,k.far=O.far=C.far=se,(j!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,X=k.far),k.layers.mask=Y.layers.mask|6,C.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let Pe=Y.parent,Ve=k.cameras;Se(k,Pe);for(let Le=0;Le<Ve.length;Le++)Se(Ve[Le],Pe);Ve.length===2?de(k,C,O):k.projectionMatrix.copy(C.projectionMatrix),Te(Y,k,Pe)};function Te(Y,pe,se){se===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return p[Y]};let ut=null;function gt(Y,pe){if(u=pe.getViewerPose(l||o),g=pe,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let Pe=!1;se.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let nt=0;nt<se.length;nt++){let vt=se[nt],At=null;if(h!==null)At=h.getViewport(vt);else{let qt=f.getViewSubImage(d,vt);At=qt.viewport,nt===0&&(e.setRenderTargetTextures(w,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(w))}let et=T[nt];et===void 0&&(et=new _n,et.layers.enable(nt),et.viewport=new Ut,T[nt]=et),et.matrix.fromArray(vt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(vt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(At.x,At.y,At.width,At.height),nt===0&&(k.matrix.copy(et.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(et)}let Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let nt=f.getDepthInformation(se[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,r.renderState)}if(Ve&&Ve.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let nt=0;nt<se.length;nt++){let vt=se[nt].camera;if(vt){let At=p[vt];At||(At=new Fc,p[vt]=At);let et=f.getCameraImage(vt);At.sourceTexture=et}}}}for(let se=0;se<A.length;se++){let Pe=E[se],Ve=A[se];Pe!==null&&Ve!==void 0&&Ve.update(Pe,pe,l||o)}ut&&ut(Y,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}let $e=new qS;$e.setAnimationLoop(gt),this.setAnimationLoop=function(Y){ut=Y},this.dispose=function(){}}},wF=new Gt,QS=new Be;QS.set(-1,0,0,0,1,0,0,0,1);function EF(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,w=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(wF.makeRotationFromEuler(w)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(QS),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CF(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let w=S.program;i.uniformBlockBinding(b,w)}function l(b,S){let w=r[b.id];w===void 0&&(g(b),w=u(b),r[b.id]=w,b.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(b,A);let E=e.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function u(b){let S=f();b.__bindingPointIndex=S;let w=n.createBuffer(),A=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=r[b.id],w=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,I=w.length;E<I;E++){let y=Array.isArray(w[E])?w[E]:[w[E]];for(let C=0,O=y.length;C<O;C++){let T=y[C];if(h(T,E,C,A)===!0){let k=T.__offset,j=Array.isArray(T.value)?T.value:[T.value],X=0;for(let P=0;P<j.length;P++){let H=j[P],F=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+X,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):ArrayBuffer.isView(H)?T.__data.set(new H.constructor(H.buffer,H.byteOffset,T.__data.length)):(H.toArray(T.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,S,w,A){let E=b.value,I=S+"_"+w;if(A[I]===void 0)return typeof E=="number"||typeof E=="boolean"?A[I]=E:ArrayBuffer.isView(E)?A[I]=E.slice():A[I]=E.clone(),!0;{let y=A[I];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return A[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function g(b){let S=b.uniforms,w=0,A=16;for(let I=0,y=S.length;I<y;I++){let C=Array.isArray(S[I])?S[I]:[S[I]];for(let O=0,T=C.length;O<T;O++){let k=C[O],j=Array.isArray(k.value)?k.value:[k.value];for(let X=0,P=j.length;X<P;X++){let H=j[X],F=x(H),K=w%A,ee=K%F.boundary,de=K+ee;w+=ee,de!==0&&A-de<F.storage&&(w+=A-de),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=F.storage}}}let E=w%A;return E>0&&(w+=A-E),b.__size=w,b.__cache={},this}function x(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var TF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function DF(){return Ki===null&&(Ki=new nf(TF,16,16,ns,Ji),Ki.name="DFG_LUT",Ki.minFilter=hn,Ki.magFilter=hn,Ki.wrapS=Wi,Ki.wrapT=Wi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var uh=class{constructor(e={}){let{canvas:t=_S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=h,m=new Set([Tf,Cf,Ef]),p=new Set([Yn,Ei,aa,ca,Sf,wf]),b=new Uint32Array(4),S=new Int32Array(4),w=new V,A=null,E=null,I=[],y=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,T=!1,k=null;this._outputColorSpace=jn;let j=0,X=0,P=null,H=-1,F=null,K=new Ut,ee=new Ut,de=null,Se=new tt(0),Te=0,ut=t.width,gt=t.height,$e=1,Y=null,pe=null,se=new Ut(0,0,ut,gt),Pe=new Ut(0,0,ut,gt),Ve=!1,Le=new Pc,Rt=!1,nt=!1,vt=new Gt,At=new V,et=new Ut,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function kn(){return P===null?$e:1}let R=i;function Xt(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yf}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),R===null){let N="webgl2";if(R=Xt(N,_),R===null)throw Xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Oe("WebGLRenderer: "+_.message),_}let it,Tt,le,Ot,M,v,L,$,J,ne,ce,G,q,me,xe,oe,ie,Ue,qe,ft,D,re,W;function ve(){it=new LO(R),it.init(),D=new MF(R,it),Tt=new TO(R,it,e,D),le=new _F(R,it),Tt.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Ot=new UO(R),M=new sF,v=new xF(R,it,le,M,Tt,D,Ot),L=new OO(O),$=new HR(R),re=new EO(R,$),J=new FO(R,$,Ot,re),ne=new VO(R,J,$,re,Ot),Ue=new BO(R,Tt,v),xe=new DO(M),ce=new rF(O,L,it,Tt,re,xe),G=new EF(O,M),q=new aF,me=new hF(it),ie=new wO(O,L,le,ne,g,c),oe=new yF(O,ne,Tt),W=new CF(R,Ot,Tt,le),qe=new CO(R,it,Ot),ft=new kO(R,it,Ot),Ot.programs=ce.programs,O.capabilities=Tt,O.extensions=it,O.properties=M,O.renderLists=q,O.shadowMap=oe,O.state=le,O.info=Ot}ve(),x!==Yn&&(C=new HO(x,t.width,t.height,r,s));let ae=new $v(O,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let _=it.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=it.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return $e},this.setPixelRatio=function(_){_!==void 0&&($e=_,this.setSize(ut,gt,!1))},this.getSize=function(_){return _.set(ut,gt)},this.setSize=function(_,N,z=!0){if(ae.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=_,gt=N,t.width=Math.floor(_*$e),t.height=Math.floor(N*$e),z===!0&&(t.style.width=_+"px",t.style.height=N+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(ut*$e,gt*$e).floor()},this.setDrawingBufferSize=function(_,N,z){ut=_,gt=N,$e=z,t.width=Math.floor(_*z),t.height=Math.floor(N*z),this.setViewport(0,0,_,N)},this.setEffects=function(_){if(x===Yn){Oe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let N=0;N<_.length;N++)if(_[N].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(K)},this.getViewport=function(_){return _.copy(se)},this.setViewport=function(_,N,z,U){_.isVector4?se.set(_.x,_.y,_.z,_.w):se.set(_,N,z,U),le.viewport(K.copy(se).multiplyScalar($e).round())},this.getScissor=function(_){return _.copy(Pe)},this.setScissor=function(_,N,z,U){_.isVector4?Pe.set(_.x,_.y,_.z,_.w):Pe.set(_,N,z,U),le.scissor(ee.copy(Pe).multiplyScalar($e).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(_){le.setScissorTest(Ve=_)},this.setOpaqueSort=function(_){Y=_},this.setTransparentSort=function(_){pe=_},this.getClearColor=function(_){return _.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,z=!0){let U=0;if(_){let B=!1;if(P!==null){let he=P.texture.format;B=m.has(he)}if(B){let he=P.texture.type,Me=p.has(he),fe=ie.getClearColor(),we=ie.getClearAlpha(),Ce=fe.r,je=fe.g,Ze=fe.b;Me?(b[0]=Ce,b[1]=je,b[2]=Ze,b[3]=we,R.clearBufferuiv(R.COLOR,0,b)):(S[0]=Ce,S[1]=je,S[2]=Ze,S[3]=we,R.clearBufferiv(R.COLOR,0,S))}else U|=R.COLOR_BUFFER_BIT}N&&(U|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(U|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&R.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),k=_},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),ie.dispose(),q.dispose(),me.dispose(),M.dispose(),L.dispose(),ne.dispose(),re.dispose(),W.dispose(),ce.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",qv),ae.removeEventListener("sessionend",Xv),ss.stop()};function Z(_){_.preventDefault(),Tv("WebGLRenderer: Context Lost."),T=!0}function Ee(){Tv("WebGLRenderer: Context Restored."),T=!1;let _=Ot.autoReset,N=oe.enabled,z=oe.autoUpdate,U=oe.needsUpdate,B=oe.type;ve(),Ot.autoReset=_,oe.enabled=N,oe.autoUpdate=z,oe.needsUpdate=U,oe.type=B}function Ge(_){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Bt(_){let N=_.target;N.removeEventListener("dispose",Bt),yt(N)}function yt(_){er(_),M.remove(_)}function er(_){let N=M.get(_).programs;N!==void 0&&(N.forEach(function(z){ce.releaseProgram(z)}),_.isShaderMaterial&&ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,z,U,B,he){N===null&&(N=qt);let Me=B.isMesh&&B.matrixWorld.determinant()<0,fe=nw(_,N,z,U,B);le.setMaterial(U,Me);let we=z.index,Ce=1;if(U.wireframe===!0){if(we=J.getWireframeAttribute(z),we===void 0)return;Ce=2}let je=z.drawRange,Ze=z.attributes.position,De=je.start*Ce,_t=(je.start+je.count)*Ce;he!==null&&(De=Math.max(De,he.start*Ce),_t=Math.min(_t,(he.start+he.count)*Ce)),we!==null?(De=Math.max(De,0),_t=Math.min(_t,we.count)):Ze!=null&&(De=Math.max(De,0),_t=Math.min(_t,Ze.count));let Vt=_t-De;if(Vt<0||Vt===1/0)return;re.setup(B,U,fe,z,we);let Lt,St=qe;if(we!==null&&(Lt=$.get(we),St=ft,St.setIndex(Lt)),B.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*kn()),St.setMode(R.LINES)):St.setMode(R.TRIANGLES);else if(B.isLine){let pn=U.linewidth;pn===void 0&&(pn=1),le.setLineWidth(pn*kn()),B.isLineSegments?St.setMode(R.LINES):B.isLineLoop?St.setMode(R.LINE_LOOP):St.setMode(R.LINE_STRIP)}else B.isPoints?St.setMode(R.POINTS):B.isSprite&&St.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(it.get("WEBGL_multi_draw"))St.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let pn=B._multiDrawStarts,ye=B._multiDrawCounts,Un=B._multiDrawCount,dt=we?$.get(we).bytesPerElement:1,Zn=M.get(U).currentProgram.getUniforms();for(let Di=0;Di<Un;Di++)Zn.setValue(R,"_gl_DrawID",Di),St.render(pn[Di]/dt,ye[Di])}else if(B.isInstancedMesh)St.renderInstances(De,Vt,B.count);else if(z.isInstancedBufferGeometry){let pn=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ye=Math.min(z.instanceCount,pn);St.renderInstances(De,Vt,ye)}else St.render(De,Vt)};function Ti(_,N,z){_.transparent===!0&&_.side===Yi&&_.forceSinglePass===!1?(_.side=En,_.needsUpdate=!0,nl(_,N,z),_.side=yr,_.needsUpdate=!0,nl(_,N,z),_.side=Yi):nl(_,N,z)}this.compile=function(_,N,z=null){z===null&&(z=_),E=me.get(z),E.init(N),y.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),_!==z&&_.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();let U=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let he=B.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){let fe=he[Me];Ti(fe,z,B),U.add(fe)}else Ti(he,z,B),U.add(he)}),E=y.pop(),U},this.compileAsync=function(_,N,z=null){let U=this.compile(_,N,z);return new Promise(B=>{function he(){if(U.forEach(function(Me){M.get(Me).currentProgram.isReady()&&U.delete(Me)}),U.size===0){B(_);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let mh=null;function ew(_){mh&&mh(_)}function qv(){ss.stop()}function Xv(){ss.start()}let ss=new qS;ss.setAnimationLoop(ew),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(_){mh=_,ae.setAnimationLoop(_),_===null?ss.stop():ss.start()},ae.addEventListener("sessionstart",qv),ae.addEventListener("sessionend",Xv),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;k!==null&&k.renderStart(_,N);let z=ae.enabled===!0&&ae.isPresenting===!0,U=C!==null&&(P===null||z)&&C.begin(O,P);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),_.isScene===!0&&_.onBeforeRender(O,_,N,P),E=me.get(_,y.length),E.init(N),E.state.textureUnits=v.getTextureUnits(),y.push(E),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(vt,Si,N.reversedDepth),nt=this.localClippingEnabled,Rt=xe.init(this.clippingPlanes,nt),A=q.get(_,I.length),A.init(),I.push(A),ae.enabled===!0&&ae.isPresenting===!0){let Me=O.xr.getDepthSensingMesh();Me!==null&&gh(Me,N,-1/0,O.sortObjects)}gh(_,N,0,O.sortObjects),A.finish(),O.sortObjects===!0&&A.sort(Y,pe),Nt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Nt&&ie.addToRenderList(A,_),this.info.render.frame++,Rt===!0&&xe.beginShadows();let B=E.state.shadowsArray;if(oe.render(B,_,N),Rt===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&C.hasRenderPass())===!1){let Me=A.opaque,fe=A.transmissive;if(E.setupLights(),N.isArrayCamera){let we=N.cameras;if(fe.length>0)for(let Ce=0,je=we.length;Ce<je;Ce++){let Ze=we[Ce];Zv(Me,fe,_,Ze)}Nt&&ie.render(_);for(let Ce=0,je=we.length;Ce<je;Ce++){let Ze=we[Ce];Yv(A,_,Ze,Ze.viewport)}}else fe.length>0&&Zv(Me,fe,_,N),Nt&&ie.render(_),Yv(A,_,N)}P!==null&&X===0&&(v.updateMultisampleRenderTarget(P),v.updateRenderTargetMipmap(P)),U&&C.end(O),_.isScene===!0&&_.onAfterRender(O,_,N),re.resetDefaultState(),H=-1,F=null,y.pop(),y.length>0?(E=y[y.length-1],v.setTextureUnits(E.state.textureUnits),Rt===!0&&xe.setGlobalState(O.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?A=I[I.length-1]:A=null,k!==null&&k.renderEnd()};function gh(_,N,z,U){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLightProbeGrid)E.pushLightProbeGrid(_);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Le.intersectsSprite(_)){U&&et.setFromMatrixPosition(_.matrixWorld).applyMatrix4(vt);let Me=ne.update(_),fe=_.material;fe.visible&&A.push(_,Me,fe,z,et.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Le.intersectsObject(_))){let Me=ne.update(_),fe=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),et.copy(_.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),et.copy(Me.boundingSphere.center)),et.applyMatrix4(_.matrixWorld).applyMatrix4(vt)),Array.isArray(fe)){let we=Me.groups;for(let Ce=0,je=we.length;Ce<je;Ce++){let Ze=we[Ce],De=fe[Ze.materialIndex];De&&De.visible&&A.push(_,Me,De,z,et.z,Ze)}}else fe.visible&&A.push(_,Me,fe,z,et.z,null)}}let he=_.children;for(let Me=0,fe=he.length;Me<fe;Me++)gh(he[Me],N,z,U)}function Yv(_,N,z,U){let{opaque:B,transmissive:he,transparent:Me}=_;E.setupLightsView(z),Rt===!0&&xe.setGlobalState(O.clippingPlanes,z),U&&le.viewport(K.copy(U)),B.length>0&&tl(B,N,z),he.length>0&&tl(he,N,z),Me.length>0&&tl(Me,N,z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Zv(_,N,z,U){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let De=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new Wn(1,1,{generateMipmaps:!0,type:De?Ji:Yn,minFilter:es,samples:Math.max(4,Tt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}let he=E.state.transmissionRenderTarget[U.id],Me=U.viewport||K;he.setSize(Me.z*O.transmissionResolutionScale,Me.w*O.transmissionResolutionScale);let fe=O.getRenderTarget(),we=O.getActiveCubeFace(),Ce=O.getActiveMipmapLevel();O.setRenderTarget(he),O.getClearColor(Se),Te=O.getClearAlpha(),Te<1&&O.setClearColor(16777215,.5),O.clear(),Nt&&ie.render(z);let je=O.toneMapping;O.toneMapping=wi;let Ze=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),Rt===!0&&xe.setGlobalState(O.clippingPlanes,U),tl(_,z,U),v.updateMultisampleRenderTarget(he),v.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _t=0,Vt=N.length;_t<Vt;_t++){let Lt=N[_t],{object:St,geometry:pn,material:ye,group:Un}=Lt;if(ye.side===Yi&&St.layers.test(U.layers)){let dt=ye.side;ye.side=En,ye.needsUpdate=!0,Jv(St,z,U,pn,ye,Un),ye.side=dt,ye.needsUpdate=!0,De=!0}}De===!0&&(v.updateMultisampleRenderTarget(he),v.updateRenderTargetMipmap(he))}O.setRenderTarget(fe,we,Ce),O.setClearColor(Se,Te),Ze!==void 0&&(U.viewport=Ze),O.toneMapping=je}function tl(_,N,z){let U=N.isScene===!0?N.overrideMaterial:null;for(let B=0,he=_.length;B<he;B++){let Me=_[B],{object:fe,geometry:we,group:Ce}=Me,je=Me.material;je.allowOverride===!0&&U!==null&&(je=U),fe.layers.test(z.layers)&&Jv(fe,N,z,we,je,Ce)}}function Jv(_,N,z,U,B,he){_.onBeforeRender(O,N,z,U,B,he),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(O,N,z,U,_,he),B.transparent===!0&&B.side===Yi&&B.forceSinglePass===!1?(B.side=En,B.needsUpdate=!0,O.renderBufferDirect(z,N,U,B,_,he),B.side=yr,B.needsUpdate=!0,O.renderBufferDirect(z,N,U,B,_,he),B.side=Yi):O.renderBufferDirect(z,N,U,B,_,he),_.onAfterRender(O,N,z,U,B,he)}function nl(_,N,z){N.isScene!==!0&&(N=qt);let U=M.get(_),B=E.state.lights,he=E.state.shadowsArray,Me=B.state.version,fe=ce.getParameters(_,B.state,he,N,z,E.state.lightProbeGridArray),we=ce.getProgramCacheKey(fe),Ce=U.programs;U.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,U.fog=N.fog;let je=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;U.envMap=L.get(_.envMap||U.environment,je),U.envMapRotation=U.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ce===void 0&&(_.addEventListener("dispose",Bt),Ce=new Map,U.programs=Ce);let Ze=Ce.get(we);if(Ze!==void 0){if(U.currentProgram===Ze&&U.lightsStateVersion===Me)return Qv(_,fe),Ze}else fe.uniforms=ce.getUniforms(_),k!==null&&_.isNodeMaterial&&k.build(_,z,fe),_.onBeforeCompile(fe,O),Ze=ce.acquireProgram(fe,we),Ce.set(we,Ze),U.uniforms=fe.uniforms;let De=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(De.clippingPlanes=xe.uniform),Qv(_,fe),U.needsLights=rw(_),U.lightsStateVersion=Me,U.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),U.lightProbeGrid=E.state.lightProbeGridArray.length>0,U.currentProgram=Ze,U.uniformsList=null,Ze}function Kv(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=ua.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Qv(_,N){let z=M.get(_);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function tw(_,N){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;w.setFromMatrixPosition(N.matrixWorld);for(let z=0,U=_.length;z<U;z++){let B=_[z];if(B.texture!==null&&B.boundingBox.containsPoint(w))return B}return null}function nw(_,N,z,U,B){N.isScene!==!0&&(N=qt),v.resetTextureUnits();let he=N.fog,Me=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?N.environment:null,fe=P===null?O.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:st.workingColorSpace,we=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ce=L.get(U.envMap||Me,we),je=U.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),De=!!z.morphAttributes.position,_t=!!z.morphAttributes.normal,Vt=!!z.morphAttributes.color,Lt=wi;U.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=O.toneMapping);let St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pn=St!==void 0?St.length:0,ye=M.get(U),Un=E.state.lights;if(Rt===!0&&(nt===!0||_!==F)){let Dt=_===F&&U.id===H;xe.setState(U,_,Dt)}let dt=!1;U.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Un.state.version||ye.outputColorSpace!==fe||B.isBatchedMesh&&ye.batching===!1||!B.isBatchedMesh&&ye.batching===!0||B.isBatchedMesh&&ye.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ye.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ye.instancing===!1||!B.isInstancedMesh&&ye.instancing===!0||B.isSkinnedMesh&&ye.skinning===!1||!B.isSkinnedMesh&&ye.skinning===!0||B.isInstancedMesh&&ye.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ye.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ye.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ye.instancingMorph===!1&&B.morphTexture!==null||ye.envMap!==Ce||U.fog===!0&&ye.fog!==he||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==xe.numPlanes||ye.numIntersection!==xe.numIntersection)||ye.vertexAlphas!==je||ye.vertexTangents!==Ze||ye.morphTargets!==De||ye.morphNormals!==_t||ye.morphColors!==Vt||ye.toneMapping!==Lt||ye.morphTargetsCount!==pn||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,ye.__version=U.version);let Zn=ye.currentProgram;dt===!0&&(Zn=nl(U,N,B),k&&U.isNodeMaterial&&k.onUpdateProgram(U,Zn,ye));let Di=!1,br=!1,Hs=!1,wt=Zn.getUniforms(),zt=ye.uniforms;if(le.useProgram(Zn.program)&&(Di=!0,br=!0,Hs=!0),U.id!==H&&(H=U.id,br=!0),ye.needsLights){let Dt=tw(E.state.lightProbeGridArray,B);ye.lightProbeGrid!==Dt&&(ye.lightProbeGrid=Dt,br=!0)}if(Di||F!==_){le.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),wt.setValue(R,"projectionMatrix",_.projectionMatrix),wt.setValue(R,"viewMatrix",_.matrixWorldInverse);let wr=wt.map.cameraPosition;wr!==void 0&&wr.setValue(R,At.setFromMatrixPosition(_.matrixWorld)),Tt.logarithmicDepthBuffer&&wt.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&wt.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),F!==_&&(F=_,br=!0,Hs=!0)}if(ye.needsLights&&(Un.state.directionalShadowMap.length>0&&wt.setValue(R,"directionalShadowMap",Un.state.directionalShadowMap,v),Un.state.spotShadowMap.length>0&&wt.setValue(R,"spotShadowMap",Un.state.spotShadowMap,v),Un.state.pointShadowMap.length>0&&wt.setValue(R,"pointShadowMap",Un.state.pointShadowMap,v)),B.isSkinnedMesh){wt.setOptional(R,B,"bindMatrix"),wt.setOptional(R,B,"bindMatrixInverse");let Dt=B.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),wt.setValue(R,"boneTexture",Dt.boneTexture,v))}B.isBatchedMesh&&(wt.setOptional(R,B,"batchingTexture"),wt.setValue(R,"batchingTexture",B._matricesTexture,v),wt.setOptional(R,B,"batchingIdTexture"),wt.setValue(R,"batchingIdTexture",B._indirectTexture,v),wt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(R,"batchingColorTexture",B._colorsTexture,v));let Sr=z.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Ue.update(B,z,Zn),(br||ye.receiveShadow!==B.receiveShadow)&&(ye.receiveShadow=B.receiveShadow,wt.setValue(R,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&N.environment!==null&&(zt.envMapIntensity.value=N.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=DF()),br){if(wt.setValue(R,"toneMappingExposure",O.toneMappingExposure),ye.needsLights&&iw(zt,Hs),he&&U.fog===!0&&G.refreshFogUniforms(zt,he),G.refreshMaterialUniforms(zt,U,$e,gt,E.state.transmissionRenderTarget[_.id]),ye.needsLights&&ye.lightProbeGrid){let Dt=ye.lightProbeGrid;zt.probesSH.value=Dt.texture,zt.probesMin.value.copy(Dt.boundingBox.min),zt.probesMax.value.copy(Dt.boundingBox.max),zt.probesResolution.value.copy(Dt.resolution)}ua.upload(R,Kv(ye),zt,v)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ua.upload(R,Kv(ye),zt,v),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&wt.setValue(R,"center",B.center),wt.setValue(R,"modelViewMatrix",B.modelViewMatrix),wt.setValue(R,"normalMatrix",B.normalMatrix),wt.setValue(R,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let Dt=U.uniformsGroups;for(let wr=0,Gs=Dt.length;wr<Gs;wr++){let ey=Dt[wr];W.update(ey,Zn),W.bind(ey,Zn)}}return Zn}function iw(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function rw(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,N,z){let U=M.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),M.get(_.texture).__webglTexture=N,M.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:z,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let z=M.get(_);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};let sw=R.createFramebuffer();this.setRenderTarget=function(_,N=0,z=0){P=_,j=N,X=z;let U=null,B=!1,he=!1;if(_){let fe=M.get(_);if(fe.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(R.FRAMEBUFFER,fe.__webglFramebuffer),K.copy(_.viewport),ee.copy(_.scissor),de=_.scissorTest,le.viewport(K),le.scissor(ee),le.setScissorTest(de),H=-1;return}else if(fe.__webglFramebuffer===void 0)v.setupRenderTarget(_);else if(fe.__hasExternalTextures)v.rebindTextures(_,M.get(_.texture).__webglTexture,M.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let je=_.depthTexture;if(fe.__boundDepthTexture!==je){if(je!==null&&M.has(je)&&(_.width!==je.image.width||_.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(_)}}let we=_.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(he=!0);let Ce=M.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?U=Ce[N][z]:U=Ce[N],B=!0):_.samples>0&&v.useMultisampledRTT(_)===!1?U=M.get(_).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[z]:U=Ce,K.copy(_.viewport),ee.copy(_.scissor),de=_.scissorTest}else K.copy(se).multiplyScalar($e).floor(),ee.copy(Pe).multiplyScalar($e).floor(),de=Ve;if(z!==0&&(U=sw),le.bindFramebuffer(R.FRAMEBUFFER,U)&&le.drawBuffers(_,U),le.viewport(K),le.scissor(ee),le.setScissorTest(de),B){let fe=M.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,z)}else if(he){let fe=N;for(let we=0;we<_.textures.length;we++){let Ce=M.get(_.textures[we]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+we,Ce.__webglTexture,z,fe)}}else if(_!==null&&z!==0){let fe=M.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,z)}H=-1},this.readRenderTargetPixels=function(_,N,z,U,B,he,Me,fe=0){if(!(_&&_.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=M.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){le.bindFramebuffer(R.FRAMEBUFFER,we);try{let Ce=_.textures[fe],je=Ce.format,Ze=Ce.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+fe),!Tt.textureFormatReadable(je)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Ze)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-U&&z>=0&&z<=_.height-B&&R.readPixels(N,z,U,B,D.convert(je),D.convert(Ze),he)}finally{let Ce=P!==null?M.get(P).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=function(_,N,z,U,B,he,Me,fe=0){return js(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=M.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(N>=0&&N<=_.width-U&&z>=0&&z<=_.height-B){le.bindFramebuffer(R.FRAMEBUFFER,we);let Ce=_.textures[fe],je=Ce.format,Ze=Ce.type;if(_.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+fe),!Tt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.bufferData(R.PIXEL_PACK_BUFFER,he.byteLength,R.STREAM_READ),R.readPixels(N,z,U,B,D.convert(je),D.convert(Ze),0);let _t=P!==null?M.get(P).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,_t);let Vt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),yield MS(R,Vt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,he),R.deleteBuffer(De),R.deleteSync(Vt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,z=0){let U=Math.pow(2,-z),B=Math.floor(_.image.width*U),he=Math.floor(_.image.height*U),Me=N!==null?N.x:0,fe=N!==null?N.y:0;v.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,Me,fe,B,he),le.unbindTexture()};let ow=R.createFramebuffer(),aw=R.createFramebuffer();this.copyTextureToTexture=function(_,N,z=null,U=null,B=0,he=0){let Me,fe,we,Ce,je,Ze,De,_t,Vt,Lt=_.isCompressedTexture?_.mipmaps[he]:_.image;if(z!==null)Me=z.max.x-z.min.x,fe=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,je=z.min.y,Ze=z.isBox3?z.min.z:0;else{let zt=Math.pow(2,-B);Me=Math.floor(Lt.width*zt),fe=Math.floor(Lt.height*zt),_.isDataArrayTexture?we=Lt.depth:_.isData3DTexture?we=Math.floor(Lt.depth*zt):we=1,Ce=0,je=0,Ze=0}U!==null?(De=U.x,_t=U.y,Vt=U.z):(De=0,_t=0,Vt=0);let St=D.convert(N.format),pn=D.convert(N.type),ye;N.isData3DTexture?(v.setTexture3D(N,0),ye=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(v.setTexture2DArray(N,0),ye=R.TEXTURE_2D_ARRAY):(v.setTexture2D(N,0),ye=R.TEXTURE_2D),le.activeTexture(R.TEXTURE0),le.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),le.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),le.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Un=le.getParameter(R.UNPACK_ROW_LENGTH),dt=le.getParameter(R.UNPACK_IMAGE_HEIGHT),Zn=le.getParameter(R.UNPACK_SKIP_PIXELS),Di=le.getParameter(R.UNPACK_SKIP_ROWS),br=le.getParameter(R.UNPACK_SKIP_IMAGES);le.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),le.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),le.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),le.pixelStorei(R.UNPACK_SKIP_ROWS,je),le.pixelStorei(R.UNPACK_SKIP_IMAGES,Ze);let Hs=_.isDataArrayTexture||_.isData3DTexture,wt=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let zt=M.get(_),Sr=M.get(N),Dt=M.get(zt.__renderTarget),wr=M.get(Sr.__renderTarget);le.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Gs=0;Gs<we;Gs++)Hs&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,M.get(_).__webglTexture,B,Ze+Gs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,M.get(N).__webglTexture,he,Vt+Gs)),R.blitFramebuffer(Ce,je,Me,fe,De,_t,Me,fe,R.DEPTH_BUFFER_BIT,R.NEAREST);le.bindFramebuffer(R.READ_FRAMEBUFFER,null),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||_.isRenderTargetTexture||M.has(_)){let zt=M.get(_),Sr=M.get(N);le.bindFramebuffer(R.READ_FRAMEBUFFER,ow),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,aw);for(let Dt=0;Dt<we;Dt++)Hs?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,B,Ze+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,B),wt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Sr.__webglTexture,he,Vt+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Sr.__webglTexture,he),B!==0?R.blitFramebuffer(Ce,je,Me,fe,De,_t,Me,fe,R.COLOR_BUFFER_BIT,R.NEAREST):wt?R.copyTexSubImage3D(ye,he,De,_t,Vt+Dt,Ce,je,Me,fe):R.copyTexSubImage2D(ye,he,De,_t,Ce,je,Me,fe);le.bindFramebuffer(R.READ_FRAMEBUFFER,null),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else wt?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(ye,he,De,_t,Vt,Me,fe,we,St,pn,Lt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(ye,he,De,_t,Vt,Me,fe,we,St,Lt.data):R.texSubImage3D(ye,he,De,_t,Vt,Me,fe,we,St,pn,Lt):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,he,De,_t,Me,fe,St,pn,Lt.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,he,De,_t,Lt.width,Lt.height,St,Lt.data):R.texSubImage2D(R.TEXTURE_2D,he,De,_t,Me,fe,St,pn,Lt);le.pixelStorei(R.UNPACK_ROW_LENGTH,Un),le.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),le.pixelStorei(R.UNPACK_SKIP_PIXELS,Zn),le.pixelStorei(R.UNPACK_SKIP_ROWS,Di),le.pixelStorei(R.UNPACK_SKIP_IMAGES,br),he===0&&N.generateMipmaps&&R.generateMipmap(ye),le.unbindTexture()},this.initRenderTarget=function(_){M.get(_).__webglFramebuffer===void 0&&v.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?v.setTextureCube(_,0):_.isData3DTexture?v.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?v.setTexture2DArray(_,0):v.setTexture2D(_,0),le.unbindTexture()},this.resetState=function(){j=0,X=0,P=null,le.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var hh=class n{constructor(e,t){this.el=e;this.ngZone=t}canvasContainer;scene;camera;renderer;particles;animationId;time=0;ngOnInit(){this.canvasContainer=new Sn(this.el.nativeElement.querySelector(".canvas-container")),this.initThree(),this.createParticles(),this.animate()}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer.dispose()}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}initThree(){this.scene=new Dc,this.camera=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new uh({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.canvasContainer.nativeElement.appendChild(this.renderer.domElement)}createParticles(){let e=new $n,t=3e3,i=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t),o=new tt("#ce7afd"),a=new tt("#47c4ff"),c=new tt("#ffffff");for(let u=0;u<t;u++){i[u*3]=(Math.random()-.5)*20,i[u*3+1]=(Math.random()-.5)*20,i[u*3+2]=(Math.random()-.5)*20;let f=new tt,d=Math.random();d<.2?f.copy(o):d<.4?f.copy(a):f.copy(c),r[u*3]=f.r,r[u*3+1]=f.g,r[u*3+2]=f.b,s[u]=Math.random()}e.setAttribute("position",new fn(i,3)),e.setAttribute("color",new fn(r,3)),e.setAttribute("size",new fn(s,1));let l=new ra({size:.05,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.6,blending:Hc});this.particles=new Oc(e,l),this.scene.add(this.particles)}animate(){this.ngZone.runOutsideAngular(()=>{let e=()=>{this.animationId=requestAnimationFrame(e),this.time+=5e-4,this.particles.rotation.y=this.time,this.particles.rotation.x=this.time*.5,this.particles.rotation.z+=1e-4,this.renderer.render(this.scene,this.camera)};e()})}static \u0275fac=function(t){return new(t||n)(nn(Sn),nn(Pt))};static \u0275cmp=rn({type:n,selectors:[["app-background3d"]],hostBindings:function(t,i){t&1&&gi("resize",function(){return i.onResize()},!1,pu)},decls:2,vars:0,consts:[["canvasContainer",""],[1,"canvas-container"]],template:function(t,i){t&1&&bt(0,"div",1,0)},styles:[".canvas-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;background:radial-gradient(circle at center,#0a0a1a,#000)}"]})};var ph=class n{router=Q(ni);brandName="GANESH TODKAR";navItems=pb;isLockedPage$=this.router.events.pipe(mn(e=>e instanceof On),rt(()=>this.isLockedPath(this.router.url)),io(this.isLockedPath(this.router.url)));isLockedPath(e){let t=e.split("?")[0].replace(/\/$/,"")||"/";return["/","/home","/contact"].includes(t)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-root"]],decls:6,vars:6,consts:[["appCursor","",1,"page"],[3,"brandName","navItems"],[1,"route-wrapper"]],template:function(t,i){t&1&&(te(0,"div",0),bt(1,"app-background3d")(2,"app-header",1),te(3,"div",2),$x(4,"async"),bt(5,"router-outlet"),ge()()),t&2&&(Ke(2),Wt("brandName",i.brandName)("navItems",i.navItems),Ke(),Ms("no-scroll",qx(4,4,i.isLockedPage$)))},dependencies:[pd,md,lc,zm,hh],styles:[".global-socials[_ngcontent-%COMP%]{position:fixed;bottom:0;left:40px;display:flex;flex-direction:column;align-items:center;gap:1.5rem;z-index:100}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;transition:all .3s ease;width:20px;height:20px;display:flex;justify-content:center;align-items:center}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.global-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff478e;transform:translateY(-3px)}.social-line[_ngcontent-%COMP%]{width:1px;height:100px;background:#fff3;margin-top:10px}@media (max-width: 768px){.global-socials[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})};Km(ph,xb).catch(n=>console.error(n));

(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))Y(z);new MutationObserver(z=>{for(const A of z)if(A.type==="childList")for(const I of A.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&Y(I)}).observe(document,{childList:!0,subtree:!0});function p(z){const A={};return z.integrity&&(A.integrity=z.integrity),z.referrerPolicy&&(A.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?A.credentials="include":z.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function Y(z){if(z.ep)return;z.ep=!0;const A=p(z);fetch(z.href,A)}})();function Yu(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var bo={exports:{}},Ir={},$o={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Hd(){if(Du)return q;Du=1;var y=Symbol.for("react.element"),x=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),I=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),le=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),X=Symbol.iterator;function ne(s){return s===null||typeof s!="object"?null:(s=X&&s[X]||s["@@iterator"],typeof s=="function"?s:null)}var Ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,b={};function U(s,g,j){this.props=s,this.context=g,this.refs=b,this.updater=j||Ee}U.prototype.isReactComponent={},U.prototype.setState=function(s,g){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,g,"setState")},U.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function _e(){}_e.prototype=U.prototype;function Ue(s,g,j){this.props=s,this.context=g,this.refs=b,this.updater=j||Ee}var he=Ue.prototype=new _e;he.constructor=Ue,we(he,U.prototype),he.isPureReactComponent=!0;var se=Array.isArray,be=Object.prototype.hasOwnProperty,Re={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function ke(s,g,j){var C,M={},R=null,_=null;if(g!=null)for(C in g.ref!==void 0&&(_=g.ref),g.key!==void 0&&(R=""+g.key),g)be.call(g,C)&&!Z.hasOwnProperty(C)&&(M[C]=g[C]);var F=arguments.length-2;if(F===1)M.children=j;else if(1<F){for(var Q=Array(F),ee=0;ee<F;ee++)Q[ee]=arguments[ee+2];M.children=Q}if(s&&s.defaultProps)for(C in F=s.defaultProps,F)M[C]===void 0&&(M[C]=F[C]);return{$$typeof:y,type:s,key:R,ref:_,props:M,_owner:Re.current}}function ot(s,g){return{$$typeof:y,type:s.type,key:g,ref:s.ref,props:s.props,_owner:s._owner}}function qe(s){return typeof s=="object"&&s!==null&&s.$$typeof===y}function Ft(s){var g={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(j){return g[j]})}var dt=/\/+/g;function Qe(s,g){return typeof s=="object"&&s!==null&&s.key!=null?Ft(""+s.key):g.toString(36)}function Xe(s,g,j,C,M){var R=typeof s;(R==="undefined"||R==="boolean")&&(s=null);var _=!1;if(s===null)_=!0;else switch(R){case"string":case"number":_=!0;break;case"object":switch(s.$$typeof){case y:case x:_=!0}}if(_)return _=s,M=M(_),s=C===""?"."+Qe(_,0):C,se(M)?(j="",s!=null&&(j=s.replace(dt,"$&/")+"/"),Xe(M,g,j,"",function(ee){return ee})):M!=null&&(qe(M)&&(M=ot(M,j+(!M.key||_&&_.key===M.key?"":(""+M.key).replace(dt,"$&/")+"/")+s)),g.push(M)),1;if(_=0,C=C===""?".":C+":",se(s))for(var F=0;F<s.length;F++){R=s[F];var Q=C+Qe(R,F);_+=Xe(R,g,j,Q,M)}else if(Q=ne(s),typeof Q=="function")for(s=Q.call(s),F=0;!(R=s.next()).done;)R=R.value,Q=C+Qe(R,F++),_+=Xe(R,g,j,Q,M);else if(R==="object")throw g=String(s),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return _}function Ze(s,g,j){if(s==null)return s;var C=[],M=0;return Xe(s,C,"","",function(R){return g.call(j,R,M++)}),C}function De(s){if(s._status===-1){var g=s._result;g=g(),g.then(function(j){(s._status===0||s._status===-1)&&(s._status=1,s._result=j)},function(j){(s._status===0||s._status===-1)&&(s._status=2,s._result=j)}),s._status===-1&&(s._status=0,s._result=g)}if(s._status===1)return s._result.default;throw s._result}var ge={current:null},E={transition:null},H={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:E,ReactCurrentOwner:Re};function d(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:Ze,forEach:function(s,g,j){Ze(s,function(){g.apply(this,arguments)},j)},count:function(s){var g=0;return Ze(s,function(){g++}),g},toArray:function(s){return Ze(s,function(g){return g})||[]},only:function(s){if(!qe(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},q.Component=U,q.Fragment=p,q.Profiler=z,q.PureComponent=Ue,q.StrictMode=Y,q.Suspense=W,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,q.act=d,q.cloneElement=function(s,g,j){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var C=we({},s.props),M=s.key,R=s.ref,_=s._owner;if(g!=null){if(g.ref!==void 0&&(R=g.ref,_=Re.current),g.key!==void 0&&(M=""+g.key),s.type&&s.type.defaultProps)var F=s.type.defaultProps;for(Q in g)be.call(g,Q)&&!Z.hasOwnProperty(Q)&&(C[Q]=g[Q]===void 0&&F!==void 0?F[Q]:g[Q])}var Q=arguments.length-2;if(Q===1)C.children=j;else if(1<Q){F=Array(Q);for(var ee=0;ee<Q;ee++)F[ee]=arguments[ee+2];C.children=F}return{$$typeof:y,type:s.type,key:M,ref:R,props:C,_owner:_}},q.createContext=function(s){return s={$$typeof:I,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:A,_context:s},s.Consumer=s},q.createElement=ke,q.createFactory=function(s){var g=ke.bind(null,s);return g.type=s,g},q.createRef=function(){return{current:null}},q.forwardRef=function(s){return{$$typeof:$,render:s}},q.isValidElement=qe,q.lazy=function(s){return{$$typeof:te,_payload:{_status:-1,_result:s},_init:De}},q.memo=function(s,g){return{$$typeof:le,type:s,compare:g===void 0?null:g}},q.startTransition=function(s){var g=E.transition;E.transition={};try{s()}finally{E.transition=g}},q.unstable_act=d,q.useCallback=function(s,g){return ge.current.useCallback(s,g)},q.useContext=function(s){return ge.current.useContext(s)},q.useDebugValue=function(){},q.useDeferredValue=function(s){return ge.current.useDeferredValue(s)},q.useEffect=function(s,g){return ge.current.useEffect(s,g)},q.useId=function(){return ge.current.useId()},q.useImperativeHandle=function(s,g,j){return ge.current.useImperativeHandle(s,g,j)},q.useInsertionEffect=function(s,g){return ge.current.useInsertionEffect(s,g)},q.useLayoutEffect=function(s,g){return ge.current.useLayoutEffect(s,g)},q.useMemo=function(s,g){return ge.current.useMemo(s,g)},q.useReducer=function(s,g,j){return ge.current.useReducer(s,g,j)},q.useRef=function(s){return ge.current.useRef(s)},q.useState=function(s){return ge.current.useState(s)},q.useSyncExternalStore=function(s,g,j){return ge.current.useSyncExternalStore(s,g,j)},q.useTransition=function(){return ge.current.useTransition()},q.version="18.3.1",q}var Iu;function Qo(){return Iu||(Iu=1,$o.exports=Hd()),$o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Qd(){if(Ou)return Ir;Ou=1;var y=Qo(),x=Symbol.for("react.element"),p=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,z=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function I($,W,le){var te,X={},ne=null,Ee=null;le!==void 0&&(ne=""+le),W.key!==void 0&&(ne=""+W.key),W.ref!==void 0&&(Ee=W.ref);for(te in W)Y.call(W,te)&&!A.hasOwnProperty(te)&&(X[te]=W[te]);if($&&$.defaultProps)for(te in W=$.defaultProps,W)X[te]===void 0&&(X[te]=W[te]);return{$$typeof:x,type:$,key:ne,ref:Ee,props:X,_owner:z.current}}return Ir.Fragment=p,Ir.jsx=I,Ir.jsxs=I,Ir}var Au;function Yd(){return Au||(Au=1,bo.exports=Qd()),bo.exports}var o=Yd(),re=Qo();const Kd=Yu(re);var Yl={},Bo={exports:{}},it={},Vo={exports:{}},Wo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function Gd(){return Uu||(Uu=1,(function(y){function x(E,H){var d=E.length;E.push(H);e:for(;0<d;){var s=d-1>>>1,g=E[s];if(0<z(g,H))E[s]=H,E[d]=g,d=s;else break e}}function p(E){return E.length===0?null:E[0]}function Y(E){if(E.length===0)return null;var H=E[0],d=E.pop();if(d!==H){E[0]=d;e:for(var s=0,g=E.length,j=g>>>1;s<j;){var C=2*(s+1)-1,M=E[C],R=C+1,_=E[R];if(0>z(M,d))R<g&&0>z(_,M)?(E[s]=_,E[R]=d,s=R):(E[s]=M,E[C]=d,s=C);else if(R<g&&0>z(_,d))E[s]=_,E[R]=d,s=R;else break e}}return H}function z(E,H){var d=E.sortIndex-H.sortIndex;return d!==0?d:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;y.unstable_now=function(){return A.now()}}else{var I=Date,$=I.now();y.unstable_now=function(){return I.now()-$}}var W=[],le=[],te=1,X=null,ne=3,Ee=!1,we=!1,b=!1,U=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(E){for(var H=p(le);H!==null;){if(H.callback===null)Y(le);else if(H.startTime<=E)Y(le),H.sortIndex=H.expirationTime,x(W,H);else break;H=p(le)}}function se(E){if(b=!1,he(E),!we)if(p(W)!==null)we=!0,De(be);else{var H=p(le);H!==null&&ge(se,H.startTime-E)}}function be(E,H){we=!1,b&&(b=!1,_e(ke),ke=-1),Ee=!0;var d=ne;try{for(he(H),X=p(W);X!==null&&(!(X.expirationTime>H)||E&&!Ft());){var s=X.callback;if(typeof s=="function"){X.callback=null,ne=X.priorityLevel;var g=s(X.expirationTime<=H);H=y.unstable_now(),typeof g=="function"?X.callback=g:X===p(W)&&Y(W),he(H)}else Y(W);X=p(W)}if(X!==null)var j=!0;else{var C=p(le);C!==null&&ge(se,C.startTime-H),j=!1}return j}finally{X=null,ne=d,Ee=!1}}var Re=!1,Z=null,ke=-1,ot=5,qe=-1;function Ft(){return!(y.unstable_now()-qe<ot)}function dt(){if(Z!==null){var E=y.unstable_now();qe=E;var H=!0;try{H=Z(!0,E)}finally{H?Qe():(Re=!1,Z=null)}}else Re=!1}var Qe;if(typeof Ue=="function")Qe=function(){Ue(dt)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Ze=Xe.port2;Xe.port1.onmessage=dt,Qe=function(){Ze.postMessage(null)}}else Qe=function(){U(dt,0)};function De(E){Z=E,Re||(Re=!0,Qe())}function ge(E,H){ke=U(function(){E(y.unstable_now())},H)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(E){E.callback=null},y.unstable_continueExecution=function(){we||Ee||(we=!0,De(be))},y.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<E?Math.floor(1e3/E):5},y.unstable_getCurrentPriorityLevel=function(){return ne},y.unstable_getFirstCallbackNode=function(){return p(W)},y.unstable_next=function(E){switch(ne){case 1:case 2:case 3:var H=3;break;default:H=ne}var d=ne;ne=H;try{return E()}finally{ne=d}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var d=ne;ne=E;try{return H()}finally{ne=d}},y.unstable_scheduleCallback=function(E,H,d){var s=y.unstable_now();switch(typeof d=="object"&&d!==null?(d=d.delay,d=typeof d=="number"&&0<d?s+d:s):d=s,E){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=d+g,E={id:te++,callback:H,priorityLevel:E,startTime:d,expirationTime:g,sortIndex:-1},d>s?(E.sortIndex=d,x(le,E),p(W)===null&&E===p(le)&&(b?(_e(ke),ke=-1):b=!0,ge(se,d-s))):(E.sortIndex=g,x(W,E),we||Ee||(we=!0,De(be))),E},y.unstable_shouldYield=Ft,y.unstable_wrapCallback=function(E){var H=ne;return function(){var d=ne;ne=H;try{return E.apply(this,arguments)}finally{ne=d}}}})(Wo)),Wo}var bu;function qd(){return bu||(bu=1,Vo.exports=Gd()),Vo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function Xd(){if($u)return it;$u=1;var y=Qo(),x=qd();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y=new Set,z={};function A(e,t){I(e,t),I(e+"Capture",t)}function I(e,t){for(z[e]=t,e=0;e<t.length;e++)Y.add(t[e])}var $=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,le=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,te={},X={};function ne(e){return W.call(X,e)?!0:W.call(te,e)?!1:le.test(e)?X[e]=!0:(te[e]=!0,!1)}function Ee(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function we(e,t,n,r){if(t===null||typeof t>"u"||Ee(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function Ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_e,Ue);U[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_e,Ue);U[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_e,Ue);U[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function he(e,t,n,r){var l=U.hasOwnProperty(t)?U[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(we(t,n,l,r)&&(n=null),r||l===null?ne(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var se=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Re=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),E=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var d=Object.assign,s;function g(e){if(s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);s=t&&t[1]||""}return`
`+s+e}var j=!1;function C(e,t){if(!e||j)return"";j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{j=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function M(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=C(e.type,!1),e;case 11:return e=C(e.type.render,!1),e;case 1:return e=C(e.type,!0),e;default:return""}}function R(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case Re:return"Portal";case ot:return"Profiler";case ke:return"StrictMode";case Qe:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ft:return(e.displayName||"Context")+".Consumer";case qe:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:R(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return R(e(t))}catch{}}return null}function _(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return R(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function F(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ee(e){var t=Q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ae(e){e._valueTracker||(e._valueTracker=ee(e))}function fe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function J(e,t){var n=t.checked;return d({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ie(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=F(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Je(e,t){t=t.checked,t!=null&&he(e,"checked",t,!1)}function Ye(e,t){Je(e,t);var n=F(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xt(e,t.type,n):t.hasOwnProperty("defaultValue")&&xt(e,t.type,F(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ft(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xt(e,t,n){(t!=="number"||Ne(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $e=Array.isArray;function Bt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+F(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return d({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Or(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if($e(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:F(n)}}function qn(e,t){var n=F(t.value),r=F(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ar(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jn,Jn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){ql.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tt[t]=Tt[e]})});function Ur(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+t).trim():t+"px"}function Xo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ur(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var qu=d({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,Cn=null,En=null;function Zo(e){if(e=kr(e)){if(typeof ti!="function")throw Error(p(280));var t=e.stateNode;t&&(t=sl(t),ti(e.stateNode,e.type,t))}}function Jo(e){Cn?En?En.push(e):En=[e]:Cn=e}function ea(){if(Cn){var e=Cn,t=En;if(En=Cn=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function ta(e,t){return e(t)}function na(){}var ni=!1;function ra(e,t,n){if(ni)return e(t,n);ni=!0;try{return ta(e,t,n)}finally{ni=!1,(Cn!==null||En!==null)&&(na(),ea())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var ri=!1;if($)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ri=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ri=!1}function Xu(e,t,n,r,l,i,a,u,c){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(k){this.onError(k)}}var nr=!1,br=null,$r=!1,li=null,Zu={onError:function(e){nr=!0,br=e}};function Ju(e,t,n,r,l,i,a,u,c){nr=!1,br=null,Xu.apply(Zu,arguments)}function ec(e,t,n,r,l,i,a,u,c){if(Ju.apply(this,arguments),nr){if(nr){var v=br;nr=!1,br=null}else throw Error(p(198));$r||($r=!0,li=v)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function la(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ia(e){if(dn(e)!==e)throw Error(p(188))}function tc(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ia(l),e;if(i===r)return ia(l),t;i=i.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===n){a=!0,n=l,r=i;break}if(u===r){a=!0,r=l,n=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===n){a=!0,n=i,r=l;break}if(u===r){a=!0,r=i,n=l;break}u=u.sibling}if(!a)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function oa(e){return e=tc(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=aa(e);if(t!==null)return t;e=e.sibling}return null}var sa=x.unstable_scheduleCallback,ua=x.unstable_cancelCallback,nc=x.unstable_shouldYield,rc=x.unstable_requestPaint,je=x.unstable_now,lc=x.unstable_getCurrentPriorityLevel,ii=x.unstable_ImmediatePriority,ca=x.unstable_UserBlockingPriority,Br=x.unstable_NormalPriority,ic=x.unstable_LowPriority,da=x.unstable_IdlePriority,Vr=null,_t=null;function oc(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:uc,ac=Math.log,sc=Math.LN2;function uc(e){return e>>>=0,e===0?32:31-(ac(e)/sc|0)|0}var Wr=64,Hr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~l;u!==0?r=rr(u):(i&=a,i!==0&&(r=rr(i)))}else a=n&~l,a!==0?r=rr(a):i!==0&&(r=rr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),l=1<<n,r|=e[n],t&=~l;return r}function cc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-wt(i),u=1<<a,c=l[a];c===-1?((u&n)===0||(u&r)!==0)&&(l[a]=cc(u,t)):c<=t&&(e.expiredLanes|=u),i&=~u}}function oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fa(){var e=Wr;return Wr<<=1,(Wr&4194240)===0&&(Wr=64),e}function ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function fc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-wt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ue=0;function pa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ma,ui,ha,ga,va,ci=!1,Yr=[],Wt=null,Ht=null,Qt=null,ir=new Map,or=new Map,Yt=[],pc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function ar(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=kr(t),t!==null&&ui(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function mc(e,t,n,r,l){switch(t){case"focusin":return Wt=ar(Wt,e,t,n,r,l),!0;case"dragenter":return Ht=ar(Ht,e,t,n,r,l),!0;case"mouseover":return Qt=ar(Qt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return ir.set(i,ar(ir.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,or.set(i,ar(or.get(i)||null,e,t,n,r,l)),!0}return!1}function xa(e){var t=fn(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=la(n),t!==null){e.blockedOn=t,va(e.priority,function(){ha(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=kr(n),t!==null&&ui(t),e.blockedOn=n,!1;t.shift()}return!0}function wa(e,t,n){Kr(e)&&n.delete(t)}function hc(){ci=!1,Wt!==null&&Kr(Wt)&&(Wt=null),Ht!==null&&Kr(Ht)&&(Ht=null),Qt!==null&&Kr(Qt)&&(Qt=null),ir.forEach(wa),or.forEach(wa)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,hc)))}function ur(e){function t(l){return sr(l,e)}if(0<Yr.length){sr(Yr[0],e);for(var n=1;n<Yr.length;n++){var r=Yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&sr(Wt,e),Ht!==null&&sr(Ht,e),Qt!==null&&sr(Qt,e),ir.forEach(t),or.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)xa(n),n.blockedOn===null&&Yt.shift()}var _n=se.ReactCurrentBatchConfig,Gr=!0;function gc(e,t,n,r){var l=ue,i=_n.transition;_n.transition=null;try{ue=1,di(e,t,n,r)}finally{ue=l,_n.transition=i}}function vc(e,t,n,r){var l=ue,i=_n.transition;_n.transition=null;try{ue=4,di(e,t,n,r)}finally{ue=l,_n.transition=i}}function di(e,t,n,r){if(Gr){var l=fi(e,t,n,r);if(l===null)Mi(e,t,r,qr,n),ya(e,r);else if(mc(l,e,t,n,r))r.stopPropagation();else if(ya(e,r),t&4&&-1<pc.indexOf(e)){for(;l!==null;){var i=kr(l);if(i!==null&&ma(i),i=fi(e,t,n,r),i===null&&Mi(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Mi(e,t,r,null,n)}}var qr=null;function fi(e,t,n,r){if(qr=null,e=ei(r),e=fn(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=la(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lc()){case ii:return 1;case ca:return 4;case Br:case ic:return 16;case da:return 536870912;default:return 16}default:return 16}}var Kt=null,pi=null,Xr=null;function Na(){if(Xr)return Xr;var e,t=pi,n=t.length,r,l="value"in Kt?Kt.value:Kt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Xr=l.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Sa(){return!1}function at(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jr:Sa,this.isPropagationStopped=Sa,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=at(zn),cr=d({},zn,{view:0,detail:0}),yc=at(cr),hi,gi,dr,el=d({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(hi=e.screenX-dr.screenX,gi=e.screenY-dr.screenY):gi=hi=0,dr=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),ja=at(el),xc=d({},el,{dataTransfer:0}),wc=at(xc),kc=d({},cr,{relatedTarget:0}),vi=at(kc),Nc=d({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sc=at(Nc),jc=d({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cc=at(jc),Ec=d({},zn,{data:0}),Ca=at(Ec),_c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mc[e])?!!t[e]:!1}function yi(){return Pc}var Rc=d({},cr,{key:function(e){if(e.key){var t=_c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fc=at(Rc),Tc=d({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=at(Tc),Lc=d({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),Dc=at(Lc),Ic=d({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oc=at(Ic),Ac=d({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uc=at(Ac),bc=[9,13,27,32],xi=$&&"CompositionEvent"in window,fr=null;$&&"documentMode"in document&&(fr=document.documentMode);var $c=$&&"TextEvent"in window&&!fr,_a=$&&(!xi||fr&&8<fr&&11>=fr),za=" ",Ma=!1;function Pa(e,t){switch(e){case"keyup":return bc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Bc(e,t){switch(e){case"compositionend":return Ra(t);case"keypress":return t.which!==32?null:(Ma=!0,za);case"textInput":return e=t.data,e===za&&Ma?null:e;default:return null}}function Vc(e,t){if(Mn)return e==="compositionend"||!xi&&Pa(e,t)?(e=Na(),Xr=pi=Kt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _a&&t.locale!=="ko"?null:t.data;default:return null}}var Wc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wc[e.type]:t==="textarea"}function Ta(e,t,n,r){Jo(r),t=il(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function Hc(e){Xa(e,0)}function tl(e){var t=Ln(e);if(fe(t))return e}function Qc(e,t){if(e==="change")return t}var La=!1;if($){var wi;if($){var ki="oninput"in document;if(!ki){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),ki=typeof Da.oninput=="function"}wi=ki}else wi=!1;La=wi&&(!document.documentMode||9<document.documentMode)}function Ia(){pr&&(pr.detachEvent("onpropertychange",Oa),mr=pr=null)}function Oa(e){if(e.propertyName==="value"&&tl(mr)){var t=[];Ta(t,mr,e,ei(e)),ra(Hc,t)}}function Yc(e,t,n){e==="focusin"?(Ia(),pr=t,mr=n,pr.attachEvent("onpropertychange",Oa)):e==="focusout"&&Ia()}function Kc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(mr)}function Gc(e,t){if(e==="click")return tl(t)}function qc(e,t){if(e==="input"||e==="change")return tl(t)}function Xc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Xc;function hr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!W.call(t,l)||!kt(e[l],t[l]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,t){var n=Aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $a(){for(var e=window,t=Ne();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ne(e.document)}return t}function Ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zc(e){var t=$a(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ba(n.ownerDocument.documentElement,n)){if(r!==null&&Ni(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ua(n,i);var a=Ua(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jc=$&&"documentMode"in document&&11>=document.documentMode,Pn=null,Si=null,gr=null,ji=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Pn==null||Pn!==Ne(r)||(r=Pn,"selectionStart"in r&&Ni(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&hr(gr,r)||(gr=r,r=il(Si,"onSelect"),0<r.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Ci={},Va={};$&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function rl(e){if(Ci[e])return Ci[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Va)return Ci[e]=t[n];return e}var Wa=rl("animationend"),Ha=rl("animationiteration"),Qa=rl("animationstart"),Ya=rl("transitionend"),Ka=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Ka.set(e,t),A(t,[e])}for(var Ei=0;Ei<Ga.length;Ei++){var _i=Ga[Ei],ed=_i.toLowerCase(),td=_i[0].toUpperCase()+_i.slice(1);Gt(ed,"on"+td)}Gt(Wa,"onAnimationEnd"),Gt(Ha,"onAnimationIteration"),Gt(Qa,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Ya,"onTransitionEnd"),I("onMouseEnter",["mouseout","mouseover"]),I("onMouseLeave",["mouseout","mouseover"]),I("onPointerEnter",["pointerout","pointerover"]),I("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nd=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function qa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ec(r,t,void 0,e),e.currentTarget=null}function Xa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,v=u.currentTarget;if(u=u.listener,c!==i&&l.isPropagationStopped())break e;qa(l,u,v),i=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,v=u.currentTarget,u=u.listener,c!==i&&l.isPropagationStopped())break e;qa(l,u,v),i=c}}}if($r)throw e=li,$r=!1,li=null,e}function pe(e,t){var n=t[Di];n===void 0&&(n=t[Di]=new Set);var r=e+"__bubble";n.has(r)||(Za(t,e,2,!1),n.add(r))}function zi(e,t,n){var r=0;t&&(r|=4),Za(n,e,r,t)}var ll="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[ll]){e[ll]=!0,Y.forEach(function(n){n!=="selectionchange"&&(nd.has(n)||zi(n,!1,e),zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ll]||(t[ll]=!0,zi("selectionchange",!1,t))}}function Za(e,t,n,r){switch(ka(t)){case 1:var l=gc;break;case 4:l=vc;break;default:l=di}n=l.bind(null,t,n,e),l=void 0,!ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Mi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;u!==null;){if(a=fn(u),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}u=u.parentNode}}r=r.return}ra(function(){var v=i,k=ei(n),N=[];e:{var w=Ka.get(e);if(w!==void 0){var P=mi,L=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":P=Fc;break;case"focusin":L="focus",P=vi;break;case"focusout":L="blur",P=vi;break;case"beforeblur":case"afterblur":P=vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=wc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Dc;break;case Wa:case Ha:case Qa:P=Sc;break;case Ya:P=Oc;break;case"scroll":P=yc;break;case"wheel":P=Uc;break;case"copy":case"cut":case"paste":P=Cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ea}var D=(t&4)!==0,Ce=!D&&e==="scroll",m=D?w!==null?w+"Capture":null:w;D=[];for(var f=v,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=er(f,m),S!=null&&D.push(xr(f,S,h)))),Ce)break;f=f.return}0<D.length&&(w=new P(w,L,null,n,k),N.push({event:w,listeners:D}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",w&&n!==Jl&&(L=n.relatedTarget||n.fromElement)&&(fn(L)||L[Lt]))break e;if((P||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,P?(L=n.relatedTarget||n.toElement,P=v,L=L?fn(L):null,L!==null&&(Ce=dn(L),L!==Ce||L.tag!==5&&L.tag!==6)&&(L=null)):(P=null,L=v),P!==L)){if(D=ja,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(D=Ea,S="onPointerLeave",m="onPointerEnter",f="pointer"),Ce=P==null?w:Ln(P),h=L==null?w:Ln(L),w=new D(S,f+"leave",P,n,k),w.target=Ce,w.relatedTarget=h,S=null,fn(k)===v&&(D=new D(m,f+"enter",L,n,k),D.target=h,D.relatedTarget=Ce,S=D),Ce=S,P&&L)t:{for(D=P,m=L,f=0,h=D;h;h=Fn(h))f++;for(h=0,S=m;S;S=Fn(S))h++;for(;0<f-h;)D=Fn(D),f--;for(;0<h-f;)m=Fn(m),h--;for(;f--;){if(D===m||m!==null&&D===m.alternate)break t;D=Fn(D),m=Fn(m)}D=null}else D=null;P!==null&&Ja(N,w,P,D,!1),L!==null&&Ce!==null&&Ja(N,Ce,L,D,!0)}}e:{if(w=v?Ln(v):window,P=w.nodeName&&w.nodeName.toLowerCase(),P==="select"||P==="input"&&w.type==="file")var O=Qc;else if(Fa(w))if(La)O=qc;else{O=Kc;var B=Yc}else(P=w.nodeName)&&P.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(O=Gc);if(O&&(O=O(e,v))){Ta(N,O,n,k);break e}B&&B(e,w,v),e==="focusout"&&(B=w._wrapperState)&&B.controlled&&w.type==="number"&&xt(w,"number",w.value)}switch(B=v?Ln(v):window,e){case"focusin":(Fa(B)||B.contentEditable==="true")&&(Pn=B,Si=v,gr=null);break;case"focusout":gr=Si=Pn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Ba(N,n,k);break;case"selectionchange":if(Jc)break;case"keydown":case"keyup":Ba(N,n,k)}var V;if(xi)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Mn?Pa(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(_a&&n.locale!=="ko"&&(Mn||K!=="onCompositionStart"?K==="onCompositionEnd"&&Mn&&(V=Na()):(Kt=k,pi="value"in Kt?Kt.value:Kt.textContent,Mn=!0)),B=il(v,K),0<B.length&&(K=new Ca(K,e,null,n,k),N.push({event:K,listeners:B}),V?K.data=V:(V=Ra(n),V!==null&&(K.data=V)))),(V=$c?Bc(e,n):Vc(e,n))&&(v=il(v,"onBeforeInput"),0<v.length&&(k=new Ca("onBeforeInput","beforeinput",null,n,k),N.push({event:k,listeners:v}),k.data=V))}Xa(N,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=er(e,n),i!=null&&r.unshift(xr(e,i,l)),i=er(e,t),i!=null&&r.push(xr(e,i,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ja(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,v=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&v!==null&&(u=v,l?(c=er(n,i),c!=null&&a.unshift(xr(n,c,u))):l||(c=er(n,i),c!=null&&a.push(xr(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var rd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function es(e){return(typeof e=="string"?e:""+e).replace(rd,`
`).replace(ld,"")}function ol(e,t,n){if(t=es(t),es(e)!==t&&n)throw Error(p(425))}function al(){}var Pi=null,Ri=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,id=typeof clearTimeout=="function"?clearTimeout:void 0,ts=typeof Promise=="function"?Promise:void 0,od=typeof queueMicrotask=="function"?queueMicrotask:typeof ts<"u"?function(e){return ts.resolve(null).then(e).catch(ad)}:Ti;function ad(e){setTimeout(function(){throw e})}function Li(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ur(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Tn,wr="__reactProps$"+Tn,Lt="__reactContainer$"+Tn,Di="__reactEvents$"+Tn,sd="__reactListeners$"+Tn,ud="__reactHandles$"+Tn;function fn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ns(e);e!==null;){if(n=e[zt])return n;e=ns(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[zt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function sl(e){return e[wr]||null}var Ii=[],Dn=-1;function Xt(e){return{current:e}}function me(e){0>Dn||(e.current=Ii[Dn],Ii[Dn]=null,Dn--)}function de(e,t){Dn++,Ii[Dn]=e.current,e.current=t}var Zt={},Be=Xt(Zt),et=Xt(!1),pn=Zt;function In(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function tt(e){return e=e.childContextTypes,e!=null}function ul(){me(et),me(Be)}function rs(e,t,n){if(Be.current!==Zt)throw Error(p(168));de(Be,t),de(et,n)}function ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(p(108,_(e)||"Unknown",l));return d({},n,r)}function cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,pn=Be.current,de(Be,e),de(et,et.current),!0}function is(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=ls(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,me(et),me(Be),de(Be,e)):me(et),de(et,n)}var Dt=null,dl=!1,Oi=!1;function os(e){Dt===null?Dt=[e]:Dt.push(e)}function cd(e){dl=!0,os(e)}function Jt(){if(!Oi&&Dt!==null){Oi=!0;var e=0,t=ue;try{var n=Dt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,dl=!1}catch(l){throw Dt!==null&&(Dt=Dt.slice(e+1)),sa(ii,Jt),l}finally{ue=t,Oi=!1}}return null}var On=[],An=0,fl=null,pl=0,pt=[],mt=0,mn=null,It=1,Ot="";function hn(e,t){On[An++]=pl,On[An++]=fl,fl=e,pl=t}function as(e,t,n){pt[mt++]=It,pt[mt++]=Ot,pt[mt++]=mn,mn=e;var r=It;e=Ot;var l=32-wt(r)-1;r&=~(1<<l),n+=1;var i=32-wt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,It=1<<32-wt(t)+l|n<<l|r,Ot=i+e}else It=1<<i|n<<l|r,Ot=e}function Ai(e){e.return!==null&&(hn(e,1),as(e,1,0))}function Ui(e){for(;e===fl;)fl=On[--An],On[An]=null,pl=On[--An],On[An]=null;for(;e===mn;)mn=pt[--mt],pt[mt]=null,Ot=pt[--mt],pt[mt]=null,It=pt[--mt],pt[mt]=null}var st=null,ut=null,ve=!1,Nt=null;function ss(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function us(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ut=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:It,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ut=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(ve){var t=ut;if(t){var n=t;if(!us(e,t)){if(bi(e))throw Error(p(418));t=qt(n.nextSibling);var r=st;t&&us(e,t)?ss(r,n):(e.flags=e.flags&-4097|2,ve=!1,st=e)}}else{if(bi(e))throw Error(p(418));e.flags=e.flags&-4097|2,ve=!1,st=e}}}function cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function ml(e){if(e!==st)return!1;if(!ve)return cs(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=ut)){if(bi(e))throw ds(),Error(p(418));for(;t;)ss(e,t),t=qt(t.nextSibling)}if(cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=st?qt(e.stateNode.nextSibling):null;return!0}function ds(){for(var e=ut;e;)e=qt(e.nextSibling)}function Un(){ut=st=null,ve=!1}function Bi(e){Nt===null?Nt=[e]:Nt.push(e)}var dd=se.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function hl(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fs(e){var t=e._init;return t(e._payload)}function ps(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function l(m,f){return m=sn(m,f),m.index=0,m.sibling=null,m}function i(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,h,S){return f===null||f.tag!==6?(f=Lo(h,m.mode,S),f.return=m,f):(f=l(f,h),f.return=m,f)}function c(m,f,h,S){var O=h.type;return O===Z?k(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===De&&fs(O)===f.type)?(S=l(f,h.props),S.ref=Nr(m,f,h),S.return=m,S):(S=Ul(h.type,h.key,h.props,null,m.mode,S),S.ref=Nr(m,f,h),S.return=m,S)}function v(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Do(h,m.mode,S),f.return=m,f):(f=l(f,h.children||[]),f.return=m,f)}function k(m,f,h,S,O){return f===null||f.tag!==7?(f=Sn(h,m.mode,S,O),f.return=m,f):(f=l(f,h),f.return=m,f)}function N(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Lo(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case be:return h=Ul(f.type,f.key,f.props,null,m.mode,h),h.ref=Nr(m,null,f),h.return=m,h;case Re:return f=Do(f,m.mode,h),f.return=m,f;case De:var S=f._init;return N(m,S(f._payload),h)}if($e(f)||H(f))return f=Sn(f,m.mode,h,null),f.return=m,f;hl(m,f)}return null}function w(m,f,h,S){var O=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return O!==null?null:u(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case be:return h.key===O?c(m,f,h,S):null;case Re:return h.key===O?v(m,f,h,S):null;case De:return O=h._init,w(m,f,O(h._payload),S)}if($e(h)||H(h))return O!==null?null:k(m,f,h,S,null);hl(m,h)}return null}function P(m,f,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,u(f,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case be:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,O);case Re:return m=m.get(S.key===null?h:S.key)||null,v(f,m,S,O);case De:var B=S._init;return P(m,f,h,B(S._payload),O)}if($e(S)||H(S))return m=m.get(h)||null,k(f,m,S,O,null);hl(f,S)}return null}function L(m,f,h,S){for(var O=null,B=null,V=f,K=f=0,Le=null;V!==null&&K<h.length;K++){V.index>K?(Le=V,V=null):Le=V.sibling;var oe=w(m,V,h[K],S);if(oe===null){V===null&&(V=Le);break}e&&V&&oe.alternate===null&&t(m,V),f=i(oe,f,K),B===null?O=oe:B.sibling=oe,B=oe,V=Le}if(K===h.length)return n(m,V),ve&&hn(m,K),O;if(V===null){for(;K<h.length;K++)V=N(m,h[K],S),V!==null&&(f=i(V,f,K),B===null?O=V:B.sibling=V,B=V);return ve&&hn(m,K),O}for(V=r(m,V);K<h.length;K++)Le=P(V,m,K,h[K],S),Le!==null&&(e&&Le.alternate!==null&&V.delete(Le.key===null?K:Le.key),f=i(Le,f,K),B===null?O=Le:B.sibling=Le,B=Le);return e&&V.forEach(function(un){return t(m,un)}),ve&&hn(m,K),O}function D(m,f,h,S){var O=H(h);if(typeof O!="function")throw Error(p(150));if(h=O.call(h),h==null)throw Error(p(151));for(var B=O=null,V=f,K=f=0,Le=null,oe=h.next();V!==null&&!oe.done;K++,oe=h.next()){V.index>K?(Le=V,V=null):Le=V.sibling;var un=w(m,V,oe.value,S);if(un===null){V===null&&(V=Le);break}e&&V&&un.alternate===null&&t(m,V),f=i(un,f,K),B===null?O=un:B.sibling=un,B=un,V=Le}if(oe.done)return n(m,V),ve&&hn(m,K),O;if(V===null){for(;!oe.done;K++,oe=h.next())oe=N(m,oe.value,S),oe!==null&&(f=i(oe,f,K),B===null?O=oe:B.sibling=oe,B=oe);return ve&&hn(m,K),O}for(V=r(m,V);!oe.done;K++,oe=h.next())oe=P(V,m,K,oe.value,S),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?K:oe.key),f=i(oe,f,K),B===null?O=oe:B.sibling=oe,B=oe);return e&&V.forEach(function(Wd){return t(m,Wd)}),ve&&hn(m,K),O}function Ce(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Z&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case be:e:{for(var O=h.key,B=f;B!==null;){if(B.key===O){if(O=h.type,O===Z){if(B.tag===7){n(m,B.sibling),f=l(B,h.props.children),f.return=m,m=f;break e}}else if(B.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===De&&fs(O)===B.type){n(m,B.sibling),f=l(B,h.props),f.ref=Nr(m,B,h),f.return=m,m=f;break e}n(m,B);break}else t(m,B);B=B.sibling}h.type===Z?(f=Sn(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=Ul(h.type,h.key,h.props,null,m.mode,S),S.ref=Nr(m,f,h),S.return=m,m=S)}return a(m);case Re:e:{for(B=h.key;f!==null;){if(f.key===B)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=l(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Do(h,m.mode,S),f.return=m,m=f}return a(m);case De:return B=h._init,Ce(m,f,B(h._payload),S)}if($e(h))return L(m,f,h,S);if(H(h))return D(m,f,h,S);hl(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=l(f,h),f.return=m,m=f):(n(m,f),f=Lo(h,m.mode,S),f.return=m,m=f),a(m)):n(m,f)}return Ce}var bn=ps(!0),ms=ps(!1),gl=Xt(null),vl=null,$n=null,Vi=null;function Wi(){Vi=$n=vl=null}function Hi(e){var t=gl.current;me(gl),e._currentValue=t}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){vl=e,Vi=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Vi!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(vl===null)throw Error(p(308));$n=e,vl.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var gn=null;function Yi(e){gn===null?gn=[e]:gn.push(e)}function hs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Yi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,Yi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}function vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xl(e,t,n,r){var l=e.updateQueue;en=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,v=c.next;c.next=null,a===null?i=v:a.next=v,a=c;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==a&&(u===null?k.firstBaseUpdate=v:u.next=v,k.lastBaseUpdate=c))}if(i!==null){var N=l.baseState;a=0,k=v=c=null,u=i;do{var w=u.lane,P=u.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=e,D=u;switch(w=t,P=n,D.tag){case 1:if(L=D.payload,typeof L=="function"){N=L.call(P,N,w);break e}N=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=D.payload,w=typeof L=="function"?L.call(P,N,w):L,w==null)break e;N=d({},N,w);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[u]:w.push(u))}else P={eventTime:P,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(v=k=P,c=N):k=k.next=P,a|=w;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;w=u,u=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(k===null&&(c=N),l.baseState=c,l.firstBaseUpdate=v,l.lastBaseUpdate=k,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);xn|=a,e.lanes=a,e.memoizedState=N}}function ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var Sr={},Mt=Xt(Sr),jr=Xt(Sr),Cr=Xt(Sr);function vn(e){if(e===Sr)throw Error(p(174));return e}function Gi(e,t){switch(de(Cr,t),de(jr,e),de(Mt,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zn(t,e)}me(Mt),de(Mt,t)}function Vn(){me(Mt),me(jr),me(Cr)}function xs(e){vn(Cr.current);var t=vn(Mt.current),n=Zn(t,e.type);t!==n&&(de(jr,e),de(Mt,n))}function qi(e){jr.current===e&&(me(Mt),me(jr))}var ye=Xt(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function Zi(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var kl=se.ReactCurrentDispatcher,Ji=se.ReactCurrentBatchConfig,yn=0,xe=null,Me=null,Fe=null,Nl=!1,Er=!1,_r=0,fd=0;function Ve(){throw Error(p(321))}function eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function to(e,t,n,r,l,i){if(yn=i,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kl.current=e===null||e.memoizedState===null?gd:vd,e=n(r,l),Er){i=0;do{if(Er=!1,_r=0,25<=i)throw Error(p(301));i+=1,Fe=Me=null,t.updateQueue=null,kl.current=yd,e=n(r,l)}while(Er)}if(kl.current=Cl,t=Me!==null&&Me.next!==null,yn=0,Fe=Me=xe=null,Nl=!1,t)throw Error(p(300));return e}function no(){var e=_r!==0;return _r=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function gt(){if(Me===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?xe.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw Error(p(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function zr(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=gt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=Me,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,c=null,v=i;do{var k=v.lane;if((yn&k)===k)c!==null&&(c=c.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var N={lane:k,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};c===null?(u=c=N,a=r):c=c.next=N,xe.lanes|=k,xn|=k}v=v.next}while(v!==null&&v!==i);c===null?a=r:c.next=u,kt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,xe.lanes|=i,xn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lo(e){var t=gt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);kt(i,t.memoizedState)||(nt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ws(){}function ks(e,t){var n=xe,r=gt(),l=t(),i=!kt(r.memoizedState,l);if(i&&(r.memoizedState=l,nt=!0),r=r.queue,io(js.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Ss.bind(null,n,r,l,t),void 0,null),Te===null)throw Error(p(349));(yn&30)!==0||Ns(n,t,l)}return l}function Ns(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ss(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&Es(e)}function js(e,t,n){return n(function(){Cs(t)&&Es(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Es(e){var t=At(e,1);t!==null&&Et(t,e,1,-1)}function _s(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=hd.bind(null,xe,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zs(){return gt().memoizedState}function Sl(e,t,n,r){var l=Pt();xe.flags|=e,l.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var l=gt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&eo(r,a.deps)){l.memoizedState=Mr(t,n,i,r);return}}xe.flags|=e,l.memoizedState=Mr(1|t,n,i,r)}function Ms(e,t){return Sl(8390656,8,e,t)}function io(e,t){return jl(2048,8,e,t)}function Ps(e,t){return jl(4,2,e,t)}function Rs(e,t){return jl(4,4,e,t)}function Fs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ts(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,Fs.bind(null,t,e),n)}function oo(){}function Ls(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ds(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Is(e,t,n){return(yn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n):(kt(n,t)||(n=fa(),xe.lanes|=n,xn|=n,e.baseState=!0),t)}function pd(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{ue=n,Ji.transition=r}}function Os(){return gt().memoizedState}function md(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},As(e))Us(t,n);else if(n=hs(e,t,n,r),n!==null){var l=Ge();Et(n,e,r,l),bs(n,t,r)}}function hd(e,t,n){var r=on(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))Us(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,u=i(a,n);if(l.hasEagerState=!0,l.eagerState=u,kt(u,a)){var c=t.interleaved;c===null?(l.next=l,Yi(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=hs(e,t,l,r),n!==null&&(l=Ge(),Et(n,e,r,l),bs(n,t,r))}}function As(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Us(e,t){Er=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bs(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}var Cl={readContext:ht,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},gd={readContext:ht,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Ms,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4194308,4,Fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=md.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:_s,useDebugValue:oo,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=_s(!1),t=e[0];return e=pd.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,l=Pt();if(ve){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),Te===null)throw Error(p(349));(yn&30)!==0||Ns(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ms(js.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,Ss.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Te.identifierPrefix;if(ve){var n=Ot,r=It;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vd={readContext:ht,useCallback:Ls,useContext:ht,useEffect:io,useImperativeHandle:Ts,useInsertionEffect:Ps,useLayoutEffect:Rs,useMemo:Ds,useReducer:ro,useRef:zs,useState:function(){return ro(zr)},useDebugValue:oo,useDeferredValue:function(e){var t=gt();return Is(t,Me.memoizedState,e)},useTransition:function(){var e=ro(zr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:ws,useSyncExternalStore:ks,useId:Os,unstable_isNewReconciler:!1},yd={readContext:ht,useCallback:Ls,useContext:ht,useEffect:io,useImperativeHandle:Ts,useInsertionEffect:Ps,useLayoutEffect:Rs,useMemo:Ds,useReducer:lo,useRef:zs,useState:function(){return lo(zr)},useDebugValue:oo,useDeferredValue:function(e){var t=gt();return Me===null?t.memoizedState=e:Is(t,Me.memoizedState,e)},useTransition:function(){var e=lo(zr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:ws,useSyncExternalStore:ks,useId:Os,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=d({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ao(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:d({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),l=on(e),i=Ut(r,l);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,l),t!==null&&(Et(t,e,l,r),yl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),l=on(e),i=Ut(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,l),t!==null&&(Et(t,e,l,r),yl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=on(e),l=Ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=tn(e,l,r),t!==null&&(Et(t,e,r,n),yl(t,e,r))}};function $s(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(l,i):!0}function Bs(e,t,n){var r=!1,l=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=ht(i):(l=tt(t)?pn:Be.current,r=t.contextTypes,i=(r=r!=null)?In(e,l):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function so(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ki(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ht(i):(i=tt(t)?pn:Be.current,l.context=In(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ao(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&El.enqueueReplaceState(l,l.state,null),xl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=M(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function Ws(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tl||(Tl=!0,Eo=r),co(e,t)},n}function Hs(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){co(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){co(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Td.bind(null,e,t,n),t.then(e,e))}function Ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var wd=se.ReactCurrentOwner,nt=!1;function Ke(e,t,n,r){t.child=e===null?ms(t,null,n,r):bn(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var i=t.ref;return Bn(t,l),r=to(e,t,n,r,i,l),n=no(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(ve&&n&&Ai(t),t.flags|=1,Ke(e,t,r,l),t.child)}function qs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xs(e,t,i,r,l)):(e=Ul(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(a,r)&&e.ref===t.ref)return bt(e,t,l)}return t.flags|=1,e=sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(hr(i,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,bt(e,t,l)}return fo(e,t,n,r,l)}function Zs(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Qn,ct),ct|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Qn,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(Qn,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(Qn,ct),ct|=r;return Ke(e,t,l,n),t.child}function Js(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fo(e,t,n,r,l){var i=tt(n)?pn:Be.current;return i=In(t,i),Bn(t,l),n=to(e,t,n,r,i,l),r=no(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(ve&&r&&Ai(t),t.flags|=1,Ke(e,t,n,l),t.child)}function eu(e,t,n,r,l){if(tt(n)){var i=!0;cl(t)}else i=!1;if(Bn(t,l),t.stateNode===null)zl(e,t),Bs(t,n,r),so(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,v=n.contextType;typeof v=="object"&&v!==null?v=ht(v):(v=tt(n)?pn:Be.current,v=In(t,v));var k=n.getDerivedStateFromProps,N=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";N||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==v)&&Vs(t,a,r,v),en=!1;var w=t.memoizedState;a.state=w,xl(t,r,a,l),c=t.memoizedState,u!==r||w!==c||et.current||en?(typeof k=="function"&&(ao(t,n,k,r),c=t.memoizedState),(u=en||$s(t,n,u,r,w,c,v))?(N||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=v,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gs(e,t),u=t.memoizedProps,v=t.type===t.elementType?u:St(t.type,u),a.props=v,N=t.pendingProps,w=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=tt(n)?pn:Be.current,c=In(t,c));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==N||w!==c)&&Vs(t,a,r,c),en=!1,w=t.memoizedState,a.state=w,xl(t,r,a,l);var L=t.memoizedState;u!==N||w!==L||et.current||en?(typeof P=="function"&&(ao(t,n,P,r),L=t.memoizedState),(v=en||$s(t,n,v,r,w,L,c)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,L,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,L,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),a.props=r,a.state=L,a.context=c,r=v):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return po(e,t,n,r,i,l)}function po(e,t,n,r,l,i){Js(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&is(t,n,!1),bt(e,t,i);r=t.stateNode,wd.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,u,i)):Ke(e,t,u,i),t.memoizedState=r.state,l&&is(t,n,!0),t.child}function tu(e){var t=e.stateNode;t.pendingContext?rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rs(e,t.context,!1),Gi(e,t.containerInfo)}function nu(e,t,n,r,l){return Un(),Bi(l),t.flags|=256,Ke(e,t,n,r),t.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,t,n){var r=t.pendingProps,l=ye.current,i=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),de(ye,l&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=bl(a,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ho(n),t.memoizedState=mo,e):go(t,a));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return kd(e,t,a,r,u,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,u=l.sibling;var c={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sn(l,c),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=sn(u,i):(i=Sn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ho(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=mo,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function go(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _l(e,t,n,r){return r!==null&&Bi(r),bn(t,e.child,null,n),e=go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=uo(Error(p(422))),_l(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=bl({mode:"visible",children:r.children},l,0,null),i=Sn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&bn(t,e.child,null,a),t.child.memoizedState=ho(a),t.memoizedState=mo,i);if((t.mode&1)===0)return _l(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(p(419)),r=uo(i,r,void 0),_l(e,t,a,r)}if(u=(a&e.childLanes)!==0,nt||u){if(r=Te,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,At(e,l),Et(r,e,l,-1))}return Fo(),r=uo(Error(p(421))),_l(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ld.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ut=qt(l.nextSibling),st=t,ve=!0,Nt=null,e!==null&&(pt[mt++]=It,pt[mt++]=Ot,pt[mt++]=mn,It=e.id,Ot=e.overflow,mn=t),t=go(t,r.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function vo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function iu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ke(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),vo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}vo(t,!0,n,null,i);break;case"together":vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t,n){switch(t.tag){case 3:tu(t),Un();break;case 5:xs(t);break;case 1:tt(t.type)&&cl(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;de(gl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ru(e,t,n):(de(ye,ye.current&1),e=bt(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return iu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Zs(e,t,n)}return bt(e,t,n)}var ou,yo,au,su;ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},yo=function(){},au=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,vn(Mt.current);var i=null;switch(n){case"input":l=J(e,l),r=J(e,r),i=[];break;case"select":l=d({},l,{value:void 0}),r=d({},r,{value:void 0}),i=[];break;case"textarea":l=Gn(e,l),r=Gn(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Xl(n,r);var a;n=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var u=l[v];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(z.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var c=r[v];if(u=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&c!==u&&(c!=null||u!=null))if(v==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(v,n)),n=c;else v==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(i=i||[]).push(v,c)):v==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(v,""+c):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(z.hasOwnProperty(v)?(c!=null&&v==="onScroll"&&pe("scroll",e),i||u===c||(i=[])):(i=i||[]).push(v,c))}n&&(i=i||[]).push("style",n);var v=i;(t.updateQueue=v)&&(t.flags|=4)}},su=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sd(e,t,n){var r=t.pendingProps;switch(Ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return tt(t.type)&&ul(),We(t),null;case 3:return r=t.stateNode,Vn(),me(et),me(Be),Zi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ml(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Mo(Nt),Nt=null))),yo(e,t),We(t),null;case 5:qi(t);var l=vn(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)au(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return We(t),null}if(e=vn(Mt.current),ml(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[wr]=i,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(l=0;l<vr.length;l++)pe(vr[l],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Ie(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Or(r,i),pe("invalid",r)}Xl(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,u,e),l=["children",""+u]):z.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":ae(r),ft(r,i,!0);break;case"textarea":ae(r),Ar(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=al)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[wr]=r,ou(e,t,!1,!1),t.stateNode=e;e:{switch(a=Zl(n,r),n){case"dialog":pe("cancel",e),pe("close",e),l=r;break;case"iframe":case"object":case"embed":pe("load",e),l=r;break;case"video":case"audio":for(l=0;l<vr.length;l++)pe(vr[l],e);l=r;break;case"source":pe("error",e),l=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),l=r;break;case"details":pe("toggle",e),l=r;break;case"input":Ie(e,r),l=J(e,r),pe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=d({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Or(e,r),l=Gn(e,r),pe("invalid",e);break;default:l=r}Xl(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var c=u[i];i==="style"?Xo(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jn(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vt(e,c):typeof c=="number"&&Vt(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(z.hasOwnProperty(i)?c!=null&&i==="onScroll"&&pe("scroll",e):c!=null&&he(e,i,c,a))}switch(n){case"input":ae(e),ft(e,r,!1);break;case"textarea":ae(e),Ar(e);break;case"option":r.value!=null&&e.setAttribute("value",""+F(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)su(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=vn(Cr.current),vn(Mt.current),ml(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return We(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ds(),Un(),t.flags|=98560,i=!1;else if(i=ml(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[zt]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),i=!1}else Nt!==null&&(Mo(Nt),Nt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Pe===0&&(Pe=3):Fo())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Vn(),yo(e,t),e===null&&yr(t.stateNode.containerInfo),We(t),null;case 10:return Hi(t.type._context),We(t),null;case 17:return tt(t.type)&&ul(),We(t),null;case 19:if(me(ye),i=t.memoizedState,i===null)return We(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Pr(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,Pr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>Yn&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=wl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ve)return We(t),null}else 2*je()-i.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Ro(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function jd(e,t){switch(Ui(t),t.tag){case 1:return tt(t.type)&&ul(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),me(et),me(Be),Zi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qi(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return Vn(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var Ml=!1,He=!1,Cd=typeof WeakSet=="function"?WeakSet:Set,T=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function xo(e,t,n){try{n()}catch(r){Se(e,t,r)}}var uu=!1;function Ed(e,t){if(Pi=Gr,e=$a(),Ni(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,v=0,k=0,N=e,w=null;t:for(;;){for(var P;N!==n||l!==0&&N.nodeType!==3||(u=a+l),N!==i||r!==0&&N.nodeType!==3||(c=a+r),N.nodeType===3&&(a+=N.nodeValue.length),(P=N.firstChild)!==null;)w=N,N=P;for(;;){if(N===e)break t;if(w===n&&++v===l&&(u=a),w===i&&++k===r&&(c=a),(P=N.nextSibling)!==null)break;N=w,w=N.parentNode}N=P}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ri={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var D=L.memoizedProps,Ce=L.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?D:St(t.type,D),Ce);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(S){Se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return L=uu,uu=!1,L}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&xo(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cu(e){var t=e.alternate;t!==null&&(e.alternate=null,cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[wr],delete t[Di],delete t[sd],delete t[ud])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}function No(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}var Oe=null,jt=!1;function nn(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Vr,n)}catch{}switch(n.tag){case 5:He||Hn(n,t);case 6:var r=Oe,l=jt;Oe=null,nn(e,t,n),Oe=r,jt=l,Oe!==null&&(jt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(jt?(e=Oe,n=n.stateNode,e.nodeType===8?Li(e.parentNode,n):e.nodeType===1&&Li(e,n),ur(e)):Li(Oe,n.stateNode));break;case 4:r=Oe,l=jt,Oe=n.stateNode.containerInfo,jt=!0,nn(e,t,n),Oe=r,jt=l;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&xo(n,t,a),l=l.next}while(l!==r)}nn(e,t,n);break;case 1:if(!He&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Se(n,t,u)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,nn(e,t,n),He=r):nn(e,t,n);break;default:nn(e,t,n)}}function mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cd),t.forEach(function(r){var l=Dd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:Oe=u.stateNode,jt=!1;break e;case 3:Oe=u.stateNode.containerInfo,jt=!0;break e;case 4:Oe=u.stateNode.containerInfo,jt=!0;break e}u=u.return}if(Oe===null)throw Error(p(160));pu(i,a,l),Oe=null,jt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(v){Se(l,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hu(t,e),t=t.sibling}function hu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Rt(e),r&4){try{Rr(3,e,e.return),Pl(3,e)}catch(D){Se(e,e.return,D)}try{Rr(5,e,e.return)}catch(D){Se(e,e.return,D)}}break;case 1:Ct(t,e),Rt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(Ct(t,e),Rt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var l=e.stateNode;try{Vt(l,"")}catch(D){Se(e,e.return,D)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Je(l,i),Zl(u,a);var v=Zl(u,i);for(a=0;a<c.length;a+=2){var k=c[a],N=c[a+1];k==="style"?Xo(l,N):k==="dangerouslySetInnerHTML"?Jn(l,N):k==="children"?Vt(l,N):he(l,k,N,v)}switch(u){case"input":Ye(l,i);break;case"textarea":qn(l,i);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?Bt(l,!!i.multiple,P,!1):w!==!!i.multiple&&(i.defaultValue!=null?Bt(l,!!i.multiple,i.defaultValue,!0):Bt(l,!!i.multiple,i.multiple?[]:"",!1))}l[wr]=i}catch(D){Se(e,e.return,D)}}break;case 6:if(Ct(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(D){Se(e,e.return,D)}}break;case 3:if(Ct(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(D){Se(e,e.return,D)}break;case 4:Ct(t,e),Rt(e);break;case 13:Ct(t,e),Rt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Co=je())),r&4&&mu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(He=(v=He)||k,Ct(t,e),He=v):Ct(t,e),Rt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!k&&(e.mode&1)!==0)for(T=e,k=e.child;k!==null;){for(N=T=k;T!==null;){switch(w=T,P=w.child,w.tag){case 0:case 11:case 14:case 15:Rr(4,w,w.return);break;case 1:Hn(w,w.return);var L=w.stateNode;if(typeof L.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(D){Se(r,n,D)}}break;case 5:Hn(w,w.return);break;case 22:if(w.memoizedState!==null){yu(N);continue}}P!==null?(P.return=w,T=P):yu(N)}k=k.sibling}e:for(k=null,N=e;;){if(N.tag===5){if(k===null){k=N;try{l=N.stateNode,v?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=N.stateNode,c=N.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Ur("display",a))}catch(D){Se(e,e.return,D)}}}else if(N.tag===6){if(k===null)try{N.stateNode.nodeValue=v?"":N.memoizedProps}catch(D){Se(e,e.return,D)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;k===N&&(k=null),N=N.return}k===N&&(k=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Ct(t,e),Rt(e),r&4&&mu(e);break;case 21:break;default:Ct(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(du(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vt(l,""),r.flags&=-33);var i=fu(e);No(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=fu(e);ko(e,u,a);break;default:throw Error(p(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _d(e,t,n){T=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Ml;if(!a){var u=l.alternate,c=u!==null&&u.memoizedState!==null||He;u=Ml;var v=He;if(Ml=a,(He=c)&&!v)for(T=l;T!==null;)a=T,c=a.child,a.tag===22&&a.memoizedState!==null?xu(l):c!==null?(c.return=a,T=c):xu(l);for(;i!==null;)T=i,gu(i),i=i.sibling;T=l,Ml=u,He=v}vu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,T=i):vu(e)}}function vu(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ys(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ys(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var k=v.memoizedState;if(k!==null){var N=k.dehydrated;N!==null&&ur(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}He||t.flags&512&&wo(t)}catch(w){Se(t,t.return,w)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function yu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function xu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){Se(t,l,c)}}var i=t.return;try{wo(t)}catch(c){Se(t,i,c)}break;case 5:var a=t.return;try{wo(t)}catch(c){Se(t,a,c)}}}catch(c){Se(t,t.return,c)}if(t===e){T=null;break}var u=t.sibling;if(u!==null){u.return=t.return,T=u;break}T=t.return}}var zd=Math.ceil,Rl=se.ReactCurrentDispatcher,So=se.ReactCurrentOwner,vt=se.ReactCurrentBatchConfig,ie=0,Te=null,ze=null,Ae=0,ct=0,Qn=Xt(0),Pe=0,Fr=null,xn=0,Fl=0,jo=0,Tr=null,rt=null,Co=0,Yn=1/0,$t=null,Tl=!1,Eo=null,rn=null,Ll=!1,ln=null,Dl=0,Lr=0,_o=null,Il=-1,Ol=0;function Ge(){return(ie&6)!==0?je():Il!==-1?Il:Il=je()}function on(e){return(e.mode&1)===0?1:(ie&2)!==0&&Ae!==0?Ae&-Ae:dd.transition!==null?(Ol===0&&(Ol=fa()),Ol):(e=ue,e!==0||(e=window.event,e=e===void 0?16:ka(e.type)),e)}function Et(e,t,n,r){if(50<Lr)throw Lr=0,_o=null,Error(p(185));lr(e,n,r),((ie&2)===0||e!==Te)&&(e===Te&&((ie&2)===0&&(Fl|=n),Pe===4&&an(e,Ae)),lt(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Yn=je()+500,dl&&Jt()))}function lt(e,t){var n=e.callbackNode;dc(e,t);var r=Qr(e,e===Te?Ae:0);if(r===0)n!==null&&ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ua(n),t===1)e.tag===0?cd(ku.bind(null,e)):os(ku.bind(null,e)),od(function(){(ie&6)===0&&Jt()}),n=null;else{switch(pa(r)){case 1:n=ii;break;case 4:n=ca;break;case 16:n=Br;break;case 536870912:n=da;break;default:n=Br}n=Mu(n,wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wu(e,t){if(Il=-1,Ol=0,(ie&6)!==0)throw Error(p(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Qr(e,e===Te?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Al(e,r);else{t=r;var l=ie;ie|=2;var i=Su();(Te!==e||Ae!==t)&&($t=null,Yn=je()+500,kn(e,t));do try{Rd();break}catch(u){Nu(e,u)}while(!0);Wi(),Rl.current=i,ie=l,ze!==null?t=0:(Te=null,Ae=0,t=Pe)}if(t!==0){if(t===2&&(l=oi(e),l!==0&&(r=l,t=zo(e,l))),t===1)throw n=Fr,kn(e,0),an(e,r),lt(e,je()),n;if(t===6)an(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Md(l)&&(t=Al(e,r),t===2&&(i=oi(e),i!==0&&(r=i,t=zo(e,i))),t===1))throw n=Fr,kn(e,0),an(e,r),lt(e,je()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:Nn(e,rt,$t);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Co+500-je(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Nn.bind(null,e,rt,$t),t);break}Nn(e,rt,$t);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-wt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zd(r/1960))-r,10<r){e.timeoutHandle=Ti(Nn.bind(null,e,rt,$t),r);break}Nn(e,rt,$t);break;case 5:Nn(e,rt,$t);break;default:throw Error(p(329))}}}return lt(e,je()),e.callbackNode===n?wu.bind(null,e):null}function zo(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Al(e,t),e!==2&&(t=rt,rt=n,t!==null&&Mo(t)),e}function Mo(e){rt===null?rt=e:rt.push.apply(rt,e)}function Md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!kt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~jo,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function ku(e){if((ie&6)!==0)throw Error(p(327));Kn();var t=Qr(e,0);if((t&1)===0)return lt(e,je()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=oi(e);r!==0&&(t=r,n=zo(e,r))}if(n===1)throw n=Fr,kn(e,0),an(e,t),lt(e,je()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,rt,$t),lt(e,je()),null}function Po(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Yn=je()+500,dl&&Jt())}}function wn(e){ln!==null&&ln.tag===0&&(ie&6)===0&&Kn();var t=ie;ie|=1;var n=vt.transition,r=ue;try{if(vt.transition=null,ue=1,e)return e()}finally{ue=r,vt.transition=n,ie=t,(ie&6)===0&&Jt()}}function Ro(){ct=Qn.current,me(Qn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,id(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ul();break;case 3:Vn(),me(et),me(Be),Zi();break;case 5:qi(r);break;case 4:Vn();break;case 13:me(ye);break;case 19:me(ye);break;case 10:Hi(r.type._context);break;case 22:case 23:Ro()}n=n.return}if(Te=e,ze=e=sn(e.current,null),Ae=ct=t,Pe=0,Fr=null,jo=Fl=xn=0,rt=Tr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}gn=null}return e}function Nu(e,t){do{var n=ze;try{if(Wi(),kl.current=Cl,Nl){for(var r=xe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Nl=!1}if(yn=0,Fe=Me=xe=null,Er=!1,_r=0,So.current=null,n===null||n.return===null){Pe=1,Fr=t,ze=null;break}e:{var i=e,a=n.return,u=n,c=t;if(t=Ae,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=c,k=u,N=k.tag;if((k.mode&1)===0&&(N===0||N===11||N===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=Ys(a);if(P!==null){P.flags&=-257,Ks(P,a,u,i,t),P.mode&1&&Qs(i,v,t),t=P,c=v;var L=t.updateQueue;if(L===null){var D=new Set;D.add(c),t.updateQueue=D}else L.add(c);break e}else{if((t&1)===0){Qs(i,v,t),Fo();break e}c=Error(p(426))}}else if(ve&&u.mode&1){var Ce=Ys(a);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),Ks(Ce,a,u,i,t),Bi(Wn(c,u));break e}}i=c=Wn(c,u),Pe!==4&&(Pe=2),Tr===null?Tr=[i]:Tr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Ws(i,c,t);vs(i,m);break e;case 1:u=c;var f=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rn===null||!rn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Hs(i,u,t);vs(i,S);break e}}i=i.return}while(i!==null)}Cu(n)}catch(O){t=O,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Su(){var e=Rl.current;return Rl.current=Cl,e===null?Cl:e}function Fo(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Te===null||(xn&268435455)===0&&(Fl&268435455)===0||an(Te,Ae)}function Al(e,t){var n=ie;ie|=2;var r=Su();(Te!==e||Ae!==t)&&($t=null,kn(e,t));do try{Pd();break}catch(l){Nu(e,l)}while(!0);if(Wi(),ie=n,Rl.current=r,ze!==null)throw Error(p(261));return Te=null,Ae=0,Pe}function Pd(){for(;ze!==null;)ju(ze)}function Rd(){for(;ze!==null&&!nc();)ju(ze)}function ju(e){var t=zu(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Cu(e):ze=t,So.current=null}function Cu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Sd(n,t,ct),n!==null){ze=n;return}}else{if(n=jd(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Pe===0&&(Pe=5)}function Nn(e,t,n){var r=ue,l=vt.transition;try{vt.transition=null,ue=1,Fd(e,t,n,r)}finally{vt.transition=l,ue=r}return null}function Fd(e,t,n,r){do Kn();while(ln!==null);if((ie&6)!==0)throw Error(p(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fc(e,i),e===Te&&(ze=Te=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ll||(Ll=!0,Mu(Br,function(){return Kn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=vt.transition,vt.transition=null;var a=ue;ue=1;var u=ie;ie|=4,So.current=null,Ed(e,n),hu(n,e),Zc(Ri),Gr=!!Pi,Ri=Pi=null,e.current=n,_d(n),rc(),ie=u,ue=a,vt.transition=i}else e.current=n;if(Ll&&(Ll=!1,ln=e,Dl=l),i=e.pendingLanes,i===0&&(rn=null),oc(n.stateNode),lt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Tl)throw Tl=!1,e=Eo,Eo=null,e;return(Dl&1)!==0&&e.tag!==0&&Kn(),i=e.pendingLanes,(i&1)!==0?e===_o?Lr++:(Lr=0,_o=e):Lr=0,Jt(),null}function Kn(){if(ln!==null){var e=pa(Dl),t=vt.transition,n=ue;try{if(vt.transition=null,ue=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Dl=0,(ie&6)!==0)throw Error(p(331));var l=ie;for(ie|=4,T=e.current;T!==null;){var i=T,a=i.child;if((T.flags&16)!==0){var u=i.deletions;if(u!==null){for(var c=0;c<u.length;c++){var v=u[c];for(T=v;T!==null;){var k=T;switch(k.tag){case 0:case 11:case 15:Rr(8,k,i)}var N=k.child;if(N!==null)N.return=k,T=N;else for(;T!==null;){k=T;var w=k.sibling,P=k.return;if(cu(k),k===v){T=null;break}if(w!==null){w.return=P,T=w;break}T=P}}}var L=i.alternate;if(L!==null){var D=L.child;if(D!==null){L.child=null;do{var Ce=D.sibling;D.sibling=null,D=Ce}while(D!==null)}}T=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,T=a;else e:for(;T!==null;){if(i=T,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,T=m;break e}T=i.return}}var f=e.current;for(T=f;T!==null;){a=T;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,T=h;else e:for(a=f;T!==null;){if(u=T,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Pl(9,u)}}catch(O){Se(u,u.return,O)}if(u===a){T=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,T=S;break e}T=u.return}}if(ie=l,Jt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Vr,e)}catch{}r=!0}return r}finally{ue=n,vt.transition=t}}return!1}function Eu(e,t,n){t=Wn(n,t),t=Ws(e,t,1),e=tn(e,t,1),t=Ge(),e!==null&&(lr(e,1,t),lt(e,t))}function Se(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Wn(n,e),e=Hs(t,e,1),t=tn(t,e,1),e=Ge(),t!==null&&(lr(t,1,e),lt(t,e));break}}t=t.return}}function Td(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Ae&n)===n&&(Pe===4||Pe===3&&(Ae&130023424)===Ae&&500>je()-Co?kn(e,0):jo|=n),lt(e,t)}function _u(e,t){t===0&&((e.mode&1)===0?t=1:(t=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var n=Ge();e=At(e,t),e!==null&&(lr(e,t,n),lt(e,n))}function Ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_u(e,n)}function Dd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),_u(e,n)}var zu;zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return nt=!1,Nd(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,ve&&(t.flags&1048576)!==0&&as(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zl(e,t),e=t.pendingProps;var l=In(t,Be.current);Bn(t,n),l=to(null,t,r,e,l,n);var i=no();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,cl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ki(t),l.updater=El,t.stateNode=l,l._reactInternals=t,so(t,r,e,n),t=po(null,t,r,!0,i,n)):(t.tag=0,ve&&i&&Ai(t),Ke(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Od(r),e=St(r,e),l){case 0:t=fo(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=qs(null,t,r,St(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),fo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),eu(e,t,r,l,n);case 3:e:{if(tu(t),e===null)throw Error(p(387));r=t.pendingProps,i=t.memoizedState,l=i.element,gs(e,t),xl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Wn(Error(p(423)),t),t=nu(e,t,r,n,l);break e}else if(r!==l){l=Wn(Error(p(424)),t),t=nu(e,t,r,n,l);break e}else for(ut=qt(t.stateNode.containerInfo.firstChild),st=t,ve=!0,Nt=null,n=ms(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===l){t=bt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return xs(t),e===null&&$i(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Fi(r,l)?a=null:i!==null&&Fi(r,i)&&(t.flags|=32),Js(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&$i(t),null;case 13:return ru(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Gs(e,t,r,l,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,de(gl,r._currentValue),r._currentValue=a,i!==null)if(kt(i.value,a)){if(i.children===l.children&&!et.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ut(-1,n&-n),c.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var k=v.pending;k===null?c.next=c:(c.next=k.next,k.next=c),v.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Qi(i.return,n,t),u.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(p(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Qi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ke(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Bn(t,n),l=ht(l),r=r(l),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,l=St(r,t.pendingProps),l=St(r.type,l),qs(e,t,r,l,n);case 15:return Xs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),zl(e,t),t.tag=1,tt(r)?(e=!0,cl(t)):e=!1,Bn(t,n),Bs(t,r,l),so(t,r,l,n),po(null,t,r,!0,e,n);case 19:return iu(e,t,n);case 22:return Zs(e,t,n)}throw Error(p(156,t.tag))};function Mu(e,t){return sa(e,t)}function Id(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Id(e,t,n,r)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Od(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===Ze)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ul(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")To(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Z:return Sn(n.children,l,i,t);case ke:a=8,l|=8;break;case ot:return e=yt(12,n,t,l|2),e.elementType=ot,e.lanes=i,e;case Qe:return e=yt(13,n,t,l),e.elementType=Qe,e.lanes=i,e;case Xe:return e=yt(19,n,t,l),e.elementType=Xe,e.lanes=i,e;case ge:return bl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:a=10;break e;case Ft:a=9;break e;case dt:a=11;break e;case Ze:a=14;break e;case De:a=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=yt(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=yt(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Lo(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ad(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Io(e,t,n,r,l,i,a,u,c){return e=new Ad(e,t,n,u,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ki(i),e}function Ud(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pu(e){if(!e)return Zt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(tt(n))return ls(e,n,t)}return t}function Ru(e,t,n,r,l,i,a,u,c){return e=Io(n,r,!0,e,l,i,a,u,c),e.context=Pu(null),n=e.current,r=Ge(),l=on(n),i=Ut(r,l),i.callback=t??null,tn(n,i,l),e.current.lanes=l,lr(e,l,r),lt(e,r),e}function $l(e,t,n,r){var l=t.current,i=Ge(),a=on(l);return n=Pu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(l,t,a),e!==null&&(Et(e,l,a,i),yl(e,l,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function bd(){return null}var Tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}Vl.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));$l(e,t,null,null)},Vl.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){$l(null,e,null,null)}),t[Lt]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ga();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&xa(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function $d(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var v=Bl(a);i.call(v)}}var a=Ru(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=a,e[Lt]=a.current,yr(e.nodeType===8?e.parentNode:e),wn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var v=Bl(c);u.call(v)}}var c=Io(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=c,e[Lt]=c.current,yr(e.nodeType===8?e.parentNode:e),wn(function(){$l(t,c,n,r)}),c}function Hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var c=Bl(a);u.call(c)}}$l(t,a,e,l)}else a=$d(n,t,e,l,r);return Bl(a)}ma=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(si(t,n|1),lt(t,je()),(ie&6)===0&&(Yn=je()+500,Jt()))}break;case 13:wn(function(){var r=At(e,1);if(r!==null){var l=Ge();Et(r,e,1,l)}}),Oo(e,1)}},ui=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ge();Et(t,e,134217728,n)}Oo(e,134217728)}},ha=function(e){if(e.tag===13){var t=on(e),n=At(e,t);if(n!==null){var r=Ge();Et(n,e,t,r)}Oo(e,t)}},ga=function(){return ue},va=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}},ti=function(e,t,n){switch(t){case"input":if(Ye(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(p(90));fe(r),Ye(r,l)}}}break;case"textarea":qn(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},ta=Po,na=wn;var Bd={usingClientEntryPoint:!1,Events:[kr,Ln,sl,Jo,ea,Po]},Dr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vd={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||bd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Vr=Ql.inject(Vd),_t=Ql}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(p(200));return Ud(e,t,null,n)},it.createRoot=function(e,t){if(!Uo(e))throw Error(p(299));var n=!1,r="",l=Tu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Io(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,yr(e.nodeType===8?e.parentNode:e),new Ao(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=oa(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return wn(e)},it.hydrate=function(e,t,n){if(!Wl(t))throw Error(p(200));return Hl(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Tu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ru(t,null,e,1,n??null,l,!1,i,a),e[Lt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vl(t)},it.render=function(e,t,n){if(!Wl(t))throw Error(p(200));return Hl(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(p(40));return e._reactRootContainer?(wn(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},it.unstable_batchedUpdates=Po,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Hl(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Bu;function Zd(){if(Bu)return Bo.exports;Bu=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(x){console.error(x)}}return y(),Bo.exports=Xd(),Bo.exports}var Vu;function Jd(){if(Vu)return Yl;Vu=1;var y=Zd();return Yl.createRoot=y.createRoot,Yl.hydrateRoot=y.hydrateRoot,Yl}var ef=Jd();const tf=Yu(ef);var Yo={};(function y(x,p,Y,z){var A=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),I=typeof Path2D=="function"&&typeof DOMMatrix=="function",$=(function(){if(!x.OffscreenCanvas)return!1;try{var d=new OffscreenCanvas(1,1),s=d.getContext("2d");s.fillRect(0,0,1,1);var g=d.transferToImageBitmap();s.createPattern(g,"no-repeat")}catch{return!1}return!0})();function W(){}function le(d){var s=p.exports.Promise,g=s!==void 0?s:x.Promise;return typeof g=="function"?new g(d):(d(W,W),null)}var te=(function(d,s){return{transform:function(g){if(d)return g;if(s.has(g))return s.get(g);var j=new OffscreenCanvas(g.width,g.height),C=j.getContext("2d");return C.drawImage(g,0,0),s.set(g,j),j},clear:function(){s.clear()}}})($,new Map),X=(function(){var d=Math.floor(16.666666666666668),s,g,j={},C=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(M){var R=Math.random();return j[R]=requestAnimationFrame(function _(F){C===F||C+d-1<F?(C=F,delete j[R],M()):j[R]=requestAnimationFrame(_)}),R},g=function(M){j[M]&&cancelAnimationFrame(j[M])}):(s=function(M){return setTimeout(M,d)},g=function(M){return clearTimeout(M)}),{frame:s,cancel:g}})(),ne=(function(){var d,s,g={};function j(C){function M(R,_){C.postMessage({options:R||{},callback:_})}C.init=function(_){var F=_.transferControlToOffscreen();C.postMessage({canvas:F},[F])},C.fire=function(_,F,Q){if(s)return M(_,null),s;var ee=Math.random().toString(36).slice(2);return s=le(function(ae){function fe(Ne){Ne.data.callback===ee&&(delete g[ee],C.removeEventListener("message",fe),s=null,te.clear(),Q(),ae())}C.addEventListener("message",fe),M(_,ee),g[ee]=fe.bind(null,{data:{callback:ee}})}),s},C.reset=function(){C.postMessage({reset:!0});for(var _ in g)g[_](),delete g[_]}}return function(){if(d)return d;if(!Y&&A){var C=["var CONFETTI, SIZE = {}, module = {};","("+y.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([C])))}catch(M){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",M),null}j(d)}return d}})(),Ee={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function we(d,s){return s?s(d):d}function b(d){return d!=null}function U(d,s,g){return we(d&&b(d[s])?d[s]:Ee[s],g)}function _e(d){return d<0?0:Math.floor(d)}function Ue(d,s){return Math.floor(Math.random()*(s-d))+d}function he(d){return parseInt(d,16)}function se(d){return d.map(be)}function be(d){var s=String(d).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:he(s.substring(0,2)),g:he(s.substring(2,4)),b:he(s.substring(4,6))}}function Re(d){var s=U(d,"origin",Object);return s.x=U(s,"x",Number),s.y=U(s,"y",Number),s}function Z(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function ke(d){var s=d.getBoundingClientRect();d.width=s.width,d.height=s.height}function ot(d){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=d,s}function qe(d,s,g,j,C,M,R,_,F){d.save(),d.translate(s,g),d.rotate(M),d.scale(j,C),d.arc(0,0,1,R,_,F),d.restore()}function Ft(d){var s=d.angle*(Math.PI/180),g=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-s+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar,flat:d.flat}}function dt(d,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var g=s.tick++/s.totalTicks,j=s.x+s.random*s.tiltCos,C=s.y+s.random*s.tiltSin,M=s.wobbleX+s.random*s.tiltCos,R=s.wobbleY+s.random*s.tiltSin;if(d.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-g)+")",d.beginPath(),I&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))d.fill(ge(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(M-j)*.1,Math.abs(R-C)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var _=Math.PI/10*s.wobble,F=Math.abs(M-j)*.1,Q=Math.abs(R-C)*.1,ee=s.shape.bitmap.width*s.scalar,ae=s.shape.bitmap.height*s.scalar,fe=new DOMMatrix([Math.cos(_)*F,Math.sin(_)*F,-Math.sin(_)*Q,Math.cos(_)*Q,s.x,s.y]);fe.multiplySelf(new DOMMatrix(s.shape.matrix));var Ne=d.createPattern(te.transform(s.shape.bitmap),"no-repeat");Ne.setTransform(fe),d.globalAlpha=1-g,d.fillStyle=Ne,d.fillRect(s.x-ee/2,s.y-ae/2,ee,ae),d.globalAlpha=1}else if(s.shape==="circle")d.ellipse?d.ellipse(s.x,s.y,Math.abs(M-j)*s.ovalScalar,Math.abs(R-C)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):qe(d,s.x,s.y,Math.abs(M-j)*s.ovalScalar,Math.abs(R-C)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var J=Math.PI/2*3,Ie=4*s.scalar,Je=8*s.scalar,Ye=s.x,ft=s.y,xt=5,$e=Math.PI/xt;xt--;)Ye=s.x+Math.cos(J)*Je,ft=s.y+Math.sin(J)*Je,d.lineTo(Ye,ft),J+=$e,Ye=s.x+Math.cos(J)*Ie,ft=s.y+Math.sin(J)*Ie,d.lineTo(Ye,ft),J+=$e;else d.moveTo(Math.floor(s.x),Math.floor(s.y)),d.lineTo(Math.floor(s.wobbleX),Math.floor(C)),d.lineTo(Math.floor(M),Math.floor(R)),d.lineTo(Math.floor(j),Math.floor(s.wobbleY));return d.closePath(),d.fill(),s.tick<s.totalTicks}function Qe(d,s,g,j,C){var M=s.slice(),R=d.getContext("2d"),_,F,Q=le(function(ee){function ae(){_=F=null,R.clearRect(0,0,j.width,j.height),te.clear(),C(),ee()}function fe(){Y&&!(j.width===z.width&&j.height===z.height)&&(j.width=d.width=z.width,j.height=d.height=z.height),!j.width&&!j.height&&(g(d),j.width=d.width,j.height=d.height),R.clearRect(0,0,j.width,j.height),M=M.filter(function(Ne){return dt(R,Ne)}),M.length?_=X.frame(fe):ae()}_=X.frame(fe),F=ae});return{addFettis:function(ee){return M=M.concat(ee),Q},canvas:d,promise:Q,reset:function(){_&&X.cancel(_),F&&F()}}}function Xe(d,s){var g=!d,j=!!U(s||{},"resize"),C=!1,M=U(s,"disableForReducedMotion",Boolean),R=A&&!!U(s||{},"useWorker"),_=R?ne():null,F=g?Z:ke,Q=d&&_?!!d.__confetti_initialized:!1,ee=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ae;function fe(J,Ie,Je){for(var Ye=U(J,"particleCount",_e),ft=U(J,"angle",Number),xt=U(J,"spread",Number),$e=U(J,"startVelocity",Number),Bt=U(J,"decay",Number),Gn=U(J,"gravity",Number),Or=U(J,"drift",Number),qn=U(J,"colors",se),Ar=U(J,"ticks",Number),Xn=U(J,"shapes"),Zn=U(J,"scalar"),jn=!!U(J,"flat"),Jn=Re(J),Vt=Ye,Tt=[],ql=d.width*Jn.x,Ur=d.height*Jn.y;Vt--;)Tt.push(Ft({x:ql,y:Ur,angle:ft,spread:xt,startVelocity:$e,color:qn[Vt%qn.length],shape:Xn[Ue(0,Xn.length)],ticks:Ar,decay:Bt,gravity:Gn,drift:Or,scalar:Zn,flat:jn}));return ae?ae.addFettis(Tt):(ae=Qe(d,Tt,F,Ie,Je),ae.promise)}function Ne(J){var Ie=M||U(J,"disableForReducedMotion",Boolean),Je=U(J,"zIndex",Number);if(Ie&&ee)return le(function($e){$e()});g&&ae?d=ae.canvas:g&&!d&&(d=ot(Je),document.body.appendChild(d)),j&&!Q&&F(d);var Ye={width:d.width,height:d.height};_&&!Q&&_.init(d),Q=!0,_&&(d.__confetti_initialized=!0);function ft(){if(_){var $e={getBoundingClientRect:function(){if(!g)return d.getBoundingClientRect()}};F($e),_.postMessage({resize:{width:$e.width,height:$e.height}});return}Ye.width=Ye.height=null}function xt(){ae=null,j&&(C=!1,x.removeEventListener("resize",ft)),g&&d&&(document.body.contains(d)&&document.body.removeChild(d),d=null,Q=!1)}return j&&!C&&(C=!0,x.addEventListener("resize",ft,!1)),_?_.fire(J,Ye,xt):fe(J,Ye,xt)}return Ne.reset=function(){_&&_.reset(),ae&&ae.reset()},Ne}var Ze;function De(){return Ze||(Ze=Xe(null,{useWorker:!0,resize:!0})),Ze}function ge(d,s,g,j,C,M,R){var _=new Path2D(d),F=new Path2D;F.addPath(_,new DOMMatrix(s));var Q=new Path2D;return Q.addPath(F,new DOMMatrix([Math.cos(R)*C,Math.sin(R)*C,-Math.sin(R)*M,Math.cos(R)*M,g,j])),Q}function E(d){if(!I)throw new Error("path confetti are not supported in this browser");var s,g;typeof d=="string"?s=d:(s=d.path,g=d.matrix);var j=new Path2D(s),C=document.createElement("canvas"),M=C.getContext("2d");if(!g){for(var R=1e3,_=R,F=R,Q=0,ee=0,ae,fe,Ne=0;Ne<R;Ne+=2)for(var J=0;J<R;J+=2)M.isPointInPath(j,Ne,J,"nonzero")&&(_=Math.min(_,Ne),F=Math.min(F,J),Q=Math.max(Q,Ne),ee=Math.max(ee,J));ae=Q-_,fe=ee-F;var Ie=10,Je=Math.min(Ie/ae,Ie/fe);g=[Je,0,0,Je,-Math.round(ae/2+_)*Je,-Math.round(fe/2+F)*Je]}return{type:"path",path:s,matrix:g}}function H(d){var s,g=1,j="#000000",C='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof d=="string"?s=d:(s=d.text,g="scalar"in d?d.scalar:g,C="fontFamily"in d?d.fontFamily:C,j="color"in d?d.color:j);var M=10*g,R=""+M+"px "+C,_=new OffscreenCanvas(M,M),F=_.getContext("2d");F.font=R;var Q=F.measureText(s),ee=Math.ceil(Q.actualBoundingBoxRight+Q.actualBoundingBoxLeft),ae=Math.ceil(Q.actualBoundingBoxAscent+Q.actualBoundingBoxDescent),fe=2,Ne=Q.actualBoundingBoxLeft+fe,J=Q.actualBoundingBoxAscent+fe;ee+=fe+fe,ae+=fe+fe,_=new OffscreenCanvas(ee,ae),F=_.getContext("2d"),F.font=R,F.fillStyle=j,F.fillText(s,Ne,J);var Ie=1/g;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[Ie,0,0,Ie,-ee*Ie/2,-ae*Ie/2]}}p.exports=function(){return De().apply(this,arguments)},p.exports.reset=function(){De().reset()},p.exports.create=Xe,p.exports.shapeFromPath=E,p.exports.shapeFromText=H})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Yo,!1);const Ko=Yo.exports;Yo.exports.create;const cn="/wedding-card-digital/",G={couple:{bride:"Mir Maleeha Yousuf",groom:"Muhammad Rasekh Banday",brideShort:"Maleeha",groomShort:"Rasekh",hosts:"Mr. & Mrs. Mir Mohammad Yousuf",monogram:"R & M",hashtag:"#RasekhWedsMaleeha",weddingDate:"2026-10-04T12:00:00",formattedDate:"Sunday, 04 October 2026",formattedTime:"12:00 Noon",bismillah:"In the name of Allah, the Most Gracious, the Most Merciful.",invitationMessage:"Mr. & Mrs. Mir Mohammad Yousuf request the pleasure of your gracious presence at the wedding of their Daughter",artwork:`${cn}images/kashmir_mountains.jpg`},music:{url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-113824.mp3"},venues:{ceremony:{title:"Hotel Northern Residency",time:"12:00 Noon",address:"Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",googleMapsUrl:"https://maps.google.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",appleMapsUrl:"https://maps.apple.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",image:`${cn}images/kashmir_mountains.jpg`,note:"Buffet to be served from 12:00 PM to 3:00 PM."},reception:{title:"Sanat Nagar Banquet",time:"12:00 Noon",address:"Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",googleMapsUrl:"https://maps.google.com/?q=Sanat+Nagar+Srinagar",appleMapsUrl:"https://maps.apple.com/?q=Sanat+Nagar+Srinagar",image:`${cn}images/ceremony_venue.jpg`,note:"Gracious presence requested."}},itinerary:[{time:"12:00 Noon",title:"Gracious Arrival & Welcome",description:"Arrival of guests at Hotel Northern Residency, Sanat Nagar Chowk.",icon:"Church"},{time:"12:30 PM",title:"Traditional Kashmiri Feast / Lunch",description:"Buffet to be served from 12:00 PM to 3:00 PM.",icon:"Utensils"},{time:"1:30 PM",title:"Nikkah Blessing & Celebrations",description:"Celebrating the union of Rasekh & Maleeha.",icon:"Sparkles"}],ourStory:[{year:"2025",title:"First Met",description:"A blessed journey that brought two families together in Srinagar.",image:`${cn}images/kashmir_mountains.jpg`},{year:"2026",title:"The Nikkah",description:"Beginning our story in the heart of Kashmir surrounded by loved ones.",image:`${cn}images/ceremony_venue.jpg`}],gallery:[{id:1,src:`${cn}images/kashmir_mountains.jpg`,caption:"Kashmir Mountains"},{id:2,src:`${cn}images/ceremony_venue.jpg`,caption:"Sanat Nagar Estate"},{id:3,src:`${cn}images/hero_couple.jpg`,caption:"Celebration Moments"}],dressCode:{style:"Traditional & Formal Elegance",description:"Guests are warmly invited to wear traditional festive Kashmiri attire or formal evening wear.",palette:[{name:"Forest Emerald Green",hex:"#1B4332"},{name:"Sapphire Blue",hex:"#1D3557"},{name:"Ivory Cream",hex:"#F3ECE1"},{name:"Royal Gold Accent",hex:"#D4AF37"}]},giftRegistry:{message:"Your presence and prayers for Rasekh & Maleeha are the most treasured blessings.",iban:"Contact Family for Details",bankName:"Jammu & Kashmir Bank",swift:"JAKA0SANAT"},rsvp:{whatsappNumber:"919149602047",deadline:"September 25, 2026"}};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ku=(...y)=>y.filter((x,p,Y)=>!!x&&x.trim()!==""&&Y.indexOf(x)===p).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=re.forwardRef(({color:y="currentColor",size:x=24,strokeWidth:p=2,absoluteStrokeWidth:Y,className:z="",children:A,iconNode:I,...$},W)=>re.createElement("svg",{ref:W,...rf,width:x,height:x,stroke:y,strokeWidth:Y?Number(p)*24/Number(x):p,className:Ku("lucide",z),...$},[...I.map(([le,te])=>re.createElement(le,te)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(y,x)=>{const p=re.forwardRef(({className:Y,...z},A)=>re.createElement(lf,{ref:A,iconNode:x,className:Ku(`lucide-${nf(y)}`,Y),...z}));return p.displayName=`${y}`,p};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],af=ce("Calendar",of);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],uf=ce("Camera",sf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Go=ce("Check",cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ff=ce("ChevronDown",df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mf=ce("ChevronLeft",pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gf=ce("ChevronRight",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],yf=ce("Church",vf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],wf=ce("CircleX",xf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Wu=ce("Clock",kf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sf=ce("Copy",Nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Cf=ce("Download",jf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Hu=ce("ExternalLink",Ef);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],zf=ce("Gift",_f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Kl=ce("Heart",Mf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Gu=ce("Lock",Pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ho=ce("MapPin",Rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Tf=ce("Music",Ff);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Qu=ce("Navigation",Lf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],If=ce("Palette",Df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Af=ce("Phone",Of);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],bf=ce("Send",Uf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],Bf=ce("Shirt",$f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Gl=ce("Sparkles",Vf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Hf=ce("Users",Wf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Yf=ce("UtensilsCrossed",Qf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Gf=ce("Volume2",Kf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Xf=ce("VolumeX",qf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],Jf=ce("Wine",Zf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qo=ce("X",ep),tp=({onUnfoldComplete:y})=>{const[x,p]=re.useState(0),[Y,z]=re.useState(!1),A=re.useRef(!1),I=re.useRef(null),$=()=>{if(A.current)return;A.current=!0;let Z=x;const ke=setInterval(()=>{Z+=.04,Z>=1?(Z=1,p(1),clearInterval(ke),setTimeout(()=>{y()},300)):p(Z)},25)};re.useEffect(()=>{let Z=!1;const ke=()=>{A.current||Z||(window.requestAnimationFrame(()=>{const ot=window.scrollY,qe=Math.min(Math.max(ot/400,0),1);p(qe),qe>.3&&$(),Z=!1}),Z=!0)};return window.addEventListener("scroll",ke,{passive:!0}),()=>window.removeEventListener("scroll",ke)},[x,y]),re.useEffect(()=>{x>.6&&!Y&&(z(!0),Ko({particleCount:95,spread:100,origin:{y:.5},colors:["#D4AF37","#1B4332","#1D3557","#FCF6BA","#FFF8DC"],disableForReducedMotion:!0})),x>=1&&!A.current&&y()},[x,Y,y]);const W=Z=>{Z.touches&&Z.touches.length>0&&(I.current=Z.touches[0].clientY)},le=Z=>{if(!I.current||A.current)return;const ke=Z.touches[0].clientY;I.current-ke>15&&(I.current=null,$())},te=Z=>{I.current=Z.clientY},X=Z=>{if(!I.current||A.current)return;I.current-Z.clientY>15&&(I.current=null,$())},ne=Z=>{Z.deltaY>10&&!A.current&&$()},Ee=Math.min(x/.2,1),we=Math.max(1-Ee*1.5,0),U=180*Math.min(Math.max((x-.1)/.45,0),1),_e=Math.min(Math.max((x-.35)/.5,0),1),Ue=-340*_e,he=1+.08*_e,se=Math.min(Math.max((x-.75)/.25,0),1),be=Math.max(1-se,0);return o.jsxs("div",{className:"entrance-envelope-wrapper",children:[o.jsx("div",{className:"envelope-scroll-track-spacer"}),o.jsx("div",{className:"envelope-sticky-viewport",onTouchStart:W,onTouchMove:le,onMouseDown:te,onMouseMove:X,onWheel:ne,style:{opacity:be,pointerEvents:be<.05?"none":"auto"},children:o.jsx("div",{className:"envelope-3d-stage",children:o.jsxs("div",{className:"envelope-real-box",onClick:$,children:[o.jsxs("div",{className:"pocket-back",children:[o.jsx("div",{className:"pocket-silk-grid"}),o.jsx("div",{className:"pocket-monogram font-serif",children:G.couple.monogram})]}),o.jsxs("div",{className:"letter-real-card",style:{transform:`translate3d(0, ${Ue}px, ${_e*70}px) scale3d(${he}, ${he}, 1)`,boxShadow:`0 ${15+_e*35}px ${40+_e*70}px rgba(212, 175, 55, ${.15+_e*.4})`},children:[o.jsxs("div",{className:"card-art-header",children:[o.jsx("img",{src:G.couple.artwork,alt:"Kashmir Mountains Artwork",className:"art-img"}),o.jsx("div",{className:"art-overlay-fade"})]}),o.jsxs("div",{className:"card-body",children:[o.jsx("p",{className:"bismillah-text font-serif",children:G.couple.bismillah}),o.jsx("h2",{className:"hosts-name font-serif text-emerald",children:G.couple.hosts}),o.jsx("p",{className:"invitation-text font-serif",children:G.couple.invitationMessage}),o.jsx("div",{className:"daughter-title font-script",children:"Daughter"}),o.jsx("div",{className:"event-date font-serif text-emerald",children:G.couple.formattedDate}),o.jsx("div",{className:"event-time font-serif text-blue",children:G.couple.formattedTime}),o.jsxs("div",{className:"venue-text font-serif text-emerald",children:[G.venues.ceremony.title,", ",G.venues.ceremony.address]}),o.jsx("div",{className:"note-text font-serif text-emerald",children:"(For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)"}),o.jsxs("div",{className:"rsvp-text text-blue",children:["RSVP: ",G.rsvp.whatsappNumber.slice(2)]})]})]}),o.jsx("div",{className:"flap-left"}),o.jsx("div",{className:"flap-right"}),o.jsx("div",{className:"flap-bottom"}),o.jsxs("div",{className:"flap-top-3d",style:{transform:`rotateX(${U}deg)`,zIndex:U>90?2:6},children:[o.jsx("div",{className:"top-flap-shape",children:o.jsx("div",{className:"top-flap-gold-line"})}),o.jsx("div",{className:"nano-seal-wrapper",style:{opacity:we,transform:`translate(-50%, -50%) scale(${1-Ee*.15})`},children:o.jsx("div",{className:"seal-drop-shadow-wrapper",children:o.jsx("div",{className:"seal-circular-mask",children:o.jsx("img",{src:"/wedding-card-digital/images/real_wax_seal_rm.jpg",alt:"Photorealistic R&M Gold Wax Seal",className:"nano-seal-img"})})})})]}),x<.1&&o.jsxs("div",{className:"scroll-hint-badge",children:[o.jsx(Gl,{size:14,className:"sparkle-gold"}),o.jsx("span",{children:"Scroll down to open"}),o.jsx(ff,{size:18,className:"scroll-bounce-icon"})]})]})})}),o.jsx("style",{children:`
        .entrance-envelope-wrapper {
          position: relative;
          width: 100%;
          z-index: 40;
        }

        .envelope-scroll-track-spacer {
          height: 800px;
          pointer-events: none;
        }

        .envelope-sticky-viewport {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          z-index: 50;
          will-change: opacity, transform;
          user-select: none;
          touch-action: pan-y;
        }

        .envelope-3d-stage {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
        }

        .envelope-real-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 35px 90px rgba(26, 22, 20, 0.35), 0 12px 30px rgba(212, 175, 55, 0.2);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        /* Inner Pocket */
        .pocket-back {
          position: absolute;
          inset: 0;
          background: #EDE3D5;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.35);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pocket-silk-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.18) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }

        .pocket-monogram {
          font-size: 4.5rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.25);
          letter-spacing: 6px;
        }

        /* Letter Inside Envelope */
        .letter-real-card {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          z-index: 3;
          will-change: transform;
          backface-visibility: hidden;
        }

        .card-art-header {
          position: relative;
          width: 100%;
          height: 140px;
          overflow: hidden;
        }

        .art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .art-overlay-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, #FFFFFF 100%);
        }

        .card-body {
          padding: 0.8rem 1.4rem 1.8rem 1.4rem;
          text-align: center;
        }

        .bismillah-text { font-size: 0.82rem; color: #1D3557; font-weight: 600; margin-bottom: 0.4rem; }
        .hosts-name { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.3rem; }
        .invitation-text { font-size: 0.9rem; color: #1D3557; line-height: 1.35; }
        .daughter-title { font-size: 2.2rem; color: #1D3557; margin: 0.3rem 0 0.4rem 0; }
        .event-date { font-size: 1.35rem; font-weight: 700; margin-top: 0.2rem; }
        .event-time { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.4rem; }
        .venue-text { font-size: 1.1rem; font-weight: 600; }
        .note-text { font-size: 0.8rem; font-style: italic; margin-top: 0.8rem; }
        .rsvp-text { font-size: 0.85rem; font-weight: 700; margin-top: 0.3rem; }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        /* Flaps */
        .flap-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 195px solid transparent;
          border-bottom: 195px solid transparent;
          border-left: 295px solid #F5EFEB;
          border-radius: 16px 0 0 16px;
          z-index: 4;
          filter: drop-shadow(4px 0 8px rgba(0,0,0,0.06));
        }

        .flap-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top: 195px solid transparent;
          border-bottom: 195px solid transparent;
          border-right: 295px solid #EFE6DA;
          border-radius: 0 16px 16px 0;
          z-index: 4;
          filter: drop-shadow(-4px 0 8px rgba(0,0,0,0.06));
        }

        .flap-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-bottom: 205px solid #FAF6F0;
          border-radius: 0 0 16px 16px;
          z-index: 5;
          filter: drop-shadow(0 -5px 10px rgba(0,0,0,0.08));
        }

        .flap-top-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
        }

        .top-flap-shape {
          position: relative;
          width: 0;
          height: 0;
          margin: 0 auto;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-top: 210px solid #FAF6F0;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.14));
          transform-style: preserve-3d;
        }

        .top-flap-gold-line {
          position: absolute;
          top: -205px;
          left: -280px;
          width: 560px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        .nano-seal-wrapper {
          position: absolute;
          top: 210px;
          left: 50%;
          width: 106px;
          height: 106px;
          z-index: 25;
          pointer-events: auto;
          transform-style: preserve-3d;
          will-change: opacity, transform;
        }

        .seal-drop-shadow-wrapper {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.45));
        }

        .seal-circular-mask {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          clip-path: circle(44.5% at 50% 50%);
        }

        .nano-seal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.15);
          border-radius: 50%;
        }

        .scroll-hint-badge {
          position: absolute;
          bottom: -54px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(26, 22, 20, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.7);
          color: #FCF6BA;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.55rem 1.4rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          z-index: 30;
        }

        .sparkle-gold { color: #D4AF37; }

        .scroll-bounce-icon {
          animation: bounceIcon 1.6s ease-in-out infinite;
        }

        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 640px) {
          .envelope-3d-stage {
            max-width: 350px;
            height: 260px;
          }
          .flap-left {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-left-width: 180px;
          }
          .flap-right {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-right-width: 180px;
          }
          .flap-bottom {
            border-left-width: 175px;
            border-right-width: 175px;
            border-bottom-width: 140px;
          }
          .flap-top-3d { height: 140px; }
          .top-flap-shape {
            border-left-width: 175px;
            border-right-width: 175px;
            border-top-width: 140px;
          }
          .nano-seal-wrapper {
            top: 140px;
            width: 86px;
            height: 86px;
          }
          .letter-real-card { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
        }
      `})]})},np=({targetDate:y})=>{const x=()=>{const z=+new Date(y)-+new Date;let A={days:0,hours:0,minutes:0,seconds:0};return z>0&&(A={days:Math.floor(z/864e5),hours:Math.floor(z/36e5%24),minutes:Math.floor(z/1e3/60%60),seconds:Math.floor(z/1e3%60)}),A},[p,Y]=re.useState(x());return re.useEffect(()=>{const z=setInterval(()=>{Y(x())},1e3);return()=>clearInterval(z)},[y]),o.jsxs("div",{className:"countdown-container",children:[o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.days).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Days"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.hours).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Hours"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.minutes).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Mins"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.seconds).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Secs"})]}),o.jsx("style",{children:`
        .countdown-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin: 2rem 0;
        }

        .countdown-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-gold);
          border-radius: 14px;
          min-width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        .countdown-number {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .countdown-label {
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 0.5rem;
          font-weight: 600;
        }

        .countdown-colon {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--text-gold);
          margin-bottom: 1.4rem;
        }

        @media (max-width: 480px) {
          .countdown-card {
            min-width: 52px;
            height: 54px;
          }
          .countdown-number {
            font-size: 1.35rem;
          }
          .countdown-container {
            gap: 0.4rem;
          }
        }
      `})]})},rp=({onOpenRSVP:y})=>{const x=()=>{const p=encodeURIComponent(`${G.couple.groom} & ${G.couple.bride}'s Wedding`),Y=encodeURIComponent(`${G.couple.bismillah}

${G.couple.invitationMessage}`),z=encodeURIComponent(`${G.venues.ceremony.title}, ${G.venues.ceremony.address}`),$=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${p}&dates=20261004T120000Z/20261004T150000Z&details=${Y}&location=${z}`;window.open($,"_blank")};return o.jsxs("section",{className:"hero-section",children:[o.jsxs("div",{className:"hero-card kashmir-paper-card",children:[o.jsxs("div",{className:"hero-artwork-banner",children:[o.jsx("img",{src:G.couple.artwork,alt:"Kashmir Mountains Watercolor",className:"hero-artwork-img"}),o.jsx("div",{className:"hero-artwork-fade"})]}),o.jsxs("div",{className:"hero-inner-body",children:[o.jsx("p",{className:"bismillah-header font-serif",children:G.couple.bismillah}),o.jsx("h2",{className:"font-serif hosts-title text-emerald",children:G.couple.hosts}),o.jsx("p",{className:"invitation-line font-serif",children:G.couple.invitationMessage}),o.jsx("div",{className:"daughter-word font-script",children:"Daughter"}),o.jsxs("div",{className:"couple-headline",children:[o.jsx("h1",{className:"font-serif bride-title",children:G.couple.bride}),o.jsx("div",{className:"and-symbol font-script",children:"&"}),o.jsx("h1",{className:"font-serif groom-title",children:G.couple.groom})]}),o.jsxs("div",{className:"hero-event-details",children:[o.jsx("div",{className:"event-date-large font-serif text-emerald",children:G.couple.formattedDate}),o.jsx("div",{className:"event-time-large font-serif text-blue",children:G.couple.formattedTime}),o.jsxs("div",{className:"venue-address-box",children:[o.jsx(Ho,{size:16,className:"text-gold"}),o.jsxs("span",{className:"font-serif venue-text text-emerald",children:[G.venues.ceremony.title,", ",G.venues.ceremony.address]})]})]}),o.jsxs("div",{className:"buffet-note-banner",children:[o.jsx("p",{className:"font-serif text-emerald note-italic",children:"(For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)"}),o.jsxs("p",{className:"rsvp-phone-number text-blue",children:[o.jsx(Af,{size:14,className:"inline-icon"}),"RSVP: ",G.rsvp.whatsappNumber.slice(2)]})]}),o.jsx(np,{targetDate:G.couple.weddingDate}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("button",{className:"btn-gold",onClick:y,children:[o.jsx(Kl,{size:16}),o.jsx("span",{children:"Confirm RSVP"})]}),o.jsxs("button",{className:"btn-outline-gold",onClick:x,children:[o.jsx(af,{size:16}),o.jsx("span",{children:"Save To Calendar"})]})]}),o.jsx("p",{className:"hero-hashtag",children:G.couple.hashtag})]})]}),o.jsx("style",{children:`
        .hero-section {
          padding: 3rem 1.25rem 2rem 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .kashmir-paper-card {
          width: 100%;
          max-width: 640px;
          position: relative;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(26, 22, 20, 0.2), 0 12px 35px rgba(212, 175, 55, 0.18);
          border: 1px solid rgba(212, 175, 55, 0.45);
        }

        .hero-artwork-banner {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .hero-artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-artwork-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, #FFFFFF 100%);
        }

        .hero-inner-body {
          padding: 1.5rem 2.5rem 3.5rem 2.5rem;
          text-align: center;
        }

        .bismillah-header {
          font-size: 1.05rem;
          color: #1D3557;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .hosts-title {
          font-size: 2.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .invitation-line {
          font-size: 1.1rem;
          color: #1D3557;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .daughter-word {
          font-size: 3.2rem;
          color: #1D3557;
          margin: 0.8rem 0 0.8rem 0;
        }

        .couple-headline {
          margin: 1.2rem 0;
        }

        .bride-title, .groom-title {
          font-size: 2.6rem;
          font-weight: 600;
          color: #1B4332;
          line-height: 1.15;
        }

        .and-symbol {
          font-size: 2.8rem;
          color: #D4AF37;
          margin: 0.2rem 0;
        }

        .hero-event-details {
          margin: 2rem 0;
        }

        .event-date-large {
          font-size: 2.1rem;
          font-weight: 700;
        }

        .event-time-large {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 0.4rem 0 1rem 0;
        }

        .venue-address-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          max-width: 480px;
          margin: 0 auto;
        }

        .venue-text {
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .buffet-note-banner {
          background: #FAF6F0;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 16px;
          padding: 1.2rem;
          margin: 2rem 0;
        }

        .note-italic {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .rsvp-phone-number {
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .inline-icon {
          display: inline-block;
        }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .hero-hashtag {
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2.5rem;
        }

        @media (max-width: 640px) {
          .hero-inner-body {
            padding: 1.5rem 1.25rem 2.5rem 1.25rem;
          }
          .hosts-title { font-size: 1.6rem; }
          .bride-title, .groom-title { font-size: 2rem; }
          .daughter-word { font-size: 2.5rem; }
          .event-date-large { font-size: 1.6rem; }
          .venue-text { font-size: 1.1rem; }
        }
      `})]})},lp=()=>o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Our Journey"}),o.jsx("h2",{className:"font-serif section-title",children:"How It All Began"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"story-cards",children:G.ourStory.map((y,x)=>o.jsxs("div",{className:"story-card glass-card",children:[o.jsxs("div",{className:"story-year-badge",children:[o.jsx(Kl,{size:12,className:"text-gold"}),o.jsx("span",{children:y.year})]}),o.jsxs("div",{className:"story-content",children:[o.jsx("h3",{className:"font-serif story-title",children:y.title}),o.jsx("p",{className:"story-desc",children:y.description})]})]},x))}),o.jsx("style",{children:`
        .story-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .story-card {
          padding: 2.2rem 1.8rem;
          text-align: center;
          position: relative;
        }

        .story-year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-gold);
          margin-bottom: 1.2rem;
          box-shadow: var(--shadow-sm);
        }

        .story-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }

        .story-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `})]}),ip=()=>{const y=x=>{switch(x){case"Church":return o.jsx(yf,{size:22});case"Wine":return o.jsx(Jf,{size:22});case"Utensils":return o.jsx(Yf,{size:22});case"Sparkles":return o.jsx(Gl,{size:22});case"Music":return o.jsx(Tf,{size:22});default:return o.jsx(Gl,{size:22})}};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Order of Events"}),o.jsx("h2",{className:"font-serif section-title",children:"Wedding Itinerary"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"itinerary-timeline",children:G.itinerary.map((x,p)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-badge",children:y(x.icon)}),o.jsxs("div",{className:"timeline-card glass-card",children:[o.jsx("span",{className:"timeline-time",children:x.time}),o.jsx("h3",{className:"font-serif timeline-title",children:x.title}),o.jsx("p",{className:"timeline-desc",children:x.description})]})]},p))}),o.jsx("style",{children:`
        .section-padding {
          padding: 4rem 1.25rem;
          max-width: 720px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-script {
          font-size: 2.2rem;
          color: var(--text-gold);
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 1px;
          margin-top: 0.2rem;
        }

        .itinerary-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .itinerary-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 2px;
          background: var(--gold-gradient);
          opacity: 0.4;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1.8rem;
          padding-left: 0.5rem;
        }

        .timeline-badge {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--accent-gold);
          color: var(--text-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .timeline-item:hover .timeline-badge {
          transform: scale(1.15) rotate(5deg);
          background: var(--gold-gradient);
          color: #1A1614;
        }

        .timeline-card {
          flex: 1;
          padding: 1.5rem 1.8rem;
          text-align: left;
        }

        .timeline-time {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-gold);
          text-transform: uppercase;
        }

        .timeline-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0.4rem 0 0.3rem 0;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .itinerary-timeline::before {
            left: 20px;
          }
          .timeline-badge {
            width: 40px;
            height: 40px;
          }
          .timeline-badge svg {
            width: 18px;
            height: 18px;
          }
          .timeline-card {
            padding: 1.2rem 1.25rem;
          }
        }
      `})]})},op=()=>{const{ceremony:y,reception:x}=G.venues;return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Locations"}),o.jsx("h2",{className:"font-serif section-title",children:"Where & When"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"venues-grid",children:[o.jsxs("div",{className:"venue-card glass-card",children:[o.jsxs("div",{className:"venue-image-wrapper",children:[o.jsx("img",{src:y.image,alt:y.title,className:"venue-img"}),o.jsx("div",{className:"venue-badge",children:"Ceremony"})]}),o.jsxs("div",{className:"venue-body",children:[o.jsx("h3",{className:"font-serif venue-name",children:y.title}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Wu,{size:16,className:"text-gold"}),o.jsx("span",{children:y.time})]}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Ho,{size:16,className:"text-gold"}),o.jsx("span",{children:y.address})]}),o.jsx("p",{className:"venue-note",children:y.note}),o.jsxs("div",{className:"venue-actions",children:[o.jsxs("a",{href:y.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Qu,{size:14}),o.jsx("span",{children:"Google Maps"})]}),o.jsxs("a",{href:y.appleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Hu,{size:14}),o.jsx("span",{children:"Apple Maps"})]})]})]})]}),o.jsxs("div",{className:"venue-card glass-card",children:[o.jsxs("div",{className:"venue-image-wrapper",children:[o.jsx("img",{src:x.image,alt:x.title,className:"venue-img"}),o.jsx("div",{className:"venue-badge",children:"Reception"})]}),o.jsxs("div",{className:"venue-body",children:[o.jsx("h3",{className:"font-serif venue-name",children:x.title}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Wu,{size:16,className:"text-gold"}),o.jsx("span",{children:x.time})]}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Ho,{size:16,className:"text-gold"}),o.jsx("span",{children:x.address})]}),o.jsx("p",{className:"venue-note",children:x.note}),o.jsxs("div",{className:"venue-actions",children:[o.jsxs("a",{href:x.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Qu,{size:14}),o.jsx("span",{children:"Google Maps"})]}),o.jsxs("a",{href:x.appleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Hu,{size:14}),o.jsx("span",{children:"Apple Maps"})]})]})]})]})]}),o.jsx("style",{children:`
        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 1rem;
        }

        .venue-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .venue-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .venue-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .venue-card:hover .venue-img {
          transform: scale(1.06);
        }

        .venue-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(26, 22, 20, 0.85);
          backdrop-filter: blur(8px);
          color: var(--text-gold);
          border: 1px solid var(--border-gold);
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .venue-body {
          padding: 2rem 1.8rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .venue-name {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .venue-info {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .venue-note {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--text-muted);
          margin: 1rem 0 1.5rem 0;
          flex: 1;
        }

        .venue-actions {
          display: flex;
          gap: 0.8rem;
        }

        .venue-btn {
          flex: 1;
          padding: 0.65rem 0.8rem;
          font-size: 0.75rem;
        }
      `})]})},ap=()=>{const{gallery:y}=G,[x,p]=re.useState(null),Y=$=>{p($)},z=()=>{p(null)},A=$=>{$.stopPropagation(),p(W=>(W+1)%y.length)},I=$=>{$.stopPropagation(),p(W=>(W-1+y.length)%y.length)};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Moments"}),o.jsx("h2",{className:"font-serif section-title",children:"Photo Gallery"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"gallery-grid",children:y.map(($,W)=>o.jsxs("div",{className:"gallery-item glass-card",onClick:()=>Y(W),children:[o.jsx("img",{src:$.src,alt:$.caption,className:"gallery-thumb"}),o.jsxs("div",{className:"gallery-overlay",children:[o.jsx(uf,{size:24,className:"text-gold"}),o.jsx("span",{className:"gallery-caption",children:$.caption})]})]},$.id))}),x!==null&&o.jsx("div",{className:"modal-backdrop",onClick:z,children:o.jsxs("div",{className:"lightbox-container",onClick:$=>$.stopPropagation(),children:[o.jsx("button",{className:"lightbox-close",onClick:z,children:o.jsx(qo,{size:24})}),o.jsx("button",{className:"lightbox-nav nav-prev",onClick:I,children:o.jsx(mf,{size:30})}),o.jsxs("div",{className:"lightbox-content",children:[o.jsx("img",{src:y[x].src,alt:y[x].caption,className:"lightbox-img"}),o.jsx("p",{className:"lightbox-caption",children:y[x].caption})]}),o.jsx("button",{className:"lightbox-nav nav-next",onClick:A,children:o.jsx(gf,{size:30})})]})}),o.jsx("style",{children:`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          height: 280px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 16px;
        }

        .gallery-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 22, 20, 0.65);
          backdrop-filter: blur(4px);
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: opacity 0.3s ease;
          padding: 1rem;
        }

        .gallery-item:hover .gallery-thumb {
          transform: scale(1.08);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-caption {
          color: #FFF;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          text-align: center;
        }

        /* Lightbox Styles */
        .lightbox-container {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-width: 85vw;
          max-height: 75vh;
          border-radius: 12px;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border: 1px solid var(--border-gold);
        }

        .lightbox-caption {
          text-align: center;
          color: #FFF;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: #FFF;
          cursor: pointer;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #FFF;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lightbox-nav:hover {
          background: var(--gold-gradient);
          color: #1A1614;
        }

        .nav-prev { left: -60px; }
        .nav-next { right: -60px; }

        @media (max-width: 768px) {
          .nav-prev { left: -10px; }
          .nav-next { right: -10px; }
        }
      `})]})},sp=()=>{const{dressCode:y}=G;return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Attire Guide"}),o.jsx("h2",{className:"font-serif section-title",children:"Dress Code"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"dress-code-card glass-card",children:[o.jsx("div",{className:"dress-code-icon-wrapper",children:o.jsx(Bf,{size:28,className:"text-gold"})}),o.jsx("h3",{className:"font-serif dress-code-style",children:y.style}),o.jsx("p",{className:"dress-code-desc",children:y.description}),o.jsxs("div",{className:"palette-title",children:[o.jsx(Gl,{size:14,className:"text-gold"}),o.jsx("span",{children:"Recommended Palette"})]}),o.jsx("div",{className:"palette-swatches",children:y.palette.map((x,p)=>o.jsxs("div",{className:"swatch-item",children:[o.jsx("div",{className:"swatch-circle",style:{backgroundColor:x.hex,border:x.hex==="#F3ECE1"?"1px solid rgba(0,0,0,0.15)":"none"},title:x.name}),o.jsx("span",{className:"swatch-name",children:x.name})]},p))})]}),o.jsx("style",{children:`
        .dress-code-card {
          padding: 3rem 2.5rem;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        .dress-code-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          box-shadow: var(--shadow-sm);
        }

        .dress-code-style {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .dress-code-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 2.5rem auto;
        }

        .palette-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .palette-swatches {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .swatch-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .swatch-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .swatch-circle:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        .swatch-name {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 80px;
          text-align: center;
        }
      `})]})},up=()=>{const{giftRegistry:y}=G,[x,p]=re.useState(!1),Y=()=>{navigator.clipboard.writeText(y.iban),p(!0),Ko({particleCount:40,spread:50,origin:{y:.8},colors:["#D4AF37","#FCF6BA","#FFFFFF"]}),setTimeout(()=>p(!1),3e3)};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Gift Registry"}),o.jsx("h2",{className:"font-serif section-title",children:"Honeymoon Fund"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"gift-card glass-card",children:[o.jsx("div",{className:"gift-icon-wrapper",children:o.jsx(zf,{size:28,className:"text-gold"})}),o.jsx("p",{className:"gift-message",children:y.message}),o.jsxs("div",{className:"iban-box",children:[o.jsx("div",{className:"iban-label",children:"Bank Account Details"}),o.jsx("div",{className:"iban-bank",children:y.bankName}),o.jsx("div",{className:"iban-number",children:y.iban}),o.jsxs("div",{className:"iban-swift",children:["SWIFT / BIC: ",y.swift]}),o.jsx("button",{className:"btn-gold copy-btn",onClick:Y,children:x?o.jsxs(o.Fragment,{children:[o.jsx(Go,{size:16}),o.jsx("span",{children:"IBAN Copied!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(Sf,{size:16}),o.jsx("span",{children:"Copy IBAN Account"})]})})]})]}),o.jsx("style",{children:`
        .gift-card {
          padding: 3rem 2.5rem;
          text-align: center;
          max-width: 620px;
          margin: 0 auto;
        }

        .gift-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          box-shadow: var(--shadow-sm);
        }

        .gift-message {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 2rem auto;
        }

        .iban-box {
          background: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 16px;
          padding: 1.8rem;
          margin-top: 1.5rem;
        }

        .iban-label {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .iban-bank {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .iban-number {
          font-family: monospace;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-gold);
          letter-spacing: 1px;
          margin: 0.8rem 0 0.4rem 0;
        }

        .iban-swift {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .copy-btn {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
      `})]})},cp=({autoPlayTrigger:y,isInline:x=!1})=>{const[p,Y]=re.useState(!1),z=re.useRef(null);re.useEffect(()=>{y&&z.current&&z.current.play().then(()=>Y(!0)).catch(I=>console.log("Autoplay blocked by browser policy:",I))},[y]);const A=()=>{z.current&&(p?(z.current.pause(),Y(!1)):(z.current.play(),Y(!0)))};return o.jsxs(o.Fragment,{children:[o.jsx("audio",{ref:z,src:G.music.url,loop:!0,preload:"auto"}),o.jsx("button",{className:x?"audio-footer-btn":"audio-floating-btn",onClick:A,title:p?"Mute Background Music":"Play Background Music","aria-label":"Toggle background music",children:p?o.jsxs("div",{className:"sound-bars-flex",children:[o.jsx(Gf,{size:16,className:"text-gold"}),o.jsx("span",{children:"Pause Music"})]}):o.jsxs("div",{className:"sound-bars-flex",children:[o.jsx(Xf,{size:16}),o.jsx("span",{children:"Play Music"})]})}),o.jsx("style",{children:`
        .audio-footer-btn {
          background: rgba(26, 22, 20, 0.06);
          border: 1px solid var(--border-gold);
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .audio-footer-btn:hover {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }

        .sound-bars-flex {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `})]})},dp=({isOpen:y,onClose:x})=>{const[p,Y]=re.useState({fullName:"",attending:"yes",guestCount:1,dietary:"",songRequest:"",transport:"no"}),[z,A]=re.useState(!1);if(!y)return null;const I=W=>{const{name:le,value:te}=W.target;Y(X=>({...X,[le]:te}))},$=W=>{W.preventDefault();const le=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]"),te={...p,id:Date.now(),submittedAt:new Date().toISOString()};localStorage.setItem("wedding_rsvps",JSON.stringify([...le,te])),Ko({particleCount:70,spread:60,origin:{y:.6},colors:["#D4AF37","#FCF6BA","#FFFFFF","#E8D3C8"]}),A(!0);const X=encodeURIComponent(`💌 *RSVP CONFIRMATION - ${G.couple.bride} & ${G.couple.groom}'s Wedding*

👤 *Name:* ${p.fullName}
✨ *Attending:* ${p.attending==="yes"?"✅ Joyfully Accepts":"❌ Regretfully Declines"}
👥 *Number of Guests:* ${p.guestCount}
🥗 *Dietary Requirements:* ${p.dietary||"None"}
🎵 *Song Request:* ${p.songRequest||"Surprise us!"}
🚌 *Need Shuttle Bus:* ${p.transport==="yes"?"Yes":"No"}`),ne=`https://wa.me/${G.rsvp.whatsappNumber}?text=${X}`;setTimeout(()=>{window.open(ne,"_blank")},1200)};return o.jsxs("div",{className:"modal-backdrop",onClick:x,children:[o.jsxs("div",{className:"modal-content glass-card",onClick:W=>W.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:x,children:o.jsx(qo,{size:20})}),z?o.jsxs("div",{className:"rsvp-success-box text-center",children:[o.jsx("div",{className:"success-icon-wrapper",children:o.jsx(Go,{size:32,className:"text-gold"})}),o.jsx("h3",{className:"font-serif success-title",children:"Thank You!"}),o.jsx("p",{className:"success-message",children:"Your RSVP has been recorded. Opening WhatsApp to send your confirmation details..."}),o.jsx("button",{className:"btn-gold mt-6",onClick:x,children:"Close Window"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("span",{className:"font-script section-script",children:"RSVP"}),o.jsx("h2",{className:"font-serif section-title",children:"Confirm Attendance"}),o.jsxs("p",{className:"rsvp-deadline",children:["Kindly respond by ",G.rsvp.deadline]})]}),o.jsxs("form",{onSubmit:$,className:"rsvp-form",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Full Name *"}),o.jsx("input",{type:"text",name:"fullName",required:!0,placeholder:"e.g. Eleanor & Lucas Vance",value:p.fullName,onChange:I,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Will you join us? *"}),o.jsxs("div",{className:"radio-group",children:[o.jsxs("label",{className:`radio-card ${p.attending==="yes"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"yes",checked:p.attending==="yes",onChange:I}),o.jsx("span",{children:"🎉 Joyfully Accept"})]}),o.jsxs("label",{className:`radio-card ${p.attending==="no"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"no",checked:p.attending==="no",onChange:I}),o.jsx("span",{children:"💔 Regretfully Decline"})]})]})]}),p.attending==="yes"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Number of Attending Guests"}),o.jsxs("select",{name:"guestCount",value:p.guestCount,onChange:I,className:"form-input",children:[o.jsx("option",{value:1,children:"1 Guest (Just me)"}),o.jsx("option",{value:2,children:"2 Guests (Plus One)"}),o.jsx("option",{value:3,children:"3 Guests (Family)"}),o.jsx("option",{value:4,children:"4 Guests (Family)"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Dietary Restrictions / Allergies"}),o.jsx("input",{type:"text",name:"dietary",placeholder:"e.g. Vegetarian, Gluten-Free, Nut Allergy",value:p.dietary,onChange:I,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Song Request for the DJ"}),o.jsx("input",{type:"text",name:"songRequest",placeholder:"What song will get you on the dance floor?",value:p.songRequest,onChange:I,className:"form-input"})]})]}),o.jsxs("button",{type:"submit",className:"btn-gold w-full mt-4",children:[o.jsx(bf,{size:16}),o.jsx("span",{children:"Submit RSVP via WhatsApp"})]})]})]})]}),o.jsx("style",{children:`
        .modal-close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-gold);
          transform: scale(1.1);
        }

        .rsvp-deadline {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
          letter-spacing: 1px;
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          text-align: left;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          border: 1px solid var(--border-gold);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--text-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        .radio-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .radio-card {
          padding: 0.85rem;
          border-radius: 12px;
          border: 1px solid var(--border-gold);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .radio-card input {
          display: none;
        }

        .radio-card.selected {
          background: var(--gold-gradient);
          color: #1A1614;
          font-weight: 600;
          box-shadow: var(--shadow-gold);
        }

        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .success-title {
          font-size: 2.2rem;
          color: var(--text-primary);
        }

        .success-message {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          line-height: 1.5;
        }
      `})]})},fp=({isOpen:y,onClose:x})=>{const[p,Y]=re.useState(""),[z,A]=re.useState(!1),[I,$]=re.useState([]),[W,le]=re.useState("");re.useEffect(()=>{y&&z&&te()},[y,z]);const te=()=>{const b=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]");$(b)};if(!y)return null;const X=b=>{b.preventDefault(),p==="1234"||p==="admin"?(A(!0),le(""),te()):le("Incorrect PIN. Default PIN is 1234")},ne=()=>{if(I.length===0)return;const b=["Full Name","Attending","Guests","Dietary Restrictions","Song Request","Submitted At"],U=I.map(se=>[`"${se.fullName}"`,se.attending==="yes"?"Attending":"Declined",se.guestCount,`"${se.dietary||"None"}"`,`"${se.songRequest||"None"}"`,`"${new Date(se.submittedAt).toLocaleString()}"`]),_e="data:text/csv;charset=utf-8,"+[b.join(","),...U.map(se=>se.join(","))].join(`
`),Ue=encodeURI(_e),he=document.createElement("a");he.setAttribute("href",Ue),he.setAttribute("download",`wedding_rsvps_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(he),he.click(),document.body.removeChild(he)},Ee=I.filter(b=>b.attending==="yes").reduce((b,U)=>b+Number(U.guestCount),0),we=I.filter(b=>b.attending==="no").length;return o.jsxs("div",{className:"modal-backdrop",onClick:x,children:[o.jsxs("div",{className:"modal-content glass-card admin-modal",onClick:b=>b.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:x,children:o.jsx(qo,{size:20})}),z?o.jsxs("div",{className:"admin-dashboard-view",children:[o.jsxs("div",{className:"admin-header",children:[o.jsx("h2",{className:"font-serif admin-main-title",children:"RSVP Management"}),o.jsxs("button",{className:"btn-outline-gold export-btn",onClick:ne,children:[o.jsx(Cf,{size:14}),o.jsx("span",{children:"Export CSV"})]})]}),o.jsxs("div",{className:"admin-stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx(Hf,{size:20,className:"text-gold"}),o.jsx("div",{className:"stat-num",children:Ee}),o.jsx("div",{className:"stat-label",children:"Total Attending Guests"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx(wf,{size:20,style:{color:"#E53E3E"}}),o.jsx("div",{className:"stat-num",children:we}),o.jsx("div",{className:"stat-label",children:"Declined Invites"})]})]}),o.jsx("div",{className:"admin-table-wrapper",children:I.length===0?o.jsx("p",{className:"empty-msg",children:"No RSVPs recorded yet. Test by submitting an RSVP!"}):o.jsxs("table",{className:"admin-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Guest Name"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Count"}),o.jsx("th",{children:"Dietary Notes"}),o.jsx("th",{children:"Song Request"})]})}),o.jsx("tbody",{children:I.map(b=>o.jsxs("tr",{children:[o.jsx("td",{className:"fw-600",children:b.fullName}),o.jsx("td",{children:o.jsx("span",{className:`status-pill ${b.attending==="yes"?"attending":"declined"}`,children:b.attending==="yes"?"Attending":"Declined"})}),o.jsx("td",{children:b.guestCount}),o.jsx("td",{className:"text-muted",children:b.dietary||"-"}),o.jsx("td",{className:"text-muted",children:b.songRequest||"-"})]},b.id))})]})})]}):o.jsxs("div",{className:"admin-login-box text-center",children:[o.jsx("div",{className:"admin-lock-icon",children:o.jsx(Gu,{size:28,className:"text-gold"})}),o.jsx("h3",{className:"font-serif admin-title",children:"Couple Dashboard"}),o.jsx("p",{className:"admin-subtitle",children:"Enter passcode to view RSVPs (PIN: 1234)"}),o.jsxs("form",{onSubmit:X,className:"admin-form",children:[o.jsx("input",{type:"password",placeholder:"Enter PIN (1234)",value:p,onChange:b=>Y(b.target.value),className:"form-input text-center"}),W&&o.jsx("p",{className:"error-text",children:W}),o.jsx("button",{type:"submit",className:"btn-gold mt-4",children:"Unlock Dashboard"})]})]})]}),o.jsx("style",{children:`
        .admin-modal {
          max-width: 720px;
        }

        .admin-lock-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-glass);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .admin-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .admin-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .admin-form {
          max-width: 280px;
          margin: 0 auto;
        }

        .error-text {
          font-size: 0.8rem;
          color: #E53E3E;
          margin-top: 0.5rem;
        }

        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .admin-main-title {
          font-size: 2rem;
          color: var(--text-primary);
        }

        .export-btn {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
        }

        .admin-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-gold);
          border-radius: 14px;
          padding: 1.2rem;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 1px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .admin-table-wrapper {
          max-height: 320px;
          overflow-y: auto;
          border: 1px solid var(--border-gold);
          border-radius: 12px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }

        .admin-table th, .admin-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .admin-table th {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 600;
        }

        .status-pill {
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .status-pill.attending {
          background: rgba(72, 187, 120, 0.15);
          color: #276749;
        }

        .status-pill.declined {
          background: rgba(229, 62, 62, 0.15);
          color: #9B2C2C;
        }

        .fw-600 { font-weight: 600; }
        .empty-msg {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
        }
      `})]})},pp=({currentTheme:y,onThemeChange:x,isInline:p=!1})=>{const[Y,z]=re.useState(!1),A=[{id:"maison",name:"Maison Dorée",color:"#D4AF37"},{id:"royal",name:"Royal Navy",color:"#1B263B"},{id:"sage",name:"Botanical Sage",color:"#9AB09E"},{id:"terracotta",name:"Terracotta Sunset",color:"#C86D51"}];return o.jsxs("div",{className:p?"theme-inline-wrapper":"theme-switcher-wrapper",children:[Y&&o.jsxs("div",{className:"theme-menu glass-card",children:[o.jsx("div",{className:"theme-menu-title",children:"Select Theme Style"}),o.jsx("div",{className:"theme-options",children:A.map(I=>o.jsxs("button",{className:`theme-option-btn ${y===I.id?"active":""}`,onClick:()=>{x(I.id),z(!1)},children:[o.jsx("span",{className:"theme-dot",style:{backgroundColor:I.color}}),o.jsx("span",{children:I.name}),y===I.id&&o.jsx(Go,{size:14,className:"text-gold ms-auto"})]},I.id))})]}),o.jsxs("button",{className:p?"theme-footer-btn":"audio-floating-btn theme-floating-btn",onClick:()=>z(!Y),title:"Change Aesthetic Theme","aria-label":"Toggle theme selector",children:[o.jsx(If,{size:16,className:"text-gold"}),o.jsx("span",{children:"Theme Palette"})]}),o.jsx("style",{children:`
        .theme-inline-wrapper {
          position: relative;
          display: inline-block;
        }

        .theme-footer-btn {
          background: rgba(26, 22, 20, 0.06);
          border: 1px solid var(--border-gold);
          border-radius: 30px;
          padding: 0.5rem 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-footer-btn:hover {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }

        .theme-menu {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 210px;
          padding: 1rem;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
        }

        .theme-menu-title {
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .theme-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .theme-option-btn {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 0.55rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .theme-option-btn:hover, .theme-option-btn.active {
          background: var(--bg-primary);
          border-color: var(--border-gold);
        }

        .theme-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .ms-auto { margin-left: auto; }
      `})]})};function mp(){const[y,x]=re.useState(!1),[p,Y]=re.useState(0),[z,A]=re.useState(!1),[I,$]=re.useState(!1),[W,le]=re.useState(!1),[te,X]=re.useState("maison"),ne=()=>{x(!0),A(!0),window.scrollTo({top:0,behavior:"instant"})};return re.useEffect(()=>{document.documentElement.setAttribute("data-theme",te);let we=!1;const b=()=>{we||(window.requestAnimationFrame(()=>{Y(window.scrollY),we=!1}),we=!0)};return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[te]),o.jsxs("div",{className:"app-main-container",children:[o.jsxs("div",{className:"petal-container",children:[o.jsx("div",{className:"petal",style:{left:"10%",width:"14px",height:"14px",animationDelay:"0s"}}),o.jsx("div",{className:"petal",style:{left:"25%",width:"18px",height:"18px",animationDelay:"3s"}}),o.jsx("div",{className:"petal",style:{left:"45%",width:"12px",height:"12px",animationDelay:"6s"}}),o.jsx("div",{className:"petal",style:{left:"70%",width:"16px",height:"16px",animationDelay:"1.5s"}}),o.jsx("div",{className:"petal",style:{left:"85%",width:"20px",height:"20px",animationDelay:"4.5s"}})]}),o.jsxs("div",{className:"kashmir-parallax-bg-wrapper",children:[o.jsx("div",{className:"parallax-layer layer-artwork",style:{transform:`translate3d(0, ${p*.18}px, 0)`},children:o.jsx("img",{src:"/wedding-card-digital/images/kashmir_mountains.jpg",alt:"Kashmir Parallax Background",className:"parallax-artwork-img"})}),o.jsxs("div",{className:"parallax-layer layer-patterns",style:{transform:`translate3d(0, ${p*.35}px, 0)`},children:[o.jsx("div",{className:"chinar-leaf leaf-1",children:"🍁"}),o.jsx("div",{className:"chinar-leaf leaf-2",children:"🍁"}),o.jsx("div",{className:"chinar-leaf leaf-3",children:"🍁"}),o.jsx("div",{className:"chinar-leaf leaf-4",children:"🍁"})]})]}),y?o.jsxs("div",{className:"invitation-app-fade-in",children:[o.jsxs("header",{className:"site-header glass-pill",children:[o.jsx("div",{className:"header-monogram",children:G.couple.monogram}),o.jsxs("button",{className:"header-rsvp-btn",onClick:()=>$(!0),children:[o.jsx(Kl,{size:14,className:"text-gold"}),o.jsx("span",{children:"RSVP"})]})]}),o.jsxs("main",{className:"main-content-flow",children:[o.jsx(rp,{onOpenRSVP:()=>$(!0)}),o.jsx(lp,{}),o.jsx(ip,{}),o.jsx(op,{}),o.jsx(ap,{}),o.jsx(sp,{}),o.jsx(up,{}),o.jsx("section",{className:"section-padding text-center",children:o.jsxs("div",{className:"glass-card rsvp-banner",children:[o.jsx("span",{className:"font-script section-script",children:"We Can't Wait"}),o.jsx("h2",{className:"font-serif section-title",children:"Join Us in Srinagar"}),o.jsx("p",{className:"rsvp-banner-text",children:"Please confirm your attendance so we can finalize our arrangements."}),o.jsxs("button",{className:"btn-gold mt-6",onClick:()=>$(!0),children:[o.jsx(Kl,{size:16}),o.jsx("span",{children:"Confirm RSVP Now"})]})]})})]}),o.jsxs("footer",{className:"site-footer",children:[o.jsx("div",{className:"footer-monogram font-serif",children:G.couple.monogram}),o.jsxs("p",{className:"footer-names",children:[G.couple.groomShort," & ",G.couple.brideShort]}),o.jsx("p",{className:"footer-date",children:G.couple.formattedDate}),o.jsxs("div",{className:"footer-controls-group",children:[o.jsx(cp,{autoPlayTrigger:z,isInline:!0}),o.jsx(pp,{currentTheme:te,onThemeChange:X,isInline:!0})]}),o.jsxs("button",{className:"admin-footer-link",onClick:()=>le(!0),children:[o.jsx(Gu,{size:12}),o.jsx("span",{children:"Couple Admin Login"})]})]})]}):o.jsx(tp,{onUnfoldComplete:ne}),o.jsx(dp,{isOpen:I,onClose:()=>$(!1)}),o.jsx(fp,{isOpen:W,onClose:()=>le(!1)}),o.jsx("style",{children:`
        .app-main-container {
          min-height: 100vh;
          position: relative;
        }

        .invitation-app-fade-in {
          animation: pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 20;
        }

        @keyframes pageFadeIn {
          from { opacity: 0; filter: blur(6px); }
          to { opacity: 1; filter: blur(0); }
        }

        /* Kashmir Artwork & Patterns Parallax Background */
        .kashmir-parallax-bg-wrapper {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 120%;
          will-change: transform;
        }

        .layer-artwork {
          opacity: 0.16;
          filter: blur(2px);
        }

        .parallax-artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .layer-patterns {
          opacity: 0.22;
        }

        .chinar-leaf {
          position: absolute;
          font-size: 2.2rem;
          filter: drop-shadow(0 4px 10px rgba(212, 175, 55, 0.4));
        }

        .leaf-1 { top: 15%; left: 8%; }
        .leaf-2 { top: 40%; right: 10%; font-size: 3rem; }
        .leaf-3 { top: 70%; left: 12%; }
        .leaf-4 { top: 88%; right: 15%; font-size: 2.5rem; }

        .site-header {
          position: fixed;
          top: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 90;
          padding: 0.5rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.8rem;
          box-shadow: var(--shadow-sm);
        }

        .header-monogram {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 2px;
          color: var(--text-gold);
        }

        .header-rsvp-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-primary);
          cursor: pointer;
        }

        .header-rsvp-btn:hover {
          color: var(--text-gold);
        }

        .main-content-flow {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .rsvp-banner {
          padding: 3.5rem 2rem;
          max-width: 580px;
          margin: 0 auto;
        }

        .rsvp-banner-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.6rem;
        }

        .site-footer {
          text-align: center;
          padding: 3.5rem 1rem 5rem 1rem;
          border-top: 1px solid var(--border-light);
          background: var(--bg-secondary);
        }

        .footer-monogram {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-gold);
        }

        .footer-names {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-primary);
          margin: 0.4rem 0;
        }

        .footer-date {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .footer-controls-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .admin-footer-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 2.2rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .admin-footer-link:hover {
          color: var(--text-gold);
        }
      `})]})}tf.createRoot(document.getElementById("root")).render(o.jsx(Kd.StrictMode,{children:o.jsx(mp,{})}));

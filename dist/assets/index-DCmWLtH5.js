(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))Y(T);new MutationObserver(T=>{for(const D of T)if(D.type==="childList")for(const G of D.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&Y(G)}).observe(document,{childList:!0,subtree:!0});function p(T){const D={};return T.integrity&&(D.integrity=T.integrity),T.referrerPolicy&&(D.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?D.credentials="include":T.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function Y(T){if(T.ep)return;T.ep=!0;const D=p(T);fetch(T.href,D)}})();function Qu(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var Uo={exports:{}},Dr={},bo={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Hd(){if(Lu)return q;Lu=1;var y=Symbol.for("react.element"),x=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),G=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),re=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),J=Symbol.iterator;function le(s){return s===null||typeof s!="object"?null:(s=J&&s[J]||s["@@iterator"],typeof s=="function"?s:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},De=Object.assign,W={};function A(s,g,j){this.props=s,this.context=g,this.refs=W,this.updater=j||Le}A.prototype.isReactComponent={},A.prototype.setState=function(s,g){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,g,"setState")},A.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function rt(){}rt.prototype=A.prototype;function Qe(s,g,j){this.props=s,this.context=g,this.refs=W,this.updater=j||Le}var we=Qe.prototype=new rt;we.constructor=Qe,De(we,A.prototype),we.isPureReactComponent=!0;var se=Array.isArray,lt=Object.prototype.hasOwnProperty,Me={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ke(s,g,j){var C,z={},P=null,_=null;if(g!=null)for(C in g.ref!==void 0&&(_=g.ref),g.key!==void 0&&(P=""+g.key),g)lt.call(g,C)&&!Ie.hasOwnProperty(C)&&(z[C]=g[C]);var R=arguments.length-2;if(R===1)z.children=j;else if(1<R){for(var V=Array(R),Z=0;Z<R;Z++)V[Z]=arguments[Z+2];z.children=V}if(s&&s.defaultProps)for(C in R=s.defaultProps,R)z[C]===void 0&&(z[C]=R[C]);return{$$typeof:y,type:s,key:P,ref:_,props:z,_owner:Me.current}}function Et(s,g){return{$$typeof:y,type:s.type,key:g,ref:s.ref,props:s.props,_owner:s._owner}}function vt(s){return typeof s=="object"&&s!==null&&s.$$typeof===y}function Ft(s){var g={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(j){return g[j]})}var ut=/\/+/g;function $e(s,g){return typeof s=="object"&&s!==null&&s.key!=null?Ft(""+s.key):g.toString(36)}function Ge(s,g,j,C,z){var P=typeof s;(P==="undefined"||P==="boolean")&&(s=null);var _=!1;if(s===null)_=!0;else switch(P){case"string":case"number":_=!0;break;case"object":switch(s.$$typeof){case y:case x:_=!0}}if(_)return _=s,z=z(_),s=C===""?"."+$e(_,0):C,se(z)?(j="",s!=null&&(j=s.replace(ut,"$&/")+"/"),Ge(z,g,j,"",function(Z){return Z})):z!=null&&(vt(z)&&(z=Et(z,j+(!z.key||_&&_.key===z.key?"":(""+z.key).replace(ut,"$&/")+"/")+s)),g.push(z)),1;if(_=0,C=C===""?".":C+":",se(s))for(var R=0;R<s.length;R++){P=s[R];var V=C+$e(P,R);_+=Ge(P,g,j,V,z)}else if(V=le(s),typeof V=="function")for(s=V.call(s),R=0;!(P=s.next()).done;)P=P.value,V=C+$e(P,R++),_+=Ge(P,g,j,V,z);else if(P==="object")throw g=String(s),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return _}function Ye(s,g,j){if(s==null)return s;var C=[],z=0;return Ge(s,C,"","",function(P){return g.call(j,P,z++)}),C}function Pe(s){if(s._status===-1){var g=s._result;g=g(),g.then(function(j){(s._status===0||s._status===-1)&&(s._status=1,s._result=j)},function(j){(s._status===0||s._status===-1)&&(s._status=2,s._result=j)}),s._status===-1&&(s._status=0,s._result=g)}if(s._status===1)return s._result.default;throw s._result}var me={current:null},E={transition:null},$={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:E,ReactCurrentOwner:Me};function d(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:Ye,forEach:function(s,g,j){Ye(s,function(){g.apply(this,arguments)},j)},count:function(s){var g=0;return Ye(s,function(){g++}),g},toArray:function(s){return Ye(s,function(g){return g})||[]},only:function(s){if(!vt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},q.Component=A,q.Fragment=p,q.Profiler=T,q.PureComponent=Qe,q.StrictMode=Y,q.Suspense=B,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,q.act=d,q.cloneElement=function(s,g,j){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var C=De({},s.props),z=s.key,P=s.ref,_=s._owner;if(g!=null){if(g.ref!==void 0&&(P=g.ref,_=Me.current),g.key!==void 0&&(z=""+g.key),s.type&&s.type.defaultProps)var R=s.type.defaultProps;for(V in g)lt.call(g,V)&&!Ie.hasOwnProperty(V)&&(C[V]=g[V]===void 0&&R!==void 0?R[V]:g[V])}var V=arguments.length-2;if(V===1)C.children=j;else if(1<V){R=Array(V);for(var Z=0;Z<V;Z++)R[Z]=arguments[Z+2];C.children=R}return{$$typeof:y,type:s.type,key:z,ref:P,props:C,_owner:_}},q.createContext=function(s){return s={$$typeof:G,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:D,_context:s},s.Consumer=s},q.createElement=Ke,q.createFactory=function(s){var g=Ke.bind(null,s);return g.type=s,g},q.createRef=function(){return{current:null}},q.forwardRef=function(s){return{$$typeof:Q,render:s}},q.isValidElement=vt,q.lazy=function(s){return{$$typeof:ne,_payload:{_status:-1,_result:s},_init:Pe}},q.memo=function(s,g){return{$$typeof:re,type:s,compare:g===void 0?null:g}},q.startTransition=function(s){var g=E.transition;E.transition={};try{s()}finally{E.transition=g}},q.unstable_act=d,q.useCallback=function(s,g){return me.current.useCallback(s,g)},q.useContext=function(s){return me.current.useContext(s)},q.useDebugValue=function(){},q.useDeferredValue=function(s){return me.current.useDeferredValue(s)},q.useEffect=function(s,g){return me.current.useEffect(s,g)},q.useId=function(){return me.current.useId()},q.useImperativeHandle=function(s,g,j){return me.current.useImperativeHandle(s,g,j)},q.useInsertionEffect=function(s,g){return me.current.useInsertionEffect(s,g)},q.useLayoutEffect=function(s,g){return me.current.useLayoutEffect(s,g)},q.useMemo=function(s,g){return me.current.useMemo(s,g)},q.useReducer=function(s,g,j){return me.current.useReducer(s,g,j)},q.useRef=function(s){return me.current.useRef(s)},q.useState=function(s){return me.current.useState(s)},q.useSyncExternalStore=function(s,g,j){return me.current.useSyncExternalStore(s,g,j)},q.useTransition=function(){return me.current.useTransition()},q.version="18.3.1",q}var Du;function Ho(){return Du||(Du=1,bo.exports=Hd()),bo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Qd(){if(Iu)return Dr;Iu=1;var y=Ho(),x=Symbol.for("react.element"),p=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,T=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function G(Q,B,re){var ne,J={},le=null,Le=null;re!==void 0&&(le=""+re),B.key!==void 0&&(le=""+B.key),B.ref!==void 0&&(Le=B.ref);for(ne in B)Y.call(B,ne)&&!D.hasOwnProperty(ne)&&(J[ne]=B[ne]);if(Q&&Q.defaultProps)for(ne in B=Q.defaultProps,B)J[ne]===void 0&&(J[ne]=B[ne]);return{$$typeof:x,type:Q,key:le,ref:Le,props:J,_owner:T.current}}return Dr.Fragment=p,Dr.jsx=G,Dr.jsxs=G,Dr}var Ou;function Kd(){return Ou||(Ou=1,Uo.exports=Qd()),Uo.exports}var o=Kd(),ae=Ho();const Gd=Qu(ae);var Ql={},Bo={exports:{}},nt={},$o={exports:{}},Vo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Yd(){return Au||(Au=1,(function(y){function x(E,$){var d=E.length;E.push($);e:for(;0<d;){var s=d-1>>>1,g=E[s];if(0<T(g,$))E[s]=$,E[d]=g,d=s;else break e}}function p(E){return E.length===0?null:E[0]}function Y(E){if(E.length===0)return null;var $=E[0],d=E.pop();if(d!==$){E[0]=d;e:for(var s=0,g=E.length,j=g>>>1;s<j;){var C=2*(s+1)-1,z=E[C],P=C+1,_=E[P];if(0>T(z,d))P<g&&0>T(_,z)?(E[s]=_,E[P]=d,s=P):(E[s]=z,E[C]=d,s=C);else if(P<g&&0>T(_,d))E[s]=_,E[P]=d,s=P;else break e}}return $}function T(E,$){var d=E.sortIndex-$.sortIndex;return d!==0?d:E.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var D=performance;y.unstable_now=function(){return D.now()}}else{var G=Date,Q=G.now();y.unstable_now=function(){return G.now()-Q}}var B=[],re=[],ne=1,J=null,le=3,Le=!1,De=!1,W=!1,A=typeof setTimeout=="function"?setTimeout:null,rt=typeof clearTimeout=="function"?clearTimeout:null,Qe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function we(E){for(var $=p(re);$!==null;){if($.callback===null)Y(re);else if($.startTime<=E)Y(re),$.sortIndex=$.expirationTime,x(B,$);else break;$=p(re)}}function se(E){if(W=!1,we(E),!De)if(p(B)!==null)De=!0,Pe(lt);else{var $=p(re);$!==null&&me(se,$.startTime-E)}}function lt(E,$){De=!1,W&&(W=!1,rt(Ke),Ke=-1),Le=!0;var d=le;try{for(we($),J=p(B);J!==null&&(!(J.expirationTime>$)||E&&!Ft());){var s=J.callback;if(typeof s=="function"){J.callback=null,le=J.priorityLevel;var g=s(J.expirationTime<=$);$=y.unstable_now(),typeof g=="function"?J.callback=g:J===p(B)&&Y(B),we($)}else Y(B);J=p(B)}if(J!==null)var j=!0;else{var C=p(re);C!==null&&me(se,C.startTime-$),j=!1}return j}finally{J=null,le=d,Le=!1}}var Me=!1,Ie=null,Ke=-1,Et=5,vt=-1;function Ft(){return!(y.unstable_now()-vt<Et)}function ut(){if(Ie!==null){var E=y.unstable_now();vt=E;var $=!0;try{$=Ie(!0,E)}finally{$?$e():(Me=!1,Ie=null)}}else Me=!1}var $e;if(typeof Qe=="function")$e=function(){Qe(ut)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ye=Ge.port2;Ge.port1.onmessage=ut,$e=function(){Ye.postMessage(null)}}else $e=function(){A(ut,0)};function Pe(E){Ie=E,Me||(Me=!0,$e())}function me(E,$){Ke=A(function(){E(y.unstable_now())},$)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(E){E.callback=null},y.unstable_continueExecution=function(){De||Le||(De=!0,Pe(lt))},y.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Et=0<E?Math.floor(1e3/E):5},y.unstable_getCurrentPriorityLevel=function(){return le},y.unstable_getFirstCallbackNode=function(){return p(B)},y.unstable_next=function(E){switch(le){case 1:case 2:case 3:var $=3;break;default:$=le}var d=le;le=$;try{return E()}finally{le=d}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(E,$){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var d=le;le=E;try{return $()}finally{le=d}},y.unstable_scheduleCallback=function(E,$,d){var s=y.unstable_now();switch(typeof d=="object"&&d!==null?(d=d.delay,d=typeof d=="number"&&0<d?s+d:s):d=s,E){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=d+g,E={id:ne++,callback:$,priorityLevel:E,startTime:d,expirationTime:g,sortIndex:-1},d>s?(E.sortIndex=d,x(re,E),p(B)===null&&E===p(re)&&(W?(rt(Ke),Ke=-1):W=!0,me(se,d-s))):(E.sortIndex=g,x(B,E),De||Le||(De=!0,Pe(lt))),E},y.unstable_shouldYield=Ft,y.unstable_wrapCallback=function(E){var $=le;return function(){var d=le;le=$;try{return E.apply(this,arguments)}finally{le=d}}}})(Vo)),Vo}var Uu;function qd(){return Uu||(Uu=1,$o.exports=Yd()),$o.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function Xd(){if(bu)return nt;bu=1;var y=Ho(),x=qd();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y=new Set,T={};function D(e,t){G(e,t),G(e+"Capture",t)}function G(e,t){for(T[e]=t,e=0;e<t.length;e++)Y.add(t[e])}var Q=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,re=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},J={};function le(e){return B.call(J,e)?!0:B.call(ne,e)?!1:re.test(e)?J[e]=!0:(ne[e]=!0,!1)}function Le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function De(e,t,n,r){if(t===null||typeof t>"u"||Le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var rt=/[\-:]([a-z])/g;function Qe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rt,Qe);A[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rt,Qe);A[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rt,Qe);A[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function we(e,t,n,r){var l=A.hasOwnProperty(t)?A[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(De(t,n,l,r)&&(n=null),r||l===null?le(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var se=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lt=Symbol.for("react.element"),Me=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Et=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),E=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var d=Object.assign,s;function g(e){if(s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);s=t&&t[1]||""}return`
`+s+e}var j=!1;function C(e,t){if(!e||j)return"";j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{j=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function z(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=C(e.type,!1),e;case 11:return e=C(e.type.render,!1),e;case 1:return e=C(e.type,!0),e;default:return""}}function P(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Me:return"Portal";case Et:return"Profiler";case Ke:return"StrictMode";case $e:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ft:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ye:return t=e.displayName||null,t!==null?t:P(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}function _(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return P(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ie(e){e._valueTracker||(e._valueTracker=Z(e))}function de(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ye(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function X(e,t){var n=t.checked;return d({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Re(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qe(e,t){t=t.checked,t!=null&&we(e,"checked",t,!1)}function Ve(e,t){qe(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yt(e,t.type,n):t.hasOwnProperty("defaultValue")&&yt(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ct(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yt(e,t,n){(t!=="number"||ye(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oe=Array.isArray;function $t(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return d({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ir(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(Oe(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function Yn(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Or(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sn,Zn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sn=Sn||document.createElement("div"),Sn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yl=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Yl.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tt[t]=Tt[e]})});function Ar(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+t).trim():t+"px"}function qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ar(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var qu=d({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,jn=null,Cn=null;function Xo(e){if(e=wr(e)){if(typeof ei!="function")throw Error(p(280));var t=e.stateNode;t&&(t=al(t),ei(e.stateNode,e.type,t))}}function Zo(e){jn?Cn?Cn.push(e):Cn=[e]:jn=e}function Jo(){if(jn){var e=jn,t=Cn;if(Cn=jn=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function ea(e,t){return e(t)}function ta(){}var ti=!1;function na(e,t,n){if(ti)return e(t,n);ti=!0;try{return ea(e,t,n)}finally{ti=!1,(jn!==null||Cn!==null)&&(ta(),Jo())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var ni=!1;if(Q)try{var er={};Object.defineProperty(er,"passive",{get:function(){ni=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ni=!1}function Xu(e,t,n,r,l,i,a,u,c){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(k){this.onError(k)}}var tr=!1,Ur=null,br=!1,ri=null,Zu={onError:function(e){tr=!0,Ur=e}};function Ju(e,t,n,r,l,i,a,u,c){tr=!1,Ur=null,Xu.apply(Zu,arguments)}function ec(e,t,n,r,l,i,a,u,c){if(Ju.apply(this,arguments),tr){if(tr){var v=Ur;tr=!1,Ur=null}else throw Error(p(198));br||(br=!0,ri=v)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ra(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(cn(e)!==e)throw Error(p(188))}function tc(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return la(l),e;if(i===r)return la(l),t;i=i.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===n){a=!0,n=l,r=i;break}if(u===r){a=!0,r=l,n=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===n){a=!0,n=i,r=l;break}if(u===r){a=!0,r=i,n=l;break}u=u.sibling}if(!a)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function ia(e){return e=tc(e),e!==null?oa(e):null}function oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oa(e);if(t!==null)return t;e=e.sibling}return null}var aa=x.unstable_scheduleCallback,sa=x.unstable_cancelCallback,nc=x.unstable_shouldYield,rc=x.unstable_requestPaint,ke=x.unstable_now,lc=x.unstable_getCurrentPriorityLevel,li=x.unstable_ImmediatePriority,ua=x.unstable_UserBlockingPriority,Br=x.unstable_NormalPriority,ic=x.unstable_LowPriority,ca=x.unstable_IdlePriority,$r=null,_t=null;function oc(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:uc,ac=Math.log,sc=Math.LN2;function uc(e){return e>>>=0,e===0?32:31-(ac(e)/sc|0)|0}var Vr=64,Wr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~l;u!==0?r=nr(u):(i&=a,i!==0&&(r=nr(i)))}else a=n&~l,a!==0?r=nr(a):i!==0&&(r=nr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),l=1<<n,r|=e[n],t&=~l;return r}function cc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-xt(i),u=1<<a,c=l[a];c===-1?((u&n)===0||(u&r)!==0)&&(l[a]=cc(u,t)):c<=t&&(e.expiredLanes|=u),i&=~u}}function ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function da(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function oi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function fc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-xt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ai(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var oe=0;function fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pa,si,ma,ha,ga,ui=!1,Qr=[],Wt=null,Ht=null,Qt=null,lr=new Map,ir=new Map,Kt=[],pc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function or(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&si(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function mc(e,t,n,r,l){switch(t){case"focusin":return Wt=or(Wt,e,t,n,r,l),!0;case"dragenter":return Ht=or(Ht,e,t,n,r,l),!0;case"mouseover":return Qt=or(Qt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return lr.set(i,or(lr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,ir.set(i,or(ir.get(i)||null,e,t,n,r,l)),!0}return!1}function ya(e){var t=dn(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=ra(n),t!==null){e.blockedOn=t,ga(e.priority,function(){ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=wr(n),t!==null&&si(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){Kr(e)&&n.delete(t)}function hc(){ui=!1,Wt!==null&&Kr(Wt)&&(Wt=null),Ht!==null&&Kr(Ht)&&(Ht=null),Qt!==null&&Kr(Qt)&&(Qt=null),lr.forEach(xa),ir.forEach(xa)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,ui||(ui=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,hc)))}function sr(e){function t(l){return ar(l,e)}if(0<Qr.length){ar(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&ar(Wt,e),Ht!==null&&ar(Ht,e),Qt!==null&&ar(Qt,e),lr.forEach(t),ir.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)ya(n),n.blockedOn===null&&Kt.shift()}var En=se.ReactCurrentBatchConfig,Gr=!0;function gc(e,t,n,r){var l=oe,i=En.transition;En.transition=null;try{oe=1,ci(e,t,n,r)}finally{oe=l,En.transition=i}}function vc(e,t,n,r){var l=oe,i=En.transition;En.transition=null;try{oe=4,ci(e,t,n,r)}finally{oe=l,En.transition=i}}function ci(e,t,n,r){if(Gr){var l=di(e,t,n,r);if(l===null)zi(e,t,r,Yr,n),va(e,r);else if(mc(l,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<pc.indexOf(e)){for(;l!==null;){var i=wr(l);if(i!==null&&pa(i),i=di(e,t,n,r),i===null&&zi(e,t,r,Yr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else zi(e,t,r,null,n)}}var Yr=null;function di(e,t,n,r){if(Yr=null,e=Jl(r),e=dn(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ra(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function wa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lc()){case li:return 1;case ua:return 4;case Br:case ic:return 16;case ca:return 536870912;default:return 16}default:return 16}}var Gt=null,fi=null,qr=null;function ka(){if(qr)return qr;var e,t=fi,n=t.length,r,l="value"in Gt?Gt.value:Gt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return qr=l.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Na(){return!1}function it(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Na,this.isPropagationStopped=Na,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=it(_n),ur=d({},_n,{view:0,detail:0}),yc=it(ur),mi,hi,cr,Jr=d({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(mi=e.screenX-cr.screenX,hi=e.screenY-cr.screenY):hi=mi=0,cr=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),Sa=it(Jr),xc=d({},Jr,{dataTransfer:0}),wc=it(xc),kc=d({},ur,{relatedTarget:0}),gi=it(kc),Nc=d({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),Sc=it(Nc),jc=d({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cc=it(jc),Ec=d({},_n,{data:0}),ja=it(Ec),_c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mc[e])?!!t[e]:!1}function vi(){return Pc}var Rc=d({},ur,{key:function(e){if(e.key){var t=_c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fc=it(Rc),Tc=d({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=it(Tc),Lc=d({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),Dc=it(Lc),Ic=d({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oc=it(Ic),Ac=d({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uc=it(Ac),bc=[9,13,27,32],yi=Q&&"CompositionEvent"in window,dr=null;Q&&"documentMode"in document&&(dr=document.documentMode);var Bc=Q&&"TextEvent"in window&&!dr,Ea=Q&&(!yi||dr&&8<dr&&11>=dr),_a=" ",za=!1;function Ma(e,t){switch(e){case"keyup":return bc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function $c(e,t){switch(e){case"compositionend":return Pa(t);case"keypress":return t.which!==32?null:(za=!0,_a);case"textInput":return e=t.data,e===_a&&za?null:e;default:return null}}function Vc(e,t){if(zn)return e==="compositionend"||!yi&&Ma(e,t)?(e=ka(),qr=fi=Gt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ea&&t.locale!=="ko"?null:t.data;default:return null}}var Wc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wc[e.type]:t==="textarea"}function Fa(e,t,n,r){Zo(r),t=ll(t,"onChange"),0<t.length&&(n=new pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function Hc(e){qa(e,0)}function el(e){var t=Tn(e);if(de(t))return e}function Qc(e,t){if(e==="change")return t}var Ta=!1;if(Q){var xi;if(Q){var wi="oninput"in document;if(!wi){var La=document.createElement("div");La.setAttribute("oninput","return;"),wi=typeof La.oninput=="function"}xi=wi}else xi=!1;Ta=xi&&(!document.documentMode||9<document.documentMode)}function Da(){fr&&(fr.detachEvent("onpropertychange",Ia),pr=fr=null)}function Ia(e){if(e.propertyName==="value"&&el(pr)){var t=[];Fa(t,pr,e,Jl(e)),na(Hc,t)}}function Kc(e,t,n){e==="focusin"?(Da(),fr=t,pr=n,fr.attachEvent("onpropertychange",Ia)):e==="focusout"&&Da()}function Gc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(pr)}function Yc(e,t){if(e==="click")return el(t)}function qc(e,t){if(e==="input"||e==="change")return el(t)}function Xc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Xc;function mr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!B.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function Ua(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ua(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ba(){for(var e=window,t=ye();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ye(e.document)}return t}function ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zc(e){var t=ba(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ua(n.ownerDocument.documentElement,n)){if(r!==null&&ki(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Aa(n,i);var a=Aa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jc=Q&&"documentMode"in document&&11>=document.documentMode,Mn=null,Ni=null,hr=null,Si=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||Mn==null||Mn!==ye(r)||(r=Mn,"selectionStart"in r&&ki(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&mr(hr,r)||(hr=r,r=ll(Ni,"onSelect"),0<r.length&&(t=new pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ji={},$a={};Q&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function nl(e){if(ji[e])return ji[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $a)return ji[e]=t[n];return e}var Va=nl("animationend"),Wa=nl("animationiteration"),Ha=nl("animationstart"),Qa=nl("transitionend"),Ka=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Ka.set(e,t),D(t,[e])}for(var Ci=0;Ci<Ga.length;Ci++){var Ei=Ga[Ci],ed=Ei.toLowerCase(),td=Ei[0].toUpperCase()+Ei.slice(1);Yt(ed,"on"+td)}Yt(Va,"onAnimationEnd"),Yt(Wa,"onAnimationIteration"),Yt(Ha,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(Qa,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nd=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Ya(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ec(r,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,v=u.currentTarget;if(u=u.listener,c!==i&&l.isPropagationStopped())break e;Ya(l,u,v),i=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,v=u.currentTarget,u=u.listener,c!==i&&l.isPropagationStopped())break e;Ya(l,u,v),i=c}}}if(br)throw e=ri,br=!1,ri=null,e}function fe(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(Xa(t,e,2,!1),n.add(r))}function _i(e,t,n){var r=0;t&&(r|=4),Xa(n,e,r,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[rl]){e[rl]=!0,Y.forEach(function(n){n!=="selectionchange"&&(nd.has(n)||_i(n,!1,e),_i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,_i("selectionchange",!1,t))}}function Xa(e,t,n,r){switch(wa(t)){case 1:var l=gc;break;case 4:l=vc;break;default:l=ci}n=l.bind(null,t,n,e),l=void 0,!ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function zi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;u!==null;){if(a=dn(u),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}u=u.parentNode}}r=r.return}na(function(){var v=i,k=Jl(n),N=[];e:{var w=Ka.get(e);if(w!==void 0){var M=pi,L=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":M=Fc;break;case"focusin":L="focus",M=gi;break;case"focusout":L="blur",M=gi;break;case"beforeblur":case"afterblur":M=gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=wc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Dc;break;case Va:case Wa:case Ha:M=Sc;break;case Qa:M=Oc;break;case"scroll":M=yc;break;case"wheel":M=Uc;break;case"copy":case"cut":case"paste":M=Cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ca}var I=(t&4)!==0,Ne=!I&&e==="scroll",m=I?w!==null?w+"Capture":null:w;I=[];for(var f=v,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Jn(f,m),S!=null&&I.push(yr(f,S,h)))),Ne)break;f=f.return}0<I.length&&(w=new M(w,L,null,n,k),N.push({event:w,listeners:I}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",w&&n!==Zl&&(L=n.relatedTarget||n.fromElement)&&(dn(L)||L[Lt]))break e;if((M||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,M?(L=n.relatedTarget||n.toElement,M=v,L=L?dn(L):null,L!==null&&(Ne=cn(L),L!==Ne||L.tag!==5&&L.tag!==6)&&(L=null)):(M=null,L=v),M!==L)){if(I=Sa,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(I=Ca,S="onPointerLeave",m="onPointerEnter",f="pointer"),Ne=M==null?w:Tn(M),h=L==null?w:Tn(L),w=new I(S,f+"leave",M,n,k),w.target=Ne,w.relatedTarget=h,S=null,dn(k)===v&&(I=new I(m,f+"enter",L,n,k),I.target=h,I.relatedTarget=Ne,S=I),Ne=S,M&&L)t:{for(I=M,m=L,f=0,h=I;h;h=Rn(h))f++;for(h=0,S=m;S;S=Rn(S))h++;for(;0<f-h;)I=Rn(I),f--;for(;0<h-f;)m=Rn(m),h--;for(;f--;){if(I===m||m!==null&&I===m.alternate)break t;I=Rn(I),m=Rn(m)}I=null}else I=null;M!==null&&Za(N,w,M,I,!1),L!==null&&Ne!==null&&Za(N,Ne,L,I,!0)}}e:{if(w=v?Tn(v):window,M=w.nodeName&&w.nodeName.toLowerCase(),M==="select"||M==="input"&&w.type==="file")var O=Qc;else if(Ra(w))if(Ta)O=qc;else{O=Gc;var U=Kc}else(M=w.nodeName)&&M.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(O=Yc);if(O&&(O=O(e,v))){Fa(N,O,n,k);break e}U&&U(e,w,v),e==="focusout"&&(U=w._wrapperState)&&U.controlled&&w.type==="number"&&yt(w,"number",w.value)}switch(U=v?Tn(v):window,e){case"focusin":(Ra(U)||U.contentEditable==="true")&&(Mn=U,Ni=v,hr=null);break;case"focusout":hr=Ni=Mn=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,Ba(N,n,k);break;case"selectionchange":if(Jc)break;case"keydown":case"keyup":Ba(N,n,k)}var b;if(yi)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else zn?Ma(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(Ea&&n.locale!=="ko"&&(zn||H!=="onCompositionStart"?H==="onCompositionEnd"&&zn&&(b=ka()):(Gt=k,fi="value"in Gt?Gt.value:Gt.textContent,zn=!0)),U=ll(v,H),0<U.length&&(H=new ja(H,e,null,n,k),N.push({event:H,listeners:U}),b?H.data=b:(b=Pa(n),b!==null&&(H.data=b)))),(b=Bc?$c(e,n):Vc(e,n))&&(v=ll(v,"onBeforeInput"),0<v.length&&(k=new ja("onBeforeInput","beforeinput",null,n,k),N.push({event:k,listeners:v}),k.data=b))}qa(N,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jn(e,n),i!=null&&r.unshift(yr(e,i,l)),i=Jn(e,t),i!=null&&r.push(yr(e,i,l))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Za(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,v=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&v!==null&&(u=v,l?(c=Jn(n,i),c!=null&&a.unshift(yr(n,c,u))):l||(c=Jn(n,i),c!=null&&a.push(yr(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var rd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(rd,`
`).replace(ld,"")}function il(e,t,n){if(t=Ja(t),Ja(e)!==t&&n)throw Error(p(425))}function ol(){}var Mi=null,Pi=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fi=typeof setTimeout=="function"?setTimeout:void 0,id=typeof clearTimeout=="function"?clearTimeout:void 0,es=typeof Promise=="function"?Promise:void 0,od=typeof queueMicrotask=="function"?queueMicrotask:typeof es<"u"?function(e){return es.resolve(null).then(e).catch(ad)}:Fi;function ad(e){setTimeout(function(){throw e})}function Ti(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);sr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ts(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Fn,xr="__reactProps$"+Fn,Lt="__reactContainer$"+Fn,Li="__reactEvents$"+Fn,sd="__reactListeners$"+Fn,ud="__reactHandles$"+Fn;function dn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ts(e);e!==null;){if(n=e[zt])return n;e=ts(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[zt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function al(e){return e[xr]||null}var Di=[],Ln=-1;function Xt(e){return{current:e}}function pe(e){0>Ln||(e.current=Di[Ln],Di[Ln]=null,Ln--)}function ue(e,t){Ln++,Di[Ln]=e.current,e.current=t}var Zt={},Ae=Xt(Zt),Xe=Xt(!1),fn=Zt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ze(e){return e=e.childContextTypes,e!=null}function sl(){pe(Xe),pe(Ae)}function ns(e,t,n){if(Ae.current!==Zt)throw Error(p(168));ue(Ae,t),ue(Xe,n)}function rs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(p(108,_(e)||"Unknown",l));return d({},n,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,fn=Ae.current,ue(Ae,e),ue(Xe,Xe.current),!0}function ls(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=rs(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,pe(Xe),pe(Ae),ue(Ae,e)):pe(Xe),ue(Xe,n)}var Dt=null,cl=!1,Ii=!1;function is(e){Dt===null?Dt=[e]:Dt.push(e)}function cd(e){cl=!0,is(e)}function Jt(){if(!Ii&&Dt!==null){Ii=!0;var e=0,t=oe;try{var n=Dt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,cl=!1}catch(l){throw Dt!==null&&(Dt=Dt.slice(e+1)),aa(li,Jt),l}finally{oe=t,Ii=!1}}return null}var In=[],On=0,dl=null,fl=0,dt=[],ft=0,pn=null,It=1,Ot="";function mn(e,t){In[On++]=fl,In[On++]=dl,dl=e,fl=t}function os(e,t,n){dt[ft++]=It,dt[ft++]=Ot,dt[ft++]=pn,pn=e;var r=It;e=Ot;var l=32-xt(r)-1;r&=~(1<<l),n+=1;var i=32-xt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,It=1<<32-xt(t)+l|n<<l|r,Ot=i+e}else It=1<<i|n<<l|r,Ot=e}function Oi(e){e.return!==null&&(mn(e,1),os(e,1,0))}function Ai(e){for(;e===dl;)dl=In[--On],In[On]=null,fl=In[--On],In[On]=null;for(;e===pn;)pn=dt[--ft],dt[ft]=null,Ot=dt[--ft],dt[ft]=null,It=dt[--ft],dt[ft]=null}var ot=null,at=null,he=!1,kt=null;function as(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,at=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:It,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,at=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(he){var t=at;if(t){var n=t;if(!ss(e,t)){if(Ui(e))throw Error(p(418));t=qt(n.nextSibling);var r=ot;t&&ss(e,t)?as(r,n):(e.flags=e.flags&-4097|2,he=!1,ot=e)}}else{if(Ui(e))throw Error(p(418));e.flags=e.flags&-4097|2,he=!1,ot=e}}}function us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function pl(e){if(e!==ot)return!1;if(!he)return us(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=at)){if(Ui(e))throw cs(),Error(p(418));for(;t;)as(e,t),t=qt(t.nextSibling)}if(us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ot?qt(e.stateNode.nextSibling):null;return!0}function cs(){for(var e=at;e;)e=qt(e.nextSibling)}function An(){at=ot=null,he=!1}function Bi(e){kt===null?kt=[e]:kt.push(e)}var dd=se.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function ml(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ds(e){var t=e._init;return t(e._payload)}function fs(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function l(m,f){return m=sn(m,f),m.index=0,m.sibling=null,m}function i(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,h,S){return f===null||f.tag!==6?(f=To(h,m.mode,S),f.return=m,f):(f=l(f,h),f.return=m,f)}function c(m,f,h,S){var O=h.type;return O===Ie?k(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pe&&ds(O)===f.type)?(S=l(f,h.props),S.ref=kr(m,f,h),S.return=m,S):(S=Al(h.type,h.key,h.props,null,m.mode,S),S.ref=kr(m,f,h),S.return=m,S)}function v(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Lo(h,m.mode,S),f.return=m,f):(f=l(f,h.children||[]),f.return=m,f)}function k(m,f,h,S,O){return f===null||f.tag!==7?(f=Nn(h,m.mode,S,O),f.return=m,f):(f=l(f,h),f.return=m,f)}function N(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=To(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lt:return h=Al(f.type,f.key,f.props,null,m.mode,h),h.ref=kr(m,null,f),h.return=m,h;case Me:return f=Lo(f,m.mode,h),f.return=m,f;case Pe:var S=f._init;return N(m,S(f._payload),h)}if(Oe(f)||$(f))return f=Nn(f,m.mode,h,null),f.return=m,f;ml(m,f)}return null}function w(m,f,h,S){var O=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return O!==null?null:u(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case lt:return h.key===O?c(m,f,h,S):null;case Me:return h.key===O?v(m,f,h,S):null;case Pe:return O=h._init,w(m,f,O(h._payload),S)}if(Oe(h)||$(h))return O!==null?null:k(m,f,h,S,null);ml(m,h)}return null}function M(m,f,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,u(f,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lt:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,O);case Me:return m=m.get(S.key===null?h:S.key)||null,v(f,m,S,O);case Pe:var U=S._init;return M(m,f,h,U(S._payload),O)}if(Oe(S)||$(S))return m=m.get(h)||null,k(f,m,S,O,null);ml(f,S)}return null}function L(m,f,h,S){for(var O=null,U=null,b=f,H=f=0,ze=null;b!==null&&H<h.length;H++){b.index>H?(ze=b,b=null):ze=b.sibling;var te=w(m,b,h[H],S);if(te===null){b===null&&(b=ze);break}e&&b&&te.alternate===null&&t(m,b),f=i(te,f,H),U===null?O=te:U.sibling=te,U=te,b=ze}if(H===h.length)return n(m,b),he&&mn(m,H),O;if(b===null){for(;H<h.length;H++)b=N(m,h[H],S),b!==null&&(f=i(b,f,H),U===null?O=b:U.sibling=b,U=b);return he&&mn(m,H),O}for(b=r(m,b);H<h.length;H++)ze=M(b,m,H,h[H],S),ze!==null&&(e&&ze.alternate!==null&&b.delete(ze.key===null?H:ze.key),f=i(ze,f,H),U===null?O=ze:U.sibling=ze,U=ze);return e&&b.forEach(function(un){return t(m,un)}),he&&mn(m,H),O}function I(m,f,h,S){var O=$(h);if(typeof O!="function")throw Error(p(150));if(h=O.call(h),h==null)throw Error(p(151));for(var U=O=null,b=f,H=f=0,ze=null,te=h.next();b!==null&&!te.done;H++,te=h.next()){b.index>H?(ze=b,b=null):ze=b.sibling;var un=w(m,b,te.value,S);if(un===null){b===null&&(b=ze);break}e&&b&&un.alternate===null&&t(m,b),f=i(un,f,H),U===null?O=un:U.sibling=un,U=un,b=ze}if(te.done)return n(m,b),he&&mn(m,H),O;if(b===null){for(;!te.done;H++,te=h.next())te=N(m,te.value,S),te!==null&&(f=i(te,f,H),U===null?O=te:U.sibling=te,U=te);return he&&mn(m,H),O}for(b=r(m,b);!te.done;H++,te=h.next())te=M(b,m,H,te.value,S),te!==null&&(e&&te.alternate!==null&&b.delete(te.key===null?H:te.key),f=i(te,f,H),U===null?O=te:U.sibling=te,U=te);return e&&b.forEach(function(Wd){return t(m,Wd)}),he&&mn(m,H),O}function Ne(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Ie&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case lt:e:{for(var O=h.key,U=f;U!==null;){if(U.key===O){if(O=h.type,O===Ie){if(U.tag===7){n(m,U.sibling),f=l(U,h.props.children),f.return=m,m=f;break e}}else if(U.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pe&&ds(O)===U.type){n(m,U.sibling),f=l(U,h.props),f.ref=kr(m,U,h),f.return=m,m=f;break e}n(m,U);break}else t(m,U);U=U.sibling}h.type===Ie?(f=Nn(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=Al(h.type,h.key,h.props,null,m.mode,S),S.ref=kr(m,f,h),S.return=m,m=S)}return a(m);case Me:e:{for(U=h.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=l(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Lo(h,m.mode,S),f.return=m,m=f}return a(m);case Pe:return U=h._init,Ne(m,f,U(h._payload),S)}if(Oe(h))return L(m,f,h,S);if($(h))return I(m,f,h,S);ml(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=l(f,h),f.return=m,m=f):(n(m,f),f=To(h,m.mode,S),f.return=m,m=f),a(m)):n(m,f)}return Ne}var Un=fs(!0),ps=fs(!1),hl=Xt(null),gl=null,bn=null,$i=null;function Vi(){$i=bn=gl=null}function Wi(e){var t=hl.current;pe(hl),e._currentValue=t}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){gl=e,$i=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(gl===null)throw Error(p(308));bn=e,gl.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var hn=null;function Qi(e){hn===null?hn=[e]:hn.push(e)}function ms(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Qi(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,Qi(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}}function gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var l=e.updateQueue;en=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,v=c.next;c.next=null,a===null?i=v:a.next=v,a=c;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==a&&(u===null?k.firstBaseUpdate=v:u.next=v,k.lastBaseUpdate=c))}if(i!==null){var N=l.baseState;a=0,k=v=c=null,u=i;do{var w=u.lane,M=u.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:M,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=e,I=u;switch(w=t,M=n,I.tag){case 1:if(L=I.payload,typeof L=="function"){N=L.call(M,N,w);break e}N=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=I.payload,w=typeof L=="function"?L.call(M,N,w):L,w==null)break e;N=d({},N,w);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[u]:w.push(u))}else M={eventTime:M,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(v=k=M,c=N):k=k.next=M,a|=w;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;w=u,u=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(k===null&&(c=N),l.baseState=c,l.firstBaseUpdate=v,l.lastBaseUpdate=k,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);yn|=a,e.lanes=a,e.memoizedState=N}}function vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var Nr={},Mt=Xt(Nr),Sr=Xt(Nr),jr=Xt(Nr);function gn(e){if(e===Nr)throw Error(p(174));return e}function Gi(e,t){switch(ue(jr,t),ue(Sr,e),ue(Mt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}pe(Mt),ue(Mt,t)}function $n(){pe(Mt),pe(Sr),pe(jr)}function ys(e){gn(jr.current);var t=gn(Mt.current),n=Xn(t,e.type);t!==n&&(ue(Sr,e),ue(Mt,n))}function Yi(e){Sr.current===e&&(pe(Mt),pe(Sr))}var ge=Xt(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function Xi(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var wl=se.ReactCurrentDispatcher,Zi=se.ReactCurrentBatchConfig,vn=0,ve=null,je=null,Ee=null,kl=!1,Cr=!1,Er=0,fd=0;function Ue(){throw Error(p(321))}function Ji(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function eo(e,t,n,r,l,i){if(vn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wl.current=e===null||e.memoizedState===null?gd:vd,e=n(r,l),Cr){i=0;do{if(Cr=!1,Er=0,25<=i)throw Error(p(301));i+=1,Ee=je=null,t.updateQueue=null,wl.current=yd,e=n(r,l)}while(Cr)}if(wl.current=jl,t=je!==null&&je.next!==null,vn=0,Ee=je=ve=null,kl=!1,t)throw Error(p(300));return e}function to(){var e=Er!==0;return Er=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function mt(){if(je===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ee===null?ve.memoizedState:Ee.next;if(t!==null)Ee=t,je=e;else{if(e===null)throw Error(p(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function _r(e,t){return typeof t=="function"?t(e):t}function no(e){var t=mt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=je,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,c=null,v=i;do{var k=v.lane;if((vn&k)===k)c!==null&&(c=c.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var N={lane:k,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};c===null?(u=c=N,a=r):c=c.next=N,ve.lanes|=k,yn|=k}v=v.next}while(v!==null&&v!==i);c===null?a=r:c.next=u,wt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ve.lanes|=i,yn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ro(e){var t=mt(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);wt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xs(){}function ws(e,t){var n=ve,r=mt(),l=t(),i=!wt(r.memoizedState,l);if(i&&(r.memoizedState=l,Je=!0),r=r.queue,lo(Ss.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,zr(9,Ns.bind(null,n,r,l,t),void 0,null),_e===null)throw Error(p(349));(vn&30)!==0||ks(n,t,l)}return l}function ks(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ns(e,t,n,r){t.value=n,t.getSnapshot=r,js(t)&&Cs(e)}function Ss(e,t,n){return n(function(){js(t)&&Cs(e)})}function js(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Cs(e){var t=At(e,1);t!==null&&Ct(t,e,1,-1)}function Es(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=hd.bind(null,ve,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _s(){return mt().memoizedState}function Nl(e,t,n,r){var l=Pt();ve.flags|=e,l.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var l=mt();r=r===void 0?null:r;var i=void 0;if(je!==null){var a=je.memoizedState;if(i=a.destroy,r!==null&&Ji(r,a.deps)){l.memoizedState=zr(t,n,i,r);return}}ve.flags|=e,l.memoizedState=zr(1|t,n,i,r)}function zs(e,t){return Nl(8390656,8,e,t)}function lo(e,t){return Sl(2048,8,e,t)}function Ms(e,t){return Sl(4,2,e,t)}function Ps(e,t){return Sl(4,4,e,t)}function Rs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fs(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Rs.bind(null,t,e),n)}function io(){}function Ts(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ls(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ds(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(wt(n,t)||(n=da(),ve.lanes|=n,yn|=n,e.baseState=!0),t)}function pd(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{oe=n,Zi.transition=r}}function Is(){return mt().memoizedState}function md(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e))As(t,n);else if(n=ms(e,t,n,r),n!==null){var l=He();Ct(n,e,r,l),Us(n,t,r)}}function hd(e,t,n){var r=on(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))As(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,u=i(a,n);if(l.hasEagerState=!0,l.eagerState=u,wt(u,a)){var c=t.interleaved;c===null?(l.next=l,Qi(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=ms(e,t,l,r),n!==null&&(l=He(),Ct(n,e,r,l),Us(n,t,r))}}function Os(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function As(e,t){Cr=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Us(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}}var jl={readContext:pt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},gd={readContext:pt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nl(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=md.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Es,useDebugValue:io,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Es(!1),t=e[0];return e=pd.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,l=Pt();if(he){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),_e===null)throw Error(p(349));(vn&30)!==0||ks(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,zs(Ss.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,Ns.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Pt(),t=_e.identifierPrefix;if(he){var n=Ot,r=It;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vd={readContext:pt,useCallback:Ts,useContext:pt,useEffect:lo,useImperativeHandle:Fs,useInsertionEffect:Ms,useLayoutEffect:Ps,useMemo:Ls,useReducer:no,useRef:_s,useState:function(){return no(_r)},useDebugValue:io,useDeferredValue:function(e){var t=mt();return Ds(t,je.memoizedState,e)},useTransition:function(){var e=no(_r)[0],t=mt().memoizedState;return[e,t]},useMutableSource:xs,useSyncExternalStore:ws,useId:Is,unstable_isNewReconciler:!1},yd={readContext:pt,useCallback:Ts,useContext:pt,useEffect:lo,useImperativeHandle:Fs,useInsertionEffect:Ms,useLayoutEffect:Ps,useMemo:Ls,useReducer:ro,useRef:_s,useState:function(){return ro(_r)},useDebugValue:io,useDeferredValue:function(e){var t=mt();return je===null?t.memoizedState=e:Ds(t,je.memoizedState,e)},useTransition:function(){var e=ro(_r)[0],t=mt().memoizedState;return[e,t]},useMutableSource:xs,useSyncExternalStore:ws,useId:Is,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=d({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:d({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),l=on(e),i=Ut(r,l);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,l),t!==null&&(Ct(t,e,l,r),vl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),l=on(e),i=Ut(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,l),t!==null&&(Ct(t,e,l,r),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=on(e),l=Ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=tn(e,l,r),t!==null&&(Ct(t,e,r,n),vl(t,e,r))}};function bs(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(l,i):!0}function Bs(e,t,n){var r=!1,l=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=pt(i):(l=Ze(t)?fn:Ae.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,l):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function ao(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ki(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=pt(i):(i=Ze(t)?fn:Ae.current,l.context=Dn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),yl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=z(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function Vs(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,Co=r),uo(e,t)},n}function Ws(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){uo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){uo(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Td.bind(null,e,t,n),t.then(e,e))}function Qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var wd=se.ReactCurrentOwner,Je=!1;function We(e,t,n,r){t.child=e===null?ps(t,null,n,r):Un(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var i=t.ref;return Bn(t,l),r=eo(e,t,n,r,i,l),n=to(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(he&&n&&Oi(t),t.flags|=1,We(e,t,r,l),t.child)}function Ys(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Fo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qs(e,t,i,r,l)):(e=Al(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(a,r)&&e.ref===t.ref)return bt(e,t,l)}return t.flags|=1,e=sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function qs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,bt(e,t,l)}return co(e,t,n,r,l)}function Xs(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Hn,st),st|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Hn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(Hn,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ue(Hn,st),st|=r;return We(e,t,l,n),t.child}function Zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function co(e,t,n,r,l){var i=Ze(n)?fn:Ae.current;return i=Dn(t,i),Bn(t,l),n=eo(e,t,n,r,i,l),r=to(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(he&&r&&Oi(t),t.flags|=1,We(e,t,n,l),t.child)}function Js(e,t,n,r,l){if(Ze(n)){var i=!0;ul(t)}else i=!1;if(Bn(t,l),t.stateNode===null)_l(e,t),Bs(t,n,r),ao(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,v=n.contextType;typeof v=="object"&&v!==null?v=pt(v):(v=Ze(n)?fn:Ae.current,v=Dn(t,v));var k=n.getDerivedStateFromProps,N=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";N||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==v)&&$s(t,a,r,v),en=!1;var w=t.memoizedState;a.state=w,yl(t,r,a,l),c=t.memoizedState,u!==r||w!==c||Xe.current||en?(typeof k=="function"&&(oo(t,n,k,r),c=t.memoizedState),(u=en||bs(t,n,u,r,w,c,v))?(N||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=v,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hs(e,t),u=t.memoizedProps,v=t.type===t.elementType?u:Nt(t.type,u),a.props=v,N=t.pendingProps,w=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=pt(c):(c=Ze(n)?fn:Ae.current,c=Dn(t,c));var M=n.getDerivedStateFromProps;(k=typeof M=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==N||w!==c)&&$s(t,a,r,c),en=!1,w=t.memoizedState,a.state=w,yl(t,r,a,l);var L=t.memoizedState;u!==N||w!==L||Xe.current||en?(typeof M=="function"&&(oo(t,n,M,r),L=t.memoizedState),(v=en||bs(t,n,v,r,w,L,c)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,L,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,L,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),a.props=r,a.state=L,a.context=c,r=v):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return fo(e,t,n,r,i,l)}function fo(e,t,n,r,l,i){Zs(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ls(t,n,!1),bt(e,t,i);r=t.stateNode,wd.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Un(t,e.child,null,i),t.child=Un(t,null,u,i)):We(e,t,u,i),t.memoizedState=r.state,l&&ls(t,n,!0),t.child}function eu(e){var t=e.stateNode;t.pendingContext?ns(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ns(e,t.context,!1),Gi(e,t.containerInfo)}function tu(e,t,n,r,l){return An(),Bi(l),t.flags|=256,We(e,t,n,r),t.child}var po={dehydrated:null,treeContext:null,retryLane:0};function mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function nu(e,t,n){var r=t.pendingProps,l=ge.current,i=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ue(ge,l&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ul(a,r,0,null),e=Nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=mo(n),t.memoizedState=po,e):ho(t,a));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return kd(e,t,a,r,u,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,u=l.sibling;var c={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sn(l,c),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=sn(u,i):(i=Nn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?mo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=po,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ho(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function El(e,t,n,r){return r!==null&&Bi(r),Un(t,e.child,null,n),e=ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=so(Error(p(422))),El(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),i=Nn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Un(t,e.child,null,a),t.child.memoizedState=mo(a),t.memoizedState=po,i);if((t.mode&1)===0)return El(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(p(419)),r=so(i,r,void 0),El(e,t,a,r)}if(u=(a&e.childLanes)!==0,Je||u){if(r=_e,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,At(e,l),Ct(r,e,l,-1))}return Ro(),r=so(Error(p(421))),El(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ld.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,at=qt(l.nextSibling),ot=t,he=!0,kt=null,e!==null&&(dt[ft++]=It,dt[ft++]=Ot,dt[ft++]=pn,It=e.id,Ot=e.overflow,pn=t),t=ho(t,r.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function go(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function lu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(We(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),go(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}go(t,!0,n,null,i);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _l(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t,n){switch(t.tag){case 3:eu(t),An();break;case 5:ys(t);break;case 1:Ze(t.type)&&ul(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ue(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nu(e,t,n):(ue(ge,ge.current&1),e=bt(e,t,n),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return lu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Xs(e,t,n)}return bt(e,t,n)}var iu,vo,ou,au;iu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},vo=function(){},ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,gn(Mt.current);var i=null;switch(n){case"input":l=X(e,l),r=X(e,r),i=[];break;case"select":l=d({},l,{value:void 0}),r=d({},r,{value:void 0}),i=[];break;case"textarea":l=Gn(e,l),r=Gn(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}ql(n,r);var a;n=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var u=l[v];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(T.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var c=r[v];if(u=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&c!==u&&(c!=null||u!=null))if(v==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(v,n)),n=c;else v==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(i=i||[]).push(v,c)):v==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(v,""+c):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(T.hasOwnProperty(v)?(c!=null&&v==="onScroll"&&fe("scroll",e),i||u===c||(i=[])):(i=i||[]).push(v,c))}n&&(i=i||[]).push("style",n);var v=i;(t.updateQueue=v)&&(t.flags|=4)}},au=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sd(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ze(t.type)&&sl(),be(t),null;case 3:return r=t.stateNode,$n(),pe(Xe),pe(Ae),Xi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(zo(kt),kt=null))),vo(e,t),be(t),null;case 5:Yi(t);var l=gn(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return be(t),null}if(e=gn(Mt.current),pl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[xr]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(l=0;l<gr.length;l++)fe(gr[l],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Re(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Ir(r,i),fe("invalid",r)}ql(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&il(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&il(r.textContent,u,e),l=["children",""+u]):T.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ie(r),ct(r,i,!0);break;case"textarea":ie(r),Or(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ol)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[xr]=r,iu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xl(n,r),n){case"dialog":fe("cancel",e),fe("close",e),l=r;break;case"iframe":case"object":case"embed":fe("load",e),l=r;break;case"video":case"audio":for(l=0;l<gr.length;l++)fe(gr[l],e);l=r;break;case"source":fe("error",e),l=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),l=r;break;case"details":fe("toggle",e),l=r;break;case"input":Re(e,r),l=X(e,r),fe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=d({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Ir(e,r),l=Gn(e,r),fe("invalid",e);break;default:l=r}ql(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var c=u[i];i==="style"?qo(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zn(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vt(e,c):typeof c=="number"&&Vt(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(T.hasOwnProperty(i)?c!=null&&i==="onScroll"&&fe("scroll",e):c!=null&&we(e,i,c,a))}switch(n){case"input":ie(e),ct(e,r,!1);break;case"textarea":ie(e),Or(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$t(e,!!r.multiple,i,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=gn(jr.current),gn(Mt.current),pl(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return be(t),null;case 13:if(pe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cs(),An(),t.flags|=98560,i=!1;else if(i=pl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[zt]=t}else An(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else kt!==null&&(zo(kt),kt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ce===0&&(Ce=3):Ro())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return $n(),vo(e,t),e===null&&vr(t.stateNode.containerInfo),be(t),null;case 10:return Wi(t.type._context),be(t),null;case 17:return Ze(t.type)&&sl(),be(t),null;case 19:if(pe(ge),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Mr(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=xl(e),a!==null){for(t.flags|=128,Mr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&ke()>Qn&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=xl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!he)return be(t),null}else 2*ke()-i.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ke(),t.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function jd(e,t){switch(Ai(t),t.tag){case 1:return Ze(t.type)&&sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),pe(Xe),pe(Ae),Xi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Yi(t),null;case 13:if(pe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ge),null;case 4:return $n(),null;case 10:return Wi(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var zl=!1,Be=!1,Cd=typeof WeakSet=="function"?WeakSet:Set,F=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function yo(e,t,n){try{n()}catch(r){xe(e,t,r)}}var su=!1;function Ed(e,t){if(Mi=Gr,e=ba(),ki(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,v=0,k=0,N=e,w=null;t:for(;;){for(var M;N!==n||l!==0&&N.nodeType!==3||(u=a+l),N!==i||r!==0&&N.nodeType!==3||(c=a+r),N.nodeType===3&&(a+=N.nodeValue.length),(M=N.firstChild)!==null;)w=N,N=M;for(;;){if(N===e)break t;if(w===n&&++v===l&&(u=a),w===i&&++k===r&&(c=a),(M=N.nextSibling)!==null)break;N=w,w=N.parentNode}N=M}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},Gr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var I=L.memoizedProps,Ne=L.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:Nt(t.type,I),Ne);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(S){xe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return L=su,su=!1,L}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&yo(t,n,i)}l=l.next}while(l!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[xr],delete t[Li],delete t[sd],delete t[ud])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(wo(e,t,n),e=e.sibling;e!==null;)wo(e,t,n),e=e.sibling}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}var Fe=null,St=!1;function nn(e,t,n){for(n=n.child;n!==null;)fu(e,t,n),n=n.sibling}function fu(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount($r,n)}catch{}switch(n.tag){case 5:Be||Wn(n,t);case 6:var r=Fe,l=St;Fe=null,nn(e,t,n),Fe=r,St=l,Fe!==null&&(St?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(St?(e=Fe,n=n.stateNode,e.nodeType===8?Ti(e.parentNode,n):e.nodeType===1&&Ti(e,n),sr(e)):Ti(Fe,n.stateNode));break;case 4:r=Fe,l=St,Fe=n.stateNode.containerInfo,St=!0,nn(e,t,n),Fe=r,St=l;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&yo(n,t,a),l=l.next}while(l!==r)}nn(e,t,n);break;case 1:if(!Be&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){xe(n,t,u)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,nn(e,t,n),Be=r):nn(e,t,n);break;default:nn(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cd),t.forEach(function(r){var l=Dd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:Fe=u.stateNode,St=!1;break e;case 3:Fe=u.stateNode.containerInfo,St=!0;break e;case 4:Fe=u.stateNode.containerInfo,St=!0;break e}u=u.return}if(Fe===null)throw Error(p(160));fu(i,a,l),Fe=null,St=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(v){xe(l,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Rt(e),r&4){try{Pr(3,e,e.return),Ml(3,e)}catch(I){xe(e,e.return,I)}try{Pr(5,e,e.return)}catch(I){xe(e,e.return,I)}}break;case 1:jt(t,e),Rt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(jt(t,e),Rt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var l=e.stateNode;try{Vt(l,"")}catch(I){xe(e,e.return,I)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&qe(l,i),Xl(u,a);var v=Xl(u,i);for(a=0;a<c.length;a+=2){var k=c[a],N=c[a+1];k==="style"?qo(l,N):k==="dangerouslySetInnerHTML"?Zn(l,N):k==="children"?Vt(l,N):we(l,k,N,v)}switch(u){case"input":Ve(l,i);break;case"textarea":Yn(l,i);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var M=i.value;M!=null?$t(l,!!i.multiple,M,!1):w!==!!i.multiple&&(i.defaultValue!=null?$t(l,!!i.multiple,i.defaultValue,!0):$t(l,!!i.multiple,i.multiple?[]:"",!1))}l[xr]=i}catch(I){xe(e,e.return,I)}}break;case 6:if(jt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(I){xe(e,e.return,I)}}break;case 3:if(jt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(I){xe(e,e.return,I)}break;case 4:jt(t,e),Rt(e);break;case 13:jt(t,e),Rt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(jo=ke())),r&4&&pu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(v=Be)||k,jt(t,e),Be=v):jt(t,e),Rt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!k&&(e.mode&1)!==0)for(F=e,k=e.child;k!==null;){for(N=F=k;F!==null;){switch(w=F,M=w.child,w.tag){case 0:case 11:case 14:case 15:Pr(4,w,w.return);break;case 1:Wn(w,w.return);var L=w.stateNode;if(typeof L.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(I){xe(r,n,I)}}break;case 5:Wn(w,w.return);break;case 22:if(w.memoizedState!==null){vu(N);continue}}M!==null?(M.return=w,F=M):vu(N)}k=k.sibling}e:for(k=null,N=e;;){if(N.tag===5){if(k===null){k=N;try{l=N.stateNode,v?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=N.stateNode,c=N.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Ar("display",a))}catch(I){xe(e,e.return,I)}}}else if(N.tag===6){if(k===null)try{N.stateNode.nodeValue=v?"":N.memoizedProps}catch(I){xe(e,e.return,I)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;k===N&&(k=null),N=N.return}k===N&&(k=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:jt(t,e),Rt(e),r&4&&pu(e);break;case 21:break;default:jt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cu(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vt(l,""),r.flags&=-33);var i=du(e);ko(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=du(e);wo(e,u,a);break;default:throw Error(p(161))}}catch(c){xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _d(e,t,n){F=e,hu(e)}function hu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||zl;if(!a){var u=l.alternate,c=u!==null&&u.memoizedState!==null||Be;u=zl;var v=Be;if(zl=a,(Be=c)&&!v)for(F=l;F!==null;)a=F,c=a.child,a.tag===22&&a.memoizedState!==null?yu(l):c!==null?(c.return=a,F=c):yu(l);for(;i!==null;)F=i,hu(i),i=i.sibling;F=l,zl=u,Be=v}gu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,F=i):gu(e)}}function gu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&vs(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vs(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var k=v.memoizedState;if(k!==null){var N=k.dehydrated;N!==null&&sr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Be||t.flags&512&&xo(t)}catch(w){xe(t,t.return,w)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function vu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function yu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(c){xe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){xe(t,l,c)}}var i=t.return;try{xo(t)}catch(c){xe(t,i,c)}break;case 5:var a=t.return;try{xo(t)}catch(c){xe(t,a,c)}}}catch(c){xe(t,t.return,c)}if(t===e){F=null;break}var u=t.sibling;if(u!==null){u.return=t.return,F=u;break}F=t.return}}var zd=Math.ceil,Pl=se.ReactCurrentDispatcher,No=se.ReactCurrentOwner,ht=se.ReactCurrentBatchConfig,ee=0,_e=null,Se=null,Te=0,st=0,Hn=Xt(0),Ce=0,Rr=null,yn=0,Rl=0,So=0,Fr=null,et=null,jo=0,Qn=1/0,Bt=null,Fl=!1,Co=null,rn=null,Tl=!1,ln=null,Ll=0,Tr=0,Eo=null,Dl=-1,Il=0;function He(){return(ee&6)!==0?ke():Dl!==-1?Dl:Dl=ke()}function on(e){return(e.mode&1)===0?1:(ee&2)!==0&&Te!==0?Te&-Te:dd.transition!==null?(Il===0&&(Il=da()),Il):(e=oe,e!==0||(e=window.event,e=e===void 0?16:wa(e.type)),e)}function Ct(e,t,n,r){if(50<Tr)throw Tr=0,Eo=null,Error(p(185));rr(e,n,r),((ee&2)===0||e!==_e)&&(e===_e&&((ee&2)===0&&(Rl|=n),Ce===4&&an(e,Te)),tt(e,r),n===1&&ee===0&&(t.mode&1)===0&&(Qn=ke()+500,cl&&Jt()))}function tt(e,t){var n=e.callbackNode;dc(e,t);var r=Hr(e,e===_e?Te:0);if(r===0)n!==null&&sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sa(n),t===1)e.tag===0?cd(wu.bind(null,e)):is(wu.bind(null,e)),od(function(){(ee&6)===0&&Jt()}),n=null;else{switch(fa(r)){case 1:n=li;break;case 4:n=ua;break;case 16:n=Br;break;case 536870912:n=ca;break;default:n=Br}n=zu(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(Dl=-1,Il=0,(ee&6)!==0)throw Error(p(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Hr(e,e===_e?Te:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ol(e,r);else{t=r;var l=ee;ee|=2;var i=Nu();(_e!==e||Te!==t)&&(Bt=null,Qn=ke()+500,wn(e,t));do try{Rd();break}catch(u){ku(e,u)}while(!0);Vi(),Pl.current=i,ee=l,Se!==null?t=0:(_e=null,Te=0,t=Ce)}if(t!==0){if(t===2&&(l=ii(e),l!==0&&(r=l,t=_o(e,l))),t===1)throw n=Rr,wn(e,0),an(e,r),tt(e,ke()),n;if(t===6)an(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Md(l)&&(t=Ol(e,r),t===2&&(i=ii(e),i!==0&&(r=i,t=_o(e,i))),t===1))throw n=Rr,wn(e,0),an(e,r),tt(e,ke()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:kn(e,et,Bt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=jo+500-ke(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Fi(kn.bind(null,e,et,Bt),t);break}kn(e,et,Bt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-xt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zd(r/1960))-r,10<r){e.timeoutHandle=Fi(kn.bind(null,e,et,Bt),r);break}kn(e,et,Bt);break;case 5:kn(e,et,Bt);break;default:throw Error(p(329))}}}return tt(e,ke()),e.callbackNode===n?xu.bind(null,e):null}function _o(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Ol(e,t),e!==2&&(t=et,et=n,t!==null&&zo(t)),e}function zo(e){et===null?et=e:et.push.apply(et,e)}function Md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!wt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~So,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if((ee&6)!==0)throw Error(p(327));Kn();var t=Hr(e,0);if((t&1)===0)return tt(e,ke()),null;var n=Ol(e,t);if(e.tag!==0&&n===2){var r=ii(e);r!==0&&(t=r,n=_o(e,r))}if(n===1)throw n=Rr,wn(e,0),an(e,t),tt(e,ke()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,et,Bt),tt(e,ke()),null}function Mo(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Qn=ke()+500,cl&&Jt())}}function xn(e){ln!==null&&ln.tag===0&&(ee&6)===0&&Kn();var t=ee;ee|=1;var n=ht.transition,r=oe;try{if(ht.transition=null,oe=1,e)return e()}finally{oe=r,ht.transition=n,ee=t,(ee&6)===0&&Jt()}}function Po(){st=Hn.current,pe(Hn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,id(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:$n(),pe(Xe),pe(Ae),Xi();break;case 5:Yi(r);break;case 4:$n();break;case 13:pe(ge);break;case 19:pe(ge);break;case 10:Wi(r.type._context);break;case 22:case 23:Po()}n=n.return}if(_e=e,Se=e=sn(e.current,null),Te=st=t,Ce=0,Rr=null,So=Rl=yn=0,et=Fr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}hn=null}return e}function ku(e,t){do{var n=Se;try{if(Vi(),wl.current=jl,kl){for(var r=ve.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}kl=!1}if(vn=0,Ee=je=ve=null,Cr=!1,Er=0,No.current=null,n===null||n.return===null){Ce=1,Rr=t,Se=null;break}e:{var i=e,a=n.return,u=n,c=t;if(t=Te,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=c,k=u,N=k.tag;if((k.mode&1)===0&&(N===0||N===11||N===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var M=Qs(a);if(M!==null){M.flags&=-257,Ks(M,a,u,i,t),M.mode&1&&Hs(i,v,t),t=M,c=v;var L=t.updateQueue;if(L===null){var I=new Set;I.add(c),t.updateQueue=I}else L.add(c);break e}else{if((t&1)===0){Hs(i,v,t),Ro();break e}c=Error(p(426))}}else if(he&&u.mode&1){var Ne=Qs(a);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),Ks(Ne,a,u,i,t),Bi(Vn(c,u));break e}}i=c=Vn(c,u),Ce!==4&&(Ce=2),Fr===null?Fr=[i]:Fr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Vs(i,c,t);gs(i,m);break e;case 1:u=c;var f=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rn===null||!rn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ws(i,u,t);gs(i,S);break e}}i=i.return}while(i!==null)}ju(n)}catch(O){t=O,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function Nu(){var e=Pl.current;return Pl.current=jl,e===null?jl:e}function Ro(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),_e===null||(yn&268435455)===0&&(Rl&268435455)===0||an(_e,Te)}function Ol(e,t){var n=ee;ee|=2;var r=Nu();(_e!==e||Te!==t)&&(Bt=null,wn(e,t));do try{Pd();break}catch(l){ku(e,l)}while(!0);if(Vi(),ee=n,Pl.current=r,Se!==null)throw Error(p(261));return _e=null,Te=0,Ce}function Pd(){for(;Se!==null;)Su(Se)}function Rd(){for(;Se!==null&&!nc();)Su(Se)}function Su(e){var t=_u(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?ju(e):Se=t,No.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Sd(n,t,st),n!==null){Se=n;return}}else{if(n=jd(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ce===0&&(Ce=5)}function kn(e,t,n){var r=oe,l=ht.transition;try{ht.transition=null,oe=1,Fd(e,t,n,r)}finally{ht.transition=l,oe=r}return null}function Fd(e,t,n,r){do Kn();while(ln!==null);if((ee&6)!==0)throw Error(p(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fc(e,i),e===_e&&(Se=_e=null,Te=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Tl||(Tl=!0,zu(Br,function(){return Kn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ht.transition,ht.transition=null;var a=oe;oe=1;var u=ee;ee|=4,No.current=null,Ed(e,n),mu(n,e),Zc(Pi),Gr=!!Mi,Pi=Mi=null,e.current=n,_d(n),rc(),ee=u,oe=a,ht.transition=i}else e.current=n;if(Tl&&(Tl=!1,ln=e,Ll=l),i=e.pendingLanes,i===0&&(rn=null),oc(n.stateNode),tt(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Fl)throw Fl=!1,e=Co,Co=null,e;return(Ll&1)!==0&&e.tag!==0&&Kn(),i=e.pendingLanes,(i&1)!==0?e===Eo?Tr++:(Tr=0,Eo=e):Tr=0,Jt(),null}function Kn(){if(ln!==null){var e=fa(Ll),t=ht.transition,n=oe;try{if(ht.transition=null,oe=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ll=0,(ee&6)!==0)throw Error(p(331));var l=ee;for(ee|=4,F=e.current;F!==null;){var i=F,a=i.child;if((F.flags&16)!==0){var u=i.deletions;if(u!==null){for(var c=0;c<u.length;c++){var v=u[c];for(F=v;F!==null;){var k=F;switch(k.tag){case 0:case 11:case 15:Pr(8,k,i)}var N=k.child;if(N!==null)N.return=k,F=N;else for(;F!==null;){k=F;var w=k.sibling,M=k.return;if(uu(k),k===v){F=null;break}if(w!==null){w.return=M,F=w;break}F=M}}}var L=i.alternate;if(L!==null){var I=L.child;if(I!==null){L.child=null;do{var Ne=I.sibling;I.sibling=null,I=Ne}while(I!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Pr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,F=m;break e}F=i.return}}var f=e.current;for(F=f;F!==null;){a=F;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,F=h;else e:for(a=f;F!==null;){if(u=F,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ml(9,u)}}catch(O){xe(u,u.return,O)}if(u===a){F=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,F=S;break e}F=u.return}}if(ee=l,Jt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot($r,e)}catch{}r=!0}return r}finally{oe=n,ht.transition=t}}return!1}function Cu(e,t,n){t=Vn(n,t),t=Vs(e,t,1),e=tn(e,t,1),t=He(),e!==null&&(rr(e,1,t),tt(e,t))}function xe(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Vn(n,e),e=Ws(t,e,1),t=tn(t,e,1),e=He(),t!==null&&(rr(t,1,e),tt(t,e));break}}t=t.return}}function Td(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Te&n)===n&&(Ce===4||Ce===3&&(Te&130023424)===Te&&500>ke()-jo?wn(e,0):So|=n),tt(e,t)}function Eu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var n=He();e=At(e,t),e!==null&&(rr(e,t,n),tt(e,n))}function Ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eu(e,n)}function Dd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),Eu(e,n)}var _u;_u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,Nd(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,he&&(t.flags&1048576)!==0&&os(t,fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_l(e,t),e=t.pendingProps;var l=Dn(t,Ae.current);Bn(t,n),l=eo(null,t,r,e,l,n);var i=to();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,ul(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ki(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,ao(t,r,e,n),t=fo(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Oi(t),We(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_l(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Od(r),e=Nt(r,e),l){case 0:t=co(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Ys(null,t,r,Nt(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),co(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Js(e,t,r,l,n);case 3:e:{if(eu(t),e===null)throw Error(p(387));r=t.pendingProps,i=t.memoizedState,l=i.element,hs(e,t),yl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Vn(Error(p(423)),t),t=tu(e,t,r,n,l);break e}else if(r!==l){l=Vn(Error(p(424)),t),t=tu(e,t,r,n,l);break e}else for(at=qt(t.stateNode.containerInfo.firstChild),ot=t,he=!0,kt=null,n=ps(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===l){t=bt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return ys(t),e===null&&bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Ri(r,l)?a=null:i!==null&&Ri(r,i)&&(t.flags|=32),Zs(e,t),We(e,t,a,n),t.child;case 6:return e===null&&bi(t),null;case 13:return nu(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Gs(e,t,r,l,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,ue(hl,r._currentValue),r._currentValue=a,i!==null)if(wt(i.value,a)){if(i.children===l.children&&!Xe.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ut(-1,n&-n),c.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var k=v.pending;k===null?c.next=c:(c.next=k.next,k.next=c),v.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Hi(i.return,n,t),u.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(p(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Hi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}We(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Bn(t,n),l=pt(l),r=r(l),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,l=Nt(r,t.pendingProps),l=Nt(r.type,l),Ys(e,t,r,l,n);case 15:return qs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),_l(e,t),t.tag=1,Ze(r)?(e=!0,ul(t)):e=!1,Bn(t,n),Bs(t,r,l),ao(t,r,l,n),fo(null,t,r,!0,e,n);case 19:return lu(e,t,n);case 22:return Xs(e,t,n)}throw Error(p(156,t.tag))};function zu(e,t){return aa(e,t)}function Id(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Id(e,t,n,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Od(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===Ye)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Al(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Fo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ie:return Nn(n.children,l,i,t);case Ke:a=8,l|=8;break;case Et:return e=gt(12,n,t,l|2),e.elementType=Et,e.lanes=i,e;case $e:return e=gt(13,n,t,l),e.elementType=$e,e.lanes=i,e;case Ge:return e=gt(19,n,t,l),e.elementType=Ge,e.lanes=i,e;case me:return Ul(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:a=10;break e;case Ft:a=9;break e;case ut:a=11;break e;case Ye:a=14;break e;case Pe:a=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=gt(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=gt(22,e,r,t),e.elementType=me,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Lo(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ad(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,l,i,a,u,c){return e=new Ad(e,t,n,u,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=gt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ki(i),e}function Ud(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mu(e){if(!e)return Zt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(Ze(n))return rs(e,n,t)}return t}function Pu(e,t,n,r,l,i,a,u,c){return e=Do(n,r,!0,e,l,i,a,u,c),e.context=Mu(null),n=e.current,r=He(),l=on(n),i=Ut(r,l),i.callback=t??null,tn(n,i,l),e.current.lanes=l,rr(e,l,r),tt(e,r),e}function bl(e,t,n,r){var l=t.current,i=He(),a=on(l);return n=Mu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(l,t,a),e!==null&&(Ct(e,l,a,i),vl(e,l,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Io(e,t){Ru(e,t),(e=e.alternate)&&Ru(e,t)}function bd(){return null}var Fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}$l.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));bl(e,t,null,null)},$l.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){bl(null,e,null,null)}),t[Lt]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=ha();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&ya(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function Bd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var v=Bl(a);i.call(v)}}var a=Pu(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=a,e[Lt]=a.current,vr(e.nodeType===8?e.parentNode:e),xn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var v=Bl(c);u.call(v)}}var c=Do(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=c,e[Lt]=c.current,vr(e.nodeType===8?e.parentNode:e),xn(function(){bl(t,c,n,r)}),c}function Wl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var c=Bl(a);u.call(c)}}bl(t,a,e,l)}else a=Bd(n,t,e,l,r);return Bl(a)}pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(ai(t,n|1),tt(t,ke()),(ee&6)===0&&(Qn=ke()+500,Jt()))}break;case 13:xn(function(){var r=At(e,1);if(r!==null){var l=He();Ct(r,e,1,l)}}),Io(e,1)}},si=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=He();Ct(t,e,134217728,n)}Io(e,134217728)}},ma=function(e){if(e.tag===13){var t=on(e),n=At(e,t);if(n!==null){var r=He();Ct(n,e,t,r)}Io(e,t)}},ha=function(){return oe},ga=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},ei=function(e,t,n){switch(t){case"input":if(Ve(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(p(90));de(r),Ve(r,l)}}}break;case"textarea":Yn(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}},ea=Mo,ta=xn;var $d={usingClientEntryPoint:!1,Events:[wr,Tn,al,Zo,Jo,Mo]},Lr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vd={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||bd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{$r=Hl.inject(Vd),_t=Hl}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d,nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(t))throw Error(p(200));return Ud(e,t,null,n)},nt.createRoot=function(e,t){if(!Ao(e))throw Error(p(299));var n=!1,r="",l=Fu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,vr(e.nodeType===8?e.parentNode:e),new Oo(t)},nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=ia(t),e=e===null?null:e.stateNode,e},nt.flushSync=function(e){return xn(e)},nt.hydrate=function(e,t,n){if(!Vl(t))throw Error(p(200));return Wl(null,e,t,!0,n)},nt.hydrateRoot=function(e,t,n){if(!Ao(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Fu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pu(t,null,e,1,n??null,l,!1,i,a),e[Lt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)},nt.render=function(e,t,n){if(!Vl(t))throw Error(p(200));return Wl(null,e,t,!1,n)},nt.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(p(40));return e._reactRootContainer?(xn(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},nt.unstable_batchedUpdates=Mo,nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Wl(e,t,n,!1,r)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var Bu;function Zd(){if(Bu)return Bo.exports;Bu=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(x){console.error(x)}}return y(),Bo.exports=Xd(),Bo.exports}var $u;function Jd(){if($u)return Ql;$u=1;var y=Zd();return Ql.createRoot=y.createRoot,Ql.hydrateRoot=y.hydrateRoot,Ql}var ef=Jd();const tf=Qu(ef);var Qo={};(function y(x,p,Y,T){var D=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),G=typeof Path2D=="function"&&typeof DOMMatrix=="function",Q=(function(){if(!x.OffscreenCanvas)return!1;try{var d=new OffscreenCanvas(1,1),s=d.getContext("2d");s.fillRect(0,0,1,1);var g=d.transferToImageBitmap();s.createPattern(g,"no-repeat")}catch{return!1}return!0})();function B(){}function re(d){var s=p.exports.Promise,g=s!==void 0?s:x.Promise;return typeof g=="function"?new g(d):(d(B,B),null)}var ne=(function(d,s){return{transform:function(g){if(d)return g;if(s.has(g))return s.get(g);var j=new OffscreenCanvas(g.width,g.height),C=j.getContext("2d");return C.drawImage(g,0,0),s.set(g,j),j},clear:function(){s.clear()}}})(Q,new Map),J=(function(){var d=Math.floor(16.666666666666668),s,g,j={},C=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(z){var P=Math.random();return j[P]=requestAnimationFrame(function _(R){C===R||C+d-1<R?(C=R,delete j[P],z()):j[P]=requestAnimationFrame(_)}),P},g=function(z){j[z]&&cancelAnimationFrame(j[z])}):(s=function(z){return setTimeout(z,d)},g=function(z){return clearTimeout(z)}),{frame:s,cancel:g}})(),le=(function(){var d,s,g={};function j(C){function z(P,_){C.postMessage({options:P||{},callback:_})}C.init=function(_){var R=_.transferControlToOffscreen();C.postMessage({canvas:R},[R])},C.fire=function(_,R,V){if(s)return z(_,null),s;var Z=Math.random().toString(36).slice(2);return s=re(function(ie){function de(ye){ye.data.callback===Z&&(delete g[Z],C.removeEventListener("message",de),s=null,ne.clear(),V(),ie())}C.addEventListener("message",de),z(_,Z),g[Z]=de.bind(null,{data:{callback:Z}})}),s},C.reset=function(){C.postMessage({reset:!0});for(var _ in g)g[_](),delete g[_]}}return function(){if(d)return d;if(!Y&&D){var C=["var CONFETTI, SIZE = {}, module = {};","("+y.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([C])))}catch(z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",z),null}j(d)}return d}})(),Le={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function De(d,s){return s?s(d):d}function W(d){return d!=null}function A(d,s,g){return De(d&&W(d[s])?d[s]:Le[s],g)}function rt(d){return d<0?0:Math.floor(d)}function Qe(d,s){return Math.floor(Math.random()*(s-d))+d}function we(d){return parseInt(d,16)}function se(d){return d.map(lt)}function lt(d){var s=String(d).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:we(s.substring(0,2)),g:we(s.substring(2,4)),b:we(s.substring(4,6))}}function Me(d){var s=A(d,"origin",Object);return s.x=A(s,"x",Number),s.y=A(s,"y",Number),s}function Ie(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function Ke(d){var s=d.getBoundingClientRect();d.width=s.width,d.height=s.height}function Et(d){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=d,s}function vt(d,s,g,j,C,z,P,_,R){d.save(),d.translate(s,g),d.rotate(z),d.scale(j,C),d.arc(0,0,1,P,_,R),d.restore()}function Ft(d){var s=d.angle*(Math.PI/180),g=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-s+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar,flat:d.flat}}function ut(d,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var g=s.tick++/s.totalTicks,j=s.x+s.random*s.tiltCos,C=s.y+s.random*s.tiltSin,z=s.wobbleX+s.random*s.tiltCos,P=s.wobbleY+s.random*s.tiltSin;if(d.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-g)+")",d.beginPath(),G&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))d.fill(me(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(z-j)*.1,Math.abs(P-C)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var _=Math.PI/10*s.wobble,R=Math.abs(z-j)*.1,V=Math.abs(P-C)*.1,Z=s.shape.bitmap.width*s.scalar,ie=s.shape.bitmap.height*s.scalar,de=new DOMMatrix([Math.cos(_)*R,Math.sin(_)*R,-Math.sin(_)*V,Math.cos(_)*V,s.x,s.y]);de.multiplySelf(new DOMMatrix(s.shape.matrix));var ye=d.createPattern(ne.transform(s.shape.bitmap),"no-repeat");ye.setTransform(de),d.globalAlpha=1-g,d.fillStyle=ye,d.fillRect(s.x-Z/2,s.y-ie/2,Z,ie),d.globalAlpha=1}else if(s.shape==="circle")d.ellipse?d.ellipse(s.x,s.y,Math.abs(z-j)*s.ovalScalar,Math.abs(P-C)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):vt(d,s.x,s.y,Math.abs(z-j)*s.ovalScalar,Math.abs(P-C)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var X=Math.PI/2*3,Re=4*s.scalar,qe=8*s.scalar,Ve=s.x,ct=s.y,yt=5,Oe=Math.PI/yt;yt--;)Ve=s.x+Math.cos(X)*qe,ct=s.y+Math.sin(X)*qe,d.lineTo(Ve,ct),X+=Oe,Ve=s.x+Math.cos(X)*Re,ct=s.y+Math.sin(X)*Re,d.lineTo(Ve,ct),X+=Oe;else d.moveTo(Math.floor(s.x),Math.floor(s.y)),d.lineTo(Math.floor(s.wobbleX),Math.floor(C)),d.lineTo(Math.floor(z),Math.floor(P)),d.lineTo(Math.floor(j),Math.floor(s.wobbleY));return d.closePath(),d.fill(),s.tick<s.totalTicks}function $e(d,s,g,j,C){var z=s.slice(),P=d.getContext("2d"),_,R,V=re(function(Z){function ie(){_=R=null,P.clearRect(0,0,j.width,j.height),ne.clear(),C(),Z()}function de(){Y&&!(j.width===T.width&&j.height===T.height)&&(j.width=d.width=T.width,j.height=d.height=T.height),!j.width&&!j.height&&(g(d),j.width=d.width,j.height=d.height),P.clearRect(0,0,j.width,j.height),z=z.filter(function(ye){return ut(P,ye)}),z.length?_=J.frame(de):ie()}_=J.frame(de),R=ie});return{addFettis:function(Z){return z=z.concat(Z),V},canvas:d,promise:V,reset:function(){_&&J.cancel(_),R&&R()}}}function Ge(d,s){var g=!d,j=!!A(s||{},"resize"),C=!1,z=A(s,"disableForReducedMotion",Boolean),P=D&&!!A(s||{},"useWorker"),_=P?le():null,R=g?Ie:Ke,V=d&&_?!!d.__confetti_initialized:!1,Z=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ie;function de(X,Re,qe){for(var Ve=A(X,"particleCount",rt),ct=A(X,"angle",Number),yt=A(X,"spread",Number),Oe=A(X,"startVelocity",Number),$t=A(X,"decay",Number),Gn=A(X,"gravity",Number),Ir=A(X,"drift",Number),Yn=A(X,"colors",se),Or=A(X,"ticks",Number),qn=A(X,"shapes"),Xn=A(X,"scalar"),Sn=!!A(X,"flat"),Zn=Me(X),Vt=Ve,Tt=[],Yl=d.width*Zn.x,Ar=d.height*Zn.y;Vt--;)Tt.push(Ft({x:Yl,y:Ar,angle:ct,spread:yt,startVelocity:Oe,color:Yn[Vt%Yn.length],shape:qn[Qe(0,qn.length)],ticks:Or,decay:$t,gravity:Gn,drift:Ir,scalar:Xn,flat:Sn}));return ie?ie.addFettis(Tt):(ie=$e(d,Tt,R,Re,qe),ie.promise)}function ye(X){var Re=z||A(X,"disableForReducedMotion",Boolean),qe=A(X,"zIndex",Number);if(Re&&Z)return re(function(Oe){Oe()});g&&ie?d=ie.canvas:g&&!d&&(d=Et(qe),document.body.appendChild(d)),j&&!V&&R(d);var Ve={width:d.width,height:d.height};_&&!V&&_.init(d),V=!0,_&&(d.__confetti_initialized=!0);function ct(){if(_){var Oe={getBoundingClientRect:function(){if(!g)return d.getBoundingClientRect()}};R(Oe),_.postMessage({resize:{width:Oe.width,height:Oe.height}});return}Ve.width=Ve.height=null}function yt(){ie=null,j&&(C=!1,x.removeEventListener("resize",ct)),g&&d&&(document.body.contains(d)&&document.body.removeChild(d),d=null,V=!1)}return j&&!C&&(C=!0,x.addEventListener("resize",ct,!1)),_?_.fire(X,Ve,yt):de(X,Ve,yt)}return ye.reset=function(){_&&_.reset(),ie&&ie.reset()},ye}var Ye;function Pe(){return Ye||(Ye=Ge(null,{useWorker:!0,resize:!0})),Ye}function me(d,s,g,j,C,z,P){var _=new Path2D(d),R=new Path2D;R.addPath(_,new DOMMatrix(s));var V=new Path2D;return V.addPath(R,new DOMMatrix([Math.cos(P)*C,Math.sin(P)*C,-Math.sin(P)*z,Math.cos(P)*z,g,j])),V}function E(d){if(!G)throw new Error("path confetti are not supported in this browser");var s,g;typeof d=="string"?s=d:(s=d.path,g=d.matrix);var j=new Path2D(s),C=document.createElement("canvas"),z=C.getContext("2d");if(!g){for(var P=1e3,_=P,R=P,V=0,Z=0,ie,de,ye=0;ye<P;ye+=2)for(var X=0;X<P;X+=2)z.isPointInPath(j,ye,X,"nonzero")&&(_=Math.min(_,ye),R=Math.min(R,X),V=Math.max(V,ye),Z=Math.max(Z,X));ie=V-_,de=Z-R;var Re=10,qe=Math.min(Re/ie,Re/de);g=[qe,0,0,qe,-Math.round(ie/2+_)*qe,-Math.round(de/2+R)*qe]}return{type:"path",path:s,matrix:g}}function $(d){var s,g=1,j="#000000",C='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof d=="string"?s=d:(s=d.text,g="scalar"in d?d.scalar:g,C="fontFamily"in d?d.fontFamily:C,j="color"in d?d.color:j);var z=10*g,P=""+z+"px "+C,_=new OffscreenCanvas(z,z),R=_.getContext("2d");R.font=P;var V=R.measureText(s),Z=Math.ceil(V.actualBoundingBoxRight+V.actualBoundingBoxLeft),ie=Math.ceil(V.actualBoundingBoxAscent+V.actualBoundingBoxDescent),de=2,ye=V.actualBoundingBoxLeft+de,X=V.actualBoundingBoxAscent+de;Z+=de+de,ie+=de+de,_=new OffscreenCanvas(Z,ie),R=_.getContext("2d"),R.font=P,R.fillStyle=j,R.fillText(s,ye,X);var Re=1/g;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[Re,0,0,Re,-Z*Re/2,-ie*Re/2]}}p.exports=function(){return Pe().apply(this,arguments)},p.exports.reset=function(){Pe().reset()},p.exports.create=Ge,p.exports.shapeFromPath=E,p.exports.shapeFromText=$})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Qo,!1);const Ko=Qo.exports;Qo.exports.create;const K={couple:{bride:"Mir Maleeha Yousuf",groom:"Muhammad Rasekh Banday",hosts:"Mr. & Mrs. Mir Mohammad Yousuf",monogram:"R & M",hashtag:"#RasekhWedsMaleeha",weddingDate:"2026-10-04T12:00:00",formattedDate:"Sunday, 04 October 2026",formattedTime:"12:00 Noon",bismillah:"In the name of Allah, the Most Gracious, the Most Merciful.",invitationMessage:"Mr. & Mrs. Mir Mohammad Yousuf request the pleasure of your gracious presence at the wedding of their Daughter",artwork:"/images/kashmir_mountains.jpg"},music:{url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-113824.mp3"},venues:{ceremony:{title:"Hotel Northern Residency",time:"12:00 Noon",address:"Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",googleMapsUrl:"https://maps.google.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",appleMapsUrl:"https://maps.apple.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",image:"/images/kashmir_mountains.jpg",note:"Buffet to be served from 12:00 PM to 3:00 PM."},reception:{title:"Sanat Nagar Banquet",time:"12:00 Noon",address:"Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",googleMapsUrl:"https://maps.google.com/?q=Sanat+Nagar+Srinagar",appleMapsUrl:"https://maps.apple.com/?q=Sanat+Nagar+Srinagar",image:"/images/kashmir_mountains.jpg",note:"Gracious presence requested."}},itinerary:[{time:"12:00 Noon",title:"Gracious Arrival & Welcome",description:"Arrival of guests at Hotel Northern Residency, Sanat Nagar Chowk.",icon:"Church"},{time:"12:30 PM",title:"Traditional Kashmiri Feast / Lunch",description:"Buffet to be served from 12:00 PM to 3:00 PM.",icon:"Utensils"},{time:"1:30 PM",title:"Nikkah Blessing & Celebrations",description:"Celebrating the union of Rasekh & Maleeha.",icon:"Sparkles"}],ourStory:[{year:"2024",title:"First Met",description:"A blessed journey that brought two families together in Srinagar.",image:"/images/kashmir_mountains.jpg"},{year:"2026",title:"The Nikkah",description:"Beginning our story in the heart of Kashmir surrounded by loved ones.",image:"/images/kashmir_mountains.jpg"}],gallery:[{id:1,src:"/images/kashmir_mountains.jpg",caption:"Kashmir Mountains"},{id:2,src:"/images/kashmir_mountains.jpg",caption:"Pine Forest Serenity"}],dressCode:{style:"Traditional & Formal Elegance",description:"Guests are warmly invited to wear traditional festive Kashmiri attire or formal evening wear.",palette:[{name:"Forest Emerald Green",hex:"#1B4332"},{name:"Sapphire Blue",hex:"#1D3557"},{name:"Ivory Cream",hex:"#F3ECE1"},{name:"Royal Gold Accent",hex:"#D4AF37"}]},giftRegistry:{message:"Your presence and prayers for Rasekh & Maleeha are the most treasured blessings.",iban:"Contact Family for Details",bankName:"Jammu & Kashmir Bank",swift:"JAKA0SANAT"},rsvp:{whatsappNumber:"919149602047",deadline:"September 25, 2026"}};/**
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
 */const lf=ae.forwardRef(({color:y="currentColor",size:x=24,strokeWidth:p=2,absoluteStrokeWidth:Y,className:T="",children:D,iconNode:G,...Q},B)=>ae.createElement("svg",{ref:B,...rf,width:x,height:x,stroke:y,strokeWidth:Y?Number(p)*24/Number(x):p,className:Ku("lucide",T),...Q},[...G.map(([re,ne])=>ae.createElement(re,ne)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(y,x)=>{const p=ae.forwardRef(({className:Y,...T},D)=>ae.createElement(lf,{ref:D,iconNode:x,className:Ku(`lucide-${nf(y)}`,Y),...T}));return p.displayName=`${y}`,p};/**
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
 */const df=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ff=ce("ChevronLeft",df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mf=ce("ChevronRight",pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],gf=ce("Church",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],yf=ce("CircleX",vf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Vu=ce("Clock",xf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],kf=ce("Copy",wf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Sf=ce("Download",Nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wu=ce("ExternalLink",jf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Ef=ce("Gift",Cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Kl=ce("Heart",_f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Gu=ce("Lock",zf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Wo=ce("MapPin",Mf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Yu=ce("Music",Pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Hu=ce("Navigation",Rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Tf=ce("Palette",Ff);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Df=ce("Phone",Lf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Of=ce("Send",If);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],Uf=ce("Shirt",Af);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Gl=ce("Sparkles",bf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],$f=ce("Users",Bf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Wf=ce("UtensilsCrossed",Vf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],Qf=ce("Wine",Hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yo=ce("X",Kf),Gf=({onOpen:y})=>{const[x,p]=ae.useState("idle"),Y=T=>{T.stopPropagation(),x==="idle"&&(p("cracking"),setTimeout(()=>{p("flap-3d-open")},750),setTimeout(()=>{p("paper-slide-out"),Ko({particleCount:85,spread:95,origin:{y:.5},colors:["#D4AF37","#1B4332","#1D3557","#FCF6BA","#FFF8DC"],disableForReducedMotion:!0})},3e3),setTimeout(()=>{p("fullscreen-reveal")},5200),setTimeout(()=>{y()},6600))};return o.jsxs("div",{className:"envelope-3d-viewport",children:[o.jsx("div",{className:`envelope-stage-box ${x}`,children:o.jsxs("div",{className:"envelope-physical-body",onClick:Y,children:[o.jsxs("div",{className:"envelope-pocket-bg",children:[o.jsx("div",{className:"pocket-silk-texture"}),o.jsx("div",{className:"pocket-monogram-gold font-serif",children:K.couple.monogram})]}),o.jsxs("div",{className:`kashmir-invitation-card ${x}`,children:[o.jsxs("div",{className:"card-artwork-header",children:[o.jsx("img",{src:K.couple.artwork,alt:"Kashmir Mountains Watercolor",className:"artwork-img"}),o.jsx("div",{className:"artwork-overlay"})]}),o.jsxs("div",{className:"card-body-content",children:[o.jsx("div",{className:"bismillah-text font-serif",children:K.couple.bismillah}),o.jsx("div",{className:"hosts-name font-serif text-emerald",children:K.couple.hosts}),o.jsx("div",{className:"invitation-request font-serif",children:K.couple.invitationMessage}),o.jsx("div",{className:"daughter-title font-script",children:"Daughter"}),o.jsx("div",{className:"on-word font-serif",children:"on"}),o.jsx("div",{className:"event-day font-serif text-emerald",children:K.couple.formattedDate}),o.jsx("div",{className:"event-time font-serif text-blue",children:K.couple.formattedTime}),o.jsxs("div",{className:"venue-name font-serif text-emerald",children:[K.venues.ceremony.title,", ",K.venues.ceremony.address]}),o.jsxs("div",{className:"notes-box",children:[o.jsx("p",{className:"note-text text-emerald font-serif",children:"(For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)"}),o.jsxs("p",{className:"rsvp-text text-blue",children:["RSVP: ",K.rsvp.whatsappNumber.slice(2)]})]})]})]}),o.jsx("div",{className:"envelope-flap-left"}),o.jsx("div",{className:"envelope-flap-right"}),o.jsx("div",{className:"envelope-flap-bottom"}),o.jsx("div",{className:`envelope-top-flap-3d ${x}`,children:o.jsxs("div",{className:"top-flap-outer-shape",children:[o.jsx("div",{className:"top-flap-gold-line"}),o.jsx("div",{className:`top-flap-wax-seal ${x}`,children:o.jsxs("div",{className:"seal-clip-circle",children:[o.jsx("img",{src:"/images/real_wax_seal_rm.jpg",alt:"R & M Wax Seal",className:"seal-img-clean"}),o.jsx("div",{className:"seal-split-half seal-left-half"}),o.jsx("div",{className:"seal-split-half seal-right-half"})]})})]})}),x==="idle"&&o.jsxs("div",{className:"seal-tap-hint",children:[o.jsx(Gl,{size:13,className:"sparkle-gold"}),o.jsx("span",{children:"Tap Seal to Open Invitation"})]})]})}),o.jsx("style",{children:`
        .envelope-3d-viewport {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          perspective: 2000px;
          overflow: hidden;
        }

        .envelope-stage-box {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 390px;
          transform-style: preserve-3d;
          transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .envelope-physical-body {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FAF6F0;
          border-radius: 16px;
          box-shadow: 0 35px 90px rgba(26, 22, 20, 0.35), 0 12px 35px rgba(212, 175, 55, 0.2);
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .envelope-physical-body:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 45px 110px rgba(212, 175, 55, 0.4);
        }

        /* Inner Pocket */
        .envelope-pocket-bg {
          position: absolute;
          inset: 0;
          background: #EDE3D5;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pocket-silk-texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.2) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
        }

        .pocket-monogram-gold {
          font-size: 4.5rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.25);
          letter-spacing: 6px;
        }

        /* Kashmir Watercolor Card inside Pocket */
        .kashmir-invitation-card {
          position: absolute;
          top: 15px;
          left: 4%;
          width: 92%;
          height: 360px;
          background: #FFFFFF;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          border: 1px solid rgba(212, 175, 55, 0.4);
          overflow-y: auto;
          z-index: 3;
          transition: transform 2.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 2.8s ease, width 2.5s ease, height 2.5s ease;
          transform: translateY(0);
        }

        .card-artwork-header {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }

        .artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .artwork-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, #FFFFFF 100%);
        }

        .card-body-content {
          padding: 1.2rem 1.5rem 2rem 1.5rem;
          text-align: center;
        }

        .bismillah-text {
          font-size: 0.85rem;
          color: #1D3557;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .hosts-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .invitation-request {
          font-size: 0.95rem;
          color: #1D3557;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .daughter-title {
          font-size: 2.4rem;
          color: #1D3557;
          margin: 0.4rem 0 0.1rem 0;
        }

        .on-word {
          font-size: 0.85rem;
          color: #6B5E55;
          margin-bottom: 0.3rem;
        }

        .event-day {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .event-time {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0.2rem 0 0.8rem 0;
        }

        .venue-name {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .notes-box {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.3);
        }

        .note-text {
          font-size: 0.85rem;
          font-style: italic;
          margin-bottom: 0.4rem;
        }

        .rsvp-text {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .text-emerald { color: #1B4332 !important; }
        .text-blue { color: #1D3557 !important; }

        /* Card Motion Physics: Slides Out and Expands smoothly */
        .kashmir-invitation-card.paper-slide-out {
          transform: translateY(-290px) scale(1.04);
          box-shadow: 0 35px 95px rgba(212, 175, 55, 0.45);
          z-index: 15;
        }

        .kashmir-invitation-card.fullscreen-reveal {
          transform: translateY(-330px) scale(1.08);
          box-shadow: 0 45px 120px rgba(212, 175, 55, 0.6);
          z-index: 25;
        }

        /* Front Envelope Flaps */
        .envelope-flap-left {
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
          filter: drop-shadow(4px 0 10px rgba(0,0,0,0.08));
        }

        .envelope-flap-right {
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
          filter: drop-shadow(-4px 0 10px rgba(0,0,0,0.08));
        }

        .envelope-flap-bottom {
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
          filter: drop-shadow(0 -5px 12px rgba(0,0,0,0.1));
        }

        /* Top 3D V-Shaped Flap */
        .envelope-top-flap-3d {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 210px;
          transform-origin: top center;
          transform-style: preserve-3d;
          transition: transform 2.8s cubic-bezier(0.33, 1, 0.68, 1);
          z-index: 6;
        }

        .top-flap-outer-shape {
          position: relative;
          width: 0;
          height: 0;
          border-left: 290px solid transparent;
          border-right: 290px solid transparent;
          border-top: 210px solid #FAF6F0;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.16));
        }

        .top-flap-gold-line {
          position: absolute;
          top: -205px;
          left: -280px;
          width: 560px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        /* 3D Flap Rotates Upward 180deg carrying the Seal WITH IT! */
        .envelope-top-flap-3d.flap-3d-open,
        .envelope-top-flap-3d.paper-slide-out,
        .envelope-top-flap-3d.fullscreen-reveal {
          transform: rotateX(180deg);
          z-index: 2;
        }

        /* Wax Seal ATTACHED to Top Flap Tip (No background box!) */
        .top-flap-wax-seal {
          position: absolute;
          top: -25px; /* Positioned exactly at V-apex tip of top flap */
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 100px;
          pointer-events: auto;
          z-index: 20;
          transition: transform 1.5s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .seal-clip-circle {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          clip-path: circle(49% at 50% 50%);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        .seal-img-clean {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Seal crack split animation */
        .seal-split-half {
          position: absolute;
          inset: 0;
          background: transparent;
          transition: transform 1.5s ease, opacity 1.5s ease;
        }

        .top-flap-wax-seal.cracking .seal-clip-circle {
          animation: sealCrackShake 0.6s ease;
        }

        @keyframes sealCrackShake {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.08) rotate(-4deg); }
          75% { transform: scale(1.08) rotate(4deg); }
        }

        .seal-tap-hint {
          position: absolute;
          bottom: -54px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(26, 22, 20, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.7);
          color: #FCF6BA;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          animation: floatHintAnim 2s ease-in-out infinite;
          z-index: 30;
        }

        @keyframes floatHintAnim {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -6px); }
        }

        @media (max-width: 640px) {
          .envelope-stage-box {
            max-width: 350px;
            height: 260px;
          }
          .envelope-flap-left {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-left-width: 180px;
          }
          .envelope-flap-right {
            border-top-width: 130px;
            border-bottom-width: 130px;
            border-right-width: 180px;
          }
          .envelope-flap-bottom {
            border-left-width: 175px;
            border-right-width: 175px;
            border-bottom-width: 140px;
          }
          .envelope-top-flap-3d { height: 140px; }
          .top-flap-outer-shape {
            border-left-width: 175px;
            border-right-width: 175px;
            border-top-width: 140px;
          }
          .top-flap-wax-seal {
            top: -20px;
            width: 80px;
            height: 80px;
          }
          .seal-clip-circle {
            width: 80px;
            height: 80px;
          }
          .kashmir-invitation-card { height: 240px; }
          .hosts-name { font-size: 1.2rem; }
          .event-day { font-size: 1.2rem; }
        }
      `})]})},Yf=({targetDate:y})=>{const x=()=>{const T=+new Date(y)-+new Date;let D={days:0,hours:0,minutes:0,seconds:0};return T>0&&(D={days:Math.floor(T/864e5),hours:Math.floor(T/36e5%24),minutes:Math.floor(T/1e3/60%60),seconds:Math.floor(T/1e3%60)}),D},[p,Y]=ae.useState(x());return ae.useEffect(()=>{const T=setInterval(()=>{Y(x())},1e3);return()=>clearInterval(T)},[y]),o.jsxs("div",{className:"countdown-container",children:[o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.days).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Days"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.hours).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Hours"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.minutes).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Mins"})]}),o.jsx("div",{className:"countdown-colon",children:":"}),o.jsxs("div",{className:"countdown-unit",children:[o.jsx("div",{className:"countdown-card",children:o.jsx("span",{className:"countdown-number",children:String(p.seconds).padStart(2,"0")})}),o.jsx("span",{className:"countdown-label",children:"Secs"})]}),o.jsx("style",{children:`
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
      `})]})},qf=({onOpenRSVP:y})=>{const x=()=>{const p=encodeURIComponent(`${K.couple.groom} & ${K.couple.bride}'s Wedding`),Y=encodeURIComponent(`${K.couple.bismillah}

${K.couple.invitationMessage}`),T=encodeURIComponent(`${K.venues.ceremony.title}, ${K.venues.ceremony.address}`),Q=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${p}&dates=20261004T120000Z/20261004T150000Z&details=${Y}&location=${T}`;window.open(Q,"_blank")};return o.jsxs("section",{className:"hero-section",children:[o.jsxs("div",{className:"hero-card kashmir-paper-card",children:[o.jsxs("div",{className:"hero-artwork-banner",children:[o.jsx("img",{src:K.couple.artwork,alt:"Kashmir Mountains Watercolor",className:"hero-artwork-img"}),o.jsx("div",{className:"hero-artwork-fade"})]}),o.jsxs("div",{className:"hero-inner-body",children:[o.jsx("p",{className:"bismillah-header font-serif",children:K.couple.bismillah}),o.jsx("h2",{className:"font-serif hosts-title text-emerald",children:K.couple.hosts}),o.jsx("p",{className:"invitation-line font-serif",children:K.couple.invitationMessage}),o.jsx("div",{className:"daughter-word font-script",children:"Daughter"}),o.jsx("div",{className:"on-text font-serif",children:"on"}),o.jsxs("div",{className:"couple-headline",children:[o.jsx("h1",{className:"font-serif bride-title",children:K.couple.bride}),o.jsx("div",{className:"and-symbol font-script",children:"&"}),o.jsx("h1",{className:"font-serif groom-title",children:K.couple.groom})]}),o.jsxs("div",{className:"hero-event-details",children:[o.jsx("div",{className:"event-date-large font-serif text-emerald",children:K.couple.formattedDate}),o.jsx("div",{className:"event-time-large font-serif text-blue",children:K.couple.formattedTime}),o.jsxs("div",{className:"venue-address-box",children:[o.jsx(Wo,{size:16,className:"text-gold"}),o.jsxs("span",{className:"font-serif venue-text text-emerald",children:[K.venues.ceremony.title,", ",K.venues.ceremony.address]})]})]}),o.jsxs("div",{className:"buffet-note-banner",children:[o.jsx("p",{className:"font-serif text-emerald note-italic",children:"(For Gents only: Buffet to be served from 12:00 PM to 3:00 PM)"}),o.jsxs("p",{className:"rsvp-phone-number text-blue",children:[o.jsx(Df,{size:14,className:"inline-icon"}),"RSVP: ",K.rsvp.whatsappNumber.slice(2)]})]}),o.jsx(Yf,{targetDate:K.couple.weddingDate}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("button",{className:"btn-gold",onClick:y,children:[o.jsx(Kl,{size:16}),o.jsx("span",{children:"Confirm RSVP"})]}),o.jsxs("button",{className:"btn-outline-gold",onClick:x,children:[o.jsx(af,{size:16}),o.jsx("span",{children:"Save To Calendar"})]})]}),o.jsx("p",{className:"hero-hashtag",children:K.couple.hashtag})]})]}),o.jsx("style",{children:`
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
          margin: 0.8rem 0 0.2rem 0;
        }

        .on-text {
          font-size: 0.95rem;
          color: #6B5E55;
          margin-bottom: 0.8rem;
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
      `})]})},Xf=()=>o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Our Journey"}),o.jsx("h2",{className:"font-serif section-title",children:"How It All Began"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"story-cards",children:K.ourStory.map((y,x)=>o.jsxs("div",{className:"story-card glass-card",children:[o.jsxs("div",{className:"story-year-badge",children:[o.jsx(Kl,{size:12,className:"text-gold"}),o.jsx("span",{children:y.year})]}),o.jsxs("div",{className:"story-content",children:[o.jsx("h3",{className:"font-serif story-title",children:y.title}),o.jsx("p",{className:"story-desc",children:y.description})]})]},x))}),o.jsx("style",{children:`
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
      `})]}),Zf=()=>{const y=x=>{switch(x){case"Church":return o.jsx(gf,{size:22});case"Wine":return o.jsx(Qf,{size:22});case"Utensils":return o.jsx(Wf,{size:22});case"Sparkles":return o.jsx(Gl,{size:22});case"Music":return o.jsx(Yu,{size:22});default:return o.jsx(Gl,{size:22})}};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Order of Events"}),o.jsx("h2",{className:"font-serif section-title",children:"Wedding Itinerary"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"itinerary-timeline",children:K.itinerary.map((x,p)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-badge",children:y(x.icon)}),o.jsxs("div",{className:"timeline-card glass-card",children:[o.jsx("span",{className:"timeline-time",children:x.time}),o.jsx("h3",{className:"font-serif timeline-title",children:x.title}),o.jsx("p",{className:"timeline-desc",children:x.description})]})]},p))}),o.jsx("style",{children:`
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
      `})]})},Jf=()=>{const{ceremony:y,reception:x}=K.venues;return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Locations"}),o.jsx("h2",{className:"font-serif section-title",children:"Where & When"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"venues-grid",children:[o.jsxs("div",{className:"venue-card glass-card",children:[o.jsxs("div",{className:"venue-image-wrapper",children:[o.jsx("img",{src:y.image,alt:y.title,className:"venue-img"}),o.jsx("div",{className:"venue-badge",children:"Ceremony"})]}),o.jsxs("div",{className:"venue-body",children:[o.jsx("h3",{className:"font-serif venue-name",children:y.title}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Vu,{size:16,className:"text-gold"}),o.jsx("span",{children:y.time})]}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Wo,{size:16,className:"text-gold"}),o.jsx("span",{children:y.address})]}),o.jsx("p",{className:"venue-note",children:y.note}),o.jsxs("div",{className:"venue-actions",children:[o.jsxs("a",{href:y.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Hu,{size:14}),o.jsx("span",{children:"Google Maps"})]}),o.jsxs("a",{href:y.appleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Wu,{size:14}),o.jsx("span",{children:"Apple Maps"})]})]})]})]}),o.jsxs("div",{className:"venue-card glass-card",children:[o.jsxs("div",{className:"venue-image-wrapper",children:[o.jsx("img",{src:x.image,alt:x.title,className:"venue-img"}),o.jsx("div",{className:"venue-badge",children:"Reception"})]}),o.jsxs("div",{className:"venue-body",children:[o.jsx("h3",{className:"font-serif venue-name",children:x.title}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Vu,{size:16,className:"text-gold"}),o.jsx("span",{children:x.time})]}),o.jsxs("div",{className:"venue-info",children:[o.jsx(Wo,{size:16,className:"text-gold"}),o.jsx("span",{children:x.address})]}),o.jsx("p",{className:"venue-note",children:x.note}),o.jsxs("div",{className:"venue-actions",children:[o.jsxs("a",{href:x.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Hu,{size:14}),o.jsx("span",{children:"Google Maps"})]}),o.jsxs("a",{href:x.appleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-outline-gold venue-btn",children:[o.jsx(Wu,{size:14}),o.jsx("span",{children:"Apple Maps"})]})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})},ep=()=>{const{gallery:y}=K,[x,p]=ae.useState(null),Y=Q=>{p(Q)},T=()=>{p(null)},D=Q=>{Q.stopPropagation(),p(B=>(B+1)%y.length)},G=Q=>{Q.stopPropagation(),p(B=>(B-1+y.length)%y.length)};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Moments"}),o.jsx("h2",{className:"font-serif section-title",children:"Photo Gallery"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsx("div",{className:"gallery-grid",children:y.map((Q,B)=>o.jsxs("div",{className:"gallery-item glass-card",onClick:()=>Y(B),children:[o.jsx("img",{src:Q.src,alt:Q.caption,className:"gallery-thumb"}),o.jsxs("div",{className:"gallery-overlay",children:[o.jsx(uf,{size:24,className:"text-gold"}),o.jsx("span",{className:"gallery-caption",children:Q.caption})]})]},Q.id))}),x!==null&&o.jsx("div",{className:"modal-backdrop",onClick:T,children:o.jsxs("div",{className:"lightbox-container",onClick:Q=>Q.stopPropagation(),children:[o.jsx("button",{className:"lightbox-close",onClick:T,children:o.jsx(Yo,{size:24})}),o.jsx("button",{className:"lightbox-nav nav-prev",onClick:G,children:o.jsx(ff,{size:30})}),o.jsxs("div",{className:"lightbox-content",children:[o.jsx("img",{src:y[x].src,alt:y[x].caption,className:"lightbox-img"}),o.jsx("p",{className:"lightbox-caption",children:y[x].caption})]}),o.jsx("button",{className:"lightbox-nav nav-next",onClick:D,children:o.jsx(mf,{size:30})})]})}),o.jsx("style",{children:`
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
      `})]})},tp=()=>{const{dressCode:y}=K;return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Attire Guide"}),o.jsx("h2",{className:"font-serif section-title",children:"Dress Code"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"dress-code-card glass-card",children:[o.jsx("div",{className:"dress-code-icon-wrapper",children:o.jsx(Uf,{size:28,className:"text-gold"})}),o.jsx("h3",{className:"font-serif dress-code-style",children:y.style}),o.jsx("p",{className:"dress-code-desc",children:y.description}),o.jsxs("div",{className:"palette-title",children:[o.jsx(Gl,{size:14,className:"text-gold"}),o.jsx("span",{children:"Recommended Palette"})]}),o.jsx("div",{className:"palette-swatches",children:y.palette.map((x,p)=>o.jsxs("div",{className:"swatch-item",children:[o.jsx("div",{className:"swatch-circle",style:{backgroundColor:x.hex,border:x.hex==="#F3ECE1"?"1px solid rgba(0,0,0,0.15)":"none"},title:x.name}),o.jsx("span",{className:"swatch-name",children:x.name})]},p))})]}),o.jsx("style",{children:`
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
      `})]})},np=()=>{const{giftRegistry:y}=K,[x,p]=ae.useState(!1),Y=()=>{navigator.clipboard.writeText(y.iban),p(!0),Ko({particleCount:40,spread:50,origin:{y:.8},colors:["#D4AF37","#FCF6BA","#FFFFFF"]}),setTimeout(()=>p(!1),3e3)};return o.jsxs("section",{className:"section-padding",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"font-script section-script",children:"Gift Registry"}),o.jsx("h2",{className:"font-serif section-title",children:"Honeymoon Fund"}),o.jsx("div",{className:"ornament-line",children:o.jsx("span",{className:"gold-diamond"})})]}),o.jsxs("div",{className:"gift-card glass-card",children:[o.jsx("div",{className:"gift-icon-wrapper",children:o.jsx(Ef,{size:28,className:"text-gold"})}),o.jsx("p",{className:"gift-message",children:y.message}),o.jsxs("div",{className:"iban-box",children:[o.jsx("div",{className:"iban-label",children:"Bank Account Details"}),o.jsx("div",{className:"iban-bank",children:y.bankName}),o.jsx("div",{className:"iban-number",children:y.iban}),o.jsxs("div",{className:"iban-swift",children:["SWIFT / BIC: ",y.swift]}),o.jsx("button",{className:"btn-gold copy-btn",onClick:Y,children:x?o.jsxs(o.Fragment,{children:[o.jsx(Go,{size:16}),o.jsx("span",{children:"IBAN Copied!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(kf,{size:16}),o.jsx("span",{children:"Copy IBAN Account"})]})})]})]}),o.jsx("style",{children:`
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
      `})]})},rp=({autoPlayTrigger:y})=>{const[x,p]=ae.useState(!1),[Y,T]=ae.useState(!1),D=ae.useRef(null);ae.useEffect(()=>{y&&D.current&&D.current.play().then(()=>p(!0)).catch(Q=>console.log("Autoplay blocked by browser policy:",Q))},[y]);const G=()=>{D.current&&(x?(D.current.pause(),p(!1)):(D.current.play(),p(!0)))};return o.jsxs(o.Fragment,{children:[o.jsx("audio",{ref:D,src:K.music.url,loop:!0,preload:"auto"}),o.jsx("button",{className:"audio-floating-btn",onClick:G,title:x?"Mute Background Music":"Play Background Music","aria-label":"Toggle background music",children:x?o.jsxs("div",{className:"sound-bars",children:[o.jsx("span",{className:"sound-bar"}),o.jsx("span",{className:"sound-bar"}),o.jsx("span",{className:"sound-bar"}),o.jsx("span",{className:"sound-bar"})]}):o.jsx(Yu,{size:20})})]})},lp=({isOpen:y,onClose:x})=>{const[p,Y]=ae.useState({fullName:"",attending:"yes",guestCount:1,dietary:"",songRequest:"",transport:"no"}),[T,D]=ae.useState(!1);if(!y)return null;const G=B=>{const{name:re,value:ne}=B.target;Y(J=>({...J,[re]:ne}))},Q=B=>{B.preventDefault();const re=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]"),ne={...p,id:Date.now(),submittedAt:new Date().toISOString()};localStorage.setItem("wedding_rsvps",JSON.stringify([...re,ne])),Ko({particleCount:70,spread:60,origin:{y:.6},colors:["#D4AF37","#FCF6BA","#FFFFFF","#E8D3C8"]}),D(!0);const J=encodeURIComponent(`💌 *RSVP CONFIRMATION - ${K.couple.bride} & ${K.couple.groom}'s Wedding*

👤 *Name:* ${p.fullName}
✨ *Attending:* ${p.attending==="yes"?"✅ Joyfully Accepts":"❌ Regretfully Declines"}
👥 *Number of Guests:* ${p.guestCount}
🥗 *Dietary Requirements:* ${p.dietary||"None"}
🎵 *Song Request:* ${p.songRequest||"Surprise us!"}
🚌 *Need Shuttle Bus:* ${p.transport==="yes"?"Yes":"No"}`),le=`https://wa.me/${K.rsvp.whatsappNumber}?text=${J}`;setTimeout(()=>{window.open(le,"_blank")},1200)};return o.jsxs("div",{className:"modal-backdrop",onClick:x,children:[o.jsxs("div",{className:"modal-content glass-card",onClick:B=>B.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:x,children:o.jsx(Yo,{size:20})}),T?o.jsxs("div",{className:"rsvp-success-box text-center",children:[o.jsx("div",{className:"success-icon-wrapper",children:o.jsx(Go,{size:32,className:"text-gold"})}),o.jsx("h3",{className:"font-serif success-title",children:"Thank You!"}),o.jsx("p",{className:"success-message",children:"Your RSVP has been recorded. Opening WhatsApp to send your confirmation details..."}),o.jsx("button",{className:"btn-gold mt-6",onClick:x,children:"Close Window"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("span",{className:"font-script section-script",children:"RSVP"}),o.jsx("h2",{className:"font-serif section-title",children:"Confirm Attendance"}),o.jsxs("p",{className:"rsvp-deadline",children:["Kindly respond by ",K.rsvp.deadline]})]}),o.jsxs("form",{onSubmit:Q,className:"rsvp-form",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Full Name *"}),o.jsx("input",{type:"text",name:"fullName",required:!0,placeholder:"e.g. Eleanor & Lucas Vance",value:p.fullName,onChange:G,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Will you join us? *"}),o.jsxs("div",{className:"radio-group",children:[o.jsxs("label",{className:`radio-card ${p.attending==="yes"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"yes",checked:p.attending==="yes",onChange:G}),o.jsx("span",{children:"🎉 Joyfully Accept"})]}),o.jsxs("label",{className:`radio-card ${p.attending==="no"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"attending",value:"no",checked:p.attending==="no",onChange:G}),o.jsx("span",{children:"💔 Regretfully Decline"})]})]})]}),p.attending==="yes"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Number of Attending Guests"}),o.jsxs("select",{name:"guestCount",value:p.guestCount,onChange:G,className:"form-input",children:[o.jsx("option",{value:1,children:"1 Guest (Just me)"}),o.jsx("option",{value:2,children:"2 Guests (Plus One)"}),o.jsx("option",{value:3,children:"3 Guests (Family)"}),o.jsx("option",{value:4,children:"4 Guests (Family)"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Dietary Restrictions / Allergies"}),o.jsx("input",{type:"text",name:"dietary",placeholder:"e.g. Vegetarian, Gluten-Free, Nut Allergy",value:p.dietary,onChange:G,className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Song Request for the DJ"}),o.jsx("input",{type:"text",name:"songRequest",placeholder:"What song will get you on the dance floor?",value:p.songRequest,onChange:G,className:"form-input"})]})]}),o.jsxs("button",{type:"submit",className:"btn-gold w-full mt-4",children:[o.jsx(Of,{size:16}),o.jsx("span",{children:"Submit RSVP via WhatsApp"})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})},ip=({isOpen:y,onClose:x})=>{const[p,Y]=ae.useState(""),[T,D]=ae.useState(!1),[G,Q]=ae.useState([]),[B,re]=ae.useState("");ae.useEffect(()=>{y&&T&&ne()},[y,T]);const ne=()=>{const W=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]");Q(W)};if(!y)return null;const J=W=>{W.preventDefault(),p==="1234"||p==="admin"?(D(!0),re(""),ne()):re("Incorrect PIN. Default PIN is 1234")},le=()=>{if(G.length===0)return;const W=["Full Name","Attending","Guests","Dietary Restrictions","Song Request","Submitted At"],A=G.map(se=>[`"${se.fullName}"`,se.attending==="yes"?"Attending":"Declined",se.guestCount,`"${se.dietary||"None"}"`,`"${se.songRequest||"None"}"`,`"${new Date(se.submittedAt).toLocaleString()}"`]),rt="data:text/csv;charset=utf-8,"+[W.join(","),...A.map(se=>se.join(","))].join(`
`),Qe=encodeURI(rt),we=document.createElement("a");we.setAttribute("href",Qe),we.setAttribute("download",`wedding_rsvps_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(we),we.click(),document.body.removeChild(we)},Le=G.filter(W=>W.attending==="yes").reduce((W,A)=>W+Number(A.guestCount),0),De=G.filter(W=>W.attending==="no").length;return o.jsxs("div",{className:"modal-backdrop",onClick:x,children:[o.jsxs("div",{className:"modal-content glass-card admin-modal",onClick:W=>W.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:x,children:o.jsx(Yo,{size:20})}),T?o.jsxs("div",{className:"admin-dashboard-view",children:[o.jsxs("div",{className:"admin-header",children:[o.jsx("h2",{className:"font-serif admin-main-title",children:"RSVP Management"}),o.jsxs("button",{className:"btn-outline-gold export-btn",onClick:le,children:[o.jsx(Sf,{size:14}),o.jsx("span",{children:"Export CSV"})]})]}),o.jsxs("div",{className:"admin-stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx($f,{size:20,className:"text-gold"}),o.jsx("div",{className:"stat-num",children:Le}),o.jsx("div",{className:"stat-label",children:"Total Attending Guests"})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx(yf,{size:20,style:{color:"#E53E3E"}}),o.jsx("div",{className:"stat-num",children:De}),o.jsx("div",{className:"stat-label",children:"Declined Invites"})]})]}),o.jsx("div",{className:"admin-table-wrapper",children:G.length===0?o.jsx("p",{className:"empty-msg",children:"No RSVPs recorded yet. Test by submitting an RSVP!"}):o.jsxs("table",{className:"admin-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Guest Name"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Count"}),o.jsx("th",{children:"Dietary Notes"}),o.jsx("th",{children:"Song Request"})]})}),o.jsx("tbody",{children:G.map(W=>o.jsxs("tr",{children:[o.jsx("td",{className:"fw-600",children:W.fullName}),o.jsx("td",{children:o.jsx("span",{className:`status-pill ${W.attending==="yes"?"attending":"declined"}`,children:W.attending==="yes"?"Attending":"Declined"})}),o.jsx("td",{children:W.guestCount}),o.jsx("td",{className:"text-muted",children:W.dietary||"-"}),o.jsx("td",{className:"text-muted",children:W.songRequest||"-"})]},W.id))})]})})]}):o.jsxs("div",{className:"admin-login-box text-center",children:[o.jsx("div",{className:"admin-lock-icon",children:o.jsx(Gu,{size:28,className:"text-gold"})}),o.jsx("h3",{className:"font-serif admin-title",children:"Couple Dashboard"}),o.jsx("p",{className:"admin-subtitle",children:"Enter passcode to view RSVPs (PIN: 1234)"}),o.jsxs("form",{onSubmit:J,className:"admin-form",children:[o.jsx("input",{type:"password",placeholder:"Enter PIN (1234)",value:p,onChange:W=>Y(W.target.value),className:"form-input text-center"}),B&&o.jsx("p",{className:"error-text",children:B}),o.jsx("button",{type:"submit",className:"btn-gold mt-4",children:"Unlock Dashboard"})]})]})]}),o.jsx("style",{children:`
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
      `})]})},op=({currentTheme:y,onThemeChange:x})=>{const[p,Y]=ae.useState(!1),T=[{id:"maison",name:"Maison Dorée",color:"#D4AF37"},{id:"royal",name:"Royal Navy",color:"#1B263B"},{id:"sage",name:"Botanical Sage",color:"#9AB09E"},{id:"terracotta",name:"Terracotta Sunset",color:"#C86D51"}];return o.jsxs("div",{className:"theme-switcher-wrapper",children:[p&&o.jsxs("div",{className:"theme-menu glass-card",children:[o.jsx("div",{className:"theme-menu-title",children:"Select Theme Style"}),o.jsx("div",{className:"theme-options",children:T.map(D=>o.jsxs("button",{className:`theme-option-btn ${y===D.id?"active":""}`,onClick:()=>{x(D.id),Y(!1)},children:[o.jsx("span",{className:"theme-dot",style:{backgroundColor:D.color}}),o.jsx("span",{children:D.name}),y===D.id&&o.jsx(Go,{size:14,className:"text-gold ms-auto"})]},D.id))})]}),o.jsx("button",{className:"audio-floating-btn theme-floating-btn",onClick:()=>Y(!p),title:"Change Aesthetic Theme","aria-label":"Toggle theme selector",children:o.jsx(Tf,{size:20})}),o.jsx("style",{children:`
        .theme-switcher-wrapper {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 99;
        }

        .theme-floating-btn {
          position: relative;
          bottom: 0;
          left: 0;
        }

        .theme-menu {
          position: absolute;
          bottom: 70px;
          left: 0;
          width: 210px;
          padding: 1rem;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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

        @media (max-width: 640px) {
          .theme-switcher-wrapper {
            bottom: 1.25rem;
            left: 1.25rem;
          }
        }
      `})]})};function ap(){const[y,x]=ae.useState(!1),[p,Y]=ae.useState(!1),[T,D]=ae.useState(!1),[G,Q]=ae.useState(!1),[B,re]=ae.useState("maison"),ne=()=>{x(!0),Y(!0)};return ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",B)},[B]),o.jsxs("div",{className:"app-main-container",children:[o.jsxs("div",{className:"petal-container",children:[o.jsx("div",{className:"petal",style:{left:"10%",width:"14px",height:"14px",animationDelay:"0s"}}),o.jsx("div",{className:"petal",style:{left:"25%",width:"18px",height:"18px",animationDelay:"3s"}}),o.jsx("div",{className:"petal",style:{left:"45%",width:"12px",height:"12px",animationDelay:"6s"}}),o.jsx("div",{className:"petal",style:{left:"70%",width:"16px",height:"16px",animationDelay:"1.5s"}}),o.jsx("div",{className:"petal",style:{left:"85%",width:"20px",height:"20px",animationDelay:"4.5s"}})]}),y?o.jsxs("div",{className:"invitation-content-fade",children:[o.jsxs("header",{className:"site-header glass-pill",children:[o.jsx("div",{className:"header-monogram",children:K.couple.monogram}),o.jsxs("button",{className:"header-rsvp-btn",onClick:()=>D(!0),children:[o.jsx(Kl,{size:14,className:"text-gold"}),o.jsx("span",{children:"RSVP"})]})]}),o.jsxs("main",{className:"main-content-flow",children:[o.jsx(qf,{onOpenRSVP:()=>D(!0)}),o.jsx(Xf,{}),o.jsx(Zf,{}),o.jsx(Jf,{}),o.jsx(ep,{}),o.jsx(tp,{}),o.jsx(np,{}),o.jsx("section",{className:"section-padding text-center",children:o.jsxs("div",{className:"glass-card rsvp-banner",children:[o.jsx("span",{className:"font-script section-script",children:"We Can't Wait"}),o.jsx("h2",{className:"font-serif section-title",children:"Join Us in Florence"}),o.jsx("p",{className:"rsvp-banner-text",children:"Please confirm your attendance so we can finalize our arrangements."}),o.jsxs("button",{className:"btn-gold mt-6",onClick:()=>D(!0),children:[o.jsx(Kl,{size:16}),o.jsx("span",{children:"Confirm RSVP Now"})]})]})})]}),o.jsxs("footer",{className:"site-footer",children:[o.jsx("div",{className:"footer-monogram font-serif",children:K.couple.monogram}),o.jsxs("p",{className:"footer-names",children:[K.couple.bride," & ",K.couple.groom]}),o.jsx("p",{className:"footer-date",children:K.couple.formattedDate}),o.jsxs("button",{className:"admin-footer-link",onClick:()=>Q(!0),children:[o.jsx(Gu,{size:12}),o.jsx("span",{children:"Couple Admin Login"})]})]})]}):o.jsx(Gf,{onOpen:ne}),o.jsx(rp,{autoPlayTrigger:p}),o.jsx(op,{currentTheme:B,onThemeChange:re}),o.jsx(lp,{isOpen:T,onClose:()=>D(!1)}),o.jsx(ip,{isOpen:G,onClose:()=>Q(!1)}),o.jsx("style",{children:`
        .app-main-container {
          min-height: 100vh;
          position: relative;
        }

        .invitation-content-fade {
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

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
          padding-top: 3rem;
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
          padding: 3rem 1rem 5rem 1rem;
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

        .admin-footer-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.8rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .admin-footer-link:hover {
          color: var(--text-gold);
        }
      `})]})}tf.createRoot(document.getElementById("root")).render(o.jsx(Gd.StrictMode,{children:o.jsx(ap,{})}));

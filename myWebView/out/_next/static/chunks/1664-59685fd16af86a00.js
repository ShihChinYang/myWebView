(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1664],{59720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return i},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",f="server-patch",a="prefetch",c="fast-refresh",i="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(89082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(38754)._(n(67294)),o=n(24879),u=n(71572),l=n(18373),f=n(96221),a=n(25933),c=n(14167),i=n(18874),s=n(96342),d=n(245),p=n(56015),y=n(59720),b=new Set;function h(e,t,n,r,o,l){if(l||(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let _=r.default.forwardRef(function(e,t){let n,l;let{href:b,as:_,children:O,prefetch:g=null,passHref:C,replace:E,shallow:P,scroll:T,locale:j,onClick:m,onMouseEnter:M,onTouchStart:R,legacyBehavior:A=!1,...k}=e;n=O,A&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let I=r.default.useContext(c.RouterContext),L=r.default.useContext(i.AppRouterContext),S=null!=I?I:L,N=!I,x=!1!==g,U=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:w,as:K}=r.default.useMemo(()=>{if(!I){let e=v(b);return{href:e,as:_?v(_):e}}let[e,t]=(0,o.resolveHref)(I,b,!0);return{href:e,as:_?(0,o.resolveHref)(I,_):t||e}},[I,b,_]),F=r.default.useRef(w),H=r.default.useRef(K);A&&(l=r.default.Children.only(n));let D=A?l&&"object"==typeof l&&l.ref:t,[V,q,z]=(0,s.useIntersection)({rootMargin:"200px"}),B=r.default.useCallback(e=>{(H.current!==K||F.current!==w)&&(z(),H.current=K,F.current=w),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,w,z,V]);r.default.useEffect(()=>{S&&q&&x&&h(S,w,K,{locale:j},{kind:U},N)},[K,w,q,j,x,null==I?void 0:I.locale,S,N,U]);let G={ref:B,onClick(e){A||"function"!=typeof m||m(e),A&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,o,l,f,a,c,i){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](n,o,{shallow:f,locale:c,scroll:e}):t[l?"replace":"push"](o||n,{scroll:e})};i?r.default.startTransition(d):d()}(e,S,w,K,E,P,T,j,N)},onMouseEnter(e){A||"function"!=typeof M||M(e),A&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),S&&(x||!N)&&h(S,w,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)},onTouchStart(e){A||"function"!=typeof R||R(e),A&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),S&&(x||!N)&&h(S,w,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)}};if((0,f.isAbsoluteUrl)(K))G.href=K;else if(!A||C||"a"===l.type&&!("href"in l.props)){let e=void 0!==j?j:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,d.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=t||(0,p.addBasePath)((0,a.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return A?r.default.cloneElement(l,G):r.default.createElement("a",{...k,...G},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(67294),o=n(46231),u="function"==typeof IntersectionObserver,l=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!u,[i,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!i){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,i,d.current]),[p,i,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,n){e.exports=n(81032)}}]);
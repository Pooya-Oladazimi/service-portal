(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{52527:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,19324,23)),Promise.resolve().then(n.bind(n,6532)),Promise.resolve().then(n.t.bind(n,87970,23))},6532:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var r=n(95155),o=n(48173),a=n.n(o),s=n(4146),i=n.n(s),l=n(66658),u=n(12115);function c(){let e=(0,l.usePathname)(),[t,n]=(0,u.useState)(e);return(0,u.useEffect)(()=>{n(e)},[e]),(0,r.jsxs)("nav",{className:"bg-ts4nfdi-brand-color h-[70px]",children:[(0,r.jsx)("div",{className:"mx-auto px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset","aria-controls":"mobile-menu","aria-expanded":"false",children:[(0,r.jsx)("span",{className:"absolute -inset-0.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,r.jsx)("svg",{className:"block size-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,r.jsx)("svg",{className:"hidden size-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})]})}),(0,r.jsxs)("div",{className:"flex flex-1 items-center sm:items-stretch justify-start",children:[(0,r.jsx)("div",{className:"flex shrink-0 items-center",children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)(i(),{width:50,height:50,alt:"logo",src:"/logo.png"})})}),(0,r.jsx)("div",{className:"hidden sm:ml-6 sm:block",children:(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)(a(),{href:"/",className:"navbar-links "+("/home"===t||"/"===t?"navbar-link-active":""),children:"Home"}),(0,r.jsx)(a(),{href:"/widgets",className:"navbar-links "+(t.includes("/widgets")?"navbar-link-active":""),children:"Widgets"}),(0,r.jsx)(a(),{href:"/incubators",className:"navbar-links "+(t.includes("/incubators")?"navbar-link-active":""),children:"Incubators Projects"}),(0,r.jsx)(a(),{href:"/documentation",className:"navbar-links "+(t.includes("/documentation")?"navbar-link-active":""),children:"Documentation"}),(0,r.jsx)(a(),{href:"/about",className:"navbar-links "+(t.includes("/about")?"navbar-link-active":""),children:"About"}),(0,r.jsx)(a(),{href:"/contact",className:"navbar-links "+(t.includes("/contact")?"navbar-link-active":""),children:"Contact"})]})})]})]})}),(0,r.jsx)("div",{className:"sm:hidden",id:"mobile-menu",children:(0,r.jsxs)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[(0,r.jsx)(a(),{href:"/",className:"navbar-links",children:"Home"}),(0,r.jsx)(a(),{href:"/widgets",className:"navbar-links",children:"Widgets"}),(0,r.jsx)(a(),{href:"/incubators",className:"navbar-links",children:"Incubators Projects"}),(0,r.jsx)(a(),{href:"/documentation",className:"navbar-links",children:"Documentation"}),(0,r.jsx)(a(),{href:"/about",className:"navbar-links",children:"About"}),(0,r.jsx)(a(),{href:"/help",className:"navbar-links",children:"Contact"})]})})]})}},48173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(60306),o=n(95155),a=r._(n(12115)),s=n(70180),i=n(71394),l=n(64116),u=n(4445),c=n(45353),f=n(12170),d=n(49544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}n(42363);let m=a.default.forwardRef(function(e,t){let n,r;let{href:s,as:m,children:b,prefetch:g=null,passHref:v,replace:y,shallow:x,scroll:j,onClick:k,onMouseEnter:N,onTouchStart:P,legacyBehavior:E=!1,..._}=e;n=b,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let w=a.default.useContext(i.AppRouterContext),O=!1!==g,C=null===g?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:M,as:I}=a.default.useMemo(()=>{let e=h(s);return{href:e,as:m?h(m):e}},[s,m]),S=a.default.useRef(M),A=a.default.useRef(I);E&&(r=a.default.Children.only(n));let T=E?r&&"object"==typeof r&&r.ref:t,[R,L,U]=(0,l.useIntersection)({rootMargin:"200px"}),z=a.default.useCallback(e=>{(A.current!==I||S.current!==M)&&(U(),A.current=I,S.current=M),R(e)},[I,M,U,R]),D=(0,c.useMergedRef)(z,T);a.default.useEffect(()=>{w&&L&&O&&p(w,M,{kind:C})},[I,M,L,O,w,C]);let F={ref:D,onClick(e){E||"function"!=typeof k||k(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,s,i){let{nodeName:l}=e.currentTarget;"A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),a.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,w,M,I,y,x,j)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&O&&p(w,M,{kind:C})},onTouchStart:function(e){E||"function"!=typeof P||P(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&O&&p(w,M,{kind:C})}};return(0,f.isAbsoluteUrl)(I)?F.href=I:E&&!v&&("a"!==r.type||"href"in r.props)||(F.href=(0,d.addBasePath)(I)),E?a.default.cloneElement(r,F):(0,o.jsx)("a",{..._,...F,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},64116:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(12115),o=n(68571),a="function"==typeof IntersectionObserver,s=new Map,i=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),s.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4146:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return i}});let r=n(60306),o=n(40666),a=n(87970),s=r._(n(65514));function i(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=a.Image},70180:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return i},urlObjectKeys:function(){return s}});let r=n(29955)._(n(54156)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",s=e.pathname||"",i=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==u?(u="//"+(u||""),s&&"/"!==s[0]&&(s="/"+s)):u||(u=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),""+a+u+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+i}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},54156:(e,t)=>{"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},12170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return l},getLocationOrigin:function(){return s},getURL:function(){return i},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function s(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){let{href:e}=window.location,t=s();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},19324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[12533,87970,28441,11517,77358],()=>t(52527)),_N_E=e.O()}]);
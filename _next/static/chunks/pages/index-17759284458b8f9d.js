(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(e,t,r){e.exports=r(8027)},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6439)}])},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,c=e.priority,l=void 0!==c&&c,d=e.loading,m=e.lazyRoot,b=void 0===m?null:m,v=e.lazyBoundary,x=void 0===v?"200px":v,w=e.className,j=e.quality,_=e.width,A=e.height,z=e.objectFit,N=e.objectPosition,E=e.onLoadingComplete,I=e.loader,P=void 0===I?k:I,H=e.placeholder,R=void 0===H?"empty":H,C=e.blurDataURL,M=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=s.useRef(null),L=M,q=r?"responsive":"intrinsic";"layout"in L&&(L.layout&&(q=L.layout),delete L.layout);var W="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var T=y(t)?t.default:t;if(!T.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(T)));if(C=C||T.blurDataURL,W=T.src,(!q||"fill"!==q)&&(A=A||T.height,_=_||T.width,!T.height||!T.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(T)))}t="string"===typeof t?t:W;var B=O(_),U=O(A),V=O(j),F=!l&&("lazy"===d||"undefined"===typeof d);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,F=!1);p.has(t)&&(F=!1);0;var G,K=o(f.useIntersection({rootRef:b,rootMargin:x,disabled:!F}),2),Q=K[0],X=K[1],J=!F||X,$={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:N},te="blur"===R?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:N||"0% 0%"}:{};if("fill"===q)$.display="block",$.position="absolute",$.top=0,$.left=0,$.bottom=0,$.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof U){var re=U/B,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===q?($.display="block",$.position="relative",Z=!0,Y.paddingTop=ne):"intrinsic"===q?($.display="inline-block",$.position="relative",$.maxWidth="100%",Z=!0,Y.maxWidth="100%",G="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(B,"%27%20height=%27").concat(U,"%27/%3e")):"fixed"===q&&($.display="inline-block",$.position="relative",$.width=B,$.height=U)}else 0;var ie={src:g,srcSet:void 0,sizes:void 0};J&&(ie=S({src:t,unoptimized:a,layout:q,width:B,quality:V,sizes:r,loader:P}));var oe=t;0;var ae;0;var ce=(i(ae={},"imagesrcset",ie.srcSet),i(ae,"imagesizes",ie.sizes),ae),le=s.default.useLayoutEffect,se=s.useRef(E);return s.useEffect((function(){se.current=E}),[E]),le((function(){Q(D.current)}),[Q]),s.useEffect((function(){!function(e,t,r,n,i){var o=function(){var r=e.current;r&&(r.src!==g&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(p.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var o=r.naturalWidth,a=r.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(D,oe,0,R,se)}),[oe,q,R,J]),s.default.createElement("span",{style:$},Z?s.default.createElement("span",{style:Y},G?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:G}):null):null,s.default.createElement("img",Object.assign({},L,ie,{decoding:"async","data-nimg":q,className:w,ref:D,style:h({},ee,te)})),F&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},L,S({src:t,unoptimized:a,layout:q,width:B,quality:V,sizes:r,loader:P}),{decoding:"async","data-nimg":q,style:ee,className:w,loading:d||"lazy"}))),l?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ie.src+ie.srcSet+ie.sizes,rel:"preload",as:"image",href:ie.srcSet?void 0:ie.src},ce))):null)};var l,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),u=(l=r(5443))&&l.__esModule?l:{default:l},d=r(5809),f=r(7190);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var p=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t).concat(z(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(z(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||d.imageConfigDefault,x=v.deviceSizes,w=v.imageSizes,j=v.loader,_=v.path,A=(v.domains,a(x).concat(a(w)));function S(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,c=e.sizes,l=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,a(o));return{widths:A.filter((function(e){return e>=x[0]*l})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:x,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(i,n,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,r){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=b.get(j);if(t)return t(h({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(j))}function z(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,s=o.useRef(),u=i(o.useState(!1),2),d=u[0],f=u[1],m=i(o.useState(t?t.current:null),2),h=m[0],p=m[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&p(t.current)}),[t]),[g,d]};var o=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},6439:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(9008),o=r(3200),a=r.n(o),c=(0,r(1752).default)().publicRuntimeConfig,l=function(e){var t=e.src;return"".concat(c.basePath,"/img/").concat(t)},s=r(5675),u=function(e){var t=e.src,r=e.alt,i=e.width,o=e.height,a=e.className;return(0,n.jsx)(s.default,{src:t,className:a||"",alt:r||"Image",loader:l,width:i||"100%",height:o||"100%",layout:"fixed"})},d=function(){return(0,n.jsx)("footer",{className:"".concat(a().footer," bg-tosca"),children:(0,n.jsx)("div",{className:"flex flex-col place-items-center items-center justify-center pt-10",children:(0,n.jsx)("div",{className:"pt-10 pb-10 text-center",children:"Copyright \xa9 2022 Ilham Azhar. All rights reserved."})})})},f=function(e){var t=e.src,r=e.caption;return(0,n.jsxs)("div",{className:"flex flex-col items-center p-10",children:[(0,n.jsx)("div",{children:(0,n.jsx)(u,{src:t,alt:"Child reading"})}),(0,n.jsx)("div",{children:r})]})},m=function(){return(0,n.jsxs)("div",{className:"".concat(a().container," pt-16 md:pt-0"),children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Ilham Azhar"}),(0,n.jsx)("meta",{name:"description",content:"Web profile CV-KU"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"".concat(a().main," home"),children:[(0,n.jsx)(h,{}),(0,n.jsx)(p,{}),(0,n.jsx)(g,{})]}),(0,n.jsx)(d,{})]})},h=function(){return(0,n.jsxs)("div",{className:"flex flex-col md:flex-row p-4 md:p-10 md:w-3/4 items-center justify-center",children:[(0,n.jsx)("div",{className:"rounded-xl overflow-hidden items-center justify-center place-items-center w-full md:w-auto",children:(0,n.jsx)(u,{src:"pfp.png",className:"items-center rounded-xl justify-center",alt:"Profile pic",width:"200px",height:"200px"})}),(0,n.jsx)("div",{className:"md:pl-10",children:(0,n.jsxs)("div",{className:"flex flex-col justify-left items-start text-left",children:[(0,n.jsx)("h1",{children:"Halo, nama saya"}),(0,n.jsx)("div",{className:"profile-name text-5xl md:text-3xl font-extrabold",children:"Ilham Azhar"}),(0,n.jsx)("p",{className:"w-96",children:"Saya belajar Web 3"})]})})]})},p=function(){return(0,n.jsxs)("div",{className:"flex flex-col p-4 md:p-10 md:w-3/4 items-center justify-center",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h2",{children:"Hobby"})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(f,{caption:"Membaca",src:"child-reading.svg"}),(0,n.jsx)(f,{caption:"Berhitung",src:"icon-berhitung.svg"}),(0,n.jsx)(f,{caption:"Koding",src:"icon-ngoding.svg"}),(0,n.jsx)(f,{caption:"Menulis",src:"icon-checklist.svg"})]})]})},g=function(){return(0,n.jsxs)("div",{className:"portfolio w-full p-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h2",{children:"Portfolio"})}),(0,n.jsxs)("div",{className:"flex justify-center pt-5 space-x-2",children:[(0,n.jsx)(b,{title:"Hello world",description:"Praktik bahasa pemrograman"}),(0,n.jsx)(b,{title:"Membuat web html",description:"Praktik bahasa HTML"})]})]})},b=function(e){var t=e.title,r=e.description;return(0,n.jsxs)("div",{className:"p-5 flex border-2 rounded-xl items-center porto-item w-72",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(u,{src:"icon-trophy.svg",alt:"Trophy icon",width:"60px",height:"60px"})}),(0,n.jsxs)("div",{className:"pl-5",children:[(0,n.jsx)("div",{className:"title cursor-pointer hover:underline",children:t}),(0,n.jsx)("p",{children:r})]})]})}},3200:function(e){e.exports={main:"Home_main__lVsQm",container:"Home_container__zBkib",footer:"Home_footer__qxmLq",title:"Home_title__vDuuH",subtitle:"Home_subtitle__mGMcv",subtitle2:"Home_subtitle2__9_a_g",subtitle3:"Home_subtitle3__frQSW",button:"Home_button__Kw1rK",description:"Home_description__65OCn",textGradient:"Home_textGradient__bQT4C",grid:"Home_grid__Xtwy8",card:"Home_card__b0Rbb",logo:"Home_logo__zltVm",gradientBar:"Home_gradientBar__rbpFd",timeline:"Home_timeline__OgU0E",time:"Home_time__gvtFu"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
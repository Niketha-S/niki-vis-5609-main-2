import{ab as y,ac as M,$ as D,B,k as f,a9 as N,ad as $,ae as w,af as x,Y as T,l as C,ag as G,ah as j,Q as h,ai as z,S as Q,aj as V,ak as Z,al as F,am as H,an as J,ao as K}from"./DllsF_mC.js";import{p as W}from"./BMfMIjeu.js";import{s as X,g as k}from"./CgseIEyF.js";let S=!1,O=Symbol();function ue(e,r,u){const n=u[r]??(u[r]={store:null,source:B(void 0),unsubscribe:D});if(n.store!==e&&!(O in u))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=D;else{var v=!0;n.unsubscribe=X(e,i=>{v?n.source.v=i:N(n.source,i)}),v=!1}return e&&O in u?k(e):f(n.source)}function ie(){const e={};function r(){y(()=>{for(var u in e)e[u].unsubscribe();M(e,O,{enumerable:!1,value:!0})})}return[e,r]}function ee(e){var r=S;try{return S=!1,[e(),S]}finally{S=r}}function se(e,r,u,n){var L;var v=(u&H)!==0,i=!Z||(u&F)!==0,P=(u&z)!==0,U=(u&J)!==0,R=!1,l;P?[l,R]=ee(()=>e[r]):l=e[r];var Y=Q in e||V in e,d=P&&(((L=$(e,r))==null?void 0:L.set)??(Y&&r in e&&(a=>e[r]=a)))||void 0,s=n,g=!0,m=!1,A=()=>(m=!0,g&&(g=!1,U?s=h(n):s=n),s);l===void 0&&n!==void 0&&(d&&i&&w(),l=A(),d&&d(l));var t;if(i)t=()=>{var a=e[r];return a===void 0?A():(g=!0,m=!1,a)};else{var p=(v?T:C)(()=>e[r]);p.f|=x,t=()=>{var a=f(p);return a!==void 0&&(s=void 0),a===void 0?s:a}}if((u&G)===0)return t;if(d){var q=e.$$legacy;return function(a,_){return arguments.length>0?((!i||!_||q||R)&&d(_?t():a),a):t()}}var o=!1,I=!1,b=B(l),c=T(()=>{var a=t(),_=f(b);return o?(o=!1,I=!0,_):(I=!1,b.v=a)});return v||(c.equals=j),function(a,_){if(K!==null&&(o=I,t(),f(b)),arguments.length>0){const E=_?f(c):i&&P?W(a):a;return c.equals(E)||(o=!0,N(b,E),m&&s!==void 0&&(s=E),h(()=>f(c))),a}return f(c)}}export{ue as a,se as p,ie as s};

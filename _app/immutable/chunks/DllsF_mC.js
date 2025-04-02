var Fn=Array.isArray,Wt=Array.prototype.indexOf,Ln=Array.from,Mn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Yn=Array.prototype,Qt=Object.getPrototypeOf;function Hn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function At(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,xt=4,W=8,_t=16,I=32,Y=64,U=128,w=256,V=512,c=1024,D=2048,N=4096,b=8192,X=16384,tn=32768,It=65536,nn=1<<17,rn=1<<19,Rt=1<<20,wt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function Dt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Ot(t){return!en(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function zn(){Q=!0}const Jn=1,Wn=2,Xn=4,Qn=8,tr=16,nr=1,rr=2,er=4,ar=8,lr=16,sr=4,ur=1,fr=2,_n="[",cn="[!",vn="]",St={},or=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let o=null;function yt(t){o=t}function ir(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(o.l={s:null,u:null,r1:[],r2:ct(!1)})}function _r(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];$(l.effect),Z(l.reaction),Yt(l.fn)}}finally{$(r),Z(e)}}o=n.p,n.m=!0}return{}}function tt(){return!Q||o!==null&&o.l===null}function ct(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function cr(t){return Nt(ct(t))}function pn(t,n=!1){var e;const r=ct(t);return n||(r.equals=Ot),Q&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function vr(t,n=!1){return Nt(pn(t,n))}function Nt(t){return u!==null&&!g&&(u.f&y)!==0&&(A===null?xn([t]):A.push(t)),t}function pr(t,n){return vt(t,lt(()=>at(t))),n}function vt(t,n){return u!==null&&!g&&tt()&&(u.f&(y|_t))!==0&&(A===null||!A.includes(t))&&on(),st(t,n)}function st(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),Ct(t,D),tt()&&f!==null&&(f.f&c)!==0&&(f.f&(I|Y))===0&&(x===null?In([t]):x.push(t))),n}function hr(t,n=1){var r=at(t),e=n===1?r++:r--;return vt(t,r),e}function Ct(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;(i&D)===0&&(!e&&s===f||(m(s,n),(i&(c|w))!==0&&((i&y)!==0?Ct(s,N):et(s))))}}let S=!1;function dr(t){S=t}let T;function M(t){if(t===null)throw kt(),St;return T=t}function Er(){return M(C(T))}function wr(t){if(S){if(C(T)!==null)throw kt(),St;T=t}}function yr(t=1){if(S){for(var n=t,r=T;n--;)r=C(r);T=r}}function gr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var gt,hn,bt,Pt;function Tr(){if(gt===void 0){gt=window,hn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;bt=Et(n,"firstChild").get,Pt=Et(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ut(t=""){return document.createTextNode(t)}function ft(t){return bt.call(t)}function C(t){return Pt.call(t)}function mr(t,n){if(!S)return ft(t);var r=ft(T);if(r===null)r=T.appendChild(ut());else if(n&&r.nodeType!==3){var e=ut();return r==null||r.before(e),M(e),e}return M(r),r}function Ar(t,n){if(!S){var r=ft(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function xr(t,n=1,r=!1){let e=S?T:t;for(var a;n--;)a=e,e=C(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=ut();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function Ir(t){t.textContent=""}function Ft(t){var n=y|D,r=u!==null&&(u.f&y)!==0?u:null;return f===null||r!==null&&(r.f&w)!==0?n|=w:f.f|=Rt,{ctx:o,deps:null,effects:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Rr(t){const n=Ft(t);return n.equals=Ot,n}function Lt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)k(n[r])}}function dn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function En(t){var n,r=f;$(dn(t));try{Lt(t),n=zt(t)}finally{$(r)}return n}function Mt(t){var n=En(t),r=(R||(t.f&w)!==0)&&t.deps!==null?N:c;m(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function qt(t){f===null&&u===null&&sn(),u!==null&&(u.f&w)!==0&&f===null&&ln(),ht&&an()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&Y)!==0,l=f,s={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{rt(s),s.f|=tn}catch(E){throw k(s),E}else n!==null&&et(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Rt|U))===0;if(!i&&!a&&e&&(l!==null&&wn(s,l),u!==null&&(u.f&y)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Dr(t){const n=P(W,null,!1);return m(n,c),n.teardown=t,n}function Or(t){qt();var n=f!==null&&(f.f&I)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Yt(t);return e}}function Sr(t){return qt(),pt(t)}function kr(t){const n=P(Y,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Yt(t){return P(xt,t,!1)}function Nr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=pt(()=>{t(),!e.ran&&(e.ran=!0,vt(r.l.r2,!0),lt(n))})}function Cr(){var t=o;pt(()=>{if(at(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&c)!==0&&m(r,N),F(r)&&rt(r),n.ran=!1}t.l.r2.v=!1}})}function pt(t){return P(W,t,!0)}function br(t,n=[],r=Ft){const e=n.map(r);return yn(()=>t(...e.map(at)))}function yn(t,n=0){return P(W|_t|n,t,!0)}function Pr(t,n=!0){return P(W|I,t,!0,n)}function Ht(t){var n=t.teardown;if(n!==null){const r=ht,e=u;mt(!0),Z(null);try{n.call(null)}finally{mt(r),Z(e)}}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&I)===0&&k(n),n=r}}function k(t,n=!0){var r=!1;if((n||(t.f&rn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:C(e);e.remove(),e=l}r=!0}jt(t,n&&!r),J(t,0),m(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ht(t);var i=t.parent;i!==null&&i.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Ut(t,r,!0),mn(r,()=>{k(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Ut(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&It)!==0||(e.f&I)!==0;Ut(e,n,l?r:!1),e=a}}}function Fr(t){Vt(t,!0)}function Vt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&c)===0&&(t.f^=c),F(t)&&(m(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&It)!==0||(r.f&I)!==0;Vt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let q=[],ot=[];function Gt(){var t=q;q=[],At(t)}function An(){var t=ot;ot=[],At(t)}function Lr(t){q.length===0&&queueMicrotask(Gt),q.push(t)}function Tt(){q.length>0&&Gt(),ot.length>0&&An()}let j=!1,G=!1,K=null,B=!1,ht=!1;function mt(t){ht=t}let L=[];let u=null,g=!1;function Z(t){u=t}let f=null;function $(t){f=t}let A=null;function xn(t){A=t}let v=null,d=0,x=null;function In(t){x=t}let Kt=1,z=0,R=!1,O=null;function Zt(){return++Kt}function F(t){var p;var n=t.f;if((n&D)!==0)return!0;if((n&N)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var a,l,s=(n&V)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var E=t,H=E.parent;for(a=0;a<_;a++)l=r[a],(s||!((p=l==null?void 0:l.reactions)!=null&&p.includes(E)))&&(l.reactions??(l.reactions=[])).push(E);s&&(E.f^=V),i&&H!==null&&(H.f&w)===0&&(E.f^=w)}for(a=0;a<_;a++)if(l=r[a],F(l)&&Mt(l),l.wv>t.wv)return!0}(!e||f!==null&&!R)&&m(t,c)}return!1}function Rn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw j=!1,t}function Dn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&U)===0)}function nt(t,n,r,e){if(j){if(r===null&&(j=!1),Dn(n))throw t;return}r!==null&&(j=!0);{Rn(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?$t(l,n,!1):n===l&&(r?m(l,D):(l.f&c)!==0&&m(l,N),et(l))}}function zt(t){var dt;var n=v,r=d,e=x,a=u,l=R,s=A,i=o,_=g,E=t.f;v=null,d=0,x=null,R=(E&w)!==0&&(g||!B||u===null),u=(E&(I|Y))===0?t:null,A=null,yt(t.ctx),g=!1,z++;try{var H=(0,t.fn)(),p=t.deps;if(v!==null){var h;if(J(t,d),p!==null&&d>0)for(p.length=d+v.length,h=0;h<v.length;h++)p[d+h]=v[h];else t.deps=p=v;if(!R)for(h=d;h<p.length;h++)((dt=p[h]).reactions??(dt.reactions=[])).push(t)}else p!==null&&d<p.length&&(J(t,d),p.length=d);if(tt()&&x!==null&&!g&&p!==null&&(t.f&(y|N|D))===0)for(h=0;h<x.length;h++)$t(x[h],t);return a!==null&&z++,H}finally{v=n,d=r,x=e,u=a,R=l,A=s,yt(i),g=_}}function On(t,n){let r=n.reactions;if(r!==null){var e=Wt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&y)!==0&&(v===null||!v.includes(n))&&(m(n,N),(n.f&(w|V))===0&&(n.f^=V),Lt(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function rt(t){var n=t.f;if((n&X)===0){m(t,c);var r=f,e=o,a=B;f=t,B=!0;try{(n&_t)!==0?gn(t):jt(t),Ht(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,i}catch(_){nt(_,t,r,e||t.ctx)}finally{B=a,f=r}}}function Sn(){try{un()}catch(t){if(K!==null)nt(t,K,null);else throw t}}function Jt(){try{for(var t=0;L.length>0;){t++>1e3&&Sn();var n=L,r=n.length;L=[];for(var e=0;e<r;e++){var a=n[e];(a.f&c)===0&&(a.f^=c);var l=Nn(a);kn(l)}}}finally{G=!1,K=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|b))===0)try{F(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(a){nt(a,e,null,e.ctx)}}}function et(t){G||(G=!0,queueMicrotask(Jt));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Y|I))!==0){if((r&c)===0)return;n.f^=c}}L.push(n)}function Nn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,a=(e&I)!==0,l=a&&(e&c)!==0;if(!l&&(e&b)===0){if((e&xt)!==0)n.push(r);else if(a)r.f^=c;else{var s=u;try{u=r,F(r)&&rt(r)}catch(E){nt(E,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Cn(t){var n;for(Tt();L.length>0;)G=!0,Jt(),Tt();return n}async function Mr(){await Promise.resolve(),Cn()}function at(t){var n=t.f,r=(n&y)!==0;if(O!==null&&O.add(t),u!==null&&!g){A!==null&&A.includes(t)&&fn();var e=u.deps;t.rv<z&&(t.rv=z,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!R||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&w)===0&&(a.f^=w)}return r&&(a=t,F(a)&&Mt(a)),t.v}function bn(t){var n=O;O=new Set;var r=O,e;try{if(lt(t),n!==null)for(e of O)n.add(e)}finally{O=n}return r}function qr(t){var n=bn(()=>lt(t));for(var r of n)if((r.f&nn)!==0)for(const e of r.deps||[])(e.f&y)===0&&st(e,e.v);else st(r,r.v)}function lt(t){var n=g;try{return g=!0,t()}finally{g=n}}const Pn=-7169;function m(t,n){t.f=t.f&Pn|n}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(wt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&wt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{jn as $,Wn as A,pn as B,ct as C,Fn as D,Xn as E,Qn as F,Ut as G,cn as H,b as I,Ir as J,mn as K,Vn as L,k as M,tr as N,C as O,pt as P,lt as Q,o as R,wt as S,Sr as T,Or as U,At as V,Bn as W,Yr as X,Ft as Y,zn as Z,It as _,Xt as a,ir as a0,vr as a1,Nr as a2,Cr as a3,br as a4,_r as a5,mr as a6,qr as a7,wr as a8,vt as a9,$ as aA,u as aB,Tr as aC,_n as aD,St as aE,kt as aF,Gn as aG,kr as aH,Cn as aI,Mr as aJ,pr as aK,_t as aL,tn as aM,sr as aN,Hn as aO,hr as aa,Dr as ab,Mn as ac,Et as ad,Kn as ae,nn as af,er as ag,Ot as ah,ar as ai,Un as aj,Q as ak,rr as al,nr as am,lr as an,O as ao,en as ap,qn as aq,Yn as ar,$n as as,or as at,Zn as au,cr as av,hn as aw,ur as ax,fr as ay,Z as az,yn as b,ut as c,M as d,Yt as e,Ar as f,Qt as g,S as h,ft as i,Er as j,at as k,Rr as l,dr as m,yr as n,T as o,vn as p,Fr as q,gr as r,xr as s,Pr as t,Tn as u,Ln as v,Lr as w,f as x,Jn as y,st as z};

const M=Math.PI,v=2*M,p=1e-6,A=v-p;function E(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function P(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return E;const e=10**t;return function(n){this._+=n[0];for(let h=1,o=n.length;h<o;++h)this._+=Math.round(arguments[h]*e)/e+n[h]}}class S{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?E:P(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,h){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+h}`}bezierCurveTo(t,e,n,h,o,_){this._append`C${+t},${+e},${+n},${+h},${this._x1=+o},${this._y1=+_}`}arcTo(t,e,n,h,o){if(t=+t,e=+e,n=+n,h=+h,o=+o,o<0)throw new Error(`negative radius: ${o}`);let _=this._x1,u=this._y1,s=n-t,l=h-e,a=_-t,f=u-e,r=a*a+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(r>p)if(!(Math.abs(f*s-l*a)>p)||!o)this._append`L${this._x1=t},${this._y1=e}`;else{let c=n-_,$=h-u,m=s*s+l*l,L=c*c+$*$,b=Math.sqrt(m),y=Math.sqrt(r),w=o*Math.tan((M-Math.acos((m+r-L)/(2*b*y)))/2),g=w/y,x=w/b;Math.abs(g-1)>p&&this._append`L${t+g*a},${e+g*f}`,this._append`A${o},${o},0,0,${+(f*c>a*$)},${this._x1=t+x*s},${this._y1=e+x*l}`}}arc(t,e,n,h,o,_){if(t=+t,e=+e,n=+n,_=!!_,n<0)throw new Error(`negative radius: ${n}`);let u=n*Math.cos(h),s=n*Math.sin(h),l=t+u,a=e+s,f=1^_,r=_?h-o:o-h;this._x1===null?this._append`M${l},${a}`:(Math.abs(this._x1-l)>p||Math.abs(this._y1-a)>p)&&this._append`L${l},${a}`,n&&(r<0&&(r=r%v+v),r>A?this._append`A${n},${n},0,1,${f},${t-u},${e-s}A${n},${n},0,1,${f},${this._x1=l},${this._y1=a}`:r>p&&this._append`A${n},${n},0,${+(r>=M)},${f},${this._x1=t+n*Math.cos(o)},${this._y1=e+n*Math.sin(o)}`)}rect(t,e,n,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+h}h${-n}Z`}toString(){return this._}}function d(i){return function(){return i}}function k(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new S(t)}function q(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function T(i){this._context=i}T.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(i,t){switch(i=+i,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(i,t):this._context.moveTo(i,t);break;case 1:this._point=2;default:this._context.lineTo(i,t);break}}};function C(i){return new T(i)}function N(i){return i[0]}function R(i){return i[1]}function Z(i,t){var e=d(!0),n=null,h=C,o=null,_=k(u);i=typeof i=="function"?i:i===void 0?N:d(i),t=typeof t=="function"?t:t===void 0?R:d(t);function u(s){var l,a=(s=q(s)).length,f,r=!1,c;for(n==null&&(o=h(c=_())),l=0;l<=a;++l)!(l<a&&e(f=s[l],l,s))===r&&((r=!r)?o.lineStart():o.lineEnd()),r&&o.point(+i(f,l,s),+t(f,l,s));if(c)return o=null,c+""||null}return u.x=function(s){return arguments.length?(i=typeof s=="function"?s:d(+s),u):i},u.y=function(s){return arguments.length?(t=typeof s=="function"?s:d(+s),u):t},u.defined=function(s){return arguments.length?(e=typeof s=="function"?s:d(!!s),u):e},u.curve=function(s){return arguments.length?(h=s,n!=null&&(o=h(n)),u):h},u.context=function(s){return arguments.length?(s==null?n=o=null:o=h(n=s),u):n},u}export{C as a,q as b,d as c,Z as l,k as w,N as x,R as y};

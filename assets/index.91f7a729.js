(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function B(){}function X(e){return e()}function D(){return Object.create(null)}function E(e){e.forEach(X)}function ce(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function G(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function le(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function C(){return I(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let R;function L(e){R=e}const k=[],Q=[],S=[],U=[],ue=Promise.resolve();let T=!1;function ae(){T||(T=!0,ue.then(Z))}function F(e){S.push(e)}const M=new Set;let P=0;function Z(){const e=R;do{for(;P<k.length;){const t=k[P];P++,L(t),fe(t.$$)}for(L(null),k.length=0,P=0;Q.length;)Q.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];M.has(n)||(M.add(n),n())}S.length=0}while(k.length);for(;U.length;)U.pop()();T=!1,M.clear(),L(e)}function fe(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const q=new Set;let x;function de(){x={r:0,c:[],p:x}}function he(){x.r||E(x.c),x=x.p}function N(e,t){e&&e.i&&(q.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),x.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function me(e){e&&e.c()}function ee(e,t,n,r){const{fragment:o,on_mount:c,on_destroy:f,after_update:d}=e.$$;o&&o.m(t,n),r||F(()=>{const h=c.map(X).filter(ce);f?f.push(...h):E(h),e.$$.on_mount=[]}),d.forEach(F)}function te(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(k.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,r,o,c,f,d=[-1]){const h=R;L(e);const l=e.$$={fragment:null,ctx:null,props:c,update:B,not_equal:o,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:D(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};f&&f(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(u,g,...m)=>{const $=m.length?m[0]:g;return l.ctx&&o(l.ctx[u],l.ctx[u]=$)&&(!l.skip_bound&&l.bound[u]&&l.bound[u]($),v&&_e(e,u)),g}):[],l.update(),v=!0,E(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=se(t.target);l.fragment&&l.fragment.l(u),u.forEach(A)}else l.fragment&&l.fragment.c();t.intro&&N(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),Z()}L(h)}class re{$destroy(){te(this,1),this.$destroy=B}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pe(e){let t,n,r,o,c,f,d=e[0].name+"",h,l,v,u=e[0].species+"",g;return{c(){t=b("div"),n=b("img"),c=C(),f=b("h2"),h=I(d),l=C(),v=b("h3"),g=I(u),G(n.src,r=e[0].image)||y(n,"src",r),y(n,"alt",o=e[0].name),y(t,"class","character")},m(m,$){j(m,t,$),p(t,n),p(t,c),p(t,f),p(f,h),p(t,l),p(t,v),p(v,g)},p(m,[$]){$&1&&!G(n.src,r=m[0].image)&&y(n,"src",r),$&1&&o!==(o=m[0].name)&&y(n,"alt",o),$&1&&d!==(d=m[0].name+"")&&J(h,d),$&1&&u!==(u=m[0].species+"")&&J(g,u)},i:B,o:B,d(m){m&&A(t)}}}function ge(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class $e extends re{constructor(t){super(),ne(this,t,ge,pe,Y,{character:0})}}function V(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t,n;return t=new $e({props:{character:e[5]}}),{c(){me(t.$$.fragment)},m(r,o){ee(t,r,o),n=!0},p(r,o){const c={};o&1&&(c.character=r[5]),t.$set(c)},i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function ye(e){let t,n,r,o,c,f,d,h,l,v,u,g,m,$,w=e[0],s=[];for(let i=0;i<w.length;i+=1)s[i]=W(V(e,w,i));const oe=i=>K(s[i],1,1,()=>{s[i]=null});return{c(){t=b("h1"),t.textContent="Rick and Morty API",n=C(),r=b("div"),o=b("div"),c=b("button"),f=I("Previous"),h=C(),l=b("button"),l.textContent="Next",v=C(),u=b("div");for(let i=0;i<s.length;i+=1)s[i].c();y(t,"class","title"),y(c,"class","button-84"),c.disabled=d=e[1]===1,y(l,"class","button-84"),y(o,"class","btns"),y(u,"class","grid"),y(r,"class","container")},m(i,_){j(i,t,_),j(i,n,_),j(i,r,_),p(r,o),p(o,c),p(c,f),p(o,h),p(o,l),p(r,v),p(r,u);for(let a=0;a<s.length;a+=1)s[a].m(u,null);g=!0,m||($=[H(c,"click",e[3]),H(l,"click",e[2])],m=!0)},p(i,[_]){if((!g||_&2&&d!==(d=i[1]===1))&&(c.disabled=d),_&1){w=i[0];let a;for(a=0;a<w.length;a+=1){const z=V(i,w,a);s[a]?(s[a].p(z,_),N(s[a],1)):(s[a]=W(z),s[a].c(),N(s[a],1),s[a].m(u,null))}for(de(),a=w.length;a<s.length;a+=1)oe(a);he()}},i(i){if(!g){for(let _=0;_<w.length;_+=1)N(s[_]);g=!0}},o(i){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)K(s[_]);g=!1},d(i){i&&A(t),i&&A(n),i&&A(r),ie(s,i),m=!1,E($)}}}function be(e,t,n){let r=[],o=1;async function c(){const l=await(await fetch(`https://rickandmortyapi.com/api/character?page=${o}`)).json();n(0,r=l.results),console.log("5","data",l)}c();function f(){n(1,o++,o),c()}function d(){n(1,o--,o),c()}return[r,o,f,d]}class ve extends re{constructor(t){super(),ne(this,t,be,ye,Y,{})}}new ve({target:document.getElementById("app")});

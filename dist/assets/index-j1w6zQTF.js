var lc=Object.defineProperty;var cc=(i,e,t)=>e in i?lc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ht=(i,e,t)=>cc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function hc(i){return i!==null?{comment:i,variations:[]}:{variations:[]}}function uc(i,e,t,n,s){const r={move:i,variations:s};return e&&(r.suffix=e),t&&(r.nag=t),n!==null&&(r.comment=n),r}function dc(...i){const[e,...t]=i;let n=e;for(const s of t)s!==null&&(n.variations=[s,...s.variations],s.variations=[],n=s);return e}function fc(i,e){if(e.marker&&e.marker.comment){let t=e.root;for(;;){const n=t.variations[0];if(!n){t.comment=e.marker.comment;break}t=n}}return{headers:i,root:e.root,result:(e.marker&&e.marker.result)??void 0}}function pc(i,e){function t(){this.constructor=i}t.prototype=e.prototype,i.prototype=new t}function Ii(i,e,t,n){var s=Error.call(this,i);return Object.setPrototypeOf&&Object.setPrototypeOf(s,Ii.prototype),s.expected=e,s.found=t,s.location=n,s.name="SyntaxError",s}pc(Ii,Error);function fr(i,e,t){return t=t||" ",i.length>e?i:(e-=i.length,t+=t.repeat(e),i+t.slice(0,e))}Ii.prototype.format=function(i){var e="Error: "+this.message;if(this.location){var t=null,n;for(n=0;n<i.length;n++)if(i[n].source===this.location.source){t=i[n].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,r=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(s):s,a=this.location.source+":"+r.line+":"+r.column;if(t){var o=this.location.end,l=fr("",r.line.toString().length," "),c=t[s.line-1],u=s.line===o.line?o.column:c.length+1,d=u-s.column||1;e+=`
 --> `+a+`
`+l+` |
`+r.line+" | "+c+`
`+l+" | "+fr("",s.column-1," ")+fr("",d,"^")}else e+=`
 at `+a}return e};Ii.buildMessage=function(i,e){var t={literal:function(c){return'"'+s(c.text)+'"'},class:function(c){var u=c.parts.map(function(d){return Array.isArray(d)?r(d[0])+"-"+r(d[1]):r(d)});return"["+(c.inverted?"^":"")+u.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(c){return c.description}};function n(c){return c.charCodeAt(0).toString(16).toUpperCase()}function s(c){return c.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(u){return"\\x0"+n(u)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(u){return"\\x"+n(u)})}function r(c){return c.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(u){return"\\x0"+n(u)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(u){return"\\x"+n(u)})}function a(c){return t[c.type](c)}function o(c){var u=c.map(a),d,h;if(u.sort(),u.length>0){for(d=1,h=1;d<u.length;d++)u[d-1]!==u[d]&&(u[h]=u[d],h++);u.length=h}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}function l(c){return c?'"'+s(c)+'"':"end of input"}return"Expected "+o(i)+" but "+l(e)+" found."};function mc(i,e){e=e!==void 0?e:{};var t={},n=e.grammarSource,s={pgn:Wi},r=Wi,a="[",o='"',l="]",c=".",u="O-O-O",d="O-O",h="0-0-0",p="0-0",_="$",S="{",g="}",f=";",w="(",R=")",M="1-0",A="0-1",b="1/2-1/2",C="*",v=/^[a-zA-Z]/,y=/^[^"]/,U=/^[0-9]/,P=/^[.]/,O=/^[a-zA-Z1-8\-=]/,Y=/^[+#]/,Q=/^[!?]/,z=/^[^}]/,Z=/^[^\r\n]/,q=/^[ \t\r\n]/,te=Vt("tag pair"),se=Mt("[",!1),ve=Mt('"',!1),Ee=Mt("]",!1),be=Vt("tag name"),We=qt([["a","z"],["A","Z"]],!1,!1),lt=Vt("tag value"),$e=qt(['"'],!0,!1),ee=Vt("move number"),he=qt([["0","9"]],!1,!1),re=Mt(".",!1),Le=qt(["."],!1,!1),Ue=Vt("standard algebraic notation"),Re=Mt("O-O-O",!1),ut=Mt("O-O",!1),ke=Mt("0-0-0",!1),et=Mt("0-0",!1),Ye=qt([["a","z"],["A","Z"],["1","8"],"-","="],!1,!1),qe=qt(["+","#"],!1,!1),pt=Vt("suffix annotation"),mt=qt(["!","?"],!1,!1),xt=Vt("NAG"),yt=Mt("$",!1),ct=Vt("brace comment"),gt=Mt("{",!1),F=qt(["}"],!0,!1),Lt=Mt("}",!1),je=Vt("rest of line comment"),E=Mt(";",!1),m=qt(["\r",`
`],!0,!1),k=Vt("variation"),W=Mt("(",!1),K=Mt(")",!1),le=Vt("game termination marker"),fe=Mt("1-0",!1),$=Mt("0-1",!1),j=Mt("1/2-1/2",!1),pe=Mt("*",!1),we=Vt("whitespace"),_e=qt([" ","	","\r",`
`],!1,!1),me=function(T,I){return fc(T,I)},Ce=function(T){return Object.fromEntries(T)},Pe=function(T,I){return[T,I]},Fe=function(T,I){return{root:T,marker:I}},D=function(T,I){return dc(hc(T),...I.flat())},de=function(T,I,N,ie,ae){return uc(T,I,N,ie,ae)},J=function(T){return T},ge=function(T){return T.replace(/[\r\n]+/g," ")},Se=function(T){return T.trim()},ne=function(T){return T},Ae=function(T,I){return{result:T,comment:I}},L=e.peg$currPos|0,tt=[{line:1,column:1}],ze=L,Ot=e.peg$maxFailExpected||[],oe=e.peg$silentFails|0,Jn;if(e.startRule){if(!(e.startRule in s))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');r=s[e.startRule]}function Mt(T,I){return{type:"literal",text:T,ignoreCase:I}}function qt(T,I,N){return{type:"class",parts:T,inverted:I,ignoreCase:N}}function zi(){return{type:"end"}}function Vt(T){return{type:"other",description:T}}function Gi(T){var I=tt[T],N;if(I)return I;if(T>=tt.length)N=tt.length-1;else for(N=T;!tt[--N];);for(I=tt[N],I={line:I.line,column:I.column};N<T;)i.charCodeAt(N)===10?(I.line++,I.column=1):I.column++,N++;return tt[T]=I,I}function Vi(T,I,N){var ie=Gi(T),ae=Gi(I),ce={source:n,start:{offset:T,line:ie.line,column:ie.column},end:{offset:I,line:ae.line,column:ae.column}};return ce}function Te(T){L<ze||(L>ze&&(ze=L,Ot=[]),Ot.push(T))}function Hi(T,I,N){return new Ii(Ii.buildMessage(T,I),T,I,N)}function Wi(){var T,I,N;return T=L,I=gs(),N=vs(),T=me(I,N),T}function gs(){var T,I,N;for(T=L,I=[],N=Qn();N!==t;)I.push(N),N=Qn();return N=ue(),T=Ce(I),T}function Qn(){var T,I,N,ie,ae,ce,Ve;return oe++,T=L,ue(),i.charCodeAt(L)===91?(I=a,L++):(I=t,oe===0&&Te(se)),I!==t?(ue(),N=_s(),N!==t?(ue(),i.charCodeAt(L)===34?(ie=o,L++):(ie=t,oe===0&&Te(ve)),ie!==t?(ae=fi(),i.charCodeAt(L)===34?(ce=o,L++):(ce=t,oe===0&&Te(ve)),ce!==t?(ue(),i.charCodeAt(L)===93?(Ve=l,L++):(Ve=t,oe===0&&Te(Ee)),Ve!==t?T=Pe(N,ae):(L=T,T=t)):(L=T,T=t)):(L=T,T=t)):(L=T,T=t)):(L=T,T=t),oe--,T===t&&oe===0&&Te(te),T}function _s(){var T,I,N;if(oe++,T=L,I=[],N=i.charAt(L),v.test(N)?L++:(N=t,oe===0&&Te(We)),N!==t)for(;N!==t;)I.push(N),N=i.charAt(L),v.test(N)?L++:(N=t,oe===0&&Te(We));else I=t;return I!==t?T=i.substring(T,L):T=I,oe--,T===t&&(I=t,oe===0&&Te(be)),T}function fi(){var T,I,N;for(oe++,T=L,I=[],N=i.charAt(L),y.test(N)?L++:(N=t,oe===0&&Te($e));N!==t;)I.push(N),N=i.charAt(L),y.test(N)?L++:(N=t,oe===0&&Te($e));return T=i.substring(T,L),oe--,I=t,oe===0&&Te(lt),T}function vs(){var T,I,N;return T=L,I=qi(),ue(),N=xe(),N===t&&(N=null),ue(),T=Fe(I,N),T}function qi(){var T,I,N,ie;for(T=L,I=B(),I===t&&(I=null),N=[],ie=xs();ie!==t;)N.push(ie),ie=xs();return T=D(I,N),T}function xs(){var T,I,N,ie,ae,ce,Ve,rt;if(T=L,ue(),hr(),ue(),I=ur(),I!==t){for(N=dr(),N===t&&(N=null),ie=[],ae=x();ae!==t;)ie.push(ae),ae=x();for(ae=ue(),ce=B(),ce===t&&(ce=null),Ve=[],rt=V();rt!==t;)Ve.push(rt),rt=V();T=de(I,N,ie,ce,Ve)}else L=T,T=t;return T}function hr(){var T,I,N,ie,ae,ce;for(oe++,T=L,I=[],N=i.charAt(L),U.test(N)?L++:(N=t,oe===0&&Te(he));N!==t;)I.push(N),N=i.charAt(L),U.test(N)?L++:(N=t,oe===0&&Te(he));if(i.charCodeAt(L)===46?(N=c,L++):(N=t,oe===0&&Te(re)),N!==t){for(ie=ue(),ae=[],ce=i.charAt(L),P.test(ce)?L++:(ce=t,oe===0&&Te(Le));ce!==t;)ae.push(ce),ce=i.charAt(L),P.test(ce)?L++:(ce=t,oe===0&&Te(Le));I=[I,N,ie,ae],T=I}else L=T,T=t;return oe--,T===t&&(I=t,oe===0&&Te(ee)),T}function ur(){var T,I,N,ie,ae,ce;if(oe++,T=L,I=L,i.substr(L,5)===u?(N=u,L+=5):(N=t,oe===0&&Te(Re)),N===t&&(i.substr(L,3)===d?(N=d,L+=3):(N=t,oe===0&&Te(ut)),N===t&&(i.substr(L,5)===h?(N=h,L+=5):(N=t,oe===0&&Te(ke)),N===t&&(i.substr(L,3)===p?(N=p,L+=3):(N=t,oe===0&&Te(et)),N===t))))if(N=L,ie=i.charAt(L),v.test(ie)?L++:(ie=t,oe===0&&Te(We)),ie!==t){if(ae=[],ce=i.charAt(L),O.test(ce)?L++:(ce=t,oe===0&&Te(Ye)),ce!==t)for(;ce!==t;)ae.push(ce),ce=i.charAt(L),O.test(ce)?L++:(ce=t,oe===0&&Te(Ye));else ae=t;ae!==t?(ie=[ie,ae],N=ie):(L=N,N=t)}else L=N,N=t;return N!==t?(ie=i.charAt(L),Y.test(ie)?L++:(ie=t,oe===0&&Te(qe)),ie===t&&(ie=null),N=[N,ie],I=N):(L=I,I=t),I!==t?T=i.substring(T,L):T=I,oe--,T===t&&(I=t,oe===0&&Te(Ue)),T}function dr(){var T,I,N;for(oe++,T=L,I=[],N=i.charAt(L),Q.test(N)?L++:(N=t,oe===0&&Te(mt));N!==t;)I.push(N),I.length>=2?N=t:(N=i.charAt(L),Q.test(N)?L++:(N=t,oe===0&&Te(mt)));return I.length<1?(L=T,T=t):T=I,oe--,T===t&&(I=t,oe===0&&Te(pt)),T}function x(){var T,I,N,ie,ae;if(oe++,T=L,ue(),i.charCodeAt(L)===36?(I=_,L++):(I=t,oe===0&&Te(yt)),I!==t){if(N=L,ie=[],ae=i.charAt(L),U.test(ae)?L++:(ae=t,oe===0&&Te(he)),ae!==t)for(;ae!==t;)ie.push(ae),ae=i.charAt(L),U.test(ae)?L++:(ae=t,oe===0&&Te(he));else ie=t;ie!==t?N=i.substring(N,L):N=ie,N!==t?T=J(N):(L=T,T=t)}else L=T,T=t;return oe--,T===t&&oe===0&&Te(xt),T}function B(){var T;return T=X(),T===t&&(T=G()),T}function X(){var T,I,N,ie,ae;if(oe++,T=L,i.charCodeAt(L)===123?(I=S,L++):(I=t,oe===0&&Te(gt)),I!==t){for(N=L,ie=[],ae=i.charAt(L),z.test(ae)?L++:(ae=t,oe===0&&Te(F));ae!==t;)ie.push(ae),ae=i.charAt(L),z.test(ae)?L++:(ae=t,oe===0&&Te(F));N=i.substring(N,L),i.charCodeAt(L)===125?(ie=g,L++):(ie=t,oe===0&&Te(Lt)),ie!==t?T=ge(N):(L=T,T=t)}else L=T,T=t;return oe--,T===t&&(I=t,oe===0&&Te(ct)),T}function G(){var T,I,N,ie,ae;if(oe++,T=L,i.charCodeAt(L)===59?(I=f,L++):(I=t,oe===0&&Te(E)),I!==t){for(N=L,ie=[],ae=i.charAt(L),Z.test(ae)?L++:(ae=t,oe===0&&Te(m));ae!==t;)ie.push(ae),ae=i.charAt(L),Z.test(ae)?L++:(ae=t,oe===0&&Te(m));N=i.substring(N,L),T=Se(N)}else L=T,T=t;return oe--,T===t&&(I=t,oe===0&&Te(je)),T}function V(){var T,I,N,ie;return oe++,T=L,ue(),i.charCodeAt(L)===40?(I=w,L++):(I=t,oe===0&&Te(W)),I!==t?(N=qi(),N!==t?(ue(),i.charCodeAt(L)===41?(ie=R,L++):(ie=t,oe===0&&Te(K)),ie!==t?T=ne(N):(L=T,T=t)):(L=T,T=t)):(L=T,T=t),oe--,T===t&&oe===0&&Te(k),T}function xe(){var T,I,N;return oe++,T=L,i.substr(L,3)===M?(I=M,L+=3):(I=t,oe===0&&Te(fe)),I===t&&(i.substr(L,3)===A?(I=A,L+=3):(I=t,oe===0&&Te($)),I===t&&(i.substr(L,7)===b?(I=b,L+=7):(I=t,oe===0&&Te(j)),I===t&&(i.charCodeAt(L)===42?(I=C,L++):(I=t,oe===0&&Te(pe))))),I!==t?(ue(),N=B(),N===t&&(N=null),T=Ae(I,N)):(L=T,T=t),oe--,T===t&&(I=t,oe===0&&Te(le)),T}function ue(){var T,I;for(oe++,T=[],I=i.charAt(L),q.test(I)?L++:(I=t,oe===0&&Te(_e));I!==t;)T.push(I),I=i.charAt(L),q.test(I)?L++:(I=t,oe===0&&Te(_e));return oe--,I=t,oe===0&&Te(we),T}if(Jn=r(),e.peg$library)return{peg$result:Jn,peg$currPos:L,peg$FAILED:t,peg$maxFailExpected:Ot,peg$maxFailPos:ze};if(Jn!==t&&L===i.length)return Jn;throw Jn!==t&&L<i.length&&Te(zi()),Hi(Ot,ze<i.length?i.charAt(ze):null,ze<i.length?Vi(ze,ze+1):Vi(ze,ze))}/**
 * @license
 * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */const Ws=0xffffffffffffffffn;function pr(i,e){return(i<<e|i>>64n-e)&0xffffffffffffffffn}function _o(i,e){return i*e&Ws}function gc(i){return function(){let e=BigInt(i&Ws),t=BigInt(i>>64n&Ws);const n=_o(pr(_o(e,5n),7n),9n);return t^=e,e=(pr(e,24n)^t^t<<16n)&Ws,t=pr(t,37n),i=t<<64n|e,n}}const rr=gc(0xa187eb39cdcaed8f31c4b365b102e01en),_c=Array.from({length:2},()=>Array.from({length:6},()=>Array.from({length:128},()=>rr()))),vc=Array.from({length:8},()=>rr()),xc=Array.from({length:16},()=>rr()),mr=rr(),Ut="w",Zt="b",Et="p",ea="n",qs="b",ns="r",Xn="q",bt="k",gr="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";class Ms{constructor(e,t){ht(this,"color");ht(this,"from");ht(this,"to");ht(this,"piece");ht(this,"captured");ht(this,"promotion");ht(this,"flags");ht(this,"san");ht(this,"lan");ht(this,"before");ht(this,"after");const{color:n,piece:s,from:r,to:a,flags:o,captured:l,promotion:c}=t,u=Ct(r),d=Ct(a);this.color=n,this.piece=s,this.from=u,this.to=d,this.san=e._moveToSan(t,e._moves({legal:!0})),this.lan=u+d,this.before=e.fen(),e._makeMove(t),this.after=e.fen(),e._undoMove(),this.flags="";for(const h in Ne)Ne[h]&o&&(this.flags+=jn[h]);l&&(this.captured=l),c&&(this.promotion=c,this.lan+=c)}isCapture(){return this.flags.indexOf(jn.CAPTURE)>-1}isPromotion(){return this.flags.indexOf(jn.PROMOTION)>-1}isEnPassant(){return this.flags.indexOf(jn.EP_CAPTURE)>-1}isKingsideCastle(){return this.flags.indexOf(jn.KSIDE_CASTLE)>-1}isQueensideCastle(){return this.flags.indexOf(jn.QSIDE_CASTLE)>-1}isBigPawn(){return this.flags.indexOf(jn.BIG_PAWN)>-1}}const Rt=-1,jn={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q",NULL_MOVE:"-"},Ne={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64,NULL_MOVE:128},ta={Event:"?",Site:"?",Date:"????.??.??",Round:"?",White:"?",Black:"?",Result:"*"},Mc={WhiteTitle:null,BlackTitle:null,WhiteElo:null,BlackElo:null,WhiteUSCF:null,BlackUSCF:null,WhiteNA:null,BlackNA:null,WhiteType:null,BlackType:null,EventDate:null,EventSponsor:null,Section:null,Stage:null,Board:null,Opening:null,Variation:null,SubVariation:null,ECO:null,NIC:null,Time:null,UTCTime:null,UTCDate:null,TimeControl:null,SetUp:null,FEN:null,Termination:null,Annotator:null,Mode:null,PlyCount:null},Sc={...ta,...Mc},De={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},_r={b:[16,32,17,15],w:[-16,-32,-17,-15]},vo={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},Ec=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],yc=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],bc={p:1,n:2,b:4,r:8,q:16,k:32},Tc="pnbrqkPNBRQK",xo=[ea,qs,ns,Xn],Ac=7,wc=6,Cc=1,Rc=0,Ss={[bt]:Ne.KSIDE_CASTLE,[Xn]:Ne.QSIDE_CASTLE},Bn={w:[{square:De.a1,flag:Ne.QSIDE_CASTLE},{square:De.h1,flag:Ne.KSIDE_CASTLE}],b:[{square:De.a8,flag:Ne.QSIDE_CASTLE},{square:De.h8,flag:Ne.KSIDE_CASTLE}]},Pc={b:Cc,w:wc},vr="--";function ci(i){return i>>4}function cs(i){return i&15}function bl(i){return"0123456789".indexOf(i)!==-1}function Ct(i){const e=cs(i),t=ci(i);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function Xi(i){return i===Ut?Zt:Ut}function Lc(i){const e=i.split(/\s+/);if(e.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const t=parseInt(e[5],10);if(isNaN(t)||t<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const n=parseInt(e[4],10);if(isNaN(n)||n<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const s=e[0].split("/");if(s.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let a=0;a<s.length;a++){let o=0,l=!1;for(let c=0;c<s[a].length;c++)if(bl(s[a][c])){if(l)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};o+=parseInt(s[a][c],10),l=!0}else{if(!/^[prnbqkPRNBQK]$/.test(s[a][c]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};o+=1,l=!1}if(o!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(e[3][1]=="3"&&e[1]=="w"||e[3][1]=="6"&&e[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const r=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:a,regex:o}of r){if(!o.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${a} king`};if((e[0].match(o)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${a} kings`}}return Array.from(s[0]+s[7]).some(a=>a.toUpperCase()==="P")?{ok:!1,error:"Invalid FEN: some pawns are on the edge rows"}:{ok:!0}}function Dc(i,e){const t=i.from,n=i.to,s=i.piece;let r=0,a=0,o=0;for(let l=0,c=e.length;l<c;l++){const u=e[l].from,d=e[l].to,h=e[l].piece;s===h&&t!==u&&n===d&&(r++,ci(t)===ci(u)&&a++,cs(t)===cs(u)&&o++)}return r>0?a>0&&o>0?Ct(t):o>0?Ct(t).charAt(1):Ct(t).charAt(0):""}function On(i,e,t,n,s,r=void 0,a=Ne.NORMAL){const o=ci(n);if(s===Et&&(o===Ac||o===Rc))for(let l=0;l<xo.length;l++){const c=xo[l];i.push({color:e,from:t,to:n,piece:s,captured:r,promotion:c,flags:a|Ne.PROMOTION})}else i.push({color:e,from:t,to:n,piece:s,captured:r,flags:a})}function Mo(i){let e=i.charAt(0);return e>="a"&&e<="h"?i.match(/[a-h]\d.*[a-h]\d/)?void 0:Et:(e=e.toLowerCase(),e==="o"?bt:e)}function xr(i){return i.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class is{constructor(e=gr,{skipValidation:t=!1}={}){ht(this,"_board",new Array(128));ht(this,"_turn",Ut);ht(this,"_header",{});ht(this,"_kings",{w:Rt,b:Rt});ht(this,"_epSquare",-1);ht(this,"_halfMoves",0);ht(this,"_moveNumber",0);ht(this,"_history",[]);ht(this,"_comments",{});ht(this,"_castling",{w:0,b:0});ht(this,"_hash",0n);ht(this,"_positionCount",new Map);this.load(e,{skipValidation:t})}clear({preserveHeaders:e=!1}={}){this._board=new Array(128),this._kings={w:Rt,b:Rt},this._turn=Ut,this._castling={w:0,b:0},this._epSquare=Rt,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{...Sc},this._hash=this._computeHash(),this._positionCount=new Map,this._header.SetUp=null,this._header.FEN=null}load(e,{skipValidation:t=!1,preserveHeaders:n=!1}={}){let s=e.split(/\s+/);if(s.length>=2&&s.length<6){const o=["-","-","0","1"];e=s.concat(o.slice(-(6-s.length))).join(" ")}if(s=e.split(/\s+/),!t){const{ok:o,error:l}=Lc(e);if(!o)throw new Error(l)}const r=s[0];let a=0;this.clear({preserveHeaders:n});for(let o=0;o<r.length;o++){const l=r.charAt(o);if(l==="/")a+=8;else if(bl(l))a+=parseInt(l,10);else{const c=l<"a"?Ut:Zt;this._put({type:l.toLowerCase(),color:c},Ct(a)),a++}}this._turn=s[1],s[2].indexOf("K")>-1&&(this._castling.w|=Ne.KSIDE_CASTLE),s[2].indexOf("Q")>-1&&(this._castling.w|=Ne.QSIDE_CASTLE),s[2].indexOf("k")>-1&&(this._castling.b|=Ne.KSIDE_CASTLE),s[2].indexOf("q")>-1&&(this._castling.b|=Ne.QSIDE_CASTLE),this._epSquare=s[3]==="-"?Rt:De[s[3]],this._halfMoves=parseInt(s[4],10),this._moveNumber=parseInt(s[5],10),this._hash=this._computeHash(),this._updateSetup(e),this._incPositionCount()}fen({forceEnpassantSquare:e=!1}={}){var a,o;let t=0,n="";for(let l=De.a8;l<=De.h1;l++){if(this._board[l]){t>0&&(n+=t,t=0);const{color:c,type:u}=this._board[l];n+=c===Ut?u.toUpperCase():u.toLowerCase()}else t++;l+1&136&&(t>0&&(n+=t),l!==De.h1&&(n+="/"),t=0,l+=8)}let s="";this._castling[Ut]&Ne.KSIDE_CASTLE&&(s+="K"),this._castling[Ut]&Ne.QSIDE_CASTLE&&(s+="Q"),this._castling[Zt]&Ne.KSIDE_CASTLE&&(s+="k"),this._castling[Zt]&Ne.QSIDE_CASTLE&&(s+="q"),s=s||"-";let r="-";if(this._epSquare!==Rt)if(e)r=Ct(this._epSquare);else{const l=this._epSquare+(this._turn===Ut?16:-16),c=[l+1,l-1];for(const u of c){if(u&136)continue;const d=this._turn;if(((a=this._board[u])==null?void 0:a.color)===d&&((o=this._board[u])==null?void 0:o.type)===Et){this._makeMove({color:d,from:u,to:this._epSquare,piece:Et,captured:Et,flags:Ne.EP_CAPTURE});const h=!this._isKingAttacked(d);if(this._undoMove(),h){r=Ct(this._epSquare);break}}}}return[n,this._turn,s,r,this._halfMoves,this._moveNumber].join(" ")}_pieceKey(e){if(!this._board[e])return 0n;const{color:t,type:n}=this._board[e],s={w:0,b:1}[t],r={p:0,n:1,b:2,r:3,q:4,k:5}[n];return _c[s][r][e]}_epKey(){return this._epSquare===Rt?0n:vc[this._epSquare&7]}_castlingKey(){const e=this._castling.w>>5|this._castling.b>>3;return xc[e]}_computeHash(){let e=0n;for(let t=De.a8;t<=De.h1;t++){if(t&136){t+=7;continue}this._board[t]&&(e^=this._pieceKey(t))}return e^=this._epKey(),e^=this._castlingKey(),this._turn==="b"&&(e^=mr),e}_updateSetup(e){this._history.length>0||(e!==gr?(this._header.SetUp="1",this._header.FEN=e):(this._header.SetUp=null,this._header.FEN=null))}reset(){this.load(gr)}get(e){return this._board[De[e]]}findPiece(e){var n;const t=[];for(let s=De.a8;s<=De.h1;s++){if(s&136){s+=7;continue}!this._board[s]||((n=this._board[s])==null?void 0:n.color)!==e.color||this._board[s].color===e.color&&this._board[s].type===e.type&&t.push(Ct(s))}return t}put({type:e,color:t},n){return this._put({type:e,color:t},n)?(this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),!0):!1}_set(e,t){this._hash^=this._pieceKey(e),this._board[e]=t,this._hash^=this._pieceKey(e)}_put({type:e,color:t},n){if(Tc.indexOf(e.toLowerCase())===-1||!(n in De))return!1;const s=De[n];if(e==bt&&!(this._kings[t]==Rt||this._kings[t]==s))return!1;const r=this._board[s];return r&&r.type===bt&&(this._kings[r.color]=Rt),this._set(s,{type:e,color:t}),e===bt&&(this._kings[t]=s),!0}_clear(e){this._hash^=this._pieceKey(e),delete this._board[e]}remove(e){const t=this.get(e);return this._clear(De[e]),t&&t.type===bt&&(this._kings[t.color]=Rt),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),t}_updateCastlingRights(){var n,s,r,a,o,l,c,u,d,h,p,_;this._hash^=this._castlingKey();const e=((n=this._board[De.e1])==null?void 0:n.type)===bt&&((s=this._board[De.e1])==null?void 0:s.color)===Ut,t=((r=this._board[De.e8])==null?void 0:r.type)===bt&&((a=this._board[De.e8])==null?void 0:a.color)===Zt;(!e||((o=this._board[De.a1])==null?void 0:o.type)!==ns||((l=this._board[De.a1])==null?void 0:l.color)!==Ut)&&(this._castling.w&=-65),(!e||((c=this._board[De.h1])==null?void 0:c.type)!==ns||((u=this._board[De.h1])==null?void 0:u.color)!==Ut)&&(this._castling.w&=-33),(!t||((d=this._board[De.a8])==null?void 0:d.type)!==ns||((h=this._board[De.a8])==null?void 0:h.color)!==Zt)&&(this._castling.b&=-65),(!t||((p=this._board[De.h8])==null?void 0:p.type)!==ns||((_=this._board[De.h8])==null?void 0:_.color)!==Zt)&&(this._castling.b&=-33),this._hash^=this._castlingKey()}_updateEnPassantSquare(){var r,a;if(this._epSquare===Rt)return;const e=this._epSquare+(this._turn===Ut?-16:16),t=this._epSquare+(this._turn===Ut?16:-16),n=[t+1,t-1];if(this._board[e]!==null||this._board[this._epSquare]!==null||((r=this._board[t])==null?void 0:r.color)!==Xi(this._turn)||((a=this._board[t])==null?void 0:a.type)!==Et){this._hash^=this._epKey(),this._epSquare=Rt;return}const s=o=>{var l,c;return!(o&136)&&((l=this._board[o])==null?void 0:l.color)===this._turn&&((c=this._board[o])==null?void 0:c.type)===Et};n.some(s)||(this._hash^=this._epKey(),this._epSquare=Rt)}_attacked(e,t,n){const s=[];for(let r=De.a8;r<=De.h1;r++){if(r&136){r+=7;continue}if(this._board[r]===void 0||this._board[r].color!==e)continue;const a=this._board[r],o=r-t;if(o===0)continue;const l=o+119;if(Ec[l]&bc[a.type]){if(a.type===Et){if(o>0&&a.color===Ut||o<=0&&a.color===Zt)if(n)s.push(Ct(r));else return!0;continue}if(a.type==="n"||a.type==="k")if(n){s.push(Ct(r));continue}else return!0;const c=yc[l];let u=r+c,d=!1;for(;u!==t;){if(this._board[u]!=null){d=!0;break}u+=c}if(!d)if(n){s.push(Ct(r));continue}else return!0}}return n?s:!1}attackers(e,t){return t?this._attacked(t,De[e],!0):this._attacked(this._turn,De[e],!0)}_isKingAttacked(e){const t=this._kings[e];return t===-1?!1:this._attacked(Xi(e),t)}hash(){return this._hash.toString(16)}isAttacked(e,t){return this._attacked(t,De[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let n=0,s=0;for(let r=De.a8;r<=De.h1;r++){if(s=(s+1)%2,r&136){r+=7;continue}const a=this._board[r];a&&(e[a.type]=a.type in e?e[a.type]+1:1,a.type===qs&&t.push(s),n++)}if(n===2)return!0;if(n===3&&(e[qs]===1||e[ea]===1))return!0;if(n===e[qs]+2){let r=0;const a=t.length;for(let o=0;o<a;o++)r+=t[o];if(r===0||r===a)return!0}return!1}isThreefoldRepetition(){return this._getPositionCount(this._hash)>=3}isDrawByFiftyMoves(){return this._halfMoves>=100}isDraw(){return this.isDrawByFiftyMoves()||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0,piece:n=void 0}={}){const s=this._moves({square:t,piece:n});return e?s.map(r=>new Ms(this,r)):s.map(r=>this._moveToSan(r,s))}_moves({legal:e=!0,piece:t=void 0,square:n=void 0}={}){var p;const s=n?n.toLowerCase():void 0,r=t==null?void 0:t.toLowerCase(),a=[],o=this._turn,l=Xi(o);let c=De.a8,u=De.h1,d=!1;if(s)if(s in De)c=u=De[s],d=!0;else return[];for(let _=c;_<=u;_++){if(_&136){_+=7;continue}if(!this._board[_]||this._board[_].color===l)continue;const{type:S}=this._board[_];let g;if(S===Et){if(r&&r!==S)continue;g=_+_r[o][0],this._board[g]||(On(a,o,_,g,Et),g=_+_r[o][1],Pc[o]===ci(_)&&!this._board[g]&&On(a,o,_,g,Et,void 0,Ne.BIG_PAWN));for(let f=2;f<4;f++)g=_+_r[o][f],!(g&136)&&(((p=this._board[g])==null?void 0:p.color)===l?On(a,o,_,g,Et,this._board[g].type,Ne.CAPTURE):g===this._epSquare&&On(a,o,_,g,Et,Et,Ne.EP_CAPTURE))}else{if(r&&r!==S)continue;for(let f=0,w=vo[S].length;f<w;f++){const R=vo[S][f];for(g=_;g+=R,!(g&136);){if(!this._board[g])On(a,o,_,g,S);else{if(this._board[g].color===o)break;On(a,o,_,g,S,this._board[g].type,Ne.CAPTURE);break}if(S===ea||S===bt)break}}}}if((r===void 0||r===bt)&&(!d||u===this._kings[o])){if(this._castling[o]&Ne.KSIDE_CASTLE){const _=this._kings[o],S=_+2;!this._board[_+1]&&!this._board[S]&&!this._attacked(l,this._kings[o])&&!this._attacked(l,_+1)&&!this._attacked(l,S)&&On(a,o,this._kings[o],S,bt,void 0,Ne.KSIDE_CASTLE)}if(this._castling[o]&Ne.QSIDE_CASTLE){const _=this._kings[o],S=_-2;!this._board[_-1]&&!this._board[_-2]&&!this._board[_-3]&&!this._attacked(l,this._kings[o])&&!this._attacked(l,_-1)&&!this._attacked(l,S)&&On(a,o,this._kings[o],S,bt,void 0,Ne.QSIDE_CASTLE)}}if(!e||this._kings[o]===-1)return a;const h=[];for(let _=0,S=a.length;_<S;_++)this._makeMove(a[_]),this._isKingAttacked(o)||h.push(a[_]),this._undoMove();return h}move(e,{strict:t=!1}={}){let n=null;if(typeof e=="string")n=this._moveFromSan(e,t);else if(e===null)n=this._moveFromSan(vr,t);else if(typeof e=="object"){const r=this._moves();for(let a=0,o=r.length;a<o;a++)if(e.from===Ct(r[a].from)&&e.to===Ct(r[a].to)&&(!("promotion"in r[a])||e.promotion===r[a].promotion)){n=r[a];break}}if(!n)throw typeof e=="string"?new Error(`Invalid move: ${e}`):new Error(`Invalid move: ${JSON.stringify(e)}`);if(this.isCheck()&&n.flags&Ne.NULL_MOVE)throw new Error("Null move not allowed when in check");const s=new Ms(this,n);return this._makeMove(n),this._incPositionCount(),s}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_movePiece(e,t){this._hash^=this._pieceKey(e),this._board[t]=this._board[e],delete this._board[e],this._hash^=this._pieceKey(t)}_makeMove(e){var s,r,a,o;const t=this._turn,n=Xi(t);if(this._push(e),e.flags&Ne.NULL_MOVE){t===Zt&&this._moveNumber++,this._halfMoves++,this._turn=n,this._epSquare=Rt;return}if(this._hash^=this._epKey(),this._hash^=this._castlingKey(),e.captured&&(this._hash^=this._pieceKey(e.to)),this._movePiece(e.from,e.to),e.flags&Ne.EP_CAPTURE&&(this._turn===Zt?this._clear(e.to-16):this._clear(e.to+16)),e.promotion&&(this._clear(e.to),this._set(e.to,{type:e.promotion,color:t})),this._board[e.to].type===bt){if(this._kings[t]=e.to,e.flags&Ne.KSIDE_CASTLE){const l=e.to-1,c=e.to+1;this._movePiece(c,l)}else if(e.flags&Ne.QSIDE_CASTLE){const l=e.to+1,c=e.to-2;this._movePiece(c,l)}this._castling[t]=0}if(this._castling[t]){for(let l=0,c=Bn[t].length;l<c;l++)if(e.from===Bn[t][l].square&&this._castling[t]&Bn[t][l].flag){this._castling[t]^=Bn[t][l].flag;break}}if(this._castling[n]){for(let l=0,c=Bn[n].length;l<c;l++)if(e.to===Bn[n][l].square&&this._castling[n]&Bn[n][l].flag){this._castling[n]^=Bn[n][l].flag;break}}if(this._hash^=this._castlingKey(),e.flags&Ne.BIG_PAWN){let l;t===Zt?l=e.to-16:l=e.to+16,!(e.to-1&136)&&((s=this._board[e.to-1])==null?void 0:s.type)===Et&&((r=this._board[e.to-1])==null?void 0:r.color)===n||!(e.to+1&136)&&((a=this._board[e.to+1])==null?void 0:a.type)===Et&&((o=this._board[e.to+1])==null?void 0:o.color)===n?(this._epSquare=l,this._hash^=this._epKey()):this._epSquare=Rt}else this._epSquare=Rt;e.piece===Et?this._halfMoves=0:e.flags&(Ne.CAPTURE|Ne.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===Zt&&this._moveNumber++,this._turn=n,this._hash^=mr}undo(){const e=this._hash,t=this._undoMove();if(t){const n=new Ms(this,t);return this._decPositionCount(e),n}return null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;this._hash^=this._epKey(),this._hash^=this._castlingKey();const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber,this._hash^=this._epKey(),this._hash^=this._castlingKey(),this._hash^=mr;const n=this._turn,s=Xi(n);if(t.flags&Ne.NULL_MOVE)return t;if(this._movePiece(t.to,t.from),t.piece&&(this._clear(t.from),this._set(t.from,{type:t.piece,color:n})),t.captured)if(t.flags&Ne.EP_CAPTURE){let r;n===Zt?r=t.to-16:r=t.to+16,this._set(r,{type:Et,color:s})}else this._set(t.to,{type:t.captured,color:s});if(t.flags&(Ne.KSIDE_CASTLE|Ne.QSIDE_CASTLE)){let r,a;t.flags&Ne.KSIDE_CASTLE?(r=t.to+1,a=t.to-1):(r=t.to-2,a=t.to+1),this._movePiece(a,r)}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const n=[];let s=!1;for(const h in this._header)this._header[h]&&n.push(`[${h} "${this._header[h]}"]`+e),s=!0;s&&this._history.length&&n.push(e);const r=h=>{const p=this._comments[this.fen()];if(typeof p<"u"){const _=h.length>0?" ":"";h=`${h}${_}{${p}}`}return h},a=[];for(;this._history.length>0;)a.push(this._undoMove());const o=[];let l="";for(a.length===0&&o.push(r(""));a.length>0;){l=r(l);const h=a.pop();if(!h)break;if(!this._history.length&&h.color==="b"){const p=`${this._moveNumber}. ...`;l=l?`${l} ${p}`:p}else h.color==="w"&&(l.length&&o.push(l),l=this._moveNumber+".");l=l+" "+this._moveToSan(h,this._moves({legal:!0})),this._makeMove(h)}if(l.length&&o.push(r(l)),o.push(this._header.Result||"*"),t===0)return n.join("")+o.join(" ");const c=function(){return n.length>0&&n[n.length-1]===" "?(n.pop(),!0):!1},u=function(h,p){for(const _ of p.split(" "))if(_){if(h+_.length>t){for(;c();)h--;n.push(e),h=0}n.push(_),h+=_.length,n.push(" "),h++}return c()&&h--,h};let d=0;for(let h=0;h<o.length;h++){if(d+o[h].length>t&&o[h].includes("{")){d=u(d,o[h]);continue}d+o[h].length>t&&h!==0?(n[n.length-1]===" "&&n.pop(),n.push(e),d=0):h!==0&&(n.push(" "),d++),n.push(o[h]),d+=o[h].length}return n.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}setHeader(e,t){return this._header[e]=t??ta[e]??null,this.getHeaders()}removeHeader(e){return e in this._header?(this._header[e]=ta[e]||null,!0):!1}getHeaders(){const e={};for(const[t,n]of Object.entries(this._header))n!==null&&(e[t]=n);return e}loadPgn(e,{strict:t=!1,newlineChar:n=`\r?
`}={}){n!==`\r?
`&&(e=e.replace(new RegExp(n,"g"),`
`));const s=mc(e);this.reset();const r=s.headers;let a="";for(const c in r)c.toLowerCase()==="fen"&&(a=r[c]),this.header(c,r[c]);if(!t)a&&this.load(a,{preserveHeaders:!0});else if(r.SetUp==="1"){if(!("FEN"in r))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(r.FEN,{preserveHeaders:!0})}let o=s.root;for(;o;){if(o.move){const c=this._moveFromSan(o.move,t);if(c==null)throw new Error(`Invalid move in PGN: ${o.move}`);this._makeMove(c),this._incPositionCount()}o.comment!==void 0&&(this._comments[this.fen()]=o.comment),o=o.variations[0]}const l=s.result;l&&Object.keys(this._header).length&&this._header.Result!==l&&this.setHeader("Result",l)}_moveToSan(e,t){let n="";if(e.flags&Ne.KSIDE_CASTLE)n="O-O";else if(e.flags&Ne.QSIDE_CASTLE)n="O-O-O";else{if(e.flags&Ne.NULL_MOVE)return vr;if(e.piece!==Et){const s=Dc(e,t);n+=e.piece.toUpperCase()+s}e.flags&(Ne.CAPTURE|Ne.EP_CAPTURE)&&(e.piece===Et&&(n+=Ct(e.from)[0]),n+="x"),n+=Ct(e.to),e.promotion&&(n+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?n+="#":n+="+"),this._undoMove(),n}_moveFromSan(e,t=!1){let n=xr(e);if(t||(n==="0-0"?n="O-O":n==="0-0-0"&&(n="O-O-O")),n==vr)return{color:this._turn,from:0,to:0,piece:"k",flags:Ne.NULL_MOVE};let s=Mo(n),r=this._moves({legal:!0,piece:s});for(let h=0,p=r.length;h<p;h++)if(n===xr(this._moveToSan(r[h],r)))return r[h];if(t)return null;let a,o,l,c,u,d=!1;if(o=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),o?(a=o[1],l=o[2],c=o[3],u=o[4],l.length==1&&(d=!0)):(o=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),o&&(a=o[1],l=o[2],c=o[3],u=o[4],l.length==1&&(d=!0))),s=Mo(n),r=this._moves({legal:!0,piece:a||s}),!c)return null;for(let h=0,p=r.length;h<p;h++)if(l){if((!a||a.toLowerCase()==r[h].piece)&&De[l]==r[h].from&&De[c]==r[h].to&&(!u||u.toLowerCase()==r[h].promotion))return r[h];if(d){const _=Ct(r[h].from);if((!a||a.toLowerCase()==r[h].piece)&&De[c]==r[h].to&&(l==_[0]||l==_[1])&&(!u||u.toLowerCase()==r[h].promotion))return r[h]}}else if(n===xr(this._moveToSan(r[h],r)).replace("x",""))return r[h];return null}ascii(){let e=`   +------------------------+
`;for(let t=De.a8;t<=De.h1;t++){if(cs(t)===0&&(e+=" "+"87654321"[ci(t)]+" |"),this._board[t]){const n=this._board[t].type,r=this._board[t].color===Ut?n.toUpperCase():n.toLowerCase();e+=" "+r+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let n=0;const s=this._turn;for(let r=0,a=t.length;r<a;r++)this._makeMove(t[r]),this._isKingAttacked(s)||(e-1>0?n+=this.perft(e-1):n++),this._undoMove();return n}setTurn(e){return this._turn==e?!1:(this.move("--"),!0)}turn(){return this._turn}board(){const e=[];let t=[];for(let n=De.a8;n<=De.h1;n++)this._board[n]==null?t.push(null):t.push({square:Ct(n),type:this._board[n].type,color:this._board[n].color}),n+1&136&&(e.push(t),t=[],n+=8);return e}squareColor(e){if(e in De){const t=De[e];return(ci(t)+cs(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],n=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const s=t.pop();if(!s)break;e?n.push(new Ms(this,s)):n.push(this._moveToSan(s,this._moves())),this._makeMove(s)}return n}_getPositionCount(e){return this._positionCount.get(e)??0}_incPositionCount(){this._positionCount.set(this._hash,(this._positionCount.get(this._hash)??0)+1)}_decPositionCount(e){const t=this._positionCount.get(e)??0;t===1?this._positionCount.delete(e):this._positionCount.set(e,t-1)}_pruneComments(){const e=[],t={},n=s=>{s in this._comments&&(t[s]=this._comments[s])};for(;this._history.length>0;)e.push(this._undoMove());for(n(this.fen());;){const s=e.pop();if(!s)break;this._makeMove(s),n(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){return this.removeComment()}removeComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this.removeComments()}removeComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}setCastlingRights(e,t){for(const s of[bt,Xn])t[s]!==void 0&&(t[s]?this._castling[e]|=Ss[s]:this._castling[e]&=~Ss[s]);this._updateCastlingRights();const n=this.getCastlingRights(e);return(t[bt]===void 0||t[bt]===n[bt])&&(t[Xn]===void 0||t[Xn]===n[Xn])}getCastlingRights(e){return{[bt]:(this._castling[e]&Ss[bt])!==0,[Xn]:(this._castling[e]&Ss[Xn])!==0}}moveNumber(){return this._moveNumber}}class Ic{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playMoveSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(40,e+.18),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.18);const s=this.ctx.sampleRate*.15,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=400;const c=this.ctx.createGain();c.gain.setValueAtTime(.2,e),c.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),o.connect(l),l.connect(c),c.connect(this.ctx.destination),t.start(e),o.start(e),t.stop(e+.18),o.stop(e+.15)}playSpellSelectSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(523.25,e),t.frequency.exponentialRampToValueAtTime(1046.5,e+.2),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.2)}playCaptureSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(30,e+.35),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.35);const s=this.ctx.sampleRate*.3,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let c=0;c<s;c++)a[c]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createGain();l.gain.setValueAtTime(.4,e),l.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.ctx.destination),o.connect(l),l.connect(this.ctx.destination),t.start(e),o.start(e),t.stop(e+.35),o.stop(e+.3)}playCheckSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[440,554.37,659.25].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+s*.05),a.gain.setValueAtTime(.2,e+s*.05),a.gain.exponentialRampToValueAtTime(.001,e+s*.05+.4),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.05),r.stop(e+s*.05+.4)})}playPuzzleSuccessSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.08),a.gain.setValueAtTime(.25,e+s*.08),a.gain.exponentialRampToValueAtTime(.001,e+s*.08+.5),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.08),r.stop(e+s*.08+.5)})}playVictoryFanfare(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.1),a.gain.setValueAtTime(.3,e+s*.1),a.gain.exponentialRampToValueAtTime(.001,e+s*.1+.8),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.1),r.stop(e+s*.1+.8)})}playDefeatSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[440,415.3,392,349.23].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(n,e+s*.15),a.gain.setValueAtTime(.25,e+s*.15),a.gain.exponentialRampToValueAtTime(.001,e+s*.15+.6),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.15),r.stop(e+s*.15+.6)})}speakExplanation(e){if(this.muted||!("speechSynthesis"in window))return;this.stopSpeech();const t=new SpeechSynthesisUtterance(e);t.rate=.95,t.pitch=1;const n=window.speechSynthesis.getVoices(),s=n.find(r=>r.lang.startsWith("en-GB")||r.lang.startsWith("en-US"))||n[0];s&&(t.voice=s),window.speechSynthesis.speak(t)}stopSpeech(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const Ge=new Ic;class Nc{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.ambientDust=[],this.animating=!1}init(e="magic-canvas"){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize()),this.initAmbientDust(),this.animating=!0,this.loop())}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}initAmbientDust(){this.ambientDust=[];const e=40;for(let t=0;t<e;t++)this.ambientDust.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*2.5+1,speedX:(Math.random()-.5)*.4,speedY:(Math.random()-.5)*.4-.2,alpha:Math.random()*.6+.2,maxAlpha:Math.random()*.7+.3,pulseSpeed:Math.random()*.02+.005,color:Math.random()>.3?"#d4af37":"#9d50bb"})}createCaptureBurst(e,t){const s=["#ff4b2b","#ff416c","#d4af37","#ffffff","#9d50bb"];for(let r=0;r<45;r++){const a=Math.random()*Math.PI*2,o=Math.random()*8+2;this.particles.push({x:e,y:t,vx:Math.cos(a)*o,vy:Math.sin(a)*o-1,size:Math.random()*5+2,color:s[Math.floor(Math.random()*s.length)],alpha:1,life:1,decay:Math.random()*.03+.015,isStoneFragment:Math.random()>.5,rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.2})}}createConfettiBurst(){const t=["#d4af37","#f3e5ab","#38ef7d","#00d2ff","#9d50bb","#ff4b2b","#ffffff"];for(let n=0;n<120;n++){const s=Math.random()*Math.PI*2,r=Math.random()*12+4;this.particles.push({x:this.canvas?this.canvas.width/2:window.innerWidth/2,y:this.canvas?this.canvas.height/3:window.innerHeight/3,vx:Math.cos(s)*r,vy:Math.sin(s)*r-4,size:Math.random()*8+4,color:t[Math.floor(Math.random()*t.length)],alpha:1,life:1,decay:Math.random()*.015+.005,isStoneFragment:!0,rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.3})}}createLumosBeam(e,t){for(let n=0;n<25;n++)this.particles.push({x:e+(Math.random()-.5)*40,y:t+(Math.random()-.5)*40,vx:(Math.random()-.5)*2,vy:-Math.random()*4-1,size:Math.random()*4+1.5,color:"#38ef7d",alpha:1,life:1,decay:.025,isStoneFragment:!1,rotation:0,vRot:0})}createMoveTrail(e,t,n,s){for(let a=0;a<=15;a++){const o=a/15,l=e+(n-e)*o,c=t+(s-t)*o;this.particles.push({x:l,y:c,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,size:Math.random()*3+1,color:"#00d2ff",alpha:.8,life:1,decay:.03+a*.001,isStoneFragment:!1,rotation:0,vRot:0})}}loop(){if(!(!this.ctx||!this.animating)){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e of this.ambientDust)e.x+=e.speedX,e.y+=e.speedY,e.alpha+=e.pulseSpeed,(e.alpha>e.maxAlpha||e.alpha<.1)&&(e.pulseSpeed=-e.pulseSpeed),e.x<0&&(e.x=this.canvas.width),e.x>this.canvas.width&&(e.x=0),e.y<0&&(e.y=this.canvas.height),e.y>this.canvas.height&&(e.y=this.canvas.height),this.ctx.save(),this.ctx.globalAlpha=e.alpha,this.ctx.fillStyle=e.color,this.ctx.shadowBlur=8,this.ctx.shadowColor=e.color,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fill(),this.ctx.restore();for(let e=this.particles.length-1;e>=0;e--){const t=this.particles[e];if(t.x+=t.vx,t.y+=t.vy,t.vy+=.15,t.alpha-=t.decay,t.rotation+=t.vRot,t.alpha<=0){this.particles.splice(e,1);continue}this.ctx.save(),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.fillStyle=t.color,this.ctx.shadowBlur=10,this.ctx.shadowColor=t.color,t.isStoneFragment?(this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation),this.ctx.fillRect(-t.size/2,-t.size/2,t.size,t.size)):(this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fill()),this.ctx.restore()}requestAnimationFrame(()=>this.loop())}}}const os=new Nc,Uc={w:{k:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#ffffff"/><path d="M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>',q:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#ffffff"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>',r:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#ffffff"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z"/><path d="M12 33.5c5.5-3 16.5-3 22 0"/></g></svg>',b:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#ffffff" stroke="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#000"/></g></svg>',n:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#ffffff" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#ffffff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#000"/><path d="M9 39h27" stroke="#000"/></g></svg>',p:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#ffffff"/><path d="M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>'},b:{k:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>',q:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="#1e2235"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#1e2235"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>',r:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#1e2235"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z" fill="#1e2235"/><path d="M12 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M14 28.5c5.5-3 11 0 17 0" stroke="#d4af37"/></g></svg>',b:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#d4af37"/></g></svg>',n:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#1e2235" stroke="#d4af37"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#d4af37" stroke="#d4af37"/><path d="M9 39h27" stroke="#d4af37"/></g></svg>',p:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#1e2235"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>'}};class Fc{constructor(e,t){this.container=document.getElementById(e),this.onMoveCallback=t,this.selectedSquare=null,this.legalMoves=[],this.isFlipped=!1,this.game=null,this.lumosSquare=null}attachGame(e){this.game=e,this.render()}flip(){this.isFlipped=!this.isFlipped,this.render()}setLumosHint(e){if(this.lumosSquare=e,e){const t=this.container.querySelector(`[data-square="${e}"]`);if(t){const n=t.getBoundingClientRect();os.createLumosBeam(n.left+n.width/2,n.top+n.height/2)}}this.render()}clearSelection(){this.selectedSquare=null,this.legalMoves=[],this.render()}render(){if(!this.container||!this.game)return;this.container.innerHTML="";const e=this.game.board(),t=this.game.history({verbose:!0}),n=t.length>0?t[t.length-1]:null,s=this.isFlipped?[0,1,2,3,4,5,6,7]:[7,6,5,4,3,2,1,0],r=this.isFlipped?[7,6,5,4,3,2,1,0]:[0,1,2,3,4,5,6,7];for(const a of s)for(const o of r){const l=String.fromCharCode(97+o)+(a+1),c=(a+o)%2!==0,u=document.createElement("div");u.className=`square ${c?"light":"dark"}`,u.dataset.square=l,n&&(n.from===l||n.to===l)&&u.classList.add("last-move"),this.selectedSquare===l&&u.classList.add("selected"),this.lumosSquare===l&&u.classList.add("highlight");const d=this.legalMoves.find(p=>p.to===l);if(d&&(d.captured?u.classList.add("capture-highlight"):u.classList.add("highlight")),!this.isFlipped&&o===0||this.isFlipped&&o===7){const p=document.createElement("span");p.className="square-coord rank",p.textContent=a+1,u.appendChild(p)}if(!this.isFlipped&&a===0||this.isFlipped&&a===7){const p=document.createElement("span");p.className="square-coord file",p.textContent=String.fromCharCode(97+o),u.appendChild(p)}const h=e[7-a][o];if(h){const p=document.createElement("div");p.className=`piece ${h.color==="w"?"white-piece":"black-piece"}`,p.innerHTML=Uc[h.color][h.type],this.selectedSquare===l&&p.classList.add("levitating"),u.appendChild(p)}u.addEventListener("click",()=>this.handleSquareClick(l)),this.container.appendChild(u)}}handleSquareClick(e){if(!this.game)return;if(Ge.init(),this.selectedSquare===e){this.clearSelection();return}const t=this.legalMoves.filter(s=>s.to===e);if(t.length>0){const s=t.find(r=>r.promotion);s&&this.onPromotionRequired?this.onPromotionRequired(s,r=>{const a=t.find(o=>o.promotion===r)||s;this.executeWizardMove(a)}):this.executeWizardMove(t[0]);return}const n=this.game.get(e);n&&n.color===this.game.turn()?(Ge.playSpellSelectSound(),this.selectedSquare=e,this.legalMoves=this.game.moves({square:e,verbose:!0}),this.lumosSquare=null,this.render()):this.clearSelection()}executeWizardMove(e){const t=this.container.querySelector(`[data-square="${e.from}"]`),n=this.container.querySelector(`[data-square="${e.to}"]`);if(t&&n){const r=t.getBoundingClientRect(),a=n.getBoundingClientRect();os.createMoveTrail(r.left+r.width/2,r.top+r.height/2,a.left+a.width/2,a.top+a.height/2),e.captured?(Ge.playCaptureSound(),os.createCaptureBurst(a.left+a.width/2,a.top+a.height/2)):Ge.playMoveSound()}const s=this.game.move(e);this.game.inCheck()&&Ge.playCheckSound(),this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.render(),this.onMoveCallback&&this.onMoveCallback(s)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="185",Bc=0,So=1,Oc=2,Xs=1,Tl=2,ss=3,Yn=0,Wt=1,Cn=2,Pn=0,Pi=1,Eo=2,yo=3,bo=4,kc=5,ri=100,zc=101,Gc=102,Vc=103,Hc=104,Wc=200,qc=201,Xc=202,Kc=203,na=204,ia=205,$c=206,Yc=207,Zc=208,Jc=209,Qc=210,jc=211,eh=212,th=213,nh=214,sa=0,ra=1,aa=2,Ni=3,oa=4,la=5,ca=6,ha=7,Al=0,ih=1,sh=2,_n=0,wl=1,Cl=2,Rl=3,Pl=4,Ll=5,Dl=6,Il=7,Nl=300,hi=301,Ui=302,Mr=303,Sr=304,ar=306,ua=1e3,Rn=1001,da=1002,Pt=1003,rh=1004,Es=1005,Ft=1006,Er=1007,oi=1008,Qt=1009,Ul=1010,Fl=1011,hs=1012,Ya=1013,Mn=1014,mn=1015,Dn=1016,Za=1017,Ja=1018,us=1020,Bl=35902,Ol=35899,kl=1021,zl=1022,on=1023,In=1026,li=1027,Gl=1028,Qa=1029,ui=1030,ja=1031,eo=1033,Ks=33776,$s=33777,Ys=33778,Zs=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,Ma=37488,Sa=37489,Qs=37490,Ea=37491,ya=37808,ba=37809,Ta=37810,Aa=37811,wa=37812,Ca=37813,Ra=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Na=37819,Ua=37820,Fa=37821,Ba=36492,Oa=36494,ka=36495,za=36283,Ga=36284,js=36285,Va=36286,ah=3200,Ha=0,oh=1,Kn="",tn="srgb",er="srgb-linear",tr="linear",nt="srgb",gi=7680,To=519,lh=512,ch=513,hh=514,to=515,uh=516,dh=517,no=518,fh=519,Ao=35044,wo="300 es",gn=2e3,ds=2001;function ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){const i=nr("canvas");return i.style.display="block",i}const Co={};function Ro(...i){const e="THREE."+i.shift();console.log(e,...i)}function Vl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Vl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Vl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Li(...i){const e=i.join(" ");e in Co||(Co[e]=!0,Ie(...i))}function gh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _h={[sa]:ra,[aa]:ca,[oa]:ha,[Ni]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:Ni};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Wa=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function vh(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ho=class ho{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ho.prototype.isVector2=!0;let He=ho;class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==p||u!==_){let g=l*h+c*p+u*_+d*S;g<0&&(h=-h,p=-p,_=-_,S=-S,g=-g);let f=1-o;if(g<.9995){const w=Math.acos(g),R=Math.sin(w);f=Math.sin(f*w)/R,o=Math.sin(o*w)/R,l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o;const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uo=class uo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uo.prototype.isVector3=!0;let H=uo;const Tr=new H,Po=new Oi,fo=class fo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],S=s[0],g=s[3],f=s[6],w=s[1],R=s[4],M=s[7],A=s[2],b=s[5],C=s[8];return r[0]=a*S+o*w+l*A,r[3]=a*g+o*R+l*b,r[6]=a*f+o*M+l*C,r[1]=c*S+u*w+d*A,r[4]=c*g+u*R+d*b,r[7]=c*f+u*M+d*C,r[2]=h*S+p*w+_*A,r[5]=h*g+p*R+_*b,r[8]=h*f+p*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*d+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fo.prototype.isMatrix3=!0;let Be=fo;const Ar=new Be,Lo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xh(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const Xe=xh();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Mh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=nr("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class io{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Eh=0;const Cr=new H;class zt extends di{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ft,a=oi,o=on,l=Qt,c=zt.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=fs(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Nl;zt.DEFAULT_ANISOTROPY=1;const po=class po{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(p+1)/2,A=(f+1)/2,b=(u+h)/4,C=(d+S)/4,v=(_+g)/4;return R>M&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=b/n,r=C/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-_)*(g-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(d-S)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};po.prototype.isVector4=!0;let dt=po;class yh extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new io(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hl extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sr=class sr{constructor(e,t,n,s,r,a,o,l,c,u,d,h,p,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,p,_,S,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,p,_,S,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,S=c*d;t[0]=h+S*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,S=c*d;t[0]=h-S*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,Ah)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),kn.crossVectors(n,Kt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),kn.crossVectors(n,Kt)),kn.normalize(),ys.crossVectors(Kt,kn),s[0]=kn.x,s[4]=ys.x,s[8]=Kt.x,s[1]=kn.y,s[5]=ys.y,s[9]=Kt.y,s[2]=kn.z,s[6]=ys.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],S=n[6],g=n[10],f=n[14],w=n[3],R=n[7],M=n[11],A=n[15],b=s[0],C=s[4],v=s[8],y=s[12],U=s[1],P=s[5],O=s[9],Y=s[13],Q=s[2],z=s[6],Z=s[10],q=s[14],te=s[3],se=s[7],ve=s[11],Ee=s[15];return r[0]=a*b+o*U+l*Q+c*te,r[4]=a*C+o*P+l*z+c*se,r[8]=a*v+o*O+l*Z+c*ve,r[12]=a*y+o*Y+l*q+c*Ee,r[1]=u*b+d*U+h*Q+p*te,r[5]=u*C+d*P+h*z+p*se,r[9]=u*v+d*O+h*Z+p*ve,r[13]=u*y+d*Y+h*q+p*Ee,r[2]=_*b+S*U+g*Q+f*te,r[6]=_*C+S*P+g*z+f*se,r[10]=_*v+S*O+g*Z+f*ve,r[14]=_*y+S*Y+g*q+f*Ee,r[3]=w*b+R*U+M*Q+A*te,r[7]=w*C+R*P+M*z+A*se,r[11]=w*v+R*O+M*Z+A*ve,r[15]=w*y+R*Y+M*q+A*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],S=e[7],g=e[11],f=e[15],w=l*p-c*h,R=o*p-c*d,M=o*h-l*d,A=a*p-c*u,b=a*h-l*u,C=a*d-o*u;return t*(S*w-g*R+f*M)-n*(_*w-g*A+f*b)+s*(_*R-S*A+f*C)-r*(_*M-S*b+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],S=e[13],g=e[14],f=e[15],w=t*o-n*a,R=t*l-s*a,M=t*c-r*a,A=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=u*S-d*_,y=u*g-h*_,U=u*f-p*_,P=d*g-h*S,O=d*f-p*S,Y=h*f-p*g,Q=w*Y-R*O+M*P+A*U-b*y+C*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Q;return e[0]=(o*Y-l*O+c*P)*z,e[1]=(s*O-n*Y-r*P)*z,e[2]=(S*C-g*b+f*A)*z,e[3]=(h*b-d*C-p*A)*z,e[4]=(l*U-a*Y-c*y)*z,e[5]=(t*Y-s*U+r*y)*z,e[6]=(g*M-_*C-f*R)*z,e[7]=(u*C-h*M+p*R)*z,e[8]=(a*O-o*U+c*v)*z,e[9]=(n*U-t*O-r*v)*z,e[10]=(_*b-S*M+f*w)*z,e[11]=(d*M-u*b-p*w)*z,e[12]=(o*y-a*P-l*v)*z,e[13]=(t*P-n*y+s*v)*z,e[14]=(S*R-_*A-g*w)*z,e[15]=(u*A-d*R+h*w)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,S=a*u,g=a*d,f=o*d,w=l*c,R=l*u,M=l*d,A=n.x,b=n.y,C=n.z;return s[0]=(1-(S+f))*A,s[1]=(p+M)*A,s[2]=(_-R)*A,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(g+w)*b,s[7]=0,s[8]=(_+R)*C,s[9]=(g-w)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);const c=1/a,u=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=gn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===gn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ds)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===gn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ds)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};sr.prototype.isMatrix4=!0;let ft=sr;const vi=new H,nn=new ft,Th=new H(0,0,0),Ah=new H(1,1,1),kn=new H,ys=new H,Kt=new H,Io=new ft,No=new Oi;class Zn{constructor(e=0,t=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const Uo=new H,xi=new Oi,En=new ft,bs=new H,$i=new H,Ch=new H,Rh=new Oi,Fo=new H(1,0,0),Bo=new H(0,1,0),Oo=new H(0,0,1),ko={type:"added"},Ph={type:"removed"},Mi={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Bt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Zn,n=new Oi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bs.copy(e):bs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt($i,bs,this.up):En.lookAt(bs,$i,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(En),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ko),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ph),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ko),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rs extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lh={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Lr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=vh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lr(a,r,e+1/3),this.g=Lr(a,r,e),this.b=Lr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Xe.workingToColorSpace(Nt.copy(this),e),Math.round(Ke(Nt.r*255,0,255))*65536+Math.round(Ke(Nt.g*255,0,255))*256+Math.round(Ke(Nt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=tn){Xe.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Ts);const n=br(zn.h,Ts.h,t),s=br(zn.s,Ts.s,t),r=br(zn.l,Ts.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Qe;Qe.NAMES=Wl;class Dh extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new H,yn=new H,Dr=new H,bn=new H,Si=new H,Ei=new H,zo=new H,Ir=new H,Nr=new H,Ur=new H,Fr=new dt,Br=new dt,Or=new dt;class an{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),yn.subVectors(n,t),Dr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(yn),l=sn.dot(Dr),c=yn.dot(yn),u=yn.dot(Dr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fr.setScalar(0),Br.setScalar(0),Or.setScalar(0),Fr.fromBufferAttribute(e,t),Br.fromBufferAttribute(e,n),Or.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),yn.subVectors(e,t),sn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),Ei.subVectors(r,n),Ir.subVectors(e,n);const l=Si.dot(Ir),c=Ei.dot(Ir);if(l<=0&&c<=0)return t.copy(n);Nr.subVectors(e,s);const u=Si.dot(Nr),d=Ei.dot(Nr);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Si,a);Ur.subVectors(e,r);const p=Si.dot(Ur),_=Ei.dot(Ur);if(_>=0&&p<=_)return t.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ei,o);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return zo.subVectors(r,s),o=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(zo,o);const f=1/(g+S+h);return a=S*f,o=h*f,t.copy(n).addScaledVector(Si,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),ws.subVectors(this.max,Yi),yi.subVectors(e.a,Yi),bi.subVectors(e.b,Yi),Ti.subVectors(e.c,Yi),Gn.subVectors(bi,yi),Vn.subVectors(Ti,bi),ei.subVectors(yi,Ti);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ei.z,ei.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ei.z,0,-ei.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ei.y,ei.x,0];return!kr(t,yi,bi,Ti,ws)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,yi,bi,Ti,ws))?!1:(Cs.crossVectors(Gn,Vn),t=[Cs.x,Cs.y,Cs.z],kr(t,yi,bi,Ti,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,As=new ps,yi=new H,bi=new H,Ti=new H,Gn=new H,Vn=new H,ei=new H,Yi=new H,ws=new H,Cs=new H,ti=new H;function kr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const St=new H,Rs=new He;let Ih=0;class xn extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ql extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Nh=new ps,Zi=new H,zr=new H;class ro{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(zr)),this.expandByPoint(Zi.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uh=0;const en=new ft,Gr=new Bt,Ai=new H,$t=new ps,Ji=new ps,wt=new H;class ln extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?Xl:ql)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,Ji.min),$t.expandByPoint(wt),wt.addVectors($t.max,Ji.max),$t.expandByPoint(wt)):($t.expandByPoint(Ji.min),$t.expandByPoint(Ji.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),wt.add(Ai)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new H,l[v]=new H;const c=new H,u=new H,d=new H,h=new He,p=new He,_=new He,S=new H,g=new H;function f(v,y,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,U),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[v].add(S),o[y].add(S),o[U].add(S),l[v].add(g),l[y].add(g),l[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,y=w.length;v<y;++v){const U=w[v],P=U.start,O=U.count;for(let Y=P,Q=P+O;Y<Q;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new H,M=new H,A=new H,b=new H;function C(v){A.fromBufferAttribute(s,v),b.copy(A);const y=o[v];R.copy(y),R.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(b,y);const P=M.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,P)}for(let v=0,y=w.length;v<y;++v){const U=w[v],P=U.start,O=U.count;for(let Y=P,Q=P+O;Y<Q;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new xn(h,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fh=0;class ms extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Pi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const An=new H,Vr=new H,Ps=new H,Hn=new H,Hr=new H,Ls=new H,Wr=new H;class Kl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Vr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=Hn.dot(this.direction),l=-Hn.dot(Ps),c=Hn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vr).addScaledVector(Ps,h),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){Hr.subVectors(t,e),Ls.subVectors(n,e),Wr.crossVectors(Hr,Ls);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Ls.crossVectors(Hn,Ls));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Wr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $l extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Go=new ft,ni=new Kl,Ds=new ro,Vo=new H,Is=new H,Ns=new H,Us=new H,qr=new H,Fs=new H,Ho=new H,Bs=new H;class ot extends Bt{constructor(e=new ln,t=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(qr.fromBufferAttribute(d,e),a?Fs.addScaledVector(qr,u):Fs.addScaledVector(qr.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Ds.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ds,Vo)===null||ni.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Go.copy(r).invert(),ni.copy(e.ray).applyMatrix4(Go),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],f=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=R;M<A;M+=3){const b=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);s=Os(this,f,e,n,c,u,d,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=_,f=S;g<f;g+=3){const w=o.getX(g),R=o.getX(g+1),M=o.getX(g+2);s=Os(this,a,e,n,c,u,d,w,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],f=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,A=R;M<A;M+=3){const b=M,C=M+1,v=M+2;s=Os(this,f,e,n,c,u,d,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=_,f=S;g<f;g+=3){const w=g,R=g+1,M=g+2;s=Os(this,a,e,n,c,u,d,w,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Bh(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:i}}function Os(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Us);const u=Bh(i,e,t,n,Is,Ns,Us,Ho);if(u){const d=new H;an.getBarycoord(Ho,Is,Ns,Us,d),s&&(u.uv=an.getInterpolatedAttribute(s,o,l,c,d,new He)),r&&(u.uv1=an.getInterpolatedAttribute(r,o,l,c,d,new He)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};an.getNormal(Is,Ns,Us,h.normal),u.face=h,u.barycoord=d}return u}class Oh extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Pt,u=Pt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new H,kh=new H,zh=new Be;class si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xr.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Xr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),s=this.coplanarPoint(Xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new ro,Gh=new He(.5,.5),ks=new H;class ao{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],S=r[9],g=r[10],f=r[11],w=r[12],R=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,f-_,A-w).normalize(),s[1].setComponents(c+a,p+u,f+_,A+w).normalize(),s[2].setComponents(c+o,p+d,f+S,A+R).normalize(),s[3].setComponents(c-o,p-d,f-S,A-R).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,p-h,f-g,A-M).normalize();else if(s[4].setComponents(c-l,p-h,f-g,A-M).normalize(),t===gn)s[5].setComponents(c+l,p+h,f+g,A+M).normalize();else if(t===ds)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Gh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ks.x=s.normal.x>0?e.max.x:e.min.x,ks.y=s.normal.y>0?e.max.y:e.min.y,ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yl extends zt{constructor(e=[],t=hi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fi extends zt{constructor(e,t,n=Mn,s,r,a,o=Pt,l=Pt,c,u=In,d=1){if(u!==In&&u!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vh extends Fi{constructor(e,t=Mn,n=hi,s,r,a=Pt,o=Pt,l,c=In){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zl extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pn extends ln{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function _(S,g,f,w,R,M,A,b,C,v,y){const U=M/C,P=A/v,O=M/2,Y=A/2,Q=b/2,z=C+1,Z=v+1;let q=0,te=0;const se=new H;for(let ve=0;ve<Z;ve++){const Ee=ve*P-Y;for(let be=0;be<z;be++){const We=be*U-O;se[S]=We*w,se[g]=Ee*R,se[f]=Q,c.push(se.x,se.y,se.z),se[S]=0,se[g]=0,se[f]=b>0?1:-1,u.push(se.x,se.y,se.z),d.push(be/C),d.push(1-ve/v),q+=1}}for(let ve=0;ve<v;ve++)for(let Ee=0;Ee<C;Ee++){const be=h+Ee+z*ve,We=h+Ee+z*(ve+1),lt=h+(Ee+1)+z*(ve+1),$e=h+(Ee+1)+z*ve;l.push(be,We,$e),l.push(We,lt,$e),te+=6}o.addGroup(p,te,y),p+=te,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dn extends ln{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let _=0;const S=[],g=n/2;let f=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function w(){const M=new H,A=new H;let b=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const y=[],U=v/r,P=U*(t-e)+e;for(let O=0;O<=s;O++){const Y=O/s,Q=Y*l+o,z=Math.sin(Q),Z=Math.cos(Q);A.x=P*z,A.y=-U*n+g,A.z=P*Z,d.push(A.x,A.y,A.z),M.set(z,C,Z).normalize(),h.push(M.x,M.y,M.z),p.push(Y,1-U),y.push(_++)}S.push(y)}for(let v=0;v<s;v++)for(let y=0;y<r;y++){const U=S[y][v],P=S[y+1][v],O=S[y+1][v+1],Y=S[y][v+1];(e>0||y!==0)&&(u.push(U,P,Y),b+=3),(t>0||y!==r-1)&&(u.push(P,O,Y),b+=3)}c.addGroup(f,b,0),f+=b}function R(M){const A=_,b=new He,C=new H;let v=0;const y=M===!0?e:t,U=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*U,0),h.push(0,U,0),p.push(.5,.5),_++;const P=_;for(let O=0;O<=s;O++){const Q=O/s*l+o,z=Math.cos(Q),Z=Math.sin(Q);C.x=y*Z,C.y=g*U,C.z=y*z,d.push(C.x,C.y,C.z),h.push(0,U,0),b.x=z*.5+.5,b.y=Z*.5*U+.5,p.push(b.x,b.y),_++}for(let O=0;O<s;O++){const Y=A+O,Q=P+O;M===!0?u.push(Q,Q+1,Y):u.push(Q+1,Q,Y),v+=3}c.addGroup(f,v,M===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oo extends dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],S=[],g=[];for(let f=0;f<u;f++){const w=f*h-a;for(let R=0;R<c;R++){const M=R*d-r;_.push(M,-w,0),S.push(0,0,1),g.push(R/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const R=w+c*f,M=w+c*(f+1),A=w+1+c*(f+1),b=w+1+c*f;p.push(R,M,b),p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(S,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}class ls extends ln{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new H,h=new H,p=[],_=[],S=[],g=[];for(let f=0;f<=n;f++){const w=[],R=f/n,M=a+R*o,A=e*Math.cos(M),b=Math.sqrt(e*e-A*A);let C=0;f===0&&a===0?C=.5/t:f===n&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const y=v/t,U=s+y*r;d.x=-b*Math.cos(U),d.y=A,d.z=b*Math.sin(U),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),g.push(y+C,1-R),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const R=u[f][w+1],M=u[f][w],A=u[f+1][w],b=u[f+1][w+1];(f!==0||a>0)&&p.push(R,M,b),(f!==n-1||l<Math.PI)&&p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(S,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Wo(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const s in n)e[s]=n[s]}return e}function Wo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Wh={clone:Bi,merge:kt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kh extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wn extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $h extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yh extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lo extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kr=new ft,qo=new H,Xo=new H;class Ql{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(qo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ds||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zs=new H,Gs=new Oi,hn=new H;class jl extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zs,Gs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zs,Gs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new H,Ko=new He,$o=new He;class Jt extends jl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,$o),t.subVectors($o,Ko)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zh extends Ql{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Jh extends lo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class co extends jl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qh extends Ql{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class eu extends lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const wi=-90,Ci=1;class tu extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(wi,Ci,e,t);s.layers=this.layers,this.add(s);const r=new Jt(wi,Ci,e,t);r.layers=this.layers,this.add(r);const a=new Jt(wi,Ci,e,t);a.layers=this.layers,this.add(a);const o=new Jt(wi,Ci,e,t);o.layers=this.layers,this.add(o);const l=new Jt(wi,Ci,e,t);l.layers=this.layers,this.add(l);const c=new Jt(wi,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nu extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yo=new ft;class iu{constructor(e,t,n=0,s=1/0){this.ray=new Kl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yo),this}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(Zo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qa(e[s],this,n,t);return n.sort(Zo),n}}function Zo(i,e){return i.distance-e.distance}function qa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)qa(r[a],e,t,!0)}}const mo=class mo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};mo.prototype.isMatrix2=!0;let Jo=mo;function Qo(i,e,t,n){const s=su(n);switch(t){case kl:return i*e;case Gl:return i*e/s.components*s.byteLength;case Qa:return i*e/s.components*s.byteLength;case ui:return i*e*2/s.components*s.byteLength;case ja:return i*e*2/s.components*s.byteLength;case zl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case eo:return i*e*4/s.components*s.byteLength;case Ks:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case va:case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case Qs:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Oa:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case js:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function su(i){switch(i){case Qt:case Ul:return{byteLength:1,components:1};case hs:case Fl:case Dn:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case Mn:case Ya:case mn:return{byteLength:4,components:1};case Bl:case Ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ec(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ru(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ou=`#ifdef USE_ALPHAHASH
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
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,du=`#ifdef USE_AOMAP
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
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
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
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Mu=`#ifdef USE_BUMPMAP
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
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ru=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lu=`vec3 transformedNormal = objectNormal;
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
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
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
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,sd=`uniform sampler2D dfgLUT;
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
}`,rd=`
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
#endif`,qd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tf=`#ifdef USE_TRANSMISSION
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
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
}`,pf=`#if DEPTH_PACKING == 3200
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
}`,mf=`#define DISTANCE
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
}`,gf=`#define DISTANCE
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
void main() {
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,yf=`#define LAMBERT
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
}`,bf=`#define LAMBERT
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
}`,Tf=`#define MATCAP
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
}`,Af=`#define MATCAP
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
}`,wf=`#define NORMAL
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
}`,Cf=`#define NORMAL
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
}`,Rf=`#define PHONG
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
}`,Pf=`#define PHONG
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
}`,Lf=`#define STANDARD
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
}`,Df=`#define STANDARD
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
}`,If=`#define TOON
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
}`,Nf=`#define TOON
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
}`,Uf=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,Of=`uniform vec3 color;
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
}`,kf=`uniform float rotation;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:au,alphahash_pars_fragment:ou,alphamap_fragment:lu,alphamap_pars_fragment:cu,alphatest_fragment:hu,alphatest_pars_fragment:uu,aomap_fragment:du,aomap_pars_fragment:fu,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:_u,bsdfs:vu,iridescence_fragment:xu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:bu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:wu,color_vertex:Cu,common:Ru,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Du,displacementmap_vertex:Iu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Uu,colorspace_fragment:Fu,colorspace_pars_fragment:Bu,envmap_fragment:Ou,envmap_common_pars_fragment:ku,envmap_pars_fragment:zu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:Qu,envmap_vertex:Vu,fog_vertex:Hu,fog_pars_vertex:Wu,fog_fragment:qu,fog_pars_fragment:Xu,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:$u,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:Zu,lights_pars_begin:Ju,lights_toon_fragment:ju,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,lightprobes_pars_fragment:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphinstance_vertex:xd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:wd,normal_vertex:Cd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Id,opaque_fragment:Nd,packing:Ud,premultiplied_alpha_fragment:Fd,project_vertex:Bd,dithering_fragment:Od,dithering_pars_fragment:kd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:qd,skinbase_vertex:Xd,skinning_pars_vertex:Kd,skinning_vertex:$d,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:ef,transmission_pars_fragment:tf,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:af,background_vert:of,background_frag:lf,backgroundCube_vert:cf,backgroundCube_frag:hf,cube_vert:uf,cube_frag:df,depth_vert:ff,depth_frag:pf,distance_vert:mf,distance_frag:gf,equirect_vert:_f,equirect_frag:vf,linedashed_vert:xf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:yf,meshlambert_frag:bf,meshmatcap_vert:Tf,meshmatcap_frag:Af,meshnormal_vert:wf,meshnormal_frag:Cf,meshphong_vert:Rf,meshphong_frag:Pf,meshphysical_vert:Lf,meshphysical_frag:Df,meshtoon_vert:If,meshtoon_frag:Nf,points_vert:Uf,points_frag:Ff,shadow_vert:Bf,shadow_frag:Of,sprite_vert:kf,sprite_frag:zf},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},fn={basic:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([Me.points,Me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([Me.common,Me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([Me.sprite,Me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:kt([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:kt([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};fn.physical={uniforms:kt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Vs={r:0,b:0,g:0},Gf=new ft,tc=new Be;tc.set(-1,0,0,0,1,0,0,0,1);function Vf(i,e,t,n,s,r){const a=new Qe(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const M=w.backgroundBlurriness>0;R=e.get(R,M)}return R}function _(w){let R=!1;const M=p(w);M===null?g(a,o):M&&M.isColor&&(g(M,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,R){const M=p(R);M&&(M.isCubeTexture||M.mapping===ar)?(c===void 0&&(c=new ot(new pn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tc),c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==nt,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ot(new or(2,2),new Sn({name:"BackgroundMaterial",uniforms:Bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,R){w.getRGB(Vs,Jl(i)),t.buffers.color.setClear(Vs.r,Vs.g,Vs.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:_,addToRenderList:S,dispose:f}}function Hf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(P,O,Y,Q,z){let Z=!1;const q=d(P,Q,Y,O);r!==q&&(r=q,c(r.object)),Z=p(P,Q,Y,z),Z&&_(P,Q,Y,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(P,O,Y,Q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,O,Y,Q){const z=Q.wireframe===!0;let Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);const q=P.isInstancedMesh===!0?P.id:0;let te=Z[q];te===void 0&&(te={},Z[q]=te);let se=te[Y.id];se===void 0&&(se={},te[Y.id]=se);let ve=se[z];return ve===void 0&&(ve=h(l()),se[z]=ve),ve}function h(P){const O=[],Y=[],Q=[];for(let z=0;z<t;z++)O[z]=0,Y[z]=0,Q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:Q,object:P,attributes:{},index:null}}function p(P,O,Y,Q){const z=r.attributes,Z=O.attributes;let q=0;const te=Y.getAttributes();for(const se in te)if(te[se].location>=0){const Ee=z[se];let be=Z[se];if(be===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==Q}function _(P,O,Y,Q){const z={},Z=O.attributes;let q=0;const te=Y.getAttributes();for(const se in te)if(te[se].location>=0){let Ee=Z[se];Ee===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),z[se]=be,q++}r.attributes=z,r.attributesNum=q,r.index=Q}function S(){const P=r.newAttributes;for(let O=0,Y=P.length;O<Y;O++)P[O]=0}function g(P){f(P,0)}function f(P,O){const Y=r.newAttributes,Q=r.enabledAttributes,z=r.attributeDivisors;Y[P]=1,Q[P]===0&&(i.enableVertexAttribArray(P),Q[P]=1),z[P]!==O&&(i.vertexAttribDivisor(P,O),z[P]=O)}function w(){const P=r.newAttributes,O=r.enabledAttributes;for(let Y=0,Q=O.length;Y<Q;Y++)O[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function R(P,O,Y,Q,z,Z,q){q===!0?i.vertexAttribIPointer(P,O,Y,z,Z):i.vertexAttribPointer(P,O,Y,Q,z,Z)}function M(P,O,Y,Q){S();const z=Q.attributes,Z=Y.getAttributes(),q=O.defaultAttributeValues;for(const te in Z){const se=Z[te];if(se.location>=0){let ve=z[te];if(ve===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),ve!==void 0){const Ee=ve.normalized,be=ve.itemSize,We=e.get(ve);if(We===void 0)continue;const lt=We.buffer,$e=We.type,ee=We.bytesPerElement,he=$e===i.INT||$e===i.UNSIGNED_INT||ve.gpuType===Ya;if(ve.isInterleavedBufferAttribute){const re=ve.data,Le=re.stride,Ue=ve.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<se.locationSize;Re++)f(se.location+Re,re.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<se.locationSize;Re++)g(se.location+Re);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Re=0;Re<se.locationSize;Re++)R(se.location+Re,be/se.locationSize,$e,Ee,Le*ee,(Ue+be/se.locationSize*Re)*ee,he)}else{if(ve.isInstancedBufferAttribute){for(let re=0;re<se.locationSize;re++)f(se.location+re,ve.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let re=0;re<se.locationSize;re++)g(se.location+re);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let re=0;re<se.locationSize;re++)R(se.location+re,be/se.locationSize,$e,Ee,be*ee,be/se.locationSize*re*ee,he)}}else if(q!==void 0){const Ee=q[te];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(se.location,Ee);break;case 3:i.vertexAttrib3fv(se.location,Ee);break;case 4:i.vertexAttrib4fv(se.location,Ee);break;default:i.vertexAttrib1fv(se.location,Ee)}}}}w()}function A(){y();for(const P in n){const O=n[P];for(const Y in O){const Q=O[Y];for(const z in Q){const Z=Q[z];for(const q in Z)u(Z[q].object),delete Z[q];delete Q[z]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const Y in O){const Q=O[Y];for(const z in Q){const Z=Q[z];for(const q in Z)u(Z[q].object),delete Z[q];delete Q[z]}}delete n[P.id]}function C(P){for(const O in n){const Y=n[O];for(const Q in Y){const z=Y[Q];if(z[P.id]===void 0)continue;const Z=z[P.id];for(const q in Z)u(Z[q].object),delete Z[q];delete z[P.id]}}}function v(P){for(const O in n){const Y=n[O],Q=P.isInstancedMesh===!0?P.id:0,z=Y[Q];if(z!==void 0){for(const Z in z){const q=z[Z];for(const te in q)u(q[te].object),delete q[te];delete z[Z]}delete Y[Q],Object.keys(Y).length===0&&delete n[O]}}}function y(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function Wf(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!v)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:M,maxSamples:A,samples:b}}function Xf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new si,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const w=r?0:n,R=w*4;let M=f.clippingState||null;l.value=M,M=u(_,h,R,p);for(let A=0;A!==R;++A)M[A]=t[A];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const f=p+S*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,M=p;R!==S;++R,M+=4)a.copy(d[R]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const $n=4,jo=[.125,.215,.35,.446,.526,.582],ai=20,Kf=256,Qi=new co,el=new Qe;let $r=null,Yr=0,Zr=0,Jr=!1;const $f=new H;class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=$f}=r;$r=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($r,Yr,Zr),this._renderer.xr.enabled=Jr,e.scissorTest=!1,Ri(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Dn,format:on,colorSpace:er,depthBuffer:!1},s=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yf(r)),this._blurMaterial=Jf(r,e,t),this._ggxMaterial=Zf(r,e,t)}return s}_compileMaterial(e){const t=new ot(new ln,e);this._renderer.compile(t,Qi)}_sceneToCubeUV(e,t,n,s,r){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(el),d.toneMapping=_n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new pn,new $l({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let f=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,f=!0):(g.color.copy(el),f=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const A=this._cubeSize;Ri(s,M*A,R>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hi||e.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ri(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,S=this._sizeLods[n],g=3*S*(n>_-$n?n-_+$n:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ri(r,g,f,3*S,2*S),s.setRenderTarget(r),s.render(o,Qi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ri(e,g,f,3*S,2*S),s.setRenderTarget(e),s.render(o,Qi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),S=r/_,g=isFinite(r)?1+Math.floor(u*S):ai;g>ai&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ai}`);const f=[];let w=0;for(let C=0;C<ai;++C){const v=C/S,y=Math.exp(-v*v/2);f.push(y),C===0?w+=y:C<g&&(w+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=_,h.mipInt.value=R-n;const M=this._sizeLods[s],A=3*M*(s>R-$n?s-R+$n:0),b=4*(this._cubeSize-M);Ri(t,A,b,3*M,2*M),l.setRenderTarget(t),l.render(d,Qi)}}function Yf(i){const e=[],t=[],n=[];let s=i;const r=i-$n+1+jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$n?l=jo[a-i+$n-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,S=3,g=2,f=1,w=new Float32Array(S*_*p),R=new Float32Array(g*_*p),M=new Float32Array(f*_*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,v=b>2?0:-1,y=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];w.set(y,S*_*b),R.set(h,g*_*b);const U=[b,b,b,b,b,b];M.set(U,f*_*b)}const A=new ln;A.setAttribute("position",new xn(w,S)),A.setAttribute("uv",new xn(R,g)),A.setAttribute("faceIndex",new xn(M,f)),n.push(new ot(A,null)),s>$n&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nl(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ri(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zf(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Jf(i,e,t){const n=new Float32Array(ai),s=new H(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function il(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sl(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function lr(){return`

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
	`}class nc extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Pn});r.uniforms.tEquirect.value=t;const a=new ot(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=Ft),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Qf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Mr||p===Sr)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new nc(_.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===Mr||p===Sr,S=p===hi||p===Ui;if(_||S){let g=t.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new tl(i)),g=_?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const w=h.image;return _&&w&&w.height>0||S&&w&&l(w)?(n===null&&(n=new tl(i)),g=_?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Mr?h.mapping=hi:p===Sr&&(h.mapping=Ui),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Li("WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const w=p.array;S=p.version;for(let R=0,M=w.length;R<M;R+=3){const A=w[R+0],b=w[R+1],C=w[R+2];h.push(A,b,b,C,C,A)}}else{const w=_.array;S=_.version;for(let R=0,M=w.length/3-1;R<M;R+=3){const A=R+0,b=R+1,C=R+2;h.push(A,b,b,C,C,A)}}const g=new(_.count>=65535?Xl:ql)(h,1);g.version=S;const f=r.get(d);f&&e.remove(f),r.set(d,g)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let S=0;for(let g=0;g<p;g++)S+=h[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function np(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let U=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",U)};var p=U;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let A=o.attributes.position.count*M,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*b*4*d),v=new Hl(C,A,b,d);v.type=mn,v.needsUpdate=!0;const y=M*4;for(let P=0;P<d;P++){const O=f[P],Y=w[P],Q=R[P],z=A*b*4*P;for(let Z=0;Z<O.count;Z++){const q=Z*y;_===!0&&(s.fromBufferAttribute(O,Z),C[z+q+0]=s.x,C[z+q+1]=s.y,C[z+q+2]=s.z,C[z+q+3]=0),S===!0&&(s.fromBufferAttribute(Y,Z),C[z+q+4]=s.x,C[z+q+5]=s.y,C[z+q+6]=s.z,C[z+q+7]=0),g===!0&&(s.fromBufferAttribute(Q,Z),C[z+q+8]=s.x,C[z+q+9]=s.y,C[z+q+10]=s.z,C[z+q+11]=Q.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new He(A,b)},n.set(o,h),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function sp(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const rp={[wl]:"LINEAR_TONE_MAPPING",[Cl]:"REINHARD_TONE_MAPPING",[Rl]:"CINEON_TONE_MAPPING",[Pl]:"ACES_FILMIC_TONE_MAPPING",[Dl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Ll]:"CUSTOM_TONE_MAPPING"};function ap(i,e,t,n,s,r){const a=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Fi(e,t):void 0}),o=new vn(e,t,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new ln;l.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const c=new Kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ot(l,c),d=new co(-1,1,1,-1,0,1);let h=null,p=null,_=!1,S,g=null,f=[],w=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let A=0;A<f.length;A++){const b=f[A];b.setSize&&b.setSize(R,M)}},this.setEffects=function(R){f=R,w=f.length>0&&f[0].isRenderPass===!0;const M=a.width,A=a.height;for(let b=0;b<f.length;b++){const C=f[b];C.setSize&&C.setSize(M,A)}},this.begin=function(R,M){if(_||R.toneMapping===_n&&f.length===0)return!1;if(g=M,M!==null){const A=M.width,b=M.height;(a.width!==A||a.height!==b)&&this.setSize(A,b)}return w===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=_n,!0},this.hasRenderPass=function(){return w},this.end=function(R,M){R.toneMapping=S,_=!0;let A=a,b=o;for(let C=0;C<f.length;C++){const v=f[C];if(v.enabled!==!1&&(v.render(R,b,A,M),v.needsSwap!==!1)){const y=A;A=b,b=y}}if(h!==R.outputColorSpace||p!==R.toneMapping){h=R.outputColorSpace,p=R.toneMapping,c.defines={},Xe.getTransfer(h)===nt&&(c.defines.SRGB_TRANSFER="");const C=rp[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(g),R.render(u,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const ic=new zt,Xa=new Fi(1,1),sc=new Hl,rc=new bh,ac=new Yl,rl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cr(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),At(t,n)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),At(t,n)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),At(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Ep(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xa.compareFunction=t.isReversedDepthBuffer()?no:to,r=Xa):r=ic,t.setTexture2D(e||r,s)}function yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rc,s)}function bp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ac,s)}function Tp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sc,s)}function Ap(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Tp}}function wp(i,e){i.uniform1fv(this.addr,e)}function Cp(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function Rp(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Pp(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Lp(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dp(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ip(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Np(i,e){i.uniform1iv(this.addr,e)}function Up(i,e){i.uniform2iv(this.addr,e)}function Fp(i,e){i.uniform3iv(this.addr,e)}function Bp(i,e){i.uniform4iv(this.addr,e)}function Op(i,e){i.uniform1uiv(this.addr,e)}function kp(i,e){i.uniform2uiv(this.addr,e)}function zp(i,e){i.uniform3uiv(this.addr,e)}function Gp(i,e){i.uniform4uiv(this.addr,e)}function Vp(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xa:a=ic;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hp(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rc,r[a])}function Wp(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ac,r[a])}function qp(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sc,r[a])}function Xp(i){switch(i){case 5126:return wp;case 35664:return Cp;case 35665:return Rp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Np;case 35667:case 35671:return Up;case 35668:case 35672:return Fp;case 35669:case 35673:return Bp;case 5125:return Op;case 36294:return kp;case 36295:return zp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return qp}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xp(t.type)}}class Yp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function Zp(i,e,t){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),a=Qr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hl(t,c===void 0?new Kp(o,i,e):new $p(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Yp(o),hl(t,d)),t=d}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Zp(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Jp=37297;let Qp=0;function jp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dl=new Be;function em(i){Xe._getMatrix(dl,Xe.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case tr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jp(i.getShaderSource(e),o)}else return r}function tm(i,e){const t=em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nm={[wl]:"Linear",[Cl]:"Reinhard",[Rl]:"Cineon",[Pl]:"ACESFilmic",[Dl]:"AgX",[Il]:"Neutral",[Ll]:"Custom"};function im(i,e){const t=nm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new H;function sm(){Xe.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function am(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function om(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function as(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(lm,hm)}const cm=new Map;function hm(i,e){let t=Oe[e];if(t===void 0){const n=cm.get(e);if(n!==void 0)t=Oe[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ka(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(um,dm)}function dm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fm={[Xs]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function pm(i){return fm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mm={[hi]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function gm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const _m={[Ui]:"ENVMAP_MODE_REFRACTION"};function vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_m[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xm={[Al]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function Mm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xm[i.combine]||"ENVMAP_BLENDING_NONE"}function Sm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Em(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pm(t),c=gm(t),u=vm(t),d=Mm(t),h=Sm(t),p=rm(t),_=am(r),S=s.createProgram();let g,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(as).join(`
`),f.length>0&&(f+=`
`)):(g=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Oe.tonemapping_pars_fragment:"",t.toneMapping!==_n?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),sm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=Ka(a),a=pl(a,t),a=ml(a,t),o=Ka(o),o=pl(o,t),o=ml(o,t),a=gl(a),o=gl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=w+g+a,M=w+f+o,A=ul(s,s.VERTEX_SHADER,R),b=ul(s,s.FRAGMENT_SHADER,M);s.attachShader(S,A),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",Y=s.getShaderInfoLog(A)||"",Q=s.getShaderInfoLog(b)||"",z=O.trim(),Z=Y.trim(),q=Q.trim();let te=!0,se=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,A,b);else{const ve=fl(s,A,"vertex"),Ee=fl(s,b,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ve+`
`+Ee)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(Z===""||q==="")&&(se=!1);se&&(P.diagnostics={runnable:te,programLog:z,vertexShader:{log:Z,prefix:g},fragmentShader:{log:q,prefix:f}})}s.deleteShader(A),s.deleteShader(b),v=new Js(s,S),y=om(s,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,Jp)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=b,this}let ym=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}}class Tm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function Am(i){return i===ui||i===Qs||i===js}function wm(i,e,t,n,s,r){const a=new so,o=new bm,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,y,U,P,O,Y){const Q=P.fog,z=O.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||Z,q),se=te&&te.mapping===ar?te.image.height:null,ve=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let We=0;z.morphAttributes.position!==void 0&&(We=1),z.morphAttributes.normal!==void 0&&(We=2),z.morphAttributes.color!==void 0&&(We=3);let lt,$e,ee,he;if(ve){const L=fn[ve];lt=L.vertexShader,$e=L.fragmentShader}else{lt=v.vertexShader,$e=v.fragmentShader;const L=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,L,tt),ee=L.id,he=tt.id}const re=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,ut=!!v.map,ke=!!v.matcap,et=!!te,Ye=!!v.aoMap,qe=!!v.lightMap,pt=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,xt=!!v.displacementMap,yt=!!v.emissiveMap,ct=!!v.metalnessMap,gt=!!v.roughnessMap,F=v.anisotropy>0,Lt=v.clearcoat>0,je=v.dispersion>0,E=v.iridescence>0,m=v.sheen>0,k=v.transmission>0,W=F&&!!v.anisotropyMap,K=Lt&&!!v.clearcoatMap,le=Lt&&!!v.clearcoatNormalMap,fe=Lt&&!!v.clearcoatRoughnessMap,$=E&&!!v.iridescenceMap,j=E&&!!v.iridescenceThicknessMap,pe=m&&!!v.sheenColorMap,we=m&&!!v.sheenRoughnessMap,_e=!!v.specularMap,me=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Pe=k&&!!v.transmissionMap,Fe=k&&!!v.thicknessMap,D=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,ge=!!v.alphaHash,Se=!!v.extensions;let ne=_n;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ae={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:$e,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:ke,envMap:et,envMapMode:et&&te.mapping,envMapCubeUVHeight:se,aoMap:Ye,lightMap:qe,bumpMap:pt,normalMap:mt,displacementMap:xt,emissiveMap:yt,normalMapObjectSpace:mt&&v.normalMapType===oh,normalMapTangentSpace:mt&&v.normalMapType===Ha,packedNormalMap:mt&&v.normalMapType===Ha&&Am(v.normalMap.format),metalnessMap:ct,roughnessMap:gt,anisotropy:F,anisotropyMap:W,clearcoat:Lt,clearcoatMap:K,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,dispersion:je,iridescence:E,iridescenceMap:$,iridescenceThicknessMap:j,sheen:m,sheenColorMap:pe,sheenRoughnessMap:we,specularMap:_e,specularColorMap:me,specularIntensityMap:Ce,transmission:k,transmissionMap:Pe,thicknessMap:Fe,gradientMap:D,opaque:v.transparent===!1&&v.blending===Pi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:ge,combine:v.combine,mapUv:ut&&_(v.map.channel),aoMapUv:Ye&&_(v.aoMap.channel),lightMapUv:qe&&_(v.lightMap.channel),bumpMapUv:pt&&_(v.bumpMap.channel),normalMapUv:mt&&_(v.normalMap.channel),displacementMapUv:xt&&_(v.displacementMap.channel),emissiveMapUv:yt&&_(v.emissiveMap.channel),metalnessMapUv:ct&&_(v.metalnessMap.channel),roughnessMapUv:gt&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(v.sheenRoughnessMap.channel),specularMapUv:_e&&_(v.specularMap.channel),specularColorMapUv:me&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:Pe&&_(v.transmissionMap.channel),thicknessMapUv:Fe&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(ut||de),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Cn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)y.push(U),y.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(f(y,v),w(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function w(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const y=p[v.type];let U;if(y){const P=fn[y];U=Wh.clone(P.uniforms)}else U=v.uniforms;return U}function M(v,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new Em(i,y,v,s),c.push(U),u.set(y,U)),U}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:C}}function Cm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,g,f){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:f},i[e]=w):(w.id=h.id,w.object=h,w.geometry=p,w.material=_,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=g,w.group=f),e++,w}function l(h,p,_,S,g,f){const w=o(h,p,_,S,g,f);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(h,p,_,S,g,f){const w=o(h,p,_,S,g,f);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,p,_){t.length>1&&t.sort(h||Rm),n.length>1&&n.sort(p||vl),s.length>1&&s.sort(p||vl),_&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Pm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new xl,i.set(n,[a])):s>=r.length?(a=new xl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Im=0;function Nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Um(i){const e=new Lm,t=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new ft,a=new ft;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,S=0,g=0,f=0,w=0,R=0,M=0,A=0,b=0,C=0;c.sort(Nm);for(let y=0,U=c.length;y<U;y++){const P=c[y],O=P.color,Y=P.intensity,Q=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ui?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*Y,d+=O.g*Y,h+=O.b*Y;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],Y);C++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=Z,p++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(Y),Z.distance=Q,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[S]=Z;const q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[S]=q.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=z,M++}S++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(O).multiplyScalar(Y),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Z,g++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,n.pointShadow[_]=te,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=P.shadow.matrix,R++}n.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(Y),Z.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[f]=Z,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==w||v.numPointShadows!==R||v.numSpotShadows!==M||v.numSpotMaps!==A||v.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=g,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,v.directionalLength=p,v.pointLength=_,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=w,v.numPointShadows=R,v.numSpotShadows=M,v.numSpotMaps=A,v.numLightProbes=C,n.version=Im++)}function l(c,u){let d=0,h=0,p=0,_=0,S=0;const g=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const R=c[f];if(R.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(R.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:n}}function Ml(i){const e=new Um(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ml(i),e.set(s,[o])):r>=a.length?(o=new Ml(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
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
}`,km=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],zm=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sl=new ft,ji=new H,jr=new H;function Gm(i,e,t){let n=new ao;const s=new He,r=new He,a=new dt,o=new $h,l=new Yh,c={},u=t.maxTextureSize,d={[Yn]:Wt,[Wt]:Yn,[Cn]:Cn},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Bm,fragmentShader:Om}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ot(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let f=this.type;this.render=function(b,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Tl&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xs);const y=i.getRenderTarget(),U=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=f!==this.type;Y&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(z=>z.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,z=b.length;Q<z;Q++){const Z=b[Q],q=Z.shadow;if(q===void 0){Ie("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const te=q.getFrameExtents();s.multiply(te),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,q.mapSize.y=r.y));const se=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=se,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ss){if(Z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new vn(s.x,s.y,{format:ui,type:Dn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Fi(s.x,s.y,mn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=In,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Pt,q.map.depthTexture.magFilter=Pt}else Z.isPointLight?(q.map=new nc(s.x),q.map.depthTexture=new Vh(s.x,Mn)):(q.map=new vn(s.x,s.y),q.map.depthTexture=new Fi(s.x,s.y,Mn)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=In,this.type===Xs?(q.map.depthTexture.compareFunction=se?no:to,q.map.depthTexture.minFilter=Ft,q.map.depthTexture.magFilter=Ft):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Pt,q.map.depthTexture.magFilter=Pt);q.camera.updateProjectionMatrix()}const ve=q.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<ve;Ee++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(q.map),i.clear());const be=q.getViewport(Ee);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(a)}if(Z.isPointLight){const be=q.camera,We=q.matrix,lt=Z.distance||be.far;lt!==be.far&&(be.far=lt,be.updateProjectionMatrix()),ji.setFromMatrixPosition(Z.matrixWorld),be.position.copy(ji),jr.copy(be.position),jr.add(km[Ee]),be.up.copy(zm[Ee]),be.lookAt(jr),be.updateMatrixWorld(),We.makeTranslation(-ji.x,-ji.y,-ji.z),Sl.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Sl,be.coordinateSystem,be.reversedDepth)}else q.updateMatrices(Z);n=q.getFrustum(),M(C,v,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ss&&w(q,v),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(y,U,P)};function w(b,C){const v=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(s.x,s.y,{format:ui,type:Dn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,p,S,null)}function R(b,C,v,y){let U=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)U=P;else if(U=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=U.uuid,Y=C.uuid;let Q=c[O];Q===void 0&&(Q={},c[O]=Q);let z=Q[Y];z===void 0&&(z=U.clone(),Q[Y]=z,C.addEventListener("dispose",A)),U=z}if(U.visible=C.visible,U.wireframe=C.wireframe,y===ss?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:d[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const O=i.properties.get(U);O.light=v}return U}function M(b,C,v,y,U){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===ss)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),Q=b.material;if(Array.isArray(Q)){const z=Y.groups;for(let Z=0,q=z.length;Z<q;Z++){const te=z[Z],se=Q[te.materialIndex];if(se&&se.visible){const ve=R(b,se,y,U);b.onBeforeShadow(i,b,C,v,Y,ve,te),i.renderBufferDirect(v,null,Y,ve,b,te),b.onAfterShadow(i,b,C,v,Y,ve,te)}}}else if(Q.visible){const z=R(b,Q,y,U);b.onBeforeShadow(i,b,C,v,Y,z,null),i.renderBufferDirect(v,null,Y,z,b,null),b.onAfterShadow(i,b,C,v,Y,z,null)}}const O=b.children;for(let Y=0,Q=O.length;Y<Q;Y++)M(O[Y],C,v,y,U)}function A(b){b.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],U=b.target.uuid;U in y&&(y[U].dispose(),delete y[U])}}}function Vm(i,e){function t(){let D=!1;const de=new dt;let J=null;const ge=new dt(0,0,0,0);return{setMask:function(Se){J!==Se&&!D&&(i.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){D=Se},setClear:function(Se,ne,Ae,L,tt){tt===!0&&(Se*=L,ne*=L,Ae*=L),de.set(Se,ne,Ae,L),ge.equals(de)===!1&&(i.clearColor(Se,ne,Ae,L),ge.copy(de))},reset:function(){D=!1,J=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,J=null,ge=null,Se=null;return{setReversed:function(ne){if(de!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const L=Se;Se=null,this.setClear(L)}},getReversed:function(){return de},setTest:function(ne){ne?re(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!D&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(de&&(ne=_h[ne]),ge!==ne){switch(ne){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ne}},setLocked:function(ne){D=ne},setClear:function(ne){Se!==ne&&(Se=ne,de&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,J=null,ge=null,Se=null,de=!1}}}function s(){let D=!1,de=null,J=null,ge=null,Se=null,ne=null,Ae=null,L=null,tt=null;return{setTest:function(ze){D||(ze?re(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ze){de!==ze&&!D&&(i.stencilMask(ze),de=ze)},setFunc:function(ze,Ot,oe){(J!==ze||ge!==Ot||Se!==oe)&&(i.stencilFunc(ze,Ot,oe),J=ze,ge=Ot,Se=oe)},setOp:function(ze,Ot,oe){(ne!==ze||Ae!==Ot||L!==oe)&&(i.stencilOp(ze,Ot,oe),ne=ze,Ae=Ot,L=oe)},setLocked:function(ze){D=ze},setClear:function(ze){tt!==ze&&(i.clearStencil(ze),tt=ze)},reset:function(){D=!1,de=null,J=null,ge=null,Se=null,ne=null,Ae=null,L=null,tt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,_=[],S=null,g=!1,f=null,w=null,R=null,M=null,A=null,b=null,C=null,v=new Qe(0,0,0),y=0,U=!1,P=null,O=null,Y=null,Q=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=te>=1):se.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=te>=2);let ve=null,Ee={};const be=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),lt=new dt().fromArray(be),$e=new dt().fromArray(We);function ee(D,de,J,ge){const Se=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<J;Ae++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(de+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ne}const he={};he[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Ni),pt(!1),mt(So),re(i.CULL_FACE),Ye(Pn);function re(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Le(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ue(D,de){return h[D]!==de?(i.bindFramebuffer(D,de),h[D]=de,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(D,de){let J=_,ge=!1;if(D){J=p.get(de),J===void 0&&(J=[],p.set(de,J));const Se=D.textures;if(J.length!==Se.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=Se.length;ne<Ae;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=Se.length,ge=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ge=!0);ge&&i.drawBuffers(J)}function ut(D){return S!==D?(i.useProgram(D),S=D,!0):!1}const ke={[ri]:i.FUNC_ADD,[zc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};ke[Vc]=i.MIN,ke[Hc]=i.MAX;const et={[Wc]:i.ZERO,[qc]:i.ONE,[Xc]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[Yc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[th]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(D,de,J,ge,Se,ne,Ae,L,tt,ze){if(D===Pn){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),D!==kc){if(D!==f||ze!==U){if((w!==ri||A!==ri)&&(i.blendEquation(i.FUNC_ADD),w=ri,A=ri),ze)switch(D){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yo:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}R=null,M=null,b=null,C=null,v.set(0,0,0),y=0,f=D,U=ze}return}Se=Se||de,ne=ne||J,Ae=Ae||ge,(de!==w||Se!==A)&&(i.blendEquationSeparate(ke[de],ke[Se]),w=de,A=Se),(J!==R||ge!==M||ne!==b||Ae!==C)&&(i.blendFuncSeparate(et[J],et[ge],et[ne],et[Ae]),R=J,M=ge,b=ne,C=Ae),(L.equals(v)===!1||tt!==y)&&(i.blendColor(L.r,L.g,L.b,tt),v.copy(L),y=tt),f=D,U=!1}function qe(D,de){D.side===Cn?Le(i.CULL_FACE):re(i.CULL_FACE);let J=D.side===Wt;de&&(J=!J),pt(J),D.blending===Pi&&D.transparent===!1?Ye(Pn):Ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ge=D.stencilWrite;o.setTest(ge),ge&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function mt(D){D!==Bc?(re(i.CULL_FACE),D!==O&&(D===So?i.cullFace(i.BACK):D===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),O=D}function xt(D){D!==Y&&(q&&i.lineWidth(D),Y=D)}function yt(D,de,J){D?(re(i.POLYGON_OFFSET_FILL),(Q!==de||z!==J)&&(Q=de,z=J,a.getReversed()&&(de=-de),i.polygonOffset(de,J))):Le(i.POLYGON_OFFSET_FILL)}function ct(D){D?re(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function gt(D){D===void 0&&(D=i.TEXTURE0+Z-1),ve!==D&&(i.activeTexture(D),ve=D)}function F(D,de,J){J===void 0&&(ve===null?J=i.TEXTURE0+Z-1:J=ve);let ge=Ee[J];ge===void 0&&(ge={type:void 0,texture:void 0},Ee[J]=ge),(ge.type!==D||ge.texture!==de)&&(ve!==J&&(i.activeTexture(J),ve=J),i.bindTexture(D,de||he[D]),ge.type=D,ge.texture=de)}function Lt(){const D=Ee[ve];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function m(){try{i.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function k(){try{i.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function le(){try{i.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function fe(){try{i.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function $(){try{i.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function pe(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function we(D,de){d[D]!==de&&(i.pixelStorei(D,de),d[D]=de)}function _e(D){lt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),lt.copy(D))}function me(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Ce(D,de){let J=c.get(de);J===void 0&&(J=new WeakMap,c.set(de,J));let ge=J.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(de,D.name),J.set(D,ge))}function Pe(D,de){const ge=c.get(de).get(D);l.get(de)!==ge&&(i.uniformBlockBinding(de,ge,D.__bindingPointIndex),l.set(de,ge))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ve=null,Ee={},h={},p=new WeakMap,_=[],S=null,g=!1,f=null,w=null,R=null,M=null,A=null,b=null,C=null,v=new Qe(0,0,0),y=0,U=!1,P=null,O=null,Y=null,Q=null,z=null,lt.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Le,bindFramebuffer:Ue,drawBuffers:Re,useProgram:ut,setBlending:Ye,setMaterial:qe,setFlipSided:pt,setCullFace:mt,setLineWidth:xt,setPolygonOffset:yt,setScissorTest:ct,activeTexture:gt,bindTexture:F,unbindTexture:Lt,compressedTexImage2D:je,compressedTexImage3D:E,texImage2D:$,texImage3D:j,pixelStorei:we,getParameter:pe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:le,texStorage3D:fe,texSubImage2D:m,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:_e,viewport:me,reset:Fe}}function Hm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,m){return _?new OffscreenCanvas(E,m):nr("canvas")}function g(E,m,k){let W=1;const K=je(E);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const le=Math.floor(W*K.width),fe=Math.floor(W*K.height);h===void 0&&(h=S(le,fe));const $=m?S(le,fe):h;return $.width=le,$.height=fe,$.getContext("2d").drawImage(E,0,0,le,fe),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+fe+")."),$}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,m,k,W,K,le=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=m;if(m===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),k===i.SHORT&&fe&&($=fe.R16_SNORM_EXT)),m===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),m===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),k===i.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),m===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),m===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),m===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),k===i.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),m===i.RGBA){const j=le?tr:Xe.getTransfer(K);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=j===nt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),k===i.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(E,m){let k;return E?m===null||m===Mn||m===us?k=i.DEPTH24_STENCIL8:m===mn?k=i.DEPTH32F_STENCIL8:m===hs&&(k=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Mn||m===us?k=i.DEPTH_COMPONENT24:m===mn?k=i.DEPTH_COMPONENT32F:m===hs&&(k=i.DEPTH_COMPONENT16),k}function b(E,m){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Ft?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function C(E){const m=E.target;m.removeEventListener("dispose",C),y(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function v(E){const m=E.target;m.removeEventListener("dispose",v),P(m)}function y(E){const m=n.get(E);if(m.__webglInit===void 0)return;const k=E.source,W=p.get(k);if(W){const K=W[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(E),Object.keys(W).length===0&&p.delete(k)}n.remove(E)}function U(E){const m=n.get(E);i.deleteTexture(m.__webglTexture);const k=E.source,W=p.get(k);delete W[m.__cacheKey],a.memory.textures--}function P(E){const m=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let K=0;K<m.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(m.__webglFramebuffer[W][K]);else i.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)i.deleteFramebuffer(m.__webglFramebuffer[W]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const k=E.textures;for(let W=0,K=k.length;W<K;W++){const le=n.get(k[W]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(E)}let O=0;function Y(){O=0}function Q(){return O}function z(E){O=E}function Z(){const E=O;return E>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function q(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function te(E,m){const k=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){const W=E.image;if(W===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,E,m);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+m)}function se(E,m){const k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Le(k,E,m);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+m)}function ve(E,m){const k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Le(k,E,m);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+m)}function Ee(E,m){const k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Ue(k,E,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+m)}const be={[ua]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},We={[Pt]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},lt={[lh]:i.NEVER,[fh]:i.ALWAYS,[ch]:i.LESS,[to]:i.LEQUAL,[hh]:i.EQUAL,[no]:i.GEQUAL,[uh]:i.GREATER,[dh]:i.NOTEQUAL};function $e(E,m){if(m.type===mn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Ft||m.magFilter===Er||m.magFilter===Es||m.magFilter===oi||m.minFilter===Ft||m.minFilter===Er||m.minFilter===Es||m.minFilter===oi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,be[m.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,be[m.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,be[m.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,We[m.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,We[m.minFilter]),m.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,lt[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Pt||m.minFilter!==Es&&m.minFilter!==oi||m.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function ee(E,m){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",C));const W=m.source;let K=p.get(W);K===void 0&&(K={},p.set(W,K));const le=q(m);if(le!==E.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[le].usedTimes++;const fe=K[E.__cacheKey];fe!==void 0&&(K[E.__cacheKey].usedTimes--,fe.usedTimes===0&&U(m)),E.__cacheKey=le,E.__webglTexture=K[le].texture}return k}function he(E,m,k){return Math.floor(Math.floor(E/k)/m)}function re(E,m,k,W){const le=E.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,k,W,m.data);else{le.sort((we,_e)=>we.start-_e.start);let fe=0;for(let we=1;we<le.length;we++){const _e=le[fe],me=le[we],Ce=_e.start+_e.count,Pe=he(me.start,m.width,4),Fe=he(_e.start,m.width,4);me.start<=Ce+1&&Pe===Fe&&he(me.start+me.count-1,m.width,4)===Pe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++fe,le[fe]=me)}le.length=fe+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let we=0,_e=le.length;we<_e;we++){const me=le[we],Ce=Math.floor(me.start/4),Pe=Math.ceil(me.count/4),Fe=Ce%m.width,D=Math.floor(Ce/m.width),de=Pe,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Fe,D,de,J,k,W,m.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function Le(E,m,k){let W=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=i.TEXTURE_3D);const K=ee(E,m),le=m.source;t.bindTexture(W,E.__webglTexture,i.TEXTURE0+k);const fe=n.get(le);if(le.version!==fe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const J=Xe.getPrimaries(Xe.workingColorSpace),ge=m.colorSpace===Kn?null:Xe.getPrimaries(m.colorSpace),Se=m.colorSpace===Kn||J===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let j=g(m.image,!1,s.maxTextureSize);j=Lt(m,j);const pe=r.convert(m.format,m.colorSpace),we=r.convert(m.type);let _e=M(m.internalFormat,pe,we,m.normalized,m.colorSpace,m.isVideoTexture);$e(W,m);let me;const Ce=m.mipmaps,Pe=m.isVideoTexture!==!0,Fe=fe.__version===void 0||K===!0,D=le.dataReady,de=b(m,j);if(m.isDepthTexture)_e=A(m.format===li,m.type),Fe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,we,null));else if(m.isDataTexture)if(Ce.length>0){Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,Ce[0].width,Ce[0].height);for(let J=0,ge=Ce.length;J<ge;J++)me=Ce[J],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,J,_e,me.width,me.height,0,pe,we,me.data);m.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,j.width,j.height),D&&re(m,j,pe,we)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,we,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,Ce[0].width,Ce[0].height,j.depth);for(let J=0,ge=Ce.length;J<ge;J++)if(me=Ce[J],m.format!==on)if(pe!==null)if(Pe){if(D)if(m.layerUpdates.size>0){const Se=Qo(me.width,me.height,m.format,m.type);for(const ne of m.layerUpdates){const Ae=me.data.subarray(ne*Se/me.data.BYTES_PER_ELEMENT,(ne+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,me.width,me.height,1,pe,Ae)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,j.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,_e,me.width,me.height,j.depth,0,me.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,j.depth,pe,we,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,_e,me.width,me.height,j.depth,0,pe,we,me.data)}else{Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,Ce[0].width,Ce[0].height);for(let J=0,ge=Ce.length;J<ge;J++)me=Ce[J],m.format!==on?pe!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,_e,me.width,me.height,0,me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,J,_e,me.width,me.height,0,pe,we,me.data)}else if(m.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,j.width,j.height,j.depth),D)if(m.layerUpdates.size>0){const J=Qo(j.width,j.height,m.format,m.type);for(const ge of m.layerUpdates){const Se=j.data.subarray(ge*J/j.data.BYTES_PER_ELEMENT,(ge+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,j.width,j.height,1,pe,we,Se)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,we,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,pe,we,j.data);else if(m.isData3DTexture)Pe?(Fe&&t.texStorage3D(i.TEXTURE_3D,de,_e,j.width,j.height,j.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,we,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,pe,we,j.data);else if(m.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(i.TEXTURE_2D,de,_e,j.width,j.height);else{let J=j.width,ge=j.height;for(let Se=0;Se<de;Se++)t.texImage2D(i.TEXTURE_2D,Se,_e,J,ge,0,pe,we,null),J>>=1,ge>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),d.add(m),J.onpaint=ge=>{const Se=ge.changedElements;for(const ne of d)Se.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const Se=i.RGBA,ne=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ne,Ae,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Fe){const J=je(Ce[0]);t.texStorage2D(i.TEXTURE_2D,de,_e,J.width,J.height)}for(let J=0,ge=Ce.length;J<ge;J++)me=Ce[J],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,pe,we,me):t.texImage2D(i.TEXTURE_2D,J,_e,pe,we,me);m.generateMipmaps=!1}else if(Pe){if(Fe){const J=je(j);t.texStorage2D(i.TEXTURE_2D,de,_e,J.width,J.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,we,j)}else t.texImage2D(i.TEXTURE_2D,0,_e,pe,we,j);f(m)&&w(W),fe.__version=le.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Ue(E,m,k){if(m.image.length!==6)return;const W=ee(E,m),K=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);const le=n.get(K);if(K.version!==le.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const fe=Xe.getPrimaries(Xe.workingColorSpace),$=m.colorSpace===Kn?null:Xe.getPrimaries(m.colorSpace),j=m.colorSpace===Kn||fe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const pe=m.isCompressedTexture||m.image[0].isCompressedTexture,we=m.image[0]&&m.image[0].isDataTexture,_e=[];for(let ne=0;ne<6;ne++)!pe&&!we?_e[ne]=g(m.image[ne],!0,s.maxCubemapSize):_e[ne]=we?m.image[ne].image:m.image[ne],_e[ne]=Lt(m,_e[ne]);const me=_e[0],Ce=r.convert(m.format,m.colorSpace),Pe=r.convert(m.type),Fe=M(m.internalFormat,Ce,Pe,m.normalized,m.colorSpace),D=m.isVideoTexture!==!0,de=le.__version===void 0||W===!0,J=K.dataReady;let ge=b(m,me);$e(i.TEXTURE_CUBE_MAP,m);let Se;if(pe){D&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Fe,me.width,me.height);for(let ne=0;ne<6;ne++){Se=_e[ne].mipmaps;for(let Ae=0;Ae<Se.length;Ae++){const L=Se[Ae];m.format!==on?Ce!==null?D?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,L.width,L.height,Ce,L.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Fe,L.width,L.height,0,L.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,L.width,L.height,Ce,Pe,L.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Fe,L.width,L.height,0,Ce,Pe,L.data)}}}else{if(Se=m.mipmaps,D&&de){Se.length>0&&ge++;const ne=je(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){D?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e[ne].width,_e[ne].height,Ce,Pe,_e[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,_e[ne].width,_e[ne].height,0,Ce,Pe,_e[ne].data);for(let Ae=0;Ae<Se.length;Ae++){const tt=Se[Ae].image[ne].image;D?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,tt.width,tt.height,Ce,Pe,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Fe,tt.width,tt.height,0,Ce,Pe,tt.data)}}else{D?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Pe,_e[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,Ce,Pe,_e[ne]);for(let Ae=0;Ae<Se.length;Ae++){const L=Se[Ae];D?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ce,Pe,L.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Fe,Ce,Pe,L.image[ne])}}}f(m)&&w(i.TEXTURE_CUBE_MAP),le.__version=K.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Re(E,m,k,W,K,le){const fe=r.convert(k.format,k.colorSpace),$=r.convert(k.type),j=M(k.internalFormat,fe,$,k.normalized,k.colorSpace),pe=n.get(m),we=n.get(k);if(we.__renderTarget=m,!pe.__hasExternalTextures){const _e=Math.max(1,m.width>>le),me=Math.max(1,m.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,j,_e,me,m.depth,0,fe,$,null):t.texImage2D(K,le,j,_e,me,0,fe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),gt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,we.__webglTexture,0,ct(m)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,we.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(E,m,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),m.depthBuffer){const W=m.depthTexture,K=W&&W.isDepthTexture?W.type:null,le=A(m.stencilBuffer,K),fe=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(m),le,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(m),le,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,le,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,E)}else{const W=m.textures;for(let K=0;K<W.length;K++){const le=W[K],fe=r.convert(le.format,le.colorSpace),$=r.convert(le.type),j=M(le.internalFormat,fe,$,le.normalized,le.colorSpace);gt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(m),j,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(m),j,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,j,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(E,m,k){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),$e(i.TEXTURE_CUBE_MAP,m.depthTexture);const pe=r.convert(m.depthTexture.format),we=r.convert(m.depthTexture.type);let _e;m.depthTexture.format===In?_e=i.DEPTH_COMPONENT24:m.depthTexture.format===li&&(_e=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,m.width,m.height,0,pe,we,null)}}else te(m.depthTexture,0);const le=K.__webglTexture,fe=ct(m),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,j=m.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===In)gt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,le,0);else if(m.depthTexture.format===li)gt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(E){const m=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=W}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ke(m.__webglFramebuffer[W],E,W);else{const W=E.texture.mipmaps;W&&W.length>0?ke(m.__webglFramebuffer[0],E,0):ke(m.__webglFramebuffer,E,0)}else if(k){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=i.createRenderbuffer(),ut(m.__webglDepthbuffer[W],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=m.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ut(m.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(E,m,k){const W=n.get(E);m!==void 0&&Re(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&et(E)}function qe(E){const m=E.texture,k=n.get(E),W=n.get(m);E.addEventListener("dispose",v);const K=E.textures,le=E.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=m.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<m.mipmaps.length;j++)k.__webglFramebuffer[$][j]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<m.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let $=0,j=K.length;$<j;$++){const pe=n.get(K[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&gt(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const j=K[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const pe=r.convert(j.format,j.colorSpace),we=r.convert(j.type),_e=M(j.internalFormat,pe,we,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),me=ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),$e(i.TEXTURE_CUBE_MAP,m);for(let $=0;$<6;$++)if(m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)Re(k.__webglFramebuffer[$][j],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Re(k.__webglFramebuffer[$],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(m)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let $=0,j=K.length;$<j;$++){const pe=K[$],we=n.get(pe);let _e=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,we.__webglTexture),$e(_e,pe),Re(k.__webglFramebuffer,E,pe,i.COLOR_ATTACHMENT0+$,_e,0),f(pe)&&w(_e)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),$e($,m),m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)Re(k.__webglFramebuffer[j],E,m,i.COLOR_ATTACHMENT0,$,j);else Re(k.__webglFramebuffer,E,m,i.COLOR_ATTACHMENT0,$,0);f(m)&&w($),t.unbindTexture()}E.depthBuffer&&et(E)}function pt(E){const m=E.textures;for(let k=0,W=m.length;k<W;k++){const K=m[k];if(f(K)){const le=R(E),fe=n.get(K).__webglTexture;t.bindTexture(le,fe),w(le),t.unbindTexture()}}}const mt=[],xt=[];function yt(E){if(E.samples>0){if(gt(E)===!1){const m=E.textures,k=E.width,W=E.height;let K=i.COLOR_BUFFER_BIT;const le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(E),$=m.length>1;if($)for(let pe=0;pe<m.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const j=E.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<m.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const we=n.get(m[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,K,i.NEAREST),l===!0&&(mt.length=0,xt.length=0,mt.push(i.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(mt.push(le),xt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<m.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const we=n.get(m[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const m=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function ct(E){return Math.min(s.maxSamples,E.samples)}function gt(E){const m=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function F(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Lt(E,m){const k=E.colorSpace,W=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==er&&k!==Kn&&(Xe.getTransfer(k)===nt?(W!==on||K!==Qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),m}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.getTextureUnits=Q,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=ve,this.setTextureCube=Ee,this.rebindTextures=Ye,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wm(i,e){function t(n,s=Kn){let r;const a=Xe.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Fl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===kl)return i.ALPHA;if(n===zl)return i.RGB;if(n===on)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===eo)return i.RGBA_INTEGER;if(n===Ks||n===$s||n===Ys||n===Zs)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===xa||n===Ma||n===Sa||n===Qs||n===Ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===va)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ma)return r.COMPRESSED_R11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qs)return r.COMPRESSED_RG11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===ba||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Oa||n===ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ga||n===js||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:qm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",g=new Km,f={},w=t.getContextAttributes();let R=null,M=null;const A=[],b=[],C=new He;let v=null;const y=new Jt;y.viewport=new dt;const U=new Jt;U.viewport=new dt;const P=[y,U],O=new nu;let Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=A[ee];return he===void 0&&(he=new Pr,A[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=A[ee];return he===void 0&&(he=new Pr,A[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=A[ee];return he===void 0&&(he=new Pr,A[ee]=he),he.getHandSpace()};function z(ee){const he=b.indexOf(ee.inputSource);if(he===-1)return;const re=A[he];re!==void 0&&(re.update(ee.inputSource,ee.frame,c||a),re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",q);for(let ee=0;ee<A.length;ee++){const he=b[ee];he!==null&&(b[ee]=null,A[ee].disconnect(he))}Y=null,Q=null,g.reset();for(const ee in f)delete f[ee];e.setRenderTarget(R),p=null,h=null,d=null,s=null,M=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",q),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ue=null;w.depth&&(Ue=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=w.stencil?li:In,Le=w.stencil?us:Mn);const Re={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new vn(h.textureWidth,h.textureHeight,{format:on,type:Qt,depthTexture:new Fi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new vn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(ee){for(let he=0;he<ee.removed.length;he++){const re=ee.removed[he],Le=b.indexOf(re);Le>=0&&(b[Le]=null,A[Le].disconnect(re))}for(let he=0;he<ee.added.length;he++){const re=ee.added[he];let Le=b.indexOf(re);if(Le===-1){for(let Re=0;Re<A.length;Re++)if(Re>=b.length){b.push(re),Le=Re;break}else if(b[Re]===null){b[Re]=re,Le=Re;break}if(Le===-1)break}const Ue=A[Le];Ue&&Ue.connect(re)}}const te=new H,se=new H;function ve(ee,he,re){te.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(re.matrixWorld);const Le=te.distanceTo(se),Ue=he.projectionMatrix.elements,Re=re.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),ke=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],Ye=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],pt=(Re[8]+1)/Re[0],mt=ut*qe,xt=ut*pt,yt=Le/(-qe+pt),ct=yt*-qe;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ct),ee.translateZ(yt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const gt=ut+yt,F=ke+yt,Lt=mt-ct,je=xt+(Le-ct),E=et*ke/F*gt,m=Ye*ke/F*gt;ee.projectionMatrix.makePerspective(Lt,je,E,m,gt,F),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Ee(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let he=ee.near,re=ee.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(re=g.depthFar)),O.near=U.near=y.near=he,O.far=U.far=y.far=re,(Y!==O.near||Q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,Q=O.far),O.layers.mask=ee.layers.mask|6,y.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;const Le=ee.parent,Ue=O.cameras;Ee(O,Le);for(let Re=0;Re<Ue.length;Re++)Ee(Ue[Re],Le);Ue.length===2?ve(O,y,U):O.projectionMatrix.copy(y.projectionMatrix),be(ee,O,Le)};function be(ee,he,re){re===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Wa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(ee){return f[ee]};let We=null;function lt(ee,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Le=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let ke=0;ke<re.length;ke++){const et=re[ke];let Ye=null;if(p!==null)Ye=p.getViewport(et);else{const pt=d.getViewSubImage(h,et);Ye=pt.viewport,ke===0&&(e.setRenderTargetTextures(M,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(M))}let qe=P[ke];qe===void 0&&(qe=new Jt,qe.layers.enable(ke),qe.viewport=new dt,P[ke]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(qe)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const ke=d.getDepthInformation(re[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if(Ue&&Ue.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ke=0;ke<re.length;ke++){const et=re[ke].camera;if(et){let Ye=f[et];Ye||(Ye=new Zl,f[et]=Ye);const qe=d.getCameraImage(et);Ye.sourceTexture=qe}}}}for(let re=0;re<A.length;re++){const Le=b[re],Ue=A[re];Le!==null&&Ue!==void 0&&Ue.update(Le,he,c||a)}We&&We(ee,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const $e=new ec;$e.setAnimationLoop(lt),this.setAnimationLoop=function(ee){We=ee},this.dispose=function(){}}}const Ym=new ft,oc=new Be;oc.set(-1,0,0,0,1,0,0,0,1);function Zm(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Jl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,w,R,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),_(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),S(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,w,R):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Wt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Wt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const w=e.get(f),R=w.envMap,M=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(oc),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,w,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*w,g.scale.value=R*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,w){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const w=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const b=A.program;n.uniformBlockBinding(M,b)}function c(M,A){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",w));const C=A.program;n.updateUBOMapping(M,C);const v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const A=d();M.__bindingPointIndex=A;const b=i.createBuffer(),C=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=s[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,y=b.length;v<y;v++){const U=b[v];if(Array.isArray(U))for(let P=0,O=U.length;P<O;P++)p(U[P],v,P,C);else p(U,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,b,C){if(S(M,A,b,C)===!0){const v=M.__offset,y=M.value;if(Array.isArray(y)){let U=0;for(let P=0;P<y.length;P++){const O=y[P],Y=f(O);_(O,M.__data,U),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,A,b){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,b)}function S(M,A,b,C){const v=M.value,y=A+"_"+b;if(C[y]===void 0)return typeof v=="number"||typeof v=="boolean"?C[y]=v:ArrayBuffer.isView(v)?C[y]=v.slice():C[y]=v.clone(),!0;{const U=C[y];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return C[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function g(M){const A=M.uniforms;let b=0;const C=16;for(let y=0,U=A.length;y<U;y++){const P=Array.isArray(A[y])?A[y]:[A[y]];for(let O=0,Y=P.length;O<Y;O++){const Q=P[O],z=Array.isArray(Q.value)?Q.value:[Q.value];for(let Z=0,q=z.length;Z<q;Z++){const te=z[Z],se=f(te),ve=b%C,Ee=ve%se.boundary,be=ve+Ee;b+=Ee,be!==0&&C-be<se.storage&&(b+=C-be),Q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=se.storage}}}const v=b%C;return v>0&&(b+=C-v),M.__size=b,M.__cache={},this}function f(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),A}function w(M){const A=M.target;A.removeEventListener("dispose",w);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}const Qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function jm(){return un===null&&(un=new Oh(Qm,16,16,ui,Dn),un.name="DFG_LUT",un.minFilter=Ft,un.magFilter=Ft,un.wrapS=Rn,un.wrapT=Rn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class e0{constructor(e={}){const{canvas:t=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,g=new Set([eo,ja,Qa]),f=new Set([Qt,Mn,hs,us,Za,Ja]),w=new Uint32Array(4),R=new Int32Array(4),M=new H;let A=null,b=null;const C=[],v=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let P=!1,O=null,Y=null,Q=null,z=null;this._outputColorSpace=tn;let Z=0,q=0,te=null,se=-1,ve=null;const Ee=new dt,be=new dt;let We=null;const lt=new Qe(0);let $e=0,ee=t.width,he=t.height,re=1,Le=null,Ue=null;const Re=new dt(0,0,ee,he),ut=new dt(0,0,ee,he);let ke=!1;const et=new ao;let Ye=!1,qe=!1;const pt=new ft,mt=new H,xt=new dt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function gt(){return te===null?re:1}let F=n;function Lt(x,B){return t.getContext(x,B)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),F===null){const B="webgl2";if(F=Lt(B,x),F===null)throw Lt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Ze("WebGLRenderer: "+x.message),x}let je,E,m,k,W,K,le,fe,$,j,pe,we,_e,me,Ce,Pe,Fe,D,de,J,ge,Se,ne;function Ae(){je=new jf(F),je.init(),ge=new Wm(F,je),E=new qf(F,je,e,ge),m=new Vm(F,je),E.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),Y=F.createFramebuffer(),Q=F.createFramebuffer(),z=F.createFramebuffer(),k=new np(F),W=new Cm,K=new Hm(F,je,m,W,E,ge,k),le=new Qf(U),fe=new ru(F),Se=new Hf(F,fe),$=new ep(F,fe,k,Se),j=new sp(F,$,fe,Se,k),D=new ip(F,E,K),Ce=new Xf(W),pe=new wm(U,le,je,E,Se,Ce),we=new Zm(U,W),_e=new Pm,me=new Fm(je),Fe=new Vf(U,le,m,j,_,l),Pe=new Gm(U,j,E),ne=new Jm(F,k,E,m),de=new Wf(F,je,k),J=new tp(F,je,k),k.programs=pe.programs,U.capabilities=E,U.extensions=je,U.properties=W,U.renderLists=_e,U.shadowMap=Pe,U.state=m,U.info=k}Ae(),S!==Qt&&(y=new ap(S,t.width,t.height,o,s,r));const L=new $m(U,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(x){x!==void 0&&(re=x,this.setSize(ee,he,!1))},this.getSize=function(x){return x.set(ee,he)},this.setSize=function(x,B,X=!0){if(L.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=x,he=B,t.width=Math.floor(x*re),t.height=Math.floor(B*re),X===!0&&(t.style.width=x+"px",t.style.height=B+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(ee*re,he*re).floor()},this.setDrawingBufferSize=function(x,B,X){ee=x,he=B,re=X,t.width=Math.floor(x*X),t.height=Math.floor(B*X),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(S===Qt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Ee)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,B,X,G){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,B,X,G),m.viewport(Ee.copy(Re).multiplyScalar(re).round())},this.getScissor=function(x){return x.copy(ut)},this.setScissor=function(x,B,X,G){x.isVector4?ut.set(x.x,x.y,x.z,x.w):ut.set(x,B,X,G),m.scissor(be.copy(ut).multiplyScalar(re).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(x){m.setScissorTest(ke=x)},this.setOpaqueSort=function(x){Le=x},this.setTransparentSort=function(x){Ue=x},this.getClearColor=function(x){return x.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,X=!0){let G=0;if(x){let V=!1;if(te!==null){const xe=te.texture.format;V=g.has(xe)}if(V){const xe=te.texture.type,ue=f.has(xe),T=Fe.getClearColor(),I=Fe.getClearAlpha(),N=T.r,ie=T.g,ae=T.b;ue?(w[0]=N,w[1]=ie,w[2]=ae,w[3]=I,F.clearBufferuiv(F.COLOR,0,w)):(R[0]=N,R[1]=ie,R[2]=ae,R[3]=I,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}B&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Fe.dispose(),_e.dispose(),me.dispose(),W.dispose(),le.dispose(),j.dispose(),Se.dispose(),ne.dispose(),pe.dispose(),L.dispose(),L.removeEventListener("sessionstart",Gi),L.removeEventListener("sessionend",Vi),Te.stop()};function tt(x){x.preventDefault(),Ro("WebGLRenderer: Context Lost."),P=!0}function ze(){Ro("WebGLRenderer: Context Restored."),P=!1;const x=k.autoReset,B=Pe.enabled,X=Pe.autoUpdate,G=Pe.needsUpdate,V=Pe.type;Ae(),k.autoReset=x,Pe.enabled=B,Pe.autoUpdate=X,Pe.needsUpdate=G,Pe.type=V}function Ot(x){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const B=x.target;B.removeEventListener("dispose",oe),Jn(B)}function Jn(x){Mt(x),W.remove(x)}function Mt(x){const B=W.get(x).programs;B!==void 0&&(B.forEach(function(X){pe.releaseProgram(X)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,X,G,V,xe){B===null&&(B=yt);const ue=V.isMesh&&V.matrixWorld.determinantAffine()<0,T=hr(x,B,X,G,V);m.setMaterial(G,ue);let I=X.index,N=1;if(G.wireframe===!0){if(I=$.getWireframeAttribute(X),I===void 0)return;N=2}const ie=X.drawRange,ae=X.attributes.position;let ce=ie.start*N,Ve=(ie.start+ie.count)*N;xe!==null&&(ce=Math.max(ce,xe.start*N),Ve=Math.min(Ve,(xe.start+xe.count)*N)),I!==null?(ce=Math.max(ce,0),Ve=Math.min(Ve,I.count)):ae!=null&&(ce=Math.max(ce,0),Ve=Math.min(Ve,ae.count));const rt=Ve-ce;if(rt<0||rt===1/0)return;Se.setup(V,G,T,X,I);let _t,it=de;if(I!==null&&(_t=fe.get(I),it=J,it.setIndex(_t)),V.isMesh)G.wireframe===!0?(m.setLineWidth(G.wireframeLinewidth*gt()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(V.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),m.setLineWidth(Dt*gt()),V.isLineSegments?it.setMode(F.LINES):V.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else V.isPoints?it.setMode(F.POINTS):V.isSprite&&it.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Dt=V._multiDrawStarts,ye=V._multiDrawCounts,Xt=V._multiDrawCount,Je=I?fe.get(I).bytesPerElement:1,jt=W.get(G).currentProgram.getUniforms();for(let cn=0;cn<Xt;cn++)jt.setValue(F,"_gl_DrawID",cn),it.render(Dt[cn]/Je,ye[cn])}else if(V.isInstancedMesh)it.renderInstances(ce,rt,V.count);else if(X.isInstancedBufferGeometry){const Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,Dt);it.renderInstances(ce,rt,ye)}else it.render(ce,rt)};function qt(x,B,X){x.transparent===!0&&x.side===Cn&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,fi(x,B,X),x.side=Yn,x.needsUpdate=!0,fi(x,B,X),x.side=Cn):fi(x,B,X)}this.compile=function(x,B,X=null){X===null&&(X=x),b=me.get(X),b.init(B),v.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),x!==X&&x.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const G=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let ue=0;ue<xe.length;ue++){const T=xe[ue];qt(T,X,V),G.add(T)}else qt(xe,X,V),G.add(xe)}),b=v.pop(),G},this.compileAsync=function(x,B,X=null){const G=this.compile(x,B,X);return new Promise(V=>{function xe(){if(G.forEach(function(ue){W.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){V(x);return}setTimeout(xe,10)}je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let zi=null;function Vt(x){zi&&zi(x)}function Gi(){Te.stop()}function Vi(){Te.start()}const Te=new ec;Te.setAnimationLoop(Vt),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(x){zi=x,L.setAnimationLoop(x),x===null?Te.stop():Te.start()},L.addEventListener("sessionstart",Gi),L.addEventListener("sessionend",Vi),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(x,B);const X=L.enabled===!0&&L.isPresenting===!0,G=y!==null&&(te===null||X)&&y.begin(U,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,B,te),b=me.get(x,v.length),b.init(B),b.state.textureUnits=K.getTextureUnits(),v.push(b),pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(pt,gn,B.reversedDepth),qe=this.localClippingEnabled,Ye=Ce.init(this.clippingPlanes,qe),A=_e.get(x,C.length),A.init(),C.push(A),L.enabled===!0&&L.isPresenting===!0){const ue=U.xr.getDepthSensingMesh();ue!==null&&Hi(ue,B,-1/0,U.sortObjects)}Hi(x,B,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(Le,Ue,B.reversedDepth),ct=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,ct&&Fe.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ce.beginShadows();const V=b.state.shadowsArray;if(Pe.render(V,x,B),Ye===!0&&Ce.endShadows(),(G&&y.hasRenderPass())===!1){const ue=A.opaque,T=A.transmissive;if(b.setupLights(),B.isArrayCamera){const I=B.cameras;if(T.length>0)for(let N=0,ie=I.length;N<ie;N++){const ae=I[N];gs(ue,T,x,ae)}ct&&Fe.render(x);for(let N=0,ie=I.length;N<ie;N++){const ae=I[N];Wi(A,x,ae,ae.viewport)}}else T.length>0&&gs(ue,T,x,B),ct&&Fe.render(x),Wi(A,x,B)}te!==null&&q===0&&(K.updateMultisampleRenderTarget(te),K.updateRenderTargetMipmap(te)),G&&y.end(U),x.isScene===!0&&x.onAfterRender(U,x,B),Se.resetDefaultState(),se=-1,ve=null,v.pop(),v.length>0?(b=v[v.length-1],K.setTextureUnits(b.state.textureUnits),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,O!==null&&O.renderEnd()};function Hi(x,B,X,G){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||et.intersectsSprite(x)){G&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);const ue=j.update(x),T=x.material;T.visible&&A.push(x,ue,T,X,xt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||et.intersectsObject(x))){const ue=j.update(x),T=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),xt.copy(ue.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(T)){const I=ue.groups;for(let N=0,ie=I.length;N<ie;N++){const ae=I[N],ce=T[ae.materialIndex];ce&&ce.visible&&A.push(x,ue,ce,X,xt.z,ae)}}else T.visible&&A.push(x,ue,T,X,xt.z,null)}}const xe=x.children;for(let ue=0,T=xe.length;ue<T;ue++)Hi(xe[ue],B,X,G)}function Wi(x,B,X,G){const{opaque:V,transmissive:xe,transparent:ue}=x;b.setupLightsView(X),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,X),G&&m.viewport(Ee.copy(G)),V.length>0&&Qn(V,B,X),xe.length>0&&Qn(xe,B,X),ue.length>0&&Qn(ue,B,X),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function gs(x,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const ce=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new vn(1,1,{generateMipmaps:!0,type:ce?Dn:Qt,minFilter:oi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const xe=b.state.transmissionRenderTarget[G.id],ue=G.viewport||Ee;xe.setSize(ue.z*U.transmissionResolutionScale,ue.w*U.transmissionResolutionScale);const T=U.getRenderTarget(),I=U.getActiveCubeFace(),N=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(lt),$e=U.getClearAlpha(),$e<1&&U.setClearColor(16777215,.5),U.clear(),ct&&Fe.render(X);const ie=U.toneMapping;U.toneMapping=_n;const ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,G),Qn(x,X,G),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),je.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ve=0,rt=B.length;Ve<rt;Ve++){const _t=B[Ve],{object:it,geometry:Dt,material:ye,group:Xt}=_t;if(ye.side===Cn&&it.layers.test(G.layers)){const Je=ye.side;ye.side=Wt,ye.needsUpdate=!0,_s(it,X,G,Dt,ye,Xt),ye.side=Je,ye.needsUpdate=!0,ce=!0}}ce===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}U.setRenderTarget(T,I,N),U.setClearColor(lt,$e),ae!==void 0&&(G.viewport=ae),U.toneMapping=ie}function Qn(x,B,X){const G=B.isScene===!0?B.overrideMaterial:null;for(let V=0,xe=x.length;V<xe;V++){const ue=x[V],{object:T,geometry:I,group:N}=ue;let ie=ue.material;ie.allowOverride===!0&&G!==null&&(ie=G),T.layers.test(X.layers)&&_s(T,B,X,I,ie,N)}}function _s(x,B,X,G,V,xe){x.onBeforeRender(U,B,X,G,V,xe),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(U,B,X,G,x,xe),V.transparent===!0&&V.side===Cn&&V.forceSinglePass===!1?(V.side=Wt,V.needsUpdate=!0,U.renderBufferDirect(X,B,G,V,x,xe),V.side=Yn,V.needsUpdate=!0,U.renderBufferDirect(X,B,G,V,x,xe),V.side=Cn):U.renderBufferDirect(X,B,G,V,x,xe),x.onAfterRender(U,B,X,G,V,xe)}function fi(x,B,X){B.isScene!==!0&&(B=yt);const G=W.get(x),V=b.state.lights,xe=b.state.shadowsArray,ue=V.state.version,T=pe.getParameters(x,V.state,xe,B,X,b.state.lightProbeGridArray),I=pe.getProgramCacheKey(T);let N=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;const ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=le.get(x.envMap||G.environment,ie),G.envMapRotation=G.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,N===void 0&&(x.addEventListener("dispose",oe),N=new Map,G.programs=N);let ae=N.get(I);if(ae!==void 0){if(G.currentProgram===ae&&G.lightsStateVersion===ue)return qi(x,T),ae}else T.uniforms=pe.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,X,T),x.onBeforeCompile(T,U),ae=pe.acquireProgram(T,I),N.set(I,ae),G.uniforms=T.uniforms;const ce=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ce.clippingPlanes=Ce.uniform),qi(x,T),G.needsLights=dr(x),G.lightsStateVersion=ue,G.needsLights&&(ce.ambientLightColor.value=V.state.ambient,ce.lightProbe.value=V.state.probe,ce.directionalLights.value=V.state.directional,ce.directionalLightShadows.value=V.state.directionalShadow,ce.spotLights.value=V.state.spot,ce.spotLightShadows.value=V.state.spotShadow,ce.rectAreaLights.value=V.state.rectArea,ce.ltc_1.value=V.state.rectAreaLTC1,ce.ltc_2.value=V.state.rectAreaLTC2,ce.pointLights.value=V.state.point,ce.pointLightShadows.value=V.state.pointShadow,ce.hemisphereLights.value=V.state.hemi,ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ce.spotLightMatrix.value=V.state.spotLightMatrix,ce.spotLightMap.value=V.state.spotLightMap,ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=ae,G.uniformsList=null,ae}function vs(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=Js.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function qi(x,B){const X=W.get(x);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function xs(x,B){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let X=0,G=x.length;X<G;X++){const V=x[X];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function hr(x,B,X,G,V){B.isScene!==!0&&(B=yt),K.resetTextureUnits();const xe=B.fog,ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,T=te===null?U.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,I=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,N=le.get(G.envMap||ue,I),ie=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ce=!!X.morphAttributes.position,Ve=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let _t=_n;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(_t=U.toneMapping);const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Dt=it!==void 0?it.length:0,ye=W.get(G),Xt=b.state.lights;if(Ye===!0&&(qe===!0||x!==ve)){const at=x===ve&&G.id===se;Ce.setState(G,x,at)}let Je=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Xt.state.version||ye.outputColorSpace!==T||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==N||G.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ce.numPlanes||ye.numIntersection!==Ce.numIntersection)||ye.vertexAlphas!==ie||ye.vertexTangents!==ae||ye.morphTargets!==ce||ye.morphNormals!==Ve||ye.morphColors!==rt||ye.toneMapping!==_t||ye.morphTargetsCount!==Dt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ye.__version=G.version);let jt=ye.currentProgram;Je===!0&&(jt=fi(G,B,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,jt,ye));let cn=!1,Nn=!1,pi=!1;const st=jt.getUniforms(),vt=ye.uniforms;if(m.useProgram(jt.program)&&(cn=!0,Nn=!0,pi=!0),G.id!==se&&(se=G.id,Nn=!0),ye.needsLights){const at=xs(b.state.lightProbeGridArray,V);ye.lightProbeGrid!==at&&(ye.lightProbeGrid=at,Nn=!0)}if(cn||ve!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(F,"projectionMatrix",x.projectionMatrix),st.setValue(F,"viewMatrix",x.matrixWorldInverse);const Fn=st.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,mt.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),ve!==x&&(ve=x,Nn=!0,pi=!0)}if(ye.needsLights&&(Xt.state.directionalShadowMap.length>0&&st.setValue(F,"directionalShadowMap",Xt.state.directionalShadowMap,K),Xt.state.spotShadowMap.length>0&&st.setValue(F,"spotShadowMap",Xt.state.spotShadowMap,K),Xt.state.pointShadowMap.length>0&&st.setValue(F,"pointShadowMap",Xt.state.pointShadowMap,K)),V.isSkinnedMesh){st.setOptional(F,V,"bindMatrix"),st.setOptional(F,V,"bindMatrixInverse");const at=V.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),st.setValue(F,"boneTexture",at.boneTexture,K))}V.isBatchedMesh&&(st.setOptional(F,V,"batchingTexture"),st.setValue(F,"batchingTexture",V._matricesTexture,K),st.setOptional(F,V,"batchingIdTexture"),st.setValue(F,"batchingIdTexture",V._indirectTexture,K),st.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(F,"batchingColorTexture",V._colorsTexture,K));const Un=X.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&D.update(V,X,jt),(Nn||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,st.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(vt.envMapIntensity.value=B.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=jm()),Nn){if(st.setValue(F,"toneMappingExposure",U.toneMappingExposure),ye.needsLights&&ur(vt,pi),xe&&G.fog===!0&&we.refreshFogUniforms(vt,xe),we.refreshMaterialUniforms(vt,G,re,he,b.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){const at=ye.lightProbeGrid;vt.probesSH.value=at.texture,vt.probesMin.value.copy(at.boundingBox.min),vt.probesMax.value.copy(at.boundingBox.max),vt.probesResolution.value.copy(at.resolution)}Js.upload(F,vs(ye),vt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Js.upload(F,vs(ye),vt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(F,"center",V.center),st.setValue(F,"modelViewMatrix",V.modelViewMatrix),st.setValue(F,"normalMatrix",V.normalMatrix),st.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const at=G.uniformsGroups;for(let Fn=0,mi=at.length;Fn<mi;Fn++){const go=at[Fn];ne.update(go,jt),ne.bind(go,jt)}}return jt}function ur(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function dr(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,B,X){const G=W.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=B,W.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const X=W.get(x);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(x,B=0,X=0){te=x,Z=B,q=X;let G=null,V=!1,xe=!1;if(x){const T=W.get(x);if(T.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(F.FRAMEBUFFER,T.__webglFramebuffer),Ee.copy(x.viewport),be.copy(x.scissor),We=x.scissorTest,m.viewport(Ee),m.scissor(be),m.setScissorTest(We),se=-1;return}else if(T.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(T.__hasExternalTextures)K.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ie=x.depthTexture;if(T.__boundDepthTexture!==ie){if(ie!==null&&W.has(ie)&&(x.width!==ie.image.width||x.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const I=x.texture;(I.isData3DTexture||I.isDataArrayTexture||I.isCompressedArrayTexture)&&(xe=!0);const N=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(N[B])?G=N[B][X]:G=N[B],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?G=W.get(x).__webglMultisampledFramebuffer:Array.isArray(N)?G=N[X]:G=N,Ee.copy(x.viewport),be.copy(x.scissor),We=x.scissorTest}else Ee.copy(Re).multiplyScalar(re).floor(),be.copy(ut).multiplyScalar(re).floor(),We=ke;if(X!==0&&(G=Y),m.bindFramebuffer(F.FRAMEBUFFER,G)&&m.drawBuffers(x,G),m.viewport(Ee),m.scissor(be),m.setScissorTest(We),V){const T=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,T.__webglTexture,X)}else if(xe){const T=B;for(let I=0;I<x.textures.length;I++){const N=W.get(x.textures[I]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+I,N.__webglTexture,X,T)}}else if(x!==null&&X!==0){const T=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,T.__webglTexture,X)}se=-1},this.readRenderTargetPixels=function(x,B,X,G,V,xe,ue,T=0){if(!(x&&x.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let I=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(I=I[ue]),I){m.bindFramebuffer(F.FRAMEBUFFER,I);try{const N=x.textures[T],ie=N.format,ae=N.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+T),!E.textureFormatReadable(ie)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(ae)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-G&&X>=0&&X<=x.height-V&&F.readPixels(B,X,G,V,ge.convert(ie),ge.convert(ae),xe)}finally{const N=te!==null?W.get(te).__webglFramebuffer:null;m.bindFramebuffer(F.FRAMEBUFFER,N)}}},this.readRenderTargetPixelsAsync=async function(x,B,X,G,V,xe,ue,T=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(I=I[ue]),I)if(B>=0&&B<=x.width-G&&X>=0&&X<=x.height-V){m.bindFramebuffer(F.FRAMEBUFFER,I);const N=x.textures[T],ie=N.format,ae=N.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+T),!E.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(B,X,G,V,ge.convert(ie),ge.convert(ae),0);const Ve=te!==null?W.get(te).__webglFramebuffer:null;m.bindFramebuffer(F.FRAMEBUFFER,Ve);const rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gh(F,rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(ce),F.deleteSync(rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,X=0){const G=Math.pow(2,-X),V=Math.floor(x.image.width*G),xe=Math.floor(x.image.height*G),ue=B!==null?B.x:0,T=B!==null?B.y:0;K.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ue,T,V,xe),m.unbindTexture()},this.copyTextureToTexture=function(x,B,X=null,G=null,V=0,xe=0){let ue,T,I,N,ie,ae,ce,Ve,rt;const _t=x.isCompressedTexture?x.mipmaps[xe]:x.image;if(X!==null)ue=X.max.x-X.min.x,T=X.max.y-X.min.y,I=X.isBox3?X.max.z-X.min.z:1,N=X.min.x,ie=X.min.y,ae=X.isBox3?X.min.z:0;else{const vt=Math.pow(2,-V);ue=Math.floor(_t.width*vt),T=Math.floor(_t.height*vt),x.isDataArrayTexture?I=_t.depth:x.isData3DTexture?I=Math.floor(_t.depth*vt):I=1,N=0,ie=0,ae=0}G!==null?(ce=G.x,Ve=G.y,rt=G.z):(ce=0,Ve=0,rt=0);const it=ge.convert(B.format),Dt=ge.convert(B.type);let ye;B.isData3DTexture?(K.setTexture3D(B,0),ye=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),ye=F.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),ye=F.TEXTURE_2D),m.activeTexture(F.TEXTURE0),m.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),m.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),m.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Xt=m.getParameter(F.UNPACK_ROW_LENGTH),Je=m.getParameter(F.UNPACK_IMAGE_HEIGHT),jt=m.getParameter(F.UNPACK_SKIP_PIXELS),cn=m.getParameter(F.UNPACK_SKIP_ROWS),Nn=m.getParameter(F.UNPACK_SKIP_IMAGES);m.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),m.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),m.pixelStorei(F.UNPACK_SKIP_PIXELS,N),m.pixelStorei(F.UNPACK_SKIP_ROWS,ie),m.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);const pi=x.isDataArrayTexture||x.isData3DTexture,st=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const vt=W.get(x),Un=W.get(B),at=W.get(vt.__renderTarget),Fn=W.get(Un.__renderTarget);m.bindFramebuffer(F.READ_FRAMEBUFFER,at.__webglFramebuffer),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let mi=0;mi<I;mi++)pi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(x).__webglTexture,V,ae+mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(B).__webglTexture,xe,rt+mi)),F.blitFramebuffer(N,ie,ue,T,ce,Ve,ue,T,F.DEPTH_BUFFER_BIT,F.NEAREST);m.bindFramebuffer(F.READ_FRAMEBUFFER,null),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||W.has(x)){const vt=W.get(x),Un=W.get(B);m.bindFramebuffer(F.READ_FRAMEBUFFER,Q),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let at=0;at<I;at++)pi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,V,ae+at):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,V),st?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,xe,rt+at):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,xe),V!==0?F.blitFramebuffer(N,ie,ue,T,ce,Ve,ue,T,F.COLOR_BUFFER_BIT,F.NEAREST):st?F.copyTexSubImage3D(ye,xe,ce,Ve,rt+at,N,ie,ue,T):F.copyTexSubImage2D(ye,xe,ce,Ve,N,ie,ue,T);m.bindFramebuffer(F.READ_FRAMEBUFFER,null),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(ye,xe,ce,Ve,rt,ue,T,I,it,Dt,_t.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,xe,ce,Ve,rt,ue,T,I,it,_t.data):F.texSubImage3D(ye,xe,ce,Ve,rt,ue,T,I,it,Dt,_t):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,ce,Ve,ue,T,it,Dt,_t.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,ce,Ve,_t.width,_t.height,it,_t.data):F.texSubImage2D(F.TEXTURE_2D,xe,ce,Ve,ue,T,it,Dt,_t);m.pixelStorei(F.UNPACK_ROW_LENGTH,Xt),m.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),m.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),m.pixelStorei(F.UNPACK_SKIP_ROWS,cn),m.pixelStorei(F.UNPACK_SKIP_IMAGES,Nn),xe===0&&B.generateMipmaps&&F.generateMipmap(ye),m.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){Z=0,q=0,te=null,m.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class t0{constructor(e,t){this.container=document.getElementById(e),this.onMoveCallback=t,this.scene=null,this.camera=null,this.renderer=null,this.raycaster=new iu,this.mouse=new He,this.game=null,this.pieceMeshes=new Map,this.squareMeshes=new Map,this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.isFlipped=!1,this.animatingPieces=[],this.materials={lightSquare:new Wn({color:13938487,roughness:.4,metalness:.1}),darkSquare:new Wn({color:2040888,roughness:.3,metalness:.2}),whitePiece:new Wn({color:15791096,roughness:.2,metalness:.1,roughnessMap:null}),blackPiece:new Wn({color:1316386,roughness:.15,metalness:.4}),selectedSquare:new Wn({color:10309819,roughness:.3,emissive:10309819,emissiveIntensity:.5}),highlightSquare:new Wn({color:3731325,roughness:.3,emissive:3731325,emissiveIntensity:.6}),captureSquare:new Wn({color:16730923,roughness:.3,emissive:16730923,emissiveIntensity:.6})},this.init3DScene()}init3DScene(){if(!this.container)return;const e=this.container.clientWidth||560,t=this.container.clientHeight||560;this.scene=new Dh,this.scene.background=null,this.camera=new Jt(45,e/t,.1,1e3),this.updateCameraPosition(),this.renderer=new e0({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl,this.container.innerHTML="",this.container.appendChild(this.renderer.domElement);const n=new eu(16777215,.8);this.scene.add(n);const s=new jh(15984043,1.2);s.position.set(10,20,15),s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,this.scene.add(s);const r=new Jh(10309819,1.5,30);r.position.set(-10,10,-10),this.scene.add(r),this.build3DBoard(),this.renderer.domElement.addEventListener("pointerdown",a=>this.onPointerDown(a)),this.animate()}updateCameraPosition(){this.isFlipped?(this.camera.position.set(0,10,-11),this.camera.lookAt(0,0,0)):(this.camera.position.set(0,10,11),this.camera.lookAt(0,0,0))}build3DBoard(){const s=new pn(10.2,.4,10.2),r=new Wn({color:658452,roughness:.5,metalness:.3}),a=new ot(s,r);a.position.y=-.25,a.receiveShadow=!0,this.scene.add(a);for(let o=0;o<8;o++)for(let l=0;l<8;l++){const c=String.fromCharCode(97+l)+(o+1),u=(o+l)%2!==0,d=new pn(1.15,.1,1.15),h=u?this.materials.lightSquare.clone():this.materials.darkSquare.clone(),p=new ot(d,h),_=l*1.2-4.2,S=(7-o)*1.2-4.2;p.position.set(_,0,S),p.receiveShadow=!0,p.userData={squareName:c,isLight:u},this.scene.add(p),this.squareMeshes.set(c,p)}}create3DPieceMesh(e,t){const n=new rs,s=t==="w"?this.materials.whitePiece:this.materials.blackPiece,r=new dn(.4,.45,.15,16),a=new ot(r,s);if(a.position.y=.075,a.castShadow=!0,n.add(a),e==="p"){const o=new dn(.2,.35,.55,16),l=new ot(o,s);l.position.y=.4,l.castShadow=!0,n.add(l);const c=new ls(.22,16,16),u=new ot(c,s);u.position.y=.75,u.castShadow=!0,n.add(u)}else if(e==="r"){const o=new dn(.35,.4,.7,16),l=new ot(o,s);l.position.y=.5,l.castShadow=!0,n.add(l);const c=new dn(.42,.35,.2,8),u=new ot(c,s);u.position.y=.9,u.castShadow=!0,n.add(u)}else if(e==="n"){const o=new dn(.25,.38,.5,16),l=new ot(o,s);l.position.y=.4,l.castShadow=!0,n.add(l);const c=new pn(.35,.45,.5),u=new ot(c,s);u.position.set(0,.75,.05),u.rotation.x=.2,u.castShadow=!0,n.add(u)}else if(e==="b"){const o=new oo(.35,.85,16),l=new ot(o,s);l.position.y=.55,l.castShadow=!0,n.add(l);const c=new ls(.12,12,12),u=new ot(c,s);u.position.y=1.05,u.castShadow=!0,n.add(u)}else if(e==="q"){const o=new dn(.28,.4,.95,16),l=new ot(o,s);l.position.y=.6,l.castShadow=!0,n.add(l);const c=new ls(.3,16,16),u=new ot(c,s);u.position.y=1.15,u.castShadow=!0,n.add(u)}else if(e==="k"){const o=new dn(.32,.42,1.1,16),l=new ot(o,s);l.position.y=.65,l.castShadow=!0,n.add(l);const c=new pn(.12,.35,.12),u=new ot(c,s);u.position.y=1.35,u.castShadow=!0,n.add(u);const d=new pn(.3,.1,.12),h=new ot(d,s);h.position.y=1.35,h.castShadow=!0,n.add(h)}return n}attachGame(e){this.game=e,this.render()}flip(){this.isFlipped=!this.isFlipped,this.updateCameraPosition(),this.render()}setLumosHint(e){this.lumosSquare=e,this.render()}clearSelection(){this.selectedSquare=null,this.legalMoves=[],this.render()}render(){if(!this.game||!this.scene)return;this.pieceMeshes.forEach(s=>this.scene.remove(s)),this.pieceMeshes.clear();const e=this.game.board(),t=1.2,n=8*t/2-t/2;this.squareMeshes.forEach((s,r)=>{const a=s.userData.isLight;if(s.material=a?this.materials.lightSquare:this.materials.darkSquare,this.selectedSquare===r)s.material=this.materials.selectedSquare;else if(this.lumosSquare===r)s.material=this.materials.highlightSquare;else{const o=this.legalMoves.find(l=>l.to===r);o&&(s.material=o.captured?this.materials.captureSquare:this.materials.highlightSquare)}});for(let s=0;s<8;s++)for(let r=0;r<8;r++){const a=e[7-s][r];if(a){const o=String.fromCharCode(97+r)+(s+1),l=this.create3DPieceMesh(a.type,a.color),c=r*t-n,u=(7-s)*t-n;l.position.set(c,0,u),this.selectedSquare===o&&(l.position.y=.35),this.scene.add(l),this.pieceMeshes.set(o,l)}}}onPointerDown(e){if(!this.container||!this.game)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(Array.from(this.squareMeshes.values()));if(n.length>0){const s=n[0].object.userData.squareName;s&&this.handleSquareClick(s)}}handleSquareClick(e){if(Ge.init(),this.selectedSquare===e){this.clearSelection();return}const t=this.legalMoves.filter(s=>s.to===e);if(t.length>0){const s=t.find(r=>r.promotion);s&&this.onPromotionRequired?this.onPromotionRequired(s,r=>{const a=t.find(o=>o.promotion===r)||s;this.executeWizardMove(a)}):this.executeWizardMove(t[0]);return}const n=this.game.get(e);n&&n.color===this.game.turn()?(Ge.playSpellSelectSound(),this.selectedSquare=e,this.legalMoves=this.game.moves({square:e,verbose:!0}),this.lumosSquare=null,this.render()):this.clearSelection()}executeWizardMove(e){e.captured?Ge.playCaptureSound():Ge.playMoveSound();const t=this.game.move(e);this.game.inCheck()&&Ge.playCheckSound(),this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.render(),this.onMoveCallback&&this.onMoveCallback(t)}animate(){if(requestAnimationFrame(()=>this.animate()),this.selectedSquare&&this.pieceMeshes.has(this.selectedSquare)){const e=this.pieceMeshes.get(this.selectedSquare);e.rotation.y+=.02}this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}}const es={p:100,n:320,b:330,r:500,q:900,k:2e4},n0=[0,0,0,0,0,0,0,0,50,50,50,50,50,50,50,50,10,10,20,30,30,20,10,10,5,5,10,25,25,10,5,5,0,0,0,25,25,0,0,0,5,-5,-10,0,0,-10,-5,5,5,10,10,-25,-25,10,10,5,0,0,0,0,0,0,0,0],i0=[-50,-40,-30,-30,-30,-30,-40,-50,-40,-20,0,0,0,0,-20,-40,-30,0,10,15,15,10,0,-30,-30,5,15,25,25,15,5,-30,-30,0,15,25,25,15,0,-30,-30,5,10,15,15,10,5,-30,-40,-20,0,5,5,0,-20,-40,-50,-40,-30,-30,-30,-30,-40,-50],s0=[-20,-10,-10,-10,-10,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,10,10,5,0,-10,-10,5,5,10,10,5,5,-10,-10,0,10,10,10,10,0,-10,-10,10,10,10,10,10,10,-10,-10,5,0,0,0,0,5,-10,-20,-10,-10,-10,-10,-10,-10,-20],r0=[0,0,0,0,0,0,0,0,15,20,20,20,20,20,20,15,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,0,0,0,5,5,0,0,0],a0=[-20,-10,-10,-5,-5,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,5,5,5,0,-10,-5,0,5,5,5,5,0,-5,0,0,5,5,5,5,0,-5,-10,5,5,5,5,5,0,-10,-10,0,5,0,0,0,0,-10,-20,-10,-10,-5,-5,-10,-10,-20],o0=[-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-20,-30,-30,-40,-40,-30,-30,-20,-10,-20,-20,-20,-20,-20,-20,-10,20,20,0,0,0,0,20,20,20,30,10,0,0,10,30,20];class l0{constructor(){this.transpositionTable=new Map,this.maxTableSize=25e3}clearCache(){this.transpositionTable.size>this.maxTableSize&&this.transpositionTable.clear()}evaluateBoard(e){if(e.isCheckmate())return e.turn()==="w"?-1e5:1e5;if(e.isDraw()||e.isStalemate()||e.isThreefoldRepetition())return 0;let t=0;const n=e.board(),s=e.moves().length,r=e.turn()==="w"?s*2:-s*2;t+=r;for(let a=0;a<8;a++)for(let o=0;o<8;o++){const l=n[a][o];if(l){const c=es[l.type]||0;let u=0;const d=a*8+o;l.type==="p"?u=n0[l.color==="w"?d:63-d]:l.type==="n"?u=i0[l.color==="w"?d:63-d]:l.type==="b"?u=s0[l.color==="w"?d:63-d]:l.type==="r"?u=r0[l.color==="w"?d:63-d]:l.type==="q"?u=a0[l.color==="w"?d:63-d]:l.type==="k"&&(u=o0[l.color==="w"?d:63-d]);const h=c+u;t+=l.color==="w"?h:-h}}return t}orderMoves(e,t){return t.sort((n,s)=>{let r=0,a=0;return n.captured&&(r+=es[n.captured]*10-es[n.piece]),s.captured&&(a+=es[s.captured]*10-es[s.piece]),n.san&&n.san.includes("+")&&(r+=80),s.san&&s.san.includes("+")&&(a+=80),n.promotion&&(r+=800),s.promotion&&(a+=800),a-r})}quiescence(e,t,n,s){const r=this.evaluateBoard(e);if(s){if(r>=n)return n;r>t&&(t=r);const a=this.orderMoves(e,e.moves({verbose:!0}).filter(o=>o.captured));for(const o of a){e.move(o);const l=this.quiescence(e,t,n,!1);if(e.undo(),l>=n)return n;l>t&&(t=l)}return t}else{if(r<=t)return t;r<n&&(n=r);const a=this.orderMoves(e,e.moves({verbose:!0}).filter(o=>o.captured));for(const o of a){e.move(o);const l=this.quiescence(e,t,n,!0);if(e.undo(),l<=t)return t;l<n&&(n=l)}return n}}minimax(e,t,n,s,r){const a=e.fen(),o=this.transpositionTable.get(a);if(o&&o.depth>=t)return o.result;if(t===0){const d={score:this.quiescence(e,n,s,r),bestMove:null};return this.transpositionTable.set(a,{depth:t,result:d}),d}if(e.isGameOver()){const d={score:this.evaluateBoard(e),bestMove:null};return this.transpositionTable.set(a,{depth:t,result:d}),d}let l=e.moves({verbose:!0});l=this.orderMoves(e,l);let c=null;if(r){let u=-1/0;for(const h of l){e.move(h);const p=this.minimax(e,t-1,n,s,!1).score;if(e.undo(),p>u&&(u=p,c=h),n=Math.max(n,p),s<=n)break}const d={score:u,bestMove:c};return this.transpositionTable.set(a,{depth:t,result:d}),d}else{let u=1/0;for(const h of l){e.move(h);const p=this.minimax(e,t-1,n,s,!0).score;if(e.undo(),p<u&&(u=p,c=h),s=Math.min(s,p),s<=n)break}const d={score:u,bestMove:c};return this.transpositionTable.set(a,{depth:t,result:d}),d}}async getBestMoveAsync(e,t="ron"){return new Promise(n=>{requestAnimationFrame(()=>{const s=e.turn()==="w";this.clearCache();let r=2;if(t==="ron"){const o=e.moves({verbose:!0});if(Math.random()<.25){n(o[Math.floor(Math.random()*o.length)]);return}r=1}else t==="hermione"?r=2:t==="snape"?r=3:t==="dumbledore"&&(r=4);const a=this.minimax(e,r,-1/0,1/0,s);n(a.bestMove)})})}getBestMove(e,t="ron"){const n=e.turn()==="w";let s=2;return t==="ron"?s=1:t==="hermione"?s=2:t==="snape"?s=3:t==="dumbledore"&&(s=4),this.minimax(e,s,-1/0,1/0,n).bestMove}}const ir=new l0,ts={mate1:[{id:"m1_01",title:"Scholars Magic Strike",category:"Mate in 1",fen:"r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",solution:["Qxf7#"],solutionVerbose:[{from:"h5",to:"f7"}],description:"Find the lethal Queen spell strike for instant Checkmate!"},{id:"m1_02",title:"Back-Rank Smite",category:"Mate in 1",fen:"3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",solution:["Rxd8#"],solutionVerbose:[{from:"d1",to:"d8"}],description:"Punish Black's undefended back rank with Rook spell barrage."},{id:"m1_03",title:"Smothered Knight Spell",category:"Mate in 1",fen:"6rk/5Npp/8/8/8/8/8/7K w - - 0 1",solution:["Nf7#"],solutionVerbose:[{from:"f7",to:"g5"}],fen:"6rk/5ppp/8/8/8/8/5N2/7K w - - 0 1",fen:"6rk/5p1p/7N/8/8/8/8/7K w - - 0 1",solution:["Nxf7#"],solutionVerbose:[{from:"h6",to:"f7"}],description:"Trapped King! Deliver the famous Smothered Mate with the Knight."}],mate2:[{id:"m2_01",title:"Boden's Mate Blast",category:"Mate in 2",fen:"2kr4/3p4/8/8/2B5/5B2/8/2R1K3 w - - 0 1",solution:["Ba6+","Kb8","Bb7#"],solutionVerbose:[{from:"c4",to:"a6"}],description:"Criss-crossing Bishops paralyze the enemy King."},{id:"m2_02",title:"Rook & Queen Siege",category:"Mate in 2",fen:"r4rk1/ppp2ppp/8/8/1Q6/8/5PPP/3R2K1 w - - 0 1",solution:["Qxb7"],solutionVerbose:[{from:"b4",to:"b7"}],description:"Infiltrate the enemy defenses and set up mate."}],fork:[{id:"f_01",title:"Royal Knight Fork",category:"Knight Fork",fen:"r1bqk2r/pppp1ppp/2n5/4p3/4N3/5N2/PPPP1PPP/R1BQKB1R w KQkq - 0 1",fen:"2q1k3/8/8/8/4N3/8/8/4K3 w - - 0 1",solution:["Nd6+"],solutionVerbose:[{from:"e4",to:"d6"}],description:"Jump the Knight to d6 to fork King & Queen simultaneously!"}],pin:[{id:"p_01",title:"Absolute Bishop Pin",category:"Pins & Skewers",fen:"r1b1k2r/pppp1ppp/5q2/4p3/2B1P3/8/PPPP1PPP/R1BQK2R w KQkq - 0 1",solution:["Bg5"],solutionVerbose:[{from:"c1",to:"g5"}],description:"Pin the enemy Queen against their King using the Dark Bishop."}],endgame:[{id:"e_01",title:"Pawn Breakthrough Magic",category:"Endgame",fen:"8/8/8/3P4/8/8/4K3/4k3 w - - 0 1",solution:["d6"],solutionVerbose:[{from:"d5",to:"d6"}],description:"March the passed pawn to coronation!"}]};class c0{constructor(){this.currentCategory="mate1",this.currentIndex=0,this.streak=0,this.score=1200,this.solvedCount=0,this.totalPuzzles=0,this.currentPuzzle=null}getCurrentPuzzle(){const e=ts[this.currentCategory]||ts.mate1;return this.currentPuzzle=e[this.currentIndex%e.length],this.currentPuzzle}setCategory(e){return ts[e]&&(this.currentCategory=e,this.currentIndex=0),this.getCurrentPuzzle()}nextPuzzle(){const e=ts[this.currentCategory]||ts.mate1;return this.currentIndex=(this.currentIndex+1)%e.length,this.getCurrentPuzzle()}verifyMove(e){if(!this.currentPuzzle)return!1;const t=this.currentPuzzle.solutionVerbose[0],n=e.from===t.from&&e.to===t.to;return n?(this.streak++,this.score+=15,this.solvedCount++):this.streak=0,n}}const wn=new c0,El={openings:[{id:"op_ruy",title:"Ruy Lopez (Spanish Opening)",description:"The King of Openings! Played by World Champions from Steinitz to Carlsen. Attacks Black's c6 defender to pressure the e5 center pawn.",tips:"Control center, develop with tempo, pin the c6 defender.",variations:[{id:"ruy_closed",name:"Closed Main Line (Morphy Defense)",description:"The cornerstone of modern classical chess theory (10 moves deep).",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn Opening",speech:"1. e4 — King's Pawn Opening. Claims center squares e4 and d5 while freeing lines for your Queen and Bishop.",tip:"Claims center space."},{san:"e5",title:"1... e5 — Open Game Response",speech:"1... e5 — Open Game Response. Black claims equal central space.",tip:"Fights for center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — White develops the King's Knight, putting immediate pressure on Black's e5 pawn.",tip:"Develops with tempo."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Black develops the Knight to defend the e5 pawn.",tip:"Guards e5 pawn."},{san:"Bb5",title:"3. Bb5 — The Ruy Lopez",speech:"3. Bb5 — The Ruy Lopez! White develops the Bishop to pin and pressure the c6 defender.",tip:"Pins c6 defender."},{san:"a6",title:"3... a6 — Morphy Defense",speech:"3... a6 — Morphy Defense! Black immediately questions White's Bishop.",tip:"Questions the Bishop."},{san:"Ba4",title:"4. Ba4 — Retain the Pin",speech:"4. Ba4 — White retreats the Bishop to a4, maintaining the pin along the a4-e8 diagonal.",tip:"Maintains diagonal pin."},{san:"Nf6",title:"4... Nf6 — Counter-Attack e4",speech:"4... Nf6 — Black develops the King's Knight, counter-attacking White's undefended e4 pawn.",tip:"Attacks e4 pawn."},{san:"O-O",title:"5. O-O — Kingside Castling",speech:"5. O-O — White castles Kingside, placing the King in safety and activating the Rook.",tip:"King safety first."},{san:"Be7",title:"5... Be7 — Solid Development",speech:"5... Be7 — Black prepares Kingside castling with a solid defensive setup.",tip:"Prepares castling."},{san:"Re1",title:"6. Re1 — Protect e4 Pawn",speech:"6. Re1 — White secures the e4 pawn with the Rook, renewing the threat to win Black's e5 pawn.",tip:"Protects e4 pawn."},{san:"b5",title:"6... b5 — Break the Pin",speech:"6... b5 — Black expands on the Queenside, forcing White's Bishop back to b3.",tip:"Forces Bishop retreat."},{san:"Bb3",title:"7. Bb3 — Target f7",speech:"7. Bb3 — White's Bishop re-positions onto the powerful a2-g8 diagonal, aiming at f7.",tip:"Aims at f7 diagonal."},{san:"d6",title:"7... d6 — Solidify Center",speech:"7... d6 — Black solidifies the e5 pawn stronghold and opens the c8 Bishop.",tip:"Solidifies e5."},{san:"c3",title:"8. c3 — Prepare d4 Break",speech:"8. c3 — White prepares the powerful d4 central pawn break while creating a retreat square for the Bishop on c2.",tip:"Prepares d4 strike."}]},{id:"ruy_berlin",name:"Berlin Defense (The Berlin Wall)",description:"Kramnik's impenetrable endgame weapon that dethroned Kasparov in 2000.",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn",speech:"1. e4 — White opens with 1. e4.",tip:"King Pawn opening."},{san:"e5",title:"1... e5 — King's Pawn Response",speech:"1... e5 — Open game response.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — Attacking the e5 pawn.",tip:"Develops Knight."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Defending e5.",tip:"Defends pawn."},{san:"Bb5",title:"3. Bb5 — The Ruy Lopez",speech:"3. Bb5 — Ruy Lopez pin.",tip:"Pressures c6."},{san:"Nf6",title:"3... Nf6 — Berlin Wall Defense",speech:"3... Nf6 — The Berlin Wall! Black ignores the a6 question and directly attacks White's e4 pawn!",tip:"Attacks e4 directly."},{san:"O-O",title:"4. O-O — Castling Gambit",speech:"4. O-O — White castles, offering the e4 pawn for rapid initiative.",tip:"Offers e4 pawn."},{san:"Nxe4",title:"4... Nxe4 — Berlin Accepted",speech:"4... Nxe4 — Black accepts the pawn challenge!",tip:"Captures e4 pawn."},{san:"d4",title:"5. d4 — Central Break",speech:"5. d4 — White strikes open the center to catch Black's Knight.",tip:"Strikes center."},{san:"Nd6",title:"5... Nd6 — Retaliatory Knight Retreat",speech:"5... Nd6 — Black retreats the Knight to d6, attacking White's b5 Bishop!",tip:"Attacks b5 Bishop."}]},{id:"ruy_marshall",name:"Marshall Attack",description:"Frank Marshall's legendary Kingside gambit sacrifice.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center control."},{san:"e5",title:"1... e5",speech:"1... e5 — Symmetric center.",tip:"Center stake."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Attack e5."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bb5",title:"3. Bb5",speech:"3. Bb5 — Ruy Lopez.",tip:"Pin c6."},{san:"a6",title:"3... a6",speech:"3... a6 — Morphy Defense.",tip:"Question Bishop."},{san:"Ba4",title:"4. Ba4",speech:"4. Ba4 — Maintain pin.",tip:"Retreat to a4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Develop Knight.",tip:"Attack e4."},{san:"O-O",title:"5. O-O",speech:"5. O-O — Castling.",tip:"King safety."},{san:"Be7",title:"5... Be7",speech:"5... Be7 — Prepare castling.",tip:"Develop Bishop."},{san:"Re1",title:"6. Re1",speech:"6. Re1 — Secure e4.",tip:"Rook to e1."},{san:"b5",title:"6... b5",speech:"6... b5 — Expand Queenside.",tip:"Push b5."},{san:"Bb3",title:"7. Bb3",speech:"7. Bb3 — Bishop b3.",tip:"Retreat Bishop."},{san:"O-O",title:"7... O-O",speech:"7... O-O — Black castles.",tip:"Castle Kingside."},{san:"c3",title:"8. c3",speech:"8. c3 — Prepare d4.",tip:"Pawn to c3."},{san:"d5",title:"8... d5 — Marshall Gambit Strike!",speech:"8... d5 — The Marshall Attack! Black courageously sacrifices a central pawn for explosive Kingside attacking initiative!",tip:"Sacrifices d5 pawn!"}]}]},{id:"op_italian",title:"Italian Game (Giuoco Piano & Evans)",description:"One of chess's oldest openings! The Light-Squared Bishop targets the vulnerable f7 pawn square.",tips:"Prepares quick Kingside castling while threatening direct attacks on f7.",variations:[{id:"ita_giuoco",name:"Giuoco Piano (Main Line)",description:"The Quiet Game leading to deep tactical and positional maneuvers.",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn",speech:"1. e4 — Opening with the King's Pawn to claim center e4 and d5 squares.",tip:"Controls center."},{san:"e5",title:"1... e5 — Symmetric Response",speech:"1... e5 — Black matches White's central footprint.",tip:"Fights for center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — Developing the Knight to f3, putting pressure on e5 and preparing castling.",tip:"Develops piece."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Black develops the Knight to defend e5.",tip:"Defends pawn."},{san:"Bc4",title:"3. Bc4 — The Italian Bishop Strike",speech:"3. Bc4 — The Italian Game! White posts the Bishop on c4, aiming straight at the weak f7 square!",tip:"Targets f7 square."},{san:"Bc5",title:"3... Bc5 — Giuoco Piano",speech:"3... Bc5 — The Quiet Game! Black mirrors White's Bishop placement, guarding d4.",tip:"Mirrors Italian Bishop."},{san:"c3",title:"4. c3 — Classical Dual Pawn Center Prep",speech:"4. c3 — White prepares the c3-d4 dual pawn central breakthrough.",tip:"Prepares d4 break."},{san:"Nf6",title:"4... Nf6 — Counter-Strike e4",speech:"4... Nf6 — Black attacks White's e4 pawn before White can build the d4 center.",tip:"Attacks e4 pawn."},{san:"d4",title:"5. d4 — Central Explosion",speech:"5. d4 — White strikes open the center, challenging Black's c5 Bishop!",tip:"Strikes center."},{san:"exd4",title:"5... exd4 — Exchange Pawns",speech:"5... exd4 — Black captures on d4.",tip:"Captures d4 pawn."},{san:"cxd4",title:"6. cxd4 — Dual Pawn Dominance",speech:"6. cxd4 — White re-claims the center with two dominant pawns on e4 and d4!",tip:"Recaptures on d4."},{san:"Bb4+",title:"6... Bb4+ — Check with Tempo",speech:"6... Bb4+ — Black delivers check to disrupt White's center momentum!",tip:"Check with tempo."}]},{id:"ita_evans",name:"Evans Gambit",description:"Romantic 19th-century gambit of Captain William Evans.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center control."},{san:"e5",title:"1... e5",speech:"1... e5 — Open game.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Develop Knight."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bc4",title:"3. Bc4",speech:"3. Bc4 — Italian Game.",tip:"Target f7."},{san:"Bc5",title:"3... Bc5",speech:"3... Bc5 — Giuoco Piano.",tip:"Mirror Bishop."},{san:"b4",title:"4. b4 — The Evans Gambit Sacrifice!",speech:"4. b4 — The Evans Gambit! White sacrifices the b4 wing pawn to lure Black's Bishop away, building a massive central pawn force with c3 and d4!",tip:"Sacrifices b4 pawn!"},{san:"Bxb4",title:"4... Bxb4 — Gambit Accepted",speech:"4... Bxb4 — Black accepts the wing pawn.",tip:"Captures b4 pawn."},{san:"c3",title:"5. c3 — Gain Tempo on Bishop",speech:"5. c3 — White attacks the b4 Bishop with tempo to speed up d4.",tip:"Gains tempo on Bishop."},{san:"Ba5",title:"5... Ba5 — Retreat Bishop",speech:"5... Ba5 — Black retreats the Bishop while maintaining control of the e1-a5 diagonal.",tip:"Retreats to a5."}]},{id:"ita_fried_liver",name:"Fried Liver Attack (Two Knights)",description:"Aggressive tactical sacrifice targeting the f7 square.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center pawn."},{san:"e5",title:"1... e5",speech:"1... e5 — Open response.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Attack e5."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bc4",title:"3. Bc4",speech:"3. Bc4 — Italian Game.",tip:"Target f7."},{san:"Nf6",title:"3... Nf6 — Two Knights Defense",speech:"3... Nf6 — Two Knights Defense!",tip:"Counter-attack e4."},{san:"Ng5",title:"4. Ng5 — Double Attack on f7!",speech:"4. Ng5 — White launches a double attack on f7 with Knight and Bishop!",tip:"Double attack on f7."},{san:"d5",title:"4... d5 — Block Diagonal",speech:"4... d5 — Black blocks the Bishop's sightline.",tip:"Blocks f7 attack."},{san:"exd5",title:"5. exd5 — Pawn Capture",speech:"5. exd5 — White takes on d5.",tip:"Captures d5."},{san:"Nxd5",title:"5... Nxd5 — The Fatal Trap",speech:"5... Nxd5 — Black recaptures with Knight, stepping directly into the Fried Liver Attack!",tip:"Steps into trap!"},{san:"Nxf7",title:"6. Nxf7 — The Fried Liver Sacrifice!",speech:"6. Nxf7 — Knight Sacrifice! White forks Black's Queen and Rook, forcing Black's King into the open center!",tip:"Forks Queen & Rook!"}]}]},{id:"op_sicilian",title:"Sicilian Defense (Najdorf, Dragon, Alapin)",description:"The ultimate counter-attacking weapon against 1. e4! Black fights for center control asynchronously.",tips:"1. c5 prevents White from building an easy dual-pawn center with d4.",variations:[{id:"sic_najdorf",name:"Najdorf Variation (Main Line)",description:"The preferred weapon of Kasparov and Fischer (10 moves deep).",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"White opens center."},{san:"c5",title:"1... c5 — Sicilian Defense",speech:"1... c5 — Sicilian Defense! Black attacks d4 from the wing.",tip:"Asymmetric center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Open Sicilian Prep.",tip:"Prepares d4."},{san:"d6",title:"2... d6",speech:"2... d6 — Controls e5.",tip:"Controls e5."},{san:"d4",title:"3. d4 — Central Break",speech:"3. d4 — White breaks open the center.",tip:"Breaks center."},{san:"cxd4",title:"3... cxd4",speech:"3... cxd4 — Black trades wing pawn for center pawn.",tip:"Trades c5 for d4."},{san:"Nxd4",title:"4. Nxd4",speech:"4. Nxd4 — White recaptures with Knight.",tip:"Recaptures on d4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Black attacks White's e4 pawn.",tip:"Attacks e4."},{san:"Nc3",title:"5. Nc3",speech:"5. Nc3 — White defends e4 pawn.",tip:"Defends e4."},{san:"a6",title:"5... a6 — Najdorf Signature Move",speech:"5... a6 — The Najdorf! Guards b5 against enemy Knight and Bishop intrusions while preparing b5 expansion.",tip:"Prevents Nb5/Bb5."},{san:"Bg5",title:"6. Bg5 — Main Line Attack",speech:"6. Bg5 — White pins Black's Nf6 Knight and threatens e5 pressure.",tip:"Pins Nf6."},{san:"e6",title:"6... e6 — Flexible Shield",speech:"6... e6 — Black fortifies d5 and opens path for Dark-Squared Bishop.",tip:"Shields d5."}]},{id:"sic_dragon",name:"Dragon Variation",description:"Fierce sharp tactical battle with opposite-side castling attacks.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center pawn."},{san:"c5",title:"1... c5",speech:"1... c5 — Sicilian Defense.",tip:"Wing attack."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Develop Knight.",tip:"Prepare d4."},{san:"d6",title:"2... d6",speech:"2... d6 — Pawn d6.",tip:"Control e5."},{san:"d4",title:"3. d4",speech:"3. d4 — Open Sicilian.",tip:"Break d4."},{san:"cxd4",title:"3... cxd4",speech:"3... cxd4 — Pawn trade.",tip:"Trade c5 for d4."},{san:"Nxd4",title:"4. Nxd4",speech:"4. Nxd4 — Recapture Knight.",tip:"Knight d4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Attack e4.",tip:"Attack e4."},{san:"Nc3",title:"5. Nc3",speech:"5. Nc3 — Defend e4.",tip:"Defend e4."},{san:"g6",title:"5... g6 — The Dragon Fianchetto!",speech:"5... g6 — The Dragon! Black prepares to fianchetto the Bishop to g7, breathing fire along the h8-a1 long diagonal!",tip:"Prepares Bg7 dragon bishop."},{san:"Be3",title:"6. Be3 — Yugoslav Attack Setup",speech:"6. Be3 — White develops the Bishop, preparing the dreaded Yugoslav Attack!",tip:"Prepares Qd2 & O-O-O."},{san:"Bg7",title:"6... Bg7 — Dragon Bishop",speech:"6... Bg7 — Black completes the Dragon fianchetto!",tip:"Fianchetto Bishop."}]}]},{id:"op_queens_gambit",title:"Queen's Gambit (QGD, QGA, Slav, KID)",description:"White offers a wing pawn (c4) to entice Black to abandon the central d5 stronghold.",tips:"If Black takes 2...dxc4, White claims full center dominance with e4!",variations:[{id:"qg_declined",name:"Queen's Gambit Declined (Orthodox)",description:"The solid bedrock of grandmaster opening strategy.",moveSequence:[{san:"d4",title:"1. d4 — Queen's Pawn",speech:"1. d4 — White opens with the Queen's Pawn, controlling e5 and d4.",tip:"Solid center."},{san:"d5",title:"1... d5 — Solid Counter",speech:"1... d5 — Black claims equal central space.",tip:"Solid center stake."},{san:"c4",title:"2. c4 — Queen's Gambit",speech:"2. c4 — The Queen's Gambit! Offering a wing pawn to control the center.",tip:"Offers c4 pawn."},{san:"e6",title:"2... e6 — Decline the Gambit",speech:"2... e6 — Queen's Gambit Declined! Black solidifies d5 with an indestructible pawn chain.",tip:"Solidifies d5 pawn."},{san:"Nc3",title:"3. Nc3 — Pressure d5",speech:"3. Nc3 — White develops the Knight to pressure d5.",tip:"Pressures d5."},{san:"Nf6",title:"3... Nf6 — Develop Defender",speech:"3... Nf6 — Black develops Knight to defend d5.",tip:"Defends d5."},{san:"Bg5",title:"4. Bg5 — Pin the Knight",speech:"4. Bg5 — White pins Black's Nf6 defender to the Queen.",tip:"Pins Nf6."},{san:"Be7",title:"4... Be7 — Break the Pin",speech:"4... Be7 — Black unpins the Knight and prepares Kingside castling.",tip:"Unpins Knight."}]},{id:"qg_slav",name:"Slav Defense",description:"Solid defense maintaining the c8 Bishop's open diagonal.",moveSequence:[{san:"d4",title:"1. d4",speech:"1. d4 — Queen's Pawn.",tip:"Center control."},{san:"d5",title:"1... d5",speech:"1... d5 — Equal center.",tip:"Center stake."},{san:"c4",title:"2. c4",speech:"2. c4 — Queen's Gambit.",tip:"Gambit offer."},{san:"c6",title:"2... c6 — The Slav Defense",speech:"2... c6 — The Slav Defense! Black solidifies d5 without blocking the c8 Light-Squared Bishop!",tip:"Keeps c8 Bishop open."},{san:"Nf3",title:"3. Nf3",speech:"3. Nf3 — Develop Knight.",tip:"Control e5."},{san:"Nf6",title:"3... Nf6",speech:"3... Nf6 — Develop Knight.",tip:"Defend d5."},{san:"Nc3",title:"4. Nc3",speech:"4. Nc3 — Pressure d5.",tip:"Develop Nc3."},{san:"dxc4",title:"4... dxc4 — Slav Accepted",speech:"4... dxc4 — Black takes the gambit pawn and threatens to hold it with b5!",tip:"Captures c4 pawn."}]}]}],middlegames:[{id:"mg_outpost",title:"Knight Outpost Mastery",description:"An outpost is a square protected by a pawn that cannot be attacked by enemy pawns. Knights thrive here!",tips:"Anchor your Knight on e5 or d5 to dominate enemy territory.",variations:[{id:"outpost_e5",name:"e5 Outpost Infiltration",description:"Dominating central outposts for crushing attacks.",moveSequence:[{san:"Nf3",title:"1. Nf3 — Knight Mobilization",speech:"1. Nf3 — Develop your Knight toward the center.",tip:"Develops Knight."},{san:"d5",title:"1... d5 — Enemy Pawn Stake",speech:"1... d5 — Black stakes a pawn in the center.",tip:"Black claims space."},{san:"Ne5",title:"2. Ne5 — Dominant Outpost Landing",speech:"2. Ne5 — Knight Outpost! Landing the Knight on e5 radiates pressure in 8 directions inside enemy territory!",tip:"Dominates central outpost."}]}]}],endgames:[{id:"eg_opposition",title:"King Opposition & Rule of Square",description:"Opposition means placing your King directly across from the enemy King with one empty square between them.",tips:"The player who does NOT have to move holds Opposition and forces the enemy King back!",variations:[{id:"opp_direct",name:"Direct Opposition Duel",description:"Mastering the fundamental King endgame duel.",moveSequence:[{san:"Ke2",title:"1. Ke2 — King Mobilization",speech:"1. Ke2 — In the endgame, the King transforms into an active attacking warrior!",tip:"Activate King."},{san:"Ke7",title:"1... Ke7 — Opposing King Advance",speech:"1... Ke7 — Black marches King toward center.",tip:"Black activates King."},{san:"Ke3",title:"2. Ke3 — Seizing Direct Opposition",speech:"2. Ke3 — Direct Opposition! By placing your King directly opposite with 1 empty square between, you force the enemy King to step aside!",tip:"Seizes Opposition."}]}]}]};class h0{constructor(){this.currentSection="openings",this.currentLesson=null,this.currentVariation=null}getLessons(e){return this.currentSection=e||"openings",El[this.currentSection]||El.openings}}const u0=new h0;class d0{constructor(){this.analysisGame=new is,this.historyMoves=[],this.currentStep=-1,this.autoPlayInterval=null}loadGame(e){this.analysisGame=new is;const t=e.history({verbose:!0});this.historyMoves=[...t],this.currentStep=-1,this.replayToStep(-1)}loadFEN(e){try{return this.analysisGame.load(e),this.historyMoves=[],this.currentStep=-1,!0}catch{return!1}}loadPGN(e){try{const t=new is;return t.loadPgn(e),this.analysisGame=new is,this.historyMoves=t.history({verbose:!0}),this.currentStep=-1,this.replayToStep(-1),!0}catch{return!1}}replayToStep(e){this.analysisGame.reset();const t=Math.max(-1,Math.min(e,this.historyMoves.length-1));for(let n=0;n<=t;n++){const s=this.historyMoves[n];if(s)try{typeof s=="string"?this.analysisGame.move(s):s.san?this.analysisGame.move(s.san):s.from&&s.to&&this.analysisGame.move({from:s.from,to:s.to,promotion:s.promotion||"q"})}catch(r){console.warn("Replay step move error:",r)}}return this.currentStep=t,this.analysisGame}stepFirst(){return this.replayToStep(-1)}stepPrev(){return this.replayToStep(this.currentStep-1)}stepNext(){return this.replayToStep(this.currentStep+1)}stepLast(){return this.replayToStep(this.historyMoves.length-1)}toggleAutoplay(e){return this.autoPlayInterval?(clearInterval(this.autoPlayInterval),this.autoPlayInterval=null,!1):(this.autoPlayInterval=setInterval(()=>{if(this.currentStep<this.historyMoves.length-1){const t=this.stepNext();e&&e(t)}else clearInterval(this.autoPlayInterval),this.autoPlayInterval=null,e&&e(this.analysisGame,!0)},1e3),!0)}evaluateCurrentPosition(){const e=ir.evaluateBoard(this.analysisGame),t=ir.getBestMove(this.analysisGame,"dumbledore");let n="0.0",s=50;if(Math.abs(e)>5e3)n=e>0?"# M":"# -M",s=e>0?100:0;else{const o=(e/100).toFixed(1);n=e>0?`+${o}`:`${o}`,s=Math.max(0,Math.min(100,50+e/100*5))}let r="Neutral Position";Math.abs(e)>400?r=e>0?"White Decisive Advantage 💎":"Black Decisive Advantage 💎":Math.abs(e)>150?r=e>0?"White Advantage 🎯":"Black Advantage 🎯":r="Equal Position ⚖️";let a=`Start (0 / ${this.historyMoves.length})`;if(this.currentStep>=0&&this.historyMoves[this.currentStep]){const o=this.historyMoves[this.currentStep];a=`Move ${this.currentStep+1}/${this.historyMoves.length} (${o.san})`}return{score:e,evalText:n,fillPercentage:s,bestMove:t?`${t.from} → ${t.to}`:"None",classification:r,stepText:a}}}const Yt=new d0;class f0{constructor(){this.game=new is,this.currentMode="play",this.is3D=!1,this.aiOpponent="ron",this.isAiThinking=!1,this.capturedPieces={w:[],b:[]},this.init()}init(){os.init("magic-canvas"),this.board2d=new Fc("chess-board",e=>this.onPlayerMove(e)),this.board3d=null,this.activeBoard=this.board2d,this.activeBoard.attachGame(this.game),this.bindNavigation(),this.bindHeaderControls(),this.bindBoardControls(),this.bindAiSelector(),this.bindPuzzles(),this.bindAcademy(),this.bindAnalysis(),this.bindPromotionModal(),this.bindGameOverModal(),this.updateEvaluationBar(),this.updateMoveHistoryUI()}bindPromotionModal(){const e=document.getElementById("promotion-modal"),t=document.querySelectorAll(".promo-btn"),n=(s,r)=>{e.classList.remove("hidden");const a=o=>{const l=o.currentTarget.dataset.piece||"q";e.classList.add("hidden"),t.forEach(c=>c.removeEventListener("click",a)),r(l)};t.forEach(o=>o.addEventListener("click",a))};this.board2d.onPromotionRequired=n,this.board3d.onPromotionRequired=n}bindGameOverModal(){var t,n;const e=document.getElementById("game-over-modal");(t=document.getElementById("modal-restart-btn"))==null||t.addEventListener("click",()=>{e.classList.add("hidden"),this.resetGame()}),(n=document.getElementById("modal-analyze-btn"))==null||n.addEventListener("click",()=>{e.classList.add("hidden");const s=document.querySelector('.nav-btn[data-tab="analysis"]');s&&s.click()})}showGameOverCelebration(e){const t=document.getElementById("game-over-modal"),n=document.getElementById("modal-badge"),s=document.getElementById("modal-title"),r=document.getElementById("modal-message"),a=document.getElementById("modal-stat-moves"),o=document.getElementById("modal-stat-opponent");t&&(e?(n.className="celebration-badge victory",n.textContent="🏆 VICTORY!",s.textContent="Checkmate Victory!",r.textContent=`You have defeated ${this.getAiName(this.aiOpponent)} with spellbinding precision!`,Ge.playVictoryFanfare(),os.createConfettiBurst()):(n.className="celebration-badge defeat",n.textContent="💀 DEFEAT",s.textContent="Wizard Duel Lost!",r.textContent=`${this.getAiName(this.aiOpponent)} claimed victory this time. Re-arm your strategy and try again!`,Ge.playDefeatSound()),a&&(a.textContent=this.game.history().length),o&&(o.textContent=this.getAiName(this.aiOpponent)),t.classList.remove("hidden"))}bindNavigation(){const e=document.querySelectorAll(".nav-btn");e.forEach(t=>{t.addEventListener("click",n=>{const s=t.dataset.tab;if(!s)return;e.forEach(a=>a.classList.remove("active")),t.classList.add("active"),document.querySelectorAll(".tab-content").forEach(a=>a.classList.remove("active"));const r=document.getElementById(`tab-${s}`);r&&r.classList.add("active"),this.currentMode=s,this.onTabSwitched(s)})})}onTabSwitched(e){e==="puzzles"?this.loadCurrentPuzzle():e==="academy"?this.renderAcademySection("openings"):e==="analysis"?(Yt.loadGame(this.game),this.activeBoard.attachGame(Yt.analysisGame),this.runAnalysisUpdate()):e==="play"&&(this.activeBoard.attachGame(this.game),this.updateEvaluationBar())}bindHeaderControls(){const e=document.getElementById("sound-toggle"),t=document.getElementById("sound-icon");e==null||e.addEventListener("click",()=>{const s=Ge.toggleMute();t.textContent=s?"🔇":"🔊"});const n=document.getElementById("theme-toggle");n==null||n.addEventListener("click",()=>{Ge.playSpellSelectSound(),document.body.classList.toggle("dark-aura")})}bindBoardControls(){var t,n,s;const e=document.getElementById("view-mode-btn");e==null||e.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.is3D=!this.is3D,e.textContent=this.is3D?"🧊 3D Mode (Active)":"📜 Carved Stone Board";const r=document.getElementById("chess-board");this.is3D?(this.board3d||(this.board3d=new t0("chess-board",a=>this.onPlayerMove(a))),this.activeBoard=this.board3d,r==null||r.classList.add("mode-3d")):(this.activeBoard=this.board2d,r==null||r.classList.remove("mode-3d")),this.activeBoard.attachGame(this.game)}),(t=document.getElementById("flip-board-btn"))==null||t.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.activeBoard.flip()}),(n=document.getElementById("reset-board-btn"))==null||n.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.resetGame()}),(s=document.getElementById("hint-btn"))==null||s.addEventListener("click",()=>{this.castLumosHint()})}resetGame(){this.game.reset(),this.capturedPieces={w:[],b:[]},this.isAiThinking=!1,this.activeBoard.attachGame(this.game),this.updateEvaluationBar(),this.updateMoveHistoryUI(),this.updateTurnBanner(),this.updateCommentary("New game started! Choose your opponent and cast your first move.")}async castLumosHint(){if(!this.game.isGameOver())if(Ge.playSpellSelectSound(),this.currentMode==="puzzles"){const e=wn.getCurrentPuzzle();if(e&&e.solutionVerbose.length>0){const t=e.solutionVerbose[0].from;this.activeBoard.setLumosHint(t)}}else{const e=await ir.getBestMoveAsync(this.game,"dumbledore");e&&this.activeBoard.setLumosHint(e.from)}}bindAiSelector(){const e=document.querySelectorAll(".opponent-card");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),this.aiOpponent=t.dataset.ai||"ron",Ge.playSpellSelectSound();const n={ron:"Ron Weasley",hermione:"Hermione Granger",snape:"Severus Snape",dumbledore:"Albus Dumbledore"};this.updateCommentary(`You are now dueling ${n[this.aiOpponent]}!`)})})}onPlayerMove(e){if(e.captured){const t=e.color==="w"?"b":"w";this.capturedPieces[t].push(e.captured)}if(this.updateMoveHistoryUI(),this.updateEvaluationBar(),this.updateTurnBanner(),this.currentMode==="puzzles"){const t=wn.verifyMove(e),n=document.getElementById("puzzle-status");t?(Ge.playPuzzleSuccessSound(),n.className="puzzle-status success",n.textContent="✨ Spellbinding! Puzzle Solved Correctly! (+15 XP)",this.updatePuzzleStats()):(n.className="puzzle-status failed",n.textContent="❌ Incorrect Move! Try again or cast Lumos for a hint.",this.updatePuzzleStats());return}if(this.game.isCheckmate()){this.updateCommentary("⚡ CHECKMATE! Victory has been claimed on the enchanted board!"),this.showGameOverCelebration(!0);return}else if(this.game.isDraw()){this.updateCommentary("Stalemate! The duel ends in an honorable draw.");return}this.currentMode==="play"&&this.game.turn()==="b"&&!this.isAiThinking&&this.triggerAiMove()}async triggerAiMove(){this.isAiThinking=!0,this.updateCommentary(`${this.getAiName(this.aiOpponent)} is contemplating their spell move...`);const e=await ir.getBestMoveAsync(this.game,this.aiOpponent);e&&!this.game.isGameOver()&&this.activeBoard.executeWizardMove(e),this.isAiThinking=!1,this.updateEvaluationBar(),this.updateMoveHistoryUI(),this.updateTurnBanner(),this.game.isCheckmate()?(this.updateCommentary(`⚡ CHECKMATE! ${this.getAiName(this.aiOpponent)} wins the duel!`),this.showGameOverCelebration(!1)):this.game.inCheck()?this.updateCommentary(`Check! ${this.getAiName(this.aiOpponent)} puts your King under attack!`):this.updateCommentary(this.getAiQuote(this.aiOpponent))}getAiName(e){return{ron:"Ron",hermione:"Hermione",snape:"Snape",dumbledore:"Dumbledore"}[e]||"Opponent"}getAiQuote(e){return{ron:"Check this out! Knight tactics incoming!",hermione:"According to grandmaster theory, this square gives superior piece activity.",snape:"Foolish move. Your position begins to crumble.",dumbledore:"A fascinating choice. Let us see how the position unfolds."}[e]||"Your turn to move!"}bindPuzzles(){var t,n;const e=document.querySelectorAll(".puzzle-category-btn");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),s.classList.add("active");const r=s.dataset.category||"mate1";wn.setCategory(r),this.loadCurrentPuzzle()})}),(t=document.getElementById("next-puzzle-btn"))==null||t.addEventListener("click",()=>{Ge.playSpellSelectSound(),wn.nextPuzzle(),this.loadCurrentPuzzle()}),(n=document.getElementById("solve-reveal-btn"))==null||n.addEventListener("click",()=>{Ge.playSpellSelectSound();const s=wn.getCurrentPuzzle();if(s&&s.solutionVerbose.length>0){this.game.load(s.fen),this.activeBoard.attachGame(this.game);const r=s.solutionVerbose[0];this.activeBoard.executeWizardMove(r)}})}loadCurrentPuzzle(){const e=wn.getCurrentPuzzle();if(!e)return;this.game.load(e.fen),this.activeBoard.attachGame(this.game),document.getElementById("puzzle-title").textContent=e.title,document.getElementById("puzzle-desc").textContent=e.description,document.getElementById("puzzle-theme-badge").textContent=e.category;const t=document.getElementById("puzzle-status");t.className="puzzle-status",t.textContent="Find the winning move for White!",this.updatePuzzleStats(),this.updateEvaluationBar()}updatePuzzleStats(){document.getElementById("puzzle-streak").textContent=`${wn.streak} 🔥`,document.getElementById("puzzle-rating").textContent=`${wn.score} ⚡`,document.getElementById("puzzles-solved").textContent=`${wn.solvedCount} 🎯`}bindAcademy(){const e=document.querySelectorAll(".acad-tab-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=t.dataset.section||"openings";this.renderAcademySection(n)})})}bindAcademy(){var s,r,a;document.querySelectorAll(".acad-tab-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".acad-tab-btn").forEach(c=>c.classList.remove("active")),o.classList.add("active"),Ge.playSpellSelectSound();const l=o.dataset.section||"openings";this.renderAcademySection(l)})});const e=document.getElementById("tutor-variation-select");e==null||e.addEventListener("change",o=>{Ge.playSpellSelectSound();const l=o.target.value;if(this.activeLesson&&this.activeLesson.variations){const c=this.activeLesson.variations.find(u=>u.id===l);c&&(this.activeVariation=c,this.applyAcademyStep(0))}});const t=document.getElementById("tutor-voice-toggle");t==null||t.addEventListener("click",()=>{this.voiceTutorEnabled=!this.voiceTutorEnabled,t.classList.toggle("muted",!this.voiceTutorEnabled),t.textContent=this.voiceTutorEnabled?"🔊 Voice: ON":"🔇 Voice: OFF",this.voiceTutorEnabled||Ge.stopSpeech()}),(s=document.getElementById("tutor-reset"))==null||s.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.applyAcademyStep(0)}),(r=document.getElementById("tutor-prev"))==null||r.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.activeLessonStep>0&&this.applyAcademyStep(this.activeLessonStep-1)}),(a=document.getElementById("tutor-next"))==null||a.addEventListener("click",()=>{Ge.playSpellSelectSound();const o=this.getActiveSequence();o&&this.activeLessonStep<o.length-1&&this.applyAcademyStep(this.activeLessonStep+1)});const n=document.getElementById("tutor-autoplay");n==null||n.addEventListener("click",()=>{Ge.playSpellSelectSound(),this.tutorAutoplayTimer?(clearInterval(this.tutorAutoplayTimer),this.tutorAutoplayTimer=null,n.classList.remove("active")):(n.classList.add("active"),this.tutorAutoplayTimer=setInterval(()=>{const o=this.getActiveSequence();o&&this.activeLessonStep<o.length-1?this.applyAcademyStep(this.activeLessonStep+1):(clearInterval(this.tutorAutoplayTimer),this.tutorAutoplayTimer=null,n.classList.remove("active"))},4500))})}getActiveSequence(){return this.activeVariation&&this.activeVariation.moveSequence?this.activeVariation.moveSequence:this.activeLesson&&this.activeLesson.moveSequence?this.activeLesson.moveSequence:[]}renderAcademySection(e){const t=document.getElementById("academy-lesson-container");if(!t)return;t.innerHTML="";const n=u0.getLessons(e);n.forEach((s,r)=>{const a=document.createElement("div");a.className=`lesson-card ${r===0?"active":""}`;const o=s.variations?s.variations.length:1;a.innerHTML=`
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <div class="lesson-moves">Available Sub-Lines: ${o} variation(s)</div>
      `,a.addEventListener("click",()=>{t.querySelectorAll(".lesson-card").forEach(l=>l.classList.remove("active")),a.classList.add("active"),Ge.playSpellSelectSound(),this.loadAcademyLesson(s)}),t.appendChild(a)}),n.length>0&&this.loadAcademyLesson(n[0])}loadAcademyLesson(e){this.activeLesson=e;const t=document.getElementById("tutor-variation-select");t&&(t.innerHTML="",e.variations&&e.variations.length>0?(e.variations.forEach(n=>{const s=document.createElement("option");s.value=n.id,s.textContent=n.name,t.appendChild(s)}),this.activeVariation=e.variations[0],t.style.display="inline-block"):(this.activeVariation=null,t.style.display="none")),this.applyAcademyStep(0)}applyAcademyStep(e){const t=this.getActiveSequence();if(!t||t.length===0)return;this.activeLessonStep=Math.max(0,Math.min(e,t.length-1)),this.game.reset();for(let c=0;c<=this.activeLessonStep;c++)if(t[c]&&t[c].san)try{this.game.move(t[c].san)}catch(u){console.warn("Academy move error:",u)}this.activeBoard.attachGame(this.game),this.updateEvaluationBar();const n=t[this.activeLessonStep],s=document.getElementById("tutor-lesson-title"),r=document.getElementById("tutor-step-badge"),a=document.getElementById("tutor-speech-text"),o=document.getElementById("tutor-tip-text"),l=this.activeVariation?`${this.activeLesson.title} — ${this.activeVariation.name}`:this.activeLesson.title;s&&(s.textContent=l),r&&(r.textContent=`Move Step ${this.activeLessonStep+1} of ${t.length}: ${n.title}`),a&&(a.textContent=`"${n.speech}"`),o&&(o.textContent=`💡 Tip: ${n.tip}`),this.voiceTutorEnabled&&Ge.speakExplanation(n.speech)}bindAnalysis(){var t,n,s,r,a,o;(t=document.getElementById("load-fen-btn"))==null||t.addEventListener("click",()=>{const l=document.getElementById("fen-input").value.trim();if(!l)return;Yt.loadFEN(l)?(this.activeBoard.attachGame(Yt.analysisGame),Ge.playSpellSelectSound(),this.runAnalysisUpdate()):alert("Invalid FEN format!")}),(n=document.getElementById("load-pgn-btn"))==null||n.addEventListener("click",()=>{const l=document.getElementById("pgn-input").value.trim();if(!l)return;Yt.loadPGN(l)?(this.activeBoard.attachGame(Yt.analysisGame),Ge.playSpellSelectSound(),this.runAnalysisUpdate()):alert("Invalid PGN format!")}),(s=document.getElementById("step-first"))==null||s.addEventListener("click",()=>{Ge.playSpellSelectSound();const l=Yt.stepFirst();this.activeBoard.attachGame(l),this.runAnalysisUpdate()}),(r=document.getElementById("step-prev"))==null||r.addEventListener("click",()=>{Ge.playSpellSelectSound();const l=Yt.stepPrev();this.activeBoard.attachGame(l),this.runAnalysisUpdate()}),(a=document.getElementById("step-next"))==null||a.addEventListener("click",()=>{Ge.playSpellSelectSound();const l=Yt.stepNext();this.activeBoard.attachGame(l),this.runAnalysisUpdate()}),(o=document.getElementById("step-last"))==null||o.addEventListener("click",()=>{Ge.playSpellSelectSound();const l=Yt.stepLast();this.activeBoard.attachGame(l),this.runAnalysisUpdate()});const e=document.getElementById("auto-play-btn");e==null||e.addEventListener("click",()=>{Ge.playSpellSelectSound();const l=Yt.toggleAutoplay(c=>{this.activeBoard.attachGame(c),this.runAnalysisUpdate()});e.classList.toggle("active",l)})}runAnalysisUpdate(){const e=Yt.evaluateCurrentPosition(),t=document.getElementById("analysis-eval"),n=document.getElementById("analysis-best-move"),s=document.getElementById("analysis-classification"),r=document.getElementById("analysis-step-counter");t&&(t.textContent=e.evalText),n&&(n.textContent=e.bestMove),s&&(s.textContent=e.classification),r&&(r.textContent=e.stepText),this.updateEvaluationBar(e.fillPercentage,e.evalText)}updateEvaluationBar(e=null,t=null){const n=document.getElementById("eval-bar-fill"),s=document.getElementById("eval-bar-text");if(!n||!s)return;if(e!==null&&t!==null){n.style.height=`${e}%`,s.textContent=t;return}const r=Yt.evaluateCurrentPosition(this.game);n.style.height=`${r.fillPercentage}%`,s.textContent=r.evalText}updateMoveHistoryUI(){const e=document.getElementById("move-history"),t=document.getElementById("captured-summary");if(!e)return;const n=this.game.history();if(n.length===0)e.innerHTML='<div class="placeholder-text">Moves will appear here as spell tokens are moved...</div>';else{let s="";for(let r=0;r<n.length;r+=2){const a=Math.floor(r/2)+1,o=n[r],l=n[r+1]||"";s+=`
          <div class="move-row">
            <span class="move-num">${a}.</span>
            <span class="move-white">${o}</span>
            <span class="move-black">${l}</span>
          </div>
        `}e.innerHTML=s,e.scrollTop=e.scrollHeight}t&&(t.textContent=`Captured: White ${this.capturedPieces.w.length} | Black ${this.capturedPieces.b.length}`)}updateTurnBanner(){const e=document.getElementById("turn-banner");if(!e)return;const t=this.game.turn(),n=this.game.inCheck();this.game.isCheckmate()?e.innerHTML=`<span class="turn-dot ${t==="w"?"black":"white"}"></span> CHECKMATE! ${t==="w"?"Black":"White"} Wins!`:e.innerHTML=`<span class="turn-dot ${t==="w"?"white":"black"}"></span> ${t==="w"?"White":"Black"} to move ${n?"(CHECK!)":""}`}updateCommentary(e){const t=document.getElementById("commentary-text");t&&(t.textContent=e)}}function yl(){window.wizardApp||(window.wizardApp=new f0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yl):yl();

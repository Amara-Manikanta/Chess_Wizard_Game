var Ic=Object.defineProperty;var Uc=(i,e,t)=>e in i?Ic(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ot=(i,e,t)=>Uc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Fc(i){return i!==null?{comment:i,variations:[]}:{variations:[]}}function Bc(i,e,t,n,s){const r={move:i,variations:s};return e&&(r.suffix=e),t&&(r.nag=t),n!==null&&(r.comment=n),r}function Oc(...i){const[e,...t]=i;let n=e;for(const s of t)s!==null&&(n.variations=[s,...s.variations],s.variations=[],n=s);return e}function kc(i,e){if(e.marker&&e.marker.comment){let t=e.root;for(;;){const n=t.variations[0];if(!n){t.comment=e.marker.comment;break}t=n}}return{headers:i,root:e.root,result:(e.marker&&e.marker.result)??void 0}}function zc(i,e){function t(){this.constructor=i}t.prototype=e.prototype,i.prototype=new t}function ki(i,e,t,n){var s=Error.call(this,i);return Object.setPrototypeOf&&Object.setPrototypeOf(s,ki.prototype),s.expected=e,s.found=t,s.location=n,s.name="SyntaxError",s}zc(ki,Error);function Mr(i,e,t){return t=t||" ",i.length>e?i:(e-=i.length,t+=t.repeat(e),i+t.slice(0,e))}ki.prototype.format=function(i){var e="Error: "+this.message;if(this.location){var t=null,n;for(n=0;n<i.length;n++)if(i[n].source===this.location.source){t=i[n].text.split(/\r\n|\n|\r/g);break}var s=this.location.start,r=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(s):s,a=this.location.source+":"+r.line+":"+r.column;if(t){var o=this.location.end,l=Mr("",r.line.toString().length," "),c=t[s.line-1],u=s.line===o.line?o.column:c.length+1,d=u-s.column||1;e+=`
 --> `+a+`
`+l+` |
`+r.line+" | "+c+`
`+l+" | "+Mr("",s.column-1," ")+Mr("",d,"^")}else e+=`
 at `+a}return e};ki.buildMessage=function(i,e){var t={literal:function(c){return'"'+s(c.text)+'"'},class:function(c){var u=c.parts.map(function(d){return Array.isArray(d)?r(d[0])+"-"+r(d[1]):r(d)});return"["+(c.inverted?"^":"")+u.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(c){return c.description}};function n(c){return c.charCodeAt(0).toString(16).toUpperCase()}function s(c){return c.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(u){return"\\x0"+n(u)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(u){return"\\x"+n(u)})}function r(c){return c.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(u){return"\\x0"+n(u)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(u){return"\\x"+n(u)})}function a(c){return t[c.type](c)}function o(c){var u=c.map(a),d,h;if(u.sort(),u.length>0){for(d=1,h=1;d<u.length;d++)u[d-1]!==u[d]&&(u[h]=u[d],h++);u.length=h}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}function l(c){return c?'"'+s(c)+'"':"end of input"}return"Expected "+o(i)+" but "+l(e)+" found."};function Gc(i,e){e=e!==void 0?e:{};var t={},n=e.grammarSource,s={pgn:Zi},r=Zi,a="[",o='"',l="]",c=".",u="O-O-O",d="O-O",h="0-0-0",m="0-0",_="$",M="{",p="}",f=";",T="(",C=")",S="1-0",w="0-1",b="1/2-1/2",R="*",v=/^[a-zA-Z]/,E=/^[^"]/,U=/^[0-9]/,P=/^[.]/,O=/^[a-zA-Z1-8\-=]/,Y=/^[+#]/,J=/^[!?]/,z=/^[^}]/,Z=/^[^\r\n]/,q=/^[ \t\r\n]/,te=Ht("tag pair"),se=Mt("[",!1),ve=Mt('"',!1),ye=Mt("]",!1),be=Ht("tag name"),We=Xt([["a","z"],["A","Z"]],!1,!1),ct=Ht("tag value"),$e=Xt(['"'],!0,!1),ee=Ht("move number"),he=Xt([["0","9"]],!1,!1),re=Mt(".",!1),Le=Xt(["."],!1,!1),Ue=Ht("standard algebraic notation"),Re=Mt("O-O-O",!1),ut=Mt("O-O",!1),ze=Mt("0-0-0",!1),et=Mt("0-0",!1),Ye=Xt([["a","z"],["A","Z"],["1","8"],"-","="],!1,!1),qe=Xt(["+","#"],!1,!1),pt=Ht("suffix annotation"),mt=Xt(["!","?"],!1,!1),xt=Ht("NAG"),Et=Mt("$",!1),ht=Ht("brace comment"),gt=Mt("{",!1),F=Xt(["}"],!0,!1),Lt=Mt("}",!1),je=Ht("rest of line comment"),y=Mt(";",!1),g=Xt(["\r",`
`],!0,!1),k=Ht("variation"),W=Mt("(",!1),K=Mt(")",!1),le=Ht("game termination marker"),fe=Mt("1-0",!1),$=Mt("0-1",!1),j=Mt("1/2-1/2",!1),pe=Mt("*",!1),we=Ht("whitespace"),_e=Xt([" ","	","\r",`
`],!1,!1),me=function(A,D){return kc(A,D)},Ce=function(A){return Object.fromEntries(A)},Pe=function(A,D){return[A,D]},Fe=function(A,D){return{root:A,marker:D}},N=function(A,D){return Oc(Fc(A),...D.flat())},de=function(A,D,I,ie,ae){return Bc(A,D,I,ie,ae)},Q=function(A){return A},ge=function(A){return A.replace(/[\r\n]+/g," ")},Se=function(A){return A.trim()},ne=function(A){return A},Ae=function(A,D){return{result:A,comment:D}},L=e.peg$currPos|0,tt=[{line:1,column:1}],Ge=L,Ot=e.peg$maxFailExpected||[],oe=e.peg$silentFails|0,Jn;if(e.startRule){if(!(e.startRule in s))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');r=s[e.startRule]}function Mt(A,D){return{type:"literal",text:A,ignoreCase:D}}function Xt(A,D,I){return{type:"class",parts:A,inverted:D,ignoreCase:I}}function Xi(){return{type:"end"}}function Ht(A){return{type:"other",description:A}}function Ki(A){var D=tt[A],I;if(D)return D;if(A>=tt.length)I=tt.length-1;else for(I=A;!tt[--I];);for(D=tt[I],D={line:D.line,column:D.column};I<A;)i.charCodeAt(I)===10?(D.line++,D.column=1):D.column++,I++;return tt[A]=D,D}function $i(A,D,I){var ie=Ki(A),ae=Ki(D),ce={source:n,start:{offset:A,line:ie.line,column:ie.column},end:{offset:D,line:ae.line,column:ae.column}};return ce}function Te(A){L<Ge||(L>Ge&&(Ge=L,Ot=[]),Ot.push(A))}function Yi(A,D,I){return new ki(ki.buildMessage(A,D),A,D,I)}function Zi(){var A,D,I;return A=L,D=Ss(),I=Es(),A=me(D,I),A}function Ss(){var A,D,I;for(A=L,D=[],I=jn();I!==t;)D.push(I),I=jn();return I=ue(),A=Ce(D),A}function jn(){var A,D,I,ie,ae,ce,Ve;return oe++,A=L,ue(),i.charCodeAt(L)===91?(D=a,L++):(D=t,oe===0&&Te(se)),D!==t?(ue(),I=ys(),I!==t?(ue(),i.charCodeAt(L)===34?(ie=o,L++):(ie=t,oe===0&&Te(ve)),ie!==t?(ae=pi(),i.charCodeAt(L)===34?(ce=o,L++):(ce=t,oe===0&&Te(ve)),ce!==t?(ue(),i.charCodeAt(L)===93?(Ve=l,L++):(Ve=t,oe===0&&Te(ye)),Ve!==t?A=Pe(I,ae):(L=A,A=t)):(L=A,A=t)):(L=A,A=t)):(L=A,A=t)):(L=A,A=t),oe--,A===t&&oe===0&&Te(te),A}function ys(){var A,D,I;if(oe++,A=L,D=[],I=i.charAt(L),v.test(I)?L++:(I=t,oe===0&&Te(We)),I!==t)for(;I!==t;)D.push(I),I=i.charAt(L),v.test(I)?L++:(I=t,oe===0&&Te(We));else D=t;return D!==t?A=i.substring(A,L):A=D,oe--,A===t&&(D=t,oe===0&&Te(be)),A}function pi(){var A,D,I;for(oe++,A=L,D=[],I=i.charAt(L),E.test(I)?L++:(I=t,oe===0&&Te($e));I!==t;)D.push(I),I=i.charAt(L),E.test(I)?L++:(I=t,oe===0&&Te($e));return A=i.substring(A,L),oe--,D=t,oe===0&&Te(ct),A}function Es(){var A,D,I;return A=L,D=Qi(),ue(),I=xe(),I===t&&(I=null),ue(),A=Fe(D,I),A}function Qi(){var A,D,I,ie;for(A=L,D=B(),D===t&&(D=null),I=[],ie=bs();ie!==t;)I.push(ie),ie=bs();return A=N(D,I),A}function bs(){var A,D,I,ie,ae,ce,Ve,rt;if(A=L,ue(),_r(),ue(),D=vr(),D!==t){for(I=xr(),I===t&&(I=null),ie=[],ae=x();ae!==t;)ie.push(ae),ae=x();for(ae=ue(),ce=B(),ce===t&&(ce=null),Ve=[],rt=V();rt!==t;)Ve.push(rt),rt=V();A=de(D,I,ie,ce,Ve)}else L=A,A=t;return A}function _r(){var A,D,I,ie,ae,ce;for(oe++,A=L,D=[],I=i.charAt(L),U.test(I)?L++:(I=t,oe===0&&Te(he));I!==t;)D.push(I),I=i.charAt(L),U.test(I)?L++:(I=t,oe===0&&Te(he));if(i.charCodeAt(L)===46?(I=c,L++):(I=t,oe===0&&Te(re)),I!==t){for(ie=ue(),ae=[],ce=i.charAt(L),P.test(ce)?L++:(ce=t,oe===0&&Te(Le));ce!==t;)ae.push(ce),ce=i.charAt(L),P.test(ce)?L++:(ce=t,oe===0&&Te(Le));D=[D,I,ie,ae],A=D}else L=A,A=t;return oe--,A===t&&(D=t,oe===0&&Te(ee)),A}function vr(){var A,D,I,ie,ae,ce;if(oe++,A=L,D=L,i.substr(L,5)===u?(I=u,L+=5):(I=t,oe===0&&Te(Re)),I===t&&(i.substr(L,3)===d?(I=d,L+=3):(I=t,oe===0&&Te(ut)),I===t&&(i.substr(L,5)===h?(I=h,L+=5):(I=t,oe===0&&Te(ze)),I===t&&(i.substr(L,3)===m?(I=m,L+=3):(I=t,oe===0&&Te(et)),I===t))))if(I=L,ie=i.charAt(L),v.test(ie)?L++:(ie=t,oe===0&&Te(We)),ie!==t){if(ae=[],ce=i.charAt(L),O.test(ce)?L++:(ce=t,oe===0&&Te(Ye)),ce!==t)for(;ce!==t;)ae.push(ce),ce=i.charAt(L),O.test(ce)?L++:(ce=t,oe===0&&Te(Ye));else ae=t;ae!==t?(ie=[ie,ae],I=ie):(L=I,I=t)}else L=I,I=t;return I!==t?(ie=i.charAt(L),Y.test(ie)?L++:(ie=t,oe===0&&Te(qe)),ie===t&&(ie=null),I=[I,ie],D=I):(L=D,D=t),D!==t?A=i.substring(A,L):A=D,oe--,A===t&&(D=t,oe===0&&Te(Ue)),A}function xr(){var A,D,I;for(oe++,A=L,D=[],I=i.charAt(L),J.test(I)?L++:(I=t,oe===0&&Te(mt));I!==t;)D.push(I),D.length>=2?I=t:(I=i.charAt(L),J.test(I)?L++:(I=t,oe===0&&Te(mt)));return D.length<1?(L=A,A=t):A=D,oe--,A===t&&(D=t,oe===0&&Te(pt)),A}function x(){var A,D,I,ie,ae;if(oe++,A=L,ue(),i.charCodeAt(L)===36?(D=_,L++):(D=t,oe===0&&Te(Et)),D!==t){if(I=L,ie=[],ae=i.charAt(L),U.test(ae)?L++:(ae=t,oe===0&&Te(he)),ae!==t)for(;ae!==t;)ie.push(ae),ae=i.charAt(L),U.test(ae)?L++:(ae=t,oe===0&&Te(he));else ie=t;ie!==t?I=i.substring(I,L):I=ie,I!==t?A=Q(I):(L=A,A=t)}else L=A,A=t;return oe--,A===t&&oe===0&&Te(xt),A}function B(){var A;return A=X(),A===t&&(A=G()),A}function X(){var A,D,I,ie,ae;if(oe++,A=L,i.charCodeAt(L)===123?(D=M,L++):(D=t,oe===0&&Te(gt)),D!==t){for(I=L,ie=[],ae=i.charAt(L),z.test(ae)?L++:(ae=t,oe===0&&Te(F));ae!==t;)ie.push(ae),ae=i.charAt(L),z.test(ae)?L++:(ae=t,oe===0&&Te(F));I=i.substring(I,L),i.charCodeAt(L)===125?(ie=p,L++):(ie=t,oe===0&&Te(Lt)),ie!==t?A=ge(I):(L=A,A=t)}else L=A,A=t;return oe--,A===t&&(D=t,oe===0&&Te(ht)),A}function G(){var A,D,I,ie,ae;if(oe++,A=L,i.charCodeAt(L)===59?(D=f,L++):(D=t,oe===0&&Te(y)),D!==t){for(I=L,ie=[],ae=i.charAt(L),Z.test(ae)?L++:(ae=t,oe===0&&Te(g));ae!==t;)ie.push(ae),ae=i.charAt(L),Z.test(ae)?L++:(ae=t,oe===0&&Te(g));I=i.substring(I,L),A=Se(I)}else L=A,A=t;return oe--,A===t&&(D=t,oe===0&&Te(je)),A}function V(){var A,D,I,ie;return oe++,A=L,ue(),i.charCodeAt(L)===40?(D=T,L++):(D=t,oe===0&&Te(W)),D!==t?(I=Qi(),I!==t?(ue(),i.charCodeAt(L)===41?(ie=C,L++):(ie=t,oe===0&&Te(K)),ie!==t?A=ne(I):(L=A,A=t)):(L=A,A=t)):(L=A,A=t),oe--,A===t&&oe===0&&Te(k),A}function xe(){var A,D,I;return oe++,A=L,i.substr(L,3)===S?(D=S,L+=3):(D=t,oe===0&&Te(fe)),D===t&&(i.substr(L,3)===w?(D=w,L+=3):(D=t,oe===0&&Te($)),D===t&&(i.substr(L,7)===b?(D=b,L+=7):(D=t,oe===0&&Te(j)),D===t&&(i.charCodeAt(L)===42?(D=R,L++):(D=t,oe===0&&Te(pe))))),D!==t?(ue(),I=B(),I===t&&(I=null),A=Ae(D,I)):(L=A,A=t),oe--,A===t&&(D=t,oe===0&&Te(le)),A}function ue(){var A,D;for(oe++,A=[],D=i.charAt(L),q.test(D)?L++:(D=t,oe===0&&Te(_e));D!==t;)A.push(D),D=i.charAt(L),q.test(D)?L++:(D=t,oe===0&&Te(_e));return oe--,D=t,oe===0&&Te(we),A}if(Jn=r(),e.peg$library)return{peg$result:Jn,peg$currPos:L,peg$FAILED:t,peg$maxFailExpected:Ot,peg$maxFailPos:Ge};if(Jn!==t&&L===i.length)return Jn;throw Jn!==t&&L<i.length&&Te(Xi()),Yi(Ot,Ge<i.length?i.charAt(Ge):null,Ge<i.length?$i(Ge,Ge+1):$i(Ge,Ge))}/**
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
 */const Qs=0xffffffffffffffffn;function Sr(i,e){return(i<<e|i>>64n-e)&0xffffffffffffffffn}function Lo(i,e){return i*e&Qs}function Vc(i){return function(){let e=BigInt(i&Qs),t=BigInt(i>>64n&Qs);const n=Lo(Sr(Lo(e,5n),7n),9n);return t^=e,e=(Sr(e,24n)^t^t<<16n)&Qs,t=Sr(t,37n),i=t<<64n|e,n}}const dr=Vc(0xa187eb39cdcaed8f31c4b365b102e01en),Hc=Array.from({length:2},()=>Array.from({length:6},()=>Array.from({length:128},()=>dr()))),Wc=Array.from({length:8},()=>dr()),qc=Array.from({length:16},()=>dr()),yr=dr(),Ut="w",Zt="b",yt="p",ua="n",Js="b",os="r",Kn="q",bt="k",Er="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";class Ts{constructor(e,t){ot(this,"color");ot(this,"from");ot(this,"to");ot(this,"piece");ot(this,"captured");ot(this,"promotion");ot(this,"flags");ot(this,"san");ot(this,"lan");ot(this,"before");ot(this,"after");const{color:n,piece:s,from:r,to:a,flags:o,captured:l,promotion:c}=t,u=Ct(r),d=Ct(a);this.color=n,this.piece=s,this.from=u,this.to=d,this.san=e._moveToSan(t,e._moves({legal:!0})),this.lan=u+d,this.before=e.fen(),e._makeMove(t),this.after=e.fen(),e._undoMove(),this.flags="";for(const h in Ie)Ie[h]&o&&(this.flags+=ei[h]);l&&(this.captured=l),c&&(this.promotion=c,this.lan+=c)}isCapture(){return this.flags.indexOf(ei.CAPTURE)>-1}isPromotion(){return this.flags.indexOf(ei.PROMOTION)>-1}isEnPassant(){return this.flags.indexOf(ei.EP_CAPTURE)>-1}isKingsideCastle(){return this.flags.indexOf(ei.KSIDE_CASTLE)>-1}isQueensideCastle(){return this.flags.indexOf(ei.QSIDE_CASTLE)>-1}isBigPawn(){return this.flags.indexOf(ei.BIG_PAWN)>-1}}const Rt=-1,ei={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q",NULL_MOVE:"-"},Ie={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64,NULL_MOVE:128},da={Event:"?",Site:"?",Date:"????.??.??",Round:"?",White:"?",Black:"?",Result:"*"},Xc={WhiteTitle:null,BlackTitle:null,WhiteElo:null,BlackElo:null,WhiteUSCF:null,BlackUSCF:null,WhiteNA:null,BlackNA:null,WhiteType:null,BlackType:null,EventDate:null,EventSponsor:null,Section:null,Stage:null,Board:null,Opening:null,Variation:null,SubVariation:null,ECO:null,NIC:null,Time:null,UTCTime:null,UTCDate:null,TimeControl:null,SetUp:null,FEN:null,Termination:null,Annotator:null,Mode:null,PlyCount:null},Kc={...da,...Xc},Ne={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},br={b:[16,32,17,15],w:[-16,-32,-17,-15]},No={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},$c=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],Yc=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],Zc={p:1,n:2,b:4,r:8,q:16,k:32},Qc="pnbrqkPNBRQK",Do=[ua,Js,os,Kn],Jc=7,jc=6,eh=1,th=0,As={[bt]:Ie.KSIDE_CASTLE,[Kn]:Ie.QSIDE_CASTLE},On={w:[{square:Ne.a1,flag:Ie.QSIDE_CASTLE},{square:Ne.h1,flag:Ie.KSIDE_CASTLE}],b:[{square:Ne.a8,flag:Ie.QSIDE_CASTLE},{square:Ne.h8,flag:Ie.KSIDE_CASTLE}]},nh={b:eh,w:jc},Tr="--";function hi(i){return i>>4}function ps(i){return i&15}function ql(i){return"0123456789".indexOf(i)!==-1}function Ct(i){const e=ps(i),t=hi(i);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function Ji(i){return i===Ut?Zt:Ut}function ih(i){const e=i.split(/\s+/);if(e.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const t=parseInt(e[5],10);if(isNaN(t)||t<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const n=parseInt(e[4],10);if(isNaN(n)||n<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const s=e[0].split("/");if(s.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let a=0;a<s.length;a++){let o=0,l=!1;for(let c=0;c<s[a].length;c++)if(ql(s[a][c])){if(l)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};o+=parseInt(s[a][c],10),l=!0}else{if(!/^[prnbqkPRNBQK]$/.test(s[a][c]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};o+=1,l=!1}if(o!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(e[3][1]=="3"&&e[1]=="w"||e[3][1]=="6"&&e[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const r=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:a,regex:o}of r){if(!o.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${a} king`};if((e[0].match(o)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${a} kings`}}return Array.from(s[0]+s[7]).some(a=>a.toUpperCase()==="P")?{ok:!1,error:"Invalid FEN: some pawns are on the edge rows"}:{ok:!0}}function sh(i,e){const t=i.from,n=i.to,s=i.piece;let r=0,a=0,o=0;for(let l=0,c=e.length;l<c;l++){const u=e[l].from,d=e[l].to,h=e[l].piece;s===h&&t!==u&&n===d&&(r++,hi(t)===hi(u)&&a++,ps(t)===ps(u)&&o++)}return r>0?a>0&&o>0?Ct(t):o>0?Ct(t).charAt(1):Ct(t).charAt(0):""}function kn(i,e,t,n,s,r=void 0,a=Ie.NORMAL){const o=hi(n);if(s===yt&&(o===Jc||o===th))for(let l=0;l<Do.length;l++){const c=Do[l];i.push({color:e,from:t,to:n,piece:s,captured:r,promotion:c,flags:a|Ie.PROMOTION})}else i.push({color:e,from:t,to:n,piece:s,captured:r,flags:a})}function Io(i){let e=i.charAt(0);return e>="a"&&e<="h"?i.match(/[a-h]\d.*[a-h]\d/)?void 0:yt:(e=e.toLowerCase(),e==="o"?bt:e)}function Ar(i){return i.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class Ii{constructor(e=Er,{skipValidation:t=!1}={}){ot(this,"_board",new Array(128));ot(this,"_turn",Ut);ot(this,"_header",{});ot(this,"_kings",{w:Rt,b:Rt});ot(this,"_epSquare",-1);ot(this,"_halfMoves",0);ot(this,"_moveNumber",0);ot(this,"_history",[]);ot(this,"_comments",{});ot(this,"_castling",{w:0,b:0});ot(this,"_hash",0n);ot(this,"_positionCount",new Map);this.load(e,{skipValidation:t})}clear({preserveHeaders:e=!1}={}){this._board=new Array(128),this._kings={w:Rt,b:Rt},this._turn=Ut,this._castling={w:0,b:0},this._epSquare=Rt,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{...Kc},this._hash=this._computeHash(),this._positionCount=new Map,this._header.SetUp=null,this._header.FEN=null}load(e,{skipValidation:t=!1,preserveHeaders:n=!1}={}){let s=e.split(/\s+/);if(s.length>=2&&s.length<6){const o=["-","-","0","1"];e=s.concat(o.slice(-(6-s.length))).join(" ")}if(s=e.split(/\s+/),!t){const{ok:o,error:l}=ih(e);if(!o)throw new Error(l)}const r=s[0];let a=0;this.clear({preserveHeaders:n});for(let o=0;o<r.length;o++){const l=r.charAt(o);if(l==="/")a+=8;else if(ql(l))a+=parseInt(l,10);else{const c=l<"a"?Ut:Zt;this._put({type:l.toLowerCase(),color:c},Ct(a)),a++}}this._turn=s[1],s[2].indexOf("K")>-1&&(this._castling.w|=Ie.KSIDE_CASTLE),s[2].indexOf("Q")>-1&&(this._castling.w|=Ie.QSIDE_CASTLE),s[2].indexOf("k")>-1&&(this._castling.b|=Ie.KSIDE_CASTLE),s[2].indexOf("q")>-1&&(this._castling.b|=Ie.QSIDE_CASTLE),this._epSquare=s[3]==="-"?Rt:Ne[s[3]],this._halfMoves=parseInt(s[4],10),this._moveNumber=parseInt(s[5],10),this._hash=this._computeHash(),this._updateSetup(e),this._incPositionCount()}fen({forceEnpassantSquare:e=!1}={}){var a,o;let t=0,n="";for(let l=Ne.a8;l<=Ne.h1;l++){if(this._board[l]){t>0&&(n+=t,t=0);const{color:c,type:u}=this._board[l];n+=c===Ut?u.toUpperCase():u.toLowerCase()}else t++;l+1&136&&(t>0&&(n+=t),l!==Ne.h1&&(n+="/"),t=0,l+=8)}let s="";this._castling[Ut]&Ie.KSIDE_CASTLE&&(s+="K"),this._castling[Ut]&Ie.QSIDE_CASTLE&&(s+="Q"),this._castling[Zt]&Ie.KSIDE_CASTLE&&(s+="k"),this._castling[Zt]&Ie.QSIDE_CASTLE&&(s+="q"),s=s||"-";let r="-";if(this._epSquare!==Rt)if(e)r=Ct(this._epSquare);else{const l=this._epSquare+(this._turn===Ut?16:-16),c=[l+1,l-1];for(const u of c){if(u&136)continue;const d=this._turn;if(((a=this._board[u])==null?void 0:a.color)===d&&((o=this._board[u])==null?void 0:o.type)===yt){this._makeMove({color:d,from:u,to:this._epSquare,piece:yt,captured:yt,flags:Ie.EP_CAPTURE});const h=!this._isKingAttacked(d);if(this._undoMove(),h){r=Ct(this._epSquare);break}}}}return[n,this._turn,s,r,this._halfMoves,this._moveNumber].join(" ")}_pieceKey(e){if(!this._board[e])return 0n;const{color:t,type:n}=this._board[e],s={w:0,b:1}[t],r={p:0,n:1,b:2,r:3,q:4,k:5}[n];return Hc[s][r][e]}_epKey(){return this._epSquare===Rt?0n:Wc[this._epSquare&7]}_castlingKey(){const e=this._castling.w>>5|this._castling.b>>3;return qc[e]}_computeHash(){let e=0n;for(let t=Ne.a8;t<=Ne.h1;t++){if(t&136){t+=7;continue}this._board[t]&&(e^=this._pieceKey(t))}return e^=this._epKey(),e^=this._castlingKey(),this._turn==="b"&&(e^=yr),e}_updateSetup(e){this._history.length>0||(e!==Er?(this._header.SetUp="1",this._header.FEN=e):(this._header.SetUp=null,this._header.FEN=null))}reset(){this.load(Er)}get(e){return this._board[Ne[e]]}findPiece(e){var n;const t=[];for(let s=Ne.a8;s<=Ne.h1;s++){if(s&136){s+=7;continue}!this._board[s]||((n=this._board[s])==null?void 0:n.color)!==e.color||this._board[s].color===e.color&&this._board[s].type===e.type&&t.push(Ct(s))}return t}put({type:e,color:t},n){return this._put({type:e,color:t},n)?(this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),!0):!1}_set(e,t){this._hash^=this._pieceKey(e),this._board[e]=t,this._hash^=this._pieceKey(e)}_put({type:e,color:t},n){if(Qc.indexOf(e.toLowerCase())===-1||!(n in Ne))return!1;const s=Ne[n];if(e==bt&&!(this._kings[t]==Rt||this._kings[t]==s))return!1;const r=this._board[s];return r&&r.type===bt&&(this._kings[r.color]=Rt),this._set(s,{type:e,color:t}),e===bt&&(this._kings[t]=s),!0}_clear(e){this._hash^=this._pieceKey(e),delete this._board[e]}remove(e){const t=this.get(e);return this._clear(Ne[e]),t&&t.type===bt&&(this._kings[t.color]=Rt),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),t}_updateCastlingRights(){var n,s,r,a,o,l,c,u,d,h,m,_;this._hash^=this._castlingKey();const e=((n=this._board[Ne.e1])==null?void 0:n.type)===bt&&((s=this._board[Ne.e1])==null?void 0:s.color)===Ut,t=((r=this._board[Ne.e8])==null?void 0:r.type)===bt&&((a=this._board[Ne.e8])==null?void 0:a.color)===Zt;(!e||((o=this._board[Ne.a1])==null?void 0:o.type)!==os||((l=this._board[Ne.a1])==null?void 0:l.color)!==Ut)&&(this._castling.w&=-65),(!e||((c=this._board[Ne.h1])==null?void 0:c.type)!==os||((u=this._board[Ne.h1])==null?void 0:u.color)!==Ut)&&(this._castling.w&=-33),(!t||((d=this._board[Ne.a8])==null?void 0:d.type)!==os||((h=this._board[Ne.a8])==null?void 0:h.color)!==Zt)&&(this._castling.b&=-65),(!t||((m=this._board[Ne.h8])==null?void 0:m.type)!==os||((_=this._board[Ne.h8])==null?void 0:_.color)!==Zt)&&(this._castling.b&=-33),this._hash^=this._castlingKey()}_updateEnPassantSquare(){var r,a;if(this._epSquare===Rt)return;const e=this._epSquare+(this._turn===Ut?-16:16),t=this._epSquare+(this._turn===Ut?16:-16),n=[t+1,t-1];if(this._board[e]!==null||this._board[this._epSquare]!==null||((r=this._board[t])==null?void 0:r.color)!==Ji(this._turn)||((a=this._board[t])==null?void 0:a.type)!==yt){this._hash^=this._epKey(),this._epSquare=Rt;return}const s=o=>{var l,c;return!(o&136)&&((l=this._board[o])==null?void 0:l.color)===this._turn&&((c=this._board[o])==null?void 0:c.type)===yt};n.some(s)||(this._hash^=this._epKey(),this._epSquare=Rt)}_attacked(e,t,n){const s=[];for(let r=Ne.a8;r<=Ne.h1;r++){if(r&136){r+=7;continue}if(this._board[r]===void 0||this._board[r].color!==e)continue;const a=this._board[r],o=r-t;if(o===0)continue;const l=o+119;if($c[l]&Zc[a.type]){if(a.type===yt){if(o>0&&a.color===Ut||o<=0&&a.color===Zt)if(n)s.push(Ct(r));else return!0;continue}if(a.type==="n"||a.type==="k")if(n){s.push(Ct(r));continue}else return!0;const c=Yc[l];let u=r+c,d=!1;for(;u!==t;){if(this._board[u]!=null){d=!0;break}u+=c}if(!d)if(n){s.push(Ct(r));continue}else return!0}}return n?s:!1}attackers(e,t){return t?this._attacked(t,Ne[e],!0):this._attacked(this._turn,Ne[e],!0)}_isKingAttacked(e){const t=this._kings[e];return t===-1?!1:this._attacked(Ji(e),t)}hash(){return this._hash.toString(16)}isAttacked(e,t){return this._attacked(t,Ne[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let n=0,s=0;for(let r=Ne.a8;r<=Ne.h1;r++){if(s=(s+1)%2,r&136){r+=7;continue}const a=this._board[r];a&&(e[a.type]=a.type in e?e[a.type]+1:1,a.type===Js&&t.push(s),n++)}if(n===2)return!0;if(n===3&&(e[Js]===1||e[ua]===1))return!0;if(n===e[Js]+2){let r=0;const a=t.length;for(let o=0;o<a;o++)r+=t[o];if(r===0||r===a)return!0}return!1}isThreefoldRepetition(){return this._getPositionCount(this._hash)>=3}isDrawByFiftyMoves(){return this._halfMoves>=100}isDraw(){return this.isDrawByFiftyMoves()||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0,piece:n=void 0}={}){const s=this._moves({square:t,piece:n});return e?s.map(r=>new Ts(this,r)):s.map(r=>this._moveToSan(r,s))}_moves({legal:e=!0,piece:t=void 0,square:n=void 0}={}){var m;const s=n?n.toLowerCase():void 0,r=t==null?void 0:t.toLowerCase(),a=[],o=this._turn,l=Ji(o);let c=Ne.a8,u=Ne.h1,d=!1;if(s)if(s in Ne)c=u=Ne[s],d=!0;else return[];for(let _=c;_<=u;_++){if(_&136){_+=7;continue}if(!this._board[_]||this._board[_].color===l)continue;const{type:M}=this._board[_];let p;if(M===yt){if(r&&r!==M)continue;p=_+br[o][0],this._board[p]||(kn(a,o,_,p,yt),p=_+br[o][1],nh[o]===hi(_)&&!this._board[p]&&kn(a,o,_,p,yt,void 0,Ie.BIG_PAWN));for(let f=2;f<4;f++)p=_+br[o][f],!(p&136)&&(((m=this._board[p])==null?void 0:m.color)===l?kn(a,o,_,p,yt,this._board[p].type,Ie.CAPTURE):p===this._epSquare&&kn(a,o,_,p,yt,yt,Ie.EP_CAPTURE))}else{if(r&&r!==M)continue;for(let f=0,T=No[M].length;f<T;f++){const C=No[M][f];for(p=_;p+=C,!(p&136);){if(!this._board[p])kn(a,o,_,p,M);else{if(this._board[p].color===o)break;kn(a,o,_,p,M,this._board[p].type,Ie.CAPTURE);break}if(M===ua||M===bt)break}}}}if((r===void 0||r===bt)&&(!d||u===this._kings[o])){if(this._castling[o]&Ie.KSIDE_CASTLE){const _=this._kings[o],M=_+2;!this._board[_+1]&&!this._board[M]&&!this._attacked(l,this._kings[o])&&!this._attacked(l,_+1)&&!this._attacked(l,M)&&kn(a,o,this._kings[o],M,bt,void 0,Ie.KSIDE_CASTLE)}if(this._castling[o]&Ie.QSIDE_CASTLE){const _=this._kings[o],M=_-2;!this._board[_-1]&&!this._board[_-2]&&!this._board[_-3]&&!this._attacked(l,this._kings[o])&&!this._attacked(l,_-1)&&!this._attacked(l,M)&&kn(a,o,this._kings[o],M,bt,void 0,Ie.QSIDE_CASTLE)}}if(!e||this._kings[o]===-1)return a;const h=[];for(let _=0,M=a.length;_<M;_++)this._makeMove(a[_]),this._isKingAttacked(o)||h.push(a[_]),this._undoMove();return h}move(e,{strict:t=!1}={}){let n=null;if(typeof e=="string")n=this._moveFromSan(e,t);else if(e===null)n=this._moveFromSan(Tr,t);else if(typeof e=="object"){const r=this._moves();for(let a=0,o=r.length;a<o;a++)if(e.from===Ct(r[a].from)&&e.to===Ct(r[a].to)&&(!("promotion"in r[a])||e.promotion===r[a].promotion)){n=r[a];break}}if(!n)throw typeof e=="string"?new Error(`Invalid move: ${e}`):new Error(`Invalid move: ${JSON.stringify(e)}`);if(this.isCheck()&&n.flags&Ie.NULL_MOVE)throw new Error("Null move not allowed when in check");const s=new Ts(this,n);return this._makeMove(n),this._incPositionCount(),s}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_movePiece(e,t){this._hash^=this._pieceKey(e),this._board[t]=this._board[e],delete this._board[e],this._hash^=this._pieceKey(t)}_makeMove(e){var s,r,a,o;const t=this._turn,n=Ji(t);if(this._push(e),e.flags&Ie.NULL_MOVE){t===Zt&&this._moveNumber++,this._halfMoves++,this._turn=n,this._epSquare=Rt;return}if(this._hash^=this._epKey(),this._hash^=this._castlingKey(),e.captured&&(this._hash^=this._pieceKey(e.to)),this._movePiece(e.from,e.to),e.flags&Ie.EP_CAPTURE&&(this._turn===Zt?this._clear(e.to-16):this._clear(e.to+16)),e.promotion&&(this._clear(e.to),this._set(e.to,{type:e.promotion,color:t})),this._board[e.to].type===bt){if(this._kings[t]=e.to,e.flags&Ie.KSIDE_CASTLE){const l=e.to-1,c=e.to+1;this._movePiece(c,l)}else if(e.flags&Ie.QSIDE_CASTLE){const l=e.to+1,c=e.to-2;this._movePiece(c,l)}this._castling[t]=0}if(this._castling[t]){for(let l=0,c=On[t].length;l<c;l++)if(e.from===On[t][l].square&&this._castling[t]&On[t][l].flag){this._castling[t]^=On[t][l].flag;break}}if(this._castling[n]){for(let l=0,c=On[n].length;l<c;l++)if(e.to===On[n][l].square&&this._castling[n]&On[n][l].flag){this._castling[n]^=On[n][l].flag;break}}if(this._hash^=this._castlingKey(),e.flags&Ie.BIG_PAWN){let l;t===Zt?l=e.to-16:l=e.to+16,!(e.to-1&136)&&((s=this._board[e.to-1])==null?void 0:s.type)===yt&&((r=this._board[e.to-1])==null?void 0:r.color)===n||!(e.to+1&136)&&((a=this._board[e.to+1])==null?void 0:a.type)===yt&&((o=this._board[e.to+1])==null?void 0:o.color)===n?(this._epSquare=l,this._hash^=this._epKey()):this._epSquare=Rt}else this._epSquare=Rt;e.piece===yt?this._halfMoves=0:e.flags&(Ie.CAPTURE|Ie.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===Zt&&this._moveNumber++,this._turn=n,this._hash^=yr}undo(){const e=this._hash,t=this._undoMove();if(t){const n=new Ts(this,t);return this._decPositionCount(e),n}return null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;this._hash^=this._epKey(),this._hash^=this._castlingKey();const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber,this._hash^=this._epKey(),this._hash^=this._castlingKey(),this._hash^=yr;const n=this._turn,s=Ji(n);if(t.flags&Ie.NULL_MOVE)return t;if(this._movePiece(t.to,t.from),t.piece&&(this._clear(t.from),this._set(t.from,{type:t.piece,color:n})),t.captured)if(t.flags&Ie.EP_CAPTURE){let r;n===Zt?r=t.to-16:r=t.to+16,this._set(r,{type:yt,color:s})}else this._set(t.to,{type:t.captured,color:s});if(t.flags&(Ie.KSIDE_CASTLE|Ie.QSIDE_CASTLE)){let r,a;t.flags&Ie.KSIDE_CASTLE?(r=t.to+1,a=t.to-1):(r=t.to-2,a=t.to+1),this._movePiece(a,r)}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const n=[];let s=!1;for(const h in this._header)this._header[h]&&n.push(`[${h} "${this._header[h]}"]`+e),s=!0;s&&this._history.length&&n.push(e);const r=h=>{const m=this._comments[this.fen()];if(typeof m<"u"){const _=h.length>0?" ":"";h=`${h}${_}{${m}}`}return h},a=[];for(;this._history.length>0;)a.push(this._undoMove());const o=[];let l="";for(a.length===0&&o.push(r(""));a.length>0;){l=r(l);const h=a.pop();if(!h)break;if(!this._history.length&&h.color==="b"){const m=`${this._moveNumber}. ...`;l=l?`${l} ${m}`:m}else h.color==="w"&&(l.length&&o.push(l),l=this._moveNumber+".");l=l+" "+this._moveToSan(h,this._moves({legal:!0})),this._makeMove(h)}if(l.length&&o.push(r(l)),o.push(this._header.Result||"*"),t===0)return n.join("")+o.join(" ");const c=function(){return n.length>0&&n[n.length-1]===" "?(n.pop(),!0):!1},u=function(h,m){for(const _ of m.split(" "))if(_){if(h+_.length>t){for(;c();)h--;n.push(e),h=0}n.push(_),h+=_.length,n.push(" "),h++}return c()&&h--,h};let d=0;for(let h=0;h<o.length;h++){if(d+o[h].length>t&&o[h].includes("{")){d=u(d,o[h]);continue}d+o[h].length>t&&h!==0?(n[n.length-1]===" "&&n.pop(),n.push(e),d=0):h!==0&&(n.push(" "),d++),n.push(o[h]),d+=o[h].length}return n.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}setHeader(e,t){return this._header[e]=t??da[e]??null,this.getHeaders()}removeHeader(e){return e in this._header?(this._header[e]=da[e]||null,!0):!1}getHeaders(){const e={};for(const[t,n]of Object.entries(this._header))n!==null&&(e[t]=n);return e}loadPgn(e,{strict:t=!1,newlineChar:n=`\r?
`}={}){n!==`\r?
`&&(e=e.replace(new RegExp(n,"g"),`
`));const s=Gc(e);this.reset();const r=s.headers;let a="";for(const c in r)c.toLowerCase()==="fen"&&(a=r[c]),this.header(c,r[c]);if(!t)a&&this.load(a,{preserveHeaders:!0});else if(r.SetUp==="1"){if(!("FEN"in r))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(r.FEN,{preserveHeaders:!0})}let o=s.root;for(;o;){if(o.move){const c=this._moveFromSan(o.move,t);if(c==null)throw new Error(`Invalid move in PGN: ${o.move}`);this._makeMove(c),this._incPositionCount()}o.comment!==void 0&&(this._comments[this.fen()]=o.comment),o=o.variations[0]}const l=s.result;l&&Object.keys(this._header).length&&this._header.Result!==l&&this.setHeader("Result",l)}_moveToSan(e,t){let n="";if(e.flags&Ie.KSIDE_CASTLE)n="O-O";else if(e.flags&Ie.QSIDE_CASTLE)n="O-O-O";else{if(e.flags&Ie.NULL_MOVE)return Tr;if(e.piece!==yt){const s=sh(e,t);n+=e.piece.toUpperCase()+s}e.flags&(Ie.CAPTURE|Ie.EP_CAPTURE)&&(e.piece===yt&&(n+=Ct(e.from)[0]),n+="x"),n+=Ct(e.to),e.promotion&&(n+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?n+="#":n+="+"),this._undoMove(),n}_moveFromSan(e,t=!1){let n=Ar(e);if(t||(n==="0-0"?n="O-O":n==="0-0-0"&&(n="O-O-O")),n==Tr)return{color:this._turn,from:0,to:0,piece:"k",flags:Ie.NULL_MOVE};let s=Io(n),r=this._moves({legal:!0,piece:s});for(let h=0,m=r.length;h<m;h++)if(n===Ar(this._moveToSan(r[h],r)))return r[h];if(t)return null;let a,o,l,c,u,d=!1;if(o=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),o?(a=o[1],l=o[2],c=o[3],u=o[4],l.length==1&&(d=!0)):(o=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),o&&(a=o[1],l=o[2],c=o[3],u=o[4],l.length==1&&(d=!0))),s=Io(n),r=this._moves({legal:!0,piece:a||s}),!c)return null;for(let h=0,m=r.length;h<m;h++)if(l){if((!a||a.toLowerCase()==r[h].piece)&&Ne[l]==r[h].from&&Ne[c]==r[h].to&&(!u||u.toLowerCase()==r[h].promotion))return r[h];if(d){const _=Ct(r[h].from);if((!a||a.toLowerCase()==r[h].piece)&&Ne[c]==r[h].to&&(l==_[0]||l==_[1])&&(!u||u.toLowerCase()==r[h].promotion))return r[h]}}else if(n===Ar(this._moveToSan(r[h],r)).replace("x",""))return r[h];return null}ascii(){let e=`   +------------------------+
`;for(let t=Ne.a8;t<=Ne.h1;t++){if(ps(t)===0&&(e+=" "+"87654321"[hi(t)]+" |"),this._board[t]){const n=this._board[t].type,r=this._board[t].color===Ut?n.toUpperCase():n.toLowerCase();e+=" "+r+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let n=0;const s=this._turn;for(let r=0,a=t.length;r<a;r++)this._makeMove(t[r]),this._isKingAttacked(s)||(e-1>0?n+=this.perft(e-1):n++),this._undoMove();return n}setTurn(e){return this._turn==e?!1:(this.move("--"),!0)}turn(){return this._turn}board(){const e=[];let t=[];for(let n=Ne.a8;n<=Ne.h1;n++)this._board[n]==null?t.push(null):t.push({square:Ct(n),type:this._board[n].type,color:this._board[n].color}),n+1&136&&(e.push(t),t=[],n+=8);return e}squareColor(e){if(e in Ne){const t=Ne[e];return(hi(t)+ps(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],n=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const s=t.pop();if(!s)break;e?n.push(new Ts(this,s)):n.push(this._moveToSan(s,this._moves())),this._makeMove(s)}return n}_getPositionCount(e){return this._positionCount.get(e)??0}_incPositionCount(){this._positionCount.set(this._hash,(this._positionCount.get(this._hash)??0)+1)}_decPositionCount(e){const t=this._positionCount.get(e)??0;t===1?this._positionCount.delete(e):this._positionCount.set(e,t-1)}_pruneComments(){const e=[],t={},n=s=>{s in this._comments&&(t[s]=this._comments[s])};for(;this._history.length>0;)e.push(this._undoMove());for(n(this.fen());;){const s=e.pop();if(!s)break;this._makeMove(s),n(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){return this.removeComment()}removeComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this.removeComments()}removeComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}setCastlingRights(e,t){for(const s of[bt,Kn])t[s]!==void 0&&(t[s]?this._castling[e]|=As[s]:this._castling[e]&=~As[s]);this._updateCastlingRights();const n=this.getCastlingRights(e);return(t[bt]===void 0||t[bt]===n[bt])&&(t[Kn]===void 0||t[Kn]===n[Kn])}getCastlingRights(e){return{[bt]:(this._castling[e]&As[bt])!==0,[Kn]:(this._castling[e]&As[Kn])!==0}}moveNumber(){return this._moveNumber}}class rh{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playMoveSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(40,e+.18),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.18);const s=this.ctx.sampleRate*.15,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=400;const c=this.ctx.createGain();c.gain.setValueAtTime(.2,e),c.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),o.connect(l),l.connect(c),c.connect(this.ctx.destination),t.start(e),o.start(e),t.stop(e+.18),o.stop(e+.15)}playSpellSelectSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(523.25,e),t.frequency.exponentialRampToValueAtTime(1046.5,e+.2),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.2)}playCaptureSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(30,e+.35),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.35);const s=this.ctx.sampleRate*.3,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let c=0;c<s;c++)a[c]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createGain();l.gain.setValueAtTime(.4,e),l.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.ctx.destination),o.connect(l),l.connect(this.ctx.destination),t.start(e),o.start(e),t.stop(e+.35),o.stop(e+.3)}playCheckSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[440,554.37,659.25].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+s*.05),a.gain.setValueAtTime(.2,e+s*.05),a.gain.exponentialRampToValueAtTime(.001,e+s*.05+.4),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.05),r.stop(e+s*.05+.4)})}playPuzzleSuccessSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.08),a.gain.setValueAtTime(.25,e+s*.08),a.gain.exponentialRampToValueAtTime(.001,e+s*.08+.5),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.08),r.stop(e+s*.08+.5)})}playVictoryFanfare(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.1),a.gain.setValueAtTime(.3,e+s*.1),a.gain.exponentialRampToValueAtTime(.001,e+s*.1+.8),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.1),r.stop(e+s*.1+.8)})}playDefeatSound(){if(this.muted)return;this.init();const e=this.ctx.currentTime;[440,415.3,392,349.23].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(n,e+s*.15),a.gain.setValueAtTime(.25,e+s*.15),a.gain.exponentialRampToValueAtTime(.001,e+s*.15+.6),r.connect(a),a.connect(this.ctx.destination),r.start(e+s*.15),r.stop(e+s*.15+.6)})}speakExplanation(e){if(this.muted||!("speechSynthesis"in window))return;this.stopSpeech();const t=new SpeechSynthesisUtterance(e);t.rate=.95,t.pitch=1;const n=window.speechSynthesis.getVoices(),s=n.find(r=>r.lang.startsWith("en-GB")||r.lang.startsWith("en-US"))||n[0];s&&(t.voice=s),window.speechSynthesis.speak(t)}stopSpeech(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}}const ke=new rh;class ah{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.ambientDust=[],this.animating=!1}init(e="magic-canvas"){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize()),this.initAmbientDust(),this.animating=!0,this.loop())}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}initAmbientDust(){this.ambientDust=[];const e=40;for(let t=0;t<e;t++)this.ambientDust.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*2.5+1,speedX:(Math.random()-.5)*.4,speedY:(Math.random()-.5)*.4-.2,alpha:Math.random()*.6+.2,maxAlpha:Math.random()*.7+.3,pulseSpeed:Math.random()*.02+.005,color:Math.random()>.3?"#d4af37":"#9d50bb"})}createCaptureBurst(e,t){const s=["#ff4b2b","#ff416c","#d4af37","#ffffff","#9d50bb"];for(let r=0;r<45;r++){const a=Math.random()*Math.PI*2,o=Math.random()*8+2;this.particles.push({x:e,y:t,vx:Math.cos(a)*o,vy:Math.sin(a)*o-1,size:Math.random()*5+2,color:s[Math.floor(Math.random()*s.length)],alpha:1,life:1,decay:Math.random()*.03+.015,isStoneFragment:Math.random()>.5,rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.2})}}createConfettiBurst(){const t=["#d4af37","#f3e5ab","#38ef7d","#00d2ff","#9d50bb","#ff4b2b","#ffffff"];for(let n=0;n<120;n++){const s=Math.random()*Math.PI*2,r=Math.random()*12+4;this.particles.push({x:this.canvas?this.canvas.width/2:window.innerWidth/2,y:this.canvas?this.canvas.height/3:window.innerHeight/3,vx:Math.cos(s)*r,vy:Math.sin(s)*r-4,size:Math.random()*8+4,color:t[Math.floor(Math.random()*t.length)],alpha:1,life:1,decay:Math.random()*.015+.005,isStoneFragment:!0,rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.3})}}createLumosBeam(e,t){for(let n=0;n<25;n++)this.particles.push({x:e+(Math.random()-.5)*40,y:t+(Math.random()-.5)*40,vx:(Math.random()-.5)*2,vy:-Math.random()*4-1,size:Math.random()*4+1.5,color:"#38ef7d",alpha:1,life:1,decay:.025,isStoneFragment:!1,rotation:0,vRot:0})}createMoveTrail(e,t,n,s){for(let a=0;a<=15;a++){const o=a/15,l=e+(n-e)*o,c=t+(s-t)*o;this.particles.push({x:l,y:c,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,size:Math.random()*3+1,color:"#00d2ff",alpha:.8,life:1,decay:.03+a*.001,isStoneFragment:!1,rotation:0,vRot:0})}}loop(){if(!(!this.ctx||!this.animating)){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e of this.ambientDust)e.x+=e.speedX,e.y+=e.speedY,e.alpha+=e.pulseSpeed,(e.alpha>e.maxAlpha||e.alpha<.1)&&(e.pulseSpeed=-e.pulseSpeed),e.x<0&&(e.x=this.canvas.width),e.x>this.canvas.width&&(e.x=0),e.y<0&&(e.y=this.canvas.height),e.y>this.canvas.height&&(e.y=this.canvas.height),this.ctx.save(),this.ctx.globalAlpha=e.alpha,this.ctx.fillStyle=e.color,this.ctx.shadowBlur=8,this.ctx.shadowColor=e.color,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fill(),this.ctx.restore();for(let e=this.particles.length-1;e>=0;e--){const t=this.particles[e];if(t.x+=t.vx,t.y+=t.vy,t.vy+=.15,t.alpha-=t.decay,t.rotation+=t.vRot,t.alpha<=0){this.particles.splice(e,1);continue}this.ctx.save(),this.ctx.globalAlpha=Math.max(0,t.alpha),this.ctx.fillStyle=t.color,this.ctx.shadowBlur=10,this.ctx.shadowColor=t.color,t.isStoneFragment?(this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation),this.ctx.fillRect(-t.size/2,-t.size/2,t.size,t.size)):(this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fill()),this.ctx.restore()}requestAnimationFrame(()=>this.loop())}}}const us=new ah,oh={w:{k:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#ffffff"/><path d="M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>',q:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#ffffff"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4M11.5 30c5.5-3 16.5-3 22 0M11.5 33.5c5.5-3 16.5-3 22 0M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>',r:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#ffffff"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z"/><path d="M12 33.5c5.5-3 16.5-3 22 0"/></g></svg>',b:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#ffffff" stroke="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#000"/></g></svg>',n:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#ffffff" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#ffffff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#000"/><path d="M9 39h27" stroke="#000"/></g></svg>',p:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#ffffff"/><path d="M11.5 37c5.5-3 16.5-3 22 0"/></g></svg>'},b:{k:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5M22.5 25s4.5-7.5 3-10.5c-1.5-3-6-3-7.5 0-1.5 3 3 10.5 3 10.5M11.5 37c5.5 3.5 16.5 3.5 22 0v-7s9-4.5 6-10.5c-3-6-9.5-3.5-10.5-1 0 0-2.5-4-6.5-4s-6.5 4-6.5 4c-1-2.5-7.5-5-10.5 1-3 6 6 10.5 6 10.5v7z" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>',q:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM33 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="#1e2235"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z" fill="#1e2235"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1.5 1 3.5 2.5 0 21.5 0 24 0 0-2 0-2 1-3.5 1-2 2.5-2 2.5-4" fill="#1e2235"/><path d="M11.5 30c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>',r:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14h23l-2 6H13l-2-6zM14 20v12h17V20H14z" fill="#1e2235"/><path d="M9 14l3-6h5v3h3V8h5v3h3V8h5l3 6H9z" fill="#1e2235"/><path d="M12 33.5c5.5-3 16.5-3 22 0" stroke="#d4af37"/><path d="M14 28.5c5.5-3 11 0 17 0" stroke="#d4af37"/></g></svg>',b:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.46 13.5-2 3.39 2.46 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2-4-2.5-11-2.5-15 0 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M17.5 26c-2.5-11 4-16 5-16s7.5 5 5 16c1.5 2 2 3 1 4-1.5 1-10.5 1-12 0-1-1-.5-2 1-4z"/></g><path d="M20 10c2.5 0 2.5 2.5 2.5 2.5s0-2.5 2.5-2.5M17.5 26h10M22.5 15v7.5M18.75 18.75h7.5" stroke="#d4af37"/></g></svg>',n:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#1e2235" stroke="#d4af37" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2s-4.003 1-4-4c0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-2 1 1.25.5 2 2 1.5s4.32-.5 5.5 1c0 0-.08-.67 1-1z" fill="#1e2235" stroke="#d4af37"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#d4af37" stroke="#d4af37"/><path d="M9 39h27" stroke="#d4af37"/></g></svg>',p:'<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 9a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM22.5 17c-2.76 0-5 2.24-5 5 0 .58.1 1.14.28 1.66-2.07.96-3.28 2.87-3.28 5.09 0 2.22 1.21 4.13 3.28 5.09A5.02 5.02 0 0 0 17.5 35h10c0-.41-.05-.8-.14-1.16 2.07-.96 3.28-2.87 3.28-5.09 0-2.22-1.21-4.13-3.28-5.09A5.02 5.02 0 0 0 27.5 22c0-2.76-2.24-5-5-5z" fill="#1e2235"/><path d="M11.5 37c5.5-3 16.5-3 22 0" stroke="#d4af37"/></g></svg>'}};class lh{constructor(e,t){this.container=document.getElementById(e),this.onMoveCallback=t,this.selectedSquare=null,this.legalMoves=[],this.isFlipped=!1,this.game=null,this.lumosSquare=null}attachGame(e){this.game=e,this.render()}flip(){this.isFlipped=!this.isFlipped,this.render()}setLumosHint(e){if(this.lumosSquare=e,e){const t=this.container.querySelector(`[data-square="${e}"]`);if(t){const n=t.getBoundingClientRect();us.createLumosBeam(n.left+n.width/2,n.top+n.height/2)}}this.render()}clearSelection(){this.selectedSquare=null,this.legalMoves=[],this.render()}render(){if(!this.container||!this.game)return;this.container.innerHTML="";const e=this.game.board(),t=this.game.history({verbose:!0}),n=t.length>0?t[t.length-1]:null,s=this.isFlipped?[0,1,2,3,4,5,6,7]:[7,6,5,4,3,2,1,0],r=this.isFlipped?[7,6,5,4,3,2,1,0]:[0,1,2,3,4,5,6,7];for(const a of s)for(const o of r){const l=String.fromCharCode(97+o)+(a+1),c=(a+o)%2!==0,u=document.createElement("div");u.className=`square ${c?"light":"dark"}`,u.dataset.square=l,n&&(n.from===l||n.to===l)&&u.classList.add("last-move"),this.selectedSquare===l&&u.classList.add("selected"),this.lumosSquare===l&&u.classList.add("highlight");const d=this.legalMoves.find(m=>m.to===l);if(d&&(d.captured?u.classList.add("capture-highlight"):u.classList.add("highlight")),!this.isFlipped&&o===0||this.isFlipped&&o===7){const m=document.createElement("span");m.className="square-coord rank",m.textContent=a+1,u.appendChild(m)}if(!this.isFlipped&&a===0||this.isFlipped&&a===7){const m=document.createElement("span");m.className="square-coord file",m.textContent=String.fromCharCode(97+o),u.appendChild(m)}const h=e[7-a][o];if(h){const m=document.createElement("div");m.className=`piece ${h.color==="w"?"white-piece":"black-piece"}`,m.innerHTML=oh[h.color][h.type],this.selectedSquare===l&&m.classList.add("levitating"),u.appendChild(m)}u.addEventListener("click",()=>this.handleSquareClick(l)),this.container.appendChild(u)}}handleSquareClick(e){if(!this.game)return;if(ke.init(),this.selectedSquare===e){this.clearSelection();return}const t=this.legalMoves.filter(s=>s.to===e);if(t.length>0){const s=t.find(r=>r.promotion);s&&this.onPromotionRequired?this.onPromotionRequired(s,r=>{const a=t.find(o=>o.promotion===r)||s;this.executeWizardMove(a)}):this.executeWizardMove(t[0]);return}const n=this.game.get(e);n&&n.color===this.game.turn()?(ke.playSpellSelectSound(),this.selectedSquare=e,this.legalMoves=this.game.moves({square:e,verbose:!0}),this.lumosSquare=null,this.render()):this.clearSelection()}executeWizardMove(e){const t=this.container.querySelector(`[data-square="${e.from}"]`),n=this.container.querySelector(`[data-square="${e.to}"]`);if(t&&n){const r=t.getBoundingClientRect(),a=n.getBoundingClientRect();us.createMoveTrail(r.left+r.width/2,r.top+r.height/2,a.left+a.width/2,a.top+a.height/2),e.captured?(ke.playCaptureSound(),us.createCaptureBurst(a.left+a.width/2,a.top+a.height/2)):ke.playMoveSound()}const s=this.game.move(e);this.game.inCheck()&&ke.playCheckSound(),this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.render(),this.onMoveCallback&&this.onMoveCallback(s)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="185",ch=0,Uo=1,hh=2,js=1,Xl=2,ls=3,Zn=0,qt=1,Rn=2,Ln=0,Ui=1,Fo=2,Bo=3,Oo=4,uh=5,ai=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,fa=204,pa=205,Mh=206,Sh=207,yh=208,Eh=209,bh=210,Th=211,Ah=212,wh=213,Ch=214,ma=0,ga=1,_a=2,zi=3,va=4,xa=5,Ma=6,Sa=7,Kl=0,Rh=1,Ph=2,xn=0,$l=1,Yl=2,Zl=3,Ql=4,Jl=5,jl=6,ec=7,tc=300,ui=301,Gi=302,wr=303,Cr=304,fr=306,ya=1e3,Pn=1001,Ea=1002,Pt=1003,Lh=1004,ws=1005,Ft=1006,Rr=1007,li=1008,Jt=1009,nc=1010,ic=1011,ms=1012,co=1013,yn=1014,_n=1015,Dn=1016,ho=1017,uo=1018,gs=1020,sc=35902,rc=35899,ac=1021,oc=1022,ln=1023,In=1026,ci=1027,lc=1028,fo=1029,di=1030,po=1031,mo=1033,er=33776,tr=33777,nr=33778,ir=33779,ba=35840,Ta=35841,Aa=35842,wa=35843,Ca=36196,Ra=37492,Pa=37496,La=37488,Na=37489,ar=37490,Da=37491,Ia=37808,Ua=37809,Fa=37810,Ba=37811,Oa=37812,ka=37813,za=37814,Ga=37815,Va=37816,Ha=37817,Wa=37818,qa=37819,Xa=37820,Ka=37821,$a=36492,Ya=36494,Za=36495,Qa=36283,Ja=36284,or=36285,ja=36286,Nh=3200,eo=0,Dh=1,$n="",tn="srgb",lr="srgb-linear",cr="linear",nt="srgb",_i=7680,ko=519,Ih=512,Uh=513,Fh=514,go=515,Bh=516,Oh=517,_o=518,kh=519,zo=35044,Go="300 es",vn=2e3,_s=2001;function zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gh(){const i=hr("canvas");return i.style.display="block",i}const Vo={};function Ho(...i){const e="THREE."+i.shift();console.log(e,...i)}function cc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fi(...i){const e=i.join(" ");e in Vo||(Vo[e]=!0,De(...i))}function Vh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Hh={[ma]:ga,[_a]:Ma,[va]:Sa,[zi]:xa,[ga]:ma,[Ma]:_a,[Sa]:va,[xa]:zi};class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,to=180/Math.PI;function vs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Wh(i,e){return(i%e+e)%e}function Lr(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const To=class To{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};To.prototype.isVector2=!0;let He=To;class Wi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==m||u!==_){let p=l*h+c*m+u*_+d*M;p<0&&(h=-h,m=-m,_=-_,M=-M,p=-p);let f=1-o;if(p<.9995){const T=Math.acos(p),C=Math.sin(T);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C,l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+M*o;const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*m-c*h,e[t+1]=l*_+u*h+c*d-o*m,e[t+2]=c*_+u*m+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ao=class Ao{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ao.prototype.isVector3=!0;let H=Ao;const Nr=new H,Wo=new Wi,wo=class wo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],M=s[0],p=s[3],f=s[6],T=s[1],C=s[4],S=s[7],w=s[2],b=s[5],R=s[8];return r[0]=a*M+o*T+l*w,r[3]=a*p+o*C+l*b,r[6]=a*f+o*S+l*R,r[1]=c*M+u*T+d*w,r[4]=c*p+u*C+d*b,r[7]=c*f+u*S+d*R,r[2]=h*M+m*T+_*w,r[5]=h*p+m*C+_*b,r[8]=h*f+m*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,_=t*d+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wo.prototype.isMatrix3=!0;let Be=wo;const Dr=new Be,qo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:qo,fromXYZ:Xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:qo,fromXYZ:Xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const Xe=qh();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Xh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=hr("canvas")),vi.width=e.width,vi.height=e.height;const s=vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kh=0;class vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let $h=0;const Ur=new H;class Gt extends fi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ft,a=li,o=ln,l=Jt,c=Gt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=vs(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ur).x}get height(){return this.source.getSize(Ur).y}get depth(){return this.source.getSize(Ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=tc;Gt.DEFAULT_ANISOTROPY=1;const Co=class Co{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,S=(m+1)/2,w=(f+1)/2,b=(u+h)/4,R=(d+M)/4,v=(_+p)/4;return C>S&&C>w?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-M)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Co.prototype.isVector4=!0;let dt=Co;class Yh extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Gt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hc extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ur=class ur{constructor(e,t,n,s,r,a,o,l,c,u,d,h,m,_,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,m,_,M,p)}set(e,t,n,s,r,a,o,l,c,u,d,h,m,_,M,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ur().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,M=c*d;t[0]=h+M*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+_,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,Jh)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),zn.crossVectors(n,$t),zn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),zn.crossVectors(n,$t)),zn.normalize(),Cs.crossVectors($t,zn),s[0]=zn.x,s[4]=Cs.x,s[8]=$t.x,s[1]=zn.y,s[5]=Cs.y,s[9]=$t.y,s[2]=zn.z,s[6]=Cs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],M=n[6],p=n[10],f=n[14],T=n[3],C=n[7],S=n[11],w=n[15],b=s[0],R=s[4],v=s[8],E=s[12],U=s[1],P=s[5],O=s[9],Y=s[13],J=s[2],z=s[6],Z=s[10],q=s[14],te=s[3],se=s[7],ve=s[11],ye=s[15];return r[0]=a*b+o*U+l*J+c*te,r[4]=a*R+o*P+l*z+c*se,r[8]=a*v+o*O+l*Z+c*ve,r[12]=a*E+o*Y+l*q+c*ye,r[1]=u*b+d*U+h*J+m*te,r[5]=u*R+d*P+h*z+m*se,r[9]=u*v+d*O+h*Z+m*ve,r[13]=u*E+d*Y+h*q+m*ye,r[2]=_*b+M*U+p*J+f*te,r[6]=_*R+M*P+p*z+f*se,r[10]=_*v+M*O+p*Z+f*ve,r[14]=_*E+M*Y+p*q+f*ye,r[3]=T*b+C*U+S*J+w*te,r[7]=T*R+C*P+S*z+w*se,r[11]=T*v+C*O+S*Z+w*ve,r[15]=T*E+C*Y+S*q+w*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],M=e[7],p=e[11],f=e[15],T=l*m-c*h,C=o*m-c*d,S=o*h-l*d,w=a*m-c*u,b=a*h-l*u,R=a*d-o*u;return t*(M*T-p*C+f*S)-n*(_*T-p*w+f*b)+s*(_*C-M*w+f*R)-r*(_*S-M*b+p*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],M=e[13],p=e[14],f=e[15],T=t*o-n*a,C=t*l-s*a,S=t*c-r*a,w=n*l-s*o,b=n*c-r*o,R=s*c-r*l,v=u*M-d*_,E=u*p-h*_,U=u*f-m*_,P=d*p-h*M,O=d*f-m*M,Y=h*f-m*p,J=T*Y-C*O+S*P+w*U-b*E+R*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/J;return e[0]=(o*Y-l*O+c*P)*z,e[1]=(s*O-n*Y-r*P)*z,e[2]=(M*R-p*b+f*w)*z,e[3]=(h*b-d*R-m*w)*z,e[4]=(l*U-a*Y-c*E)*z,e[5]=(t*Y-s*U+r*E)*z,e[6]=(p*S-_*R-f*C)*z,e[7]=(u*R-h*S+m*C)*z,e[8]=(a*O-o*U+c*v)*z,e[9]=(n*U-t*O-r*v)*z,e[10]=(_*b-M*S+f*T)*z,e[11]=(d*S-u*b-m*T)*z,e[12]=(o*E-a*P-l*v)*z,e[13]=(t*P-n*E+s*v)*z,e[14]=(M*C-_*w-p*T)*z,e[15]=(u*w-d*C+h*T)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,_=r*d,M=a*u,p=a*d,f=o*d,T=l*c,C=l*u,S=l*d,w=n.x,b=n.y,R=n.z;return s[0]=(1-(M+f))*w,s[1]=(m+S)*w,s[2]=(_-C)*w,s[3]=0,s[4]=(m-S)*b,s[5]=(1-(h+f))*b,s[6]=(p+T)*b,s[7]=0,s[8]=(_+C)*R,s[9]=(p-T)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),l=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);const c=1/a,u=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=vn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===_s)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===vn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===_s)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ur.prototype.isMatrix4=!0;let ft=ur;const xi=new H,nn=new ft,Qh=new H(0,0,0),Jh=new H(1,1,1),zn=new H,Cs=new H,$t=new H,Ko=new ft,$o=new Wi;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $o.setFromEuler(this),this.setFromQuaternion($o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const Yo=new H,Mi=new Wi,bn=new ft,Rs=new H,es=new H,eu=new H,tu=new Wi,Zo=new H(1,0,0),Qo=new H(0,1,0),Jo=new H(0,0,1),jo={type:"added"},nu={type:"removed"},Si={type:"childadded",child:null},Fr={type:"childremoved",child:null};class Bt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Qn,n=new Wi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Zo,e)}rotateY(e){return this.rotateOnAxis(Qo,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zo,e)}translateY(e){return this.translateOnAxis(Qo,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(es,Rs,this.up):bn.lookAt(Rs,es,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(bn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jo),Si.child=e,this.dispatchEvent(Si),Si.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jo),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,tu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iu={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Wh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Or(a,r,e+1/3),this.g=Or(a,r,e),this.b=Or(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Xe.workingToColorSpace(It.copy(this),e),Math.round(Ke(It.r*255,0,255))*65536+Math.round(Ke(It.g*255,0,255))*256+Math.round(Ke(It.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=tn){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Ps);const n=Lr(Gn.h,Ps.h,t),s=Lr(Gn.s,Ps.s,t),r=Lr(Gn.l,Ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Je;Je.NAMES=uc;class su extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new H,Tn=new H,kr=new H,An=new H,yi=new H,Ei=new H,el=new H,zr=new H,Gr=new H,Vr=new H,Hr=new dt,Wr=new dt,qr=new dt;class on{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),Tn.subVectors(n,t),kr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Tn),l=sn.dot(kr),c=Tn.dot(Tn),u=Tn.dot(kr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hr.setScalar(0),Wr.setScalar(0),qr.setScalar(0),Hr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),qr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(qr,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),Tn.subVectors(e,t),sn.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Ei.subVectors(r,n),zr.subVectors(e,n);const l=yi.dot(zr),c=Ei.dot(zr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,s);const u=yi.dot(Gr),d=Ei.dot(Gr);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(yi,a);Vr.subVectors(e,r);const m=yi.dot(Vr),_=Ei.dot(Vr);if(_>=0&&m<=_)return t.copy(r);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ei,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return el.subVectors(r,s),o=(d-u)/(d-u+(m-_)),t.copy(s).addScaledVector(el,o);const f=1/(p+M+h);return a=M*f,o=h*f,t.copy(n).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Ns.subVectors(this.max,ts),bi.subVectors(e.a,ts),Ti.subVectors(e.b,ts),Ai.subVectors(e.c,ts),Vn.subVectors(Ti,bi),Hn.subVectors(Ai,Ti),ti.subVectors(bi,Ai);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ti.z,ti.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ti.z,0,-ti.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ti.y,ti.x,0];return!Xr(t,bi,Ti,Ai,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,bi,Ti,Ai,Ns))?!1:(Ds.crossVectors(Vn,Hn),t=[Ds.x,Ds.y,Ds.z],Xr(t,bi,Ti,Ai,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,Ls=new xs,bi=new H,Ti=new H,Ai=new H,Vn=new H,Hn=new H,ti=new H,ts=new H,Ns=new H,Ds=new H,ni=new H;function Xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const St=new H,Is=new He;let ru=0;class Sn extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dc extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fc extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const au=new xs,ns=new H,Kr=new H;class Mo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):au.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Kr)),this.expandByPoint(ns.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ou=0;const en=new ft,$r=new Bt,wi=new H,Yt=new xs,is=new xs,wt=new H;class cn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?fc:dc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,is.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,is.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(is.min),Yt.expandByPoint(is.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),wt.add(wi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new H,l[v]=new H;const c=new H,u=new H,d=new H,h=new He,m=new He,_=new He,M=new H,p=new H;function f(v,E,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,U),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[v].add(M),o[E].add(M),o[U].add(M),l[v].add(p),l[E].add(p),l[U].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,E=T.length;v<E;++v){const U=T[v],P=U.start,O=U.count;for(let Y=P,J=P+O;Y<J;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new H,S=new H,w=new H,b=new H;function R(v){w.fromBufferAttribute(s,v),b.copy(w);const E=o[v];C.copy(E),C.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(b,E);const P=S.dot(l[v])<0?-1:1;a.setXYZW(v,C.x,C.y,C.z,P)}for(let v=0,E=T.length;v<E;++v){const U=T[v],P=U.start,O=U.count;for(let Y=P,J=P+O;Y<J;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new Sn(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let lu=0;class Ms extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Ui,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cn=new H,Yr=new H,Us=new H,Wn=new H,Zr=new H,Fs=new H,Qr=new H;class pc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yr.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=Wn.dot(this.direction),l=-Wn.dot(Us),c=Wn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const M=1/u;d*=M,h*=M,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yr).addScaledVector(Us,h),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){Zr.subVectors(t,e),Fs.subVectors(n,e),Qr.crossVectors(Zr,Fs);let a=this.direction.dot(Qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(Fs.crossVectors(Wn,Fs));if(l<0)return null;const c=o*this.direction.dot(Zr.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(Qr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mc extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tl=new ft,ii=new pc,Bs=new Mo,nl=new H,Os=new H,ks=new H,zs=new H,Jr=new H,Gs=new H,il=new H,Vs=new H;class lt extends Bt{constructor(e=new cn,t=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Jr.fromBufferAttribute(d,e),a?Gs.addScaledVector(Jr,u):Gs.addScaledVector(Jr.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(Bs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Bs,nl)===null||ii.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(r).invert(),ii.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const p=h[_],f=a[p.materialIndex],T=Math.max(p.start,m.start),C=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,w=C;S<w;S+=3){const b=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);s=Hs(this,f,e,n,c,u,d,b,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,f=M;p<f;p+=3){const T=o.getX(p),C=o.getX(p+1),S=o.getX(p+2);s=Hs(this,a,e,n,c,u,d,T,C,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const p=h[_],f=a[p.materialIndex],T=Math.max(p.start,m.start),C=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,w=C;S<w;S+=3){const b=S,R=S+1,v=S+2;s=Hs(this,f,e,n,c,u,d,b,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,f=M;p<f;p+=3){const T=p,C=p+1,S=p+2;s=Hs(this,a,e,n,c,u,d,T,C,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function cu(i,e,t,n,s,r,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:i}}function Hs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,ks),i.getVertexPosition(c,zs);const u=cu(i,e,t,n,Os,ks,zs,il);if(u){const d=new H;on.getBarycoord(il,Os,ks,zs,d),s&&(u.uv=on.getInterpolatedAttribute(s,o,l,c,d,new He)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,l,c,d,new He)),a&&(u.normal=on.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};on.getNormal(Os,ks,zs,h.normal),u.face=h,u.barycoord=d}return u}class hu extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Pt,u=Pt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jr=new H,uu=new H,du=new Be;class ri{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=jr.subVectors(n,t).cross(uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(jr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||du.getNormalMatrix(e),s=this.coplanarPoint(jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Mo,fu=new He(.5,.5),Ws=new H;class So{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],_=r[8],M=r[9],p=r[10],f=r[11],T=r[12],C=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,m-u,f-_,w-T).normalize(),s[1].setComponents(c+a,m+u,f+_,w+T).normalize(),s[2].setComponents(c+o,m+d,f+M,w+C).normalize(),s[3].setComponents(c-o,m-d,f-M,w-C).normalize(),n)s[4].setComponents(l,h,p,S).normalize(),s[5].setComponents(c-l,m-h,f-p,w-S).normalize();else if(s[4].setComponents(c-l,m-h,f-p,w-S).normalize(),t===vn)s[5].setComponents(c+l,m+h,f+p,w+S).normalize();else if(t===_s)s[5].setComponents(l,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=fu.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ws.x=s.normal.x>0?e.max.x:e.min.x,Ws.y=s.normal.y>0?e.max.y:e.min.y,Ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gc extends Gt{constructor(e=[],t=ui,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vi extends Gt{constructor(e,t,n=yn,s,r,a,o=Pt,l=Pt,c,u=In,d=1){if(u!==In&&u!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pu extends Vi{constructor(e,t=yn,n=ui,s,r,a=Pt,o=Pt,l,c=In){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _c extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gn extends cn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function _(M,p,f,T,C,S,w,b,R,v,E){const U=S/R,P=w/v,O=S/2,Y=w/2,J=b/2,z=R+1,Z=v+1;let q=0,te=0;const se=new H;for(let ve=0;ve<Z;ve++){const ye=ve*P-Y;for(let be=0;be<z;be++){const We=be*U-O;se[M]=We*T,se[p]=ye*C,se[f]=J,c.push(se.x,se.y,se.z),se[M]=0,se[p]=0,se[f]=b>0?1:-1,u.push(se.x,se.y,se.z),d.push(be/R),d.push(1-ve/v),q+=1}}for(let ve=0;ve<v;ve++)for(let ye=0;ye<R;ye++){const be=h+ye+z*ve,We=h+ye+z*(ve+1),ct=h+(ye+1)+z*(ve+1),$e=h+(ye+1)+z*ve;l.push(be,We,$e),l.push(We,ct,$e),te+=6}o.addGroup(m,te,E),m+=te,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pn extends cn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],m=[];let _=0;const M=[],p=n/2;let f=0;T(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(m,2));function T(){const S=new H,w=new H;let b=0;const R=(t-e)/n;for(let v=0;v<=r;v++){const E=[],U=v/r,P=U*(t-e)+e;for(let O=0;O<=s;O++){const Y=O/s,J=Y*l+o,z=Math.sin(J),Z=Math.cos(J);w.x=P*z,w.y=-U*n+p,w.z=P*Z,d.push(w.x,w.y,w.z),S.set(z,R,Z).normalize(),h.push(S.x,S.y,S.z),m.push(Y,1-U),E.push(_++)}M.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const U=M[E][v],P=M[E+1][v],O=M[E+1][v+1],Y=M[E][v+1];(e>0||E!==0)&&(u.push(U,P,Y),b+=3),(t>0||E!==r-1)&&(u.push(P,O,Y),b+=3)}c.addGroup(f,b,0),f+=b}function C(S){const w=_,b=new He,R=new H;let v=0;const E=S===!0?e:t,U=S===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*U,0),h.push(0,U,0),m.push(.5,.5),_++;const P=_;for(let O=0;O<=s;O++){const J=O/s*l+o,z=Math.cos(J),Z=Math.sin(J);R.x=E*Z,R.y=p*U,R.z=E*z,d.push(R.x,R.y,R.z),h.push(0,U,0),b.x=z*.5+.5,b.y=Z*.5*U+.5,m.push(b.x,b.y),_++}for(let O=0;O<s;O++){const Y=w+O,J=P+O;S===!0?u.push(J,J+1,Y):u.push(J+1,J,Y),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends pn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,m=[],_=[],M=[],p=[];for(let f=0;f<u;f++){const T=f*h-a;for(let C=0;C<c;C++){const S=C*d-r;_.push(S,-T,0),M.push(0,0,1),p.push(C/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const C=T+c*f,S=T+c*(f+1),w=T+1+c*(f+1),b=T+1+c*f;m.push(C,S,b),m.push(S,w,b)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ds extends cn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new H,h=new H,m=[],_=[],M=[],p=[];for(let f=0;f<=n;f++){const T=[],C=f/n,S=a+C*o,w=e*Math.cos(S),b=Math.sqrt(e*e-w*w);let R=0;f===0&&a===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const E=v/t,U=s+E*r;d.x=-b*Math.cos(U),d.y=w,d.z=b*Math.sin(U),_.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),p.push(E+R,1-C),T.push(c++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const C=u[f][T+1],S=u[f][T],w=u[f+1][T],b=u[f+1][T+1];(f!==0||a>0)&&m.push(C,S,b),(f!==n-1||l<Math.PI)&&m.push(S,w,b)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(M,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(sl(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function sl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const gu={clone:Hi,merge:zt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xu extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qn extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Su extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Eo extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ea=new ft,rl=new H,al=new H;class xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(rl),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===_s||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qs=new H,Xs=new Wi,un=new H;class Mc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Xs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Xs,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Xs,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Xs,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new H,ol=new He,ll=new He;class Qt extends Mc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,ol,ll),t.subVectors(ll,ol)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yu extends xc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Eu extends Eo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class bo extends Mc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bu extends xc{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tu extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Au extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ci=-90,Ri=1;class wu extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Ci,Ri,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Ci,Ri,e,t);r.layers=this.layers,this.add(r);const a=new Qt(Ci,Ri,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Ci,Ri,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Ci,Ri,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Ci,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cu extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cl=new ft;class Ru{constructor(e,t,n=0,s=1/0){this.ray=new pc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cl),this}intersectObject(e,t=!0,n=[]){return no(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)no(e[s],this,n,t);return n.sort(hl),n}}function hl(i,e){return i.distance-e.distance}function no(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)no(r[a],e,t,!0)}}const Ro=class Ro{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ro.prototype.isMatrix2=!0;let ul=Ro;function dl(i,e,t,n){const s=Pu(n);switch(t){case ac:return i*e;case lc:return i*e/s.components*s.byteLength;case fo:return i*e/s.components*s.byteLength;case di:return i*e*2/s.components*s.byteLength;case po:return i*e*2/s.components*s.byteLength;case oc:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case mo:return i*e*4/s.components*s.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case wa:return Math.max(i,16)*Math.max(e,8)/4;case ba:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ca:case Ra:case La:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case ar:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case or:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pu(i){switch(i){case Jt:case nc:return{byteLength:1,components:1};case ms:case ic:case Dn:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case yn:case co:case _n:return{byteLength:4,components:1};case sc:case rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],M=d[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,d[h]=M)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const M=d[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
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
#endif`,Pd=`uniform sampler2D dfgLUT;
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
}`,Ld=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vf=`float getShadowMask() {
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
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,zf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,ep=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,sp=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,ap=`#define TOON
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
}`,op=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Nu,alphahash_pars_fragment:Du,alphamap_fragment:Iu,alphamap_pars_fragment:Uu,alphatest_fragment:Fu,alphatest_pars_fragment:Bu,aomap_fragment:Ou,aomap_pars_fragment:ku,batching_pars_vertex:zu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Hu,bsdfs:Wu,iridescence_fragment:qu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:Qu,color_pars_fragment:Ju,color_pars_vertex:ju,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:bd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:yd,lights_pars_begin:Ed,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:wd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Rd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Nd,lights_fragment_end:Dd,lightprobes_pars_fragment:Id,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:Od,map_fragment:kd,map_pars_fragment:zd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:qd,morphcolor_vertex:Xd,morphnormal_vertex:Kd,morphtarget_pars_vertex:$d,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:Qd,normal_pars_fragment:Jd,normal_pars_vertex:jd,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:xf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:yf,specularmap_fragment:Ef,specularmap_pars_fragment:bf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Af,transmission_fragment:wf,transmission_pars_fragment:Cf,uv_pars_fragment:Rf,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:Nf,background_vert:Df,background_frag:If,backgroundCube_vert:Uf,backgroundCube_frag:Ff,cube_vert:Bf,cube_frag:Of,depth_vert:kf,depth_frag:zf,distance_vert:Gf,distance_frag:Vf,equirect_vert:Hf,equirect_frag:Wf,linedashed_vert:qf,linedashed_frag:Xf,meshbasic_vert:Kf,meshbasic_frag:$f,meshlambert_vert:Yf,meshlambert_frag:Zf,meshmatcap_vert:Qf,meshmatcap_frag:Jf,meshnormal_vert:jf,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},mn={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:zt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ks={r:0,b:0,g:0},fp=new ft,yc=new Be;yc.set(-1,0,0,0,1,0,0,0,1);function pp(i,e,t,n,s,r){const a=new Je(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const S=T.backgroundBlurriness>0;C=e.get(C,S)}return C}function _(T){let C=!1;const S=m(T);S===null?p(a,o):S&&S.isColor&&(p(S,1),C=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,C){const S=m(C);S&&(S.isCubeTexture||S.mapping===fr)?(c===void 0&&(c=new lt(new gn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Hi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yc),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new lt(new pr(2,2),new En({name:"BackgroundMaterial",uniforms:Hi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,C){T.getRGB(Ks,vc(i)),t.buffers.color.setClear(Ks.r,Ks.g,Ks.b,C,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:_,addToRenderList:M,dispose:f}}function mp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(P,O,Y,J,z){let Z=!1;const q=d(P,J,Y,O);r!==q&&(r=q,c(r.object)),Z=m(P,J,Y,z),Z&&_(P,J,Y,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(P,O,Y,J),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,O,Y,J){const z=J.wireframe===!0;let Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);const q=P.isInstancedMesh===!0?P.id:0;let te=Z[q];te===void 0&&(te={},Z[q]=te);let se=te[Y.id];se===void 0&&(se={},te[Y.id]=se);let ve=se[z];return ve===void 0&&(ve=h(l()),se[z]=ve),ve}function h(P){const O=[],Y=[],J=[];for(let z=0;z<t;z++)O[z]=0,Y[z]=0,J[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:J,object:P,attributes:{},index:null}}function m(P,O,Y,J){const z=r.attributes,Z=O.attributes;let q=0;const te=Y.getAttributes();for(const se in te)if(te[se].location>=0){const ye=z[se];let be=Z[se];if(be===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==J}function _(P,O,Y,J){const z={},Z=O.attributes;let q=0;const te=Y.getAttributes();for(const se in te)if(te[se].location>=0){let ye=Z[se];ye===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),z[se]=be,q++}r.attributes=z,r.attributesNum=q,r.index=J}function M(){const P=r.newAttributes;for(let O=0,Y=P.length;O<Y;O++)P[O]=0}function p(P){f(P,0)}function f(P,O){const Y=r.newAttributes,J=r.enabledAttributes,z=r.attributeDivisors;Y[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),z[P]!==O&&(i.vertexAttribDivisor(P,O),z[P]=O)}function T(){const P=r.newAttributes,O=r.enabledAttributes;for(let Y=0,J=O.length;Y<J;Y++)O[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function C(P,O,Y,J,z,Z,q){q===!0?i.vertexAttribIPointer(P,O,Y,z,Z):i.vertexAttribPointer(P,O,Y,J,z,Z)}function S(P,O,Y,J){M();const z=J.attributes,Z=Y.getAttributes(),q=O.defaultAttributeValues;for(const te in Z){const se=Z[te];if(se.location>=0){let ve=z[te];if(ve===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),ve!==void 0){const ye=ve.normalized,be=ve.itemSize,We=e.get(ve);if(We===void 0)continue;const ct=We.buffer,$e=We.type,ee=We.bytesPerElement,he=$e===i.INT||$e===i.UNSIGNED_INT||ve.gpuType===co;if(ve.isInterleavedBufferAttribute){const re=ve.data,Le=re.stride,Ue=ve.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<se.locationSize;Re++)f(se.location+Re,re.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<se.locationSize;Re++)p(se.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Re=0;Re<se.locationSize;Re++)C(se.location+Re,be/se.locationSize,$e,ye,Le*ee,(Ue+be/se.locationSize*Re)*ee,he)}else{if(ve.isInstancedBufferAttribute){for(let re=0;re<se.locationSize;re++)f(se.location+re,ve.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let re=0;re<se.locationSize;re++)p(se.location+re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let re=0;re<se.locationSize;re++)C(se.location+re,be/se.locationSize,$e,ye,be*ee,be/se.locationSize*re*ee,he)}}else if(q!==void 0){const ye=q[te];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(se.location,ye);break;case 3:i.vertexAttrib3fv(se.location,ye);break;case 4:i.vertexAttrib4fv(se.location,ye);break;default:i.vertexAttrib1fv(se.location,ye)}}}}T()}function w(){E();for(const P in n){const O=n[P];for(const Y in O){const J=O[Y];for(const z in J){const Z=J[z];for(const q in Z)u(Z[q].object),delete Z[q];delete J[z]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const Y in O){const J=O[Y];for(const z in J){const Z=J[z];for(const q in Z)u(Z[q].object),delete Z[q];delete J[z]}}delete n[P.id]}function R(P){for(const O in n){const Y=n[O];for(const J in Y){const z=Y[J];if(z[P.id]===void 0)continue;const Z=z[P.id];for(const q in Z)u(Z[q].object),delete Z[q];delete z[P.id]}}}function v(P){for(const O in n){const Y=n[O],J=P.isInstancedMesh===!0?P.id:0,z=Y[J];if(z!==void 0){for(const Z in z){const q=z[Z];for(const te in q)u(q[te].object),delete q[te];delete z[Z]}delete Y[J],Object.keys(Y).length===0&&delete n[O]}}}function E(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function gp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _p(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!v)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:S,maxSamples:w,samples:b}}function vp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ri,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const T=r?0:n,C=T*4;let S=f.clippingState||null;l.value=S,S=u(_,h,C,m);for(let w=0;w!==C;++w)S[w]=t[w];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,_){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const f=m+M*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let C=0,S=m;C!==M;++C,S+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const Yn=4,fl=[.125,.215,.35,.446,.526,.582],oi=20,xp=256,ss=new bo,pl=new Je;let ta=null,na=0,ia=0,sa=!1;const Mp=new H;class ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Mp}=r;ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Dn,format:ln,colorSpace:lr,depthBuffer:!1},s=gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sp(r)),this._blurMaterial=Ep(r,e,t),this._ggxMaterial=yp(r,e,t)}return s}_compileMaterial(e){const t=new lt(new cn,e);this._renderer.compile(t,ss)}_sceneToCubeUV(e,t,n,s,r){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(pl),d.toneMapping=xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new gn,new mc({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,f=!0):(p.color.copy(pl),f=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):S===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));const w=this._cubeSize;Pi(s,S*w,C>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(M,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ui||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,m=d*h,{_lodMax:_}=this,M=this._sizeLods[n],p=3*M*(n>_-Yn?n-_+Yn:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Pi(r,p,f,3*M,2*M),s.setRenderTarget(r),s.render(o,ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Pi(e,p,f,3*M,2*M),s.setRenderTarget(e),s.render(o,ss)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),M=r/_,p=isFinite(r)?1+Math.floor(u*M):oi;p>oi&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const f=[];let T=0;for(let R=0;R<oi;++R){const v=R/M,E=Math.exp(-v*v/2);f.push(E),R===0?T+=E:R<p&&(T+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:C}=this;h.dTheta.value=_,h.mipInt.value=C-n;const S=this._sizeLods[s],w=3*S*(s>C-Yn?s-C+Yn:0),b=4*(this._cubeSize-S);Pi(t,w,b,3*S,2*S),l.setRenderTarget(t),l.render(d,ss)}}function Sp(i){const e=[],t=[],n=[];let s=i;const r=i-Yn+1+fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yn?l=fl[a-i+Yn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,M=3,p=2,f=1,T=new Float32Array(M*_*m),C=new Float32Array(p*_*m),S=new Float32Array(f*_*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,v=b>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];T.set(E,M*_*b),C.set(h,p*_*b);const U=[b,b,b,b,b,b];S.set(U,f*_*b)}const w=new cn;w.setAttribute("position",new Sn(T,M)),w.setAttribute("uv",new Sn(C,p)),w.setAttribute("faceIndex",new Sn(S,f)),n.push(new lt(w,null)),s>Yn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gl(i,e,t){const n=new Mn(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yp(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mr(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ep(i,e,t){const n=new Float32Array(oi),s=new H(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mr(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _l(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function vl(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function mr(){return`

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
	`}class Ec extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Ln});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=Ft),new wu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function bp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===wr||m===Cr)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new Ec(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===wr||m===Cr,M=m===ui||m===Gi;if(_||M){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ml(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const T=h.image;return _&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new ml(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===wr?h.mapping=ui:m===Cr&&(h.mapping=Gi),h}function l(h){let m=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(m!==null){const T=m.array;M=m.version;for(let C=0,S=T.length;C<S;C+=3){const w=T[C+0],b=T[C+1],R=T[C+2];h.push(w,b,b,R,R,w)}}else{const T=_.array;M=_.version;for(let C=0,S=T.length/3-1;C<S;C+=3){const w=C+0,b=C+1,R=C+2;h.push(w,b,b,R,R,w)}}const p=new(_.count>=65535?fc:dc)(h,1);p.version=M;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*a,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let M=0;for(let p=0;p<m;p++)M+=h[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Cp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let U=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",U)};var m=U;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let w=o.attributes.position.count*S,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*b*4*d),v=new hc(R,w,b,d);v.type=_n,v.needsUpdate=!0;const E=S*4;for(let P=0;P<d;P++){const O=f[P],Y=T[P],J=C[P],z=w*b*4*P;for(let Z=0;Z<O.count;Z++){const q=Z*E;_===!0&&(s.fromBufferAttribute(O,Z),R[z+q+0]=s.x,R[z+q+1]=s.y,R[z+q+2]=s.z,R[z+q+3]=0),M===!0&&(s.fromBufferAttribute(Y,Z),R[z+q+4]=s.x,R[z+q+5]=s.y,R[z+q+6]=s.z,R[z+q+7]=0),p===!0&&(s.fromBufferAttribute(J,Z),R[z+q+8]=s.x,R[z+q+9]=s.y,R[z+q+10]=s.z,R[z+q+11]=J.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new He(w,b)},n.set(o,h),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Pp(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Lp={[$l]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[Ql]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Np(i,e,t,n,s,r){const a=new Mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Vi(e,t):void 0}),o=new Mn(e,t,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new cn;l.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const c=new xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new lt(l,c),d=new bo(-1,1,1,-1,0,1);let h=null,m=null,_=!1,M,p=null,f=[],T=!1;this.setSize=function(C,S){a.setSize(C,S),o.setSize(C,S);for(let w=0;w<f.length;w++){const b=f[w];b.setSize&&b.setSize(C,S)}},this.setEffects=function(C){f=C,T=f.length>0&&f[0].isRenderPass===!0;const S=a.width,w=a.height;for(let b=0;b<f.length;b++){const R=f[b];R.setSize&&R.setSize(S,w)}},this.begin=function(C,S){if(_||C.toneMapping===xn&&f.length===0)return!1;if(p=S,S!==null){const w=S.width,b=S.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return T===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=xn,!0},this.hasRenderPass=function(){return T},this.end=function(C,S){C.toneMapping=M,_=!0;let w=a,b=o;for(let R=0;R<f.length;R++){const v=f[R];if(v.enabled!==!1&&(v.render(C,b,w,S),v.needsSwap!==!1)){const E=w;w=b,b=E}}if(h!==C.outputColorSpace||m!==C.toneMapping){h=C.outputColorSpace,m=C.toneMapping,c.defines={},Xe.getTransfer(h)===nt&&(c.defines.SRGB_TRANSFER="");const R=Lp[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,C.setRenderTarget(p),C.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const bc=new Gt,io=new Vi(1,1),Tc=new hc,Ac=new Zh,wc=new gc,xl=[],Ml=[],Sl=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gr(i,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),At(t,n)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),At(t,n)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),At(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(io.compareFunction=t.isReversedDepthBuffer()?_o:go,r=io):r=bc,t.setTexture2D(e||r,s)}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ac,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wc,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tc,s)}function Jp(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Fp;case 35674:return Bp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return qp;case 36295:return Xp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Qp}}function jp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sm(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rm(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function fm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){const n=this.cache,s=e.length,r=gr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=io:a=bc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function mm(i,e,t){const n=this.cache,s=e.length,r=gr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ac,r[a])}function gm(i,e,t){const n=this.cache,s=e.length,r=gr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wc,r[a])}function _m(i,e,t){const n=this.cache,s=e.length,r=gr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tc,r[a])}function vm(i){switch(i){case 5126:return jp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function bl(i,e){i.seq.push(e),i.map[e.id]=e}function ym(i,e,t){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),a=ra.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bl(t,c===void 0?new xm(o,i,e):new Mm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sm(o),bl(t,d)),t=d}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ym(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Em=37297;let bm=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Al=new Be;function Am(i){Xe._getMatrix(Al,Xe.workingColorSpace,i);const e=`mat3( ${Al.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tm(i.getShaderSource(e),o)}else return r}function wm(i,e){const t=Am(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Cm={[$l]:"Linear",[Yl]:"Reinhard",[Zl]:"Cineon",[Ql]:"ACESFilmic",[jl]:"AgX",[ec]:"Neutral",[Jl]:"Custom"};function Rm(i,e){const t=Cm[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new H;function Pm(){Xe.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Nm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hs(i){return i!==""}function Cl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(i){return i.replace(Im,Fm)}const Um=new Map;function Fm(i,e){let t=Oe[e];if(t===void 0){const n=Um.get(e);if(n!==void 0)t=Oe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return so(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(i){return i.replace(Bm,Om)}function Om(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const km={[js]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function zm(i){return km[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gm={[ui]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function Vm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hm={[Gi]:"ENVMAP_MODE_REFRACTION"};function Wm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qm={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function Xm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qm[i.combine]||"ENVMAP_BLENDING_NONE"}function Km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $m(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zm(t),c=Vm(t),u=Wm(t),d=Xm(t),h=Km(t),m=Lm(t),_=Nm(r),M=s.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(p=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==xn?Rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),Pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=so(a),a=Cl(a,t),a=Rl(a,t),o=so(o),o=Cl(o,t),o=Rl(o,t),a=Pl(a),o=Pl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=T+p+a,S=T+f+o,w=Tl(s,s.VERTEX_SHADER,C),b=Tl(s,s.FRAGMENT_SHADER,S);s.attachShader(M,w),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(b)||"",z=O.trim(),Z=Y.trim(),q=J.trim();let te=!0,se=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,w,b);else{const ve=wl(s,w,"vertex"),ye=wl(s,b,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ve+`
`+ye)}else z!==""?De("WebGLProgram: Program Info Log:",z):(Z===""||q==="")&&(se=!1);se&&(P.diagnostics={runnable:te,programLog:z,vertexShader:{log:Z,prefix:p},fragmentShader:{log:q,prefix:f}})}s.deleteShader(w),s.deleteShader(b),v=new sr(s,M),E=Dm(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,Em)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=b,this}let Ym=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qm(e),t.set(e,n)),n}}class Qm{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function Jm(i){return i===di||i===ar||i===or}function jm(i,e,t,n,s,r){const a=new xo,o=new Zm,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,E,U,P,O,Y){const J=P.fog,z=O.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||Z,q),se=te&&te.mapping===fr?te.image.height:null,ve=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=ye!==void 0?ye.length:0;let We=0;z.morphAttributes.position!==void 0&&(We=1),z.morphAttributes.normal!==void 0&&(We=2),z.morphAttributes.color!==void 0&&(We=3);let ct,$e,ee,he;if(ve){const L=mn[ve];ct=L.vertexShader,$e=L.fragmentShader}else{ct=v.vertexShader,$e=v.fragmentShader;const L=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,L,tt),ee=L.id,he=tt.id}const re=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,ut=!!v.map,ze=!!v.matcap,et=!!te,Ye=!!v.aoMap,qe=!!v.lightMap,pt=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,xt=!!v.displacementMap,Et=!!v.emissiveMap,ht=!!v.metalnessMap,gt=!!v.roughnessMap,F=v.anisotropy>0,Lt=v.clearcoat>0,je=v.dispersion>0,y=v.iridescence>0,g=v.sheen>0,k=v.transmission>0,W=F&&!!v.anisotropyMap,K=Lt&&!!v.clearcoatMap,le=Lt&&!!v.clearcoatNormalMap,fe=Lt&&!!v.clearcoatRoughnessMap,$=y&&!!v.iridescenceMap,j=y&&!!v.iridescenceThicknessMap,pe=g&&!!v.sheenColorMap,we=g&&!!v.sheenRoughnessMap,_e=!!v.specularMap,me=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Pe=k&&!!v.transmissionMap,Fe=k&&!!v.thicknessMap,N=!!v.gradientMap,de=!!v.alphaMap,Q=v.alphaTest>0,ge=!!v.alphaHash,Se=!!v.extensions;let ne=xn;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ae={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:ct,fragmentShader:$e,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:ze,envMap:et,envMapMode:et&&te.mapping,envMapCubeUVHeight:se,aoMap:Ye,lightMap:qe,bumpMap:pt,normalMap:mt,displacementMap:xt,emissiveMap:Et,normalMapObjectSpace:mt&&v.normalMapType===Dh,normalMapTangentSpace:mt&&v.normalMapType===eo,packedNormalMap:mt&&v.normalMapType===eo&&Jm(v.normalMap.format),metalnessMap:ht,roughnessMap:gt,anisotropy:F,anisotropyMap:W,clearcoat:Lt,clearcoatMap:K,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,dispersion:je,iridescence:y,iridescenceMap:$,iridescenceThicknessMap:j,sheen:g,sheenColorMap:pe,sheenRoughnessMap:we,specularMap:_e,specularColorMap:me,specularIntensityMap:Ce,transmission:k,transmissionMap:Pe,thicknessMap:Fe,gradientMap:N,opaque:v.transparent===!1&&v.blending===Ui&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:ge,combine:v.combine,mapUv:ut&&_(v.map.channel),aoMapUv:Ye&&_(v.aoMap.channel),lightMapUv:qe&&_(v.lightMap.channel),bumpMapUv:pt&&_(v.bumpMap.channel),normalMapUv:mt&&_(v.normalMap.channel),displacementMapUv:xt&&_(v.displacementMap.channel),emissiveMapUv:Et&&_(v.emissiveMap.channel),metalnessMapUv:ht&&_(v.metalnessMap.channel),roughnessMapUv:gt&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(v.sheenRoughnessMap.channel),specularMapUv:_e&&_(v.specularMap.channel),specularColorMapUv:me&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:Pe&&_(v.transmissionMap.channel),thicknessMapUv:Fe&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(ut||de),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)E.push(U),E.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(f(E,v),T(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function C(v){const E=m[v.type];let U;if(E){const P=mn[E];U=gu.clone(P.uniforms)}else U=v.uniforms;return U}function S(v,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new $m(i,E,v,s),c.push(U),u.set(E,U)),U}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:C,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function e0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function t0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,M,p,f){let T=i[e];return T===void 0?(T={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:f},i[e]=T):(T.id=h.id,T.object=h,T.geometry=m,T.material=_,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=p,T.group=f),e++,T}function l(h,m,_,M,p,f){const T=o(h,m,_,M,p,f);_.transmission>0?n.push(T):_.transparent===!0?s.push(T):t.push(T)}function c(h,m,_,M,p,f){const T=o(h,m,_,M,p,f);_.transmission>0?n.unshift(T):_.transparent===!0?s.unshift(T):t.unshift(T)}function u(h,m,_){t.length>1&&t.sort(h||t0),n.length>1&&n.sort(m||Nl),s.length>1&&s.sort(m||Nl),_&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let h=e,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function n0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Dl,i.set(n,[a])):s>=r.length?(a=new Dl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function i0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function s0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let r0=0;function a0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o0(i){const e=new i0,t=s0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new ft,a=new ft;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,M=0,p=0,f=0,T=0,C=0,S=0,w=0,b=0,R=0;c.sort(a0);for(let E=0,U=c.length;E<U;E++){const P=c[E],O=P.color,Y=P.intensity,J=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===di?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*Y,d+=O.g*Y,h+=O.b*Y;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],Y);R++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(Y),Z.distance=J,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;const q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[M]=q.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=z,S++}M++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(O).multiplyScalar(Y),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=Z,p++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,n.pointShadow[_]=te,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=P.shadow.matrix,C++}n.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(Y),Z.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[f]=Z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==M||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==T||v.numPointShadows!==C||v.numSpotShadows!==S||v.numSpotMaps!==w||v.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=S+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,v.directionalLength=m,v.pointLength=_,v.spotLength=M,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=T,v.numPointShadows=C,v.numSpotShadows=S,v.numSpotMaps=w,v.numLightProbes=R,n.version=r0++)}function l(c,u){let d=0,h=0,m=0,_=0,M=0;const p=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const C=c[f];if(C.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(C.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(C.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(C.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(C.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(p),h++}else if(C.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Il(i){const e=new o0(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function l0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Il(i),e.set(s,[o])):r>=a.length?(o=new Il(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`,u0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],d0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ul=new ft,rs=new H,aa=new H;function f0(i,e,t){let n=new So;const s=new He,r=new He,a=new dt,o=new Mu,l=new Su,c={},u=t.maxTextureSize,d={[Zn]:qt,[qt]:Zn,[Rn]:Rn},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let f=this.type;this.render=function(b,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Xl&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);const E=i.getRenderTarget(),U=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ln),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(z=>z.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,z=b.length;J<z;J++){const Z=b[J],q=Z.shadow;if(q===void 0){De("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const te=q.getFrameExtents();s.multiply(te),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,q.mapSize.y=r.y));const se=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=se,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ls){if(Z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Mn(s.x,s.y,{format:di,type:Dn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Vi(s.x,s.y,_n),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=In,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Pt,q.map.depthTexture.magFilter=Pt}else Z.isPointLight?(q.map=new Ec(s.x),q.map.depthTexture=new pu(s.x,yn)):(q.map=new Mn(s.x,s.y),q.map.depthTexture=new Vi(s.x,s.y,yn)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=In,this.type===js?(q.map.depthTexture.compareFunction=se?_o:go,q.map.depthTexture.minFilter=Ft,q.map.depthTexture.magFilter=Ft):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Pt,q.map.depthTexture.magFilter=Pt);q.camera.updateProjectionMatrix()}const ve=q.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<ve;ye++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(q.map),i.clear());const be=q.getViewport(ye);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(a)}if(Z.isPointLight){const be=q.camera,We=q.matrix,ct=Z.distance||be.far;ct!==be.far&&(be.far=ct,be.updateProjectionMatrix()),rs.setFromMatrixPosition(Z.matrixWorld),be.position.copy(rs),aa.copy(be.position),aa.add(u0[ye]),be.up.copy(d0[ye]),be.lookAt(aa),be.updateMatrixWorld(),We.makeTranslation(-rs.x,-rs.y,-rs.z),Ul.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ul,be.coordinateSystem,be.reversedDepth)}else q.updateMatrices(Z);n=q.getFrustum(),S(R,v,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ls&&T(q,v),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,U,P)};function T(b,R){const v=e.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mn(s.x,s.y,{format:di,type:Dn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,v,h,M,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,v,m,M,null)}function C(b,R,v,E){let U=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)U=P;else if(U=v.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=U.uuid,Y=R.uuid;let J=c[O];J===void 0&&(J={},c[O]=J);let z=J[Y];z===void 0&&(z=U.clone(),J[Y]=z,R.addEventListener("dispose",w)),U=z}if(U.visible=R.visible,U.wireframe=R.wireframe,E===ls?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:d[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const O=i.properties.get(U);O.light=v}return U}function S(b,R,v,E,U){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===ls)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),J=b.material;if(Array.isArray(J)){const z=Y.groups;for(let Z=0,q=z.length;Z<q;Z++){const te=z[Z],se=J[te.materialIndex];if(se&&se.visible){const ve=C(b,se,E,U);b.onBeforeShadow(i,b,R,v,Y,ve,te),i.renderBufferDirect(v,null,Y,ve,b,te),b.onAfterShadow(i,b,R,v,Y,ve,te)}}}else if(J.visible){const z=C(b,J,E,U);b.onBeforeShadow(i,b,R,v,Y,z,null),i.renderBufferDirect(v,null,Y,z,b,null),b.onAfterShadow(i,b,R,v,Y,z,null)}}const O=b.children;for(let Y=0,J=O.length;Y<J;Y++)S(O[Y],R,v,E,U)}function w(b){b.target.removeEventListener("dispose",w);for(const v in c){const E=c[v],U=b.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function p0(i,e){function t(){let N=!1;const de=new dt;let Q=null;const ge=new dt(0,0,0,0);return{setMask:function(Se){Q!==Se&&!N&&(i.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){N=Se},setClear:function(Se,ne,Ae,L,tt){tt===!0&&(Se*=L,ne*=L,Ae*=L),de.set(Se,ne,Ae,L),ge.equals(de)===!1&&(i.clearColor(Se,ne,Ae,L),ge.copy(de))},reset:function(){N=!1,Q=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,Q=null,ge=null,Se=null;return{setReversed:function(ne){if(de!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const L=Se;Se=null,this.setClear(L)}},getReversed:function(){return de},setTest:function(ne){ne?re(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!N&&(i.depthMask(ne),Q=ne)},setFunc:function(ne){if(de&&(ne=Hh[ne]),ge!==ne){switch(ne){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ne}},setLocked:function(ne){N=ne},setClear:function(ne){Se!==ne&&(Se=ne,de&&(ne=1-ne),i.clearDepth(ne))},reset:function(){N=!1,Q=null,ge=null,Se=null,de=!1}}}function s(){let N=!1,de=null,Q=null,ge=null,Se=null,ne=null,Ae=null,L=null,tt=null;return{setTest:function(Ge){N||(Ge?re(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ge){de!==Ge&&!N&&(i.stencilMask(Ge),de=Ge)},setFunc:function(Ge,Ot,oe){(Q!==Ge||ge!==Ot||Se!==oe)&&(i.stencilFunc(Ge,Ot,oe),Q=Ge,ge=Ot,Se=oe)},setOp:function(Ge,Ot,oe){(ne!==Ge||Ae!==Ot||L!==oe)&&(i.stencilOp(Ge,Ot,oe),ne=Ge,Ae=Ot,L=oe)},setLocked:function(Ge){N=Ge},setClear:function(Ge){tt!==Ge&&(i.clearStencil(Ge),tt=Ge)},reset:function(){N=!1,de=null,Q=null,ge=null,Se=null,ne=null,Ae=null,L=null,tt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},m=new WeakMap,_=[],M=null,p=!1,f=null,T=null,C=null,S=null,w=null,b=null,R=null,v=new Je(0,0,0),E=0,U=!1,P=null,O=null,Y=null,J=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=te>=1):se.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=te>=2);let ve=null,ye={};const be=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ct=new dt().fromArray(be),$e=new dt().fromArray(We);function ee(N,de,Q,ge){const Se=new Uint8Array(4),ne=i.createTexture();i.bindTexture(N,ne),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Q;Ae++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(de+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ne}const he={};he[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(zi),pt(!1),mt(Uo),re(i.CULL_FACE),Ye(Ln);function re(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Le(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ue(N,de){return h[N]!==de?(i.bindFramebuffer(N,de),h[N]=de,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(N,de){let Q=_,ge=!1;if(N){Q=m.get(de),Q===void 0&&(Q=[],m.set(de,Q));const Se=N.textures;if(Q.length!==Se.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=Se.length;ne<Ae;ne++)Q[ne]=i.COLOR_ATTACHMENT0+ne;Q.length=Se.length,ge=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Q)}function ut(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const ze={[ai]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};ze[ph]=i.MIN,ze[mh]=i.MAX;const et={[gh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(N,de,Q,ge,Se,ne,Ae,L,tt,Ge){if(N===Ln){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(re(i.BLEND),p=!0),N!==uh){if(N!==f||Ge!==U){if((T!==ai||w!==ai)&&(i.blendEquation(i.FUNC_ADD),T=ai,w=ai),Ge)switch(N){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bo:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oo:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}C=null,S=null,b=null,R=null,v.set(0,0,0),E=0,f=N,U=Ge}return}Se=Se||de,ne=ne||Q,Ae=Ae||ge,(de!==T||Se!==w)&&(i.blendEquationSeparate(ze[de],ze[Se]),T=de,w=Se),(Q!==C||ge!==S||ne!==b||Ae!==R)&&(i.blendFuncSeparate(et[Q],et[ge],et[ne],et[Ae]),C=Q,S=ge,b=ne,R=Ae),(L.equals(v)===!1||tt!==E)&&(i.blendColor(L.r,L.g,L.b,tt),v.copy(L),E=tt),f=N,U=!1}function qe(N,de){N.side===Rn?Le(i.CULL_FACE):re(i.CULL_FACE);let Q=N.side===qt;de&&(Q=!Q),pt(Q),N.blending===Ui&&N.transparent===!1?Ye(Ln):Ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function mt(N){N!==ch?(re(i.CULL_FACE),N!==O&&(N===Uo?i.cullFace(i.BACK):N===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),O=N}function xt(N){N!==Y&&(q&&i.lineWidth(N),Y=N)}function Et(N,de,Q){N?(re(i.POLYGON_OFFSET_FILL),(J!==de||z!==Q)&&(J=de,z=Q,a.getReversed()&&(de=-de),i.polygonOffset(de,Q))):Le(i.POLYGON_OFFSET_FILL)}function ht(N){N?re(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function gt(N){N===void 0&&(N=i.TEXTURE0+Z-1),ve!==N&&(i.activeTexture(N),ve=N)}function F(N,de,Q){Q===void 0&&(ve===null?Q=i.TEXTURE0+Z-1:Q=ve);let ge=ye[Q];ge===void 0&&(ge={type:void 0,texture:void 0},ye[Q]=ge),(ge.type!==N||ge.texture!==de)&&(ve!==Q&&(i.activeTexture(Q),ve=Q),i.bindTexture(N,de||he[N]),ge.type=N,ge.texture=de)}function Lt(){const N=ye[ve];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function g(){try{i.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function fe(){try{i.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function $(){try{i.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function we(N,de){d[N]!==de&&(i.pixelStorei(N,de),d[N]=de)}function _e(N){ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function me(N){$e.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$e.copy(N))}function Ce(N,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let ge=Q.get(N);ge===void 0&&(ge=i.getUniformBlockIndex(de,N.name),Q.set(N,ge))}function Pe(N,de){const ge=c.get(de).get(N);l.get(de)!==ge&&(i.uniformBlockBinding(de,ge,N.__bindingPointIndex),l.set(de,ge))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ve=null,ye={},h={},m=new WeakMap,_=[],M=null,p=!1,f=null,T=null,C=null,S=null,w=null,b=null,R=null,v=new Je(0,0,0),E=0,U=!1,P=null,O=null,Y=null,J=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Le,bindFramebuffer:Ue,drawBuffers:Re,useProgram:ut,setBlending:Ye,setMaterial:qe,setFlipSided:pt,setCullFace:mt,setLineWidth:xt,setPolygonOffset:Et,setScissorTest:ht,activeTexture:gt,bindTexture:F,unbindTexture:Lt,compressedTexImage2D:je,compressedTexImage3D:y,texImage2D:$,texImage3D:j,pixelStorei:we,getParameter:pe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:le,texStorage3D:fe,texSubImage2D:g,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:_e,viewport:me,reset:Fe}}function m0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,g){return _?new OffscreenCanvas(y,g):hr("canvas")}function p(y,g,k){let W=1;const K=je(y);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const le=Math.floor(W*K.width),fe=Math.floor(W*K.height);h===void 0&&(h=M(le,fe));const $=g?M(le,fe):h;return $.width=le,$.height=fe,$.getContext("2d").drawImage(y,0,0,le,fe),De("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+fe+")."),$}else return"data"in y&&De("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function f(y){return y.generateMipmaps}function T(y){i.generateMipmap(y)}function C(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(y,g,k,W,K,le=!1){if(y!==null){if(i[y]!==void 0)return i[y];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),k===i.SHORT&&fe&&($=fe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),g===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),k===i.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),g===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),k===i.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const j=le?cr:Xe.getTransfer(K);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=j===nt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),k===i.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(y,g){let k;return y?g===null||g===yn||g===gs?k=i.DEPTH24_STENCIL8:g===_n?k=i.DEPTH32F_STENCIL8:g===ms&&(k=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===gs?k=i.DEPTH_COMPONENT24:g===_n?k=i.DEPTH_COMPONENT32F:g===ms&&(k=i.DEPTH_COMPONENT16),k}function b(y,g){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Pt&&y.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function v(y){const g=y.target;g.removeEventListener("dispose",v),P(g)}function E(y){const g=n.get(y);if(g.__webglInit===void 0)return;const k=y.source,W=m.get(k);if(W){const K=W[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(y),Object.keys(W).length===0&&m.delete(k)}n.remove(y)}function U(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const k=y.source,W=m.get(k);delete W[g.__cacheKey],a.memory.textures--}function P(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let K=0;K<g.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[W][K]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const k=y.textures;for(let W=0,K=k.length;W<K;W++){const le=n.get(k[W]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(y)}let O=0;function Y(){O=0}function J(){return O}function z(y){O=y}function Z(){const y=O;return y>=s.maxTextures&&De("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),O+=1,y}function q(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function te(y,g){const k=n.get(y);if(y.isVideoTexture&&F(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&k.__version!==y.version){const W=y.image;if(W===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,y,g);return}}else y.isExternalTexture&&(k.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+g)}function se(y,g){const k=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&k.__version!==y.version){Le(k,y,g);return}else y.isExternalTexture&&(k.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+g)}function ve(y,g){const k=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&k.__version!==y.version){Le(k,y,g);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+g)}function ye(y,g){const k=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&k.__version!==y.version){Ue(k,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+g)}const be={[ya]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},We={[Pt]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ct={[Ih]:i.NEVER,[kh]:i.ALWAYS,[Uh]:i.LESS,[go]:i.LEQUAL,[Fh]:i.EQUAL,[_o]:i.GEQUAL,[Bh]:i.GREATER,[Oh]:i.NOTEQUAL};function $e(y,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===Rr||g.magFilter===ws||g.magFilter===li||g.minFilter===Ft||g.minFilter===Rr||g.minFilter===ws||g.minFilter===li)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,be[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,be[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,be[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,We[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,We[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ct[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==ws&&g.minFilter!==li||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ee(y,g){let k=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const W=g.source;let K=m.get(W);K===void 0&&(K={},m.set(W,K));const le=q(g);if(le!==y.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[le].usedTimes++;const fe=K[y.__cacheKey];fe!==void 0&&(K[y.__cacheKey].usedTimes--,fe.usedTimes===0&&U(g)),y.__cacheKey=le,y.__webglTexture=K[le].texture}return k}function he(y,g,k){return Math.floor(Math.floor(y/k)/g)}function re(y,g,k,W){const le=y.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,k,W,g.data);else{le.sort((we,_e)=>we.start-_e.start);let fe=0;for(let we=1;we<le.length;we++){const _e=le[fe],me=le[we],Ce=_e.start+_e.count,Pe=he(me.start,g.width,4),Fe=he(_e.start,g.width,4);me.start<=Ce+1&&Pe===Fe&&he(me.start+me.count-1,g.width,4)===Pe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++fe,le[fe]=me)}le.length=fe+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let we=0,_e=le.length;we<_e;we++){const me=le[we],Ce=Math.floor(me.start/4),Pe=Math.ceil(me.count/4),Fe=Ce%g.width,N=Math.floor(Ce/g.width),de=Pe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Fe,N,de,Q,k,W,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function Le(y,g,k){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const K=ee(y,g),le=g.source;t.bindTexture(W,y.__webglTexture,i.TEXTURE0+k);const fe=n.get(le);if(le.version!==fe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=Xe.getPrimaries(Xe.workingColorSpace),ge=g.colorSpace===$n?null:Xe.getPrimaries(g.colorSpace),Se=g.colorSpace===$n||Q===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=p(g.image,!1,s.maxTextureSize);j=Lt(g,j);const pe=r.convert(g.format,g.colorSpace),we=r.convert(g.type);let _e=S(g.internalFormat,pe,we,g.normalized,g.colorSpace,g.isVideoTexture);$e(W,g);let me;const Ce=g.mipmaps,Pe=g.isVideoTexture!==!0,Fe=fe.__version===void 0||K===!0,N=le.dataReady,de=b(g,j);if(g.isDepthTexture)_e=w(g.format===ci,g.type),Fe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,we,null));else if(g.isDataTexture)if(Ce.length>0){Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,Ce[0].width,Ce[0].height);for(let Q=0,ge=Ce.length;Q<ge;Q++)me=Ce[Q],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,Q,_e,me.width,me.height,0,pe,we,me.data);g.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,j.width,j.height),N&&re(g,j,pe,we)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,we,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,Ce[0].width,Ce[0].height,j.depth);for(let Q=0,ge=Ce.length;Q<ge;Q++)if(me=Ce[Q],g.format!==ln)if(pe!==null)if(Pe){if(N)if(g.layerUpdates.size>0){const Se=dl(me.width,me.height,g.format,g.type);for(const ne of g.layerUpdates){const Ae=me.data.subarray(ne*Se/me.data.BYTES_PER_ELEMENT,(ne+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ne,me.width,me.height,1,pe,Ae)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,j.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,_e,me.width,me.height,j.depth,0,me.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,j.depth,pe,we,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,_e,me.width,me.height,j.depth,0,pe,we,me.data)}else{Pe&&Fe&&t.texStorage2D(i.TEXTURE_2D,de,_e,Ce[0].width,Ce[0].height);for(let Q=0,ge=Ce.length;Q<ge;Q++)me=Ce[Q],g.format!==ln?pe!==null?Pe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,_e,me.width,me.height,0,me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,Q,_e,me.width,me.height,0,pe,we,me.data)}else if(g.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,j.width,j.height,j.depth),N)if(g.layerUpdates.size>0){const Q=dl(j.width,j.height,g.format,g.type);for(const ge of g.layerUpdates){const Se=j.data.subarray(ge*Q/j.data.BYTES_PER_ELEMENT,(ge+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,j.width,j.height,1,pe,we,Se)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,we,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,pe,we,j.data);else if(g.isData3DTexture)Pe?(Fe&&t.texStorage3D(i.TEXTURE_3D,de,_e,j.width,j.height,j.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,we,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,pe,we,j.data);else if(g.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(i.TEXTURE_2D,de,_e,j.width,j.height);else{let Q=j.width,ge=j.height;for(let Se=0;Se<de;Se++)t.texImage2D(i.TEXTURE_2D,Se,_e,Q,ge,0,pe,we,null),Q>>=1,ge>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(g),Q.onpaint=ge=>{const Se=ge.changedElements;for(const ne of d)Se.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const Se=i.RGBA,ne=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ne,Ae,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Fe){const Q=je(Ce[0]);t.texStorage2D(i.TEXTURE_2D,de,_e,Q.width,Q.height)}for(let Q=0,ge=Ce.length;Q<ge;Q++)me=Ce[Q],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,pe,we,me):t.texImage2D(i.TEXTURE_2D,Q,_e,pe,we,me);g.generateMipmaps=!1}else if(Pe){if(Fe){const Q=je(j);t.texStorage2D(i.TEXTURE_2D,de,_e,Q.width,Q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,we,j)}else t.texImage2D(i.TEXTURE_2D,0,_e,pe,we,j);f(g)&&T(W),fe.__version=le.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ue(y,g,k){if(g.image.length!==6)return;const W=ee(y,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+k);const le=n.get(K);if(K.version!==le.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const fe=Xe.getPrimaries(Xe.workingColorSpace),$=g.colorSpace===$n?null:Xe.getPrimaries(g.colorSpace),j=g.colorSpace===$n||fe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let ne=0;ne<6;ne++)!pe&&!we?_e[ne]=p(g.image[ne],!0,s.maxCubemapSize):_e[ne]=we?g.image[ne].image:g.image[ne],_e[ne]=Lt(g,_e[ne]);const me=_e[0],Ce=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),Fe=S(g.internalFormat,Ce,Pe,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,de=le.__version===void 0||W===!0,Q=K.dataReady;let ge=b(g,me);$e(i.TEXTURE_CUBE_MAP,g);let Se;if(pe){N&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Fe,me.width,me.height);for(let ne=0;ne<6;ne++){Se=_e[ne].mipmaps;for(let Ae=0;Ae<Se.length;Ae++){const L=Se[Ae];g.format!==ln?Ce!==null?N?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,L.width,L.height,Ce,L.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Fe,L.width,L.height,0,L.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,L.width,L.height,Ce,Pe,L.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,Fe,L.width,L.height,0,Ce,Pe,L.data)}}}else{if(Se=g.mipmaps,N&&de){Se.length>0&&ge++;const ne=je(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e[ne].width,_e[ne].height,Ce,Pe,_e[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,_e[ne].width,_e[ne].height,0,Ce,Pe,_e[ne].data);for(let Ae=0;Ae<Se.length;Ae++){const tt=Se[Ae].image[ne].image;N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,tt.width,tt.height,Ce,Pe,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Fe,tt.width,tt.height,0,Ce,Pe,tt.data)}}else{N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Pe,_e[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,Ce,Pe,_e[ne]);for(let Ae=0;Ae<Se.length;Ae++){const L=Se[Ae];N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ce,Pe,L.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,Fe,Ce,Pe,L.image[ne])}}}f(g)&&T(i.TEXTURE_CUBE_MAP),le.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Re(y,g,k,W,K,le){const fe=r.convert(k.format,k.colorSpace),$=r.convert(k.type),j=S(k.internalFormat,fe,$,k.normalized,k.colorSpace),pe=n.get(g),we=n.get(k);if(we.__renderTarget=g,!pe.__hasExternalTextures){const _e=Math.max(1,g.width>>le),me=Math.max(1,g.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,j,_e,me,g.depth,0,fe,$,null):t.texImage2D(K,le,j,_e,me,0,fe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,we.__webglTexture,0,ht(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,we.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(y,g,k){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const W=g.depthTexture,K=W&&W.isDepthTexture?W.type:null,le=w(g.stencilBuffer,K),fe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),le,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),le,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,le,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,y)}else{const W=g.textures;for(let K=0;K<W.length;K++){const le=W[K],fe=r.convert(le.format,le.colorSpace),$=r.convert(le.type),j=S(le.internalFormat,fe,$,le.normalized,le.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),j,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(y,g,k){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),$e(i.TEXTURE_CUBE_MAP,g.depthTexture);const pe=r.convert(g.depthTexture.format),we=r.convert(g.depthTexture.type);let _e;g.depthTexture.format===In?_e=i.DEPTH_COMPONENT24:g.depthTexture.format===ci&&(_e=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,g.width,g.height,0,pe,we,null)}}else te(g.depthTexture,0);const le=K.__webglTexture,fe=ht(g),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,j=g.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===In)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,le,0);else if(g.depthTexture.format===ci)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(y){const g=n.get(y),k=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=W}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ze(g.__webglFramebuffer[W],y,W);else{const W=y.texture.mipmaps;W&&W.length>0?ze(g.__webglFramebuffer[0],y,0):ze(g.__webglFramebuffer,y,0)}else if(k){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),ut(g.__webglDepthbuffer[W],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{const W=y.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ut(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(y,g,k){const W=n.get(y);g!==void 0&&Re(W.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&et(y)}function qe(y){const g=y.texture,k=n.get(y),W=n.get(g);y.addEventListener("dispose",v);const K=y.textures,le=y.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<g.mipmaps.length;j++)k.__webglFramebuffer[$][j]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let $=0,j=K.length;$<j;$++){const pe=n.get(K[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&gt(y)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const j=K[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const pe=r.convert(j.format,j.colorSpace),we=r.convert(j.type),_e=S(j.internalFormat,pe,we,j.normalized,j.colorSpace,y.isXRRenderTarget===!0),me=ht(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,_e,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),$e(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)Re(k.__webglFramebuffer[$][j],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Re(k.__webglFramebuffer[$],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let $=0,j=K.length;$<j;$++){const pe=K[$],we=n.get(pe);let _e=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(_e=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,we.__webglTexture),$e(_e,pe),Re(k.__webglFramebuffer,y,pe,i.COLOR_ATTACHMENT0+$,_e,0),f(pe)&&T(_e)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),$e($,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)Re(k.__webglFramebuffer[j],y,g,i.COLOR_ATTACHMENT0,$,j);else Re(k.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,$,0);f(g)&&T($),t.unbindTexture()}y.depthBuffer&&et(y)}function pt(y){const g=y.textures;for(let k=0,W=g.length;k<W;k++){const K=g[k];if(f(K)){const le=C(y),fe=n.get(K).__webglTexture;t.bindTexture(le,fe),T(le),t.unbindTexture()}}}const mt=[],xt=[];function Et(y){if(y.samples>0){if(gt(y)===!1){const g=y.textures,k=y.width,W=y.height;let K=i.COLOR_BUFFER_BIT;const le=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(y),$=g.length>1;if($)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const j=y.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const we=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,K,i.NEAREST),l===!0&&(mt.length=0,xt.length=0,mt.push(i.COLOR_ATTACHMENT0+pe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(mt.push(le),xt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const we=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(y){return Math.min(s.maxSamples,y.samples)}function gt(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Lt(y,g){const k=y.colorSpace,W=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||k!==lr&&k!==$n&&(Xe.getTransfer(k)===nt?(W!==ln||K!==Jt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),g}function je(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.getTextureUnits=J,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ye,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function g0(i,e){function t(n,s=$n){let r;const a=Xe.getTransfer(s);if(n===Jt)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===ln)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===di)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ta||n===Aa||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ra||n===Pa||n===La||n===Na||n===ar||n===Da)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Ra)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return r.COMPRESSED_RG11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===Ua||n===Fa||n===Ba||n===Oa||n===ka||n===za||n===Ga||n===Va||n===Ha||n===Wa||n===qa||n===Xa||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Ya||n===Za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===Ja||n===or||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v0=`
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

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:_0,fragmentShader:v0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M0 extends fi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",p=new x0,f={},T=t.getContextAttributes();let C=null,S=null;const w=[],b=[],R=new He;let v=null;const E=new Qt;E.viewport=new dt;const U=new Qt;U.viewport=new dt;const P=[E,U],O=new Cu;let Y=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=w[ee];return he===void 0&&(he=new Br,w[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=w[ee];return he===void 0&&(he=new Br,w[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=w[ee];return he===void 0&&(he=new Br,w[ee]=he),he.getHandSpace()};function z(ee){const he=b.indexOf(ee.inputSource);if(he===-1)return;const re=w[he];re!==void 0&&(re.update(ee.inputSource,ee.frame,c||a),re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",q);for(let ee=0;ee<w.length;ee++){const he=b[ee];he!==null&&(b[ee]=null,w[ee].disconnect(he))}Y=null,J=null,p.reset();for(const ee in f)delete f[ee];e.setRenderTarget(C),m=null,h=null,d=null,s=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",q),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ue=null;T.depth&&(Ue=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=T.stencil?ci:In,Le=T.stencil?gs:yn);const Re={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Mn(h.textureWidth,h.textureHeight,{format:ln,type:Jt,depthTexture:new Vi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Mn(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(ee){for(let he=0;he<ee.removed.length;he++){const re=ee.removed[he],Le=b.indexOf(re);Le>=0&&(b[Le]=null,w[Le].disconnect(re))}for(let he=0;he<ee.added.length;he++){const re=ee.added[he];let Le=b.indexOf(re);if(Le===-1){for(let Re=0;Re<w.length;Re++)if(Re>=b.length){b.push(re),Le=Re;break}else if(b[Re]===null){b[Re]=re,Le=Re;break}if(Le===-1)break}const Ue=w[Le];Ue&&Ue.connect(re)}}const te=new H,se=new H;function ve(ee,he,re){te.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(re.matrixWorld);const Le=te.distanceTo(se),Ue=he.projectionMatrix.elements,Re=re.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),ze=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],Ye=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],pt=(Re[8]+1)/Re[0],mt=ut*qe,xt=ut*pt,Et=Le/(-qe+pt),ht=Et*-qe;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ht),ee.translateZ(Et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const gt=ut+Et,F=ze+Et,Lt=mt-ht,je=xt+(Le-ht),y=et*ze/F*gt,g=Ye*ze/F*gt;ee.projectionMatrix.makePerspective(Lt,je,y,g,gt,F),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ye(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let he=ee.near,re=ee.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(re=p.depthFar)),O.near=U.near=E.near=he,O.far=U.far=E.far=re,(Y!==O.near||J!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,J=O.far),O.layers.mask=ee.layers.mask|6,E.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;const Le=ee.parent,Ue=O.cameras;ye(O,Le);for(let Re=0;Re<Ue.length;Re++)ye(Ue[Re],Le);Ue.length===2?ve(O,E,U):O.projectionMatrix.copy(E.projectionMatrix),be(ee,O,Le)};function be(ee,he,re){re===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=to*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(ee){return f[ee]};let We=null;function ct(ee,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Le=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let ze=0;ze<re.length;ze++){const et=re[ze];let Ye=null;if(m!==null)Ye=m.getViewport(et);else{const pt=d.getViewSubImage(h,et);Ye=pt.viewport,ze===0&&(e.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(S))}let qe=P[ze];qe===void 0&&(qe=new Qt,qe.layers.enable(ze),qe.viewport=new dt,P[ze]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ze===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(qe)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const ze=d.getDepthInformation(re[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(Ue&&Ue.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<re.length;ze++){const et=re[ze].camera;if(et){let Ye=f[et];Ye||(Ye=new _c,f[et]=Ye);const qe=d.getCameraImage(et);Ye.sourceTexture=qe}}}}for(let re=0;re<w.length;re++){const Le=b[re],Ue=w[re];Le!==null&&Ue!==void 0&&Ue.update(Le,he,c||a)}We&&We(ee,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const $e=new Sc;$e.setAnimationLoop(ct),this.setAnimationLoop=function(ee){We=ee},this.dispose=function(){}}}const S0=new ft,Cc=new Be;Cc.set(-1,0,0,0,1,0,0,0,1);function y0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,vc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,C,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,C):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f),C=T.envMap,S=T.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cc),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,C){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=C*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const b=w.program;n.uniformBlockBinding(S,b)}function c(S,w){let b=s[S.id];b===void 0&&(p(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",T));const R=w.program;n.updateUBOMapping(S,R);const v=e.render.frame;r[S.id]!==v&&(h(S),r[S.id]=v)}function u(S){const w=d();S.__bindingPointIndex=w;const b=i.createBuffer(),R=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const w=s[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,E=b.length;v<E;v++){const U=b[v];if(Array.isArray(U))for(let P=0,O=U.length;P<O;P++)m(U[P],v,P,R);else m(U,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,w,b,R){if(M(S,w,b,R)===!0){const v=S.__offset,E=S.value;if(Array.isArray(E)){let U=0;for(let P=0;P<E.length;P++){const O=E[P],Y=f(O);_(O,S.__data,U),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function _(S,w,b){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,b)}function M(S,w,b,R){const v=S.value,E=w+"_"+b;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const U=R[E];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function p(S){const w=S.uniforms;let b=0;const R=16;for(let E=0,U=w.length;E<U;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let O=0,Y=P.length;O<Y;O++){const J=P[O],z=Array.isArray(J.value)?J.value:[J.value];for(let Z=0,q=z.length;Z<q;Z++){const te=z[Z],se=f(te),ve=b%R,ye=ve%se.boundary,be=ve+ye;b+=ye,be!==0&&R-be<se.storage&&(b+=R-be),J.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=se.storage}}}const v=b%R;return v>0&&(b+=R-v),S.__size=b,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),w}function T(S){const w=S.target;w.removeEventListener("dispose",T);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function C(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}const b0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function T0(){return dn===null&&(dn=new hu(b0,16,16,di,Dn),dn.name="DFG_LUT",dn.minFilter=Ft,dn.magFilter=Ft,dn.wrapS=Pn,dn.wrapT=Pn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class A0{constructor(e={}){const{canvas:t=Gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Jt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=m,p=new Set([mo,po,fo]),f=new Set([Jt,yn,ms,gs,ho,uo]),T=new Uint32Array(4),C=new Int32Array(4),S=new H;let w=null,b=null;const R=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let P=!1,O=null,Y=null,J=null,z=null;this._outputColorSpace=tn;let Z=0,q=0,te=null,se=-1,ve=null;const ye=new dt,be=new dt;let We=null;const ct=new Je(0);let $e=0,ee=t.width,he=t.height,re=1,Le=null,Ue=null;const Re=new dt(0,0,ee,he),ut=new dt(0,0,ee,he);let ze=!1;const et=new So;let Ye=!1,qe=!1;const pt=new ft,mt=new H,xt=new dt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function gt(){return te===null?re:1}let F=n;function Lt(x,B){return t.getContext(x,B)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),F===null){const B="webgl2";if(F=Lt(B,x),F===null)throw Lt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Ze("WebGLRenderer: "+x.message),x}let je,y,g,k,W,K,le,fe,$,j,pe,we,_e,me,Ce,Pe,Fe,N,de,Q,ge,Se,ne;function Ae(){je=new Tp(F),je.init(),ge=new g0(F,je),y=new _p(F,je,e,ge),g=new p0(F,je),y.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),Y=F.createFramebuffer(),J=F.createFramebuffer(),z=F.createFramebuffer(),k=new Cp(F),W=new e0,K=new m0(F,je,g,W,y,ge,k),le=new bp(U),fe=new Lu(F),Se=new mp(F,fe),$=new Ap(F,fe,k,Se),j=new Pp(F,$,fe,Se,k),N=new Rp(F,y,K),Ce=new vp(W),pe=new jm(U,le,je,y,Se,Ce),we=new y0(U,W),_e=new n0,me=new l0(je),Fe=new pp(U,le,g,j,_,l),Pe=new f0(U,j,y),ne=new E0(F,k,y,g),de=new gp(F,je,k),Q=new wp(F,je,k),k.programs=pe.programs,U.capabilities=y,U.extensions=je,U.properties=W,U.renderLists=_e,U.shadowMap=Pe,U.state=g,U.info=k}Ae(),M!==Jt&&(E=new Np(M,t.width,t.height,o,s,r));const L=new M0(U,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(x){x!==void 0&&(re=x,this.setSize(ee,he,!1))},this.getSize=function(x){return x.set(ee,he)},this.setSize=function(x,B,X=!0){if(L.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=x,he=B,t.width=Math.floor(x*re),t.height=Math.floor(B*re),X===!0&&(t.style.width=x+"px",t.style.height=B+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(ee*re,he*re).floor()},this.setDrawingBufferSize=function(x,B,X){ee=x,he=B,re=X,t.width=Math.floor(x*X),t.height=Math.floor(B*X),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(M===Jt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ye)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,B,X,G){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,B,X,G),g.viewport(ye.copy(Re).multiplyScalar(re).round())},this.getScissor=function(x){return x.copy(ut)},this.setScissor=function(x,B,X,G){x.isVector4?ut.set(x.x,x.y,x.z,x.w):ut.set(x,B,X,G),g.scissor(be.copy(ut).multiplyScalar(re).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(x){g.setScissorTest(ze=x)},this.setOpaqueSort=function(x){Le=x},this.setTransparentSort=function(x){Ue=x},this.getClearColor=function(x){return x.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,X=!0){let G=0;if(x){let V=!1;if(te!==null){const xe=te.texture.format;V=p.has(xe)}if(V){const xe=te.texture.type,ue=f.has(xe),A=Fe.getClearColor(),D=Fe.getClearAlpha(),I=A.r,ie=A.g,ae=A.b;ue?(T[0]=I,T[1]=ie,T[2]=ae,T[3]=D,F.clearBufferuiv(F.COLOR,0,T)):(C[0]=I,C[1]=ie,C[2]=ae,C[3]=D,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}B&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Fe.dispose(),_e.dispose(),me.dispose(),W.dispose(),le.dispose(),j.dispose(),Se.dispose(),ne.dispose(),pe.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ki),L.removeEventListener("sessionend",$i),Te.stop()};function tt(x){x.preventDefault(),Ho("WebGLRenderer: Context Lost."),P=!0}function Ge(){Ho("WebGLRenderer: Context Restored."),P=!1;const x=k.autoReset,B=Pe.enabled,X=Pe.autoUpdate,G=Pe.needsUpdate,V=Pe.type;Ae(),k.autoReset=x,Pe.enabled=B,Pe.autoUpdate=X,Pe.needsUpdate=G,Pe.type=V}function Ot(x){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const B=x.target;B.removeEventListener("dispose",oe),Jn(B)}function Jn(x){Mt(x),W.remove(x)}function Mt(x){const B=W.get(x).programs;B!==void 0&&(B.forEach(function(X){pe.releaseProgram(X)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,X,G,V,xe){B===null&&(B=Et);const ue=V.isMesh&&V.matrixWorld.determinantAffine()<0,A=_r(x,B,X,G,V);g.setMaterial(G,ue);let D=X.index,I=1;if(G.wireframe===!0){if(D=$.getWireframeAttribute(X),D===void 0)return;I=2}const ie=X.drawRange,ae=X.attributes.position;let ce=ie.start*I,Ve=(ie.start+ie.count)*I;xe!==null&&(ce=Math.max(ce,xe.start*I),Ve=Math.min(Ve,(xe.start+xe.count)*I)),D!==null?(ce=Math.max(ce,0),Ve=Math.min(Ve,D.count)):ae!=null&&(ce=Math.max(ce,0),Ve=Math.min(Ve,ae.count));const rt=Ve-ce;if(rt<0||rt===1/0)return;Se.setup(V,G,A,X,D);let _t,it=de;if(D!==null&&(_t=fe.get(D),it=Q,it.setIndex(_t)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*gt()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(V.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),g.setLineWidth(Nt*gt()),V.isLineSegments?it.setMode(F.LINES):V.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else V.isPoints?it.setMode(F.POINTS):V.isSprite&&it.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,Ee=V._multiDrawCounts,Kt=V._multiDrawCount,Qe=D?fe.get(D).bytesPerElement:1,jt=W.get(G).currentProgram.getUniforms();for(let hn=0;hn<Kt;hn++)jt.setValue(F,"_gl_DrawID",hn),it.render(Nt[hn]/Qe,Ee[hn])}else if(V.isInstancedMesh)it.renderInstances(ce,rt,V.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Nt);it.renderInstances(ce,rt,Ee)}else it.render(ce,rt)};function Xt(x,B,X){x.transparent===!0&&x.side===Rn&&x.forceSinglePass===!1?(x.side=qt,x.needsUpdate=!0,pi(x,B,X),x.side=Zn,x.needsUpdate=!0,pi(x,B,X),x.side=Rn):pi(x,B,X)}this.compile=function(x,B,X=null){X===null&&(X=x),b=me.get(X),b.init(B),v.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),x!==X&&x.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const G=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let ue=0;ue<xe.length;ue++){const A=xe[ue];Xt(A,X,V),G.add(A)}else Xt(xe,X,V),G.add(xe)}),b=v.pop(),G},this.compileAsync=function(x,B,X=null){const G=this.compile(x,B,X);return new Promise(V=>{function xe(){if(G.forEach(function(ue){W.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){V(x);return}setTimeout(xe,10)}je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Xi=null;function Ht(x){Xi&&Xi(x)}function Ki(){Te.stop()}function $i(){Te.start()}const Te=new Sc;Te.setAnimationLoop(Ht),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(x){Xi=x,L.setAnimationLoop(x),x===null?Te.stop():Te.start()},L.addEventListener("sessionstart",Ki),L.addEventListener("sessionend",$i),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(x,B);const X=L.enabled===!0&&L.isPresenting===!0,G=E!==null&&(te===null||X)&&E.begin(U,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,B,te),b=me.get(x,v.length),b.init(B),b.state.textureUnits=K.getTextureUnits(),v.push(b),pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(pt,vn,B.reversedDepth),qe=this.localClippingEnabled,Ye=Ce.init(this.clippingPlanes,qe),w=_e.get(x,R.length),w.init(),R.push(w),L.enabled===!0&&L.isPresenting===!0){const ue=U.xr.getDepthSensingMesh();ue!==null&&Yi(ue,B,-1/0,U.sortObjects)}Yi(x,B,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(Le,Ue,B.reversedDepth),ht=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,ht&&Fe.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ce.beginShadows();const V=b.state.shadowsArray;if(Pe.render(V,x,B),Ye===!0&&Ce.endShadows(),(G&&E.hasRenderPass())===!1){const ue=w.opaque,A=w.transmissive;if(b.setupLights(),B.isArrayCamera){const D=B.cameras;if(A.length>0)for(let I=0,ie=D.length;I<ie;I++){const ae=D[I];Ss(ue,A,x,ae)}ht&&Fe.render(x);for(let I=0,ie=D.length;I<ie;I++){const ae=D[I];Zi(w,x,ae,ae.viewport)}}else A.length>0&&Ss(ue,A,x,B),ht&&Fe.render(x),Zi(w,x,B)}te!==null&&q===0&&(K.updateMultisampleRenderTarget(te),K.updateRenderTargetMipmap(te)),G&&E.end(U),x.isScene===!0&&x.onAfterRender(U,x,B),Se.resetDefaultState(),se=-1,ve=null,v.pop(),v.length>0?(b=v[v.length-1],K.setTextureUnits(b.state.textureUnits),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,O!==null&&O.renderEnd()};function Yi(x,B,X,G){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||et.intersectsSprite(x)){G&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);const ue=j.update(x),A=x.material;A.visible&&w.push(x,ue,A,X,xt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||et.intersectsObject(x))){const ue=j.update(x),A=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),xt.copy(ue.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(A)){const D=ue.groups;for(let I=0,ie=D.length;I<ie;I++){const ae=D[I],ce=A[ae.materialIndex];ce&&ce.visible&&w.push(x,ue,ce,X,xt.z,ae)}}else A.visible&&w.push(x,ue,A,X,xt.z,null)}}const xe=x.children;for(let ue=0,A=xe.length;ue<A;ue++)Yi(xe[ue],B,X,G)}function Zi(x,B,X,G){const{opaque:V,transmissive:xe,transparent:ue}=x;b.setupLightsView(X),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,X),G&&g.viewport(ye.copy(G)),V.length>0&&jn(V,B,X),xe.length>0&&jn(xe,B,X),ue.length>0&&jn(ue,B,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ss(x,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const ce=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Mn(1,1,{generateMipmaps:!0,type:ce?Dn:Jt,minFilter:li,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const xe=b.state.transmissionRenderTarget[G.id],ue=G.viewport||ye;xe.setSize(ue.z*U.transmissionResolutionScale,ue.w*U.transmissionResolutionScale);const A=U.getRenderTarget(),D=U.getActiveCubeFace(),I=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(ct),$e=U.getClearAlpha(),$e<1&&U.setClearColor(16777215,.5),U.clear(),ht&&Fe.render(X);const ie=U.toneMapping;U.toneMapping=xn;const ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Ye===!0&&Ce.setGlobalState(U.clippingPlanes,G),jn(x,X,G),K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe),je.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ve=0,rt=B.length;Ve<rt;Ve++){const _t=B[Ve],{object:it,geometry:Nt,material:Ee,group:Kt}=_t;if(Ee.side===Rn&&it.layers.test(G.layers)){const Qe=Ee.side;Ee.side=qt,Ee.needsUpdate=!0,ys(it,X,G,Nt,Ee,Kt),Ee.side=Qe,Ee.needsUpdate=!0,ce=!0}}ce===!0&&(K.updateMultisampleRenderTarget(xe),K.updateRenderTargetMipmap(xe))}U.setRenderTarget(A,D,I),U.setClearColor(ct,$e),ae!==void 0&&(G.viewport=ae),U.toneMapping=ie}function jn(x,B,X){const G=B.isScene===!0?B.overrideMaterial:null;for(let V=0,xe=x.length;V<xe;V++){const ue=x[V],{object:A,geometry:D,group:I}=ue;let ie=ue.material;ie.allowOverride===!0&&G!==null&&(ie=G),A.layers.test(X.layers)&&ys(A,B,X,D,ie,I)}}function ys(x,B,X,G,V,xe){x.onBeforeRender(U,B,X,G,V,xe),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(U,B,X,G,x,xe),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,U.renderBufferDirect(X,B,G,V,x,xe),V.side=Zn,V.needsUpdate=!0,U.renderBufferDirect(X,B,G,V,x,xe),V.side=Rn):U.renderBufferDirect(X,B,G,V,x,xe),x.onAfterRender(U,B,X,G,V,xe)}function pi(x,B,X){B.isScene!==!0&&(B=Et);const G=W.get(x),V=b.state.lights,xe=b.state.shadowsArray,ue=V.state.version,A=pe.getParameters(x,V.state,xe,B,X,b.state.lightProbeGridArray),D=pe.getProgramCacheKey(A);let I=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;const ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=le.get(x.envMap||G.environment,ie),G.envMapRotation=G.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,I===void 0&&(x.addEventListener("dispose",oe),I=new Map,G.programs=I);let ae=I.get(D);if(ae!==void 0){if(G.currentProgram===ae&&G.lightsStateVersion===ue)return Qi(x,A),ae}else A.uniforms=pe.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,X,A),x.onBeforeCompile(A,U),ae=pe.acquireProgram(A,D),I.set(D,ae),G.uniforms=A.uniforms;const ce=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ce.clippingPlanes=Ce.uniform),Qi(x,A),G.needsLights=xr(x),G.lightsStateVersion=ue,G.needsLights&&(ce.ambientLightColor.value=V.state.ambient,ce.lightProbe.value=V.state.probe,ce.directionalLights.value=V.state.directional,ce.directionalLightShadows.value=V.state.directionalShadow,ce.spotLights.value=V.state.spot,ce.spotLightShadows.value=V.state.spotShadow,ce.rectAreaLights.value=V.state.rectArea,ce.ltc_1.value=V.state.rectAreaLTC1,ce.ltc_2.value=V.state.rectAreaLTC2,ce.pointLights.value=V.state.point,ce.pointLightShadows.value=V.state.pointShadow,ce.hemisphereLights.value=V.state.hemi,ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ce.spotLightMatrix.value=V.state.spotLightMatrix,ce.spotLightMap.value=V.state.spotLightMap,ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=ae,G.uniformsList=null,ae}function Es(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=sr.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function Qi(x,B){const X=W.get(x);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function bs(x,B){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let X=0,G=x.length;X<G;X++){const V=x[X];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function _r(x,B,X,G,V){B.isScene!==!0&&(B=Et),K.resetTextureUnits();const xe=B.fog,ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,A=te===null?U.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,D=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,I=le.get(G.envMap||ue,D),ie=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ce=!!X.morphAttributes.position,Ve=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let _t=xn;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(_t=U.toneMapping);const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Nt=it!==void 0?it.length:0,Ee=W.get(G),Kt=b.state.lights;if(Ye===!0&&(qe===!0||x!==ve)){const at=x===ve&&G.id===se;Ce.setState(G,x,at)}let Qe=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==A||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==I||G.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ce.numPlanes||Ee.numIntersection!==Ce.numIntersection)||Ee.vertexAlphas!==ie||Ee.vertexTangents!==ae||Ee.morphTargets!==ce||Ee.morphNormals!==Ve||Ee.morphColors!==rt||Ee.toneMapping!==_t||Ee.morphTargetsCount!==Nt||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Ee.__version=G.version);let jt=Ee.currentProgram;Qe===!0&&(jt=pi(G,B,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,jt,Ee));let hn=!1,Un=!1,mi=!1;const st=jt.getUniforms(),vt=Ee.uniforms;if(g.useProgram(jt.program)&&(hn=!0,Un=!0,mi=!0),G.id!==se&&(se=G.id,Un=!0),Ee.needsLights){const at=bs(b.state.lightProbeGridArray,V);Ee.lightProbeGrid!==at&&(Ee.lightProbeGrid=at,Un=!0)}if(hn||ve!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(F,"projectionMatrix",x.projectionMatrix),st.setValue(F,"viewMatrix",x.matrixWorldInverse);const Bn=st.map.cameraPosition;Bn!==void 0&&Bn.setValue(F,mt.setFromMatrixPosition(x.matrixWorld)),y.logarithmicDepthBuffer&&st.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),ve!==x&&(ve=x,Un=!0,mi=!0)}if(Ee.needsLights&&(Kt.state.directionalShadowMap.length>0&&st.setValue(F,"directionalShadowMap",Kt.state.directionalShadowMap,K),Kt.state.spotShadowMap.length>0&&st.setValue(F,"spotShadowMap",Kt.state.spotShadowMap,K),Kt.state.pointShadowMap.length>0&&st.setValue(F,"pointShadowMap",Kt.state.pointShadowMap,K)),V.isSkinnedMesh){st.setOptional(F,V,"bindMatrix"),st.setOptional(F,V,"bindMatrixInverse");const at=V.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),st.setValue(F,"boneTexture",at.boneTexture,K))}V.isBatchedMesh&&(st.setOptional(F,V,"batchingTexture"),st.setValue(F,"batchingTexture",V._matricesTexture,K),st.setOptional(F,V,"batchingIdTexture"),st.setValue(F,"batchingIdTexture",V._indirectTexture,K),st.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(F,"batchingColorTexture",V._colorsTexture,K));const Fn=X.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&N.update(V,X,jt),(Un||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,st.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(vt.envMapIntensity.value=B.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=T0()),Un){if(st.setValue(F,"toneMappingExposure",U.toneMappingExposure),Ee.needsLights&&vr(vt,mi),xe&&G.fog===!0&&we.refreshFogUniforms(vt,xe),we.refreshMaterialUniforms(vt,G,re,he,b.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.lightProbeGrid){const at=Ee.lightProbeGrid;vt.probesSH.value=at.texture,vt.probesMin.value.copy(at.boundingBox.min),vt.probesMax.value.copy(at.boundingBox.max),vt.probesResolution.value.copy(at.resolution)}sr.upload(F,Es(Ee),vt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sr.upload(F,Es(Ee),vt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(F,"center",V.center),st.setValue(F,"modelViewMatrix",V.modelViewMatrix),st.setValue(F,"normalMatrix",V.normalMatrix),st.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const at=G.uniformsGroups;for(let Bn=0,gi=at.length;Bn<gi;Bn++){const Po=at[Bn];ne.update(Po,jt),ne.bind(Po,jt)}}return jt}function vr(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function xr(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,B,X){const G=W.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=B,W.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const X=W.get(x);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(x,B=0,X=0){te=x,Z=B,q=X;let G=null,V=!1,xe=!1;if(x){const A=W.get(x);if(A.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,A.__webglFramebuffer),ye.copy(x.viewport),be.copy(x.scissor),We=x.scissorTest,g.viewport(ye),g.scissor(be),g.setScissorTest(We),se=-1;return}else if(A.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(A.__hasExternalTextures)K.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ie=x.depthTexture;if(A.__boundDepthTexture!==ie){if(ie!==null&&W.has(ie)&&(x.width!==ie.image.width||x.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const D=x.texture;(D.isData3DTexture||D.isDataArrayTexture||D.isCompressedArrayTexture)&&(xe=!0);const I=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(I[B])?G=I[B][X]:G=I[B],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?G=W.get(x).__webglMultisampledFramebuffer:Array.isArray(I)?G=I[X]:G=I,ye.copy(x.viewport),be.copy(x.scissor),We=x.scissorTest}else ye.copy(Re).multiplyScalar(re).floor(),be.copy(ut).multiplyScalar(re).floor(),We=ze;if(X!==0&&(G=Y),g.bindFramebuffer(F.FRAMEBUFFER,G)&&g.drawBuffers(x,G),g.viewport(ye),g.scissor(be),g.setScissorTest(We),V){const A=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,A.__webglTexture,X)}else if(xe){const A=B;for(let D=0;D<x.textures.length;D++){const I=W.get(x.textures[D]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+D,I.__webglTexture,X,A)}}else if(x!==null&&X!==0){const A=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,A.__webglTexture,X)}se=-1},this.readRenderTargetPixels=function(x,B,X,G,V,xe,ue,A=0){if(!(x&&x.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(D=D[ue]),D){g.bindFramebuffer(F.FRAMEBUFFER,D);try{const I=x.textures[A],ie=I.format,ae=I.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+A),!y.textureFormatReadable(ie)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(ae)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-G&&X>=0&&X<=x.height-V&&F.readPixels(B,X,G,V,ge.convert(ie),ge.convert(ae),xe)}finally{const I=te!==null?W.get(te).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,I)}}},this.readRenderTargetPixelsAsync=async function(x,B,X,G,V,xe,ue,A=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(D=D[ue]),D)if(B>=0&&B<=x.width-G&&X>=0&&X<=x.height-V){g.bindFramebuffer(F.FRAMEBUFFER,D);const I=x.textures[A],ie=I.format,ae=I.type;if(x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+A),!y.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(B,X,G,V,ge.convert(ie),ge.convert(ae),0);const Ve=te!==null?W.get(te).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ve);const rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vh(F,rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(ce),F.deleteSync(rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,X=0){const G=Math.pow(2,-X),V=Math.floor(x.image.width*G),xe=Math.floor(x.image.height*G),ue=B!==null?B.x:0,A=B!==null?B.y:0;K.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ue,A,V,xe),g.unbindTexture()},this.copyTextureToTexture=function(x,B,X=null,G=null,V=0,xe=0){let ue,A,D,I,ie,ae,ce,Ve,rt;const _t=x.isCompressedTexture?x.mipmaps[xe]:x.image;if(X!==null)ue=X.max.x-X.min.x,A=X.max.y-X.min.y,D=X.isBox3?X.max.z-X.min.z:1,I=X.min.x,ie=X.min.y,ae=X.isBox3?X.min.z:0;else{const vt=Math.pow(2,-V);ue=Math.floor(_t.width*vt),A=Math.floor(_t.height*vt),x.isDataArrayTexture?D=_t.depth:x.isData3DTexture?D=Math.floor(_t.depth*vt):D=1,I=0,ie=0,ae=0}G!==null?(ce=G.x,Ve=G.y,rt=G.z):(ce=0,Ve=0,rt=0);const it=ge.convert(B.format),Nt=ge.convert(B.type);let Ee;B.isData3DTexture?(K.setTexture3D(B,0),Ee=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Ee=F.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Ee=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Kt=g.getParameter(F.UNPACK_ROW_LENGTH),Qe=g.getParameter(F.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(F.UNPACK_SKIP_PIXELS),hn=g.getParameter(F.UNPACK_SKIP_ROWS),Un=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,I),g.pixelStorei(F.UNPACK_SKIP_ROWS,ie),g.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);const mi=x.isDataArrayTexture||x.isData3DTexture,st=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const vt=W.get(x),Fn=W.get(B),at=W.get(vt.__renderTarget),Bn=W.get(Fn.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,at.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let gi=0;gi<D;gi++)mi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(x).__webglTexture,V,ae+gi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(B).__webglTexture,xe,rt+gi)),F.blitFramebuffer(I,ie,ue,A,ce,Ve,ue,A,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||W.has(x)){const vt=W.get(x),Fn=W.get(B);g.bindFramebuffer(F.READ_FRAMEBUFFER,J),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let at=0;at<D;at++)mi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,V,ae+at):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,V),st?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fn.__webglTexture,xe,rt+at):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fn.__webglTexture,xe),V!==0?F.blitFramebuffer(I,ie,ue,A,ce,Ve,ue,A,F.COLOR_BUFFER_BIT,F.NEAREST):st?F.copyTexSubImage3D(Ee,xe,ce,Ve,rt+at,I,ie,ue,A):F.copyTexSubImage2D(Ee,xe,ce,Ve,I,ie,ue,A);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Ee,xe,ce,Ve,rt,ue,A,D,it,Nt,_t.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,xe,ce,Ve,rt,ue,A,D,it,_t.data):F.texSubImage3D(Ee,xe,ce,Ve,rt,ue,A,D,it,Nt,_t):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,ce,Ve,ue,A,it,Nt,_t.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,ce,Ve,_t.width,_t.height,it,_t.data):F.texSubImage2D(F.TEXTURE_2D,xe,ce,Ve,ue,A,it,Nt,_t);g.pixelStorei(F.UNPACK_ROW_LENGTH,Kt),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(F.UNPACK_SKIP_ROWS,hn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Un),xe===0&&B.generateMipmaps&&F.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Z=0,q=0,te=null,g.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class w0{constructor(e,t){this.container=document.getElementById(e),this.onMoveCallback=t,this.scene=null,this.camera=null,this.renderer=null,this.raycaster=new Ru,this.mouse=new He,this.game=null,this.pieceMeshes=new Map,this.squareMeshes=new Map,this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.isFlipped=!1,this.animatingPieces=[],this.materials={lightSquare:new qn({color:13938487,roughness:.4,metalness:.1}),darkSquare:new qn({color:2040888,roughness:.3,metalness:.2}),whitePiece:new qn({color:15791096,roughness:.2,metalness:.1,roughnessMap:null}),blackPiece:new qn({color:1316386,roughness:.15,metalness:.4}),selectedSquare:new qn({color:10309819,roughness:.3,emissive:10309819,emissiveIntensity:.5}),highlightSquare:new qn({color:3731325,roughness:.3,emissive:3731325,emissiveIntensity:.6}),captureSquare:new qn({color:16730923,roughness:.3,emissive:16730923,emissiveIntensity:.6})},this.init3DScene()}init3DScene(){if(!this.container)return;const e=this.container.clientWidth||560,t=this.container.clientHeight||560;this.scene=new su,this.scene.background=null,this.camera=new Qt(45,e/t,.1,1e3),this.updateCameraPosition(),this.renderer=new A0({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xl,this.container.innerHTML="",this.container.appendChild(this.renderer.domElement);const n=new Au(16777215,.8);this.scene.add(n);const s=new Tu(15984043,1.2);s.position.set(10,20,15),s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,this.scene.add(s);const r=new Eu(10309819,1.5,30);r.position.set(-10,10,-10),this.scene.add(r),this.build3DBoard(),this.renderer.domElement.addEventListener("pointerdown",a=>this.onPointerDown(a)),this.animate()}updateCameraPosition(){this.isFlipped?(this.camera.position.set(0,10,-11),this.camera.lookAt(0,0,0)):(this.camera.position.set(0,10,11),this.camera.lookAt(0,0,0))}build3DBoard(){const s=new gn(10.2,.4,10.2),r=new qn({color:658452,roughness:.5,metalness:.3}),a=new lt(s,r);a.position.y=-.25,a.receiveShadow=!0,this.scene.add(a);for(let o=0;o<8;o++)for(let l=0;l<8;l++){const c=String.fromCharCode(97+l)+(o+1),u=(o+l)%2!==0,d=new gn(1.15,.1,1.15),h=u?this.materials.lightSquare.clone():this.materials.darkSquare.clone(),m=new lt(d,h),_=l*1.2-4.2,M=(7-o)*1.2-4.2;m.position.set(_,0,M),m.receiveShadow=!0,m.userData={squareName:c,isLight:u},this.scene.add(m),this.squareMeshes.set(c,m)}}create3DPieceMesh(e,t){const n=new cs,s=t==="w"?this.materials.whitePiece:this.materials.blackPiece,r=new pn(.4,.45,.15,16),a=new lt(r,s);if(a.position.y=.075,a.castShadow=!0,n.add(a),e==="p"){const o=new pn(.2,.35,.55,16),l=new lt(o,s);l.position.y=.4,l.castShadow=!0,n.add(l);const c=new ds(.22,16,16),u=new lt(c,s);u.position.y=.75,u.castShadow=!0,n.add(u)}else if(e==="r"){const o=new pn(.35,.4,.7,16),l=new lt(o,s);l.position.y=.5,l.castShadow=!0,n.add(l);const c=new pn(.42,.35,.2,8),u=new lt(c,s);u.position.y=.9,u.castShadow=!0,n.add(u)}else if(e==="n"){const o=new pn(.25,.38,.5,16),l=new lt(o,s);l.position.y=.4,l.castShadow=!0,n.add(l);const c=new gn(.35,.45,.5),u=new lt(c,s);u.position.set(0,.75,.05),u.rotation.x=.2,u.castShadow=!0,n.add(u)}else if(e==="b"){const o=new yo(.35,.85,16),l=new lt(o,s);l.position.y=.55,l.castShadow=!0,n.add(l);const c=new ds(.12,12,12),u=new lt(c,s);u.position.y=1.05,u.castShadow=!0,n.add(u)}else if(e==="q"){const o=new pn(.28,.4,.95,16),l=new lt(o,s);l.position.y=.6,l.castShadow=!0,n.add(l);const c=new ds(.3,16,16),u=new lt(c,s);u.position.y=1.15,u.castShadow=!0,n.add(u)}else if(e==="k"){const o=new pn(.32,.42,1.1,16),l=new lt(o,s);l.position.y=.65,l.castShadow=!0,n.add(l);const c=new gn(.12,.35,.12),u=new lt(c,s);u.position.y=1.35,u.castShadow=!0,n.add(u);const d=new gn(.3,.1,.12),h=new lt(d,s);h.position.y=1.35,h.castShadow=!0,n.add(h)}return n}attachGame(e){this.game=e,this.render()}flip(){this.isFlipped=!this.isFlipped,this.updateCameraPosition(),this.render()}setLumosHint(e){this.lumosSquare=e,this.render()}clearSelection(){this.selectedSquare=null,this.legalMoves=[],this.render()}render(){if(!this.game||!this.scene)return;this.pieceMeshes.forEach(s=>this.scene.remove(s)),this.pieceMeshes.clear();const e=this.game.board(),t=1.2,n=8*t/2-t/2;this.squareMeshes.forEach((s,r)=>{const a=s.userData.isLight;if(s.material=a?this.materials.lightSquare:this.materials.darkSquare,this.selectedSquare===r)s.material=this.materials.selectedSquare;else if(this.lumosSquare===r)s.material=this.materials.highlightSquare;else{const o=this.legalMoves.find(l=>l.to===r);o&&(s.material=o.captured?this.materials.captureSquare:this.materials.highlightSquare)}});for(let s=0;s<8;s++)for(let r=0;r<8;r++){const a=e[7-s][r];if(a){const o=String.fromCharCode(97+r)+(s+1),l=this.create3DPieceMesh(a.type,a.color),c=r*t-n,u=(7-s)*t-n;l.position.set(c,0,u),this.selectedSquare===o&&(l.position.y=.35),this.scene.add(l),this.pieceMeshes.set(o,l)}}}onPointerDown(e){if(!this.container||!this.game)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(Array.from(this.squareMeshes.values()));if(n.length>0){const s=n[0].object.userData.squareName;s&&this.handleSquareClick(s)}}handleSquareClick(e){if(ke.init(),this.selectedSquare===e){this.clearSelection();return}const t=this.legalMoves.filter(s=>s.to===e);if(t.length>0){const s=t.find(r=>r.promotion);s&&this.onPromotionRequired?this.onPromotionRequired(s,r=>{const a=t.find(o=>o.promotion===r)||s;this.executeWizardMove(a)}):this.executeWizardMove(t[0]);return}const n=this.game.get(e);n&&n.color===this.game.turn()?(ke.playSpellSelectSound(),this.selectedSquare=e,this.legalMoves=this.game.moves({square:e,verbose:!0}),this.lumosSquare=null,this.render()):this.clearSelection()}executeWizardMove(e){e.captured?ke.playCaptureSound():ke.playMoveSound();const t=this.game.move(e);this.game.inCheck()&&ke.playCheckSound(),this.selectedSquare=null,this.legalMoves=[],this.lumosSquare=null,this.render(),this.onMoveCallback&&this.onMoveCallback(t)}animate(){if(requestAnimationFrame(()=>this.animate()),this.selectedSquare&&this.pieceMeshes.has(this.selectedSquare)){const e=this.pieceMeshes.get(this.selectedSquare);e.rotation.y+=.02}this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}}const Ys={p:100,n:320,b:330,r:500,q:900,k:2e4},C0={p:120,n:310,b:330,r:530,q:950,k:2e4},R0=[0,0,0,0,0,0,0,0,50,50,50,50,50,50,50,50,10,10,20,30,30,20,10,10,5,5,10,25,25,10,5,5,0,0,0,20,20,0,0,0,5,-5,-10,0,0,-10,-5,5,5,10,10,-20,-20,10,10,5,0,0,0,0,0,0,0,0],P0=[0,0,0,0,0,0,0,0,90,90,90,90,90,90,90,90,60,60,60,60,60,60,60,60,35,35,35,35,35,35,35,35,20,20,20,20,20,20,20,20,10,10,10,10,10,10,10,10,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0],Rc=[-50,-40,-30,-30,-30,-30,-40,-50,-40,-20,0,0,0,0,-20,-40,-30,0,10,15,15,10,0,-30,-30,5,15,20,20,15,5,-30,-30,0,15,20,20,15,0,-30,-30,5,10,15,15,10,5,-30,-40,-20,0,5,5,0,-20,-40,-50,-40,-30,-30,-30,-30,-40,-50],Pc=[-20,-10,-10,-10,-10,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,10,10,5,0,-10,-10,5,5,10,10,5,5,-10,-10,0,10,10,10,10,0,-10,-10,10,10,10,10,10,10,-10,-10,5,0,0,0,0,5,-10,-20,-10,-10,-10,-10,-10,-10,-20],Lc=[0,0,0,0,0,0,0,0,5,10,10,10,10,10,10,5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,0,0,0,5,5,0,0,0],Nc=[-20,-10,-10,-5,-5,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,5,5,5,0,-10,-5,0,5,5,5,5,0,-5,0,0,5,5,5,5,0,-5,-10,5,5,5,5,5,0,-10,-10,0,5,0,0,0,0,-10,-20,-10,-10,-5,-5,-10,-10,-20],L0=[-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-20,-30,-30,-40,-40,-30,-30,-20,-10,-20,-20,-20,-20,-20,-20,-10,20,20,0,0,0,0,20,20,20,30,10,0,0,10,30,20],N0=[-50,-40,-30,-20,-20,-30,-40,-50,-30,-20,-10,0,0,-10,-20,-30,-30,-10,20,30,30,20,-10,-30,-30,-10,30,40,40,30,-10,-30,-30,-10,30,40,40,30,-10,-30,-30,-10,20,30,30,20,-10,-30,-30,-30,0,0,0,0,-30,-30,-50,-30,-30,-30,-30,-30,-30,-50],D0={p:R0,n:Rc,b:Pc,r:Lc,q:Nc,k:L0},I0={p:P0,n:Rc,b:Pc,r:Lc,q:Nc,k:N0},U0=[0,10,20,35,60,100,160,0],Ni=1e5,Zs=Ni-1e3,as=1e9,Fl=0,Bl=1,Ol=2;class oa extends Error{}const F0="abcdefgh";function kl(i){return F0[i&15]+(8-(i>>4))}function B0(i){try{return typeof i._moves=="function"&&typeof i._makeMove=="function"&&typeof i._undoMove=="function"&&typeof i._computeHash=="function"&&Array.isArray(i._board)}catch{return!1}}const fs=class fs{constructor(){this.transpositionTable=new Map,this.maxTableSize=2e5,this.killers=[],this.history=new Map,this.nodes=0,this.deadline=1/0,this.fastPath=null}clearCache(){this.transpositionTable.size>this.maxTableSize&&this.transpositionTable.clear()}resetSearchState(){this.killers=[],this.history=new Map,this.nodes=0}useFastPath(e){return this.fastPath===null&&(this.fastPath=B0(e)),this.fastPath}genMoves(e){return this.useFastPath(e)?e._moves({legal:!0}):e.moves({verbose:!0})}make(e,t){this.useFastPath(e)?e._makeMove(t):e.move(t)}unmake(e){this.useFastPath(e)?e._undoMove():e.undo()}posKey(e){return this.useFastPath(e)?e._computeHash():e.fen()}moveKey(e){return`${e.from}:${e.to}:${e.promotion||""}`}forEachPiece(e,t){if(this.useFastPath(e)){const n=e._board;for(let s=0;s<128;s++){if(s&136){s+=7;continue}const r=n[s];if(!r)continue;const a=s>>4,o=s&15;t(r,a*8+o,a,o)}}else{const n=e.board();for(let s=0;s<8;s++)for(let r=0;r<8;r++){const a=n[s][r];a&&t(a,s*8+r,s,r)}}}evaluateBoard(e){return e.isCheckmate()?e.turn()==="w"?-Ni:Ni:e.isDraw()||e.isStalemate()||e.isThreefoldRepetition()?0:this.evaluateFast(e)}evaluateFast(e){const t={n:1,b:1,r:2,q:4};let n=0;const s={w:0,b:0},r={w:[0,0,0,0,0,0,0,0],b:[0,0,0,0,0,0,0,0]},a=[],o=[],l={w:null,b:null};this.forEachPiece(e,(h,m,_,M)=>{t[h.type]&&(n+=t[h.type]),o.push({piece:h,idx:m}),h.type==="b"&&s[h.color]++,h.type==="k"&&(l[h.color]={r:_,c:M}),h.type==="p"&&(r[h.color][M]++,a.push({color:h.color,file:M,rank:_}))});const c=Math.min(1,n/24),u=1-c;let d=0;for(const{piece:h,idx:m}of o){const _=h.color==="w"?m:63-m,M=Ys[h.type]+D0[h.type][_],p=C0[h.type]+I0[h.type][_],f=M*c+p*u;d+=h.color==="w"?f:-f}s.w>=2&&(d+=45),s.b>=2&&(d-=45);for(const h of["w","b"]){const m=h==="w"?1:-1,_=r[h];for(let M=0;M<8;M++){if(_[M]===0)continue;_[M]>1&&(d-=m*18*(_[M]-1));const p=M===0||_[M-1]===0,f=M===7||_[M+1]===0;p&&f&&(d-=m*20)}}for(const h of a){const m=h.color==="w"?"b":"w",_=h.color==="w"?6-h.rank:h.rank-1;let M=!1;for(const p of a){if(p.color!==m||Math.abs(p.file-h.file)>1)continue;if(h.color==="w"?p.rank<h.rank:p.rank>h.rank){M=!0;break}}if(!M){const p=Math.max(0,Math.min(7,_)),f=U0[p]*(.5+.5*u);d+=h.color==="w"?f:-f}}if(c>.3){const h=new Set;for(const m of a)h.add(`${m.color}${m.rank*8+m.file}`);for(const m of["w","b"]){const _=l[m];if(!_)continue;const M=_.r+(m==="w"?-1:1);let p=0;if(M<0||M>7)p=3;else for(let T=-1;T<=1;T++){const C=_.c+T;if(C<0||C>7){p++;continue}h.has(`${m}${M*8+C}`)&&p++}const f=(3-p)*15*c;d-=m==="w"?f:-f}}return Math.round(d)}orderMoves(e,t,n){const s=e.map(r=>{let a=0;if(n&&r.from===n.from&&r.to===n.to&&r.promotion===n.promotion&&(a+=1e6),r.captured&&(a+=1e5+Ys[r.captured]*10-Ys[r.piece]),r.promotion&&(a+=9e4+Ys[r.promotion]),!r.captured){const o=this.moveKey(r),l=this.killers[t];l&&(l[0]===o?a+=8e4:l[1]===o&&(a+=7e4)),a+=this.history.get(o)||0}return{move:r,score:a}});return s.sort((r,a)=>a.score-r.score),s.map(r=>r.move)}recordKiller(e,t){if(e.captured)return;const n=this.moveKey(e);this.killers[t]||(this.killers[t]=[null,null]);const s=this.killers[t];s[0]!==n&&(s[1]=s[0],s[0]=n)}recordHistory(e,t){if(e.captured)return;const n=this.moveKey(e);this.history.set(n,(this.history.get(n)||0)+t*t)}checkTime(){if(!(this.nodes&2047)&&Date.now()>this.deadline)throw new oa}quiescence(e,t,n,s,r){this.nodes++,this.checkTime();const a=this.genMoves(e);if(a.length===0)return e.inCheck()?-Ni+r:0;const o=s*this.evaluateFast(e);if(o>=n)return n;if(o>t&&(t=o),o+975<t)return t;const l=a.filter(u=>u.captured||u.promotion),c=this.orderMoves(l,0,null);for(const u of c){this.make(e,u);let d;try{d=-this.quiescence(e,-n,-t,-s,r+1)}finally{this.unmake(e)}if(d>=n)return n;d>t&&(t=d)}return t}search(e,t,n,s,r,a,o=!0){this.nodes++,this.checkTime();const l=n,c=this.posKey(e),u=this.transpositionTable.get(c);let d=null;if(u&&(d=u.move,u.depth>=t)){if(u.flag===Fl)return{score:u.score,move:u.move};if(u.flag===Bl&&u.score>n?n=u.score:u.flag===Ol&&u.score<s&&(s=u.score),n>=s)return{score:u.score,move:u.move}}if(t<=0)return{score:this.quiescence(e,n,s,a,r),move:null};let h=this.genMoves(e);if(h.length===0)return{score:e.inCheck()?-Ni+r:0,move:null};const m=e.inCheck();if(o&&!m&&r>0&&t>=3&&this.hasNonPawnMaterial(e)){const T=2+Math.floor(t/6),C=this.applyNullMove(e);if(C){let S;try{S=-this.search(e,t-1-T,-s,-s+1,r+1,-a,!1).score}finally{C()}if(S>=s)return{score:s,move:null}}}h=this.orderMoves(h,r,d);let _=-as,M=null,p=0;for(const T of h){this.make(e,T);let C;try{p>=4&&t>=3&&!T.captured&&!T.promotion&&!m&&!e.inCheck()?(C=-this.search(e,t-2,-n-1,-n,r+1,-a).score,C>n&&(C=-this.search(e,t-1,-s,-n,r+1,-a).score)):C=-this.search(e,t-1,-s,-n,r+1,-a).score}finally{this.unmake(e)}if(C>_&&(_=C,M=T),C>n&&(n=C),n>=s){this.recordKiller(T,r),this.recordHistory(T,t);break}p++}let f=Fl;return _<=l?f=Ol:_>=s&&(f=Bl),this.transpositionTable.size<this.maxTableSize&&this.transpositionTable.set(c,{depth:t,score:_,flag:f,move:M}),{score:_,move:M}}hasNonPawnMaterial(e){const t=e.turn();let n=!1;return this.forEachPiece(e,s=>{!n&&s.color===t&&s.type!=="p"&&s.type!=="k"&&(n=!0)}),n}applyNullMove(e){if(this.useFastPath(e)){const t=e._turn,n=e._epSquare;return e._turn=t==="w"?"b":"w",e._epSquare=-1,()=>{e._turn=t,e._epSquare=n}}return null}searchWithBudget(e,t,n){this.resetSearchState(),this.clearCache(),this.deadline=Date.now()+n;const s=e.turn()==="w"?1:-1,r=e.fen();let a={score:0,move:null,depth:0};for(let o=1;o<=t;o++){try{const l=this.search(e,o,-as,as,0,s);if(l.move&&(a={score:l.score,move:l.move,depth:o}),Math.abs(l.score)>Zs)break}catch(l){if(l instanceof oa)break;throw l}if(Date.now()>this.deadline)break}return this.deadline=1/0,e.fen()!==r?(console.error("Engine left the board in a modified state; discarding result."),{score:0,move:null,depth:0}):a}toPublicMove(e,t){if(!t)return null;if(typeof t.from=="string")return t;const n=kl(t.from),s=kl(t.to),r=t.promotion||void 0;return e.moves({verbose:!0}).find(a=>a.from===n&&a.to===s&&(a.promotion||void 0)===r)||null}scoreRootMoves(e,t,n){this.resetSearchState(),this.clearCache(),this.deadline=Date.now()+n;const s=e.turn()==="w"?1:-1,r=e.fen();let a=this.orderMoves(this.genMoves(e),0,null),o=[];for(let l=1;l<=t;l++){const c=[];let u=!1;try{for(const d of a){this.make(e,d);let h;try{h=-this.search(e,l-1,-as,as,1,-s).score}finally{this.unmake(e)}c.push({move:d,score:h})}}catch(d){if(!(d instanceof oa))throw d;u=!0}if(u||(o=c.sort((d,h)=>h.score-d.score),a=o.map(d=>d.move),Date.now()>this.deadline))break}return this.deadline=1/0,e.fen()!==r?[]:o}getMoveAtStrength(e,t="ron"){const n=fs.DIFFICULTY[t]||fs.DIFFICULTY.ron,s=e.moves({verbose:!0});if(s.length===0)return null;if(n.slack===0){const d=this.searchWithBudget(e,n.maxDepth,n.timeMs);return this.toPublicMove(e,d.move)||s[0]}const r=this.scoreRootMoves(e,n.maxDepth,n.timeMs);if(r.length===0){const d=this.searchWithBudget(e,n.maxDepth,n.timeMs);return this.toPublicMove(e,d.move)||s[0]}const a=r[0].score;if(Math.abs(a)>Zs)return this.toPublicMove(e,r[0].move)||s[0];const o=r.filter(d=>a-d.score<=n.slack&&Math.abs(d.score)<Zs),l=o.length>0?o:[r[0]],u=Math.random()<n.blunderRate?l[Math.floor(Math.random()*l.length)]:l[Math.floor(Math.random()*Math.min(3,l.length))];return this.toPublicMove(e,u.move)||s[0]}async getBestMoveAsync(e,t="ron"){return new Promise(n=>{setTimeout(()=>{n(this.getMoveAtStrength(e,t))},0)})}getBestMove(e,t="ron"){return this.getMoveAtStrength(e,t)}analyse(e,{depth:t=10,timeMs:n=1e3}={}){const s=this.searchWithBudget(e,t,n),r=e.turn()==="w"?s.score:-s.score;return{score:r,move:this.toPublicMove(e,s.move),depth:s.depth,mate:Math.abs(s.score)>Zs?Math.ceil((Ni-Math.abs(s.score))/2)*Math.sign(r):null}}};ot(fs,"DIFFICULTY",{ron:{maxDepth:2,timeMs:400,slack:180,blunderRate:.35},hermione:{maxDepth:4,timeMs:800,slack:90,blunderRate:.2},snape:{maxDepth:7,timeMs:1500,slack:30,blunderRate:.08},dumbledore:{maxDepth:14,timeMs:3e3,slack:0,blunderRate:0}});let ro=fs;const rr=new ro,Li={mate1:[{id:"m1_01",title:"Scholar's Magic Strike",category:"Mate in 1",fen:"r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",solution:["Qxf7#"],solutionVerbose:[{from:"h5",to:"f7"}],description:"Find the lethal Queen spell strike for instant Checkmate!"},{id:"m1_02",title:"Back-Rank Smite",category:"Mate in 1",fen:"3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",solution:["Rxd8#"],solutionVerbose:[{from:"d1",to:"d8"}],description:"Punish Black's undefended back rank with a Rook spell barrage."},{id:"m1_03",title:"Smothered Knight Spell",category:"Mate in 1",fen:"6rk/6pp/8/4N3/8/8/8/K7 w - - 0 1",solution:["Nf7#"],solutionVerbose:[{from:"e5",to:"f7"}],description:"Trapped King! Deliver the famous Smothered Mate with the Knight."},{id:"m1_04",title:"Queen's Duet",category:"Mate in 1",fen:"r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4",solution:["Qxf7#"],solutionVerbose:[{from:"f3",to:"f7"}],description:"Queen and Bishop combine on the weakest square: f7."}],mate2:[{id:"m2_01",title:"Boden's Mate Blast",category:"Mate in 2",fen:"2kr4/3p4/8/8/2B5/5B2/8/2R1K3 w - - 0 1",solution:["Ba6+"],solutionVerbose:[{from:"c4",to:"a6"}],description:"Criss-crossing Bishops paralyse the enemy King. Start with the check."},{id:"m2_02",title:"Rook & Queen Siege",category:"Mate in 2",fen:"r4rk1/ppp2ppp/8/8/1Q6/8/5PPP/3R2K1 w - - 0 1",solution:["Qxb7"],solutionVerbose:[{from:"b4",to:"b7"}],description:"Infiltrate the enemy defences and set up the mating net."}],fork:[{id:"f_01",title:"Royal Knight Fork",category:"Knight Fork",fen:"2q1k3/8/8/8/4N3/8/8/4K3 w - - 0 1",solution:["Nd6+"],solutionVerbose:[{from:"e4",to:"d6"}],description:"Jump the Knight to d6 to fork King and Queen simultaneously!"}],pin:[{id:"p_01",title:"Absolute Bishop Pin",category:"Pins & Skewers",fen:"rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1",solution:["Bg5"],solutionVerbose:[{from:"c1",to:"g5"}],description:"Pin the f6 Knight against the Queen with the Dark Bishop."}],endgame:[{id:"e_01",title:"Pawn Breakthrough Magic",category:"Endgame",fen:"8/ppp5/8/PPP5/8/8/8/K6k w - - 0 1",solution:["b6"],solutionVerbose:[{from:"b5",to:"b6"}],description:"Sacrifice to force a passed pawn through. Which pawn leads?"},{id:"e_02",title:"March to Coronation",category:"Endgame",fen:"k7/8/8/3P4/8/8/8/4K3 w - - 0 1",solution:["d6"],solutionVerbose:[{from:"d5",to:"d6"}],description:"Race the passed pawn home before the King can catch it!"}]};class O0{constructor(e=null){this.currentCategory="mate1",this.currentIndex=0,this.currentPuzzle=null,this.stats=e||{streak:0,bestStreak:0,score:1200,solved:0,attempted:0,solvedIds:[]},this.attemptedThisView=!1}get streak(){return this.stats.streak}get score(){return this.stats.score}get solvedCount(){return this.stats.solved}get totalPuzzles(){return Object.values(Li).reduce((e,t)=>e+t.length,0)}getCurrentPuzzle(){const e=Li[this.currentCategory]||Li.mate1;return this.currentPuzzle=e[this.currentIndex%e.length],this.currentPuzzle}setCategory(e){return Li[e]&&(this.currentCategory=e,this.currentIndex=0,this.attemptedThisView=!1),this.getCurrentPuzzle()}nextPuzzle(){const e=Li[this.currentCategory]||Li.mate1;return this.currentIndex=(this.currentIndex+1)%e.length,this.attemptedThisView=!1,this.getCurrentPuzzle()}isSolved(e){return this.stats.solvedIds.includes(e)}verifyMove(e){if(!this.currentPuzzle)return{correct:!1,alreadyScored:!1};const t=this.currentPuzzle.solutionVerbose[0],n=e.from===t.from&&e.to===t.to,s=this.attemptedThisView;return this.attemptedThisView=!0,{correct:n,alreadyScored:s}}}const ao={openings:[{id:"op_ruy",title:"Ruy Lopez (Spanish Opening)",description:"The King of Openings! Played by World Champions from Steinitz to Carlsen. Attacks Black's c6 defender to pressure the e5 center pawn.",tips:"Control center, develop with tempo, pin the c6 defender.",variations:[{id:"ruy_closed",name:"Closed Main Line (Morphy Defense)",description:"The cornerstone of modern classical chess theory (10 moves deep).",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn Opening",speech:"1. e4 — King's Pawn Opening. Claims center squares e4 and d5 while freeing lines for your Queen and Bishop.",tip:"Claims center space."},{san:"e5",title:"1... e5 — Open Game Response",speech:"1... e5 — Open Game Response. Black claims equal central space.",tip:"Fights for center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — White develops the King's Knight, putting immediate pressure on Black's e5 pawn.",tip:"Develops with tempo."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Black develops the Knight to defend the e5 pawn.",tip:"Guards e5 pawn."},{san:"Bb5",title:"3. Bb5 — The Ruy Lopez",speech:"3. Bb5 — The Ruy Lopez! White develops the Bishop to pin and pressure the c6 defender.",tip:"Pins c6 defender."},{san:"a6",title:"3... a6 — Morphy Defense",speech:"3... a6 — Morphy Defense! Black immediately questions White's Bishop.",tip:"Questions the Bishop."},{san:"Ba4",title:"4. Ba4 — Retain the Pin",speech:"4. Ba4 — White retreats the Bishop to a4, maintaining the pin along the a4-e8 diagonal.",tip:"Maintains diagonal pin."},{san:"Nf6",title:"4... Nf6 — Counter-Attack e4",speech:"4... Nf6 — Black develops the King's Knight, counter-attacking White's undefended e4 pawn.",tip:"Attacks e4 pawn."},{san:"O-O",title:"5. O-O — Kingside Castling",speech:"5. O-O — White castles Kingside, placing the King in safety and activating the Rook.",tip:"King safety first."},{san:"Be7",title:"5... Be7 — Solid Development",speech:"5... Be7 — Black prepares Kingside castling with a solid defensive setup.",tip:"Prepares castling."},{san:"Re1",title:"6. Re1 — Protect e4 Pawn",speech:"6. Re1 — White secures the e4 pawn with the Rook, renewing the threat to win Black's e5 pawn.",tip:"Protects e4 pawn."},{san:"b5",title:"6... b5 — Break the Pin",speech:"6... b5 — Black expands on the Queenside, forcing White's Bishop back to b3.",tip:"Forces Bishop retreat."},{san:"Bb3",title:"7. Bb3 — Target f7",speech:"7. Bb3 — White's Bishop re-positions onto the powerful a2-g8 diagonal, aiming at f7.",tip:"Aims at f7 diagonal."},{san:"d6",title:"7... d6 — Solidify Center",speech:"7... d6 — Black solidifies the e5 pawn stronghold and opens the c8 Bishop.",tip:"Solidifies e5."},{san:"c3",title:"8. c3 — Prepare d4 Break",speech:"8. c3 — White prepares the powerful d4 central pawn break while creating a retreat square for the Bishop on c2.",tip:"Prepares d4 strike."}]},{id:"ruy_berlin",name:"Berlin Defense (The Berlin Wall)",description:"Kramnik's impenetrable endgame weapon that dethroned Kasparov in 2000.",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn",speech:"1. e4 — White opens with 1. e4.",tip:"King Pawn opening."},{san:"e5",title:"1... e5 — King's Pawn Response",speech:"1... e5 — Open game response.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — Attacking the e5 pawn.",tip:"Develops Knight."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Defending e5.",tip:"Defends pawn."},{san:"Bb5",title:"3. Bb5 — The Ruy Lopez",speech:"3. Bb5 — Ruy Lopez pin.",tip:"Pressures c6."},{san:"Nf6",title:"3... Nf6 — Berlin Wall Defense",speech:"3... Nf6 — The Berlin Wall! Black ignores the a6 question and directly attacks White's e4 pawn!",tip:"Attacks e4 directly."},{san:"O-O",title:"4. O-O — Castling Gambit",speech:"4. O-O — White castles, offering the e4 pawn for rapid initiative.",tip:"Offers e4 pawn."},{san:"Nxe4",title:"4... Nxe4 — Berlin Accepted",speech:"4... Nxe4 — Black accepts the pawn challenge!",tip:"Captures e4 pawn."},{san:"d4",title:"5. d4 — Central Break",speech:"5. d4 — White strikes open the center to catch Black's Knight.",tip:"Strikes center."},{san:"Nd6",title:"5... Nd6 — Retaliatory Knight Retreat",speech:"5... Nd6 — Black retreats the Knight to d6, attacking White's b5 Bishop!",tip:"Attacks b5 Bishop."}]},{id:"ruy_marshall",name:"Marshall Attack",description:"Frank Marshall's legendary Kingside gambit sacrifice.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center control."},{san:"e5",title:"1... e5",speech:"1... e5 — Symmetric center.",tip:"Center stake."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Attack e5."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bb5",title:"3. Bb5",speech:"3. Bb5 — Ruy Lopez.",tip:"Pin c6."},{san:"a6",title:"3... a6",speech:"3... a6 — Morphy Defense.",tip:"Question Bishop."},{san:"Ba4",title:"4. Ba4",speech:"4. Ba4 — Maintain pin.",tip:"Retreat to a4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Develop Knight.",tip:"Attack e4."},{san:"O-O",title:"5. O-O",speech:"5. O-O — Castling.",tip:"King safety."},{san:"Be7",title:"5... Be7",speech:"5... Be7 — Prepare castling.",tip:"Develop Bishop."},{san:"Re1",title:"6. Re1",speech:"6. Re1 — Secure e4.",tip:"Rook to e1."},{san:"b5",title:"6... b5",speech:"6... b5 — Expand Queenside.",tip:"Push b5."},{san:"Bb3",title:"7. Bb3",speech:"7. Bb3 — Bishop b3.",tip:"Retreat Bishop."},{san:"O-O",title:"7... O-O",speech:"7... O-O — Black castles.",tip:"Castle Kingside."},{san:"c3",title:"8. c3",speech:"8. c3 — Prepare d4.",tip:"Pawn to c3."},{san:"d5",title:"8... d5 — Marshall Gambit Strike!",speech:"8... d5 — The Marshall Attack! Black courageously sacrifices a central pawn for explosive Kingside attacking initiative!",tip:"Sacrifices d5 pawn!"}]}]},{id:"op_italian",title:"Italian Game (Giuoco Piano & Evans)",description:"One of chess's oldest openings! The Light-Squared Bishop targets the vulnerable f7 pawn square.",tips:"Prepares quick Kingside castling while threatening direct attacks on f7.",variations:[{id:"ita_giuoco",name:"Giuoco Piano (Main Line)",description:"The Quiet Game leading to deep tactical and positional maneuvers.",moveSequence:[{san:"e4",title:"1. e4 — King's Pawn",speech:"1. e4 — Opening with the King's Pawn to claim center e4 and d5 squares.",tip:"Controls center."},{san:"e5",title:"1... e5 — Symmetric Response",speech:"1... e5 — Black matches White's central footprint.",tip:"Fights for center."},{san:"Nf3",title:"2. Nf3 — Attack e5",speech:"2. Nf3 — Developing the Knight to f3, putting pressure on e5 and preparing castling.",tip:"Develops piece."},{san:"Nc6",title:"2... Nc6 — Defend e5",speech:"2... Nc6 — Black develops the Knight to defend e5.",tip:"Defends pawn."},{san:"Bc4",title:"3. Bc4 — The Italian Bishop Strike",speech:"3. Bc4 — The Italian Game! White posts the Bishop on c4, aiming straight at the weak f7 square!",tip:"Targets f7 square."},{san:"Bc5",title:"3... Bc5 — Giuoco Piano",speech:"3... Bc5 — The Quiet Game! Black mirrors White's Bishop placement, guarding d4.",tip:"Mirrors Italian Bishop."},{san:"c3",title:"4. c3 — Classical Dual Pawn Center Prep",speech:"4. c3 — White prepares the c3-d4 dual pawn central breakthrough.",tip:"Prepares d4 break."},{san:"Nf6",title:"4... Nf6 — Counter-Strike e4",speech:"4... Nf6 — Black attacks White's e4 pawn before White can build the d4 center.",tip:"Attacks e4 pawn."},{san:"d4",title:"5. d4 — Central Explosion",speech:"5. d4 — White strikes open the center, challenging Black's c5 Bishop!",tip:"Strikes center."},{san:"exd4",title:"5... exd4 — Exchange Pawns",speech:"5... exd4 — Black captures on d4.",tip:"Captures d4 pawn."},{san:"cxd4",title:"6. cxd4 — Dual Pawn Dominance",speech:"6. cxd4 — White re-claims the center with two dominant pawns on e4 and d4!",tip:"Recaptures on d4."},{san:"Bb4+",title:"6... Bb4+ — Check with Tempo",speech:"6... Bb4+ — Black delivers check to disrupt White's center momentum!",tip:"Check with tempo."}]},{id:"ita_evans",name:"Evans Gambit",description:"Romantic 19th-century gambit of Captain William Evans.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center control."},{san:"e5",title:"1... e5",speech:"1... e5 — Open game.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Develop Knight."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bc4",title:"3. Bc4",speech:"3. Bc4 — Italian Game.",tip:"Target f7."},{san:"Bc5",title:"3... Bc5",speech:"3... Bc5 — Giuoco Piano.",tip:"Mirror Bishop."},{san:"b4",title:"4. b4 — The Evans Gambit Sacrifice!",speech:"4. b4 — The Evans Gambit! White sacrifices the b4 wing pawn to lure Black's Bishop away, building a massive central pawn force with c3 and d4!",tip:"Sacrifices b4 pawn!"},{san:"Bxb4",title:"4... Bxb4 — Gambit Accepted",speech:"4... Bxb4 — Black accepts the wing pawn.",tip:"Captures b4 pawn."},{san:"c3",title:"5. c3 — Gain Tempo on Bishop",speech:"5. c3 — White attacks the b4 Bishop with tempo to speed up d4.",tip:"Gains tempo on Bishop."},{san:"Ba5",title:"5... Ba5 — Retreat Bishop",speech:"5... Ba5 — Black retreats the Bishop while maintaining control of the e1-a5 diagonal.",tip:"Retreats to a5."}]},{id:"ita_fried_liver",name:"Fried Liver Attack (Two Knights)",description:"Aggressive tactical sacrifice targeting the f7 square.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center pawn."},{san:"e5",title:"1... e5",speech:"1... e5 — Open response.",tip:"Equal center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Attack e5.",tip:"Attack e5."},{san:"Nc6",title:"2... Nc6",speech:"2... Nc6 — Defend e5.",tip:"Defend e5."},{san:"Bc4",title:"3. Bc4",speech:"3. Bc4 — Italian Game.",tip:"Target f7."},{san:"Nf6",title:"3... Nf6 — Two Knights Defense",speech:"3... Nf6 — Two Knights Defense!",tip:"Counter-attack e4."},{san:"Ng5",title:"4. Ng5 — Double Attack on f7!",speech:"4. Ng5 — White launches a double attack on f7 with Knight and Bishop!",tip:"Double attack on f7."},{san:"d5",title:"4... d5 — Block Diagonal",speech:"4... d5 — Black blocks the Bishop's sightline.",tip:"Blocks f7 attack."},{san:"exd5",title:"5. exd5 — Pawn Capture",speech:"5. exd5 — White takes on d5.",tip:"Captures d5."},{san:"Nxd5",title:"5... Nxd5 — The Fatal Trap",speech:"5... Nxd5 — Black recaptures with Knight, stepping directly into the Fried Liver Attack!",tip:"Steps into trap!"},{san:"Nxf7",title:"6. Nxf7 — The Fried Liver Sacrifice!",speech:"6. Nxf7 — Knight Sacrifice! White forks Black's Queen and Rook, forcing Black's King into the open center!",tip:"Forks Queen & Rook!"}]}]},{id:"op_sicilian",title:"Sicilian Defense (Najdorf, Dragon, Alapin)",description:"The ultimate counter-attacking weapon against 1. e4! Black fights for center control asynchronously.",tips:"1. c5 prevents White from building an easy dual-pawn center with d4.",variations:[{id:"sic_najdorf",name:"Najdorf Variation (Main Line)",description:"The preferred weapon of Kasparov and Fischer (10 moves deep).",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"White opens center."},{san:"c5",title:"1... c5 — Sicilian Defense",speech:"1... c5 — Sicilian Defense! Black attacks d4 from the wing.",tip:"Asymmetric center."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Open Sicilian Prep.",tip:"Prepares d4."},{san:"d6",title:"2... d6",speech:"2... d6 — Controls e5.",tip:"Controls e5."},{san:"d4",title:"3. d4 — Central Break",speech:"3. d4 — White breaks open the center.",tip:"Breaks center."},{san:"cxd4",title:"3... cxd4",speech:"3... cxd4 — Black trades wing pawn for center pawn.",tip:"Trades c5 for d4."},{san:"Nxd4",title:"4. Nxd4",speech:"4. Nxd4 — White recaptures with Knight.",tip:"Recaptures on d4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Black attacks White's e4 pawn.",tip:"Attacks e4."},{san:"Nc3",title:"5. Nc3",speech:"5. Nc3 — White defends e4 pawn.",tip:"Defends e4."},{san:"a6",title:"5... a6 — Najdorf Signature Move",speech:"5... a6 — The Najdorf! Guards b5 against enemy Knight and Bishop intrusions while preparing b5 expansion.",tip:"Prevents Nb5/Bb5."},{san:"Bg5",title:"6. Bg5 — Main Line Attack",speech:"6. Bg5 — White pins Black's Nf6 Knight and threatens e5 pressure.",tip:"Pins Nf6."},{san:"e6",title:"6... e6 — Flexible Shield",speech:"6... e6 — Black fortifies d5 and opens path for Dark-Squared Bishop.",tip:"Shields d5."}]},{id:"sic_dragon",name:"Dragon Variation",description:"Fierce sharp tactical battle with opposite-side castling attacks.",moveSequence:[{san:"e4",title:"1. e4",speech:"1. e4 — King's Pawn.",tip:"Center pawn."},{san:"c5",title:"1... c5",speech:"1... c5 — Sicilian Defense.",tip:"Wing attack."},{san:"Nf3",title:"2. Nf3",speech:"2. Nf3 — Develop Knight.",tip:"Prepare d4."},{san:"d6",title:"2... d6",speech:"2... d6 — Pawn d6.",tip:"Control e5."},{san:"d4",title:"3. d4",speech:"3. d4 — Open Sicilian.",tip:"Break d4."},{san:"cxd4",title:"3... cxd4",speech:"3... cxd4 — Pawn trade.",tip:"Trade c5 for d4."},{san:"Nxd4",title:"4. Nxd4",speech:"4. Nxd4 — Recapture Knight.",tip:"Knight d4."},{san:"Nf6",title:"4... Nf6",speech:"4... Nf6 — Attack e4.",tip:"Attack e4."},{san:"Nc3",title:"5. Nc3",speech:"5. Nc3 — Defend e4.",tip:"Defend e4."},{san:"g6",title:"5... g6 — The Dragon Fianchetto!",speech:"5... g6 — The Dragon! Black prepares to fianchetto the Bishop to g7, breathing fire along the h8-a1 long diagonal!",tip:"Prepares Bg7 dragon bishop."},{san:"Be3",title:"6. Be3 — Yugoslav Attack Setup",speech:"6. Be3 — White develops the Bishop, preparing the dreaded Yugoslav Attack!",tip:"Prepares Qd2 & O-O-O."},{san:"Bg7",title:"6... Bg7 — Dragon Bishop",speech:"6... Bg7 — Black completes the Dragon fianchetto!",tip:"Fianchetto Bishop."}]}]},{id:"op_queens_gambit",title:"Queen's Gambit (QGD, QGA, Slav, KID)",description:"White offers a wing pawn (c4) to entice Black to abandon the central d5 stronghold.",tips:"If Black takes 2...dxc4, White claims full center dominance with e4!",variations:[{id:"qg_declined",name:"Queen's Gambit Declined (Orthodox)",description:"The solid bedrock of grandmaster opening strategy.",moveSequence:[{san:"d4",title:"1. d4 — Queen's Pawn",speech:"1. d4 — White opens with the Queen's Pawn, controlling e5 and d4.",tip:"Solid center."},{san:"d5",title:"1... d5 — Solid Counter",speech:"1... d5 — Black claims equal central space.",tip:"Solid center stake."},{san:"c4",title:"2. c4 — Queen's Gambit",speech:"2. c4 — The Queen's Gambit! Offering a wing pawn to control the center.",tip:"Offers c4 pawn."},{san:"e6",title:"2... e6 — Decline the Gambit",speech:"2... e6 — Queen's Gambit Declined! Black solidifies d5 with an indestructible pawn chain.",tip:"Solidifies d5 pawn."},{san:"Nc3",title:"3. Nc3 — Pressure d5",speech:"3. Nc3 — White develops the Knight to pressure d5.",tip:"Pressures d5."},{san:"Nf6",title:"3... Nf6 — Develop Defender",speech:"3... Nf6 — Black develops Knight to defend d5.",tip:"Defends d5."},{san:"Bg5",title:"4. Bg5 — Pin the Knight",speech:"4. Bg5 — White pins Black's Nf6 defender to the Queen.",tip:"Pins Nf6."},{san:"Be7",title:"4... Be7 — Break the Pin",speech:"4... Be7 — Black unpins the Knight and prepares Kingside castling.",tip:"Unpins Knight."}]},{id:"qg_slav",name:"Slav Defense",description:"Solid defense maintaining the c8 Bishop's open diagonal.",moveSequence:[{san:"d4",title:"1. d4",speech:"1. d4 — Queen's Pawn.",tip:"Center control."},{san:"d5",title:"1... d5",speech:"1... d5 — Equal center.",tip:"Center stake."},{san:"c4",title:"2. c4",speech:"2. c4 — Queen's Gambit.",tip:"Gambit offer."},{san:"c6",title:"2... c6 — The Slav Defense",speech:"2... c6 — The Slav Defense! Black solidifies d5 without blocking the c8 Light-Squared Bishop!",tip:"Keeps c8 Bishop open."},{san:"Nf3",title:"3. Nf3",speech:"3. Nf3 — Develop Knight.",tip:"Control e5."},{san:"Nf6",title:"3... Nf6",speech:"3... Nf6 — Develop Knight.",tip:"Defend d5."},{san:"Nc3",title:"4. Nc3",speech:"4. Nc3 — Pressure d5.",tip:"Develop Nc3."},{san:"dxc4",title:"4... dxc4 — Slav Accepted",speech:"4... dxc4 — Black takes the gambit pawn and threatens to hold it with b5!",tip:"Captures c4 pawn."}]}]}],middlegames:[{id:"mg_outpost",title:"Knight Outpost Mastery",description:"An outpost is a square protected by a pawn that cannot be attacked by enemy pawns. Knights thrive here!",tips:"Anchor your Knight on e5 or d5 to dominate enemy territory.",variations:[{id:"outpost_e5",name:"e5 Outpost Infiltration",description:"Dominating central outposts for crushing attacks.",moveSequence:[{san:"Nf3",title:"1. Nf3 — Knight Mobilization",speech:"1. Nf3 — Develop your Knight toward the center.",tip:"Develops Knight."},{san:"d5",title:"1... d5 — Enemy Pawn Stake",speech:"1... d5 — Black stakes a pawn in the center.",tip:"Black claims space."},{san:"Ne5",title:"2. Ne5 — Dominant Outpost Landing",speech:"2. Ne5 — Knight Outpost! Landing the Knight on e5 radiates pressure in 8 directions inside enemy territory!",tip:"Dominates central outpost."}]}]}],endgames:[{id:"eg_opposition",title:"King Opposition & Rule of Square",description:"Opposition means placing your King directly across from the enemy King with one empty square between them.",tips:"The player who does NOT have to move holds Opposition and forces the enemy King back!",variations:[{id:"opp_direct",name:"Direct Opposition Duel",description:"Mastering the fundamental King endgame duel.",startFen:"4k3/8/8/8/8/8/3P4/4K3 w - - 0 1",moveSequence:[{san:"Ke2",title:"1. Ke2 — King Mobilization",speech:"1. Ke2 — In the endgame, the King transforms into an active attacking warrior!",tip:"Activate King."},{san:"Ke7",title:"1... Ke7 — Opposing King Advance",speech:"1... Ke7 — Black marches King toward center.",tip:"Black activates King."},{san:"Ke3",title:"2. Ke3 — Seizing Direct Opposition",speech:"2. Ke3 — Direct Opposition! By placing your King directly opposite with 1 empty square between, you force the enemy King to step aside!",tip:"Seizes Opposition."}]}]}]};class k0{constructor(){this.currentSection="openings",this.currentLesson=null,this.currentVariation=null}getLessons(e){return this.currentSection=e||"openings",ao[this.currentSection]||ao.openings}}const z0=new k0,G0="./engine/stockfish.js",zl={ron:{approxElo:800,skill:0,depth:1},hermione:{approxElo:1400,skill:3,depth:4},snape:{approxElo:1900,skill:12,depth:8},dumbledore:{approxElo:2600,skill:20,depth:14}};class V0{constructor(){this.worker=null,this.ready=!1,this.readyPromise=null,this.queue=Promise.resolve(),this.listeners=new Set,this.failed=!1}async init(){return this.readyPromise?this.readyPromise:(this.readyPromise=new Promise(e=>{let t=!1;const n=s=>{t||(t=!0,this.ready=s,this.failed=!s,e(s))};try{this.worker=new Worker(G0)}catch(s){console.warn("Stockfish worker failed to start:",s),n(!1);return}this.worker.onerror=s=>{console.warn("Stockfish worker error:",s.message||s),n(!1)},this.worker.onmessage=s=>{const r=typeof s.data=="string"?s.data:"";for(const a of this.listeners)a(r);r==="uciok"?(this.send("setoption name Ponder value false"),this.send("isready")):r==="readyok"&&n(!0)},setTimeout(()=>n(!1),1e4),this.send("uci")}),this.readyPromise)}send(e){this.worker&&this.worker.postMessage(e)}run(e,t,n=2e4){const s=()=>new Promise(a=>{const o=[];let l=!1;const c=()=>{this.listeners.delete(u),clearTimeout(d)},u=h=>{o.push(h),!l&&t(h)&&(l=!0,c(),a(o))},d=setTimeout(()=>{l||(l=!0,c(),this.send("stop"),a(o))},n);this.listeners.add(u);for(const h of e)this.send(h)}),r=this.queue.then(s);return this.queue=r.catch(()=>{}),r}setLevel(e){const t=zl[e]||zl.ron;return this.send(`setoption name Skill Level value ${t.skill}`),t}async getBestMove(e,t="ron"){if(!this.ready)return null;const n=this.setLevel(t),s=await this.run([`position fen ${e}`,`go depth ${n.depth}`],r=>r.startsWith("bestmove"),15e3);return Gl(s)}async analyse(e,{depth:t=14,movetime:n=null}={}){if(!this.ready)return null;this.send("setoption name Skill Level value 20");const s=n?`go movetime ${n}`:`go depth ${t}`,r=await this.run([`position fen ${e}`,s],c=>c.startsWith("bestmove"),(n||2e3)+2e4),a=H0(r),o=Gl(r),l=e.split(" ")[1]==="b"?-1:1;return{score:a.cp===null?null:a.cp*l,mate:a.mate===null?null:a.mate*l,depth:a.depth,move:o}}destroy(){this.worker&&(this.worker.terminate(),this.worker=null),this.ready=!1,this.readyPromise=null,this.listeners.clear()}}function Gl(i){for(let e=i.length-1;e>=0;e--){const t=i[e];if(!t.startsWith("bestmove"))continue;const n=t.split(/\s+/)[1];return!n||n==="(none)"?null:{from:n.slice(0,2),to:n.slice(2,4),promotion:n.length>4?n[4]:void 0}}return null}function H0(i){const e={cp:null,mate:null,depth:0};for(const t of i){if(!t.startsWith("info")||!t.includes(" score "))continue;const n=t.match(/\bdepth (\d+)/),s=t.match(/\bscore cp (-?\d+)/),r=t.match(/\bscore mate (-?\d+)/),a=n?parseInt(n[1],10):0;a<e.depth||(e.depth=a,r?(e.mate=parseInt(r[1],10),e.cp=null):s&&(e.cp=parseInt(s[1],10),e.mate=null))}return e}const la=new V0;class W0{constructor(){this.backend="builtin",this.initPromise=null}async init(){return this.initPromise?this.initPromise:(this.initPromise=(async()=>{try{const e=await la.init();this.backend=e?"stockfish":"builtin"}catch(e){console.warn("Falling back to the built-in engine:",e),this.backend="builtin"}return this.backend})(),this.initPromise)}get usingStockfish(){return this.backend==="stockfish"}backendName(){return this.usingStockfish?"Stockfish 10":"Built-in engine"}resolveMove(e,t){return t&&e.moves({verbose:!0}).find(n=>n.from===t.from&&n.to===t.to&&(n.promotion||void 0)===(t.promotion||void 0))||null}async getMove(e,t="ron"){if(e.isGameOver())return null;if(this.usingStockfish)try{const n=await la.getBestMove(e.fen(),t),s=this.resolveMove(e,n);if(s)return s;console.warn("Stockfish returned an unusable move; using built-in engine.")}catch(n){console.warn("Stockfish move failed; using built-in engine:",n)}return rr.getBestMoveAsync(e,t)}async analyse(e,{depth:t=14,movetime:n=null}={}){if(this.usingStockfish)try{const r=await la.analyse(e.fen(),{depth:t,movetime:n});if(r)return{score:r.score,mate:r.mate,depth:r.depth,move:this.resolveMove(e,r.move)}}catch(r){console.warn("Stockfish analysis failed; using built-in engine:",r)}const s=rr.analyse(e,{depth:Math.min(t,8),timeMs:n||600});return{score:s.score,mate:s.mate,depth:s.depth,move:s.move}}quickEval(e){return rr.evaluateBoard(e)}}const an=new W0;function oo(i,e){if(e!=null)return{text:e>0?`M${e}`:`-M${Math.abs(e)}`,fill:e>0?100:0};if(i==null)return{text:"0.0",fill:50};if(Math.abs(i)>5e3)return{text:i>0?"M":"-M",fill:i>0?100:0};const t=i/100,n=t>0?`+${t.toFixed(1)}`:t.toFixed(1),s=50+50*(2/(1+Math.exp(-t/3))-1);return{text:n,fill:Math.max(2,Math.min(98,s))}}class q0{constructor(){this.analysisGame=new Ii,this.historyMoves=[],this.currentStep=-1,this.autoPlayInterval=null}loadGame(e){this.analysisGame=new Ii;const t=e.history({verbose:!0});this.historyMoves=[...t],this.currentStep=-1,this.replayToStep(-1)}loadFEN(e){try{return this.analysisGame.load(e),this.historyMoves=[],this.currentStep=-1,!0}catch{return!1}}loadPGN(e){try{const t=new Ii;return t.loadPgn(e),this.analysisGame=new Ii,this.historyMoves=t.history({verbose:!0}),this.currentStep=-1,this.replayToStep(-1),!0}catch{return!1}}replayToStep(e){this.analysisGame.reset();const t=Math.max(-1,Math.min(e,this.historyMoves.length-1));for(let n=0;n<=t;n++){const s=this.historyMoves[n];if(s)try{typeof s=="string"?this.analysisGame.move(s):s.san?this.analysisGame.move(s.san):s.from&&s.to&&this.analysisGame.move({from:s.from,to:s.to,promotion:s.promotion||"q"})}catch(r){console.warn("Replay step move error:",r)}}return this.currentStep=t,this.analysisGame}stepFirst(){return this.replayToStep(-1)}stepPrev(){return this.replayToStep(this.currentStep-1)}stepNext(){return this.replayToStep(this.currentStep+1)}stepLast(){return this.replayToStep(this.historyMoves.length-1)}toggleAutoplay(e){return this.autoPlayInterval?(clearInterval(this.autoPlayInterval),this.autoPlayInterval=null,!1):(this.autoPlayInterval=setInterval(()=>{if(this.currentStep<this.historyMoves.length-1){const t=this.stepNext();e&&e(t)}else clearInterval(this.autoPlayInterval),this.autoPlayInterval=null,e&&e(this.analysisGame,!0)},1e3),!0)}evaluateCurrentPosition(e=this.analysisGame){const t=rr.evaluateBoard(e),{text:n,fill:s}=oo(t,null);let r="Neutral Position";Math.abs(t)>400?r=t>0?"White Decisive Advantage 💎":"Black Decisive Advantage 💎":Math.abs(t)>150?r=t>0?"White Advantage 🎯":"Black Advantage 🎯":r="Equal Position ⚖️";let a=`Start (0 / ${this.historyMoves.length})`;if(this.currentStep>=0&&this.historyMoves[this.currentStep]){const o=this.historyMoves[this.currentStep];a=`Move ${this.currentStep+1}/${this.historyMoves.length} (${o.san})`}return{score:t,evalText:n,fillPercentage:s,classification:r,stepText:a}}}const kt=new q0,Oi=[{id:"best",label:"Best",icon:"★",maxLoss:10},{id:"excellent",label:"Excellent",icon:"◆",maxLoss:25},{id:"good",label:"Good",icon:"●",maxLoss:50},{id:"inaccuracy",label:"Inaccuracy",icon:"?!",maxLoss:100},{id:"mistake",label:"Mistake",icon:"?",maxLoss:250},{id:"blunder",label:"Blunder",icon:"??",maxLoss:1/0}];function X0(i){return Oi.find(e=>i<=e.maxLoss)||Oi[Oi.length-1]}function Vl(i,e){return e!=null?e>0?1e4-e*100:-1e4-e*100:i??0}function K0(i){return Math.max(0,Math.min(100,103*Math.exp(-.004*i)-3))}class $0{constructor(){this.running=!1,this.cancelled=!1}cancel(){this.cancelled=!0}async run(e,{depth:t=12,onProgress:n=null}={}){if(this.running)return null;this.running=!0,this.cancelled=!1;try{const s=e.history({verbose:!0}),r=s.length;if(r===0)return null;const a=new Ii,o=[];let l=await an.analyse(a,{depth:t}),c=Vl(l.score,l.mate);const u=[{ply:0,cp:c}];for(let d=0;d<r;d++){if(this.cancelled)return null;const h=s[d],m=h.color,_=l.move;a.move(h.san);const M=await an.analyse(a,{depth:t}),p=Vl(M.score,M.mate),f=m==="w"?Math.max(0,c-p):Math.max(0,p-c),T=_===null,C=_&&_.from===h.from&&_.to===h.to,S=T?Oi[0]:X0(C?0:f);o.push({ply:d+1,moveNumber:Math.floor(d/2)+1,color:m,san:h.san,from:h.from,to:h.to,loss:C?0:Math.round(f),classification:S.id,label:S.label,icon:S.icon,evalAfter:p,bestSan:_?_.san:null,playedBest:!!C}),u.push({ply:d+1,cp:p}),l=M,c=p,n&&n({done:d+1,total:r})}return this.summarise(o,u)}finally{this.running=!1}}summarise(e,t){const n={};for(const r of["w","b"]){const a=e.filter(d=>d.color===r),o={};for(const d of Oi)o[d.id]=0;for(const d of a)o[d.classification]++;const l=a.length===0?100:a.reduce((d,h)=>d+K0(h.loss),0)/a.length,c=1e3,u=a.length===0?0:a.reduce((d,h)=>d+Math.min(h.loss,c),0)/a.length;n[r]={counts:o,accuracy:Math.round(l*10)/10,averageLoss:Math.round(u),moveCount:a.length}}const s=e.reduce((r,a)=>r===null||a.loss>r.loss?a:r,null);return{moves:e,evalCurve:t,white:n.w,black:n.b,worst:s}}}const Y0=new $0;class Z0{constructor({initialMs:e=5*60*1e3,incrementMs:t=0}={}){this.initialMs=e,this.incrementMs=t,this.onTick=null,this.onFlag=null,this.reset()}reset(e={}){e.initialMs!==void 0&&(this.initialMs=e.initialMs),e.incrementMs!==void 0&&(this.incrementMs=e.incrementMs),this.remaining={w:this.initialMs,b:this.initialMs},this.activeColor=null,this.startedAt=null,this.flagged=null,this.stopTicking()}get enabled(){return this.initialMs>0}start(e){!this.enabled||this.flagged||(this.bank(),this.activeColor=e,this.startedAt=Date.now(),this.startTicking())}press(e){!this.enabled||this.flagged||(this.bank(),this.remaining[e]+=this.incrementMs,this.activeColor=e==="w"?"b":"w",this.startedAt=Date.now(),this.startTicking())}pause(){this.enabled&&(this.bank(),this.activeColor=null,this.startedAt=null,this.stopTicking())}bank(){if(this.activeColor&&this.startedAt!==null){const e=Date.now()-this.startedAt;this.remaining[this.activeColor]=Math.max(0,this.remaining[this.activeColor]-e)}this.startedAt=null}timeFor(e){let t=this.remaining[e];return this.activeColor===e&&this.startedAt!==null&&(t=Math.max(0,t-(Date.now()-this.startedAt))),t}startTicking(){this.stopTicking(),this.enabled&&(this.timer=setInterval(()=>{if(this.activeColor&&this.timeFor(this.activeColor)<=0){const e=this.activeColor;this.remaining[e]=0,this.flagged=e,this.pause(),this.onFlag&&this.onFlag(e);return}this.onTick&&this.onTick()},100))}stopTicking(){this.timer&&(clearInterval(this.timer),this.timer=null)}}function Hl(i){const e=Math.max(0,i)/1e3;if(e<10)return e.toFixed(1);const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,"0")}`}const ca=[{id:"unlimited",label:"Unlimited",initialMs:0,incrementMs:0},{id:"blitz3",label:"3 + 2",initialMs:3*6e4,incrementMs:2e3},{id:"blitz5",label:"5 + 0",initialMs:5*6e4,incrementMs:0},{id:"rapid10",label:"10 + 5",initialMs:10*6e4,incrementMs:5e3}],Q0=[{eco:"B00",name:"King's Pawn Opening",moves:["e4"]},{eco:"C20",name:"Open Game",moves:["e4","e5"]},{eco:"C20",name:"Bishop's Opening",moves:["e4","e5","Bc4"]},{eco:"C25",name:"Vienna Game",moves:["e4","e5","Nc3"]},{eco:"C27",name:"Vienna Game, Frankenstein-Dracula",moves:["e4","e5","Nc3","Nf6","Bc4","Nxe4"]},{eco:"C30",name:"King's Gambit",moves:["e4","e5","f4"]},{eco:"C33",name:"King's Gambit Accepted",moves:["e4","e5","f4","exf4"]},{eco:"C30",name:"King's Gambit Declined",moves:["e4","e5","f4","Bc5"]},{eco:"C36",name:"King's Gambit, Falkbeer Counter-Gambit",moves:["e4","e5","f4","d5"]},{eco:"C40",name:"Latvian Gambit",moves:["e4","e5","Nf3","f5"]},{eco:"C41",name:"Philidor Defense",moves:["e4","e5","Nf3","d6"]},{eco:"C42",name:"Petrov's Defense",moves:["e4","e5","Nf3","Nf6"]},{eco:"C44",name:"Scotch Game",moves:["e4","e5","Nf3","Nc6","d4"]},{eco:"C45",name:"Scotch Game, Main Line",moves:["e4","e5","Nf3","Nc6","d4","exd4","Nxd4"]},{eco:"C44",name:"Ponziani Opening",moves:["e4","e5","Nf3","Nc6","c3"]},{eco:"C44",name:"Scotch Gambit",moves:["e4","e5","Nf3","Nc6","d4","exd4","Bc4"]},{eco:"C46",name:"Three Knights Game",moves:["e4","e5","Nf3","Nc6","Nc3"]},{eco:"C47",name:"Four Knights Game",moves:["e4","e5","Nf3","Nc6","Nc3","Nf6"]},{eco:"C48",name:"Four Knights, Spanish",moves:["e4","e5","Nf3","Nc6","Nc3","Nf6","Bb5"]},{eco:"C50",name:"Italian Game",moves:["e4","e5","Nf3","Nc6","Bc4"]},{eco:"C50",name:"Italian Game, Giuoco Piano",moves:["e4","e5","Nf3","Nc6","Bc4","Bc5"]},{eco:"C53",name:"Giuoco Piano, Main Line",moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","c3"]},{eco:"C51",name:"Evans Gambit",moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","b4"]},{eco:"C55",name:"Two Knights Defense",moves:["e4","e5","Nf3","Nc6","Bc4","Nf6"]},{eco:"C57",name:"Two Knights, Fried Liver Attack",moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Nxd5","Nxf7"]},{eco:"C57",name:"Two Knights, Traxler Counterattack",moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","Bc5"]},{eco:"C60",name:"Ruy Lopez",moves:["e4","e5","Nf3","Nc6","Bb5"]},{eco:"C65",name:"Ruy Lopez, Berlin Defense",moves:["e4","e5","Nf3","Nc6","Bb5","Nf6"]},{eco:"C68",name:"Ruy Lopez, Exchange Variation",moves:["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6"]},{eco:"C70",name:"Ruy Lopez, Morphy Defense",moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4"]},{eco:"C77",name:"Ruy Lopez, Closed",moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7"]},{eco:"C89",name:"Ruy Lopez, Marshall Attack",moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","c3","d5"]},{eco:"C63",name:"Ruy Lopez, Schliemann Defense",moves:["e4","e5","Nf3","Nc6","Bb5","f5"]},{eco:"B20",name:"Sicilian Defense",moves:["e4","c5"]},{eco:"B20",name:"Sicilian, Smith-Morra Gambit",moves:["e4","c5","d4","cxd4","c3"]},{eco:"B21",name:"Sicilian, Grand Prix Attack",moves:["e4","c5","Nc3","Nc6","f4"]},{eco:"B22",name:"Sicilian, Alapin Variation",moves:["e4","c5","c3"]},{eco:"B23",name:"Sicilian, Closed",moves:["e4","c5","Nc3"]},{eco:"B27",name:"Sicilian, Hyper-Accelerated Dragon",moves:["e4","c5","Nf3","g6"]},{eco:"B30",name:"Sicilian, Old Sicilian",moves:["e4","c5","Nf3","Nc6"]},{eco:"B31",name:"Sicilian, Rossolimo Attack",moves:["e4","c5","Nf3","Nc6","Bb5"]},{eco:"B33",name:"Sicilian, Sveshnikov",moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5"]},{eco:"B34",name:"Sicilian, Accelerated Dragon",moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6"]},{eco:"B40",name:"Sicilian, French Variation",moves:["e4","c5","Nf3","e6"]},{eco:"B44",name:"Sicilian, Taimanov",moves:["e4","c5","Nf3","e6","d4","cxd4","Nxd4","Nc6"]},{eco:"B50",name:"Sicilian, Modern Variations",moves:["e4","c5","Nf3","d6"]},{eco:"B54",name:"Sicilian, Open",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4"]},{eco:"B70",name:"Sicilian, Dragon Variation",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6"]},{eco:"B76",name:"Sicilian, Dragon, Yugoslav Attack",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3"]},{eco:"B80",name:"Sicilian, Scheveningen",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","e6"]},{eco:"B90",name:"Sicilian, Najdorf",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"]},{eco:"B97",name:"Sicilian, Najdorf, Poisoned Pawn",moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5","e6","f4","Qb6"]},{eco:"C00",name:"French Defense",moves:["e4","e6"]},{eco:"C02",name:"French, Advance Variation",moves:["e4","e6","d4","d5","e5"]},{eco:"C03",name:"French, Tarrasch Variation",moves:["e4","e6","d4","d5","Nd2"]},{eco:"C10",name:"French, Rubinstein Variation",moves:["e4","e6","d4","d5","Nc3","dxe4"]},{eco:"C11",name:"French, Classical",moves:["e4","e6","d4","d5","Nc3","Nf6"]},{eco:"C15",name:"French, Winawer Variation",moves:["e4","e6","d4","d5","Nc3","Bb4"]},{eco:"B10",name:"Caro-Kann Defense",moves:["e4","c6"]},{eco:"B12",name:"Caro-Kann, Advance Variation",moves:["e4","c6","d4","d5","e5"]},{eco:"B13",name:"Caro-Kann, Exchange Variation",moves:["e4","c6","d4","d5","exd5"]},{eco:"B18",name:"Caro-Kann, Classical",moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5"]},{eco:"B01",name:"Scandinavian Defense",moves:["e4","d5"]},{eco:"B02",name:"Alekhine's Defense",moves:["e4","Nf6"]},{eco:"B07",name:"Pirc Defense",moves:["e4","d6"]},{eco:"B06",name:"Modern Defense",moves:["e4","g6"]},{eco:"B00",name:"Nimzowitsch Defense",moves:["e4","Nc6"]},{eco:"B00",name:"Owen's Defense",moves:["e4","b6"]},{eco:"A40",name:"Queen's Pawn Opening",moves:["d4"]},{eco:"D00",name:"Queen's Pawn Game",moves:["d4","d5"]},{eco:"D00",name:"Blackmar-Diemer Gambit",moves:["d4","d5","e4"]},{eco:"D01",name:"Richter-Veresov Attack",moves:["d4","d5","Nc3","Nf6","Bg5"]},{eco:"D02",name:"London System",moves:["d4","d5","Nf3","Nf6","Bf4"]},{eco:"D06",name:"Queen's Gambit",moves:["d4","d5","c4"]},{eco:"D08",name:"Queen's Gambit, Albin Counter-Gambit",moves:["d4","d5","c4","e5"]},{eco:"D10",name:"Slav Defense",moves:["d4","d5","c4","c6"]},{eco:"D20",name:"Queen's Gambit Accepted",moves:["d4","d5","c4","dxc4"]},{eco:"D30",name:"Queen's Gambit Declined",moves:["d4","d5","c4","e6"]},{eco:"D32",name:"QGD, Tarrasch Defense",moves:["d4","d5","c4","e6","Nc3","c5"]},{eco:"D35",name:"QGD, Exchange Variation",moves:["d4","d5","c4","e6","Nc3","Nf6","cxd5"]},{eco:"D43",name:"Semi-Slav Defense",moves:["d4","d5","c4","e6","Nc3","Nf6","Nf3","c6"]},{eco:"D85",name:"Grünfeld Defense",moves:["d4","Nf6","c4","g6","Nc3","d5"]},{eco:"A45",name:"Indian Defense",moves:["d4","Nf6"]},{eco:"A45",name:"Trompowsky Attack",moves:["d4","Nf6","Bg5"]},{eco:"A46",name:"Indian Game, London System",moves:["d4","Nf6","Nf3","e6","Bf4"]},{eco:"A56",name:"Benoni Defense",moves:["d4","Nf6","c4","c5"]},{eco:"A57",name:"Benko Gambit",moves:["d4","Nf6","c4","c5","d5","b5"]},{eco:"A80",name:"Dutch Defense",moves:["d4","f5"]},{eco:"E00",name:"Catalan Opening",moves:["d4","Nf6","c4","e6","g3"]},{eco:"E12",name:"Queen's Indian Defense",moves:["d4","Nf6","c4","e6","Nf3","b6"]},{eco:"E20",name:"Nimzo-Indian Defense",moves:["d4","Nf6","c4","e6","Nc3","Bb4"]},{eco:"E60",name:"King's Indian Defense",moves:["d4","Nf6","c4","g6"]},{eco:"E97",name:"King's Indian, Classical",moves:["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5"]},{eco:"A10",name:"English Opening",moves:["c4"]},{eco:"A20",name:"English, King's English",moves:["c4","e5"]},{eco:"A30",name:"English, Symmetrical",moves:["c4","c5"]},{eco:"A15",name:"English, Anglo-Indian",moves:["c4","Nf6"]},{eco:"A04",name:"Réti Opening",moves:["Nf3"]},{eco:"A09",name:"Réti Opening, Advance",moves:["Nf3","d5","c4"]},{eco:"A07",name:"King's Indian Attack",moves:["Nf3","d5","g3"]},{eco:"A02",name:"Bird's Opening",moves:["f4"]},{eco:"A03",name:"Bird's Opening, Dutch Variation",moves:["f4","d5"]},{eco:"A00",name:"Nimzo-Larsen Attack",moves:["b3"]},{eco:"A00",name:"Polish (Sokolsky) Opening",moves:["b4"]},{eco:"A00",name:"Grob's Attack",moves:["g4"]},{eco:"A00",name:"Van't Kruijs Opening",moves:["e3"]}];function J0(){const i=[];for(const e of Object.values(ao))if(Array.isArray(e))for(const t of e){const n=t.variations&&t.variations.length?t.variations:[{name:null,moveSequence:t.moveSequence}];for(const s of n){const r=s.moveSequence;if(!Array.isArray(r)||r.length===0||s.startFen||t.startFen)continue;const a=r.map(o=>o.san).filter(Boolean);a.length!==0&&i.push({eco:null,name:s.name?`${t.title} — ${s.name}`:t.title,moves:a})}}return i}const j0=[...J0(),...Q0].sort((i,e)=>e.moves.length-i.moves.length),eg=24;function ha(i){if(!i||i.length===0)return null;const e=i.slice(0,eg);for(const t of j0){if(t.moves.length>e.length)continue;let n=!0;for(let s=0;s<t.moves.length;s++)if(t.moves[s]!==e[s]){n=!1;break}if(n)return{name:t.name,eco:t.eco||null,plies:t.moves.length,label:t.eco?`${t.eco} · ${t.name}`:t.name}}return null}const Dc="wizard-chess-v1",Di={puzzles:{streak:0,bestStreak:0,score:1200,solved:0,attempted:0,solvedIds:[]},record:{wins:0,losses:0,draws:0},preferences:{timeControl:"unlimited",voiceTutor:!1}};function tg(){try{const i=localStorage.getItem(Dc);if(!i)return structuredClone(Di);const e=JSON.parse(i);return{puzzles:{...Di.puzzles,...e.puzzles||{}},record:{...Di.record,...e.record||{}},preferences:{...Di.preferences,...e.preferences||{}}}}catch(i){return console.warn("Could not read saved progress; starting fresh.",i),structuredClone(Di)}}function ng(i){try{return localStorage.setItem(Dc,JSON.stringify(i)),!0}catch(e){return console.warn("Could not save progress.",e),!1}}class ig{constructor(){this.state=tg()}get puzzles(){return this.state.puzzles}get record(){return this.state.record}get preferences(){return this.state.preferences}save(){return ng(this.state)}updatePuzzles(e){return Object.assign(this.state.puzzles,e),this.save(),this.state.puzzles}recordPuzzleResult(e,t){const n=this.state.puzzles;return n.attempted++,t?(n.streak++,n.bestStreak=Math.max(n.bestStreak,n.streak),n.score+=15,e&&!n.solvedIds.includes(e)&&(n.solvedIds.push(e),n.solved++)):(n.streak=0,n.score=Math.max(0,n.score-5)),this.save(),n}recordGameResult(e){return e==="win"?this.state.record.wins++:e==="loss"?this.state.record.losses++:this.state.record.draws++,this.save(),this.state.record}setPreference(e,t){this.state.preferences[e]=t,this.save()}reset(){this.state=structuredClone(Di),this.save()}}const fn=new ig;function sg(i,{white:e="Player",black:t="Wizard AI",result:n=null,opening:s=null}={}){const r=new Date,a=`${r.getFullYear()}.${String(r.getMonth()+1).padStart(2,"0")}.${String(r.getDate()).padStart(2,"0")}`;let o=n;return o||(i.isCheckmate()?o=i.turn()==="w"?"0-1":"1-0":i.isGameOver()?o="1/2-1/2":o="*"),i.header("Event","Wizard's Chess Duel","Site","Wizard's Chess Academy","Date",a,"Round","1","White",e,"Black",t,"Result",o),s&&i.header("Opening",s),i.pgn()}function rg(i,e="wizard-chess-game.pgn"){try{const t=new Blob([i],{type:"application/x-chess-pgn"}),n=URL.createObjectURL(t),s=document.createElement("a");return s.href=n,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(n),1e3),!0}catch(t){return console.warn("PGN download failed.",t),!1}}class ag{constructor(){this.game=new Ii,this.currentMode="play",this.is3D=!1,this.aiOpponent="ron",this.isAiThinking=!1,this.capturedPieces={w:[],b:[]},this.twoPlayerMode=!1,this.reviewData=null,this.playerColor="w",this.puzzles=new O0(fn.puzzles),this.clock=new Z0({initialMs:0,incrementMs:0}),this.clock.onTick=()=>this.updateClockUI(),this.clock.onFlag=e=>this.onFlagFall(e),this.init()}init(){us.init("magic-canvas"),this.board2d=new lh("chess-board",e=>this.onPlayerMove(e)),this.board3d=null,this.activeBoard=this.board2d,this.activeBoard.attachGame(this.game),this.bindNavigation(),this.bindHeaderControls(),this.bindBoardControls(),this.bindAiSelector(),this.bindPuzzles(),this.bindAcademy(),this.bindAnalysis(),this.bindPromotionModal(),this.bindGameOverModal(),this.bindGameFeatures(),this.updateEvaluationBar(),this.updateMoveHistoryUI(),this.updateTurnBanner(),this.updatePuzzleStats(),this.updateRecordUI(),this.updateClockUI(),this.initEngine()}async initEngine(){const e=await an.init(),t=document.getElementById("engine-badge");return t&&(t.textContent=an.usingStockfish?"⚡ Stockfish":"📜 Built-in engine",t.title=an.usingStockfish?"Stockfish 10 running in a Web Worker":"Stockfish unavailable — using the built-in engine",t.classList.toggle("fallback",!an.usingStockfish)),e}bindPromotionModal(){const e=document.getElementById("promotion-modal"),t=document.querySelectorAll(".promo-btn"),n=(s,r)=>{e.classList.remove("hidden");const a=o=>{const l=o.currentTarget.dataset.piece||"q";e.classList.add("hidden"),t.forEach(c=>c.removeEventListener("click",a)),r(l)};t.forEach(o=>o.addEventListener("click",a))};this.promotionHandler=n,this.board2d.onPromotionRequired=n,this.board3d&&(this.board3d.onPromotionRequired=n)}bindGameOverModal(){var t,n;const e=document.getElementById("game-over-modal");(t=document.getElementById("modal-restart-btn"))==null||t.addEventListener("click",()=>{e.classList.add("hidden"),this.resetGame()}),(n=document.getElementById("modal-analyze-btn"))==null||n.addEventListener("click",()=>{e.classList.add("hidden");const s=document.querySelector('.nav-btn[data-tab="analysis"]');s&&s.click(),this.runGameReview()})}showGameOverCelebration(e,t=""){const n=document.getElementById("game-over-modal"),s=document.getElementById("modal-badge"),r=document.getElementById("modal-title"),a=document.getElementById("modal-message"),o=document.getElementById("modal-stat-moves"),l=document.getElementById("modal-stat-opponent");n&&(this.clock.pause(),fn.recordGameResult(e),this.updateRecordUI(),e==="win"?(s.className="celebration-badge victory",s.textContent="🏆 VICTORY!",r.textContent="Checkmate Victory!",a.textContent=t||`You have defeated ${this.getAiName(this.aiOpponent)} with spellbinding precision!`,ke.playVictoryFanfare(),us.createConfettiBurst()):e==="draw"?(s.className="celebration-badge draw",s.textContent="🤝 DRAW",r.textContent="An Honourable Draw",a.textContent=t||"Neither wizard could break the other's defences."):(s.className="celebration-badge defeat",s.textContent="💀 DEFEAT",r.textContent="Wizard Duel Lost!",a.textContent=t||`${this.getAiName(this.aiOpponent)} claimed victory this time. Re-arm your strategy and try again!`,ke.playDefeatSound()),o&&(o.textContent=this.game.history().length),l&&(l.textContent=this.twoPlayerMode?"Local opponent":this.getAiName(this.aiOpponent)),n.classList.remove("hidden"))}bindNavigation(){const e=document.querySelectorAll(".nav-btn");e.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.tab;if(!n)return;e.forEach(r=>r.classList.remove("active")),t.classList.add("active"),document.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active"));const s=document.getElementById(`tab-${n}`);s&&s.classList.add("active"),this.currentMode=n,this.onTabSwitched(n)})})}onTabSwitched(e){e!=="play"&&this.clock.pause(),e==="puzzles"?this.loadCurrentPuzzle():e==="academy"?this.renderAcademySection("openings"):e==="analysis"?(kt.loadGame(this.game),this.activeBoard.attachGame(kt.analysisGame),this.runAnalysisUpdate()):e==="play"&&(this.activeBoard.attachGame(this.game),this.updateEvaluationBar(),this.updateTurnBanner(),!this.game.isGameOver()&&this.game.history().length>0&&this.clock.start(this.game.turn()))}bindHeaderControls(){const e=document.getElementById("sound-toggle"),t=document.getElementById("sound-icon");e==null||e.addEventListener("click",()=>{const s=ke.toggleMute();t.textContent=s?"🔇":"🔊"});const n=document.getElementById("theme-toggle");n==null||n.addEventListener("click",()=>{ke.playSpellSelectSound(),document.body.classList.toggle("dark-aura")})}bindBoardControls(){var t,n,s;const e=document.getElementById("view-mode-btn");e==null||e.addEventListener("click",()=>{ke.playSpellSelectSound(),this.is3D=!this.is3D,e.textContent=this.is3D?"🧊 3D Mode (Active)":"📜 Carved Stone Board";const r=document.getElementById("chess-board");this.is3D?(this.board3d||(this.board3d=new w0("chess-board",a=>this.onPlayerMove(a)),this.board3d.onPromotionRequired=this.promotionHandler),this.activeBoard=this.board3d,r==null||r.classList.add("mode-3d")):(this.activeBoard=this.board2d,r==null||r.classList.remove("mode-3d")),this.activeBoard.attachGame(this.game)}),(t=document.getElementById("flip-board-btn"))==null||t.addEventListener("click",()=>{ke.playSpellSelectSound(),this.activeBoard.flip()}),(n=document.getElementById("reset-board-btn"))==null||n.addEventListener("click",()=>{ke.playSpellSelectSound(),this.resetGame()}),(s=document.getElementById("hint-btn"))==null||s.addEventListener("click",()=>{this.castLumosHint()})}bindGameFeatures(){var n,s,r;const e=document.getElementById("time-control-select");e&&(e.innerHTML=ca.map(a=>`<option value="${a.id}">${a.label}</option>`).join(""),e.value=fn.preferences.timeControl||"unlimited",this.applyTimeControl(e.value,!1),e.addEventListener("change",a=>{ke.playSpellSelectSound(),fn.setPreference("timeControl",a.target.value),this.applyTimeControl(a.target.value,!0)})),(n=document.getElementById("undo-btn"))==null||n.addEventListener("click",()=>this.undoMove()),(s=document.getElementById("export-pgn-btn"))==null||s.addEventListener("click",()=>{ke.playSpellSelectSound();const a=ha(this.game.history()),o=sg(this.game,{white:this.twoPlayerMode?"White":"Player",black:this.twoPlayerMode?"Black":this.getAiName(this.aiOpponent),opening:a?a.name:null}),l=new Date().toISOString().slice(0,10);rg(o,`wizard-chess-${l}.pgn`),this.updateCommentary("Duel transcript saved as a PGN file.")});const t=document.getElementById("two-player-btn");t==null||t.addEventListener("click",()=>{var a;ke.playSpellSelectSound(),this.twoPlayerMode=!this.twoPlayerMode,t.classList.toggle("active",this.twoPlayerMode),t.textContent=this.twoPlayerMode?"👥 Two Players (On)":"👤 vs Wizard AI",(a=document.getElementById("opponent-selector"))==null||a.classList.toggle("disabled",this.twoPlayerMode),this.updateCommentary(this.twoPlayerMode?"Local duel: both wizards share this board.":`You are now dueling ${this.getAiName(this.aiOpponent)}!`),this.resetGame()}),(r=document.getElementById("review-btn"))==null||r.addEventListener("click",()=>this.runGameReview())}applyTimeControl(e,t){var s;const n=ca.find(r=>r.id===e)||ca[0];this.clock.reset({initialMs:n.initialMs,incrementMs:n.incrementMs}),(s=document.getElementById("clock-panel"))==null||s.classList.toggle("hidden",!this.clock.enabled),this.updateClockUI(),t&&this.resetGame()}onFlagFall(e){this.updateClockUI();const t=this.twoPlayerMode?!1:e===this.playerColor,n=e==="w"?"White":"Black";this.twoPlayerMode?this.showGameOverCelebration("draw",`${n} ran out of time — the other side wins!`):this.showGameOverCelebration(t?"loss":"win",`${n} ran out of time!`)}updateClockUI(){if(!document.getElementById("clock-panel")||!this.clock.enabled)return;const t=document.getElementById("clock-white"),n=document.getElementById("clock-black");t&&(t.textContent=Hl(this.clock.timeFor("w")),t.classList.toggle("running",this.clock.activeColor==="w"),t.classList.toggle("low",this.clock.timeFor("w")<3e4)),n&&(n.textContent=Hl(this.clock.timeFor("b")),n.classList.toggle("running",this.clock.activeColor==="b"),n.classList.toggle("low",this.clock.timeFor("b")<3e4))}undoMove(){if(this.isAiThinking||this.currentMode!=="play"||this.game.history().length===0)return;ke.playSpellSelectSound();const e=!this.twoPlayerMode&&this.game.history().length>=2?2:1;for(let t=0;t<e;t++){const n=this.game.undo();if(!n)break;if(n.captured){const s=n.color==="w"?"b":"w",r=this.capturedPieces[s],a=r.lastIndexOf(n.captured);a!==-1&&r.splice(a,1)}}this.activeBoard.attachGame(this.game),this.updateMoveHistoryUI(),this.updateEvaluationBar(),this.updateTurnBanner(),this.updateOpeningUI(),this.updateCommentary("Move rewound. The board remembers a different past.")}resetGame(){this.game.reset(),this.capturedPieces={w:[],b:[]},this.isAiThinking=!1,this.reviewData=null,this.clock.reset(),this.activeBoard.attachGame(this.game),this.updateEvaluationBar(),this.updateMoveHistoryUI(),this.updateTurnBanner(),this.updateClockUI(),this.updateOpeningUI(),this.updateCommentary("New game started! Choose your opponent and cast your first move.")}async castLumosHint(){if(this.game.isGameOver())return;if(ke.playSpellSelectSound(),this.currentMode==="puzzles"){const t=this.puzzles.getCurrentPuzzle();t&&t.solutionVerbose.length>0&&this.activeBoard.setLumosHint(t.solutionVerbose[0].from);return}this.updateCommentary("Casting Lumos — consulting the engine...");const e=await an.analyse(this.game,{depth:14});e&&e.move?(this.activeBoard.setLumosHint(e.move.from),this.updateCommentary(`Lumos reveals a promising move from ${e.move.from}.`)):this.updateCommentary("Lumos flickers — no clear move found.")}bindAiSelector(){const e=document.querySelectorAll(".opponent-card");e.forEach(t=>{t.addEventListener("click",()=>{this.twoPlayerMode||(e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.aiOpponent=t.dataset.ai||"ron",ke.playSpellSelectSound(),this.updateCommentary(`You are now dueling ${this.getAiName(this.aiOpponent,!0)}!`))})})}onPlayerMove(e){if(e){if(e.captured){const t=e.color==="w"?"b":"w";this.capturedPieces[t].push(e.captured)}if(this.updateMoveHistoryUI(),this.updateEvaluationBar(),this.updateTurnBanner(),this.updateOpeningUI(),this.currentMode==="puzzles"){this.handlePuzzleMove(e);return}this.clock.press(e.color),this.updateClockUI(),!this.checkGameEnd()&&this.currentMode==="play"&&!this.twoPlayerMode&&this.game.turn()!==this.playerColor&&!this.isAiThinking&&this.triggerAiMove()}}checkGameEnd(){if(!this.game.isGameOver())return!1;if(this.clock.pause(),this.game.isCheckmate()){const t=this.game.turn();if(this.twoPlayerMode){const n=t==="w"?"Black":"White";this.updateCommentary(`⚡ CHECKMATE! ${n} wins the duel!`),this.showGameOverCelebration("win",`${n} delivers checkmate!`)}else t===this.playerColor?(this.updateCommentary(`⚡ CHECKMATE! ${this.getAiName(this.aiOpponent)} wins the duel!`),this.showGameOverCelebration("loss")):(this.updateCommentary("⚡ CHECKMATE! Victory has been claimed on the enchanted board!"),this.showGameOverCelebration("win"));return!0}let e="The duel ends in an honourable draw.";return this.game.isStalemate()?e="Stalemate! No legal moves remain.":this.game.isThreefoldRepetition()?e="Threefold repetition — the position keeps returning.":this.game.isInsufficientMaterial()?e="Neither side has enough material to mate.":this.game.isDraw()&&(e="Fifty moves without a capture or pawn move."),this.updateCommentary(e),this.showGameOverCelebration("draw",e),!0}async triggerAiMove(){this.isAiThinking=!0,this.setThinking(!0),this.updateCommentary(`${this.getAiName(this.aiOpponent)} is contemplating their spell move...`);try{const e=await an.getMove(this.game,this.aiOpponent);e&&!this.game.isGameOver()&&this.activeBoard.executeWizardMove(e)}catch(e){console.error("AI move failed:",e),this.updateCommentary("The engine faltered. Try another move.")}finally{this.isAiThinking=!1,this.setThinking(!1)}this.game.isGameOver()||(this.game.inCheck()?this.updateCommentary(`Check! ${this.getAiName(this.aiOpponent)} puts your King under attack!`):this.updateCommentary(this.getAiQuote(this.aiOpponent)))}setThinking(e){var n;(n=document.getElementById("turn-banner"))==null||n.classList.toggle("thinking",e);const t=document.getElementById("hint-btn");t&&(t.disabled=e)}getAiName(e,t=!1){return(t?{ron:"Ron Weasley",hermione:"Hermione Granger",snape:"Severus Snape",dumbledore:"Albus Dumbledore"}[e]:{ron:"Ron",hermione:"Hermione",snape:"Snape",dumbledore:"Dumbledore"}[e])||"Opponent"}getAiQuote(e){return{ron:"Check this out! Knight tactics incoming!",hermione:"According to grandmaster theory, this square gives superior piece activity.",snape:"Foolish move. Your position begins to crumble.",dumbledore:"A fascinating choice. Let us see how the position unfolds."}[e]||"Your turn to move!"}bindPuzzles(){var t,n;const e=document.querySelectorAll(".puzzle-category-btn");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(r=>r.classList.remove("active")),s.classList.add("active"),this.puzzles.setCategory(s.dataset.category||"mate1"),this.loadCurrentPuzzle()})}),(t=document.getElementById("next-puzzle-btn"))==null||t.addEventListener("click",()=>{ke.playSpellSelectSound(),this.puzzles.nextPuzzle(),this.loadCurrentPuzzle()}),(n=document.getElementById("solve-reveal-btn"))==null||n.addEventListener("click",()=>{ke.playSpellSelectSound();const s=this.puzzles.getCurrentPuzzle();if(s&&s.solutionVerbose.length>0){this.game.load(s.fen),this.activeBoard.attachGame(this.game);const r=s.solutionVerbose[0],a=this.game.moves({verbose:!0}).find(o=>o.from===r.from&&o.to===r.to);a&&this.activeBoard.executeWizardMove(a)}})}handlePuzzleMove(e){const t=this.puzzles.getCurrentPuzzle(),{correct:n,alreadyScored:s}=this.puzzles.verifyMove(e),r=document.getElementById("puzzle-status");r&&(n?(ke.playPuzzleSuccessSound(),r.className="puzzle-status success",r.textContent=s?"✨ Correct! (already attempted — no XP this time)":"✨ Spellbinding! Puzzle Solved Correctly! (+15 XP)",s||fn.recordPuzzleResult(t==null?void 0:t.id,!0)):(r.className="puzzle-status failed",r.textContent="❌ Incorrect Move! Try again or cast Lumos for a hint.",s||fn.recordPuzzleResult(t==null?void 0:t.id,!1)),this.updatePuzzleStats())}loadCurrentPuzzle(){const e=this.puzzles.getCurrentPuzzle();if(!e)return;this.game.load(e.fen),this.activeBoard.attachGame(this.game),document.getElementById("puzzle-title").textContent=e.title,document.getElementById("puzzle-desc").textContent=e.description,document.getElementById("puzzle-theme-badge").textContent=e.category;const t=document.getElementById("puzzle-status");if(t){t.className="puzzle-status";const n=this.game.turn()==="w"?"White":"Black";t.textContent=this.puzzles.isSolved(e.id)?`✓ Already solved — find the winning move for ${n} again!`:`Find the winning move for ${n}!`}this.updatePuzzleStats(),this.updateEvaluationBar(),this.updateTurnBanner()}updatePuzzleStats(){const e=fn.puzzles,t=(n,s)=>{const r=document.getElementById(n);r&&(r.textContent=s)};t("puzzle-streak",`${e.streak} 🔥`),t("puzzle-rating",`${e.score} ⚡`),t("puzzles-solved",`${e.solved}/${this.puzzles.totalPuzzles} 🎯`)}updateRecordUI(){const e=document.getElementById("player-record");if(!e)return;const t=fn.record;e.textContent=`${t.wins}W · ${t.losses}L · ${t.draws}D`}bindAcademy(){var s,r,a;document.querySelectorAll(".acad-tab-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".acad-tab-btn").forEach(l=>l.classList.remove("active")),o.classList.add("active"),ke.playSpellSelectSound(),this.renderAcademySection(o.dataset.section||"openings")})});const e=document.getElementById("tutor-variation-select");e==null||e.addEventListener("change",o=>{ke.playSpellSelectSound();const l=o.target.value;if(this.activeLesson&&this.activeLesson.variations){const c=this.activeLesson.variations.find(u=>u.id===l);c&&(this.activeVariation=c,this.applyAcademyStep(0))}});const t=document.getElementById("tutor-voice-toggle");this.voiceTutorEnabled=!!fn.preferences.voiceTutor,t&&(t.classList.toggle("muted",!this.voiceTutorEnabled),t.textContent=this.voiceTutorEnabled?"🔊 Voice: ON":"🔇 Voice: OFF",t.addEventListener("click",()=>{this.voiceTutorEnabled=!this.voiceTutorEnabled,fn.setPreference("voiceTutor",this.voiceTutorEnabled),t.classList.toggle("muted",!this.voiceTutorEnabled),t.textContent=this.voiceTutorEnabled?"🔊 Voice: ON":"🔇 Voice: OFF",this.voiceTutorEnabled||ke.stopSpeech()})),(s=document.getElementById("tutor-reset"))==null||s.addEventListener("click",()=>{ke.playSpellSelectSound(),this.applyAcademyStep(0)}),(r=document.getElementById("tutor-prev"))==null||r.addEventListener("click",()=>{ke.playSpellSelectSound(),this.activeLessonStep>0&&this.applyAcademyStep(this.activeLessonStep-1)}),(a=document.getElementById("tutor-next"))==null||a.addEventListener("click",()=>{ke.playSpellSelectSound();const o=this.getActiveSequence();o&&this.activeLessonStep<o.length-1&&this.applyAcademyStep(this.activeLessonStep+1)});const n=document.getElementById("tutor-autoplay");n==null||n.addEventListener("click",()=>{ke.playSpellSelectSound(),this.tutorAutoplayTimer?(clearInterval(this.tutorAutoplayTimer),this.tutorAutoplayTimer=null,n.classList.remove("active")):(n.classList.add("active"),this.tutorAutoplayTimer=setInterval(()=>{const o=this.getActiveSequence();o&&this.activeLessonStep<o.length-1?this.applyAcademyStep(this.activeLessonStep+1):(clearInterval(this.tutorAutoplayTimer),this.tutorAutoplayTimer=null,n.classList.remove("active"))},4500))})}getActiveSequence(){return this.activeVariation&&this.activeVariation.moveSequence?this.activeVariation.moveSequence:this.activeLesson&&this.activeLesson.moveSequence?this.activeLesson.moveSequence:[]}renderAcademySection(e){const t=document.getElementById("academy-lesson-container");if(!t)return;t.innerHTML="";const n=z0.getLessons(e);n.forEach((s,r)=>{const a=document.createElement("div");a.className=`lesson-card ${r===0?"active":""}`;const o=s.variations?s.variations.length:1;a.innerHTML=`
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <div class="lesson-moves">Available Sub-Lines: ${o} variation(s)</div>
      `,a.addEventListener("click",()=>{t.querySelectorAll(".lesson-card").forEach(l=>l.classList.remove("active")),a.classList.add("active"),ke.playSpellSelectSound(),this.loadAcademyLesson(s)}),t.appendChild(a)}),n.length>0&&this.loadAcademyLesson(n[0])}loadAcademyLesson(e){this.activeLesson=e;const t=document.getElementById("tutor-variation-select");t&&(t.innerHTML="",e.variations&&e.variations.length>0?(e.variations.forEach(n=>{const s=document.createElement("option");s.value=n.id,s.textContent=n.name,t.appendChild(s)}),this.activeVariation=e.variations[0],t.style.display="inline-block"):(this.activeVariation=null,t.style.display="none")),this.applyAcademyStep(0)}applyAcademyStep(e){const t=this.getActiveSequence();if(!t||t.length===0)return;this.activeLessonStep=Math.max(0,Math.min(e,t.length-1));const n=this.activeVariation&&this.activeVariation.startFen||this.activeLesson.startFen||null;if(n)try{this.game.load(n)}catch(u){console.warn("Academy start position invalid:",n,u),this.game.reset()}else this.game.reset();for(let u=0;u<=this.activeLessonStep;u++)if(t[u]&&t[u].san)try{this.game.move(t[u].san)}catch(d){console.warn("Academy move error:",t[u].san,d)}this.activeBoard.attachGame(this.game),this.updateEvaluationBar();const s=t[this.activeLessonStep],r=document.getElementById("tutor-lesson-title"),a=document.getElementById("tutor-step-badge"),o=document.getElementById("tutor-speech-text"),l=document.getElementById("tutor-tip-text"),c=this.activeVariation?`${this.activeLesson.title} — ${this.activeVariation.name}`:this.activeLesson.title;r&&(r.textContent=c),a&&(a.textContent=`Move Step ${this.activeLessonStep+1} of ${t.length}: ${s.title}`),o&&(o.textContent=`"${s.speech}"`),l&&(l.textContent=`💡 Tip: ${s.tip}`),this.voiceTutorEnabled&&ke.speakExplanation(s.speech)}bindAnalysis(){var n,s,r,a,o,l;(n=document.getElementById("load-fen-btn"))==null||n.addEventListener("click",()=>{const c=document.getElementById("fen-input").value.trim();c&&(kt.loadFEN(c)?(this.activeBoard.attachGame(kt.analysisGame),ke.playSpellSelectSound(),this.runAnalysisUpdate()):this.setAnalysisNotice("Invalid FEN format — check the position string.",!0))}),(s=document.getElementById("load-pgn-btn"))==null||s.addEventListener("click",()=>{const c=document.getElementById("pgn-input").value.trim();c&&(kt.loadPGN(c)?(this.activeBoard.attachGame(kt.analysisGame),ke.playSpellSelectSound(),this.runAnalysisUpdate()):this.setAnalysisNotice("Invalid PGN — could not read that game transcript.",!0))});const e=c=>{ke.playSpellSelectSound();const u=c();this.activeBoard.attachGame(u),this.runAnalysisUpdate()};(r=document.getElementById("step-first"))==null||r.addEventListener("click",()=>e(()=>kt.stepFirst())),(a=document.getElementById("step-prev"))==null||a.addEventListener("click",()=>e(()=>kt.stepPrev())),(o=document.getElementById("step-next"))==null||o.addEventListener("click",()=>e(()=>kt.stepNext())),(l=document.getElementById("step-last"))==null||l.addEventListener("click",()=>e(()=>kt.stepLast()));const t=document.getElementById("auto-play-btn");t==null||t.addEventListener("click",()=>{ke.playSpellSelectSound();const c=kt.toggleAutoplay(u=>{this.activeBoard.attachGame(u),this.runAnalysisUpdate()});t.classList.toggle("active",c)})}setAnalysisNotice(e,t=!1){const n=document.getElementById("analysis-notice");n&&(n.textContent=e,n.classList.toggle("error",t),n.classList.toggle("hidden",!e))}async runAnalysisUpdate(){const e=kt.evaluateCurrentPosition(),t=document.getElementById("analysis-step-counter");t&&(t.textContent=e.stepText);const n=document.getElementById("analysis-classification");n&&(n.textContent=e.classification),this.updateEvaluationBar(e.fillPercentage,e.evalText);const s=document.getElementById("analysis-best-move"),r=document.getElementById("analysis-eval");s&&(s.textContent="thinking…");const a=Symbol("analysis");this.analysisToken=a;const o=await an.analyse(kt.analysisGame,{depth:14});if(this.analysisToken!==a)return;const{text:l,fill:c}=oo(o.score,o.mate);r&&(r.textContent=l),s&&(s.textContent=o.move?o.move.san:"—"),this.updateEvaluationBar(c,l)}async runGameReview(){const e=document.getElementById("review-container");if(!e)return;if(this.game.history().length===0){e.innerHTML='<div class="placeholder-text">Play a game first, then review it here.</div>';return}e.innerHTML='<div class="review-progress">Reviewing game… <span id="review-progress-text">0%</span></div>';const n=an.usingStockfish?12:6,s=await Y0.run(this.game,{depth:n,onProgress:({done:r,total:a})=>{const o=document.getElementById("review-progress-text");o&&(o.textContent=`${Math.round(r/a*100)}%`)}});if(!s){e.innerHTML='<div class="placeholder-text">Review cancelled.</div>';return}this.reviewData=s,this.renderReview(s)}renderReview(e){const t=document.getElementById("review-container");if(!t)return;const n=ha(this.game.history()),s=(o,l)=>{const c=Oi.map(u=>`<span class="rv-chip rv-${u.id}" title="${u.label}">${u.icon} ${l.counts[u.id]}</span>`).join("");return`
        <div class="review-side">
          <div class="rv-head">
            <span class="rv-name">${o}</span>
            <span class="rv-acc">${l.accuracy}%</span>
          </div>
          <div class="rv-sub">Average loss: ${l.averageLoss} centipawns</div>
          <div class="rv-chips">${c}</div>
        </div>
      `},r=e.worst,a=r&&r.loss>0?`<div class="review-worst">
           <strong>Turning point:</strong> ${r.moveNumber}${r.color==="w"?".":"..."}
           ${r.san} <span class="rv-${r.classification}">${r.label}</span>
           ${r.bestSan?`— ${r.bestSan} was stronger`:""}
         </div>`:"";t.innerHTML=`
      ${n?`<div class="review-opening">📖 ${n.label}</div>`:""}
      <div class="review-sides">
        ${s("White",e.white)}
        ${s("Black",e.black)}
      </div>
      ${a}
      ${this.renderEvalGraph(e.evalCurve)}
      <div class="review-moves">
        ${e.moves.map(o=>`
          <div class="rv-move rv-${o.classification}" data-ply="${o.ply}">
            <span class="rv-num">${o.color==="w"?o.moveNumber+".":""}</span>
            <span class="rv-san">${o.san}</span>
            <span class="rv-icon">${o.icon}</span>
            <span class="rv-loss">${o.loss>0?"-"+(o.loss/100).toFixed(2):""}</span>
          </div>
        `).join("")}
      </div>
    `,t.querySelectorAll(".rv-move").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.ply,10),c=kt.replayToStep(l-1);this.activeBoard.attachGame(c||kt.analysisGame),this.runAnalysisUpdate()})})}renderEvalGraph(e){if(!e||e.length<2)return"";const t=100,n=40,s=a=>Math.max(-1e3,Math.min(1e3,a)),r=e.map((a,o)=>{const l=o/(e.length-1)*t,c=n/2-s(a.cp)/1e3*(n/2);return`${l.toFixed(2)},${c.toFixed(2)}`}).join(" ");return`
      <div class="review-graph">
        <svg viewBox="0 0 ${t} ${n}" preserveAspectRatio="none" role="img"
             aria-label="Evaluation over the course of the game">
          <rect x="0" y="0" width="${t}" height="${n}" class="rv-graph-bg"/>
          <line x1="0" y1="${n/2}" x2="${t}" y2="${n/2}" class="rv-graph-mid"/>
          <polyline points="${r}" class="rv-graph-line"/>
        </svg>
      </div>
    `}updateEvaluationBar(e=null,t=null){const n=document.getElementById("eval-bar-fill"),s=document.getElementById("eval-bar-text");if(!n||!s)return;if(e!==null&&t!==null){n.style.height=`${e}%`,s.textContent=t;return}const r=an.quickEval(this.game),{text:a,fill:o}=oo(r,null);n.style.height=`${o}%`,s.textContent=a}updateOpeningUI(){const e=document.getElementById("opening-name");if(!e)return;const t=ha(this.game.history());e.textContent=t?`📖 ${t.label}`:"",e.classList.toggle("hidden",!t)}updateMoveHistoryUI(){const e=document.getElementById("move-history"),t=document.getElementById("captured-summary");if(!e)return;const n=this.game.history();if(n.length===0)e.innerHTML='<div class="placeholder-text">Moves will appear here as spell tokens are moved...</div>';else{let r="";for(let a=0;a<n.length;a+=2)r+=`
          <div class="move-row">
            <span class="move-num">${Math.floor(a/2)+1}.</span>
            <span class="move-white">${n[a]}</span>
            <span class="move-black">${n[a+1]||""}</span>
          </div>
        `;e.innerHTML=r,e.scrollTop=e.scrollHeight}t&&(t.textContent=`Captured: White ${this.capturedPieces.w.length} | Black ${this.capturedPieces.b.length}`);const s=document.getElementById("undo-btn");s&&(s.disabled=n.length===0)}updateTurnBanner(){const e=document.getElementById("turn-banner");if(!e)return;const t=this.game.turn(),n=this.game.inCheck();this.game.isCheckmate()?e.innerHTML=`<span class="turn-dot ${t==="w"?"black":"white"}"></span> CHECKMATE! ${t==="w"?"Black":"White"} Wins!`:this.game.isGameOver()?e.innerHTML='<span class="turn-dot"></span> Game over — draw':e.innerHTML=`<span class="turn-dot ${t==="w"?"white":"black"}"></span> ${t==="w"?"White":"Black"} to move ${n?"(CHECK!)":""}`}updateCommentary(e){const t=document.getElementById("commentary-text");t&&(t.textContent=e)}}function Wl(){window.wizardApp||(window.wizardApp=new ag)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Wl):Wl();

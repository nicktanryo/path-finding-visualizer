(this["webpackJsonppath-finding-visualizer"]=this["webpackJsonppath-finding-visualizer"]||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/logo512.bcef91fe.png"},61:function(e,t,a){e.exports=a(72)},66:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(66),a(11)),l=a(10),u=a(13),s=a(100),f=a(105),d=a(106),v=a(107),m=a(108),h=a(111),p=a(73),g=a(47),b=a.n(g),O=Object(s.a)((function(){return{logo:{display:"inline"}}}));var y=function(){var e=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{alt:"path-finding-visualizer",src:b.a,variant:"square",className:e.logo}),r.a.createElement(p.a,{variant:"h6",style:{marginLeft:"5px"}},"Path Finding Visualizer"))},E=a(104),T=a(110),j=a(112);function S(e){var t,a=[],n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var r,c=t.value,o=[],u=Object(l.a)(c);try{for(u.s();!(r=u.n()).done;){var s=r.value;o.push(Object(i.a)({},s))}}catch(f){u.e(f)}finally{u.f()}a.push(o)}}catch(f){n.e(f)}finally{n.f()}return a}function R(e,t){var a,n=function(e,t){var a=e.row,n=e.column,r=[];a>0&&r.push(t[a-1][n]);a<t.length-1&&r.push(t[a+1][n]);n>0&&r.push(t[a][n-1]);n<t[0].length-1&&r.push(t[a][n+1]);return r.filter((function(e){return!e.isVisited}))}(e,t),r=Object(l.a)(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.distance=e.distance+1,c.previous=e}}catch(o){r.e(o)}finally{r.f()}}function w(e,t){var a=t.row,n=t.column,r=[];return a>0&&r.push(e[a-1][n]),a<e.length-1&&r.push(e[a+1][n]),n>0&&r.push(e[a][n-1]),n<e[0].length-1&&r.push(e[a][n+1]),r}function A(e,t){return Math.abs(e.row-t.row)+Math.abs(e.column-t.column)}var M={DIJKSTRA:"DIJKSTRA",ASTAR:"ASTAR"},N={DIJKSTRA:function(e){var t=e.board,a=e.startCell,n=e.targetCell,r=S(t);r[a.row][a.column].distance=0;for(var c=[],o=function(e){var t,a=[],n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var r,c=t.value,o=Object(l.a)(c);try{for(o.s();!(r=o.n()).done;){var i=r.value;a.push(i)}}catch(u){o.e(u)}finally{o.f()}}}catch(u){n.e(u)}finally{n.f()}return a}(r);o.length;){o.sort((function(e,t){return e.distance-t.distance}));var i=o.shift();if(!i.isWall){if(i.distance===1/0)return{modifiedBoard:r,visualizedPath:c};if(i.isVisited=!0,c.push(i),i.column===n.column&&i.row===n.row)return{modifiedBoard:r,visualizedPath:c};R(i,r)}}return{modifiedBoard:r,visualizedPath:c}},ASTAR:function(e){var t=e.board,a=e.startCell,n=e.targetCell,r=S(t);r[a.row][a.column].distance=0,r[a.row][a.column].f_astar=A(a,n);var c=[];c.push(r[a.row][a.column]);for(var o=[];c.length;){c.sort((function(e,t){return e.f_astar>t.f_astar?1:-1}));var i=c.shift();if(!i.isWall){if(i.distance===1/0)return{modifiedBoard:r,visualizedPath:o};if(o.push(i),i.isVisited=!0,i.row===n.row&&i.column===n.column)return{modifiedBoard:r,visualizedPath:o};var u,s=w(r,i),f=Object(l.a)(s);try{for(f.s();!(u=f.n()).done;){var d=u.value,v=i.distance+1;v<d.distance&&(d.distance=v,d.f_astar=v+A(n,d),d.previous=i,c.includes(d)||c.push(d))}}catch(m){f.e(m)}finally{f.f()}}}return{modifiedBoard:r,visualizedPath:o}}};var P=function(){var e=Object(n.useContext)(he);return r.a.createElement(E.a,{size:"small"},r.a.createElement(T.a,{variant:"outlined",value:e.algorithm,color:"primary",onChange:function(t){e.setAlgorithm&&e.setAlgorithm(t.target.value)}},Object.keys(M).map((function(e){return r.a.createElement(j.a,{key:"algo-".concat(e),value:M[e]},_(M[e]))}))))},x={SLOW:50,NORMAL:35,FAST:20};var C=function(){var e=Object(n.useContext)(me);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{size:"small"},r.a.createElement(T.a,{variant:"outlined",value:e.speed,color:"primary",onChange:function(t){e.setSpeed&&e.setSpeed(t.target.value)}},Object.keys(x).map((function(e){return r.a.createElement(j.a,{key:"algo-".concat(e),value:x[e]},e)})))))};var z="HORIZONTAL",B="VERTICAL",D=[];function I(e,t){return e>t?B:z}function W(e){return Math.floor(Math.random()*e)}var L={RECURSIVE_DIVISION:"RECURSIVE_DIVISION",RANDOM:"RANDOM"},U={RECURSIVE_DIVISION:function(e){var t=e.board,a=e.start,n=e.target,r=function(e){var t,a=[],n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var r,c=t.value,o=[],u=Object(l.a)(c);try{for(u.s();!(r=u.n()).done;){var s=r.value,f=Object(i.a)(Object(i.a)({},s),{},{isWall:!1});o.push(f)}}catch(d){u.e(d)}finally{u.f()}a.push(o)}}catch(d){n.e(d)}finally{n.f()}return a}(S(t)),c=t.length,o=t[0].length,u=I(o,c),s=[];return D=["".concat(a.y," ").concat(a.x),"".concat(n.y," ").concat(n.x)],function e(t,a,n,r,c,o,i){if(o<2||c<2||c<=2&&o<=2)return;for(var l=i===z,u=n+(l?1+W(c-2):0),s=r+(l?0:1+W(o-2)),f=u+(l?0:W(c-1)),d=s+(l?W(o-1):0),v=l?1:0,m=l?0:1,h=l?o:c,p=0;p<h;p++)u===f&&s===d||D.includes("".concat(u," ").concat(s))||(t[u][s].isWall=!0,a.push(t[u][s])),(t[u][s].isStart||t[u][s].isTarget)&&(D.push("".concat(u+1," ").concat(s)),D.push("".concat(u," ").concat(s+1)),D.push("".concat(u-1," ").concat(s)),D.push("".concat(u," ").concat(s-1))),u+=m,s+=v;var g=l?"".concat(f+1," ").concat(d):"".concat(f," ").concat(d+1),b=l?"".concat(f-1," ").concat(d):"".concat(f," ").concat(d-1);D.push(g),D.push(b);var O=l?o:s-r,y=l?u-n:c;e(t,a,n,r,y,O,I(O,y)),e(t,a,l?u+1:n,l?r:s+1,y=l?n+c-u-1:c,O=l?o:r+o-s-1,I(O,y))}(r,s,0,0,c,o,u),{modifiedBoard:r,visualizedPath:s}},RANDOM:function(e){var t,a=S(e.board),n=[],r=Object(l.a)(a);try{for(r.s();!(t=r.n()).done;){var c,o=t.value,i=Object(l.a)(o);try{for(i.s();!(c=i.n()).done;){var u=c.value;u.isStart||u.isTarget||(Math.random()<.3?(u.isWall=!0,n.push(u)):u.isWall=!1)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){r.e(s)}finally{r.f()}return{visualizedPath:n,modifiedBoard:a}}};var k=function(e){var t=e.generateMaze;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{size:"small"},r.a.createElement(T.a,{variant:"outlined",value:"DEFAULT",color:"primary",onChange:function(e){t(e.target.value)}},r.a.createElement(j.a,{value:"DEFAULT"},"Generate Maze"),Object.keys(L).map((function(e){return r.a.createElement(j.a,{key:"algo-".concat(e),value:L[e]},_(L[e]))})))))},V=Object(s.a)((function(e){return{appbar:{backgroundColor:"#aa96da"},title:{flex:1,display:"flex",alignItems:"center"},navigator:{"& div":{margin:"0 5px 0 5px"}},navigation:{color:"white"}}}));var G=function(e){var t=e.visualize,a=e.resetBoard,n=e.generateMaze,c=V();return r.a.createElement(f.a,{position:"static",className:c.appbar},r.a.createElement(d.a,null,r.a.createElement(v.a,{container:!0,justify:"space-between"},r.a.createElement(v.a,{item:!0,className:c.title},r.a.createElement(y,null)),r.a.createElement(v.a,{item:!0,className:c.navigator},r.a.createElement(k,{generateMaze:n}),r.a.createElement(P,null),r.a.createElement(C,null),r.a.createElement(m.a,{color:"primary",className:c.navigation,onClick:t},"VISUALIZE"),r.a.createElement(m.a,{color:"primary",className:c.navigation,onClick:a},"RESET")))))};function _(e){return e.split("_").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}var F=a(52),q=a.n(F),H=(a(70),a(54)),J=a.n(H),K=a(53),Z=a.n(K),Y={ROW:30,COLUMN:65},Q=Y,X=Q===Y?20:30,$="isStart",ee="isTarget",te={x:Math.floor(Q.COLUMN/3),y:Math.floor(Q.ROW/2)},ae={x:Q.COLUMN-te.x,y:Math.floor(Q.ROW/2)},ne=a(34),re=a(42);function ce(e,t,a){return Object(re.a)(e,(function(e){var n=e[t][a],r=Object(i.a)(Object(i.a)({},n),{},{isWall:!n.isWall});return e[t][a]=r,e}))}function oe(e){var t=e.i,a=e.j,n=e.board,r=e.setBoard,c=(e.mouseDown,e.setMouseDown),o=(e.holdingPiece,e.setHoldingPiece),i=(e.prevPiece,e.setPrevPiece);e.setSTART,e.setTARGET,e.boardRef;c(!0);var l=n[t][a],u=l.isStart,s=l.isTarget;u||s?(o(u?$:ee),i([t,a])):r(ce(n,t,a))}function ie(e){var t=e.i,a=e.j,n=e.board,r=e.setBoard,c=e.mouseDown,o=(e.setMouseDown,e.holdingPiece),l=(e.setHoldingPiece,e.prevPiece),u=e.setPrevPiece;e.setSTART,e.setTARGET,e.boardRef;if(c)if(o)n[t][a].isWall||(o!==$||n[t][a].isTarget)&&(o!==ee||n[t][a].isStart)||(r(function(e,t,a,n,r,c){return Object(re.a)(e,(function(e){return e[n][r]=Object(i.a)(Object(i.a)({},e[n][r]),{},{isStart:!1,isTarget:!1}),e[t][a]=Object(i.a)(Object(i.a)({},e[t][a]),{},Object(ne.a)({},c,!0)),e}))}(n,t,a,l[0],l[1],o)),u([t,a]));else{if(n[t][a].isStart||n[t][a].isTarget)return;r(ce(n,t,a))}}function le(e){var t=e.i,a=e.j,n=(e.board,e.setBoard,e.mouseDown,e.setMouseDown),r=e.holdingPiece,c=e.setHoldingPiece,o=(e.prevPiece,e.setPrevPiece),i=e.setSTART,l=e.setTARGET;e.boardRef;if(n(!1),r){var u={x:a,y:t};r===$?i&&i(u):r===ee&&l&&l(u),c(null),o([-1,-1])}}var ue=Object(s.a)((function(e){return{row:{display:"flex",flexDirection:"row",alignItems:"center"},cell:{width:"".concat(X,"px"),height:"".concat(X,"px"),border:".5px solid lightblue"},svg:{width:"100%",height:"100%"}}}));var se=function(){var e=ue(),t=Object(n.useContext)(pe),a=t.board,c=t.setBoard,o=t.boardRef,i=t.setSTART,l=t.setTARGET,s=Object(n.useState)(!1),f=Object(u.a)(s,2),d=f[0],v=f[1],m=Object(n.useState)(null),h=Object(u.a)(m,2),p=h[0],g=h[1],b=Object(n.useState)([-1,-1]),O=Object(u.a)(b,2),y=O[0],E=O[1];return r.a.createElement(r.a.Fragment,null,a.map((function(t,n){return r.a.createElement("div",{key:"row-".concat(n),id:"row-".concat(n),className:e.row},t.map((function(t,u){var s={i:n,j:u,board:a,setBoard:c,mouseDown:d,setMouseDown:v,holdingPiece:p,setHoldingPiece:g,prevPiece:y,setPrevPiece:E,setSTART:i,setTARGET:l,boardRef:o};return r.a.createElement("div",{key:"cell-".concat(n,"-").concat(u),id:"cell-".concat(n,"-").concat(u),className:e.cell,onMouseDown:function(){return oe(s)},onMouseUp:function(){return le(s)},onMouseEnter:function(){return ie(s)},onTouchStart:function(){return oe(s)},onTouchMove:function(){return ie(s)},onTouchEnd:function(){return le(s)}},r.a.createElement("div",{id:"cell-".concat(n,"-").concat(u,"-content"),className:q()("background",t.isWall&&"wall")},t.isStart?r.a.createElement(Z.a,{className:e.svg}):t.isTarget?r.a.createElement(J.a,{className:e.svg}):null))})))})))};var fe=function(){return r.a.createElement(se,null)};function de(e,t,a){for(var n,r,c,o,i=[],l=0;l<e.ROW;l++){for(var u=[],s=0;s<e.COLUMN;s++)u.push((n=l,r=s,c=l===t.y&&s===t.x,o=l===a.y&&s===a.x,{isStart:c,isTarget:o,row:n,column:r,isVisited:!1,isWall:!1,isPassed:!1,distance:1/0,f_astar:1/0,previous:null}));i.push(u)}return i}var ve=Object(s.a)((function(e){return{board:{display:"flex",flexDirection:"column",alignItems:"center"}}})),me=r.a.createContext({speed:x.NORMAL,setSpeed:void 0}),he=r.a.createContext({algorithm:M.DIJKSTRA,setAlgorithm:void 0}),pe=r.a.createContext({board:de(Q,te,ae),setBoard:void 0,START:te,setSTART:void 0,TARGET:ae,setTARGET:void 0,boardRef:void 0});var ge=function(){var e=ve(),t=Object(n.useRef)(null),a=Object(n.useState)(x.NORMAL),c=Object(u.a)(a,2),o=c[0],s=c[1],f=Object(n.useState)(M.DIJKSTRA),d=Object(u.a)(f,2),v=d[0],m=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),g=p[0],b=p[1],O=Object(n.useState)(te),y=Object(u.a)(O,2),E=y[0],T=y[1],j=Object(n.useState)(ae),R=Object(u.a)(j,2),w=R[0],A=R[1],P=Object(n.useState)(Q),C=Object(u.a)(P,2),z=C[0],B=C[1],D=Object(n.useState)(de(Q,te,ae)),I=Object(u.a)(D,2),W=I[0],L=I[1];function k(e){for(var a=0;a<e.ROW;a++)for(var n=0;n<e.COLUMN;n++)try{t.current.querySelector("#cell-".concat(a,"-").concat(n,"-content")).className=t.current.querySelector("#cell-".concat(a,"-").concat(n,"-content")).className.split(" ").filter((function(e){return"visited"!==e&&"passed"!==e})).join(" ")}catch(r){}}var V={board:W,setBoard:L,START:E,setSTART:T,TARGET:w,setTARGET:A,boardRef:t};function _(){k(z);var e,t=S(W),a=[],n=Object(l.a)(t);try{for(n.s();!(e=n.n()).done;){var r,c=e.value,o=[],u=Object(l.a)(c);try{for(u.s();!(r=u.n()).done;){var s=r.value,f=Object(i.a)(Object(i.a)({},s),{},{isPassed:!1,isVisited:!1,distance:1/0,previous:null,f_astar:1/0});o.push(f)}}catch(d){u.e(d)}finally{u.f()}a.push(o)}}catch(d){n.e(d)}finally{n.f()}return a}function F(){var e=/Chrome/.test(navigator.userAgent),t=e?document.documentElement.clientHeight:window.innerHeight,a=e?document.documentElement.clientWidth:window.innerWidth,n=a<=672?140:a<=792?120:100,r={ROW:Math.floor((t-n)/(X+2)),COLUMN:Math.floor(a/(X+2))},c={x:Math.floor(r.COLUMN/3),y:Math.floor(r.ROW/2)};return{newBoardSize:r,Start:c,Target:{x:r.COLUMN-c.x,y:Math.floor(r.ROW/2)}}}return Object(n.useEffect)((function(){!function(){var e=F(),t=e.newBoardSize,a=e.Start,n=e.Target;B(t),T(a),A(n),L(de(t,a,n))}()}),[]),r.a.createElement(me.Provider,{value:{speed:o,setSpeed:s}},r.a.createElement(he.Provider,{value:{algorithm:v,setAlgorithm:m}},r.a.createElement(pe.Provider,{value:V},r.a.createElement("div",null,r.a.createElement(G,{visualize:function(){var e=_();b(!0);var a=(0,N[v])({board:e,startCell:W[E.y][E.x],targetCell:W[w.y][w.x]}),n=a.modifiedBoard,r=a.visualizedPath;L(n),function(e,a){for(var n=e.length,r=function(a){var n=e[a],r=n.row,c=n.column;setTimeout((function(){t.current.querySelector("#cell-".concat(r,"-").concat(c,"-content")).className+=" visited"}),o*a)},c=0;c<n;c++)r(c);var i=function(e,t){var a=S(e)[t.y][t.x];if(!a.previous)return[];a.isPassed=!0;for(var n=[a];a.previous;)a.previous.isPassed=!0,n.unshift(a.previous),a=a.previous;return n}(a,w);setTimeout((function(){!function(e){for(var a=e.length,n=function(a){var n=e[a],r=n.row,c=n.column;setTimeout((function(){t.current.querySelector("#cell-".concat(r,"-").concat(c,"-content")).className=t.current.querySelector("#cell-".concat(r,"-").concat(c,"-content")).className.split(" ").map((function(e){return"visited"===e?"passed":e})).join(" ")}),2*o*a)},r=0;r<a;r++)n(r)}(i)}),o*n)}(r,n)},resetBoard:function(){var e=F(),t=e.newBoardSize,a=e.Start,n=e.Target;k(t),T(a),A(n),b(!1),B(t),L(de(t,a,n))},generateMaze:function(e){g&&_(),function(){var e,t=[],a=Object(l.a)(W);try{for(a.s();!(e=a.n()).done;){var n,r=e.value,c=[],o=Object(l.a)(r);try{for(o.s();!(n=o.n()).done;){var u=n.value,s=Object(i.a)(Object(i.a)({},u),{},{isWall:!1});c.push(s)}}catch(f){o.e(f)}finally{o.f()}t.push(c)}}catch(f){a.e(f)}finally{a.f()}L(t)}();for(var a=(0,U[e])({board:W,start:E,target:w}),n=a.modifiedBoard,r=a.visualizedPath,c=function(e){var a=r[e],n=a.row,c=a.column;setTimeout((function(){t.current.querySelector("#cell-".concat(n,"-").concat(c,"-content")).className+=" wall"}),o*e/20)},u=0;u<r.length;u++)c(u);setTimeout((function(){L(n)}),o*r.length/20)}}),r.a.createElement("div",{ref:t,className:e.board},r.a.createElement(fe,null))))))},be=a(109),Oe=Object(s.a)((function(e){return{copyright:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function ye(){var e=Oe();return r.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"center",className:e.copyright},"Created By : ",r.a.createElement(be.a,{color:"inherit",href:"https://www.github.com/nicktanryo"},"Nicholas Tanryo")," ",(new Date).getFullYear(),".")}var Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ge,null),r.a.createElement(ye,null))};o.a.render(r.a.createElement(Ee,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.48cc1465.chunk.js.map
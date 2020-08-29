(this["webpackJsonppath-finding-visualizer"]=this["webpackJsonppath-finding-visualizer"]||[]).push([[0],{59:function(e,t,a){e.exports=a(70)},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),o=a.n(i),c=(a(64),a(12)),l=a(10),s=a(11),u=a(96),d=a(102),f=a(103),v=a(104),m=a(105),h=a(107),p=a(100),g=Object(u.a)((function(){return{logo:{display:"inline"}}}));var O=function(){var e=g();return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{alt:"path-finding-visualizer",src:"logo512.png",variant:"square",className:e.logo}),n.a.createElement(p.a,{variant:"h6"},"Path Finding Visualizer"))},b=a(101),j=a(106),T=a(108);function E(e){var t,a=[],r=Object(l.a)(e);try{for(r.s();!(t=r.n()).done;){var n,i=t.value,o=[],s=Object(l.a)(i);try{for(s.s();!(n=s.n()).done;){var u=n.value;o.push(Object(c.a)({},u))}}catch(d){s.e(d)}finally{s.f()}a.push(o)}}catch(d){r.e(d)}finally{r.f()}return a}function w(e,t){var a,r=function(e,t){var a=e.row,r=e.column,n=[];a>0&&n.push(t[a-1][r]);a<t.length-1&&n.push(t[a+1][r]);r>0&&n.push(t[a][r-1]);r<t[0].length-1&&n.push(t[a][r+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),n=Object(l.a)(r);try{for(n.s();!(a=n.n()).done;){var i=a.value;i.distance=e.distance+1,i.previous=e}}catch(o){n.e(o)}finally{n.f()}}function S(e,t){var a=t.row,r=t.column,n=[];return a>0&&n.push(e[a-1][r]),a<e.length-1&&n.push(e[a+1][r]),r>0&&n.push(e[a][r-1]),r<e[0].length-1&&n.push(e[a][r+1]),n}function y(e,t){return Math.abs(e.row-t.row)+Math.abs(e.column-t.column)}var A={DIJKSTRA:"DIJKSTRA",ASTAR:"ASTAR"},R={DIJKSTRA:function(e){var t=e.board,a=e.startCell,r=e.targetCell,n=E(t);n[a.row][a.column].distance=0;for(var i=[],o=function(e){var t,a=[],r=Object(l.a)(e);try{for(r.s();!(t=r.n()).done;){var n,i=t.value,o=Object(l.a)(i);try{for(o.s();!(n=o.n()).done;){var c=n.value;a.push(c)}}catch(s){o.e(s)}finally{o.f()}}}catch(s){r.e(s)}finally{r.f()}return a}(n);o.length;){o.sort((function(e,t){return e.distance-t.distance}));var c=o.shift();if(!c.isWall){if(c.distance===1/0)return{modifiedBoard:n,visualizedPath:i};if(c.isVisited=!0,i.push(c),c.column===r.column&&c.row===r.row)return{modifiedBoard:n,visualizedPath:i};w(c,n)}}return{modifiedBoard:n,visualizedPath:i}},ASTAR:function(e){var t=e.board,a=e.startCell,r=e.targetCell,n=E(t);n[a.row][a.column].distance=0,n[a.row][a.column].f_astar=y(a,r);var i=[];i.push(n[a.row][a.column]);for(var o=[];i.length;){i.sort((function(e,t){return e.f_astar>t.f_astar?1:-1}));var c=i.shift();if(!c.isWall){if(c.distance===1/0)return{modifiedBoard:n,visualizedPath:o};if(o.push(c),c.isVisited=!0,c.row===r.row&&c.column===r.column)return{modifiedBoard:n,visualizedPath:o};var s,u=S(n,c),d=Object(l.a)(u);try{for(d.s();!(s=d.n()).done;){var f=s.value,v=c.distance+1;v<f.distance&&(f.distance=v,f.f_astar=v+y(r,f),f.previous=c,i.includes(f)||i.push(f))}}catch(m){d.e(m)}finally{d.f()}}}return{modifiedBoard:n,visualizedPath:o}}};var M=function(){var e=Object(r.useContext)(ce);return n.a.createElement(b.a,{size:"small"},n.a.createElement(j.a,{variant:"outlined",value:e.algorithm,color:"primary",onChange:function(t){e.setAlgorithm&&e.setAlgorithm(t.target.value)}},Object.keys(A).map((function(e){return n.a.createElement(T.a,{key:"algo-".concat(e),value:A[e]},W(A[e]))}))))},P={SLOW:25,NORMAL:15,FAST:10};var N=function(){var e=Object(r.useContext)(ie);return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{size:"small"},n.a.createElement(j.a,{variant:"outlined",value:e.speed,color:"primary",onChange:function(t){e.setSpeed&&e.setSpeed(t.target.value)}},Object.keys(P).map((function(e){return n.a.createElement(T.a,{key:"algo-".concat(e),value:P[e]},e)})))))};var x={RANDOM:"RANDOM"},z={RANDOM:function(e){var t,a=E(e),r=[],n=Object(l.a)(a);try{for(n.s();!(t=n.n()).done;){var i,o=t.value,c=Object(l.a)(o);try{for(c.s();!(i=c.n()).done;){var s=i.value;s.isStart||s.isTarget||(Math.random()<.3?(s.isWall=!0,r.push(s)):s.isWall=!1)}}catch(u){c.e(u)}finally{c.f()}}}catch(u){n.e(u)}finally{n.f()}return{visualizedPath:r,modifiedBoard:a}}};var C=function(e){var t=e.generateMaze,a=Object(r.useContext)(oe);return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{size:"small"},n.a.createElement(j.a,{variant:"outlined",value:"DEFAULT",color:"primary",onChange:function(e){a.setMaze&&a.setMaze(x[e.target.value]),t()}},n.a.createElement(T.a,{value:"DEFAULT"},"Generate Maze"),Object.keys(x).map((function(e){return n.a.createElement(T.a,{key:"algo-".concat(e),value:x[e]},W(x[e]))})))))},D=Object(u.a)((function(e){return{appbar:{backgroundColor:"#aa96da"},title:{flex:1,display:"flex",alignItems:"center"},navigator:{"& div":{margin:"0 5px 0 5px"}},navigation:{color:"white"}}}));var B=function(e){var t=e.visualize,a=e.resetBoard,r=e.generateMaze,i=D();return n.a.createElement(d.a,{position:"static",className:i.appbar},n.a.createElement(f.a,null,n.a.createElement(v.a,{container:!0,justify:"space-between"},n.a.createElement(v.a,{item:!0,className:i.title},n.a.createElement(O,null)),n.a.createElement(v.a,{item:!0,className:i.navigator},n.a.createElement(C,{generateMaze:r}),n.a.createElement(M,null),n.a.createElement(N,null),n.a.createElement(m.a,{color:"primary",className:i.navigation,onClick:t},"VISUALIZE"),n.a.createElement(m.a,{color:"primary",className:i.navigation,onClick:a},"RESET")))))};function W(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}var L=a(50),k=a.n(L),U=(a(68),a(52)),I=a.n(U),G=a(51),F=a.n(G),H={ROW:20,COLUMN:37},J=H,V=J===H?30:20,_="isStart",K="isTarget",q={x:Math.floor(J.COLUMN/3),y:Math.floor(J.ROW/2)},Z={x:J.COLUMN-q.x,y:Math.floor(J.ROW/2)},Q=a(34),X=a(41);function Y(e,t,a){return Object(X.a)(e,(function(e){var r=e[t][a],n=Object(c.a)(Object(c.a)({},r),{},{isWall:!r.isWall});return e[t][a]=n,e}))}function $(e){var t=e.i,a=e.j,r=e.board,n=e.setBoard,i=e.mouseDown,o=(e.setMouseDown,e.holdingPiece),l=(e.setHoldingPiece,e.prevPiece),s=e.setPrevPiece;e.setSTART,e.setTARGET;if(i)if(o)r[t][a].isWall||(o!==_||r[t][a].isTarget)&&(o!==K||r[t][a].isStart)||(n(function(e,t,a,r,n,i){return Object(X.a)(e,(function(e){return e[r][n]=Object(c.a)(Object(c.a)({},e[r][n]),{},{isStart:!1,isTarget:!1}),e[t][a]=Object(c.a)(Object(c.a)({},e[t][a]),{},Object(Q.a)({},i,!0)),e}))}(r,t,a,l[0],l[1],o)),s([t,a]));else{if(r[t][a].isStart||r[t][a].isTarget)return;n(Y(r,t,a))}}var ee=Object(u.a)((function(e){return{row:{display:"flex",flexDirection:"row",alignItems:"center"},cell:{width:"".concat(V,"px"),height:"".concat(V,"px"),border:".5px solid lightblue"},svg:{width:"100%",height:"100%"}}}));var te=function(){var e=ee(),t=Object(r.useContext)(le),a=t.board,i=t.setBoard,o=t.setSTART,c=t.setTARGET,l=Object(r.useState)(!1),u=Object(s.a)(l,2),d=u[0],f=u[1],v=Object(r.useState)(null),m=Object(s.a)(v,2),h=m[0],p=m[1],g=Object(r.useState)([-1,-1]),O=Object(s.a)(g,2),b=O[0],j=O[1];return n.a.createElement(n.a.Fragment,null,a.map((function(t,r){return n.a.createElement("div",{key:"row-".concat(r),id:"row-".concat(r),className:e.row},t.map((function(t,l){var s={i:r,j:l,board:a,setBoard:i,mouseDown:d,setMouseDown:f,holdingPiece:h,setHoldingPiece:p,prevPiece:b,setPrevPiece:j,setSTART:o,setTARGET:c};return n.a.createElement("div",{key:"cell-".concat(r,"-").concat(l),id:"cell-".concat(r,"-").concat(l),className:k()(e.cell),onMouseDown:function(){return function(e){var t=e.i,a=e.j,r=e.board,n=e.setBoard,i=(e.mouseDown,e.setMouseDown),o=(e.holdingPiece,e.setHoldingPiece),c=(e.prevPiece,e.setPrevPiece);e.setSTART,e.setTARGET,i(!0);var l=r[t][a],s=l.isStart,u=l.isTarget;s||u?(o(s?_:K),c([t,a])):n(Y(r,t,a))}(s)},onMouseUp:function(){return function(e){var t=e.i,a=e.j,r=(e.board,e.setBoard,e.mouseDown,e.setMouseDown),n=e.holdingPiece,i=e.setHoldingPiece,o=(e.prevPiece,e.setPrevPiece),c=e.setSTART,l=e.setTARGET;if(r(!1),n){var s={x:a,y:t};n===_?c&&c(s):n===K&&l&&l(s),i(null),o([-1,-1])}}(s)},onMouseEnter:function(){return $(s)}},n.a.createElement("div",{className:t.isWall?"background wall":"background"},t.isStart?n.a.createElement(F.a,{className:e.svg}):t.isTarget?n.a.createElement(I.a,{className:e.svg}):null))})))})))};var ae=function(){return n.a.createElement(te,null)};function re(e,t,a){for(var r,n,i,o,c=[],l=0;l<e.ROW;l++){for(var s=[],u=0;u<e.COLUMN;u++)s.push((r=l,n=u,i=l===t.y&&u===t.x,o=l===a.y&&u===a.x,{isStart:i,isTarget:o,row:r,column:n,isVisited:!1,isWall:!1,isPassed:!1,distance:1/0,f_astar:1/0,previous:null}));c.push(s)}return c}var ne=Object(u.a)((function(e){return{board:{display:"flex",flexDirection:"column",alignItems:"center"}}})),ie=n.a.createContext({speed:P.NORMAL,setSpeed:void 0}),oe=n.a.createContext({maze:x.RANDOM,setMaze:void 0}),ce=n.a.createContext({algorithm:A.DIJKSTRA,setAlgorithm:void 0}),le=n.a.createContext({board:re(J,q,Z),setBoard:void 0,START:q,setSTART:void 0,TARGET:Z,setTARGET:void 0});var se=function(){var e=ne(),t=Object(r.useRef)(null),a=Object(r.useState)(P.NORMAL),i=Object(s.a)(a,2),o=i[0],u=i[1],d=Object(r.useState)(x.RANDOM),f=Object(s.a)(d,2),v=f[0],m=f[1],h=Object(r.useState)(A.DIJKSTRA),p=Object(s.a)(h,2),g=p[0],O=p[1],b=Object(r.useState)(!1),j=Object(s.a)(b,2),T=j[0],w=j[1],S=Object(r.useState)(q),y=Object(s.a)(S,2),M=y[0],N=y[1],C=Object(r.useState)(Z),D=Object(s.a)(C,2),W=D[0],L=D[1],k=Object(r.useState)(J),U=Object(s.a)(k,2),I=U[0],G=U[1],F=Object(r.useState)(re(J,q,Z)),H=Object(s.a)(F,2),_=H[0],K=H[1];function Q(){for(var e=0;e<I.ROW;e++)for(var a=0;a<I.COLUMN;a++)t.current.children[e].children[a].children[0].className=t.current.children[e].children[a].children[0].className.split(" ").filter((function(e){return"visited"!==e&&"passed"!==e})).join(" ")}var X={board:_,setBoard:K,START:M,setSTART:N,TARGET:W,setTARGET:L};function Y(){Q();var e,t=E(_),a=[],r=Object(l.a)(t);try{for(r.s();!(e=r.n()).done;){var n,i=e.value,o=[],s=Object(l.a)(i);try{for(s.s();!(n=s.n()).done;){var u=n.value,d=Object(c.a)(Object(c.a)({},u),{},{isPassed:!1,isVisited:!1,distance:1/0,previous:null,f_astar:1/0});o.push(d)}}catch(f){s.e(f)}finally{s.f()}a.push(o)}}catch(f){r.e(f)}finally{r.f()}return a}function $(){console.log(window.outerHeight,window.outerWidth),console.log(window.innerHeight,window.innerWidth);var e={ROW:Math.floor((window.innerHeight-130)/(V+1)),COLUMN:Math.floor(window.innerWidth/(V+2))},t={x:Math.floor(e.COLUMN/3),y:Math.floor(e.ROW/2)};return{newBoardSize:e,Start:t,Target:{x:e.COLUMN-t.x,y:Math.floor(e.ROW/2)}}}return Object(r.useEffect)((function(){!function(){var e=$(),t=e.newBoardSize,a=e.Start,r=e.Target;G(t),N(a),L(r),K(re(t,a,r))}()}),[]),n.a.createElement(ie.Provider,{value:{speed:o,setSpeed:u}},n.a.createElement(ce.Provider,{value:{algorithm:g,setAlgorithm:O}},n.a.createElement(le.Provider,{value:X},n.a.createElement("div",null,n.a.createElement(oe.Provider,{value:{maze:v,setMaze:m}},n.a.createElement(B,{visualize:function(){var e=Y();w(!0);var a=(0,R[g])({board:e,startCell:_[M.y][M.x],targetCell:_[W.y][W.x]}),r=a.modifiedBoard,n=a.visualizedPath;K(r),function(e,a){for(var r=e.length,n=function(a){var r=e[a],n=r.row,i=r.column;setTimeout((function(){t.current.children[n].children[i].children[0].className+=" visited"}),o*a)},i=0;i<r;i++)n(i);var c=function(e,t){var a=E(e)[t.y][t.x];if(!a.previous)return[];a.isPassed=!0;for(var r=[a];a.previous;)a.previous.isPassed=!0,r.unshift(a.previous),a=a.previous;return r}(a,W);setTimeout((function(){!function(e){for(var a=e.length,r=function(a){var r=e[a],n=r.row,i=r.column;setTimeout((function(){t.current.children[n].children[i].children[0].className=t.current.children[n].children[i].children[0].className.split(" ").map((function(e){return"visited"===e?"passed":e})).join(" ")}),2*o*a)},n=0;n<a;n++)r(n)}(c)}),o*r)}(n,r)},resetBoard:function(){var e=$(),t=e.newBoardSize,a=e.Start,r=e.Target;Q(),N(a),L(r),w(!1),K(re(t,a,r))},generateMaze:function(){T&&Y();var e=(0,z[v])(_).modifiedBoard;K(e)}})),n.a.createElement("div",{ref:t,className:e.board},n.a.createElement(ae,null))))))};var ue=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(se,null))};o.a.render(n.a.createElement(ue,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.5f3a050c.chunk.js.map
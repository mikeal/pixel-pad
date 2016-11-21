(function d(g,m,q){function v(z,A){if(!m[z]){if(!g[z]){var B="function"==typeof require&&require;if(!A&&B)return B(z,!0);if(w)return w(z,!0);var C=new Error("Cannot find module '"+z+"'");throw C.code="MODULE_NOT_FOUND",C}var D=m[z]={exports:{}};g[z][0].call(D.exports,function(E){var F=g[z][1][E];return v(F?F:E)},D,D.exports,d,g,m,q)}return m[z].exports}var w="function"==typeof require&&require;for(var y=0;y<q.length;y++)v(q[y]);return v})({1:[function(d){function g(G){G.app="pixel-pad",G.api="https://TODO/api/v1",window.parent.postMessage(G,"*")}function m(G){let H=+document.querySelector("pixel-app").offsetHeight;G&&(H+=80),window.parent&&window.parent.postMessage({height:H},"*")}/* globals URL */const q=d("funky"),v=d("element-class");let w="white",y=()=>{return w="#F0F0F0"==w?"white":"#F0F0F0",w};const z=q`
<pixel-app-pixel>
  <div class="pixel-fill"
       style="background-color:${G=>G||y()}"
       gridindex="${(G,H)=>H}"
       >
  </div>
</pixel-app-pixel>
`,A=q`
<pixel-app-row>
  <pixel-row-info gridindex="${(G,H)=>H}"></pixel-row-info>
  ${G=>G.map(z)}
</pixel-app-row>
`;window.addEventListener("message",G=>{let H=G.data;if(G.data){let L=H.data;if(L){let M=document.querySelector("pixel-app");M.setPixel(L.row,L.column,L.color)}}});const B=q`
${function(H,I){H.setPixel=(L,M,N)=>{y=()=>"white",I[L][M]=N,H.update(I)};let J=()=>`#${H.parentNode.querySelector("button.jscolor").textContent}`,K=(L,M)=>{let N=J();g({data:{row:L,column:M,color:N}}),H.setPixel(L,M,N)};H.onclick=L=>{if(v(L.target).has("pixel-fill")){let O=+L.target.parentNode.parentNode.children[0].getAttribute("gridindex"),P=+L.target.getAttribute("gridindex");K(O,P)}}}}
<pixel-app>
  <style>
  pixel-app-pixel {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  pixel-app-row {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
  }
  pixel-row-info {
    display: none;
  }
  div.pixel-fill {
    width: 100%;
    height: 100%;
  }
  div.pixel-fill:hover {
    filter: blur(5px) grayscale(20%);
    border: 1px solid;
  }
  </style>
  ${G=>G.map(A)}
</pixel-app>
`,C=q`
<pixel-app-container>
  <style>
  div.color-palette {
    padding: 5px 5px 5px 5px
  }
  div.color-palette input {
    width: 80px;
  }
  button.jscolor {
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 13;
    -moz-border-radius: 13;
    border-radius: 13px;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
    border: 1px solid;
    border-color: #F0F0F0;
    cursor: pointer;
    margin: 5px 5px 5px 5px;
  }
  button.jscolor:hover {
    border: solid 1px #CCC;
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
        box-shadow: 1px 1px 5px #999;
  }
  </style>
  ${B}
  <button class="jscolor {value:'FFA500'}">
    FFA500
  </button>
</pixel-app-container>
`,D=q`
${function(H,I){let J=H.querySelector("pixel-app");H.querySelector("div.pixel-add-row").onclick=()=>{I=E(I.length+1,I[0].length),J.update(I),m(!0)},H.querySelector("div.pixel-add-column").onclick=()=>{I=E(I.length,I[0].length+1),J.update(I),m(!0)},H.querySelector("div.pixel-update-url").onclick=()=>{let K=`?rows=${I.length}&columns=${I[0].length}`;g({embed:`https://mikeal.github.io/pixel-pad/${K}`}),window.location.search=K}}}
<pixel-app-creator>
  <style>
  pixel-app-creator {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  div.pixel-add-button {
    font-size: 40px;
    color: grey;
    cursor: pointer;
    padding-left: 5px;
  }
  div.pixel-add-fill {
    width: 100%;
  }
  div.pixel-add-column {
    margin-left: -30px;
  }
  div.pixel-add-row {
    margin-left: -30px;
  }
  div.pixel-update-url {
    margin-top: -50px;
    font-size: 40px;
    color: #FFA500;
    cursor: pointer;
    padding-left: 5px;
    align-self: flex-start;
  }
  pixel-app-creator pixel-app {
    padding-top:20px;
  }
  </style>
  ${B}
  <div class="pixel-update-url">⇛</div>
  <div class="pixel-add-button pixel-add-column">⇛</div>
  <div class="pixel-add-fill"></div>
  <div class="pixel-add-button pixel-add-row">⤋</div>
</pixel-app-creator>
`,E=(G,H)=>{let I=[],J=0;for(;J<G;){let K=[],L=0;for(;L<H;)K.push(0),L++;J++,I.push(K)}return I};//
let F=new URL(window.location.toString());if(F.searchParams.has("rows")){let G=+F.searchParams.get("rows"),H=+F.searchParams.get("columns"),I=C(E(G,H));document.getElementById("center-container").appendChild(I);let J=document.body.offsetHeight;window.parent&&window.parent.postMessage({height:J},"*")}else{let G=D(E(7,15));document.getElementById("center-container").appendChild(G)}},{"element-class":4,funky:5}],2:[function(d,g){function m(A,B,C){function D(L){if(Array.isArray(L))for(var M=0;M<L.length;M++){var N=L[M];if(Array.isArray(N)){D(N);continue}if(("number"==typeof N||"boolean"==typeof N||N instanceof Date||N instanceof RegExp)&&(N=N.toString()),"string"==typeof N){if(E.lastChild&&"#text"===E.lastChild.nodeName){E.lastChild.nodeValue+=N;continue}N=q.createTextNode(N)}N&&N.nodeType&&E.appendChild(N)}}var E;// If an svg tag, it needs a namespace
-1!==z.indexOf(A)&&(B.namespace="http://www.w3.org/2000/svg");// If we are using a namespace
var F=!1;// If adding onload events
if(B.namespace&&(F=B.namespace,delete B.namespace),E=F?q.createElementNS(F,A):q.createElement(A),B.onload||B.onunload){var G=B.onload||function(){},H=B.onunload||function(){};w(E,function(){G(E)},function(){H(E)},// We have to use non-standard `caller` to find who invokes `belCreateElement`
m.caller.caller.caller),delete B.onload,delete B.onunload}// Create the properties
for(var I in B)if(B.hasOwnProperty(I)){var J=I.toLowerCase(),K=B[I];// Normalize className
// If a property is boolean, set itself to the key
if("classname"===J&&(J="class",I="class"),"htmlFor"===I&&(I="for"),y[J])if("true"===K)K=J;else if("false"===K)continue;// If a property prefers being set directly vs setAttribute
"on"===J.slice(0,2)?E[I]=K:F?"xlink:href"===I?E.setAttributeNS("http://www.w3.org/1999/xlink",I,K):E.setAttributeNS(null,I,K):E.setAttribute(I,K)}return D(C),E}var q=d("global/document"),v=d("hyperx"),w=d("on-load"),y={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},z=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];g.exports=v(m),g.exports.createElement=m},{"global/document":6,hyperx:9,"on-load":11}],3:[function(){},{}],4:[function(d,g){function m(v,w){if(v.indexOf)return v.indexOf(w);for(var y=0,z=v.length;y<z;y++)if(v[y]===w)return y;return-1}function q(v){return this instanceof q?void(this,!v&&(v={}),v.nodeType&&(v={el:v}),this.opts=v,this.el=v.el||document.body,"object"!=typeof this.el&&(this.el=document.querySelector(this.el))):new q(v)}g.exports=function(v){return new q(v)},q.prototype.add=function(v){var w=this.el;if(w){if(""===w.className)return w.className=v;var y=w.className.split(" ");return-1<m(y,v)?y:(y.push(v),w.className=y.join(" "),y)}},q.prototype.remove=function(v){var w=this.el;if(w&&""!==w.className){var y=w.className.split(" "),z=m(y,v);return-1<z&&y.splice(z,1),w.className=y.join(" "),y}},q.prototype.has=function(v){var w=this.el;if(w){var y=w.className.split(" ");return-1<m(y,v)}},q.prototype.toggle=function(v){var w=this.el;w&&(this.has(v)?this.remove(v):this.add(v))}},{}],5:[function(d,g){function m(v,w){v=v.slice(),w=w.slice();let y=[],z=[],A=[],B=[],C=[],D=v.join("").replace(/ /g,""),E=D.slice(D.indexOf("<")+1,D.indexOf(">")),F="",G={},H=0;for(;H<v.length;)F+=v[H],G[F.length+"-"+H]=w[H],H++;let I=`<${E}>`,J=F.indexOf(I),K=`</${E}>`,L=F.lastIndexOf(K);if(-1===J)throw new Error("Cannot find open position.");if(-1===L)throw new Error("Cannot find close position.");for(let N in G){let O=+N.slice(0,N.indexOf("-")),P=G[N];if(O<J)C.push(P);else if(O>J&&O<L)B.push(P);else if(O>L)z.push(P);else throw new Error("Parser error, cannot assign value.")}H=0;for(let M=0;H<v.length;){let N=v[H],O=()=>{if(!(M>=F.length)){if(M>=J){if(M>L)y.push(N);else{if(-1!==N.indexOf(K)){let P=N.indexOf(K)+K.length+1;return A.push(N.slice(0,P)),N=N.slice(P),M+=P,O()}A.push(N)}}else if(-1!==N.indexOf(I)){let P=N.indexOf(I);return N=N.slice(P),M=M+P,O()}M=M+N.length}};O(),H++}// TODO: type checking on constructors and destructors
return{name:E,constructors:C,shadowStrings:y,shadowValues:z,elementStrings:A,elementValues:B}}var q=d("yo-yo");g.exports=function(w,...y){function z(B){var C=A.elementValues.map(D=>{return D.node?D.node:"function"==typeof D?D.apply(this,B):D});return C}let A=m(w,y);return function(){var C=Array.prototype.slice.call(arguments),D=q(A.elementStrings,...z(C));return A.constructors.forEach(E=>E(...[D].concat(C))),D.yoyoOpts={childrenOnly:!0},D.update=function(){D.onupdate&&D.onupdate.apply(D,arguments);let E=D.processUpdate.apply(D,arguments);q.update(D,E,D.yoyoOpts)},D.processUpdate=function(){var E=Array.prototype.slice.call(arguments),F=[...z(E)],G=q(A.elementStrings,...F);return G},D._funkView=!0,D}},g.exports.attr=v=>w=>w[v]},{"yo-yo":12}],6:[function(d,g){(function(m){var q="undefined"==typeof m?"undefined"==typeof window?{}:window:m,v=d("min-document");if("undefined"!=typeof document)g.exports=document;else{var w=q["__GLOBAL_DOCUMENT_CACHE@4"];w||(w=q["__GLOBAL_DOCUMENT_CACHE@4"]=v),g.exports=w}}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{"min-document":3}],7:[function(d,g){(function(m){g.exports="undefined"==typeof window?"undefined"==typeof m?"undefined"==typeof self?{}:self:m:window}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{}],8:[function(d,g){g.exports=function(v){return function(w,y,z){for(var A in y)A in m&&(y[m[A]]=y[A],delete y[A]);return v(w,y,z)}};var m={"class":"className","for":"htmlFor","http-equiv":"httpEquiv"}},{}],9:[function(d,g){function m(M){return M===G||M===H}function q(M){return L.test(M)}var v=d("hyperscript-attribute-to-property"),w=0,y=1,z=2,A=3,B=4,C=5,D=6,E=7,F=8,G=9,H=10,I=11,J=12;g.exports=function(M,N){function O(Q){if("function"==typeof Q)return Q;return"string"==typeof Q?Q:Q&&"object"==typeof Q?Q:P("",Q)}M=v(M),N||(N={});var P=N.concat||function(Q,R){return Q+""+(R+"")};return function(Q){function R(ha){var ia=[];S==E&&(S=B);for(var ja=0;ja<ha.length;ja++){var ka=ha.charAt(ja);S==y&&"<"===ka?(T.length&&ia.push([y,T]),T="",S=z):">"!==ka||m(S)?S==y?T+=ka:S==z&&/\s/.test(ka)?(ia.push([z,T]),T="",S=B):S==z?T+=ka:S==B&&/[\w-]/.test(ka)?(S=C,T=ka):S==B&&/\s/.test(ka)?(T.length&&ia.push([C,T]),ia.push([J])):S==C&&/\s/.test(ka)?(ia.push([C,T]),T="",S=D):S==C&&"="===ka?(ia.push([C,T],[I]),T="",S=E):S==C?T+=ka:(S==D||S==B)&&"="===ka?(ia.push([I]),S=E):S!=D&&S!=B||/\s/.test(ka)?S==E&&"\""===ka?S=H:S==E&&"'"===ka?S=G:S==H&&"\""===ka?(ia.push([F,T],[J]),T="",S=B):S==G&&"'"===ka?(ia.push([F,T],[J]),T="",S=B):S!=E||/\s/.test(ka)?S==F&&/\s/.test(ka)?(ia.push([F,T],[J]),T="",S=B):(S==F||S==G||S==H)&&(T+=ka):(S=F,ja--):(ia.push([J]),/[\w-]/.test(ka)?(T+=ka,S=C):S=B):(S==z?ia.push([z,T]):S==C?ia.push([C,T]):S==F&&T.length&&ia.push([F,T]),ia.push([A]),T="",S=y)}return S==y&&T.length?(ia.push([y,T]),T=""):S==F&&T.length?(ia.push([F,T]),T=""):S==H&&T.length?(ia.push([F,T]),T=""):S==G&&T.length?(ia.push([F,T]),T=""):S==C&&(ia.push([C,T]),T=""),ia}var S=y,T="",U=arguments.length,V=[];for(var W=0;W<Q.length;W++)if(W<U-1){var X=arguments[W+1],Y=R(Q[W]),Z=S;Z==H&&(Z=F),Z==G&&(Z=F),Z==E&&(Z=F),Z==B&&(Z=C),Y.push([w,Z,X]),V.push.apply(V,Y)}else V.push.apply(V,R(Q[W]));var $=[null,{},[]],_=[[$,-1]];for(var W=0;W<V.length;W++){var aa=_[_.length-1][0],Y=V[W],ba=Y[0];if(ba===z&&/^\//.test(Y[1])){var ca=_[_.length-1][1];1<_.length&&(_.pop(),_[_.length-1][0][2][ca]=M(aa[0],aa[1],aa[2].length?aa[2]:void 0))}else if(ba===z){var da=[Y[1],{},[]];aa[2].push(da),_.push([da,aa[2].length-1])}else if(ba===C||ba===w&&Y[1]===C){for(var ea="";W<V.length;W++)if(V[W][0]===C)ea=P(ea,V[W][1]);else if(V[W][0]!==w||V[W][1]!==C)break;else if("object"==typeof V[W][2]&&!ea)for(var fa in V[W][2])V[W][2].hasOwnProperty(fa)&&!aa[1][fa]&&(aa[1][fa]=V[W][2][fa]);else ea=P(ea,V[W][2]);V[W][0]===I&&W++;for(var ga=W;W<V.length;W++)if(V[W][0]===F||V[W][0]===C)aa[1][ea]=aa[1][ea]?P(aa[1][ea],V[W][1]):O(V[W][1]);else if(V[W][0]===w&&(V[W][1]===F||V[W][1]===C))aa[1][ea]=aa[1][ea]?P(aa[1][ea],V[W][2]):O(V[W][2]);else{ea.length&&!aa[1][ea]&&W===ga&&(V[W][0]===A||V[W][0]===J)&&(aa[1][ea]=ea.toLowerCase());break}}else if(ba===C)aa[1][Y[1]]=!0;else if(ba===w&&Y[1]===C)aa[1][Y[2]]=!0;else if(ba===A){if(q(aa[0])&&_.length){var ca=_[_.length-1][1];_.pop(),_[_.length-1][0][2][ca]=M(aa[0],aa[1],aa[2].length?aa[2]:void 0)}}else if(ba===w&&Y[1]===y)void 0===Y[2]||null===Y[2]?Y[2]="":!Y[2]&&(Y[2]=P("",Y[2])),Array.isArray(Y[2][0])?aa[2].push.apply(aa[2],Y[2]):aa[2].push(Y[2]);else if(ba===y)aa[2].push(Y[1]);else if(ba!==I&&ba!==J)throw new Error("unhandled: "+ba)}if(1<$[2].length&&/^\s*$/.test($[2][0])&&$[2].shift(),2<$[2].length||2===$[2].length&&/\S/.test($[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray($[2][0])&&"string"==typeof $[2][0][0]&&Array.isArray($[2][0][2])&&($[2][0]=M($[2][0][0],$[2][0][1],$[2][0][2])),$[2][0]}};var K=Object.prototype.hasOwnProperty,L=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7F-\uFFFF_:-]+)*$")},{"hyperscript-attribute-to-property":8}],10:[function(d,g){"use strict";// Create a range object for efficently rendering strings to elements.
function m(K){!C&&D.createRange&&(C=D.createRange(),C.selectNode(D.body));var L;return C&&C.createContextualFragment?L=C.createContextualFragment(K):(L=D.createElement("body"),L.innerHTML=K),L.childNodes[0]}function q(K,L,M){K[M]!==L[M]&&(K[M]=L[M],K[M]?K.setAttribute(M,""):K.removeAttribute(M,""))}function v(){}/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */function w(K,L){var M=K.nodeName,N=L.nodeName;return!(M!==N)||L.actualize&&91>M.charCodeAt(0)&&/* from tag name is upper case */90<N.charCodeAt(0)/* target tag name is lower case */&&M===N.toUpperCase()}/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */function y(K,L){return L&&"http://www.w3.org/1999/xhtml"!==L?D.createElementNS(L,K):D.createElement(K)}/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */function z(K,L){if(L.assignAttributes)L.assignAttributes(K);else{var M=L.attributes,N,O,P,Q,R,S;for(N=M.length-1;0<=N;--N)O=M[N],P=O.name,Q=O.namespaceURI,R=O.value,Q?(P=O.localName||P,S=K.getAttributeNS(Q,P),S!=R&&K.setAttributeNS(Q,P,R)):(S=K.getAttribute(P),S!=R&&K.setAttribute(P,R));// Remove any extra attributes found on the original DOM element that
// weren't found on the target element.
for(M=K.attributes,N=M.length-1;0<=N;--N)O=M[N],!1!==O.specified&&(P=O.name,Q=O.namespaceURI,Q?(P=O.localName||P,!I(L,Q,P)&&K.removeAttributeNS(Q,P)):!I(L,null,P)&&K.removeAttribute(P))}}/**
 * Copies the children of one DOM element to another DOM element
 */function A(K,L){for(var M=K.firstChild;M;){var N=M.nextSibling;L.appendChild(M),M=N}return L}function B(K){return K.id}var C,D="undefined"!=typeof document&&document,E=D?D.body||D.createElement("div"):{},F=1,G=3,H=8,I;// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
I=E.hasAttributeNS?function(K,L,M){return K.hasAttributeNS(L,M)}:E.hasAttribute?function(K,L,M){return K.hasAttribute(M)}:function(K,L,M){return!!K.getAttributeNode(M)};var J={/**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */OPTION:function(K,L){q(K,L,"selected")},/**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */INPUT:function(K,L){q(K,L,"checked"),q(K,L,"disabled"),K.value!==L.value&&(K.value=L.value),I(L,null,"value")||K.removeAttribute("value")},TEXTAREA:function(K,L){var M=L.value;K.value!==M&&(K.value=M),K.firstChild&&(K.firstChild.nodeValue=M)}};g.exports=function(L,M,N){function O(ka){da?da.push(ka):da=[ka]}function P(ka,la){if(ka.nodeType===F)for(var ma=ka.firstChild;ma;){var na=void 0;la&&(na=V(ma))?O(na):(_(ma),ma.firstChild&&P(ma,la)),ma=ma.nextSibling}}/**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */function Q(ka,la,ma){!1===$(ka)||(la&&la.removeChild(ka),_(ka),P(ka,ma))}// // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
// function indexTree(root) {
//     var treeWalker = document.createTreeWalker(
//         root,
//         NodeFilter.SHOW_ELEMENT);
//
//     var el;
//     while((el = treeWalker.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
// // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
//
// function indexTree(node) {
//     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
//     var el;
//     while((el = nodeIterator.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
function R(ka){if(ka.nodeType===F)for(var la=ka.firstChild;la;){var ma=V(la);ma&&(ca[ma]=la),R(la),la=la.nextSibling}}function S(ka){X(ka);for(var la=ka.firstChild;la;){var ma=la.nextSibling,na=V(la);if(na){var oa=ca[na];oa&&w(la,oa)&&(la.parentNode.replaceChild(oa,la),T(oa,la))}S(la),la=ma}}function T(ka,la,ma){var oa,na=V(la);if(na&&delete ca[na],!(M.isSameNode&&M.isSameNode(L))){if(!ma){if(!1===Y(ka,la))return;if(z(ka,la),Z(ka),!1===aa(ka,la))return}if("TEXTAREA"!==ka.nodeName){var ra,sa,ta,ua,pa=la.firstChild,qa=ka.firstChild;outer:for(;pa;){for(ta=pa.nextSibling,ra=V(pa);qa;){if(sa=qa.nextSibling,pa.isSameNode&&pa.isSameNode(qa)){pa=ta,qa=sa;continue outer}oa=V(qa);var va=qa.nodeType,wa=void 0;if(va===pa.nodeType&&(va===F?(ra?ra!=oa&&((ua=ca[ra])?qa.nextSibling===ua?wa=!1:(ka.insertBefore(ua,qa),oa?O(oa):Q(qa,ka,!0/* skip keyed nodes */),sa=qa.nextSibling,qa=ua):wa=!1):oa&&(wa=!1),wa=!1!==wa&&w(qa,pa),wa&&T(qa,pa)):(va===G||va==H)&&(wa=!0,qa.nodeValue=pa.nodeValue)),wa){pa=ta,qa=sa;continue outer}// No compatible match so remove the old node from the DOM and continue trying to find a
// match in the original DOM. However, we only do this if the from node is not keyed
// since it is possible that a keyed node might match up with a node somewhere else in the
// target tree and we don't want to discard it just yet since it still might find a
// home in the final DOM tree. After everything is done we will remove any keyed nodes
// that didn't find a home
oa?O(oa):Q(qa,ka,!0/* skip keyed nodes */),qa=sa}// If we got this far then we did not find a candidate match for
// our "to node" and we exhausted all of the children "from"
// nodes. Therefore, we will just append the current "to" node
// to the end
if(ra&&(ua=ca[ra])&&w(ua,pa))ka.appendChild(ua),T(ua,pa);else{var xa=W(pa);!1!==xa&&(xa&&(pa=xa),pa.actualize&&(pa=pa.actualize(ka.ownerDocument||D)),ka.appendChild(pa),S(pa))}pa=ta,qa=sa}// We have processed all of the "to nodes". If curFromNodeChild is
// non-null then we still have some from nodes left over that need
// to be removed
for(;qa;)sa=qa.nextSibling,(oa=V(qa))?O(oa):Q(qa,ka,!0/* skip keyed nodes */),qa=sa}var ya=J[ka.nodeName];ya&&ya(ka,la)}}// END: morphEl(...)
if(N||(N={}),"string"==typeof M)if("#document"===L.nodeName||"HTML"===L.nodeName){var U=M;M=D.createElement("html"),M.innerHTML=U}else M=m(M);var da,V=N.getNodeKey||B,W=N.onBeforeNodeAdded||v,X=N.onNodeAdded||v,Y=N.onBeforeElUpdated||v,Z=N.onElUpdated||v,$=N.onBeforeNodeDiscarded||v,_=N.onNodeDiscarded||v,aa=N.onBeforeElChildrenUpdated||v,ba=!0===N.childrenOnly,ca={};// This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
R(L);var ea=L,fa=ea.nodeType,ga=M.nodeType;if(!ba)// Handle the case where we are given two DOM nodes that are not
// compatible (e.g. <div> --> <span> or <div> --> TEXT)
if(fa===F)ga===F?!w(L,M)&&(_(L),ea=A(L,y(M.nodeName,M.namespaceURI))):ea=M;else if(fa===G||fa===H){// Text or comment node
if(ga===fa)return ea.nodeValue=M.nodeValue,ea;ea=M}if(ea===M)_(L);else// We now need to loop over any keyed nodes that might need to be
// removed. We only do the removal if we know that the keyed node
// never found a match. When a keyed node is matched up we remove
// it out of fromNodesLookup and we use fromNodesLookup to determine
// if a keyed node has been matched up or not
if(T(ea,M,ba),da)for(var ha=0,ia=da.length;ha<ia;ha++){var ja=ca[da[ha]];ja&&Q(ja,ja.parentNode,!1)}return!ba&&ea!==L&&L.parentNode&&(ea.actualize&&(ea=ea.actualize(L.ownerDocument||D)),L.parentNode.replaceChild(ea,L)),ea}},{}],11:[function(d,g){function m(G,H){B[G][0]&&0===B[G][2]&&(B[G][0](H),B[G][2]=1)}function q(G,H){B[G][1]&&1===B[G][2]&&(B[G][1](H),B[G][2]=0)}function v(G,H,I){var J=G.target.getAttribute(D);return w(G.oldValue,J)?void(B[J]=B[G.oldValue]):void(B[G.oldValue]&&I(G.oldValue,G.target),B[J]&&H(J,G.target))}function w(G,H){return G&&H&&B[G][3]===B[H][3]}function y(G,H){var I=Object.keys(B);for(var J=0;J<G.length;J++){if(G[J]&&G[J].getAttribute&&G[J].getAttribute(D)){var K=G[J].getAttribute(D);I.forEach(function(L){K===L&&H(L,G[J])})}0<G[J].childNodes.length&&y(G[J].childNodes,H)}}/* global MutationObserver */var z=d("global/document"),A=d("global/window"),B=Object.create(null),C="onloadid"+(new Date%9e6).toString(36),D="data-"+C,E=0;if(A&&A.MutationObserver){var F=new MutationObserver(function(G){if(!(1>Object.keys(B).length))for(var H=0;H<G.length;H++){if(G[H].attributeName===D){v(G[H],m,q);continue}y(G[H].removedNodes,q),y(G[H].addedNodes,m)}});F.observe(z.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[D]})}g.exports=function G(H,I,J,K){return I=I||function(){},J=J||function(){},H.setAttribute(D,"o"+E),B["o"+E]=[I,J,0,K||G.caller],E+=1,H}},{"global/document":6,"global/window":7}],12:[function(d,g){var m=d("bel"),q=d("morphdom"),v=d("./update-events.js");// turns template tag into DOM elements
// efficiently diffs + morphs two DOM elements
// default events to be copied when dom elements update
g.exports=m,g.exports.update=function(w,y,z){// morphdom only copies attributes. we decided we also wanted to copy events
// that can be set via attributes
function A(B,C){// copy events:
var D=z.events||v;for(var E=0;E<D.length;E++){var F=D[E];C[F]?B[F]=C[F]:B[F]&&(B[F]=void 0)}// copy values for form elements
"INPUT"===B.nodeName&&"file"!==B.type||"SELECT"===B.nodeName?null===C.getAttribute("value")&&(C.value=B.value):"TEXTAREA"===B.nodeName&&null===C.getAttribute("value")&&(B.value=C.value)}return z||(z={}),!1===z.events||z.onBeforeElUpdated||(z.onBeforeElUpdated=A),q(w,y,z)}},{"./update-events.js":13,bel:2,morphdom:10}],13:[function(d,g){g.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},{}]},{},[1]);

/*!
 * mapache-godofredoninja v3.1.1
 * Copyright 2019 GodoFredoNinja <hello@godofredo.ninja> (https://github.com/godofredoninja/mapache)
 * Licensed under gpl-3.0
 */!function s(i,o,l){function c(t,e){if(!o[t]){if(!i[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=o[t]={exports:{}};i[t][0].call(r.exports,function(e){return c(i[t][1][e]||e)},r,r.exports,s,i,o,l)}return o[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,a){!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var a={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:["markup","csharp"],bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike",flow:"javascript",glsl:"clike",gml:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike"],"js-extras":"javascript","js-templates":"javascript",jsonp:"json",json5:"json",kotlin:"clike",less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",soy:"markup-templating",swift:"clike",tap:"yaml",textile:"markup",tt2:["clike","markup-templating"],twig:"markup",typescript:"javascript","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","visual-basic"],vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup",xquery:"markup"},r={html:"markup",xml:"markup",svg:"markup",mathml:"markup",js:"javascript",adoc:"asciidoc",shell:"bash",rbnf:"bnf",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gamemakerlanguage:"gml",hs:"haskell",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",n4jsd:"n4js",objectpascal:"pascal",px:"pcaxis",py:"python",rb:"ruby",ts:"typescript",t4:"t4-cs",vb:"visual-basic",xeoracube:"xeora",yml:"yaml"},p={},e=document.getElementsByTagName("script"),t=e[e.length-1],n="components/",s=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i,i=/[\w-]+\.(?:min\.)js$/i;if(t.hasAttribute("data-autoloader-path"))n=t.getAttribute("data-autoloader-path").trim().replace(/\/?$/,"/");else{var o=t.src;s.test(o)?n=o.replace(s,"components/"):i.test(o)&&(n=o.replace(i,"components/"))}var g=Prism.plugins.autoloader={languages_path:n,use_minified:!0,loadLanguages:d};Prism.hooks.add("complete",function(e){e.element&&e.language&&!e.grammar&&"none"!==e.language&&function(e,t){e in r&&(e=r[e]);var a=t.getAttribute("data-dependencies"),n=t.parentElement;!a&&n&&"pre"===n.tagName.toLowerCase()&&(a=n.getAttribute("data-dependencies")),d(a=a?a.split(/\s*,\s*/g):[],function(){l(e,function(){Prism.highlightElement(t)})})}(e.language,e.element)})}function d(e,t,a){"string"==typeof e&&(e=[e]);var n=e.length,r=0,s=!1;function i(){s||++r===n&&t&&t(e)}0!==n?e.forEach(function(e){l(e,i,function(){s||(s=!0,a&&a(e))})}):t&&setTimeout(t,0)}function l(o,l,c){var u=0<=o.indexOf("!");o=o.replace("!",""),o=r[o]||o;function e(){var e,t,a,n,r,s=p[o];if((s=s||(p[o]={callbacks:[]})).callbacks.push({success:l,error:c}),!u&&Prism.languages[o])m(o,"success");else if(!u&&s.error)m(o,"error");else if(u||!s.loading){s.loading=!0;var i=(r=o,g.languages_path+"prism-"+r+(g.use_minified?".min":"")+".js");e=i,t=function(){s.loading=!1,m(o,"success")},a=function(){s.loading=!1,s.error=!0,m(o,"error")},(n=document.createElement("script")).src=e,n.async=!0,n.onload=function(){document.body.removeChild(n),t&&t()},n.onerror=function(){document.body.removeChild(n),a&&a()},document.body.appendChild(n)}}var t=a[o];t&&t.length?d(t,e,c):e()}function m(e,t){if(p[e]){for(var a=p[e].callbacks,n=0,r=a.length;n<r;n++){var s=a[n][t];s&&setTimeout(s,0)}a.length=0}}}()},{}],2:[function(e,t,a){(function(e){var c=function(c){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,P={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof N?new N(e.type,P.util.encode(e.content),e.alias):Array.isArray(e)?e.map(P.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function a(e,n){var r,t,s=P.util.type(e);switch(n=n||{},s){case"Object":if(t=P.util.objId(e),n[t])return n[t];for(var i in r={},n[t]=r,e)e.hasOwnProperty(i)&&(r[i]=a(e[i],n));return r;case"Array":return t=P.util.objId(e),n[t]?n[t]:(r=[],n[t]=r,e.forEach(function(e,t){r[t]=a(e,n)}),r);default:return e}}},languages:{extend:function(e,t){var a=P.util.clone(P.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||P.languages)[a],s={};for(var i in r)if(r.hasOwnProperty(i)){if(i==e)for(var o in t)t.hasOwnProperty(o)&&(s[o]=t[o]);t.hasOwnProperty(i)||(s[i]=r[i])}var l=n[a];return n[a]=s,P.languages.DFS(P.languages,function(e,t){t===l&&e!=a&&(this[e]=s)}),s},DFS:function e(t,a,n,r){r=r||{};var s=P.util.objId;for(var i in t)if(t.hasOwnProperty(i)){a.call(t,i,t[i],n||i);var o=t[i],l=P.util.type(o);"Object"!==l||r[s(o)]?"Array"!==l||r[s(o)]||(r[s(o)]=!0,e(o,a,i,r)):(r[s(o)]=!0,e(o,a,null,r))}}},plugins:{},highlightAll:function(e,t){P.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};P.hooks.run("before-highlightall",n);for(var r,s=e.querySelectorAll(n.selector),i=0;r=s[i++];)P.highlightElement(r,!0===t,n.callback)},highlightElement:function(e,t,a){for(var n,r="none",s=e;s&&!u.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(u)||[,"none"])[1].toLowerCase(),n=P.languages[r]),e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(s=e.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(u,"").replace(/\s+/g," ")+" language-"+r));function i(e){o.highlightedCode=e,P.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,P.hooks.run("after-highlight",o),P.hooks.run("complete",o),a&&a.call(o.element)}var o={element:e,language:r,grammar:n,code:e.textContent};if(P.hooks.run("before-sanity-check",o),o.code)if(P.hooks.run("before-highlight",o),o.grammar)if(t&&c.Worker){var l=new Worker(P.filename);l.onmessage=function(e){i(e.data)},l.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else i(P.highlight(o.code,o.grammar,o.language));else i(P.util.encode(o.code));else P.hooks.run("complete",o)},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return P.hooks.run("before-tokenize",n),n.tokens=P.tokenize(n.code,n.grammar),P.hooks.run("after-tokenize",n),N.stringify(P.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,r,s,i){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){if(o==i)return;var l=a[o];l="Array"===P.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],p=u.inside,g=!!u.lookbehind,d=!!u.greedy,m=0,f=u.alias;if(d&&!u.pattern.global){var h=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,h+"g")}u=u.pattern||u;for(var k=n,b=r;k<t.length;b+=t[k].length,++k){var y=t[k];if(t.length>e.length)return;if(!(y instanceof N)){if(d&&k!=t.length-1){if(u.lastIndex=b,!(A=u.exec(e)))break;for(var v=A.index+(g?A[1].length:0),F=A.index+A[0].length,w=k,x=b,j=t.length;w<j&&(x<F||!t[w].type&&!t[w-1].greedy);++w)(x+=t[w].length)<=v&&(++k,b=x);if(t[k]instanceof N)continue;$=w-k,y=e.slice(b,x),A.index-=b}else{u.lastIndex=0;var A=u.exec(y),$=1}if(A){g&&(m=A[1]?A[1].length:0);F=(v=A.index+m)+(A=A[0].slice(m)).length;var _=y.slice(0,v),S=y.slice(F),E=[k,$];_&&(++k,b+=_.length,E.push(_));var C=new N(o,p?P.tokenize(A,p):A,f,A,d);if(E.push(C),S&&E.push(S),Array.prototype.splice.apply(t,E),1!=$&&P.matchGrammar(e,t,a,k,b,!0,o),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}return P.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=P.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=P.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}},Token:N};function N(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(c.Prism=P,N.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return N.stringify(e,t)}).join("");var a={type:e.type,content:N.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var n=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,n)}P.hooks.run("wrap",a);var r=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(r?" "+r:"")+">"+a.content+"</"+a.tag+">"},!c.document)return c.addEventListener&&(P.disableWorkerMessageHandler||c.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;c.postMessage(P.highlight(n,P.languages[a],a)),r&&c.close()},!1)),P;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(P.filename=e.src,P.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(P.highlightAll):window.setTimeout(P.highlightAll,16):document.addEventListener("DOMContentLoaded",P.highlightAll))),P}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==t&&t.exports&&(t.exports=c),void 0!==e&&(e.Prism=c),c.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.languages.markup.tag.inside["attr-value"].inside.entity=c.languages.markup.entity,c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(c.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:c.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:c.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},c.languages.insertBefore("markup","cdata",r)}}),c.languages.xml=c.languages.extend("markup",{}),c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(c),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{"class-name":[c.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),c.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,c.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:c.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:c.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:c.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:c.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.markup.tag.addInlined("script","javascript"),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,a=e.getAttribute("data-src"),n=e,r=/\blang(?:uage)?-([\w-]+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(t=(e.className.match(r)||[,""])[1]),!t){var s=(a.match(/\.(\w+)$/)||[,""])[1];t=l[s]||s}var i=document.createElement("code");i.className="language-"+t,e.textContent="",i.textContent="Loading…",e.appendChild(i);var o=new XMLHttpRequest;o.open("GET",a,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(i.textContent=o.responseText,c.highlightElement(i),e.setAttribute("data-src-loaded","")):400<=o.status?i.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:i.textContent="✖ Error: File does not exist or is empty")},o.send(null)}}),c.plugins.toolbar&&c.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,a){"use strict";e("prismjs"),e("prismjs/plugins/autoloader/prism-autoloader"),"undefined"!=typeof sitePrismJscomponents&&(Prism.plugins.autoloader.languages_path=sitePrismJscomponents)},{prismjs:2,"prismjs/plugins/autoloader/prism-autoloader":1}]},{},[3]);
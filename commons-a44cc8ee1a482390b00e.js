(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/8WL":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz");n("kTHX");function i(e){return void 0!==e.isNewTab&&e.isNewTab?a.a.createElement("div",null,a.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},a.a.createElement("button",{className:"stationary-button",style:e.css,type:void 0!==e.buttonType?e.buttonType:"button"},e.title))):a.a.createElement("div",null,a.a.createElement(o.a,{to:e.link},a.a.createElement("button",{className:"stationary-button",style:e.css},e.title)))}},"3uoI":function(e,t,n){},"6us9":function(e,t,n){"use strict";var r=n("JX7q"),a=n("dI71"),o=n("q1tI"),i=n.n(o),c=n("Wbzz"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).showLinks=function(){n.setState((function(e){return{css:{height:64*n.props.links.length+"px"}}}))},n.hideLinks=function(){n.setState((function(e){return{css:{height:"64px"}}}))},n.state={css:{height:"64px"}},n.showLinks=n.showLinks.bind(Object(r.a)(n)),n.hideLinks=n.hideLinks.bind(Object(r.a)(n)),n}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("div",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((function(e){return i.a.createElement(c.a,{className:"nav-link",to:"/"+e.toLowerCase().replace(/\s/g,""),key:e},e)})),";"))},t}(i.a.Component),u=function(e){return i.a.createElement("div",{className:"hamburger-container",onClick:e.clickMe},i.a.createElement("div",{className:"hamburger-bar"}),i.a.createElement("div",{className:"hamburger-bar"}),i.a.createElement("div",{className:"hamburger-bar"}))},l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.sidelinks.map((function(e){return i.a.createElement(c.a,{className:"nav-side-link",to:"/"+e.toLowerCase().replace(/\s/g,""),style:{color:"white"},key:e},e.charAt(0).toUpperCase()+e.substring(1,e.length))}));return i.a.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},i.a.createElement("div",{className:"sidebar-header-container"},i.a.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),i.a.createElement("div",{className:"spacer"}),i.a.createElement("div",{className:"x-container",onClick:this.props.clickHide},i.a.createElement("div",{className:"x-bar-left"}),i.a.createElement("div",{className:"x-bar-right"}))),i.a.createElement("div",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(i.a.Component),f=(n("3uoI"),{portfolio:["Portfolio","Websites","Graphics"],explore:["Explore","Games"],about:["Contact","About"]}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).showSide=function(){n.setState((function(e){return{css:{top:0}}}))},n.hideSide=function(){n.setState((function(e){return{css:{top:"-100vh"}}}))},n.state={css:{top:"-100vh"}},n.showSide=n.showSide.bind(Object(r.a)(n)),n.hideSide=n.hideSide.bind(Object(r.a)(n)),n}return Object(a.a)(t,e),t.prototype.render=function(){for(var e=[],t=0;t<Object.keys(f).length;t++)e.push(i.a.createElement(s,{className:"nav-links-container",links:f[Object.keys(f)[t]],key:f[Object.keys(f)[t]]}));return i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("h1",null,i.a.createElement(c.a,{to:"/"},"Owen Bean")),i.a.createElement("div",{className:"spacer"}),e,i.a.createElement(u,{clickMe:this.showSide}),i.a.createElement(l,{sidelinks:Object.keys(f),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(i.a.Component);t.a=p},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},"N/oj":function(e,t,n){e.exports=n.p+"static/favicon-eb8af2e18a32c832a8b477c5ee107776.ico"},PJDU:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("qhky"),c=n("N/oj"),s=n.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=void 0!==this.props.title?this.props.title:"";return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement("meta",{name:"author",content:"Owen G. Bean"}),o.a.createElement("meta",{name:"application-name",content:"Owen G. Bean Portfolio"}),o.a.createElement("meta",{name:"description",content:this.props.desc}),o.a.createElement("meta",{charset:"UTF-8"}),o.a.createElement("title",null,"Owen G. Bean "+e),o.a.createElement("link",{rel:"shortcut icon",href:s.a,type:"image/x-icon"})))},t}(o.a.Component);t.a=u},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],i[u[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},fItr:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.footerlinks.map((function(e){return o.a.createElement(i.a,{className:"footer-link",style:{color:"white"},to:"/"+e.toLowerCase().replace(/\s/g,""),key:e},e)}));return o.a.createElement("div",null,o.a.createElement("div",{className:"footer-links-container"},e))},t}(o.a.Component),s=n("/8WL"),u=(n("ky7P"),new Date),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"action-container"},o.a.createElement(s.a,{title:"Portfolio",link:"/portfolio"}),o.a.createElement(s.a,{title:"About",link:"/about"}),o.a.createElement(s.a,{title:"Contact",link:"/contact"})),o.a.createElement("footer",null,o.a.createElement("div",{className:"links-container"},o.a.createElement(c,{footerlinks:["Portfolio","Websites","Graphics"]}),o.a.createElement(c,{footerlinks:["Explore","Games"]}),o.a.createElement(c,{footerlinks:["Contact","About"]})),o.a.createElement("p",null,"Copyright © ",u.getFullYear()," Owen Bean. All rights reserved.")))},t}(o.a.Component);t.a=l},kTHX:function(e,t,n){},ky7P:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));var r,a,o,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("YVoz"),y=n.n(m),b="bodyAttributes",v="htmlAttributes",T="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",k="http-equiv",C="innerHTML",A="itemprop",S="name",j="property",L="rel",N="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",q="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",H=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),_=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,w.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},J=function(e){return Q(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===L&&"canonical"===e[n].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==E&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),ce(f,p);var d={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[h.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,s,r),style:pe(w.STYLE,u,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:X([O,P],e),bodyAttributes:V(b,e),defer:Q(e,M),encode:Q(e,q),htmlAttributes:V(v,e),linkTags:$(w.LINK,[L,O],e),metaTags:$(w.META,[S,g,k,j,A],e),noscriptTags:$(w.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:$(w.SCRIPT,[N,C],e),styleTags:$(w.STYLE,[E],e),title:K(e),titleAttributes:V(T,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return U(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case w.BODY:return F({},a,{bodyAttributes:F({},o)});case w.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-a44cc8ee1a482390b00e.js.map
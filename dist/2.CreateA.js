webpackJsonp([2],{33:function(e,t,a){"use strict";function r(e){var t=i.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function n(e,t){for(var a=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=a.length,n=a[r-1],o=!1,s=0;r--;)"."===a[r]?a.splice(r,1):".."===a[r]?(a.splice(r,1),s++):s&&(0===r&&(o=!0),a.splice(r,1),s--);return o&&a.unshift(""),"."!==n&&".."!==n||a.push(""),a.join("/")}function o(e,t,a){if(!(this instanceof o))return new o(e,t,a);var i,p,f,h,m,d,y=u.slice(),v=typeof t,b=this,g=0;for("object"!==v&&"string"!==v&&(a=t,t=null),a&&"function"!=typeof a&&(a=c.parse),t=l(t),p=r(e||""),i=!p.protocol&&!p.slashes,b.slashes=p.slashes||i&&t.slashes,b.protocol=p.protocol||t.protocol||"",e=p.rest,p.slashes||(y[2]=[/(.*)/,"pathname"]);g<y.length;g++)h=y[g],f=h[0],d=h[1],f!==f?b[d]=e:"string"==typeof f?~(m=e.indexOf(f))&&("number"==typeof h[2]?(b[d]=e.slice(0,m),e=e.slice(m+h[2])):(b[d]=e.slice(m),e=e.slice(0,m))):(m=f.exec(e))&&(b[d]=m[1],e=e.slice(0,m.index)),b[d]=b[d]||(i&&h[3]?t[d]||"":""),h[4]&&(b[d]=b[d].toLowerCase());a&&(b.query=a(b.query)),i&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=n(b.pathname,t.pathname)),s(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(h=b.auth.split(":"),b.username=h[0]||"",b.password=h[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}var s=a(76),l=a(77),c=a(53),i=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,u=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]];o.prototype.set=function(e,t,a){var r=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(a||c.parse)(t)),r[e]=t;break;case"port":r[e]=t,s(t,r.protocol)?t&&(r.host=r.hostname+":"+t):(r.host=r.hostname,r[e]="");break;case"hostname":r[e]=t,r.port&&(t+=":"+r.port),r.host=t;break;case"host":r[e]=t,/:\d+$/.test(t)?(t=t.split(":"),r.port=t.pop(),r.hostname=t.join(":")):(r.hostname=t,r.port="");break;case"protocol":r.protocol=t.toLowerCase(),r.slashes=!a;break;case"pathname":r.pathname=t.length&&"/"!==t.charAt(0)?"/"+t:t;break;default:r[e]=t}for(var n=0;n<u.length;n++){var o=u[n];o[4]&&(r[o[1]]=r[o[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},o.prototype.toString=function(e){e&&"function"==typeof e||(e=c.stringify);var t,a=this,r=a.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var n=r+(a.slashes?"//":"");return a.username&&(n+=a.username,a.password&&(n+=":"+a.password),n+="@"),n+=a.host+a.pathname,t="object"==typeof a.query?e(a.query):a.query,t&&(n+="?"!==t.charAt(0)?"?"+t:t),a.hash&&(n+=a.hash),n},o.extractProtocol=r,o.location=l,o.qs=c,e.exports=o},53:function(e,t){"use strict";function a(e){for(var t,a=/([^=?&]+)=?([^&]*)/g,r={};t=a.exec(e);r[decodeURIComponent(t[1])]=decodeURIComponent(t[2]));return r}function r(e,t){t=t||"";var a=[];"string"!=typeof t&&(t="?");for(var r in e)n.call(e,r)&&a.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return a.length?t+a.join("&"):""}var n=Object.prototype.hasOwnProperty;t.stringify=r,t.parse=a},76:function(e,t){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},77:function(e,t,a){(function(t){"use strict";var r,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o={hash:1,query:1};e.exports=function(e){e=e||t.location||{},r=r||a(33);var s,l={},c=typeof e;if("blob:"===e.protocol)l=new r(unescape(e.pathname),{});else if("string"===c){l=new r(e,{});for(s in o)delete l[s]}else if("object"===c){for(s in e)s in o||(l[s]=e[s]);void 0===l.slashes&&(l.slashes=n.test(e.href))}return l}}).call(t,function(){return this}())},126:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=a(4),u=n(i),p=a(21),f=r(p),h=a(33),m=(n(h),f.Link),d=function(e){function t(e){o(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.funcName=["renderCnt"],a.funcName.forEach(function(e){a[e]=a[e].bind(a)}),a}return l(t,e),c(t,[{key:"renderCnt",value:function(){var e=this.props,t=e.status,a=e.nickname,r=e.sourceNickName,n=e.addParam;return"create"===t?u.default.createElement("div",{className:"createa page"},u.default.createElement("div",{className:"logo"}),u.default.createElement("div",{className:"main"}),u.default.createElement("div",{className:"txt"}),u.default.createElement("div",{className:"btngroup"},u.default.createElement(m,{className:"btn a",to:n("/createb")},"发祝福"),u.default.createElement(m,{className:"btn b",to:n("/createc")},"发指令"))):"reply"===t?u.default.createElement("div",{className:"replya page"},u.default.createElement("div",{className:"logo"}),u.default.createElement("div",{className:"main"}),u.default.createElement("div",{className:"txt"},u.default.createElement("p",null,r,":"),u.default.createElement("p",null,"这是一封来自",u.default.createElement("span",{className:"nickname"},a),"陛下的旨意")),u.default.createElement("div",{className:"btngroup"},u.default.createElement(m,{className:"btn",to:n("/createf")},"打开"))):"receive"===t?u.default.createElement("div",{className:"replya page"},u.default.createElement("div",{className:"logo"}),u.default.createElement("div",{className:"main"}),u.default.createElement("div",{className:"txt"},u.default.createElement("p",null,a,"陛下:"),u.default.createElement("p",null,"这是一封来自",u.default.createElement("span",{className:"nickname"},r),"的回旨")),u.default.createElement("div",{className:"btngroup"},u.default.createElement(m,{className:"btn",to:n("/created")},"打开"))):void 0}},{key:"render",value:function(){var e=this.renderCnt();return e}}]),t}(u.default.Component);d.defaultProps={},d.propTypes={addParam:u.default.PropTypes.func,nickname:u.default.PropTypes.string,reply:u.default.PropTypes.number,sourceNickName:u.default.PropTypes.string,status:u.default.PropTypes.string},e.exports=d}});
//# sourceMappingURL=2.CreateA.js.map
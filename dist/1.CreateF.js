webpackJsonp([1],{33:function(e,t,r){"use strict";function o(e){var t=c.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function n(e,t){for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=r.length,n=r[o-1],s=!1,a=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),a++):a&&(0===o&&(s=!0),r.splice(o,1),a--);return s&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}function s(e,t,r){if(!(this instanceof s))return new s(e,t,r);var c,l,f,h,d,y,m=u.slice(),g=typeof t,v=this,b=0;for("object"!==g&&"string"!==g&&(r=t,t=null),r&&"function"!=typeof r&&(r=p.parse),t=i(t),l=o(e||""),c=!l.protocol&&!l.slashes,v.slashes=l.slashes||c&&t.slashes,v.protocol=l.protocol||t.protocol||"",e=l.rest,l.slashes||(m[2]=[/(.*)/,"pathname"]);b<m.length;b++)h=m[b],f=h[0],y=h[1],f!==f?v[y]=e:"string"==typeof f?~(d=e.indexOf(f))&&("number"==typeof h[2]?(v[y]=e.slice(0,d),e=e.slice(d+h[2])):(v[y]=e.slice(d),e=e.slice(0,d))):(d=f.exec(e))&&(v[y]=d[1],e=e.slice(0,d.index)),v[y]=v[y]||(c&&h[3]?t[y]||"":""),h[4]&&(v[y]=v[y].toLowerCase());r&&(v.query=r(v.query)),c&&t.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==t.pathname)&&(v.pathname=n(v.pathname,t.pathname)),a(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(h=v.auth.split(":"),v.username=h[0]||"",v.password=h[1]||""),v.origin=v.protocol&&v.host&&"file:"!==v.protocol?v.protocol+"//"+v.host:"null",v.href=v.toString()}var a=r(76),i=r(77),p=r(53),c=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,u=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]];s.prototype.set=function(e,t,r){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||p.parse)(t)),o[e]=t;break;case"port":o[e]=t,a(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!r;break;case"pathname":o.pathname=t.length&&"/"!==t.charAt(0)?"/"+t:t;break;default:o[e]=t}for(var n=0;n<u.length;n++){var s=u[n];s[4]&&(o[s[1]]=o[s[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},s.prototype.toString=function(e){e&&"function"==typeof e||(e=p.stringify);var t,r=this,o=r.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var n=o+(r.slashes?"//":"");return r.username&&(n+=r.username,r.password&&(n+=":"+r.password),n+="@"),n+=r.host+r.pathname,t="object"==typeof r.query?e(r.query):r.query,t&&(n+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(n+=r.hash),n},s.extractProtocol=o,s.location=i,s.qs=p,e.exports=s},53:function(e,t){"use strict";function r(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,o={};t=r.exec(e);o[decodeURIComponent(t[1])]=decodeURIComponent(t[2]));return o}function o(e,t){t=t||"";var r=[];"string"!=typeof t&&(t="?");for(var o in e)n.call(e,o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.length?t+r.join("&"):""}var n=Object.prototype.hasOwnProperty;t.stringify=o,t.parse=r},76:function(e,t){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},77:function(e,t,r){(function(t){"use strict";var o,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s={hash:1,query:1};e.exports=function(e){e=e||t.location||{},o=o||r(33);var a,i={},p=typeof e;if("blob:"===e.protocol)i=new o(unescape(e.pathname),{});else if("string"===p){i=new o(e,{});for(a in s)delete i[a]}else if("object"===p){for(a in e)a in s||(i[a]=e[a]);void 0===i.slashes&&(i.slashes=n.test(e.href))}return i}}).call(t,function(){return this}())},136:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(4),u=n(c),l=r(21),f=o(l),h=r(33),d=(n(h),f.Link,f.browserHistory),y=function(e){function t(e){s(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.funcName=["reply","refuse","replyEdict"],r.funcName.forEach(function(e){r[e]=r[e].bind(r)}),r}return i(t,e),p(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"replyEdict",value:function(e){var t=this,r=this;fetch(window.apiPath+"/add"+window.apiSuffix,{credentials:"include",method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},body:"reply="+e+"&msg="+r.props.msg+"&msgId="+r.props.msgId}).then(function(e){return e.json()}).then(function(e){r.props.setState({image:e.image,shareUrl:e.shareUrl},function(){var e=t.props.addParam("created");d.push(e)})}).catch(function(){})}},{key:"refuse",value:function(){var e=this;this.props.setState({reply:2},function(){e.replyEdict(2)})}},{key:"reply",value:function(){var e=this.props.addParam("createb");this.props.setState({reply:1},function(){d.push(e)})}},{key:"render",value:function(){var e=832*window.innerWidth/640;return e+="px",u.default.createElement("div",{className:"replyb picwrap"},u.default.createElement("img",{className:"cutpic",src:this.props.curImage}),u.default.createElement("div",{className:"btngroup",style:{top:e}},u.default.createElement("div",{className:"btn a",onClick:this.reply},"复旨"),u.default.createElement("div",{className:"btn b",onClick:this.refuse},"抗旨")))}}]),t}(u.default.Component);y.defaultProps={},y.propTypes={addParam:u.default.PropTypes.func,curImage:u.default.PropTypes.string,headimgurl:u.default.PropTypes.string,msg:u.default.PropTypes.string,msgId:u.default.PropTypes.string,nickname:u.default.PropTypes.string,openId:u.default.PropTypes.string,reply:u.default.PropTypes.number,setState:u.default.PropTypes.func,sourceHeadimgurl:u.default.PropTypes.string,sourceMsg:u.default.PropTypes.string,sourceNickName:u.default.PropTypes.string,sourceOpenId:u.default.PropTypes.string,status:u.default.PropTypes.string},e.exports=y}});
//# sourceMappingURL=1.CreateF.js.map
webpackJsonp([6],{47:function(e,t){"use strict";function n(e){this.init(e)}n.prototype.init=function(e){var t=this,n=/MicroMessenger/gi.test(navigator.userAgent);n&&$.ajax({url:"//dlkddh.derlook.com/message/wxConfig",data:{pageUrl:encodeURIComponent("http://dlkddh.derlook.com/pages/createa"+location.search)},dataType:"json",success:function(n){alert(n.appId),alert(n.timestamp),alert(n.noncestr),alert(n.signature),wx.config({debug:!0,appId:n.appId,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),t.share(e)},error:function(){}})},n.prototype.share=function(e){var t=e;t.success||(t.success=function(e){}),t.cancel||(t.cancel=function(e){}),wx.ready(function(){wx.onMenuShareTimeline({title:t.timeline&&t.timeline.title||t.title,link:t.link+(t.params||""),imgUrl:t.imgUrl,success:function(e){t.success.apply(t,["timeline",e])},cancel:function(e){t.cancel.apply(t,["timeline",e])}}),wx.onMenuShareAppMessage({title:t.appmessage&&t.appmessage.title||t.title,desc:t.appmessage&&t.appmessage.desc||t.desc,link:t.link+(t.params||""),imgUrl:t.imgUrl,type:"",dataUrl:"",success:function(e){t.success.apply(t,["appmessage",e])},cancel:function(e){t.cancel.apply(t,["appmessage",e])}}),wx.onMenuShareQQ({title:t.qq&&t.qq.title||t.title,desc:t.qq&&t.qq.desc||t.desc,link:t.link+(t.params||""),imgUrl:t.imgUrl,success:function(e){t.success.apply(t,["qq",e])},cancel:function(e){t.cancel.apply(t,["qq",e])}}),wx.onMenuShareWeibo({title:t.weibo&&t.weibo.title||t.title,desc:t.weibo&&t.weibo.desc||t.desc,link:t.link+(t.params||""),imgUrl:t.imgUrl,success:function(e){t.success.apply(t,["weibo",e])},cancel:function(e){t.cancel.apply(t,["weibo",e])}}),wx.onMenuShareQZone({title:t.qzone&&t.qzone.title||t.title,desc:t.qzone&&t.qzone.desc||t.desc,link:t.link+(t.params||""),imgUrl:t.imgUrl,success:function(e){t.success.apply(t,["qzone",e])},cancel:function(e){t.cancel.apply(t,["qzone",e])}})})},e.exports=n},132:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),p=a(l),u=n(21),f=r(u),d=n(47),m=a(d),g=(f.Link,f.browserHistory),h=function(e){function t(e){s(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showTip:!1},n.funcName=[],n.funcName.forEach(function(e){n[e]=n[e].bind(n)}),n}return c(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.reply,r=t.status;if("receive"!==r){var a={link:this.props.shareUrl,imgUrl:this.props.image,success:function(e){var t=this.props.addParam("createe");g.push(t)},timeline:{title:this.props.msg},appmessage:{title:"圣旨",desc:this.props.msg}};new m.default(a),setTimeout(function(){e.show()},3e3)}else 2===n&&setTimeout(function(){g.push("createa")},5e3)}},{key:"componentWillUnmount",value:function(){"reply"===this.props.status&&this.props.setState({reply:0})}},{key:"show",value:function(){this.setState({showTip:!0})}},{key:"renderShowTip",value:function(){return this.state.showTip?p.default.createElement("div",{className:"shareTip"}):""}},{key:"renderCnt",value:function(){var e=this.props,t=e.status,n=e.reply,r=e.image,a=e.curImage;if("create"===t)return p.default.createElement("div",{className:"created picwrap"},this.renderShowTip(),p.default.createElement("img",{className:"cutpic",src:r}));if("reply"===t)return p.default.createElement("div",{className:"created picwrap"},this.renderShowTip(),p.default.createElement("img",{className:"cutpic",src:r}));if("receive"===t){if(1===n){var s=832*window.innerWidth/640;return s+="px",p.default.createElement("div",{className:"relyd picwrap"},p.default.createElement("img",{className:"cutpic",src:a}),p.default.createElement("div",{className:"btngroup",style:{top:s}},p.default.createElement("a",{className:"btn",href:"//dlkddh.derlook.com/pages/createa"},"再玩一次")))}if(2===n)return p.default.createElement("div",{className:"relyd picwrap"},p.default.createElement("img",{className:"cutpic",src:a}))}}},{key:"render",value:function(){var e=this.renderCnt();return e}}]),t}(p.default.Component);h.defaultProps={},h.propTypes={addParam:p.default.PropTypes.func,curImage:p.default.PropTypes.string,headimgurl:p.default.PropTypes.string,image:p.default.PropTypes.string,msg:p.default.PropTypes.string,nickname:p.default.PropTypes.string,reply:p.default.PropTypes.number,setState:p.default.PropTypes.func,shareUrl:p.default.PropTypes.string,sourceHeadimgurl:p.default.PropTypes.string,sourceMsg:p.default.PropTypes.string,sourceNickName:p.default.PropTypes.string,status:p.default.PropTypes.string},e.exports=h}});
//# sourceMappingURL=6.CreateD.js.map
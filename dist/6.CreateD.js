webpackJsonp([6],{47:function(e,t){"use strict";function r(e){this.share(e)}r.prototype.share=function(e){var t=e;t.success||(t.success=function(e){}),t.cancel||(t.cancel=function(e){}),wx.ready(function(){wx.onMenuShareTimeline({title:t.timeline&&t.timeline.title||t.title,link:t.link+(t.params||""),imgUrl:t.imgUrl,success:function(e){t.success.apply(t,["timeline",e])},cancel:function(e){t.cancel.apply(t,["timeline",e])}}),wx.onMenuShareAppMessage({title:t.appmessage&&t.appmessage.title||t.title,desc:t.appmessage&&t.appmessage.desc||t.desc,link:t.link+(t.params||""),imgUrl:t.imgUrl,type:"",dataUrl:"",success:function(e){t.success.apply(t,["appmessage",e])},cancel:function(e){t.cancel.apply(t,["appmessage",e])}})})},e.exports=r},132:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(4),l=a(p),u=r(21),f=n(u),m=r(47),d=a(m),y=(f.Link,f.browserHistory),h=function(e){function t(e){s(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={showTip:!1},r.funcName=[],r.funcName.forEach(function(e){r[e]=r[e].bind(r)}),r}return c(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.reply,n=t.status;if("receive"!==n){var a={link:this.props.shareUrl,imgUrl:this.props.image,success:function(e){var t=this.props.addParam("createe");y.push(t)},timeline:{title:this.props.msg},appmessage:{title:"圣旨",desc:this.props.msg}};new d.default(a),setTimeout(function(){e.show()},3e3)}else 2===r&&setTimeout(function(){y.push("createa")},5e3)}},{key:"componentWillUnmount",value:function(){"reply"===this.props.status&&this.props.setState({reply:0})}},{key:"show",value:function(){this.setState({showTip:!0})}},{key:"renderShowTip",value:function(){return this.state.showTip?l.default.createElement("div",{className:"shareTip"}):""}},{key:"renderCnt",value:function(){var e=this.props,t=e.status,r=e.reply,n=e.image,a=e.curImage;if("create"===t)return l.default.createElement("div",{className:"created picwrap"},this.renderShowTip(),l.default.createElement("img",{className:"cutpic",src:n}));if("reply"===t)return l.default.createElement("div",{className:"created picwrap"},this.renderShowTip(),l.default.createElement("img",{className:"cutpic",src:n}));if("receive"===t){if(1===r){var s=832*window.innerWidth/640;return s+="px",l.default.createElement("div",{className:"relyd picwrap"},l.default.createElement("img",{className:"cutpic",src:a}),l.default.createElement("div",{className:"btngroup",style:{top:s}},l.default.createElement("a",{className:"btn",href:"//dlkddh.derlook.com/pages/createa"},"再玩一次")))}if(2===r)return l.default.createElement("div",{className:"relyd picwrap"},l.default.createElement("img",{className:"cutpic",src:a}))}}},{key:"render",value:function(){var e=this.renderCnt();return e}}]),t}(l.default.Component);h.defaultProps={},h.propTypes={addParam:l.default.PropTypes.func,curImage:l.default.PropTypes.string,headimgurl:l.default.PropTypes.string,image:l.default.PropTypes.string,msg:l.default.PropTypes.string,nickname:l.default.PropTypes.string,reply:l.default.PropTypes.number,setState:l.default.PropTypes.func,shareUrl:l.default.PropTypes.string,sourceHeadimgurl:l.default.PropTypes.string,sourceMsg:l.default.PropTypes.string,sourceNickName:l.default.PropTypes.string,status:l.default.PropTypes.string},e.exports=h}});
//# sourceMappingURL=6.CreateD.js.map
webpackJsonp([6],{134:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),f=r(l),s=n(21),p=o(s),d=(p.Link,function(e){function t(e){a(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.funcName=["closeWindow"],n.funcName.forEach(function(e){n[e]=n[e].bind(n)}),n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"closeWindow",value:function(){var e=/MicroMessenger/gi.test(navigator.userAgent);e&&wx.closeWindow()}},{key:"render",value:function(){return f.default.createElement("div",{className:"createe page"},f.default.createElement("a",{className:"btn a",href:"//dlkddh.derlook.com/pages/createa"}),f.default.createElement("div",{className:"btn b",onClick:this.closeWindow}))}}]),t}(f.default.Component));d.defaultProps={},d.propTypes={},e.exports=d}});
//# sourceMappingURL=6.CreateE.js.map
webpackJsonp([8],{248:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=r(0),i=r.n(c),u=r(77),f=r(9),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function(e){function t(){var e,r,a,c;n(this,t);for(var i=arguments.length,f=Array(i),l=0;l<i;l++)f[l]=arguments[l];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),a.state={redirectToReferrer:!1},a.login=function(){u.c.authenticate(function(){a.setState({redirectToReferrer:!0})})},c=r,o(a,c)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props.location.state||{from:{pathname:"/"}},t=e.from;return this.state.redirectToReferrer?i.a.createElement(f.d,{to:t}):i.a.createElement("div",{className:"page-content"})}}]),t}(i.a.Component);t.default=p}});
//# sourceMappingURL=8.73c9c7cd.chunk.js.map
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/Users/clucot/plugin-Signal2021-CRM/public",__webpack_require__(__webpack_require__.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);Object.defineProperty(t,"loadPlugin",{enumerable:!0,get:function(){return n.loadPlugin}}),Object.defineProperty(t,"FlexPlugin",{enumerable:!0,get:function(){return n.FlexPlugin}});var o=r(6);Object.defineProperty(t,"getAssetsUrl",{enumerable:!0,get:function(){return o.getAssetsUrl}}),Object.defineProperty(t,"getRuntimeUrl",{enumerable:!0,get:function(){return o.getRuntimeUrl}});var i=r(7);Object.defineProperty(t,"loadJS",{enumerable:!0,get:function(){return i.loadJS}});var u=r(8);Object.defineProperty(t,"loadCSS",{enumerable:!0,get:function(){return u.loadCSS}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return Math.random().toString(26).slice(2)}},function(e,t){e.exports=window.Twilio.Flex},function(e,t){e.exports=Redux},function(e,t,r){e.exports=r(10)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPlugin=t.FlexPlugin=void 0;var n=function n(e){this.uniqueName="plugin-Signal2021-CRM",this.version="0.0.1",this.dependencies={"flex-plugin-scripts":"4.3.18-beta.0","flex-plugin":"4.3.18-beta.0","flex-ui":"1.27.0",react:"16.5.2","react-dom":"16.5.2"},this.name=e,console.log("loading "+this.name+"@"+this.version+" plugin")};t.FlexPlugin=n,t.loadPlugin=function(e){Twilio&&Twilio.Flex&&Twilio.Flex.Plugins?Twilio.Flex.Plugins.init(e):console.warn("This version of Flex does not appear to support plugins.")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAssetsUrl=t.getRuntimeUrl=void 0,t.getRuntimeUrl=function(){if(document&&document.currentScript){var e=document.currentScript;if("string"===typeof e.src){var t=e.src;return t.substr(0,t.lastIndexOf("/"))}}return""},t.getAssetsUrl=function(){return t.getRuntimeUrl()+"/assets"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadJS=void 0;var o=n(r(1));t.loadJS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("script");t.id="external-js-"+o.default(),t.type="text/javascript",t.src=e,document.body.appendChild(t)}))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadCSS=void 0;var o=n(r(1));t.loadCSS=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach((function(e){var t=document.createElement("link");t.id="external-css-"+o.default(),t.rel="stylesheet",t.type="text/css",t.media="all",t.href=e,document.head.appendChild(t)}))}},function(e,t){e.exports=React},function(e,t,r){"use strict";r.r(t);var n=r(0);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!==typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r(9);var o=r(2),i=r(3);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={isOpen:!0};var c=Object(i.combineReducers)({customTaskList:function reduce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISMISS_BAR":return _objectSpread2(_objectSpread2({},e),{},{isOpen:!1});default:return e}}}),l=function(e){!function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Signal2021CrmPlugin,e);var t=function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(Signal2021CrmPlugin);function Signal2021CrmPlugin(){return _classCallCheck(this,Signal2021CrmPlugin),t.call(this,"Signal2021CrmPlugin")}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Signal2021CrmPlugin,[{key:"init",value:function init(e,t){this.registerReducers(t),e.CRMContainer.defaultProps.uriCallback=function(e){return e?"https://app.hubspot.com/reports-dashboard/20542207/view/2256655?globalSearchQuery=".concat(e.attributes.name):"https://app.hubspot.com/contacts/20542207/objects/0-1/views/all/list"},e.AgentDesktopView.defaultProps.splitterOptions={initialFirstPanelSize:"300px",minimumFirstPanelSize:"300px"}}},{key:"registerReducers",value:function registerReducers(e){e.store.addReducer?e.store.addReducer("signal2021-crm",c):console.error("You need FlexUI > 1.9.0 to use built-in redux; you are currently on ".concat(o.VERSION))}}]),Signal2021CrmPlugin}(n.FlexPlugin);n.loadPlugin(l)}]);
//# sourceMappingURL=bundle.js.map
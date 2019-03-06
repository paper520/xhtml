/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_add__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_to_node__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_luna_library__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_luna_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_luna_library__);




var xhtml = function (selector) {

  if (selector && (selector.nodeType === 1 || selector.nodeType === 11 || selector.nodeType === 9)) {
    selector = [selector];
  }

  if (typeof selector == 'string') {
    selector = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_to_node__["a" /* default */])(selector)];
  }

  // 挂载对象方法
  var hook = {

    // DOM追加
    "append": __WEBPACK_IMPORTED_MODULE_0__dom_add__["a" /* append */],
    "prepend": __WEBPACK_IMPORTED_MODULE_0__dom_add__["b" /* prepend */],
    "before": __WEBPACK_IMPORTED_MODULE_0__dom_add__["c" /* before */],
    "after": __WEBPACK_IMPORTED_MODULE_0__dom_add__["d" /* after */],

    // 工具类
    "copy": function (callback, errorback) {
      __WEBPACK_IMPORTED_MODULE_2_luna_library___default.a.clipboard_copy(hook[0], callback, errorback);
      return hook;
    }

  };

  var flag;
  for (flag = 0; flag < selector.length; flag++) {
    hook[flag] = selector[flag];
  }
  hook.length = flag;

  return hook;
};

// 挂载静态方法
xhtml.copy = __WEBPACK_IMPORTED_MODULE_2_luna_library___default.a.clipboard_copy;
xhtml.animation = __WEBPACK_IMPORTED_MODULE_2_luna_library___default.a.animation;

/* harmony default export */ __webpack_exports__["a"] = (xhtml);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


window.copy1 = function () {
  // 复制
  __WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */].copy('这是一段文字');
};

window.copy2 = function () {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('tool')).copy();
};

// 轮询动画
window.anim = function () {
  __WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */].animation(function (deep) {
    console.log('deep:' + deep);
  }, 1000, function () {
    console.log('stop!');
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (global, factory) {

  'use strict';

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    global.innerSVG = factory();
  }

})(typeof window !== "undefined" ? window : this, function (undefined) {

  // 记录需要使用xlink命名空间常见的xml属性
  var xlink = ["href", "title", "show", "type", "role", "actuate"];
  var namespace_svg = "http://www.w3.org/2000/svg";
  var namespace_xlink = "http://www.w3.org/1999/xlink";

  return {

    // 获取svg字符串
    "get": function (target) {
      var frame = document.createElement("div"), i;
      for (i = 0; i < target.childNodes.length; i++) {
        // 深度克隆，克隆节点以及节点下面的子内容
        frame.appendChild(target.childNodes[i].cloneNode(true));
      }
      return frame.innerHTML;
    },

    // 设置svg字符串
    "set": function (target, svgstring) {
      if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {
        var frame = document.createElement("div"), i;
        frame.innerHTML = svgstring;
        var toSvgNode = function (htmlNode) {
          var svgNode = document.createElementNS(namespace_svg, (htmlNode.tagName + "").toLowerCase());
          var attrs = htmlNode.attributes, i;
          for (i = 0; attrs && i < attrs.length; i++) {
            if (xlink.indexOf(attrs[i].nodeName) >= 0) {
              // 针对特殊的svg属性，追加命名空间
              svgNode.setAttributeNS(namespace_xlink, 'xlink:' + attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
            } else {
              svgNode.setAttribute(attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
            }
          }
          return svgNode;
        };
        var rslNode = toSvgNode(frame.firstChild);
        (function toSVG(pnode, svgPnode) {
          var node = pnode.firstChild;
          if (node && node.nodeType == 3) {
            svgPnode.textContent = pnode.innerText;
            return;
          }
          while (node) {
            var svgNode = toSvgNode(node);
            svgPnode.appendChild(svgNode);
            if (node.firstChild) toSVG(node, svgNode);
            node = node.nextSibling;
          }
        })(frame.firstChild, rslNode);
        target.appendChild(rslNode);
      } else {
        // 如果当前浏览器提供了svg类型结点的innerHTML,我们还是使用浏览器提供的
        target.innerHTML = svgstring;
      }
    }

  };
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
* luna.js - Provides a quick and fragmented approach to common web-side!
* git+https://github.com/yelloxing/luna.js.git
* 
* author 心叶
*
* version 2.0.1
* 
* build Sat Jul 01 2017
*
* Copyright yelloxing
* Released under the MIT license
* 
* Date:Fri Jan 25 2019 22:01:47 GMT+0800 (GMT+08:00)
*/

/**
 * 浏览器端使用
 * 支持npm管理 + 浏览器直接引入
 */
(function (global, factory) {

    'use strict';

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.luna = factory();
    }

})(typeof window !== "undefined" ? window : this, function (undefined) {

    'use strict';

    var luna = {};

    
// 字符串html变成dom结点
// 该方法不支持svg等特殊标签
var _string_to_dom = function (html_string) {
    var frameDiv = document.createElement("div");
    frameDiv.innerHTML = html_string;
    return frameDiv.childNodes[0];
};

// 判断是不是一个结点
var _is_dom = function (dom) {
    return (dom && (dom.nodeType === 1 || dom.nodeType === 11 || dom.nodeType === 9));
};

/**
 * 复制文本到剪切板
 * @param {string / dom} text 需要复制的字符串或结点（如果是结点，复制的是结点的innerText）
 * @param {function} callback 正确回调
 * @param {function} errorback 错误回调
 */
luna.clipboard_copy = function (text, callback, errorback) {
    if (_is_dom(text)) text = text.innerText;

    // 初始化准备好结点和数据
    var random = (Math.random() * 10000).toFixed(0),
        body = document.getElementsByTagName('body')[0],
        textarea = _string_to_dom('<textarea id="luna-clipboard-textarea-' + random + '" style="position:absolute">' + text + '</textarea>');

    // 添加到页面
    body.insertBefore(textarea, body.childNodes[0]);

    // 执行复制
    document.getElementById("luna-clipboard-textarea-" + random).select();
    try {
        var result = window.document.execCommand("copy", false, null);

        if (result) {
            if (!!callback) {
                callback();
            }
        } else {
            if (!!errorback) {
                errorback();
            }
        }

    } catch (e) {
        if (!!errorback) {
            errorback();
        }
    }

    // 结束后删除
    body.removeChild(document.getElementById("luna-clipboard-textarea-" + random));
};


/**
 * 动画轮播
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 * 
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
luna.animation = function (doback, duration, callback) {

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('tick is required!');
            }
            duration = duration || luna.animation.speeds;
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            luna.animation.timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!luna.animation.timerId) {
                luna.animation.timerId = window.setInterval(clock.tick, luna.animation.interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = luna.animation.timers;
            luna.animation.timers = [];
            luna.animation.timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    luna.animation.timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if (luna.animation.timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if (luna.animation.timerId) {
                window.clearInterval(luna.animation.timerId);
                luna.animation.timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in luna.animation.timers) {
            if (luna.animation.timers[i].id == id) {
                luna.animation.timers[i].id = undefined;
                return;
            }
        }
    };

};
//当前正在运动的动画的tick函数堆栈
luna.animation.timers = [];
//唯一定时器的定时间隔
luna.animation.interval = 13;
//指定了动画时长duration默认值
luna.animation.speeds = 400;
//定时器ID
luna.animation.timerId = null;

/**
 * 获取一个结点的全部样式
 * @param {dom} dom 被操作的结点
 * @param {string} name 属性名称，可选，如果填了，只反对对应的属性值
 */
luna.dom_styles = function (dom, name) {
    if (!_is_dom(dom)) {
        throw new Error('DOM is required!');
    }
    if (document.defaultView && document.defaultView.getComputedStyle) {
        if (name && typeof name === 'string') {
            return document.defaultView.getComputedStyle(dom, null).getPropertyValue(name); //第二个参数是伪类
        } else {
            return document.defaultView.getComputedStyle(dom, null);
        }
    } else {
        if (name && typeof name === 'string') {
            return dom.currentStyle.getPropertyValue(name);
        } else {
            return dom.currentStyle;
        }
    }
};


    return luna;

});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_innersvg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_innersvg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_innersvg__);


/* harmony default export */ __webpack_exports__["a"] = (function (template) {

  var frame = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  // 把传递元素类型和标记进行统一处理
  // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  if (/^(?:\\.|[\w-]|[^0-\xa0])+$/.test(template)) template = "<" + template.trim() + "></" + template.trim() + ">";
  __WEBPACK_IMPORTED_MODULE_0_innersvg___default.a.set(frame, template);
  var childNodes = frame.childNodes, flag, child;
  for (flag = 0; flag < childNodes.length; flag++) {
    if (childNodes[flag].nodeType === 1 || childNodes[flag].nodeType === 9 || childNodes[flag].nodeType === 11) {
      child = childNodes[flag];
      break;
    }
  }
  // 如果不是svg元素，重新用html命名空间创建
  // 目前结点只考虑了svg元素和html元素
  // 如果考虑别的元素类型需要修改此处判断方法
  if (!child || child.tagName == 'canvas' || /[A-Z]/.test(child.tagName)) {
    frame = document.createElement("div");
    frame.innerHTML = template;
    childNodes = frame.childNodes;
    for (flag = 0; flag < childNodes.length; flag++) {
      if (childNodes[flag].nodeType === 1 || childNodes[flag].nodeType === 9 || childNodes[flag].nodeType === 11) {
        child = childNodes[flag];
        break;
      }
    }
  }
  return child;

});;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = append;
/* harmony export (immutable) */ __webpack_exports__["b"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["c"] = before;
/* harmony export (immutable) */ __webpack_exports__["d"] = after;
function append() {

  return this;
};

function prepend() {

  return this;
};

function before() {

  return this;
};

function after() {

  return this;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
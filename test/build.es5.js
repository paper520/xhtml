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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_add__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_delete__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_to_node__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_luna_library__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_luna_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_luna_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attr__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search__ = __webpack_require__(16);









var xhtml = function (selector) {

  if (selector && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__help__["a" /* isNode */])(selector)) {
    selector = [selector];
  }

  if (typeof selector == 'string') {
    selector = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_to_node__["a" /* default */])(selector)];
  }

  /**
   * 挂载对象方法
   * ---------------------
   */
  var hook = {

    // DOM追加
    "append": __WEBPACK_IMPORTED_MODULE_0__dom_add__["a" /* append */],
    "prepend": __WEBPACK_IMPORTED_MODULE_0__dom_add__["b" /* prepend */],
    "before": __WEBPACK_IMPORTED_MODULE_0__dom_add__["c" /* before */],
    "after": __WEBPACK_IMPORTED_MODULE_0__dom_add__["d" /* after */],

    // 复制
    "copy": function (callback, errorback) {
      __WEBPACK_IMPORTED_MODULE_3_luna_library___default.a.clipboard_copy(hook[0], callback, errorback);
      return hook;
    },

    // DOM删除
    "remove": __WEBPACK_IMPORTED_MODULE_1__dom_delete__["a" /* remove */],

    // css样式
    "css": __WEBPACK_IMPORTED_MODULE_4__css__["a" /* default */],

    // 属性
    "attr": __WEBPACK_IMPORTED_MODULE_5__attr__["a" /* default */],

    // 查找
    "eq": __WEBPACK_IMPORTED_MODULE_7__search__["a" /* eq */],
    "children": __WEBPACK_IMPORTED_MODULE_7__search__["b" /* children */],
    "parent": __WEBPACK_IMPORTED_MODULE_7__search__["c" /* parent */],
    "parents": __WEBPACK_IMPORTED_MODULE_7__search__["d" /* parents */],
    "next": __WEBPACK_IMPORTED_MODULE_7__search__["e" /* next */],
    "prev": __WEBPACK_IMPORTED_MODULE_7__search__["f" /* prev */]

  };

  var flag;
  for (flag = 0; flag < selector.length; flag++) {
    hook[flag] = selector[flag];
  }
  hook.length = flag;

  // 标记这是一个xhtml对象
  hook.__type__ = 'xhtml';

  return hook;
};

/**
 * 挂载静态方法
 * ---------------------
 */

// 复制
xhtml.copy = __WEBPACK_IMPORTED_MODULE_3_luna_library___default.a.clipboard_copy;

// 轮询动画
xhtml.animation = __WEBPACK_IMPORTED_MODULE_3_luna_library___default.a.animation;

/* harmony default export */ __webpack_exports__["a"] = (xhtml);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNode;
/* harmony export (immutable) */ __webpack_exports__["b"] = isXHTML;
// 判断是不是结点
function isNode(node) {
  return node && (node.nodeType === 1 || node.nodeType === 11 || node.nodeType === 9);
};

// 判断是不是xhtml对象
function isXHTML(xhtml) {
  return xhtml.__type__ === 'xhtml';
};

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_innersvg__ = __webpack_require__(10);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


var xhtmlObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('attr'));

xhtmlObj.attr('name', 'newname');

console.log(xhtmlObj.attr('style'));
console.log(xhtmlObj.attr('name'));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


var xhtmlObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('css'));

console.log(xhtmlObj.css('color'));

console.log(xhtmlObj.css());

xhtmlObj.css('color', 'blue');

console.log(xhtmlObj.css('color'));

xhtmlObj.css({
  "color": "green",
  "font-size": "50px"
});

console.log(xhtmlObj.css('color'));
console.log(xhtmlObj.css('font-size'));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('dom_add')).append('<div>append</div>').prepend('<div>prepend</div>').after('<div>after</div>').before('<div>before</div>');

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('dom_delete')).remove();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(0);


var xhtmlObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_core__["a" /* default */])(document.getElementById('search'));

console.log(xhtmlObj.eq(0));

console.log(xhtmlObj.children());

console.log(xhtmlObj.parent());
console.log(xhtmlObj.parents());

console.log(xhtmlObj.children().next());
console.log(xhtmlObj.next());

console.log(xhtmlObj.children().eq(2).prev());
console.log(xhtmlObj.prev());

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(12);


/**
 * 设置或返回被选元素的一个属性
 */
/* harmony default export */ __webpack_exports__["a"] = (function (attr, val) {
  if (val == null || val == undefined) {
    return this.length > 0 ? this[0].getAttribute(attr) : undefined;
  } else {
    var flag;
    for (flag = 0; flag < this.length; flag++) {
      // 如果是xml元素
      // 针对xlink使用特殊方法赋值
      if (/[A-Z]/.test(this[flag].tagName) && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* xlink */].indexOf(attr) >= 0) {
        this[flag].setAttributeNS(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* namespace */].xlink, 'xlink:' + attr, val);
      } else {
        this[flag].setAttribute(attr, val);
      }
    }
    return this;
  }
});;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return xlink; });
// 命名空间路径
let namespace = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// 记录需要使用xlink命名空间常见的xml属性
let xlink = ["href", "title", "show", "type", "role", "actuate"];



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luna_library__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luna_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luna_library__);


/**
 * 设置或返回被选元素的一个样式属性
 */
/* harmony default export */ __webpack_exports__["a"] = (function (name, style) {
  var flag;
  if (typeof name === 'string' && arguments.length === 1) {
    return __WEBPACK_IMPORTED_MODULE_0_luna_library___default.a.dom_styles(this[0], name);
  }
  if (typeof name === 'string' && typeof style === 'string') {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].style[name] = style;
    }
  } else if (typeof name === 'object') {
    for (var key in name) {
      for (flag = 0; flag < this.length; flag++) {
        this[flag].style[key] = name[key];
      }
    }
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_luna_library___default.a.dom_styles(this[0]);
  }
  return this;
});;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = append;
/* harmony export (immutable) */ __webpack_exports__["b"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["c"] = before;
/* harmony export (immutable) */ __webpack_exports__["d"] = after;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_to_node__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help__ = __webpack_require__(1);



/**
 * 在被选元素内部的结尾插入内容
 */
function append(node) {
  var flag;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(node);
    }
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isXHTML */])(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(node[0]);
    }
  } else if (typeof node == 'string') {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])(node));
    }
  } else {
    throw new Error("Not acceptable type!");
  }
  return this;
};

/**
 * 在被选元素内部的开头插入内容
 */
function prepend(node) {
  var flag;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(node, this[0].childNodes[0]);
    }
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isXHTML */])(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(node[0], this[0].childNodes[0]);
    }
  } else if (typeof node == 'string') {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])(node), this[0].childNodes[0]);
    }
  } else {
    throw new Error("Not acceptable type!");
  }
  return this;
};

/**
 * 在被选元素之前插入内容
 */
function before(node) {
  var parent, flag;
  for (flag = 0; flag < this.length; flag++) {
    parent = this[flag].parentNode || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])('body');
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(node)) {
      parent.insertBefore(node, this[flag]);
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isXHTML */])(node)) {
      parent.insertBefore(node[0], this[flag]);
    } else if (typeof node == 'string') {
      parent.insertBefore(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])(node), this[flag]);
    } else {
      throw new Error("Not acceptable type!");
    }
  }
  return this;
};

/**
 * 在被选元素之后插入内容
 */
function after(node) {
  var flag, parent;
  for (flag = 0; flag < this.length; flag++) {
    parent = this[flag].parentNode || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])('body');
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(node)) {
      parent.insertBefore(node, this[flag].nextSibling); //如果第二个参数undefined,在结尾追加，目的一样达到
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["b" /* isXHTML */])(node)) {
      parent.insertBefore(node[0], this[flag].nextSibling);
    } else if (typeof node == 'string') {
      parent.insertBefore(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_to_node__["a" /* default */])(node), this[flag].nextSibling);
    } else {
      throw new Error("Not acceptable type!");
    }
  }
  return this;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = remove;
/**
 * 删除被选元素（及其子元素）
 */
function remove() {
  var flag;
  for (flag = 0; flag < this.length; flag++) {
    this[flag].parentNode.removeChild(this[flag]);
  }
  return this;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eq;
/* harmony export (immutable) */ __webpack_exports__["b"] = children;
/* harmony export (immutable) */ __webpack_exports__["c"] = parent;
/* harmony export (immutable) */ __webpack_exports__["d"] = parents;
/* harmony export (immutable) */ __webpack_exports__["e"] = next;
/* harmony export (immutable) */ __webpack_exports__["f"] = prev;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help__ = __webpack_require__(1);



/**
 * 筛选被选元素
*/
function eq(index) {
  if (this.length > index) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(this[index]);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])([]);
};

/**
 * 返回被选元素的所有直接子元素
*/
function children() {
  var nodes = [];
  var i, j, children;
  for (i = 0; i < this.length; i++) {
    children = this[i].childNodes;
    for (j = 0; j < children.length; j++) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(children[j])) {
        nodes.push(children[j]);
      }
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(nodes);
};
/**
 * 返回全部被选元素的直接父元素
*/
function parent() {
  var nodes = [];
  var i, parent;
  for (i = 0; i < this.length; i++) {
    parent = this[i].parentNode;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(parent)) {
      nodes.push(parent);
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(nodes);
};

/**
 * 返回被选元素的所有祖先元素（不包括祖先的兄弟）
*/
function parents() {
  var nodes = [];
  var i, parent;
  for (i = 0; i < this.length; i++) {
    parent = this[i].parentNode;
    while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(parent)) {
      nodes.push(parent);
      parent = parent.parentNode;
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(nodes);
};

/**
 * 返回全部被选元素的下一个同胞元素
*/
function next() {
  var nodes = [];
  var i, sibling;
  for (i = 0; i < this.length; i++) {
    sibling = this[i].nextSibling;
    while (sibling && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(sibling)) {
      sibling = sibling.nextSibling;
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(sibling)) {
      nodes.push(sibling);
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(nodes);
};

/**
 * 返回全部被选元素的前一个同胞元素
*/
function prev() {
  var nodes = [];
  var i, sibling;
  for (i = 0; i < this.length; i++) {
    sibling = this[i].previousSibling;
    while (sibling && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(sibling)) {
      sibling = sibling.previousSibling;
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__help__["a" /* isNode */])(sibling)) {
      nodes.push(sibling);
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */])(nodes);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(9);
__webpack_require__(5);
__webpack_require__(4);
module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
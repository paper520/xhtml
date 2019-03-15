import { append, prepend, before, after } from './dom_add';
import { remove } from './dom_delete';
import toNode from 'to-node';
import luna from 'luna-library';
import css from './css';
import attr from './attr';
import { isNode } from './help';
import { eq, children, parent, parents, next, prev } from './search';

var xhtml = function (selector) {

  if (selector && isNode(selector)) {
    selector = [selector];
  }

  if (typeof selector == 'string') {
    selector = [toNode(selector)];
  }

  /**
   * 挂载对象方法
   * ---------------------
   */
  var hook = {

    // DOM追加
    "append": append,
    "prepend": prepend,
    "before": before,
    "after": after,

    // 复制
    "copy": function (callback, errorback) {
      luna.clipboard_copy(hook[0], callback, errorback);
      return hook;
    },

    // DOM删除
    "remove": remove,

    // css样式
    "css": css,

    // 属性
    "attr": attr,

    // 查找
    "eq": eq,
    "children": children,
    "parent": parent,
    "parents": parents,
    "next": next,
    "prev": prev

  };

  var xhtmlFun = function () { };
  var key;
  for (key in hook) {
    if (hook.hasOwnProperty(key))
      xhtmlFun.prototype[key] = hook[key];
  }

  var xhtmlObj = new xhtmlFun();

  var flag;
  for (flag = 0; flag < selector.length; flag++) {
    xhtmlObj[flag] = selector[flag];
  }
  xhtmlObj.length = flag;

  // 标记这是一个xhtml对象
  xhtmlObj.__type__ = 'xhtml';

  return xhtmlObj;

};

/**
 * 挂载静态方法
 * ---------------------
 */

// 复制
xhtml.copy = luna.clipboard_copy;

// 轮询动画
xhtml.animation = luna.animation;

export default xhtml;
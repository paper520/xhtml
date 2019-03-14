import { append, prepend, before, after } from './dom_add';
import { remove } from './dom_delete';
import toNode from 'to-node';
import luna from 'luna-library';
import css from './css';
import attr from './attr';
import { eq, child, children, parent, parents, next, nextAll, prev, prevAll, siblings } from './search';

var xhtml = function (selector) {

  if (selector && (selector.nodeType === 1 || selector.nodeType === 11 || selector.nodeType === 9)) {
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
    "child": child,
    "children": children,
    "parent": parent,
    "parents": parents,
    "next": next,
    "nextAll": nextAll,
    "prev": prev,
    "prevAll": prevAll,
    "siblings": siblings

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
xhtml.copy = luna.clipboard_copy;

// 轮询动画
xhtml.animation = luna.animation;

export default xhtml;
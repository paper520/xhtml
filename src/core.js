import { append, prepend, before, after } from './dom_add';
import toNode from 'to-node';
import luna from 'luna-library';

var xhtml = function (selector) {

  if (selector && (selector.nodeType === 1 || selector.nodeType === 11 || selector.nodeType === 9)) {
    selector = [selector];
  }

  if (typeof selector == 'string') {
    selector = [toNode(selector)];
  }

  // 挂载对象方法
  var hook = {

    // DOM追加
    "append": append,
    "prepend": prepend,
    "before": before,
    "after": after,

    // 工具类
    "copy": function (callback, errorback) {
      luna.clipboard_copy(hook[0], callback, errorback);
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
xhtml.copy = luna.clipboard_copy;
xhtml.animation = luna.animation;

export default xhtml;
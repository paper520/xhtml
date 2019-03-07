import luna from 'luna-library';

/**
 * 设置或返回被选元素的一个样式属性
 */
export default function (name, style) {
  var flag;
  if (typeof name === 'string' && arguments.length === 1) {
    return luna.dom_styles(this[0], name);
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
    return luna.dom_styles(this[0]);
  }
  return this;
};
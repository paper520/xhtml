import { xlink, namespace } from './config';

/**
 * 设置或返回被选元素的一个属性
 */
export default function (attr, val) {
  if (val == null || val == undefined) {
    return this.length > 0 ? this[0].getAttribute(attr) : undefined;
  } else {
    var flag;
    for (flag = 0; flag < this.length; flag++) {
      // 如果是xml元素
      // 针对xlink使用特殊方法赋值
      if (/[A-Z]/.test(this[flag].tagName) && xlink.indexOf(attr) >= 0) {
        this[flag].setAttributeNS(namespace.xlink, 'xlink:' + attr, val);
      } else {
        this[flag].setAttribute(attr, val);
      }
    }
    return this;
  }
};
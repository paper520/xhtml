import toNode from 'to-node';
import { isNode, isXHTML } from './help';

/**
 * 在被选元素内部的结尾插入内容
 */
export function append(node) {
  var flag;
  if (isNode(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(node);
    }
  } else if (isXHTML(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(node[0]);
    }
  } else if (typeof node == 'string') {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].appendChild(toNode(node));
    }
  } else {
    throw new Error("Not acceptable type!");
  }
  return this;
};

/**
 * 在被选元素内部的开头插入内容
 */
export function prepend(node) {
  var flag;
  if (isNode(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(node, this[0].childNodes[0]);
    }
  } else if (isXHTML(node)) {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(node[0], this[0].childNodes[0]);
    }
  } else if (typeof node == 'string') {
    for (flag = 0; flag < this.length; flag++) {
      this[flag].insertBefore(toNode(node), this[0].childNodes[0]);
    }
  } else {
    throw new Error("Not acceptable type!");
  }
  return this;
};

/**
 * 在被选元素之前插入内容
 */
export function before(node) {
  var parent, flag;
  for (flag = 0; flag < this.length; flag++) {
    parent = this[flag].parentNode || toNode('body');
    if (isNode(node)) {
      parent.insertBefore(node, this[flag]);
    } else if (isXHTML(node)) {
      parent.insertBefore(node[0], this[flag]);
    } else if (typeof node == 'string') {
      parent.insertBefore(toNode(node), this[flag]);
    } else {
      throw new Error("Not acceptable type!");
    }
  }
  return this;
};

/**
 * 在被选元素之后插入内容
 */
export function after(node) {
  var flag, parent;
  for (flag = 0; flag < this.length; flag++) {
    parent = this[flag].parentNode || toNode('body');
    if (isNode(node)) {
      parent.insertBefore(node, this[flag].nextSibling); //如果第二个参数undefined,在结尾追加，目的一样达到
    } else if (isXHTML(node)) {
      parent.insertBefore(node[0], this[flag].nextSibling);
    } else if (typeof node == 'string') {
      parent.insertBefore(toNode(node), this[flag].nextSibling);
    } else {
      throw new Error("Not acceptable type!");
    }
  }
  return this;
};
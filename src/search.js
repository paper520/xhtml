import xhtml from './core';
import { isNode } from './help';

/**
 * 筛选被选元素
*/
export function eq(index) {
  if (this.length > index) return xhtml(this[index]);
  return xhtml([]);
};

/**
 * 返回被选元素的所有直接子元素
*/
export function children() {
  var nodes = [];
  var i, j, children;
  for (i = 0; i < this.length; i++) {
    children = this[i].childNodes;
    for (j = 0; j < children.length; j++) {
      if (isNode(children[j])) {
        nodes.push(children[j]);
      }
    }
  }
  return xhtml(nodes);
};
/**
 * 返回全部被选元素的直接父元素
*/
export function parent() {
  var nodes = [];
  var i, parent;
  for (i = 0; i < this.length; i++) {
    parent = this[i].parentNode;
    if (isNode(parent)) {
      nodes.push(parent);
    }
  }
  return xhtml(nodes);
};

/**
 * 返回被选元素的所有祖先元素（不包括祖先的兄弟）
*/
export function parents() {
  var nodes = [];
  var i, parent;
  for (i = 0; i < this.length; i++) {
    parent = this[i].parentNode;
    while (isNode(parent)) {
      nodes.push(parent);
      parent = parent.parentNode;
    }
  }
  return xhtml(nodes);
};

/**
 * 返回全部被选元素的下一个同胞元素
*/
export function next() {
  var nodes = [];
  var i, sibling;
  for (i = 0; i < this.length; i++) {
    sibling = this[i].nextSibling;
    while (sibling && !isNode(sibling)) {
      sibling = sibling.nextSibling;
    }
    if (isNode(sibling)) {
      nodes.push(sibling);
    }
  }
  return xhtml(nodes);
};

/**
 * 返回全部被选元素的前一个同胞元素
*/
export function prev() {
  var nodes = [];
  var i, sibling;
  for (i = 0; i < this.length; i++) {
    sibling = this[i].previousSibling;
    while (sibling && !isNode(sibling)) {
      sibling = sibling.previousSibling;
    }
    if (isNode(sibling)) {
      nodes.push(sibling);
    }
  }
  return xhtml(nodes);
};
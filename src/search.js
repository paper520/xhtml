import xhtml from './core';

/**
 * 筛选被选元素
*/
export function eq(index) {
  if (this.length > index) return xhtml(this[index]);
  return xhtml([]);
};

/**
 * 返回被选元素的第一个子元素
*/
export function child() {

};

/**
 * 返回被选元素的所有直接子元素
*/
export function children() {
  
};
/**
 * 返回全部被选元素的直接父元素
*/
export function parent() {

};

/**
 * 返回被选元素的所有祖先元素（不包括祖先的兄弟）
*/
export function parents() {

};

/**
 * 返回全部被选元素的下一个同胞元素
*/
export function next() {

};
/**
 * 返回被选元素的所有跟随的同胞元素
*/
export function nextAll() {

};

/**
 * 返回全部被选元素的前一个同胞元素
*/
export function prev() {

};

/**
 * 返回被选元素的所有之前的同胞元素
*/
export function prevAll() {

};

/**
 * 返回被选元素的所有同胞元素，包括自己
*/
export function siblings() {

};
// 判断是不是结点
export function isNode(node) {
  return node && (node.nodeType === 1 || node.nodeType === 11 || node.nodeType === 9);
};

// 判断是不是xhtml对象
export function isXHTML(xhtml) {
  return xhtml.__type__ === 'xhtml';
};
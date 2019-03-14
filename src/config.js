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

export {
  namespace,
  xlink
};
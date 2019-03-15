import xhtml from '../../src/core';

var xhtmlObj = xhtml(document.getElementById('search'));

console.log(xhtmlObj.eq(0));

console.log(xhtmlObj.children());

console.log(xhtmlObj.parent());
console.log(xhtmlObj.parents());

console.log(xhtmlObj.children().next());
console.log(xhtmlObj.next());

console.log(xhtmlObj.children().eq(2).prev());
console.log(xhtmlObj.prev());
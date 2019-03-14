import xhtml from '../../src/core';

var xhtmlObj = xhtml(document.getElementById('attr'));

xhtmlObj.attr('name', 'newname');

console.log(xhtmlObj.attr('style'));
console.log(xhtmlObj.attr('name'));

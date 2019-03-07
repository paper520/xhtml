import xhtml from '../../src/core';

var xhtmlObj = xhtml(document.getElementById('css'));

console.log(xhtmlObj.css('color'));

console.log(xhtmlObj.css());

xhtmlObj.css('color', 'blue');

console.log(xhtmlObj.css('color'));


xhtmlObj.css({
  "color": "green",
  "font-size": "50px"
});

console.log(xhtmlObj.css('color'));
console.log(xhtmlObj.css('font-size'));
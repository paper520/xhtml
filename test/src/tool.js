import xhtml from '../../src/core';

window.copy1 = function () {
  // 复制
  xhtml.copy('这是一段文字');
}

window.copy2 = function () {
  xhtml(document.getElementById('tool')).copy();
};

// 轮询动画
window.anim = function () {
  xhtml.animation(function (deep) {
    console.log('deep:' + deep);
  }, 1000, function () {
    console.log('stop!');
  });
};
工具类方法
==========

一些在日常开发中，和DOM有之间或间接关系的高效方法。

复制到剪切板
--------------------
这个分为二类，一类是挂载在静态类xhtml上的：

```js
/**
 * 复制文本到剪切板
 * @param {string / dom} text 需要复制的字符串或结点（如果是结点，复制的是结点的innerText）
 * @param {function} callback 正确回调
 * @param {function} errorback 错误回调
 */
xhtml.copy(text, callback, errorback);
```

另一类是挂载在对象xhtmlObj上的：

```js
// 和上面的类似，只不过复制的内容已经确定是当前维护的结点
xhtmlObj.copy(callback, errorback);
```

轮询动画
-------------------
严格的说，不是动画，只是一个辅助你开发动画效果的方法：

```js
/**
 * 动画轮播
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 * 
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
var stop=xhtml.animation(doback, duration, callback);
```

如果你想提前结束动画执行，可以调用下面的方法：

```js
stop();
```
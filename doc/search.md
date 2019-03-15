结点查找
=========

筛选或拼接
-----------------

选择被选元素中指定元素

```js
/**
* index表示指定的元素序号
* 返回xhtmlObj对象
* （下同）
*/
xhtmlObj.eq(index);
```

查找
-----------------

返回被选元素的所有直接子元素

```js
xhtmlObj.children();
```

返回全部被选元素的直接父元素

```js
xhtmlObj.parent();
```

返回被选元素的所有祖先元素（不包括祖先的兄弟）

```js
xhtmlObj.parents();
```

返回全部被选元素的下一个同胞元素

```js
xhtmlObj.next();
```

返回全部被选元素的前一个同胞元素

```js
xhtmlObj.prev();
```
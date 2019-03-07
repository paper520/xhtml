结点的添加和删除
==========

添加结点
-----------------

在被选元素内部的结尾插入内容

```js
/*
* dom可以是：
*   1.结点
*   2.xhtmlObj
*   3.html或svg字符串
*
* 返回xhtmlObj对象
* （下同）
*/
xhtmlObj.append(dom);
```

在被选元素内部的开头插入内容

```js
xhtmlObj.prepend(dom);
```

在被选元素之前插入内容

```js
xhtmlObj.before(dom);
```

在被选元素之后插入内容

```js
xhtmlObj.after(dom);
```

删除结点
----------------

删除被选元素（及其子元素）

```js
xhtmlObj.remove();
```
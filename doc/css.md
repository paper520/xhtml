css样式编辑和查询
===================

设置或返回被选元素的一个样式属性
----------

```js
xhtmlObj.css(name, style);
```

参数可以分为下面几类：

> (name,value)：比如xhtmlObj.css('color','red')，针对一个属性设置特定的值

> (name)：比如xhtmlObj.css('color')，获取一个特定属性的值

> ()：也就是xhtmlObj.css()，返回全部的样式

> (json)：比如xhtmlObj.css({"color":"blue","font-size":"12px"})，一次设置多个属性的值

另外需要注意的是，这里获取的值是浏览器渲染后的值，举个例子：

比如你设置color为red，调用这里的方法获取color的值会返回rgb(255, 0, 0)，这就是浏览器最后解析的实际值。

当然，及时你没有设置，只有那个属性有默认值都可以，因为我们获取的是渲染后的值，请注意这一点。


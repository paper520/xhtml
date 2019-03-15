# xhtml.js
常用的html&svg操作集合。Common set of html&svg operations.

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

如何引入？
--------------------------------------
```bash
npm install --save xhtml.js
```

安装好了，可以这样调用：

```js
import xhtml from 'xhtml.js';
```

如何使用？
---------------------------------------
xhtml有二种使用方法：直接调用xhtml上的静态方法和调用xhtml对象上的方法。

获取xhtml对象的方法很简单：

```js
/*
* doms有三种选项：
*   1.DOM结点
*   2.DOM结点集合（必须有length属性）
*   3.html或svg字符串（比如："<g></g>"）
*/
var xhtmlObj=xhtml(doms);
```

下面的文档会列出全部挂载在xhtml类和xhtml对象上的方法（xhtml表示类，xhtmlObj表示对象）：

- [工具类方法（比如复制到剪切板、轮询动画等）](./doc/tool.md)
- [结点的添加和删除](./doc/dom_add&delete.md)
- [css样式和attr属性编辑和查询](./doc/css_attr.md)
- [结点查找](./doc/search.md)

### 免责声明

*   项目中部分数据（如图片等）来自互联网，如果侵犯到对应权益者请联系我们，方便我们及时删除！
*   本项目保留贡献者全部权利，发生的任何纠纷，本项目作者和维护人概不负责，如有侵权，请及时和我们取得联系。

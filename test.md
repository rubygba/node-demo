---

---

### eTouch是一个移动端无依赖js手势库

众所周知，原生js的touch事件不能很好的识别移动端手势，在日常开发中往往依赖hammer，或者使用zepto、vue等框架的touch插件。

但即便小如hammer，很多手势日常中也不必使用。想要自己造个轮子、或者是更小的手势库？不妨看看MeCKodo巨巨的eTouch。

eTouch源码不到250行，使用微积分算法识别手势路径，应用于最常见的点击、上下左右滑动。

### demo

[eTouch演示和说明](http://meckodo.github.io/eTouch/clock.html)

### eTouch使用

事件代理的方式：

``` html
<body>
  <div id="pox">
    <ul>
      <li>Lorem ipsum dolor sit amet.1</li>
      <li>Lorem ipsum dolor sit amet.2</li>
      <li>Lorem ipsum dolor sit amet.3</li>
    </ul>
  </div>

  <script type="text/javascript">
    //事件代理 !!!!!第一个参数仅支持id!!!!!!
    //支持复杂选择器代理
    etouch('#pox','ul li',function(e,touch) {
      e.clock = true;  //给div加锁,完全阻止默认事件

      console.log('点击（tap）');
      console.log(touch);
    }).on('swiper',function(e,touch) {
      console.log('实时获取滑动');
    }).on('up',function(e,touch) {
      console.log('上滑回调');
    }).on('down',function(e,touch) {
      console.log('下滑回调');
    }).on('left',function(e,touch) {
      console.log('左滑回调');
    }).on('right',function(e,touch) {
      console.log('右滑回调');
    });
  </script>
</body>
```

批量绑定的方式：

``` html
<body>
  <div id="pox">
    <ul>
      <li>Lorem ipsum dolor sit amet.1</li>
      <li>Lorem ipsum dolor sit amet.2</li>
      <li>Lorem ipsum dolor sit amet.3</li>
    </ul>
  </div>

  <script>
    // 直接事件批量绑定
    etouch('li', function(e,touch) {
      console.log(this,e,touch);
    }).on('left',function() {})
    // e为事件对象，touch为触摸返回对象
  </script>
</body>
```

注意事项：

- 支持AMD和CMD加载
- `e.clock = true` 给div加锁，阻止默认事件
- 事件代理第一个参数仅支持id作为参数

### 源码分析

复杂选择器实现： querySelector和遍历

### 项目中的应用

[滑动删除选项](http://meckodo.github.io/eTouch/list.html)

---

1. 是什么，解决什么问题
2. 什么样子，预览
3. 如何使用
4. 如何工作的（源码分析，基本流程）
5. 总结，收获

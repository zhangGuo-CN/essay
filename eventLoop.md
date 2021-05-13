事件循环机制中的宏任务，微任务

宏在哪？
宏在对应浏览器的线程层面（
  GUI 渲染线程
  JS 引擎线程 (微任务讨论的范围)
  事件触发线程（onclick() onmouseup() ）
  定时触发器线程（setTimeOut()）
  异步 HTTP 请求线程
）

非常好的例子：https://www.cnblogs.com/hity-tt/p/6729118.html

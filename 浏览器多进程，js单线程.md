                                          事件触发线程
                                          异步请求线程
                                          定时器线程
                                          GUI线程（html,css解析器，布局layout模块，绘图模块）
                                          js主线程（js引擎）
		            渲染进程（渲染引擎）（5个）		
浏览器		        Browser进程
(关注前两个)	    GPU进程

规范：css放前面
原因：浏览器的http 请求线程，和GUI线程可以同步进行。就能一边解析页面，一边请求 css 同时解析 css

GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列( 即任务队列 )中等到 JS 引擎空闲时立即被执行

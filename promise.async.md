promise不是一种新的语法，而是一种新的写法，是封装好了的。我们也可自己实现

首先在mdn中，promise是一个内置对象。
async，await属于表达式和运算符（expression）范围（区别于statement语句）。
await是操作符，用于等待一个Promise 对象

promise 是【异步函数】的同步解决方案。
它针对的是【异步函数（任务）】和【依赖异步函数（任务）
处理结果的后续函数】。
因为jquery中ajax函数的配置项async:false 
会阻塞掉所有其后的所有代码。
但是promise处理后的【异步任务】和【依赖异步任务结果的后续函数】
，同其同一层级的其他无关函数仍是异步关系。

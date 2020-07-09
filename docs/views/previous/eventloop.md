---
title: eventloop
date: 2019-03-07 17:42:38
tags:
  - javaScript
categories:
  - 前端
---

::: tip

**宏任务**

| #                     | 浏览器 | Node  |
| --------------------- | :----: | :---: |
| I/O                   |   ✅    |   ✅   |
| setTimeout            |   ✅    |   ✅   |
| setInterval           |   ✅    |   ✅   |
| setImmediate          |   ❌    |   ✅   |
| requestAnimationFrame |   ✅    |   ❌   |

**微任务**

| #                               | 浏览器 | Node  |
| ------------------------------- | :----: | :---: |
| process.nextTick                |   ❌    |   ✅   |
| MutationObserver Object.observe |   ✅    |   ❌   |
| Promise.then catch finally      |   ✅    |   ✅   |

:::

<!-- more -->

> process.nextTick的概念和then不太一样，process.nextTick是加入到执行栈底部，所以和其他的表现并不一致

![k2eIu8.png](https://s2.ax1x.com/2019/02/20/k2eIu8.png)

# 参考

[微任务、宏任务与Event-Loop](https://www.cnblogs.com/jiasm/p/9482443.html)

[图解搞懂JavaScript引擎Event Loop](https://juejin.im/post/5a6309f76fb9a01cab2858b1)

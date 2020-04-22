---
title: 理解async&await
date: 2019-01-25  18:20:34
tags: 
  - javaScript
  - ES6
categories: 
  - 前端
---

::: tip

async function 声明用于定义一个返回 AsyncFunction 对象的异步函数。异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。但是如果你的代码使用了
异步函数，它的语法和结构会更像是标准的同步函数。

:::

<!-- more -->

# 概述

当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。

async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，等待 Promise  的结果出来，然后恢复async函数的执行并返回解析值（resolved）。

    注意， await 关键字仅仅在 async function中有效。如果在 async function函数体外使用 await ，
    你只会得到一个语法错误（SyntaxError）。

# 实例

```js
const awaitOne = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('awaitOne：这个要经过3s?')
      console.log('awaitOne：这个要经过3s?')
    }, 3000);
  })
}
const awaitTwo = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('awaitTwo：这个要经过2s')
      console.log('awaitTwo：这个要经过2s')
    }, 2000);
  })
}

const firstAsync = async function () {
  const two = await awaitTwo()
  const one = await awaitOne()

  console.log('two: ', two)
  console.log('one: ', one)
}

const secondAsync = function () {
  const two = awaitTwo()
  const one = awaitOne()

  console.log('two', await two)
  console.log('one', await one)
}

firstAsync()  //  先执行awaitTwo等待2s, 再执行awaitOne等待3s  然后输出two...  one...
secondAsync() //  awaitTwo awaitOne 异步队列  2s后输出two... 1s后输出one...

```

# 问题

async + await 会阻塞队列 如果前一个报错了  后续将无法执行下去

`实例`

```js
async function tryAwait () {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('错误了')
    }, 5000)
  })
}

async function tryAsync () {
  await tryAwait()
  console.log('--------我被阻塞了  走不到这里') // 不会输出
}


async function tryAsync1 () {
  try {
    await tryAwait()
    console.log('--------我被阻塞了  走不到这里') // 不会输出
  } catch (error) {
    console.log('--------我走到了catch')
  }
}

tryAsync()
tryAsync1()
```

# 参考

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
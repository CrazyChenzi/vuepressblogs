---
title: JavaScript进阶之call/apply的模拟实现
date: 2019-07-22 23:12:31
tags: 
  - javaScript
categories:
  - 前端
---

![lCjjld.png](https://s2.ax1x.com/2019/12/24/lCjjld.png)

<!-- more -->

## call

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

### 语法

fun.call(thisArg, arg1, arg2, ...)

### 返回值

使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。

## call的模拟实现

首先我们来看一个例子

```js
var foo = {
  value: 1
}

function bar (name, age) {
  console.log(this.value, name, age)
}

bar.call(foo, 'zhangsan', '18') // 1 zhangsan 18
```

这看起来就像是这样

```js
var foo = {
  value: 1,
  bar: function (name, age) {
    console.log(this.value, name, age)
  }
}
foo.bar('zhangsan', '18') // 1 zhangsan 18
```

但我们发现foo会多出来一个bar方法，这是我们不想要的，我们可以在foo.bar之后删除掉这个属性，看起来也就像这样

```js
foo.fn = function () {}
foo.fn()
delete.fn
```

### 开始模拟实现

```js
var foo = {
  value: 1
}

function bar (name, age) {
  console.log(this.value, name, age)
}

Function.prototype.call2 = function (context) {
  // 我们先来看看context、this、arguments都是那些参数
  console.log('context: ', context)
  console.log('this: ', this)
  console.log('arguments: ', arguments)
}
bar.call2(foo, 'zhangsan', '18')
```

![ei5TZ6.png](https://s2.ax1x.com/2019/07/22/ei5TZ6.png)

我们可以看到，context指向的是foo，this指向bar，arguments的第一个参数是foo，剩余的是我们需要给bar传递的参数

因此我们可以这样写

```js
var foo = {
  value: 1
}

function bar (name, age) {
  console.log(this.value, name, age)
}

Function.prototype.call2 = function (context) {
  context.fn = this
  var args = [] // 用于接收arguments参数

  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  context.fn(args)
  delete context.fn
}
bar.call2(foo, 'zhangsan', '18')  // 1 (2) ["zhangsan", "18"] undefined
```

我们发现得到的结果并不是我们想要的，`context.fn(args)` args只想当于一个参数，我们需要把args解构，将每一个参数都传递给`context.fn`，为了兼容我们不使用`ES6`的`...`运算符。

JavaScript的`eval`函数会将传入的字符串当做 JavaScript 代码进行执行

[eval](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

代码如下

```js
Function.prototype.call2 = function (context) {
  context.fn = this
  var args = [] // 用于接收arguments参数

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  eval('context.fn(' + args + ')')
  delete context.fn
}
bar.call2(foo, 'zhangsan', '18')  // 1 "zhangsan" "18"
```

### 我们得到了我们想要的结果，但假设bar方法需要return出去一个值呢，又或者context为null或者一个非Object的值呢

**1、函数是可以有返回值！**

```js
function bar (name, age) {
  console.log(name, age, this.value)
  return {name}
}
console.log(bar.call(foo, 'zhangsan'))  // {name: "zhangsan"}

console.log(bar.call2(foo, 'zhangsan')) // undefined
```

我们发现我们需要把`eval('context.fn(' + args + ')')`的结果`return`出去

代码如下

```js
Function.prototype.call2 = function (context) {
  context.fn = this
  var args = [] // 用于接收arguments参数

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

console.log(bar.call2(foo, 'zhangsan')) // {name: "zhangsan"}
```

**2、this可以传递为null 当为null时，默认指向window**

代码如下

```js
Function.prototype.call2 = function (context) {
  context = context ? context : window
  context.fn = this
  var args = [] // 用于接收arguments参数

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
```

**3、this为一个非Object类型的值时***

代码如下

```js
Function.prototype.call2 = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  var args = [] // 用于接收arguments参数

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
```

### 测试代码如下

```js
var foo = {
  value: 1
}
function bar (name, age) {
  console.log(name, age, this.value)
  return {name}
}

console.log(bar.call(123, 'zhangsan'))

Function.prototype.call2 = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
console.log(bar.call2(123, 'zhangsan', '18'))
```

### ES6的实现

```js
Function.prototype.call2 = function (context) {
  context = context ? Object(context) : window
  context.fn = this

  const args = [...arguments].slice(1)
  const result = context.fn(...args)

  delete context.fn
  return result
}
```

## apply的实现

> apply和call只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

```js
Function.prototype.apply2 = function (context, arr) {
  context = context ? Object(context) : window
  context.fn = this

  var result

  if (!arr) {
    result = context.fn
  } else {
    var args = []
    for(var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}
```

### ES6的实现

```js
Function.prototype.apply2 = function (context, arr) {
  context = context ? Object(context) : window
  context.fn = this

  let result

  if (!arr) {
    result = context.fn
  } else {
    result = context.fn(...arr)
  }

  delete context.fn
  return result
}
```

> 参考：[JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

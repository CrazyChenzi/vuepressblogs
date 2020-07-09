---
title: JavaScript进阶之arguments对象（类数组对象）
date: 2019-07-12 16:52:52
tags: 
  - javaScript
categories:
  - 前端
---

![lCzALn.jpg](https://s2.ax1x.com/2019/12/24/lCzALn.jpg)

<!-- more -->

## arguments对象

argument 是一个作为函数输入的值（原始数据或对象）。在函数体中，arguments 指代该函数的 Arguments 对象。

```js
/**
 * arguments是一个类数组对象
 * arguments获取的是实参，foo的形参只有三个
*/
function foo (name, age, sex) {
  console.log(arguments)
}

foo('zhangsan', 18)
foo('zhangsan', 18, 'man', 'hello')
```

![ZfP3Ks.png](https://s2.ax1x.com/2019/07/12/ZfP3Ks.png)

### length属性

Arguments对象的length属性，表示实参的长度

```js
function foo(a, b, c){
  console.log(arguments.length) // 1
}
console.log(foo.length) // 3

foo(1)
```

### callee属性

arguments.callee 属性包含当前正在执行的函数。`在ES5严格模式中已删除`

[arguments.callee
](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)

### arguments 和对应参数的绑定

`传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享`

`如果是在严格模式下，实参和 arguments 是不共享的`

```js
function foo (name, age, sex) {
  console.log(name, arguments[0]) // zhangsan zhangsan
  name = name + 'N'
  console.log(name, arguments[0]) // zhangsanN zhangsanN

  console.log(age, arguments[1])  // 18 18
  arguments[1] = arguments[1] + 'N'
  console.log(age, arguments[1])  // 18N 18N

  console.log(sex, arguments[2])  // undefined undefined
  sex = 'man'
  console.log(sex, arguments[2])  // man undefined
}
foo('zhangsan', 18)
```

```js
"use strict"
function foo (name, age, sex) {
  console.log(name, arguments[0]) // zhangsan zhangsan
  name = name + 'N'
  console.log(name, arguments[0]) // zhangsanN zhangsan

  console.log(age, arguments[1])  // 18 18
  arguments[1] = arguments[1] + 'N'
  console.log(age, arguments[1])  // 18 "18N"

  console.log(sex, arguments[2])  // undefined undefined
  sex = 'man'
  console.log(sex, arguments[2])  // man undefined
}
foo('zhangsan', 18)
```

### 使用ES6的...运算符可以将arguments快速转为数组

```js
function foo (...arguments) {
  console.log(arguments) // [1, 2, 3]
}

foo(1, 2, 3)
```

## 类数组对象

```js
/**
 * 类数组对象: 拥有一个 length 属性和若干索引属性的对象
 * 可以用到数组的一些常用方法，比如：读写、遍历。但大部分方法需要通过call实现
*/

var isLikeArray = {
  0: 'name',
  1: 'age',
  2: 'sex',
  length: 3
}

console.log(isLikeArray.length) // 3
console.log(isLikeArray[0]) // name
isLikeArray[0] = 'nameN'
console.log(isLikeArray[0]) // nameN

for (var i = 0, len = isLikeArray.length; i < len; i++) {
  console.log(isLikeArray[i], i)
}

// isLikeArray.push('4') // 报错：isLikeArray.push is not a function
```

### 使用一些数组特定方法，比如push

```js
Array.prototype.push.call(isLikeArray, 4)
console.log(isLikeArray)  // {0: "nameN", 1: "age", 2: "sex", 3: 4, length: 4}
```

### 类数组对象转数组

```js
// 1. slice
Array.prototype.slice.call(isLikeArray); // ["nameN", "age", "sex", 4]
// 2. splice
Array.prototype.splice.call(isLikeArray, 0); // ["nameN", "age", "sex", 4]
// 3. ES6 Array.from
Array.from(isLikeArray); // ["nameN", "age", "sex", 4]
// 4. apply
Array.prototype.concat.apply([], isLikeArray) // ["nameN", "age", "sex", 4]
```

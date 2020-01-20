---
title: 深究JavaScript值传递和引用传递
date: 2019-02-27 20:21:47
tags: 
  - javaScript
  - JavaScript进阶
categories: 
  - 前端
---

![lCzVZq.jpg](https://s2.ax1x.com/2019/12/24/lCzVZq.jpg)

<!-- more -->

# 基本类型

- Number
- String
- Null
- Undefined
- Boolean
- Symbol (es6新增)

如果一个基本数据类型赋值给一个变量，而后我们又使用`=`将其赋值给另一个变量，实质上是将对应的值拷贝了一份，然后赋值给新的变量，我们称之为值传递。他们完全独立，互不干涉，因此我改变`y`的值，`x`的值不会受到影响

> 基本类型的变量是存放在栈内存（Stack）里的

```js
var x = 10
var y = x
y = 20
console.log(x, y) // 10, 20
```

![kTHdSS.png](https://s2.ax1x.com/2019/02/27/kTHdSS.png)

# 引用类型

- Object
- Array
- Date
- RegExp
- Function

对象是通过引用传递，而不是值传递。也就是说，变量赋值只会将地址传递过去

> 引用类型的值是保存在堆内存（Heap）中的对象（Object）。与其他编程语言不同，JavaScript 不能直接操作对象的内存空间（堆内存）

```js
var a = [1]
var b = a
b.push(2)
console.log(a, b) // [1,2] [1,2]
```

## == 和 ===

对于引用类型的变量，==和===只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回true。

```js
var a = [1]
var b = a
console.log(a === b, a == b)  // true true

var c = [1]
var d = [1]
console.log(c === d, c == d)  // false false
```

想要判断两个对象是否真的相同，最简单的方法就是将它们转为字符串进行比较、或通过递归比较判断每一个属性的值是否相等

```js
var c = [1]
var d = [1]
console.log(JSON.stringify(c) === JSON.stringify(d), JSON.stringify(c) == JSON.stringify(d))  // true true
```

## 函数方法

```js
function func (person) {
  person.age = 50
  return person
}
var person = {
  name: '张三',
  age: 20
}
console.log(func(person), person) // {name: "张三", age: 50} {name: "张三", age: 50}
```

`所以引用类型的传递一定要注意`

![kTH0yQ.png](https://s2.ax1x.com/2019/02/27/kTH0yQ.png)

## 参考题

![kTHwQg.png](https://s2.ax1x.com/2019/02/27/kTHwQg.png)

# 参考

[JavaScript的值传递和引用传递](https://blog.fundebug.com/2017/08/09/explain_value_reference_in_js/)
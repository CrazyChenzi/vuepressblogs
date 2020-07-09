---
title: JavaScript进阶之继承的多种方式
date: 2019-07-15 18:16:23
tags: 
  - javaScript
categories: 
  - 前端
---

![lCxaKs.jpg](https://s2.ax1x.com/2019/12/24/lCxaKs.jpg)

<!-- more -->

## 原型链继承

`缺点：1、多个实例对引用类型的操作会被篡 2、创建子类实例的时候，不能传参数。`

```js
function Father () {
  this.name = 'zhangsan'
  this.colors = ['red', 'blue']
}
Father.prototype.sayName = function () {
  console.log(this.name)
}

function Child () {}

Child.prototype = new Father()

var a = new Child()
a.sayName() // zhangsan
console.log(a.colors) // ["red", "blue"]
a.colors.push('yellow')
console.log(a.colors) // ["red", "blue", "yellow"]

var b = new Child()
console.log(b.colors) // ["red", "blue", "yellow"]
```

## 借用构造函数(经典继承)

`优点：1、可以向父类传递参数 2、避免了引用类型属性被所有实例共享`

`缺点：1、方法都在构造函数中定义，每次创建实例都会创建一遍方法 2、不继承父类原型无法调用父类原型上的方法`

```js
function Father (name) {
  this.name = name
  this.colors = ['red', 'blue']
}
Father.prototype.sayName = function () {
  console.log(this.name)
}

function Child (name) {
  Father.call(this, name)
}

var a = new Child('zhangsan')
// a.sayName() // a.sayName is not a function
console.log(a.colors) // ["red", "blue"]
a.colors.push('yellow')
console.log(a.colors) // ["red", "blue", "yellow"]

var b = new Child()
// b.sayName() // b.sayName is not a function
console.log(b.colors) // ["red", "blue"]
```

## 组合继承

`优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。`

`缺点：会调用两次父构造函数。`

```js
function Father (name) {
  this.name = name
  this.colors = ['red', 'blue']
}
Father.prototype.sayName = function () {
  console.log(this.name)
}

function Child (name) {
  Father.call(this, name)
}

Child.prototype = new Father()
Child.prototype.constructor = Child

var a = new Child('zhangsan')
console.log(a)  // 调用两次父构造函数。导致a和a.prototype上面都有一个colors属性，可以通过后面的寄生组合式继承方式来解决
a.sayName() // zhangsan
console.log(a.colors) // ["red", "blue"]
a.colors.push('yellow') 
console.log(a.colors) // ["red", "blue", "yellow"]

var b = new Child()
b.sayName() // undefined
console.log(b.colors) // ["red", "blue"]
```

## 原型式继承

`缺点：1、包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。 2、无法传递参数`

```js
// 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
function createObj (obj) {
  function F () {}
  F.prototype = obj
  return new F()
}
```

`就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型.`

[Object.create()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```js
var father = {
  name: 'zhangsan',
  colors: ['red', 'blue']
}

// 修改a.name的值，b.name的值并未发生改变，并不是因为a和b有独立的 name 值，
// 而是因为a.name = 'wangwu'，给a添加了 name 值，并非修改了原型上的 name 值。
var a = createObj(father)
console.log(a.name, a.colors) // zhangsan (2) ["red", "blue"]
a.name = 'wangwu'
a.colors.push('yellow')
console.log(a.name, a.colors, a.__proto__.name) // wangwu (3) ["red", "blue", "yellow"] zhangsan
var b = createObj(father)
console.log(b.name) // zhangsan
console.log(b.colors) // ["red", "blue", "yellow"]
```

## 寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

`缺点：跟原型式继承一样`

```js
function createObj (o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log(clone.name)
  }
  return clone
}

var person = {
  name: "zhangsan",
  colors: ['red', 'blue']
}

var a = new createObj(person)
a.sayName() // zhangsan
console.log(a.colors) // ["red", "blue"]
a.colors.push('yellow')
console.log(a.colors) // ["red", "blue", "yellow"]

var b = new createObj(person)
console.log(b.colors) // ["red", "blue", "yellow"]
```

## 寄生组合式继承

看起来和组合继承有点像，原因是因为Child.prototype = new Father() var a = new Child('kevin', '18')的时候都调用了父构造函数
所以我们可以做一层代码，间接的让Child.prototype可以访问到Father.prototype

```js
function Father (name) {
  this.name = name
  this.colors = ['red', 'blue']
}
Father.prototype.sayName = function () {
  console.log(this.name)
}

function Child (name) {
  Father.call(this, name)
}

var F = function () {}
F.prototype = Father.prototype

Child.prototype = new F()
Child.prototype.constructor = Child

var a = new Child('zhangsan')
console.log(a) // 这个时候只会调用一次构造函数，所以只有a上面有colors，a.prototype上面没有，这也就解决了组合继承的缺点
a.sayName() // zhangsan
console.log(a.colors, a) // ["red", "blue"]
a.colors.push('yellow')
console.log(a.colors) // ["red", "blue", "yellow"]

var b = new Child()
b.sayName() // undefined
console.log(b.colors) // ["red", "blue"]
```

> 这种方式的高效率体现它只调用了一次 Father 构造函数，并且因此避免了在 Father.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

## ES6 extends 继承

```js
class Father {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  get fatherMessage () {
    return 'Father name: ' + this.name + ', Father age: ' + this.age
  }
}
class Son extends Father {
  constructor (name, age, msg) {
    super(name, age)
    this.msg = msg
  }
}

var son1 = new Son('father1', 56, '我继承了父类构造')
console.log(son1.fatherMessage) // Father name: father1, Father age: 56
```

> 参考：
> [Class 的继承](https://es6.ruanyifeng.com/#docs/class-extends)
> [JavaScript深入之继承的多种方式和优缺点 ](https://github.com/mqyqingfeng/Blog/issues/16)

---
title: Array
date: 2018-10-31 21:09:34
tags: 
  - javaScript
  - ES6
categories: 
  - 前端
---

::: tip

```js
// 使用Array构造器
var a = new Array(5)  // [empty × 5]
// 使用对象字面量
var b = []
b.length = 5  // [empty × 5]
```

Array构造器根据参数长度的不同，有如下两种不同的处理：

- new Array(arg1, arg2,…)，参数长度为0或长度大于等于2时，传入的参数将按照顺序依次成为新数组的第0至N项（参数长度为0时，返回空数组）。
- new Array(len)，当len不是数值时，处理同上，返回一个只包含len元素一项的数组；当len为数值时，则创建一个以该数值为长度的数组，数值大小不能超过2^32 否则会抛出错误

:::

<!-- more -->

# 原型

通过js继承原则我们知道，js中所有的数组方法都来自于Array.prototype。
Array.prototype也是一个数组

# ES6新增的构造函数方法

## Array.from()

Array.from(arrayLike[, mapFn[, thisArg]])

- arrayLike 想要转换成数组的伪数组对象或可迭代对象。
- mapFn (可选参数) 如果指定了该参数，新数组中的每个元素会执行该回调函数。
- thisArg (可选参数) 可选参数，执行回调函数 mapFn 时 this 对象。
- result 一个新的数组实例

```js
Array.from('foo') // ['f', 'o', 'o']
Array.from([1, 2, 3], x => x*2) //  [2, 4, 6]

// 生成0~n的数组
Array.from({length: n}, (v, i) => i);
```

## Array.of()

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

Array.of(element0[, element1[, ...[, elementN]]])

- elementN 任意个参数，将按顺序成为返回数组中的元素。
- result 新的 Array 实例。

```js
Array.of(8.0) // [8]
Array(8.0) //  [empty × 8]
```

# 改变自身的方法

- Array.prototype.pop() 删除数组的最后一个元素，并返回这个元素
- Array.prototype.push() 在数组的末尾增加一个或多个元素，并返回数组的新长度
- Array.prototype.reverse() 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个
- Array.prototype.shift() 删除数组的第一个元素，并返回这个元素
- Array.prototype.sort() 对数组元素进行排序，并返回当前数组
- Array.prototype.splice() 在任意的位置给数组添加或删除任意个元素
- Array.prototype.unshift() 将一个或多个元素添加到数组的开头，并返回新数组的长度
- copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小
- Array.prototype.fill() 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素

## pop

```js
var array = ['a', 'b', 'c', 'd']
array.pop() // d
```

## push

```js
var array = ['a', 'b', 'c', 'd']
array.push('e') // 5
```

## reverse

```js
var array = ['a', 'b', 'c', 'd']
array.reverse() // ['d', 'c', 'b', 'a']
```

## shift

```js
var array = ['a', 'b', 'c', 'd']
array.shift() // a
```

## sort

arr.sort([compareFunction])
compareFunction： `用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。`

```js
var array = ['e', 'a', 'af', 'A']
array.sort()  // ["A", "a", "af", "e"]
```

如果指明了compareFunction：，数组将按照调用该函数的返回值来排序。若 a 和 b 是两个将要比较的元素：

- 若 compareFunction(a, b) < 0，那么a 将排到 b 前面；
- 若 compareFunction(a, b) = 0，那么a 和 b 相对位置不变；
- 若 compareFunction(a, b) > 0，那么a , b 将调换位置；

```js
var array = [6, 4, 1, 9, 8]
array.sort((a, b) => a - b)  // [1, 4, 6, 8, 9]

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 20 },
  { name: 'Zeros', value: 37 }
];

items.sort((a, b) => {
  return a.value - b.value
})
```

## splice

arr.splice(start,deleteCount[, item1[, item2[, …]]])

- start 开始的位置，如果超出数组长度，则从数组末尾开始添加内容；如果是负数，则从length+start处开始。
- deleteCount 指定删除元素的个数
- itemN 指定新添参数
- result 返回值  由原数组中被删除元素组成的数组，如果没有删除，则返回一个空数组。

```js
var array = ['a', 'b', 'c', 'd']
array.splice(0, 1)  // [a]

var array = ['a', 'b', 'c', 'd']
array.splice(-1, 0, 'e', 'f')  // [] array: ["a", "b", "c", "e", "f", "d"]

var array = ['a', 'b', 'c', 'd']
array.splice(0, 1, 'g') // ["a"] array: ["g", "b", "c", "d"]
```

## unshift

```js
var array = ['a', 'b', 'c', 'd']
array.unshift('g')  // 5
```

## copyWithin

arr.copyWithin(target, start[, end = this.length])
taget 指定被替换元素的索引，start 指定替换元素起始的索引，end 可选，指的是替换元素结束位置的索引。

```js
var array = [1,2,3,4,5]
array.copyWithin(0, 2)  // [3, 4, 5, 4, 5]

var array = [1,2,3,4,5]
array.copyWithin(0, 2, 3) // [3, 2, 3, 4, 5]
```

## fill

arr.fill(value, start[, end = this.length])
value 用来填充数组元素的值.start可选 指定替换元素起始的索引 默认是0，end 可选，指的是替换元素结束位置的索引, 默认是this.length

```js
var array = [1,2,3,4,5]
array.fill(0, 2)
```

# 不改变自身的方法

- Array.prototype.concat()方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
- Array.prototype.includes() 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false
- Array.prototype.join() 连接所有数组元素组成一个字符串
- Array.prototype.slice() 抽取当前数组中的一段元素组合成一个新数组 (start必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。)
- Array.prototype.toString() 返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法
- Array.prototype.toLocaleString() 返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法
- Array.prototype.indexOf() 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
- Array.prototype.lastIndexOf() 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
- Array.prototype.toSource() 返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法

## concat

`浅复制 是指当对象的被复制时，只是复制了对象的引用，指向的依然是同一个对象`

```js
var array = [1,2,3,4,5]
var array1 = ['a', 'b', 'c', 'd']
array.concat(array1).concat('balabala', 'bill') // [1, 2, 3, 4, 5, "a", "b", "c", "d", "balabala", "bill"]

var array2 = array.concat() // 基于原数组浅复制一个一模一样的新数组（指向新的地址空间）
array2 === array // false
array2[1] === array[1] // true 新旧数组元素依旧共用一个同一个对象的引用
```

## includes

arr.includes(element, fromIndex=0)
element 为需要查找的元素。
fromIndex 表示从该索引位置开始查找 element，缺省为0，它是正向查找，即从索引处往数组末尾查找。

```js
var array = [1,2,3,4,5]
array.includes(2) // true
```

## join

```js
var array = [1,2,3,4,5]
array.join()  // "1,2,3,4,5"  默认,连接
```

# slice

`浅复制 是指当对象的被复制时，只是复制了对象的引用，指向的依然是同一个对象`

```js
var array = [1,2,3,4,5]
array.slice(0, 2) // [1, 2] // 将数组中一部分元素浅复制存入新的数组对象
array.slice() // [1,2,3,4,5] 与concat一样 参数为空时浅复制一个新数组

var array = [{name: 'slice'}, 2]
var array1 = array.slice()  // [{name: 'slice'}, 2]
array[0].name = 'concat'  // array1.name: 'concat'
array[1] = 3  // array1[1]: 2
```

## toString

```js
var array = [1,2,3,4,5]
array.toString()  // 1,2,3,4,5
```

## toLocaleString

由数组中的每个元素的toLocaleString() 返回值经join()方法连接组成

```js
var array = [{}, 1,2,3,4,5, new Date()]
array.toLocaleString()  // "[object Object],1,2,3,4,5,2019/2/22 下午3:56:04"
```

## indexOf

arr.indexOf(element, fromIndex=0)
element 为需要查找的元素。
fromIndex 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.

```js
var array = [1,2,3,4,5]
array.indexOf(2)  // 1
array.indexOf(2, -1) // -1
```

## lastIndexOf

lastIndexOf() 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数组最后一个往前查找。
arr.lastIndexOf(element, fromIndex=length-1)
fromIndex 从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

```js
var array = [1,2,3,4,2]
array.lastIndexOf(2)  // 4
array.lastIndexOf(2, -2)  // 1
```

## toSource

`该特性是非标准的，请尽量不要在生产环境中使用它！`
目前只有Firefox实现了它

# 遍历方法

- Array.prototype.forEach() 为数组中的每个元素执行一次回调函数
- Array.prototype.every() 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
- Array.prototype.some() 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
- Array.prototype.filter() 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
- Array.prototype.map() 返回一个由回调函数的返回值组成的新数组
- Array.prototype.reduce() 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
- Array.prototype.reduceRight() 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
- Array.prototype.entries() 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对
- Array.prototype.find() 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
- Array.prototype.findIndex() 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
- Array.prototype.keys() 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键
- Array.prototype.values() 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值
- Array.prototype[@@iterator]() 数组的 iterator 方法，默认情况下与 values() 返回值相同

## forEach

arr.forEach(callback[, thisArg])

- callback: 为数组中每个元素执行的函数，该函数接收三个参数：
  - currentValue: 数组中正在处理的当前元素。
  - index: 可选，数组中正在处理的当前元素的索引。
  - array: 可选，forEach() 方法正在操作的数组。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: undefined
  
## every

arr.every(callback[, thisArg])
callback 被调用时传入三个参数：元素值，元素的索引，原数组。
every 不会改变原数组

- callback: 用来测试每个元素的函数。
- thisArg: 执行 callback 时使用的 this 值。

```js
var array = [1,2,3,4,5]
array.every((item) => {
  return item > 1
}) // false
```

## some

arr.some(callback(element[, index[, array]])[, thisArg])

- callback: 用来测试每个元素的函数，接受三个参数：
  - element: 数组中正在处理的当前元素。
  - index: 可选，数组中正在处理的当前元素的索引。
  - array: 可选，some()被调用的数组。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: 如果回调函数返回任何数组元素的truthy值，则返回true；否则为false.

```js
var array = [1,2,3,4,5]
array.some((item) => {
  return item > 1
}) // true
```

## filter

var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])
filter 不会改变原数组，它返回过滤后的新数组。

- callback: 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。返回true表示保留该元素（通过测试），false则不保留。它接受三个参数
  - element: 数组中正在处理的当前元素。
  - index: 可选，数组中正在处理的当前元素的索引。
  - array: 可选，调用了filter的数组。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: 一个新的通过测试的元素的集合的数组，如果没有通过测试则返回空数组

```js
var array = [1,2,3,4,5]
array.filter((item) => {
  return item > 1
}) // [2, 3, 4, 5]
```

## map

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array }[, 
thisArg])
map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）

- callback: 用来测试每个元素的函数，接受三个参数：
  - element: 数组中正在处理的当前元素。
  - index: 可选，数组中正在处理的当前元素的索引。
  - array: 可选，map 方法被调用的数组。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: 一个新数组，每个元素都是回调函数的结果。

```js
var array = [1,2,3,4,5]
array.map((x) => x * 2) // [2, 4, 6, 8, 10]
```

## reduce

arr.reduce(callback[, initialValue])

- callback 执行数组中每个值的函数，包含四个参数：
  - 累计器 accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
  - 当前值 currentValue 数组中正在处理的元素。
  - 当前索引 currentIndex可选 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。
  - 数组 array可选 调用reduce()的数组
- initialValue可选 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
- result 函数累计处理的结果

```js
var array = [1,2,3,4,5]
array.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator)
  return accumulator + 10
}) // 41
```

## reduceRight

arr.reduceRight(callback[, initialValue])
首次调用回调函数时，previousValue 和 currentValue 可以是两个值之一。如果调用 reduceRight 时提供了 initialValue 参数，则 previousValue 等于 initialValue，currentValue 等于数组中的最后一个值。如果没有提供 initialValue 参数，则 previousValue 等于数组最后一个值， currentValue 等于数组中倒数第二个值。

- callback 一个回调函数，用来操作数组中的每个元素，可接受四个参数：
  - previousValue 上一次调用回调的返回值，或提供的 initialValue
  - currentValue 当前被处理的元素
  - index 当前处理元素的索引
  - array 调用 reduce 的数组
- initialValue 可作为第一次调用回调 callback 的第一个参数
- result 执行之后的返回值

```js
var array = [1,2,3,4,5]
array.reduceRight((previousValue, currentValue, currentIndex, array) => {
  console.log(previousValue, currentValue, currentIndex)
  return previousValue + 10
}) // 45
```

## entries

arr.entries()
一个新的 Array 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。

```js
var array = ['a', 'b', 'c', 'd']
var iterator = array.entries().next()
iterator.next().value // [0, "a"]
iterator.next().value // [1, "b"]
```

## find

arr.find(callback[, thisArg])

- callback: 用来测试每个元素的函数，接受三个参数：
  - element: 数组中正在处理的当前元素。
  - index: 数组中正在处理的当前元素的索引。
  - array: 数组本身。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: 当某个元素通过 callback 的测试时，返回数组中的一个值，否则返回 undefined。

```js
var array = [1,2,3,4,5]
array.find((x) => x > 10) // undefined
```

## findIndex

arr.findIndex(callback[, thisArg])

- callback: 针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数：
  - element: 数组中正在处理的当前元素。
  - index: 数组中正在处理的当前元素的索引。
  - array: 数组本身。
- thisArg: 可选，可选参数。当执行回调函数时用作 this 的值(参考对象)。
- result: 返回数组中第一个满足条件的元素的索引（如果有的话）否则返回-1。

```js
var array = [1,2,3,4,5]
array.findIndex((x) => x > 10) // -1
```

## keys

arr.keys()
返回一个新的 Array 迭代器对象。

```js
var array = [1,2,3,4,5]
var iterator = array.keys()
iterator.next() // {value: 0, done: false}

// 生成0~n的数组
[...new Array(n).keys()]
```

## values

arr.values()

```js
var array = [1,2,3,4,5]
var iterator = array.values()
iterator.next() // {value: 1, done: false}
```

## 浏览器兼容性

![kATRtU.png](https://s2.ax1x.com/2019/01/23/kATRtU.png)]

---
title: Front-end specification👀
date: 2020-04-22 15:10:31
tags: 
  - javaScript
categories:
  - 杂谈
---

:::tip

整理一些前端规范性的东西😧

:::

<!-- more -->

# Front-end specification

## 命名

### 驼峰式命名法

- Pascal Case 大驼峰：首字母大写。eg：UserInfo
- Camel Case 小驼峰：首字母小写。eg：userInfo

### 文件资源命名

- 文件名不得包含特殊字符、空格
- 文件名建议只使用小写字母，特殊除外(README LICENSE)
- 文件名包含多个单词时，建议使用（-）做为分隔符
- 引入资源使用相对路径，不建议指定资源所属协议(http:,https:)，除非两者协议都不可用。eg: //cnn.com/vue@2.6.0.js

### 变量命名

命名方式：小驼峰式命名方法

命名规范：类型+对象描述的方式

|  类型   | 小写字母  |
|  ----  | ----  |
| array  | a |
| boolean  | b |
| function  | fn |
| string  | s |
| object  | o |

**推荐**

```js
const tableTitle = '表头'
```

**不推荐**

```js
const getTitle = '表头'
```

### 函数

命名方式 : 小驼峰方式 ( 构造函数使用大驼峰命名法 )

命名规则 : 前缀为动词

|  动词   | 含义  | 返回值  |
|  ----  | ----  | ----  |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值。true：可执行；false：不可执行 |
| has  | 判断是否含有某个值 | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is  | 判断是否为某个值 | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get  | 获取某个值 | 函数返回一个非布尔值 |
| set  | 设置某个值	 | 无返回值、返回是否设置成功或者返回链式对象 |

**推荐**

```js
const getTitle = () => {
  return '表头'
}
```

### 常量

命名方法 : 全部大写

命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。

**推荐**

```js
const MAX_COUNT = 10
```

### 注释规范

**单行注释 ( // )**

- 单独一行：//(双斜线)与注释文字之间保留一个空格
- 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。
- 注释代码：//(双斜线)与代码之间保留一个空格。

*推荐*

```js
// 调用了一个函数；1)单独在一行
setTitle()
```

**多行注释 ( / 注释说明 / )**

- 若开始(/*和结束(*/)都在一行，推荐采用单行注释
- 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

*推荐*

```js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle()
```

**函数(方法)注释**

函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求 [jsdoc](https://jsdoc.app/)

```js
/** 
* 函数说明 
* @关键字 
*/
```

vscode 配置jsdoc [安装插件](https://marketplace.visualstudio.com/items?itemName=lllllllqw.jsdoc)

## JavaScript规范

### 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则

#### 类型

- 基本类型
  - 字符串
  - 数值
  - 布尔类型
  - null
  - undefined
- 复杂类型
  - object
  - array
  - function

#### 引用

`const`和`let`都是块级作用域，`var`是函数级作用域 [const let var的区别](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133)

- 对所有引用都使用`const`，不使用`var`
  ```js
  // bad
  var a = 1
  var b = 2

  // good
  const a = 1
  const b = 2
  ```
- 如果引用的是可变动的，则使用`let`
  ```js
  // bad
  var count = 1
  if (count < 10) {
    count += 1
  }

  // good
  let count = 1
  if (count < 10) {
    count += 1
  }
  ```

#### 对象

- 请使用字面量值创建对象
  ```js
  // bad
  const a = new Object{}

  // good
  const a = {}
  ```
- 别使用保留字作为对象的键值，这样在 IE8 下不会运行
  ```js
  // bad
  const a = {
    default: {},  // default 是保留字
    common: {}
  }

  // good
  const a = {
    defaults: {},
    common: {}
  }
  ```
- 请使用对象方法的简写方式
  ```js
  // bad
  const item = {
    value: 1,

    addValue: function (val) {
      return item.value + val
    }
  }

  // good
  const item = {
    value: 1,

    addValue(val) {
      return item.value + val
    }
  }
  ```
- 请使用对象属性值的简写方式
  ```js
  const job = 'FrontEnd'

  // bad
  const item = {
    job: job
  }

  // good
  const item = {
    job
  }
  ```
- 对象属性值的简写方式要和声明式的方式分组
  ```js
  const job = 'FrontEnd'
  const department = 'JDC'

  // bad
  const item = {
    sex: 'male',
    job,
    age: 25,
    department
  }

  // good
  const item = {
    job,
    department,
    sex: 'male',
    age: 25
  }
  ```
  
#### 数组

- 请使用字面量值创建数组
  ```js
  // bad
  const items = new Array()

  // good
  const items = []
  ```
- 向数组中添加元素时，请使用 push 方法
  ```js
  const items = []

  // bad
  items[items.length] = 'test'

  // good
  items.push('test')
  ```
- 使用拓展运算符 ... 复制数组
  ```js
  // bad
  const items = []
  const itemsCopy = []
  const len = items.length
  let i

  // bad
  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i]
  }

  // good
  itemsCopy = [...items]
  ```
- 使用数组的 map 等方法时，请使用 return 声明，如果是单一声明语句的情况，可省略 return
  ```js
  // good
  [1, 2, 3].map(x => {
    const y = x + 1
    return x * y
  })

  // good
  [1, 2, 3].map(x => x + 1)

  // bad
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
  })

  // good
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
    return flatten
  })

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    } else {
      return false
    }
  })

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    }

    return false
  })
  ```

#### 解构赋值

- 当需要使用对象的多个属性时，请使用解构赋值
  ```js
  // bad
  function getFullName (user) {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
  }

  // good
  function getFullName (user) {
    const { firstName, lastName } = user

    return `${firstName} ${lastName}`
  }

  // better
  function getFullName ({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }
  ```
- 当需要使用数组的多个值时，请同样使用解构赋值
  ```js
  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr
  ```
- 函数需要回传多个值时，请使用对象的解构，而不是数组的解构
  ```js
  // bad
  function doSomething () {
    return [top, right, bottom, left]
  }

  // 如果是数组解构，那么在调用时就需要考虑数据的顺序
  const [top, xx, xxx, left] = doSomething()

  // good
  function doSomething () {
    return { top, right, bottom, left }
  }

  // 此时不需要考虑数据的顺序
  const { top, left } = doSomething()
  ```

#### 字符串

- 字符串统一使用单引号的形式 ''
- 字符串太长的时候，请不要使用字符串连接符换行 \，而是使用 +
- 程序化生成字符串时，应使用模板字符串

#### 函数

- 请使用函数声明，而不是函数表达式
  ```js
  // bad
  const foo = function () {}

  // good
  function foo() {}
  ```
- 不要在非函数代码块中声明函数
- 不要使用 arguments，可以选择使用 ...
- 不要更改函数参数的值
  ```js
  // bad
  function foo (opt) {
    opt = {}
  }

  // good
  function foo (opt = {}) {}
  ```

#### 原型

- 使用`class`避免操作`prototype`

[es6 class](https://es6.ruanyifeng.com/#docs/class)

#### 模块

- 使用ES6的模块语法`import` `expoet`
- 不要使用 `import` 的通配符 *，这样可以确保你只有一个默认的 `export`
  ```js
  // bad
  import * as Util from './util'

  // good
  import Util from './util'
  ```

#### 迭代器

- 不要使用`iterators`
  ```js
  const numbers = [1, 2, 3, 4, 5]

  // bad
  let sum = 0
  for (let num of numbers) {
    sum += num
  }

  // good
  let sum = 0
  numbers.forEach(num => sum += num)

  // better
  const sum = numbers.reduce((total, num) => total + num, 0)
  ```

#### 对象属性

- 使用 `.` 来访问对象属性

#### 变量声明

- 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染
- 将所有的 `const` 和 `let` 分组

#### 分号

- 遵循 `Standard` 的规范，不使用分号。

## CSS规范

### id和class的命名

ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称

*不推荐*

```css
.fw-800 {
  font-weight: 800;
}

.red {
  color: red;
}
```

*推荐*

```css
.heavy {
  font-weight: 800;
}

.important {
  color: red;
}
```

### 合理的使用id

一般情况下ID不应该被用于样式，并且ID的权重很高，所以不使用ID解决样式的问题，而是使用class

*不推荐*

```css
#content .title {
  font-size: 2em;
}
```

*推荐*

```css
.content .title {
  font-size: 2em;
}
```

### css选择器中避免使用标签名

从结构、表现、行为分离的原则来看，应该尽量避免css中出现HTML标签，并且在css选择器中出现标签名会存在潜在的问题。

### 尽量使用缩写属性

*不推荐*

```css
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

*推荐*

```css
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 声明顺序

这是一个选择器内书写CSS属性顺序的大致轮廓。这是为了保证更好的可读性和可扫描重要。

作为最佳实践，我们应该遵循以下顺序（应该按照下表的顺序）：

- 结构性属性：
  - display
  - position, left, top, right etc.
  - overflow, float, clear etc.
  - margin, padding
- 表现性属性：
  - background, border etc.
  - font, text

### 0后面不带单位

```css
margin: 0;
```

### 属性名结束

属性名的冒号后使用一个空格。出于一致性的原因，
属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格

### CSS引号

属性选择器或属性值用双引号（””），而不是单引号（”）括起来。URI值（url()）不要使用引号。

*不推荐*

```css
@import url('//cdn.com/foundation.css');
 
html {
  font-family: 'open sans', arial, sans-serif;
}
 
body:after {
  content: 'pause';
}
```

*推荐*

```css
@import url(//cdn.com/foundation.css);
 
html {
  font-family: "open sans", arial, sans-serif;
}
 
body:after {
  content: "pause";
}
```

## Vue规范

[参照Vue.js风格指南](https://cn.vuejs.org/v2/style-guide/)

## Git操作规范

[阮一峰-Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)

## TypeScript编码规范

[TypeScript 简介及编码规范](https://cloud.tencent.com/developer/article/1533071)

[TypeScript StyleGuide and Coding Conventions](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md)

## 参考

[前端编码规范(4)-css和sass(scss)规范](https://www.html.cn/archives/5505)

[Front-End Coding Guidelines](https://guide.aotu.io/docs/js)

[前端开发规范：命名规范、html规范、css规范、js规范](https://juejin.im/post/592d4a5b0ce463006b43b6da#heading-35)

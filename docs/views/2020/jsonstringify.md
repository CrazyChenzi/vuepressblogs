---
title: JSON.stringify()
date: 2020-07-21 13:53:31
tags: 
  - 杂谈
categories:
  - 杂谈
---
 
> JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

<!-- more -->

## 语法

> JSON.stringify(value[, replacer [, space]])

### 参数

- value
  将要序列化成 一个 JSON 字符串的值。
- replacer | 可选
  如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
- space | 可选
  指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。

### 返回值

一个表示给定值的JSON字符串。

## 特性

### 一、对于 undefined、任意的函数以及 symbol 三个特殊的值分别作为对象属性的值、数组元素、单独的值时的不同返回结果。

- undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 跳过（忽略）对它们进行序列化
  ```js
  const data = {
    a: "aaa",
    b: undefined,
    c: Symbol("dd"),
    fn: function() {
      return true;
    }
  };
  JSON.stringify(data); // 输出：？

  // "{"a":"aaa"}"
  ```
- undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
  ```js
  JSON.stringify(["aaa", undefined, function aa() {
    return true
  }, Symbol('dd')])  // 输出：？

  // "["aaa",null,null,null]"
  ```
- undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时都会返回 undefined
  ```js
  JSON.stringify(function a (){console.log('a')})
  // undefined
  JSON.stringify(undefined)
  // undefined
  JSON.stringify(Symbol('dd'))
  // undefined
  ```

### 二、非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中

*因为`null` `function` `symbol`都会被忽略掉，所以必然是没有特定的顺序的*

```js
const data = {
  a: "aaa",
  b: undefined,
  c: Symbol("dd"),
  fn: function() {
    return true;
  },
  d: "ddd"
};
JSON.stringify(data); // 输出：？
// "{"a":"aaa","d":"ddd"}"

JSON.stringify(["aaa", undefined, function aa() {
  return true
}, Symbol('dd'),"eee"])  // 输出：？

// "["aaa",null,null,null,"eee"]"
```

### 三、转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值，并且忽略其他属性的值。

*拥有`toJSON`函数后进行序列化会默认走`toJSON`*

```js
JSON.stringify({
  say: "hello JSON.stringify",
  toJSON: function() {
    return "today i learn";
  }
})
// "today i learn"
```

### 四、JSON.stringify() 将会正常序列化 Date 的值

*默认调用的是`toISOString()`会自动转化为国际化时间*

```js
JSON.stringify({ now: new Date() });
// "{"now":"2020-07-21T06:07:14.864Z"}"
```

### 五、NaN 和 Infinity 格式的数值及 null 都会被当做 null。

```js
JSON.stringify(NaN)
// "null"
JSON.stringify(null)
// "null"
JSON.stringify(Infinity)
// "null"
```

### 六、布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。

```js
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// "[1,"false",false]"
```

### 七、其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

**仅会序列化可枚举的属性**

```js
// 不可枚举的属性默认会被忽略：
JSON.stringify( 
  Object.create(
    null, 
    { 
        x: { value: 'json', enumerable: false }, 
        y: { value: 'stringify', enumerable: true } 
    }
  )
);
// "{"y":"stringify"}"
```

### 八、对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。

```js
// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。 
const obj = {
  name: "loopObj"
};
const loopObj = {
  obj
};
// 对象之间形成循环引用，形成闭环
obj.loopObj = loopObj;

// 封装一个深拷贝的函数
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// 执行深拷贝，抛出错误
deepClone(obj)
/**
 VM44:9 Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'loopObj' -> object with constructor 'Object'
    --- property 'obj' closes the circle
    at JSON.stringify (<anonymous>)
    at deepClone (<anonymous>:9:26)
    at <anonymous>:11:13
*/
```

### 九、所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。

```js
JSON.stringify({ [Symbol.for("json")]: "stringify" }, function(k, v) {
  if (typeof k === "symbol") {
    return v;
  }
})

// undefined
```

## 如何序列化`undefined` `function` `symbol`

```js
const data = {
  a: "aaa",
  b: undefined,
  c: Symbol("dd"),
  fn: function() {
    return true;
  }
};
// 不用 replacer 参数时
JSON.stringify(data); 

// "{"a":"aaa"}"
// 使用 replacer 参数作为函数时
JSON.stringify(data, (key, value) => {
  switch (typeof value) {
    case "undefined":
      return "undefined";
    case "symbol":
      return value.toString();
    case "function":
      return value.toString();
  }
  return value;
})
// "{"a":"aaa","b":"undefined","c":"Symbol(dd)","fn":"function() {\n    return true;\n  }"}"
```

或者

```js
JSON.stringify(data, (key, value) => {
  switch (typeof value) {
    case "undefined":
      return "undefined";
    case "symbol":
      return value.toString();
    case "function":
      return value.toString();
  }
  return value;
})
```

TO

```js
JSON.stringify(data, (key, value) => (['undefined', 'symbol', 'function'].includes(typeof Value) ? String(value) : value));
```

## 如何序列化某一项值

> replacer 作为数组时，结果非常简单，数组的值就代表了将被序列化成 JSON 字符串的属性名

```js
const jsonObj = {
  name: "JSON.stringify",
  params: "obj,replacer,space"
};

// 只保留 params 属性的值
JSON.stringify(jsonObj, ["params"]);
// "{"params":"obj,replacer,space"}" 
```

## 参考

[MDN JSON stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

[你不知道的 JSON.stringify() 的威力](https://juejin.im/post/5decf09de51d45584d238319)

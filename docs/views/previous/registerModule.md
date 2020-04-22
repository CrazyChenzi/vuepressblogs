---
title: registerModule
date: 2018-04-24 14:20:22
tags: 
  - Vue
categories: 
  - 前端
---

::: tip

> 在 store 创建之后，你可以使用 store.registerModule 方法注册模块：[registerModule](https://vuex.vuejs.org/zh-cn/modules.html)

`动态注册vuex模块，对于自定义生成组件很有用`

:::

<!-- more -->

# 实现方案
- html

```html
<div>
  {{message}}
  <div style="color: red; font-size: 20px">注册前后store中modules对比：</div>
  <div v-for="(item, key, index) in $store.state">{{key}} {{item}}</div>
  <Button type="primary" size="small" @click="registerModule">registerModule</Button>
</div>
```
- js

```js
registerModule () {
  this.$store.registerModule('registerModule', {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  })
}
```
# 结尾
[源码地址](https://github.com/blacklisten/vue-example_black/blob/master/src/views/registerModule/registerModule.vue)


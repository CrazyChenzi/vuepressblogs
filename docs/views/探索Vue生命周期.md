---
title: 探索Vue生命周期
date: 2019-02-22 18:55:47
tags: 
 - Vue
categories: 
 - 前端
---

::: tip

Vue生命周期探秘

:::

<!-- more -->

由下图解析：

1. Init Lifecycle&Event, 往vm上挂载各种属性
2. beforeCreate: 实例创建
3. Init injections&reactivity: 初识化注入
4. created: 创建完成，但还未生成真实dom树
5. 进行元素挂载，$el/vm.$mount(el)
6. 是否有template: 解析成render function
7. beforeMount: 模板编译/挂载之前
8. 执行render function，生成真实的dom，并替换到dom tree中
9. mounted: 组件已挂载
10. 更新时
    1. 执行diff算法，比较是否需要触发更新
    2. 执行beforeUpdate, 触发所有需要更新的ui
    3. 触发updated钩子
11. actived/deactivated(keep-alive): 不销毁，缓存组件
12. 销毁时
    1. beforeDestory: 销毁开始
    2. 销毁自身，递归子组件开始remove()删除节点、清空依赖teardown、vm.$off解绑监听事件
    3. destoryed: 完成后触发

![kfY8jU.png](https://s2.ax1x.com/2019/02/22/kfY8jU.png)

# 使用keep-alive缓存组件

父页面代码块：

```html
<template>
  <div id="app">
    <keep-alive>
      <puzzleGame v-if="show" />
    </keep-alive>
    <button @click="destroyedMessage()">销毁</button>
  </div>
</template>
```

```js
<script>
import puzzleGame from './components/puzzleGame.vue'

export default {
  name: 'app',
  components: {
    puzzleGame
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    destroyedMessage () {
      this.show = !this.show
    }
  }
}
</script>
```

子页面代码块：

```html
<template>
  <p>
    <p>{{ message }}</p>
    <button @click="changeMessage()">改变message信息</button>
  </div>
</template>
```

```js
<script>
export default {
  data () {
    return { message: '这是测试' }
  },
  beforeCreate () { console.log('-----beforeCreate-----：', this.$el) },
  created () { console.log('-----created-----：', this.$el) },
  beforeMount () { console.log('-----beforeMount-----：', this.$el) },
  mounted () { console.log('-----mounted-----：', this.$el) },
  beforeUpdate () { console.log('-----beforeUpdate-----：', this.$el) },
  updated () { console.log('-----updated-----：', this.$el) },
  activated () { console.log('-----activated-----：', this.$el) },
  deactivated () { console.log('-----deactivated-----：', this.$el) },
  beforeDestroy () { console.log('-----beforeDestroy-----：', this.$el) },
  destroyed () { console.log('-----destroyed-----：', this.$el) },
  methods: {
    changeMessage () { this.message = '改变后的message' }
  }
};
</script>
```

这里缓存组件，因此不会执行destory的钩子
![khXvXd.png](https://s2.ax1x.com/2019/02/23/khXvXd.png)

# 正常情况下

父页面代码块：

```html
<template>
  <div id="app">
    <puzzleGame v-if="show" />
    <button @click="destroyedMessage()">销毁</button>
  </div>
</template>
```

![khXOpD.png](https://s2.ax1x.com/2019/02/23/khXOpD.png)

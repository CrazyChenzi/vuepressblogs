---
title: addRoutes
date: 2018-04-23 10:46:56
tags: 
  - Vue
categories:
  - 前端
---

::: tip

用动态路由实现权限控制，是一个很nice的方案不是么？ 初始路由只有登录页，根据用户的id查询对应的权限，然后addRoutes，将获取到的菜单数据放入vuex和浏览器缓存中。
> 动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的`数组`。

:::

<!-- more -->

# 实现方案
这里的{% label info@routers %}其实就是代表将来存放菜单权限的js，即vuex中一个state
```js
// 初始路由文件
import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)

const index = () => import('@/views/index/index')

export default new Router({
  routes: [
    { path: '/', component: index },
    ...routers
  ]
})
```
addRoutes 方法使用
```js
let router = [
  {
    path: '*', component: (resolve) => require(['@/views/addRoutes/404.vue'], resolve), name: '404', description: '这是addRoutes出来的404页面'
  },
  {
    path: '/foo', component: (resolve) => require(['@/views/addRoutes/foo.vue'], resolve), name: 'foo', description: '这是addRoutes出来的foo页面'
  }
]
// addRoutes
this.$router.addRoutes(router)
```
这样就完成了动态路由的添加，你可以试着在addRoutes后用`this.$router.push({path: '你的路由地址'})`去访问你新添加的路由元。

`然而这样并没有结束，因为你把404页面渲染在了前面，` 这样会导致在某些情况下你的foo路由会被渲染为404页面，因为路由先找到404页面。所以我们需要把404放在最下面。
```js
let router = [
  {
    path: '/foo', component: (resolve) => require(['@/views/addRoutes/foo.vue'], resolve), name: 'foo', description: '这是addRoutes出来的foo页面'
  },
  {
    path: '*', component: (resolve) => require(['@/views/addRoutes/404.vue'], resolve), name: '404', description: '这是addRoutes出来的404页面'
  }
]
```
这个时候就到了找`bug`的时候了，我们发现在刷新浏览器之后，我们动态添加的路由规则竟然不见了，不要慌，这个时候就轮到vuex登场了，也就是最开始提到的`将获取到的菜单数据放入vuex和浏览器缓存中。`


{% label success@解决方案： %} 将浏览器缓存中的菜单数据与vuex绑定起来，将vuex的数据与router实例绑定起来，当然，你也可以直接将浏览器缓存与router实例绑定起来，但是不建议这么做，毕竟浏览器缓存不是你可以控制的。这样就解决了刷新后丢失的bug了。

[源码地址][1]

  [1]: https://github.com/blacklisten/vue-example_black/blob/master/src/views/addRoutes/addRoutes.vue
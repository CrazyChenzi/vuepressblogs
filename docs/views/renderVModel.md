---
title: renderVModel
date: 2018-04-23 18:08:29
tags: 
  - Vue
categories: 
  - 前端
---

::: tip

`使用render函数实现表格与form表单之间的双向绑定以及表格中使用slot分发（多个slot，分发不同的内容）。`

通过props给表单组件的value进行赋值，之后通过change、blur等元素监听事件，进行取值，然后通过表格当前行索引对表格相应元素进行赋值。这样就完成了一个数据的双向绑定了。

:::

<!-- more -->

> 我这边使用的是[ivewUI](https://www.iviewui.com)组件库

```html
 <!-- 表格代码 -->
 <Table highlight-row :columns="columns3" border :data="data1" size="small" ref="table"></Table>
```
# 在表格中对一个input实现双向绑定
```js
{
  title: '姓名',
  key: 'name',
  render: (h, params) => {
    let self = this;
    return h('div', [
      h('Input', {
        props: {
          placeholder: "请输入....",
          value:params.row.name
        },
        'on': {
          'on-blur':() => {
            self.data1[params.index].name = event.target.value
          }
        },
      }),
      h('p',{
        style: {
          color: 'red',
          display: self.data1[params.index].name === "" ? '' : 'none'
        }
      },'请输入你的名字....')
    ]);
  }
}
```

# 在表格中对一个select实现双向绑定
```js
{
  title: '性别',
  key: 'sex',
  render: (h, params) => {
    let self = this;
    const sexList = [
      {name:'男',value:1},
      {name:'女',value:2}
    ]
    return h('Select',{
      props:{
        value:params.row.sex
      },
      on :{
        'on-change' : (val) => {
          self.data1[params.index].sex = val;
        }
      }
    },sexList.map(item => {
        return h('Option',{
          props:{
            value: item.value,
          }
        },item.name)
      })
    )
  }
}
```

# 在表格中对一个switch实现双向绑定，外加`slot`
```js
{
  title: 'switch开关slot实现',
  key: 'switchSlot', 
  renderHeader(h, params) {
    return h('Tooltip', {
      props: {
        placement: 'right',
        content: 'switch开关'
      }
    },'switch开关slot实现')
  },
  render: (h, params) => {
    let self = this;
    const switchList = [
      {
        slot: 'open',
        name: '打开'
      },
      {
        slot: 'close',
        name: '关闭'
      }
    ]
    return h('i-switch',{
      props: {
        size: 'large',
        value: params.row.switchSlot
      },
      on: {
        'on-change' : (val) =>{
          self.data1[params.index].switchSlot = val;
        }
      }
    // 这样我们就可以在表格中完美的实现多个slot分发了
    },switchList.map(item => {
      return h('span',{
        slot:item.slot
      },item.name)
    }))
  }
}
```

# 注意
对表格数据进行双向绑定时，不建议直接更改源数据源，可以`copy出一份临时数据源`，在做相应修改操作时`对临时数据源进行更改`，这样`可以大大减少对dom的渲染`，`在需要的时候再将临时数据源提交到主数据源`就可以了。

# 结尾
如果觉得render写起来很烦的话，可以使用jsx，会大大减少代码量0.0
[源码地址](https://github.com/blacklisten/vue-example_black/blob/master/src/views/render/renderVModel.vue)

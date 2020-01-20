---
title: hexo next主题集成gitalk评论插件
date: 2018-10-16 21:55:41
tags: 
  - 杂谈
categories: 
  - hexo
---

::: tip

gitalk: 一个基于Github issue 和 Preact开发的评论插件
[gitalk](https://github.com/gitalk/gitalk)

:::

<!-- more -->

## Register a new OAuth application

地址：[Register a new OAuth application](https://github.com/settings/applications/new)

![Register a new OAuth application](https://s2.ax1x.com/2019/01/23/kA7fVP.md.png)]

参数说明：

- Application name： 应用名称
- Homepage URL：程序主页的完整地址即github仓库  eg：[https:blacklisten.github.io](https:blacklisten.github.io)
- Application description：网站的描述
- Authorization callback URL：网站的callback地址

完成后页面跳转如下，Client ID 和 Client Secret后面会用到

![kA7Rbt.png](https://s2.ax1x.com/2019/01/23/kA7Rbt.png)

## gitalk.swig

新建/layout/_third-party/comments/gitalk.swig文件，并添加内容：

```js
{% if page.comments && theme.gitalk.enable %}
  <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
  <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
   <script type="text/javascript">
        var gitalk = new Gitalk({
          clientID: '{{ theme.gitalk.ClientID }}',
          clientSecret: '{{ theme.gitalk.ClientSecret }}',
          repo: '{{ theme.gitalk.repo }}',
          owner: '{{ theme.gitalk.githubID }}',
          admin: ['{{ theme.gitalk.adminUser }}'],
          id: location.pathname,
          distractionFreeMode: '{{ theme.gitalk.distractionFreeMode }}'
        })
        gitalk.render('gitalk-container')           
       </script>
{% endif %}
```

## comments.swig

修改/layout/_partials/comments.swig，添加内容如下，与前面的elseif同一级别上：

```js
{% elseif theme.gitalk.enable %}
<div id="gitalk-container"></div>
```

## index.swig

修改layout/_third-party/comments/index.swig，在最后一行添加内容：

```js
{% include 'gitalk.swig' %}
```

## gitalk.styl

新建/source/css/_common/components/third-party/gitalk.styl文件，添加内容：

```styl
.gt-header a, .gt-comments a, .gt-popup a
  border-bottom: none;
.gt-container .gt-popup .gt-action.is--active:before
  top: 0.7em;
```

## third-party.styl

修改/source/css/_common/components/third-party/third-party.styl，在最后一行上添加内容，引入样式：

```styl
@import "gitalk"
```

## _config.yml

在主题配置文件next/_config.yml中添加如下内容：

```yml
gitalk:
  enable: true
  githubID: github帐号  # 例：blacklisten
  repo: 仓库名称   # 例：blacklisten.github.io
  ClientID: Client ID
  ClientSecret: Client Secret
  adminUser: github帐号 #指定可初始化评论账户 如 blacklisten
  distractionFreeMode: true
```

这样gitalk评论插件就添加完成了

> 来源：[https://asdfv1929.github.io/2018/01/20/gitalk/](https://asdfv1929.github.io/2018/01/20/gitalk/)

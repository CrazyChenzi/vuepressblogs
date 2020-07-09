---
title: git Please move or remove them before you can merge
date: 2019-02-28 13:33:59
tags: 
  - Git
  - 日常错误问题收集
categories: 
  - Git
---

::: tip

在git pull的时候，报如下错误：
Please move or remove them before you can merge

很奇怪... 本地master这个分支我一般只用于本地合并代码，按道理不会出现本地修改与远端冲突这样的问题（当时查看确实有修改的东西，而且是一大堆，还原了还是pull不了

这个错误的意思是指，因为本地有更改且与远端代码冲突，又没有merge

如果确定使用远端代码的话，最方便的解决办法就是删除本地的修改。`用命令，图形化界面有时候删除不干净`

```git
git clean
  -n 显示 将要删除的文件和目录
  -f 删除文件
  -df 删除文件和目录
```

最后我用了`git clean -df`删除了本地所有修改过的文件和目录...

:::

<!-- more -->

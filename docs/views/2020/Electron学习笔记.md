---
title: Electron学习笔记
date: 2020-07-09 17:10:31
tags: 
  - Electron
categories:
  - Electron
---

::: warning

持续更新中...

:::

## webview
> By default the webview tag is disabled in Electron >= 5. 在构造 BrowserWindow 时，需要通过设置 webviewTag webPreferences选项来启用标签

当Electron版本大于等于5，需要在BrowserWindow的实例中手动开启webviewTag标签

![UB3EDJ.png](https://s1.ax1x.com/2020/07/16/UB3EDJ.png)


[webview](https://www.electronjs.org/docs/api/webview-tag#webviewtagprintoptions)

<!-- more -->

## BrowserWIndow


_使用BrowserWindow创建一个父子窗口_
```javascript
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  let parent = new BrowserWindow();
  // parent 代表是否放置在父窗体上方
  let child = new BrowserWindow({ parent });

  parent.loadURL("https://www.google.com");
  child.loadURL("https://www.baidu.com");

  parent.show();
  child.show();
};

app.on('ready', () => createWindow())
```
[BrowserWindow](https://www.electronjs.org/docs/api/browser-window)
## Dialog
> 显示用于打开和保存文件、警报等的本机系统对话框



```javascript
dialog.showMessageBox(child, {
  message: '这是一条信息'
})
```
[Dialog](https://www.electronjs.org/docs/api/dialog#dialogshowmessageboxsyncbrowserwindow-options)

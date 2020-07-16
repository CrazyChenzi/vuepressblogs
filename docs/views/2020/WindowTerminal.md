---
title: Windows Terminal美化
date: 2020-07-13 13:33:31
tags: 
  - 杂谈
categories:
  - 杂谈
---

::: tip

## Window Terminal美化

- Window Terminal
   - Microsoft Store安装即可
- Fira Code 字体
   - [下载地址](https://github.com/tonsky/FiraCode/releases)
- posh-git、on-my-posh主题
- ColorTool

:::

<!-- more -->

![UB1kTI.png](https://s1.ax1x.com/2020/07/16/UB1kTI.png)

### posh-git、on-my-posh主题

1.安装，使用`window powserShell`

```shell
Install-Module posh-git -Scope CurrentUser 
Install-Module oh-my-posh -Scope CurrentUser
```

2.配置和切换主题

```javascript
$PROFILE

if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

3.在打开的文件中添加

```javascript
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Sorin
```

4.切换主题

```shell
Set-Theme ${主题名字}
```

**Agnoster、Avit、Darkblood、Fish、Honukai、Paradox、Sorin、tehrob**

### 配置Window Terminal

[官方配置详解](https://docs.microsoft.com/zh-cn/windows/terminal/)

打开设置

![UB1aX4.png](https://s1.ax1x.com/2020/07/16/UB1aX4.png)

添加`defaults`和`schemes`

```json
"defaults": {
  // Put settings here that you want to apply to all profiles.
  "fontFace": "Fira Code", // oh-my-posh 主题原因，使用其他的字体可能会出现乱码
  "backgroundImage": "F:\\vscodeBg\\014.jpg", // 背景图片地址
  "backgroundImageOpacity": 0.4, // 透明度
  "colorScheme": "Andromeda", // 颜色方案
  "acrylicOpacity": 0.7,
  "useAcrylic": true
},
"schemes": [
    {
      "name": "Andromeda",
      "black": "#000000",
      "red": "#cd3131",
      "green": "#05bc79",
      "yellow": "#09da0f",
      // "yellow": "#e5e512",
      "blue": "#2472c8",
      "purple": "#bc3fbc",
      "cyan": "#0fa8cd",
      "white": "#e5e5e5",
      "brightBlack": "#666666",
      "brightRed": "#cd3131",
      "brightGreen": "#05bc79",
      "brightYellow": "#09da0f",
      // "brightYellow": "#e5e512",
      "brightBlue": "#2472c8",
      "brightPurple": "#bc3fbc",
      "brightCyan": "#0fa8cd",
      "brightWhite": "#e5e5e5",
      "background": "#262a33",
      "foreground": "#e5e5e5"
    },
    {
      "name": "Campbell",
      "foreground": "#F2F2F2",
      "background": "#0C0C0C",
      "colors": [
        "#0C0C0C",
        "#C50F1F",
        "#13A10E",
        "#C19C00",
        "#0037DA",
        "#881798",
        "#3A96DD",
        "#CCCCCC",
        "#767676",
        "#E74856",
        "#16C60C",
        "#F9F1A5",
        "#3B78FF",
        "#B4009E",
        "#61D6D6",
        "#F2F2F2"
      ]
    },
    {
      "name": "Solarized Dark",
      "foreground": "#FDF6E3",
      "background": "#073642",
      "colors": [
        "#073642",
        "#D30102",
        "#859900",
        "#B58900",
        "#268BD2",
        "#D33682",
        "#2AA198",
        "#EEE8D5",
        "#002B36",
        "#CB4B16",
        "#586E75",
        "#657B83",
        "#839496",
        "#6C71C4",
        "#93A1A1",
        "#FDF6E3"
      ]
    }
  ]
```

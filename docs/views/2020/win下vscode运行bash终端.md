---
title: win下vscode运行bash终端
date: 2020-03-30 14:26:56
tags: 
  - 编辑器
categories:
  - 其它
---

:::tip

window vscode如何运行bash终端？

[How do I use Bash on Windows from the Visual Studio Code integrated terminal?](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal)

:::

<!-- more -->

## 环境变量中添加

**将Git bash目录添加到环境变量eg: C:\Program\Git\bin，就可以在vscode终端输入bash进入bash模式，输入cmd返回cmd模式**

### Git添加到环境变量

1. 我的电脑-属性
2. 高级系统设置-环境变量
3. path中添加C:\Program\Git\bin

## 默认配置

**如果想默认设置Bash模式，可以编辑用户设置文件，添加："terminal.integrated.shell.windows": "C:\Program\Git\bin"**

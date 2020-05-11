---
title: Windows包管理器Chocolatey
date: 2020-05-11 14:15:06
tags: 
  - 杂谈
categories: 
  - 杂谈
---

:::tip
`Chocolatey` Windows设计的包管理器，有了它，你也可以

```shell
choco install docker
```

[Why Chocolatey](https://chocolatey.org/why-chocolatey)
:::

<!-- more -->

## 安装

- Windows 7+ / Windows Server 2003+
- PowerShell v2+ (minimum is v3 for install from this website due to TLS 1.2 requirement)
- .NET Framework 4+ (the installation will attempt to install .NET 4.0 if you do not have it installed)(minimum is 4.5 for install from this website due to TLS 1.2 requirement)

只要你的系统在**Win7**以上就可以了，打开开始菜单，右键以管理员身份运行**PowerShell**，然后粘贴以下命令

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

[Installing Chocolatey](https://chocolatey.org/install)

*检查是否安装成功*

```
choco
```

*安装一个应用*

以[deno](https://github.com/denoland/deno)为例

```shell
choco install deno
```

## 一些命令

1. 安装`choco install deno`
2. 升级`choco upgrade deno`
3. 卸载`choco uninstall deno`
4. 搜索`choco search deno`
5. 查看已安装的包`choco list -lo`

[Chocolatey docs](https://chocolatey.org/docs#usage)

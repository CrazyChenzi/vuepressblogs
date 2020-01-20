---
title: ShadowSocks配置
date: 2018-09-10 21:12:56
tags: 
  - 杂谈
  - Linux
categories: 
  - 其它
---

::: tip

[https://github.com/shadowsocks/shadowsocks/wiki/](https://github.com/shadowsocks/shadowsocks/wiki/)

[https://shadowsocks.org/en/download/servers.html](https://shadowsocks.org/en/download/servers.html)

:::

<!-- more -->

## 安装

```
$ yum install python-setuptools
$ easy_install pip
$ pip install shadowsocks
```
## 配置开机自动启动，并先手动启动服务

```
$ vi /lib/systemd/system/ss.service (1)
$ systemctl enable ss.service
$ systemctl start ss.service
```

## 多用户配置

创建一个配置文件 /etc/shadowsocks.json  (vi /etc/shadowsocks.json)

```json
{
    "port_password": {
        "8501": "password1",
        "8502": "password2",
        "8503": "password3"
    },
    "method": "aes-256-cfb",
    "fast_open": false,
    "timeout": 300
}
```
然后再更新(1) 中文件
`ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json -d start`
再配置防火墙
```
$ firewall-cmd --permanent --add-port=8501/tcp
$ firewall-cmd --reload
$ firewall-cmd --list-all   (查看已配置防火墙)
$ firewall-cmd --permanent --direct --add-rule ipv4 filter INPUT_direct 1 -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 30 --hitcount 4 -j REJECT --reject-with tcp-reset
```


### (1)
```
# [Unit] 服务说明
# Description: 服务描述
# After: 服务类别
[Unit]
Description=shadowsocks server
After=network.target

# [Service] 服务运行参数设置
# Type=forking 运行形式为后台运行
# ExecStart 运行命令
# ExecReload 重启命令
# ExecStop 停止命令
# PrivateTmp=True表示给服务分配独立的临时空间
# 注意：[Service] 的启动、重启、停止命令全部要求使用绝对路径
[Service]
Type=forking
ExecStart=/usr/bin/ssserver -p 443 -k myPassword --fast-open -d start
ExecReload=/usr/bin/ssserver -d restart
ExecStop=/usr/bin/ssserver -d stop

# [Install] 服务安装的相关设置
# 设置为多用户，对应原来的 runlevel 3
[Install]
WantedBy=multi-user.target
```

进入服务器编辑ssh jpn  需要服务器秘钥才行0.0
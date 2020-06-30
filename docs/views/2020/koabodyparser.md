---
title: koa-bodyparser
date: 2020-06-30 13:40:31
tags:
  - nodejs
categories:
  - 后端
---

:::danger
request entity too large 字段过大，导致 401😒
:::

<!-- more -->

解决: 

```js
app.use(bodyParser({
  formLimit: '10mb',
  jsonLimit: '10mb'
}))
```

::: details 官方types说明
```ts
declare function bodyParser(opts?: bodyParser.Options): Koa.Middleware;

declare namespace bodyParser {
  interface Options {
    /**
     *  parser will only parse when request type hits enableTypes, default is ['json', 'form'].
     */
    enableTypes?: string[];
    /**
     * requested encoding. Default is utf-8 by co-body
     */
    encode?: string;

    /**
     * limit of the urlencoded body. If the body ends up being larger than this limit
     * a 413 error code is returned. Default is 56kb
     */
    formLimit?: string;

    /**
     * limit of the json body. Default is 1mb
     */
    jsonLimit?: string;

    /**
     * limit of the text body. Default is 1mb.
     */
    textLimit?: string;

    /**
     * when set to true, JSON parser will only accept arrays and objects. Default is true
     */
    strict?: boolean;

    /**
     * custom json request detect function. Default is null
     */
    detectJSON?: (ctx: Koa.Context) => boolean;

    /**
     * support extend types
     */
    extendTypes?: {
      json?: string[];
      form?: string[];
      text?: string[];
    };

    /**
     * support custom error handle
     */
    onerror?: (err: Error, ctx: Koa.Context) => void;
  }
}
```
:::

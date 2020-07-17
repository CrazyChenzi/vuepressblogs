---
title: TypeScript
date: 2020-07-17 17:40:31
tags:
  - TypeScript
categories:
  - Learning
---

:::tip
 TypeScript👀📖
:::

<!-- more -->

## ES6 Modules default exports interop with CommonJS 😒

```ts
// index.ts
export default {
  ...tools
  ...directive
}

// index.js
exports.default = __assign(__assign({}, tools), directive);

// use
const tools = require('./index.js')

tools.default ??? 😱
```

*解决方案...🙁*

:::danger
 ES6 Modules default exports interop with CommonJS 😒 [issues](https://github.com/microsoft/TypeScript/issues/2719)
:::

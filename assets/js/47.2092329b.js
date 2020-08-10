(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{679:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[a("code",[t._v("原型")]),t._v("是一个对象，其他对象可以通过它实现属性继承, 只有null除外，它没有自己的原型对象。")]),t._v(" "),a("p",[a("code",[t._v("原型链")]),t._v("是利用原型让一个引用类型继承另一个引用类型的属性和方法")])]),t._v(" "),a("h1",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("原型")]),t._v("是一个对象，其他对象可以通过它实现属性继承, 只有null除外，它没有自己的原型对象。")])]),t._v(" "),a("p",[t._v("原型对象上的所有属性和方法，都能被对应的构造函数创建的实例对象共享（这就是 JavaScript 继承机制的基本设计），也就是说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中\n每一个构造函数都有一个prototype（原型）属性，这个属性就是使用构造函数创建出来的实例对象的原型对象")]),t._v(" "),a("h1",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("原型链")]),t._v("是利用原型让一个引用类型继承另一个引用类型的属性和方法")])]),t._v(" "),a("p",[a("code",[t._v("null")]),t._v(" 没有原型，并作为这个原型链中的最后一个环节\n几乎所有 JavaScript 中的对象都是位于原型链顶端的Object的实例")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("__proto__")]),t._v("是任何对象都有的属性，而js里万物皆对象，所以会形成一条"),a("code",[t._v("__proto__")]),t._v("必须最终到头，并且值是"),a("code",[t._v("null")]),t._v("当js引擎查找对象的属性时，先查找对象本身是否存在该属性，如果不存在，会在原型链上查找，但是不会查找自身的"),a("code",[t._v("prototype")])]),t._v(" "),a("h1",{attrs:{id:"proto-和prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto-和prototype"}},[t._v("#")]),t._v(" __proto__和prototype")]),t._v(" "),a("p",[t._v("prototype是"),a("code",[t._v("函数")]),t._v("才有的属性\n__proto__是每个对象都有的属性")]),t._v(" "),a("blockquote",[a("p",[t._v("大多数情况下，"),a("code",[t._v("__proto__")]),t._v("可以理解为“"),a("strong",[t._v("构造器原型")]),t._v("”，即：\n"),a("strong",[t._v("proto")]),t._v(" === constructor.prototype\n"),a("strong",[t._v("通过Onject.create()创建的对象不适用于此等式")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Preson")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Preson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Preson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Preson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Preson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Preson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Preson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript深入之从原型到原型链"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/shuiyi/p/5305435.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("三张图搞懂JavaScript的原型对象与原型链"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);
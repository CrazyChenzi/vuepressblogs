---
title: Dart语法学习
date: 2020-04-26 10:59:06
tags: 
  - Dart
  - Flutter
categories: ['前端', '移动端']
---

:::tip
1. 能够放在变量中的所有内容都是对象
2. Dart是强类型语言，如果明确说明不需要任何类型，可以使用特殊类型`dynamic`标识
3. 与Java不同，Dart没有关键字`public`、`protected`、`private`。如果设置私有变量或函数，则变量、函数名以 `_` 开头
:::

<!-- more -->

## @override是做什么的🙄

[官方解释](https://api.dart.dev/stable/1.24.3/dart-core/override-constant.html)

> @override只是指出函数也在祖先类中定义，但正在重新定义以在当前类中执行其他操作。它还用于注释抽象方法的实现。它是可选的，但建议使用，因为它提高了可读性。

当Child类重新定义Parent类的方法时，建议使用`@override`以提高代码可读性，我们称之为`方法重写`

```dart
class Car {
  void ShowOwner() => print("This is Parent's car");
}

class Jay extends Car {
  @override
  void ShowOwner() {
    print("This JD's car");
  }
}

class Sanket extends Car {
  @override
  void ShowOwner() {
    print("This is Sanket's car");
  }
  @override
  void ShowOwner2() {}
  //   ⬇警告说明
  // The method doesn't override an inherited method. 
  // Try updating this class to match the superclass, or removing the override annotation.
}

void main() {
}
```

因为ShowOwner2在Car这个类中不存在，所以当我们使用`@override`时会给出警告提示，你需要**remove**掉这个无用的`override`

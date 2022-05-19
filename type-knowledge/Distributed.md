# 理解 [A] extends [B] 的写法

初次看到这种写法时，很疑惑...为什么要把两个类型使用 `[]` 括起来。

看到 `extends` ，猜想这个可能和条件类型有关，迅速在脑海里搜索了一番相关姿势，但是印象里看到过的所有快餐文章中，几乎都没提及过这种写法, `typescript` 中文网关于条件类型的文档更是空空如也。

还是直接在英文官网中找到了，这段语法的说明，所以说，影响程序员能力提升的最大障碍，就是英语...

先将 [官网文档对此的描述](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) 进行搬运：

    Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.

    通常，分布式条件是正常所需要的行为。为了避免这种行为，可以用方括号将 extends 关键字的两边括起来。

```typescript
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;
          
type StrArrOrNumArr = (string | number)[]
```

这段描述来自分布式条件类型的一文中的最后一句话，所以确实很容易被人忽略。

在一些快餐文章中，更是着重将笔墨放到了分布式条件类型的特性上进行着重介绍，从而忽略了这一个小功能点。

最常规的用法，就是用此特性，判断类型是否是联合类型：

```typescript

type IsUnion<A, B = A> =
    A extends A // 触发分布式条件类型，让 A 的每个类型单独传入
        ? [B] extends [A] // 避免触发分布式条件类型，那么 B 就是整个联合类型，依次进行判断...
            ? false
            : true
        : never


type res1 = IsUnion<'A'>; // false
type res2 = IsUnion<'A' | 'B'>; // true

```

结论：少读快餐文章，官网文档学习最佳...
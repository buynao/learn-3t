/*
 * 题目：
 * 判断类型是否是联合类型
 * 
*/

type IsUnion<A, B = A> =
    A extends A // 触发分布式条件类型，让 A 的每个类型单独传入
        ? [B] extends [A] // 避免触发分布式条件类型，那么 B 就是整个联合类型，依次进行判断...
            ? false
            : true
        : never


type res1 = IsUnion<'A'>; // false
type res2 = IsUnion<'A' | 'B'>; // true

    
/**
 * 题目：
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
 * 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 
 * 示例：比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 * */

type MyAwaited<T> = T extends Promise<infer V> ? V extends Promise<any> ? Awaited<V> : V : T;

type value1 = MyAwaited<Promise<1>>; // 1
type value2 = MyAwaited<Promise<true>>; // true
/*
 * 题目：
 * 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
*/

type MyParameters<T extends (...rest: any) => unknown> = T extends (...rest: infer R) => unknown ? R : never;

type R1 = MyParameters<(a: number) => void>; // [a: number]
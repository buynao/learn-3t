/*
 * 题目：
 * 在类型系统里实现通用的 Array.push 。
 * 示例：
 * type Result = Push<[1, 2], '3'> // [1, 2, '3']
*/

type Push<T extends any[], K> = [...T, K];

type Result1 = Push<[1, 2], '3'> // [1, 2, '3']
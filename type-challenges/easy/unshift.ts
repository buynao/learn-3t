/*
 * 题目：
 * 实现类型版本的 Array.unshift。
 * 
 * 示例：
 *  type Result = Push<[1, 2], 0> // [0, 1, 2]
*/

type Unshift<T extends any[], K> = [K, ...T];

type Result2 = Unshift<[1, 2],0> // [1, 2, '3']
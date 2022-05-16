/*
 * 题目：
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，
 * 这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 * 
 * 示例：
 * type array = ['Kars', 'Esidisi', 'Wamuu', 'Santana'];
 * type isPillarMen = Includes<array, 'Dio'> // expected to be `false`
 * type B = If<false, 'a', 'b'> // expected to be 'b'
*/

type array = ['Kars', 'Esidisi', 'Wamuu', 'Santana'];

type Includes<T extends any[], K extends keyof any> = T extends [infer F, ...infer Rest]
  ? IsEqual<F, K> extends true ? true : IsEqual<Rest, K>
  : false;

type isPillarMen1 = Includes<array, 'Dio'> // false
type isPillarMen2 = Includes<array, 'Kars'> // true
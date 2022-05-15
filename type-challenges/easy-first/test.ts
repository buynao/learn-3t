// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3
type First<A extends any[]> = A extends [infer F, ...infer rest] ? F : never;

type head1 = First<arr1>; // a
type head2 = First<arr2> // 3

// 同理，实现获取最后一个元素
type Last<A extends any[]> = A extends [...infer rest, infer F] ? F : never;

type last1 = Last<arr1> // c
type last2 = Last<arr2> // 1

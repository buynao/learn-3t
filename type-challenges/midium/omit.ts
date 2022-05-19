/*
 * 题目：
 * 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
 * Omit 会创建一个省略 K 中字段的 T 对象。
 * 
*/
interface Todo {
  title: string
  description: string
  completed: boolean
}
type MyOmit<T extends object, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
}
type TodoPreview = MyOmit<Todo, 'description' | 'title'>

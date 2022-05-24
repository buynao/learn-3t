/*
 * 题目：
 * 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
 * K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
 * 
 * 示例：
 * interface Todo {
 *  title: string
 *  description: string
 *  completed: boolean
 * }
 * 
 * const todo: MyReadonly2<Todo, 'title' | 'description'> = {
 *   title: "Hey",
 *   description: "foobar",
 *   completed: false,
 * }
 * 
 * todo.title = "Hello" // Error: cannot reassign a readonly property
 * todo.description = "barFoo" // Error: cannot reassign a readonly property
 * todo.completed = true // OK
 * 
*/
const todo1: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false, 
}
todo1.title = "Hello";
todo1.description = '1';
todo1.completed = true;

type MyReadonly2<T extends object, K extends keyof T> = {
  [V in Exclude<keyof T, K>]: T[V]
} & {
  readonly [P in K]: T[P]
}
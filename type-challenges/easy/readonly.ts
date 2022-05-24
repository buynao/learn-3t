/*
 * 题目：
 * 不要使用内置的Readonly<T>，自己实现一个。
 * 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
*/

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = 'd'; // 无法分配到 "description" ，因为它是只读属性。ts(2540)
todo.description = 'd'; // 无法分配到 "description" ，因为它是只读属性。ts(2540)

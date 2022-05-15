// 题目：不要使用内置的Readonly<T>，自己实现一个。

// 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。

// 也就是不可以再对该对象的属性赋值。

/* 1. 简单版本 - readonly */
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


/* 2. 中等 - readonly */

// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
// K指定应设置为Readonly的T的属性集。
// 如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & {
  [S in Exclude<keyof T, K>]: T[S];
}


const todo2: MyReadonly2<Todo, 'title'> = {
  title: "Hey",
  description: "foobar"
}

todo2.title = 'd'; // 无法分配到 "description" ，因为它是只读属性。ts(2540)
todo2.description = 'd'; // success


/* 3. 中等 - deepReadonly */

interface Todo3 {
  title: string
  description: string;
  obj: {
    title2: string;
  }
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
}

// or ???
// type DeepReadonly<T> = {
//   readonly [key in keyof T]: keyof T[key] extends never
//     ? T[key]
//     : DeepReadonly<T[key]>;
// };

const td3: DeepReadonly<Todo3> = {
  title: 't',
  description: 'd',
  obj: {
    title2: 'tt'
  }
}

td3.obj.title2 = '3'; // 无法分配到 "title2" ，因为它是只读属性。ts(2540)

/*
 * 题目：
 * 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
 * 
 * 示例：
  type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
 * 
*/
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}
type Todo1 = DeepReadonly1<X> // should be same as `Expected`

type DeepReadonly1<T> = {
  readonly [K in keyof T]: T[K] extends never ? T[K]: DeepReadonly1<T[K]>
}

const td3: DeepReadonly1<X> = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey',
}

td3.x.b = '3';
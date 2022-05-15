// 题目：实现 TS 内置的 Pick<T, K>，但不可以使用它。
// 从类型 T 中选择出属性 K，构造成一个新的类型。

/* ts 写法 */
type MyPick<T extends any, K extends keyof T> = {
  [P in K]: T[P]
};

type Obj = {
  a: number;
  b: string;
  c: boolean;
};

type ObjResult = MyPick<Obj, 'a' | 'b'>;

// print:
// type ObjResult = {
//   a: number;
//   b: string;
// }

/* js 写法 */

function myPick(obj: Obj, keys: (keyof Obj)[]) {
  const myObj = {} as any;
  keys.forEach((key) => {
    if (key in obj) {
      myObj[key] = obj[key];
    }
  })
  return myObj;
}

myPick({ a: 1, b: '1', c: true}, ['a', 'b'])
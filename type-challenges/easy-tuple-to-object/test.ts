// 题目：传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

const tuple = ['tesla', 'model 3', 'model X', 'model Y', 1]

// type result = TupleToObject<tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type TupleToObject<T extends any[]> = {
  [P in T[number]]: P
}

type result = TupleToObject<typeof tuple>;


// 变种tips： 通过 T[number] 可以获得数组的所以联合类型

type TupleToUnion<T extends any[]> = T[number]

type result1 = TupleToUnion<typeof tuple>;

const s: result1 = 'tesla';
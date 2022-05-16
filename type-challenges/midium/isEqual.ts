/*
 * 题目：
 * 判断两个类型是否一致
 * 
*/


type IsEqual<A, B> = (<T>() => T extends A ? true : false) extends (<T>() => T extends B ? true : false)
    ? true : false;

type isTrue = IsEqual<true, true>;
type isFalse = IsEqual<true, false>;
type isStr1 = IsEqual<'1', '1' | '2'>;
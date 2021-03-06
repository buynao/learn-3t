/*
 * 题目：
 * 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
 * 
 * 示例：
 * type teslaLength = Length<tesla> // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
*/

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']


type Length<T extends any[]> = T['length'];

type teslaLength = Length<tesla>; // 4
type spaceXLength = Length<spaceX>; // 5
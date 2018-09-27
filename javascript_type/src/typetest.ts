const string = '';
const number = 0;
const boolean = true;
const nul = null;
const object = {};
const symbol = Symbol('hoge');
let a;

console.log(`string: ${typeof string}`); // string
console.log(`number: ${typeof number}`); // number
console.log(`boolean: ${typeof boolean}`); // boolean
console.log(`nul: ${typeof nul}`); // object
console.log(`symbol: ${typeof symbol}`); // symbol
console.log(`a: ${typeof a}`); // undefined
console.log(`object: ${typeof object}`); // object

console.log(`string: ${Object.prototype.toString.call(string)}`); // [object String]
console.log(`number: ${Object.prototype.toString.call(number)}`); // [object Number]
console.log(`boolean: ${Object.prototype.toString.call(boolean)}`); // [object Boolean]
console.log(`nul: ${Object.prototype.toString.call(nul)}`); // [object Null]
console.log(`symbol: ${Object.prototype.toString.call(symbol)}`); // [object Symbol]
console.log(`a: ${Object.prototype.toString.call(undefined)}`); // [object Undefined]
console.log(`object: ${Object.prototype.toString.call(object)}`); // [object Object]

const arrayString = new Array<string>();
const arrayNumber = new Array<number>();
const arrayObject = new Array<object>();

console.log(`arrayString:${typeof arrayString}`); // object
console.log(`arrayNumber:${typeof arrayNumber}`); // object
console.log(`arrayObject:${typeof arrayObject}`); // object
console.log(`arrayString:${Object.prototype.toString.call(arrayString)}`); // [object Array]
console.log(`arrayNumber:${Object.prototype.toString.call(arrayNumber)}`); // [object Array]
console.log(`arrayObject:${Object.prototype.toString.call(arrayObject)}`); // [object Array]

const array = [1, 3, 5];
console.log(`array has 3 ? ${array.includes(3)}`); // true
console.log(`array has 4 ? ${array.includes(4)}`); // false

// 見つかればindex.見つからなければ-1を返す。
if (array.indexOf(3) != 0) {
    console.log('array has 3');
}

/**
 * Array.includes()の代替
 * @param array 検索される配列
 * @param target 検索対象
 */
const arrayIncludes = (array: any[], target: any ) => {
    // 配列無いならリターン
    if (array == null) {
        return false;
    }
    // 配列をループし、一致するものがあれば終了
    // ※someはforeachとほぼ同じだが、trueが返却された時点でループを終了する
    return array.some(item => {
        return item === target;
    });
}

console.log(`array has 3 ? ${arrayIncludes(array, 3)}`); // true
console.log(`array has 4 ? ${arrayIncludes(array, 4)}`); // false

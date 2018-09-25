'use strict'

// 単純ループ 
let sum = 0; 
for (let i = 1; i <= 10; i++) { 
    sum += i; 
} 

// リスト全ループ 
const allLoopList = [1, 3, 5, 7]; 
for (let i = 0; i < allLoopList.length; i++) { 
    console.log(`value: ${allLoopList[i]}`); 
} 

// for...in
const forInObj = {'a':1, 'b':2, 'c':3}; 
for (const value in forInObj) { 
    console.log(`key: ${value}`); 
    console.log(`value: ${forInObj[value]}`); 
} 

// for...in NGパターン
const forInList = [1, 3, 5]; 
list.text = 'hoge'; 
list.func = function(){
    console.log('hoge');
}
for (const key in forInList) { 
    console.log(`key: ${key}`); 
    console.log(`value: ${forInList[key]}`); 
}

// for...of
const forOfList = [1, 3, 5]; 
for (const value of forOfList) { 
    console.log(`value: ${value}`); 
} 

// for...of OKパターン
const forOfOKList = [1, 3, 5]; 
forOfOKList.text = '1'; 
for (const value of forOfOKList) { 
    console.log(`value: ${value}`); 
} 

// foreach
const foreachList = [1, 3, 5]; 
foreachList.forEach(element => { 
    console.log(`element: ${element}`); 
}); 

// foreach詳細
const foreachListDetail = [1, 3, 5]; 
foreachListDetail.forEach((element, index, array) => { 
    // 取り出した配列の値 
    // 例：1,3,5 
    console.log('element:', element); 
    // 配列のインデックス 
    // 例：0,1,2... 
    console.log('index:', index); 
    // ループしてる配列自身 
    // 例：[1, 3, 5] 
    console.log('array:', array); 
}); 

// object loop
const foreachObj = { 'a': 1, 'b': 2, 'c': 3 }; 
Object.keys(foreachObj).forEach(key => { 
    console.log(`key: ${key}`); 
    console.log(`value: ${obj[key]}`); 
}); 
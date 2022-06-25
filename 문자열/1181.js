let input = require('fs').readFileSync('question.txt').toString().trim().split('\n');

let set=new Set(input.slice(1));
let newArr=[...set]; 
//중복을 없애기
/*
const set = new Set(dupArr);

중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,

const uniqueArr = [...set];

Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환하였습니다.

Set 객체를 배열로 변환할 때, Spread Operator 대신

Array.from() 또는 forEach() 문을 사용할 수도 있습니다.

*/

newArr.sort(); //알파벳 순서로 정렬

//배열 요소 각각의 문자열 길이에 따라 오름차순 정렬
newArr.sort(function(a,b){
    if(a.length>b.length) return 1;
    if(a.length===b.length) return 0;
    else return -1;
});

console.log(newArr.join('\n'));
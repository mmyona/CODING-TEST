let input = require('fs').readFileSync('question.txt').toString().trim().split('\n');

let set=new Set(input.slice(1));
let newArr=[...set]; 
//중복을 없애기

newArr.sort(); //알파벳 순서로 정렬

//배열 요소 각각의 문자열 길이에 따라 오름차순 정렬
newArr.sort(function(a,b){
    if(a.length>b.length) return 1;
    if(a.length===b.length) return 0;
    else return -1;
});

console.log(newArr.join('\n'));
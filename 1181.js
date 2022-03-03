let input = require('fs').readFileSync('question.txt').toString().split('\n');

let set=new Set(input);
let newArr=[...set];

console.log(newArr);
//배열 요소 각각의 문자열 길이에 따라 오름차순 정렬
newArr.sort(function(a,b){
    if(a.length>b.length) return 1;
    if(a.length===b.length) return 0;
    else return -1;
});
for(let words of newArr){
    
}
for(let words of newArr){
    console.log(words);
}
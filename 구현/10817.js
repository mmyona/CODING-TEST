var input = require('fs').readFileSync('question.txt').toString();

var num = input.split(' ').map(x => Number(x));

num.sort(function(a,b){
    return a-b;
}); //오름차순으로 정렬

console.log(num[1]);
var input = require('fs').readFileSync('question.txt').toString();

var arr=[];

for(let i=0;i<26;i++){
    arr.push(0); //배열 초기화
}

for(let i=0;i<input.length;i++){
    arr[input[i].toUpperCase().charCodeAt(0)-65]++;
}
var saveArr=arr.slice(); //원본 배열 저장 (deep copy)
arr.sort(function(a,b){
    return a-b;
}); //크기가 작은 요소부터 큰 순서대로 배열 정렬

if(arr[25]!==arr[24]){
    for(let i=0;i<26;i++){
        if(arr[25]===saveArr[i]){
            console.log(String.fromCharCode(i+65));
        }
    }
} else{
    console.log('?');
}
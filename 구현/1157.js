var input = require('fs').readFileSync('question.txt').toString();

var arr=[];
for(let i=0;i<26;i++){
    arr.push(0); //배열 초기화
}

for(let i=0;i<input.length;i++){
    arr[input[i].toUpperCase().charCodeAt(0)-65]++;
}

for(let i=0;i<26;i++){

}
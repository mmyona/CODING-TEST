let input = require('fs').readFileSync('question.txt').toString();

var arr=[]; //알파벳 개수를 저장할 배열
var result=''; //출력할 문자열

for(let i=0;i<26;i++){
    arr.push(0); //배열 초기화
}

for(let i=0;i<input.length;i++){
    for(let j=0;j<26;j++){
        if(input[i]===String.fromCharCode(j+97)){
            arr[j]++;
        }
    }
}
for(let i=0;i<26;i++){
    result+=arr[i];
    result+=' ';
}
console.log(result);
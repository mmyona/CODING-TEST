let input = require('fs').readFileSync('question.txt').toString().trim().split('\n');
let result=input[1];

for(let i=2;i<=input[0];i++){ //입력 문자열 개수
    for(let j=0;j<input[1].length;j++){ //입력 문자열의 길이
        if(input[1][j]!==input[i][j]){
           result=result.replace(result[j],'?');
        }
    }
}
console.log(result);

//오류... 해결 못함
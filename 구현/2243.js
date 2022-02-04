let input = require('fs').readFileSync('question.txt').toString();
let result='*';
let empty='';

for(let i=1;i<Number(input);i++){
    result+='**'; //맨 처음 줄의 *
}

for(let i=Number(input);i>0;i--){
    console.log(empty+result);
    result=result.slice(2) //*을 두개씩 줄여 나감
    empty+=' '; //공백을 하나씩 늘려 나감
}
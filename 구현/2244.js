let input = require('fs').readFileSync('question.txt').toString();
let result_='*';
let empty_='';

let result='*';
let empty='';

for(let i=1;i<Number(input);i++){
    empty+=' '; //맨 처음 줄의 공백
}

for(let i=Number(input);i>1;i--){
    console.log(empty+result);
    result+='**' //*을 하나씩 늘려 나감
    empty=empty.slice(1); //공백을 하나씩 줄여 나감
} //* 출력 - 1

for(let i=1;i<Number(input);i++){
    result_+='**'; //맨 처음 줄의 *
}

for(let i=Number(input);i>0;i--){
    console.log(empty_+result_);
    result_=result_.slice(2) //*을 두개씩 줄여 나감
    empty_+=' '; //공백을 하나씩 늘려 나감
} //* 출력 - 2


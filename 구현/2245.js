let input = require('fs').readFileSync('question.txt').toString();

let empty='';
let result='*'

for(let i=1;i<Number(input);i++){
    empty+='  ';
}

for(let i=0;i<Number(input);i++){
    console.log(result+empty+result);
    result+='*';
    empty=empty.slice(2);
}

result=result.slice(1);

for(let i=0;i<Number(input);i++){
    result=result.slice(1);
    empty+='  ';
    console.log(result+empty+result);
}
let input = require('fs').readFileSync('question.txt').toString();

let result='*';
let empty='';

for(let i=1;i<Number(input);i++){
    result+='**'; //첫줄 *
}
for(let i=0;i<Number(input)*2-1;i++){
    if(i<Number(input)-1){
        console.log(empty+result);
        empty+=' '; //빈 공간 1개씩 늘리기
        result=result.slice(2); //* 2개씩 줄이기
    } else if(i==Number(input)-1){
        console.log(empty+result);
    } else{
        result+='**'; //빈 공간 1개씩 늘리기
        empty=empty.slice(1); //빈 공간 1개씩 줄이기
        console.log(empty+result);
    }
}
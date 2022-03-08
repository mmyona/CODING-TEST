let Minput = require('fs').readFileSync('question.txt').toString().split('-');

let result=0;
let num=Minput.length;

function Psum(arr){ //'+'를 포함한 식의 합을 리턴해주는 함수
    let Pinput=[];
    let sum=0;
    Pinput=arr.toString().split('+');
    for(let num of Pinput){
        sum+=Number(num);
    }
    return sum;
}

if(num===1){ //'-'가 아예 없는 경우
    result=Psum(Minput);
} else{ //'-'를 포함하는 경우
    result=Psum(Minput[0]);
    for(let i=1;i<num;i++){  
        result-=Psum(Minput[i]);
    }
}
console.log(result);

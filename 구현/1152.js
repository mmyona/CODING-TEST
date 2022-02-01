var input = require('fs').readFileSync('question.txt').toString();

var arr = input.split(' ');

if(arr[0]===''){ //빈 문자열일 경우
    console.log(0);
}else{
    console.log(arr.length);
}

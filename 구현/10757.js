let input = require('fs').readFileSync('question.txt').toString().split(' ');

console.log((BigInt(input[0])+BigInt(input[1])).toString());
//BigInt 사용하면 마지막에 n이 붙어서 나오기 때문에
//toString() 써서 출력해줘야 함
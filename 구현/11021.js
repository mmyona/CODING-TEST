let input = require('fs').readFileSync('question.txt').toString().split('\n');

let n=Number(input[0]); //테스트 케이스 개수

for(let i=0;i<n;i++){
    let arr = input[i+1].split(' ').map(x => Number(x));
    console.log(`Case #${i+1}: ${arr[0]+arr[1]}`);
}

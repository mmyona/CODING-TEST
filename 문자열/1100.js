let input = require('fs').readFileSync('question.txt').toString().split('\n');
let sum=0;

for(let i=0;i<8;i++){
    let test=input[i];
    if(i%2===0){
        for(let j=0;j<8;j+=2){
            if(test[j]==='F') sum++;
        }
    } else{
        for(let j=1;j<8;j+=2){
            if(test[j]==='F') sum++;
        }
    }
}
console.log(sum);
let input = require('fs').readFileSync('question.txt').toString();

/*let length=input.length;
let result=[]; 
let i=0;
let left=''; //남은 글자들(10개 미만)

for(j=0;j+10<=length;j+=10){ //남은 글자 개수가 10개 미만이면 for문을 멈춘다.
    result[i]=input.substr(j,10);
    i++;
    left=input.substr(j+10);
    console.log(left);
}

for(let k=0;k<i;k++){
    console.log(result[k]);
}
if(left.length<10){
    console.log(left); 
}*/

while(input.length) {
    console.log(input.slice(0, 10));
    input = input.slice(10);
}
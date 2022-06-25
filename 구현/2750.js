let input = require('fs').readFileSync('question.txt').toString().split('\n');
let arr=[];


for(let i=0;i<Number(input[0]);i++){
    arr[i]=Number(input[i+1]);
}

arr.sort(function(a,b){ //오름차순 정렬
    return a-b;
});

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

var input = require('fs').readFileSync('question.txt').toString();

var result='';

for(let i=97;i<=122;i++){
    var target=String.fromCharCode(i);
    if(input.indexOf(target)!==-1){ //input에 해당 알파벳이 포함되어 있으면
        result+=String(input.search(target));
    } else{
        result+='-1';
    }
    result+=' ';
}
console.log(result);
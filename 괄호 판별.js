function check(arr) {
  while (arr.length > 0) {
    if (arr[0] === "(") {
      var idx = arr.indexOf(")");
      if ((idx - 1) % 2 === 0) {
        arr.splice(0, 1);
        arr.splice(idx - 1, 1);
      } else return false;
    } else if (arr[0] === "{") {
      var idx = arr.indexOf("}");
      if ((idx - 1) % 2 === 0) {
        arr.splice(0, 1);
        arr.splice(idx - 1, 1);
      } else return false;
    } else if (arr[0] === "[") {
      var idx = arr.indexOf("]");
      if ((idx - 1) % 2 === 0) {
        arr.splice(0, 1);
        arr.splice(idx - 1, 1);
      } else return false;
    } else return false;
  }
  if (arr.length === 0) return true;
}
//약간 오류가 있음

const dict = {
  "[": "]",
  "{": "}",
  "(": ")",
};

const check = (str) => {
  //올바른 문자열인지 체크해주는 함수
  let flag = true;

  let stack = [str[0]];
  for (let k = 1; k < str.length; k++) {
    if (Object.keys(dict).includes(str[k])) stack.push(str[k]);
    else {
      const tmp = stack.pop();
      if (dict[tmp] !== str[k]) {
        flag = false;
        break;
      }
    }
  }

  if (stack.length > 0) return false;
  return flag;
};
//정확한듯

const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closer = '}])';

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) { //객체 메소드 - 객체에 key가 포함되어 있는지 판별 가능
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
//코드가 조금 더 간결
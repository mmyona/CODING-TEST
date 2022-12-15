function fibonacci(n) {
  if (n === 1) return 1;
  else if (n === 2) return 2;
  return fibonacci(n - 2) + fibonacci(n - 1);
}
//이거는 1,1,2,3,5...

//런타임 개선 코드
//dp(dynamic programming) 이용
function fibonacci2(n) {
  //일단 초기 배열이 [0, 1]에서 시작하여 배열의 요소를 누적해 나가는 방법
  //그리고 이미 구해놓은 것은 배열의 요소로 저장해놓기..!!! 그래야 런타임이 초과되지 않는다

  let newArr = [0, 1]; //0번째 1번째 요소는 고정시켜두고

  let fib = (n) => {
    //함수 한개를 선언해주고
    if (newArr[n] !== undefined) {
      return newArr[n]; //이미 있는 건 그대로 리턴
    }
    newArr[n] = fib(n - 1) + fib(n - 2); //없는 건 새로 만들어서 저장!!!
    return newArr[n];
  };

  return fib(n);
}
//이거는 0(0번 인덱스),1,1,2,3,5...

const fibonacci3 = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n];
};
//이거는 1,1,2,3,5...

const fibonacci4 = (n) => {
  const arr = []; //피보나치 수열을 저장할 배열
  arr.push(0, 1, 2);
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }
  return arr[n];
};
// 0(0번 인덱스),1,1,2,3,5...

console.log(fibonacci2(7));

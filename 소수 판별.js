function check(num) {
  if (num <= 1) return false; //사실 이거는 없어도 됨... 왜나면 합이 1 이하일 수가 없기 때문
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

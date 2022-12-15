function queuePrinter(bufferSize, capacities, documents) {
  // TODO: 여기에 코드를 작성합니다.
  let buffer = new Array(bufferSize).fill(0);
  let time = 0;

  while (documents.length > 0) {
    let sum = 0;
    buffer.forEach((el) => (sum += el));
    sum -= buffer[0];

    if (sum + documents[0] < capacities) {
      buffer.push(documents[0]);
      documents.shift();
    } else {
      buffer.push(0);
    }
    buffer.shift();
    time++;
  }
  return time + 2;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8

// Fibonacci JS iterative solution
function fibs(integer) {
  let array = [0, 1];
  // n > 1, define edge cases
  if (integer === 0) return [];
  if (integer === 1) return array.slice(0, 1);
  // declare i depending on how many numbers are given, in this case i = 2
  for (let i = 2; i < integer; i++) {
    // fn = fn-1 + fn-2
    let first = array[i - 1];
    let second = array[i - 2];
    let next = first + second;
    array.push(next)
  }
  return array;
}

// Fibonacci JS recursive solution
function fibsRec(integer) {
  console.log('This was printed recursively');
  if (integer === 2) {
    return [0, 1]
  } else {
    let array = fibsRec(integer - 1)
    array.push(array[array.length - 1] + array[array.length - 2])
    return array
  }
}
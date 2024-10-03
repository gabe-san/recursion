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
  // in order to push a number to an array, you must arrive to the base case where two numbers are already known. in this case, once you reach integer 2, the base case declares the values of fibsRec(2), which can be used to solve: let array = fibsRec(2) = [0,1]
  // array.length = 2
  // array.push(array[2 - 1]) + array[2 - 2]) which is the same as fn = fn-1 + fn-2.
  // the function can know works its way up the stack recursively in order to give the series sequence
  if (integer === 2) {
    return [0, 1]
  } else {
    let array = fibsRec(integer - 1)
    array.push(array[array.length - 1] + array[array.length - 2])
    return array
  }
}
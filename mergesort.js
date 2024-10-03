// concatenate two sorted arrays
function merge(newLeftArray, newRightArray) {
  // declare array to return at the end as well as index where to push sorted values
  let sortedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  // as long as the array length of either two non sorted arrays is > 0, keep sorting
  while (leftArrayIndex < newLeftArray.length && rightArrayIndex < newRightArray.length) {
    // compare values at current index of each array, moving only forward because you assume the base case is sorted
    if (newLeftArray[leftArrayIndex] < newRightArray[rightArrayIndex]) {
      sortedArray.push(newLeftArray[leftArrayIndex])
      // move on to next value of left array
      leftArrayIndex++
    } else {
      sortedArray.push(newRightArray[rightArrayIndex])
      // move on to next value of right array
      rightArrayIndex++
    }
  }
  // case in which index is greater than length, just concat remaining values from each array to sorted array at the SPECIFIC index. In the base case, the single element array is automatically pushed and further loops will follow while condition
  return sortedArray.concat(newLeftArray.slice(leftArrayIndex)).concat(newRightArray.slice(rightArrayIndex))
}

// mergeSort recursive
function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }
  let mid = Math.floor(array.length / 2);
  let newLeftArray = array.slice(0, mid);
  let newRightArray = array.slice(mid);
  return merge(mergeSort(newLeftArray), mergeSort(newRightArray));
}

// Why not use .concat and .sort instead?
/*
.concat() might be okay to use if you implement sorting within the mergeSort function; however to keep code readable and scalable, it is recommended to split the responsibility of the function.

.sort() has time complexity of O(nlogn) and space complexity is more efficient than mergesort due to Timsort.
In very large databases, .sort() can degrade to (On^2) so if you can afford the space, mergesort should be used for large databases.
Mergesort: ideal for linked lists
.sort(): general use/smaller database

*/

// Visualized: https://tinyurl.com/894yj49p
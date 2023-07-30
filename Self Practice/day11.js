// let array = [1, 2, 3, 44, 55];
// console.log(array[array.length - 1]);
// function array(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }
// console.log(array([1, 3, 7, 6, 9, 31]));
//-------------------------find max-------
// function findMax(array) {
//   let max = array[0];
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([9, 3, 4, 11, 7, 8, 12]));
//-----------------------------check sorted-----
// function checkArray(array) {
//   let result = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[i + 1]) {
//       result = true;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }
// console.log(checkArray([20, 3, 15, 6, 7, 11, 0]));
//------------------------remove last element---------------
// function removeLast(array) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (length - 1 === i) {
//       array.splice(i);
//     }
//   }
//   return array;
// }
// console.log(removeLast([2, 4, 5, 2, 7, 7, 8, 0]));
//-----------------------product of an array elements----------
// function findProdut(array) {
//   let product = 1;
//   for (let i = 0; i < array.length; i++) {
//     product = product * array[i];
//   }
//   return product;
// }

// console.log(findProdut([2, 1, 3, 4, 2, 5, 4]));
//----------------------------find index of element-------------
// function checkElement(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (b == a[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(checkElement([1, 2, 3, 10, 5], 4));
//---------------------------average of numbers-------------
// function findAverage(array) {
//   let length = array.length;
//   let average = 0;
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum += i;
//   }
//   //   console.log(sum);
//   average = sum / length;
//   return average;
// }
// console.log(findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//------------------------UNDONE--------------------
// function getSum(array) {
//   let sum =0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = array[i]; j < array[i].length; j++) {
//       sum.
//     }
//   }
//   return sum;
// }
// console.log(getSum([[1, 2][(2, 3)], [4, 3], [5, 4], [8, 7], [5, 1]]));

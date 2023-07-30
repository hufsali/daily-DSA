// function getSum(number) {
//   let length = String(number).split("").length;
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum = sum + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }
// console.log(getSum(456783));
//-------------------------------------------------
// function getProduct(number) {
//   let product = 1;
//   for (let i = 1; i <= number; i++) {
//     product = product * i;
//   }
//   return product;
// }
// console.log(getProduct(6));
//-------------------------------------------------
// function FibonacciSequence(inputLength) {
//   let a = 0;
//   let b = 1;
//   let outputArray = [];
//   for (let i = 0; i <= inputLength; i++) {
//     outputArray.push(a);
//     let temp = a;
//     a = b;
//     b = temp + b;
//   }
//   return outputArray;
// }
// console.log(FibonacciSequence(12));
//--------------------------------------------------
// function checkFibonacci(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (i + 2 < array.length) {
//       if (array[i] + array[i + 1] !== array[i + 2]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(checkFibonacci([0, 1, 1, 2, 3]));

// // first:
// // second:
// // third:
// // first:
// // first:
// console.log(checkFibonacci([1, 1, 2, 3, 5]));
// console.log(checkFibonacci([2, 3, 5, 8, 13]));
// console.log(checkFibonacci([0, 1, 1, 2, 4]));
// console.log(checkFibonacci([1, 2, 3, 5, 8, 13, 21]));
// console.log(checkFibonacci([1, 1, 2, 4, 7]));
// console.log(checkFibonacci([2, 3, 5, 7, 12]));
// console.log(checkFibonacci([0, 1, 1, 3, 4, 7, 11]));
// console.log(checkFibonacci([1, 2, 4, 7, 12, 20]));
// console.log(checkFibonacci([1, 1, 2, 3, 6, 9, 15]));
//-------------------------------------------------

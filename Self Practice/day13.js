// function checkString(string) {
//   newArray = [];
//   let length = string.length;
//   for (let i = 0; i < length; i++) {
//     if (string[i] == 0) {
//       newArray.push(false);
//     } else if (string[i] == 1) {
//       newArray.push(true);
//     }
//   }
//   return newArray;
// }
// console.log(checkString("010101"));
//----------------------------------
// function joinArrays(array) {
//   let newArray = [];
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     newArray = array.flat();
//   }
//   return newArray;
// }
// let nestedArr = [
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3, [4, 5, 6, [7, 8, 9]]],
// ];
// console.log(joinArrays(nestedArr));
// // [(1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9)];
//----------------------------------
// function nestedArray(arr) {
//   let newArr = [];

//   function flatHelper(array) {
//     for (i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         flatHelper(array[i]);
//       } else {
//         newArr.push(array[i]);
//       }
//     }
//   }
//   flatHelper(arr);
//   return newArr;
// }

// console.log(nestedArray([1, 2, 3, [1, 2], [1, 2, 3, [3, 4, 2]]]));
//----------------------------CONFUSION-----------------------
// function nestgedArray(arr) {
//   let newArr = [];

//   function flatArray(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         // console.log(Array.isArray(newArr));
//         flatArray(array[i]);
//       } else {
//         newArr.push(array[i]);
//       }
//     }
//   }

//   flatArray(arr);
//   return newArr;
// }

// console.log(nestgedArray([1, 2, 3, 4, [1, 2, 3, [8, 7, 9, [4, 3, 5]]]]));
//----------------------------------

// function reverseArray(array) {
//   let newArary = [];
//   let length = array.length;
//   for (let i = length - 1; i >= 0; i--) {
//     newArary.push(array[i]);
//   }
//   return newArary;
// }
// console.log(reverseArray([1, 2, 3, 4]));
//-----------------------------------
// function findEven(array) {
//   let sum = 0;
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] % 2 == 0) {
//         sum += array[i][j];
//       }
//     }
//   }
//   return sum;
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(findEven(arr));
//------------------------------------
// function changeCase(string) {
//   let newString = "";
//   let length = string.length;

//   for (let i = 0; i < length; i++) {
//     if (string[i] == string[i].toUpperCase()) {
//       newString += string[i].toLowerCase();
//     } else if (string[i] == string[i].toLowerCase()) {
//       newString += string[i].toUpperCase();
//     }
//   }
//   return newString;
// }

// let str = "heLLo hoW ArE";
// console.log(changeCase(str));
//-----------------------------------
// function getIndex(num, target) {
//   let newArray = [];
//   let length = num.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (num[i] + num[j] == target) {
//         newArray.push(i, j);
//       }
//     }
//   }
//   return newArray;
// }
// console.log(getIndex([3, 3], 6));
//-----------------------------------
// function nestedArray(array) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (Array.isArray(array[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(nestedArray([1, 2, 3, [1, 2, 3]]));
// console.log(nestedArray([1, 2, 3]));
//-----------------------------------
// function checkCount(array) {
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (array[i] > 0) {
//       positiveCount += array[i];
//     } else if (array[i] < 0) {
//       negativeCount++;
//     }
//   }
//   return [positiveCount, negativeCount];
// }
// console.log(
//   checkCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// );
//----------------------UNDONE--------------
// function getSum(array) {
//   let max = [];
//   //   let sum = 0;
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (array[j] > array[i]) {
//         max.push(array[j]);
//       }
//     }
//   }
//   //   return sum;
// }

// getSum([10, 1, 3, 4, 5, 6, 7, 9]);
//------------------------find max------------------
// function findMax(array) {
//   let max = [0];
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([10, 1, 30, 4, 5, 60, 7, 9]));

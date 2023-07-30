// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//--------------------------------------------------------
// function getSeries(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// }

// getSeries(10);
//--------------------------------------------------
// function getTable(integer) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${integer}x${i}=${integer * i}`);
//     document.write("<br>");
//   }
// }
// getTable(7);
// getTable(9);
// getTable(2);
//-----------------------------------------------
// function sumUpSeries(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpSeries(100));
//--------------------------------------------
// function printEven(integer) {
//   for (let i = 1; i <= integer; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// printEven(20);
//----------------------------------------------------------
// function getFactorial(integer) {
//   let factorial = 1;
//   for (let i = 1; i <= integer; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }
// console.log(getFactorial(4));
// console.log(getFactorial(10));
// console.log(getFactorial(20));
// console.log(getFactorial(5));

//-------------------------------------------------------
//-------------------intermediat-------------------------
//-------------------------------------------------------

// function getLargestNumber(array) {
//   let largestNumber = -Infinity; //[0]
//   for (let i = 0; i <= array.length; i++) {
//     if (largestNumber < array[i]) {
//       largestNumber = array[i];
//     }
//   }
//   return largestNumber;
// }
// console.log(getLargestNumber([1, 3, 8, 9, 4, 7]));
//--------------------------------wrong-----------------------
// function getLargestNumber(array) {
//   let largestNumber = [];
//   for (let i = 0; i <= array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] > array[i]) {
//         largestNumber = array[i];
//       }
//     }
//   }
//   return largestNumber;
// }
// console.log(getLargestNumber([1, 3, 8, 9, 4, 7]));
//--------------------------------------------------------
// function countVowels(string) {
//   let vowels = "aeiou";
//   let numOfVOwels = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       numOfVOwels++;
//     }
//   }
//   return numOfVOwels;
// }
// console.log(countVowels("abtuinjeolisco"));
//--------------------------------------------------------

// second way

// function count(str) {
//   var set = new Set("aeuio");
//   let count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (set.has(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(count("helloWorlks"));
//--------------------------------------------------------
// function printPrimeNumbers(number) {
//   let primeNumbers = [];
//   for (let a = 2; a <= 100; a++) {
//     var isIt = 0;
//     for (let i = 1; i <= a; i++) {
//       if (a % i == 0) {
//         isIt++;
//       }
//     }

//     if (isIt == 2) {
//       primeNumbers.push(a);
//     }

//     // n = 5  // 1, 2, 3, 4, 5 --> count = 1-> 1 => 1=> 1> count = 2
//   }
//   return primeNumbers;
// }
// console.log(printPrimeNumbers(100));
//--------------------------------------------------------
// function reverse(arr) {
//   let newArray = [];
//   let length = arr.length;
//   for (i = length; i >= 0; i--) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// console.log(reverse([1, 2, 3, 4]));
//---------------------------------------------------
// function reverse(arr) {
//   for (var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     var last = arr.length - i - 1;
//     arr[i] = arr[last];
//     arr[last] = temp;
//   }
//   return arr;

//   arr.reverse();
// }

// // [ 1, 2, ||  3, 4]
// // [ 4, 2, ||  3, 1]
// // [ ]

// console.log(reverse([1, 2, 3, 4]));
//-----------------------------------------------------

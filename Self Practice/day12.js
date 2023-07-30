// function arrayValuesTypes(array) {
//   let newArray = [];
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     // console.log(typeof array[i]);
//     let type = typeof array[i];
//     newArray.push(type);
//   }
//   return newArray;
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));
// //➞ ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(
//   arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// );
// //➞ ["number", "string", "string", "object", "object", "boolean", "number"]
//---------------------------------check Special Array----------------
// function SpecialArray(array) {
//   let result = false;
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (i % 2 == 0 && array[i] % 2 == 0) {
//       result = true;
//     } else if (i % 2 != 0 && array[i] % 2 != 0) {
//       result = true;
//     }
//     return result;
//   }
// }

// console.log(SpecialArray([2, 1, 4, 3, 6, 7, 8, 9, 10]));
// console.log(SpecialArray([2, 12, 4, 3, 6, 7, 8, 9, 10]));
// console.log(SpecialArray([1, 1, 4, 3, 5, 7, 8, 9, 10]));
// //  true;
// // array[i] % 2 == 0;
//-------------------------------------
// function getSum(array) {
//   let sum = 0;
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (sum != 2) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }
// console.log(getSum([1, 1, 2, 3])); //5
//------------------------------
// function countLetters(str) {
//   let counter = 0;
//   let length = str.length;
//   for (let i = 0; i < length; i++) {
//     counter++;
//   }
//   return counter;
// }
// console.log(countLetters("This Is sTr"));
//---------------------------
// function countUppercase(str) {
//   let length = str.length;
//   let counter = 0;
//   for (let i = 0; i < length; i++) {
//     if (str[i] == str[i].toUpperCase() && str[i] != " ") {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(countUppercase("This Is sTr"));
//----------------------------
// function returnBoom(array) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (array[i] == 7) {
//       return "Boom";
//     }
//   }
//   return "there is no 7 ";
// }
// console.log(returnBoom([2, 3, 7, 5, 67, 9, 9]));
// console.log(returnBoom([2, 3, 5, 67, 9, 9]));
//----------------------------
// function checkWord(string) {
//   let length = string.length;
//   let reverse = "";
//   for (let j = length - 1; j >= 0; j--) {
//     reverse += string[j];
//   }
//   return reverse === string;
// }
// console.log(checkWord("madam"));
//-----------------------------
// function reverseWords(string) {
//   let split = string.split(" ");
//   let length = split.length;
//   let reverse = [];
//   for (let i = length - 1; i >= 0; i--) {
//     reverse.push(split[i]);
//   }
//   //   console.log(split);
//   return reverse;
// }
// console.log(reverseWords("sky is blue"));
//-----------------------------
// function checkLength(int) {
//   let str = int.toString();
//   let length = str.length;
//   return length;
// }
// console.log(checkLength(555));
// -----------------------------------

// function howManyTimes(arr) {
//   let aEl = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === "a") {
//       aEl.push(arr[i]);
//     }
//   }
//   return aEl.length;
// }
// console.log(howManyTimes(["a", "w", "e", "a", "r", "a", "a", "l", "a"]));
//----------------------1st method-----------------------------
// function howManyTimes(arr) {
//   let aEl = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === "a") {
//       aEl++;
//     }
//   }
//   return aEl;
// }
// console.log(howManyTimes(["a", "w", "e", "a", "r", "a", "a", "l", "a"]));
//---------------------------------Find repeated elements--------------------------
// function findRepeatedEl(arr) {
//   let elements = [];
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] == arr[i] && !elements.includes(arr[i])) {
//         elements.push(arr[j]);
//         // break;
//       }
//     }
//   }

//   return elements;
// }
// console.log(
//   findRepeatedEl(["a", "w", "w", "e", "w", "a", "r", "a", "a", "l", "a"])
// );
//-------------------------------right-------------------------------
// function countChar(str) {
//   const seen = new Set();
//   const duplicate = new Set();
//   for (let i = 0; i < str.length; i++) {
//     if (seen.has(str[i])) {
//       duplicate.add(str[i]);
//     }
//     seen.add(str[i]);
//   }
//   return Array.from(duplicate);
// }

// console.log(countChar(["a", "e", "i", "a", "e"]));
//----------------------------------------------------------------
// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }
// const array = [0, 2, 1, 4, 5, 3, 6];
// sortArray(array);
// console.log(array);

//-----------------------------------------------------------
// function deleteDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] == arr[i]) {
//         arr.splice(j, 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(deleteDuplicate([2, 3, 4, 5, 6, 7, 7, 3, 2]));
//-----------------------------------------------------------

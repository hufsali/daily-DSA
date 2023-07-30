// function indexAndValue(array) {
//     const iv = array.entries();
//     const
// }
//.......................wrong................
// function addUp(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(addUp(50));
// sum += i
// sum=sum+i
//-----------------------------------
// function matchHouse(step) {
//   const count = 1 + 5 * step;
//   return count;
// }
// console.log(matchHouse(4));
//---------------------------------------------
// function minMax(array) {
//   const findMaxNumber = Math.max(...array);
//   const findMinNumber = Math.min(...array);
//   return [findMinNumber, findMaxNumber];
// }
// console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8]));
//---------------------------------------------

// function findMax(array) {
//   let max = array[0];
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (max < array[i]) {
//       //10<2
//       max = array[i];
//     }
//     if (min > array[i]) {
//       min = array[i];
//     }
//   }
//   return [min, max];
// }

// console.log(findMax([10, 2, 3, 4]));
//--------------------------------------------
// function canNest(arr1, arr2) {
//   const arr1Min = Math.min(...arr1);
//   const arr2Min = Math.min(...arr2);
//   const arr1Max = Math.max(...arr1);
//   const arr2Max = Math.max(...arr2);
//   return arr1Min > arr2Min && arr1Max < arr2Max;
// }
// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(canNest([3, 1], [4, 0]));

// console.log(canNest([9, 9, 8], [8, 9]));

// console.log(canNest([1, 2, 3, 4], [2, 3]));
//---------------------------------------------
// function doFlat(array1, array2) {
//   const arr1 = array1.flat(Infinity);
//   const arr2 = array2.flat(Infinity);
//   const joinArrs = [...arr1, ...arr2];
//   return joinArrs;
// }
// console.log(doFlat([1, 2, 3, [[[[[6, 7, 8, 9, 0]]]]]], [11, 12, 13]));
//-----------------------------------------------
// function getMap(array) {
//   return array.map((number) => number * 6);
// }
// console.log(getMap([2, 3, 4, 5, 6]));
//-------------------------------------------
// function getFlatMap(array) {
//   return array.flatMap((number) => number * 6);
// }
// console.log(getFlatMap([1, 2, 3, 3, [4, 5, 6, 7]]));
//---------------------------------------------
// function passEach(array) {
//   return array.forEach((number) => console.log(number * 4));
// }
// passEach([2, 3, 4, 5, 6, 7, 89, 9]);
//------------------------------------------------
// function putInArray(array) {
//   const manipulate = Array.from(array, (number) => number * 3);
//   return manipulate;
// }
// console.log(putInArray([1, 2, 3, 4, 6, 7, 8, 9]));
//-------------------------------------------------

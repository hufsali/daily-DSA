// index-----------------
// function addition(num1, num2) {
//   return num1 + num2;
// }
// console.log(addition(5, 4));
// --------------------------
// function addition(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// console.log(addition(5, 4));
//--------------------------------------

// function convertHours(integer) {
//   const seconds = 60*integer ;
//   return seconds;
// }
// console.log(convertHours(5));
//----------------------------------------
// function getNextNumber(integer) {
//   const nextnum = 1 + integer;
//   return nextnum;
// }
// console.log(getNextNumber(0));
// console.log(getNextNumber(4));
// console.log(getNextNumber(7));
// console.log(getNextNumber(9));
//------------------------------------------
// function triArea(base, height) {
//   const area = 0.5 * base * height;
//   return area;
// }
// console.log(triArea(4, 7));
//------------------------------------------

// function calcAge(years) {
//   const ageInDays =   365*years;
//   return ageInDays;
// }
// console.log(calcAge(3));
// console.log(calcAge(1));
// console.log(calcAge(9));
// console.log(calcAge(2));
//-------------------------------------
// function cubes(number) {
//   const findCube = 3 ** number;// (long method)Math.pow(3 ,number)
//   return findCube;
// }
// console.log(cubes(6));
// console.log(cubes(2));
// console.log(cubes(3));
// console.log(cubes(4));
//--------------------------------to find item by index-------
// function returnthing(intValue) {
//   const thing = intValue.at(1);
//   return thing;
// }
// console.log(returnthing([1, 2, 3, 4]));

// function getFirstValue(array) {
//   //   const getvalue = array[0];
//   //   const getvalue = array.shift();
//   //const getvalue = array.slice(0, 1);start and stop donu arguments dena hyn

//     return getvalue;
// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([10, 2, 3]));
// console.log(getFirstValue([17, 2, 3]));
// console.log(getFirstValue([11, 2, 3]));
//----------------------------------------
// function circuitPower(current, voltage) {
//   const power = current * voltage;
//   return power;
// }
// console.log(circuitPower(2, 8));
// console.log(circuitPower(20, 18));
// console.log(circuitPower(21, 88));
//---------------------------------------
// function howManySeconds(hours) {
//   const minutes = 60*hours ;
//   const seconds = 60*minutes;
//   return seconds;
// }
// console.log(howManySeconds(10));
// console.log(howManySeconds(2));
// console.log(howManySeconds(3));
// console.log(howManySeconds(24));
//--------------------------------------------
// function nextEdge(side1, side2) {
//   const edge = side1 + side2 - 1;
//   return edge;
// }
// console.log(nextEdge(2, 7));
// console.log(nextEdge(8, 10));
// console.log(nextEdge(5, 7));
//-----------------------------------------------
// function remainder(num1, num2) {
//   const rem = num1 % num2;
//   return rem;
// }
// console.log(remainder(1, 3));
// console.log(remainder(3, 4));
// console.log(remainder(-9, 45));
//------------------------------------------
// function findPerimeter(length, width) {
//   const peri = 2 * (length + width);
//   return peri;
// }
// console.log(findPerimeter(6, 7));
//------------------------------------------

// function giveMeSomething(sth) {
//   const something = `something ${sth}`; //"something" + " " + sth;
//   return something;
// }
// console.log(giveMeSomething("is better than nothing"));
//--------------------------------------------
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// //const array3 = array1.concat(array2); method 1
// // const newArray = [...array1, ...array2]; spread operator
// console.log(newArray);
//------------------------------------

// function isBelowThreshold(currentValue) {
//   const below = currentValue.every((element) => element < 40);
//   return below;
// }
// console.log(isBelowThreshold([1, 2, 3, 4, 5, 6]));

//--------------------------------------------
// function squared(number) {
//   const square = number * number;
//   return square;
// }
// console.log(squared(500));
// console.log(squared(50));
// console.log(squared(15));
//-------------------------------------------
// function lessThanOrEqualToZero(argument) {
//   if (argument <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(lessThanOrEqualToZero(6));
// console.log(lessThanOrEqualToZero(-1));
// console.log(lessThanOrEqualToZero(0));
//-------------------------------------------
// function fillArray(array) {
//     const array1 = array.fill(0, 2, 4);
//     //(0,1)..........(6) fill full array with 6
//   return array1;
// }
// console.log(fillArray([1, 2, 3, 4]));
// --------------------------------------------------------------------
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const newWords = words.slice();
// console.log(words);
// console.log(newWords);
//-------------------------------------------------------
// function check(array1) {
//   const found = array1.find((element) => element > 10);
//   return found;
// }
// console.log(check([20, 30, 1, 4, 20]));
//-------------------------------------------------------
// function SumPolygon(n) {
//   const calculateAngle = 180 * (n - 2);
//   return calculateAngle;
// }
// console.log(SumPolygon(3));
// console.log(SumPolygon(4));
// console.log(SumPolygon(6));
//--------------------------------------------------------
// function points(pointers1, pointers2) {
//   const finalPoints = 2 * pointers1 + 3 * pointers2;
//   return finalPoints;
// }
// console.log(points(1, 1));
// console.log(points(7, 5));
// console.log(points(38, 8));
//--------------------------------------------------------
// function nameString(info) {
//   const result = "Edabit";
//   const concatIt = `${info}${result}`;
//   return concatIt;
// }
// console.log(nameString("Hufsa"));
//--------------------------------------------------------
// function lessThan100(number1, number2) {
//   const sum = number1 + number2;
//   if (sum < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(lessThan100(22, 15));
// console.log(lessThan100(83, 34));
// console.log(lessThan100(3, 77));
//--------------------------------------------------------
// function printArray(number) {
//   const newArray = [];
//   for (let i = 1; i <= number; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }
// console.log(printArray(2));
// console.log(printArray(3));
// console.log(printArray(4));
//---------------------------------------------------------
// let a = 100;
// let b = 200;
// [a, b] = [b, a];
// console.log(a, b);
//---------------------------------------------------------

//----------------------------

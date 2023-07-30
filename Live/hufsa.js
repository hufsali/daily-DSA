//     function isSameNum(num1 , num2){
//         return num1===num2;
//         // if(num1===num2){

//         // }else{
//         //     return false;
//         // }
//     };
//     console.log(isSameNum(2 , 3));
//     console.log(isSameNum(5 , 5));
//     console.log(isSameNum(5 , "5"))

//     // -------------------------------

// function footballPoints(wins , draws , losses){
//     return (wins*3)+draws
// }
// console.log(footballPoints(3 , 4 , 2));
// console.log(footballPoints(5, 0, 2));
// console.log(footballPoints(0, 0, 1));

// // --------------------------------

// function convert(hours , minutes){
//     return (hours*3600)+(minutes*60);
// }
// console.log(convert(1 , 3));
// console.log(convert(2, 0));
// console.log(convert(0, 0));

// // ----------------------------------

// function profitableGamble(prob , prize , pay){

//         return prob*prize>pay;

// }
// console.log(profitableGamble(0.2, 50, 9));

// console.log(profitableGamble(0.9, 1, 2));

// console.log(profitableGamble(0.9, 3, 2));

// // ----------------------------------------

// function boolToString(flag){
//     return String(flag);
// }
// console.log(boolToString(true));
// console.log(boolToString(true));

// // --------------------------

// function (min , fps){
//     return sec=min*60*fps;

// }

// // ---------------------------------------------

// function calculator(a){
// return eval(a);
// }
// calculator("23+4");

// ----------------------------------

/*function makesTen(a , b){
    if(a==10 ||b==10 || a+b==10){
        return true;
    }else{
        return false;
    }
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1 , 9));*/

//--------------------------------------

// function calculateFuel(distance) {
//     var fuel = distance * 10; // Calculate the fuel needed based on 10 times the distance

//     if (fuel < 100) {
//       return 100; // Return the minimum fuel requirement if calculated fuel is less than 100
//     } else {
//       return fuel; // Otherwise, return the calculated fuel
//     }
//   }

// //---------------------------------------

// function calculateFuel(distance) {
//     var fuel = distance * 10; // Calculate the required fuel
//     fuel = Math.max(fuel, 100); // Ensure the minimum fuel is 100
//     return fuel;
//   }

//---------------------------------------------

// function makePair(a , b){
// // return Array(a,b);
// // return [a , b];
// return new Array(a , b);
// }
// console.log(makePair(1 , 2));
// console.log(makePair(1 , 2));
// console.log(makePair(1 , 2));

//--------------------------------------------------

/*function comp(str1 , str2){
    
        return str1.length==str2.length;

}

console.log(comp("AB" , "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));*/

//--------------------------------------------------

/*function isEmpty(str) {
  return str == "";
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));*/

//--------------------------------------------

/*function divisibleByFive(num) {
  // var x = dbf / 5;
  return num % 5 == 0;
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));*/

//------------------------------------------------

/*function dividesEvenly(int1, int2) {
  return int1 % int2 == 0;
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));*/

//-----------------------------------------------

/*function area(height, width) {
  //   // var x = height * width;
  //   if (height <= 0 || width <= 0) {
  //     return -1;
  //   } else {
  //     return height * width;
  //   }
  const area = height * width;
  if (area <= 0) {
    return -1;
  }
  return area;
}
console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));*/

//-----------------------------------------------

/*function getVoteCount(display) {
  return display.upvotes - display.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));*/

//------------------------------------------------

/*function reverse(arr){
  return arr.reverse();
}
console.log(reverse([1, 2, 3, 4]));*/

//------------------------------------------------
/*
function get_missing_letters(givenLetters) {
  let allLetters = "abcdefghijklmnopqrstuvwxyz";
  // for (allLetters == 0, allLetters >= 0, allLetters ++);
}

console.log(get_missing_letters("zyxwvutsrq"));

console.log(get_missing_letters("abc"));

console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz"));*/

//------------------------------------------------------

// function reverse(arr) {
//   let length
//   for (i = arr.length; arr.length >= 0; i--) {

//   }
// }

// reverse([1, 2, 3, 4]);

//----------------------------------------------

/*function table(num) {
  for (i = 1; i <= 10; i++) {
    document.write(`${num} x ${i} =${num * i}`);
  }
 
}

table(2);
*/

//-------------------------------------------------

// function sevenBoom(arrayOfNumbers) {
//   for (let i = 0; i <= arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] == 7) {
//       return "Boom";
//     }
//   }
//   return "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));

//-------------------------------------------------

// function getLength(arrayElements) {
//   let x = [1, [2, 3, [4, 5]]];

//   let array = [];

//   while (x.length > 0) {
//     if (Array.isArray(x.at(-1))) {
//       const a = x.pop();
//       x = [...x, ...a];
//     } else {
//       array.push(x.pop());
//     }
//   }

//   array.reverse();

//   console.log({ x, array });
// }

// getLength([1, [2, 3]]);
// getLength([1, [2, [3, 4]]]);
// getLength([1, [2, [3, [4, [5, 6]]]]]);
// getLength([1, [2], 1, [2], 1]);

//-------------------------------------------------

// function add(num1, num2) {
//   return num1 + num2;
// }

// const sum = add(2, 4);

// console.log(sum);

//----------------------------------------------------

// function getBigNumber(a, b, c) {
//   // write your code here
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// const bigNumber1 = getBigNumber(1, 8, 5);
// console.log(bigNumber1); // 8

// const bigNumber2 = getBigNumber(1, -5, 0);
// console.log(bigNumber2); // 1

//----------------------------------------------------

// function getSquareRoot(number) {
//   return Math.sqrt(number);
// }
// console.log(getSquareRoot(5));
//-----------------------------------------------------
function getMissingNumbers(array) {
  let minimum = Math.min(...array);
  let maximum = Math.min(...array);
  let MissingNumbers = [];
  for (let i = minimum; i < maximum; i++) {
    if (i != array) {
      MissingNumbers.push(i);
    }
  }
  return MissingNumbers;
}
console.log(getMissingNumbers([2, 3, 4, 6, 8]));
console.log(getMissingNumbers([8, 10, 2]));

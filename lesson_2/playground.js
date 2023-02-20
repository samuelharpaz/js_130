'use strict';

// 4. countdown
// (function(num) {
//   for (let count = num; count >= 0; count--) {
//     console.log(count);
//   }
// })(7);

// 6.
// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// 7. countdown - recursion
// (function countdown(num) {
//   if (num < 0) return;

//   console.log(num);
//   countdown(num - 1);
// })(3);
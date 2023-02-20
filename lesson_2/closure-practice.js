// 5.
//  Data Structures
//  - numbers

//  Algorithm:
//  fn: multipleLister
//  - set 'max' to 100
//  - set`numMultiples` to Math.floor of (`max` / `num` (from closure))
//  - create loop from 1 (`idx`) to `numMultiples` inclusive
//    - log (idx * num) to console

// function makeMultipleLister(num) {
//   return function() {
//     const max = 99;
//     const numMultiples = Math.floor(max / num);
  
//     for (let idx = 1; idx <= numMultiples; idx++) {
//       console.log(idx * num);
//     }
//   }
// }

// let lister = makeMultipleLister(17);
// lister();

// 6.
// let total = 0;

// function add(num) {
//   return total += num;
// }

// function subtract(num) {
//   return total -= num;
// }

// console.log(add(1));       // 1
// console.log(add(42));      // 43
// console.log(subtract(39)); // 4
// console.log(add(6));       // 10

// 8.
// function later(fn, arg) {
//   return function() {
//     fn(arg);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// 9.
// function later2(fn, arg1) {
//   return function(arg2) {
//     return fn(arg1, arg2);
//   }
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10.
// "use strict";

// function bind(context, fn) {
//   return function() {
//     return fn.call(context);
//   }
// }

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }
// // // 1.
// // function foo(bar, qux, baz) {
// //   return {
// //     bar: bar,
// //     baz: baz,
// //     qux: qux
// //   };
// // }

// // function foo() {
// //   return {
// //     bar: function() {
// //       console.log("bar");
// //     },
// //     qux: function(arg1) {
// //       console.log("qux");
// //       console.log(arg1);
// //     },
// //     baz: function(arg1, arg2) {
// //       console.log("baz");
// //       console.log(arg1);
// //       console.log(arg2);
// //     },
// //   };
// // }

// // function foo(one, two, three) {
// //   return {
// //     bar: one,
// //     baz: two,
// //     qux: three,
// //   };
// // }

// // let obj = foo(1, 2, 3);
// // let baz = obj.baz;
// // let bar = obj.bar;
// // let qux = obj.qux;

// // function foo(arr) {
// //   let one = arr[0];
// //   let three = arr[2];
  
// //   return [
// //     three,
// //     5,
// //     one,
// //   ];
// // }

// // let array = [1, 2, 3];
// // let result = foo(array);
// // let bar = result[0];
// // let qux = result[1];
// // let baz = result[2];

// // function product(num1, num2, num3) {
// //   return num1 * num2 * num3;
// // }

// // let array = [2, 3, 5];
// // let result = product.apply(null, array);

// // function product() {
// //   const argsArr = Array.from(arguments);
// //   return argsArr.reduce((total, number) => total * number);
// // }

// // let result = product(2, 3, 4, 5);
// // console.log(result);

// // const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// // console.log(foo);         // 42
// // console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// // const { first, second, ...rest } = obj;
// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: { a: 'a', b: 'b' }
// }

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// 10.
function fn(first, arg2, arg3, arg4, last) {
  return {
    first,
    last,
    middle: [arg2, arg3, arg4].sort()
  }
}

const strings = ['zebra', 'carrot', 'bear', 'truck', 'apple'];

const { first, last, middle } = fn(...strings);
console.log(first, last, middle);

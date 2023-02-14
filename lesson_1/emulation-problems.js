// 1. filter

function filter(array, callback) {
  const result = [];

  for (let idx = 0; idx < array.length; idx++) {
    const currentEl = array[idx];

    if (callback(currentEl, idx, array)) {
      result.push(currentEl);
    }
  }

  return result;
};

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// 2. map
const map = function(array, callback) {
  const mapped = [];

  for (let idx = 0; idx < array.length; idx++) {
    const el = array[idx];
    mapped.push(callback(el, idx, array));
  }

  return mapped;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// 3. reduce

function reduce(array, callback, initialVal) {
  const arrCopy = [...array];

  if (!initialVal) {
    initialVal = arrCopy.shift();
  }

  let total = initialVal;

  for (let idx = 0; idx < arrCopy.length; idx += 1) {
    const el = arrCopy[idx];
    total = callback(total, el);
  }

  return total;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number)); // => undefined

// let stooges = ["Mo", "Larry", "Curly"];

// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// => ["Curly", "Larry", "Mo"]

// filter using reduce

// function filter2(arr, cb) {
//   return arr.reduce((filteredArray, currEl) => {
//     if (cb(currEl)) {
//       filteredArray.push(currEl);
//     }

//     return filteredArray;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter2(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter2(numbers, number => number < 0)); // => []
// console.log(filter2(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter2(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// map function using reduce
function map2(arr, cb) {
  return arr.reduce((transformedArr, curr) => {
    transformedArr.push(cb(curr));
    return transformedArr;
  }, []);
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function fizzBuzzReducer(acc, element) {
  if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
  if (element % 5 === 0) return `${acc}Fizz\n`;
  if (element % 3 === 0) return `${acc}Buzz\n`;
  return `${acc}${element}\n`;
}

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15
];

console.log(nums.reduce(fizzBuzzReducer, ''));
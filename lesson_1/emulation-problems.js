// filter
function filter(array, fn, thisArg) {
  const filtered = [];

  for (let idx = 0; idx < array.length; idx++) {
    const el = array[idx];
    if (fn.call(thisArg, el, idx, array)) filtered.push(el);
  }

  return filtered;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// map
const map = function(arr, fn, thisArg) {
  const transformed = [];

  for (let idx = 0; idx < arr.length; idx++) {
    const el = arr[idx];
    transformed.push(fn.call(thisArg, el, idx, arr));
  }

  return transformed;
};

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// reduce
function reduce(arr, fn, initialVal) {
  let accumulator = initialVal;
  let index = 0;

  if (typeof accumulator === 'undefined') {
    accumulator = arr[0];
    index = 1;
  }

  while (index < arr.length) {
    accumulator = fn(accumulator, arr[index], index, arr);
    index += 1;
  }

  return accumulator
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// => ["Curly", "Larry", "Mo"]

// filter based on reduce
function filter(arr, fn, thisArg) {
  return arr.reduce((filteredArr, value, idx, array) => {
    if (fn.call(thisArg, value, idx, array)) {
      filteredArr.push(value);
    }
    return filteredArr;
  }, []);
}

// map based on reduce
function map2(arr, fn, thisArg) {
  return arr.reduce((transformedArr, el, idx, array) => {
    transformedArr.push(fn.call(thisArg, el, idx, array));
    return transformedArr;
  }, []);
}

// const nums = [250, 300, 350, 400, 450];

// console.log(map2(nums, val => val + 50));

// includes
Array.prototype.myIncludes = function(query, fromIdx = 0) {
  if (!Number.isInteger(fromIdx)) fromIdx = 0;
  if (fromIdx >= this.length) return false;
  if (fromIdx < -this.length) fromIdx = 0;
  if (fromIdx < 0) {
    fromIdx = this.length + fromIdx;
  }
  
  for (let count = fromIdx; count < this.length; count++) {
    const el = this[count];
    if (query === el) return true;
  }

  return false;
};

const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('dog', 5));
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx++) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

const arr = [1, 2, 3, 4];

forEach(arr, (el, idx, arr) => {
  console.log(`After ${el} comes ${arr[idx + 1]}`);
});
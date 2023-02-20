'use strict';

function makeList() {
  let items = [];

  return {
    add(newItem) {
      if (!(items.includes(newItem))) {
        items.push(newItem);
        console.log(`${newItem} added!`);
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(item + " removed!");
    },

    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

const list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
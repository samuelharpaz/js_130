const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns the first todo in list', () => {
    expect(list.first()).toEqual(todo1);
  })

  test('calling last returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns the first todo item', () => {
    const removed = list.shift();

    expect(list.toArray()).toEqual([todo2, todo3]);
    expect(removed).toEqual(todo1);
  })

  test('calling pop removes and returns the last todo item', () => {
    const todo = list.pop();

    expect(list.toArray()).toEqual([todo1, todo2]);
    expect(todo).toEqual(todo3);
  })

  test('isDone() returns false if not all todos are done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('add() raises a TypeError if you attempt to add an object that is not a Todo object', () => {
    expect(() => list.add(23)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
    expect(() => list.add(new TodoList())).toThrow(TypeError);
  });

  test('itemAt() returns item at given index', () => {
    expect(list.itemAt(1)).toEqual(todo2);
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(2.5)).toThrow(ReferenceError);
  });

  test('markDoneAt marks the item at given index done', () => {
    expect(() => list.markDoneAt(34)).toThrow(ReferenceError);
    
    list.markDoneAt(1);
    expect(todo1.isDone()).toEqual(false);
    expect(todo2.isDone()).toEqual(true);
    expect(todo3.isDone()).toEqual(false);
  });

  test('markUndoneAt marks the item at given index undone', () => {
    expect(() => list.markUndoneAt(34)).toThrow(ReferenceError);
    
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markDoneAt(2);


    list.markUndoneAt(1);

    expect(todo1.isDone()).toEqual(true);
    expect(todo2.isDone()).toEqual(false);
    expect(todo3.isDone()).toEqual(true);
  });

  test('markAllDone marks all todo items done', () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes item at given index and returns it in an array', () => {
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
    
    const removedTodo = list.removeAt(1);
    expect(removedTodo).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);    
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns different line for done todo', () => {
    list.markDoneAt(2);
    
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for all done todos', () => {
    list.markAllDone();
    
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over every todo item in list', () => {
    const result = [];
    list.forEach(todo => result.push(todo));

    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns a new TodoList object filtered based on callback', () => {
    const filtered = list.filter(todo => todo.title.length > 8);
    console.log(filtered);

    expect(filtered instanceof TodoList).toBe(true);
    expect(filtered.toArray()).toEqual([todo2, todo3]);
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })
});
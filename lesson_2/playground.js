function foo() {
  console.log(a); // 1

  if (false) {
    var a = 1;
  }

}

foo();
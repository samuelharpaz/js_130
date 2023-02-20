## 1. Var
- mostly in older code, but still possible to come across in newer code, to -
- can be reassigned (like `let`, **not** like `const`)
(- can actually be redeclared without causing an error - which can be very confusing - this is unlike `let` or `const`  )
- can be declared without initialization, like `let` and not like `const` - in this case, the variable will be initialized to `undefined`
- 1) if used to declare variable at top level of a program, JS will create a property on the global object. This won't happen if `var` is declared inside a function. **NOTE:** In Node, this will only work in the REPL; the code in a node file is wrapped inside a function - so the `var` variable isn't being created at the top level
- 2) creates a variable with function scope, not block scope!

## 2. Declared Scope
The "potential" scope given to an identifier/variable based on **how** it is declared.
1. `let`, `const`, and `class` (i.e. class declarations) declare variables with **block scope**
1. `var` and `function` (i.e. function declarations) declare variables with **function scope**
**Note:** This is actually not entirely true. Function declarations are only function-scoped in sloppy mode; in strict mode, they are block-scoped!

## 3. Visibility Scope
Actual availability of a variable within the code: globally or locally.
It either has:
1. **global scope**
2. **local scope** ==> local function scope (or just 'function scope'), or local block scope (or, 'block scope')

## 4. Lexical Scope
Defines whether a variable is in a block or function's **inner** or **outer** scope.

## 5. Hoisting
JS engines operate in 2 phases: 1) **creation phase** 2) **execution phase**

### Creation Phase
- finds and records variable, function, and class declarations
- designates scope of each declaration

`Var`
- hoisted variable is given the value `undefined`

`Let`, `Const`, and `class declarations`
- hoisted variable is uninitialized, or unset - **TDZ** = Temporal Dead Zone, attempt to access results in a Reference Error

`Function Declarations`
- entire body is hoisted, so function is actually useable prior to definition!

`Warning:`
- Don't nest function declarations inside blocks (e.g. `if` blocks) - inconsistent behavior (after es6, shouldn't be inconsistent behavior anymore)

`Function Expressions`
- same as any variable declarations

## 6. Strict Mode
It does 3 overall things:
1. eliminates some silent errors
1. prevents code that slows JS down/doesn't allow for optimization
1. reduces naming conflicts

- add "use strict"; or 'use strict'; **pragma** at top of file or function
- a **pragma** is a language construct that tells a compiler, interpreter etc. to process the code in a different way, it's not part of the language itself
- must be added to the beginning of the code to work (except comments)
- no way to "disable" it for later code once enabled in a program or function
- classes and modules run in strict mode automatically
- strict mode is lexically scoped. it's also inherited by nested functions

## 7. some Strict Mode rules/errors
1. won't let you create undeclared variables = **implicit global variables**
1. implicit context for function invocation syntax is `undefined` instead of the global object - and any property attempted to be accessed on `undefined` will therefore cause an error
1. doesn't allow numbers with leading zeroes (including octal literals)

## Shorthand
- concise property initializers
- concise method syntax
- object destructuring
- array destructuring
- spread syntax
- rest syntax


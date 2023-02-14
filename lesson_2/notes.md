## 1. Var
- mostly in older code, but still possible to come across in newer code, too
- can be reassigned (like `let`, and not like `const`)
- can be declared without initialization, like `let` and not like `const` - in this case, the variable will be initialized to `undefined`
- 1) if used to declare variable at top level of a program, JS will create a property on the global object. This won't happen if `var` is declared inside a function. **NOTE:** In Node, this will only work in the REPL, because otherwise the code in a node file is wrapped inside a function
- 2) creates a variable with function scope, not block scope

## 2. Declared Scope
The "potential" scope given to an identifier/variable based on **how** it is declared.
1. `let`, `const`, and `class` (i.e. class declarations) declare variables with **block scope**
1. `var` and `function` (i.e. function declarations) declare variables with **function scope**

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
- Don't nest function declarations inside blocks (e.g. `if` blocks) - inconsistent behavior

`Function Expressions`
- same as any variable declarations

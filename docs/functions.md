# Functions

Functions are considered objects in JavaScript. What separated a Function from an non-function object is that it can be invoked (or called). Otherwise, functions are variables like any other variable.

## Function Declaration

### Composition

- The `name` of the function
- A list of `parameters` to the function (enclosed in parentheses and separated by commas)
- The JavaScript statements that define the function body (enclosed in curly braces)

In the following example, we define a (global) function called `square`. This takes a single parameter `num` and returns the value of `num` squared.

```js
function square(num) {
  return num * num;
}
```

## Function Expression

```js
const food =
```

## Arrow Function (Expressions)

## Notes:

- `parameter` vs `argument` -- Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.

- **Arrow Function Limitation**
  - `this` is treated differently
  - cannot be called with `new` keyword (cannot be used as a constructor)
  - no access to `arguments` variable inside arrow function

# Reference Docs:

- https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-interchangeable#:~:text=Function%20expressions%20are%20best%20for,they%20tend%20to%20be%20terser).

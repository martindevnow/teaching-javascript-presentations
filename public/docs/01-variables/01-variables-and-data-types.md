## What is a variable?

A variable is like a little box that we give a name to reference what we put in it.

---

Variables are declared (putting a label on a box) and initialized (putting contents into that box)

The **label** we give the variable (box) is what we will call the `(variable's) name`

The **type** of contents of the variable (box) are what we will call the `(variable's) type` and the actual contents themselves is the `(variable's) value`

---

For example, in JavaScript, a variable is instantiated and initialized in a single line of code as follows:

```js
let age = 30;
```

Some aspects of this instantiation and initialization are implicit and others are explicit.

We are explicitly setting the `name` to be `age` and the `value` to be `30`, but we are implicitly telling the computer that the `type` is `number`

> We will dive deeper into data types in a later session

@TODO: Add a link to the session where data types are covered

---

# Data Types

JavaScript is a "loosely typed" language. although variables (those boxes) can change the type of content they hold, it is not recommended to do so. For example, the following is allowed, but it is _not best practice_.

```js
let age;

// ... getting user input
age = 30;

// ... preparing to show user
age = "30 years old";
```

> ℹ️ TypeScript on the other hand is a "strongly typed" language. This would prevent you from reassigning a variable to another variable of a known different type.

JavaScript supports 8 primary data types:

1. number
2. string
3. boolean
4. undefined
5. null
6. object (& array)
7. symbol
8. bigInt

```js
let age = 30; // number
let name = "Ben"; // string
let isHappy = true; // boolean
let pet = undefined; // undefined
let pet; // also undefined
let wallet = null; // null

// Complex Types
let car = {}; // object
let skills = []; // array
```

> ℹ️ Note that Array and Object are like wrappers. Although they are a type themselves, the contents of these types are types themselves.

For example, an object can contain `properties` that can each have their own type (including array or object)

```js
let car = {type: 'ford', year: 2010, features: ['abs', 'power-windows']};

// Although it is preferable to have contents of the same time (with a minor exception for Tuples)
@TODO: Link to Tuples info
let names = ['Ben', 'Chris', 'Gerald']; // Preferred

// Arrays *can* also have mixed contents
let contents = [20, 'card', true]; // Less preferred
```

## Notes:

- `null` vs `undefined` - `null` is explicit where as `undefined` is implicit. `typeof null` is `object` whereas `typeof undefined` is `undefined`.

- `BigInt` -- `typeof BigInt(10)` is `number`, however, the JS runtime knows to allocate more space for the variable as it grows beyond the limitations of the `number` data type

- `Number.MAX_VALUE` -- Javascript `number`s are always one type: **double (64-bit floating point)** (Maximum value of `1.8*10^308`) (see: `Number.MAX_VALUE`)

  - Ref: https://www.reddit.com/r/learnjavascript/comments/wgwkkz/maximum_integer_in_js/?rdt=57241#:~:text=In%20this%20case%2C%20the%20highest,do%20is%20call%20it%20Infinity%20.

- `Number.MAX_SAFE_INTEGER` -- `2^53 - 1`

- `NaN`

- `Infinity`

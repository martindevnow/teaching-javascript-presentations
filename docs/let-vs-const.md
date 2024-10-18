# Let vs Const

- `let` allows variables to be instantiated (reserved in memory) without being initialized (setting an initial value)

```
let i = 1; // OK

/** */

let i; // Also OK
i = 1;
```

- `const` requires initialization when being instantiated

```js
const i = 100; // OK

/** */

const i; // Not OK
i = 100; // Not OK
```

- `let` variables can be reassigned or mutated

```js
let vehicle = { color: "red" };
vehicle.color = "blue"; // OK (Mutation)
vehicle = { type: "car" }; // Still OK (Reassignment)
```

- `const` variables can be mutated, but not reassigned

```js
const vehicle = { type: "car" };
vehicle.type = "van"; // Ok
vehicle.color = "red"; // Also OK (Adding a new property)
vehicle = { type: "van" }; // Not OK (Cannot Reassign)
```

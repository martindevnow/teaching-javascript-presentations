/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
void (function () {
  console.log(":: MATHEMATICAL ::");
  let a;
  a = 1 + 2; //   Addition
  a = 2 - 1; //   Subtraction
  a = 10 * 2; //  Multiplication
  a = 10 / 5; //  Division
  a = 10 ** 2; // Exponent (Power of..)
  a = 10 % 3; //  Remainder

  //
  console.log(a);
})();

void (function () {
  console.log(":: ASSIGNMENT ::");
  let a = 10; // Basic Assignment
  let b = 5;
  a++; //     Increment by 1
  a--; //     Decrement by 1
  a += b; //  Increment by "b"
  a -= b; //  Decrement by "b"
  a *= b; //  Set a to a * b
  a /= b; //  Set a to a / b
  a **= b; // Set a to a to the power of b
  a %= b; //  Set a to the remainder of a / b

  //
  console.log(a);
})();

void (function () {
  console.log(":: COMPARISON ::");
  let bool = 6 < 10; //   Less Than
  bool = 6 <= 10; //      Less than or Equal
  bool = 10 > 6; //       Greater than
  bool = 10 >= 6; //      Greater than or Equal
  bool = 10 == "10"; //   Equal (Loose)
  bool = 10 === 10; //    Equal (Strict)
  bool = 10 != "11"; //   Not Equal (Loose)
  bool = 10 !== "10"; //  Not Equal (Strict)

  //
  console.log(bool);
})();

void (function () {
  console.log(":: LOGICAL ::");
  let bool = true && true; // AND
  bool = true || false; //    OR
  bool = !false; //           NOT

  //
  console.log(bool);
})();

void (function () {
  let condition1, condition2, condition3, value1, value2, value3, value4;

  console.log(":: TERNARY ::");
  // Syntax :: <condition> ? <value-if-true> : <value-if-false>
  let age = 19;
  let drink = age < 21 ? "Juice" : "Cocktail"; // Ternary

  // Chaining Ternary
  let variable2 = condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;

  //
  console.log(drink, variable2);
})();

void (function () {
  console.log(":: NULLISH COALESCING ::");
  let something = null ?? "default";

  // Object Properties
  let car = { color: "blue" };
  car.speed ??= 10; //    set to 10
  car.color ??= "red"; // stays as "blue"

  //
  console.log(something);
})();

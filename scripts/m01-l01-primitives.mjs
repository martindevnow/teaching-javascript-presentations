/* global BigInt */

void (function () {
  console.log(":: SUPPORTED TYPES ::");
  let age = 35; //                            number
  let hugeNum = 9999999999999999999n; //      BigInt
  let greeting = "Hello world"; //            string
  let isLoaded = true; //                     boolean
  let toys; //                                undefined
  let empty = null; //                        null
  let car = { color: "red" }; //              object
  let colors = ["red", "blue", "yellow"]; //  array
  let sym = Symbol("sym"); //                 symbol

  //
  console.log(age);
  console.log(hugeNum);
  console.log(greeting);
  console.log(isLoaded);
  console.log(toys);
  console.log(empty);
  console.log(car);
  console.log(colors);
  console.log(sym);
})();

void (function () {
  console.log(":: LOOSE TYPES ::");
  let yourAge = 35; //         number
  // ... later in the code
  yourAge = "35 years old"; // string

  //
  console.log(yourAge);
})();

void (function () {
  console.log(":: NUMBERS ::");
  let age = 35; //            integer
  let price = 10.99; //       double/float
  let c = 3.0e8; //           exponent
  let hex = 0xff; //          hexadecimal
  let binary = 0b11111111; // binary
  let max = Number.MAX_SAFE_INTEGER;
  // (2^53 - 1 == 9007199254740991)

  //
  console.log(age);
  console.log(price);
  console.log(c);
  console.log(hex);
  console.log(binary);
  console.log(max);
})();

void (function () {
  console.log(":: BIG INT ::");
  let max_safe = 9007199254740991n;
  let massive = BigInt(1.13e50);
  let huge = 99999999999999999999999999n;

  //
  console.log(max_safe);
  console.log(massive);
  console.log(huge);
  console.log(typeof max_safe);
  console.log(typeof massive);
  console.log(typeof huge);
})();

void (function () {
  console.log(":: STRING ::");
  let name = "Ben's Pizza Place"; // double quotes
  let lastName = "Martin"; // single quotes
  let literal = `My name is ${lastName}!`; // back ticks
  let phone = "555-1234";

  let escaped = "He's my friend";
  let escaped2 = 'He said "Hello" to me.';

  let joined = "Hello " + lastName;

  //
  console.log(name);
  console.log(lastName);
  console.log(literal);
  console.log(phone);
  console.log(escaped);
  console.log(escaped2);
  console.log(joined);
})();

void (function () {
  console.log(":: BOOLEAN ::");
  let isHappy = true;
  let isHonest = false;

  //
  console.log(isHappy);
  console.log(isHonest);
})();

void (function () {
  console.log(":: NULL AND UNDEFINED ::");
  let hisAge; // default to undefined
  let school = null;

  //
  console.log(hisAge);
  console.log(school);
  console.log(typeof hisAge);
  console.log(typeof school);
})();

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
})();

void (function () {
  console.log(":: LOOSE TYPES ::");
  let yourAge = 35; //         number
  // ... later in the code
  yourAge = "35 years old"; // string
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
})();

void (function () {
  console.log(":: BIG INT ::");
  let max_safe = 9007199254740991n;
  let massive = BigInt(99999999999999999999999999);
  let huge = 99999999999999999999999999n;
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
})();

void (function () {
  console.log(":: BOOLEAN ::");
  let isHappy = true;
  let isHonest = false;
})();

void (function () {
  console.log(":: NULL AND UNDEFINED ::");
  let hisAge; // default to undefined
  let school = null;
})();

const truthyValues = [
  1,
  "0",
  1n,
  [],
  {},
  Infinity,
  0b1,
  0x1,
  Promise.resolve(0),
];

const falsyValues = [0, "", 0n, null, undefined, 0b0, 0x0];

console.log(":: Truthy");
truthyValues.map((a) => console.log(!!a));

console.log(":: Falsy");
falsyValues.map((a) => console.log(!!a));

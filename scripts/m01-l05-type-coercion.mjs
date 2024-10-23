/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
void (function () {
  console.log(":: UNARY PLUS ::");
  let value = +"30"; // Convert to 30
  value = +true; //     1
  value = +false; //    0
  value = +null; //     0
  value = +[]; //       0
  value = +((a) => a); // NaN

  //
  console.log(value);
})();

void (function () {
  console.log(":: TRUTHY and FALSY ::");
  let truthyValues = [1, "1", "0", 1n, [], {}, Infinity, 0b1, 0x1];
  let falsyValues = [0, "", 0n, null, undefined, 0b0, 0x0];

  //
  console.log(":::: Truthy mapped ...");
  truthyValues.map((a) => console.log(!!a));
  console.log(":::: Falsy mapped ...");
  falsyValues.map((a) => console.log(!!a));
})();

void (function () {
  console.log(":: DOUBLE NOT ::");
  let val = !!"word"; //  true
  val = !!100; //         true
  val = !!0; //           false
  val = !!""; //          false

  //
  console.log(val);
})();

(() => {
  const numbers = () => {
    const num = 1;
    const num2 = 1.2;
    const num3 = 1.4e7;

    console.log(":: Numbers ::");
    console.log(num);
    console.log(num2);
    console.log(num3);
    console.log(typeof num);
    console.log(typeof num2);
    console.log(typeof num3);
  };

  const boolean = () => {
    const yes = true;
    const no = false;

    console.log(":: Boolean :: ");
    console.log(yes);
    console.log(no);
    console.log(typeof yes);
    console.log(typeof no);
  };

  const undef = () => {
    let un;
    let und = undefined;
    let name = "ben";
    name = undefined;

    console.log(":: Undefined ::");
    console.log(un);
    console.log(und);
    console.log(name);
    console.log(typeof un);
    console.log(typeof und);
    console.log(typeof name);
  };

  const nullType = () => {
    const nothing = null;

    console.log(":: Null ::");
    console.log(nothing);
    console.log(typeof nothing);
  };

  const objects = () => {
    const obj = {};
    const arr = [];
    const func = () => {};

    console.log(":: Objects ::");
    console.log(obj);
    console.log(arr);
    console.log(func);
    console.log(typeof obj);
    console.log(typeof arr);
    console.log(typeof func);
  };

  const bigints = () => {
    // eslint-disable-next-line no-undef
    const num = BigInt(1);
    // eslint-disable-next-line no-undef
    const num2 = BigInt(12);
    // eslint-disable-next-line no-undef
    const num3 = BigInt(1.4e7);

    console.log(":: Big Int ::");
    console.log(num);
    console.log(num2);
    console.log(num3);
    console.log(typeof num);
    console.log(typeof num2);
    console.log(typeof num3);
  };

  numbers();
  boolean();
  undef();
  nullType();
  objects();
  bigints();
})();

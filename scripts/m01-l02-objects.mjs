void (function () {
  console.log(":: OBJECTS COPYING ::");
  let obj = {
    car: { color: "red" },
    cash: 100,
  };

  let refObj = obj;
  let shallowCopy = { ...obj };
  let deepCopy = JSON.parse(JSON.stringify(obj));

  refObj.cash = 0;
  console.log(obj); // cash = 0
  console.log(shallowCopy); // cash = 100
  console.log(deepCopy); // cash = 100

  obj.car.color = "blue";
  console.log(obj); // car.color = "blue"
  console.log(shallowCopy); // car.color = "blue"
  console.log(deepCopy); // car.color = "red"

  //
})();

void (function () {
  console.log(":: SHALLOW COPY ::");
  let original = { x: 1, y: 2, subObj: { z: 1 } };
  let copy = { ...original };

  copy.x = 10;
  copy.subObj.z = 10;
  console.log(original); // { x: 1, y: 2, subObj: { z: 10 } }
})();

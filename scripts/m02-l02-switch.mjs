const main = (car) => {
  console.log(`car has the following properties:`);
  console.log(JSON.stringify(car, null, 2));

  // IF
  console.log(":: SWITCH ::");
  switch (car.color) {
    case "red":
    case "blue":
    case "yellow":
      console.log("Primary color!");
      break;
    case "black":
      console.log("Boooorrring...");
      break;
    default:
      console.log("What color is this.... ?");
      break;
  }
};

let car = { color: "red" };
main(car);

car.color = "black";
main(car);

car.color = "rainbow";
main(car);

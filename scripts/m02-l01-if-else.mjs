const main = (age) => {
  console.log(`age is set to "${age}"`);

  // IF
  console.log(":: IF ::");
  if (age < 21) console.log("Welcome!");
  if (age < 21) {
    console.log("Welcome!");
  }

  // IF + ELSE
  console.log(":: IF ELSE ::");
  if (age < 21) {
    console.log("Deny service"); // this will be executed
  } else {
    console.log("Welcome!"); // this will be skipped
  }

  // IF + ELSE IF + ELSE
  if (age < 10) {
    console.log("It's your bed time");
  } else if (age < 21) {
    console.log("Sorry, go away");
  } else {
    console.log("Welcome!");
  }
};

let age = 19;
main(age);

age = 9;
main(age);

age = 50;
main(age);

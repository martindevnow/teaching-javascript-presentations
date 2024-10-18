console.log(`\n\n:: TEST 1 ::`);

function PassbyReferenceMutateExisting(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(
    `Inside PassbyReferenceMutateExisting -> a = ${obj.a} b = ${obj.b}`
  );
}
let obj = {
  a: 10,
  b: 20,
};
console.log(
  `Before calling PassbyReferenceMutateExisting Function -> a = ${obj.a} b = ${obj.b}`
);

PassbyReferenceMutateExisting(obj);

console.log(
  `After calling PassbyReferenceMutateExisting Function -> a = ${obj.a} b = ${obj.b}`
);

///////
console.log(`\n\n:: TEST 2 ::`);

function PassbyReferenceReassignObj(obj) {
  // Changing the reference of the object
  obj = {
    a: 10,
    b: 20,
    c: "TEST",
  };
  console.log(`Inside PassbyReferenceReassignObj Function -> obj `);

  console.log(obj);
}

let obj2 = {
  a: 10,
  b: 20,
};
console.log(`Updating the object reference -> `);
console.log(`Before calling PassbyReferenceReassignObj Function -> obj`);
console.log(obj2);

PassbyReferenceReassignObj(obj2);
console.log(`After calling PassbyReferenceReassignment Function -> obj`);
console.log(obj2);

//////////
console.log(`\n\n:: TEST 3 ::`);

function PassbyReferenceMutateNewProperty(obj) {
  // Mutating the original object
  obj.c = "TEST";
  console.log(`Inside PassbyReferenceMutateNewProperty Function -> obj `);
  console.log(obj);
}

let obj3 = {
  a: 10,
  b: 20,
};
console.log(`Mutating the original object -> `);
console.log(`Before calling PassbyReferenceMutateNewProperty Function -> obj`);
console.log(obj3);

PassbyReferenceMutateNewProperty(obj3);
console.log(`After calling PassbyReferenceMutateNewProperty Function -> obj`);
console.log(obj3);

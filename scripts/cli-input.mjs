import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const age = await rl.question("How old are you? \n");
console.log(`Your age is ${age}`);

rl.close();

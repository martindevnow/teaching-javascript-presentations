import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson03 = () => {
  const [deckDivRef] = useSlideshow();


  const forLoop = `for (let i = 0; i < 5; i++) {
  console.log(i);
}`;

  const forLoopWithBreak = `for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop early
  }
  console.log(i);
}`

  const nestedLoops = `for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(\`i: \${i}, j: \${j}\`);
  }
}`;

  const multipleInitialization = `for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}`;

  const optionalExpressions = `let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}`;

  const forInObject = `const person = { name: 'John', age: 30, occupation: 'Developer' };

for (const property in person) {
  console.log(\`\${property}: \${person[property]}\`);
}`;

  const forInArray = `const colors = ['red', 'green', 'blue'];

for (const color in colors) {
  console.log(colors[color]);
}`;

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Control Flow</h1>
          <h2>For Loops</h2>
          "Executing Code a Specified Number of Times"

        </section>



        <section>
          <h2>For loops</h2>
          TODO: Insert Image
          <Notes>
            In programming, for loops are used to execute code a specified number of times.<br />
            <br />
            You can think of it as repeating a process for a specific number of iterations.<br />
          </Notes>
        </section>



        <section>
          <h2>For Loops</h2>
          <CodeBlock lineNumbers code={forLoop} />

          <Notes>
            The basic syntax for a for loop in JavaScript is for (initialization; condition; increment) &#123; code to be executed &#125;.<br />
            <br />
            In this example, the initialization sets i to 0, the condition checks if i is less than 5, and the increment increases i by 1 each time.<br />
          </Notes>
        </section>



        <section>
          <h2>Breaking Loop</h2>
          <CodeBlock lineNumbers code={forLoopWithBreak} />

          <Notes>
            You can use loop control statements like break to exit a for loop prematurely.<br />
            <br />
            This is useful when you need to stop the loop based on certain conditions.<br />
          </Notes>
        </section>



        <section>
          <h2>Nested Loops</h2>
          <CodeBlock code={nestedLoops} />

          <Notes>
            You can also nest for loops to repeat a process for each iteration of an outer loop.<br />
            <br />
            This is useful when you need to perform multiple iterations based on different conditions.<br />
          </Notes>
        </section>



        <section>
          <h2>Multiple Variables</h2>
          <CodeBlock code={multipleInitialization} />
          <Notes>
            In JavaScript, you can initialize multiple variables in a for loop using the comma operator.<br />
            <br />
            This is useful when you need to keep track of multiple values that change at different rates.<br />
          </Notes>
        </section>



        <section>
          <h2>Optional Expressions</h2>
          <CodeBlock code={optionalExpressions} />
          <Notes>
            Note that expressions 1 and 3 in the for loop syntax are optional.<br />
            <br />
            The only required expression is the condition, which evaluates whether to continue or not.<br />
          </Notes>
        </section>



        <section>
          <h2>For - In (object)</h2>
          <CodeBlock code={forInObject} />
          <Notes>
            For-in loops can be used to iterate over the properties of an object.<br />
            <br />
            The syntax is for (const variable in object) &#123; code &#125;, where variable takes on the value of each property name.<br />
          </Notes>
        </section>



        <section>
          <h2>For - In (array)</h2>
          <CodeBlock code={forInArray} />
          <Notes>
            For-in loops can also be used to iterate over the indices of an array.<br />
            <br />
            Note that this is different from using a for loop with an index variable, as the order of iteration may not be what you expect.<br />
            If order is important, It is better to use a normal for loop, a for of loop, or Array.forEach().<br />
          </Notes>
        </section>

      </div>
    </div>
  )
}

export default Lesson03
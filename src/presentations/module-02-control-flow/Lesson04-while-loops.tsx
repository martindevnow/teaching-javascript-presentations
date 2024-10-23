import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson04 = () => {
  const [deckDivRef] = useSlideshow();

  const whileLoop = `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}}`

  const infiniteLoop = `let i = 0;
while (true) {
  console.log(i);
  i++;
}`;

  const nestedLoops = `let i = 0;
let j = 0;
while (i < 3) {
  while (j < 4) {
    console.log(\`i: \${i}, j: \${j}\`);
    j++;
  }
  i++;
  j = 0; // Reset the inner loop counter
}`;

  const breakingOutOfTheLoop = `let i = 0;
while (i < 5) {
  if (i === 3) {
    break; // Exit the loop early
  }
  console.log(i);
  i++;
}`;

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">


        <section>
          <h1>Control Flow</h1>
          <h2>while loops</h2>
          "Repeating Code Execution Until a Condition is Met"
        </section>



        <section>
          <h2>while loops</h2>
          TODO: Insert Image

          <Notes>
            In programming, while loops are used to repeat code execution until a certain condition is met.<br />
            <br />
            You can think of it as a circular process that continues until the condition is true.<br />
          </Notes>
        </section>



        <section>
          <h2>Basic example</h2>
          <CodeBlock lineNumbers code={whileLoop} />

          <Notes>
            The basic syntax for a while loop in JavaScript is while (condition) code to be executed.<br />
            <br />
            In this example, the condition is i &gt; 5, and the code inside the loop will execute until i reaches 5.<br />
          </Notes>
        </section>



        <section>
          <h2>Infinite Loop</h2>
          <CodeBlock code={infiniteLoop} />

          <Notes>
            If you forget to include a condition that will eventually be false, your loop will run indefinitely!<br />
            <br />
            This can be useful for certain applications, but it's usually not what you want.<br />
          </Notes>
        </section>



        <section>
          <h2>Common Use Cases</h2>
          While loops are commonly used in situations where you need to repeat a process until a certain condition is met.

          Examples include:

          Counting down from a certain number

          Repeating a task until it's completed

          Iterating over an array or object
        </section>



        <section>
          <h2>Nested Loops</h2>
          <CodeBlock code={nestedLoops} />

          <Notes>
            You can also nest while loops to repeat a process for each iteration of an outer loop.<br />
            <br />
            This is useful when you need to perform multiple iterations based on different conditions.<br />
          </Notes>
        </section>



        <section>
          <h2>Breaking Loop</h2>
          <CodeBlock code={breakingOutOfTheLoop} />

          <Notes>
            You can use the break statement to exit a while loop prematurely.<br />
            <br />
            This is useful when you need to stop the loop based on certain conditions.<br />
          </Notes>
        </section>



        <section>
          <h2>Summary</h2>
          While loops are used to repeat code execution until a condition is met.

          The basic syntax is while (condition) &#123; code to be executed &#125;.

          You can use while loops in various situations, including counting down from a certain number and iterating over arrays or objects.
        </section>



      </div>
    </div>
  )
}

export default Lesson04
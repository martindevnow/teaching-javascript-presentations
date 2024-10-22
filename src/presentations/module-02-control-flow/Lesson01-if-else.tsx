import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson01 = () => {
  const [deckDivRef] = useSlideshow();


  const ifOnly = `if (/* condition */) {
  // code to execute if true
}`

  const ifelse = `if (/* condition expression */) {
  // code to execute when true
} else {
  // code to execute when false
}`;

  const ifElseExample = `let age = 19;
if (age < 21) {
  console.log('deny service'); // this will be executed
} else {
  console.log('welcome!'); // this will be skipped
}`


  const ifElseIf = `let age = 19;
if (age < 10) {
  console.log("it's your bed time");
} else if (age < 21) {
  console.log("Sorry, go away");
} else {
  console.log("Welcome!");
}
`
  const switchStmt = `let car = {color: 'red'};
switch (car.color) {
  case 'blue':
  case 'red':
  case 'yellow':
    console.log('Primary color!');
    break;
  case 'black':
    console.log('boring');
    break;
  default:
    console.log('unique!'); // fallback
    break;
}`;

  const forLoop = `for (let i = 0; i < 10; i++) {
  console.log(\`Iteration \${i}\`);
}`


  const forLoopWithBreak = `for (let i = 0; i < 10; i++) {
  console.log(\`Iteration \${i}\`);
  if (i == 5) break;
}`


  const whileLoop = `let i = 0;
while (i < 10) {
  console.log(\`Iteration \${i}\`);
  if (i == 5) break;
  i++;
}`


  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Control Flow</h1>

          <Notes>
            In programming, it's important to be able to control which parts of the code are executed, and in which order
            There are a number of ways to achieve this
          </Notes>
        </section>


        <section>
          <h2>IF</h2>

          <CodeBlock lineNumbers code={ifOnly} />
        </section>

        <section>
          <h2>If + Else</h2>
          <CodeBlock lineNumbers code={ifelse} />

          <h3>Example</h3>
          <CodeBlock lineNumbers code={ifElseExample} />
        </section>

        <section>

          <h2>If + Else If</h2>
          <CodeBlock lineNumbers code={ifElseIf} />
        </section>


        <section>
          <h2>Switch</h2>
          <CodeBlock code={switchStmt} />
        </section>



        <section>
          <h2>For Loops</h2>
          <CodeBlock lineNumbers code={forLoop} />
        </section>



        <section>
          <h2>For Loops Cont'd</h2>
          <CodeBlock lineNumbers code={forLoopWithBreak} />
        </section>
      </div>
    </div>
  )
}

export default Lesson01
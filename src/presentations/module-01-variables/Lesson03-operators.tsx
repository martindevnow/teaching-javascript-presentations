import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson03 = () => {
  const [deckDivRef] = useSlideshow();

  const mathematical = `let a = 1 + 2; // Addition
a = 2 - 1; // Subtraction
a = 10 * 2; // Multiplication
a = 10 / 5; // Division
a = 10 ** 2; // Exponent (Power of..)
a = 10 % 3; // Modulo (Remainder)`;


  const assignment = `let a = 10; // Assignment
let b = 5;
a ++; // Increment by 1
a --; // Decrement by 1
a += b; // Increment by "b"
a -= b; // Decrement by "b"
a *= b; // Set a to a * b
a /= b; // Set a to a / b
a **= b; // Set a to a to the power of b
a %= b; // Set a to the remainder of a / b;`;


  const comparison = `let bool = 6 < 10; // Less Than
bool = 6 <= 10; // Less than or Equal
bool = 10 > 6; // Greater than
bool = 10 >= 6; // Greater than or Equal
bool = 10 == "10"; // Equal (Loose)
bool = 10 === 10; // Equal (Strict)
bool = 10 != "11"; // Not Equal (Loose)
bool = 10 !== "10"; // Not Equal (Strict)
bool = true ? "true" : "false"; // Ternary`;

  const logical = `let bool = true && true; // AND
bool = true || false; // OR
bool = !false; // NOT`

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Operators</h1>
        </section>


        <section>
          <h2>Mathematical</h2>
          <CodeBlock code={mathematical}></CodeBlock>
        </section>


        <section>
          <h2>Assignment</h2>
          <CodeBlock code={assignment}></CodeBlock>
        </section>


        <section>
          <h2>comparison</h2>
          <CodeBlock code={comparison}></CodeBlock>
        </section>


        <section>
          <h2>logical</h2>
          <CodeBlock code={logical}></CodeBlock>
        </section>
      </div>
    </div>
  )
}

export default Lesson03
import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import CodeBlock from '../../atoms/CodeBlock';
import Notes from '../../atoms/Notes';

const Lesson03 = () => {
  const [deckDivRef] = useSlideshow();

  const mathematical = `let a = 1 + 2; // Addition
a = 2 - 1; // Subtraction
a = 10 * 2; // Multiplication
a = 10 / 5; // Division
a = 10 ** 2; // Exponent (Power of..)
a = 10 % 3; // Remainder`;


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
bool = 6 <= 10;     // Less than or Equal
bool = 10 > 6;      // Greater than
bool = 10 >= 6;     // Greater than or Equal
bool = 10 == "10";  // Equal (Loose)
bool = 10 === 10;   // Equal (Strict)
bool = 10 != "11";  // Not Equal (Loose)
bool = 10 !== "10"; // Not Equal (Strict)`;

  const logical = `let bool = true && true; // AND
bool = true || false; // OR
bool = !false; // NOT`

  const ternary = `let bool = true ? "true" : "false"; // Ternary`;

  /**\
   * ( ) grouping
   * , comma
   * typeof
   * instanceof
   * ... spread
   */

  const castingToNumber = `let value = +"30"; // Convert to 30
value = +true // 1
value = +false // 0
value = +null // 0
value = +[] // 0
value = + (a) => a; // NaN`;


  const nullish = `let something = null ?? "default";
let car = {color: "blue"};
car.speed ??= 10; // set to 10
car.color ??= "red"; // stays as "blue"`;

  const truthy = `// Truthy
let truthyValues = [1, "1", "0", 1n, [], {}, Infinity, 0b1, 0x1];

// Falsy
let falsyValues = [0, "", 0n, null, undefined, 0b0, 0x0];`

  const doubleNot = `let val = !! "word"; // true
val = !! 100; // true
val = !! 0; // false
val = !! ""; // false
`

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">


        <section>
          <h1>Operators</h1>
        </section>



        <section data-auto-animate>
          <h2>Mathematical</h2>
          <CodeBlock id="code-box" code={mathematical}></CodeBlock>
        </section>



        <section data-auto-animate>
          <h2>Assignment</h2>
          <CodeBlock id="code-box" code={assignment}></CodeBlock>
        </section>



        <section data-auto-animate>
          <h2>comparison</h2>
          <CodeBlock id="code-box" code={comparison}></CodeBlock>
        </section>



        <section data-auto-animate>
          <h2>logical</h2>
          <CodeBlock id="code-box" code={logical}></CodeBlock>
        </section>



        <section>
          <h3>Nullish</h3>
          <CodeBlock id="code-box" lineNumbers code={nullish} />
        </section>



        <section>
          <h3>Changing Type</h3>
          <CodeBlock id="code-box" lineNumbers code={castingToNumber} />
        </section>



        <section data-auto-animate>
          <h3>Truthy/Falsy</h3>
          <CodeBlock id="code-box" lineNumbers code={truthy} />

          <Notes>
            Basically, any non-empty, non-zero value will evaluate to truthy. Everything else will evaluate to falsy.<br /><br />
            - "0" is a unique case. Although it is 0, it is a string with a value, so it is truthy.
          </Notes>
        </section>



        <section>
          <h3>Double Not</h3>
          <CodeBlock id="code-box" lineNumbers code={doubleNot} />
        </section>



        <section data-auto-animate>
          <h3>Ternary</h3>
          <CodeBlock id="code-box" lineNumbers code={ternary} />
        </section>


      </div>
    </div>
  )
}

export default Lesson03
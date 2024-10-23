import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import CodeBlock from '../../atoms/CodeBlock';
import Notes from '../../atoms/Notes';

const Lesson04 = () => {
  const [deckDivRef] = useSlideshow();

  const mathematical = `let a;
a = 1 + 2; //   Addition
a = 2 - 1; //   Subtraction
a = 10 * 2; //  Multiplication
a = 10 / 5; //  Division
a = 10 ** 2; // Exponent (Power of..)
a = 10 % 3; //  Remainder`;


  const assignment = `let a = 10; // Basic Assignment
let b = 5;
a++; //     Increment by 1
a--; //     Decrement by 1
a += b; //  Increment by "b"
a -= b; //  Decrement by "b"
a *= b; //  Set a to a * b
a /= b; //  Set a to a / b
a **= b; // Set a to a to the power of b
a %= b; //  Set a to the remainder of a / b`;


  const comparison = `let bool = 6 < 10; //   Less Than
bool = 6 <= 10; //      Less than or Equal
bool = 10 > 6; //       Greater than
bool = 10 >= 6; //      Greater than or Equal
bool = 10 == "10"; //   Equal (Loose)
bool = 10 === 10; //    Equal (Strict)
bool = 10 != "11"; //   Not Equal (Loose)
bool = 10 !== "10"; //  Not Equal (Strict)`;

  const logical = `let bool = true && true; // AND
bool = true || false; //    OR
bool = !false; //           NOT`

  const ternary = `// Syntax :: <condition> ? <value-if-true> : <value-if-false>
let age = 19;
let drink = age < 21 ? "Juice" : "Cocktail"; // Ternary

// Chaining Ternary
let variable2 = condition1
  ? value1
  : condition2
  ? value2
  : condition3
  ? value3
  : value4;`;

  /**\
   * ( ) grouping // TODO: Add to logical
   * , comma // TODO: Add to assignment
   */




  const nullish = `let something = null ?? "default";

// Object Properties
let car = { color: "blue" };
car.speed ??= 10; //    set to 10
car.color ??= "red"; // stays as "blue"`;

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



        <section data-auto-animate>
          <h3>Ternary</h3>
          <CodeBlock id="code-box" lineNumbers code={ternary} />

          <Notes>
            This is basically a short hand for an `if-else` block that we will explore deeper in the next module.<br />
            This is
          </Notes>
        </section>


      </div>
    </div>
  )
}

export default Lesson04
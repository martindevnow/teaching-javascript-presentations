import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import CodeBlock from "../../atoms/CodeBlock";
import CodeInline from "../../atoms/CodeInline";
import useSlideshow from "../../hooks/useSlideshow";
import Notes from "../../atoms/Notes";


/*
 * :: Variables ::
 * 
 */

const Lesson01 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  const examples = `let age = 35; 
let greeting = "Hello world"; 
let isLoaded = true; 
let toys = []; 
let car = {};`;


  const numbers = `let age = 35; // years
let price = 10.99; // dollars
let e = 3.0e8; // speed of light
let hex = 0xff; // 255
let binary = 0b11111111; // 255
`
  const bigInt = `let max_safe = 9007199254740991n;
let massive = BigInt(999999999999999999999999999999999999);
let huge = 99999999999999999999999999n;`;

  const strings = `let name = "Ben's Pizza Place";
let lastName = 'Martin';
let literal = \`My name is \${lastName}!\`
let phone = "555-1234";

let escaped = 'He\\'s my friend';
let escaped2 = "He said \\"Hello\\" to me.";

let joined = "Hello " + lastName;`;

  const bool = `let isHappy = true;
let isHonest = false;`;

  const truthy = `// Truthy
let truthyValues = [1, "1", 1n, [], {}, Infinity, 0b1, 0x1];

// Falsy
let falsyValues = [0, "", 0n, null, undefined, 0b0, 0x0];`

  const nullAndUndef = `let age; // default to undefined
let name = undefined;
let school = null;`

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Variables</h1>
        </section>


        <section>
          Variables are little boxes with labels and content

          <video data-autoplay muted src="/docs/videos/box-label.mov" />

          <Notes>
            A variable is like a little box that we give a name to reference what we put in it.
          </Notes>
        </section>


        <section data-auto-animate>
          <h3>Examples</h3>
          <CodeBlock
            id="code-box"
            code={examples} />


          <Notes>
            A piece of data is given a name and stored in memory to be
            referenced later in our code.
            - let is a reserved word that is used to tell the compiler we're about to create a variable.
            - age is the name we're giving our variable
            - = is the assignment operator
            - 35 is the value we're putting in the box
          </Notes>
        </section>


        <section>
          Declaration
          <CodeBlock code="let age;" />

          Declaration then Initialization
          <CodeBlock code={`let age;
age = 35; `} />

          Shorthand
          <CodeBlock code="let age = 35;" />
        </section>


        <section>
          <h2>Data Types</h2>
        </section>

        <section data-auto-animate>
          <h3>Numbers</h3>
          <CodeBlock
            id="code-box"
            lineNumbers
            code={numbers}
          ></CodeBlock>

          <Notes>
            Many number formats are supported by JavaScript. Here we can see examples of
            - Integer
            - Double / Float
            - Exponent notation
            - Hexadecimal notation
            - Binary notation

            Under the hood, these are all represented by a 64bit floating point value. This means there is a trade off in terms of size and accuracy.
            The largest integer number that can be accurately stored is 2 to the power of 53 - 1; Beyond that, you loose accuracy for tracking larger numbers.

          </Notes>
        </section>

        <section data-auto-animate>
          <h3>Big Int</h3>

          <CodeBlock
            id="code-box"
            lineNumbers code={bigInt} />
          <Notes>
            These can only be integers.
            All the previous notations are still supported with the `BigInt()` constructor
          </Notes>
        </section>


        <section data-auto-animate>
          <h3>Strings</h3>
          <CodeBlock
            id="code-box"
            lineNumbers
            code={strings}
          ></CodeBlock>
          <Notes>
            Strings can be defined with single or double quotes, as well as with backticks.
          </Notes>
        </section>


        <section data-auto-animate>
          <h3>Boolean</h3>
          <CodeBlock
            id="code-box"
            lineNumbers
            code={bool}
          ></CodeBlock>

          <Notes>
            Boolean is true or false. Other values can evaluate to "truthy" or "falsy"
          </Notes>
        </section>

        <section data-auto-animate>
          <h3>Truthy/Falsy</h3>

          <CodeBlock id="code-box" lineNumbers code={truthy} />

          <Notes>
            Basically, any non-empty, non-zero value will evaluate to truthy. Everything else will evaluate to falsy.
            - "0" is a unique case. Although it is 0, it is a string with a value, so it is truthy.
          </Notes>
        </section>

        <section data-auto-animate>
          <h3>Null and Undefined</h3>
          <CodeBlock id="code-box" lineNumbers code={nullAndUndef} />

          <Notes>
            undefined implies that it cannot be found or it hasn't been set.
            Null implies it was intentionally left blank/empty
          </Notes>
        </section>

        <section>
          <h2>Up Next...</h2>
          Arrays and Objects!
        </section>

      </div>
    </div >
  );
};

export default Lesson01;

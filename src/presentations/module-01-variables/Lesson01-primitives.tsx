import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import CodeBlock from "../../atoms/CodeBlock";
import useSlideshow from "../../hooks/useSlideshow";
import Notes from "../../atoms/Notes";


/*
 * :: Variables ::
 * 
 */

const Lesson01 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  const supportedTypes = `let age = 35; //                            number
let hugeNum = 9999999999999999999n; //      BigInt
let greeting = "Hello world"; //            string
let isLoaded = true; //                     boolean
let toys; //                                undefined
let empty = null; //                        null
let car = { color: "red" }; //              object
let colors = ["red", "blue", "yellow"]; //  array
let sym = Symbol("sym"); //                 symbol`;


  const looseTypes = `let yourAge = 35; //         number
// ... later in the code
yourAge = "35 years old"; // string`;


  const numbers = `let age = 35; //            integer
let price = 10.99; //       double/float
let c = 3.0e8; //           exponent
let hex = 0xff; //          hexadecimal
let binary = 0b11111111; // binary
let max = Number.MAX_SAFE_INTEGER;
      // (2^53 - 1 == 9007199254740991)`

  const bigInt = `let max_safe = 9007199254740991n;
let massive = BigInt(99999999999999999999999999);
let huge = 99999999999999999999999999n;`;


  const strings = `let name = "Ben's Pizza Place"; // double quotes
let lastName = "Martin"; // single quotes
let literal = \`My name is \${lastName}!\`; // back ticks
let phone = "555-1234";

let escaped = 'He\\'s my friend';
let escaped2 = "He said \\"Hello\\" to me.";

let joined = "Hello " + lastName; // concat`;


  const bool = `let isHappy = true;
let isHonest = false;`;



  const nullAndUndef = `let hisAge; // default to undefined
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
            I want you to think of a variable as a box with a label.
            Basically, variables are declared by putting a label on this box and initialized by putting contents into the box<br />
            This <b>label</b> we give the variable is what we will call the `name`<br />
            The <b>contents</b> themselves is the `value` of the variable.
            We should also take note of the <b>type</b> of value given to the variable as this will dictate what we can do with it later in our code<br />
          </Notes>
        </section>



        <section>
          Declaration and Initialization
          <CodeBlock code="let age = 35;" />

          <Notes>
            This is the basic form of declaring and initializing a variable.<br />
            Let's breakdown the syntax.<br />
            <br />
            "let" is a reserved word that is used to tell JavaScript to reserve some member as we're about to create a variable.<br />
            "age" is the name we're giving our variable<br />
            "="" is the assignment operator<br />
            "35" is the value we're putting in the box<br />
          </Notes>
        </section>



        <section>
          Declaration without Initialization
          <CodeBlock code={`let age;
// ... later in the code
age = 35; `} />
          Shorthand
          <CodeBlock code="let age = 35;" />

          <Notes>
            In the first example, we know we need a box to store age in, but we don't know the initial value.<br />
            We tell JavaScript to reserve some memory (make a box) for us and give it a name<br />
            <br />
            Later in our code, we are able to put a value in this box (or "assign" it a value)<br />
            <br />
            And as we've already seen, a variable can also be declared and initialized in a single expression.<br />
          </Notes>
        </section>



        <section>
          <h2>Data Types</h2>
        </section>



        <section data-auto-animate>
          <h3>Supported Types</h3>
          <CodeBlock
            id="code-box"
            code={supportedTypes} />

          <Notes>
            JavaScript supports a number of primitive data types out of the box<br />
            Although this list is not completely exhaustive, it will serve our purposes of getting more familiar with data types in JavaScript<br />
            In this section we will only focus on the first 6 and save objects and symbols for a future lecture<br />
            <br />
            Here are some example variables declarations and initializations.<br />
            Some aspects of these variables are implicit and others are explicit.<br />
            <br />
            We are explicitly setting the `name`s and `value`s <br />
            However, we are implicitly telling JavaScript that the `type` for these variables<br />
          </Notes>
        </section>



        <section data-auto-animate>
          <h3>Numbers</h3>
          <CodeBlock
            id="code-box"
            lineNumbers
            code={numbers}
          ></CodeBlock>

          <Notes>
            Many number formats are supported by JavaScript. Here we can see examples of<br />
            - Integer<br />
            - Double / Float<br />
            - Exponent notation<br />
            - Hexadecimal notation<br />
            - Binary notation<br />
            <br />
            Under the hood, these are all represented by a 64bit floating point value.<br />
            Basically, that means there is a trade off in terms of size and accuracy.<br />
            The largest integer number that can be accurately stored is 2 to the power of 53 - 1; <br />
            Beyond that, you loose accuracy for tracking larger numbers.
          </Notes>
        </section>



        <section data-auto-animate>
          <h3>Big Int</h3>
          <CodeBlock
            id="code-box"
            lineNumbers code={bigInt} />

          <Notes>
            The BigInt type allows us to have accurate arithmetic beyond the MAX_SAFE_INTEGER<br />
            However, these can only be integers; not decimals.<br />
            All the previous number notations are also supported with the `BigInt()` constructor
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
            Boolean explicitly represents true or false. <br />
            Other values can be "coerced" to a boolean from a "truthy" or "falsy" value but we will look at this  <br />
            <br />
          </Notes>
        </section>




        <section data-auto-animate>
          <h3>Null and Undefined</h3>
          <CodeBlock id="code-box" lineNumbers code={nullAndUndef} />

          <h3>Clearing Variables</h3>
          <CodeBlock lineNumbers code={`let age = 10;
age = undefined;`} />

          <Notes>
            undefined is for variables that have been declared but not initialized.<br />
            null is used explicitly to imply that a variable was intentionally left blank/empty<br />
            <br />
            While it is possible to assign a variable to undefined, it won't be obvious that this was intentional given JS's default behaviour
          </Notes>
        </section>



        <section>
          <h2>Loosely Typed Language</h2>
          <CodeBlock code={looseTypes} lineNumbers />

          <Notes>
            JavaScript is a "loosely typed" language.
            although variables can change their type,
            it is not recommended to do so.<br /><br />

            For example, changing "age" from a number to a string won't cause an error,
            but it is not best practice.<br /><br />

            TypeScript was designed to solve this concern, but that will be discussed later.
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

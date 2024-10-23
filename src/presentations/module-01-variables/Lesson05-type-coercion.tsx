import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import CodeBlock from '../../atoms/CodeBlock';
import Notes from '../../atoms/Notes';

const Lesson05 = () => {
  const [deckDivRef] = useSlideshow();

  const castingToNumber = `let value = +"30"; // Convert to 30
value = +true; //     1
value = +false; //    0
value = +null; //     0
value = +[]; //       0
value = +((a) => a); // NaN`;

  const truthy = `let truthyValues = [1, "1", "0", 1n, [], {}, Infinity, 0b1, 0x1];
let falsyValues = [0, "", 0n, null, undefined, 0b0, 0x0];`

  const doubleNot = `let val = !!"word"; //  true
val = !!100; //         true
val = !!0; //           false
val = !!""; //          false`;


  const typeofKeyword = `typeof 20`;

  const primitiveConstructors = `Number("20");
String(20);
Boolean(1);`

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">


        <section>
          <h3>Changing Type</h3>
          <CodeBlock id="code-box" lineNumbers code={castingToNumber} />
          "Type Coercion"

          <Notes>
            This is a type of type coercion. <br />
            JavaScript will try to convert the operand to a number with its best guess.<br />
            We also see this on the next slide with boolean values.
          </Notes>
        </section>



        <section data-auto-animate>
          <h3>Truthy/Falsy</h3>
          <CodeBlock id="code-box" lineNumbers code={truthy} />

          <Notes>
            Using the "double not"
            Basically, any non-empty, non-zero value will evaluate to truthy. Everything else will evaluate to falsy.<br /><br />
            - "0" is a unique case. Although it is 0, it is a string with a value, so it is truthy.
          </Notes>
        </section>



        <section>
          <h3>Double Not</h3>
          <CodeBlock id="code-box" lineNumbers code={doubleNot} />
          "Type Coercion"

          <Notes>
            Using the information from the previous slide, JavaScript will convert the truthy values to true and falsy values to false.
          </Notes>
        </section>


      </div>
    </div>
  )
}

export default Lesson05
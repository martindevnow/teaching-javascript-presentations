import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import useSlideshow from "../../hooks/useSlideshow";
import CodeBlock from "../../atoms/CodeBlock";
import Notes from "../../atoms/Notes";

const Lesson02 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  const objDefinition = `let person = { name: 'John', age: 30 };`;
  const objPropertyAccess = `let name = person.name; // "John"`;
  const objPropertyUpdates = `person.email = 'john@example.com';
delete person.age;`;
  const objPrototypes = `let Animal = { sound: ' generic animal sound' };
let Dog = { __proto__: Animal, sound: 'Woof!' };`;

  const objPropertyOrder = `let person = { name: 'John', age: 30 };
console.log(Object.keys(person)); // ["age", "name"]`;
  const objShallowCopy = `let original = { x: 1, y: 2 };
let copy = original;

copy.x = 10;
console.log(original); // { x: 10, y: 2 }`;

  const objDeepCopy = `let original = { x: 1, y: 2 };
let copy = JSON.parse(JSON.stringify(original));

copy.x = 10;
console.log(original); // { x: 1, y: 2 }`;

  const objCopying = `let obj = {
    car: { color: "red" },
    cash: 100,
  };

  let refObj = obj;
  let shallowCopy = { ...obj };
  let deepCopy = JSON.parse(JSON.stringify(obj));

  refObj.cash = 0;
  console.log(obj); // cash = 0
  console.log(shallowCopy); // cash = 100
  console.log(deepCopy); // cash = 100

  obj.car.color = "blue";
  console.log(obj); // car.color = "blue"
  console.log(shallowCopy); // car.color = "blue"
  console.log(deepCopy); // car.color = "red"`;

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">


        <section>
          <h1>Variables</h1>
          <h2>Objects</h2>
        </section>



        <section>
          <h2>Basic Syntax</h2>
          <CodeBlock code={objDefinition} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Accessing Properties</h2>
          <CodeBlock code={objDefinition + "\n" + objPropertyAccess} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Updating Properties</h2>
          <CodeBlock code={objDefinition + "\n" + objPropertyAccess + "\n" + objPropertyUpdates} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Object Prototype</h2>
          <CodeBlock code={objPrototypes} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Property Order</h2>
          <CodeBlock code={objPropertyOrder} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Variable by Reference</h2>
          <CodeBlock code={objShallowCopy} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Deep Copy</h2>
          <CodeBlock code={objDeepCopy} />
          <Notes>

          </Notes>
        </section>



        <section>
          <h2>Copying Example</h2>
          <CodeBlock code={objCopying} />
          <Notes>

          </Notes>
        </section>


      </div>
    </div>
  )
}

export default Lesson02
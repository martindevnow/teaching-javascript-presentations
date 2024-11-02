import useSlideshow from "../../hooks/useSlideshow";
import CodeBlock from "../../atoms/CodeBlock";
import Notes from "../../atoms/Notes";

const Lesson02 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  const objDefinition = `let person = { name: 'John', age: 30 };`;

  const objPropertyAccess = `let name = person.name; // "John"
name = person["name"]; // same`;

  const objPropertyUpdates = `person.email = 'john@example.com';
delete person.age;
person.name = "Jane"; // updates existing property`;

  const objPrototypes = `let Animal = { sound: ' generic animal sound' };
let Dog = { __proto__: Animal, sound: 'Woof!' };`;

  const objPropertyOrder = `let person = { name: 'John', age: 30 };
console.log(Object.keys(person)); // ["age", "name"]`;

  const objCopyReference = `let original = { x: 1, y: 2 };
let copy = original;

copy.x = 10;
console.log(original); // { x: 10, y: 2 }`;

  const objShallowCopy = `let original = { x: 1, y: 2, subObj: { z: 1 } };
let copy = { ...original };

copy.x = 10;
copy.subObj.z = 10;
console.log(original); // { x: 1, y: 2, subObj: { z: 10 } }`;

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
            Objects are defined using curly braces &#123; &#125; and a series of key-value pairs, where each key is a string (or symbol) and each value can be any type.
          </Notes>
        </section>



        <section>
          <h2>Accessing Properties</h2>
          <CodeBlock code={objDefinition + "\n" + objPropertyAccess} />
          <Notes>
            Properties are accessed using dot notation (person.name) or bracket notation (person['name']).

          </Notes>
        </section>



        <section>
          <h2>Updating Properties</h2>
          <CodeBlock code={objDefinition + "\n" + objPropertyAccess + "\n" + objPropertyUpdates} />
          <Notes>
            You can add new properties to an object by assigning a value to the property name.<br />
            <br />
            You can remove a property from an object using the delete keyword.<br />
            <br />
            When you assign a value to an object's property, it can overwrite any existing properties with the same name.<br />
            <br />
            Be careful when updating objects to avoid accidental property shadowing.<br />
          </Notes>
        </section>



        <section>
          <h2>Object Prototype</h2>
          <CodeBlock code={objPrototypes} />
          <Notes>
            Every JavaScript object has a prototype (or prototype chain), which is the chain of objects that are searched for properties when you access an object.<br />
            <br />
            You can create a new object by extending another object's prototype.<br />
          </Notes>
        </section>



        <section>
          <h2>Property Order</h2>
          <CodeBlock code={objPropertyOrder} />
          <Notes>
            In JavaScript, object properties are not inherently ordered.<br />
            <br />
            The order in which properties appear can vary depending on the browser or environment.<br />
          </Notes>
        </section>



        <section>
          <h2>Variable Copy Reference</h2>
          <CodeBlock code={objCopyReference} />
          <Notes>
            When you create a new variable and assign an existing object to it, you're just adding a new label to the same box.<br />
            The new variable name will reference the exact same object in memory.<br />
            <br />
            Both variables reference the same underlying object, so updating one will affect the other.<br />
          </Notes>
        </section>



        <section>
          <h2>Variable Shallow Copy</h2>
          <CodeBlock code={objShallowCopy} />
          <Notes>
            Using the object destructuring operator, we can create a shallow copy of the object.<br />
            This creates a new variable and copys the first layer of content over to the new variable.<br />
            <br />
            Note: If any of the first layer are NON primitives (ie Array or Object) then the contents of that will not be copied, but the reference to the object/array will be copied.<br />
            This will only kick the can down risking mutating the original object if you update nested objects in the copy<br />

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
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import useSlideshow from "../../hooks/useSlideshow";
import CodeBlock from "../../atoms/CodeBlock";
import Notes from "../../atoms/Notes";

/**
 * :: Arrays and Objects
 * 
 */

const Lesson02 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  const arrays = `let arr = [];
let arr2 = new Array(10);
let arr3 = Array.of(0, 5, 10, 15)`;

  const arrayIndex0 = `let arr = [10, 20, 25];
console.log(arr[0]);      // Prints: "10"
console.log(arr.length);  // Prints: "3"`;

  const arraysResizable = `let arr = [10, 20, 25];
console.log(arr[0]);      // Prints: "10"
console.log(arr.length);  // Prints: "3"
arr[3] = 30;
console.log(arr.length);  // Prints "4"
arr[9] = 100;
console.log(arr.length);  // Prints "10"`;

  const arrayAccess = `let arr = [10,20,25];
console.log(arr[0]);      // Prints: "10"
console.log(arr["0"]);      // Prints: "10"`;

  const arrayCopy = `// Create an original array with objects
let arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

let copiedArr = arr.slice(); // Copy Array
arr[0].name = 'New John'; // Modify first object

console.log('Copied Array:', copiedArr);  // New array 
console.log('Original Array:', arr);      // arr[0] was modified`;

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">


        <section>
          <h1>Arrays and Objects</h1>
        </section>



        <section>
          <h3>Arrays</h3>
          <CodeBlock lineNumbers code={arrays} />

          <Notes>
            Arrays are putting a box around a box.
          </Notes>
        </section>



        <section>
          <h2>Array Index</h2>
          <CodeBlock code={arrayIndex0} />
          First index is `0`

          <Notes>Arrays have their first index at 0</Notes>
        </section>


        <section>
          <h3>Size</h3>
          <CodeBlock code={arraysResizable} />

          <Notes>
            Arrays are resizable.<br />
            New elements can be added at any non-negative integer index<br />
          </Notes>
        </section>

      </div>
    </div>
  )
}

export default Lesson02
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
      </div>
    </div>
  )
}

export default Lesson02
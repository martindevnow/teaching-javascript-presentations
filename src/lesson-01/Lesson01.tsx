import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import CodeBlock from "../atoms/CodeBlock";
import CodeInline from "../atoms/CodeInline";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

/*
 * :: Variables ::
 * 
 */

const Lesson01 = () => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current
      .initialize({
        plugins: [RevealHighlight],
      })
      .then(() => {
        // good place for event handlers and plugin setups
      });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);
  const code1 = `let num = 10; 
let str = "Hello world"; 
let bool = true; 
let arr = []; 
let obj = {};`;

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>Variables</section>
        <section>Variables are little bucket placeholders for data</section>
        <section data-auto-animate>
          <CodeBlock
            id="code-box"
            lineNums="1"
            lang="js"
            code="let num = 100;"
          ></CodeBlock>
          <p>
            A piece of data is given a name and stored in memory to be
            referenced later in our code.
            <br />
          </p>
          <span className="fragment">
            <CodeInline color="red" lang="js" code="let"></CodeInline> is a
            reserved word that is used to tell the compiler we're about to
            create a variable.
            <br />
          </span>
          <span className="fragment">
            <CodeInline color="green" lang="js" code="num"></CodeInline> is the
            name we're giving our variable
            <br />
          </span>
          <span className="fragment">
            <CodeInline color="blue" lang="js" code="="></CodeInline>is the
            assignment operator
            <br />
          </span>
          <span className="fragment">
            <CodeInline color="purple" lang="js" code="10"></CodeInline> is
            value to be assigned to our variable
            <br />
          </span>
        </section>
        <section data-auto-animate>
          <CodeBlock
            id="code-box"
            lineNums="1"
            lang="js"
            code={code1}
          ></CodeBlock>
          Numbers
        </section>
        <section data-auto-animate>
          <CodeBlock
            id="code-box"
            lineNums="2"
            lang="js"
            code={code1}
          ></CodeBlock>
          String
        </section>
        <section data-auto-animate>
          <CodeBlock
            id="code-box"
            lineNums="3"
            lang="js"
            code={code1}
          ></CodeBlock>
          Boolean represent data that is{" "}
          <CodeInline color="red" lang="js" code="true"></CodeInline>
          or <CodeInline color="red" lang="js" code="false"></CodeInline>
        </section>
      </div>
    </div>
  );
};

export default Lesson01;

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";

/**
 * :: Operators
 * 
 */

const Lesson02 = () => {
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
        plugins: [RevealHighlight, RevealMarkdown],
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
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section
          data-markdown="docs/classes.md"
          data-separator-notes="^Notes:"
          data-charset="iso-8859-15"
        >
        </section>
      </div>
    </div>
  )
}

export default Lesson02
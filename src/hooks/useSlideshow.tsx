import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealNotes from "reveal.js/plugin/notes/notes";

import { MutableRefObject, RefObject, useEffect, useRef } from 'react'

const useSlideshow = (): [RefObject<HTMLDivElement>, MutableRefObject<Reveal.Api | null>] => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    console.log('Mounting Slideshow')
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current
      .initialize({
        plugins: [RevealHighlight, RevealMarkdown, RevealNotes],
        autoPlayMedia: true,
      })
      .then(() => {
        // good place for event handlers and plugin setups
      });

    return () => {
      console.log('Unmounting Slideshow')
      try {
        if (deckRef.current) {
          console.log(deckRef.current);

          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return [deckDivRef, deckRef];
}

export default useSlideshow
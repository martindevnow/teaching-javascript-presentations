import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import useSlideshow from "../../hooks/useSlideshow";

const Lesson00 = () => {
  const [deckDivRef] = useSlideshow(); // reference to deck container div

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section
          data-markdown="/docs/00-introduction/02-why-javascript.md"
          data-separator-notes="^Notes:"
          data-charset="iso-8859-15"
        >
        </section>
      </div>
    </div>
  )
}

export default Lesson00
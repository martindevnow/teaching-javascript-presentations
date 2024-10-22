import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson01 = () => {
  const [deckDivRef] = useSlideshow();

  const ifelse = `let 
  if (true)`;
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>Control Flow</h1>

          <Notes>
            In programming, it's important to be able to control which parts of the code are executed, and in which order
            There are a number of ways to achieve this
          </Notes>
        </section>

        <section>
          <h2>If / Else</h2>

          <CodeBlock code={ifelse} />
        </section>
      </div>
    </div>
  )
}

export default Lesson01
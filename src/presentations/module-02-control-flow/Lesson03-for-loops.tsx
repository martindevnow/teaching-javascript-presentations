import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson03 = () => {
  const [deckDivRef] = useSlideshow();


  const forLoop = `for (let i = 0; i < 10; i++) {
  console.log(\`Iteration \${i}\`);
}`


  const forLoopWithBreak = `for (let i = 0; i < 10; i++) {
  console.log(\`Iteration \${i}\`);
  if (i == 5) break;
}`



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
          <h2>For Loops</h2>
          <CodeBlock lineNumbers code={forLoop} />
        </section>



        <section>
          <h2>For Loops Cont'd</h2>
          <CodeBlock lineNumbers code={forLoopWithBreak} />
        </section>
      </div>
    </div>
  )
}

export default Lesson03
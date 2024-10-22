import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson04 = () => {
  const [deckDivRef] = useSlideshow();



  const whileLoop = `let i = 0;
while (i < 10) {
  console.log(\`Iteration \${i}\`);
  if (i == 5) break;
  i++;
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
          <h2>While Loops</h2>
          <CodeBlock lineNumbers code={whileLoop} />
        </section>



      </div>
    </div>
  )
}

export default Lesson04
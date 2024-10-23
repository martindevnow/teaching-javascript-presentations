import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';
import Notes from '../../atoms/Notes';
import CodeBlock from '../../atoms/CodeBlock';

const Lesson02 = () => {
  const [deckDivRef] = useSlideshow();



  const switchStmt = `let car = {color: 'red'};
switch (car.color) {
  case 'blue':
  case 'red':
  case 'yellow':
    console.log('Primary color!');
    break;
  case 'black':
    console.log('boring');
    break;
  default:
    console.log('unique!'); // fallback
    break;
}`;




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
          <h2>Switch</h2>
          <CodeBlock code={switchStmt} />
        </section>


      </div>
    </div>
  )
}

export default Lesson02
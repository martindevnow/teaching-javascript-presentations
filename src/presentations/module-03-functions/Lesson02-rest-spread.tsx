/**
 * Rest Operator
 * Spread Operator
 * Destructuring
 */
import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';

const Lesson02 = () => {
  const [deckDivRef] = useSlideshow();
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section></section>
      </div>
    </div>
  )
}

export default Lesson02
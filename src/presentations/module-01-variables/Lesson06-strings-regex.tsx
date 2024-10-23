/**
 * slice
 * splice
 * reverse
 * includes
 * 
 * 
 * Regex
 * - test
 * - exec
 * - match
 * - matchAll
 */
import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';

const Lesson06 = () => {
  const [deckDivRef] = useSlideshow();
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section></section>
      </div>
    </div>
  )
}

export default Lesson06
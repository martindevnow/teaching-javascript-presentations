
/**
 * 
 * TODO: * maybe break this into multiple lessons?
 * https://javascript.info/global-object
 * 
 * 
 * // variables
 * __dirname
 * __filename
 * 
 * 
 * // objects
 * (globalThis vs global vs window)
 *    global
 *    window (Browser only)
 * console
 * process
 * localStorage
 * sessionStorage
 * crypto
 * 
 * 
 * // constructors
 * URLSearchParams
 * Blob
 * Buffer
 * 
 * 
 * // Functions
 * setInterval
 * setTimeout
 * clearTimeout
 * clearInterval
 */

import React from 'react'
import useSlideshow from '../../hooks/useSlideshow';

const Lesson08 = () => {
  const [deckDivRef] = useSlideshow();
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section></section>
      </div>
    </div>
  )
}

export default Lesson08
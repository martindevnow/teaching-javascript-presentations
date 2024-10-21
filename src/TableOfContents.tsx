import React from 'react'
import { Link } from 'react-router-dom'

const TableOfContents = () => {
  return (
    <div>TableOfContents
      <li><Link to='lesson-01'>Lesson 01 - Variables</Link></li>
      <li><Link to='lesson-02'>Lesson 02</Link></li>
      <li><Link to='lesson-03'>Lesson 03</Link></li>
      <li><Link to='lesson-04'>Lesson 04</Link></li>
    </div>
  )
}

export default TableOfContents
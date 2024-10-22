import React from 'react'
import { Link } from 'react-router-dom'
import "./TableOfContents.css";

const TableOfContents = () => {
  return (
    <div id="table-of-contents">TableOfContents
      <li>Introduction</li>
      <li><Link to='/module-00/lesson-01'>M00 - L01 - Introduction</Link></li>
      <li><Link to='/module-00/lesson-02'>M00 - L02 - Introduction</Link></li>
      <li>Variables</li>
      <li><Link to='/module-01/lesson-01'>M01 - L01 - Primitives</Link></li>
      <li><Link to='/module-01/lesson-02'>M01 - L02 - Arrays and Objects</Link></li>
      <li><Link to='/module-01/lesson-03'>M01 - L03 - Operators</Link></li>
      <li><Link to='/module-01/lesson-04'>M01 - L04 - Functions</Link></li>
      <li>Control Flow</li>
      <li><Link to='/module-02/lesson-01'>M02 - L01 - If</Link></li>
      <li><Link to='/module-02/lesson-02'>M02 - L02 - Switch</Link></li>
      <li><Link to='/module-02/lesson-03'>M02 - L03 - For</Link></li>
      <li><Link to='/module-02/lesson-04'>M02 - L04 - While</Link></li>
    </div>
  )
}

export default TableOfContents
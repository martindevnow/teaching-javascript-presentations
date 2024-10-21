import React from 'react'

const Slide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section>{children}</section>
  )
}

export default Slide
import React, { PropsWithChildren } from 'react'

const Notes: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="notes">{children}</aside>
  )
}

export default Notes
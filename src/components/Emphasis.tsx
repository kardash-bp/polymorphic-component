import React, { ReactElement } from 'react'

const Emphasis = ({ children }: { children: string }): ReactElement => {
  return <em style={{ background: 'yellow', color: 'black' }}>{children}</em>
}

export default Emphasis

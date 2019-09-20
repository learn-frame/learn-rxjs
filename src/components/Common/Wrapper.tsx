import React, { FC } from 'react'
import { Divider } from 'semantic-ui-react'

interface IWrapper {
  title: string
}

const Wrapper: FC<IWrapper> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <Divider />
    </section>
  )
}

export default Wrapper

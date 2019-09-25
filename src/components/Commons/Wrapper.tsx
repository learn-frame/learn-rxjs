import React, { FC } from 'react'

interface IWrapper {
  title: string
}

const Wrapper: FC<IWrapper> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Wrapper

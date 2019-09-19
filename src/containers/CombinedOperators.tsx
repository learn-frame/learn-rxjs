import React, { FC } from 'react'
import Concat from 'components/CombinedOperators/Concat'
import ConcatAll from 'components/CombinedOperators/ConcatAll'

const CombinedOperators: FC = () => {
  return (
    <section>
      <Concat />
      <ConcatAll />
    </section>
  )
}

export default CombinedOperators

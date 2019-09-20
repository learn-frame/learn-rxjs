import React, { FC } from 'react'
import { Divider } from 'semantic-ui-react'
import Concat from 'components/CombinedOperators/Concat'
import ConcatAll from 'components/CombinedOperators/ConcatAll'
import Merge from 'components/CombinedOperators/Merge'
import Zip from 'components/CombinedOperators/Zip'

const CombinedOperators: FC = () => {
  return (
    <section>
      <h1>合并操作符</h1>
      <Divider />
      <Concat />
      <ConcatAll />
      <Merge />
      <Zip />
    </section>
  )
}

export default CombinedOperators

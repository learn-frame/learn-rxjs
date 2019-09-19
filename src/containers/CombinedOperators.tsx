import React, { FC } from 'react'

import { of, concat } from 'rxjs'
import {  } from 'rxjs/operators'

const CombinedOperators: FC = () => {

  const source1$ = of(1,2,3)
  const source2$ = of(4,5,6)

  concat(source1$, source2$).pipe(
    
  )

  return <section></section>
}

export default CombinedOperators

import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'
import { of, timer, forkJoin } from 'rxjs'

const tryForkJoin = () => {
  const source1$ = of('a', 'b', 'c', 'd', 'e')
  const source2$ = timer(500)
  const source3$ = timer(1000)

  forkJoin(source1$, source2$, source3$)
    .pipe()
    .subscribe(v => console.log(v))
}

const ForkJoin: FC = () => {
  return (
    <Wrapper title='forkJoin'>
      <p>forkJoin 类似于 Promise.all()</p>
      <p>它会在</p>
      <Button secondary onClick={tryForkJoin}>
        forkJoin
      </Button>
    </Wrapper>
  )
}

export default ForkJoin

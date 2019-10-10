import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'
import { of, timer, forkJoin, interval } from 'rxjs'
import { take } from 'rxjs/operators'

const tryForkJoin = () => {
  const source1$ = of('a', 'b', 'c', 'd', 'e')
  const source2$ = timer(500)
  const source3$ = timer(1000)

  forkJoin(source1$, source2$, source3$)
    .pipe()
    .subscribe(v => console.log(v))
}

const useTake = () => {
  const source1$ = interval(500).pipe(take(3)) // 最后一个值是 2
  const source2$ = of(1, 2, 3) // 最后一个值是 3
  forkJoin(source1$, source2$)
    .pipe()
    .subscribe(v => console.log(v))
}

const ForkJoin: FC = () => {
  return (
    <Wrapper title='forkJoin'>
      <p>forkJoin 类似于 Promise.all()</p>
      <p>它会取每个流的最后一个值进行合并</p>
      <Button secondary onClick={tryForkJoin}>
        forkJoin
      </Button>
      <p>对于无限的 interval，他永远不会结束，因此 forkJoin 永远不会执行</p>
      <p>因此可以通过 take 只取 interval 的前几个</p>
      <Button secondary onClick={useTake}>
        useTake
      </Button>
    </Wrapper>
  )
}

export default ForkJoin

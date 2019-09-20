import React, { FC } from 'react'
import Wrapper from 'components/Common/Wrapper'
import { Button } from 'semantic-ui-react'

// concat 属于静态方法
import { concat, timer } from 'rxjs'
import { map } from 'rxjs/operators'

const tryConcat = () => {
  const source1$ = timer(1000)
  const source2$ = timer(2000)
  const source$ = concat(source2$, source1$).pipe(map((item, key) => '$' + key))
  source$.subscribe(v => console.log(v))
}

const Concat: FC = () => {
  return (
    <Wrapper title='concat'>
      <p>concat 会按照顺序订阅流，只有一个流执行完毕后，才会执行下一个</p>
      <p>
        对于 <code>concat(interval(1000), of(1, 2, 3))</code> ，因为 interval
        会永久执行下去，所以第二个流永远不会执行
      </p>
      <Button secondary onClick={tryConcat}>
        tryConcat
      </Button>
    </Wrapper>
  )
}

export default Concat

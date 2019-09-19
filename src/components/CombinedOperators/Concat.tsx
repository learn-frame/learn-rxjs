import React, { FC } from 'react'
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
    <Button secondary onClick={tryConcat}>
      tryConcat
    </Button>
  )
}

export default Concat

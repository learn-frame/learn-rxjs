import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'
import { of } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'

const tryWithLatestFrom = () => {
  const source1$ = of(1, 2, 3)
  const source2$ = of('a', 'b', 'c')

  source1$.pipe(withLatestFrom(source2$)).subscribe(console.log, null, () => {
    console.log('完成')
  })
}

const WithLatestFrom: FC = () => {
  return (
    <Wrapper title='withLatestFrom'>
      <p>
        与 combineLatest 正好相反，combineLatest(of(1, 2, 3), of('a', 'b', 'c'))
        是取第一个流的最后一个元素与第二个流的所有元素依次配对，而
      </p>
      <Button secondary onClick={tryWithLatestFrom}>
        同步的两个流
      </Button>
    </Wrapper>
  )
}

export default WithLatestFrom

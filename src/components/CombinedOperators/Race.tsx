import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'
import { race, interval, of } from 'rxjs'

const tryRace = () => {
  const source1$ = interval(500)
  const source2$ = of('hello')

  race(source1$, source2$)
    .pipe()
    .subscribe(v => console.log(v))
}

const Race: FC = () => {
  return (
    <Wrapper title='race'>
      <p>race 对传入参数的顺序没有要求</p>
      <p>如</p>
      <pre>const source1$ = interval(500); const source2$ = of('hello')</pre>
      <p>因为同步流先于异步流执行，因此 source1$ 直接被退订</p>
      <Button secondary onClick={tryRace}>
        race
      </Button>
    </Wrapper>
  )
}

export default Race

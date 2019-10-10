import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'
import {  of } from 'rxjs'
import { startWith } from 'rxjs/operators'

const tryStartWith = () => {
  const source1$ = of('a', 'b', 'c', 'd', 'e')

  source1$.pipe(startWith('ready', 'go')).subscribe(v => console.log(v))
}

const Race: FC = () => {
  return (
    <Wrapper title='startWith'>
      <p>在某个流之前先吐出一些其它值</p>
      <Button secondary onClick={tryStartWith}>
        race
      </Button>
    </Wrapper>
  )
}

export default Race

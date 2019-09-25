import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button } from 'semantic-ui-react'

// concat 属于实例方法
import { interval, of } from 'rxjs'
import { map, concatAll, concatMap } from 'rxjs/operators'

const tryConcatAll = () => {
  // 每秒都会生成一个新的 observable
  interval(1000).pipe(map(val => of(val + 10)))

  // 通过 concatAll 将这些新生成的 observable 合并
  interval(1000).pipe(
    map(val => of(val + 10)),
    concatAll(),
  )

  // map 和 concatAll 的组合可以用 concatMap 代替
  // concatMap 属于「转换操作符」
  interval(1000).pipe(concatMap(val => of(val + 10)))
}

const ConcatAll: FC = () => {
  return (
    <Wrapper title='concatAll'>
      <Button secondary onClick={tryConcatAll}>
        tryConcatAll
      </Button>
    </Wrapper>
  )
}

export default ConcatAll

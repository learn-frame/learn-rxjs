import React, { FC } from 'react'
import Wrapper from 'components/Commons/Wrapper'
import { Button, Divider } from 'semantic-ui-react'

import { interval, combineLatest, of } from 'rxjs'

const tryCombineLatest = () => {
  const source1$ = interval(500)
  const source2$ = interval(1000)

  combineLatest(source1$, source2$)
    .pipe()
    .subscribe(console.log)
}

const oneSyncAndOneAsync = () => {
  const source1$ = of(1, 2, 3)
  const source2$ = interval(1000)

  combineLatest(source1$, source2$)
    .pipe()
    .subscribe(console.log)
}

const twoSync = () => {
  const source1$ = of(1, 2, 3)
  const source2$ = of('a', 'b', 'c')

  combineLatest(source1$, source2$)
    .pipe()
    .subscribe(console.log)
}

const callAFun = () => {
  const source1$ = of<number>(1, 2, 3)
  const source2$ = of<string>('a', 'b', 'c')
  const project = (a: number, b: string) => `${a} and ${b}`

  combineLatest(source1$, source2$, project)
    .pipe()
    .subscribe(console.log)
}

const CombineLatest: FC = () => {
  return (
    <Wrapper title='combineLatest'>
      <p>combineLatest 会监听两个流，只要一个流有数据产生，就会吐出</p>
      <p>不同于 zip，zip 需要等待两个流同时都有数据</p>
      <p>
        而 combineLatest，如果 sourceA$ 某一时刻产生数据，sourceB$
        没有产生，那就会使用 sourceB$ “最新的旧数据”，除非 sourceB$
        从来都没产生过数据
      </p>
      <Button secondary onClick={tryCombineLatest}>
        两个异步流 combineLatest
      </Button>
      <p>1s [1, 0]</p>
      <p>1.5s [2, 1]</p>
      <p>
        2s [3, 0] [3, 1] ---
        注意时两个流都产生了数据，因此会吐出两个数组：第一个是 sourceA$
        产生新值时，第二个是 sourceB$ 产生新值时
      </p>
      <p>4s [4, 1]</p>
      <p>5s [5, 1] [5, 2]</p>

      <strong>
        <em>
          直观上，我们应该只需要 [3, 1] 而不需要 [3,
          0]，这个问题可以由实例操作符 withLatestFrom 解决
        </em>
      </strong>

      <Divider />
      <Button secondary onClick={oneSyncAndOneAsync}>
        一个同步 一个异步流
      </Button>
      <p>
        of(1, 2, 3) 和 interval(1000)，combineLatest 会拿到 source1$
        的最后一个值 3，和 source2$ 无限循环
      </p>
      <Divider />
      <p>只会取第一个流的最后一个值，和第二个流的所有值依次匹配</p>
      <Button secondary onClick={twoSync}>
        两个同步流
      </Button>
      <Divider />
      <p>默认吐出的数据是数组，通过第三个函数可以 “塑造” 输出类型</p>
      <Button secondary onClick={callAFun}>
        接受一个函数来定义输出
      </Button>
    </Wrapper>
  )
}

export default CombineLatest

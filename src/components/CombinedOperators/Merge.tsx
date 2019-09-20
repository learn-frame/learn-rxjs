import React, { FC } from 'react'
import Wrapper from 'components/Common/Wrapper'
import { Button } from 'semantic-ui-react'
import { merge, interval, timer, of } from 'rxjs'

const tryMerge1 = () => {
  const source1$ = of(1, 2, 3)
  const source2$ = interval(500)
  // 如果是 cancat，因为 source2$ 是无限的，所以永远不会订阅 source1$
  // 而 merge 则不会
  merge(source2$, source1$)
    .pipe()
    .subscribe(v => console.log(v))
}

const tryMerge2 = () => {
  const source2$ = interval(500)
  const source3$ = timer(500, 1000)

  merge(source2$, source3$)
    .pipe()
    .subscribe(v => console.log(v))
}

const tryMerge3 = () => {
  const source1$ = timer(1000)
  const source2$ = interval(500)
  const source3$ = timer(500, 500)

  // merge 接受一个可选参数 concurrent: number
  // 它可以限制合并流的数量
  // 下面这个例子中，限流数量为2
  // source1$ 在一秒后执行完毕，source2$ 是个无限流
  // 因此只有在一秒后，source3$才可以执行
  merge(source1$, source2$, source3$, 2)
    .pipe()
    .subscribe(v => console.log(v))
}

const Merge: FC = () => {
  return (
    <Wrapper title='merge'>
      <p>
        merge 有静态方法和实例方法，<em>而静态方法已被丢弃</em>
      </p>
      <Button secondary onClick={tryMerge1}>
        与 concat 对比
      </Button>
      <Button secondary onClick={tryMerge2}>
        两个异步流合并
      </Button>
      <Button secondary onClick={tryMerge3}>
        使用 concurrent 参数
      </Button>
    </Wrapper>
  )
}

export default Merge

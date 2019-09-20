import React, { FC } from 'react'
import Wrapper from 'components/Common/Wrapper'
import { Button, Divider } from 'semantic-ui-react'
import { zip, interval, of } from 'rxjs'

const sync = () => {
  const source1$ = of(1, 2, 3)
  const source2$ = of('a', 'b', 'c', 'd')

  zip(source1$, source2$)
    .pipe()
    .subscribe(console.log)
}

const async = () => {
  const source1$ = interval(1000)
  const source2$ = of('a', 'b', 'c', 'd')

  zip(source1$, source2$)
    .pipe()
    .subscribe(console.log, null, () => {
      console.log('完成')
    })
}

const async1 = () => {
  // 这就好比 source1$ 一直等着 source2$
  const source1$ = interval(500)
  const source2$ = interval(1000)

  zip(source1$, source2$)
    .pipe()
    .subscribe(console.log, null, () => {
      console.log('完成')
    })
}

const async2 = () => {
  const source1$ = interval(500)
  const source2$ = interval(1000)
  const source3$ = interval(1500)

  zip(source1$, source2$, source3$)
    .pipe()
    .subscribe(console.log, null, () => {
      console.log('完成')
    })
}

const Zip: FC = () => {
  return (
    <Wrapper title='zip'>
      <p>zip 是拉链，要求数据一一对应，只要存在不是一一对应的值将会被忽略</p>
      <p>
        <code>of(1, 2, 3)</code> 和 <code>of('a', 'b', 'c', 'd')</code>
        进行 zip，会同步依次生成三个数组：
        <code>[1, 'a'] [2, 'b'] [3, 'c']</code>
        ，此时最后多出来的 'd' 将被忽略
      </p>
      <Button secondary onClick={sync}>
        同步zip
      </Button>

      <Divider />

      <p>
        对于异步流，也会进行一一匹配，
        <code>interval(1000)</code> 和 <code>of('a', 'b', 'c', 'd')</code>
        进行 zip，会每隔一秒吐出一个数组：
        <code>[1, 'a'] [2, 'b'] [3, 'c'] [4, 'd']</code>
        ，因为 source2$ 只有四个数据，因此四秒后 zip 完成
      </p>
      <Button secondary onClick={async}>
        一个同步一个异步
      </Button>
      <Button secondary onClick={async1}>
        两个异步
      </Button>

      <Divider />

      <p>
        对于下面这个例子，
        <code>interval(500)</code> 和 <code>interval(2000)</code>
        ，source1$ 要产生 4 个，才会和 1 个 source2$
        配对，所以当上游快，下游慢时， 将会造成 <strong>数据积压</strong>，
        后面的 <strong>backPressure</strong> 操作符会解决此类问题
      </p>

      <Divider />
      <p>多个流也可以进行zip，同样需要数据配对后才会吐出</p>
      <Button secondary onClick={async2}>
        三个异步流zip
      </Button>
    </Wrapper>
  )
}

export default Zip

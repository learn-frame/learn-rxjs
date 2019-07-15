import React from 'react';
import {
  of,
  Observable,
  range,
  generate,
  interval,
  throwError,
  timer,
  from,
} from 'rxjs';
import {
  map,
  repeat,
  take,
  defaultIfEmpty,
  catchError,
  filter,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

function tryOperator() {
  // of 是将数据包装成 Observable 对象
  // const source$: Observable<any> = of(1, 2, 3);

  // range 用于创建一个线性序列
  // const source$: Observable<any> = range(-1, 20);

  // 也可以是小数 1.5 2.5 3.5 4.5...
  // const source$: Observable<any> = range(1.5, 10);

  // generate 是循环 下面的代码类似于
  // for (let i = 0; i < 3; i += 1) {
  //   return i * i;
  // }
  // const source$: Observable<any> = generate(
  //   0,
  //   x => x < 3,
  //   x => x + 1,
  //   x => x * x,
  // );

  // 把 1 2 3 重复 10 次
  // const source$: Observable<any> = of(1, 2, 3).pipe(repeat(10));

  // interval(1000) 是 1s 吐一次
  // take(3) 是生成 0 1 2 的序列
  // const source$: Observable<any> = interval(1000).pipe(
  //   take(3),
  //   repeat(2),
  // );

  // 直接报错
  // const source$: Observable<any> = throwError(new Error('Fuck bugs'));

  // interval 用于处理异步 对标 setInterval
  // 下面的例子从 0 开始吐，每秒吐出 1 个
  // map 可以做映射 下面的例子是从 1 开始吐
  // const source$: Observable<any> = interval(1000).pipe(map(v => v + 1));

  // timer 用于处理异步 对标 setTimeout
  // 第一个参数可以传数字，代表着毫秒数；也可以传一个 Date 类型的值
  // 当只有一个参数时，行为和 setTimeout 一致
  // const source$: Observable<any> = timer(new Date());
  // const source$: Observable<any> = timer(1000);

  // 它还接受第二个参数
  // 下面的例子是在程序运行 2 秒吐出 0，然后每间隔 1s 之后吐出 1 2 3 4...
  // 因此当两个参数的值相同时，就等同于 interval
  // const source$: Observable<any> = timer(2000, 1000);

  // from 可以类比 Array.from()
  // 可以接收数组 类数组 字符串等等，先进行迭代，再将每个元素变成 Observable 对象
  // 参数必须是部署了 Symbol.iterator，因此普通对象不行
  // const source$: Observable<any> = from('leo'); // l e o

  // ajax 不必多说 还有一个 fromFetch 可以一起食用
  // const source$: Observable<any> = ajax(
  //   'https://api.github.com/users?per_page=5',
  // ).pipe(
  //   map(res => res.response),
  //   catchError(error => {
  //     console.log('error: ', error);
  //     return of(error);
  //   }),
  // );

  // 一个综合的例子
  const source$: Observable<any> = interval(1000).pipe(
    // 先获取一个序列 0 1 2 3 ... 9
    take(10),
    // 再将该序列映射成 1 2 3 ... 10
    map(v => v + 1),
    // 接着筛选中其中的偶数
    filter(v => v % 2 === 0),
    // 然后给这些偶数平方
    map(v => v * v),
  );
  source$.subscribe(v => console.log(v));
}

const Synchronize: React.FC = () => {
  tryOperator();
  return <section className='synchronize'>同步数据流</section>;
};

export default Synchronize;

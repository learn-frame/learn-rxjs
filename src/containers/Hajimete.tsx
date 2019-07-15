import React from 'react';

import { fromEvent, Observable, Subscriber } from 'rxjs';
import { scan, throttleTime, map, take } from 'rxjs/operators';

import Button from '@material-ui/core/Button';

// RxJS is a library for composing asynchronous and event-based programs by using observable sequences.
// RxJS是 一个 通过使用可观察序列 来组合 异步和基于事件的程序 的库.
class Hajimete extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.firstRxJS();
    this.onObservable();
  }

  public firstRxJS() {
    const button = document.querySelector('.button');
    fromEvent(button as any, 'click')
      .pipe(
        // 只能点击两次 (该函数只能被调用两次)
        take(2),
        // 任务管道化
        // 先通过节流，在进行 count 的自增
        throttleTime(1000),
        // 在点击的同时获取 e.clientY
        map(e => (e as any).clientY),
        // 变量初始化不会暴在外部，保持纯净性
        scan((count, clientX) => count + clientX, 0),
      )
      // 最后返回订阅结果
      .subscribe(count => console.log(`我为长者+${count}s`));
  }

  public onObservable() {
    let count = 0;
    const observable = new Observable((subscriber: Subscriber<any>) => {
      try {
        subscriber.next(++count);
        subscriber.next(++count);
        const timer = setInterval(() => {
          subscriber.next(++count);
          // clearInterval(timer);
          // subscriber.complete();
        }, 1000);
        return function unsubscribe() {
          clearInterval(timer);
        };
      } catch (e) {
        subscriber.error('Something wrong...');
      }
    });

    console.log('just before subscribe'); // 1
    const subscription = observable.subscribe({
      next(x) {
        // 2 同时打印出值 1 和 2
        // 4 1s后打印出 3
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        // 4 1s后打印
        console.log('done');
      },
    });
    console.log('just after subscribe'); // 3
    subscription.unsubscribe();
  }

  public render() {
    return (
      <section className='layouts'>
        <Button variant='contained' color='primary' className='button'>
          Hello, RxJS!
        </Button>
      </section>
    );
  }
}

export default Hajimete;

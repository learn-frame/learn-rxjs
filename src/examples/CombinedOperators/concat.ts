// concat 属于静态方法
import { concat, timer } from 'rxjs'
import { map } from 'rxjs/operators'

const source1$ = timer(1000)
const source2$ = timer(2000)

const source$ = concat(source2$, source1$).pipe(map((item, key) => '$' + key))

source$.subscribe(v => console.log(v))

// <svg width="684" height="63" style="display: block; font-size: 14px; font-family: Arial, sans-serif; dominant-baseline: central; text-anchor: middle; cursor: default; user-select: none;"><g transform="translate(0, 11)"><!-- react-empty: 10 --><g transform="translate(21, 0)"><line x1="0" y1="26" x2="653" y2="26" stroke-width="2" stroke="rgba(0, 0, 0, 0.2)" style="shape-rendering: crispedges;"></line><line x1="0" y1="26" x2="392.5836" y2="26" stroke-width="2" stroke="#000000" style="shape-rendering: crispedges;"></line><path transform="translate(653, 21)" d="M0 0 L10 5 L0 10 z" fill="rgba(0, 0, 0, 0.2)" style="transition: fill 0.2s ease-in-out 0s;"></path><line x1="392.5836" y1="3.5" x2="392.5836" y2="48.5" stroke-width="2" stroke="#000000" style="opacity: 1; transition: opacity 0.5s ease-in-out 0s;"></line><g><g style="transform: translate(261.461px, 26px) scale(1); transition: transform 0.5s ease-in-out 0s;"><circle cx="0" cy="0" r="15" stroke-width="2" stroke="#000000" fill="#ffffff"></circle><text x="0" y="0" style="fill: rgb(0, 0, 0); dominant-baseline: central;">$0</text></g><g style="transform: translate(392.453px, 26px) scale(1); transition: transform 0.5s ease-in-out 0s;"><circle cx="0" cy="0" r="15" stroke-width="2" stroke="#000000" fill="#ffffff"></circle><text x="0" y="0" style="fill: rgb(0, 0, 0); dominant-baseline: central;">$1</text></g></g><!-- react-empty: 17 --></g></g><g style="text-anchor: start; dominant-baseline: text-before-edge;"></g></svg>

# @datastructures-js/queue

[![npm](https://img.shields.io/npm/v/@datastructures-js/queue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/queue.svg)](https://www.npmjs.com/packages/@datastructures-js/queue) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)

A performant queue implementation in javascript.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [Queue.fromArray](#queuefromarray)
  * [enqueue (push)](#enqueue-push)
  * [front](#front)
  * [back](#back)
  * [dequeue (pop)](#dequeue-pop)
  * [isEmpty](#isEmpty)
  * [size](#size)
  * [clone](#clone)
  * [toArray](#toarray)
  * [clear](#clear)
* [Build](#build)
* [License](#license)

## Install

```sh
npm install --save @datastructures-js/queue
```

### require

```js
const { Queue } = require('@datastructures-js/queue');
```

### import

```js
import { Queue } from '@datastructures-js/queue';
```

## API

### constructor

##### JS
```js
// empty queue
const queue = new Queue();

// from an array
const queue = new Queue([1, 2, 3]);
```

##### TS
```js
// empty queue
const queue = new Queue<number>();

// from an array
const queue = new Queue<number>([1, 2, 3]);
```

### Queue.fromArray

##### JS
```js
// empty queue
const queue = Queue.fromArray([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Queue.fromArray(list);

// If the list should not be mutated, use a copy of it.
const queue = Queue.fromArray(list.slice());
```

##### TS
```js
// empty queue
const queue = Queue.fromArray<number>([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Queue.fromArray<number>(list);
```

### enqueue (push)
adds an element to the back of the queue.

```js
queue.enqueue(10).enqueue(20); // or queue.push(123)
```

### front
peeks on the front element of the queue.

```js
console.log(queue.front()); // 10
```

### back
peeks on the back element in the queue.

```js
console.log(queue.back()); // 20
```

### dequeue (pop)
removes and returns the front element of the queue in O(1) runtime.

```js
console.log(queue.dequeue()); // 10 // or queue.pop()
console.log(queue.front()); // 20
```

Dequeuing all elements takes <i>O(n)</i> instead of <i>O(n<sup>2</sup>)</i> when using shift/unshift with arrays.

<b>Explanation</b> by <a href="https://github.com/alexypdu">@alexypdu</a>:<br/>

Internally, when half the elements have been dequeued, we will resize the dynamic array using `Array.slice()` which runs in $O(n)$. Since dequeuing all $n$ elements will resize the array $\log_2n$ times, the complexity is $$1 + 2 + 4 + \cdots + 2^{\log_2 n - 1} = 2 ^ {(\log_2 n - 1) + 1} - 1 = n - 1 = O(n)$$ Hence the overall complexity of dequeuing all elements is $O(n + n) = O(n)$, and the amortized complexity of `dequeue()` is thus $O(1)$.

<b>benchmark:</b>

dequeuing 1 million elements in Node v14

<table>
 <tr><td>Queue.dequeue</td><td>Array.shift</td></tr>
  <tr><td>~27 ms</td><td>~4 mins 31 secs</td></tr>
</table>

### isEmpty
checks if the queue is empty.

```js
console.log(queue.isEmpty()); // false
```

### size
returns the number of elements in the queue.

```js
console.log(queue.size()); // 1
```

### clone
creates a shallow copy of the queue.

```js
const queue = Queue.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  queue.clone();

clone.dequeue();

console.log(queue.front()); // { id: 2 }
console.log(clone.front()); // { id: 4 }
```

### toArray 
returns a copy of the remaining elements as an array.

```js
queue.enqueue(4).enqueue(2);
console.log(queue.toArray()); // [20, 4, 2]
```

### clear
clears all elements from the queue.

```js
queue.clear();
queue.size(); // 0
```

### Build

```sh
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/queue/blob/master/LICENSE)

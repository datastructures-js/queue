# @datastructures-js/queue

[![build:?](https://travis-ci.org/datastructures-js/queue.svg?branch=master)](https://travis-ci.org/datastructures-js/queue) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/queue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/queue.svg)](https://www.npmjs.com/packages/@datastructures-js/queue) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)

A performant queue implementation in javascript.

# Table of Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [Construction](#construction)
  * [.enqueue(element)](#enqueueelement)
  * [.front()](#front)
  * [.back()](#back)
  * [.dequeue()](#dequeue)
  * [.isEmpty()](#isEmpty)
  * [.size()](#size)
  * [.clone()](#clone)
  * [.toArray()](#toarray)
  * [.clear()](#clear)
* [Build](#build)
* [License](#license)

## Install

```sh
npm install --save @datastructures-js/queue
```

## require

```js
const Queue = require('@datastructures-js/queue');
```

## import

```js
import Queue from '@datastructures-js/queue';
```

## API

### Construction

#### using "new"

```js
// empty queue
const queue = new Queue();

// from an array
const queue = new Queue([1, 2, 3]);
```

#### using ".fromArray"

```js
// empty queue
const queue = Queue.fromArray([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Queue.fromArray(list);

// If the list should not be mutated, use a copy of it.
const queue = Queue.fromArray(list.slice());
```

### .enqueue(element)
adds an element at the back of the queue.

<table>
  <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>element</td><td>any</td></tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
queue.enqueue(10);
queue.enqueue(20);
```

### .front()
peeks on the front element of the queue.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>any</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
console.log(queue.front()); // 10
```

### .back()
peeks on the back element in the queue.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>any</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
console.log(queue.back()); // 20
```

### .dequeue()
dequeue the front element in the queue. It does not use *.shift()* to dequeue an element. Instead, it uses a pointer to get the front element and only remove elements when reaching half size of the queue.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>any</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(n*log(n))</td>
 </tr>
</table>

#### Example

```js
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
```

Dequeuing all elements takes <i>O(n\*log(n))</i> instead of <i>O(n<sup>2</sup>)</i> if using shift(). 

benchmark:

<table>
 <tr><td colspan="2">dequeuing <b>1 million elements</b> in Node v12</td></tr>
 <tr><td><b>.dequeue()</b></td><td><b>.shift()</b></td></tr>
  <tr><td>~ 40 ms</td><td>~ 3 minutes</td></tr>
</table>

### .isEmpty()
checks if the queue is empty.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>boolean</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
console.log(queue.isEmpty()); // false
```

### .size()
returns the number of elements in the queue.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>number</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
console.log(queue.size()); // 1
```

### .clone() 
creates a shallow copy of the queue.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>Queue</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(n)</td>
 </tr>
</table>

#### Example

```js
const queue = Queue.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  queue.clone();

clone.dequeue();

console.log(queue.front()); // { id: 2 }
console.log(clone.front()); // { id: 4 }
```

### .toArray() 
returns a copy of the remaining elements as an array.

<table>
 <tr>
  <th>return</th>
 </tr>
 <tr>
  <td>array</td>
 </tr>
</table>

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(n)</td>
 </tr>
</table>

#### Example

```js
queue.enqueue(4);
queue.enqueue(2);
console.log(queue.toArray()); // [20, 4, 2]
```

### .clear()
clears all elements from the queue.

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

#### Example

```js
queue.clear();
queue.size(); // 0
```

### Build
lint + tests

```sh
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/queue/blob/master/LICENSE)

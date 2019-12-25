# @datastructures-js/queue

[![build:?](https://travis-ci.org/datastructures-js/queue.svg?branch=master)](https://travis-ci.org/datastructures-js/queue) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/queue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/queue.svg)](https://www.npmjs.com/packages/@datastructures-js/queue) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)

A highly performant queue implementation in javascript.

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Creating a Queue](#create-a-queue)
  * [.enqueue(element)](#enqueueelement)
  * [.front()](#front)
  * [.back()](#back)
  * [.dequeue()](#dequeue)
  * [.isEmpty()](#isEmpty)
  * [.size()](#size)
  * [.toArray()](#toarray)
  * [.clear()](#clear)
 * [Build](#build)

## Install

```sh
npm install --save @datastructures-js/queue
```

## API

### require

```js
const Queue = require('@datastructures-js/queue');
```

### import

```js
import Queue from '@datastructures-js/queue';
```

### Create a Queue

```js
const queue = new Queue();
```

### .enqueue(element)
adds an element at the back of the queue.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   element: {object}
  </td>
 </tr>
</table>

```js
queue.enqueue(10);
queue.enqueue(20);
```

### .front()
peeks on the front element of the queue.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {object}
  </td>
 </tr>
</table>

```js
console.log(queue.front()); // 10
```

### .back()
peeks on the back element in the queue.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {object}
  </td>
 </tr>
</table>

```js
console.log(queue.back()); // 20
```

### .dequeue()
dequeue the front element in the queue. It does not use *.shift()* to dequeue an element. Instead, it uses an offset to get the front element and only remove elements when reaching half size of the queue.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1) / O(n/2^k)</td>
  <td>
   {object}
  </td>
 </tr>
</table>

Dequeuing all elements takes <b>O(n\*log(n))</b> instead of <b>O(n^2)</b> if using shift(). 

```js
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
```

### .isEmpty()
checks if the queue is empty.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {boolean}
  </td>
 </tr>
</table>

```js
console.log(queue.isEmpty()); // false
```

### .size()
returns the number of elements in the queue.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {number}
  </td>
 </tr>
</table>

```js
console.log(queue.size()); // 1
```

### .toArray() 
returns the remaining elements as an array.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {array}
  </td>
 </tr>
</table>

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

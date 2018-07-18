# @datastrucures-js/queue

[![build:?](https://travis-ci.org/datastructures-js/queue.svg?branch=master)](https://travis-ci.org/datastructures-js/queue) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/queue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/queue.svg)](https://www.npmjs.com/packages/@datastructures-js/queue) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)

elements data type: any type.

## Usage
```js
const queueFn = require('@datastructures-js/queue');
const queue = queueFn();
```

## API

**.enqueue(element)** 

adds an element to the back of the queue.
```javascript
queue.enqueue(10);
queue.enqueue(20);
```
**.front()** 

returns the front element in queue.
```javascript
console.log(queue.front()); // 10
```
**.back()** 

returns the back element in the queue.
```javascript
console.log(queue.back()); // 20
```

**.dequeue()** 

dequeues an element from the queue.
```javascript
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
console.log(queue.isEmpty()); // false
```
**.length()** 

returns the length of the queue
```javascript
console.log(queue.length()); // 1
```

**.toArray()** 

converts the queue to an array with front starting at 0
```javascript
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(2);
console.log(queue.toArray()); // [1, 4, 2]
```

**.clear()** 

clears the queue
```javascript
queue.clear();
queue.length(); // 0
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/queue/blob/master/LICENSE)

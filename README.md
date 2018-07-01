# Queue

[![build:?](https://travis-ci.org/eyas-ranjous/datatructures-js/queue.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datatructures-js/queue) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/queue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/queue.svg)](https://www.npmjs.com/packages/@datastructures-js/queue) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/queue)

elements data type: any type.

## Usage
```js
const queueFactory = require('@datastructures-js/queue');
```

## Queue
FIFO Queue

### API
**object creation**
```javascript
const queue = queueFactory.queue();

// OR

const queue = queueFactory.q();
```

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

## Priority Queue

### API

**object creation**
```javascript
const priorityQueue = queueFactory.priorityQueue();

// OR

const priorityQueue = queueFactory.pq();
```

**.enqueue(element, priority)** 

adds an element with priority (number) to the back of the queue.
```javascript
priorityQueue.enqueue('patient 1', 2); // lower priority
priorityQueue.enqueue('patient 2', 1); // higher priority
```

**.front()** 

returns the front element in queue.
```javascript
console.log(priorityQueue.front()); // patient 1
```

**.back()** 

returns the back element in the queue.
```javascript
console.log(priorityQueue.back()); // patient 3
```

**.dequeue()** 

dequeues the highest priority element from the queue.
```javascript
console.log(priorityQueue.dequeue()); // patient 2
console.log(priorityQueue.front()); // patient 1
```

**.isEmpty()** 

checks if the queue is empty.
```javascript
console.log(priorityQueue.isEmpty()); // false
```

**.length()** 

returns the length of the queue.
```javascript
console.log(priorityQueue.length()); // 1
```

**.toArray()** 

converts the queue to an array from highest prority element to lowest
```javascript
priorityQueue.enqueue('patient 3', 5);
priorityQueue.enqueue('patient 4', 1);
console.log(priorityQueue.toArray()); // ['patient 4', 'patient 1', 'patient 5']
```

**.clear()** 

clears the queue
```javascript
priorityQueue.clear();
console.log(priorityQueue.length()); // 0
```
## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/datastructures-js/queue/blob/master/LICENSE)

/**
 * datastructures-js/queue
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

const queue = require('./lib/queue');
const priorityQueue = require('./lib/priorityQueue');

// queue factory
module.exports = {
  queue,
  q: queue,
  priorityQueue,
  pq: priorityQueue
};

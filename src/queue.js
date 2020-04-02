/**
 * @datastructures-js/queue
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class Queue
 * implements FIFO principle.
 */
class Queue {
  /**
   * @constructor
   * @param {array} elements
   */
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
    this.offset = 0;
  }

  /**
   * @public
   * adds an element at the back of the queue
   * @param {object} element
   */
  enqueue(element) {
    this.elements.push(element);
  }

  /**
   * @public
   * dequeue the front element of the queue
   * @returns {object}
   */
  dequeue() {
    if (this.size() === 0) return null;

    const first = this.front();
    this.offset += 1;

    if (this.offset * 2 < this.elements.length) return first;

    // only remove dequeued elements when reaching half size
    // to decrease latency of shifting elements
    this.elements = this.elements.slice(this.offset);
    this.offset = 0;
    return first;
  }

  /**
   * @public
   * peeks on the front element of the queue
   * @returns {object}
   */
  front() {
    return this.size() > 0 ? this.elements[this.offset] : null;
  }

  /**
   * peeks on the back element of the queue
   * @public
   * @returns {object}
   */
  back() {
    return this.size() > 0 ? this.elements[this.elements.length - 1] : null;
  }

  /**
   * @public
   * returns the number of elements in the queue
   * @returns {number}
   */
  size() {
    return this.elements.length - this.offset;
  }

  /**
   * @public
   * checks if the queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * @public
   * returns the remaining elements in the queue as an array
   * @returns {array}
   */
  toArray() {
    return this.elements.slice(this.offset);
  }

  /**
   * @public
   * clears all elements from the queue
   */
  clear() {
    this.elements = [];
    this.offset = 0;
  }

  /**
   * @public
   * creates a shallow copy of the queue
   * @return {Queue}
   */
  clone() {
    return new Queue(this.elements.slice(this.offset));
  }

  /**
   * @public
   * @static
   * creates a queue from an existing array
   * @param {array} elements
   * @return {Queue}
   */
  static fromArray(elements) {
    return new Queue(elements);
  }
}

module.exports = Queue;

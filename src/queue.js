/**
 * datastructures-js/queue
 * @copyright 2019 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class Queue
 */
class Queue {
  /**
   * @param {array} element
   * @public
   */
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
    this.offset = 0;
  }

  /**
   * add an element at the back of the queue
   * @param {object} element
   * @public
   */
  enqueue(element) {
    this.elements.push(element);
  }

  /**
   * dequeue the front element in the queue
   * @public
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
   * peeks on the front element of the queue
   * @public
   * @returns {object}
   */
  front() {
    return this.size() > 0 ? this.elements[this.offset] : null;
  }

  /**
   * peeks on the back element in the queue
   * @public
   * @returns {object}
   */
  back() {
    return this.size() > 0 ? this.elements[this.elements.length - 1] : null;
  }

  /**
   * returns the number of elements in the queue
   * @public
   * @returns {number}
   */
  size() {
    return this.elements.length - this.offset;
  }

  /**
   * checks if the queue is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * returns the remaining elements as an array
   * @public
   * @returns {array}
   */
  toArray() {
    return this.elements.slice(this.offset);
  }

  /**
   * clears all elements from the queue
   * @public
   */
  clear() {
    this.elements = [];
    this.offset = 0;
  }

  /**
   * creates a shallow clone from the queue
   * @public
   * @return {Queue}
   */
  clone() {
    return new Queue(this.elements.slice(this.offset));
  }

  /**
   * creates a queue from an existing array
   * @public
   * @static
   * @param {array} elements
   * @return {Queue}
   */
  static fromArray(elements) {
    return new Queue(elements);
  }
}

module.exports = Queue;

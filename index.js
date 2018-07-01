/**
 * datastructures-js/queue/Queue
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */
const queue = () => {
  let elements = [];
  let offset = 0;

  /**
   * @returns {number}
   */
  const length = () => elements.length - offset;

  /**
   * @returns {boolean}
   */
  const isEmpty = () => length() === 0;

  /**
   * @returns {array}
   */
  const toArray = () => elements.slice(offset);

  /**
   * clears the queue
   */
  const clear = () => {
    offset = 0;
    elements = [];
  };

  /**
   * @returns {object}
   */
  const front = () => {
    if (!isEmpty()) {
      return elements[offset];
    }
    return null;
  };

  /**
   * @returns {object}
   */
  const back = () => {
    if (!isEmpty()) {
      return elements[elements.length - 1];
    }
    return null;
  };

  /**
   * @param {object} element
   */
  const enqueue = el => elements.push(el);

  /**
   * only remove dequeued elements when reaching half size
   * to improve performance for high frequency data
   * @returns {object}
   */
  const dequeue = () => {
    if (!isEmpty()) {
      const first = front();
      offset += 1;
      if (offset * 2 >= elements.length) {
        elements = elements.slice(offset);
        offset = 0;
      }
      return first;
    }
    return null;
  };

  // queue API
  return {
    length,
    isEmpty,
    toArray,
    clear,
    front,
    back,
    enqueue,
    dequeue
  };
};

module.exports = queue;

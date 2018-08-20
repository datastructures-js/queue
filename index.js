/**
 * datastructures-js/queue
 * @copyright 2018 Eyas Ranjous <https://github.com/eyas-ranjous>
 * @license MIT
 */
const queue = () => {
  let elements = [];
  let offset = 0;

  const length = () => elements.length - offset;

  const isEmpty = () => length() === 0;

  const toArray = () => elements.slice(offset);

  const clear = () => {
    offset = 0;
    elements = [];
  };

  const front = () => {
    if (!isEmpty()) {
      return elements[offset];
    }
    return null;
  };

  const back = () => {
    if (!isEmpty()) {
      return elements[elements.length - 1];
    }
    return null;
  };

  const enqueue = el => elements.push(el);

  // only remove dequeued elements when reaching half size
  // to improve performance for high frequency data
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

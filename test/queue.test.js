const { expect } = require('chai');
const Queue = require('../src/queue');

describe('Queue unit tests', () => {
  const queue = new Queue();

  describe('.enqueue(element)', () => {
    it('should enqueue 3 elements to the stack', () => {
      queue.enqueue(1);
      queue.enqueue(8);
      queue.enqueue(45);
    });
  });

  describe('.size()', () => {
    it('should have size of 3', () => {
      expect(queue.size()).to.equal(3);
    });
  });

  describe('.front()', () => {
    it('should peek the front element', () => {
      expect(queue.front()).to.equal(1);
    });
  });

  describe('.back()', () => {
    it('should peek the back element', () => {
      expect(queue.back()).to.equal(45);
    });
  });

  describe('.isEmpty()', () => {
    it('should not be empty', () => {
      expect(queue.isEmpty()).to.equal(false);
    });
  });

  describe('toArray()', () => {
    it('should convert the queue into an array', () => {
      expect(queue.toArray()).to.deep.equal([1, 8, 45]);
    });
  });

  describe('dequeue()', () => {
    it('should dequeue all elements', () => {
      expect(queue.dequeue()).to.be.equal(1);
      expect(queue.dequeue()).to.be.equal(8);
    });
  });

  describe('.clear()', () => {
    it('should clear the queue', () => {
      queue.clear();
      expect(queue.dequeue()).to.be.equal(null);
      expect(queue.front()).to.be.equal(null);
      expect(queue.back()).to.be.equal(null);
      expect(queue.size()).to.be.equal(0);
      expect(queue.isEmpty()).to.be.equal(true);
    });
  });
});

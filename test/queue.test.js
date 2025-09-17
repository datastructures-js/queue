const { expect } = require('chai');
const { Queue } = require('../src/queue');

describe('Queue unit tests', () => {
  let queue;

  describe('new Queue()', () => {
    it('creates an empty queue', () => {
      queue = new Queue();
    });
  });

  describe('Queue.fromArray(list)', () => {
    it('creates a queue from an existing array', () => {
      const q = Queue.fromArray([1, 2, 3]);
      expect(q.front()).to.equal(1);
      expect(q.size()).to.equal(3);
    });
  });

  describe('.enqueue(element)', () => {
    it('should enqueue 3 elements to the stack', () => {
      queue.enqueue(1);
      queue.enqueue(8);
      queue.push(45);
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

  describe('.clone()', () => {
    it('clone a queue', () => {
      queue.dequeue();

      const clone = queue.clone();
      clone.dequeue();

      expect(clone.front()).to.equal(45);
      expect(clone.size()).to.equal(1);
      expect(queue.front(8));
      expect(queue.size()).to.equal(2);
    });
  });

  describe('toArray()', () => {
    it('should convert the queue into an array', () => {
      expect(queue.toArray()).to.deep.equal([8, 45]);
    });
  });

  describe('dequeue()', () => {
    it('should dequeue all elements', () => {
      expect(queue.dequeue()).to.be.equal(8);
      expect(queue.pop()).to.be.equal(45);
    });
  });

  describe('.clear()', () => {
    it('should clear the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.clear();
      expect(queue.dequeue()).to.be.equal(null);
      expect(queue.front()).to.be.equal(null);
      expect(queue.back()).to.be.equal(null);
      expect(queue.size()).to.be.equal(0);
      expect(queue.isEmpty()).to.be.equal(true);
    });
  });

  describe('.contains(elementOrCallback)', () => {
    beforeEach(() => {
      queue = new Queue([1, 2, 3, 'hello', { id: 1, name: 'John' }]);
    });

    describe('with element value', () => {
      it('should return true for existing primitive elements', () => {
        expect(queue.contains(1)).to.equal(true);
        expect(queue.contains(2)).to.equal(true);
        expect(queue.contains(3)).to.equal(true);
        expect(queue.contains('hello')).to.equal(true);
      });

      it('should return false for non-existing primitive elements', () => {
        expect(queue.contains(4)).to.equal(false);
        expect(queue.contains('world')).to.equal(false);
        expect(queue.contains(0)).to.equal(false);
      });

      it('should return false for objects with different references', () => {
        expect(queue.contains({ id: 1, name: 'John' })).to.equal(false);
      });

      it('should return false for empty queue', () => {
        const emptyQueue = new Queue();
        expect(emptyQueue.contains(1)).to.equal(false);
      });
    });

    describe('with callback function', () => {
      beforeEach(() => {
        queue = new Queue([
          { id: 1, name: 'John', age: 25 },
          { id: 2, name: 'Jane', age: 30 },
          { id: 3, name: 'Bob', age: 35 }
        ]);
      });

      it('should find object by id using callback', () => {
        expect(queue.contains((item) => item.id === 2)).to.equal(true);
        expect(queue.contains((item) => item.id === 5)).to.equal(false);
      });

      it('should find object by name using callback', () => {
        expect(queue.contains((item) => item.name === 'Jane')).to.equal(true);
        expect(queue.contains((item) => item.name === 'Alice')).to.equal(false);
      });

      it('should find object by age using callback', () => {
        expect(queue.contains((item) => item.age > 30)).to.equal(true);
        expect(queue.contains((item) => item.age > 40)).to.equal(false);
      });

      it('should work with complex conditions', () => {
        const complexCondition = (item) => item.age >= 30
          && item.name.startsWith('J');
        expect(queue.contains(complexCondition)).to.equal(true);

        const falseCondition = (item) => item.age < 25
          && item.name === 'John';
        expect(queue.contains(falseCondition)).to.equal(false);
      });

      it('should work with primitive elements using callback', () => {
        const primitiveQueue = new Queue([1, 2, 3, 4, 5]);
        expect(primitiveQueue.contains((item) => item > 3)).to.equal(true);
        expect(primitiveQueue.contains((item) => item > 10)).to.equal(false);
        const evenCheck = (item) => item % 2 === 0;
        expect(primitiveQueue.contains(evenCheck)).to.equal(true);
      });

      it('should return false for empty queue with callback', () => {
        const emptyQueue = new Queue();
        expect(emptyQueue.contains((item) => item.id === 1)).to.equal(false);
      });
    });
  });
});

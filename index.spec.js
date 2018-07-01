const { expect } = require('chai');
const queue = require('./index');

describe('queue tests', () => {
  const q = queue();

  describe('.enqueue(element)', () =>
    it('should enqueue 3 elements to the stack', () => {
      q.enqueue(1);
      q.enqueue(8);
      q.enqueue(45);
    }));

  describe('.length()', () =>
    it('should have length of 3', () =>
      expect(q.length()).to.equal(3)));

  describe('.front()', () =>
    it('should peek the front element', () =>
      expect(q.front()).to.equal(1)));

  describe('.back()', () =>
    it('should peek the back element', () =>
      expect(q.back()).to.equal(45)));

  describe('.isEmpty()', () =>
    it('should not be empty', () =>
      expect(q.isEmpty()).to.equal(false)));

  describe('toArray()', () =>
    it('should convert the queue into an array', () =>
      expect(q.toArray()).to.deep.equal([1, 8, 45])));

  describe('dequeue()', () =>
    it('should dequeue all elements', () => {
      expect(q.dequeue()).to.be.equal(1);
      expect(q.dequeue()).to.be.equal(8);
    }));

  describe('.clear()', () =>
    it('should clear the queue', () => {
      q.clear();
      expect(q.dequeue()).to.be.equal(null);
      expect(q.front()).to.be.equal(null);
      expect(q.back()).to.be.equal(null);
      expect(q.length()).to.be.equal(0);
      expect(q.isEmpty()).to.be.equal(true);
    }));
});

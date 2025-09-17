export class Queue<T> {
  constructor(elements?: T[]);
  isEmpty(): boolean;
  size(): number;
  enqueue(element: T): Queue<T>;
  push(element: T): Queue<T>;
  dequeue(): T | null;
  pop(): T | null;
  front(): T | null;
  back(): T | null;
  contains(elementOrCallback: T | ((element: T) => boolean)): boolean;
  toArray(): T[];
  clear(): void;
  clone(): Queue<T>;
  static fromArray<T>(elements: T[]): Queue<T>;
}

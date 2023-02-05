interface IQueue<T> {
  enqueue(item: T): T[];
  dequeue(): T[];
  peek(): T;
  isFull(): boolean;
  isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
  private list = [];

  constructor() {
    this.list = [];
  }

  enqueue(item: T) {
    this.list.push(item);
    return this.list;
  }

  dequeue() {
    this.list.shift();
    return this.list;
  }
}

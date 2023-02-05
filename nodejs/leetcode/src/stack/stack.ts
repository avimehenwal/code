interface IStack<T> {
  push(item: T): T[];
  pop(): T[];
  peek(): T | undefined;
  size(): number;
}

export class Stack<T> implements IStack<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  push(item: T) {
    if (!this.list) {
      this.list = [item];
    } else {
      this.list.push(item);
    }
    console.log(this.list);
    return this.list;
  }

  pop() {
    if ((this.list?.length as number) > 0) {
      this.list?.pop();
    } else {
      console.log("list already empty");
      this.list?.pop();
    }
    return this.list;
  }

  popAll() {}

  peek() {}

  size() {}
}

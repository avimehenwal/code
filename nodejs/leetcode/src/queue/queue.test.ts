import { describe, expect, test } from "@jest/globals";
import { Queue } from "./queue";

describe("Queue", () => {
  test("push a number to Queue", () => {
    expect(new Queue<number>().enqueue(1)).toStrictEqual([1]);
  });

  test("dequeue from a non-empty Queue", () => {
    const filledQueue = new Queue<number>();
    filledQueue.enqueue(1);
    filledQueue.enqueue(2);
    filledQueue.enqueue(3);
    expect(filledQueue.dequeue()).toStrictEqual([2, 3]);
  });

  test("try to dequeue a empty Queue", () => {
    const emptyQueue = new Queue<number>();
    expect(emptyQueue.dequeue()).toStrictEqual([]);
  });
});

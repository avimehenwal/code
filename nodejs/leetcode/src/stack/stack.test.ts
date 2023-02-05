import { describe, expect, test } from "@jest/globals";
import { Stack } from "./stack";

describe("Stack", () => {
  test("push a number to stack", () => {
    expect(new Stack<number>().push(1)).toStrictEqual([1]);
  });

  test("pop from a non-empty stack", () => {
    const filledStack = new Stack<number>();
    filledStack.push(1);
    filledStack.push(2);
    filledStack.push(3);
    expect(filledStack.pop()).toStrictEqual([1, 2]);
  });

  test("pop from a empty stack", () => {
    const emptyStack = new Stack<number>();
    expect(emptyStack.pop()).toStrictEqual([]);
  });
});

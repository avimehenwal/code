import { describe, expect, test } from "@jest/globals";
import { isValidBST } from "./validate-bst";

describe("isValidBST", () => {
  test("a", () => {
    expect(isValidBST([1, 2, 3])).toBe(3);
  });
});

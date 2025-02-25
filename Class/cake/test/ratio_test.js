import { Ratio } from "../src/ratio.js";
import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("test toString()", () => {
  it("testing with 1/2, output should be `1/2`", () => {
    const expected = `1/2`;
    const actual = new Ratio(1, 2).toString();
    assertEquals(actual, expected);
  });

  it("testing with 2/3, output should be `2/3`", () => {
    const expected = `2/3`;
    const actual = new Ratio(2, 3).toString();
    assertEquals(actual, expected);
  });
});

describe("test simplify()", () => {
  it("testing with 2/3, output should be `2/3`", () => {
    const expected = `2/3`;
    const actual = new Ratio(2, 3).simplify().toString();
    assertEquals(actual, expected);
  });
});

describe("test add(ratio)", () => {
  it("testing with 2/3 + 1/2 = 7/6", () => {
    const expected = "7/6";
    const actual = new Ratio(2, 3).add(new Ratio(1, 2)).toString();
    assertEquals(actual, expected);
  });

  it("testing with 1/3 + 1/2 = 5/6", () => {
    const expected = "5/6";
    const actual = new Ratio(2, 3).add(new Ratio(1, 2)).toString();
    assertEquals(actual, expected);
  });
});

describe("test sub(ratio)", () => {
  it("testing with 2/3 - 1/2 = 1/6", () => {
    const expected = "1/6";
    const actual = new Ratio(2, 3).sub(new Ratio(1, 2)).toString();
    assertEquals(actual, expected);
  });

  it("testing with 2/4 - 1/5 = 6/20", () => {
    const expected = "6/20";
    const actual = new Ratio(2, 4).sub(new Ratio(1, 5)).toString();
    assertEquals(actual, expected);
  });
});

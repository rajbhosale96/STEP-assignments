import { isStrictlyDescending } from "../src/02_strictly_descending.js";
import { assert, assertFalse } from "jsr:@std/assert";

Deno.test("Test for strictly descending", () => {
  assert(isStrictlyDescending([5, 4, 2, 1]));
});

Deno.test("Test for not strictly descending", () => {
  assertFalse(isStrictlyDescending([5, 4, 4, 1]));
});

Deno.test("Test for strictly descending when array is empty", () => {
  assert(isStrictlyDescending([]));
});

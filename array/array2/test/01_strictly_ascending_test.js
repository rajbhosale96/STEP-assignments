import { isStrictlyAscending } from "../src/01_strictly_ascending.js";
import { assert, assertFalse } from "jsr:@std/assert";

Deno.test("Test for strictly ascending", () => {
  assert(isStrictlyAscending([1, 3, 4, 5, 16]));
});

Deno.test("Test for not strictly ascending", () => {
  assertFalse(isStrictlyAscending([1, 3, 2, 4]));
});

Deno.test("Test for strictly ascending when array is empty", () => {
  assert(isStrictlyAscending([]));
});

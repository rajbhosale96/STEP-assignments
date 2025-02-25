import { extractDigits } from "../src/03_extract_digits.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("Test for extracting positive number", () => {
  assertEquals(extractDigits(123), [1, 2, 3]);
});

Deno.test("Test for extracting negative number", () => {
  assertEquals(extractDigits(-123), [1, 2, 3]);
});

Deno.test("Test for extracting floating number", () => {
  assertEquals(extractDigits(12.3), [1, 2, 3]);
});


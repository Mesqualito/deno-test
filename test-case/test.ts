// import { test } from "https://deno.land/std/testing/mod.ts";
import {assertEquals} from "https://deno.land/std/testing/asserts.ts";
import {factorial} from "./factorial.ts";

Deno.test(function testFactorial(): void {
    assertEquals(factorial(5), 120);
});

Deno.test(function t2(): void {
    assertEquals("world", "worlds");
});

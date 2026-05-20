import { describe, expect, it } from "vitest";

import { createCounter } from "./counter";

describe("createCounter", () => {
  it("starts from zero by default", () => {
    const counter = createCounter();

    expect(counter.value()).toBe(0);
  });

  it("increments from a custom initial value", () => {
    const counter = createCounter(5);

    counter.increment();

    expect(counter.value()).toBe(6);
  });
});


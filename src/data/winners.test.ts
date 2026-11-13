import { describe, it, expect } from "vitest";
import { winners } from "./winners";
import { awardCategories } from "./awardCategories";

describe("winners data", () => {
  it("has unique ids and every winner belongs to a known category", () => {
    expect(winners.length).toBeGreaterThan(0);
    expect(new Set(winners.map((w) => w.id)).size).toBe(winners.length);
    const names = new Set(awardCategories.map((c) => c.name));
    for (const w of winners) expect(names.has(w.category)).toBe(true);
  });
  it("has 9 categories, each with at least one winner", () => {
    expect(awardCategories).toHaveLength(9);
    for (const c of awardCategories) expect(winners.some((w) => w.category === c.name)).toBe(true);
  });
});

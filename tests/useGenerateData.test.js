import { describe, expect, it } from "vitest";
import { useGenerateData } from "@/composables/useGenerateData.js";

describe('generateData', () => {
  it("should generate multiple items", () => {
      const items = useGenerateData().generateMultipleItems(10);
      expect(items.length).toBe(10);
  })

  it("should generate unique items", () => {
      const items = useGenerateData().generateMultipleItems(10);
      expect(uniqueItemsCount(items)).toBe(10);
  })

  function uniqueItemsCount(items) {
      return new Set([...(items.map(item => JSON.stringify(item)))]).size;
  }
});

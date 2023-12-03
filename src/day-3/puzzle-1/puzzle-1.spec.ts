import { Day3Puzzle1 } from "./puzzle-1";
import { input as adventOfCodeInput } from "./input";

describe("Day 3 Puzzle 1", () => {
  describe("Horizontal", () => {
    it("should return 34", () => {
      const payload = "34%..";
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(34);
    });

    it("should return 34", () => {
      const payload = "..34%";
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(34);
    });

    it("should return 34", () => {
      const payload = "..#34";
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(34);
    });

    it("should return 0", () => {
      const payload = "..34.";
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(0);
    });

    it("should return 0", () => {
      const payload = "...34";
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(0);
    });
  });

  describe("Diagonals", () => {
    it("should return 12", () => {
      const payload = `..3@
      ..9.`;
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(12);
    });

    it("should return 12", () => {
      const payload = `..3.
      ..9#`;
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(12);
    });

    it("should return 12", () => {
      const payload = `..3.
      .?9.`;
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(12);
    });
  });

  describe("Verticals", () => {
    it("should return 190", () => {
      const payload = `.100.
      .90#.`;
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(190);
    });

    it("should return 10010", () => {
      const payload = `.10000.
      .10@...`;
      const result = Day3Puzzle1(payload);
      expect(result).toEqual(10010);
    });
  });

  describe("with advent of code input", () => {
    it("log result for advent of code", () => {
      const result = Day3Puzzle1(adventOfCodeInput);
      console.log(`Day 2 Puzzle 1 : ${result}`);
    });
  });
});

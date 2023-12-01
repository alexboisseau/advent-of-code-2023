import { Day1Puzzle1 } from "./puzzle-1";

describe("Day 1 Puzzle 1", () => {
  describe("With 1 digit by line", () => {
    const input = `1abc
      treb7uchet`;

    it("should return 88", () => {
      const result = Day1Puzzle1(input);
      expect(result).toBe(88);
    });
  });

  describe("With 2 digit by line", () => {
    const input = `1abc2
      pqr3stu8vwx
      a1bcde5f
      treb7uchet1`;

    it("should return 136", () => {
      const result = Day1Puzzle1(input);
      expect(result).toBe(136);
    });
  });

  describe("With more than 2 digits by line", () => {
    const input = `1abc2
      pqr3stu8vwx
      a1b2c3d4e5f
      treb7uchet`;

    it("should return 142", () => {
      const result = Day1Puzzle1(input);
      expect(result).toBe(142);
    });
  });
});

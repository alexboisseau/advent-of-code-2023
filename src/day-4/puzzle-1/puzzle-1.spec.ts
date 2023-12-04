import { Day4Puzzle1 } from "./puzzle-1";
import { input as adventOfCodeInput } from "../shared/input";

describe("Day 4 Puzzle 1", () => {
  describe("One game", () => {
    it("should return 1 with one winning number", () => {
      const input = "Card   1: 42  3 | 42";
      const result = Day4Puzzle1(input);

      expect(result).toEqual(1);
    });

    it("should return 2 with two winning numbers", () => {
      const input = "Card   1: 42  3 | 42  3";
      const result = Day4Puzzle1(input);

      expect(result).toEqual(2);
    });

    it("should return 4 with three winning numbers", () => {
      const input = "Card   1: 42  3 10 5 | 42  3  5  8";
      const result = Day4Puzzle1(input);

      expect(result).toEqual(4);
    });
  });

  describe("Two games", () => {
    it("should return 2 with two games with one winning number", () => {
      const input = `Card   1: 42  3 | 42
      Card   1: 42  3 | 42`;
      const result = Day4Puzzle1(input);

      expect(result).toEqual(2);
    });

    it("should return 4 with two games with two winning numbers", () => {
      const input = `Card   1: 42  3 | 42  3
      Card   1: 42  3 | 42  3`;
      const result = Day4Puzzle1(input);

      expect(result).toEqual(4);
    });

    it("should return 6 with two games, one with with two winning numbers and ne with with three winning numbers", () => {
      const input = `Card   1: 42  3 | 42  3
      Card   1: 42  3 10 | 42  3 10`;
      const result = Day4Puzzle1(input);

      expect(result).toEqual(6);
    });
  });

  describe("with advent of code input", () => {
    it("log result for advent of code", () => {
      const result = Day4Puzzle1(adventOfCodeInput);
      console.log(`Day 4 Puzzle 1 : ${result}`);
    });
  });
});

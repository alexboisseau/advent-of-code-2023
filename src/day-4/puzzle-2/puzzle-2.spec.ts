import { Day4Puzzle2 } from "./puzzle-2";
import { input as adventOfCodeInput } from "./input";

describe("Day 4 Puzzle 2", () => {
  describe("Two games, one with one winning number and the second with zero winning number", () => {
    it("should return 3", () => {
      const input = `Card   1: 42  3 | 42
      Card   1: 42  3 | 43`;
      const result = Day4Puzzle2(input);

      expect(result).toEqual(3);
    });
  });

  describe("Three games, one with two winning numbers, the second with one winning number and the third with zero winning", () => {
    it("should return 7", () => {
      const input = `Card   1: 42  3 | 42  3
      Card   2: 42  3 | 42
      Card   3: 42  3 | 43`;
      const result = Day4Puzzle2(input);

      expect(result).toEqual(7);
    });
  });

  describe("With advent of code example", () => {
    it("should return 30", () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
      Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
      Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
      Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
      const result = Day4Puzzle2(input);

      expect(result).toEqual(30);
    });
  });

  describe("with advent of code input", () => {
    it("log result for advent of code", () => {
      const result = Day4Puzzle2(adventOfCodeInput);
      console.log(`Day 4 Puzzle 1 : ${result}`);
    });
  });
});

import { Day2Puzzle2 } from "./puzzle-2";
import { input as adventOfCodeInput } from "./input";

describe("Day 2 Puzzle 2", () => {
  describe("With one game and one set", () => {
    const input = `Game 1: 4 red, 1 green, 4 blue;`;

    it("should return 16", () => {
      const result = Day2Puzzle2(input);
      expect(result).toEqual(16);
    });
  });

  describe("With one game and two sets", () => {
    const input = `Game 1: 4 red, 1 green, 6 blue; 2 red, 2 green, 3 blue;`;

    it("should return 48", () => {
      const result = Day2Puzzle2(input);
      expect(result).toEqual(48);
    });
  });

  describe("With one game and two sets", () => {
    const input = `Game 1: 4 red, 1 green, 6 blue; 2 red, 2 green, 3 blue;`;

    it("should return 48", () => {
      const result = Day2Puzzle2(input);
      expect(result).toEqual(48);
    });
  });

  describe("with advent of code input", () => {
    it("log result for advent of code", () => {
      const result = Day2Puzzle2(adventOfCodeInput);
      console.log(`Day 2 Puzzle 2 : ${result}`);
    });
  });
});

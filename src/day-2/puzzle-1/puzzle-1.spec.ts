import { Day2Puzzle1 } from "./puzzle-1";
import { input as adventOfCodeInput } from "./input";

describe("Day 2 Puzzle 1", () => {
  describe("With one possible line", () => {
    const input = `Game 1: 4 red, 1 green, 4 blue;`;

    it("should return 1", () => {
      const result = Day2Puzzle1(input);
      expect(result).toEqual(1);
    });
  });

  describe("With two possible lines", () => {
    const input = `Game 1: 4 red, 1 green, 4 blue
    Game 2: 4 red, 1 green, 4 blue`;

    it("should return 3", () => {
      const result = Day2Puzzle1(input);
      expect(result).toEqual(3);
    });
  });

  describe("With one possible line and one impossible", () => {
    const input = `Game 1: 4 red, 1 green, 4 blue
    Game 2: 20 red, 20 green, 20 blue`;

    it("should return 1", () => {
      const result = Day2Puzzle1(input);
      expect(result).toEqual(1);
    });
  });

  describe("With multiple sets, two possible lines and one impossible", () => {
    const input = `Game 1: 4 red, 1 green, 4 blue; 9 red, 10 green, 1 blue
    Game 2: 20 red, 20 green, 20 blue; 4 red, 1 green
    Game 3: 4 red, 1 green, 4 blue; 9 red, 10 green, 1 blue `;

    it("should return 4", () => {
      const result = Day2Puzzle1(input);
      expect(result).toEqual(4);
    });
  });

  describe("with advent of code input", () => {
    it("log result for advent of code", () => {
      const result = Day2Puzzle1(adventOfCodeInput);
      console.log(`Day 2 Puzzle 1 : ${result}`);
    });
  });
});

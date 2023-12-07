import { Day6Puzzle1, computeWaysToBeatRecord } from "./puzzle-2";
import { input as adventOfCodeInput } from "./input";

describe("Day 6 Puzzle 1", () => {
  it("should return 288 with advent of code example", () => {
    const input = `Time:      7  15   30
    Distance:  9  40  200`;

    const result = Day6Puzzle1(input);
    expect(result).toEqual(71503);
  });

  it("with advent of code input", () => {
    const result = Day6Puzzle1(adventOfCodeInput);
    console.log(result);
  });
});

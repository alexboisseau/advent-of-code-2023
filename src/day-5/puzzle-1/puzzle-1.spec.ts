import { Day5Puzzle1 } from "./puzzle-1";
import { input as adventOfCodeInput } from "./input";

const inputForValidRanges = `
seeds: 79

seed-to-soil map:
50 79 48

soil-to-fertilizer map:
0 50 37

fertilizer-to-water map:
49 0 8

water-to-light map:
88 49 7

light-to-temperature map:
45 88 23

temperature-to-humidity map:
0 45 1

humidity-to-location map:
56 0 4`;

const inputForUnvalidRanges = `
seeds: 79

seed-to-soil map:
50 79 48

soil-to-fertilizer map:
0 50 37

fertilizer-to-water map:
49 0 8

water-to-light map:
88 49 7

light-to-temperature map:
45 90 23

temperature-to-humidity map:
0 50 1

humidity-to-location map:
56 84 5`;

describe("Day 5 Puzzle 1", () => {
  describe("With valid ranges", () => {
    it("should return 56", () => {
      const result = Day5Puzzle1(inputForValidRanges);

      expect(result).toEqual(56);
    });
  });

  describe("With unvalid ranges", () => {
    it("should return 60", () => {
      const result = Day5Puzzle1(inputForUnvalidRanges);

      expect(result).toEqual(60);
    });
  });

  describe("With advent of code input", () => {
    it("should console log the result for advent of code", () => {
      const result = Day5Puzzle1(adventOfCodeInput);
      console.log(result);
    });
  });
});

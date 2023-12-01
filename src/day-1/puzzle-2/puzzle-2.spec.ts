import { Day1Puzzle2 } from "./puzzle-2";

describe("Day 1 Puzzle 2", () => {
  describe("With 1 digit by line", () => {
    const input = `1abc
      treb7uchet`;

    it("should return 88", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(88);
    });
  });

  describe("With 2 digit by line", () => {
    const input = `1abc2
      pqr3stu8vwx
      a1bcde5f
      treb7uchet1`;

    it("should return 136", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(136);
    });
  });

  describe("With more than 2 digits by line", () => {
    const input = `1abc2
      pqr3stu8vwx
      a1b2c3d4e5f
      treb7uchet`;

    it("should return 142", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(142);
    });
  });

  describe("With 1 digit spelled out with letters", () => {
    const input = `twofsjffr
      snluthree`;

    it("should return 55", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(55);
    });
  });

  describe("With 2 digit spelled out with letters", () => {
    const input = `twofsjffrthree
      djqninedjqfivedm`;

    it("should return 118", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(118);
    });
  });

  describe("With more than 2 digit spelled out with letters", () => {
    const input = `twofsjffrthreedkjirsixkep
      dlqdeonecnlrfour`;

    it("should return 40", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(40);
    });
  });

  describe("With digits spelled out with letters and digits", () => {
    const input = `twofsjffrthreedkjir6kep
      djq9djqfivedm
      dhtwonethreedejone`;

    it("should return 142", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(142);
    });
  });

  describe("Example from advent of code", () => {
    const input = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`;

    it("should return 281", () => {
      const result = Day1Puzzle2(input);
      expect(result).toBe(281);
    });
  });
});

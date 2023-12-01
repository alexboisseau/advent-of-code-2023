import { input } from "./input";

type LineNumber = {
  value: string;
  index: number;
};

const spelledOutDigits = [
  {
    spelledOut: "one",
    value: "1",
  },
  {
    spelledOut: "two",
    value: "2",
  },
  {
    spelledOut: "three",
    value: "3",
  },
  {
    spelledOut: "four",
    value: "4",
  },
  {
    spelledOut: "five",
    value: "5",
  },
  {
    spelledOut: "six",
    value: "6",
  },
  {
    spelledOut: "seven",
    value: "7",
  },
  {
    spelledOut: "eight",
    value: "8",
  },
  {
    spelledOut: "nine",
    value: "9",
  },
];

export function Day1Puzzle2(input: string): number {
  const numbers: number[] = [];

  input.split("\n").forEach((line) => {
    numbers.push(parseLine(line));
  });

  return numbers.reduce((a, b) => a + b, 0);
}

function parseLine(line: string): number {
  const lineNumbers: Array<LineNumber> = [];

  lineNumbers.push(...getDigitsFromLine(line));
  lineNumbers.push(...getSpelledOutDigitsFromLine(line));
  lineNumbers.sort((a, b) => a.index - b.index);

  if (lineNumbers.length === 0) return 0;
  if (lineNumbers.length === 1)
    return parseInt(lineNumbers[0].value + lineNumbers[0].value);
  return parseInt(
    lineNumbers[0].value + lineNumbers[lineNumbers.length - 1].value
  );
}

function getDigitsFromLine(line: string): Array<LineNumber> {
  return line
    .split("")
    .flatMap((char, index) =>
      isNaN(parseInt(char)) ? [] : [{ value: char, index: index }]
    );
}

function getSpelledOutDigitsFromLine(line: string): Array<LineNumber> {
  const result: Array<LineNumber> = [];

  spelledOutDigits.forEach((item) => {
    getIndexOfAllSubstrings(line, item.spelledOut).forEach((index) => {
      if (!result.some((i) => i.index === index)) {
        result.push({
          value: item.value,
          index: index,
        });
      }
    });
  });

  return result;
}

function getIndexOfAllSubstrings(str: string, subStr: string): number[] {
  const indexes = [];
  let index = -1;

  while ((index = str.indexOf(subStr, index + 1)) !== -1) {
    indexes.push(index);
  }

  return indexes;
}

console.log("Day 1 Puzzle 2 : ", Day1Puzzle2(input));

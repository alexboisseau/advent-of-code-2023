import { input } from "./input";

export function Day1Puzzle1(input: string): number {
  const numbers: number[] = [];

  input.split("\n").forEach((line) => {
    numbers.push(parseLine(line));
  });

  return numbers.reduce((a, b) => a + b, 0);
}

function parseLine(line: string): number {
  const numbersChars = line.split("").filter((char) => !isNaN(parseInt(char)));

  if (numbersChars.length === 0) return 0;
  if (numbersChars.length === 1)
    return parseInt(numbersChars[0] + numbersChars[0]);
  return parseInt(numbersChars[0] + numbersChars[numbersChars.length - 1]);
}

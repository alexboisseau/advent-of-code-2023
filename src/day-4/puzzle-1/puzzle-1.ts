import { ScratchCardInformation } from "../types";

export function Day4Puzzle1(input: string): number {
  const scratchCardsInformation = getScratchCardsInformation(input);
  console.log(scratchCardsInformation);

  const scores = scratchCardsInformation.map((i) => {
    return getScratchCardScore(i);
  });

  return scores.reduce((acc, s) => acc + s, 0);
}

function getScratchCardsInformation(input: string): ScratchCardInformation[] {
  const information: ScratchCardInformation[] = [];

  input.split("\n").forEach((line) => {
    const numbers = line.split(":")[1];

    const winningNumbers = numbers
      .split("|")[0]
      .split(" ")
      .filter((v) => v !== "")
      .map((v) => parseInt(v));

    const ourNumbers = numbers
      .split("|")[1]
      .split(" ")
      .filter((v) => v !== "")
      .map((v) => parseInt(v));

    information.push([winningNumbers, ourNumbers]);
  });

  return information;
}

function getScratchCardScore(scratchCardInformation: ScratchCardInformation) {
  const [winningNumbers, ourNumbers] = scratchCardInformation;

  return ourNumbers.reduce(
    (acc, n) => {
      if (winningNumbers.includes(n)) {
        if (acc.counter === 0) acc.score = 1;
        else acc.score = acc.score * 2;

        acc.counter = acc.counter + 1;
      }

      return acc;
    },
    { score: 0, counter: 0 }
  ).score;
}

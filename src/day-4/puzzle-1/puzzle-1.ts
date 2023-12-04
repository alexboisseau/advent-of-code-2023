import { ScratchCardInformation } from "../types";
import { getScratchCards } from "../utils/get-scratch-cards";

export function Day4Puzzle1(input: string): number {
  const scratchCards = getScratchCards(input);
  const scratchCardsInformation = scratchCards.map((i) => i.information);
  const scores = scratchCardsInformation.map((i) => {
    return getScratchCardScore(i);
  });

  return scores.reduce((acc, i) => acc + i, 0);
}

function getScratchCardScore(scratchCardInformation: ScratchCardInformation) {
  const [winningNumbers, ourNumbers] = scratchCardInformation;

  return ourNumbers.reduce(
    (acc, i) => {
      if (winningNumbers.includes(i)) {
        if (acc.counter === 0) acc.score = 1;
        else acc.score = acc.score * 2;

        acc.counter = acc.counter + 1;
      }

      return acc;
    },
    { score: 0, counter: 0 }
  ).score;
}

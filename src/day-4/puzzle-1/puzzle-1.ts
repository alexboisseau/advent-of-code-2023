import { ScratchCardInformation } from "../types";
import { getScratchCards } from "../utils/get-scratch-cards";

export function Day4Puzzle1(input: string): number {
  const scratchCards = getScratchCards(input);
  const scratchCardsInformation = scratchCards.map(
    (scratchCard) => scratchCard.information
  );
  const scores = scratchCardsInformation.map((information) => {
    return computeScratchCardScore(information);
  });

  return scores.reduce((acc, score) => acc + score, 0);
}

function computeScratchCardScore(
  scratchCardInformation: ScratchCardInformation
) {
  const [winningNumbers, ourNumbers] = scratchCardInformation;

  return ourNumbers.reduce(
    (acc, ourNumber) => {
      if (!winningNumbers.includes(ourNumber)) return acc;

      return {
        score: acc.counter === 0 ? 1 : acc.score * 2,
        counter: acc.counter + 1,
      };
    },
    { score: 0, counter: 0 }
  ).score;
}

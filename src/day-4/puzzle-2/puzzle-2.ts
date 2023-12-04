import { ScratchCard, ScratchCardInformation } from "../types";
import { getScratchCards } from "../utils/get-scratch-cards";

export function Day4Puzzle2(input: string): number {
  const scratchCards = getScratchCards(input);
  const instances = computeScratchCardsInstances(scratchCards);
  return instances;
}

function computeScratchCardsInstances(scratchCards: ScratchCard[]): number {
  scratchCards.forEach((scratchCard, i) => {
    const score = computeMatchingNumbers(scratchCard.information);
    updateInstances(scratchCards, i, score, scratchCard.instances);
  });

  return scratchCards.reduce(
    (acc, scratchCard) => acc + scratchCard.instances,
    0
  );
}

function updateInstances(
  scratchCards: ScratchCard[],
  currentIndex: number,
  score: number,
  instances: number
): void {
  for (let z = 1; z <= score; z++) {
    const index = z + currentIndex;

    if (scratchCards[index]) {
      scratchCards[index].instances += instances;
    }
  }
}

function computeMatchingNumbers(
  scratchCardInformation: ScratchCardInformation
) {
  const [winningNumbers, ourNumbers] = scratchCardInformation;

  return ourNumbers.reduce(
    (acc, ourNumber) => (winningNumbers.includes(ourNumber) ? acc + 1 : acc),
    0
  );
}

import { ScratchCard, ScratchCardInformation } from "../types";
import { getScratchCards } from "../utils/get-scratch-cards";

export function Day4Puzzle2(input: string): number {
  const scratchCards = getScratchCards(input);
  const instances = computeScratchCardsInstances(scratchCards);
  return instances;
}

function computeScratchCardsInstances(scratchCards: ScratchCard[]): number {
  scratchCards.forEach((scratchCard, i) => {
    const score = getMatchingNumbers(scratchCard.information); // 1

    for (let z = 1; z <= score; z++) {
      const index = z + i;

      if (scratchCards[index]) {
        scratchCards[index].instances += scratchCard.instances;
      }
    }
  });

  return scratchCards.reduce((acc, s) => {
    return acc + s.instances;
  }, 0);
}

function getMatchingNumbers(scratchCardInformation: ScratchCardInformation) {
  const [winningNumbers, ourNumbers] = scratchCardInformation;

  return ourNumbers.reduce((acc, n) => {
    if (winningNumbers.includes(n)) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

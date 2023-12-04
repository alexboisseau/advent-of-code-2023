/*
[
  {
    information: [number[], number[]];
    instances: 1
  }
]
*/
type ScratchCardInformation = [number[], number[]];

type ScratchCard = {
  information: ScratchCardInformation;
  instances: number;
};

export function Day4Puzzle2(input: string): number {
  const scratchCards = getScratchCards(input);
  const instances = computeScratchCardsInstances(scratchCards);
  return instances;
}

function getScratchCards(input: string): ScratchCard[] {
  const scratchCards: ScratchCard[] = [];

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

    scratchCards.push({
      instances: 1,
      information: [winningNumbers, ourNumbers],
    });
  });

  return scratchCards;
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

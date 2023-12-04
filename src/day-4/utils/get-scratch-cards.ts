import { ScratchCard } from "../types";

export function getScratchCards(input: string): ScratchCard[] {
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

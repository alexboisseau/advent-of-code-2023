import { getGamesFromInput } from "../utils/get-games-from-input";
import { Game } from "../types";
import { COLORS } from "../constants/colors";

export function Day2Puzzle2(input: string): number {
  const games = getGamesFromInput(input);
  const gamesSetsPower = getGamesSetsPower(games);

  return gamesSetsPower;
}

function getGamesSetsPower(games: Game[]): number {
  return games
    .map((game) => getSumOfGameSetsPower(game))
    .reduce((acc, game) => acc + game, 0);
}

function getSumOfGameSetsPower(game: Game): number {
  const maxValues = COLORS.reduce((max, color) => {
    max[color] = game.sets.reduce(
      (maxValue, set) => Math.max(set[color], maxValue),
      0
    );
    return max;
  }, {} as Record<(typeof COLORS)[number], number>);

  return maxValues.red * maxValues.green * maxValues.blue;
}

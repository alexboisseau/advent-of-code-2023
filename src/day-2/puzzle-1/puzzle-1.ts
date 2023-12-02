import { getGamesFromInput } from "../utils/get-games-from-input";

// only 12 red cubes, 13 green cubes, and 14 blue cubes
const POSSIBLE_LINE_CONDITIONS = {
  red: 12,
  green: 13,
  blue: 14,
};

export function Day2Puzzle1(input: string): number {
  const games = getGamesFromInput(input);
  const possibleGames = games.filter((game) => {
    return game.sets.every(
      (set) =>
        set.red <= POSSIBLE_LINE_CONDITIONS.red &&
        set.green <= POSSIBLE_LINE_CONDITIONS.green &&
        set.blue <= POSSIBLE_LINE_CONDITIONS.blue
    );
  });

  return possibleGames.reduce((acc, game) => acc + game.id, 0);
}

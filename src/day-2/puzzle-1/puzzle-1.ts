const COLORS = ["red", "green", "blue"] as const;

// only 12 red cubes, 13 green cubes, and 14 blue cubes
const POSSIBLE_LINE_CONDITIONS = {
  red: 12,
  green: 13,
  blue: 14,
};

type Set = Record<(typeof COLORS)[number], number>;

type Game = {
  id: number;
  sets: Array<Set>;
};

export function Day2Puzzle1(input: string) {
  const cleanedInput = input.replaceAll(" ", "");
  const gameLines = getGameLines(cleanedInput);
  const games = getGames(gameLines);
  const possibleGames = getPossibleGames(games);

  return possibleGames.reduce((acc, game) => {
    return acc + game.id;
  }, 0);
}

function getGameLines(input: string) {
  return input.split("\n");
}

function getGames(lines: string[]): Game[] {
  return lines.map((line) => {
    const splittedLine = line.split(":");
    const id = parseInt(splittedLine[0].slice(4));

    const sets = splittedLine[1].split(";").map((setStr) => {
      const splittedSet = setStr.split(",");

      const set: Set = {
        red: 0,
        green: 0,
        blue: 0,
      };

      COLORS.forEach((color) => {
        if (splittedSet.some((i) => i.includes(color))) {
          const str = splittedSet.find((i) => i.includes(color)) as string;
          const value = parseInt(str.slice(0, str.indexOf(color)));
          set[color] = value;
        }
      });

      return set;
    });

    return {
      id,
      sets,
    };
  });
}

function getPossibleGames(games: Game[]) {
  return games.filter((g) => {
    return g.sets.every(
      (s) =>
        s.red <= POSSIBLE_LINE_CONDITIONS.red &&
        s.green <= POSSIBLE_LINE_CONDITIONS.green &&
        s.blue <= POSSIBLE_LINE_CONDITIONS.blue
    );
  });
}

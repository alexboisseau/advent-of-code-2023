const COLORS = ["red", "green", "blue"] as const;

type Set = Record<(typeof COLORS)[number], number>;

type Game = {
  id: number;
  sets: Array<Set>;
};

export function Day2Puzzle2(input: string) {
  const cleanedInput = input.replaceAll(" ", "");
  const gameLines = getGameLines(cleanedInput);
  const games = getGames(gameLines);
  const gamesSetsPower = getGamesSetsPower(games);

  return gamesSetsPower;
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

function getGamesSetsPower(games: Game[]): number {
  return games.reduce((acc, game) => {
    return getSumOfGameSetsPower(game) + acc;
  }, 0);
}

function getSumOfGameSetsPower(game: Game): number {
  let red = 0;
  let green = 0;
  let blue = 0;

  game.sets.forEach((set) => {
    red = set.red > red ? set.red : red;
    green = set.green > green ? set.green : green;
    blue = set.blue > blue ? set.blue : blue;
  });

  return red * green * blue;
}

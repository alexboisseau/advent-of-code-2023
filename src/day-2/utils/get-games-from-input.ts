import { COLORS } from "../constants/colors";
import { Game, Set } from "../types";

function getGameLines(input: string) {
  return input.split("\n");
}

export function getGamesFromInput(input: string): Game[] {
  const cleanedInput = input.replaceAll(" ", "");
  const lines = getGameLines(cleanedInput);

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

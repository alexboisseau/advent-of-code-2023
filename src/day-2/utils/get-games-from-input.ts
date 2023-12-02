import { COLORS } from "../constants/colors";
import { Game, Set } from "../types";

function getLines(input: string) {
  return input.split("\n");
}

export function getGamesFromInput(input: string): Game[] {
  const cleanedInput = input.replace(/ /g, "");
  const lines = getLines(cleanedInput);

  return lines.map((line) => {
    const splittedLine = line.split(":");

    return {
      id: getGameIdFromGameStr(splittedLine[0]),
      sets: getSetsFromSetsStrs(splittedLine[1].split(";")),
    };
  });
}

function getGameIdFromGameStr(gameStr: string): number {
  return parseInt(gameStr.slice(4));
}

function getSetsFromSetsStrs(setsStr: string[]): Set[] {
  return setsStr.map((setStr) => getSetFromSetStr(setStr));
}

function createSet(): Set {
  return {
    red: 0,
    green: 0,
    blue: 0,
  };
}

function getSetFromSetStr(setStr: string): Set {
  const splittedSet = setStr.split(",");

  return COLORS.reduce((set, color) => {
    const str = splittedSet.find((i) => i.includes(color));

    return {
      ...set,
      ...(str && { [color]: parseInt(str.slice(0, str.indexOf(color))) }),
    };
  }, createSet());
}

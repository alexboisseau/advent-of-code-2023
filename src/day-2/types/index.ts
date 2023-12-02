import { COLORS } from "../constants/colors";

export type Set = Record<(typeof COLORS)[number], number>;

export type Game = {
  id: number;
  sets: Array<Set>;
};

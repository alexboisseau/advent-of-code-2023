type Race = {
  time: number;
  recordDistance: number;
};

export function Day6Puzzle1(input: string) {
  const race = getRace(input);
  return computeMarginRace(race);
}

function getRace(input: string): Race {
  const timeLine = input.split("\n")[0];
  const recordLine = input.split("\n")[1];

  const timeStr = timeLine.replaceAll(" ", "").split("Time:").pop();
  const recordStr = recordLine.replaceAll(" ", "").split("Distance:").pop();

  if (!timeStr || !recordStr) throw new Error("Invalid input");

  return {
    time: parseInt(timeStr),
    recordDistance: parseInt(recordStr),
  };
}

function computeMarginRace(race: Race): number {
  let minHoldingTimeToBeatRecord: number | null = null;
  let maxHoldingTimeToBeatRecord: number | null = null;

  for (let i = 0; i <= race.time; i++) {
    const restTime = race.time - i;

    if (restTime * i > race.recordDistance) {
      minHoldingTimeToBeatRecord = i;
      break;
    }
  }

  for (let i = race.time; i >= 0; i--) {
    const restTime = race.time - i;

    if (restTime * i > race.recordDistance) {
      maxHoldingTimeToBeatRecord = i;
      break;
    }
  }

  if (!minHoldingTimeToBeatRecord || !maxHoldingTimeToBeatRecord) return 0;
  return maxHoldingTimeToBeatRecord - minHoldingTimeToBeatRecord + 1;
}

export function computeWaysToBeatRecord(race: Race): number {
  let waysToBeatRecord = 0;
  for (let i = 0; i <= race.time; i++) {
    const restTime = race.time - i; // 6

    if (restTime * i > race.recordDistance) waysToBeatRecord++;
  }

  return waysToBeatRecord;
}

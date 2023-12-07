type Race = {
  time: number;
  recordDistance: number;
};

export function Day6Puzzle1(input: string) {
  const races = getRaces(input);
  return computeMarginRaces(races);
}

function getRaces(input: string) {
  const timesLine = input.split("\n")[0];
  const recordsLine = input.split("\n")[1];

  const times = parseLine(timesLine);
  const records = parseLine(recordsLine);

  return times.map((time, index) => ({
    time,
    recordDistance: records[index],
  }));
}

function parseLine(line: string): number[] {
  const numbers: number[] = [];
  let currentNumber: string = "";

  line.split("").forEach((char, index) => {
    const parsedValue = parseInt(char);

    if (!isNaN(parsedValue)) {
      currentNumber += char;
    } else if (currentNumber !== "") {
      numbers.push(parseInt(currentNumber));
      currentNumber = "";
    }

    if (index === line.length - 1 && currentNumber !== "") {
      numbers.push(parseInt(currentNumber));
    }
  });

  return numbers;
}

function computeMarginRaces(races: Race[]): number {
  const waysToBeatRecord: number[] = [];

  races.forEach((race) => {
    const waysToBeatRaceRecord = computeWaysToBeatRecord(race);
    waysToBeatRecord.push(waysToBeatRaceRecord);
  });

  return waysToBeatRecord.reduce((acc, v) => acc * v, 1);
}

export function computeWaysToBeatRecord(race: Race): number {
  let waysToBeatRecord = 0;
  for (let i = 0; i <= race.time; i++) {
    const restTime = race.time - i; // 6

    if (restTime * i > race.recordDistance) waysToBeatRecord++;
  }

  return waysToBeatRecord;
}

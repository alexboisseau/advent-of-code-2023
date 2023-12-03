import { GridPosition } from "../types";

export function Day3Puzzle1(grid: string) {
  const cleanedGrid = grid.replaceAll(" ", "");
  const { numbers, symbols } = getNumbersAndSymbolsPositions(cleanedGrid);
  const validNumbers = getValidNumbers({ numbers, symbols });

  return validNumbers.reduce((acc, n) => n + acc, 0);
}

function getValidNumbers({
  numbers,
  symbols,
}: {
  numbers: Array<GridPosition>;
  symbols: Array<GridPosition>;
}) {
  const validNumbers: Array<number> = [];

  numbers.forEach((n) => {
    for (let index = 0; index < symbols.length; index++) {
      const symbol = symbols[index];

      const isValidNumber =
        isValidOnX({ number: n, symbol }) ||
        isValidOnY({ number: n, symbol }) ||
        isValidOnXY({ number: n, symbol });

      if (isValidNumber) {
        validNumbers.push(parseInt(n.value));
        break;
      }
    }
  });

  return validNumbers;
}

function getNumbersIndexes(number: GridPosition): {
  startIndex: number;
  endIndex: number;
} {
  const startIndex = number.XPosition;
  const endIndex = number.XPosition + number.value.length - 1;

  return {
    startIndex,
    endIndex,
  };
}

function isValidOnX({
  number,
  symbol,
}: {
  number: GridPosition;
  symbol: GridPosition;
}) {
  const { startIndex, endIndex } = getNumbersIndexes(number);

  return (
    symbol.YPosition === number.YPosition &&
    (symbol.XPosition === startIndex - 1 || symbol.XPosition === endIndex + 1)
  );
}

function isValidOnY({
  number,
  symbol,
}: {
  number: GridPosition;
  symbol: GridPosition;
}) {
  const { startIndex, endIndex } = getNumbersIndexes(number);

  return (
    (symbol.YPosition === number.YPosition + 1 ||
      symbol.YPosition === number.YPosition - 1) &&
    symbol.XPosition >= startIndex &&
    symbol.XPosition <= endIndex
  );
}

function isValidOnXY({
  number,
  symbol,
}: {
  number: GridPosition;
  symbol: GridPosition;
}) {
  const { startIndex, endIndex } = getNumbersIndexes(number);

  return (
    ((symbol.YPosition === number.YPosition + 1 ||
      symbol.YPosition === number.YPosition - 1) &&
      symbol.XPosition === startIndex - 1) ||
    symbol.XPosition === endIndex + 1
  );
}

function getNumbersAndSymbolsPositions(grid: string): {
  numbers: Array<GridPosition>;
  symbols: Array<GridPosition>;
} {
  const numbers: Array<GridPosition> = [];
  const symbols: Array<GridPosition> = [];

  grid.split("\n").forEach((line, y) => {
    numbers.push(...getLineNumbersPositions(line, y));
    symbols.push(...getLineSymbolsPositions(line, y));
  });

  return {
    numbers,
    symbols,
  };
}

function getLineNumbersPositions(line: string, YPosition: number) {
  const positions: Array<GridPosition> = [];
  let currentNumber = "";

  line.split("").forEach((char, x) => {
    const parsedValue = parseInt(char);

    if (!isNaN(parsedValue)) {
      currentNumber = currentNumber + parsedValue;
    } else if (currentNumber !== "") {
      positions.push({
        value: currentNumber,
        XPosition: x - currentNumber.length,
        YPosition,
      });

      currentNumber = "";
    }

    if (x === line.length - 1 && currentNumber !== "") {
      positions.push({
        value: currentNumber,
        XPosition: x - currentNumber.length + 1,
        YPosition,
      });
    }
  });

  return positions;
}

function getLineSymbolsPositions(line: string, YPosition: number) {
  const positions: Array<GridPosition> = [];

  line.split("").forEach((char, x) => {
    if (char === ".") return;

    positions.push({
      value: char,
      XPosition: x,
      YPosition,
    });
  });

  return positions;
}

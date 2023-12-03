export function Day3Puzzle1(input: string) {
  const cleanedInput = input.replaceAll(" ", "");
  const { numbers, symbols } = getNumbersAndSymbolsPositions(cleanedInput);

  console.log(numbers, symbols);
  const validNumbers: Array<number> = [];

  numbers.forEach((n) => {
    const startIndex = n.XPosition;
    const endIndex = n.XPosition + n.value.length - 1;

    for (let index = 0; index < symbols.length; index++) {
      const symbol = symbols[index];

      // Horizontals
      if (symbol.YPosition === n.YPosition) {
        if (
          symbol.XPosition === startIndex - 1 ||
          symbol.XPosition === endIndex + 1
        ) {
          validNumbers.push(parseInt(n.value));
          break;
        }
      }

      // Diagonals && Verticals
      if (
        symbol.YPosition === n.YPosition + 1 ||
        symbol.YPosition === n.YPosition - 1
      ) {
        if (
          symbol.XPosition === startIndex - 1 ||
          symbol.XPosition === endIndex + 1
        ) {
          validNumbers.push(parseInt(n.value));
          break;
        }

        if (symbol.XPosition >= startIndex && symbol.XPosition <= endIndex) {
          validNumbers.push(parseInt(n.value));
          break;
        }
      }
    }
  });

  return validNumbers.reduce((acc, n) => n + acc, 0);
}

function getNumbersAndSymbolsPositions(grid: string): {
  numbers: Array<{
    value: string;
    XPosition: number;
    YPosition: number;
  }>;
  symbols: Array<{
    XPosition: number;
    YPosition: number;
  }>;
} {
  const numbers: Array<{
    value: string;
    XPosition: number;
    YPosition: number;
  }> = [];

  const symbols: Array<{
    XPosition: number;
    YPosition: number;
  }> = [];

  const gridLines = grid.split("\n");

  gridLines.forEach((line, y) => {
    let currentNumber = "";
    line.split("").forEach((char, x) => {
      const parsedValue = parseInt(char);
      if (!isNaN(parsedValue)) {
        currentNumber = currentNumber + parsedValue;
      } else {
        if (currentNumber !== "") {
          numbers.push({
            value: currentNumber,
            XPosition: x - currentNumber.length,
            YPosition: y,
          });

          currentNumber = "";
        }

        if (char === ".") return;

        symbols.push({
          XPosition: x,
          YPosition: y,
        });
      }

      if (x === line.length - 1 && currentNumber !== "") {
        numbers.push({
          value: currentNumber,
          XPosition: x - currentNumber.length + 1,
          YPosition: y,
        });
      }
    });
  });

  return {
    numbers,
    symbols,
  };
}

const ALMANAC_SEEDS_TITLE = "seeds: ";

const ALMANAC_CATEGORIES_TITLES = [
  "seed-to-soil map:",
  "soil-to-fertilizer map:",
  "fertilizer-to-water map:",
  "water-to-light map:",
  "light-to-temperature map:",
  "temperature-to-humidity map:",
  "humidity-to-location map:",
] as const;

// DESTINATION RANGE START - SOURCE RANGE START - LENGTH RANGE

export function Day5Puzzle1(input: string) {
  const seeds = getAlmanacSeeds(input);
  const categoriesRanges = getAlmanacCategoriesRanges(input);
  const locations = computeLowestLocation(seeds, categoriesRanges);

  return locations;
}

function getAlmanacSeeds(input: string): number[] {
  const firstLine = input
    .split("\n")
    .filter((i) => i !== "")
    .shift();

  if (!firstLine) return [];

  const numbers = firstLine.slice(ALMANAC_SEEDS_TITLE.length).split(" ");
  return numbers.map((v) => parseInt(v));
}

function getAlmanacCategoriesRanges(input: string) {
  const categories = input
    .split("\n")
    .filter((i) => i !== "")
    .slice(1);

  const categoriesTitleIndex: number[] = [];

  ALMANAC_CATEGORIES_TITLES.forEach((categoryTitle) => {
    categoriesTitleIndex.push(categories.indexOf(categoryTitle));
  });

  const categoriesRanges: Array<Array<[number, number, number]>> = [];

  categoriesTitleIndex.forEach((categoryTitleIndex, index) => {
    const start = categoryTitleIndex + 1;
    const end =
      index === categoriesTitleIndex.length - 1
        ? categories.length - 1
        : categoriesTitleIndex[index + 1] - 1;

    for (let i = start; i <= end; i++) {
      const ranges = categories[i].split(" ").map((v) => parseInt(v)) as [
        number,
        number,
        number
      ];

      if (categoriesRanges[index]) categoriesRanges[index].push(ranges);
      else categoriesRanges[index] = [ranges];
    }
  });

  return categoriesRanges;
}

function computeLowestLocation(
  seeds: number[],
  categoriesRanges: Array<Array<[number, number, number]>>
) {
  const locations: number[] = [];

  seeds.forEach((seed) => {
    let source: number = seed;

    categoriesRanges.forEach((categoryRanges, index) => {
      for (let i = 0; i < categoryRanges.length; i++) {
        const [destinationStartRange, sourceStartRange, rangeLength] =
          categoryRanges[i];

        if (
          sourceStartRange <= source &&
          source <= sourceStartRange + rangeLength
        ) {
          source = destinationStartRange + (source - sourceStartRange);
          break;
        }
      }

      if (index === categoriesRanges.length - 1) {
        locations.push(source);
      }
    });
  });

  return Math.min(...locations);
}

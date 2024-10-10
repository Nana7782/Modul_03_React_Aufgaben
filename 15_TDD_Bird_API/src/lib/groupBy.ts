import type { Bird } from "../data/birds";

type GroupByResult = {
  foodSource: string;
  birds: Bird[];
}[];

export const groupBy = (birds: Bird[], criteria: string): GroupByResult => {
  const groupingItems = birds.map((bird) => bird["foodsources"]).flat();
  const uniqueGroupingItems = [...new Set(groupingItems)];

  const result = uniqueGroupingItems.map((item) => ({
    foodSource: item,

    birds: birds.filter((bird) => bird.foodsources.includes(item)),
  }));

  return result;
};

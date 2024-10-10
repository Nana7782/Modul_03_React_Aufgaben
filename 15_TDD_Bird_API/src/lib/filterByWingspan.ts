import { Bird } from "../data/birds";

export const filterByWingspan = (
  birds: Bird[],
  maxWingspan: number
): Bird[] => {
  return birds.filter((bird) => bird.wingspan_max <= maxWingspan);
};

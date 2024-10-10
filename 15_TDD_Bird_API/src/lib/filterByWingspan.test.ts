import { describe, expect, test } from "vitest";
import { filterByWingspan } from "./filterByWingspan";

const adler = {
  name: "Adler",
  description:
    "Adler sind große, mächtige Raubvögel, die in vielen Regionen der Welt vorkommen. Sie sind bekannt für ihre scharfen Sinne, besonders den Sehsinn, der es ihnen ermöglicht, Beute aus großer Entfernung zu erkennen. Diese Vögel haben starke Flügel und einen ausgeprägten Schnabel, der perfekt zum Fangen und Zerteilen von Beute geeignet ist. Adler sind oft Symbol für Freiheit und Stärke und spielen eine wichtige Rolle in verschiedenen Kulturen.",
  emoji: "🦅",
  wingspan_min: 180,
  wingspan_max: 250,
  weight_min: 3000,
  weight_max: 6000,
  foodsources: ["Fische", "Kleine Säugetiere", "Vögel"],
  habitat: ["Nordamerika", "Europa", "Asien"],
  genus: "Aquila",
  species: "chrysaetos",
};

const dodo = {
  name: "Dodo",
  description:
    "Der Dodo war ein flugunfähiger Vogel, der auf der Insel Mauritius lebte und im 17. Jahrhundert ausstarb. Er war etwa einen Meter groß und hatte ein graubraunes Gefieder. Der Dodo war nicht an Raubtiere angepasst, was zu seinem schnellen Aussterben nach der Ankunft von Menschen und eingeführten Tieren führte. Heute ist der Dodo ein Symbol für vom Menschen verursachtes Artensterben.",
  emoji: "🦤",
  wingspan_min: 0,
  wingspan_max: 0,
  weight_min: 10000,
  weight_max: 21000,
  foodsources: ["Früchte", "Nüsse", "Samen"],
  habitat: ["Mauritius"],
  genus: "Raphus",
  species: "cucullatus",
};

describe("filterByWingspan", () => {
  test("returns all birds if maxWingspan is smaller that all wingspans", () => {
    const result = filterByWingspan([adler], 1000);
    expect(result).toEqual([adler]);
  });
  test("returns all birds with a maxWingspan of 50", () => {
    const result = filterByWingspan([adler], 50);
    expect(result).toEqual([]);

    const result2 = filterByWingspan([dodo], 50);
    expect(result2).toEqual([dodo]);
  });
});

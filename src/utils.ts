import { brandNames } from "./const/brandList";

export function getRandomBrand() {
  const index = Math.floor(Math.random() * brandNames.length);
  return brandNames[index];
}

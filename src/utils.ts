import { brandNames } from "./const/brandList";

export function getRandomBrand() {
  const index = Math.floor(Math.random() * brandNames.length);
  return brandNames[index];
}

export function parseQuery(val: string): string {
  const arr = val.split("_");
  if (arr[1] === "brand") {
    return "?brand=" + arr[0];
  } else if (arr[1] === "product_type") {
    return "?product_type=" + arr[0];
  } else if (arr[1] === "product_tags") {
    return "?product_tags=" + arr[0];
  } else {
    return "?product_category=" + arr[0];
  }
}

export function normalizeSuggestion(val: string): string {
  return val.split("_")[0];
}

import { brandNames } from "./const/brandList";
import { SearchType } from "./hooks/useConfig";

export function getRandomBrand() {
  const index = Math.floor(Math.random() * brandNames.length);
  return brandNames[index];
}

export function parseQuery(val: string) {
  const arr = val.split("_");
  if (arr[1] === "brand") {
    return {
      query: "?brand=" + arr[0],
      searchValue: arr[0],
      searchValueType: SearchType.Brand,
    };
  } else if (arr[1] === "product" && arr[2] === "type") {
    return {
      query: "?product_type=" + arr[0],
      searchValue: arr[0],
      searchValueType: SearchType.Product,
    };
  } else if (arr[1] === "product" && arr[2] === "tags") {
    return {
      query: "?product_tags=" + arr[0],
      searchValue: arr[0],
      searchValueType: SearchType.Tag,
    };
  } else {
    return {
      query: "?product_category=" + arr[0],
      searchValue: arr[0],
      searchValueType: SearchType.Product,
    };
  }
}

export function normalizeSuggestion(val: string): string {
  return val.split("_")[0];
}

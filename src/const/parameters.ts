import { brandNames } from "./brandList";
import { productList } from "./productList";
import { tagsList } from "./tagsList";

interface ParametersType {
  product_type: string[];
  product_category: string[];
  product_tags: string[];
  brand: string[];
}

export const parameters: string[] = [
  ...brandNames.map((item) => item + "_brand"),
  ...productList.map((item) => item + "_product_type"),
  ...tagsList.map((item) => item + "_product_tags"),
];

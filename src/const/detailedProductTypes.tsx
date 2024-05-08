import Blush from "../images/blush.jpg";
import Eyeshadow from "../images/eyeshadow.jpg";
import Lipstick from "../images/lipstick.jpg";
import NailPolish from "../images/polish.jpg";

export interface ProductType {
  key: string;
  name: string;
}

export interface ArticleType {
  key: string;
  image: string;
  title: string;
  paragraph: string;
}

export interface ProductGroup {
  title: string;
  products: ProductType[];
  articles: ArticleType[];
}

interface ProductGroupTypes {
  face: ProductGroup;
  eyes: ProductGroup;
  lips: ProductGroup;
  nails: ProductGroup;
}

export const detailedProductTypes: ProductGroupTypes = {
  face: {
    title: "facial products:",
    products: [
      {
        key: "1",
        name: "blush",
      },
      {
        key: "2",
        name: "bronzer",
      },
      {
        key: "3",
        name: "foundation",
      },
    ],
    articles: [
      {
        key: "2",
        image: Blush,
        title: "Blushes",
        paragraph: "All you should know about blushes...",
      },
    ],
  },
  eyes: {
    title: "eye products:",
    products: [
      {
        key: "1",
        name: "eyebrow",
      },
      {
        key: "2",
        name: "eyeliner",
      },
      {
        key: "3",
        name: "eyeshadow",
      },
      {
        key: "4",
        name: "mascara",
      },
    ],
    articles: [
      {
        key: "1",
        image: Eyeshadow,
        title: "Eyeshadow",
        paragraph: "Learn more about eyeshadow...",
      },
    ],
  },
  lips: {
    title: "lip products:",
    products: [
      {
        key: "1",
        name: "lip liner",
      },
      {
        key: "2",
        name: "lipstick",
      },
    ],
    articles: [
      {
        key: "1",
        image: Lipstick,
        title: "Eyeshadow",
        paragraph: "Learn more about eyeshadow...",
      },
    ],
  },
  nails: {
    title: "nail products:",
    products: [
      {
        key: "1",
        name: "nail polish",
      },
    ],
    articles: [
      {
        key: "1",
        image: NailPolish,
        title: "Nails",
        paragraph: "Learn more about nail polish...",
      },
    ],
  },
};

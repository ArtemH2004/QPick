import { getLanguage } from "@/common/helpers/getLanguage";

export const changeTitle = (location: string) => {
  const lang = getLanguage();

  switch (location) {
    case "home":
      document.title = lang.main;
      break;
    case "favorites":
      document.title = lang.favorites;
      break;
    case "basket":
      document.title = lang.basket;
      break;
    case "order":
      document.title = lang.order;
      break;
    case "error":
      document.title = "404";
      break;
    default:
      document.title = "QPick";
      break;
  }
};
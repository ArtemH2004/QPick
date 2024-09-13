export const normalizePrice = (price: number): string => {
  const strPrice = price.toString();
  let separator = " ";
  return strPrice.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
};

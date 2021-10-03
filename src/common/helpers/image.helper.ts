export const getBiggerImage = (
  item: any,
  sizes: string[] = this.sizes
): string => {
  return sizes
    .map((size: string) => (item[size] ? item[size] : 0))
    .filter((value: string) => value)[0];
};

export const getSmallerImage = (
  item: any,
  sizes: string[] = this.sizes
): string => {
  return [...sizes]
    .reverse()
    .map((size: string) => (item[size] ? item[size] : 0))
    .filter((value: string) => value)[0];
};

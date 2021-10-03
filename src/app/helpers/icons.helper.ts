export const getEvinoIconClass = (name: string): string => {
  if (name.includes('ev-')) {
    return name;
  }
  return 'ev-' + name;
};

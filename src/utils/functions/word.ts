export const capitalizeString = (text: string): string =>
  text.replace(/\b\w/g, (char) => char.toUpperCase());

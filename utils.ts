export const combineStrings = (strings: string[]): string => strings.join(" ");
export const nameWithTitle = (
  firstName: string,
  lastName: string,
  title: string
) => `${title}. ${combineStrings([firstName, lastName])}`;

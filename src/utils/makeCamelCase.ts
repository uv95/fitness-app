export const makeCamelCase = (text: string) => {
  const formattedText = text
    .split(' ')
    .map((word) => word && word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return formattedText;
};

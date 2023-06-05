export const strCapitalize = (str: string) =>
  `${str.toUpperCase()[0] || ''}${str.toLowerCase().substring(1)}`;

const exceptions = 'of ';

export const ucWords = (str: string) =>
  str
    .trim()
    .toLowerCase()
    .split(' ')
    .map((s) => {
      if (exceptions.split(' ').includes(s)) return s;
      return strCapitalize(s);
    });

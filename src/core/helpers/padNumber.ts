export const padNumber = (number: number, size: number) => {
  let s = String(number);

  while (s.length < size) {
    s = '0' + s;
  }
  return s;
};

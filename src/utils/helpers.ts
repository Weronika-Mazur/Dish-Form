export const toFloat = (value?: string) => {
  if (!value) return value;
  return parseFloat(value);
};

export const toInt = (value?: string) => {
  if (!value) return value;
  return parseInt(value);
};

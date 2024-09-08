export const validateInput = (value: string): number | null => {
  const numberValue = Number(value);
  if (!isNaN(numberValue) && numberValue >= 1 && numberValue <= 100) {
    return numberValue;
  }
  return null;
};

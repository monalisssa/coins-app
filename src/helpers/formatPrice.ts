export function formatCurrency(value: string): string {
  const absValue = Math.abs(Number(value));
  const suffixes = [
    { threshold: 1e9, suffix: 'b' },
    { threshold: 1e6, suffix: 'm' },
    { threshold: 1e3, suffix: 'k' },
  ];

  for (const { threshold, suffix } of suffixes) {
    if (absValue >= threshold) {
      return (Number(value) / threshold).toFixed(2) + suffix;
    }
  }

  return Number(value).toFixed(2).toString();
}

export const formatNumber = (value: string | undefined) => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

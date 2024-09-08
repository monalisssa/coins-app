import { ICoin } from '../types/name';

export const filterData = (data: ICoin[] = []): ICoin[] => {
  return data.filter(
    (item: ICoin) =>
      Number(parseFloat(item.priceUsd).toFixed(2)) > 0 &&
      item.changePercent24Hr &&
      item.marketCapUsd,
  );
};

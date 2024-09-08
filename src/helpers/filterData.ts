import { ICoin } from '../types/name';

export const filterData = (data: ICoin[]): ICoin[] => {
  return (
    data?.filter(
      (item: ICoin) =>
        Number(parseFloat(item.priceUsd).toFixed(2)) > 0 &&
        Number(parseFloat(item.priceUsd).toFixed(2))! == 0 &&
        Number(parseFloat(<string>item.changePercent24Hr).toFixed(2))! == 0,
    ) || []
  );
};

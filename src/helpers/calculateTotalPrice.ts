import { ICoin } from '../types/name';

export const calculateTotalAdded = (addedCoins: ICoin[]): string => {
  return addedCoins.reduce((acc, item) => acc + Number(item.priceUsd), 0).toString();
};

export const calculateTotalChangesAdded = (
  changesAddedCoins: ICoin[],
  addedCoins: ICoin[],
): number => {
  return changesAddedCoins.reduce((acc, item) => {
    const foundCoin = addedCoins.find((coin) => coin.id === item.id);
    const price = Number(item.priceUsd);

    return acc + (isNaN(price) ? 0 : price * (foundCoin?.count || 0));
  }, 0);
};

export const calculatePercentChange = (totalAdded: number, totalChangesAdded: number): number => {
  return totalAdded > 0 ? ((totalChangesAdded - totalAdded) * 100) / totalAdded : 0;
};

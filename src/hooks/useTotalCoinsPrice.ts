import { useGetAddedCoinsQuery } from '../store/reducers/coinsSlice';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../helpers/formatPrice';
import { useAddedCoins } from '../context/AddedCoinsContext';
import {
  calculatePercentChange,
  calculateTotalAdded,
  calculateTotalChangesAdded,
} from '../helpers/calculateTotalPrice';
import { ICoin } from '../types/name';

export const useTotalCoinsPrice = () => {
  const { data: addedCoins } = useAddedCoins()!;

  const [totalPrice, setTotalPrice] = useState<string>('');

  const ids = addedCoins.map((item: ICoin) => item.id).join(',');
  const { data: changesAddedCoins } = useGetAddedCoinsQuery(ids);

  useEffect(() => {
    if (!changesAddedCoins) return;

    const totalAdded = calculateTotalAdded(addedCoins);
    const totalChangesAdded = calculateTotalChangesAdded(changesAddedCoins, addedCoins);
    const percentChange = calculatePercentChange(Number(totalAdded), totalChangesAdded);

    setTotalPrice(`${formatCurrency(totalAdded)} USD  
            ${formatCurrency(String(Number(totalAdded) - totalChangesAdded))}  
            (${percentChange.toFixed(2)}%)`);
  }, [changesAddedCoins, addedCoins]);

  return totalPrice;
};

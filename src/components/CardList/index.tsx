import React from 'react';
import { localStorageManager } from '../../utils/LocalStorageManager';
import Card from '../Card';
import { useAddedCoins } from '../../context/AddedCoinsContext';
import { ICoin } from '../../types/name';

const CardList = () => {
  const { data: addedCoins, updateData } = useAddedCoins()!;

  const handleRemoveCoin = async (coin: ICoin) => {
    updateData(localStorageManager.removeCoin(coin));
  };

  return (
    <>
      {addedCoins.length > 0 ? (
        addedCoins.map((coin: ICoin) => (
          <Card key={coin.id} coin={coin} handleRemove={() => handleRemoveCoin(coin)} />
        ))
      ) : (
        <p>Your coins list is empty!</p>
      )}
    </>
  );
};
export default CardList;

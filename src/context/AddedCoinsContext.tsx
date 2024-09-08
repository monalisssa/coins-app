import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { localStorageManager } from '../utils/LocalStorageManager';
import { ICoin } from '../types/name';

export interface AddedCoinsContextType {
  data: ICoin[];
  updateData: (addedCoins: ICoin[]) => void;
}

interface AddedCoinsProviderProps {
  children: ReactNode;
}

const AddedCoinsContext = createContext<AddedCoinsContextType | undefined>(undefined);

export const AddedCoinsProvider: React.FC<AddedCoinsProviderProps> = ({ children }) => {
  const [data, setData] = useState<ICoin[]>(localStorageManager.getCoins());

  useEffect(() => {
    localStorageManager.setCoins(data);
  }, [data]);

  const updateData = (addedCoins: ICoin[]) => {
    setData(addedCoins);
  };

  return (
    <AddedCoinsContext.Provider value={{ data, updateData }}>{children}</AddedCoinsContext.Provider>
  );
};

export const useAddedCoins = () => {
  return useContext(AddedCoinsContext);
};

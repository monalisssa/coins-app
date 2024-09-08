import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export interface ICoin {
  id: string;
  symbol: string;
  priceUsd: string;
  marketCapUsd?: string;
  changePercent24Hr?: string;
  imageUrl: string;
  count?: number;
  name?: string;
  rank?: string;
  supply?: string;
  maxSupply?: string;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  children: React.ReactNode;
}

export interface ICardProps {
  coin: ICoin;
  price?: number;
  handleRemove?: () => void;
}

export interface IFormProps {
  coin: ICoin;
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export interface ICoinTableProps {
  searchCoins?: ICoin[];
  error?: FetchBaseQueryError | SerializedError | string | undefined;
  loading?: boolean;
}

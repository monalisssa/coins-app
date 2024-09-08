import { useState } from 'react';
import { ICoin } from '../types/name';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<ICoin | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModalCard = (coin?: ICoin) => {
    setData(coin ?? null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setData(null);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenModalCard,
    data,
  };
};

export default useModal;

import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../UI/Input';
import Card from '../Card';
import Modal from '../UI/Modal';
import * as styles from './style.module.scss';
import { localStorageManager } from '../../utils/LocalStorageManager';
import { useAddedCoins } from '../../context/AddedCoinsContext';
import { IFormProps } from '../../types/name';
import { validateInput } from '../../helpers/validateValue';

const AddCoinForm: React.FC<IFormProps> = ({ coin, isModalOpen, handleModalClose }) => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState(Number(coin.priceUsd));
  const { updateData } = useAddedCoins()!;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const validatedValue = validateInput(event.target.value);
    if (validatedValue !== null) {
      setCount(validatedValue);
    }
  };

  useEffect(() => {
    setPrice(count * Number(coin.priceUsd));
  }, [count]);

  const handleAddToBag = () => {
    updateData(
      localStorageManager.addCoin({
        ...coin,
        priceUsd: price.toString(),
        count: count,
      }),
    );
  };

  return (
    <Modal title="Add coin" isOpen={isModalOpen} onClose={handleModalClose} onOk={handleAddToBag}>
      <div className={styles.formWrapper}>
        <Card coin={coin} price={price} />
        <Input type="number" min="1" max="100" value={count} onChange={handleChange} />
      </div>
    </Modal>
  );
};

export default AddCoinForm;

import React, { memo } from 'react';
import * as styles from './style.module.scss';
import { useGetPopularCoinsQuery } from '../../store/reducers/coinsSlice';
import { formatCurrency } from '../../helpers/formatPrice';
import image_bag from '../../assets/images/bag.svg';
import Modal from '../UI/Modal';
import CardList from '../CardList';
import { useTotalCoinsPrice } from '../../hooks/useTotalCoinsPrice';
import useModal from '../../hooks/useModal';
import { ICoin } from '../../types/name';

const Header = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const totalPrice = useTotalCoinsPrice();
  const { data: popularCoins } = useGetPopularCoinsQuery();
  return (
    <>
      <header className={styles.headerWrapper}>
        <ul className={styles.popularCoinsList}>
          {popularCoins?.map((el: ICoin) => (
            <li className={styles.listItem} key={el.id}>
              <div>
                <img src={el.imageUrl} alt="icon" />
                {el.symbol}:
              </div>
              ${formatCurrency(el.priceUsd)}
            </li>
          ))}
        </ul>
        <div className={styles.priceInfo}>
          {totalPrice}
          <img src={image_bag} alt="bag" onClick={handleOpenModal} />
        </div>
      </header>

      <Modal title="Your coins" isOpen={isModalOpen} onClose={handleCloseModal}>
        <CardList />
      </Modal>
    </>
  );
};

export default memo(Header);

import React from 'react';
import * as styles from './style.module.scss';
import Button from '../UI/Button';
import add_icon from '../../assets/images/add.png';
import AddCoinForm from '../AddCoinForm';
import useModal from '../../hooks/useModal';
import { formatNumber } from '../../helpers/formatPrice';
import { ICoin } from '../../types/name';

const DetailsCard = ({ coin }: { coin: ICoin }) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div className={styles.coinInfo}>
        <div>
          <img src={coin.imageUrl} alt={`${coin.name} logo`} className={styles.coinImage} />
          <h2 className={styles.coinName}>{coin.name}</h2>
        </div>
        <ul className={styles.coinList}>
          {[
            { label: 'Symbol', value: coin.symbol },
            { label: 'Rank', value: coin.rank },
            { label: 'Supply', value: formatNumber(coin.supply) },
            { label: 'Price', value: `$${formatNumber(coin.priceUsd)}` },
            { label: 'Market Cap', value: `$${formatNumber(coin.marketCapUsd)}` },
            { label: 'Max Supply', value: formatNumber(coin.maxSupply) },
          ].map(({ label, value }) => (
            <li key={label}>
              <span>{label}:</span> {value}
            </li>
          ))}
        </ul>
        <Button onClick={handleOpenModal}>
          <img src={add_icon} alt="add" />
        </Button>
      </div>
      {isModalOpen && (
        <AddCoinForm coin={coin} isModalOpen={isModalOpen} handleModalClose={handleCloseModal} />
      )}
    </>
  );
};

export default DetailsCard;

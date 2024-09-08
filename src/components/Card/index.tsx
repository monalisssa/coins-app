import React from 'react';
import * as styles from './style.module.scss';
import { formatCurrency } from '../../helpers/formatPrice';
import removeIcon from '../../assets/images/remove.svg';
import Button from '../UI/Button';
import { ICardProps } from '../../types/name';

const Card: React.FC<ICardProps> = ({ coin, price, handleRemove }) => {
  const renderPrice = () => {
    if (price) {
      return `$${formatCurrency(price.toString())}`;
    }

    return (
      <>
        ${formatCurrency(coin.priceUsd)}, {coin.count} coin(s)
        <Button onClick={handleRemove}>
          <img src={removeIcon} alt="Remove" />
        </Button>
      </>
    );
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardInfo}>
        <img src={coin.imageUrl} alt="Coin icon" />
        {coin.symbol}
      </div>
      <div className={styles.cardPrice}>{renderPrice()}</div>
    </div>
  );
};

export default Card;

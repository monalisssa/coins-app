import React from 'react';
import { useState } from 'react';
import Button from '../UI/Button';
import * as styles from './style.module.scss';

const IntervalSelector = ({
  handleChooseInterval,
}: {
  handleChooseInterval: (time: string) => void;
}) => {
  const [selectedRange, setSelectedRange] = useState('h1');

  const handleButtonClick = (time: string) => {
    setSelectedRange(time);
    handleChooseInterval(time);
  };

  return (
    <div className={styles.tabButtonsWrapper}>
      <Button
        onClick={() => handleButtonClick('h1')}
        className={selectedRange === 'h1' ? styles.activeButton : ''}
      >
        1 hour
      </Button>
      <Button
        onClick={() => handleButtonClick('h12')}
        className={selectedRange === 'h12' ? styles.activeButton : ''}
      >
        12 hours
      </Button>
      <Button
        onClick={() => handleButtonClick('d1')}
        className={selectedRange === 'd1' ? styles.activeButton : ''}
      >
        1 day
      </Button>
    </div>
  );
};

export default IntervalSelector;

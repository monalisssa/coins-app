import React, { useState } from 'react';
import { Line } from '@ant-design/charts';
import { useGetCoinIntervalQuery } from '../../store/reducers/coinsSlice';
import IntervalSelector from '../IntervalSelector';
import { ICoin } from '../../types/name';
import Loader from '../UI/Loader';

const Graphic = ({ coin }: { coin: ICoin }) => {
  const [timeRange, setTimeRange] = useState('h1');
  const {
    data: coinInterval,
    error,
    isFetching,
  } = useGetCoinIntervalQuery({ id: coin.id, interval: timeRange });

  if (error) {
    return <div>Error loading data</div>;
  }

  const formattedData = coinInterval?.map((item: ICoin) => ({
    ...item,
    priceUsd: parseFloat(item.priceUsd).toFixed(2) + '$',
  }));

  const filteredData = formattedData?.filter((_, index) => index % 10 === 0);

  const config = {
    data: filteredData,
    xField: 'time',
    yField: 'priceUsd',
    smooth: true,
    animations: {
      appear: {
        animation: 'zoom-in',
        duration: 500,
      },
    },
    lineStyle: {
      lineWidth: 3,
    },
  };

  return (
    <>
      <IntervalSelector handleChooseInterval={setTimeRange} />
      {isFetching ? <Loader /> : <Line {...config} />}
    </>
  );
};

export default Graphic;

import React from 'react';
import Button from '../components/UI/Button';
import add_icon from '../assets/images/add.svg';
import { formatCurrency, formatNumber } from '../helpers/formatPrice';
import { ColumnsType } from 'antd/es/table';
import { ICoin } from '../types/name';

export const useTableColumns = (handleAddToBag: (event: ICoin) => void): ColumnsType<ICoin> => {
  const renderName = (text: string, record: ICoin) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={record.imageUrl} alt="coin" style={{ width: 24, height: 24, marginRight: 8 }} />
      <span>{text}</span>
    </div>
  );

  const renderAddButton = (record: ICoin) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          handleAddToBag(record);
        }}
      >
        <img src={add_icon} alt="add" style={{ width: 24, height: 24 }} />
      </Button>
    </div>
  );

  return [
    {
      title: 'Name',
      dataIndex: 'symbol',
      key: 'symbol',
      render: renderName,
    },
    {
      title: 'Price',
      dataIndex: 'priceUsd',
      key: 'priceUsd',
      sorter: (a, b) => Number(a.priceUsd) - Number(b.priceUsd),
      render: (price) => `$${formatCurrency(price)}`,
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCapUsd',
      key: 'marketCapUsd',
      sorter: (a, b) => Number(a.marketCapUsd) - Number(b.marketCapUsd),
      render: (market) => `${formatNumber(market)}`,
    },
    {
      title: 'Volume(24h)',
      dataIndex: 'changePercent24Hr',
      key: 'changePercent24Hr',
      sorter: (a, b) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr),
      render: (percent) => `${formatNumber(percent)}%`,
      onCell: () => ({
        style: {
          borderRight: 'none',
        },
      }),
    },
    {
      title: '',
      key: 'action',
      render: renderAddButton,
    },
  ];
};

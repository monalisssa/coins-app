import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AddCoinForm from './index';

export default {
  title: 'Components/AddCoinForm',
  component: AddCoinForm,
} as Meta;

const mockCoin = {
  id: 'bitcoin',
  symbol: 'BTC',
  priceUsd: '50000',
  marketCapUsd: '950000000000',
  changePercent24Hr: '5',
  imageUrl: 'https://crypto.com/favicon.ico',
  count: 1,
  rank: '2',
  name: 'bitcoin',
};

const Template: StoryFn<{ isModalOpen: boolean; handleModalClose: () => void }> = (args) => (
  <AddCoinForm coin={mockCoin} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isModalOpen: true,
  handleModalClose: () => console.log('Modal closed'),
};

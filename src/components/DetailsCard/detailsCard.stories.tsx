import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DetailsCard from './index';
import { ICoin } from '../../types/name';

export default {
  title: 'Components/DetailsCard',
  component: DetailsCard,
} as Meta;

const mockCoin = {
  id: 'bitcoin',
  symbol: 'BTC',
  priceUsd: '50000',
  marketCapUsd: '950000000000',
  changePercent24Hr: '5',
  imageUrl: 'https://crypto.com/favicon.ico',
  count: 1,
};

const Template: StoryFn<{ coin: ICoin }> = (args) => <DetailsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  coin: mockCoin,
};

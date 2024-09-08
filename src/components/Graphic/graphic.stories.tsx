import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Graphic from './index';
import { ICoin } from '../../types/name';

const mockCoin = {
  id: 'bitcoin',
  symbol: 'BTC',
  priceUsd: '50000',
  marketCapUsd: '950000000000',
  changePercent24Hr: '5',
  imageUrl: 'https://crypto.com/favicon.ico',
  count: 1,
};

export default {
  title: 'Components/Graphic',
  component: Graphic,
} as Meta;

const Template: StoryFn<{ coin: ICoin }> = (args) => <Graphic {...args} />;

export const Default = Template.bind({});
Default.args = {
  coin: mockCoin,
};

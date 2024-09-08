import React from 'react';
import Card from './index';
import { Meta, StoryFn } from '@storybook/react';
import { ICardProps } from '../../types/name';

const coin = {
  id: '1',
  imageUrl: 'https://example.com/coin.png',
  symbol: 'BTC',
  priceUsd: '45000',
  count: 2,
};

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<ICardProps> = (args) => <Card {...args} />;

export const WithPrice = Template.bind({});
WithPrice.args = {
  coin,
  price: 50000, // Установите цену
};

export const WithCount = Template.bind({});
WithCount.args = {
  coin,
};

export const WithRemoveButton = Template.bind({});
WithRemoveButton.args = {
  coin,
  handleRemove: () => alert('Coin removed!'),
};

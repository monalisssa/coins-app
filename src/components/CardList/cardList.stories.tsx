import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardList from './index';

export default {
  title: 'Components/CardList',
  component: CardList,
} as Meta;

const Template: StoryFn = (args) => <CardList {...args} />;

export const Default = Template.bind({});

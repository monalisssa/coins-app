import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Loader from './index';

export default {
  title: 'Component/Loader',
  component: Loader,
} as Meta;

const Template: StoryFn = () => <Loader />;

export const Default = Template.bind({});

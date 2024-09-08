import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar from './index';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: StoryFn<{ onSearch: (term: string) => void }> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (term: string) => console.log(`Searching for: ${term}`),
};

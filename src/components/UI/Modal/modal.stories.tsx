import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn<{ title: string; isOpen: boolean; onClose: () => void }> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleClose = () => {
    setIsOpen(false);
    args.onClose();
  };

  return (
    <Modal {...args} isOpen={isOpen} onClose={handleClose}>
      hello
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  isOpen: true,
  onClose: () => console.log('Modal closed'),
};

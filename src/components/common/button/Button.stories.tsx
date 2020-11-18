/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
    title: 'Common/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'button',
    children: 'button',
    color: 'yellow',
    // fullWidth: true,
};

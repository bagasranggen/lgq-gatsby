/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Hamburger, { HamburgerProps } from './Hamburger';

export default {
    title: 'Common/Hamburger',
    component: Hamburger,
} as Meta;

const Template: Story<HamburgerProps> = (args) => <Hamburger {...args} />;

export const Default = Template.bind({});
Default.args = {
    clicked: false,
};

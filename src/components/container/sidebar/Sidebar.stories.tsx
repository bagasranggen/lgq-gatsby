/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Sidebar from './Sidebar';

export default {
    title: 'Container/Sidebar',
    component: Sidebar,
} as Meta;

const Template: Story = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hello World' };

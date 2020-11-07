/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer from './Footer';

export default {
    title: 'Container/Footer',
    component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hello World' };

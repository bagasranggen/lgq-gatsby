/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Produk from '../pages/produk';

export default {
    title: 'Page/ID/Produk',
    component: Produk,
} as Meta;

const Template: Story = (args) => <Produk {...args} />;

export const Default = Template.bind({});
Default.args = {};

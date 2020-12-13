/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Product from '../../pages/jp/product';

export default {
    title: 'Page/JP/Product',
    component: Product,
} as Meta;

const Template: Story = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {};

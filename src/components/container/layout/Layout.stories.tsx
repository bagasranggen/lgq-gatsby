/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Layout, { LayoutProps } from './Layout';

export default {
    title: 'Container/Layout',
    component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
    pageLang: 'en',
    langs: [
        {
            lang: 'en',
            link: '/',
        },
        {
            lang: 'id',
            link: '/',
        },
        {
            lang: 'jp',
            link: '/',
        },
    ],
    children: 'Hello World',
};

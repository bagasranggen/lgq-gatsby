/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from './Header';

export default {
    title: 'Container/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    pageLang: 'id',
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
};

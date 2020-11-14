/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import iconService from 'assets/img/icon/home/icon-service.webp';
import HomeCard, { HomeCardProps } from './HomeCard';

export default {
    title: 'Common/Home/Home Card',
    component: HomeCard,
} as Meta;

const Template: Story<HomeCardProps> = (args) => <HomeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Jasa Pembuatan Website',
    icon: iconService,
    width: 'w-1/2',
};

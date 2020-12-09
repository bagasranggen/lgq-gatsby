/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// import bgContact from 'assets/img/bg/home/bg-contact.png';
import HomeOtherLink, { HomeOtherLinkProps } from './HomeOtherLink';

export default {
    title: 'Home/Home Other Link',
    component: HomeOtherLink,
} as Meta;

const Template: Story<HomeOtherLinkProps> = (args) => <HomeOtherLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    lang: 'en',
};

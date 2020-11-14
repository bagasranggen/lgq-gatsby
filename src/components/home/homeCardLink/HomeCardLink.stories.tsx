/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import bgContact from 'assets/img/bg/home/bg-contact.png';
import HomeCardLink, { HomeCardLinkProps } from './HomeCardLink';

export default {
    title: 'Common/Home/Home Card Link',
    component: HomeCardLink,
} as Meta;

const Template: Story<HomeCardLinkProps> = (args) => <HomeCardLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    children: 'Content',
    bg: bgContact,
};

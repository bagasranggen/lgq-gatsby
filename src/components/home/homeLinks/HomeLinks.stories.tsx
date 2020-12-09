/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// import bgContact from 'assets/img/bg/home/bg-contact.png';
import HomeLinks, { HomeLinksProps } from './HomeLinks';

export default {
    title: 'Home/Home Links',
    component: HomeLinks,
} as Meta;

const Template: Story<HomeLinksProps> = (args) => <HomeLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
    lang: 'id',
};

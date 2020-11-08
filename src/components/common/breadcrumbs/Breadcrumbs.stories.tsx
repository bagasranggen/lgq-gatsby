/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs';

export default {
    title: 'Common/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    breadcrumbLinks: [
        { label: 'Home', link: '/' },
        { label: 'About', link: '#' },
    ],
};

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TitleHeadline, { TitleHeadlineProps } from './TitleHeadline';

export default {
    title: 'Common/TitleHeadline',
    component: TitleHeadline,
} as Meta;

const Template: Story<TitleHeadlineProps> = (args) => <TitleHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Title',
};

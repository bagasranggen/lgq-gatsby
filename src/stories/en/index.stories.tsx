/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Index from '../../pages/en/index';

export default {
    title: 'Page/EN/Index',
    component: Index,
} as Meta;

const Template: Story = (args) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hello World' };

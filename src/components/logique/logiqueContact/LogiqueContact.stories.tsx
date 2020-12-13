/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LogiqueContact, { LogiqueContactProps } from './LogiqueContact';

export default {
    title: 'Logique/Logique Contact',
    component: LogiqueContact,
} as Meta;

const Template: Story<LogiqueContactProps> = (args) => <LogiqueContact {...args} />;

export const Default = Template.bind({});
Default.args = {};

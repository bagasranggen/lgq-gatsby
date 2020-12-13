/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import imgDokodemo1 from 'assets/img/jpg/product/dokodemo_1.jpg';
import imgDokodemo1Webp from 'assets/img/webp/product/dokodemo_1.webp';
import ProductFeature, { ProductFeatureProps } from './ProductFeature';

export default {
    title: 'Product/Product Feature',
    component: ProductFeature,
} as Meta;

const Template: Story<ProductFeatureProps> = (args) => <ProductFeature {...args} />;

export const Default = Template.bind({});
Default.args = {
    features: [
        {
            img: imgDokodemo1,
            imgWebp: imgDokodemo1Webp,
            imgAlt: 'Analisa waktu kerja berdasarkan project',
            description: 'Analisa waktu kerja berdasarkan project',
        },
    ],
};

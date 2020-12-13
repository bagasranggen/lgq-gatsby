import React from 'react';

export type ProductFeatureProps = {
    col: '2-col' | '3-col';
    features: Array<{
        img?: string;
        imgWebp?: string;
        imgAlt?: string;
        description?: string;
    }>;
};

const ProductFeature = ({ col, features }: ProductFeatureProps): React.ReactElement => {
    let column = '';

    if (col === '2-col') {
        column = 'w-full md:w-6/12';
    } else if (col === '3-col') {
        column = 'w-full md:w-6/12 lg:w-4/12';
    }
    return (
        <div className="flex flex-wrap justify-center text-center">
            {features.map((feature) => (
                <div className={`${column} px-30px mb-30px relative z-0`} key={feature.description}>
                    <picture>
                        <source data-srcSet={feature.imgWebp} type="image/webp" />
                        <img
                            data-src={feature.img}
                            alt={feature.imgAlt}
                            className="mb-15px border-default border-black lazyload"
                        />
                    </picture>
                    <p className="mx-6 mb-15px text-white">{feature.description} </p>
                    <div className="absolute bottom-0 left-0 w-full h-40% bg-black -z-10" />
                </div>
            ))}
        </div>
    );
};

export default ProductFeature;

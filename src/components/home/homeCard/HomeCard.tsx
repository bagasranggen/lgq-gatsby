import React from 'react';

import Card from 'components/common/card/Card';

import iconArrowRight from 'assets/img/icon/icon-arrow-right.svg';

export type HomeCardProps = {
    children: React.ReactNode;
    link: string;
    icon?: string;
    iconWebp?: string;
    iconAlt?: string;
    iconStyle?: string;
    bgImage?: string;
    width: '3-col' | '4-col' | string;
    noShadow?: boolean;
    noArrow?: boolean;
    padding?: 'p-10px' | 'p-5';
    label?: string;
    target?: '_blank';
};

const HomeCard = ({
    children,
    link,
    icon,
    iconWebp,
    iconAlt,
    iconStyle,
    bgImage,
    width,
    noShadow,
    noArrow,
    padding,
    label,
    target,
}: HomeCardProps): React.ReactElement => {
    let col;

    if (width === '4-col') {
        col = 'lg:w-3/12 md:w-6/12 w-full lg:mb-0 mb-4';
    } else if (width === '3-col') {
        col = 'md:w-4/12 w-full md:mb-0 mb-4';
    } else {
        col = width;
    }

    const style = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <Card
            target={target}
            link={link}
            className={`${col} px-15px`}
            cardStyle={`block relative h-full bg-white duration-200 ${noShadow ? '' : 'shadow-md hover:shadow-xl'} ${
                padding || 'p-5'
            }`}
            bg={bgImage && style}
        >
            {icon && iconWebp ? (
                <picture>
                    <source srcSet={iconWebp} type="image/webp" />
                    <img src={icon} alt={iconAlt} className={`mb-4 ${iconStyle}`} />
                </picture>
            ) : (
                <img src={icon} alt={iconAlt} className={`mb-4 ${iconStyle}`} />
            )}
            {label && (
                <div className="uppercase absolute top-0 left-0 mt-10px ml-10px bg-yellow-500 text-xs px-10px py-1">
                    {label}
                </div>
            )}
            <p className="mb-6 text-lg">{children}</p>
            {!noArrow && <img src={iconArrowRight} className="mb-3" alt="go to website page" />}
        </Card>
    );
};

export default HomeCard;

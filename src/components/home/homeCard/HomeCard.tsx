import React from 'react';

import Card from 'components/common/card/Card';

import iconArrowRight from 'assets/img/icon/icon-arrow-right.svg';

export type HomeCardProps = {
    children: React.ReactNode;
    link: string;
    icon?: string;
    iconAlt?: string;
    iconStyle?: string;
    bgImage?: string;
    width: '3-col' | '4-col' | string;
    noShadow?: boolean;
    noArrow?: boolean;
};

const HomeCard = ({
    children,
    link,
    icon,
    iconAlt,
    iconStyle,
    bgImage,
    width,
    noShadow,
    noArrow,
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
            link={link}
            className={`${col} px-15px`}
            cardStyle={`block h-full p-5 bg-white duration-200 ${noShadow ? '' : 'shadow-md hover:shadow-xl'}`}
            bg={bgImage && style}
        >
            <img src={icon} alt={iconAlt} className={`mb-4 ${iconStyle}`} />
            <p className="mb-6 text-lg">{children}</p>
            {!noArrow && <img src={iconArrowRight} className="mb-3" alt="go to website page" />}
        </Card>
    );
};

export default HomeCard;

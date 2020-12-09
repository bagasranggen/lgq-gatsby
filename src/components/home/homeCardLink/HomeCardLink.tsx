import React from 'react';

import Card from 'components/common/card/Card';

import iconArrowRight from 'assets/img/icon/icon-arrow-right.svg';

export type HomeCardLinkProps = {
    link?: string;
    title?: string;
    children: React.ReactNode;
    bg?: string;
};

const HomeCardLink = ({ link, title, children, bg }: HomeCardLinkProps): React.ReactElement => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroungRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <Card
            link={link}
            className="w-full md:w-6/12 lg:w-4/12 px-15px mb-15px md:mb-30px lg:mb-0"
            cardStyle="block h-425px p-6 rounded-lg relative z-0 overflow-hidden duration-200 shadow-md hover:shadow-xl"
            bg={bg && style}
        >
            <div className="z-10">
                <div
                    className="flex flex-wrap text-xl lg:text-2xl font-semibold mt-12 lg:mt-6 mb-2"
                    style={{ paddingTop: '60%' }}
                >
                    {title}
                    <img src={iconArrowRight} alt="" className="ml-4" />
                </div>
                <p className="text-sm pr-4">{children}</p>
            </div>
            <div
                className="absolute bg-yellow-500 bg-opacity-75 left-1/2 bottom-0 transform rotate-8 -translate-x-1/2 translate-y-6 md:translate-y-8 lg:translate-y-16 lg:h-280px h-240px -z-10"
                style={{ width: 'calc(100% + 50px)' }}
            />
            <div className="absolute bg-black bottom-0 right-0 h-16 w-16 rounded-full mb-3 -mr-6" />
        </Card>
    );
};

export default HomeCardLink;

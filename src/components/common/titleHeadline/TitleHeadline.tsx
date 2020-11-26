import React from 'react';

export type TitleHeadlineProps = {
    children: string | any;
    borderWidth?: 'md' | 'lg';
    borderLength?: 'md' | 'lg';
    fontSize?: 'md' | 'lg';
    textPosition?: 'left' | 'center';
};

const TitleHeadline = ({
    children,
    borderWidth,
    borderLength,
    fontSize,
    textPosition,
}: TitleHeadlineProps): React.ReactElement => {
    let size;
    let width;
    let length;
    let position;

    if (fontSize === 'md') {
        size = 'text-2xl';
    } else if (fontSize === 'lg') {
        size = 'text-3xl';
    }

    if (borderWidth === 'md') {
        width = 'h-5px';
    } else if (borderWidth === 'lg') {
        width = 'h-5';
    }

    if (borderLength === 'md') {
        length = 'w-16';
    } else if (borderLength === 'lg') {
        length = 'w-24';
    }

    if (textPosition === 'center') {
        position = 'text-center mx-auto';
    } else if (textPosition === 'left') {
        position = 'text-left mr-auto';
    }

    return (
        <div className={`${position} mb-10`}>
            <h2 className={`${size} mb-3`}>{children}</h2>
            <div className={`bg-yellow-500 ${length} ${width} ${position}`} />
        </div>
    );
};

export default TitleHeadline;

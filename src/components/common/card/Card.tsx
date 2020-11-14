import React from 'react';
import Link from 'gatsby-link';

export type CardProps = {
    className?: string;
    cardStyle?: string;
    link?: string;
    children: React.ReactNode;
    bg?: any;
};

const Card = ({ className, cardStyle, link, children, bg }: CardProps): React.ReactElement => {
    return (
        <div className={className}>
            <Link to={link === undefined ? '#' : link} className={cardStyle} style={bg}>
                {children}
            </Link>
        </div>
    );
};

export default Card;

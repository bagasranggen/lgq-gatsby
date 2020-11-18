import React from 'react';
import Link from 'gatsby-link';

export type CardProps = {
    className?: string;
    cardStyle?: string;
    link?: string;
    children: React.ReactNode;
    bg?: any;
    target?: '_blank';
};

const Card = ({ className, cardStyle, link, children, bg, target }: CardProps): React.ReactElement => {
    return (
        <div className={className}>
            {target ? (
                <a
                    target={target}
                    rel="noreferrer"
                    href={link === undefined ? '#' : link}
                    className={cardStyle}
                    style={bg}
                >
                    {children}
                </a>
            ) : (
                <Link to={link === undefined ? '#' : link} className={cardStyle} style={bg}>
                    {children}
                </Link>
            )}
        </div>
    );
};

export default Card;

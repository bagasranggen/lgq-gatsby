import React from 'react';

import Link from 'gatsby-link';

export type ButtonProps = {
    children: React.ReactNode;
    type: 'button' | 'anchor';
    link?: string;
    fullWidth?: boolean;
    color?: 'yellow';
    className?: string;
};

const Button = ({ children, type, link, fullWidth, color, className }: ButtonProps): React.ReactElement => {
    let btnColor;

    if (color === 'yellow') {
        btnColor = 'bg-yellow-500 border-yellow-500 hover:border-yellow-300 hover:bg-yellow-300';
    }

    const btnStyle = `block px-15px py-10px rounded duration-200 ${className} ${btnColor} ${fullWidth && 'w-full'}`;

    return (
        <>
            {type === 'button' && !link ? (
                <button type="button" className={btnStyle}>
                    {children}
                </button>
            ) : (
                <Link to="/" className={btnStyle}>
                    {children}
                </Link>
            )}
        </>
    );
};

export default Button;

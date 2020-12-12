import React from 'react';

export type HamburgerProps = {
    clicked: boolean;
    onClick: () => void;
};

const Hamburger = ({ clicked, onClick }: HamburgerProps): React.ReactElement => {
    const burgerStyle = 'w-full py-px border-b border-black bg-black rounded-sm duration-300';

    return (
        <div className="block lg:hidden fixed top-0 z-20">
            <button
                type="button"
                onClick={onClick}
                className={`bg-yellow-500 p-10px flex flex-col justify-between w-12 h-10 mt-10px rounded-sm focus:outline-none duration-300 ${
                    clicked ? 'ml-32' : 'ml-10px'
                }`}
            >
                <div className={`${burgerStyle} ${clicked && 'transform rotate-45 translate-y-2 mb-6px'}`} />
                <div className={`${burgerStyle} ${clicked && 'opacity-0'}`} />
                <div className={`${burgerStyle} ${clicked && 'transform -rotate-45 -translate-y-1 mb-6px'}`} />
            </button>
        </div>
    );
};

export default Hamburger;

import React from 'react';

export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    type?: 'header';
};

const Container = ({ children, className, type }: ContainerProps): React.ReactElement => (
    <section className={className}>
        <div className={`md:container md:pl-28 mx-auto z-10 ${type === 'header' ? 'px-0 md:px-15px' : 'px-15px'}`}>
            {children}
        </div>
    </section>
);

export default Container;

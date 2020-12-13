import React from 'react';

export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    type?: 'header';
};

const Container = ({ children, className, id, type }: ContainerProps): React.ReactElement => (
    <section className={className} id={id}>
        <div className={`md:container lg:pl-28 mx-auto z-10 ${type === 'header' ? 'px-0 md:px-15px' : 'px-15px'}`}>
            {children}
        </div>
    </section>
);

export default Container;

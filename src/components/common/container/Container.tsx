import React from 'react';

export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps): React.ReactElement => (
    <section className={className}>
        <div className="lg:container lg:pl-28 px-15px mx-auto z-10">{children}</div>
    </section>
);

export default Container;

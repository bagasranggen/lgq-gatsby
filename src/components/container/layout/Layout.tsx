import React from 'react';

import Header from 'components/container/header/Header';
import Footer from 'components/container/footer/Footer';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return (
        <>
            <Footer />
            {children}
            <Header />
        </>
    );
};

export default Layout;

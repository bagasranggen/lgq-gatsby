import React from 'react';

import Header from 'components/container/header/Header';
import Sidebar from 'components/container/sidebar/Sidebar';
import Footer from 'components/container/footer/Footer';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="mt-16">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;

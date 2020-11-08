import React from 'react';

import Header from 'components/container/header/Header';
import Sidebar from 'components/container/sidebar/Sidebar';
import Footer from 'components/container/footer/Footer';

export type LayoutProps = {
    children: React.ReactNode;
    pageLang: 'en' | 'id' | 'jp';
    langs: Array<{
        lang: string;
        link: string;
    }>;
};

const Layout = ({ children, pageLang, langs }: LayoutProps): React.ReactElement => {
    return (
        <>
            <Header pageLang={pageLang} langs={langs} />
            <Sidebar pageLang={pageLang} />
            <div className="mt-16">{children}</div>
            <Footer pageLang={pageLang} />
        </>
    );
};

export default Layout;

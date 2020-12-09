import React from 'react';

import Seo from 'components/container/seo/Seo';
import Header from 'components/container/header/Header';
import Sidebar from 'components/container/sidebar/Sidebar';
import Footer from 'components/container/footer/Footer';

export type LayoutProps = {
    children: React.ReactNode;
    pageLang: 'en' | 'id' | 'jp';
    sidebarActive: 'home' | 'about' | 'portfolio' | 'services' | 'product' | 'career' | 'contact' | 'blog';
    langs: Array<{
        lang: string;
        link: string;
    }>;
    title?: string;
    author?: string;
    content?: string;
    metaDescription?: string;
    metaKeyword?: string;
    ogTitle?: string;
    ogType?: string;
    ogSiteName?: string;
    ogUrl?: string;
    ogImage?: string;
    ogDescription?: string;
    canonical?: string;
};

const Layout = ({
    children,
    pageLang,
    sidebarActive,
    langs,
    title,
    author,
    content,
    metaDescription,
    metaKeyword,
    ogTitle,
    ogType,
    ogSiteName,
    ogUrl,
    ogImage,
    ogDescription,
    canonical,
}: LayoutProps): React.ReactElement => {
    return (
        <>
            <Seo
                title={title || 'Web System Development Jakarta | Solusi Digital Bisnis Anda | LOGIQUE'}
                author={author}
                content={content}
                metaDescription={
                    metaDescription ||
                    'LOGIQUE Digital Indonesia | Agensi Jasa Pengembangan Sistem Web (Web System Development) untuk e-commerce & lainnya | Lokasi: Jl.Simatupang Jakarta Selatan'
                }
                metaKeyword={
                    metaKeyword ||
                    'web system development, web system development jakarta, web system development jakarta selatan'
                }
                ogTitle={ogTitle || 'Web System Development Jakarta | Solusi Digital Bisnis Anda | LOGIQUE'}
                ogType={ogType || 'website'}
                ogSiteName={ogSiteName || 'Logique'}
                ogUrl={ogUrl}
                ogImage={ogImage}
                ogDescription={
                    ogDescription ||
                    'LOGIQUE Digital Indonesia | Agensi Jasa Pengembangan Sistem Web (Web System Development) untuk e-commerce & lainnya | Lokasi: Jl.Simatupang Jakarta Selatan'
                }
                canonical={canonical}
            />
            <Header pageLang={pageLang} langs={langs} />
            <Sidebar pageLang={pageLang} active={sidebarActive} />
            <div className={`mt-28 md:mt-16 ${pageLang === 'jp' && 'font-mplus'}`}>{children}</div>
            <Footer pageLang={pageLang} />
        </>
    );
};

export default Layout;

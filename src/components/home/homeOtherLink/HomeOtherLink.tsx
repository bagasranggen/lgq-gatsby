import React from 'react';

import Container from 'components/common/container/Container';
import HomeCard from 'components/home/homeCard/HomeCard';

export type HomeOtherLinkProps = {
    lang: 'en' | 'id';
};

const HomeOtherLink = ({ lang }: HomeOtherLinkProps): React.ReactElement => {
    let pageLang: any;
    let title = '';

    const linkContent = {
        en: [
            {
                title: 'Website Production Service',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> is a website development company that
                        strives to raise your business.
                    </>
                ),
            },
            {
                title: 'Apps Development Service',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> provide efficient solutions to your Mobile
                        App for iOS &amp; Android.
                    </>
                ),
            },
            {
                title: 'Web System Development Service Us',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> assist business goals through latest
                        advance in web base technology.
                    </>
                ),
            },
            {
                title: 'Penetration Testing Service',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> will perform various security assessment to
                        your website.
                    </>
                ),
            },
        ],
        id: [
            {
                title: 'Jasa Pembuatan Website',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> adalah perusahaan pengembangan situs web
                        yang berupaya meningkatkan bisnis Anda.
                    </>
                ),
            },
            {
                title: 'Jasa Pembuatan Aplikasi',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> memberikan solusi yang efisien dalam
                        pengembangan Mobile App untuk iOS &amp; Android.
                    </>
                ),
            },
            {
                title: 'Jasa Pembuatan Sistem Web',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> membantu mencapai tujuan bisnis Anda
                        melalui kemajuan terbaru dalam teknologi berbasis web.
                    </>
                ),
            },
            {
                title: 'Jasa Penetration Testing',
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> akan melakukan berbagai uji coba keamanan
                        di situs web Anda.
                    </>
                ),
            },
        ],
    };

    if (lang === 'en') {
        pageLang = linkContent.en;
        title = 'Other Services';
    } else if (lang === 'id') {
        pageLang = linkContent.id;
        title = 'Layanan Lainnya';
    }

    return (
        <Container className="pb-10">
            <h2 className="text-2xl text-center">{title}</h2>
            <div className="flex flex-wrap -mx-15px mb-8">
                {pageLang.map((content: any) => (
                    <HomeCard link="/" width="4-col" noShadow noArrow key={content.title}>
                        <h4 className="text-xl font-semibold duration-200 group-hover:text-yellow-500">
                            {content.title}
                        </h4>
                        <p className="text-base mt-3">{content.content}</p>
                    </HomeCard>
                ))}
            </div>
        </Container>
    );
};

export default HomeOtherLink;

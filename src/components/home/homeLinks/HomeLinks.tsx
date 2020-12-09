import React from 'react';

import Container from 'components/common/container/Container';
import HomeCardLink from 'components/home/homeCardLink/HomeCardLink';

import bgLinkAbout from 'assets/img/jpg/home/bg-links-about.jpg';
import bgLinkContact from 'assets/img/jpg/home/bg-links-contact.jpg';
import bgLinkWork from 'assets/img/jpg/home/bg-links-ourwork.jpg';

export type HomeLinksProps = {
    lang: 'en' | 'id';
};

const HomeLinks = ({ lang }: HomeLinksProps): React.ReactElement => {
    let pageLang: any;

    const linkContent = {
        en: [
            {
                title: 'About Us',
                bg: bgLinkAbout,
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE Digital Indonesia</span> is a leading IT
                        consultant and system development company owned by a Japanese entrepreneur based in Jakarta.
                    </>
                ),
            },
            {
                title: 'Our Portfolio',
                bg: bgLinkWork,
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> has developed many Websites, Systems and
                        Apps, Digital Marketing Campaign and delivered them successfully to our clients.
                    </>
                ),
            },
            {
                title: 'Contact Us',
                bg: bgLinkContact,
                content: <>Contact us now, we will provide the best solution.</>,
            },
        ],
        id: [
            {
                title: 'Tentang Kami',
                bg: bgLinkAbout,
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE Digital Indonesia</span> adalah konsultan IT
                        terkemuka dan perusahaan pengembangan sistem yang dipimpin oleh seorang pengusaha Jepang yang
                        berbasis di Jakarta.
                    </>
                ),
            },
            {
                title: 'Hasil Kerja Kami',
                bg: bgLinkWork,
                content: (
                    <>
                        <span className="font-novocento-bold">LOGIQUE</span> telah mengembangkan banyak Situs Web,
                        Sistem dan Aplikasi, Kampanye Pemasaran Digital yang terbukti sukses menjawab setiap kebutuhan
                        klien kami.
                    </>
                ),
            },
            {
                title: 'Hubungi Kami',
                bg: bgLinkContact,
                content: <>Hubungi Kami sekarang, kami akan berikan solusi terbaik.</>,
            },
        ],
    };

    if (lang === 'en') {
        pageLang = linkContent.en;
    } else if (lang === 'id') {
        pageLang = linkContent.id;
    }

    return (
        <Container className="pb-10">
            <div className="flex flex-wrap justify-center -mx-15px">
                {pageLang.map((content: any) => (
                    <HomeCardLink title={content.title} bg={content.bg} key={content.title} link="/">
                        {content.content}
                    </HomeCardLink>
                ))}
            </div>
        </Container>
    );
};

export default HomeLinks;

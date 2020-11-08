import React from 'react';

// import { Link } from 'gatsby';
import Link from 'gatsby-link';

import Container from 'components/common/container/Container';

import IconWa from 'assets/img/icon/footer/icon-footer-wa.svg';
import IconPhone from 'assets/img/icon/footer/icon-footer-phone.svg';

export type FooterProps = {
    pageLang: 'id' | 'en' | 'jp';
};

const Footer = ({ pageLang }: FooterProps): React.ReactElement => {
    const listStyle = 'mb-4 last:mb-0';
    const listAnchorStyle = 'duration-200 hover:text-yellow-500';

    const firstList = {
        id: [
            {
                label: 'Beranda',
                link: '/',
            },
            {
                label: 'Tentang Kami',
                link: '/',
            },
            {
                label: 'Layanan',
                link: '/',
                haveChildList: true,
                childListClass: 'mt-3 ml-4 list-disc',
                childList: [
                    {
                        label: 'Jasa Pembuatan Website',
                        link: '/',
                    },
                    {
                        label: 'Jasa Pengembangan Sistem Web',
                        link: '/',
                    },
                    {
                        label: 'Pengembangan Aplikasi Mobile',
                        link: '/',
                    },
                    {
                        label: 'Pengetesan Keamanan Website (Pentest)',
                        link: '/',
                    },
                    {
                        label: 'Jasa Digital Marketing',
                        link: '/',
                        haveChildList: true,
                        childListClass: 'mt-3 ml-4 list-disc',
                        childList: [
                            {
                                label: 'Jasa SEO',
                                link: '/',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Portfolio',
                link: '/',
            },
        ],
        en: [
            {
                label: 'Home',
                link: '/',
            },
            {
                label: 'About Us',
                link: '/',
            },
            {
                label: 'Layanan',
                link: '/',
                haveChildList: true,
                childListClass: 'mt-3 ml-4 list-disc',
                childList: [
                    {
                        label: 'Web Development',
                        link: '/',
                    },
                    {
                        label: 'Web System Development',
                        link: '/',
                    },
                    {
                        label: 'Mobile App Development',
                        link: '/',
                    },
                    {
                        label: 'WEB Security Assesment (Pentest)',
                        link: '/',
                    },
                    {
                        label: 'Digital Marketing',
                        link: '/',
                        haveChildList: true,
                        childListClass: 'mt-3 ml-4 list-disc',
                        childList: [
                            {
                                label: 'SEO Service',
                                link: '/',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Portfolio',
                link: '/',
            },
        ],
        jp: [
            {
                label: 'Home',
                link: '/',
            },
            {
                label: '会社概要',
                link: '/',
            },
            {
                label: 'サービス',
                link: '/',
                haveChildList: true,
                childListClass: 'mt-3 ml-4 list-disc',
                childList: [
                    {
                        label: 'Web制作サービス',
                        link: '/',
                    },
                    {
                        label: ' モバイルApp開発',
                        link: '/',
                    },
                    {
                        label: ' Webセキュリティ診断サービス',
                        link: '/',
                    },
                    {
                        label: 'Webシステム開発',
                        link: '/',
                    },
                    {
                        label: 'デジタルマーケティング活用支援 ',
                        link: '/',
                        haveChildList: true,
                        childListClass: 'mt-3 ml-4 list-disc',
                        childList: [
                            {
                                label: 'SEO対策',
                                link: '/',
                            },
                        ],
                    },
                ],
            },
            {
                label: '制作開発実績',
                link: '/',
            },
        ],
    };

    const secondList = {
        id: [
            {
                label: 'Produk Kami',
                link: '/',
                haveChildList: true,
                childListClass: 'ml-4 mt-4 list-disc',
                childList: [
                    {
                        label: 'Dokodemo-Kerja \n(Sistem aplikasi bagi pekerja remote)',
                        link: '/',
                    },
                    {
                        label: 'Nippo \n(Sistem aplikasi laporan pegawai harian)',
                        link: '/',
                    },
                    {
                        label: 'Sugoi Saiyo \n(Sistem aplikasi perekrutan pegawai)',
                        link: '/',
                    },
                ],
            },
            {
                label: 'Join Logique (Karir)',
                link: '/',
                haveChildList: true,
                childListClass: 'ml-4 mt-4 list-disc',
                childList: [
                    {
                        label: 'Kerja di ',
                        logo: true,
                        link: '/',
                    },
                    {
                        label: 'Lowongan Kerja',
                        link: '/',
                    },
                ],
            },
            {
                label: 'Hubungi Kami',
                link: '/',
            },
            {
                label: 'Privacy Policy',
                link: '/',
            },
        ],
        en: [
            {
                label: 'Products',
                link: '/',
                haveChildList: true,
                childListClass: 'ml-4 mt-4 list-disc',
                childList: [
                    {
                        label: 'Dokodemo-Kerja \n(Remote Working Tool)',
                        link: '/',
                    },
                    {
                        label: 'Nippo \n(Daily Report Tool)',
                        link: '/',
                    },
                    {
                        label: 'Sugoi Saiyo \n(Employee Recruitment System)',
                        link: '/',
                    },
                ],
            },
            {
                label: 'Join Logique (Career)',
                link: '/',
                haveChildList: true,
                childListClass: 'ml-4 mt-4 list-disc',
                childList: [
                    {
                        label: 'Working in ',
                        logo: true,
                        link: '/',
                    },
                    {
                        label: 'Vacancy',
                        link: '/',
                    },
                ],
            },
            {
                label: 'Contact Us',
                link: '/',
            },
            {
                label: 'Privacy Policy',
                link: '/',
            },
        ],
        jp: [
            {
                label: 'プロダクト',
                link: '/',
                haveChildList: true,
                childListClass: 'ml-4 mt-4 list-disc',
                childList: [
                    {
                        label: 'Dokodemo-Kerja \n（リモートワーク管理ツール）',
                        link: '/',
                    },
                    {
                        label: 'Nippo \n（採用管理ツール）',
                        link: '/',
                    },
                    {
                        label: 'Sugoi Saiyo \n（日報＆人事評価ツール）',
                        link: '/',
                    },
                ],
            },
            {
                label: '採用/パートナー (求人/インターン)',
                link: '/',
            },
            {
                label: 'お問い合わせ',
                link: '/',
            },
            {
                label: 'Privacy Policy',
                link: '/',
            },
        ],
    };

    const footerId = (
        <>
            <h5 className="text-xl mb-3">Tentang Kami</h5>
            <p className="mb-8">
                <span className="font-novocento-bold">LOGIQUE</span> membantu bisnis Anda tumbuh dengan transformasi
                digital. Kami menyediakan konsultasi IT, produksi situs web, pengembangan aplikasi web / seluler,
                pengembangan sistem, dan layanan operasi pemasaran digital
            </p>
        </>
    );

    const footerEn = (
        <>
            <h5 className="text-xl mb-3">About Us</h5>
            <p className="mb-8">
                <span className="font-novocento-bold">LOGIQUE</span>is supporting the growth of your business by DX. We
                provide IT consulting, website production, web/mobile application development, system development and
                digital marketing operation service.
            </p>
        </>
    );

    const footerJp = (
        <>
            <h5 className="text-xl mb-3">
                <span className="font-novocento-bold">LOGIQUE</span>について
            </h5>
            <span className="font-novocento-bold">LOGIQUE</span>
            はインドネシアでDXによるお客様のビジネスの成長を支援しています。ITコンサルティング、Webサイト制作、Web・モバイルアプリ開発、システム開発、デジタルマーケティング運用サービス等を提供しています。
        </>
    );

    let footerContent;
    let list1Lang;
    let list2Lang;
    if (pageLang === 'en') {
        list1Lang = firstList.en;
        list2Lang = secondList.en;
        footerContent = footerEn;
    } else if (pageLang === 'id') {
        list1Lang = firstList.id;
        list2Lang = secondList.id;
        footerContent = footerId;
    } else if (pageLang === 'jp') {
        list1Lang = firstList.jp;
        list2Lang = secondList.jp;
        footerContent = footerJp;
    }

    return (
        <Container className="bg-gray-800 text-white text-sm py-10">
            <footer className="flex flex-wrap -mx-15px">
                <div className="w-1/3 px-15px">
                    <a href="/">
                        <h4 className="text-5xl font-novocento-bold leading-none mb-4">LOGIQUE</h4>
                        <div className="mb-8">
                            <p className="font-novocento pb-2">Ad Premier Building 19th Floor.</p>
                            <p>Jalan Tb. Simatupang No. 5</p>
                            <p>Ragunan, Ps. Minggu, Jakarta Selatan,</p>
                            <p>Indonesia 12550</p>
                        </div>

                        <div className="mb-8">
                            <a href="tel:622122708935" className="flex -mx-15px group">
                                <div className="px-15px mb-4">
                                    <img src={IconWa} alt="office landline" className="w-5" />
                                </div>
                                <p className="flex-grow duration-150 group-hover:text-yellow-500">
                                    (021) 22708935 / 36
                                </p>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=62811870321" className="flex -mx-15px group">
                                <div className="px-15px">
                                    <img src={IconPhone} alt="office whatsapp group" className="w-5" />
                                </div>
                                <p className="flex-grow duration-150 group-hover:text-yellow-500">0811-870-321</p>
                            </a>
                        </div>

                        <div>
                            <a href="/" className="group">
                                <svg width="41" height="41" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(-7 -7)" fill="none" fillRule="evenodd">
                                        <circle
                                            className="duration-200 group-hover:fill-blue-600 group-hover:stroke-blue-600"
                                            stroke="#fff"
                                            fill="transparent"
                                            transform="rotate(-45 27.5 27.5)"
                                            cx="27.5"
                                            cy="27.5"
                                            r="19.13"
                                        />
                                        <path
                                            d="M32.283 19.532h-2.645c-.829 0-1.5.696-1.5 1.556v3.084h4.075l-.559 4.431h-3.517v12.05h-4.276v-12.05h-3.535v-4.431h3.535v-3.727c0-2.707 2.117-4.902 4.73-4.902h3.692v3.989z"
                                            fill="#fff"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </a>
                </div>

                <div className="w-1/3 px-15px">
                    <ul className="">
                        {list1Lang?.map((list) => (
                            <>
                                {!list.haveChildList ? (
                                    <li className={listStyle} key={list.label}>
                                        <Link to={list.link} className={listAnchorStyle}>
                                            {list.label}
                                        </Link>
                                    </li>
                                ) : (
                                    <li className={listStyle} key={list.label}>
                                        <Link to={list.link} className={listAnchorStyle}>
                                            {list.label}
                                        </Link>
                                        <ul className={list.childListClass}>
                                            {list.childList.map((chlist) => (
                                                <>
                                                    {!chlist.haveChildList ? (
                                                        <li className={listStyle} key={chlist.label}>
                                                            <Link to={chlist.link} className={listAnchorStyle}>
                                                                {chlist.label}
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li className={listStyle} key={chlist.label}>
                                                            <Link to={chlist.link} className={listAnchorStyle}>
                                                                {chlist.label}
                                                            </Link>
                                                            <ul className={chlist.childListClass}>
                                                                {chlist.childList.map((chchlist) => (
                                                                    <li className={listStyle} key={chchlist.label}>
                                                                        <Link
                                                                            to={chchlist.link}
                                                                            className={listAnchorStyle}
                                                                        >
                                                                            {chchlist.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    )}
                                                </>
                                            ))}
                                        </ul>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul>
                </div>
                <div className="w-1/3 px-15px">
                    <ul>
                        {list2Lang?.map((list) => (
                            <>
                                {!list.haveChildList ? (
                                    <li className={listStyle} key={list.label}>
                                        <Link to={list.link} className={listAnchorStyle}>
                                            {list.label}
                                        </Link>
                                    </li>
                                ) : (
                                    <li className={listStyle} key={list.label}>
                                        <Link to={list.link} className={listAnchorStyle}>
                                            {list.label}
                                        </Link>

                                        <ul className={list.childListClass}>
                                            {list.childList.map((chlist: any) => (
                                                <li className={listStyle} key={chlist.label}>
                                                    <Link
                                                        to={chlist.link}
                                                        className={`${listAnchorStyle} whitespace-pre`}
                                                    >
                                                        {chlist.label}
                                                        {chlist.logo && (
                                                            <>
                                                                &nbsp; <span className="font-novocento">LOGIQUE</span>
                                                            </>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul>
                </div>
                <div className="w-full px-15px mt-8">
                    {footerContent}
                    <p>
                        &copy; {new Date().getFullYear()}{' '}
                        <span className="font-novocento-bold">LOGIQUE Digital Indonesia</span>. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;

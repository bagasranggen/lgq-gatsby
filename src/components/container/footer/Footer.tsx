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
                <div className="lg:w-1/3 w-full lg:mb-0 mb-4 px-15px">
                    <a href="/">
                        <h4 className="text-5xl font-novocento-bold leading-none mb-4">LOGIQUE</h4>
                    </a>
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
                            <p className="flex-grow duration-150 group-hover:text-yellow-500">(021) 22708935 / 36</p>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=62811870321" className="flex -mx-15px group">
                            <div className="px-15px">
                                <img src={IconPhone} alt="office whatsapp group" className="w-5" />
                            </div>
                            <p className="flex-grow duration-150 group-hover:text-yellow-500">0811-870-321</p>
                        </a>
                    </div>

                    <div className="flex">
                        <a href="/" className="group mr-3">
                            <svg width="41" height="41" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(-7 -7)" fill="none" fillRule="evenodd">
                                    <circle
                                        className="duration-200 group-hover:fill-blue-600 group-hover:stroke-transparent"
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
                        <a href="/" className="group mr-3">
                            <svg width="41" height="41" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                                <title>76FD0D74-8BD2-472D-A483-7569880E2189@2.00x</title>
                                <g id="Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Footer-English" transform="translate(-213.000000, -396.000000)">
                                        <g id="Group" transform="translate(205.000000, 390.000000)">
                                            <g id="Circle" transform="translate(1.222222, 0.000000)">
                                                <circle
                                                    id="Oval"
                                                    stroke="#fff"
                                                    fill="transparent"
                                                    className="duration-200 group-hover:fill-blue-300 group-hover:stroke-transparent"
                                                    transform="translate(26.888889, 26.888889) rotate(-45.000000) translate(-26.888889, -26.888889)"
                                                    cx="26.8888889"
                                                    cy="26.8888889"
                                                    r="19.5555556"
                                                />
                                                <path
                                                    d="M36.8778896 23.8255442C36.8778896 23.9933816 36.8871178 24.1612191 36.8871178 24.3290566 36.8893905 28.826297 34.3338709 32.9681141 30.2183688 35.1373239 26.1028667 37.3065337 21.0800575 37.1591223 17.1111111 34.7526469v0C21.0054064 35.3091606 23.7461782 32.9417689 23.7461782 32.9417689 20.2763796 32.6855959 19.5934937 29.9206944 19.5934937 29.9206944 20.8208427 30.1150325 21.5867823 29.8411925 21.5867823 29.8411925 17.6832588 28.9578374 18.0154735 25.5392531 18.0154735 25.5392531 18.9198359 26.0604326 19.9626212 26.0957668 19.9626212 26.0957668 16.5205071 23.1895285 18.6799031 20.3716257 18.6799031 20.3716257 22.2973527 24.5587289 27.612789 24.8502361 27.9542319 24.8590696 27.8799442 24.5370924 27.842809 24.2082812 27.8434937 23.8785455 27.8458945 22.1045576 28.9788734 20.5115584 30.7022185 19.8591004 32.4255636 19.2066424 34.3903557 19.6268264 35.6597688 20.9193058L36.3241984 20.7249677C37.0787969 20.4881941 37.8130972 20.195812 38.5205071 19.8504462 38.2990306 21.113644 36.6748695 22.1825037 36.5549031 22.2531721 36.5498065 22.2531721 36.5456749 22.257127 36.5456749 22.2620056H36.5549031C37.8191648 22.1383359 39.1111111 21.6259899 39.1111111 21.6259899 38.7235272 22.4033424 37.1270507 23.631206 36.8778896 23.8255442z"
                                                    id="Path"
                                                    fill="#fff"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="group mr-3 duration-200 border border-white rounded-full hover:border-transparent"
                        >
                            <svg width="39" height="39" viewBox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">
                                <title>B41BF21D-9E41-4B42-90EB-393FF13B1B1F@2.00x</title>
                                <defs>
                                    <linearGradient
                                        x1="92.4797064%"
                                        y1="49.740663%"
                                        x2="-17.4701301%"
                                        y2="51.796544%"
                                        id="linearGradient-1"
                                    >
                                        <stop stopColor="#af11ff" offset="0" />
                                        <stop stopColor="#db19b6" offset="24.566474%" />
                                        <stop stopColor="#ed1c99" offset="39.5682803%" />
                                        <stop stopColor="#ee2294" offset="52%" />
                                        <stop stopColor="#ef3285" offset="59%" />
                                        <stop stopColor="#f24e6e" offset="66%" />
                                        <stop stopColor="#f6734c" offset="73%" />
                                        <stop stopColor="#fba422" offset="83.0450686%" />
                                        <stop stopColor="#febf0a" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <g id="Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Icon---Berwarna" transform="translate(-153.000000, -43.000000)">
                                        <g id="Circle" transform="translate(145.000000, 35.000000)">
                                            <circle
                                                id="Oval"
                                                fill="url(#linearGradient-1)"
                                                transform="translate(27.500000, 27.500000) rotate(-45.000000) translate(-27.500000, -27.500000)"
                                                cx="27.5"
                                                cy="27.5"
                                                r="19.1304348"
                                                className="duration-200 opacity-0 group-hover:opacity-100"
                                            />
                                            <path
                                                d="M32.8270671 16.7391305H22.172933C19.1719267 16.7391305 16.7391305 19.1719267 16.7391305 22.172933V32.8270671C16.7391305 35.8280734 19.1719267 38.2608696 22.172933 38.2608696H32.8270671C35.8280734 38.2608696 38.2608696 35.8280734 38.2608696 32.8270671V22.172933C38.2608696 19.1719267 35.8280734 16.7391305 32.8270671 16.7391305zM35.9223939 32.8270671C35.9223939 34.5365689 34.5365689 35.9223939 32.8270671 35.9223939H22.172933C20.4634312 35.9223939 19.0776062 34.5365689 19.0776062 32.8270671V22.172933C19.0776062 20.4634312 20.4634312 19.0776062 22.172933 19.0776062H32.8270671C34.5365689 19.0776062 35.9223939 20.4634312 35.9223939 22.172933V32.8270671zM33.2248991 23.104442C32.5014422 23.104442 31.9149646 22.5179643 31.9149646 21.7945074 31.9149646 21.0710506 32.5014422 20.4845729 33.2248991 20.4845729 33.948356 20.4845729 34.5348336 21.0710506 34.5348336 21.7945074 34.5295495 22.5157642 33.9461559 23.0991578 33.2248991 23.104442zM27.5000001 21.9594622C24.4400455 21.9594622 21.9594622 24.4400455 21.9594622 27.5000001 21.9594622 30.5599546 24.4400455 33.040538 27.5000001 33.040538 30.5599546 33.040538 33.040538 30.5599546 33.040538 27.5000001 33.040538 26.030558 32.4568044 24.6213006 31.417752 23.5822481 30.3786996 22.5431957 28.9694421 21.9594622 27.5000001 21.9594622v0zm0 8.7426C25.73155 30.7020622 24.2979379 29.2684502 24.2979379 27.5000001 24.2979379 25.73155 25.73155 24.2979379 27.5000001 24.2979379 29.2684502 24.2979379 30.7020622 25.73155 30.7020622 27.5000001 30.7020622 29.2684502 29.2684502 30.7020622 27.5000001 30.7020622z"
                                                id="Shape"
                                                fill="#fff"
                                                fillRule="nonzero"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="/" className="group">
                            <svg width="41" height="41" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                                <title>5D6E2CF7-F9B5-4DE6-A4C5-3AEC89D86894@2.00x</title>
                                <g id="Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Footer-English" transform="translate(-323.000000, -398.000000)">
                                        <g id="Linkedin-Circle" transform="translate(315.000000, 390.000000)">
                                            <circle
                                                id="Oval"
                                                stroke="#fff"
                                                fill="transparent"
                                                cx="28.1111111"
                                                cy="28.1111111"
                                                r="19.5555556"
                                                className="duration-200 group-hover:stroke-transparent group-hover:fill-blue-550"
                                            />
                                            <g id="Group" transform="translate(17.111111, 15.888889)" fill="#fff">
                                                <path
                                                    d="M2.93567837.38693464C4.34146731.395776255 5.47638189 1.53790182 5.47638189 2.94371857 5.47638189 4.41507536 4.25427134 5.5246231 2.91959796 5.49246229 1.58492459 5.46030149.362814037 4.38291455.362814037 2.93567837.376047665 1.5241533 1.52409126.386872606 2.93567837.38693464z"
                                                    id="Path"
                                                />
                                                <path
                                                    d="M4.41507536 21.6050252H1.42412057C1.03779878 21.6050252.724623083 21.2918495.724623083 20.9055277V8.14572863C.724623083 7.75808484 1.03650181 7.44259599 1.42412057 7.43819094H4.41507536C4.80402316 7.44253713 5.11826686 7.75678083 5.12261305 8.14572863V20.9055277C5.118208 21.2931464 4.80271915 21.6050252 4.41507536 21.6050252v0z"
                                                    id="Path"
                                                />
                                                <path
                                                    d="M21.637186 11.9246231C21.637186 9.24701343 19.4665544 7.0763819 16.7889447 7.0763819H16.0251256C14.6142883 7.07656136 13.2928779 7.76729862 12.4874372 8.92562813 12.4070352 9.04623115 12.3266332 9.17487437 12.2542714 9.30351758H12.2140704V7.73567838C12.2141292 7.57446996 12.0857727 7.44254792 11.9246231 7.43819094H8.19396984C8.03145356 7.44241427 7.90070572 7.5731621 7.8964824 7.73567838V21.3155779C7.90083938 21.4767275 8.03276142 21.605084 8.19396984 21.6050252H12.0050251C12.0817913 21.6050252 12.1554133 21.5745299 12.2096952 21.520248 12.2639771 21.4659661 12.2944724 21.3923441 12.2944724 21.3155779V13.4683417C12.2944724 12.1175879 13.3798995 10.9839196 14.7306533 10.9758794 15.3954671 10.9636413 16.0367516 11.2218962 16.5075377 11.6914573 16.9683002 12.1555748 17.2281885 12.7821944 17.2311558 13.4361809V21.3155779C17.2310969 21.4767863 17.3594535 21.6087084 17.520603 21.6130654H21.3396985C21.5022148 21.608842 21.6329626 21.4780942 21.637186 21.3155779V11.9246231v0z"
                                                    id="Path"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/3 w-6/12 lg:mb-0 mb-4 px-15px">
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
                <div className="lg:w-1/3 w-6/12 lg:mb-0 mb-4 px-15px">
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
                                                        className={`${listAnchorStyle} md:whitespace-pre`}
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

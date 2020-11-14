import React from 'react';

// import Link from 'gatsby-link';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import HomeCard from 'components/home/homeCard/HomeCard';
import HomeCardLink from 'components/home/homeCardLink/HomeCardLink';
import TitleHeadline from 'components/common/titleHeadline/TitleHeadline';
// import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';

import imgVideo from 'assets/img/jpg/img-video-banner.jpg';
import videoMp4 from 'assets/vid/mainbanner-video.mp4';
import videoWebm from 'assets/vid/mainbanner-video.webm';

import iconArrowRight from 'assets/img/icon/icon-arrow-right.svg';
import iconWebsite from 'assets/img/icon/home/icon-website.svg';
import iconMobile from 'assets/img/icon/home/icon-mobile.svg';
import iconSystem from 'assets/img/icon/home/icon-system.svg';
import iconPentest from 'assets/img/icon/home/icon-pentest.svg';
import iconDokodemo from 'assets/img/icon/home/icon-dokodemo.svg';
import iconNippo from 'assets/img/icon/home/icon-nippo.webp';
import iconSugoi from 'assets/img/icon/home/icon-sugoi-saiyo.webp';
import iconService from 'assets/img/icon/home/icon-service.webp';
import iconProduct from 'assets/img/icon/home/icon-product.webp';
import iconContact from 'assets/img/icon/home/icon-contact.webp';
import iconCareer from 'assets/img/icon/home/icon-career.webp';

import bgService from 'assets/img/bg/home/bg-service.png';
import bgProduct from 'assets/img/bg/home/bg-product.png';
import bgCareer from 'assets/img/bg/home/bg-career.png';
import bgContact from 'assets/img/bg/home/bg-contact.png';
import bgLinkAbout from 'assets/img/jpg/home/bg-links-about.jpg';
import bgLinkContact from 'assets/img/jpg/home/bg-links-contact.jpg';
import bgLinkWork from 'assets/img/jpg/home/bg-links-ourwork.jpg';

const Index = (): React.ReactElement => {
    const indexLink = [
        { lang: 'en', link: '/en/' },
        { lang: 'id', link: '#' },
        { lang: 'jp', link: '/jp/' },
    ];

    return (
        <Layout pageLang="id" langs={indexLink}>
            <div className="">
                <video poster={imgVideo} playsInline autoPlay muted loop className="absolute left-0 -z-10 w-full">
                    <source src={videoWebm} type="video/webm" />
                    <source src={videoMp4} type="video/mp4" />
                </video>
                <div className="bg-white bg-opacity-75 absolute left-0 h-full w-full -z-10" />
            </div>
            <Container>
                {/* <Breadcrumbs breadcrumbLinks={breadcrumb} /> */}
                <div className="w-10/12 py-12 mx-auto text-center">
                    <h1 className="text-3xl mb-3">
                        Pengembang Sistem Web Terbaik di Jakarta, <br /> Menyediakan Solusi Digital untuk Bisnis Anda
                    </h1>
                    <p>
                        <span className="font-novocento-bold">LOGIQUE DIGITAL INDONESIA</span> adalah Perusahaan
                        Pengembang Sistem &amp; Aplikasi (System &amp; Application Development) berbasis Web maupun
                        Mobile yang memiliki profesionalitas tinggi. Spesialisasi dalam pembuatan dan perancangan WebApp
                        dengan penekanan pada Pemasaran Digital (Digital Marketing) untuk meningkatkan dan memaksimalkan
                        keuntungan bisnis Anda. <br />
                        Kami telah bekerja dengan banyak perusahaan ternama baik lokal maupun internasional, memenuhi
                        berbagai permintaan, seperti pembuatan sistem lelang online, E-commerce, sistem rekrutmen
                        karyawan, e-money, berbagai aplikasi internal perusahaan dan pengoperasian iklan digital.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-15px mb-8">
                    <HomeCard link="/" width="4-col" icon={iconWebsite} iconAlt="Jasa Pembuatan Website">
                        Jasa Pembuatan <br /> Website
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconMobile} iconAlt="Jasa Pembuatan Website">
                        Jasa Pembuatan <br /> Aplikasi
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconSystem} iconAlt="Jasa Pembuatan Website">
                        Jasa Pembuatan <br /> Sistem Web
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconPentest} iconAlt="Jasa Pembuatan Website">
                        Jasa Penetration <br /> Testing
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10 bg-white">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Portofolio Kami
                </TitleHeadline>
                <div className="flex flex-wrap -mx-15px">
                    <div className="w-1/2 px-15px">
                        <p>
                            <span className="font-novocento-bold">LOGIQUE DIGITAL INDONESIA</span> adalah Developer Web
                            Application / Aplikasi Mobile profesional yang memiliki spesialisasi dalam pembuatan dan
                            perancangan WebApp, dengan penekanan pada Pemasaran Digital (Digital Marketing), untuk
                            meningkatkan dan memaksimalkan keuntungan bisnis Anda. <br />
                            <br />
                            Kami telah bekerja dengan banyak perusahaan internasional maupun lokal ternama, memenuhi
                            berbagai permintaan, seperti pembuatan sistem lelang online, E-commerce, sistem rekrutmen
                            karyawan, e-money, berbagai aplikasi internal perusahaan, dan pengoperasian iklan digital.
                        </p>
                        <img src={iconArrowRight} alt="Portofolio Kami" className="mt-6" />
                    </div>
                </div>
            </Container>

            <Container className="py-10">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Kami Menyediakan <b>Solusi HR-Tech</b> di Indonesia
                </TitleHeadline>
                <p className="mb-4">
                    <span className="font-novocento-bold">LOGIQUE</span> berkomitmen untuk berkontribusi pada industri
                    TI di Indonesia (SI, pengembangan sistem Web, pemasaran digital, dll.). Kami telah mengembangkan
                    tiga sistem internal untuk membantu meningkatkan produktivitas dan efisiensi karyawan, serta untuk
                    menyederhanakan proses rekrutmen dan memudahkan evaluasi kandidat. Kami telah mengaplikasikan
                    produk-produk ini di perusahaan kami sendiri, hasilnya terjadi peningkatan yang sangat nyata dan
                    drastis sehingga kami memutuskan untuk menjual produk-produk ini
                </p>
                <div className="flex flex-wrap -mx-15px mb-8">
                    <HomeCard
                        link="/"
                        width="3-col"
                        icon={iconDokodemo}
                        iconAlt="Jasa Pembuatan Website"
                        iconStyle="h-16 w-32 object-contain object-left"
                        noShadow
                    >
                        <p>Dokodemo Kerja</p>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> menawarkan kepada Anda sebuah sistem
                            web untuk bekerja remote bernama Dokodemo-Kerja. Sistem ini mampu memonitor dan
                            mengkalkulasi jam kerja karyawan secara akurat.
                        </p>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="3-col"
                        icon={iconNippo}
                        iconAlt="Jasa Pembuatan Website"
                        iconStyle="h-16 w-32 object-contain object-left"
                        noShadow
                    >
                        <p>Nippo</p>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> menawarkan sistem manajemen pelaporan
                            harian untuk karyawan yang bernama Nippo. Sistem ini memberikan solusi bagi perusahaan,
                            dimana perusahaan dapat dengan mudah melakukan monitoring, penilaian, dan evaluasi kinerja
                            karyawan setiap bulan.
                        </p>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="3-col"
                        icon={iconSugoi}
                        iconAlt="Jasa Pembuatan Website"
                        iconStyle="h-16 w-32 object-contain object-left"
                        noShadow
                    >
                        <p>Sugoi Saiyo</p>
                        <p className="text-base mt-3">
                            Sugoi Saiyo adalah sebuah sistem manajemen yang dapat membantu aktivitas rekrutmen menjadi
                            lebih efektif dan efisien bagi tim HRD atau para pencari kerja. Sistem ini akan menentukan
                            kapan dan dimana proses interview akan dilaksanakan.
                        </p>
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Studi Kasus
                </TitleHeadline>
                <p className="mb-4">
                    Selama lebih dari 7 tahun, <span className="font-novocento-bold">LOGIQUE</span> telah membantu
                    berbagai klien ternama, dari startup lokal sampai dengan perusahaan internasional untuk
                    mengembangkan Website, Sistem, Web App dan Aplikasi Mobile.
                </p>
                <div className="mb-4">{/* s */}</div>
                <p className="">
                    <span className="font-novocento-bold">LOGIQUE</span> berkomitmen untuk memberikan solusi terbaik
                    untuk klien-klien kami; berdasarkan pengalaman kami dalam e-commerce, sistem management pelelangan
                    mobil/motor, pengembangan CRM, aplikasi e-learning, PWA, sistem rekrutmen dan lainnya.
                </p>
            </Container>

            <Container className="py-10">
                <div className="flex flex-wrap">
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconService}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgService}
                    >
                        <div className="text-2xl -mb-3">See Service List</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconProduct}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgProduct}
                    >
                        <div className="text-2xl -mb-3">See Product List</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconContact}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgContact}
                    >
                        <div className="text-2xl -mb-3">Contact Us</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconCareer}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgCareer}
                    >
                        <div className="text-2xl -mb-3">Career</div>
                    </HomeCard>
                </div>
            </Container>

            <Container className="pb-10">
                <div className="flex flex-wrap -mx-15px">
                    <HomeCardLink title="Tentang Kami" bg={bgLinkAbout}>
                        <span className="font-novocento-bold">LOGIQUE Digital Indonesia</span> adalah konsultan IT
                        terkemuka dan perusahaan pengembangan sistem yang dipimpin oleh seorang pengusaha Jepang yang
                        berbasis di Jakarta.
                    </HomeCardLink>
                    <HomeCardLink title="Hasil Kerja Kami" bg={bgLinkWork}>
                        <span className="font-novocento-bold">LOGIQUE</span> telah mengembangkan banyak Situs Web,
                        Sistem dan Aplikasi, Kampanye Pemasaran Digital yang terbukti sukses menjawab setiap kebutuhan
                        klien kami.
                    </HomeCardLink>
                    <HomeCardLink title="Hubungi Kami" bg={bgLinkContact}>
                        Hubungi Kami sekarang, kami akan berikan solusi terbaik.
                    </HomeCardLink>
                </div>
            </Container>

            <Container className="pb-10">
                <h2 className="text-2xl text-center">Layanan Lainnya</h2>
                <div className="flex flex-wrap -mx-15px mb-8">
                    <HomeCard link="/" width="4-col" noShadow noArrow>
                        <h4 className="text-xl font-semibold">Jasa Pembuatan Website</h4>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> adalah perusahaan pengembangan situs
                            web yang berupaya meningkatkan bisnis Anda.
                        </p>
                    </HomeCard>
                    <HomeCard link="/" width="4-col" noShadow noArrow>
                        <h4 className="text-xl font-semibold">Jasa Pembuatan Aplikasi</h4>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> memberikan solusi yang efisien dalam
                            pengembangan Mobile App untuk iOS &amp; Android.
                        </p>
                    </HomeCard>
                    <HomeCard link="/" width="4-col" noShadow noArrow>
                        <h4 className="text-xl font-semibold">Jasa Pembuatan Sistem Web</h4>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> membantu mencapai tujuan bisnis Anda
                            melalui kemajuan terbaru dalam teknologi berbasis web.
                        </p>
                    </HomeCard>
                    <HomeCard link="/" width="4-col" noShadow noArrow>
                        <h4 className="text-xl font-semibold">Jasa Penetration Testing</h4>
                        <p className="text-base mt-3">
                            <span className="font-novocento-bold">LOGIQUE</span> akan melakukan berbagai uji coba
                            keamanan di situs web Anda.
                        </p>
                    </HomeCard>
                </div>
            </Container>
        </Layout>
    );
};

export default Index;

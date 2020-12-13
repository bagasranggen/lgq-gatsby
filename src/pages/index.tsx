import React from 'react';

import { isMobileOnly } from 'react-device-detect';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import HomeCard from 'components/home/homeCard/HomeCard';
import HomeLinks from 'components/home/homeLinks/HomeLinks';
import HomeOtherLink from 'components/home/homeOtherLink/HomeOtherLink';
import TitleHeadline from 'components/common/titleHeadline/TitleHeadline';
import Button from 'components/common/button/Button';

import imgVideo from 'assets/img/jpg/img-video-banner.jpg';
import videoMp4 from 'assets/vid/mainbanner-video.mp4';
import videoWebm from 'assets/vid/mainbanner-video.webm';

import imgPorto from 'assets/img/png/home/img-our-portfolio.png';
import imgPortoWebp from 'assets/img/webp/home/img-our-portfolio.webp';
import imgCaseStudyJba from 'assets/img/jpg/home/img-case-study-jba.jpg';
import imgWebpCaseStudyJba from 'assets/img/webp/home/img-case-study-jba.webp';
import imgCaseStudyKlikHoreca from 'assets/img/jpg/home/img-case-study-klikhoreca.jpg';
import imgWebpCaseStudyKlikHoreca from 'assets/img/webp/home/img-case-study-klikhoreca.webp';
import imgCaseStudyJbaInterview from 'assets/img/jpg/home/img-case-study-jba-interview.jpg';
import imgWebpCaseStudyJbaInterview from 'assets/img/webp/home/img-case-study-jba-interview.webp';

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

const Index = (): React.ReactElement => {
    const indexLink = [
        { lang: 'en', link: '/en/' },
        { lang: 'id', link: '#' },
        { lang: 'jp', link: '/jp/' },
    ];

    return (
        <Layout
            pageLang="id"
            sidebarActive="home"
            langs={indexLink}
            canonical="https://www.logique.co.id/"
            ogUrl="https://www.logique.co.id/"
        >
            {!isMobileOnly && (
                <div className="">
                    <video
                        poster={imgVideo}
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="absolute left-0 -z-10 w-full h-full object-cover"
                    >
                        <source src={videoWebm} type="video/webm" />
                        <source src={videoMp4} type="video/mp4" />
                    </video>
                    <div className="bg-white bg-opacity-75 absolute left-0 h-full w-full -z-10" />
                </div>
            )}

            <Container>
                <div className="w-full md:w-10/12 py-12 mx-auto text-center">
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
                        Jasa Pembuatan <br className="hidden md:block" /> Website
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconMobile} iconAlt="Jasa Pembuatan Website">
                        Jasa Pembuatan <br className="hidden md:block" /> Aplikasi
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconSystem} iconAlt="Jasa Pembuatan Website">
                        Jasa Pembuatan <br className="hidden md:block" /> Sistem Web
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconPentest} iconAlt="Jasa Pembuatan Website">
                        Jasa Penetration <br className="hidden md:block" /> Testing
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10 bg-white">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Portofolio Kami
                </TitleHeadline>
                <div className="flex flex-wrap -mx-15px">
                    <div className="w-full md:w-1/2 px-15px mb-30px md:mb-0">
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
                        <img data-src={iconArrowRight} alt="Portofolio Kami" className="mt-6 lazyload" />
                    </div>
                    <div className="w-full md:w-1/2 px-15px">
                        <picture>
                            <source data-srcSet={imgPortoWebp} type="image/webp" />
                            <img data-src={imgPorto} alt="logique portfolio" className="w-full lazyload" />
                        </picture>
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
                <div className="flex flex-wrap -mx-15px mb-4">
                    <HomeCard
                        link="/"
                        width="3-col"
                        padding="p-10px"
                        icon={imgCaseStudyJba}
                        iconWebp={imgWebpCaseStudyJba}
                        iconStyle="w-full h-48 object-cover"
                        label="Website"
                    >
                        <h6 className="text-xs uppercase">JBA Indonesia</h6>
                        <h4 className="text-lg">Online Auction System</h4>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="3-col"
                        padding="p-10px"
                        icon={imgCaseStudyKlikHoreca}
                        iconWebp={imgWebpCaseStudyKlikHoreca}
                        iconStyle="w-full h-48 object-cover"
                        label="Web App"
                    >
                        <h6 className="text-xs uppercase">Klikhoreca</h6>
                        <h4 className="text-lg">Progressive Web App</h4>
                    </HomeCard>
                    <HomeCard
                        target="_blank"
                        link="https://www.logique.co.id/blog/2020/11/13/interview-jba-standardisasi-dan-dx-dalam-industri-lelang-mobil/"
                        width="3-col"
                        padding="p-10px"
                        icon={imgCaseStudyJbaInterview}
                        iconWebp={imgWebpCaseStudyJbaInterview}
                        iconStyle="w-full h-48 object-cover"
                    >
                        <h6 className="text-xs uppercase">Interview</h6>
                        <h4 className="text-lg">PT JBA Indonesia: Standardisasi dan DX dalam industri lelang mobil </h4>
                    </HomeCard>
                </div>
                <div className="flex justify-center -mx-15px">
                    <div className="md:w-3/12 w-full px-15px">
                        <Button type="anchor" link="/" color="yellow" className="text-center mt-5 mb-6">
                            Lihat Lebih Banyak
                        </Button>
                    </div>
                </div>
                <p className="">
                    <span className="font-novocento-bold">LOGIQUE</span> berkomitmen untuk memberikan solusi terbaik
                    untuk klien-klien kami; berdasarkan pengalaman kami dalam e-commerce, sistem management pelelangan
                    mobil/motor, pengembangan CRM, aplikasi e-learning, PWA, sistem rekrutmen dan lainnya.
                </p>
            </Container>

            <Container className="py-10">
                <div className="flex flex-wrap -mx-15px">
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

            <HomeLinks lang="id" />

            <HomeOtherLink lang="id" />
        </Layout>
    );
};

export default Index;

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
        { lang: 'en', link: '#' },
        { lang: 'id', link: '/' },
        { lang: 'jp', link: '/jp/' },
    ];

    return (
        <Layout
            pageLang="en"
            sidebarActive="home"
            langs={indexLink}
            canonical="https://www.logique.co.id/en/"
            ogUrl="https://www.logique.co.id/en/"
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
                {/* <Breadcrumbs breadcrumbLinks={breadcrumb} /> */}
                <div className="w-full md:w-10/12 py-12 mx-auto text-center">
                    <h1 className="text-3xl mb-3">
                        The Top Web System Development Company in Jakarta, <br />
                        Providing Digital Solutions for Your Business
                    </h1>
                    <p>
                        <span className="font-novocento-bold">LOGIQUE DIGITAL INDONESIA</span> is a professional Web
                        Application / Mobile App Developer that specializes in creating and designing WebApps, with an
                        emphasis on Digital Marketing operations with the end goal of improving your business and
                        maximizing profits. <br />
                        Having worked with many high-end clients ranging from the local to international levels, our
                        company has catered to various requests, such as creating online auction systems, E-Commerce,
                        employee recruitment systems and digital ads operations.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-15px mb-8">
                    <HomeCard link="/" width="4-col" icon={iconWebsite} iconAlt="Jasa Pembuatan Website">
                        Website Production <br className="hidden md:block" /> Service
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconMobile} iconAlt="Jasa Pembuatan Website">
                        Apps Development <br className="hidden md:block" /> Service
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconSystem} iconAlt="Jasa Pembuatan Website">
                        Web System <br className="hidden md:block" /> Development Service
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconPentest} iconAlt="Jasa Pembuatan Website">
                        Penetration esting <br className="hidden md:block" /> Service
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10 bg-white">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Our Portfolio
                </TitleHeadline>
                <div className="flex flex-wrap -mx-15px">
                    <div className="w-full md:w-1/2 px-15px mb-30px md:mb-0">
                        <p>
                            <span className="font-novocento-bold">LOGIQUE DIGITAL INDONESIA</span> We are committed to
                            producing a variety of high quality digital products for our clients which conform to an
                            international standard of excellence.
                            <br />
                            <br />
                            We are trustworthy experts and can work flexibly according to your specific requests.
                            Working with us and utilizing the best solutions provided by our team is an opportunity to
                            grow and improve your business’s overall profits in a digitalized age.
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
                    We Provide <b>HR-Tech Solutions</b> In Indonesia
                </TitleHeadline>
                <p className="mb-4">
                    <span className="font-novocento-bold">LOGIQUE</span> is committed to contributing to
                    Indonesia&apos;s rapidly growing IT industry (SI, Web system development, digital marketing, etc.),
                    having developed three internal systems to assist with increasing employee productivity &amp;
                    efficiency, and to simplify the recruitment process in regards to potential candidate evaluation.
                    Upon integrating these products within our own company, we have found a very apparent &amp;
                    significant improvement, resulting in our decision to put these products up for sale
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
                            <span className="font-novocento-bold">LOGIQUE</span> offers a flexible solution to the
                            limitations of remote working for employees; our software, Dokodemo-Kerja. This system can
                            accurately monitor and calculate employee working hours.
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
                            <span className="font-novocento-bold">LOGIQUE</span> offers a helpful way to assist
                            management in easily monitoring and evaluating the progression of employee performance
                            through a daily reporting system called Nippo.
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
                            Sugoi Saiyo is a system designed to carry out the recruitment process so that the most
                            suitable candidates can be filtered through to HR quickly and more efficiently,
                            automatically structuring the time and place of the interview.
                        </p>
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    Case Study
                </TitleHeadline>
                <p className="mb-4">
                    For more than 7 years, <span className="font-novocento-bold">LOGIQUE</span> has helped many high-end
                    clients, ranging from the local startups to international enterprise, by developing various
                    Websites, System, Web Apps and Mobile Apps.
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
                        <h4 className="text-lg">
                            PT JBA Indonesia: Standardization and DX in the automobile auction industry{' '}
                        </h4>
                    </HomeCard>
                </div>

                <div className="flex justify-center -mx-15px">
                    <div className="md:w-3/12 w-full px-15px">
                        <Button type="anchor" link="/" color="yellow" className="text-center mt-5 mb-6">
                            View More
                        </Button>
                    </div>
                </div>
                <p className="">
                    <span className="font-novocento-bold">LOGIQUE</span> LOGIQUE commits to providing the best solutions
                    to our clients; having worked successfully on many projects such as e-commerce, car/motorcycle
                    auction management system, CRM development, e-learning App, PWA, Recruitment system and more.
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

            <HomeLinks lang="en" />

            <HomeOtherLink lang="en" />
        </Layout>
    );
};

export default Index;

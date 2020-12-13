import React from 'react';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';
import TitleHeadline from 'components/common/titleHeadline/TitleHeadline';
import Button from 'components/common/button/Button';
import ProductFeature from 'components/product/productFeature/ProductFeature';
import LogiqueContact from 'components/logique/logiqueContact/LogiqueContact';

import iconDokodemo from 'assets/img/icon/product/icon-dokodemo.svg';
import iconSugoi from 'assets/img/icon/product/icon-sugoi-saiyo.png';
import iconSugoiWebp from 'assets/img/icon/product/icon-sugoi-saiyo.webp';
import iconNippo from 'assets/img/icon/product/icon-nippo.png';
import iconNippoWebp from 'assets/img/icon/product/icon-nippo.webp';

import imgProduct from 'assets/img/png/product/img-product.png';
import imgProductWebp from 'assets/img/webp/product/img-product.webp';
import imgDokodemo1 from 'assets/img/jpg/product/dokodemo_1.jpg';
import imgDokodemo1Webp from 'assets/img/webp/product/dokodemo_1.webp';
import imgDokodemo2 from 'assets/img/jpg/product/dokodemo_2.jpg';
import imgDokodemo2Webp from 'assets/img/webp/product/dokodemo_2.webp';
import imgDokodemo3 from 'assets/img/jpg/product/dokodemo_3.jpg';
import imgDokodemo3Webp from 'assets/img/webp/product/dokodemo_3.webp';
import imgDokodemo4 from 'assets/img/jpg/product/dokodemo_4.jpg';
import imgDokodemo4Webp from 'assets/img/webp/product/dokodemo_4.webp';
import imgDokodemo5 from 'assets/img/jpg/product/dokodemo_5.jpg';
import imgDokodemo5Webp from 'assets/img/webp/product/dokodemo_5.webp';
import imgSugoi1 from 'assets/img/jpg/product/sugoi_1.jpg';
import imgSugoi1Webp from 'assets/img/webp/product/sugoi_1.webp';
import imgSugoi2 from 'assets/img/jpg/product/sugoi_2.jpg';
import imgSugoi2Webp from 'assets/img/webp/product/sugoi_2.webp';
import imgSugoi3 from 'assets/img/jpg/product/sugoi_3.jpg';
import imgSugoi3Webp from 'assets/img/webp/product/sugoi_3.webp';
import imgNippo1 from 'assets/img/jpg/product/nippo_1.jpg';
import imgNippo1Webp from 'assets/img/webp/product/nippo_1.webp';
import imgNippo2 from 'assets/img/jpg/product/nippo_2.jpg';
import imgNippo2Webp from 'assets/img/webp/product/nippo_2.webp';
import imgNippo3 from 'assets/img/jpg/product/nippo_3.jpg';
import imgNippo3Webp from 'assets/img/webp/product/nippo_3.webp';
import imgNippo4 from 'assets/img/jpg/product/nippo_4.jpg';
import imgNippo4Webp from 'assets/img/webp/product/nippo_4.webp';

const Product = (): React.ReactElement => {
    const headerLink = [
        { lang: 'en', link: '#' },
        { lang: 'id', link: '/produk' },
        { lang: 'jp', link: '/jp/product' },
    ];

    const featureDokodemo = [
        {
            img: imgDokodemo1,
            imgWebp: imgDokodemo1Webp,
            imgAlt: 'Track time based projects',
            description: 'Track time based projects',
        },
        {
            img: imgDokodemo2,
            imgWebp: imgDokodemo2Webp,
            imgAlt: 'Track activity through screenshots',
            description: 'Track activity through screenshots',
        },
        {
            img: imgDokodemo3,
            imgWebp: imgDokodemo3Webp,
            imgAlt: 'Track work hour and break time',
            description: 'Track work hour and break time',
        },
        {
            img: imgDokodemo4,
            imgWebp: imgDokodemo4Webp,
            imgAlt: 'View Attendance records, Leave, and Holidays',
            description: 'View Attendance records, Leave, and Holidays',
        },
        {
            img: imgDokodemo5,
            imgWebp: imgDokodemo5Webp,
            imgAlt: 'Track employee location by using GPS',
            description: 'Track employee location by using GPS',
        },
    ];

    const featureSugoi = [
        {
            img: imgSugoi1,
            imgWebp: imgSugoi1Webp,
            imgAlt: 'Create account feature for each candidates ',
            description: 'Create account feature for each candidates ',
        },
        {
            img: imgSugoi2,
            imgWebp: imgSugoi2Webp,
            imgAlt: 'Apply for multiple jobs at once ',
            description: 'Apply for multiple jobs at once ',
        },
        {
            img: imgSugoi3,
            imgWebp: imgSugoi3Webp,
            imgAlt: 'Upload CV, certificate, and all necessary documents',
            description: 'Upload CV, certificate, and all necessary documents',
        },
    ];

    const featureNippo = [
        {
            img: imgNippo1,
            imgWebp: imgNippo1Webp,
            imgAlt: 'Daily Reporting of all employees',
            description: 'Daily Reporting of all employees',
        },
        {
            img: imgNippo2,
            imgWebp: imgNippo2Webp,
            imgAlt: 'Statistic for each projects',
            description: 'Statistic for each projects',
        },
        {
            img: imgNippo3,
            imgWebp: imgNippo3Webp,
            imgAlt: 'Task overview',
            description: 'Task overview',
        },
        {
            img: imgNippo4,
            imgWebp: imgNippo4Webp,
            imgAlt: 'Task overview',
            description: 'Task overview',
        },
    ];

    const breadcrumb = [{ label: 'Home', link: '/en' }, { label: 'Product' }];

    return (
        <Layout
            pageLang="en"
            sidebarActive="product"
            langs={headerLink}
            title="HR Cloud Tool | Daily Report, Recruitment Management System | LOGIQUE Digital Indonesia"
            canonical="https://www.logique.co.id/en/product"
            ogUrl="https://www.logique.co.id/en/product"
        >
            <Container className="bg-gray-100 pt-6 pb-24 text-center">
                <Breadcrumbs breadcrumbLinks={breadcrumb} />
                <div className="flex justify-center">
                    <div className="lg:w-2/3">
                        <TitleHeadline
                            fontSize="lg"
                            textPosition="center"
                            borderLength="md"
                            borderWidth="md"
                            className="mt-8 font-bold"
                        >
                            Our Products
                        </TitleHeadline>

                        <p className="mb-12">
                            In order to help companies grow and adapt within the digital era, LOGIQUE develops and
                            provides digital products, such as HR management systems, to improve HR operations,
                            productivity, and potential for profit within an organization.
                        </p>
                        <div className="flex flex-wrap justify-center mb-12">
                            <div className="w-full md:w-1/3">
                                <a href="#product_dokodemo">
                                    <picture>
                                        {/* <source srcset="" type="image/"/> */}
                                        <img
                                            src={iconDokodemo}
                                            alt="dokodemo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <div className="w-full md:w-1/3">
                                <a href="#product_sugoi">
                                    <picture>
                                        <source srcSet={iconSugoiWebp} type="image/webp" />
                                        <img
                                            src={iconSugoi}
                                            alt="sugoisaiyo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <div className="w-full md:w-1/3">
                                <a href="product_nippo">
                                    <picture>
                                        <source srcSet={iconNippoWebp} type="image/webp" />
                                        <img
                                            src={iconNippo}
                                            alt="nippo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <p>
                            Our products range from solutions that aim to increase worker output through flexible
                            working hours and improved cost management through daily reports, to recruitment systems
                            which greatly assist in finding the most qualified employees in the most efficient manner
                            possible.
                        </p>
                    </div>
                </div>
            </Container>

            <Container className="bg-black text-white py-8 mb-4 md:mb-20">
                <div className="flex flex-wrap items-center md:items-start justify-center -mx-15px">
                    <div className="w-6/12 md:w-3/12 px-15px">
                        <div className="relative">
                            <picture>
                                <source srcSet={imgProductWebp} type="image/webp" />
                                <img
                                    src={imgProduct}
                                    alt="our products"
                                    className="w-full md:absolute top-0 left-0 mb-5 sm:mb-0"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 px-15px">
                        <p className="text-base md:text-2xl text-center md:text-left">
                            &quot;We create efficient digital products, especially HR management systems to improve
                            company productivity.&quot;
                        </p>
                    </div>
                </div>
            </Container>

            <Container className="py-10" id="product_dokodemo">
                <TitleHeadline
                    fontSize="lg"
                    textPosition="left"
                    borderLength="md"
                    borderWidth="md"
                    className="font-bold uppercase"
                >
                    Dokodemo Kerja
                </TitleHeadline>
                <h4 className="text-2xl mb-3">A solution to flexible working while maximizing productivity.</h4>
                <p className="mb-30px">
                    Do you experience trouble keeping track of your employee’s levels of productivity? Our software can
                    monitor and potentially increase overall employee output through keeping track of how they spend
                    their working hours in real-time through an auto screen capturing feature.
                </p>
                <ProductFeature col="3-col" features={featureDokodemo} />
                <p className="mb-30px">
                    Dokodemo-Kerja assists you in implementing more effective and flexible HR rules, adaptable to the
                    occasion. The program helps Managers regulate employee working hours, keeps track of their work, and
                    captures a screenshot randomly every 10 minutes. With this, staff will be free to work anywhere at
                    any time with an accurate working record, improving productivity significantly.
                </p>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/4">
                        <Button
                            type="anchor"
                            link="https://dokodemo-kerja.com/"
                            color="yellow"
                            className="text-center"
                            fullWidth
                            targetBlank
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>

            <Container className="bg-gray-100 py-10" id="product_sugoi">
                <TitleHeadline
                    fontSize="lg"
                    textPosition="left"
                    borderLength="md"
                    borderWidth="md"
                    className="font-bold uppercase"
                >
                    Sugoi Saiyo
                </TitleHeadline>
                <h4 className="text-2xl mb-3">A management system which makes recruitment easy</h4>
                <p className="mb-30px">
                    Sugoi Saiyo provides useful solutions for problems faced by Indonesian recruitment teams. Are you
                    tired of checking and screening numerous unqualified job applications, arranging interviews and
                    handling interviewees who don’t show up? You can minimize such headaches with Sugoi Saiyo. Job
                    seekers can apply, confirm their status, arrange an interview date and get an offering letter, all
                    through Sugoi Saiyo.
                </p>
                <ProductFeature col="3-col" features={featureSugoi} />
                <p className="mb-30px">
                    The system includes all of the basic recruitment processes. From CV receptions, screening, testing
                    and interview scheduling, to sending the offering letter; all these activities can be done through
                    Sugoi Saiyo.
                </p>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/4">
                        <Button type="anchor" link="#" color="yellow" className="text-center" fullWidth>
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>

            <Container className="py-10" id="product_nippo">
                <TitleHeadline
                    fontSize="lg"
                    textPosition="left"
                    borderLength="md"
                    borderWidth="md"
                    className="font-bold uppercase"
                >
                    Nippo
                </TitleHeadline>
                <h4 className="text-2xl mb-3">A Daily Reporting and Man-Hour Cost Management System</h4>
                <p className="mb-30px">
                    Nippo is a daily report cloud management tool. Through Nippo, HR managers and supervisors within
                    each department can examine how employees spend their working hours. Allowing for co-workers to tag
                    and evaluate each other’s work makes internal communication more active.
                </p>
                <ProductFeature col="2-col" features={featureNippo} />
                <p className="mb-30px">
                    This is a useful tool for HR to calculate the man-hour cost of each tasks conducted by every
                    employee. Through Nippo, evaluation and self-assessment can be done methodically every day.
                </p>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/4">
                        <Button
                            type="anchor"
                            link="https://nippo.id"
                            color="yellow"
                            className="text-center"
                            fullWidth
                            targetBlank
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>

            <LogiqueContact lang="en" />
        </Layout>
    );
};

export default Product;

import React from 'react';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import HomeCard from 'components/home/homeCard/HomeCard';
import TitleHeadline from 'components/common/titleHeadline/TitleHeadline';
import Button from 'components/common/button/Button';
// import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';

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
        { lang: 'id', link: '/' },
        { lang: 'jp', link: '#', active: true },
    ];

    // const breadcrumb = [
    //     { label: 'Home', link: '/' },
    //     { label: 'About', link: '#' },
    // ];

    return (
        <Layout
            pageLang="jp"
            langs={indexLink}
            title="ジャカルタのWebサイト/ホームページ制作会社 | LOGIQUE デジタルインドネシア"
            canonical="https://www.logique.co.id/en/"
            ogUrl="https://www.logique.co.id/en/"
        >
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
                    <h1 className="text-3xl mb-3 font-mplus-bold">
                        インドネシアでお客様の課題を <br /> Web・ITの活用で解決してきました
                    </h1>
                    <p>
                        Webシステム開発、Web・ホームページ制作、アプリ開発サービスをインドネシアで行っております。日系の会社としては圧倒的な実績があります。インドネシア国内のお客様のデジタル
                        /
                        ネットビジネスを戦略策定から制作開発、運用までサポートしています。ご予算に応じて成果のでるWeb/システムを制作開発運用することを心がけています。
                        <br />
                        デジタルマーケティングコンサルティング、モバイルアプリ開発、PWA開発、E-Commerce構築、SEO対策、ソーシャルメディア運用、クラウドサーバー運用など関連サービスも幅広く提供していますのでお気軽にご相談ください。
                    </p>
                </div>
                <div className="flex flex-wrap -mx-15px mb-8">
                    <HomeCard link="/" width="4-col" icon={iconWebsite} iconAlt="Jasa Pembuatan Website">
                        Webサイト / ホームページ制作
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconMobile} iconAlt="Jasa Pembuatan Website">
                        スマホ / モバイルApp開発
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconSystem} iconAlt="Jasa Pembuatan Website">
                        Webシステム開発
                    </HomeCard>
                    <HomeCard link="/" width="4-col" icon={iconPentest} iconAlt="Jasa Pembuatan Website">
                        Webセキュリティ脆弱性テスト
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10 bg-white">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    制作開発実績
                </TitleHeadline>
                <div className="flex flex-wrap -mx-15px">
                    <div className="w-1/2 px-15px">
                        <p>
                            Web・ホームページ制作、ECサイト構築、自動車産業向けWebシステム開発、採用管理システムやCRMシステムなどインドネシア内でのWeb制作、システム開発を数多く経験しています。今後もインドネシア、ASEAN諸国や日本のお客様のビジネス発展にデジタル
                            / ITを活用して貢献します。
                        </p>
                        <img src={iconArrowRight} alt="Portofolio Kami" className="mt-6" />
                    </div>
                    <div className="w-1/2 px-15px">
                        <picture>
                            <source srcSet={imgPortoWebp} type="image/webp" />
                            <img src={imgPorto} alt="logique portfolio" className="w-full" />
                        </picture>
                    </div>
                </div>
            </Container>

            <Container className="py-10">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    インドネシアで<b>HRテック</b>ソリューションを提供しています。
                </TitleHeadline>
                <p className="mb-4">
                    インドネシアのIT（SI、Web制作開発 · デジタルマーケティ ング）業界の発展に貢献したいと考えています。
                    当社で働くデザイナー, プラグラマー, デジタルマーケッターが気持ちよく, 効率的に働けるように,
                    また当社HR部門が効果的な採用活動と人事評価ができように、社内向けに3つのシステムツールの開発をして,
                    実際に使ってきました. 大きな効果を出すことに成功しましたので
                    この3つのシステムツールを製品として販売することにいたしました。
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
                            ドコデモクルジャは、リモートワーク｜テレワークを可能とするクラウドツールです。管理者にとっても効果的に社員の勤怠管理、勤務状況コントロールができるので双方にとってメリットのあるツールです。
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
                            スタッフの日々の勤務状況・内容を管理しつつ管理会計に利用可能なデータの集計を行う日報管理システム、正確でフェアな人事評価に有効です。
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
                            スゴイ採用は、採用企業と求職者の両者にメリットのある、ITの力で応募・採用プロセスの無駄を排除した、効率的な採用活動をするためのクラウドツールです。
                        </p>
                    </HomeCard>
                </div>
            </Container>

            <Container className="py-10">
                <TitleHeadline textPosition="left" borderLength="lg" borderWidth="md" fontSize="md">
                    ケーススタディ
                </TitleHeadline>
                <p className="mb-4">
                    インドネシアで多くのお客様のご支援をしてきました。自動車関連企業や金融機関など大企業から政府系期間、スタートアップ企業まで幅広く様々なサービスのご提供をしてインドネシアでプロジェクトを成功させるためのノウハウを得ました。幾つかのケーススタディをご紹介します。
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
                        <h6 className="text-xs uppercase">インタビュー</h6>
                        <h4 className="text-lg">
                            PT JBA Indonesia 自動車＆バイクオークション業界におけるDXの重要性と業界標準化について
                        </h4>
                    </HomeCard>
                </div>

                <div className="flex justify-center -mx-15px">
                    <div className="md:w-3/12 w-full px-15px">
                        <Button type="anchor" link="/" color="yellow" className="text-center mt-5 mb-6">
                            続きを見る
                        </Button>
                    </div>
                </div>
                <p className="">
                    インドネシア進出時のマーケティング支援、Webサイトやモバイルアプリのセキュリティ脆弱性診断などの実績も豊富にあります。当社の実績や経験をもっとご紹介することも可能ですのでお気軽にお問い合わせください。
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
                        <div className="text-2xl -mb-3">サービスを詳しくみる</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconProduct}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgProduct}
                    >
                        <div className="text-2xl -mb-3">製品について確認する</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconContact}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgContact}
                    >
                        <div className="text-2xl -mb-3">お問い合わせ</div>
                    </HomeCard>
                    <HomeCard
                        link="/"
                        width="md:w-1/2 w-full mb-6"
                        icon={iconCareer}
                        iconAlt="Jasa Pembuatan Website"
                        bgImage={bgCareer}
                    >
                        <div className="text-2xl -mb-3">採用/パートナー</div>
                    </HomeCard>
                </div>
            </Container>
        </Layout>
    );
};

export default Index;

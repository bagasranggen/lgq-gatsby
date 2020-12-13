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
        { lang: 'en', link: '/en/product' },
        { lang: 'id', link: '/produk' },
        { lang: 'jp', link: '#' },
    ];

    const featureDokodemo = [
        {
            img: imgDokodemo1,
            imgWebp: imgDokodemo1Webp,
            imgAlt: '日次・週次・月次での勤務時間管理が可能 ',
            description: '日次・週次・月次での勤務時間管理が可能 ',
        },
        {
            img: imgDokodemo2,
            imgWebp: imgDokodemo2Webp,
            imgAlt: '10分に1回ランダムにスクリーンキャプチャを取り管理サーバーに送信します',
            description: '10分に1回ランダムにスクリーンキャプチャを取り管理サーバーに送信します',
        },
        {
            img: imgDokodemo3,
            imgWebp: imgDokodemo3Webp,
            imgAlt: 'タスク別・プロジェクト別の勤務状況を管理可能です',
            description: 'タスク別・プロジェクト別の勤務状況を管理可能です',
        },
        {
            img: imgDokodemo4,
            imgWebp: imgDokodemo4Webp,
            imgAlt: '各ユーザーの出席と休日のリクエストを管理',
            description: '各ユーザーの出席と休日のリクエストを管理',
        },
        {
            img: imgDokodemo5,
            imgWebp: imgDokodemo5Webp,
            imgAlt: 'モバイルアプリではGPSで位置情報を取り管理サーバーに送信します',
            description: 'モバイルアプリではGPSで位置情報を取り管理サーバーに送信します',
        },
    ];

    const featureSugoi = [
        {
            img: imgSugoi1,
            imgWebp: imgSugoi1Webp,
            imgAlt: '候補者向けにマイページを管理できます ',
            description: '候補者向けにマイページを管理できます ',
        },
        {
            img: imgSugoi2,
            imgWebp: imgSugoi2Webp,
            imgAlt: '募集職種数に宣言なく、いつでも簡単に編集管理できます ',
            description: '募集職種数に宣言なく、いつでも簡単に編集管理できます ',
        },
        {
            img: imgSugoi3,
            imgWebp: imgSugoi3Webp,
            imgAlt: 'レジュメや他のドキュメントをアップロード可能です',
            description: 'レジュメや他のドキュメントをアップロード可能です',
        },
    ];

    const featureNippo = [
        {
            img: imgNippo1,
            imgWebp: imgNippo1Webp,
            imgAlt: '日報一覧で従業員の作業状況を把握 ',
            description: '日報一覧で従業員の作業状況を把握 ',
        },
        {
            img: imgNippo2,
            imgWebp: imgNippo2Webp,
            imgAlt: 'プロジェクト別、タスク別に作業状況を分析可能',
            description: 'プロジェクト別、タスク別に作業状況を分析可能',
        },
        {
            img: imgNippo3,
            imgWebp: imgNippo3Webp,
            imgAlt: '自己評価・Supervisorからの評価を管理可能です ',
            description: '自己評価・Supervisorからの評価を管理可能です ',
        },
        {
            img: imgNippo4,
            imgWebp: imgNippo4Webp,
            imgAlt: '日報詳細画面。タスク別の時間入力とコメント、自己評価を入力します ',
            description: '日報詳細画面。タスク別の時間入力とコメント、自己評価を入力します ',
        },
    ];

    const breadcrumb = [{ label: 'ホーム', link: '/jp' }, { label: ' 製品' }];

    return (
        <Layout
            pageLang="jp"
            sidebarActive="product"
            langs={headerLink}
            title="人事ITソリューション | テレワーク管理ツール | 採用管理クラウド | LOGIQUE DIGITAL INDONESIA"
            canonical="https://www.logique.co.id/jp/product"
            ogUrl="https://www.logique.co.id/jp/product"
        >
            <Container className="bg-gray-100 pt-6 pb-24">
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
                        <p>LOGIQUEが提供する製品を紹介します。 </p>
                        <p>
                            リモートワーク｜テレワークがインドネシアでより普及するのに貢献したく、リモートワーカーを管理しながら生産性向上にも寄与するDokodemo-Kerjaを販売しています。月額１万円以下の利用料で大きな効果が得られる優れたツールです。
                        </p>
                        <p className="mb-12">
                            ほかに、採用企業と求職者の両者がより効率的な採用・求職活動ができるように、ITの力で、求職・採用プロセスの無駄を排除したクラウド採用管理ツールSugoiSaiyo、スタッフの日々の勤務状況・内容を管理しつつ管理会計に利用可能なデータの集計を行うための日報管理システム、Nippoも提供しております。いずれについてもお気軽にお問い合わせいただければ幸いです。
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
                            インドネシアで人事業務を効果的に運営するために作成されたHRクラウドサービスを提供しています。生産性向上ツール、採用管理ツール、日報ツールを展開しています。全てのツールは元々、当社向けに開発して運用していたものです。インドネシア事情に沿っているツールとなっております。
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
                            インドネシアでの課題を解決する人事クラウドツールを提供しています。勤怠＆リモート管理ツール、採用管理ツール、日報管理ツールを提供しています。
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
                <h4 className="text-2xl mb-3">リモートワークと生産性向上を両方実現することを可能にするツール</h4>
                <p className="mb-30px">
                    リモートワーク（テレワーク）を可能にして、従業員の生産性を向上させ、管理者の管理工数を減らす画期的なツールです。
                    スタッフがいつ、どんな作業をしているのか確認することができます。作業タイプ（タスク種、プロジェクト名）を入力させることで作業時間を集計し管理会計に利用することも可能です。勤務開始時間、休憩時間、終了時間が記録に残りますので、勤務時間不足や逆に働きすぎのコントロールもできます。
                </p>
                <ProductFeature col="3-col" features={featureDokodemo} />
                <p className="mb-30px">
                    スクリーンショットが取ることがスタッフのさぼりの抑止力になります。場所や時間に囚われず、決めた勤務時間中は集中して生産性高く作業する。Dokodemo-Kerjaは現代の働き方をサポートします。
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
                            Dokodemo-Kerjaについてもっと見る
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
                <h4 className="text-2xl mb-3">インドネシア事情に完全対応した採用管理ツール</h4>
                <p className="mb-30px">
                    SUGOI採用は、インドネシアの人事部、採用担当者のためのITクラウドシステムです。要件に合わない大量のCVのスクリーニング、応募者との連絡の難しさ、ノーShowの多さ、など採用活動には無駄が非常に多いです（特にインドネシアでは）。
                    SUGOI採用は、これらの問題を解消し、採用業務の効率を向上させます。応募者にとってもオンラインで応募からステータス確認、テスト、オファーレター受領まで簡単に管理できるのでとても便利です。
                </p>
                <ProductFeature col="3-col" features={featureSugoi} />
                <p className="mb-30px">
                    候補者から直接レジュメを登録してもらえるプロットフォームを持てることになります。採用サイトと合わせて運用することでDigital採用活動を完結できます。採用サイト・ページの制作運用もご支援していますのでお気軽にご相談ください。
                </p>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/4">
                        <Button type="anchor" link="#" color="yellow" className="text-center" fullWidth>
                            Sugoi採用について詳しくみる
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
                <h4 className="text-2xl mb-3">従業員の日々の勤務状況を可視化し管理会計も可能にする日報ツール</h4>
                <p className="mb-30px">
                    Nippoは従業員の日報を通して現状を把握し改善していくためのツールです。日報管理＆人事評価クラウドツールです。誰がなにをどれくらいの時間かけて作業しているか把握します。またその作業に対して自己評価とスーパーバイザーからの評価を行い管理することが可能となります。
                </p>
                <ProductFeature col="2-col" features={featureNippo} />
                <p className="mb-30px">
                    日報を通じて、スタッフの作業内容・量・質を把握し、スタッフ間でのコミュニケーションを促進することができます。管理者者は部下の評価を行います。プロジェクト毎、タスク毎の原価工数集計も可能です。
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
                            日報について詳しくみる
                        </Button>
                    </div>
                </div>
            </Container>

            <LogiqueContact lang="jp" />
        </Layout>
    );
};

export default Product;

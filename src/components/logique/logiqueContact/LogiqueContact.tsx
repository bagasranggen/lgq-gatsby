import React from 'react';

import Container from 'components/common/container/Container';
import TitleHeadline from 'components/common/titleHeadline/TitleHeadline';
import Button from 'components/common/button/Button';

import imgContact from 'assets/img/png/logique/img-contact.png';
import imgContactWebp from 'assets/img/webp/logique/img-contact.webp';

export type LogiqueContactProps = {
    lang?: 'en' | 'id' | 'jp';
    className?: string;
};

const LogiqueContact = ({ lang, className }: LogiqueContactProps): React.ReactElement => {
    let logiqueDoLang: any = [];
    let logiqueTitleLang: any = [];
    const logiqueDo = {
        id: [
            'Mengembangkan situs web / sistem web / aplikasi mobile.',
            'Mengganti agen outsourcing / vendor IT / Pemasaran Digital.',
            'Mengelola pengoperasian situs web / sistem.',
            'Meningkatkan akses ke situs web Anda dengan SEO.',
            'Mengorganisir dan menjalankan strategi promosi online.',
            'Mencari penyewaan server web dan perusahaan untuk mengelolanya.',
            'Menerapkan sistem manajemen SDM/HR berbasis cloud.',
            'Merencanakan strategi digital untuk bisnis Anda.',
        ],
        en: [
            'Developing a website.',
            'Updating your website’s system.',
            'Developing a web system.',
            'Creating and designing a campaign or website landing page.',
            'Outsourcing website operations.',
            'Increasing access to your website with SEO.',
            'Organizing and running an online promotion strategy.',
            'Searching for leasing web servers and companies to manage them.',
            'Searching for a printing service catering to company profiles and brochures.',
            'etc.',
        ],
        jp: [
            '会社ホームページ/コーポレートWEBがまだ無い。',
            '運用会社を変えたい。元の制作開発会社と連絡がとれず更新できない。',
            'いまのウェブはスマフォに対応してなくて改良が必要。',
            'インドネシア語、英語、日本語でWEBを作りたい。',
            '社内にIT担当者、WEB担当者がいない。',
            'エクセルでは管理が限界。簡易なシステムが必要。',
            'インターネット、WEBを活用してブランディングしたい、集客したい、競合と差別化したい。',
            'インドネシア語でコンテンツを作る必要があるが翻訳会社に委託するしかないのか？',
            'インドネシア内でサーバーをレンタルしたい。運用保守会社も探している。',
            'メールサーバー、eメールサーバーが必要。',
            'FacebookやInstagramを活用して集客したい',
            'インターネット広告を出稿したい',
            'いまのWebにセキュリティ脆弱性がないのか診断してもら',
        ],
    };

    const logiqueTitle = {
        id: (
            <>
                <div className="font-bold">Hubungi Logique</div>
                <p className="text-base mb-6">
                    <span className="font-novocento-bold">LOGIQUE</span> siap membantu Anda.
                </p>
            </>
        ),
        en: (
            <>
                <div className="font-bold">Contact Logique</div>
                <p className="text-base mb-6">if you need help with:</p>
            </>
        ),
        jp: (
            <>
                <div className="font-bold">お問い合わせ</div>
                <p className="text-base mb-6">人事管理クラウドツールについてお気軽にお問い合わせください</p>
            </>
        ),
    };

    if (lang === 'id') {
        logiqueDoLang = logiqueDo.id;
    } else if (lang === 'en') {
        logiqueDoLang = logiqueDo.en;
    } else if (lang === 'jp') {
        logiqueDoLang = logiqueDo.jp;
    }

    if (lang === 'id') {
        logiqueTitleLang = logiqueTitle.id;
    } else if (lang === 'en') {
        logiqueTitleLang = logiqueTitle.en;
    } else if (lang === 'jp') {
        logiqueTitleLang = logiqueTitle.jp;
    }

    return (
        <Container className={`${className} py-10`}>
            <div className="flex flex-wrap -mx-15px">
                <div className="w-full md:w-5/12 px-15px md:mb-0 mb-10">
                    <TitleHeadline fontSize="lg" textPosition="left" borderWidth="md" borderLength="md">
                        {logiqueTitleLang}
                    </TitleHeadline>
                    <picture>
                        <source srcSet={imgContactWebp} type="image/webp" />
                        <img src={imgContact} alt="Hubungi Logique" className="w-8/12 md:w-full mx-auto" />
                    </picture>
                </div>
                <div className="w-full md:w-7/12 px-15px">
                    <ul className="mb-30px">
                        {logiqueDoLang.map((lgq: any) => (
                            <li className="relative pl-4 mb-2" key={lgq}>
                                <div className="absolute top-0 left-0 bg-yellow-500 h-1 w-1 mt-2.5 rounded-full" />
                                {lgq}
                            </li>
                        ))}
                    </ul>
                    <div className="flex">
                        <div className="w-full md:w-8/12">
                            <Button type="anchor" color="black" className="text-2xl text-center" fullWidth>
                                {lang === 'id' && (
                                    <>
                                        Hubugi <span className="font-novocento-bold">LOGIQUE</span>
                                    </>
                                )}
                                {lang === 'en' && 'Contact Us Now'}
                                {lang === 'jp' && 'お問い合わせ'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LogiqueContact;

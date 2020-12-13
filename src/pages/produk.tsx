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
        { lang: 'id', link: '#' },
        { lang: 'jp', link: '/jp/product' },
    ];

    const featureDokodemo = [
        {
            img: imgDokodemo1,
            imgWebp: imgDokodemo1Webp,
            imgAlt: 'Analisa waktu kerja berdasarkan project',
            description: 'Analisa waktu kerja berdasarkan project',
        },
        {
            img: imgDokodemo2,
            imgWebp: imgDokodemo2Webp,
            imgAlt: 'Melacak kegiatan dengan screenshot',
            description: 'Melacak kegiatan dengan screenshot',
        },
        {
            img: imgDokodemo3,
            imgWebp: imgDokodemo3Webp,
            imgAlt: 'Melacak jam kerja dan jam istirahat',
            description: 'Melacak jam kerja dan jam istirahat',
        },
        {
            img: imgDokodemo4,
            imgWebp: imgDokodemo4Webp,
            imgAlt: 'Lihat Riwayat Absensi, Cuti, dan Liburan',
            description: 'Lihat Riwayat Absensi, Cuti, dan Liburan',
        },
        {
            img: imgDokodemo5,
            imgWebp: imgDokodemo5Webp,
            imgAlt: 'Lacak Lokasi Karyawan dengan GPS',
            description: 'Lacak Lokasi Karyawan dengan GPS',
        },
    ];

    const featureSugoi = [
        {
            img: imgSugoi1,
            imgWebp: imgSugoi1Webp,
            imgAlt: 'Create account untuk masing-masing kandidat ',
            description: 'Create account untuk masing-masing kandidat ',
        },
        {
            img: imgSugoi2,
            imgWebp: imgSugoi2Webp,
            imgAlt: 'Lamar beberapa pekerjaan secara bersamaan ',
            description: 'Lamar beberapa pekerjaan secara bersamaan ',
        },
        {
            img: imgSugoi3,
            imgWebp: imgSugoi3Webp,
            imgAlt: 'Upload CV, sertifikat, dan dokumen-dokumen penting',
            description: 'Upload CV, sertifikat, dan dokumen-dokumen penting',
        },
    ];

    const featureNippo = [
        {
            img: imgNippo1,
            imgWebp: imgNippo1Webp,
            imgAlt: 'Daily reporting semua karyawan  ',
            description: 'Daily reporting semua karyawan  ',
        },
        {
            img: imgNippo2,
            imgWebp: imgNippo2Webp,
            imgAlt: 'Statistik kerja per proyek ',
            description: 'Statistik kerja per proyek ',
        },
        {
            img: imgNippo3,
            imgWebp: imgNippo3Webp,
            imgAlt: 'Statistik kerja secara keseluruhan ',
            description: 'Statistik kerja secara keseluruhan ',
        },
        {
            img: imgNippo4,
            imgWebp: imgNippo4Webp,
            imgAlt: 'Laporan individual',
            description: 'Laporan individual',
        },
    ];

    const breadcrumb = [{ label: 'Beranda', link: '/' }, { label: 'Produk' }];

    return (
        <Layout
            pageLang="id"
            sidebarActive="product"
            langs={headerLink}
            title="Produk Digital | Sistem Rekrutmen, Kerja Remote, Laporan Kerja | LOGIQUE"
            canonical="https://www.logique.co.id/produk"
            ogUrl="https://www.logique.co.id/produk"
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
                            Produk Kami
                        </TitleHeadline>

                        <p className="mb-12">
                            Untuk membantu perusahaan tumbuh dan beradaptasi dalam era digital, LOGIQUE mengembangkan
                            dan menyediakan produk digital, seperti sistem manajemen SDM, untuk meningkatkan operasi
                            SDM, produktivitas, dan potensi keuntungan dalam organisasi.
                        </p>
                        <div className="flex flex-wrap justify-center mb-12">
                            <div className="w-full md:w-1/3">
                                <a href="#product_dokodemo">
                                    <picture>
                                        {/* <source srcset="" type="image/"/> */}
                                        <img
                                            data-src={iconDokodemo}
                                            alt="dokodemo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0 lazyload"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <div className="w-full md:w-1/3">
                                <a href="#product_sugoi">
                                    <picture>
                                        <source data-srcSet={iconSugoiWebp} type="image/webp" />
                                        <img
                                            data-src={iconSugoi}
                                            alt="sugoisaiyo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0 lazyload"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <div className="w-full md:w-1/3">
                                <a href="product_nippo">
                                    <picture>
                                        <source data-srcSet={iconNippoWebp} type="image/webp" />
                                        <img
                                            data-src={iconNippo}
                                            alt="nippo"
                                            className="object-contain mx-auto w-6/12 md:w-full h-24 mb-4 md:mb-0 lazyload"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <p>
                            Kami menyediakan solusi yang bertujuan untuk meningkatkan kinerja melalui jam kerja yang
                            fleksibel dan peningkatan manajemen biaya melalui laporan harian, hingga sistem rekrutmen
                            yang sangat membantu dalam menemukan karyawan yang paling berkualitas dengan cara yang
                            seefisien mungkin.
                        </p>
                    </div>
                </div>
            </Container>

            <Container className="bg-black text-white py-8 mb-4 md:mb-12">
                <div className="flex flex-wrap items-center md:items-start justify-center -mx-15px">
                    <div className="w-6/12 md:w-3/12 px-15px">
                        <div className="relative">
                            <picture>
                                <source data-srcSet={imgProductWebp} type="image/webp" />
                                <img
                                    data-src={imgProduct}
                                    alt="produk produk kami"
                                    className="w-full md:absolute top-0 left-0 mb-5 sm:mb-0 lazyload"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 px-15px">
                        <p className="text-base md:text-2xl text-center md:text-left">
                            &quot;Kami menciptakan berbagai produk digital yang fungsional, terutama Sistem Manajemen
                            SDM untuk meningkatkan produktivitas perusahaan.&quot;
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
                <h4 className="text-2xl mb-3">Solusi Kerja Fleksibel Untuk Menjadi Lebih Produktif</h4>
                <p className="mb-30px">
                    Apakah Anda mengalami kesulitan untuk memantau produktivitas karyawan Anda? Jika iya, maka sistem
                    ini menjadi solusi untuk memantau kinerja karyawan Anda. Selain itu, sistem ini juga dapat
                    meningkatkan produktivitas karyawan dengan melihat bagaimana karyawan menghabiskan jam kerja mereka
                    melalui fitur auto-screencapture yang tersedia.
                </p>
                <ProductFeature col="3-col" features={featureDokodemo} />
                <p className="mb-30px">
                    Dokodemo-Kerja membantu Anda dalam mengimplementasikan aturan-aturan SDM yang lebih efektif dan
                    fleksibel, yang dapat disesuaikan dengan kebutuhan. Program ini membantu Manajer mengatur jam kerja
                    karyawan, melacak pekerjaan mereka, dan menangkap tangkapan layar secara acak setiap 10 menit.
                    Dengan ini, staf akan bebas untuk bekerja di mana saja kapan saja dengan catatan kerja yang akurat,
                    meningkatkan produktivitas secara signifikan.
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
                <h4 className="text-2xl mb-3">Sistem Manajamen Rekrutmen Untuk Proses Rekrutmen Yang Lebih Mudah</h4>
                <p className="mb-30px">
                    Sugoi Saiyo merupakan solusi yang berguna untuk masalah yang dihadapi oleh tim rekrutmen Indonesia.
                    Apakah Anda bosan memeriksa dan menyaring banyak lamaran pekerjaan yang tidak memenuhi syarat,
                    mengatur wawancara, dan menangani orang yang tidak hadir di hari wawancara? Anda dapat mengurangi
                    sakit kepala dengan Sugoi Saiyo. Software pencari kerja yang dapat melamar, mengkonfirmasi status
                    kandidat, mengatur tanggal wawancara dan mendapatkan surat penawaran, semua melalui Sugoi Saiyo.
                </p>
                <ProductFeature col="3-col" features={featureSugoi} />
                <p className="mb-30px">
                    Sistem ini mencakup semua proses perekrutan dasar. Dari resepsi CV, penyaringan, pengujian dan
                    penjadwalan wawancara, hingga mengirim surat penawaran; semua kegiatan ini bisa dilakukan melalui
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
                <h4 className="text-2xl mb-3">Sistem laporan kerja karyawan dan Sistem Manajemen Jam Kerja</h4>
                <p className="mb-30px">
                    Nippo adalah alat manajemen cloud laporan harian. Melalui Nippo, manajer SDM dan supervisor di
                    setiap departemen dapat memeriksa bagaimana karyawan menghabiskan jam kerjanya. Mengizinkan rekan
                    kerja untuk saling menandai dan mengevaluasi pekerjaan satu sama lain, sehingga membuat komunikasi
                    internal menjadi lebih aktif.
                </p>
                <ProductFeature col="2-col" features={featureNippo} />
                <p className="mb-30px">
                    Alat ini berguna untuk SDM untuk menghitung biaya jam kerja dari setiap tugas yang dilakukan oleh
                    setiap karyawan. Melalui Nippo, evaluasi dan penilaian mandiri dapat dilakukan secara metodis setiap
                    hari.
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

            <LogiqueContact lang="id" />
        </Layout>
    );
};

export default Product;

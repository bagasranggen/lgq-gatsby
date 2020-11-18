import React from 'react';
import { Helmet } from 'react-helmet';

export type SeoProps = {
    title?: string;
    author?: string;
    content?: string;
    metaDescription?: string;
    metaKeyword?: string;
    ogTitle?: string;
    ogType?: string;
    ogSiteName?: string;
    ogUrl?: string;
    ogImage?: string;
    ogDescription?: string;
    canonical?: string;
};

const Seo = ({
    title,
    author,
    content,
    metaDescription,
    metaKeyword,
    ogTitle,
    ogType,
    ogSiteName,
    ogUrl,
    ogImage,
    ogDescription,
    canonical,
}: SeoProps): React.ReactElement => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="author" content={author} />
            <meta content={content} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeyword} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={ogSiteName} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:description" content={ogDescription} />
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
};

export default Seo;

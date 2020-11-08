import React from 'react';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';

const Index = (): React.ReactElement => {
    const indexLink = [
        { lang: 'en', link: '#' },
        { lang: 'id', link: '/' },
        { lang: 'jp', link: '/jp/' },
    ];

    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '#' },
    ];

    return (
        <Layout pageLang="en" langs={indexLink}>
            <Container className="bg-red-100">
                <Breadcrumbs breadcrumbLinks={breadcrumb} />
                Hello world!
            </Container>
        </Layout>
    );
};

export default Index;

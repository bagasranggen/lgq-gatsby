import React from 'react';

import Layout from 'components/container/layout/Layout';
import Container from 'components/common/container/Container';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';

const Index = (): React.ReactElement => {
    return (
        <Layout>
            <Container className="bg-red-100">
                <Breadcrumbs />
                Hello world!
            </Container>
        </Layout>
    );
};

export default Index;

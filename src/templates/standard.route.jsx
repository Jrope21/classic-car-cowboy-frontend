import React from 'react';

import Layout from '../components/layout.component';
import ModuleController from '../components/modules/module-controller.component';

function Standard({pageContext: { page, cars, globalInfo } }) {

    const {acf: { layout }} = page;

    return (
        <Layout globalInfo={globalInfo}>
            <ModuleController cars={cars} acf={layout} />
        </Layout>
    )
}

export default Standard;
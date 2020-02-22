import React from 'react';

import Layout from '../components/layout.component';
import ModuleController from '../components/modules/module-controller.component';

function Standard({pageContext: { page, cars, global, navigation } }) {

    const {acf: { layout }} = page;

    return (
        <Layout navigation={navigation} global={global}>
            <ModuleController cars={cars} acf={layout} global={global} />
        </Layout>
    )
}

export default Standard;
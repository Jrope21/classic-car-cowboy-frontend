import React from 'react';
// need to have this server side rendered
import Layout from '../components/layout.component';
import ModuleController from '../components/modules/module-controller.component';

function Standard({pageContext: { page, cars, global, navigation } }) {

    const {acf: { layout }} = page;

    return  <ModuleController cars={cars} acf={layout} global={global} />
}

export default Standard;
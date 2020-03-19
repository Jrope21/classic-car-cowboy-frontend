import React from 'react';

import ModuleController from '../components/modules/module-controller.component';

function Standard({pageContext: { page, cars } }) {

    const {acf: { layout }} = page;

    return  <ModuleController cars={cars} acf={layout} />
}

export default Standard;
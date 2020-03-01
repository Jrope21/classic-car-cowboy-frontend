import React from 'react';
import Layout from './src/components/layout.component';

const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)

export default wrapPageElement
import React from 'react'
import Layout from './shared/layout';

const NotFound = () => {
    const style = {
        fontweight: 'bold',
        textAlign: 'center',
    }
  return (
    <Layout>
      <p style={style}>We can't Find that Page!</p>
    </Layout>
  );
}

export default NotFound;

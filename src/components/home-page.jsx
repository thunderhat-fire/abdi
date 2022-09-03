import React from 'react';
import Layout from './shared/layout';
import Hero from './hero/hero';
import mainSection from './main-section/main-section';
import FeaturedCollection from './featured-collection/featured-collection';
import Footer from './footer/footer';




const HomePage = () => {
  return (
    <>
    
    <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
    </Layout>
    </>

  );
}

export default HomePage;

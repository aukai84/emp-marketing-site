import * as React from 'react';

import PartnerGrid from '../components/PartnerGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

// imported assets
import teslaHero from '../assets/tesla_hero_white.webp';
import empLogoExpaned from '../assets/emp_logo_expanded.webp';
import teslaCustom from '../assets/tesla_custom.webp';
import garage from '../assets/garage.webp';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero maxWidth={'500px'} image={teslaHero} ctaAction={goToShop} />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>Specializing in Tesla customization and maintenance</p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Choose Your Model'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      {/* <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div> */}

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          {/* <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          /> */}
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={garage}
          title={`We provide Hawaii's best custom installations`}
        />
        <div className={styles.linkContainers}>
          <Link>SEE OUR CUSTOMIZATIONS</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about EMP'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />
      {/* <div class={styles.empLogoContainer}>
        <img src={empLogoExpaned} />
      </div> */}

      {/* Blog Grid */}
      {/* <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'aotes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div> */}

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={teslaCustom}
          title={'We are enthusiasts'}
          subtitle={
            'Our team is dedicated to providing you the best service.  See what we have done'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      {/* <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @sydney to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div> */}
      <PartnerGrid />
    </Layout>
  );
};

export default IndexPage;

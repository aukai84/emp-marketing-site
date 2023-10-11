import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/teslas/model_3_white.webp'}
        title={'Model 3 RWD'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={'/teslas/model_3_black.webp'}
        title={'Model 3 AWD'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={'/teslas/tesla_red.webp'}
        title={'Model Y AWD'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={'/teslas/tesla_teal.webp'}
        title={'Model YP'}
        // text={'Model YP'}
        // link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;

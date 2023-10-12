import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';
import model3 from '../../assets/teslas/model_3.webp';
import modelY from '../../assets/teslas/model_y.webp';
import modelX from '../../assets/teslas/model_x.webp';
import modelS from '../../assets/teslas/model_s.webp';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={model3}
        title={'Model X'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={modelY}
        title={'Model Y'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={modelX}
        title={'Model X'}
        // text={'SHOP NOW'}
        // link={'/shop'}
      />
      <ProductCollection
        image={modelS}
        title={'Model S'}
        // text={'Model YP'}
        // link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;

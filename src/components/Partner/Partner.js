import React from 'react';

import * as styles from './Partner.module.css';

const Partner = ({ name, src, href }) => {
  return (
    <div className={styles.root}>
      <a href={href} target="_blank">
        <div className={styles.partnerContainer}>
          <img src={src} alt={name} />
          <div className={styles.overlay}></div>
        </div>
      </a>
    </div>
  );
};

export default Partner;

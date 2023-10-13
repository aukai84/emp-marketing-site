import React from 'react';

import * as styles from './Partner.module.css';

const Partner = ({ name, src, href }) => {
  return (
    <div className={styles.root}>
      <div className={styles.partnerContainer}>
        <a href={href} target="_blank">
          <img src={src} alt={name} />
        </a>
      </div>
      <div>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};

export default Partner;

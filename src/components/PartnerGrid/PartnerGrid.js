import React from 'react';

import Partner from '../Partner';
import Title from '../../components/Title';

import * as styles from './PartnerGrid.module.css';

import cmstLogo from '../../assets/cmst_logo_hawaii.webp';
import handhowLogo from '../../assets/handhow_logo.webp';
import ohmuLogo from '../../assets/ohmmu_logo.webp';

const PartnerGrid = (props) => {
  return (
    <div className={styles.root}>
      <Title name="Our Partners" />
      <div className={styles.partnersContainer}>
        <Partner name="CMST" href="https://www.cmsttuning.com" src={cmstLogo} />
        <Partner
          name="Hansshow"
          href="https://www.hautopart.com"
          src={handhowLogo}
        />
        <Partner name="OHMMU" href="https://www.ohmmu.com" src={ohmuLogo} />
      </div>
    </div>
  );
};

export default PartnerGrid;

import React from 'react';
import contactImage from './landingHeaderAssets/pexels-josh-hild-3573383.jpg';
import '../../styles/resetStyles.css';
import '../../styles/mainStyles.css';
import styles from './styles/landingHeader.css';

function LandingHeader() {
  return (
    <>
      <section className={styles.centerMessageAndImageContainer}>

        <img className={styles.joshHild} src={contactImage} alt="nighttime-cityscape"/>

        <div className={styles.messageWrapper}>
          Welcome to Clean California Response Initiative: bringing the power back to the people by empowering them with information about state-funded benefits, grants, rebates for new and used electric vehicles, shared mobility, no-cost solar power, and affordable loans specific to California. 
        </div>
      
      
      </section>
    </>
  );
}

export default LandingHeader;

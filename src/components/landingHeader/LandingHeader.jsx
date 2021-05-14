import React from 'react';
import contactImage from './landingHeaderAssets/pexels-josh-hild-3573383.jpg';
import '../../styles/mainStyles.css';
import styles from './landingHeaderStyles/styles.css';

function LandingHeader() {
  return (
    <>
      <section className={styles.centerMessageAndImageContainer}>

        <img className={styles.joshHild} src={contactImage} alt="nighttime-cityscape"/>

        <div className={styles.messageWrapper}>
          Welcome to Clean California Response Initiative. Here we are looking to bring the power back to the people by empowering them with information about state-funded benefits, grants, and rebates for new and used electric vehicles, shared mobility, no-cost solar power and affordable loans specific to California. 
        </div>
      
      
      </section>
    </>
  );
}

export default LandingHeader;

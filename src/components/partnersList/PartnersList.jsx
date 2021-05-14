import React from 'react';
import styles from './styles/styles.css'
import earthFirst from './partnersListAssets/pexels-lauris-rozentāls-3302183.jpg';


export default function PartnersList() {
    
    return (
        <div className={styles.partnersWrapper}>
            
            <img className={styles.laurisRozentals} src={earthFirst} alt="sign-on-post-planet-earth-first"/>
            
            <h1> Partnering Organizations </h1>

            <div className={styles.partnerSubHeader}>    
                <h2> These are the community organizations that are working hard in the beautiful state of California to help provide you with the necessary resources and support in applying for these clean-energy and transportation options.</h2>
            </div>

            <section className={styles.partnerListWrapper}>

                <p className={styles.partnerOrg}>
                    Blue Lake Rancheria 
                </p>

                <p className={styles.partnerOrg}>
                    GRID Alternatives
                </p>

                <p className={styles.partnerOrg}>
                    Liberty Hill Foundation   
                </p>

                <p className={styles.partnerOrg}>
                    Native American Environmental Protection Coalition  
                </p>

                <p className={styles.partnerOrg}>
                    SEIU    
                </p>
            </section>

        </div>
    )
}

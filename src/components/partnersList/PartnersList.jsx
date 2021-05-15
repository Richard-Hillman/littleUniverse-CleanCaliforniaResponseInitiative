import React from 'react';
import styles from './styles/partnersList.css'
import earthFirst from './partnersListAssets/pexels-lauris-rozentāls-3302183.jpg';


export default function PartnersList() {
    
    return (
        <div className={styles.partnersWrapper}>
            
            <img className={styles.laurisRozentals} src={earthFirst} alt="sign-on-post-planet-earth-first"/>
            
            <h1> Partnering Organizations </h1>

            <div className={styles.partnerSubHeader}>    
                <h2> These are the community organizations that are working hard in the beautiful state of California to help provide you with the necessary resources and support in applying for these clean-energy and transportation options.</h2>
            </div>

            <section className={styles.partnerListBackground}>
                <section className={styles.partnerListWrapper}>

                    <p className={styles.partnerOrg}>
                        <a href='https://accesscleanca.org/'>Access Clean California</a> 
                        <p>This is a link to Access Clean California. Access Clean California connects Californians with clean energy programs. They are a primary portal for checking eligibility, exploring clean initiative benefit options, and applying.   </p>
                    </p>

                    <p className={styles.partnerOrg}>
                        <a href='https://bluelakerancheria-nsn.gov/'>
                        Blue Lake Rancheria </a> 
                        <p>This is a link to the Blue Lake Rancheria website where you can find more information about what this federally recognized tribe in northwestern California is doing to support your communities. Check out their initiatives page to learn about each program they are a part of and the impact they are making on our communities. </p>
                    </p>

                    <p className={styles.partnerOrg}>
                        <a href='https://gridalternatives.org/'>GRID Alternatives</a>
                        <p>This link will take you to GRID alternatives main page where you can learn about their mission to provide solar to economic and environmental justice communities across the globe! GRID alternatives is one of the nation's largest non-profit installers of clean energy technologies. They are helping to provide no-cost solar installations for low-income households, hands on solar training for clean energy jobs, and connecting low-income communities with electric-vehicle programs.  </p>
                    </p>

                    <p className={styles.partnerOrg}>
                        <a href='https://www.libertyhill.org/'>Liberty Hill Foundation </a>
                        <p>This link will take you to Liberty Hill's website: a social justice epicenter. Here you can find many different social and environmentally focused initiatives that are making a huge impact. Their agenda includes LGBTQ Justice, economic justice, environmental justice, and racial justice. </p>
                    </p>

                    <p className={styles.partnerOrg}>
                        <a href='https://naepc.com/'>Native American Environmental Protection Coalition</a>
                        <p>Here is a link to the NAEPC or Native American Environmental Protection Coalition. This is a tribally driven organization providing technical assistance, environmental education, professional training, networking, and inter-tribal coordination. </p>
                    </p>

                    <p className={styles.partnerOrg}>
                        <a href='https://seiuca.org/'>Service Employees International Union of California</a>
                        <p>This link will tak you to the Service Employees International Union where you can learn about the different initiatives that SEIU is bringing to your communities. There work includes workers rights, healthcare justice, housing justice, environmental justice, and restorative justice.</p>
                    </p>
                </section>
            </section>

        </div>
    )
}

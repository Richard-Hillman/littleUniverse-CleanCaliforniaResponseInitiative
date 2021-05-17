import React from 'react';
import styles from './styles/benefitsList.css';

export default function BenefitsList() {
    return (
        <div>
            <section className={styles.benefitsWrapper}>
                <h1>Benefits and more information</h1>


                <div className={styles.benefitsTextOverall}>
                    
                    <a href='https://cleanvehiclerebate.org/eng'><h2>Clean Vehicle Rebate Project</h2></a>
                    <p className={styles.benefitsParagraph}>Here is the direct link to the organizations website.The Clean Vehicle Rebate Project, or CVRP, is offering rebates of up to $7,000 for the purchase or leasing of eligible zero-emission vehicles. This includes electric vehicles and electric motorcycles, plug-in hybrid, and fuel cell vehicles. As long as funds are available, eligible California residents can apply for the CVRP rebate. If no funds available you are still encouraged to apply but will be placed on a wait-list.  </p>

                    <p className={styles.benefitsParagraph}>
                        <blockquote>From CVRP's about page they discuss the funding for this program as follows: The Center for Sustainable Energy (CSE) administers CVRP throughout the state for the California Air Resources Board (CARB). CARB is a part of the California Environmental Protection Agency (CalEPA) and exists to promote and protect public health, welfare and ecological resources through the effective and efficient reduction of air pollutants while recognizing and considering the effects on the economy of the state. CVRP funding is determined by an annual funding plan that is developed with public input and approved by CARB.</blockquote>
                    </p>

                    <p className={styles.benefitsParagraph}> 
                        <blockquote>CARB also offers CVRP for Public Fleets, with a standard CVRP rebate for all California public entities and increased incentives for those entities operating in California’s most vulnerable and pollution-burdened areas. CARB also provides the Drive Clean Incentive Guide, which consumers can use to identify additional incentives for vehicles and charging stations throughout California.  </blockquote>
                    </p>

                </div>
            </section>
        </div>
    )
}

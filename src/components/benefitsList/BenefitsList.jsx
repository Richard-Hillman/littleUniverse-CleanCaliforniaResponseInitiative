import React from 'react';
import styles from './styles/benefitsList.css';

export default function BenefitsList() {
    return (
        <div>
            <section className={styles.benefitsWrapper}>

                <h1>Benefits and more Information</h1>

                <div className={styles.benefitsTextOverall}>
                    
                    <h2>Statewide Initiatives and Programs</h2>

{/* article 1 ------------------------------------------------------------ */}

                    <article>

                        <a href='https://cleanvehiclerebate.org/eng'><h3>Clean Vehicle Rebate Project</h3></a>
                        <p className={styles.benefitsParagraph}>Here is the direct link to the organizations website.The Clean Vehicle Rebate Project, or CVRP, is offering rebates of up to $7,000 for the purchase or leasing of eligible zero-emission vehicles. This includes electric vehicles and electric motorcycles, plug-in hybrid, and fuel cell vehicles. As long as funds are available, eligible California residents can apply for the CVRP rebate. If no funds available you are still encouraged to apply but will be placed on a wait-list.  </p>
                        <p className={styles.benefitsParagraph}>
                            <blockquote>From CVRP's about page they discuss the funding for this program as follows: The Center for Sustainable Energy (CSE) administers CVRP throughout the state for the California Air Resources Board (CARB). CARB is a part of the California Environmental Protection Agency (CalEPA) and exists to promote and protect public health, welfare and ecological resources through the effective and efficient reduction of air pollutants while recognizing and considering the effects on the economy of the state. CVRP funding is determined by an annual funding plan that is developed with public input and approved by CARB.</blockquote>
                        </p>
                        <p className={styles.benefitsParagraph}> 
                            <blockquote>CARB also offers CVRP for Public Fleets, with a standard CVRP rebate for all California public entities and increased incentives for those entities operating in California’s most vulnerable and pollution-burdened areas. CARB also provides the Drive Clean Incentive Guide, which consumers can use to identify additional incentives for vehicles and charging stations throughout California.  </blockquote>
                        </p>

                    </article>

{/* article 2 ------------------------------------------------------------ */}

                    <article>

                        <a href='https://cleanvehiclerebate.org/eng'><h3>Clean Vehicle Assistance Program</h3></a>
                            <p className={styles.benefitsParagraph}>Here is a link to the homepage for the Clean Vehicle Assistance Program. A program that is all about helping individuals access affordable clean vehicles and charging stations. This program provides grants and loans for income-qualified Californians. Within this site, if you travel to their eligibility page, located under the get started tab you will find the exact requirements of qualifying. This program in particular will send you an approval letter before you purchase a qualifying vehicle. This site can help you decide on a vehicle that is right for you as well as provide you with the necessary resources and instructions on how to apply for this program. </p>

                    </article>

{/* article 3 ------------------------------------------------------------ */}

                    <article>

                        <a href='https://gridalternatives.org/what-we-do/energy-for-all'><h3>Energy for All Program</h3></a>
                        <p className={styles.benefitsParagraph}> This is link will bring you to the Grid Alternatives Energy for All Program. Here you will find three tiers of getting no-cost solar energy installed: single-family solar, community solar, and multifamily solar. Grid has a very unique people-first model that makes Grid ALternatives one of the leading non-profit solar providers nationally. Their goal is to put money back into families pockets and increase housing affordability by reducing the energy cost burden. Grid Alternatives does a fantastic job in waling you through the process and making the information clear and easy to apply. </p>

                    </article>

{/* Regional Programs start ------------------------------------------------------------ */}

                    <aricle>

                        <h5>Regional Programs to be Updated Soon...</h5>

                    </aricle>

                </div>
            </section>
        </div>
    )
}

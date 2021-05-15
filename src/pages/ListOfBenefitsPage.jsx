import React from 'react';
import BenefitsList from '../components/benefitsList/BenefitsList';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';


export default function listOfBenefitsPage() {
    return (
        <div>
            <Navigation />
            <BenefitsList />
            <Footer />
        </div>
    )
}

import React from 'react';
import Navigation from '../components/navigation/Navigation';
import PartnersList from '../components/partnersList/PartnersList';
import Footer from '../components/footer/Footer'

export default function ListOfPartnersPage() {
    return (
        <>
        <section>
            <Navigation />
            <PartnersList /> 
            <Footer />
        </section>
        </>
    )
}

import React from 'react';
import IntroductionArticle from '../components/introductionArticle/IntroductionArticle';
import LandingHeader from '../components/landingHeader/LandingHeader';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';


export default function LandingPage() {
    return (
        <section>
            <Navigation />
            <LandingHeader />
            <IntroductionArticle />
            <Footer />
        </section>
    )
}

import React from 'react';

import LandingHeader from '../components/landingHeader/LandingHeader';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import IntroductionArticle from '../components/articles/introductionArticle/IntroductionArticle';


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

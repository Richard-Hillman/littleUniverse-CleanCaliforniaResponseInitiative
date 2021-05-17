import React from 'react';
import AboutArticle from '../components/articles/aboutArticle/AboutArticle';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';


export default function AboutMePage() {
    return (
        <div>
            <Navigation />   
            <AboutArticle />
            <Footer />        
        </div>
    )
}

import React from 'react';
import ContactArticle from '../components/articles/contactArticle/ContactArticle';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';


export default function ContactMePage() {
    return (
        <div>
            <Navigation />
            <ContactArticle />
            <Footer /> 
        </div>
    )
}

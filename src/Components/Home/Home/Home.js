import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import Projects from '../../Projects/Projects';
import Footer from '../Footer/Footer';

import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Header from './Header/Header';


const Home = () => {
    return (
        <div>
          <Header/>
          <Projects/>
          <Services/>        
          <Testimonials/>
          <ContactForm/>
          <Footer/>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../share/Footer/Footer';
import About from '../About/About';
import AllServiceInfo from '../AllServiceInfo/AllServiceInfo';
import FunFactsIconArea from '../FunFactsIconArea/FunFactsIconArea';
import Header from '../Header/Header';
import PatnersArea from '../PatnersArea/PatnersArea';
import Services from '../Services/Services';
import TeamCompoArea from '../TeamCompoArea/TeamCompoArea';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <AllServiceInfo/>
            <About/>
            <FunFactsIconArea/>
            <PatnersArea/>
            <TeamCompoArea/>
            <Footer/>
        </div>
    );
};

export default Home;
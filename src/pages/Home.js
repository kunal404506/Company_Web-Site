import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
// import Login from '../components/Login';
// import Signup from '../components/Signup';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            {/* <Login />
            <Signup /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;


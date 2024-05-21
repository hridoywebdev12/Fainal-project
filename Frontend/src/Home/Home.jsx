import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import FreeCourse from '../Components/FreeCourse';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <FreeCourse></FreeCourse>
            <Footer></Footer>
        </>
    );
};

export default Home;
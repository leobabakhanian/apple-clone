import React from 'react';
import Header from './Header';
import './Home.css';
import FirstBox from './FirstBox';
import SecondBox from './SecondBox';
import ThirdBox from './ThirdBox';
import FourthBox from './FourthBox';
import { Link } from "react-router-dom";
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            
            <div className="home__message">
                <p>
                    We look forward to welcoming you to our stores. Whether 
                    you <Link to ="/shop">shop in a store</Link> or <Link to ="/shop">
                    shop online</Link>, our Specialists can help you buy the products 
                    you love.
                </p>
            </div>
            
            <ThirdBox />
            <FirstBox />
            <SecondBox />
            <FourthBox />
            <Footer />
        </div>
    );
}

export default Home;

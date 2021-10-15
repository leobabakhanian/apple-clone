import React from 'react'
import Header from './Header';
import './Home.css';
import FirstBox from './FirstBox';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <Header />
            {/*min width should be 751 */}
            <div className="home__message">
                <p>We look forward to welcoming you to our stores. Whether you <Link to ="/shop">shop in a store</Link> or <Link to ="/shop">shop online</Link>, our Specialists can help you buy the products you love.</p>
            </div>

            <FirstBox />

            <div className="home__second">

            </div>

            <div className="home__third">


            </div>
        </div>
    )
}

export default Home

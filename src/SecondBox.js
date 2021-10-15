import React from 'react';
import './SecondBox.css';
import { Link } from "react-router-dom";
import iPhone13 from './images/iphone_13.jpg';

function SecondBox() {
    return (
        <div className="home__second">
            <Link to ="/iphone-13"><span></span></Link>
            <h2>iPhone 13</h2>
            <h3>Your new superpower.</h3>
            <div className="home__secondLinks">
                <h4>
                    <Link to="/iphone-13">Learn more</Link>
                    <div className="arrow">
                        <Link to="/iphone-13"> ></Link>
                    </div>
                        <Link to="/us/shop/goto/buy_iphone/iphone_13">Buy</Link>
                    <div className="second__arrow">
                        <Link to="/us/shop/goto/buy_iphone/iphone_13"> ></Link>
                    </div>
                </h4>
            </div>
                <img src={iPhone13} alt="" />
        </div>
    );
}

export default SecondBox;

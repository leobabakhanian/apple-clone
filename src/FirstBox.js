import React from 'react';
import { Link } from "react-router-dom";
import iPhone13Pro from './images/iphone_13_pro.jpg';
import './FirstBox.css';

function FirstBox() {
    return (
        <div className="home__first">
            <Link to ="/iphone-13-pro"><span></span></Link>
            <h2>iPhone 13 Pro</h2>
            <h3>Oh. So. Pro.</h3>
            <div className="home__firstLinks">
                <h4>
                    <Link to="/iphone-13-pro">Learn more</Link>
                    <div className="arrow">
                        <Link to="/iphone-13-pro"> ></Link>
                    </div>
                    <Link to="/us/shop/goto/buy_iphone/iphone_13_pro">Buy</Link>
                    <div className="second__arrow">
                        <Link to="/us/shop/goto/buy_iphone/iphone_13_pro"> ></Link>
                    </div>
                </h4>
            </div>
            <img src={iPhone13Pro} alt="" />
        </div>
    );
}

export default FirstBox;

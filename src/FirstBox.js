import React from 'react';
import { Link } from "react-router-dom";
import iPhone13Pro from './images/iphone_13_pro.jpg';
import './FirstBox.css';

function FirstBox() {
    return (
        <div className="home__first">
                <h1>iPhone 13 Pro</h1>
                <h2>Oh. So. Pro.</h2>
                <div className="home__firstLinks">
                    <h3>
                        <Link to="/iphone-13-pro">Learn more</Link>
                        <div className="arrow">
                            <Link to="/iphone-13-pro"> ></Link>
                        </div>
                        <Link to="/store/iphone-13-pro">Buy</Link>
                        <div className="second__arrow">
                            <Link to="/shop/iphone-13-pro"> ></Link>
                        </div>
                    </h3>
                </div>
                <img src={iPhone13Pro} alt="" />
            </div>
    );
}

export default FirstBox;

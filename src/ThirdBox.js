import React from 'react';
import './ThirdBox.css';
import { Link } from "react-router-dom";
import WatchLogo from './images/logos/watch_logo.png';
import Watch from './images/apple_watch.jpg';

function ThirdBox() {
    return (
        <div className="home__third">
            <Link to ="/apple-watch-series-7/"><span></span></Link>
            <h2>New</h2>
            <img src={WatchLogo} alt="" />
            <h3>Full screen ahead.</h3>
            <div className="home__thirdLinks">
                <h4>
                    <Link to="/apple-watch-series-7/">Learn more</Link>
                    <div className="arrow">
                        <Link to="/apple-watch-series-7/"> ></Link>
                    </div>
                    <Link to="/us/shop/goto/buy_watch/apple_watch_series_7">Buy</Link>
                    <div className="second__arrow">
                        <Link to="/us/shop/goto/buy_watch/apple_watch_series_7"> ></Link>
                    </div>
                </h4>
            </div>
            <div className="third__image">
                <img src={Watch} alt="" />
            </div>
        </div>
    );
}

export default ThirdBox;

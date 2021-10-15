import React from 'react';
import './ThirdBox.css';
import { Link } from "react-router-dom";
import WatchLogo from './images/logos/watch_logo.png';
import Watch from './images/apple_watch.jpg';

function ThirdBox() {
    return (
        <div className="home__third">
            <Link to ="/apple-watch-series-7/"><span></span></Link>
            <img src={WatchLogo} alt="" />
            <h3>Full screen ahead.</h3>
            <h5>Available starting 10.15</h5>
            <div className="home__thirdLinks">
                <h4>
                    <Link to="/apple-watch-series-7/">Learn more</Link>
                    <div className="arrow">
                        <Link to="/apple-watch-series-7/"> ></Link>
                    </div>
                    <Link to="/us/shop/goto/buy_watch/apple_watch_series_7">Order now</Link>
                    <div className="second__arrow">
                        <Link to="/us/shop/goto/buy_watch/apple_watch_series_7"> ></Link>
                    </div>
                </h4>
            </div>
            <img src={Watch} alt="" />
        </div>
    );
}

export default ThirdBox;

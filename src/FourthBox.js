import React from 'react';
import './FourthBox.css';
import { Link } from "react-router-dom";
import tile_1 from './images/tile_1.jpg';
import tile_2 from './images/tile_2.jpg';
import tile_3 from './images/tile_3.jpg';
import tile_4 from './images/tile_4.jpg';
import tile_5 from './images/tile_5.jpg';
import tile_6 from './images/tile_6.jpg';

function FourthBox() {
    return (
        <div className="home__fourth">
            <div className="home__row1">
                <div className="home__col1">
                    <Link to ="/apple-events"><span></span></Link>
                    <img src={tile_1} alt="" />
                    <div class="col1__overlay">
                        <h2>Apple Event</h2>
                        <h3>Watch on 10/18 at 10 a.m. PDT.</h3>
                        <div className="home__fourthLinks">
                            <h4>
                                {/* FIX LINK UNDERLINE */}
                                <Link to ="/apple-events">Learn more</Link>
                                <div className="link">
                                    <Link to ="/apple-events"> ></Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="home__col2">
                    <img src={tile_2} alt="" />
                </div>
            </div>
            <div className="home__row2">
                <div className="home__col3">
                    <img src={tile_3} alt="" />
                </div>
                <div className="home__col4">
                    <img src={tile_4} alt="" />
                </div>
            </div>
            <div className="home__row3">
                <div className="home__col5">
                    <img src={tile_5} alt="" />
                </div>
                <div className="home__col6">
                    <img src={tile_6} alt="" />
                </div>
            </div>
        </div>
    );
}

export default FourthBox;

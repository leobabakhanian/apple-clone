import React from 'react';
import './FourthBox.css';
import { Link } from "react-router-dom";
import tile_1 from './images/tile_1.jpg';
import tile_2 from './images/tile_2.jpg';
import tile_3 from './images/tile_3.jpg';
import tile_4 from './images/tile_4.jpg';
import tile_5 from './images/tile_5.jpg';
import tile_6 from './images/tile_6.jpg';
import apple_fitness from './images/logos/fitness_logo.png';
import iPad_mini from './images/logos/ipad_mini_logo.png';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import apple_tv from './images/logos/apple_tv_logo.png';
import blush from './images/logos/blush_logo.png';
import apple_card from './images/logos/apple_card_logo.png';

function FourthBox() {
    return (
        <div className="home__fourth">
            <div className="home__row">
                <div className="home__col1">
                    <Link to ="/apple-events"><span></span></Link>
                    <img src={tile_1} alt="" />
                    <div className="col1__overlay">
                        <h2>Apple Event</h2>
                        <h3>Watch on 10/18 at 10 a.m. PDT.</h3>
                        <div className="home__fourthLinks__col1">
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
                    <Link to ="/apple-fitness-plus"><span></span></Link>
                    <img src={tile_2} alt="" />
                    <div className="col2__overlay">
                        <img src={apple_fitness} alt="" />
                        <h3>Now with Pilates, Group Workouts<sup>1</sup>,<br/> and guided Meditation.</h3>
                        <div className="home__fourthLinks__col2">
                            <h4>
                                <Link to="/apple-fitness-plus">Learn more</Link>
                                <div className="arrow">
                                    <Link to="/apple-fitness-plus"> ></Link>
                                </div>
                                <Link to="/subscribe?itscg=10000&itsct=fit-hero-hp_tile-apl-ann-201111">Try it free</Link>
                                <div className="second__arrow">
                                    <Link to="/subscribe?itscg=10000&itsct=fit-hero-hp_tile-apl-ann-201111"><sup>2</sup> ↗</Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__row">
                <div className="home__col3">
                    <Link to ="/ipad-mini"><span></span></Link>
                    <img src={tile_3} alt="" />
                    <div className="col3__overlay">
                        <img src={iPad_mini} alt="" />
                        <h3>Mega power. Mini sized.</h3>
                        <div className="home__fourthLinks__col3">
                            <h4>
                                <Link to="/ipad-mini">Learn more</Link>
                                <div className="arrow">
                                    <Link to="/ipad-mini"> ></Link>
                                </div>
                                <Link to="/us/shop/goto/buy_ipad/ipad_mini">Buy</Link>
                                <div className="second__arrow">
                                    <Link to="/us/shop/goto/buy_ipad/ipad_mini"> ></Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="home__col4">
                    <Link to ="/imac-24"><span></span></Link>
                    <img src={tile_4} alt="" />
                    <div className="col4__overlay">
                        <h2>iMac</h2>
                        <h3>Say hello.</h3>
                        <div className="home__fourthLinks__col4">
                            <h4>
                                <Link to="/imac-24">Learn more</Link>
                                <div className="arrow">
                                    <Link to="/imac-24"> ></Link>
                                </div>
                                <Link to="/us/shop/goto/imac">Buy</Link>
                                <div className="second__arrow">
                                    <Link to="/us/shop/goto/imac"> ></Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__row">
                <div className="home__col5">
                    <Link to ="/apple-card"><span></span></Link>
                    <img src={tile_5} alt="" />
                    <div className="col5__overlay">
                        <img src={apple_card} alt="" />
                        <h3>Get up to 3% Daily Cash back<br /> with every purchase.</h3>
                        <div className="home__fourthLinks__col5">
                            <h4>
                                <Link to="/apple-card/">Learn more</Link>
                                <div className="arrow">
                                    <Link to="/apple-card/"> ></Link>
                                </div>
                                <Link to="/apply/start/?referrer=apy-200-100018">Apply now</Link>
                                <div className="second__arrow">
                                    <Link to="/apply/start/?referrer=apy-200-100018"> ></Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="home__col6">
                    <Link to ="/movie/umc.cmc.5hwonajppobtrqy7f9bs7cf6y?itscg=10000&itsct=atv-apl_hp-pmo_wch-Blush-211006"><span></span></Link>
                    <img src={tile_6} alt="" />
                    <div className="col6__overlay">'
                        <img src={apple_tv} alt="" />
                        <div className="col6__logo">
                            <img src={blush} alt="" />
                        </div>
                        <h3>Inspired by an epic true love story.</h3>
                        <div className="home__fourthLinks__col6">
                            <h4>
                                <div className="col6__link">
                                    <Link to="/movie/umc.cmc.5hwonajppobtrqy7f9bs7cf6y?itscg=10000&itsct=atv-apl_hp-pmo_wch-Blush-211006">Stream now </Link>
                                </div>
                                <Link to="/movie/umc.cmc.5hwonajppobtrqy7f9bs7cf6y?itscg=10000&itsct=atv-apl_hp-pmo_wch-Blush-211006">
                                    <div className="icon__arrow">
                                        <ArrowDropDownCircleIcon style={{maxWidth: '18px', maxHeight: '18px', minWidth: '18px', minHeight: '18px'}} />
                                    </div>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthBox;

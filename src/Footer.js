import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__disclaimers">
                    <p>
                        1. SharePlay coming soon. An Apple Fitness+ subscription is required for all participants in a SharePlay Group Workout.
                        ​​Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3<br /> or later, watchOS 7.2 or later, and tvOS 14.3 or later. To get the
                        newest features, use Apple Fitness+ with Apple Watch Series 3 or later, with watchOS 8 paired with iPhone 6s<br /> or later with
                        iOS 15, iPad with iPadOS 15, Apple TV 4K or Apple TV HD with tvOS 15.
                    </p>
                    <p>
                        2. $9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.
                    </p>
                    <p>
                        To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest
                        version of iOS or iPadOS. Update to the latest version<br /> by going to Settings > General > Software Update. Tap Download and
                        Install.
                    </p>
                    <p>
                        Available for qualifying applicants in the United States.
                    </p>
                    <p>
                        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                    <p>
                        Learn more about how Apple Card applications are evaluated at <Link to="support.apple.com/kb/HT209218" >support.apple.com/kb/HT209218</Link>.
                    </p>
                    <p>
                        Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible
                        device activation. Plan automatically renews until<br /> cancelled. Restrictions and other <Link to="apple.com/promo">terms</Link> apply.
                    </p>
                </div>
                <hr />
                <div className="footer__pages">
                    <div className="pages__col">
                        <h4>Shop and Learn</h4>
                        <h5>Mac</h5>
                        <h5>iPad</h5>
                        <h5>iPhone</h5>
                        <h5>Watch</h5>
                        <h5>TV</h5>
                        <h5>Music</h5>
                        <h5>AirPods</h5>
                        <h5>HomePod</h5>
                        <h5>iPod touch</h5>
                        <h5>AirTag</h5>
                        <h5>Accessories</h5>
                        <h5>Gift Cards</h5>
                    </div>
                    <div className="pages__col">
                        <h4>Services</h4>
                        <h5>Apple Music</h5>
                        <h5>Apple TV+</h5>
                        <h5>Apple Fitness+</h5>
                        <h5>Apple News+</h5>
                        <h5>Apple Arcade</h5>
                        <h5>iCloud</h5>
                        <h5>Apple One</h5>
                        <h5>Apple Card</h5>
                        <h5>Apple Books</h5>
                        <h5>Apple Podcasts</h5>
                        <h5>App Store</h5>
                        
                        <h4 class="second">Account</h4>
                        <h5>Manage Your Apple ID</h5>
                        <h5>Apple Store Account</h5>
                        <h5>iCloud.com</h5>
                    </div>
                    <div className="pages__col">
                        <h4>Apple Store</h4>
                        <h5>Find a Store</h5>
                        <h5>Shop Online</h5>
                        <h5>Genius Bar</h5>
                        <h5>Today at Apple</h5>
                        <h5>Apple Camp</h5>
                        <h5>Apple Store App</h5>
                        <h5>Refurbished and Clearance</h5>
                        <h5>Financing</h5>
                        <h5>Apple Trade In</h5>
                        <h5>Order Status</h5>
                        <h5>Order Status</h5>
                    </div>
                    <div className="pages__col">
                        <h4>For Business</h4>
                        <h5>Apple and Business</h5>
                        <h5>Shop for Business</h5>

                        <h4 class="second">For Education</h4>
                        <h5>Apple and Education</h5>
                        <h5>Shop for K-12</h5>
                        <h5>Shop for College</h5>

                        <h4 class="second">For Healthcare</h4>
                        <h5>Apple in Healthcare</h5>
                        <h5>Health on Apple Watch</h5>
                        <h5>Health Records on iPhone</h5>

                        <h4 class="second">For Government</h4>
                        <h5>Shop for Government</h5>
                        <h5>Shop for Veterans and Military</h5>
                    </div>
                    <div className="pages__col">
                        <h4>Apple Values</h4>
                        <h5>Accessibility</h5>
                        <h5>Education</h5>
                        <h5>Environment</h5>
                        <h5>Inclusion and Diversity</h5>
                        <h5>Privacy</h5>
                        <h5>Racial Equity and Justice</h5>
                        <h5>Supplier Responsibility</h5>

                        <h4 class="second">About Apple</h4>
                        <h5>Newsroom</h5>
                        <h5>Apple Leadership</h5>
                        <h5>Career Opportunities</h5>
                        <h5>Investors</h5>
                        <h5>Ethics & Compliance</h5>
                        <h5>Events</h5>
                        <h5>Contact Apple</h5>
                    </div>
                </div>
                <div className="footer__contact">
                        <p>More ways to shop: <Link to="/retail">Find an Apple Store</Link> or <Link to="/locate">other retailer</Link> near you. Or call 1-800-MY-APPLE.</p>
                </div>
                <hr />
                <div className="footer__info">
                    <div className="info__left">
                        <h4>Copyright © 2021 Apple Inc. All rights reserved.</h4>
                    </div>
                    <div className="info__middle">
                        <h4>
                            <Link to="/legal/privacy/">Privacy Policy</Link>
                            <div className="separator"> | </div>
                            <Link to="/legal/internet-services/terms/site.html">Terms of Use</Link>
                            <div className="separator"> | </div>
                            <Link to="/us/shop/goto/help/sales_refunds">Sales and Refunds</Link>
                            <div className="separator"> | </div>
                            <Link to="/legal/">Legal</Link>
                            <div className="separator"> | </div>
                            <Link to="/sitemap/">Site Map</Link>
                        </h4>
                    </div>
                    <div className="info__right">
                        <h4><Link to="/choose-country-region/">United States</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

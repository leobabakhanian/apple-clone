import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';
import SearchLens from './images/icons/search_lens.png';
import ShoppingBag from './images/icons/shopping_bag.png'

function Header() {
    return (
        <div className="header">
            <Link className="header__mainLogo" to ="/"><AppleIcon style={{maxWidth: '22px', maxHeight: '22px', minWidth: '22px', minHeight: '22px'}} /></Link>
            <Link to ="/us/shop/goto/store">Store</Link>
            <Link to ="/mac">Mac</Link>
            <Link to ="/ipad">iPad</Link>
            <Link to ="/iphone">iPhone</Link>
            <Link to ="/watch">Watch</Link>
            <Link to ="/tv">TV</Link>
            <Link to ="/music">Music</Link>
            <Link to ="/support">Support</Link>
            {/*<SearchIcon className="header__logo" />
            <ShoppingBagIcon className="header__logo" /> */}
            <img className="header__search" src={SearchLens} alt="" />
            <img className="header__bag" src={ShoppingBag} alt="" />
        </div>
    );
}

export default Header;


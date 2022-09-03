import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss';


const header = () => {
  return (
    <nav className='nav-menu container'>
        <div className='logo'>
            <Link to= '/'> Nomad</Link>
        </div>
        <ul>
            <li>
                <Link to= '/'>
                    HOME    
                </Link>
            </li>
            <li>
                <Link to ='/'>
                    SHOP    
                </Link>
            </li>
        </ul>
        <CartIcon />

    </nav>
  );
}

export default header

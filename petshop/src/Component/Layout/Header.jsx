import React from 'react'
import { Link } from 'react-router-dom';
import Petshop from '../../assets/Images/img1.jpeg'

export const Header = () => {
  return (
    <div className='Header'>
        <div className="header-logo">
            <img src={Petshop} alt='Petshop Logo'/>
        </div>
        <div className='navbar'>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
    </div>
  )
}
export default Header;
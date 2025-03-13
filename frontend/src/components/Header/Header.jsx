import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <img src={assets.logo_browntext} alt="" className='logo'/>
        <h2>SunEats bring sunshine to your plate!</h2>
        <p>At SunEats, we bring you delicious meals made with love and the freshest ingredients. Every bite is crafted to brighten your day and satisfy your taste buds.</p>
      </div>
    </div>
  )
}

export default Header

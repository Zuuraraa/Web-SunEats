import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {


  const[menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo_whitebg} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li></Link>
        <Link to='/Menu'><li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li></Link>
        <Link to='/MyOrder'><li onClick={()=>setMenu("My Order")} className={menu==="My Order"?"active":""}>My Order</li></Link>
        <Link to='/About'><li onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li></Link>
        <Link to='/Contact'><li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li></Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search">
          <Link to='/Cart'><img src={assets.keranjang} alt="" /></Link>
          <div className="dot"></div>
        </div>

        <div className="navbar-proflie">
          <Link to='/Profile'><img src={assets.user} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

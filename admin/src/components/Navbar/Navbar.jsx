import React, { useState } from 'react' // PENTING!
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom' // Tambahkan ini juga!

const Navbar = ({setToken}) => {
  const [activeMenu, setActiveMenu] = useState("AddMenu");

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_admin} alt="" />
      <ul className="navbar-menu">
        <li className={activeMenu === "AddMenu" ? "active" : ""} onClick={() => setActiveMenu("AddMenu")}>
          <Link to="/">Add Menu</Link>
        </li>
        <li className={activeMenu === "MyMenu" ? "active" : ""} onClick={() => setActiveMenu("MyMenu")}>
          <Link to="/MyMenu">My Menu</Link>
        </li>
        <li className={activeMenu === "MyOrder" ? "active" : ""} onClick={() => setActiveMenu("MyOrder")}>
          <Link to="/MyOrder">My Order</Link>
        </li>
      </ul>

      <div className="navbar-proflie">
          <img onClick={()=>setToken('')} src={assets.logout} alt="" />
      </div>
    </div>
  )
}

export default Navbar

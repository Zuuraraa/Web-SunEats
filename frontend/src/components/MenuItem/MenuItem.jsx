import React from 'react'
import './MenuItem.css'
import { Link } from 'react-router-dom'

const MenuItem = ({id,name,price,description,image}) => {
  
    return (
    <Link to={`/Menu/${id}`}>
        <div className='menu-item'>
            <div className="menu-container">
                <img className='menu-image' src={image} alt="" />
            </div>

        <div className="menu-info">
            <div className="menu-name">
                <p>{name}</p>
            </div>
            {/* <p className="menu-desc">{description}</p> */}
            <p className="menu-price">IDR {price}</p>
        </div>
        </div>
    </Link>
  )
}

export default MenuItem

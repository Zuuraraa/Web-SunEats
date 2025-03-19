import React, { useContext } from 'react'
import './MenuDisplay.css'
import { FoodContext } from '../../context/FoodContext'
import MenuItem from '../MenuItem/MenuItem'

const MenuDisplay = ({category}) => {

    const {menu_list} = useContext(FoodContext)

  return (
    <div className='menu-display' id='menu-display'>
      <div className="menu-display-list">
        {menu_list.map((item,index)=>{
            if (category==="All" || category===item.category) {
              return <MenuItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} /> 
            }
        })}
      </div>
    </div>
  )
}

export default MenuDisplay

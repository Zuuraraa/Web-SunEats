import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../../context/FoodContext'
import MenuItem from '../MenuItem/MenuItem';
import './Recommendation.css'

const Recommendation = () => {

  const {menu_list} = useContext(FoodContext);
  const [reccomendation, setReccomendation] = useState([]);

  useEffect(()=>{
    const bestMenu = menu_list.filter((item)=>(item.bestseller));
    setReccomendation(bestMenu.slice(0,12));
  },[])

  return (
    <div className='recommendation'>
      <h1>Chef's Recommendations</h1>

      <div className="display">
        {
          reccomendation.map((item,index)=>(
            <MenuItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default Recommendation



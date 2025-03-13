import React from 'react'
import './ExploreMenu.css'
import { filter_list } from '../../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
  
    return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Our Delicious Menu</h1>
        <div className="filter-list">
            {filter_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.filter_name?"All":item.filter_name)} key={index} className="filter-list-item">
                        <img className={category===item.filter_name?"active":""} src={item.filter_image} alt="" />
                        <p>{item.filter_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu

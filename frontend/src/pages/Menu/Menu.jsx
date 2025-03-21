import React, { useState } from 'react'
import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import MenuDisplay from '../../components/MenuDisplay/MenuDisplay';


const Menu = () => {

  const [category,setcategory] = useState("All");
  
  return (
    <div>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <MenuDisplay category={category}/>
    </div>
  )
}

export default Menu

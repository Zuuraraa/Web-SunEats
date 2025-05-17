import React, { useContext } from 'react';
import './MenuDisplay.css';
import { FoodContext } from '../../context/FoodContext';
import MenuItem from '../MenuItem/MenuItem';

const MenuDisplay = ({ category }) => {
  const { menu_list } = useContext(FoodContext);

  if (!Array.isArray(menu_list)) {
    return <p>Loading menu...</p>;
  }

  const filteredMenu = category === 'All'
    ? menu_list
    : menu_list.filter(item => item.category === category);

  return (
    <div className='menu-display' id='menu-display'>
      <div className="menu-display-list">
        {filteredMenu.map((item, index) => (
          <MenuItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay;

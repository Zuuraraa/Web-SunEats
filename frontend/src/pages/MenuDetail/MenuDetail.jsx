import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import { CartContext } from "../../context/CartContext"; // ⬅️ Tambahkan ini
import "./MenuDetail.css";

const MenuDetail = () => {
  const { MenuId } = useParams();
  const { menu_list } = useContext(FoodContext);
  const { addToCart } = useContext(CartContext); // ⬅️ Ambil fungsi addToCart
  const [foodDetail, setFoodDetail] = useState(null);

  useEffect(() => {
    const selectedFood = menu_list.find((item) => item._id === MenuId);
    if (selectedFood) {
      setFoodDetail(selectedFood);
    }
  }, [MenuId, menu_list]);

  if (!foodDetail) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart({
      _id: foodDetail._id,
      name: foodDetail.name,
      image: foodDetail.image,
      price: foodDetail.price,
    });
  };

  return (
    <div className="menu-detail-container">
      {/* Gambar Makanan */}
      <div className="food-image">
        <img src={foodDetail.image} alt={foodDetail.name} />
      </div>

      {/* Informasi Makanan */}
      <div className="food-info">
        <h1>{foodDetail.name}</h1>
        <p className="food-description">{foodDetail.description}</p>
        <p className="food-price">IDR {foodDetail.price}</p>

        {/* Tombol Tambah ke Keranjang */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuDetail;

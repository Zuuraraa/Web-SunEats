import React, { useState } from 'react'
import './AddMenu.css'
import { assets } from '../../assets/assets';
import axios from "axios"
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';

const AddMenu = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Appetizer",
    bestseller: false
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }



  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image",image)
    formData.append("bestseller", data.bestseller)
    
    const response = await axios.post(backendUrl + "/api/food/add",formData);
    console.log(response.data);
    
    if (response.data.success) {
      setData({
        name:"",
        description:"",
        price:"",
        category:"Appetizer",
        bestseller: false
      })
      setImage(false);
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // },[data])

  return (

    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Menu Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Menu Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Write menu name here' />
        </div>

        <div className="add-product-description flex-col">
          <p>Menu Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="4" placeholder='Write menu description here'></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Menu Category</p>
            <select onChange={onChangeHandler} name="category" value={data.category}>
              <option value="Appetizer">Appetizer</option>
              <option value="Beef">Beef</option>
              <option value="Chicken">Chicken</option>
              <option value="Seafood">Seafood</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price || ""} type="Number" name='price' placeholder='35000' />
          </div>
        </div>

        <div className="add-best-seller flex-row">
          <input
            type="checkbox"
            name="bestseller"
            checked={data.bestseller}
            onChange={onChangeHandler}
          />
          <label htmlFor="bestSeller">Mark as Best Seller</label>
        </div>

        <button type='submit' className='add-btn'>Add Menu</button>
      </form>
    </div>
  )
}

export default AddMenu

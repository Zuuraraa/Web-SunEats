import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/CheckOut/CheckOut'
import Menu from'./pages/Menu/Menu'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Profile from './pages/Profile/Profile'
import MenuDetail from './pages/MenuDetail/MenuDetail'
import MyOrder from './pages/MyOrder/MyOrder'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className='app'>
        <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<CheckOut/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/MyOrder' element={<MyOrder/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Menu/:MenuId' element={<MenuDetail/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

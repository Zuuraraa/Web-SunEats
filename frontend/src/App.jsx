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

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<CheckOut/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Menu/:MenuId' element={<MenuDetail/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddMenu from './pages/AddMenu/AddMenu'
import MyMenu from './pages/MyMenu/MyMenu'
import MyOrder from './pages/MyOrder/MyOrder'
import Footer from './components/Footer/Footer'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const url = "http://localhost:4000"

  return (
    <>
      <div>
        <ToastContainer/>
        <Navbar/>
        <hr />
        <Routes>
          <Route path='/' element={<AddMenu url={url}/>}/>
          <Route path='/MyMenu' element={<MyMenu url={url}/>}/>
          <Route path='/MyOrder' element={<MyOrder url={url}/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

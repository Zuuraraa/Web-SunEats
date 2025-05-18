import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddMenu from './pages/AddMenu/AddMenu'
import MyMenu from './pages/MyMenu/MyMenu'
import MyOrder from './pages/MyOrder/MyOrder'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Login from './components/Login/Login'
import { useEffect } from 'react'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  const url = "http://localhost:4000"

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <>
      {token === "" 
        ? <Login setToken={setToken} /> 
        : <>
            <ToastContainer/>
            <Navbar setToken={setToken}/>
            <hr />
            <Routes>
              <Route path='/' element={<AddMenu token={token} url={url}/>}/>
              <Route path='/MyMenu' element={<MyMenu token={token} url={url}/>}/>
              <Route path='/MyOrder' element={<MyOrder token={token} url={url}/>}/>
            </Routes>
          </>
      }
    </>
  );
}

export default App

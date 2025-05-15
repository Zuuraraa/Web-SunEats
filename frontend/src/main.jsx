import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import FoodContextProvider from './context/FoodContext.jsx'
import { CartProvider } from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <FoodContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FoodContextProvider>
    </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import FoodContextProvider from './context/FoodContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { UserProvider } from './context/userContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <FoodContextProvider>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </FoodContextProvider>
    </BrowserRouter>
)

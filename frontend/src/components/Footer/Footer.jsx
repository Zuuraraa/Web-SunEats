import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="content">
        <div className="left">
            <img src={assets.logo_noBG} alt="" className='logo' />
            <p>SunEats is your go-to destination for delicious and wholesome meals that brighten your day. With fresh ingredients and mouthwatering flavors, we bring you food that not only satisfies but also uplifts. Taste the sunshine in every bite!</p>
        </div>

        <div className="center">
            <h2>POLICIES</h2>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookies Policy</li>
            </ul>
        </div>

        <div className="right">
            <h2>SOCIAL MEDIA</h2>
            <ul className='social-links'>
                <li>
                    <img src={assets.icon_facebook} alt="" />
                    <span>Facebook</span>
                </li>

                <li>
                    <img src={assets.icon_instagram} alt="" />
                    <span>Instagram</span>
                </li>

                <li>
                    <img src={assets.icon_tiktok} alt="" />
                    <span>Tiktok</span>
                </li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 SunEats. All Rights Reserved.</p>
    </div>
  )
}

export default Footer

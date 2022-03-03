import React from 'react'
import './footer.css'
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Footer = () => {
  return (
      <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              sarabjeetsinghsomnal@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Dehradun, India
            </div>
          </div>
    
  )
}

export default Footer
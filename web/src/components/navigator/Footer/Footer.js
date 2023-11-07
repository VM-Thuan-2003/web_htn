import React from 'react'
import Picture from "../../subcomponent/Picture"
import "./style.css"

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer_about'>
        <span className='footer_about_ds'> Thành viên thực hiện</span>
        <ul className='footer_about_list'>
          <li className='footer_about_item'>
            <span className='footer_about_item_name'>Võ Minh Thuận</span>
            <span className='footer_about_item_mssv'>21161366</span>
          </li>
          <li className='footer_about_item'>
            <span className='footer_about_item_name'>Lê Quang Thương</span>
            <span className='footer_about_item_mssv'>21161367</span>
          </li>
          <li className='footer_about_item'>
            <span className='footer_about_item_name'>Nguyễn Phước Hải</span>
            <span className='footer_about_item_mssv'>21161xxx</span>
          </li>
        </ul>
      </div>
      <div className='footer_spkt'>
        <span className='footer_spkt_name'>Khoa điện - điện tử</span>
        <span className='footer_spkt_image'>
          <Picture style_logo_img={{"width":"40px",
                                    "height":"40px"}} imageUrl="logo_IEEE.png" altText="logo"/>
        </span>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import "./style.css"
import { Header, Footer } from '../../navigator/master'
import {Login, Register} from "../../pages/master"
import { useState,useEffect } from 'react'
import $ from 'jquery'
const LayoutSetup = ({update_state}) => {
  const [switchPopup, setSwitchPopup] = useState(0)

  useEffect(()=>{
    $(".register_footer_button-next_page_login").on("click",()=>{
      setSwitchPopup(1)
    })
    $(".login_footer_button-next_page_register").on("click",()=>{
      setSwitchPopup(0)
    })
  },[switchPopup])
  useEffect(()=>{
    $(document).ready(()=>{
      // lam moi lai trang
      update_state(0,"NONE")
    })
  },[update_state])
  return (
    <div id="layout_setup">
        <Header/>
        <div id="layout_setup_main">
          <div className='layout_setup_main_box'>
            {(switchPopup ? <Login update_state={update_state}/> : <Register/>)}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutSetup
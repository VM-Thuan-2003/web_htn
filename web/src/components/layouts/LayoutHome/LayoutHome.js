import React from 'react'
import "./style.css"
import { Header, Footer } from '../../navigator/master'
import DipsUser from '../../subcomponent/DipsUser'
import {Home} from "../../pages/master"
const LayoutHome = (props) => {
  return (
    <div id='layout_home'>
      <Header/>
      <div id='layout_home_main'>
        <DipsUser userName = {props["user"]["username"]} fullName = {props["user"]["fullname"]}/>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default LayoutHome
import React from 'react'
import "./style.css"
import { Header, Footer } from '../../navigator/master'
const LayoutHome = (props) => {
  return (
    <div id='layout_home'>
      <Header/>
      <div id='layout_home_main'>
        <center>
          this is page home
        </center>
      </div>
      <Footer/>
    </div>
  )
}

export default LayoutHome
import React from 'react'
import "./style.css"
import Backgoundimg from '../../subcomponent/Backgoundimg'
import { useState,useEffect } from 'react'
import { Post } from '../../Axios/AxiosPost'
// import axios from '../../../../config/AxiosConfig'
import $ from 'jquery'
const Register = () => {

  const [doneRegister, setDoneRegister] = useState(0)

  useEffect(()=>{
    $(".register_footer_button-register").on("click",()=>{
      // console.log("register",{
      //   "fullname":$("#input_fullname").val(),
      //   "username":$("#input_username").val(),
      //   "password":$("#input_password").val()
      // })
      if( $("#input_fullname").val() !== "" && $("#input_username").val() !== "" && $("#input_password").val() !== "")
        Post("create_user",{
          "fullname":$("#input_fullname").val(),
          "username":$("#input_username").val(),
          "password":$("#input_password").val()
        }).then(d=>{
          console.log(d)
          if(d === "done_create_register"){
            alert("Bạn đã đăng kí tài khoản thành công")
            setDoneRegister(1)
            $(".register_footer_button-next_page_login").click()
          }
          else
            alert("Bạn đã không đăng kí tài khoản thành công xin đăng kí với username khác")
        })
        .catch(e=>{
          console.error(e)
        })
    })
  },[doneRegister])

  return (
    <div id='Register'>
      <div className='Register_box-register'>
        <h3 className='register_title'>
            Đăng ký
          </h3>
          <div className='register_content'>
            <ul className='register_content_list'>
              <li className='register_content_item'>
                <span className='register_content_item_name'>
                  Họ và Tên
                </span>
                <span className='register_content_item_input'>
                  <input id='input_fullname' name='input_fullname' placeholder='Nhập Họ và Tên'/>
                </span>
              </li>
              <li className='register_content_item'>
                <span className='register_content_item_name'>
                  Tên đăng nhập
                </span>
                <span className='register_content_item_input'>
                  <input id='input_username' name='input_username' placeholder='Nhập Tên đăng nhập'/>
                </span>
              </li>
              <li className='register_content_item'>
                <span className='register_content_item_name'>
                  Mật khẩu
                </span>
                <span className='register_content_item_input'>
                  <input id='input_password' name='input_password' placeholder='Nhập Mật khẩu' type='password'/>
                </span>
              </li>
              {/* <li className='register_content_item'>
                <span className='register_content_item_name'>
                  Nhập lại mật khẩu
                </span>
                <span className='register_content_item_input'>
                  <input id='input_confirmPassword' name='input_confirmPassword' placeholder='Nhập lại Mật khẩu' type='password'/>
                </span>
              </li> */}
            </ul>
          </div>
          <div className='register_footer'>
            <div className='register_footer_button register_footer_button-register'>
              <span>
                Đăng Ký
              </span>
            </div>
            <div className='register_footer_button register_footer_button-next_page_login'>
              <span>
                Đăng nhập
              </span>
            </div>
          </div>
      </div>
      <div className='Register_box-backgound'>
        <Backgoundimg imageUrl="backgound_register.jpg" altText="Background for Page Rgister"/>
      </div>
    </div>
  )
}

export default Register
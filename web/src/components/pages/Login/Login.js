import React,{useEffect} from 'react'
import "./style.css"
import Backgoundimg from '../../subcomponent/Backgoundimg'
import { Get } from '../../Axios/AxiosGet'
import $ from "jquery"

const Login = ({update_state}) => {
  useEffect(()=>{
    $(".login_footer_button-login").on("click",()=>{
      console.log("click",{
        "username":$("#input_login_username").val(),
        "password":$("#input_login_password").val()
      })
      // update_state(1, "thuan")
      if($("#input_login_username").val()!=="" &&$("#input_login_password").val()!=="")
        Get("login_user/"+$("#input_login_username").val()+"/"+$("#input_login_password").val())
        .then(d=>{
          console.log(d)
          if(d["state"] === "true_login")
            update_state(1, d["data_user"])
          else
            update_state(0, "NONE")
        })
        .catch(e=>{
          console.error(e)
        })
    })
  },[update_state])
  return (
    <div id='Login'>
      <div className='Login_box-login'>
        <h3 className='login_title'>
            Đăng nhập
          </h3>
          <div className='login_content'>
            <ul className='login_content_list'>
              <li className='login_content_item'>
                <span className='login_content_item_name'>
                  Tên đăng nhập
                </span>
                <span className='login_content_item_input'>
                  <input id='input_login_username' name='input_login_username' placeholder='Nhập Tên đăng nhập' type='text'/>
                </span>
              </li>
              <li className='login_content_item'>
                <span className='login_content_item_name'>
                  Mật khẩu
                </span>
                <span className='login_content_item_input'>
                  <input id='input_login_password' name='input_login_password' placeholder='Nhập Mật khẩu' type='password'/>
                </span>
              </li>
            </ul>
          </div>
          <div className='login_footer'>
            <div className='login_footer_button login_footer_button-login'>
              <span>
                Đăng nhập
              </span>
            </div>
            <div className='login_footer_button login_footer_button-next_page_register'>
              <span>
                Đăng ký
              </span>
            </div>
          </div>
      </div>
      <div className='Login_box-backgound'>
        <Backgoundimg imageUrl="backgound_register.jpg" altText="Background for Page Rgister"/>
      </div>
    </div>
  )
}

export default Login
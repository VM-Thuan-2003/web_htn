import React,{useEffect} from 'react'
import Picture from "../subcomponent/Picture"
import "./styleDipsUser.css"

const DipsUser = (props) => {

    useEffect(()=>{
        
    },[])

    return (
    <div className='info'>
        <span className='info_icon'>
            <Picture style_logo_img={{"width":"52px",
                                    "height":"52px"}} imageUrl="icon_user.jpg" altText="icon_user"/>
        </span>
        <span className='info_name'>
            {props.fullName}
        </span>
    </div>
  )
}

export default DipsUser
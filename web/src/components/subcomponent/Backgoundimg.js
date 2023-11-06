import React from 'react'

const style_logo = {
    "width" : "80%",
    "display" : "flex",
    "justifyContent" : "center",
    "alignItems" : "center"
}
const style_logo_img = {
    "objectFit" : "center",
    "borderRadius" : "24px",
    "boxShadow" : "8px 10px 10px gray"
}

const Backgoundimg = (props) => {
  return (
    <div style={style_logo}>
        <img style={style_logo_img} src={require("../../components/images/" + props.imageUrl)} alt={props.altText} />
    </div>
  )
}

export default Backgoundimg
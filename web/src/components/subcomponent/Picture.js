import React from 'react';

const style_logo = {

}
const style_logo_img = {
  "width":"40px",
  "height":"40px"
}
// Tạo một component ImageDisplay
function Picture(props) {
  return (
    <div style={style_logo}>
      <img style={style_logo_img} src={require("../../components/images/" + props.imageUrl)} alt={props.altText} />
    </div>
  );
}

export default Picture;
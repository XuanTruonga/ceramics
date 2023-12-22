/* eslint-disable jsx-a11y/alt-text */
import images from "acssets/imgs/imgs";
import { useState } from "react";


function Img({src, alt, preventive: custom = images.erroImg, ...passProps}) {
   const[preventive, setPreventive] = useState('')
   return ( 
      <img
         alt={alt}
         src={preventive || src}
         onError={()=>setPreventive(custom)}
      >
      </img>
    );
}

export default Img;
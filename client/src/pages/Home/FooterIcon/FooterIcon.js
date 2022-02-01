import React from "react";
import "./FooterIcon.css";
import { GrFacebookOption, GrTwitter, GrInstagram  } from "react-icons/gr";

function FooterIcon() {
  return (
    <div className='footericon_container'>
        <div  className='footericon_iconstext' >
           <div className='footericon_icons'>
           <a href="https://www.facebook.com">  <GrFacebookOption className='footericon_icon' /></a>
           <a href="https://www.twitter.com">    <GrTwitter className='footericon_icon' /></a>
           <a href="https://www.instagram.com">    <GrInstagram className='footericon_icon' /></a>
            </div>
            <div >
                <span className='footericon_text'>Terms &amp; Conditions</span>
                <span className='footericon_text' >Privacy Policy</span>
            </div>
        </div>

    </div>

  );
}

export default FooterIcon;

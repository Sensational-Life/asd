import React from "react";
import "./FooterIcon.css";
import { GrFacebookOption, GrTwitter, GrInstagram  } from "react-icons/gr";
import { Link } from "react-router-dom";

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
                <Link to="/terms-conditions" className='footericon_text'>Terms &amp; Conditions</Link>
                <Link to="/privacy-policy" className='footericon_text' >Privacy Policy</Link>
            </div>
        </div>

    </div>

  );
}

export default FooterIcon;

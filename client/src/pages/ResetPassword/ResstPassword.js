import React,{ useState }  from "react";
import "./ResetPassword.css";
import { Link } from 'react-router-dom';
import rigsterimg from '../ResetPassword/Reset password image.png' 

function ResetPassword() {
  const [buttonShow, setButtonShow ] =useState(false);

  return <div className='restPassword-container'>

             <div className='resetPassword-form-div'>
                  <h6
                        className='p-ResetPassword'>
                          Reset Password
                  </h6 >
                   
                   <h6 className='Please-type-password'>
                   Please type your new password

                   </h6>
                   {/*  Rigster form  */}

                  <form className='restPassword-form'>

                      {/*Password  */}
                      <input
                        className='input-form'
                        required
                       id="password"
                       type="password"
                       placeholder="Password"
                       name="Password"
                       />
                      {/*Confirm-password */}
                     <input
                        className='input-form'
                        required
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm-Password"
                        name="confirm-Password"
                        />
                       {/* Register-Button */}
						
					          	<button className="ResetPassword_button"
				              		onMouseEnter={() => setButtonShow(true)}
				              		onMouseLeave={() => setButtonShow(false)}
					          	>   SUBMIT</button>
		
				           	{buttonShow && <button className="ResetPassword_button_hover">SUBMIT</button>}

                  </form>
              <div className='already-have-account-div'>

                  <p>
                     Already have an account? <span><Link  className='link-sgining' to={"/Login"}>Sign in</Link></span>
                  </p>
            </div>
        </div>

         {/* img/side/sectio */}
       <div className='reset-side-img'>
         <img className="register_img" src={rigsterimg} alt="register-form" />
      </div>

  </div>;
}

export default ResetPassword;

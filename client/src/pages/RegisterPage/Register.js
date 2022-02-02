import React,{ useState }  from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import rigsterimg from '../RegisterPage/Regester image.png' 


function Register() {
  const [buttonShow, setButtonShow ] =useState(false);

  return <div className='register-container'>

             <div className='register-form-div'>
                  <h6
                        className='p-register'>
                            Register with us
                  </h6>
                   {/*  Rigster form  */}

                  <form className='form'>

                      {/*Name  */}
                     <input
                         className='input-form'
                          required
                          id="name"
                          type="text"
                          placeholder="Nmae"
                         name="Name"
                            />

                      {/*Email  */}
                      <input
                          className='input-form'
                          required
                           id="email"
                          type="text"
                          placeholder="Email"
                          name="email"
                            />
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
						
					          	<button className="Register_button"
				              		onMouseEnter={() => setButtonShow(true)}
				              		onMouseLeave={() => setButtonShow(false)}
					          	> REGISTER</button>
		
				           	{buttonShow && <button className="Register_button_hover">REGISTER</button>}

                  </form>
              <div className='already-have-account-div'>

                  <p>
                     Already have an account? <span><Link  className='link-sgining' to={"/Login"}>Sign in</Link></span>
                  </p>
            </div>
        </div>

         {/* img/side/sectio */}
       <div className='side-img'>
         <img className="register_img" src={rigsterimg} alt="register-form" />
      </div>

  </div>;
}

export default Register;

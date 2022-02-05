import React,{ useState }  from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Loginimg from '../Login/Sign in image(1).png'


function Login() {
	const [buttonShow, setButtonShow ] =useState(false);
return <div className='Login-container'>
	        <div className='Login-form-div'>
	               <h6 className='p-Login'>Sign In </h6>
		           <p className="to-conutinue-text"> To continue </p>
	             {/* form */}
	            <form className='Login-form'>
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
		         {/* Sign in-Button */}
						<button className="Login_button"
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
						> Sign In</button>
					{buttonShow && <button className="Login_button_hover">Sign In</button>}
                        {/* CheckBox  remember me and Forogt password */}
					<div className="login-remember-me">
                        <input type="checkbox" 
						   className="Login-remebere"
						    name="remember-me"
						     /> Remember me
                         {/* forgot password */}
						 <span className="Login-Forogt-password"> Forgot <Link  
						   className="Login-forgotPassword-link"
						 to="/ResetPassword">Password</Link></span>
		            </div>
	            </form>
                 {/* link to Sign up if you have an account */}
	             <div className='already-have-account-div'>
		            <p> Don't have an account? <span><Link  className='login-link-sgining' to={"/Register"}> Sign Up</Link></span></p>
		        </div>
	        </div>
           {/* img/side/sectio */}
             <div className='Login-img-div'>
               <img className="Login_img" src={Loginimg} alt="register-form" />
            </div>
        </div>;
}

export default Login;

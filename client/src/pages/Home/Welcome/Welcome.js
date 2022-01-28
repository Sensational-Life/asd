import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import { FaCheck } from "react-icons/fa";




function Welcome() {
	const [buttonShow, setButtonShow ] =useState(false);


  return (
		<div className="welcome_main_container">
			<div className="welcome_container">
				<div className="welcome_text_container">
					<div className="welcome_header">
						<span>Welcome to </span>
						<br />
						<span>SENsational Life</span>
					</div>
					<div className="welcome_text">
					  <span className="welcome_icon_box" ><FaCheck className="welcome_circle" /></span>
						<span>	Supporting Families	</span>
						<br />
						<span className="welcome_icon_box1" ><FaCheck className="welcome_circle" /></span>
						<span>Empowering Neuradiverse Families</span>
					</div>
					<Link to="/register">
						{" "}
						<button className="welcome_button" 
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
						>Click here to Register</button>
					</Link>
					{buttonShow && <button className="welcome_button_hover">Click here to Register</button>}
				</div>
				<div className="welcome_img_container">
					<div className="welcome_img_color">
						<div className="welcome_img">
							<img
								src="https://i.postimg.cc/kgnHYHV3/autistic-little-girl-close-up-2021-09-24-04-06-23-utc.jpg"
								alt="img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;

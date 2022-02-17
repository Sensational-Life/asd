import React from "react";
import { useScrollTo } from "react-use-window-scroll";
import "./ScrollDown.css";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function ScrollDown() {
	const scrollTo = useScrollTo();

	return (
		<button
			className="scrolldown-container"
			onClick={() => scrollTo({ top: 1100, left: 0, behavior: "smooth" })}
		>
			<span className="scrolldown-text">SCROLL DOWN</span>
			<HiOutlineChevronDoubleDown className="scrolldown_icon" />
		</button>
	);
}

export default ScrollDown;

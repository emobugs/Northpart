import React from "react";
import Slider from "./Slider";

const Hero: React.FC = () => {
	// const { t, ready } = useTranslation();
	return (
		<div id="hero" className="pt-15">
			<Slider />
		</div>
	);
};

export default Hero;

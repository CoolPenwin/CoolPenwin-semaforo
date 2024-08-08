import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="Semaforo">
			<div className="luz rojo brilli"></div>
			<div className="luz naranja"></div>
			<div className="luz verde"></div>

		</div>
	);
};

export default Home;

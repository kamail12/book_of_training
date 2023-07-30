import React, { useState } from "react";
import { Box } from "@mui/material";

//Components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercise] = useState([]);

	console.log(bodyPart);

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercise={setExercise}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercise={setExercise}
				exercises={exercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;

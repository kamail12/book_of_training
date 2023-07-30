import React, { useState } from "react";
import { Box } from "@mui/material";

//Components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercise] = useState([]);

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
				setBodyPart={setBodyPart}
			/>
		</Box>
	);
};

export default Home;

import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exercisesOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercise, exercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const indexOfLastExercises = currentPage * exercisesPerPage;
	const indexOfFirstExercises = indexOfLastExercises - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercises,
		indexOfLastExercises
	);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: "1800", behavior: "smooth" });
	};

	useEffect(() => {
		const fetchExercisedata = async () => {
			let exerciseData = [];

			if (bodyPart === "all") {
				exerciseData = await fetchData(
					"https://exercisedb.p.rapidapi.com/exercises",
					exercisesOptions
				);
			} else {
				exerciseData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exercisesOptions
				);
			}
			setExercise(exerciseData);
		};
		//Bez wywołania nie było by zadnego efektu bo funkcja jest stworzona ale nie uzyta
		fetchExercisedata();
	}, [bodyPart, setExercise]);

	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h3" mb="46px">
				Showing results
			</Typography>
			<Stack
				direction="row"
				sx={{
					gap: { lg: "110px", xs: "50px" },
				}}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>

			{/* Pagination */}

			<Stack mt="100px" alignItems="center">
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
